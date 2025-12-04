goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56146 = (function (meta56147){
this.meta56147 = meta56147;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56148,meta56147__$1){
var self__ = this;
var _56148__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56146(meta56147__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56148){
var self__ = this;
var _56148__$1 = this;
return self__.meta56147;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56146.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56146.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56176 = (arguments.length - (1));
switch (G__56176) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56146.prototype.apply = (function (self__,args56150){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56150)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56146.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56342){
var state_val_56343 = (state_56342[(1)]);
if((state_val_56343 === (7))){
var inst_56197 = (state_56342[(2)]);
var inst_56198 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56199 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56200 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56199,19,inst_56197,"Buffer should not flush automatically without timer"];
var inst_56201 = cljs.core.PersistentHashMap.fromArrays(inst_56198,inst_56200);
var inst_56202 = cljs.test.report.call(null,inst_56201);
var state_56342__$1 = state_56342;
var statearr_56345_56914 = state_56342__$1;
(statearr_56345_56914[(2)] = inst_56202);

(statearr_56345_56914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (20))){
var inst_56189 = (state_56342[(7)]);
var inst_56286 = (state_56342[(2)]);
var inst_56287 = (inst_56189.cljs$core$IFn$_invoke$arity$0 ? inst_56189.cljs$core$IFn$_invoke$arity$0() : inst_56189.call(null));
var inst_56288 = cljs.core.async.timeout((20));
var state_56342__$1 = (function (){var statearr_56346 = state_56342;
(statearr_56346[(8)] = inst_56286);

(statearr_56346[(9)] = inst_56287);

return statearr_56346;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56342__$1,(21),inst_56288);
} else {
if((state_val_56343 === (27))){
var inst_56313 = (state_56342[(10)]);
var inst_56324 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56325 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56326 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56327 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56328 = cljs.core.cons(inst_56327,inst_56313);
var inst_56329 = (new cljs.core.List(null,inst_56328,null,(1),null));
var inst_56330 = (new cljs.core.List(null,inst_56326,inst_56329,(2),null));
var inst_56331 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56325,29,inst_56330,"Subsequent flush should work"];
var inst_56332 = cljs.core.PersistentHashMap.fromArrays(inst_56324,inst_56331);
var inst_56333 = cljs.test.report.call(null,inst_56332);
var state_56342__$1 = state_56342;
var statearr_56347_56917 = state_56342__$1;
(statearr_56347_56917[(2)] = inst_56333);

(statearr_56347_56917[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (1))){
var inst_56177 = (state_56342[(11)]);
var inst_56179 = (state_56342[(12)]);
var inst_56177__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56178 = cljs.core.PersistentVector.EMPTY;
var inst_56179__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56178);
var inst_56180 = (function (){var input_ch = inst_56177__$1;
var results = inst_56179__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56181 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56187 = [inst_56177__$1,inst_56180];
var inst_56188 = cljs.core.PersistentHashMap.fromArrays(inst_56181,inst_56187);
var inst_56189 = bb_web_ds_tools.components.async_buffer.create(inst_56188);
var state_56342__$1 = (function (){var statearr_56348 = state_56342;
(statearr_56348[(11)] = inst_56177__$1);

(statearr_56348[(12)] = inst_56179__$1);

(statearr_56348[(7)] = inst_56189);

return statearr_56348;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56342__$1,(2),inst_56177__$1,(1));
} else {
if((state_val_56343 === (24))){
var inst_56291 = (state_56342[(2)]);
var inst_56292 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56293 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56294 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56293,29,inst_56291,"Subsequent flush should work"];
var inst_56295 = cljs.core.PersistentHashMap.fromArrays(inst_56292,inst_56294);
var inst_56296 = cljs.test.report.call(null,inst_56295);
var state_56342__$1 = state_56342;
var statearr_56351_56922 = state_56342__$1;
(statearr_56351_56922[(2)] = inst_56296);

(statearr_56351_56922[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (4))){
var inst_56196 = (state_56342[(2)]);
var state_56342__$1 = (function (){var statearr_56352 = state_56342;
(statearr_56352[(13)] = inst_56196);

return statearr_56352;
})();
var statearr_56353_56923 = state_56342__$1;
(statearr_56353_56923[(2)] = null);

(statearr_56353_56923[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (15))){
var inst_56239 = (state_56342[(2)]);
var inst_56240 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56241 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56242 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56241,24,inst_56239,"Manual flush should flush all items"];
var inst_56243 = cljs.core.PersistentHashMap.fromArrays(inst_56240,inst_56242);
var inst_56244 = cljs.test.report.call(null,inst_56243);
var state_56342__$1 = state_56342;
var statearr_56359_56927 = state_56342__$1;
(statearr_56359_56927[(2)] = inst_56244);

(statearr_56359_56927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (21))){
var inst_56290 = (state_56342[(2)]);
var state_56342__$1 = (function (){var statearr_56360 = state_56342;
(statearr_56360[(14)] = inst_56290);

return statearr_56360;
})();
var statearr_56361_56929 = state_56342__$1;
(statearr_56361_56929[(2)] = null);

(statearr_56361_56929[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (13))){
var inst_56179 = (state_56342[(12)]);
var inst_56258 = (state_56342[(15)]);
var inst_56259 = (state_56342[(16)]);
var _ = (function (){var statearr_56362 = state_56342;
(statearr_56362[(4)] = cljs.core.cons((16),(state_56342[(4)])));

return statearr_56362;
})();
var inst_56250 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56251 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56252 = [(1),(2)];
var inst_56253 = (new cljs.core.PersistentVector(null,2,(5),inst_56251,inst_56252,null));
var inst_56254 = [inst_56253];
var inst_56255 = (new cljs.core.PersistentVector(null,1,(5),inst_56250,inst_56254,null));
var inst_56256 = cljs.core.deref(inst_56179);
var inst_56257 = (new cljs.core.List(null,inst_56256,null,(1),null));
var inst_56258__$1 = (new cljs.core.List(null,inst_56255,inst_56257,(2),null));
var inst_56259__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56258__$1);
var state_56342__$1 = (function (){var statearr_56366 = state_56342;
(statearr_56366[(15)] = inst_56258__$1);

(statearr_56366[(16)] = inst_56259__$1);

return statearr_56366;
})();
if(cljs.core.truth_(inst_56259__$1)){
var statearr_56368_56931 = state_56342__$1;
(statearr_56368_56931[(1)] = (17));

} else {
var statearr_56369_56932 = state_56342__$1;
(statearr_56369_56932[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (22))){
var inst_56179 = (state_56342[(12)]);
var inst_56313 = (state_56342[(10)]);
var inst_56314 = (state_56342[(17)]);
var _ = (function (){var statearr_56370 = state_56342;
(statearr_56370[(4)] = cljs.core.cons((25),(state_56342[(4)])));

return statearr_56370;
})();
var inst_56302 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56303 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56304 = [(1),(2)];
var inst_56305 = (new cljs.core.PersistentVector(null,2,(5),inst_56303,inst_56304,null));
var inst_56306 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56307 = [(3)];
var inst_56308 = (new cljs.core.PersistentVector(null,1,(5),inst_56306,inst_56307,null));
var inst_56309 = [inst_56305,inst_56308];
var inst_56310 = (new cljs.core.PersistentVector(null,2,(5),inst_56302,inst_56309,null));
var inst_56311 = cljs.core.deref(inst_56179);
var inst_56312 = (new cljs.core.List(null,inst_56311,null,(1),null));
var inst_56313__$1 = (new cljs.core.List(null,inst_56310,inst_56312,(2),null));
var inst_56314__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56313__$1);
var state_56342__$1 = (function (){var statearr_56371 = state_56342;
(statearr_56371[(10)] = inst_56313__$1);

(statearr_56371[(17)] = inst_56314__$1);

return statearr_56371;
})();
if(cljs.core.truth_(inst_56314__$1)){
var statearr_56372_56933 = state_56342__$1;
(statearr_56372_56933[(1)] = (26));

} else {
var statearr_56373_56934 = state_56342__$1;
(statearr_56373_56934[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (6))){
var inst_56189 = (state_56342[(7)]);
var inst_56234 = (state_56342[(2)]);
var inst_56235 = (inst_56189.cljs$core$IFn$_invoke$arity$0 ? inst_56189.cljs$core$IFn$_invoke$arity$0() : inst_56189.call(null));
var inst_56236 = cljs.core.async.timeout((20));
var state_56342__$1 = (function (){var statearr_56375 = state_56342;
(statearr_56375[(18)] = inst_56234);

(statearr_56375[(19)] = inst_56235);

return statearr_56375;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56342__$1,(12),inst_56236);
} else {
if((state_val_56343 === (28))){
var inst_56314 = (state_56342[(17)]);
var inst_56335 = (state_56342[(2)]);
var _ = (function (){var statearr_56377 = state_56342;
(statearr_56377[(4)] = cljs.core.rest((state_56342[(4)])));

return statearr_56377;
})();
var state_56342__$1 = (function (){var statearr_56378 = state_56342;
(statearr_56378[(20)] = inst_56335);

return statearr_56378;
})();
var statearr_56379_56936 = state_56342__$1;
(statearr_56379_56936[(2)] = inst_56314);

(statearr_56379_56936[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (25))){
var _ = (function (){var statearr_56380 = state_56342;
(statearr_56380[(4)] = cljs.core.rest((state_56342[(4)])));

return statearr_56380;
})();
var state_56342__$1 = state_56342;
var ex56374 = (state_56342__$1[(2)]);
var statearr_56381_56937 = state_56342__$1;
(statearr_56381_56937[(5)] = ex56374);


var statearr_56382_56938 = state_56342__$1;
(statearr_56382_56938[(1)] = (24));

(statearr_56382_56938[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (17))){
var inst_56258 = (state_56342[(15)]);
var inst_56261 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56262 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56263 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56264 = cljs.core.cons(inst_56263,inst_56258);
var inst_56265 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56262,24,inst_56264,"Manual flush should flush all items"];
var inst_56266 = cljs.core.PersistentHashMap.fromArrays(inst_56261,inst_56265);
var inst_56267 = cljs.test.report.call(null,inst_56266);
var state_56342__$1 = state_56342;
var statearr_56384_56939 = state_56342__$1;
(statearr_56384_56939[(2)] = inst_56267);

(statearr_56384_56939[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (3))){
var inst_56193 = (state_56342[(2)]);
var inst_56194 = cljs.core.async.timeout((20));
var state_56342__$1 = (function (){var statearr_56385 = state_56342;
(statearr_56385[(21)] = inst_56193);

return statearr_56385;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56342__$1,(4),inst_56194);
} else {
if((state_val_56343 === (12))){
var inst_56238 = (state_56342[(2)]);
var state_56342__$1 = (function (){var statearr_56386 = state_56342;
(statearr_56386[(22)] = inst_56238);

return statearr_56386;
})();
var statearr_56387_56940 = state_56342__$1;
(statearr_56387_56940[(2)] = null);

(statearr_56387_56940[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (2))){
var inst_56177 = (state_56342[(11)]);
var inst_56191 = (state_56342[(2)]);
var state_56342__$1 = (function (){var statearr_56390 = state_56342;
(statearr_56390[(23)] = inst_56191);

return statearr_56390;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56342__$1,(3),inst_56177,(2));
} else {
if((state_val_56343 === (23))){
var inst_56339 = (state_56342[(2)]);
var inst_56340 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56342__$1 = (function (){var statearr_56392 = state_56342;
(statearr_56392[(24)] = inst_56339);

return statearr_56392;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56342__$1,inst_56340);
} else {
if((state_val_56343 === (19))){
var inst_56259 = (state_56342[(16)]);
var inst_56281 = (state_56342[(2)]);
var _ = (function (){var statearr_56394 = state_56342;
(statearr_56394[(4)] = cljs.core.rest((state_56342[(4)])));

return statearr_56394;
})();
var state_56342__$1 = (function (){var statearr_56396 = state_56342;
(statearr_56396[(25)] = inst_56281);

return statearr_56396;
})();
var statearr_56397_56941 = state_56342__$1;
(statearr_56397_56941[(2)] = inst_56259);

(statearr_56397_56941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (11))){
var inst_56210 = (state_56342[(26)]);
var inst_56231 = (state_56342[(2)]);
var _ = (function (){var statearr_56401 = state_56342;
(statearr_56401[(4)] = cljs.core.rest((state_56342[(4)])));

return statearr_56401;
})();
var state_56342__$1 = (function (){var statearr_56403 = state_56342;
(statearr_56403[(27)] = inst_56231);

return statearr_56403;
})();
var statearr_56404_56942 = state_56342__$1;
(statearr_56404_56942[(2)] = inst_56210);

(statearr_56404_56942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (9))){
var inst_56209 = (state_56342[(28)]);
var inst_56212 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56213 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56214 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56215 = cljs.core.cons(inst_56214,inst_56209);
var inst_56216 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56213,19,inst_56215,"Buffer should not flush automatically without timer"];
var inst_56217 = cljs.core.PersistentHashMap.fromArrays(inst_56212,inst_56216);
var inst_56218 = cljs.test.report.call(null,inst_56217);
var state_56342__$1 = state_56342;
var statearr_56409_56943 = state_56342__$1;
(statearr_56409_56943[(2)] = inst_56218);

(statearr_56409_56943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (5))){
var inst_56179 = (state_56342[(12)]);
var inst_56209 = (state_56342[(28)]);
var inst_56210 = (state_56342[(26)]);
var _ = (function (){var statearr_56411 = state_56342;
(statearr_56411[(4)] = cljs.core.cons((8),(state_56342[(4)])));

return statearr_56411;
})();
var inst_56208 = cljs.core.deref(inst_56179);
var inst_56209__$1 = (new cljs.core.List(null,inst_56208,null,(1),null));
var inst_56210__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56209__$1);
var state_56342__$1 = (function (){var statearr_56412 = state_56342;
(statearr_56412[(28)] = inst_56209__$1);

(statearr_56412[(26)] = inst_56210__$1);

return statearr_56412;
})();
if(cljs.core.truth_(inst_56210__$1)){
var statearr_56413_56944 = state_56342__$1;
(statearr_56413_56944[(1)] = (9));

} else {
var statearr_56414_56945 = state_56342__$1;
(statearr_56414_56945[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (14))){
var inst_56177 = (state_56342[(11)]);
var inst_56284 = (state_56342[(2)]);
var state_56342__$1 = (function (){var statearr_56417 = state_56342;
(statearr_56417[(29)] = inst_56284);

return statearr_56417;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56342__$1,(20),inst_56177,(3));
} else {
if((state_val_56343 === (26))){
var inst_56313 = (state_56342[(10)]);
var inst_56316 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56317 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56318 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56319 = cljs.core.cons(inst_56318,inst_56313);
var inst_56320 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56317,29,inst_56319,"Subsequent flush should work"];
var inst_56321 = cljs.core.PersistentHashMap.fromArrays(inst_56316,inst_56320);
var inst_56322 = cljs.test.report.call(null,inst_56321);
var state_56342__$1 = state_56342;
var statearr_56421_56946 = state_56342__$1;
(statearr_56421_56946[(2)] = inst_56322);

(statearr_56421_56946[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (16))){
var _ = (function (){var statearr_56423 = state_56342;
(statearr_56423[(4)] = cljs.core.rest((state_56342[(4)])));

return statearr_56423;
})();
var state_56342__$1 = state_56342;
var ex56416 = (state_56342__$1[(2)]);
var statearr_56426_56947 = state_56342__$1;
(statearr_56426_56947[(5)] = ex56416);


var statearr_56427_56948 = state_56342__$1;
(statearr_56427_56948[(1)] = (15));

(statearr_56427_56948[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (10))){
var inst_56209 = (state_56342[(28)]);
var inst_56220 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56221 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56222 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56223 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56224 = cljs.core.cons(inst_56223,inst_56209);
var inst_56225 = (new cljs.core.List(null,inst_56224,null,(1),null));
var inst_56226 = (new cljs.core.List(null,inst_56222,inst_56225,(2),null));
var inst_56227 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56221,19,inst_56226,"Buffer should not flush automatically without timer"];
var inst_56228 = cljs.core.PersistentHashMap.fromArrays(inst_56220,inst_56227);
var inst_56229 = cljs.test.report.call(null,inst_56228);
var state_56342__$1 = state_56342;
var statearr_56442_56949 = state_56342__$1;
(statearr_56442_56949[(2)] = inst_56229);

(statearr_56442_56949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (18))){
var inst_56258 = (state_56342[(15)]);
var inst_56270 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56271 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56272 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56273 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56274 = cljs.core.cons(inst_56273,inst_56258);
var inst_56275 = (new cljs.core.List(null,inst_56274,null,(1),null));
var inst_56276 = (new cljs.core.List(null,inst_56272,inst_56275,(2),null));
var inst_56277 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56271,24,inst_56276,"Manual flush should flush all items"];
var inst_56278 = cljs.core.PersistentHashMap.fromArrays(inst_56270,inst_56277);
var inst_56279 = cljs.test.report.call(null,inst_56278);
var state_56342__$1 = state_56342;
var statearr_56451_56950 = state_56342__$1;
(statearr_56451_56950[(2)] = inst_56279);

(statearr_56451_56950[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56343 === (8))){
var _ = (function (){var statearr_56453 = state_56342;
(statearr_56453[(4)] = cljs.core.rest((state_56342[(4)])));

return statearr_56453;
})();
var state_56342__$1 = state_56342;
var ex56429 = (state_56342__$1[(2)]);
var statearr_56459_56951 = state_56342__$1;
(statearr_56459_56951[(5)] = ex56429);


var statearr_56460_56952 = state_56342__$1;
(statearr_56460_56952[(1)] = (7));

(statearr_56460_56952[(5)] = null);



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
var statearr_56467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56467[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56467[(1)] = (1));

return statearr_56467;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56342){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56342);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56468){var ex__32294__auto__ = e56468;
var statearr_56470_56953 = state_56342;
(statearr_56470_56953[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56342[(4)]))){
var statearr_56472_56954 = state_56342;
(statearr_56472_56954[(1)] = cljs.core.first((state_56342[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56955 = state_56342;
state_56342 = G__56955;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56342){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56485 = f__32362__auto__();
(statearr_56485[(6)] = c__32361__auto__);

return statearr_56485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56147","meta56147",-2010435288,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56146.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56146.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56146");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56146.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56146");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56146.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56146 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56146(meta56147){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56146(meta56147));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56146(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56492 = (function (meta56493){
this.meta56493 = meta56493;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56494,meta56493__$1){
var self__ = this;
var _56494__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56492(meta56493__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56494){
var self__ = this;
var _56494__$1 = this;
return self__.meta56493;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56492.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56492.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56496 = (arguments.length - (1));
switch (G__56496) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56492.prototype.apply = (function (self__,args56495){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56495)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56492.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56710){
var state_val_56711 = (state_56710[(1)]);
if((state_val_56711 === (7))){
var inst_56512 = (state_56710[(2)]);
var inst_56513 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56514 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56515 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56514,47,inst_56512,"Should not flush before timeout"];
var inst_56516 = cljs.core.PersistentHashMap.fromArrays(inst_56513,inst_56515);
var inst_56517 = cljs.test.report.call(null,inst_56516);
var state_56710__$1 = state_56710;
var statearr_56713_56959 = state_56710__$1;
(statearr_56713_56959[(2)] = inst_56517);

(statearr_56713_56959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (20))){
var inst_56599 = (state_56710[(2)]);
var inst_56600 = cljs.core.async.timeout((50));
var state_56710__$1 = (function (){var statearr_56714 = state_56710;
(statearr_56714[(7)] = inst_56599);

return statearr_56714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56710__$1,(21),inst_56600);
} else {
if((state_val_56711 === (27))){
var _ = (function (){var statearr_56715 = state_56710;
(statearr_56715[(4)] = cljs.core.rest((state_56710[(4)])));

return statearr_56715;
})();
var state_56710__$1 = state_56710;
var ex56712 = (state_56710__$1[(2)]);
var statearr_56717_56961 = state_56710__$1;
(statearr_56717_56961[(5)] = ex56712);


var statearr_56719_56963 = state_56710__$1;
(statearr_56719_56963[(1)] = (26));

(statearr_56719_56963[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (1))){
var inst_56497 = (state_56710[(8)]);
var inst_56499 = (state_56710[(9)]);
var inst_56497__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56498 = cljs.core.PersistentVector.EMPTY;
var inst_56499__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56498);
var inst_56500 = (function (){var input_ch = inst_56497__$1;
var results = inst_56499__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56501 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56502 = [inst_56497__$1,(100),inst_56500];
var inst_56503 = cljs.core.PersistentHashMap.fromArrays(inst_56501,inst_56502);
var inst_56504 = bb_web_ds_tools.components.async_buffer.create(inst_56503);
var state_56710__$1 = (function (){var statearr_56721 = state_56710;
(statearr_56721[(8)] = inst_56497__$1);

(statearr_56721[(9)] = inst_56499__$1);

(statearr_56721[(10)] = inst_56504);

return statearr_56721;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56710__$1,(2),inst_56497__$1,(1));
} else {
if((state_val_56711 === (24))){
var inst_56499 = (state_56710[(9)]);
var inst_56627 = (state_56710[(11)]);
var inst_56628 = (state_56710[(12)]);
var _ = (function (){var statearr_56725 = state_56710;
(statearr_56725[(4)] = cljs.core.cons((27),(state_56710[(4)])));

return statearr_56725;
})();
var inst_56619 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56620 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56621 = [(1),(2)];
var inst_56622 = (new cljs.core.PersistentVector(null,2,(5),inst_56620,inst_56621,null));
var inst_56623 = [inst_56622];
var inst_56624 = (new cljs.core.PersistentVector(null,1,(5),inst_56619,inst_56623,null));
var inst_56625 = cljs.core.deref(inst_56499);
var inst_56626 = (new cljs.core.List(null,inst_56625,null,(1),null));
var inst_56627__$1 = (new cljs.core.List(null,inst_56624,inst_56626,(2),null));
var inst_56628__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56627__$1);
var state_56710__$1 = (function (){var statearr_56728 = state_56710;
(statearr_56728[(11)] = inst_56627__$1);

(statearr_56728[(12)] = inst_56628__$1);

return statearr_56728;
})();
if(cljs.core.truth_(inst_56628__$1)){
var statearr_56729_56966 = state_56710__$1;
(statearr_56729_56966[(1)] = (28));

} else {
var statearr_56730_56967 = state_56710__$1;
(statearr_56730_56967[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (4))){
var inst_56511 = (state_56710[(2)]);
var state_56710__$1 = (function (){var statearr_56731 = state_56710;
(statearr_56731[(13)] = inst_56511);

return statearr_56731;
})();
var statearr_56732_56968 = state_56710__$1;
(statearr_56732_56968[(2)] = null);

(statearr_56732_56968[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (15))){
var inst_56553 = (state_56710[(2)]);
var inst_56554 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56555 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56556 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56555,50,inst_56553,"Should flush after timeout"];
var inst_56557 = cljs.core.PersistentHashMap.fromArrays(inst_56554,inst_56556);
var inst_56558 = cljs.test.report.call(null,inst_56557);
var state_56710__$1 = state_56710;
var statearr_56735_56969 = state_56710__$1;
(statearr_56735_56969[(2)] = inst_56558);

(statearr_56735_56969[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (21))){
var inst_56497 = (state_56710[(8)]);
var inst_56602 = (state_56710[(2)]);
var state_56710__$1 = (function (){var statearr_56739 = state_56710;
(statearr_56739[(14)] = inst_56602);

return statearr_56739;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56710__$1,(22),inst_56497,(4));
} else {
if((state_val_56711 === (31))){
var inst_56655 = (state_56710[(2)]);
var state_56710__$1 = (function (){var statearr_56741 = state_56710;
(statearr_56741[(15)] = inst_56655);

return statearr_56741;
})();
var statearr_56742_56970 = state_56710__$1;
(statearr_56742_56970[(2)] = null);

(statearr_56742_56970[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (32))){
var inst_56499 = (state_56710[(9)]);
var inst_56678 = (state_56710[(16)]);
var inst_56679 = (state_56710[(17)]);
var _ = (function (){var statearr_56743 = state_56710;
(statearr_56743[(4)] = cljs.core.cons((35),(state_56710[(4)])));

return statearr_56743;
})();
var inst_56667 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56668 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56669 = [(1),(2)];
var inst_56670 = (new cljs.core.PersistentVector(null,2,(5),inst_56668,inst_56669,null));
var inst_56671 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56672 = [(3),(4)];
var inst_56673 = (new cljs.core.PersistentVector(null,2,(5),inst_56671,inst_56672,null));
var inst_56674 = [inst_56670,inst_56673];
var inst_56675 = (new cljs.core.PersistentVector(null,2,(5),inst_56667,inst_56674,null));
var inst_56676 = cljs.core.deref(inst_56499);
var inst_56677 = (new cljs.core.List(null,inst_56676,null,(1),null));
var inst_56678__$1 = (new cljs.core.List(null,inst_56675,inst_56677,(2),null));
var inst_56679__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56678__$1);
var state_56710__$1 = (function (){var statearr_56744 = state_56710;
(statearr_56744[(16)] = inst_56678__$1);

(statearr_56744[(17)] = inst_56679__$1);

return statearr_56744;
})();
if(cljs.core.truth_(inst_56679__$1)){
var statearr_56745_56975 = state_56710__$1;
(statearr_56745_56975[(1)] = (36));

} else {
var statearr_56746_56976 = state_56710__$1;
(statearr_56746_56976[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (33))){
var inst_56705 = (state_56710[(2)]);
var inst_56706 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56710__$1 = (function (){var statearr_56747 = state_56710;
(statearr_56747[(18)] = inst_56705);

return statearr_56747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56710__$1,inst_56706);
} else {
if((state_val_56711 === (13))){
var inst_56499 = (state_56710[(9)]);
var inst_56572 = (state_56710[(19)]);
var inst_56573 = (state_56710[(20)]);
var _ = (function (){var statearr_56748 = state_56710;
(statearr_56748[(4)] = cljs.core.cons((16),(state_56710[(4)])));

return statearr_56748;
})();
var inst_56564 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56565 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56566 = [(1),(2)];
var inst_56567 = (new cljs.core.PersistentVector(null,2,(5),inst_56565,inst_56566,null));
var inst_56568 = [inst_56567];
var inst_56569 = (new cljs.core.PersistentVector(null,1,(5),inst_56564,inst_56568,null));
var inst_56570 = cljs.core.deref(inst_56499);
var inst_56571 = (new cljs.core.List(null,inst_56570,null,(1),null));
var inst_56572__$1 = (new cljs.core.List(null,inst_56569,inst_56571,(2),null));
var inst_56573__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56572__$1);
var state_56710__$1 = (function (){var statearr_56749 = state_56710;
(statearr_56749[(19)] = inst_56572__$1);

(statearr_56749[(20)] = inst_56573__$1);

return statearr_56749;
})();
if(cljs.core.truth_(inst_56573__$1)){
var statearr_56750_56978 = state_56710__$1;
(statearr_56750_56978[(1)] = (17));

} else {
var statearr_56751_56979 = state_56710__$1;
(statearr_56751_56979[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (22))){
var inst_56604 = (state_56710[(2)]);
var inst_56605 = cljs.core.async.timeout((20));
var state_56710__$1 = (function (){var statearr_56752 = state_56710;
(statearr_56752[(21)] = inst_56604);

return statearr_56752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56710__$1,(23),inst_56605);
} else {
if((state_val_56711 === (36))){
var inst_56678 = (state_56710[(16)]);
var inst_56681 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56682 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56683 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56684 = cljs.core.cons(inst_56683,inst_56678);
var inst_56685 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56682,60,inst_56684,"Should flush 3,4 after timeout from first message"];
var inst_56686 = cljs.core.PersistentHashMap.fromArrays(inst_56681,inst_56685);
var inst_56687 = cljs.test.report.call(null,inst_56686);
var state_56710__$1 = state_56710;
var statearr_56753_56981 = state_56710__$1;
(statearr_56753_56981[(2)] = inst_56687);

(statearr_56753_56981[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (29))){
var inst_56627 = (state_56710[(11)]);
var inst_56638 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56639 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56640 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56641 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56642 = cljs.core.cons(inst_56641,inst_56627);
var inst_56643 = (new cljs.core.List(null,inst_56642,null,(1),null));
var inst_56644 = (new cljs.core.List(null,inst_56640,inst_56643,(2),null));
var inst_56645 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56639,57,inst_56644,"Should not flush 3,4 yet"];
var inst_56646 = cljs.core.PersistentHashMap.fromArrays(inst_56638,inst_56645);
var inst_56647 = cljs.test.report.call(null,inst_56646);
var state_56710__$1 = state_56710;
var statearr_56754_56982 = state_56710__$1;
(statearr_56754_56982[(2)] = inst_56647);

(statearr_56754_56982[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (6))){
var inst_56549 = (state_56710[(2)]);
var inst_56550 = cljs.core.async.timeout((100));
var state_56710__$1 = (function (){var statearr_56755 = state_56710;
(statearr_56755[(22)] = inst_56549);

return statearr_56755;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56710__$1,(12),inst_56550);
} else {
if((state_val_56711 === (28))){
var inst_56627 = (state_56710[(11)]);
var inst_56630 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56631 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56632 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56633 = cljs.core.cons(inst_56632,inst_56627);
var inst_56634 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56631,57,inst_56633,"Should not flush 3,4 yet"];
var inst_56635 = cljs.core.PersistentHashMap.fromArrays(inst_56630,inst_56634);
var inst_56636 = cljs.test.report.call(null,inst_56635);
var state_56710__$1 = state_56710;
var statearr_56756_56985 = state_56710__$1;
(statearr_56756_56985[(2)] = inst_56636);

(statearr_56756_56985[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (25))){
var inst_56652 = (state_56710[(2)]);
var inst_56653 = cljs.core.async.timeout((80));
var state_56710__$1 = (function (){var statearr_56757 = state_56710;
(statearr_56757[(23)] = inst_56652);

return statearr_56757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56710__$1,(31),inst_56653);
} else {
if((state_val_56711 === (34))){
var inst_56656 = (state_56710[(2)]);
var inst_56657 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56658 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56659 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56658,60,inst_56656,"Should flush 3,4 after timeout from first message"];
var inst_56660 = cljs.core.PersistentHashMap.fromArrays(inst_56657,inst_56659);
var inst_56661 = cljs.test.report.call(null,inst_56660);
var state_56710__$1 = state_56710;
var statearr_56758_56990 = state_56710__$1;
(statearr_56758_56990[(2)] = inst_56661);

(statearr_56758_56990[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (17))){
var inst_56572 = (state_56710[(19)]);
var inst_56575 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56576 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56577 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56578 = cljs.core.cons(inst_56577,inst_56572);
var inst_56579 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56576,50,inst_56578,"Should flush after timeout"];
var inst_56580 = cljs.core.PersistentHashMap.fromArrays(inst_56575,inst_56579);
var inst_56581 = cljs.test.report.call(null,inst_56580);
var state_56710__$1 = state_56710;
var statearr_56759_56991 = state_56710__$1;
(statearr_56759_56991[(2)] = inst_56581);

(statearr_56759_56991[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (3))){
var inst_56508 = (state_56710[(2)]);
var inst_56509 = cljs.core.async.timeout((50));
var state_56710__$1 = (function (){var statearr_56760 = state_56710;
(statearr_56760[(24)] = inst_56508);

return statearr_56760;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56710__$1,(4),inst_56509);
} else {
if((state_val_56711 === (12))){
var inst_56552 = (state_56710[(2)]);
var state_56710__$1 = (function (){var statearr_56761 = state_56710;
(statearr_56761[(25)] = inst_56552);

return statearr_56761;
})();
var statearr_56762_56993 = state_56710__$1;
(statearr_56762_56993[(2)] = null);

(statearr_56762_56993[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (2))){
var inst_56497 = (state_56710[(8)]);
var inst_56506 = (state_56710[(2)]);
var state_56710__$1 = (function (){var statearr_56764 = state_56710;
(statearr_56764[(26)] = inst_56506);

return statearr_56764;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56710__$1,(3),inst_56497,(2));
} else {
if((state_val_56711 === (23))){
var inst_56607 = (state_56710[(2)]);
var state_56710__$1 = (function (){var statearr_56765 = state_56710;
(statearr_56765[(27)] = inst_56607);

return statearr_56765;
})();
var statearr_56766_56997 = state_56710__$1;
(statearr_56766_56997[(2)] = null);

(statearr_56766_56997[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (35))){
var _ = (function (){var statearr_56767 = state_56710;
(statearr_56767[(4)] = cljs.core.rest((state_56710[(4)])));

return statearr_56767;
})();
var state_56710__$1 = state_56710;
var ex56763 = (state_56710__$1[(2)]);
var statearr_56768_56998 = state_56710__$1;
(statearr_56768_56998[(5)] = ex56763);


var statearr_56769_56999 = state_56710__$1;
(statearr_56769_56999[(1)] = (34));

(statearr_56769_56999[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (19))){
var inst_56573 = (state_56710[(20)]);
var inst_56594 = (state_56710[(2)]);
var _ = (function (){var statearr_56770 = state_56710;
(statearr_56770[(4)] = cljs.core.rest((state_56710[(4)])));

return statearr_56770;
})();
var state_56710__$1 = (function (){var statearr_56771 = state_56710;
(statearr_56771[(28)] = inst_56594);

return statearr_56771;
})();
var statearr_56772_57001 = state_56710__$1;
(statearr_56772_57001[(2)] = inst_56573);

(statearr_56772_57001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (11))){
var inst_56525 = (state_56710[(29)]);
var inst_56546 = (state_56710[(2)]);
var _ = (function (){var statearr_56773 = state_56710;
(statearr_56773[(4)] = cljs.core.rest((state_56710[(4)])));

return statearr_56773;
})();
var state_56710__$1 = (function (){var statearr_56774 = state_56710;
(statearr_56774[(30)] = inst_56546);

return statearr_56774;
})();
var statearr_56775_57003 = state_56710__$1;
(statearr_56775_57003[(2)] = inst_56525);

(statearr_56775_57003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (9))){
var inst_56524 = (state_56710[(31)]);
var inst_56527 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56528 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56529 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56530 = cljs.core.cons(inst_56529,inst_56524);
var inst_56531 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56528,47,inst_56530,"Should not flush before timeout"];
var inst_56532 = cljs.core.PersistentHashMap.fromArrays(inst_56527,inst_56531);
var inst_56533 = cljs.test.report.call(null,inst_56532);
var state_56710__$1 = state_56710;
var statearr_56776_57007 = state_56710__$1;
(statearr_56776_57007[(2)] = inst_56533);

(statearr_56776_57007[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (5))){
var inst_56499 = (state_56710[(9)]);
var inst_56524 = (state_56710[(31)]);
var inst_56525 = (state_56710[(29)]);
var _ = (function (){var statearr_56777 = state_56710;
(statearr_56777[(4)] = cljs.core.cons((8),(state_56710[(4)])));

return statearr_56777;
})();
var inst_56523 = cljs.core.deref(inst_56499);
var inst_56524__$1 = (new cljs.core.List(null,inst_56523,null,(1),null));
var inst_56525__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56524__$1);
var state_56710__$1 = (function (){var statearr_56778 = state_56710;
(statearr_56778[(31)] = inst_56524__$1);

(statearr_56778[(29)] = inst_56525__$1);

return statearr_56778;
})();
if(cljs.core.truth_(inst_56525__$1)){
var statearr_56779_57008 = state_56710__$1;
(statearr_56779_57008[(1)] = (9));

} else {
var statearr_56780_57009 = state_56710__$1;
(statearr_56780_57009[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (14))){
var inst_56497 = (state_56710[(8)]);
var inst_56597 = (state_56710[(2)]);
var state_56710__$1 = (function (){var statearr_56782 = state_56710;
(statearr_56782[(32)] = inst_56597);

return statearr_56782;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56710__$1,(20),inst_56497,(3));
} else {
if((state_val_56711 === (26))){
var inst_56608 = (state_56710[(2)]);
var inst_56609 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56610 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56611 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56610,57,inst_56608,"Should not flush 3,4 yet"];
var inst_56612 = cljs.core.PersistentHashMap.fromArrays(inst_56609,inst_56611);
var inst_56613 = cljs.test.report.call(null,inst_56612);
var state_56710__$1 = state_56710;
var statearr_56783_57011 = state_56710__$1;
(statearr_56783_57011[(2)] = inst_56613);

(statearr_56783_57011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (16))){
var _ = (function (){var statearr_56784 = state_56710;
(statearr_56784[(4)] = cljs.core.rest((state_56710[(4)])));

return statearr_56784;
})();
var state_56710__$1 = state_56710;
var ex56781 = (state_56710__$1[(2)]);
var statearr_56785_57012 = state_56710__$1;
(statearr_56785_57012[(5)] = ex56781);


var statearr_56786_57014 = state_56710__$1;
(statearr_56786_57014[(1)] = (15));

(statearr_56786_57014[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (38))){
var inst_56679 = (state_56710[(17)]);
var inst_56702 = (state_56710[(2)]);
var _ = (function (){var statearr_56787 = state_56710;
(statearr_56787[(4)] = cljs.core.rest((state_56710[(4)])));

return statearr_56787;
})();
var state_56710__$1 = (function (){var statearr_56788 = state_56710;
(statearr_56788[(33)] = inst_56702);

return statearr_56788;
})();
var statearr_56789_57015 = state_56710__$1;
(statearr_56789_57015[(2)] = inst_56679);

(statearr_56789_57015[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (30))){
var inst_56628 = (state_56710[(12)]);
var inst_56649 = (state_56710[(2)]);
var _ = (function (){var statearr_56790 = state_56710;
(statearr_56790[(4)] = cljs.core.rest((state_56710[(4)])));

return statearr_56790;
})();
var state_56710__$1 = (function (){var statearr_56791 = state_56710;
(statearr_56791[(34)] = inst_56649);

return statearr_56791;
})();
var statearr_56792_57016 = state_56710__$1;
(statearr_56792_57016[(2)] = inst_56628);

(statearr_56792_57016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (10))){
var inst_56524 = (state_56710[(31)]);
var inst_56535 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56536 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56537 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56538 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56539 = cljs.core.cons(inst_56538,inst_56524);
var inst_56540 = (new cljs.core.List(null,inst_56539,null,(1),null));
var inst_56541 = (new cljs.core.List(null,inst_56537,inst_56540,(2),null));
var inst_56542 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56536,47,inst_56541,"Should not flush before timeout"];
var inst_56543 = cljs.core.PersistentHashMap.fromArrays(inst_56535,inst_56542);
var inst_56544 = cljs.test.report.call(null,inst_56543);
var state_56710__$1 = state_56710;
var statearr_56793_57021 = state_56710__$1;
(statearr_56793_57021[(2)] = inst_56544);

(statearr_56793_57021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (18))){
var inst_56572 = (state_56710[(19)]);
var inst_56583 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56584 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56585 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56586 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56587 = cljs.core.cons(inst_56586,inst_56572);
var inst_56588 = (new cljs.core.List(null,inst_56587,null,(1),null));
var inst_56589 = (new cljs.core.List(null,inst_56585,inst_56588,(2),null));
var inst_56590 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56584,50,inst_56589,"Should flush after timeout"];
var inst_56591 = cljs.core.PersistentHashMap.fromArrays(inst_56583,inst_56590);
var inst_56592 = cljs.test.report.call(null,inst_56591);
var state_56710__$1 = state_56710;
var statearr_56795_57034 = state_56710__$1;
(statearr_56795_57034[(2)] = inst_56592);

(statearr_56795_57034[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (37))){
var inst_56678 = (state_56710[(16)]);
var inst_56689 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56691 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56693 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56694 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56695 = cljs.core.cons(inst_56694,inst_56678);
var inst_56696 = (new cljs.core.List(null,inst_56695,null,(1),null));
var inst_56697 = (new cljs.core.List(null,inst_56693,inst_56696,(2),null));
var inst_56698 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56691,60,inst_56697,"Should flush 3,4 after timeout from first message"];
var inst_56699 = cljs.core.PersistentHashMap.fromArrays(inst_56689,inst_56698);
var inst_56700 = cljs.test.report.call(null,inst_56699);
var state_56710__$1 = state_56710;
var statearr_56796_57036 = state_56710__$1;
(statearr_56796_57036[(2)] = inst_56700);

(statearr_56796_57036[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56711 === (8))){
var _ = (function (){var statearr_56797 = state_56710;
(statearr_56797[(4)] = cljs.core.rest((state_56710[(4)])));

return statearr_56797;
})();
var state_56710__$1 = state_56710;
var ex56794 = (state_56710__$1[(2)]);
var statearr_56798_57037 = state_56710__$1;
(statearr_56798_57037[(5)] = ex56794);


var statearr_56799_57038 = state_56710__$1;
(statearr_56799_57038[(1)] = (7));

(statearr_56799_57038[(5)] = null);



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
var statearr_56800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56800[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56800[(1)] = (1));

return statearr_56800;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56710){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56710);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56801){var ex__32294__auto__ = e56801;
var statearr_56802_57039 = state_56710;
(statearr_56802_57039[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56710[(4)]))){
var statearr_56803_57040 = state_56710;
(statearr_56803_57040[(1)] = cljs.core.first((state_56710[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57041 = state_56710;
state_56710 = G__57041;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56710){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56804 = f__32362__auto__();
(statearr_56804[(6)] = c__32361__auto__);

return statearr_56804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56493","meta56493",-2046861448,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56492.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56492.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56492");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56492.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56492");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56492.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56492 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56492(meta56493){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56492(meta56493));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56492(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56805 = (function (meta56806){
this.meta56806 = meta56806;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56807,meta56806__$1){
var self__ = this;
var _56807__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56805(meta56806__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56807){
var self__ = this;
var _56807__$1 = this;
return self__.meta56806;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56805.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56805.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56809 = (arguments.length - (1));
switch (G__56809) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56805.prototype.apply = (function (self__,args56808){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56808)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56805.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56873){
var state_val_56874 = (state_56873[(1)]);
if((state_val_56874 === (7))){
var inst_56826 = (state_56873[(2)]);
var inst_56827 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56828 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56829 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_56828,78,inst_56826,"Closing input should flush remaining"];
var inst_56830 = cljs.core.PersistentHashMap.fromArrays(inst_56827,inst_56829);
var inst_56831 = cljs.test.report.call(null,inst_56830);
var state_56873__$1 = state_56873;
var statearr_56875_57046 = state_56873__$1;
(statearr_56875_57046[(2)] = inst_56831);

(statearr_56875_57046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56874 === (1))){
var inst_56810 = (state_56873[(7)]);
var inst_56812 = (state_56873[(8)]);
var inst_56810__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56811 = cljs.core.PersistentVector.EMPTY;
var inst_56812__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56811);
var inst_56813 = (function (){var input_ch = inst_56810__$1;
var results = inst_56812__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56814 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56815 = [inst_56810__$1,inst_56813];
var inst_56816 = cljs.core.PersistentHashMap.fromArrays(inst_56814,inst_56815);
var inst_56817 = bb_web_ds_tools.components.async_buffer.create(inst_56816);
var state_56873__$1 = (function (){var statearr_56876 = state_56873;
(statearr_56876[(7)] = inst_56810__$1);

(statearr_56876[(8)] = inst_56812__$1);

(statearr_56876[(9)] = inst_56817);

return statearr_56876;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56873__$1,(2),inst_56810__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_56874 === (4))){
var inst_56825 = (state_56873[(2)]);
var state_56873__$1 = (function (){var statearr_56877 = state_56873;
(statearr_56877[(10)] = inst_56825);

return statearr_56877;
})();
var statearr_56878_57048 = state_56873__$1;
(statearr_56878_57048[(2)] = null);

(statearr_56878_57048[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56874 === (6))){
var inst_56870 = (state_56873[(2)]);
var inst_56871 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56873__$1 = (function (){var statearr_56879 = state_56873;
(statearr_56879[(11)] = inst_56870);

return statearr_56879;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56873__$1,inst_56871);
} else {
if((state_val_56874 === (3))){
var inst_56810 = (state_56873[(7)]);
var inst_56821 = (state_56873[(2)]);
var inst_56822 = cljs.core.async.close_BANG_(inst_56810);
var inst_56823 = cljs.core.async.timeout((20));
var state_56873__$1 = (function (){var statearr_56880 = state_56873;
(statearr_56880[(12)] = inst_56821);

(statearr_56880[(13)] = inst_56822);

return statearr_56880;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56873__$1,(4),inst_56823);
} else {
if((state_val_56874 === (2))){
var inst_56810 = (state_56873[(7)]);
var inst_56819 = (state_56873[(2)]);
var state_56873__$1 = (function (){var statearr_56881 = state_56873;
(statearr_56881[(14)] = inst_56819);

return statearr_56881;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56873__$1,(3),inst_56810,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_56874 === (11))){
var inst_56846 = (state_56873[(15)]);
var inst_56867 = (state_56873[(2)]);
var _ = (function (){var statearr_56882 = state_56873;
(statearr_56882[(4)] = cljs.core.rest((state_56873[(4)])));

return statearr_56882;
})();
var state_56873__$1 = (function (){var statearr_56883 = state_56873;
(statearr_56883[(16)] = inst_56867);

return statearr_56883;
})();
var statearr_56884_57050 = state_56873__$1;
(statearr_56884_57050[(2)] = inst_56846);

(statearr_56884_57050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56874 === (9))){
var inst_56845 = (state_56873[(17)]);
var inst_56848 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56849 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56850 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56851 = cljs.core.cons(inst_56850,inst_56845);
var inst_56852 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_56849,78,inst_56851,"Closing input should flush remaining"];
var inst_56853 = cljs.core.PersistentHashMap.fromArrays(inst_56848,inst_56852);
var inst_56854 = cljs.test.report.call(null,inst_56853);
var state_56873__$1 = state_56873;
var statearr_56885_57053 = state_56873__$1;
(statearr_56885_57053[(2)] = inst_56854);

(statearr_56885_57053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56874 === (5))){
var inst_56812 = (state_56873[(8)]);
var inst_56845 = (state_56873[(17)]);
var inst_56846 = (state_56873[(15)]);
var _ = (function (){var statearr_56887 = state_56873;
(statearr_56887[(4)] = cljs.core.cons((8),(state_56873[(4)])));

return statearr_56887;
})();
var inst_56837 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56838 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56839 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_56840 = (new cljs.core.PersistentVector(null,2,(5),inst_56838,inst_56839,null));
var inst_56841 = [inst_56840];
var inst_56842 = (new cljs.core.PersistentVector(null,1,(5),inst_56837,inst_56841,null));
var inst_56843 = cljs.core.deref(inst_56812);
var inst_56844 = (new cljs.core.List(null,inst_56843,null,(1),null));
var inst_56845__$1 = (new cljs.core.List(null,inst_56842,inst_56844,(2),null));
var inst_56846__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56845__$1);
var state_56873__$1 = (function (){var statearr_56888 = state_56873;
(statearr_56888[(17)] = inst_56845__$1);

(statearr_56888[(15)] = inst_56846__$1);

return statearr_56888;
})();
if(cljs.core.truth_(inst_56846__$1)){
var statearr_56889_57055 = state_56873__$1;
(statearr_56889_57055[(1)] = (9));

} else {
var statearr_56890_57056 = state_56873__$1;
(statearr_56890_57056[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56874 === (10))){
var inst_56845 = (state_56873[(17)]);
var inst_56856 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56857 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56858 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56859 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56860 = cljs.core.cons(inst_56859,inst_56845);
var inst_56861 = (new cljs.core.List(null,inst_56860,null,(1),null));
var inst_56862 = (new cljs.core.List(null,inst_56858,inst_56861,(2),null));
var inst_56863 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_56857,78,inst_56862,"Closing input should flush remaining"];
var inst_56864 = cljs.core.PersistentHashMap.fromArrays(inst_56856,inst_56863);
var inst_56865 = cljs.test.report.call(null,inst_56864);
var state_56873__$1 = state_56873;
var statearr_56891_57063 = state_56873__$1;
(statearr_56891_57063[(2)] = inst_56865);

(statearr_56891_57063[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56874 === (8))){
var _ = (function (){var statearr_56892 = state_56873;
(statearr_56892[(4)] = cljs.core.rest((state_56873[(4)])));

return statearr_56892;
})();
var state_56873__$1 = state_56873;
var ex56886 = (state_56873__$1[(2)]);
var statearr_56894_57064 = state_56873__$1;
(statearr_56894_57064[(5)] = ex56886);


var statearr_56897_57065 = state_56873__$1;
(statearr_56897_57065[(1)] = (7));

(statearr_56897_57065[(5)] = null);



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
var statearr_56899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56899[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56899[(1)] = (1));

return statearr_56899;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56873){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56873);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56901){var ex__32294__auto__ = e56901;
var statearr_56903_57068 = state_56873;
(statearr_56903_57068[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56873[(4)]))){
var statearr_56904_57070 = state_56873;
(statearr_56904_57070[(1)] = cljs.core.first((state_56873[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57071 = state_56873;
state_56873 = G__57071;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56873){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56905 = f__32362__auto__();
(statearr_56905[(6)] = c__32361__auto__);

return statearr_56905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56806","meta56806",1120962642,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56805.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56805.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56805");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56805.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56805");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56805.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56805 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56805(meta56806){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56805(meta56806));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56805(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
