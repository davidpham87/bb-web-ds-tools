goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56050 = (function (meta56051){
this.meta56051 = meta56051;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56052,meta56051__$1){
var self__ = this;
var _56052__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56050(meta56051__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56052){
var self__ = this;
var _56052__$1 = this;
return self__.meta56051;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56050.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56050.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56073 = (arguments.length - (1));
switch (G__56073) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56050.prototype.apply = (function (self__,args56055){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56055)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56050.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56275){
var state_val_56276 = (state_56275[(1)]);
if((state_val_56276 === (7))){
var inst_56119 = (state_56275[(2)]);
var inst_56120 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56123 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56124 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56123,19,inst_56119,"Buffer should not flush automatically without timer"];
var inst_56125 = cljs.core.PersistentHashMap.fromArrays(inst_56120,inst_56124);
var inst_56126 = cljs.test.report.call(null,inst_56125);
var state_56275__$1 = state_56275;
var statearr_56278_56896 = state_56275__$1;
(statearr_56278_56896[(2)] = inst_56126);

(statearr_56278_56896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (20))){
var inst_56109 = (state_56275[(7)]);
var inst_56218 = (state_56275[(2)]);
var inst_56219 = (inst_56109.cljs$core$IFn$_invoke$arity$0 ? inst_56109.cljs$core$IFn$_invoke$arity$0() : inst_56109.call(null));
var inst_56220 = cljs.core.async.timeout((20));
var state_56275__$1 = (function (){var statearr_56280 = state_56275;
(statearr_56280[(8)] = inst_56218);

(statearr_56280[(9)] = inst_56219);

return statearr_56280;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56275__$1,(21),inst_56220);
} else {
if((state_val_56276 === (27))){
var inst_56247 = (state_56275[(10)]);
var inst_56258 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56259 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56260 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56261 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56262 = cljs.core.cons(inst_56261,inst_56247);
var inst_56263 = (new cljs.core.List(null,inst_56262,null,(1),null));
var inst_56264 = (new cljs.core.List(null,inst_56260,inst_56263,(2),null));
var inst_56265 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56259,29,inst_56264,"Subsequent flush should work"];
var inst_56266 = cljs.core.PersistentHashMap.fromArrays(inst_56258,inst_56265);
var inst_56267 = cljs.test.report.call(null,inst_56266);
var state_56275__$1 = state_56275;
var statearr_56283_56897 = state_56275__$1;
(statearr_56283_56897[(2)] = inst_56267);

(statearr_56283_56897[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (1))){
var inst_56100 = (state_56275[(11)]);
var inst_56103 = (state_56275[(12)]);
var inst_56100__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56102 = cljs.core.PersistentVector.EMPTY;
var inst_56103__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56102);
var inst_56105 = (function (){var input_ch = inst_56100__$1;
var results = inst_56103__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56106 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56107 = [inst_56100__$1,inst_56105];
var inst_56108 = cljs.core.PersistentHashMap.fromArrays(inst_56106,inst_56107);
var inst_56109 = bb_web_ds_tools.components.async_buffer.create(inst_56108);
var state_56275__$1 = (function (){var statearr_56285 = state_56275;
(statearr_56285[(11)] = inst_56100__$1);

(statearr_56285[(12)] = inst_56103__$1);

(statearr_56285[(7)] = inst_56109);

return statearr_56285;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56275__$1,(2),inst_56100__$1,(1));
} else {
if((state_val_56276 === (24))){
var inst_56223 = (state_56275[(2)]);
var inst_56224 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56225 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56226 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56225,29,inst_56223,"Subsequent flush should work"];
var inst_56227 = cljs.core.PersistentHashMap.fromArrays(inst_56224,inst_56226);
var inst_56228 = cljs.test.report.call(null,inst_56227);
var state_56275__$1 = state_56275;
var statearr_56287_56899 = state_56275__$1;
(statearr_56287_56899[(2)] = inst_56228);

(statearr_56287_56899[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (4))){
var inst_56117 = (state_56275[(2)]);
var state_56275__$1 = (function (){var statearr_56288 = state_56275;
(statearr_56288[(13)] = inst_56117);

return statearr_56288;
})();
var statearr_56289_56900 = state_56275__$1;
(statearr_56289_56900[(2)] = null);

(statearr_56289_56900[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (15))){
var inst_56166 = (state_56275[(2)]);
var inst_56167 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56169 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56170 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56169,24,inst_56166,"Manual flush should flush all items"];
var inst_56171 = cljs.core.PersistentHashMap.fromArrays(inst_56167,inst_56170);
var inst_56172 = cljs.test.report.call(null,inst_56171);
var state_56275__$1 = state_56275;
var statearr_56292_56902 = state_56275__$1;
(statearr_56292_56902[(2)] = inst_56172);

(statearr_56292_56902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (21))){
var inst_56222 = (state_56275[(2)]);
var state_56275__$1 = (function (){var statearr_56302 = state_56275;
(statearr_56302[(14)] = inst_56222);

return statearr_56302;
})();
var statearr_56305_56903 = state_56275__$1;
(statearr_56305_56903[(2)] = null);

(statearr_56305_56903[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (13))){
var inst_56103 = (state_56275[(12)]);
var inst_56191 = (state_56275[(15)]);
var inst_56192 = (state_56275[(16)]);
var _ = (function (){var statearr_56306 = state_56275;
(statearr_56306[(4)] = cljs.core.cons((16),(state_56275[(4)])));

return statearr_56306;
})();
var inst_56182 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56183 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56184 = [(1),(2)];
var inst_56185 = (new cljs.core.PersistentVector(null,2,(5),inst_56183,inst_56184,null));
var inst_56186 = [inst_56185];
var inst_56187 = (new cljs.core.PersistentVector(null,1,(5),inst_56182,inst_56186,null));
var inst_56189 = cljs.core.deref(inst_56103);
var inst_56190 = (new cljs.core.List(null,inst_56189,null,(1),null));
var inst_56191__$1 = (new cljs.core.List(null,inst_56187,inst_56190,(2),null));
var inst_56192__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56191__$1);
var state_56275__$1 = (function (){var statearr_56312 = state_56275;
(statearr_56312[(15)] = inst_56191__$1);

(statearr_56312[(16)] = inst_56192__$1);

return statearr_56312;
})();
if(cljs.core.truth_(inst_56192__$1)){
var statearr_56313_56904 = state_56275__$1;
(statearr_56313_56904[(1)] = (17));

} else {
var statearr_56314_56905 = state_56275__$1;
(statearr_56314_56905[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (22))){
var inst_56103 = (state_56275[(12)]);
var inst_56247 = (state_56275[(10)]);
var inst_56248 = (state_56275[(17)]);
var _ = (function (){var statearr_56316 = state_56275;
(statearr_56316[(4)] = cljs.core.cons((25),(state_56275[(4)])));

return statearr_56316;
})();
var inst_56234 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56237 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56238 = [(1),(2)];
var inst_56239 = (new cljs.core.PersistentVector(null,2,(5),inst_56237,inst_56238,null));
var inst_56240 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56241 = [(3)];
var inst_56242 = (new cljs.core.PersistentVector(null,1,(5),inst_56240,inst_56241,null));
var inst_56243 = [inst_56239,inst_56242];
var inst_56244 = (new cljs.core.PersistentVector(null,2,(5),inst_56234,inst_56243,null));
var inst_56245 = cljs.core.deref(inst_56103);
var inst_56246 = (new cljs.core.List(null,inst_56245,null,(1),null));
var inst_56247__$1 = (new cljs.core.List(null,inst_56244,inst_56246,(2),null));
var inst_56248__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56247__$1);
var state_56275__$1 = (function (){var statearr_56318 = state_56275;
(statearr_56318[(10)] = inst_56247__$1);

(statearr_56318[(17)] = inst_56248__$1);

return statearr_56318;
})();
if(cljs.core.truth_(inst_56248__$1)){
var statearr_56319_56906 = state_56275__$1;
(statearr_56319_56906[(1)] = (26));

} else {
var statearr_56320_56907 = state_56275__$1;
(statearr_56320_56907[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (6))){
var inst_56109 = (state_56275[(7)]);
var inst_56161 = (state_56275[(2)]);
var inst_56162 = (inst_56109.cljs$core$IFn$_invoke$arity$0 ? inst_56109.cljs$core$IFn$_invoke$arity$0() : inst_56109.call(null));
var inst_56163 = cljs.core.async.timeout((20));
var state_56275__$1 = (function (){var statearr_56322 = state_56275;
(statearr_56322[(18)] = inst_56161);

(statearr_56322[(19)] = inst_56162);

return statearr_56322;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56275__$1,(12),inst_56163);
} else {
if((state_val_56276 === (28))){
var inst_56248 = (state_56275[(17)]);
var inst_56269 = (state_56275[(2)]);
var _ = (function (){var statearr_56324 = state_56275;
(statearr_56324[(4)] = cljs.core.rest((state_56275[(4)])));

return statearr_56324;
})();
var state_56275__$1 = (function (){var statearr_56325 = state_56275;
(statearr_56325[(20)] = inst_56269);

return statearr_56325;
})();
var statearr_56326_56908 = state_56275__$1;
(statearr_56326_56908[(2)] = inst_56248);

(statearr_56326_56908[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (25))){
var _ = (function (){var statearr_56329 = state_56275;
(statearr_56329[(4)] = cljs.core.rest((state_56275[(4)])));

return statearr_56329;
})();
var state_56275__$1 = state_56275;
var ex56321 = (state_56275__$1[(2)]);
var statearr_56330_56909 = state_56275__$1;
(statearr_56330_56909[(5)] = ex56321);


var statearr_56331_56910 = state_56275__$1;
(statearr_56331_56910[(1)] = (24));

(statearr_56331_56910[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (17))){
var inst_56191 = (state_56275[(15)]);
var inst_56194 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56195 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56196 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56197 = cljs.core.cons(inst_56196,inst_56191);
var inst_56198 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56195,24,inst_56197,"Manual flush should flush all items"];
var inst_56199 = cljs.core.PersistentHashMap.fromArrays(inst_56194,inst_56198);
var inst_56200 = cljs.test.report.call(null,inst_56199);
var state_56275__$1 = state_56275;
var statearr_56335_56911 = state_56275__$1;
(statearr_56335_56911[(2)] = inst_56200);

(statearr_56335_56911[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (3))){
var inst_56113 = (state_56275[(2)]);
var inst_56114 = cljs.core.async.timeout((20));
var state_56275__$1 = (function (){var statearr_56337 = state_56275;
(statearr_56337[(21)] = inst_56113);

return statearr_56337;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56275__$1,(4),inst_56114);
} else {
if((state_val_56276 === (12))){
var inst_56165 = (state_56275[(2)]);
var state_56275__$1 = (function (){var statearr_56342 = state_56275;
(statearr_56342[(22)] = inst_56165);

return statearr_56342;
})();
var statearr_56349_56912 = state_56275__$1;
(statearr_56349_56912[(2)] = null);

(statearr_56349_56912[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (2))){
var inst_56100 = (state_56275[(11)]);
var inst_56111 = (state_56275[(2)]);
var state_56275__$1 = (function (){var statearr_56350 = state_56275;
(statearr_56350[(23)] = inst_56111);

return statearr_56350;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56275__$1,(3),inst_56100,(2));
} else {
if((state_val_56276 === (23))){
var inst_56272 = (state_56275[(2)]);
var inst_56273 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56275__$1 = (function (){var statearr_56351 = state_56275;
(statearr_56351[(24)] = inst_56272);

return statearr_56351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56275__$1,inst_56273);
} else {
if((state_val_56276 === (19))){
var inst_56192 = (state_56275[(16)]);
var inst_56213 = (state_56275[(2)]);
var _ = (function (){var statearr_56354 = state_56275;
(statearr_56354[(4)] = cljs.core.rest((state_56275[(4)])));

return statearr_56354;
})();
var state_56275__$1 = (function (){var statearr_56356 = state_56275;
(statearr_56356[(25)] = inst_56213);

return statearr_56356;
})();
var statearr_56359_56915 = state_56275__$1;
(statearr_56359_56915[(2)] = inst_56192);

(statearr_56359_56915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (11))){
var inst_56135 = (state_56275[(26)]);
var inst_56158 = (state_56275[(2)]);
var _ = (function (){var statearr_56361 = state_56275;
(statearr_56361[(4)] = cljs.core.rest((state_56275[(4)])));

return statearr_56361;
})();
var state_56275__$1 = (function (){var statearr_56364 = state_56275;
(statearr_56364[(27)] = inst_56158);

return statearr_56364;
})();
var statearr_56365_56916 = state_56275__$1;
(statearr_56365_56916[(2)] = inst_56135);

(statearr_56365_56916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (9))){
var inst_56134 = (state_56275[(28)]);
var inst_56137 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56138 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56139 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56142 = cljs.core.cons(inst_56139,inst_56134);
var inst_56143 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56138,19,inst_56142,"Buffer should not flush automatically without timer"];
var inst_56144 = cljs.core.PersistentHashMap.fromArrays(inst_56137,inst_56143);
var inst_56145 = cljs.test.report.call(null,inst_56144);
var state_56275__$1 = state_56275;
var statearr_56366_56918 = state_56275__$1;
(statearr_56366_56918[(2)] = inst_56145);

(statearr_56366_56918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (5))){
var inst_56103 = (state_56275[(12)]);
var inst_56134 = (state_56275[(28)]);
var inst_56135 = (state_56275[(26)]);
var _ = (function (){var statearr_56367 = state_56275;
(statearr_56367[(4)] = cljs.core.cons((8),(state_56275[(4)])));

return statearr_56367;
})();
var inst_56133 = cljs.core.deref(inst_56103);
var inst_56134__$1 = (new cljs.core.List(null,inst_56133,null,(1),null));
var inst_56135__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56134__$1);
var state_56275__$1 = (function (){var statearr_56368 = state_56275;
(statearr_56368[(28)] = inst_56134__$1);

(statearr_56368[(26)] = inst_56135__$1);

return statearr_56368;
})();
if(cljs.core.truth_(inst_56135__$1)){
var statearr_56370_56919 = state_56275__$1;
(statearr_56370_56919[(1)] = (9));

} else {
var statearr_56371_56920 = state_56275__$1;
(statearr_56371_56920[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (14))){
var inst_56100 = (state_56275[(11)]);
var inst_56216 = (state_56275[(2)]);
var state_56275__$1 = (function (){var statearr_56374 = state_56275;
(statearr_56374[(29)] = inst_56216);

return statearr_56374;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56275__$1,(20),inst_56100,(3));
} else {
if((state_val_56276 === (26))){
var inst_56247 = (state_56275[(10)]);
var inst_56250 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56251 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56252 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56253 = cljs.core.cons(inst_56252,inst_56247);
var inst_56254 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56251,29,inst_56253,"Subsequent flush should work"];
var inst_56255 = cljs.core.PersistentHashMap.fromArrays(inst_56250,inst_56254);
var inst_56256 = cljs.test.report.call(null,inst_56255);
var state_56275__$1 = state_56275;
var statearr_56377_56923 = state_56275__$1;
(statearr_56377_56923[(2)] = inst_56256);

(statearr_56377_56923[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (16))){
var _ = (function (){var statearr_56378 = state_56275;
(statearr_56378[(4)] = cljs.core.rest((state_56275[(4)])));

return statearr_56378;
})();
var state_56275__$1 = state_56275;
var ex56373 = (state_56275__$1[(2)]);
var statearr_56379_56925 = state_56275__$1;
(statearr_56379_56925[(5)] = ex56373);


var statearr_56380_56926 = state_56275__$1;
(statearr_56380_56926[(1)] = (15));

(statearr_56380_56926[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (10))){
var inst_56134 = (state_56275[(28)]);
var inst_56147 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56148 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56149 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56150 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56151 = cljs.core.cons(inst_56150,inst_56134);
var inst_56152 = (new cljs.core.List(null,inst_56151,null,(1),null));
var inst_56153 = (new cljs.core.List(null,inst_56149,inst_56152,(2),null));
var inst_56154 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56148,19,inst_56153,"Buffer should not flush automatically without timer"];
var inst_56155 = cljs.core.PersistentHashMap.fromArrays(inst_56147,inst_56154);
var inst_56156 = cljs.test.report.call(null,inst_56155);
var state_56275__$1 = state_56275;
var statearr_56383_56927 = state_56275__$1;
(statearr_56383_56927[(2)] = inst_56156);

(statearr_56383_56927[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (18))){
var inst_56191 = (state_56275[(15)]);
var inst_56202 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56203 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56204 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56205 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56206 = cljs.core.cons(inst_56205,inst_56191);
var inst_56207 = (new cljs.core.List(null,inst_56206,null,(1),null));
var inst_56208 = (new cljs.core.List(null,inst_56204,inst_56207,(2),null));
var inst_56209 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56203,24,inst_56208,"Manual flush should flush all items"];
var inst_56210 = cljs.core.PersistentHashMap.fromArrays(inst_56202,inst_56209);
var inst_56211 = cljs.test.report.call(null,inst_56210);
var state_56275__$1 = state_56275;
var statearr_56385_56928 = state_56275__$1;
(statearr_56385_56928[(2)] = inst_56211);

(statearr_56385_56928[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (8))){
var _ = (function (){var statearr_56390 = state_56275;
(statearr_56390[(4)] = cljs.core.rest((state_56275[(4)])));

return statearr_56390;
})();
var state_56275__$1 = state_56275;
var ex56382 = (state_56275__$1[(2)]);
var statearr_56391_56929 = state_56275__$1;
(statearr_56391_56929[(5)] = ex56382);


var statearr_56393_56930 = state_56275__$1;
(statearr_56393_56930[(1)] = (7));

(statearr_56393_56930[(5)] = null);



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
var statearr_56394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56394[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56394[(1)] = (1));

return statearr_56394;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56275){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56275);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56396){var ex__32294__auto__ = e56396;
var statearr_56397_56932 = state_56275;
(statearr_56397_56932[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56275[(4)]))){
var statearr_56398_56935 = state_56275;
(statearr_56398_56935[(1)] = cljs.core.first((state_56275[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56936 = state_56275;
state_56275 = G__56936;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56275){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56399 = f__32362__auto__();
(statearr_56399[(6)] = c__32361__auto__);

return statearr_56399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56051","meta56051",-414642807,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56050.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56050.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56050");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56050.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56050");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56050.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56050 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56050(meta56051){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56050(meta56051));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56050(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56410 = (function (meta56411){
this.meta56411 = meta56411;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56412,meta56411__$1){
var self__ = this;
var _56412__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56410(meta56411__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56412){
var self__ = this;
var _56412__$1 = this;
return self__.meta56411;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56410.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56410.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56419 = (arguments.length - (1));
switch (G__56419) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56410.prototype.apply = (function (self__,args56415){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56415)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56410.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56636){
var state_val_56637 = (state_56636[(1)]);
if((state_val_56637 === (7))){
var inst_56436 = (state_56636[(2)]);
var inst_56437 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56438 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56439 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56438,47,inst_56436,"Should not flush before timeout"];
var inst_56440 = cljs.core.PersistentHashMap.fromArrays(inst_56437,inst_56439);
var inst_56441 = cljs.test.report.call(null,inst_56440);
var state_56636__$1 = state_56636;
var statearr_56645_56941 = state_56636__$1;
(statearr_56645_56941[(2)] = inst_56441);

(statearr_56645_56941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (20))){
var inst_56523 = (state_56636[(2)]);
var inst_56524 = cljs.core.async.timeout((50));
var state_56636__$1 = (function (){var statearr_56646 = state_56636;
(statearr_56646[(7)] = inst_56523);

return statearr_56646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56636__$1,(21),inst_56524);
} else {
if((state_val_56637 === (27))){
var _ = (function (){var statearr_56647 = state_56636;
(statearr_56647[(4)] = cljs.core.rest((state_56636[(4)])));

return statearr_56647;
})();
var state_56636__$1 = state_56636;
var ex56638 = (state_56636__$1[(2)]);
var statearr_56648_56945 = state_56636__$1;
(statearr_56648_56945[(5)] = ex56638);


var statearr_56649_56946 = state_56636__$1;
(statearr_56649_56946[(1)] = (26));

(statearr_56649_56946[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (1))){
var inst_56421 = (state_56636[(8)]);
var inst_56423 = (state_56636[(9)]);
var inst_56421__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56422 = cljs.core.PersistentVector.EMPTY;
var inst_56423__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56422);
var inst_56424 = (function (){var input_ch = inst_56421__$1;
var results = inst_56423__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56425 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56426 = [inst_56421__$1,(100),inst_56424];
var inst_56427 = cljs.core.PersistentHashMap.fromArrays(inst_56425,inst_56426);
var inst_56428 = bb_web_ds_tools.components.async_buffer.create(inst_56427);
var state_56636__$1 = (function (){var statearr_56652 = state_56636;
(statearr_56652[(8)] = inst_56421__$1);

(statearr_56652[(9)] = inst_56423__$1);

(statearr_56652[(10)] = inst_56428);

return statearr_56652;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56636__$1,(2),inst_56421__$1,(1));
} else {
if((state_val_56637 === (24))){
var inst_56423 = (state_56636[(9)]);
var inst_56551 = (state_56636[(11)]);
var inst_56552 = (state_56636[(12)]);
var _ = (function (){var statearr_56656 = state_56636;
(statearr_56656[(4)] = cljs.core.cons((27),(state_56636[(4)])));

return statearr_56656;
})();
var inst_56543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56545 = [(1),(2)];
var inst_56546 = (new cljs.core.PersistentVector(null,2,(5),inst_56544,inst_56545,null));
var inst_56547 = [inst_56546];
var inst_56548 = (new cljs.core.PersistentVector(null,1,(5),inst_56543,inst_56547,null));
var inst_56549 = cljs.core.deref(inst_56423);
var inst_56550 = (new cljs.core.List(null,inst_56549,null,(1),null));
var inst_56551__$1 = (new cljs.core.List(null,inst_56548,inst_56550,(2),null));
var inst_56552__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56551__$1);
var state_56636__$1 = (function (){var statearr_56658 = state_56636;
(statearr_56658[(11)] = inst_56551__$1);

(statearr_56658[(12)] = inst_56552__$1);

return statearr_56658;
})();
if(cljs.core.truth_(inst_56552__$1)){
var statearr_56659_56947 = state_56636__$1;
(statearr_56659_56947[(1)] = (28));

} else {
var statearr_56660_56948 = state_56636__$1;
(statearr_56660_56948[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (4))){
var inst_56435 = (state_56636[(2)]);
var state_56636__$1 = (function (){var statearr_56661 = state_56636;
(statearr_56661[(13)] = inst_56435);

return statearr_56661;
})();
var statearr_56662_56949 = state_56636__$1;
(statearr_56662_56949[(2)] = null);

(statearr_56662_56949[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (15))){
var inst_56477 = (state_56636[(2)]);
var inst_56478 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56479 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56480 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56479,50,inst_56477,"Should flush after timeout"];
var inst_56481 = cljs.core.PersistentHashMap.fromArrays(inst_56478,inst_56480);
var inst_56482 = cljs.test.report.call(null,inst_56481);
var state_56636__$1 = state_56636;
var statearr_56663_56952 = state_56636__$1;
(statearr_56663_56952[(2)] = inst_56482);

(statearr_56663_56952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (21))){
var inst_56421 = (state_56636[(8)]);
var inst_56526 = (state_56636[(2)]);
var state_56636__$1 = (function (){var statearr_56664 = state_56636;
(statearr_56664[(14)] = inst_56526);

return statearr_56664;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56636__$1,(22),inst_56421,(4));
} else {
if((state_val_56637 === (31))){
var inst_56579 = (state_56636[(2)]);
var state_56636__$1 = (function (){var statearr_56665 = state_56636;
(statearr_56665[(15)] = inst_56579);

return statearr_56665;
})();
var statearr_56666_56954 = state_56636__$1;
(statearr_56666_56954[(2)] = null);

(statearr_56666_56954[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (32))){
var inst_56423 = (state_56636[(9)]);
var inst_56602 = (state_56636[(16)]);
var inst_56603 = (state_56636[(17)]);
var _ = (function (){var statearr_56667 = state_56636;
(statearr_56667[(4)] = cljs.core.cons((35),(state_56636[(4)])));

return statearr_56667;
})();
var inst_56591 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56592 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56593 = [(1),(2)];
var inst_56594 = (new cljs.core.PersistentVector(null,2,(5),inst_56592,inst_56593,null));
var inst_56595 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56596 = [(3),(4)];
var inst_56597 = (new cljs.core.PersistentVector(null,2,(5),inst_56595,inst_56596,null));
var inst_56598 = [inst_56594,inst_56597];
var inst_56599 = (new cljs.core.PersistentVector(null,2,(5),inst_56591,inst_56598,null));
var inst_56600 = cljs.core.deref(inst_56423);
var inst_56601 = (new cljs.core.List(null,inst_56600,null,(1),null));
var inst_56602__$1 = (new cljs.core.List(null,inst_56599,inst_56601,(2),null));
var inst_56603__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56602__$1);
var state_56636__$1 = (function (){var statearr_56668 = state_56636;
(statearr_56668[(16)] = inst_56602__$1);

(statearr_56668[(17)] = inst_56603__$1);

return statearr_56668;
})();
if(cljs.core.truth_(inst_56603__$1)){
var statearr_56669_56956 = state_56636__$1;
(statearr_56669_56956[(1)] = (36));

} else {
var statearr_56670_56957 = state_56636__$1;
(statearr_56670_56957[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (33))){
var inst_56633 = (state_56636[(2)]);
var inst_56634 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56636__$1 = (function (){var statearr_56671 = state_56636;
(statearr_56671[(18)] = inst_56633);

return statearr_56671;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56636__$1,inst_56634);
} else {
if((state_val_56637 === (13))){
var inst_56423 = (state_56636[(9)]);
var inst_56496 = (state_56636[(19)]);
var inst_56497 = (state_56636[(20)]);
var _ = (function (){var statearr_56672 = state_56636;
(statearr_56672[(4)] = cljs.core.cons((16),(state_56636[(4)])));

return statearr_56672;
})();
var inst_56488 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56489 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56490 = [(1),(2)];
var inst_56491 = (new cljs.core.PersistentVector(null,2,(5),inst_56489,inst_56490,null));
var inst_56492 = [inst_56491];
var inst_56493 = (new cljs.core.PersistentVector(null,1,(5),inst_56488,inst_56492,null));
var inst_56494 = cljs.core.deref(inst_56423);
var inst_56495 = (new cljs.core.List(null,inst_56494,null,(1),null));
var inst_56496__$1 = (new cljs.core.List(null,inst_56493,inst_56495,(2),null));
var inst_56497__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56496__$1);
var state_56636__$1 = (function (){var statearr_56673 = state_56636;
(statearr_56673[(19)] = inst_56496__$1);

(statearr_56673[(20)] = inst_56497__$1);

return statearr_56673;
})();
if(cljs.core.truth_(inst_56497__$1)){
var statearr_56674_56958 = state_56636__$1;
(statearr_56674_56958[(1)] = (17));

} else {
var statearr_56675_56959 = state_56636__$1;
(statearr_56675_56959[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (22))){
var inst_56528 = (state_56636[(2)]);
var inst_56529 = cljs.core.async.timeout((20));
var state_56636__$1 = (function (){var statearr_56676 = state_56636;
(statearr_56676[(21)] = inst_56528);

return statearr_56676;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56636__$1,(23),inst_56529);
} else {
if((state_val_56637 === (36))){
var inst_56602 = (state_56636[(16)]);
var inst_56611 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56612 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56613 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56614 = cljs.core.cons(inst_56613,inst_56602);
var inst_56615 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56612,60,inst_56614,"Should flush 3,4 after timeout from first message"];
var inst_56616 = cljs.core.PersistentHashMap.fromArrays(inst_56611,inst_56615);
var inst_56617 = cljs.test.report.call(null,inst_56616);
var state_56636__$1 = state_56636;
var statearr_56677_56960 = state_56636__$1;
(statearr_56677_56960[(2)] = inst_56617);

(statearr_56677_56960[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (29))){
var inst_56551 = (state_56636[(11)]);
var inst_56562 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56563 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56564 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56565 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56566 = cljs.core.cons(inst_56565,inst_56551);
var inst_56567 = (new cljs.core.List(null,inst_56566,null,(1),null));
var inst_56568 = (new cljs.core.List(null,inst_56564,inst_56567,(2),null));
var inst_56569 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56563,57,inst_56568,"Should not flush 3,4 yet"];
var inst_56570 = cljs.core.PersistentHashMap.fromArrays(inst_56562,inst_56569);
var inst_56571 = cljs.test.report.call(null,inst_56570);
var state_56636__$1 = state_56636;
var statearr_56678_56961 = state_56636__$1;
(statearr_56678_56961[(2)] = inst_56571);

(statearr_56678_56961[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (6))){
var inst_56473 = (state_56636[(2)]);
var inst_56474 = cljs.core.async.timeout((100));
var state_56636__$1 = (function (){var statearr_56679 = state_56636;
(statearr_56679[(22)] = inst_56473);

return statearr_56679;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56636__$1,(12),inst_56474);
} else {
if((state_val_56637 === (28))){
var inst_56551 = (state_56636[(11)]);
var inst_56554 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56555 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56556 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56557 = cljs.core.cons(inst_56556,inst_56551);
var inst_56558 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56555,57,inst_56557,"Should not flush 3,4 yet"];
var inst_56559 = cljs.core.PersistentHashMap.fromArrays(inst_56554,inst_56558);
var inst_56560 = cljs.test.report.call(null,inst_56559);
var state_56636__$1 = state_56636;
var statearr_56680_56963 = state_56636__$1;
(statearr_56680_56963[(2)] = inst_56560);

(statearr_56680_56963[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (25))){
var inst_56576 = (state_56636[(2)]);
var inst_56577 = cljs.core.async.timeout((80));
var state_56636__$1 = (function (){var statearr_56681 = state_56636;
(statearr_56681[(23)] = inst_56576);

return statearr_56681;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56636__$1,(31),inst_56577);
} else {
if((state_val_56637 === (34))){
var inst_56580 = (state_56636[(2)]);
var inst_56581 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56582 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56583 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56582,60,inst_56580,"Should flush 3,4 after timeout from first message"];
var inst_56584 = cljs.core.PersistentHashMap.fromArrays(inst_56581,inst_56583);
var inst_56585 = cljs.test.report.call(null,inst_56584);
var state_56636__$1 = state_56636;
var statearr_56682_56964 = state_56636__$1;
(statearr_56682_56964[(2)] = inst_56585);

(statearr_56682_56964[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (17))){
var inst_56496 = (state_56636[(19)]);
var inst_56499 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56500 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56501 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56502 = cljs.core.cons(inst_56501,inst_56496);
var inst_56503 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56500,50,inst_56502,"Should flush after timeout"];
var inst_56504 = cljs.core.PersistentHashMap.fromArrays(inst_56499,inst_56503);
var inst_56505 = cljs.test.report.call(null,inst_56504);
var state_56636__$1 = state_56636;
var statearr_56683_56965 = state_56636__$1;
(statearr_56683_56965[(2)] = inst_56505);

(statearr_56683_56965[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (3))){
var inst_56432 = (state_56636[(2)]);
var inst_56433 = cljs.core.async.timeout((50));
var state_56636__$1 = (function (){var statearr_56684 = state_56636;
(statearr_56684[(24)] = inst_56432);

return statearr_56684;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56636__$1,(4),inst_56433);
} else {
if((state_val_56637 === (12))){
var inst_56476 = (state_56636[(2)]);
var state_56636__$1 = (function (){var statearr_56685 = state_56636;
(statearr_56685[(25)] = inst_56476);

return statearr_56685;
})();
var statearr_56686_56969 = state_56636__$1;
(statearr_56686_56969[(2)] = null);

(statearr_56686_56969[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (2))){
var inst_56421 = (state_56636[(8)]);
var inst_56430 = (state_56636[(2)]);
var state_56636__$1 = (function (){var statearr_56688 = state_56636;
(statearr_56688[(26)] = inst_56430);

return statearr_56688;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56636__$1,(3),inst_56421,(2));
} else {
if((state_val_56637 === (23))){
var inst_56531 = (state_56636[(2)]);
var state_56636__$1 = (function (){var statearr_56689 = state_56636;
(statearr_56689[(27)] = inst_56531);

return statearr_56689;
})();
var statearr_56690_56970 = state_56636__$1;
(statearr_56690_56970[(2)] = null);

(statearr_56690_56970[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (35))){
var _ = (function (){var statearr_56691 = state_56636;
(statearr_56691[(4)] = cljs.core.rest((state_56636[(4)])));

return statearr_56691;
})();
var state_56636__$1 = state_56636;
var ex56687 = (state_56636__$1[(2)]);
var statearr_56692_56971 = state_56636__$1;
(statearr_56692_56971[(5)] = ex56687);


var statearr_56693_56972 = state_56636__$1;
(statearr_56693_56972[(1)] = (34));

(statearr_56693_56972[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (19))){
var inst_56497 = (state_56636[(20)]);
var inst_56518 = (state_56636[(2)]);
var _ = (function (){var statearr_56694 = state_56636;
(statearr_56694[(4)] = cljs.core.rest((state_56636[(4)])));

return statearr_56694;
})();
var state_56636__$1 = (function (){var statearr_56695 = state_56636;
(statearr_56695[(28)] = inst_56518);

return statearr_56695;
})();
var statearr_56696_56973 = state_56636__$1;
(statearr_56696_56973[(2)] = inst_56497);

(statearr_56696_56973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (11))){
var inst_56449 = (state_56636[(29)]);
var inst_56470 = (state_56636[(2)]);
var _ = (function (){var statearr_56697 = state_56636;
(statearr_56697[(4)] = cljs.core.rest((state_56636[(4)])));

return statearr_56697;
})();
var state_56636__$1 = (function (){var statearr_56698 = state_56636;
(statearr_56698[(30)] = inst_56470);

return statearr_56698;
})();
var statearr_56699_56974 = state_56636__$1;
(statearr_56699_56974[(2)] = inst_56449);

(statearr_56699_56974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (9))){
var inst_56448 = (state_56636[(31)]);
var inst_56451 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56452 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56453 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56454 = cljs.core.cons(inst_56453,inst_56448);
var inst_56455 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56452,47,inst_56454,"Should not flush before timeout"];
var inst_56456 = cljs.core.PersistentHashMap.fromArrays(inst_56451,inst_56455);
var inst_56457 = cljs.test.report.call(null,inst_56456);
var state_56636__$1 = state_56636;
var statearr_56700_56975 = state_56636__$1;
(statearr_56700_56975[(2)] = inst_56457);

(statearr_56700_56975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (5))){
var inst_56423 = (state_56636[(9)]);
var inst_56448 = (state_56636[(31)]);
var inst_56449 = (state_56636[(29)]);
var _ = (function (){var statearr_56701 = state_56636;
(statearr_56701[(4)] = cljs.core.cons((8),(state_56636[(4)])));

return statearr_56701;
})();
var inst_56447 = cljs.core.deref(inst_56423);
var inst_56448__$1 = (new cljs.core.List(null,inst_56447,null,(1),null));
var inst_56449__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56448__$1);
var state_56636__$1 = (function (){var statearr_56702 = state_56636;
(statearr_56702[(31)] = inst_56448__$1);

(statearr_56702[(29)] = inst_56449__$1);

return statearr_56702;
})();
if(cljs.core.truth_(inst_56449__$1)){
var statearr_56703_56977 = state_56636__$1;
(statearr_56703_56977[(1)] = (9));

} else {
var statearr_56704_56978 = state_56636__$1;
(statearr_56704_56978[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (14))){
var inst_56421 = (state_56636[(8)]);
var inst_56521 = (state_56636[(2)]);
var state_56636__$1 = (function (){var statearr_56706 = state_56636;
(statearr_56706[(32)] = inst_56521);

return statearr_56706;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56636__$1,(20),inst_56421,(3));
} else {
if((state_val_56637 === (26))){
var inst_56532 = (state_56636[(2)]);
var inst_56533 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56534 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56535 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56534,57,inst_56532,"Should not flush 3,4 yet"];
var inst_56536 = cljs.core.PersistentHashMap.fromArrays(inst_56533,inst_56535);
var inst_56537 = cljs.test.report.call(null,inst_56536);
var state_56636__$1 = state_56636;
var statearr_56711_56979 = state_56636__$1;
(statearr_56711_56979[(2)] = inst_56537);

(statearr_56711_56979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (16))){
var _ = (function (){var statearr_56712 = state_56636;
(statearr_56712[(4)] = cljs.core.rest((state_56636[(4)])));

return statearr_56712;
})();
var state_56636__$1 = state_56636;
var ex56705 = (state_56636__$1[(2)]);
var statearr_56714_56980 = state_56636__$1;
(statearr_56714_56980[(5)] = ex56705);


var statearr_56716_56981 = state_56636__$1;
(statearr_56716_56981[(1)] = (15));

(statearr_56716_56981[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (38))){
var inst_56603 = (state_56636[(17)]);
var inst_56630 = (state_56636[(2)]);
var _ = (function (){var statearr_56722 = state_56636;
(statearr_56722[(4)] = cljs.core.rest((state_56636[(4)])));

return statearr_56722;
})();
var state_56636__$1 = (function (){var statearr_56723 = state_56636;
(statearr_56723[(33)] = inst_56630);

return statearr_56723;
})();
var statearr_56724_56982 = state_56636__$1;
(statearr_56724_56982[(2)] = inst_56603);

(statearr_56724_56982[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (30))){
var inst_56552 = (state_56636[(12)]);
var inst_56573 = (state_56636[(2)]);
var _ = (function (){var statearr_56726 = state_56636;
(statearr_56726[(4)] = cljs.core.rest((state_56636[(4)])));

return statearr_56726;
})();
var state_56636__$1 = (function (){var statearr_56727 = state_56636;
(statearr_56727[(34)] = inst_56573);

return statearr_56727;
})();
var statearr_56728_56983 = state_56636__$1;
(statearr_56728_56983[(2)] = inst_56552);

(statearr_56728_56983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (10))){
var inst_56448 = (state_56636[(31)]);
var inst_56459 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56460 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56461 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56462 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56463 = cljs.core.cons(inst_56462,inst_56448);
var inst_56464 = (new cljs.core.List(null,inst_56463,null,(1),null));
var inst_56465 = (new cljs.core.List(null,inst_56461,inst_56464,(2),null));
var inst_56466 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56460,47,inst_56465,"Should not flush before timeout"];
var inst_56467 = cljs.core.PersistentHashMap.fromArrays(inst_56459,inst_56466);
var inst_56468 = cljs.test.report.call(null,inst_56467);
var state_56636__$1 = state_56636;
var statearr_56730_56984 = state_56636__$1;
(statearr_56730_56984[(2)] = inst_56468);

(statearr_56730_56984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (18))){
var inst_56496 = (state_56636[(19)]);
var inst_56507 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56508 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56509 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56510 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56511 = cljs.core.cons(inst_56510,inst_56496);
var inst_56512 = (new cljs.core.List(null,inst_56511,null,(1),null));
var inst_56513 = (new cljs.core.List(null,inst_56509,inst_56512,(2),null));
var inst_56514 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56508,50,inst_56513,"Should flush after timeout"];
var inst_56515 = cljs.core.PersistentHashMap.fromArrays(inst_56507,inst_56514);
var inst_56516 = cljs.test.report.call(null,inst_56515);
var state_56636__$1 = state_56636;
var statearr_56732_56989 = state_56636__$1;
(statearr_56732_56989[(2)] = inst_56516);

(statearr_56732_56989[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (37))){
var inst_56602 = (state_56636[(16)]);
var inst_56619 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56620 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56621 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56622 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56623 = cljs.core.cons(inst_56622,inst_56602);
var inst_56624 = (new cljs.core.List(null,inst_56623,null,(1),null));
var inst_56625 = (new cljs.core.List(null,inst_56621,inst_56624,(2),null));
var inst_56626 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56620,60,inst_56625,"Should flush 3,4 after timeout from first message"];
var inst_56627 = cljs.core.PersistentHashMap.fromArrays(inst_56619,inst_56626);
var inst_56628 = cljs.test.report.call(null,inst_56627);
var state_56636__$1 = state_56636;
var statearr_56735_56990 = state_56636__$1;
(statearr_56735_56990[(2)] = inst_56628);

(statearr_56735_56990[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56637 === (8))){
var _ = (function (){var statearr_56736 = state_56636;
(statearr_56736[(4)] = cljs.core.rest((state_56636[(4)])));

return statearr_56736;
})();
var state_56636__$1 = state_56636;
var ex56731 = (state_56636__$1[(2)]);
var statearr_56737_56991 = state_56636__$1;
(statearr_56737_56991[(5)] = ex56731);


var statearr_56739_56993 = state_56636__$1;
(statearr_56739_56993[(1)] = (7));

(statearr_56739_56993[(5)] = null);



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
var statearr_56743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56743[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56743[(1)] = (1));

return statearr_56743;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56636){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56636);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56745){var ex__32294__auto__ = e56745;
var statearr_56746_56997 = state_56636;
(statearr_56746_56997[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56636[(4)]))){
var statearr_56749_56998 = state_56636;
(statearr_56749_56998[(1)] = cljs.core.first((state_56636[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56999 = state_56636;
state_56636 = G__56999;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56636){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56636);
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

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56411","meta56411",-1771818948,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56410.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56410.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56410");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56410.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56410");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56410.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56410 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56410(meta56411){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56410(meta56411));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56410(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56753 = (function (meta56754){
this.meta56754 = meta56754;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56755,meta56754__$1){
var self__ = this;
var _56755__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56753(meta56754__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56755){
var self__ = this;
var _56755__$1 = this;
return self__.meta56754;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56753.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56753.prototype.call = (function (unused__11801__auto__){
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

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56753.prototype.apply = (function (self__,args56757){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56757)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56753.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56822){
var state_val_56823 = (state_56822[(1)]);
if((state_val_56823 === (7))){
var inst_56775 = (state_56822[(2)]);
var inst_56776 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56777 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56778 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_56777,78,inst_56775,"Closing input should flush remaining"];
var inst_56779 = cljs.core.PersistentHashMap.fromArrays(inst_56776,inst_56778);
var inst_56780 = cljs.test.report.call(null,inst_56779);
var state_56822__$1 = state_56822;
var statearr_56826_57004 = state_56822__$1;
(statearr_56826_57004[(2)] = inst_56780);

(statearr_56826_57004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56823 === (1))){
var inst_56759 = (state_56822[(7)]);
var inst_56761 = (state_56822[(8)]);
var inst_56759__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56760 = cljs.core.PersistentVector.EMPTY;
var inst_56761__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56760);
var inst_56762 = (function (){var input_ch = inst_56759__$1;
var results = inst_56761__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56763 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56764 = [inst_56759__$1,inst_56762];
var inst_56765 = cljs.core.PersistentHashMap.fromArrays(inst_56763,inst_56764);
var inst_56766 = bb_web_ds_tools.components.async_buffer.create(inst_56765);
var state_56822__$1 = (function (){var statearr_56827 = state_56822;
(statearr_56827[(7)] = inst_56759__$1);

(statearr_56827[(8)] = inst_56761__$1);

(statearr_56827[(9)] = inst_56766);

return statearr_56827;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56822__$1,(2),inst_56759__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_56823 === (4))){
var inst_56774 = (state_56822[(2)]);
var state_56822__$1 = (function (){var statearr_56828 = state_56822;
(statearr_56828[(10)] = inst_56774);

return statearr_56828;
})();
var statearr_56829_57006 = state_56822__$1;
(statearr_56829_57006[(2)] = null);

(statearr_56829_57006[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56823 === (6))){
var inst_56819 = (state_56822[(2)]);
var inst_56820 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56822__$1 = (function (){var statearr_56836 = state_56822;
(statearr_56836[(11)] = inst_56819);

return statearr_56836;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56822__$1,inst_56820);
} else {
if((state_val_56823 === (3))){
var inst_56759 = (state_56822[(7)]);
var inst_56770 = (state_56822[(2)]);
var inst_56771 = cljs.core.async.close_BANG_(inst_56759);
var inst_56772 = cljs.core.async.timeout((20));
var state_56822__$1 = (function (){var statearr_56837 = state_56822;
(statearr_56837[(12)] = inst_56770);

(statearr_56837[(13)] = inst_56771);

return statearr_56837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56822__$1,(4),inst_56772);
} else {
if((state_val_56823 === (2))){
var inst_56759 = (state_56822[(7)]);
var inst_56768 = (state_56822[(2)]);
var state_56822__$1 = (function (){var statearr_56839 = state_56822;
(statearr_56839[(14)] = inst_56768);

return statearr_56839;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56822__$1,(3),inst_56759,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_56823 === (11))){
var inst_56795 = (state_56822[(15)]);
var inst_56816 = (state_56822[(2)]);
var _ = (function (){var statearr_56843 = state_56822;
(statearr_56843[(4)] = cljs.core.rest((state_56822[(4)])));

return statearr_56843;
})();
var state_56822__$1 = (function (){var statearr_56844 = state_56822;
(statearr_56844[(16)] = inst_56816);

return statearr_56844;
})();
var statearr_56845_57012 = state_56822__$1;
(statearr_56845_57012[(2)] = inst_56795);

(statearr_56845_57012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56823 === (9))){
var inst_56794 = (state_56822[(17)]);
var inst_56797 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56798 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56799 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56800 = cljs.core.cons(inst_56799,inst_56794);
var inst_56801 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_56798,78,inst_56800,"Closing input should flush remaining"];
var inst_56802 = cljs.core.PersistentHashMap.fromArrays(inst_56797,inst_56801);
var inst_56803 = cljs.test.report.call(null,inst_56802);
var state_56822__$1 = state_56822;
var statearr_56846_57014 = state_56822__$1;
(statearr_56846_57014[(2)] = inst_56803);

(statearr_56846_57014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56823 === (5))){
var inst_56761 = (state_56822[(8)]);
var inst_56794 = (state_56822[(17)]);
var inst_56795 = (state_56822[(15)]);
var _ = (function (){var statearr_56850 = state_56822;
(statearr_56850[(4)] = cljs.core.cons((8),(state_56822[(4)])));

return statearr_56850;
})();
var inst_56786 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56787 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56788 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_56789 = (new cljs.core.PersistentVector(null,2,(5),inst_56787,inst_56788,null));
var inst_56790 = [inst_56789];
var inst_56791 = (new cljs.core.PersistentVector(null,1,(5),inst_56786,inst_56790,null));
var inst_56792 = cljs.core.deref(inst_56761);
var inst_56793 = (new cljs.core.List(null,inst_56792,null,(1),null));
var inst_56794__$1 = (new cljs.core.List(null,inst_56791,inst_56793,(2),null));
var inst_56795__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56794__$1);
var state_56822__$1 = (function (){var statearr_56854 = state_56822;
(statearr_56854[(17)] = inst_56794__$1);

(statearr_56854[(15)] = inst_56795__$1);

return statearr_56854;
})();
if(cljs.core.truth_(inst_56795__$1)){
var statearr_56856_57015 = state_56822__$1;
(statearr_56856_57015[(1)] = (9));

} else {
var statearr_56857_57017 = state_56822__$1;
(statearr_56857_57017[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56823 === (10))){
var inst_56794 = (state_56822[(17)]);
var inst_56805 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56806 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56807 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56808 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56809 = cljs.core.cons(inst_56808,inst_56794);
var inst_56810 = (new cljs.core.List(null,inst_56809,null,(1),null));
var inst_56811 = (new cljs.core.List(null,inst_56807,inst_56810,(2),null));
var inst_56812 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_56806,78,inst_56811,"Closing input should flush remaining"];
var inst_56813 = cljs.core.PersistentHashMap.fromArrays(inst_56805,inst_56812);
var inst_56814 = cljs.test.report.call(null,inst_56813);
var state_56822__$1 = state_56822;
var statearr_56859_57020 = state_56822__$1;
(statearr_56859_57020[(2)] = inst_56814);

(statearr_56859_57020[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56823 === (8))){
var _ = (function (){var statearr_56862 = state_56822;
(statearr_56862[(4)] = cljs.core.rest((state_56822[(4)])));

return statearr_56862;
})();
var state_56822__$1 = state_56822;
var ex56847 = (state_56822__$1[(2)]);
var statearr_56864_57021 = state_56822__$1;
(statearr_56864_57021[(5)] = ex56847);


var statearr_56865_57022 = state_56822__$1;
(statearr_56865_57022[(1)] = (7));

(statearr_56865_57022[(5)] = null);



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
var statearr_56867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56867[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56867[(1)] = (1));

return statearr_56867;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56822){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56822);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56871){var ex__32294__auto__ = e56871;
var statearr_56872_57030 = state_56822;
(statearr_56872_57030[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56822[(4)]))){
var statearr_56874_57032 = state_56822;
(statearr_56874_57032[(1)] = cljs.core.first((state_56822[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57033 = state_56822;
state_56822 = G__57033;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56822){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56875 = f__32362__auto__();
(statearr_56875[(6)] = c__32361__auto__);

return statearr_56875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56754","meta56754",-1414032869,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56753.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56753.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56753");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56753.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56753");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56753.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56753 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56753(meta56754){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56753(meta56754));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56753(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
