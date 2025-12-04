goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56106 = (function (meta56107){
this.meta56107 = meta56107;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56108,meta56107__$1){
var self__ = this;
var _56108__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56106(meta56107__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56108){
var self__ = this;
var _56108__$1 = this;
return self__.meta56107;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56106.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56106.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56121 = (arguments.length - (1));
switch (G__56121) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56106.prototype.apply = (function (self__,args56113){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56113)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56106.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56290){
var state_val_56291 = (state_56290[(1)]);
if((state_val_56291 === (7))){
var inst_56141 = (state_56290[(2)]);
var inst_56142 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56147 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56148 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56147,19,inst_56141,"Buffer should not flush automatically without timer"];
var inst_56149 = cljs.core.PersistentHashMap.fromArrays(inst_56142,inst_56148);
var inst_56150 = cljs.test.report.call(null,inst_56149);
var state_56290__$1 = state_56290;
var statearr_56294_56897 = state_56290__$1;
(statearr_56294_56897[(2)] = inst_56150);

(statearr_56294_56897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (20))){
var inst_56132 = (state_56290[(7)]);
var inst_56234 = (state_56290[(2)]);
var inst_56235 = (inst_56132.cljs$core$IFn$_invoke$arity$0 ? inst_56132.cljs$core$IFn$_invoke$arity$0() : inst_56132.call(null));
var inst_56236 = cljs.core.async.timeout((20));
var state_56290__$1 = (function (){var statearr_56295 = state_56290;
(statearr_56295[(8)] = inst_56234);

(statearr_56295[(9)] = inst_56235);

return statearr_56295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56290__$1,(21),inst_56236);
} else {
if((state_val_56291 === (27))){
var inst_56261 = (state_56290[(10)]);
var inst_56272 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56273 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56274 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56275 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56276 = cljs.core.cons(inst_56275,inst_56261);
var inst_56277 = (new cljs.core.List(null,inst_56276,null,(1),null));
var inst_56278 = (new cljs.core.List(null,inst_56274,inst_56277,(2),null));
var inst_56279 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56273,29,inst_56278,"Subsequent flush should work"];
var inst_56280 = cljs.core.PersistentHashMap.fromArrays(inst_56272,inst_56279);
var inst_56281 = cljs.test.report.call(null,inst_56280);
var state_56290__$1 = state_56290;
var statearr_56302_56899 = state_56290__$1;
(statearr_56302_56899[(2)] = inst_56281);

(statearr_56302_56899[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (1))){
var inst_56125 = (state_56290[(11)]);
var inst_56127 = (state_56290[(12)]);
var inst_56125__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56126 = cljs.core.PersistentVector.EMPTY;
var inst_56127__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56126);
var inst_56128 = (function (){var input_ch = inst_56125__$1;
var results = inst_56127__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56129 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56130 = [inst_56125__$1,inst_56128];
var inst_56131 = cljs.core.PersistentHashMap.fromArrays(inst_56129,inst_56130);
var inst_56132 = bb_web_ds_tools.components.async_buffer.create(inst_56131);
var state_56290__$1 = (function (){var statearr_56304 = state_56290;
(statearr_56304[(11)] = inst_56125__$1);

(statearr_56304[(12)] = inst_56127__$1);

(statearr_56304[(7)] = inst_56132);

return statearr_56304;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56290__$1,(2),inst_56125__$1,(1));
} else {
if((state_val_56291 === (24))){
var inst_56239 = (state_56290[(2)]);
var inst_56240 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56241 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56242 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56241,29,inst_56239,"Subsequent flush should work"];
var inst_56243 = cljs.core.PersistentHashMap.fromArrays(inst_56240,inst_56242);
var inst_56244 = cljs.test.report.call(null,inst_56243);
var state_56290__$1 = state_56290;
var statearr_56305_56904 = state_56290__$1;
(statearr_56305_56904[(2)] = inst_56244);

(statearr_56305_56904[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (4))){
var inst_56139 = (state_56290[(2)]);
var state_56290__$1 = (function (){var statearr_56306 = state_56290;
(statearr_56306[(13)] = inst_56139);

return statearr_56306;
})();
var statearr_56307_56905 = state_56290__$1;
(statearr_56307_56905[(2)] = null);

(statearr_56307_56905[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (15))){
var inst_56188 = (state_56290[(2)]);
var inst_56189 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56190 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56191 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56190,24,inst_56188,"Manual flush should flush all items"];
var inst_56192 = cljs.core.PersistentHashMap.fromArrays(inst_56189,inst_56191);
var inst_56193 = cljs.test.report.call(null,inst_56192);
var state_56290__$1 = state_56290;
var statearr_56312_56906 = state_56290__$1;
(statearr_56312_56906[(2)] = inst_56193);

(statearr_56312_56906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (21))){
var inst_56238 = (state_56290[(2)]);
var state_56290__$1 = (function (){var statearr_56313 = state_56290;
(statearr_56313[(14)] = inst_56238);

return statearr_56313;
})();
var statearr_56314_56908 = state_56290__$1;
(statearr_56314_56908[(2)] = null);

(statearr_56314_56908[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (13))){
var inst_56127 = (state_56290[(12)]);
var inst_56207 = (state_56290[(15)]);
var inst_56208 = (state_56290[(16)]);
var _ = (function (){var statearr_56315 = state_56290;
(statearr_56315[(4)] = cljs.core.cons((16),(state_56290[(4)])));

return statearr_56315;
})();
var inst_56199 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56200 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56201 = [(1),(2)];
var inst_56202 = (new cljs.core.PersistentVector(null,2,(5),inst_56200,inst_56201,null));
var inst_56203 = [inst_56202];
var inst_56204 = (new cljs.core.PersistentVector(null,1,(5),inst_56199,inst_56203,null));
var inst_56205 = cljs.core.deref(inst_56127);
var inst_56206 = (new cljs.core.List(null,inst_56205,null,(1),null));
var inst_56207__$1 = (new cljs.core.List(null,inst_56204,inst_56206,(2),null));
var inst_56208__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56207__$1);
var state_56290__$1 = (function (){var statearr_56316 = state_56290;
(statearr_56316[(15)] = inst_56207__$1);

(statearr_56316[(16)] = inst_56208__$1);

return statearr_56316;
})();
if(cljs.core.truth_(inst_56208__$1)){
var statearr_56317_56909 = state_56290__$1;
(statearr_56317_56909[(1)] = (17));

} else {
var statearr_56320_56910 = state_56290__$1;
(statearr_56320_56910[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (22))){
var inst_56127 = (state_56290[(12)]);
var inst_56261 = (state_56290[(10)]);
var inst_56262 = (state_56290[(17)]);
var _ = (function (){var statearr_56321 = state_56290;
(statearr_56321[(4)] = cljs.core.cons((25),(state_56290[(4)])));

return statearr_56321;
})();
var inst_56250 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56251 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56252 = [(1),(2)];
var inst_56253 = (new cljs.core.PersistentVector(null,2,(5),inst_56251,inst_56252,null));
var inst_56254 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56255 = [(3)];
var inst_56256 = (new cljs.core.PersistentVector(null,1,(5),inst_56254,inst_56255,null));
var inst_56257 = [inst_56253,inst_56256];
var inst_56258 = (new cljs.core.PersistentVector(null,2,(5),inst_56250,inst_56257,null));
var inst_56259 = cljs.core.deref(inst_56127);
var inst_56260 = (new cljs.core.List(null,inst_56259,null,(1),null));
var inst_56261__$1 = (new cljs.core.List(null,inst_56258,inst_56260,(2),null));
var inst_56262__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56261__$1);
var state_56290__$1 = (function (){var statearr_56367 = state_56290;
(statearr_56367[(10)] = inst_56261__$1);

(statearr_56367[(17)] = inst_56262__$1);

return statearr_56367;
})();
if(cljs.core.truth_(inst_56262__$1)){
var statearr_56368_56912 = state_56290__$1;
(statearr_56368_56912[(1)] = (26));

} else {
var statearr_56369_56913 = state_56290__$1;
(statearr_56369_56913[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (6))){
var inst_56132 = (state_56290[(7)]);
var inst_56183 = (state_56290[(2)]);
var inst_56184 = (inst_56132.cljs$core$IFn$_invoke$arity$0 ? inst_56132.cljs$core$IFn$_invoke$arity$0() : inst_56132.call(null));
var inst_56185 = cljs.core.async.timeout((20));
var state_56290__$1 = (function (){var statearr_56371 = state_56290;
(statearr_56371[(18)] = inst_56183);

(statearr_56371[(19)] = inst_56184);

return statearr_56371;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56290__$1,(12),inst_56185);
} else {
if((state_val_56291 === (28))){
var inst_56262 = (state_56290[(17)]);
var inst_56283 = (state_56290[(2)]);
var _ = (function (){var statearr_56372 = state_56290;
(statearr_56372[(4)] = cljs.core.rest((state_56290[(4)])));

return statearr_56372;
})();
var state_56290__$1 = (function (){var statearr_56373 = state_56290;
(statearr_56373[(20)] = inst_56283);

return statearr_56373;
})();
var statearr_56374_56917 = state_56290__$1;
(statearr_56374_56917[(2)] = inst_56262);

(statearr_56374_56917[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (25))){
var _ = (function (){var statearr_56375 = state_56290;
(statearr_56375[(4)] = cljs.core.rest((state_56290[(4)])));

return statearr_56375;
})();
var state_56290__$1 = state_56290;
var ex56370 = (state_56290__$1[(2)]);
var statearr_56376_56919 = state_56290__$1;
(statearr_56376_56919[(5)] = ex56370);


var statearr_56377_56921 = state_56290__$1;
(statearr_56377_56921[(1)] = (24));

(statearr_56377_56921[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (17))){
var inst_56207 = (state_56290[(15)]);
var inst_56210 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56211 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56212 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56213 = cljs.core.cons(inst_56212,inst_56207);
var inst_56214 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56211,24,inst_56213,"Manual flush should flush all items"];
var inst_56215 = cljs.core.PersistentHashMap.fromArrays(inst_56210,inst_56214);
var inst_56216 = cljs.test.report.call(null,inst_56215);
var state_56290__$1 = state_56290;
var statearr_56385_56922 = state_56290__$1;
(statearr_56385_56922[(2)] = inst_56216);

(statearr_56385_56922[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (3))){
var inst_56136 = (state_56290[(2)]);
var inst_56137 = cljs.core.async.timeout((20));
var state_56290__$1 = (function (){var statearr_56386 = state_56290;
(statearr_56386[(21)] = inst_56136);

return statearr_56386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56290__$1,(4),inst_56137);
} else {
if((state_val_56291 === (12))){
var inst_56187 = (state_56290[(2)]);
var state_56290__$1 = (function (){var statearr_56387 = state_56290;
(statearr_56387[(22)] = inst_56187);

return statearr_56387;
})();
var statearr_56388_56923 = state_56290__$1;
(statearr_56388_56923[(2)] = null);

(statearr_56388_56923[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (2))){
var inst_56125 = (state_56290[(11)]);
var inst_56134 = (state_56290[(2)]);
var state_56290__$1 = (function (){var statearr_56389 = state_56290;
(statearr_56389[(23)] = inst_56134);

return statearr_56389;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56290__$1,(3),inst_56125,(2));
} else {
if((state_val_56291 === (23))){
var inst_56286 = (state_56290[(2)]);
var inst_56287 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56290__$1 = (function (){var statearr_56390 = state_56290;
(statearr_56390[(24)] = inst_56286);

return statearr_56390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56290__$1,inst_56287);
} else {
if((state_val_56291 === (19))){
var inst_56208 = (state_56290[(16)]);
var inst_56229 = (state_56290[(2)]);
var _ = (function (){var statearr_56392 = state_56290;
(statearr_56392[(4)] = cljs.core.rest((state_56290[(4)])));

return statearr_56392;
})();
var state_56290__$1 = (function (){var statearr_56395 = state_56290;
(statearr_56395[(25)] = inst_56229);

return statearr_56395;
})();
var statearr_56397_56926 = state_56290__$1;
(statearr_56397_56926[(2)] = inst_56208);

(statearr_56397_56926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (11))){
var inst_56159 = (state_56290[(26)]);
var inst_56180 = (state_56290[(2)]);
var _ = (function (){var statearr_56398 = state_56290;
(statearr_56398[(4)] = cljs.core.rest((state_56290[(4)])));

return statearr_56398;
})();
var state_56290__$1 = (function (){var statearr_56399 = state_56290;
(statearr_56399[(27)] = inst_56180);

return statearr_56399;
})();
var statearr_56400_56930 = state_56290__$1;
(statearr_56400_56930[(2)] = inst_56159);

(statearr_56400_56930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (9))){
var inst_56158 = (state_56290[(28)]);
var inst_56161 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56162 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56163 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56164 = cljs.core.cons(inst_56163,inst_56158);
var inst_56165 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56162,19,inst_56164,"Buffer should not flush automatically without timer"];
var inst_56166 = cljs.core.PersistentHashMap.fromArrays(inst_56161,inst_56165);
var inst_56167 = cljs.test.report.call(null,inst_56166);
var state_56290__$1 = state_56290;
var statearr_56401_56937 = state_56290__$1;
(statearr_56401_56937[(2)] = inst_56167);

(statearr_56401_56937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (5))){
var inst_56127 = (state_56290[(12)]);
var inst_56158 = (state_56290[(28)]);
var inst_56159 = (state_56290[(26)]);
var _ = (function (){var statearr_56402 = state_56290;
(statearr_56402[(4)] = cljs.core.cons((8),(state_56290[(4)])));

return statearr_56402;
})();
var inst_56157 = cljs.core.deref(inst_56127);
var inst_56158__$1 = (new cljs.core.List(null,inst_56157,null,(1),null));
var inst_56159__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56158__$1);
var state_56290__$1 = (function (){var statearr_56404 = state_56290;
(statearr_56404[(28)] = inst_56158__$1);

(statearr_56404[(26)] = inst_56159__$1);

return statearr_56404;
})();
if(cljs.core.truth_(inst_56159__$1)){
var statearr_56405_56939 = state_56290__$1;
(statearr_56405_56939[(1)] = (9));

} else {
var statearr_56407_56940 = state_56290__$1;
(statearr_56407_56940[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (14))){
var inst_56125 = (state_56290[(11)]);
var inst_56232 = (state_56290[(2)]);
var state_56290__$1 = (function (){var statearr_56409 = state_56290;
(statearr_56409[(29)] = inst_56232);

return statearr_56409;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56290__$1,(20),inst_56125,(3));
} else {
if((state_val_56291 === (26))){
var inst_56261 = (state_56290[(10)]);
var inst_56264 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56265 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56266 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56267 = cljs.core.cons(inst_56266,inst_56261);
var inst_56268 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56265,29,inst_56267,"Subsequent flush should work"];
var inst_56269 = cljs.core.PersistentHashMap.fromArrays(inst_56264,inst_56268);
var inst_56270 = cljs.test.report.call(null,inst_56269);
var state_56290__$1 = state_56290;
var statearr_56410_56941 = state_56290__$1;
(statearr_56410_56941[(2)] = inst_56270);

(statearr_56410_56941[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (16))){
var _ = (function (){var statearr_56411 = state_56290;
(statearr_56411[(4)] = cljs.core.rest((state_56290[(4)])));

return statearr_56411;
})();
var state_56290__$1 = state_56290;
var ex56408 = (state_56290__$1[(2)]);
var statearr_56412_56942 = state_56290__$1;
(statearr_56412_56942[(5)] = ex56408);


var statearr_56413_56943 = state_56290__$1;
(statearr_56413_56943[(1)] = (15));

(statearr_56413_56943[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (10))){
var inst_56158 = (state_56290[(28)]);
var inst_56169 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56170 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56171 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56172 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56173 = cljs.core.cons(inst_56172,inst_56158);
var inst_56174 = (new cljs.core.List(null,inst_56173,null,(1),null));
var inst_56175 = (new cljs.core.List(null,inst_56171,inst_56174,(2),null));
var inst_56176 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56170,19,inst_56175,"Buffer should not flush automatically without timer"];
var inst_56177 = cljs.core.PersistentHashMap.fromArrays(inst_56169,inst_56176);
var inst_56178 = cljs.test.report.call(null,inst_56177);
var state_56290__$1 = state_56290;
var statearr_56427_56944 = state_56290__$1;
(statearr_56427_56944[(2)] = inst_56178);

(statearr_56427_56944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (18))){
var inst_56207 = (state_56290[(15)]);
var inst_56218 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56219 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56220 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56221 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56222 = cljs.core.cons(inst_56221,inst_56207);
var inst_56223 = (new cljs.core.List(null,inst_56222,null,(1),null));
var inst_56224 = (new cljs.core.List(null,inst_56220,inst_56223,(2),null));
var inst_56225 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56219,24,inst_56224,"Manual flush should flush all items"];
var inst_56226 = cljs.core.PersistentHashMap.fromArrays(inst_56218,inst_56225);
var inst_56227 = cljs.test.report.call(null,inst_56226);
var state_56290__$1 = state_56290;
var statearr_56428_56947 = state_56290__$1;
(statearr_56428_56947[(2)] = inst_56227);

(statearr_56428_56947[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56291 === (8))){
var _ = (function (){var statearr_56429 = state_56290;
(statearr_56429[(4)] = cljs.core.rest((state_56290[(4)])));

return statearr_56429;
})();
var state_56290__$1 = state_56290;
var ex56414 = (state_56290__$1[(2)]);
var statearr_56430_56948 = state_56290__$1;
(statearr_56430_56948[(5)] = ex56414);


var statearr_56431_56949 = state_56290__$1;
(statearr_56431_56949[(1)] = (7));

(statearr_56431_56949[(5)] = null);



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
var statearr_56432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56432[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56432[(1)] = (1));

return statearr_56432;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56290){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56290);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56437){var ex__32294__auto__ = e56437;
var statearr_56438_56950 = state_56290;
(statearr_56438_56950[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56290[(4)]))){
var statearr_56439_56951 = state_56290;
(statearr_56439_56951[(1)] = cljs.core.first((state_56290[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56952 = state_56290;
state_56290 = G__56952;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56290){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56290);
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

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56107","meta56107",-1153155889,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56106.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56106.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56106");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56106.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56106");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56106.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56106 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56106(meta56107){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56106(meta56107));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56106(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56441 = (function (meta56442){
this.meta56442 = meta56442;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56443,meta56442__$1){
var self__ = this;
var _56443__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56441(meta56442__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56443){
var self__ = this;
var _56443__$1 = this;
return self__.meta56442;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56441.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56441.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56445 = (arguments.length - (1));
switch (G__56445) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56441.prototype.apply = (function (self__,args56444){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56444)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56441.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56672){
var state_val_56674 = (state_56672[(1)]);
if((state_val_56674 === (7))){
var inst_56470 = (state_56672[(2)]);
var inst_56471 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56472 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56473 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56472,47,inst_56470,"Should not flush before timeout"];
var inst_56474 = cljs.core.PersistentHashMap.fromArrays(inst_56471,inst_56473);
var inst_56475 = cljs.test.report.call(null,inst_56474);
var state_56672__$1 = state_56672;
var statearr_56676_56954 = state_56672__$1;
(statearr_56676_56954[(2)] = inst_56475);

(statearr_56676_56954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (20))){
var inst_56565 = (state_56672[(2)]);
var inst_56566 = cljs.core.async.timeout((50));
var state_56672__$1 = (function (){var statearr_56677 = state_56672;
(statearr_56677[(7)] = inst_56565);

return statearr_56677;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56672__$1,(21),inst_56566);
} else {
if((state_val_56674 === (27))){
var _ = (function (){var statearr_56678 = state_56672;
(statearr_56678[(4)] = cljs.core.rest((state_56672[(4)])));

return statearr_56678;
})();
var state_56672__$1 = state_56672;
var ex56675 = (state_56672__$1[(2)]);
var statearr_56679_56955 = state_56672__$1;
(statearr_56679_56955[(5)] = ex56675);


var statearr_56680_56956 = state_56672__$1;
(statearr_56680_56956[(1)] = (26));

(statearr_56680_56956[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (1))){
var inst_56455 = (state_56672[(8)]);
var inst_56457 = (state_56672[(9)]);
var inst_56455__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56456 = cljs.core.PersistentVector.EMPTY;
var inst_56457__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56456);
var inst_56458 = (function (){var input_ch = inst_56455__$1;
var results = inst_56457__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56459 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56460 = [inst_56455__$1,(100),inst_56458];
var inst_56461 = cljs.core.PersistentHashMap.fromArrays(inst_56459,inst_56460);
var inst_56462 = bb_web_ds_tools.components.async_buffer.create(inst_56461);
var state_56672__$1 = (function (){var statearr_56681 = state_56672;
(statearr_56681[(8)] = inst_56455__$1);

(statearr_56681[(9)] = inst_56457__$1);

(statearr_56681[(10)] = inst_56462);

return statearr_56681;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56672__$1,(2),inst_56455__$1,(1));
} else {
if((state_val_56674 === (24))){
var inst_56457 = (state_56672[(9)]);
var inst_56593 = (state_56672[(11)]);
var inst_56594 = (state_56672[(12)]);
var _ = (function (){var statearr_56682 = state_56672;
(statearr_56682[(4)] = cljs.core.cons((27),(state_56672[(4)])));

return statearr_56682;
})();
var inst_56585 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56586 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56587 = [(1),(2)];
var inst_56588 = (new cljs.core.PersistentVector(null,2,(5),inst_56586,inst_56587,null));
var inst_56589 = [inst_56588];
var inst_56590 = (new cljs.core.PersistentVector(null,1,(5),inst_56585,inst_56589,null));
var inst_56591 = cljs.core.deref(inst_56457);
var inst_56592 = (new cljs.core.List(null,inst_56591,null,(1),null));
var inst_56593__$1 = (new cljs.core.List(null,inst_56590,inst_56592,(2),null));
var inst_56594__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56593__$1);
var state_56672__$1 = (function (){var statearr_56683 = state_56672;
(statearr_56683[(11)] = inst_56593__$1);

(statearr_56683[(12)] = inst_56594__$1);

return statearr_56683;
})();
if(cljs.core.truth_(inst_56594__$1)){
var statearr_56684_56957 = state_56672__$1;
(statearr_56684_56957[(1)] = (28));

} else {
var statearr_56685_56958 = state_56672__$1;
(statearr_56685_56958[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (4))){
var inst_56469 = (state_56672[(2)]);
var state_56672__$1 = (function (){var statearr_56686 = state_56672;
(statearr_56686[(13)] = inst_56469);

return statearr_56686;
})();
var statearr_56687_56959 = state_56672__$1;
(statearr_56687_56959[(2)] = null);

(statearr_56687_56959[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (15))){
var inst_56511 = (state_56672[(2)]);
var inst_56512 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56513 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56514 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56513,50,inst_56511,"Should flush after timeout"];
var inst_56515 = cljs.core.PersistentHashMap.fromArrays(inst_56512,inst_56514);
var inst_56516 = cljs.test.report.call(null,inst_56515);
var state_56672__$1 = state_56672;
var statearr_56688_56961 = state_56672__$1;
(statearr_56688_56961[(2)] = inst_56516);

(statearr_56688_56961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (21))){
var inst_56455 = (state_56672[(8)]);
var inst_56568 = (state_56672[(2)]);
var state_56672__$1 = (function (){var statearr_56689 = state_56672;
(statearr_56689[(14)] = inst_56568);

return statearr_56689;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56672__$1,(22),inst_56455,(4));
} else {
if((state_val_56674 === (31))){
var inst_56621 = (state_56672[(2)]);
var state_56672__$1 = (function (){var statearr_56690 = state_56672;
(statearr_56690[(15)] = inst_56621);

return statearr_56690;
})();
var statearr_56691_56963 = state_56672__$1;
(statearr_56691_56963[(2)] = null);

(statearr_56691_56963[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (32))){
var inst_56457 = (state_56672[(9)]);
var inst_56644 = (state_56672[(16)]);
var inst_56645 = (state_56672[(17)]);
var _ = (function (){var statearr_56692 = state_56672;
(statearr_56692[(4)] = cljs.core.cons((35),(state_56672[(4)])));

return statearr_56692;
})();
var inst_56633 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56634 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56635 = [(1),(2)];
var inst_56636 = (new cljs.core.PersistentVector(null,2,(5),inst_56634,inst_56635,null));
var inst_56637 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56638 = [(3),(4)];
var inst_56639 = (new cljs.core.PersistentVector(null,2,(5),inst_56637,inst_56638,null));
var inst_56640 = [inst_56636,inst_56639];
var inst_56641 = (new cljs.core.PersistentVector(null,2,(5),inst_56633,inst_56640,null));
var inst_56642 = cljs.core.deref(inst_56457);
var inst_56643 = (new cljs.core.List(null,inst_56642,null,(1),null));
var inst_56644__$1 = (new cljs.core.List(null,inst_56641,inst_56643,(2),null));
var inst_56645__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56644__$1);
var state_56672__$1 = (function (){var statearr_56693 = state_56672;
(statearr_56693[(16)] = inst_56644__$1);

(statearr_56693[(17)] = inst_56645__$1);

return statearr_56693;
})();
if(cljs.core.truth_(inst_56645__$1)){
var statearr_56694_56964 = state_56672__$1;
(statearr_56694_56964[(1)] = (36));

} else {
var statearr_56695_56965 = state_56672__$1;
(statearr_56695_56965[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (33))){
var inst_56669 = (state_56672[(2)]);
var inst_56670 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56672__$1 = (function (){var statearr_56696 = state_56672;
(statearr_56696[(18)] = inst_56669);

return statearr_56696;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56672__$1,inst_56670);
} else {
if((state_val_56674 === (13))){
var inst_56457 = (state_56672[(9)]);
var inst_56530 = (state_56672[(19)]);
var inst_56531 = (state_56672[(20)]);
var _ = (function (){var statearr_56697 = state_56672;
(statearr_56697[(4)] = cljs.core.cons((16),(state_56672[(4)])));

return statearr_56697;
})();
var inst_56522 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56523 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56524 = [(1),(2)];
var inst_56525 = (new cljs.core.PersistentVector(null,2,(5),inst_56523,inst_56524,null));
var inst_56526 = [inst_56525];
var inst_56527 = (new cljs.core.PersistentVector(null,1,(5),inst_56522,inst_56526,null));
var inst_56528 = cljs.core.deref(inst_56457);
var inst_56529 = (new cljs.core.List(null,inst_56528,null,(1),null));
var inst_56530__$1 = (new cljs.core.List(null,inst_56527,inst_56529,(2),null));
var inst_56531__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56530__$1);
var state_56672__$1 = (function (){var statearr_56698 = state_56672;
(statearr_56698[(19)] = inst_56530__$1);

(statearr_56698[(20)] = inst_56531__$1);

return statearr_56698;
})();
if(cljs.core.truth_(inst_56531__$1)){
var statearr_56699_56967 = state_56672__$1;
(statearr_56699_56967[(1)] = (17));

} else {
var statearr_56700_56968 = state_56672__$1;
(statearr_56700_56968[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (22))){
var inst_56570 = (state_56672[(2)]);
var inst_56571 = cljs.core.async.timeout((20));
var state_56672__$1 = (function (){var statearr_56701 = state_56672;
(statearr_56701[(21)] = inst_56570);

return statearr_56701;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56672__$1,(23),inst_56571);
} else {
if((state_val_56674 === (36))){
var inst_56644 = (state_56672[(16)]);
var inst_56647 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56648 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56649 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56650 = cljs.core.cons(inst_56649,inst_56644);
var inst_56651 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56648,60,inst_56650,"Should flush 3,4 after timeout from first message"];
var inst_56652 = cljs.core.PersistentHashMap.fromArrays(inst_56647,inst_56651);
var inst_56653 = cljs.test.report.call(null,inst_56652);
var state_56672__$1 = state_56672;
var statearr_56702_56969 = state_56672__$1;
(statearr_56702_56969[(2)] = inst_56653);

(statearr_56702_56969[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (29))){
var inst_56593 = (state_56672[(11)]);
var inst_56604 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56605 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56606 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56607 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56608 = cljs.core.cons(inst_56607,inst_56593);
var inst_56609 = (new cljs.core.List(null,inst_56608,null,(1),null));
var inst_56610 = (new cljs.core.List(null,inst_56606,inst_56609,(2),null));
var inst_56611 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56605,57,inst_56610,"Should not flush 3,4 yet"];
var inst_56612 = cljs.core.PersistentHashMap.fromArrays(inst_56604,inst_56611);
var inst_56613 = cljs.test.report.call(null,inst_56612);
var state_56672__$1 = state_56672;
var statearr_56703_56970 = state_56672__$1;
(statearr_56703_56970[(2)] = inst_56613);

(statearr_56703_56970[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (6))){
var inst_56507 = (state_56672[(2)]);
var inst_56508 = cljs.core.async.timeout((100));
var state_56672__$1 = (function (){var statearr_56704 = state_56672;
(statearr_56704[(22)] = inst_56507);

return statearr_56704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56672__$1,(12),inst_56508);
} else {
if((state_val_56674 === (28))){
var inst_56593 = (state_56672[(11)]);
var inst_56596 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56597 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56598 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56599 = cljs.core.cons(inst_56598,inst_56593);
var inst_56600 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56597,57,inst_56599,"Should not flush 3,4 yet"];
var inst_56601 = cljs.core.PersistentHashMap.fromArrays(inst_56596,inst_56600);
var inst_56602 = cljs.test.report.call(null,inst_56601);
var state_56672__$1 = state_56672;
var statearr_56705_56973 = state_56672__$1;
(statearr_56705_56973[(2)] = inst_56602);

(statearr_56705_56973[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (25))){
var inst_56618 = (state_56672[(2)]);
var inst_56619 = cljs.core.async.timeout((80));
var state_56672__$1 = (function (){var statearr_56706 = state_56672;
(statearr_56706[(23)] = inst_56618);

return statearr_56706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56672__$1,(31),inst_56619);
} else {
if((state_val_56674 === (34))){
var inst_56622 = (state_56672[(2)]);
var inst_56623 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56624 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56625 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56624,60,inst_56622,"Should flush 3,4 after timeout from first message"];
var inst_56626 = cljs.core.PersistentHashMap.fromArrays(inst_56623,inst_56625);
var inst_56627 = cljs.test.report.call(null,inst_56626);
var state_56672__$1 = state_56672;
var statearr_56707_56975 = state_56672__$1;
(statearr_56707_56975[(2)] = inst_56627);

(statearr_56707_56975[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (17))){
var inst_56530 = (state_56672[(19)]);
var inst_56533 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56542 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56543 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56544 = cljs.core.cons(inst_56543,inst_56530);
var inst_56545 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56542,50,inst_56544,"Should flush after timeout"];
var inst_56546 = cljs.core.PersistentHashMap.fromArrays(inst_56533,inst_56545);
var inst_56547 = cljs.test.report.call(null,inst_56546);
var state_56672__$1 = state_56672;
var statearr_56708_56976 = state_56672__$1;
(statearr_56708_56976[(2)] = inst_56547);

(statearr_56708_56976[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (3))){
var inst_56466 = (state_56672[(2)]);
var inst_56467 = cljs.core.async.timeout((50));
var state_56672__$1 = (function (){var statearr_56709 = state_56672;
(statearr_56709[(24)] = inst_56466);

return statearr_56709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56672__$1,(4),inst_56467);
} else {
if((state_val_56674 === (12))){
var inst_56510 = (state_56672[(2)]);
var state_56672__$1 = (function (){var statearr_56710 = state_56672;
(statearr_56710[(25)] = inst_56510);

return statearr_56710;
})();
var statearr_56711_56977 = state_56672__$1;
(statearr_56711_56977[(2)] = null);

(statearr_56711_56977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (2))){
var inst_56455 = (state_56672[(8)]);
var inst_56464 = (state_56672[(2)]);
var state_56672__$1 = (function (){var statearr_56713 = state_56672;
(statearr_56713[(26)] = inst_56464);

return statearr_56713;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56672__$1,(3),inst_56455,(2));
} else {
if((state_val_56674 === (23))){
var inst_56573 = (state_56672[(2)]);
var state_56672__$1 = (function (){var statearr_56714 = state_56672;
(statearr_56714[(27)] = inst_56573);

return statearr_56714;
})();
var statearr_56715_56978 = state_56672__$1;
(statearr_56715_56978[(2)] = null);

(statearr_56715_56978[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (35))){
var _ = (function (){var statearr_56716 = state_56672;
(statearr_56716[(4)] = cljs.core.rest((state_56672[(4)])));

return statearr_56716;
})();
var state_56672__$1 = state_56672;
var ex56712 = (state_56672__$1[(2)]);
var statearr_56717_56980 = state_56672__$1;
(statearr_56717_56980[(5)] = ex56712);


var statearr_56718_56981 = state_56672__$1;
(statearr_56718_56981[(1)] = (34));

(statearr_56718_56981[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (19))){
var inst_56531 = (state_56672[(20)]);
var inst_56560 = (state_56672[(2)]);
var _ = (function (){var statearr_56719 = state_56672;
(statearr_56719[(4)] = cljs.core.rest((state_56672[(4)])));

return statearr_56719;
})();
var state_56672__$1 = (function (){var statearr_56720 = state_56672;
(statearr_56720[(28)] = inst_56560);

return statearr_56720;
})();
var statearr_56721_56984 = state_56672__$1;
(statearr_56721_56984[(2)] = inst_56531);

(statearr_56721_56984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (11))){
var inst_56483 = (state_56672[(29)]);
var inst_56504 = (state_56672[(2)]);
var _ = (function (){var statearr_56722 = state_56672;
(statearr_56722[(4)] = cljs.core.rest((state_56672[(4)])));

return statearr_56722;
})();
var state_56672__$1 = (function (){var statearr_56723 = state_56672;
(statearr_56723[(30)] = inst_56504);

return statearr_56723;
})();
var statearr_56724_56985 = state_56672__$1;
(statearr_56724_56985[(2)] = inst_56483);

(statearr_56724_56985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (9))){
var inst_56482 = (state_56672[(31)]);
var inst_56485 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56486 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56487 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56488 = cljs.core.cons(inst_56487,inst_56482);
var inst_56489 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56486,47,inst_56488,"Should not flush before timeout"];
var inst_56490 = cljs.core.PersistentHashMap.fromArrays(inst_56485,inst_56489);
var inst_56491 = cljs.test.report.call(null,inst_56490);
var state_56672__$1 = state_56672;
var statearr_56725_56987 = state_56672__$1;
(statearr_56725_56987[(2)] = inst_56491);

(statearr_56725_56987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (5))){
var inst_56457 = (state_56672[(9)]);
var inst_56482 = (state_56672[(31)]);
var inst_56483 = (state_56672[(29)]);
var _ = (function (){var statearr_56726 = state_56672;
(statearr_56726[(4)] = cljs.core.cons((8),(state_56672[(4)])));

return statearr_56726;
})();
var inst_56481 = cljs.core.deref(inst_56457);
var inst_56482__$1 = (new cljs.core.List(null,inst_56481,null,(1),null));
var inst_56483__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56482__$1);
var state_56672__$1 = (function (){var statearr_56727 = state_56672;
(statearr_56727[(31)] = inst_56482__$1);

(statearr_56727[(29)] = inst_56483__$1);

return statearr_56727;
})();
if(cljs.core.truth_(inst_56483__$1)){
var statearr_56728_56988 = state_56672__$1;
(statearr_56728_56988[(1)] = (9));

} else {
var statearr_56729_56989 = state_56672__$1;
(statearr_56729_56989[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (14))){
var inst_56455 = (state_56672[(8)]);
var inst_56563 = (state_56672[(2)]);
var state_56672__$1 = (function (){var statearr_56731 = state_56672;
(statearr_56731[(32)] = inst_56563);

return statearr_56731;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56672__$1,(20),inst_56455,(3));
} else {
if((state_val_56674 === (26))){
var inst_56574 = (state_56672[(2)]);
var inst_56575 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56576 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56577 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56576,57,inst_56574,"Should not flush 3,4 yet"];
var inst_56578 = cljs.core.PersistentHashMap.fromArrays(inst_56575,inst_56577);
var inst_56579 = cljs.test.report.call(null,inst_56578);
var state_56672__$1 = state_56672;
var statearr_56732_56992 = state_56672__$1;
(statearr_56732_56992[(2)] = inst_56579);

(statearr_56732_56992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (16))){
var _ = (function (){var statearr_56733 = state_56672;
(statearr_56733[(4)] = cljs.core.rest((state_56672[(4)])));

return statearr_56733;
})();
var state_56672__$1 = state_56672;
var ex56730 = (state_56672__$1[(2)]);
var statearr_56734_56993 = state_56672__$1;
(statearr_56734_56993[(5)] = ex56730);


var statearr_56735_56994 = state_56672__$1;
(statearr_56735_56994[(1)] = (15));

(statearr_56735_56994[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (38))){
var inst_56645 = (state_56672[(17)]);
var inst_56666 = (state_56672[(2)]);
var _ = (function (){var statearr_56736 = state_56672;
(statearr_56736[(4)] = cljs.core.rest((state_56672[(4)])));

return statearr_56736;
})();
var state_56672__$1 = (function (){var statearr_56737 = state_56672;
(statearr_56737[(33)] = inst_56666);

return statearr_56737;
})();
var statearr_56738_56995 = state_56672__$1;
(statearr_56738_56995[(2)] = inst_56645);

(statearr_56738_56995[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (30))){
var inst_56594 = (state_56672[(12)]);
var inst_56615 = (state_56672[(2)]);
var _ = (function (){var statearr_56740 = state_56672;
(statearr_56740[(4)] = cljs.core.rest((state_56672[(4)])));

return statearr_56740;
})();
var state_56672__$1 = (function (){var statearr_56741 = state_56672;
(statearr_56741[(34)] = inst_56615);

return statearr_56741;
})();
var statearr_56744_56996 = state_56672__$1;
(statearr_56744_56996[(2)] = inst_56594);

(statearr_56744_56996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (10))){
var inst_56482 = (state_56672[(31)]);
var inst_56493 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56494 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56495 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56496 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56497 = cljs.core.cons(inst_56496,inst_56482);
var inst_56498 = (new cljs.core.List(null,inst_56497,null,(1),null));
var inst_56499 = (new cljs.core.List(null,inst_56495,inst_56498,(2),null));
var inst_56500 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56494,47,inst_56499,"Should not flush before timeout"];
var inst_56501 = cljs.core.PersistentHashMap.fromArrays(inst_56493,inst_56500);
var inst_56502 = cljs.test.report.call(null,inst_56501);
var state_56672__$1 = state_56672;
var statearr_56747_57000 = state_56672__$1;
(statearr_56747_57000[(2)] = inst_56502);

(statearr_56747_57000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (18))){
var inst_56530 = (state_56672[(19)]);
var inst_56549 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56550 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56551 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56552 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56553 = cljs.core.cons(inst_56552,inst_56530);
var inst_56554 = (new cljs.core.List(null,inst_56553,null,(1),null));
var inst_56555 = (new cljs.core.List(null,inst_56551,inst_56554,(2),null));
var inst_56556 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56550,50,inst_56555,"Should flush after timeout"];
var inst_56557 = cljs.core.PersistentHashMap.fromArrays(inst_56549,inst_56556);
var inst_56558 = cljs.test.report.call(null,inst_56557);
var state_56672__$1 = state_56672;
var statearr_56750_57001 = state_56672__$1;
(statearr_56750_57001[(2)] = inst_56558);

(statearr_56750_57001[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (37))){
var inst_56644 = (state_56672[(16)]);
var inst_56655 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56656 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56657 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56658 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56659 = cljs.core.cons(inst_56658,inst_56644);
var inst_56660 = (new cljs.core.List(null,inst_56659,null,(1),null));
var inst_56661 = (new cljs.core.List(null,inst_56657,inst_56660,(2),null));
var inst_56662 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56656,60,inst_56661,"Should flush 3,4 after timeout from first message"];
var inst_56663 = cljs.core.PersistentHashMap.fromArrays(inst_56655,inst_56662);
var inst_56664 = cljs.test.report.call(null,inst_56663);
var state_56672__$1 = state_56672;
var statearr_56751_57002 = state_56672__$1;
(statearr_56751_57002[(2)] = inst_56664);

(statearr_56751_57002[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (8))){
var _ = (function (){var statearr_56752 = state_56672;
(statearr_56752[(4)] = cljs.core.rest((state_56672[(4)])));

return statearr_56752;
})();
var state_56672__$1 = state_56672;
var ex56749 = (state_56672__$1[(2)]);
var statearr_56753_57003 = state_56672__$1;
(statearr_56753_57003[(5)] = ex56749);


var statearr_56754_57004 = state_56672__$1;
(statearr_56754_57004[(1)] = (7));

(statearr_56754_57004[(5)] = null);



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
var statearr_56759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56759[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56759[(1)] = (1));

return statearr_56759;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56672){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56672);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56761){var ex__32294__auto__ = e56761;
var statearr_56762_57006 = state_56672;
(statearr_56762_57006[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56672[(4)]))){
var statearr_56763_57007 = state_56672;
(statearr_56763_57007[(1)] = cljs.core.first((state_56672[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57009 = state_56672;
state_56672 = G__57009;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56672){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56765 = f__32362__auto__();
(statearr_56765[(6)] = c__32361__auto__);

return statearr_56765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56442","meta56442",143400678,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56441.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56441.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56441");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56441.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56441");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56441.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56441 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56441(meta56442){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56441(meta56442));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56441(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56773 = (function (meta56774){
this.meta56774 = meta56774;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56775,meta56774__$1){
var self__ = this;
var _56775__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56773(meta56774__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56775){
var self__ = this;
var _56775__$1 = this;
return self__.meta56774;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56773.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56773.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56782 = (arguments.length - (1));
switch (G__56782) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56773.prototype.apply = (function (self__,args56780){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56780)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56773.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56847){
var state_val_56848 = (state_56847[(1)]);
if((state_val_56848 === (7))){
var inst_56800 = (state_56847[(2)]);
var inst_56801 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56802 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56803 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_56802,78,inst_56800,"Closing input should flush remaining"];
var inst_56804 = cljs.core.PersistentHashMap.fromArrays(inst_56801,inst_56803);
var inst_56805 = cljs.test.report.call(null,inst_56804);
var state_56847__$1 = state_56847;
var statearr_56849_57013 = state_56847__$1;
(statearr_56849_57013[(2)] = inst_56805);

(statearr_56849_57013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56848 === (1))){
var inst_56784 = (state_56847[(7)]);
var inst_56786 = (state_56847[(8)]);
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
var state_56847__$1 = (function (){var statearr_56850 = state_56847;
(statearr_56850[(7)] = inst_56784__$1);

(statearr_56850[(8)] = inst_56786__$1);

(statearr_56850[(9)] = inst_56791);

return statearr_56850;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56847__$1,(2),inst_56784__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_56848 === (4))){
var inst_56799 = (state_56847[(2)]);
var state_56847__$1 = (function (){var statearr_56851 = state_56847;
(statearr_56851[(10)] = inst_56799);

return statearr_56851;
})();
var statearr_56852_57014 = state_56847__$1;
(statearr_56852_57014[(2)] = null);

(statearr_56852_57014[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56848 === (6))){
var inst_56844 = (state_56847[(2)]);
var inst_56845 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56847__$1 = (function (){var statearr_56853 = state_56847;
(statearr_56853[(11)] = inst_56844);

return statearr_56853;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56847__$1,inst_56845);
} else {
if((state_val_56848 === (3))){
var inst_56784 = (state_56847[(7)]);
var inst_56795 = (state_56847[(2)]);
var inst_56796 = cljs.core.async.close_BANG_(inst_56784);
var inst_56797 = cljs.core.async.timeout((20));
var state_56847__$1 = (function (){var statearr_56854 = state_56847;
(statearr_56854[(12)] = inst_56795);

(statearr_56854[(13)] = inst_56796);

return statearr_56854;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56847__$1,(4),inst_56797);
} else {
if((state_val_56848 === (2))){
var inst_56784 = (state_56847[(7)]);
var inst_56793 = (state_56847[(2)]);
var state_56847__$1 = (function (){var statearr_56855 = state_56847;
(statearr_56855[(14)] = inst_56793);

return statearr_56855;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56847__$1,(3),inst_56784,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_56848 === (11))){
var inst_56820 = (state_56847[(15)]);
var inst_56841 = (state_56847[(2)]);
var _ = (function (){var statearr_56856 = state_56847;
(statearr_56856[(4)] = cljs.core.rest((state_56847[(4)])));

return statearr_56856;
})();
var state_56847__$1 = (function (){var statearr_56857 = state_56847;
(statearr_56857[(16)] = inst_56841);

return statearr_56857;
})();
var statearr_56858_57015 = state_56847__$1;
(statearr_56858_57015[(2)] = inst_56820);

(statearr_56858_57015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56848 === (9))){
var inst_56819 = (state_56847[(17)]);
var inst_56822 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56823 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56824 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56825 = cljs.core.cons(inst_56824,inst_56819);
var inst_56826 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_56823,78,inst_56825,"Closing input should flush remaining"];
var inst_56827 = cljs.core.PersistentHashMap.fromArrays(inst_56822,inst_56826);
var inst_56828 = cljs.test.report.call(null,inst_56827);
var state_56847__$1 = state_56847;
var statearr_56859_57017 = state_56847__$1;
(statearr_56859_57017[(2)] = inst_56828);

(statearr_56859_57017[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56848 === (5))){
var inst_56786 = (state_56847[(8)]);
var inst_56819 = (state_56847[(17)]);
var inst_56820 = (state_56847[(15)]);
var _ = (function (){var statearr_56861 = state_56847;
(statearr_56861[(4)] = cljs.core.cons((8),(state_56847[(4)])));

return statearr_56861;
})();
var inst_56811 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56812 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56813 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_56814 = (new cljs.core.PersistentVector(null,2,(5),inst_56812,inst_56813,null));
var inst_56815 = [inst_56814];
var inst_56816 = (new cljs.core.PersistentVector(null,1,(5),inst_56811,inst_56815,null));
var inst_56817 = cljs.core.deref(inst_56786);
var inst_56818 = (new cljs.core.List(null,inst_56817,null,(1),null));
var inst_56819__$1 = (new cljs.core.List(null,inst_56816,inst_56818,(2),null));
var inst_56820__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56819__$1);
var state_56847__$1 = (function (){var statearr_56864 = state_56847;
(statearr_56864[(17)] = inst_56819__$1);

(statearr_56864[(15)] = inst_56820__$1);

return statearr_56864;
})();
if(cljs.core.truth_(inst_56820__$1)){
var statearr_56865_57018 = state_56847__$1;
(statearr_56865_57018[(1)] = (9));

} else {
var statearr_56866_57019 = state_56847__$1;
(statearr_56866_57019[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56848 === (10))){
var inst_56819 = (state_56847[(17)]);
var inst_56830 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56831 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56832 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56833 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56834 = cljs.core.cons(inst_56833,inst_56819);
var inst_56835 = (new cljs.core.List(null,inst_56834,null,(1),null));
var inst_56836 = (new cljs.core.List(null,inst_56832,inst_56835,(2),null));
var inst_56837 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_56831,78,inst_56836,"Closing input should flush remaining"];
var inst_56838 = cljs.core.PersistentHashMap.fromArrays(inst_56830,inst_56837);
var inst_56839 = cljs.test.report.call(null,inst_56838);
var state_56847__$1 = state_56847;
var statearr_56870_57023 = state_56847__$1;
(statearr_56870_57023[(2)] = inst_56839);

(statearr_56870_57023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56848 === (8))){
var _ = (function (){var statearr_56872 = state_56847;
(statearr_56872[(4)] = cljs.core.rest((state_56847[(4)])));

return statearr_56872;
})();
var state_56847__$1 = state_56847;
var ex56860 = (state_56847__$1[(2)]);
var statearr_56873_57024 = state_56847__$1;
(statearr_56873_57024[(5)] = ex56860);


var statearr_56874_57025 = state_56847__$1;
(statearr_56874_57025[(1)] = (7));

(statearr_56874_57025[(5)] = null);



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
var statearr_56875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56875[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56875[(1)] = (1));

return statearr_56875;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56847){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56847);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56876){var ex__32294__auto__ = e56876;
var statearr_56877_57026 = state_56847;
(statearr_56877_57026[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56847[(4)]))){
var statearr_56878_57027 = state_56847;
(statearr_56878_57027[(1)] = cljs.core.first((state_56847[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57028 = state_56847;
state_56847 = G__57028;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56847){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56879 = f__32362__auto__();
(statearr_56879[(6)] = c__32361__auto__);

return statearr_56879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56774","meta56774",798732768,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56773.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56773.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56773");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56773.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56773");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56773.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56773 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56773(meta56774){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56773(meta56774));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56773(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
