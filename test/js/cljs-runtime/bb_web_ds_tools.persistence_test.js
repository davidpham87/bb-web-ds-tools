goog.provide('bb_web_ds_tools.persistence_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test65909 = (function (meta65910){
this.meta65910 = meta65910;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test65909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65911,meta65910__$1){
var self__ = this;
var _65911__$1 = this;
return (new bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test65909(meta65910__$1));
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test65909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65911){
var self__ = this;
var _65911__$1 = this;
return self__.meta65910;
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test65909.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test65909.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__65923 = (arguments.length - (1));
switch (G__65923) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test65909.prototype.apply = (function (self__,args65912){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args65912)));
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test65909.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_66536){
var state_val_66537 = (state_66536[(1)]);
if((state_val_66537 === (65))){
var inst_66422 = (state_66536[(2)]);
var inst_66423 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66424 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66425 = (new cljs.core.PersistentVector(null,1,(5),inst_66423,inst_66424,null));
var inst_66426 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_66425,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Export DB"], 0));
var state_66536__$1 = (function (){var statearr_66539 = state_66536;
(statearr_66539[(7)] = inst_66422);

(statearr_66539[(8)] = inst_66426);

return statearr_66539;
})();
var statearr_66540_67056 = state_66536__$1;
(statearr_66540_67056[(2)] = null);

(statearr_66540_67056[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (70))){
var inst_66283 = (state_66536[(2)]);
var inst_66284 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66285 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null)));
var inst_66286 = ["bb_web_ds_tools/persistence_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),24,36,inst_66285,36,inst_66283,null];
var inst_66287 = cljs.core.PersistentHashMap.fromArrays(inst_66284,inst_66286);
var inst_66288 = cljs.test.report.call(null,inst_66287);
var state_66536__$1 = state_66536;
var statearr_66541_67057 = state_66536__$1;
(statearr_66541_67057[(2)] = inst_66288);

(statearr_66541_67057[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (62))){
var inst_66221 = (state_66536[(9)]);
var inst_66233 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66234 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test",cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)),(1)));
var inst_66235 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66236 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66237 = cljs.core.cons(inst_66236,inst_66221);
var inst_66238 = (new cljs.core.List(null,inst_66237,null,(1),null));
var inst_66239 = (new cljs.core.List(null,inst_66235,inst_66238,(2),null));
var inst_66240 = ["bb_web_ds_tools/persistence_test.cljs",52,new cljs.core.Keyword(null,"fail","fail",1706214930),21,30,inst_66234,30,inst_66239,"Name matches"];
var inst_66241 = cljs.core.PersistentHashMap.fromArrays(inst_66233,inst_66240);
var inst_66242 = cljs.test.report.call(null,inst_66241);
var state_66536__$1 = state_66536;
var statearr_66543_67058 = state_66536__$1;
(statearr_66543_67058[(2)] = inst_66242);

(statearr_66543_67058[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (74))){
var inst_66298 = (state_66536[(10)]);
var inst_66319 = (state_66536[(2)]);
var _ = (function (){var statearr_66544 = state_66536;
(statearr_66544[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66544;
})();
var state_66536__$1 = (function (){var statearr_66545 = state_66536;
(statearr_66545[(11)] = inst_66319);

return statearr_66545;
})();
var statearr_66546_67059 = state_66536__$1;
(statearr_66546_67059[(2)] = inst_66298);

(statearr_66546_67059[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (7))){
var inst_65961 = (state_66536[(2)]);
var state_66536__$1 = state_66536;
var statearr_66547_67060 = state_66536__$1;
(statearr_66547_67060[(2)] = inst_65961);

(statearr_66547_67060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (59))){
var inst_66207 = (state_66536[(2)]);
var inst_66208 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66209 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test",cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)),(1)));
var inst_66210 = ["bb_web_ds_tools/persistence_test.cljs",52,new cljs.core.Keyword(null,"error","error",-978969032),21,30,inst_66209,30,inst_66207,"Name matches"];
var inst_66211 = cljs.core.PersistentHashMap.fromArrays(inst_66208,inst_66210);
var inst_66212 = cljs.test.report.call(null,inst_66211);
var state_66536__$1 = state_66536;
var statearr_66554_67061 = state_66536__$1;
(statearr_66554_67061[(2)] = inst_66212);

(statearr_66554_67061[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (86))){
var inst_66394 = (state_66536[(12)]);
var inst_66397 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66398 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"data","data",-232669377)], null)));
var inst_66399 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66400 = cljs.core.cons(inst_66399,inst_66394);
var inst_66401 = ["bb_web_ds_tools/persistence_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),24,38,inst_66398,38,inst_66400,null];
var inst_66402 = cljs.core.PersistentHashMap.fromArrays(inst_66397,inst_66401);
var inst_66403 = cljs.test.report.call(null,inst_66402);
var state_66536__$1 = state_66536;
var statearr_66555_67062 = state_66536__$1;
(statearr_66555_67062[(2)] = inst_66403);

(statearr_66555_67062[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (20))){
var inst_65991 = (state_66536[(2)]);
var state_66536__$1 = (function (){var statearr_66556 = state_66536;
(statearr_66556[(13)] = inst_65991);

return statearr_66556;
})();
var statearr_66558_67063 = state_66536__$1;
(statearr_66558_67063[(2)] = null);

(statearr_66558_67063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (72))){
var inst_66297 = (state_66536[(14)]);
var inst_66300 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66301 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null)));
var inst_66302 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66303 = cljs.core.cons(inst_66302,inst_66297);
var inst_66304 = ["bb_web_ds_tools/persistence_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),24,36,inst_66301,36,inst_66303,null];
var inst_66305 = cljs.core.PersistentHashMap.fromArrays(inst_66300,inst_66304);
var inst_66306 = cljs.test.report.call(null,inst_66305);
var state_66536__$1 = state_66536;
var statearr_66560_67064 = state_66536__$1;
(statearr_66560_67064[(2)] = inst_66306);

(statearr_66560_67064[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (58))){
var inst_66247 = (state_66536[(2)]);
var _ = (function (){var statearr_66561 = state_66536;
(statearr_66561[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66561;
})();
var state_66536__$1 = state_66536;
var statearr_66562_67065 = state_66536__$1;
(statearr_66562_67065[(2)] = inst_66247);

(statearr_66562_67065[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (60))){
var _ = (function (){var statearr_66567 = state_66536;
(statearr_66567[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66567;
})();
var state_66536__$1 = state_66536;
var ex66559 = (state_66536__$1[(2)]);
var statearr_66569_67066 = state_66536__$1;
(statearr_66569_67066[(5)] = ex66559);


var statearr_66570_67067 = state_66536__$1;
(statearr_66570_67067[(1)] = (59));

(statearr_66570_67067[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (27))){
var inst_66004 = (state_66536[(15)]);
var inst_66029 = (state_66536[(2)]);
var _ = (function (){var statearr_66572 = state_66536;
(statearr_66572[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66572;
})();
var state_66536__$1 = (function (){var statearr_66573 = state_66536;
(statearr_66573[(16)] = inst_66029);

return statearr_66573;
})();
var statearr_66574_67068 = state_66536__$1;
(statearr_66574_67068[(2)] = inst_66004);

(statearr_66574_67068[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (1))){
var state_66536__$1 = state_66536;
var statearr_66575_67069 = state_66536__$1;
(statearr_66575_67069[(2)] = null);

(statearr_66575_67069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (69))){
var inst_66322 = (state_66536[(2)]);
var state_66536__$1 = (function (){var statearr_66577 = state_66536;
(statearr_66577[(17)] = inst_66322);

return statearr_66577;
})();
var statearr_66578_67070 = state_66536__$1;
(statearr_66578_67070[(2)] = null);

(statearr_66578_67070[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (101))){
var inst_66527 = (state_66536[(2)]);
var _ = (function (){var statearr_66579 = state_66536;
(statearr_66579[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66579;
})();
var state_66536__$1 = state_66536;
var statearr_66580_67071 = state_66536__$1;
(statearr_66580_67071[(2)] = inst_66527);

(statearr_66580_67071[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (24))){
var _ = (function (){var statearr_66582 = state_66536;
(statearr_66582[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66582;
})();
var state_66536__$1 = state_66536;
var ex66576 = (state_66536__$1[(2)]);
var statearr_66583_67072 = state_66536__$1;
(statearr_66583_67072[(5)] = ex66576);


var statearr_66584_67073 = state_66536__$1;
(statearr_66584_67073[(1)] = (23));

(statearr_66584_67073[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (102))){
var inst_66484 = (state_66536[(2)]);
var inst_66485 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66486 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_66487 = ["bb_web_ds_tools/persistence_test.cljs",41,new cljs.core.Keyword(null,"error","error",-978969032),22,43,inst_66486,43,inst_66484,"Blob is not empty"];
var inst_66488 = cljs.core.PersistentHashMap.fromArrays(inst_66485,inst_66487);
var inst_66489 = cljs.test.report.call(null,inst_66488);
var state_66536__$1 = state_66536;
var statearr_66586_67076 = state_66536__$1;
(statearr_66586_67076[(2)] = inst_66489);

(statearr_66586_67076[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (55))){
var inst_66177 = (state_66536[(18)]);
var inst_66191 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66193 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_66194 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66195 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66196 = cljs.core.cons(inst_66195,inst_66177);
var inst_66197 = (new cljs.core.List(null,inst_66196,null,(1),null));
var inst_66198 = (new cljs.core.List(null,inst_66194,inst_66197,(2),null));
var inst_66199 = ["bb_web_ds_tools/persistence_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),21,29,inst_66193,29,inst_66198,"One row inserted"];
var inst_66200 = cljs.core.PersistentHashMap.fromArrays(inst_66191,inst_66199);
var inst_66201 = cljs.test.report.call(null,inst_66200);
var state_66536__$1 = state_66536;
var statearr_66588_67078 = state_66536__$1;
(statearr_66588_67078[(2)] = inst_66201);

(statearr_66588_67078[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (85))){
var _ = (function (){var statearr_66589 = state_66536;
(statearr_66589[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66589;
})();
var state_66536__$1 = state_66536;
var ex66585 = (state_66536__$1[(2)]);
var statearr_66590_67079 = state_66536__$1;
(statearr_66590_67079[(5)] = ex66585);


var statearr_66591_67080 = state_66536__$1;
(statearr_66591_67080[(1)] = (84));

(statearr_66591_67080[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (39))){
var inst_66097 = (state_66536[(19)]);
var inst_66112 = (state_66536[(20)]);
var inst_66113 = (state_66536[(21)]);
var _ = (function (){var statearr_66592 = state_66536;
(statearr_66592[(4)] = cljs.core.cons((42),(state_66536[(4)])));

return statearr_66592;
})();
var inst_66110 = inst_66097.length;
var inst_66111 = (new cljs.core.List(null,inst_66110,null,(1),null));
var inst_66112__$1 = (new cljs.core.List(null,(1),inst_66111,(2),null));
var inst_66113__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66112__$1);
var state_66536__$1 = (function (){var statearr_66595 = state_66536;
(statearr_66595[(20)] = inst_66112__$1);

(statearr_66595[(21)] = inst_66113__$1);

return statearr_66595;
})();
if(cljs.core.truth_(inst_66113__$1)){
var statearr_66596_67081 = state_66536__$1;
(statearr_66596_67081[(1)] = (43));

} else {
var statearr_66598_67082 = state_66536__$1;
(statearr_66598_67082[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (88))){
var inst_66395 = (state_66536[(22)]);
var inst_66416 = (state_66536[(2)]);
var _ = (function (){var statearr_66599 = state_66536;
(statearr_66599[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66599;
})();
var state_66536__$1 = (function (){var statearr_66600 = state_66536;
(statearr_66600[(23)] = inst_66416);

return statearr_66600;
})();
var statearr_66601_67084 = state_66536__$1;
(statearr_66601_67084[(2)] = inst_66395);

(statearr_66601_67084[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (46))){
var inst_66035 = (state_66536[(24)]);
var _ = (function (){var statearr_66602 = state_66536;
(statearr_66602[(4)] = cljs.core.cons((48),(state_66536[(4)])));

return statearr_66602;
})();
var ___$1 = (function (){var statearr_66603 = state_66536;
(statearr_66603[(4)] = cljs.core.cons((49),(state_66536[(4)])));

return statearr_66603;
})();
var inst_66158 = inst_66035.exec("INSERT INTO datasets VALUES ('1', 'test', 'content', 123)");
var inst_66159 = [new cljs.core.Keyword(null,"returnValue","returnValue",1643246062)];
var inst_66160 = ["resultRows"];
var inst_66161 = cljs.core.PersistentHashMap.fromArrays(inst_66159,inst_66160);
var inst_66162 = cljs.core.clj__GT_js(inst_66161);
var inst_66163 = inst_66035.exec("SELECT * FROM datasets",inst_66162);
var state_66536__$1 = (function (){var statearr_66605 = state_66536;
(statearr_66605[(25)] = inst_66158);

(statearr_66605[(26)] = inst_66163);

return statearr_66605;
})();
var statearr_66606_67085 = state_66536__$1;
(statearr_66606_67085[(2)] = null);

(statearr_66606_67085[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (4))){
var _ = (function (){var statearr_66607 = state_66536;
(statearr_66607[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66607;
})();
var inst_65926 = (state_66536[(2)]);
var inst_65927 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var ___$1 = (function (){var temp__5825__auto__ = (state_66536[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31632__auto__ = temp__5825__auto__;
throw e__31632__auto__;
} else {
return null;
}
})();
var state_66536__$1 = (function (){var statearr_66608 = state_66536;
(statearr_66608[(27)] = inst_65927);

return statearr_66608;
})();
var statearr_66609_67087 = state_66536__$1;
(statearr_66609_67087[(2)] = inst_65926);

(statearr_66609_67087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (77))){
var inst_66323 = (state_66536[(2)]);
var inst_66327 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66329 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"My Dataset",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"name","name",1843675177)], null)));
var inst_66330 = ["bb_web_ds_tools/persistence_test.cljs",69,new cljs.core.Keyword(null,"error","error",-978969032),24,37,inst_66329,37,inst_66323,null];
var inst_66331 = cljs.core.PersistentHashMap.fromArrays(inst_66327,inst_66330);
var inst_66332 = cljs.test.report.call(null,inst_66331);
var state_66536__$1 = state_66536;
var statearr_66613_67089 = state_66536__$1;
(statearr_66613_67089[(2)] = inst_66332);

(statearr_66613_67089[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (106))){
var inst_66503 = (state_66536[(28)]);
var inst_66524 = (state_66536[(2)]);
var _ = (function (){var statearr_66614 = state_66536;
(statearr_66614[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66614;
})();
var state_66536__$1 = (function (){var statearr_66615 = state_66536;
(statearr_66615[(29)] = inst_66524);

return statearr_66615;
})();
var statearr_66616_67090 = state_66536__$1;
(statearr_66616_67090[(2)] = inst_66503);

(statearr_66616_67090[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (95))){
var inst_66445 = (state_66536[(2)]);
var inst_66449 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66450 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_66451 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"error","error",-978969032),22,42,inst_66450,42,inst_66445,"Export returns a Blob"];
var inst_66452 = cljs.core.PersistentHashMap.fromArrays(inst_66449,inst_66451);
var inst_66453 = cljs.test.report.call(null,inst_66452);
var state_66536__$1 = state_66536;
var statearr_66618_67091 = state_66536__$1;
(statearr_66618_67091[(2)] = inst_66453);

(statearr_66618_67091[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (54))){
var inst_66177 = (state_66536[(18)]);
var inst_66180 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66184 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_66185 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66186 = cljs.core.cons(inst_66185,inst_66177);
var inst_66187 = ["bb_web_ds_tools/persistence_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),21,29,inst_66184,29,inst_66186,"One row inserted"];
var inst_66188 = cljs.core.PersistentHashMap.fromArrays(inst_66180,inst_66187);
var inst_66189 = cljs.test.report.call(null,inst_66188);
var state_66536__$1 = state_66536;
var statearr_66619_67092 = state_66536__$1;
(statearr_66619_67092[(2)] = inst_66189);

(statearr_66619_67092[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (92))){
var _ = (function (){var statearr_66620 = state_66536;
(statearr_66620[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66620;
})();
var state_66536__$1 = state_66536;
var ex66617 = (state_66536__$1[(2)]);
var statearr_66621_67093 = state_66536__$1;
(statearr_66621_67093[(5)] = ex66617);


throw ex66617;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (104))){
var inst_66502 = (state_66536[(30)]);
var inst_66505 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66506 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_66507 = new cljs.core.Symbol(null,">",">",1085014381,null);
var inst_66508 = cljs.core.cons(inst_66507,inst_66502);
var inst_66509 = ["bb_web_ds_tools/persistence_test.cljs",41,new cljs.core.Keyword(null,"pass","pass",1574159993),22,43,inst_66506,43,inst_66508,"Blob is not empty"];
var inst_66510 = cljs.core.PersistentHashMap.fromArrays(inst_66505,inst_66509);
var inst_66511 = cljs.test.report.call(null,inst_66510);
var state_66536__$1 = state_66536;
var statearr_66626_67096 = state_66536__$1;
(statearr_66626_67096[(2)] = inst_66511);

(statearr_66626_67096[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (15))){
var inst_65978 = (state_66536[(31)]);
var inst_65981 = cljs.core.ex_data(inst_65978);
var inst_65982 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_65981);
var inst_65983 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65982,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_66536__$1 = state_66536;
var statearr_66627_67099 = state_66536__$1;
(statearr_66627_67099[(2)] = inst_65983);

(statearr_66627_67099[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (48))){
var _ = (function (){var statearr_66628 = state_66536;
(statearr_66628[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66628;
})();
var inst_66146 = (state_66536[(2)]);
var inst_66147 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66148 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66149 = (new cljs.core.PersistentVector(null,1,(5),inst_66147,inst_66148,null));
var inst_66150 = cljs.test.update_current_env_BANG_(inst_66149,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_66536[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31632__auto__ = temp__5825__auto__;
throw e__31632__auto__;
} else {
return null;
}
})();
var state_66536__$1 = (function (){var statearr_66630 = state_66536;
(statearr_66630[(32)] = inst_66150);

return statearr_66630;
})();
var statearr_66631_67101 = state_66536__$1;
(statearr_66631_67101[(2)] = inst_66146);

(statearr_66631_67101[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (50))){
var inst_66163 = (state_66536[(26)]);
var inst_66177 = (state_66536[(18)]);
var inst_66178 = (state_66536[(33)]);
var _ = (function (){var statearr_66632 = state_66536;
(statearr_66632[(4)] = cljs.core.cons((53),(state_66536[(4)])));

return statearr_66632;
})();
var inst_66175 = cljs.core.count(inst_66163);
var inst_66176 = (new cljs.core.List(null,inst_66175,null,(1),null));
var inst_66177__$1 = (new cljs.core.List(null,(1),inst_66176,(2),null));
var inst_66178__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66177__$1);
var state_66536__$1 = (function (){var statearr_66637 = state_66536;
(statearr_66637[(18)] = inst_66177__$1);

(statearr_66637[(33)] = inst_66178__$1);

return statearr_66637;
})();
if(cljs.core.truth_(inst_66178__$1)){
var statearr_66638_67104 = state_66536__$1;
(statearr_66638_67104[(1)] = (54));

} else {
var statearr_66639_67105 = state_66536__$1;
(statearr_66639_67105[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (75))){
var inst_66282 = (state_66536[(34)]);
var inst_66345 = (state_66536[(35)]);
var inst_66346 = (state_66536[(36)]);
var _ = (function (){var statearr_66641 = state_66536;
(statearr_66641[(4)] = cljs.core.cons((78),(state_66536[(4)])));

return statearr_66641;
})();
var inst_66340 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66341 = ["d1",new cljs.core.Keyword(null,"name","name",1843675177)];
var inst_66342 = (new cljs.core.PersistentVector(null,2,(5),inst_66340,inst_66341,null));
var inst_66343 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_66282,inst_66342);
var inst_66344 = (new cljs.core.List(null,inst_66343,null,(1),null));
var inst_66345__$1 = (new cljs.core.List(null,"My Dataset",inst_66344,(2),null));
var inst_66346__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66345__$1);
var state_66536__$1 = (function (){var statearr_66642 = state_66536;
(statearr_66642[(35)] = inst_66345__$1);

(statearr_66642[(36)] = inst_66346__$1);

return statearr_66642;
})();
if(cljs.core.truth_(inst_66346__$1)){
var statearr_66643_67109 = state_66536__$1;
(statearr_66643_67109[(1)] = (79));

} else {
var statearr_66644_67110 = state_66536__$1;
(statearr_66644_67110[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (99))){
var inst_66463 = (state_66536[(37)]);
var inst_66480 = (state_66536[(2)]);
var _ = (function (){var statearr_66646 = state_66536;
(statearr_66646[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66646;
})();
var state_66536__$1 = (function (){var statearr_66647 = state_66536;
(statearr_66647[(38)] = inst_66480);

return statearr_66647;
})();
var statearr_66648_67112 = state_66536__$1;
(statearr_66648_67112[(2)] = inst_66463);

(statearr_66648_67112[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (21))){
var inst_65991 = (state_66536[(13)]);
var inst_66003 = (state_66536[(39)]);
var inst_66004 = (state_66536[(15)]);
var _ = (function (){var statearr_66649 = state_66536;
(statearr_66649[(4)] = cljs.core.cons((24),(state_66536[(4)])));

return statearr_66649;
})();
var inst_66003__$1 = (new cljs.core.List(null,inst_65991,null,(1),null));
var inst_66004__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_66003__$1);
var state_66536__$1 = (function (){var statearr_66650 = state_66536;
(statearr_66650[(39)] = inst_66003__$1);

(statearr_66650[(15)] = inst_66004__$1);

return statearr_66650;
})();
if(cljs.core.truth_(inst_66004__$1)){
var statearr_66651_67115 = state_66536__$1;
(statearr_66651_67115[(1)] = (25));

} else {
var statearr_66652_67116 = state_66536__$1;
(statearr_66652_67116[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (31))){
var _ = (function (){var statearr_66653 = state_66536;
(statearr_66653[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66653;
})();
var state_66536__$1 = state_66536;
var ex66645 = (state_66536__$1[(2)]);
var statearr_66654_67117 = state_66536__$1;
(statearr_66654_67117[(5)] = ex66645);


var statearr_66655_67118 = state_66536__$1;
(statearr_66655_67118[(1)] = (30));

(statearr_66655_67118[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (32))){
var inst_66047 = (state_66536[(40)]);
var inst_66051 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66052 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_66053 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_66054 = cljs.core.cons(inst_66053,inst_66047);
var inst_66055 = ["bb_web_ds_tools/persistence_test.cljs",27,new cljs.core.Keyword(null,"pass","pass",1574159993),17,19,inst_66052,19,inst_66054,"DB created"];
var inst_66056 = cljs.core.PersistentHashMap.fromArrays(inst_66051,inst_66055);
var inst_66057 = cljs.test.report.call(null,inst_66056);
var state_66536__$1 = state_66536;
var statearr_66656_67119 = state_66536__$1;
(statearr_66656_67119[(2)] = inst_66057);

(statearr_66656_67119[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (40))){
var inst_66137 = (state_66536[(2)]);
var _ = (function (){var statearr_66657 = state_66536;
(statearr_66657[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66657;
})();
var state_66536__$1 = state_66536;
var statearr_66658_67120 = state_66536__$1;
(statearr_66658_67120[(2)] = inst_66137);

(statearr_66658_67120[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (91))){
var _ = (function (){var statearr_66659 = state_66536;
(statearr_66659[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66659;
})();
var inst_66428 = (state_66536[(2)]);
var inst_66429 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66430 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66431 = (new cljs.core.PersistentVector(null,1,(5),inst_66429,inst_66430,null));
var inst_66432 = cljs.test.update_current_env_BANG_(inst_66431,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_66536[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31632__auto__ = temp__5825__auto__;
throw e__31632__auto__;
} else {
return null;
}
})();
var state_66536__$1 = (function (){var statearr_66661 = state_66536;
(statearr_66661[(41)] = inst_66432);

return statearr_66661;
})();
var statearr_66662_67121 = state_66536__$1;
(statearr_66662_67121[(2)] = inst_66428);

(statearr_66662_67121[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (56))){
var inst_66178 = (state_66536[(33)]);
var inst_66203 = (state_66536[(2)]);
var _ = (function (){var statearr_66664 = state_66536;
(statearr_66664[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66664;
})();
var state_66536__$1 = (function (){var statearr_66665 = state_66536;
(statearr_66665[(42)] = inst_66203);

return statearr_66665;
})();
var statearr_66666_67122 = state_66536__$1;
(statearr_66666_67122[(2)] = inst_66178);

(statearr_66666_67122[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (33))){
var inst_66047 = (state_66536[(40)]);
var inst_66059 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66060 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_66061 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66062 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_66063 = cljs.core.cons(inst_66062,inst_66047);
var inst_66064 = (new cljs.core.List(null,inst_66063,null,(1),null));
var inst_66065 = (new cljs.core.List(null,inst_66061,inst_66064,(2),null));
var inst_66066 = ["bb_web_ds_tools/persistence_test.cljs",27,new cljs.core.Keyword(null,"fail","fail",1706214930),17,19,inst_66060,19,inst_66065,"DB created"];
var inst_66067 = cljs.core.PersistentHashMap.fromArrays(inst_66059,inst_66066);
var inst_66068 = cljs.test.report.call(null,inst_66067);
var state_66536__$1 = state_66536;
var statearr_66667_67123 = state_66536__$1;
(statearr_66667_67123[(2)] = inst_66068);

(statearr_66667_67123[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (13))){
var _ = (function (){var statearr_66668 = state_66536;
(statearr_66668[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66668;
})();
var state_66536__$1 = state_66536;
var ex66663 = (state_66536__$1[(2)]);
var statearr_66669_67124 = state_66536__$1;
(statearr_66669_67124[(5)] = ex66663);


var statearr_66670_67125 = state_66536__$1;
(statearr_66670_67125[(1)] = (5));

(statearr_66670_67125[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (22))){
var inst_65991 = (state_66536[(13)]);
var inst_66032 = (state_66536[(2)]);
var inst_66033 = inst_65991.oo1;
var inst_66034 = inst_66033.DB;
var inst_66035 = (new inst_66034(":memory:","ct"));
var state_66536__$1 = (function (){var statearr_66673 = state_66536;
(statearr_66673[(43)] = inst_66032);

(statearr_66673[(24)] = inst_66035);

return statearr_66673;
})();
var statearr_66674_67126 = state_66536__$1;
(statearr_66674_67126[(2)] = null);

(statearr_66674_67126[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (90))){
var inst_66530 = (state_66536[(2)]);
var _ = (function (){var statearr_66675 = state_66536;
(statearr_66675[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66675;
})();
var state_66536__$1 = state_66536;
var statearr_66677_67127 = state_66536__$1;
(statearr_66677_67127[(2)] = inst_66530);

(statearr_66677_67127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (36))){
var inst_66140 = (state_66536[(2)]);
var inst_66141 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66142 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66143 = (new cljs.core.PersistentVector(null,1,(5),inst_66141,inst_66142,null));
var inst_66144 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_66143,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Insert and Query Manual"], 0));
var state_66536__$1 = (function (){var statearr_66678 = state_66536;
(statearr_66678[(44)] = inst_66140);

(statearr_66678[(45)] = inst_66144);

return statearr_66678;
})();
var statearr_66679_67128 = state_66536__$1;
(statearr_66679_67128[(2)] = null);

(statearr_66679_67128[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (41))){
var inst_66098 = (state_66536[(2)]);
var inst_66099 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66100 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_66102 = ["bb_web_ds_tools/persistence_test.cljs",41,new cljs.core.Keyword(null,"error","error",-978969032),21,24,inst_66100,24,inst_66098,"datasets table exists"];
var inst_66103 = cljs.core.PersistentHashMap.fromArrays(inst_66099,inst_66102);
var inst_66104 = cljs.test.report.call(null,inst_66103);
var state_66536__$1 = state_66536;
var statearr_66682_67129 = state_66536__$1;
(statearr_66682_67129[(2)] = inst_66104);

(statearr_66682_67129[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (89))){
var inst_66035 = (state_66536[(24)]);
var _ = (function (){var statearr_66684 = state_66536;
(statearr_66684[(4)] = cljs.core.cons((91),(state_66536[(4)])));

return statearr_66684;
})();
var ___$1 = (function (){var statearr_66686 = state_66536;
(statearr_66686[(4)] = cljs.core.cons((92),(state_66536[(4)])));

return statearr_66686;
})();
var inst_66440 = bb_web_ds_tools.workspaces.persistence_fx.export_db(inst_66035);
var state_66536__$1 = (function (){var statearr_66687 = state_66536;
(statearr_66687[(46)] = inst_66440);

return statearr_66687;
})();
var statearr_66688_67130 = state_66536__$1;
(statearr_66688_67130[(2)] = null);

(statearr_66688_67130[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (100))){
var inst_66440 = (state_66536[(46)]);
var inst_66502 = (state_66536[(30)]);
var inst_66503 = (state_66536[(28)]);
var _ = (function (){var statearr_66689 = state_66536;
(statearr_66689[(4)] = cljs.core.cons((103),(state_66536[(4)])));

return statearr_66689;
})();
var inst_66499 = inst_66440.size;
var inst_66500 = (new cljs.core.List(null,(0),null,(1),null));
var inst_66502__$1 = (new cljs.core.List(null,inst_66499,inst_66500,(2),null));
var inst_66503__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,inst_66502__$1);
var state_66536__$1 = (function (){var statearr_66690 = state_66536;
(statearr_66690[(30)] = inst_66502__$1);

(statearr_66690[(28)] = inst_66503__$1);

return statearr_66690;
})();
if(cljs.core.truth_(inst_66503__$1)){
var statearr_66691_67131 = state_66536__$1;
(statearr_66691_67131[(1)] = (104));

} else {
var statearr_66692_67132 = state_66536__$1;
(statearr_66692_67132[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (43))){
var inst_66112 = (state_66536[(20)]);
var inst_66115 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66116 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_66117 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66118 = cljs.core.cons(inst_66117,inst_66112);
var inst_66119 = ["bb_web_ds_tools/persistence_test.cljs",41,new cljs.core.Keyword(null,"pass","pass",1574159993),21,24,inst_66116,24,inst_66118,"datasets table exists"];
var inst_66120 = cljs.core.PersistentHashMap.fromArrays(inst_66115,inst_66119);
var inst_66121 = cljs.test.report.call(null,inst_66120);
var state_66536__$1 = state_66536;
var statearr_66693_67133 = state_66536__$1;
(statearr_66693_67133[(2)] = inst_66121);

(statearr_66693_67133[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (61))){
var inst_66221 = (state_66536[(9)]);
var inst_66225 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66226 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test",cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)),(1)));
var inst_66227 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66228 = cljs.core.cons(inst_66227,inst_66221);
var inst_66229 = ["bb_web_ds_tools/persistence_test.cljs",52,new cljs.core.Keyword(null,"pass","pass",1574159993),21,30,inst_66226,30,inst_66228,"Name matches"];
var inst_66230 = cljs.core.PersistentHashMap.fromArrays(inst_66225,inst_66229);
var inst_66231 = cljs.test.report.call(null,inst_66230);
var state_66536__$1 = state_66536;
var statearr_66694_67134 = state_66536__$1;
(statearr_66694_67134[(2)] = inst_66231);

(statearr_66694_67134[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (29))){
var inst_66073 = (state_66536[(2)]);
var inst_66074 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66075 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66076 = (new cljs.core.PersistentVector(null,1,(5),inst_66074,inst_66075,null));
var inst_66077 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_66076,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Create Tables"], 0));
var state_66536__$1 = (function (){var statearr_66695 = state_66536;
(statearr_66695[(47)] = inst_66073);

(statearr_66695[(48)] = inst_66077);

return statearr_66695;
})();
var statearr_66696_67135 = state_66536__$1;
(statearr_66696_67135[(2)] = null);

(statearr_66696_67135[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (44))){
var inst_66112 = (state_66536[(20)]);
var inst_66123 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66124 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_66125 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66126 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66127 = cljs.core.cons(inst_66126,inst_66112);
var inst_66128 = (new cljs.core.List(null,inst_66127,null,(1),null));
var inst_66129 = (new cljs.core.List(null,inst_66125,inst_66128,(2),null));
var inst_66130 = ["bb_web_ds_tools/persistence_test.cljs",41,new cljs.core.Keyword(null,"fail","fail",1706214930),21,24,inst_66124,24,inst_66129,"datasets table exists"];
var inst_66131 = cljs.core.PersistentHashMap.fromArrays(inst_66123,inst_66130);
var inst_66132 = cljs.test.report.call(null,inst_66131);
var state_66536__$1 = state_66536;
var statearr_66700_67136 = state_66536__$1;
(statearr_66700_67136[(2)] = inst_66132);

(statearr_66700_67136[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (93))){
var inst_66440 = (state_66536[(46)]);
var inst_66463 = (state_66536[(37)]);
var _ = (function (){var statearr_66704 = state_66536;
(statearr_66704[(4)] = cljs.core.cons((96),(state_66536[(4)])));

return statearr_66704;
})();
var inst_66462 = Blob;
var inst_66463__$1 = (inst_66440 instanceof inst_66462);
var state_66536__$1 = (function (){var statearr_66705 = state_66536;
(statearr_66705[(37)] = inst_66463__$1);

return statearr_66705;
})();
if(cljs.core.truth_(inst_66463__$1)){
var statearr_66706_67137 = state_66536__$1;
(statearr_66706_67137[(1)] = (97));

} else {
var statearr_66707_67138 = state_66536__$1;
(statearr_66707_67138[(1)] = (98));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (6))){
var _ = (function (){var statearr_66709 = state_66536;
(statearr_66709[(4)] = cljs.core.cons((9),(state_66536[(4)])));

return statearr_66709;
})();
var state_66536__$1 = state_66536;
var statearr_66710_67139 = state_66536__$1;
(statearr_66710_67139[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (28))){
var inst_66035 = (state_66536[(24)]);
var inst_66047 = (state_66536[(40)]);
var inst_66048 = (state_66536[(49)]);
var _ = (function (){var statearr_66713 = state_66536;
(statearr_66713[(4)] = cljs.core.cons((31),(state_66536[(4)])));

return statearr_66713;
})();
var inst_66047__$1 = (new cljs.core.List(null,inst_66035,null,(1),null));
var inst_66048__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_66047__$1);
var state_66536__$1 = (function (){var statearr_66714 = state_66536;
(statearr_66714[(40)] = inst_66047__$1);

(statearr_66714[(49)] = inst_66048__$1);

return statearr_66714;
})();
if(cljs.core.truth_(inst_66048__$1)){
var statearr_66719_67140 = state_66536__$1;
(statearr_66719_67140[(1)] = (32));

} else {
var statearr_66720_67141 = state_66536__$1;
(statearr_66720_67141[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (64))){
var inst_66035 = (state_66536[(24)]);
var _ = (function (){var statearr_66721 = state_66536;
(statearr_66721[(4)] = cljs.core.cons((66),(state_66536[(4)])));

return statearr_66721;
})();
var ___$1 = (function (){var statearr_66722 = state_66536;
(statearr_66722[(4)] = cljs.core.cons((67),(state_66536[(4)])));

return statearr_66722;
})();
var inst_66269 = ["d1"];
var inst_66270 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_66271 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66272 = [new cljs.core.Keyword(null,"a","a",-2123407586)];
var inst_66273 = [(1)];
var inst_66274 = cljs.core.PersistentHashMap.fromArrays(inst_66272,inst_66273);
var inst_66275 = [inst_66274];
var inst_66276 = (new cljs.core.PersistentVector(null,1,(5),inst_66271,inst_66275,null));
var inst_66277 = ["My Dataset",inst_66276];
var inst_66278 = cljs.core.PersistentHashMap.fromArrays(inst_66270,inst_66277);
var inst_66279 = [inst_66278];
var inst_66280 = cljs.core.PersistentHashMap.fromArrays(inst_66269,inst_66279);
var inst_66281 = bb_web_ds_tools.workspaces.persistence_fx.persist_datasets_BANG_(inst_66035,inst_66280);
var inst_66282 = bb_web_ds_tools.workspaces.persistence_fx.load_datasets_from_db(inst_66035);
var state_66536__$1 = (function (){var statearr_66723 = state_66536;
(statearr_66723[(50)] = inst_66281);

(statearr_66723[(34)] = inst_66282);

return statearr_66723;
})();
var statearr_66724_67142 = state_66536__$1;
(statearr_66724_67142[(2)] = null);

(statearr_66724_67142[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (103))){
var _ = (function (){var statearr_66725 = state_66536;
(statearr_66725[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66725;
})();
var state_66536__$1 = state_66536;
var ex66712 = (state_66536__$1[(2)]);
var statearr_66726_67143 = state_66536__$1;
(statearr_66726_67143[(5)] = ex66712);


var statearr_66727_67144 = state_66536__$1;
(statearr_66727_67144[(1)] = (102));

(statearr_66727_67144[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (51))){
var inst_66206 = (state_66536[(2)]);
var state_66536__$1 = (function (){var statearr_66728 = state_66536;
(statearr_66728[(51)] = inst_66206);

return statearr_66728;
})();
var statearr_66729_67145 = state_66536__$1;
(statearr_66729_67145[(2)] = null);

(statearr_66729_67145[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (25))){
var inst_66003 = (state_66536[(39)]);
var inst_66006 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66007 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_66008 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_66009 = cljs.core.cons(inst_66008,inst_66003);
var inst_66010 = ["bb_web_ds_tools/persistence_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),15,15,inst_66007,15,inst_66009,"SQLite module loaded"];
var inst_66011 = cljs.core.PersistentHashMap.fromArrays(inst_66006,inst_66010);
var inst_66012 = cljs.test.report.call(null,inst_66011);
var state_66536__$1 = state_66536;
var statearr_66730_67146 = state_66536__$1;
(statearr_66730_67146[(2)] = inst_66012);

(statearr_66730_67146[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (34))){
var inst_66048 = (state_66536[(49)]);
var inst_66070 = (state_66536[(2)]);
var _ = (function (){var statearr_66732 = state_66536;
(statearr_66732[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66732;
})();
var state_66536__$1 = (function (){var statearr_66733 = state_66536;
(statearr_66733[(52)] = inst_66070);

return statearr_66733;
})();
var statearr_66734_67147 = state_66536__$1;
(statearr_66734_67147[(2)] = inst_66048);

(statearr_66734_67147[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (17))){
var inst_65986 = (state_66536[(2)]);
var state_66536__$1 = state_66536;
if(cljs.core.truth_(inst_65986)){
var statearr_66735_67148 = state_66536__$1;
(statearr_66735_67148[(1)] = (18));

} else {
var statearr_66736_67149 = state_66536__$1;
(statearr_66736_67149[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (3))){
var inst_66533 = (state_66536[(2)]);
var state_66536__$1 = state_66536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66536__$1,inst_66533);
} else {
if((state_val_66537 === (12))){
var inst_65958 = (state_66536[(2)]);
var _ = (function (){var statearr_66737 = state_66536;
(statearr_66737[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66737;
})();
var state_66536__$1 = (function (){var statearr_66738 = state_66536;
(statearr_66738[(53)] = inst_65958);

return statearr_66738;
})();
var statearr_66740_67150 = state_66536__$1;
(statearr_66740_67150[(2)] = true);

(statearr_66740_67150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (2))){
var _ = (function (){var statearr_66741 = state_66536;
(statearr_66741[(4)] = cljs.core.cons((4),(state_66536[(4)])));

return statearr_66741;
})();
var ___$1 = (function (){var statearr_66742 = state_66536;
(statearr_66742[(4)] = cljs.core.cons((13),(state_66536[(4)])));

return statearr_66742;
})();
var inst_65968 = [new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.Keyword(null,"printErr","printErr",-1323332006)];
var inst_65969 = (function (){return (function (x){
return console.log("SQLite:",x);
});
})();
var inst_65971 = (function (){return (function (x){
return console.error("SQLite Err:",x);
});
})();
var inst_65972 = [inst_65969,inst_65971];
var inst_65973 = cljs.core.PersistentHashMap.fromArrays(inst_65968,inst_65972);
var inst_65974 = cljs.core.clj__GT_js(inst_65973);
var inst_65975 = shadow.js.shim.module$$sqlite_org$sqlite_wasm.default(inst_65974);
var inst_65976 = cljs.core.async.interop.p__GT_c(inst_65975);
var state_66536__$1 = state_66536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66536__$1,(14),inst_65976);
} else {
if((state_val_66537 === (66))){
var _ = (function (){var statearr_66743 = state_66536;
(statearr_66743[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66743;
})();
var inst_66256 = (state_66536[(2)]);
var inst_66257 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66258 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66259 = (new cljs.core.PersistentVector(null,1,(5),inst_66257,inst_66258,null));
var inst_66260 = cljs.test.update_current_env_BANG_(inst_66259,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_66536[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31632__auto__ = temp__5825__auto__;
throw e__31632__auto__;
} else {
return null;
}
})();
var state_66536__$1 = (function (){var statearr_66744 = state_66536;
(statearr_66744[(54)] = inst_66260);

return statearr_66744;
})();
var statearr_66745_67151 = state_66536__$1;
(statearr_66745_67151[(2)] = inst_66256);

(statearr_66745_67151[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (23))){
var inst_65992 = (state_66536[(2)]);
var inst_65993 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_65994 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_65995 = ["bb_web_ds_tools/persistence_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),15,15,inst_65994,15,inst_65992,"SQLite module loaded"];
var inst_65996 = cljs.core.PersistentHashMap.fromArrays(inst_65993,inst_65995);
var inst_65997 = cljs.test.report.call(null,inst_65996);
var state_66536__$1 = state_66536;
var statearr_66746_67152 = state_66536__$1;
(statearr_66746_67152[(2)] = inst_65997);

(statearr_66746_67152[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (47))){
var inst_66250 = (state_66536[(2)]);
var inst_66251 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66252 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66253 = (new cljs.core.PersistentVector(null,1,(5),inst_66251,inst_66252,null));
var inst_66254 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_66253,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Persist Datasets"], 0));
var state_66536__$1 = (function (){var statearr_66747 = state_66536;
(statearr_66747[(55)] = inst_66250);

(statearr_66747[(56)] = inst_66254);

return statearr_66747;
})();
var statearr_66748_67153 = state_66536__$1;
(statearr_66748_67153[(2)] = null);

(statearr_66748_67153[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (35))){
var inst_66035 = (state_66536[(24)]);
var _ = (function (){var statearr_66752 = state_66536;
(statearr_66752[(4)] = cljs.core.cons((37),(state_66536[(4)])));

return statearr_66752;
})();
var ___$1 = (function (){var statearr_66753 = state_66536;
(statearr_66753[(4)] = cljs.core.cons((38),(state_66536[(4)])));

return statearr_66753;
})();
var inst_66092 = bb_web_ds_tools.workspaces.persistence_fx.create_tables_BANG_(inst_66035);
var inst_66093 = [new cljs.core.Keyword(null,"returnValue","returnValue",1643246062)];
var inst_66094 = ["resultRows"];
var inst_66095 = cljs.core.PersistentHashMap.fromArrays(inst_66093,inst_66094);
var inst_66096 = cljs.core.clj__GT_js(inst_66095);
var inst_66097 = inst_66035.exec("SELECT name FROM sqlite_master WHERE type='table' AND name='datasets'",inst_66096);
var state_66536__$1 = (function (){var statearr_66756 = state_66536;
(statearr_66756[(57)] = inst_66092);

(statearr_66756[(19)] = inst_66097);

return statearr_66756;
})();
var statearr_66757_67154 = state_66536__$1;
(statearr_66757_67154[(2)] = null);

(statearr_66757_67154[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (82))){
var inst_66282 = (state_66536[(34)]);
var inst_66394 = (state_66536[(12)]);
var inst_66395 = (state_66536[(22)]);
var _ = (function (){var statearr_66758 = state_66536;
(statearr_66758[(4)] = cljs.core.cons((85),(state_66536[(4)])));

return statearr_66758;
})();
var inst_66383 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66384 = [new cljs.core.Keyword(null,"a","a",-2123407586)];
var inst_66385 = [(1)];
var inst_66386 = cljs.core.PersistentHashMap.fromArrays(inst_66384,inst_66385);
var inst_66387 = [inst_66386];
var inst_66388 = (new cljs.core.PersistentVector(null,1,(5),inst_66383,inst_66387,null));
var inst_66389 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66390 = ["d1",new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_66391 = (new cljs.core.PersistentVector(null,2,(5),inst_66389,inst_66390,null));
var inst_66392 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_66282,inst_66391);
var inst_66393 = (new cljs.core.List(null,inst_66392,null,(1),null));
var inst_66394__$1 = (new cljs.core.List(null,inst_66388,inst_66393,(2),null));
var inst_66395__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66394__$1);
var state_66536__$1 = (function (){var statearr_66760 = state_66536;
(statearr_66760[(12)] = inst_66394__$1);

(statearr_66760[(22)] = inst_66395__$1);

return statearr_66760;
})();
if(cljs.core.truth_(inst_66395__$1)){
var statearr_66761_67155 = state_66536__$1;
(statearr_66761_67155[(1)] = (86));

} else {
var statearr_66763_67156 = state_66536__$1;
(statearr_66763_67156[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (76))){
var inst_66371 = (state_66536[(2)]);
var state_66536__$1 = (function (){var statearr_66764 = state_66536;
(statearr_66764[(58)] = inst_66371);

return statearr_66764;
})();
var statearr_66765_67157 = state_66536__$1;
(statearr_66765_67157[(2)] = null);

(statearr_66765_67157[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (97))){
var inst_66440 = (state_66536[(46)]);
var inst_66465 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66466 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_66467 = cljs.core.type(inst_66440);
var inst_66468 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"pass","pass",1574159993),22,42,inst_66466,42,inst_66467,"Export returns a Blob"];
var inst_66469 = cljs.core.PersistentHashMap.fromArrays(inst_66465,inst_66468);
var inst_66470 = cljs.test.report.call(null,inst_66469);
var state_66536__$1 = state_66536;
var statearr_66767_67158 = state_66536__$1;
(statearr_66767_67158[(2)] = inst_66470);

(statearr_66767_67158[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (19))){
var inst_65978 = (state_66536[(31)]);
var state_66536__$1 = state_66536;
var statearr_66768_67159 = state_66536__$1;
(statearr_66768_67159[(2)] = inst_65978);

(statearr_66768_67159[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (57))){
var inst_66163 = (state_66536[(26)]);
var inst_66221 = (state_66536[(9)]);
var inst_66222 = (state_66536[(59)]);
var _ = (function (){var statearr_66769 = state_66536;
(statearr_66769[(4)] = cljs.core.cons((60),(state_66536[(4)])));

return statearr_66769;
})();
var inst_66218 = cljs.core.first(inst_66163);
var inst_66219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_66218,(1));
var inst_66220 = (new cljs.core.List(null,inst_66219,null,(1),null));
var inst_66221__$1 = (new cljs.core.List(null,"test",inst_66220,(2),null));
var inst_66222__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66221__$1);
var state_66536__$1 = (function (){var statearr_66771 = state_66536;
(statearr_66771[(9)] = inst_66221__$1);

(statearr_66771[(59)] = inst_66222__$1);

return statearr_66771;
})();
if(cljs.core.truth_(inst_66222__$1)){
var statearr_66772_67160 = state_66536__$1;
(statearr_66772_67160[(1)] = (61));

} else {
var statearr_66773_67161 = state_66536__$1;
(statearr_66773_67161[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (68))){
var inst_66282 = (state_66536[(34)]);
var inst_66297 = (state_66536[(14)]);
var inst_66298 = (state_66536[(10)]);
var _ = (function (){var statearr_66775 = state_66536;
(statearr_66775[(4)] = cljs.core.cons((71),(state_66536[(4)])));

return statearr_66775;
})();
var inst_66295 = cljs.core.count(inst_66282);
var inst_66296 = (new cljs.core.List(null,inst_66295,null,(1),null));
var inst_66297__$1 = (new cljs.core.List(null,(1),inst_66296,(2),null));
var inst_66298__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66297__$1);
var state_66536__$1 = (function (){var statearr_66776 = state_66536;
(statearr_66776[(14)] = inst_66297__$1);

(statearr_66776[(10)] = inst_66298__$1);

return statearr_66776;
})();
if(cljs.core.truth_(inst_66298__$1)){
var statearr_66777_67162 = state_66536__$1;
(statearr_66777_67162[(1)] = (72));

} else {
var statearr_66778_67163 = state_66536__$1;
(statearr_66778_67163[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (11))){
var inst_65952 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_65953 = true;
var inst_65954 = [null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,inst_65953,null,true,"Skipping SQLite tests due to environment limitations"];
var inst_65955 = cljs.core.PersistentHashMap.fromArrays(inst_65952,inst_65954);
var inst_65956 = cljs.test.report.call(null,inst_65955);
var state_66536__$1 = state_66536;
var statearr_66781_67164 = state_66536__$1;
(statearr_66781_67164[(2)] = inst_65956);

(statearr_66781_67164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (9))){
var _ = (function (){var statearr_66782 = state_66536;
(statearr_66782[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66782;
})();
var state_66536__$1 = state_66536;
var ex66774 = (state_66536__$1[(2)]);
var statearr_66784_67165 = state_66536__$1;
(statearr_66784_67165[(5)] = ex66774);


var statearr_66785_67166 = state_66536__$1;
(statearr_66785_67166[(1)] = (8));

(statearr_66785_67166[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (5))){
var inst_65930 = (state_66536[(2)]);
var inst_65931 = inst_65930.message;
var inst_65932 = console.warn("SQLite WASM initialization failed (expected if WASM assets are missing in test env):",inst_65931);
var state_66536__$1 = (function (){var statearr_66786 = state_66536;
(statearr_66786[(60)] = inst_65932);

return statearr_66786;
})();
var statearr_66787_67168 = state_66536__$1;
(statearr_66787_67168[(2)] = null);

(statearr_66787_67168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (83))){
var inst_66419 = (state_66536[(2)]);
var _ = (function (){var statearr_66791 = state_66536;
(statearr_66791[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66791;
})();
var state_66536__$1 = state_66536;
var statearr_66793_67169 = state_66536__$1;
(statearr_66793_67169[(2)] = inst_66419);

(statearr_66793_67169[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (14))){
var inst_65978 = (state_66536[(31)]);
var inst_65979 = (state_66536[(61)]);
var inst_65978__$1 = (state_66536[(2)]);
var inst_65979__$1 = (inst_65978__$1 instanceof cljs.core.ExceptionInfo);
var state_66536__$1 = (function (){var statearr_66795 = state_66536;
(statearr_66795[(31)] = inst_65978__$1);

(statearr_66795[(61)] = inst_65979__$1);

return statearr_66795;
})();
if(cljs.core.truth_(inst_65979__$1)){
var statearr_66796_67170 = state_66536__$1;
(statearr_66796_67170[(1)] = (15));

} else {
var statearr_66797_67171 = state_66536__$1;
(statearr_66797_67171[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (45))){
var inst_66113 = (state_66536[(21)]);
var inst_66134 = (state_66536[(2)]);
var _ = (function (){var statearr_66799 = state_66536;
(statearr_66799[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66799;
})();
var state_66536__$1 = (function (){var statearr_66801 = state_66536;
(statearr_66801[(62)] = inst_66134);

return statearr_66801;
})();
var statearr_66802_67173 = state_66536__$1;
(statearr_66802_67173[(2)] = inst_66113);

(statearr_66802_67173[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (53))){
var _ = (function (){var statearr_66804 = state_66536;
(statearr_66804[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66804;
})();
var state_66536__$1 = state_66536;
var ex66794 = (state_66536__$1[(2)]);
var statearr_66805_67174 = state_66536__$1;
(statearr_66805_67174[(5)] = ex66794);


var statearr_66806_67175 = state_66536__$1;
(statearr_66806_67175[(1)] = (52));

(statearr_66806_67175[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (78))){
var _ = (function (){var statearr_66807 = state_66536;
(statearr_66807[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66807;
})();
var state_66536__$1 = state_66536;
var ex66798 = (state_66536__$1[(2)]);
var statearr_66811_67176 = state_66536__$1;
(statearr_66811_67176[(5)] = ex66798);


var statearr_66812_67177 = state_66536__$1;
(statearr_66812_67177[(1)] = (77));

(statearr_66812_67177[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (26))){
var inst_66003 = (state_66536[(39)]);
var inst_66017 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66018 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_66019 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66021 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_66022 = cljs.core.cons(inst_66021,inst_66003);
var inst_66023 = (new cljs.core.List(null,inst_66022,null,(1),null));
var inst_66024 = (new cljs.core.List(null,inst_66019,inst_66023,(2),null));
var inst_66025 = ["bb_web_ds_tools/persistence_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),15,15,inst_66018,15,inst_66024,"SQLite module loaded"];
var inst_66026 = cljs.core.PersistentHashMap.fromArrays(inst_66017,inst_66025);
var inst_66027 = cljs.test.report.call(null,inst_66026);
var state_66536__$1 = state_66536;
var statearr_66816_67178 = state_66536__$1;
(statearr_66816_67178[(2)] = inst_66027);

(statearr_66816_67178[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (16))){
var inst_65979 = (state_66536[(61)]);
var state_66536__$1 = state_66536;
var statearr_66818_67179 = state_66536__$1;
(statearr_66818_67179[(2)] = inst_65979);

(statearr_66818_67179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (81))){
var inst_66346 = (state_66536[(36)]);
var inst_66368 = (state_66536[(2)]);
var _ = (function (){var statearr_66823 = state_66536;
(statearr_66823[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66823;
})();
var state_66536__$1 = (function (){var statearr_66824 = state_66536;
(statearr_66824[(63)] = inst_66368);

return statearr_66824;
})();
var statearr_66826_67181 = state_66536__$1;
(statearr_66826_67181[(2)] = inst_66346);

(statearr_66826_67181[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (79))){
var inst_66345 = (state_66536[(35)]);
var inst_66348 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66349 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"My Dataset",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"name","name",1843675177)], null)));
var inst_66350 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66351 = cljs.core.cons(inst_66350,inst_66345);
var inst_66352 = ["bb_web_ds_tools/persistence_test.cljs",69,new cljs.core.Keyword(null,"pass","pass",1574159993),24,37,inst_66349,37,inst_66351,null];
var inst_66353 = cljs.core.PersistentHashMap.fromArrays(inst_66348,inst_66352);
var inst_66354 = cljs.test.report.call(null,inst_66353);
var state_66536__$1 = state_66536;
var statearr_66832_67182 = state_66536__$1;
(statearr_66832_67182[(2)] = inst_66354);

(statearr_66832_67182[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (38))){
var _ = (function (){var statearr_66843 = state_66536;
(statearr_66843[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66843;
})();
var state_66536__$1 = state_66536;
var ex66820 = (state_66536__$1[(2)]);
var statearr_66844_67183 = state_66536__$1;
(statearr_66844_67183[(5)] = ex66820);


throw ex66820;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (98))){
var inst_66440 = (state_66536[(46)]);
var inst_66472 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66473 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_66475 = cljs.core.type(inst_66440);
var inst_66476 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"fail","fail",1706214930),22,42,inst_66473,42,inst_66475,"Export returns a Blob"];
var inst_66477 = cljs.core.PersistentHashMap.fromArrays(inst_66472,inst_66476);
var inst_66478 = cljs.test.report.call(null,inst_66477);
var state_66536__$1 = state_66536;
var statearr_66848_67184 = state_66536__$1;
(statearr_66848_67184[(2)] = inst_66478);

(statearr_66848_67184[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (87))){
var inst_66394 = (state_66536[(12)]);
var inst_66405 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66406 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"data","data",-232669377)], null)));
var inst_66407 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66408 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66409 = cljs.core.cons(inst_66408,inst_66394);
var inst_66410 = (new cljs.core.List(null,inst_66409,null,(1),null));
var inst_66411 = (new cljs.core.List(null,inst_66407,inst_66410,(2),null));
var inst_66412 = ["bb_web_ds_tools/persistence_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),24,38,inst_66406,38,inst_66411,null];
var inst_66413 = cljs.core.PersistentHashMap.fromArrays(inst_66405,inst_66412);
var inst_66414 = cljs.test.report.call(null,inst_66413);
var state_66536__$1 = state_66536;
var statearr_66856_67186 = state_66536__$1;
(statearr_66856_67186[(2)] = inst_66414);

(statearr_66856_67186[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (30))){
var inst_66036 = (state_66536[(2)]);
var inst_66037 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66038 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_66039 = ["bb_web_ds_tools/persistence_test.cljs",27,new cljs.core.Keyword(null,"error","error",-978969032),17,19,inst_66038,19,inst_66036,"DB created"];
var inst_66040 = cljs.core.PersistentHashMap.fromArrays(inst_66037,inst_66039);
var inst_66041 = cljs.test.report.call(null,inst_66040);
var state_66536__$1 = state_66536;
var statearr_66862_67187 = state_66536__$1;
(statearr_66862_67187[(2)] = inst_66041);

(statearr_66862_67187[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (73))){
var inst_66297 = (state_66536[(14)]);
var inst_66308 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66309 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null)));
var inst_66310 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66311 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66312 = cljs.core.cons(inst_66311,inst_66297);
var inst_66313 = (new cljs.core.List(null,inst_66312,null,(1),null));
var inst_66314 = (new cljs.core.List(null,inst_66310,inst_66313,(2),null));
var inst_66315 = ["bb_web_ds_tools/persistence_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),24,36,inst_66309,36,inst_66314,null];
var inst_66316 = cljs.core.PersistentHashMap.fromArrays(inst_66308,inst_66315);
var inst_66317 = cljs.test.report.call(null,inst_66316);
var state_66536__$1 = state_66536;
var statearr_66868_67189 = state_66536__$1;
(statearr_66868_67189[(2)] = inst_66317);

(statearr_66868_67189[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (96))){
var _ = (function (){var statearr_66869 = state_66536;
(statearr_66869[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66869;
})();
var state_66536__$1 = state_66536;
var ex66857 = (state_66536__$1[(2)]);
var statearr_66871_67190 = state_66536__$1;
(statearr_66871_67190[(5)] = ex66857);


var statearr_66872_67191 = state_66536__$1;
(statearr_66872_67191[(1)] = (95));

(statearr_66872_67191[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (10))){
var inst_65946 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_65947 = true;
var inst_65948 = [null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,inst_65947,null,true,"Skipping SQLite tests due to environment limitations"];
var inst_65949 = cljs.core.PersistentHashMap.fromArrays(inst_65946,inst_65948);
var inst_65950 = cljs.test.report.call(null,inst_65949);
var state_66536__$1 = state_66536;
var statearr_66895_67193 = state_66536__$1;
(statearr_66895_67193[(2)] = inst_65950);

(statearr_66895_67193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (18))){
var inst_65978 = (state_66536[(31)]);
var inst_65988 = (function(){throw inst_65978})();
var state_66536__$1 = state_66536;
var statearr_66899_67194 = state_66536__$1;
(statearr_66899_67194[(2)] = inst_65988);

(statearr_66899_67194[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (105))){
var inst_66502 = (state_66536[(30)]);
var inst_66513 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66514 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_66515 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66516 = new cljs.core.Symbol(null,">",">",1085014381,null);
var inst_66517 = cljs.core.cons(inst_66516,inst_66502);
var inst_66518 = (new cljs.core.List(null,inst_66517,null,(1),null));
var inst_66519 = (new cljs.core.List(null,inst_66515,inst_66518,(2),null));
var inst_66520 = ["bb_web_ds_tools/persistence_test.cljs",41,new cljs.core.Keyword(null,"fail","fail",1706214930),22,43,inst_66514,43,inst_66519,"Blob is not empty"];
var inst_66521 = cljs.core.PersistentHashMap.fromArrays(inst_66513,inst_66520);
var inst_66522 = cljs.test.report.call(null,inst_66521);
var state_66536__$1 = state_66536;
var statearr_66910_67195 = state_66536__$1;
(statearr_66910_67195[(2)] = inst_66522);

(statearr_66910_67195[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (52))){
var inst_66164 = (state_66536[(2)]);
var inst_66165 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66166 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_66167 = ["bb_web_ds_tools/persistence_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),21,29,inst_66166,29,inst_66164,"One row inserted"];
var inst_66168 = cljs.core.PersistentHashMap.fromArrays(inst_66165,inst_66167);
var inst_66169 = cljs.test.report.call(null,inst_66168);
var state_66536__$1 = state_66536;
var statearr_66915_67196 = state_66536__$1;
(statearr_66915_67196[(2)] = inst_66169);

(statearr_66915_67196[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (67))){
var _ = (function (){var statearr_66919 = state_66536;
(statearr_66919[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66919;
})();
var state_66536__$1 = state_66536;
var ex66900 = (state_66536__$1[(2)]);
var statearr_66933_67197 = state_66536__$1;
(statearr_66933_67197[(5)] = ex66900);


throw ex66900;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (71))){
var _ = (function (){var statearr_66934 = state_66536;
(statearr_66934[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66934;
})();
var state_66536__$1 = state_66536;
var ex66913 = (state_66536__$1[(2)]);
var statearr_66939_67198 = state_66536__$1;
(statearr_66939_67198[(5)] = ex66913);


var statearr_66940_67199 = state_66536__$1;
(statearr_66940_67199[(1)] = (70));

(statearr_66940_67199[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (42))){
var _ = (function (){var statearr_66945 = state_66536;
(statearr_66945[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66945;
})();
var state_66536__$1 = state_66536;
var ex66918 = (state_66536__$1[(2)]);
var statearr_66948_67200 = state_66536__$1;
(statearr_66948_67200[(5)] = ex66918);


var statearr_66949_67201 = state_66536__$1;
(statearr_66949_67201[(1)] = (41));

(statearr_66949_67201[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (80))){
var inst_66345 = (state_66536[(35)]);
var inst_66357 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66358 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"My Dataset",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"name","name",1843675177)], null)));
var inst_66359 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66360 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66361 = cljs.core.cons(inst_66360,inst_66345);
var inst_66362 = (new cljs.core.List(null,inst_66361,null,(1),null));
var inst_66363 = (new cljs.core.List(null,inst_66359,inst_66362,(2),null));
var inst_66364 = ["bb_web_ds_tools/persistence_test.cljs",69,new cljs.core.Keyword(null,"fail","fail",1706214930),24,37,inst_66358,37,inst_66363,null];
var inst_66365 = cljs.core.PersistentHashMap.fromArrays(inst_66357,inst_66364);
var inst_66366 = cljs.test.report.call(null,inst_66365);
var state_66536__$1 = state_66536;
var statearr_66957_67205 = state_66536__$1;
(statearr_66957_67205[(2)] = inst_66366);

(statearr_66957_67205[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (37))){
var _ = (function (){var statearr_66962 = state_66536;
(statearr_66962[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_66962;
})();
var inst_66079 = (state_66536[(2)]);
var inst_66080 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66081 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66083 = (new cljs.core.PersistentVector(null,1,(5),inst_66080,inst_66081,null));
var inst_66084 = cljs.test.update_current_env_BANG_(inst_66083,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_66536[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31632__auto__ = temp__5825__auto__;
throw e__31632__auto__;
} else {
return null;
}
})();
var state_66536__$1 = (function (){var statearr_67004 = state_66536;
(statearr_67004[(64)] = inst_66084);

return statearr_67004;
})();
var statearr_67010_67207 = state_66536__$1;
(statearr_67010_67207[(2)] = inst_66079);

(statearr_67010_67207[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (63))){
var inst_66222 = (state_66536[(59)]);
var inst_66244 = (state_66536[(2)]);
var _ = (function (){var statearr_67015 = state_66536;
(statearr_67015[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_67015;
})();
var state_66536__$1 = (function (){var statearr_67016 = state_66536;
(statearr_67016[(65)] = inst_66244);

return statearr_67016;
})();
var statearr_67017_67209 = state_66536__$1;
(statearr_67017_67209[(2)] = inst_66222);

(statearr_67017_67209[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (94))){
var inst_66483 = (state_66536[(2)]);
var state_66536__$1 = (function (){var statearr_67025 = state_66536;
(statearr_67025[(66)] = inst_66483);

return statearr_67025;
})();
var statearr_67032_67210 = state_66536__$1;
(statearr_67032_67210[(2)] = null);

(statearr_67032_67210[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (8))){
var inst_65933 = (state_66536[(2)]);
var inst_65934 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_65935 = true;
var inst_65936 = [null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,inst_65935,null,inst_65933,"Skipping SQLite tests due to environment limitations"];
var inst_65937 = cljs.core.PersistentHashMap.fromArrays(inst_65934,inst_65936);
var inst_65938 = cljs.test.report.call(null,inst_65937);
var state_66536__$1 = state_66536;
var statearr_67038_67211 = state_66536__$1;
(statearr_67038_67211[(2)] = inst_65938);

(statearr_67038_67211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (49))){
var _ = (function (){var statearr_67047 = state_66536;
(statearr_67047[(4)] = cljs.core.rest((state_66536[(4)])));

return statearr_67047;
})();
var state_66536__$1 = state_66536;
var ex67019 = (state_66536__$1[(2)]);
var statearr_67048_67213 = state_66536__$1;
(statearr_67048_67213[(5)] = ex67019);


throw ex67019;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66537 === (84))){
var inst_66372 = (state_66536[(2)]);
var inst_66373 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66374 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"data","data",-232669377)], null)));
var inst_66375 = ["bb_web_ds_tools/persistence_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),24,38,inst_66374,38,inst_66372,null];
var inst_66376 = cljs.core.PersistentHashMap.fromArrays(inst_66373,inst_66375);
var inst_66377 = cljs.test.report.call(null,inst_66376);
var state_66536__$1 = state_66536;
var statearr_67049_67214 = state_66536__$1;
(statearr_67049_67214[(2)] = inst_66377);

(statearr_67049_67214[(1)] = (83));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var bb_web_ds_tools$persistence_test$state_machine__32400__auto__ = null;
var bb_web_ds_tools$persistence_test$state_machine__32400__auto____0 = (function (){
var statearr_67050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67050[(0)] = bb_web_ds_tools$persistence_test$state_machine__32400__auto__);

(statearr_67050[(1)] = (1));

return statearr_67050;
});
var bb_web_ds_tools$persistence_test$state_machine__32400__auto____1 = (function (state_66536){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_66536);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e67051){var ex__32403__auto__ = e67051;
var statearr_67052_67217 = state_66536;
(statearr_67052_67217[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_66536[(4)]))){
var statearr_67053_67218 = state_66536;
(statearr_67053_67218[(1)] = cljs.core.first((state_66536[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67219 = state_66536;
state_66536 = G__67219;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$persistence_test$state_machine__32400__auto__ = function(state_66536){
switch(arguments.length){
case 0:
return bb_web_ds_tools$persistence_test$state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$persistence_test$state_machine__32400__auto____1.call(this,state_66536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$persistence_test$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$persistence_test$state_machine__32400__auto____0;
bb_web_ds_tools$persistence_test$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$persistence_test$state_machine__32400__auto____1;
return bb_web_ds_tools$persistence_test$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_67054 = f__32475__auto__();
(statearr_67054[(6)] = c__32474__auto__);

return statearr_67054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test65909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta65910","meta65910",-773684013,null)], null);
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test65909.cljs$lang$type = true);

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test65909.cljs$lang$ctorStr = "bb-web-ds-tools.persistence-test/t_bb_web_ds_tools$persistence_test65909");

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test65909.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.persistence-test/t_bb_web_ds_tools$persistence_test65909");
}));

/**
 * Positional factory function for bb-web-ds-tools.persistence-test/t_bb_web_ds_tools$persistence_test65909.
 */
bb_web_ds_tools.persistence_test.__GT_t_bb_web_ds_tools$persistence_test65909 = (function bb_web_ds_tools$persistence_test$__GT_t_bb_web_ds_tools$persistence_test65909(meta65910){
return (new bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test65909(meta65910));
});


bb_web_ds_tools.persistence_test.test_sqlite_wasm = (function bb_web_ds_tools$persistence_test$test_sqlite_wasm(){
return cljs.test.test_var(bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$var);
});
bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$test = (function (){
return (new bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test65909(null));
});

(bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.persistence_test.test_sqlite_wasm;},new cljs.core.Symbol("bb-web-ds-tools.persistence-test","test-sqlite-wasm","bb-web-ds-tools.persistence-test/test-sqlite-wasm",537405847,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.persistence-test","bb-web-ds-tools.persistence-test",724034039,null),new cljs.core.Symbol(null,"test-sqlite-wasm","test-sqlite-wasm",165441020,null),"bb_web_ds_tools/persistence_test.cljs",26,1,8,8,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.persistence_test.test_sqlite_wasm)?bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.persistence_test.js.map
