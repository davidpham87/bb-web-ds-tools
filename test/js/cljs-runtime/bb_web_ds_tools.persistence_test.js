goog.provide('bb_web_ds_tools.persistence_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test41087 = (function (meta41088){
this.meta41088 = meta41088;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test41087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41089,meta41088__$1){
var self__ = this;
var _41089__$1 = this;
return (new bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test41087(meta41088__$1));
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test41087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41089){
var self__ = this;
var _41089__$1 = this;
return self__.meta41088;
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test41087.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test41087.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__41093 = (arguments.length - (1));
switch (G__41093) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test41087.prototype.apply = (function (self__,args41090){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args41090)));
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test41087.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_41730){
var state_val_41731 = (state_41730[(1)]);
if((state_val_41731 === (65))){
var inst_41620 = (state_41730[(2)]);
var inst_41621 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41622 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_41623 = (new cljs.core.PersistentVector(null,1,(5),inst_41621,inst_41622,null));
var inst_41624 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_41623,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Export DB"], 0));
var state_41730__$1 = (function (){var statearr_41739 = state_41730;
(statearr_41739[(7)] = inst_41620);

(statearr_41739[(8)] = inst_41624);

return statearr_41739;
})();
var statearr_41740_42251 = state_41730__$1;
(statearr_41740_42251[(2)] = null);

(statearr_41740_42251[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (70))){
var inst_41469 = (state_41730[(2)]);
var inst_41470 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41471 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null)));
var inst_41472 = ["bb_web_ds_tools/persistence_test.cljs",48,new cljs.core.Keyword(null,"error","error",-978969032),28,36,inst_41471,36,inst_41469,null];
var inst_41473 = cljs.core.PersistentHashMap.fromArrays(inst_41470,inst_41472);
var inst_41474 = cljs.test.report.call(null,inst_41473);
var state_41730__$1 = state_41730;
var statearr_41741_42252 = state_41730__$1;
(statearr_41741_42252[(2)] = inst_41474);

(statearr_41741_42252[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (62))){
var inst_41409 = (state_41730[(9)]);
var inst_41420 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41421 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test",cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)),(1)));
var inst_41422 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41423 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41424 = cljs.core.cons(inst_41423,inst_41409);
var inst_41425 = (new cljs.core.List(null,inst_41424,null,(1),null));
var inst_41426 = (new cljs.core.List(null,inst_41422,inst_41425,(2),null));
var inst_41427 = ["bb_web_ds_tools/persistence_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),26,30,inst_41421,30,inst_41426,"Name matches"];
var inst_41428 = cljs.core.PersistentHashMap.fromArrays(inst_41420,inst_41427);
var inst_41429 = cljs.test.report.call(null,inst_41428);
var state_41730__$1 = state_41730;
var statearr_41744_42253 = state_41730__$1;
(statearr_41744_42253[(2)] = inst_41429);

(statearr_41744_42253[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (74))){
var inst_41483 = (state_41730[(10)]);
var inst_41519 = (state_41730[(2)]);
var _ = (function (){var statearr_41745 = state_41730;
(statearr_41745[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41745;
})();
var state_41730__$1 = (function (){var statearr_41746 = state_41730;
(statearr_41746[(11)] = inst_41519);

return statearr_41746;
})();
var statearr_41747_42254 = state_41730__$1;
(statearr_41747_42254[(2)] = inst_41483);

(statearr_41747_42254[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (7))){
var inst_41149 = (state_41730[(2)]);
var state_41730__$1 = state_41730;
var statearr_41754_42255 = state_41730__$1;
(statearr_41754_42255[(2)] = inst_41149);

(statearr_41754_42255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (59))){
var inst_41395 = (state_41730[(2)]);
var inst_41396 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41397 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test",cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)),(1)));
var inst_41398 = ["bb_web_ds_tools/persistence_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),26,30,inst_41397,30,inst_41395,"Name matches"];
var inst_41399 = cljs.core.PersistentHashMap.fromArrays(inst_41396,inst_41398);
var inst_41400 = cljs.test.report.call(null,inst_41399);
var state_41730__$1 = state_41730;
var statearr_41756_42256 = state_41730__$1;
(statearr_41756_42256[(2)] = inst_41400);

(statearr_41756_42256[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (86))){
var inst_41587 = (state_41730[(12)]);
var inst_41595 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41596 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"data","data",-232669377)], null)));
var inst_41597 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41598 = cljs.core.cons(inst_41597,inst_41587);
var inst_41599 = ["bb_web_ds_tools/persistence_test.cljs",69,new cljs.core.Keyword(null,"pass","pass",1574159993),28,38,inst_41596,38,inst_41598,null];
var inst_41600 = cljs.core.PersistentHashMap.fromArrays(inst_41595,inst_41599);
var inst_41601 = cljs.test.report.call(null,inst_41600);
var state_41730__$1 = state_41730;
var statearr_41757_42257 = state_41730__$1;
(statearr_41757_42257[(2)] = inst_41601);

(statearr_41757_42257[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (20))){
var inst_41179 = (state_41730[(2)]);
var state_41730__$1 = (function (){var statearr_41758 = state_41730;
(statearr_41758[(13)] = inst_41179);

return statearr_41758;
})();
var statearr_41766_42258 = state_41730__$1;
(statearr_41766_42258[(2)] = null);

(statearr_41766_42258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (72))){
var inst_41482 = (state_41730[(14)]);
var inst_41485 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41486 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null)));
var inst_41487 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41488 = cljs.core.cons(inst_41487,inst_41482);
var inst_41489 = ["bb_web_ds_tools/persistence_test.cljs",48,new cljs.core.Keyword(null,"pass","pass",1574159993),28,36,inst_41486,36,inst_41488,null];
var inst_41490 = cljs.core.PersistentHashMap.fromArrays(inst_41485,inst_41489);
var inst_41491 = cljs.test.report.call(null,inst_41490);
var state_41730__$1 = state_41730;
var statearr_41769_42259 = state_41730__$1;
(statearr_41769_42259[(2)] = inst_41491);

(statearr_41769_42259[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (58))){
var inst_41434 = (state_41730[(2)]);
var _ = (function (){var statearr_41770 = state_41730;
(statearr_41770[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41770;
})();
var state_41730__$1 = state_41730;
var statearr_41771_42260 = state_41730__$1;
(statearr_41771_42260[(2)] = inst_41434);

(statearr_41771_42260[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (60))){
var _ = (function (){var statearr_41773 = state_41730;
(statearr_41773[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41773;
})();
var state_41730__$1 = state_41730;
var ex41768 = (state_41730__$1[(2)]);
var statearr_41774_42261 = state_41730__$1;
(statearr_41774_42261[(5)] = ex41768);


var statearr_41776_42262 = state_41730__$1;
(statearr_41776_42262[(1)] = (59));

(statearr_41776_42262[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (27))){
var inst_41193 = (state_41730[(15)]);
var inst_41214 = (state_41730[(2)]);
var _ = (function (){var statearr_41777 = state_41730;
(statearr_41777[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41777;
})();
var state_41730__$1 = (function (){var statearr_41778 = state_41730;
(statearr_41778[(16)] = inst_41214);

return statearr_41778;
})();
var statearr_41779_42263 = state_41730__$1;
(statearr_41779_42263[(2)] = inst_41193);

(statearr_41779_42263[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (1))){
var state_41730__$1 = state_41730;
var statearr_41780_42264 = state_41730__$1;
(statearr_41780_42264[(2)] = null);

(statearr_41780_42264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (69))){
var inst_41522 = (state_41730[(2)]);
var state_41730__$1 = (function (){var statearr_41782 = state_41730;
(statearr_41782[(17)] = inst_41522);

return statearr_41782;
})();
var statearr_41784_42265 = state_41730__$1;
(statearr_41784_42265[(2)] = null);

(statearr_41784_42265[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (101))){
var inst_41711 = (state_41730[(2)]);
var _ = (function (){var statearr_41785 = state_41730;
(statearr_41785[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41785;
})();
var state_41730__$1 = state_41730;
var statearr_41786_42266 = state_41730__$1;
(statearr_41786_42266[(2)] = inst_41711);

(statearr_41786_42266[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (24))){
var _ = (function (){var statearr_41787 = state_41730;
(statearr_41787[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41787;
})();
var state_41730__$1 = state_41730;
var ex41781 = (state_41730__$1[(2)]);
var statearr_41788_42267 = state_41730__$1;
(statearr_41788_42267[(5)] = ex41781);


var statearr_41789_42268 = state_41730__$1;
(statearr_41789_42268[(1)] = (23));

(statearr_41789_42268[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (102))){
var inst_41673 = (state_41730[(2)]);
var inst_41674 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41675 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_41676 = ["bb_web_ds_tools/persistence_test.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),26,43,inst_41675,43,inst_41673,"Blob is not empty"];
var inst_41677 = cljs.core.PersistentHashMap.fromArrays(inst_41674,inst_41676);
var inst_41678 = cljs.test.report.call(null,inst_41677);
var state_41730__$1 = state_41730;
var statearr_41791_42269 = state_41730__$1;
(statearr_41791_42269[(2)] = inst_41678);

(statearr_41791_42269[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (55))){
var inst_41369 = (state_41730[(18)]);
var inst_41380 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41381 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_41382 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41383 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41384 = cljs.core.cons(inst_41383,inst_41369);
var inst_41385 = (new cljs.core.List(null,inst_41384,null,(1),null));
var inst_41386 = (new cljs.core.List(null,inst_41382,inst_41385,(2),null));
var inst_41387 = ["bb_web_ds_tools/persistence_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),26,29,inst_41381,29,inst_41386,"One row inserted"];
var inst_41388 = cljs.core.PersistentHashMap.fromArrays(inst_41380,inst_41387);
var inst_41389 = cljs.test.report.call(null,inst_41388);
var state_41730__$1 = state_41730;
var statearr_41802_42270 = state_41730__$1;
(statearr_41802_42270[(2)] = inst_41389);

(statearr_41802_42270[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (85))){
var _ = (function (){var statearr_41803 = state_41730;
(statearr_41803[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41803;
})();
var state_41730__$1 = state_41730;
var ex41790 = (state_41730__$1[(2)]);
var statearr_41804_42271 = state_41730__$1;
(statearr_41804_42271[(5)] = ex41790);


var statearr_41805_42272 = state_41730__$1;
(statearr_41805_42272[(1)] = (84));

(statearr_41805_42272[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (39))){
var inst_41282 = (state_41730[(19)]);
var inst_41299 = (state_41730[(20)]);
var inst_41300 = (state_41730[(21)]);
var _ = (function (){var statearr_41812 = state_41730;
(statearr_41812[(4)] = cljs.core.cons((42),(state_41730[(4)])));

return statearr_41812;
})();
var inst_41297 = inst_41282.length;
var inst_41298 = (new cljs.core.List(null,inst_41297,null,(1),null));
var inst_41299__$1 = (new cljs.core.List(null,(1),inst_41298,(2),null));
var inst_41300__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_41299__$1);
var state_41730__$1 = (function (){var statearr_41813 = state_41730;
(statearr_41813[(20)] = inst_41299__$1);

(statearr_41813[(21)] = inst_41300__$1);

return statearr_41813;
})();
if(cljs.core.truth_(inst_41300__$1)){
var statearr_41814_42273 = state_41730__$1;
(statearr_41814_42273[(1)] = (43));

} else {
var statearr_41815_42274 = state_41730__$1;
(statearr_41815_42274[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (88))){
var inst_41588 = (state_41730[(22)]);
var inst_41614 = (state_41730[(2)]);
var _ = (function (){var statearr_41816 = state_41730;
(statearr_41816[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41816;
})();
var state_41730__$1 = (function (){var statearr_41817 = state_41730;
(statearr_41817[(23)] = inst_41614);

return statearr_41817;
})();
var statearr_41822_42275 = state_41730__$1;
(statearr_41822_42275[(2)] = inst_41588);

(statearr_41822_42275[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (46))){
var inst_41220 = (state_41730[(24)]);
var _ = (function (){var statearr_41823 = state_41730;
(statearr_41823[(4)] = cljs.core.cons((48),(state_41730[(4)])));

return statearr_41823;
})();
var ___$1 = (function (){var statearr_41824 = state_41730;
(statearr_41824[(4)] = cljs.core.cons((49),(state_41730[(4)])));

return statearr_41824;
})();
var inst_41349 = inst_41220.exec("INSERT INTO datasets VALUES ('1', 'test', 'content', 123)");
var inst_41350 = [new cljs.core.Keyword(null,"returnValue","returnValue",1643246062)];
var inst_41351 = ["resultRows"];
var inst_41352 = cljs.core.PersistentHashMap.fromArrays(inst_41350,inst_41351);
var inst_41353 = cljs.core.clj__GT_js(inst_41352);
var inst_41354 = inst_41220.exec("SELECT * FROM datasets",inst_41353);
var state_41730__$1 = (function (){var statearr_41826 = state_41730;
(statearr_41826[(25)] = inst_41349);

(statearr_41826[(26)] = inst_41354);

return statearr_41826;
})();
var statearr_41827_42276 = state_41730__$1;
(statearr_41827_42276[(2)] = null);

(statearr_41827_42276[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (4))){
var _ = (function (){var statearr_41828 = state_41730;
(statearr_41828[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41828;
})();
var inst_41105 = (state_41730[(2)]);
var inst_41109 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var ___$1 = (function (){var temp__5825__auto__ = (state_41730[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_41730__$1 = (function (){var statearr_41829 = state_41730;
(statearr_41829[(27)] = inst_41109);

return statearr_41829;
})();
var statearr_41832_42277 = state_41730__$1;
(statearr_41832_42277[(2)] = inst_41105);

(statearr_41832_42277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (77))){
var inst_41523 = (state_41730[(2)]);
var inst_41524 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41525 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"My Dataset",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"name","name",1843675177)], null)));
var inst_41526 = ["bb_web_ds_tools/persistence_test.cljs",73,new cljs.core.Keyword(null,"error","error",-978969032),28,37,inst_41525,37,inst_41523,null];
var inst_41527 = cljs.core.PersistentHashMap.fromArrays(inst_41524,inst_41526);
var inst_41528 = cljs.test.report.call(null,inst_41527);
var state_41730__$1 = state_41730;
var statearr_41834_42278 = state_41730__$1;
(statearr_41834_42278[(2)] = inst_41528);

(statearr_41834_42278[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (106))){
var inst_41687 = (state_41730[(28)]);
var inst_41708 = (state_41730[(2)]);
var _ = (function (){var statearr_41835 = state_41730;
(statearr_41835[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41835;
})();
var state_41730__$1 = (function (){var statearr_41836 = state_41730;
(statearr_41836[(29)] = inst_41708);

return statearr_41836;
})();
var statearr_41837_42279 = state_41730__$1;
(statearr_41837_42279[(2)] = inst_41687);

(statearr_41837_42279[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (95))){
var inst_41641 = (state_41730[(2)]);
var inst_41642 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41643 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_41644 = ["bb_web_ds_tools/persistence_test.cljs",50,new cljs.core.Keyword(null,"error","error",-978969032),26,42,inst_41643,42,inst_41641,"Export returns a Blob"];
var inst_41645 = cljs.core.PersistentHashMap.fromArrays(inst_41642,inst_41644);
var inst_41646 = cljs.test.report.call(null,inst_41645);
var state_41730__$1 = state_41730;
var statearr_41840_42280 = state_41730__$1;
(statearr_41840_42280[(2)] = inst_41646);

(statearr_41840_42280[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (54))){
var inst_41369 = (state_41730[(18)]);
var inst_41372 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41373 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_41374 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41375 = cljs.core.cons(inst_41374,inst_41369);
var inst_41376 = ["bb_web_ds_tools/persistence_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),26,29,inst_41373,29,inst_41375,"One row inserted"];
var inst_41377 = cljs.core.PersistentHashMap.fromArrays(inst_41372,inst_41376);
var inst_41378 = cljs.test.report.call(null,inst_41377);
var state_41730__$1 = state_41730;
var statearr_41844_42281 = state_41730__$1;
(statearr_41844_42281[(2)] = inst_41378);

(statearr_41844_42281[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (92))){
var _ = (function (){var statearr_41845 = state_41730;
(statearr_41845[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41845;
})();
var state_41730__$1 = state_41730;
var ex41838 = (state_41730__$1[(2)]);
var statearr_41846_42282 = state_41730__$1;
(statearr_41846_42282[(5)] = ex41838);


throw ex41838;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (104))){
var inst_41686 = (state_41730[(30)]);
var inst_41689 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41690 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_41691 = new cljs.core.Symbol(null,">",">",1085014381,null);
var inst_41692 = cljs.core.cons(inst_41691,inst_41686);
var inst_41693 = ["bb_web_ds_tools/persistence_test.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),26,43,inst_41690,43,inst_41692,"Blob is not empty"];
var inst_41694 = cljs.core.PersistentHashMap.fromArrays(inst_41689,inst_41693);
var inst_41695 = cljs.test.report.call(null,inst_41694);
var state_41730__$1 = state_41730;
var statearr_41847_42283 = state_41730__$1;
(statearr_41847_42283[(2)] = inst_41695);

(statearr_41847_42283[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (15))){
var inst_41165 = (state_41730[(31)]);
var inst_41169 = cljs.core.ex_data(inst_41165);
var inst_41170 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41169);
var inst_41171 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41170,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_41730__$1 = state_41730;
var statearr_41857_42284 = state_41730__$1;
(statearr_41857_42284[(2)] = inst_41171);

(statearr_41857_42284[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (48))){
var _ = (function (){var statearr_41858 = state_41730;
(statearr_41858[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41858;
})();
var inst_41334 = (state_41730[(2)]);
var inst_41335 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41336 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_41337 = (new cljs.core.PersistentVector(null,1,(5),inst_41335,inst_41336,null));
var inst_41338 = cljs.test.update_current_env_BANG_(inst_41337,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_41730[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_41730__$1 = (function (){var statearr_41860 = state_41730;
(statearr_41860[(32)] = inst_41338);

return statearr_41860;
})();
var statearr_41861_42285 = state_41730__$1;
(statearr_41861_42285[(2)] = inst_41334);

(statearr_41861_42285[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (50))){
var inst_41354 = (state_41730[(26)]);
var inst_41369 = (state_41730[(18)]);
var inst_41370 = (state_41730[(33)]);
var _ = (function (){var statearr_41862 = state_41730;
(statearr_41862[(4)] = cljs.core.cons((53),(state_41730[(4)])));

return statearr_41862;
})();
var inst_41367 = cljs.core.count(inst_41354);
var inst_41368 = (new cljs.core.List(null,inst_41367,null,(1),null));
var inst_41369__$1 = (new cljs.core.List(null,(1),inst_41368,(2),null));
var inst_41370__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_41369__$1);
var state_41730__$1 = (function (){var statearr_41877 = state_41730;
(statearr_41877[(18)] = inst_41369__$1);

(statearr_41877[(33)] = inst_41370__$1);

return statearr_41877;
})();
if(cljs.core.truth_(inst_41370__$1)){
var statearr_41878_42286 = state_41730__$1;
(statearr_41878_42286[(1)] = (54));

} else {
var statearr_41879_42287 = state_41730__$1;
(statearr_41879_42287[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (75))){
var inst_41468 = (state_41730[(34)]);
var inst_41539 = (state_41730[(35)]);
var inst_41540 = (state_41730[(36)]);
var _ = (function (){var statearr_41882 = state_41730;
(statearr_41882[(4)] = cljs.core.cons((78),(state_41730[(4)])));

return statearr_41882;
})();
var inst_41534 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41535 = ["d1",new cljs.core.Keyword(null,"name","name",1843675177)];
var inst_41536 = (new cljs.core.PersistentVector(null,2,(5),inst_41534,inst_41535,null));
var inst_41537 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_41468,inst_41536);
var inst_41538 = (new cljs.core.List(null,inst_41537,null,(1),null));
var inst_41539__$1 = (new cljs.core.List(null,"My Dataset",inst_41538,(2),null));
var inst_41540__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_41539__$1);
var state_41730__$1 = (function (){var statearr_41883 = state_41730;
(statearr_41883[(35)] = inst_41539__$1);

(statearr_41883[(36)] = inst_41540__$1);

return statearr_41883;
})();
if(cljs.core.truth_(inst_41540__$1)){
var statearr_41885_42288 = state_41730__$1;
(statearr_41885_42288[(1)] = (79));

} else {
var statearr_41886_42289 = state_41730__$1;
(statearr_41886_42289[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (99))){
var inst_41653 = (state_41730[(37)]);
var inst_41669 = (state_41730[(2)]);
var _ = (function (){var statearr_41903 = state_41730;
(statearr_41903[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41903;
})();
var state_41730__$1 = (function (){var statearr_41904 = state_41730;
(statearr_41904[(38)] = inst_41669);

return statearr_41904;
})();
var statearr_41905_42290 = state_41730__$1;
(statearr_41905_42290[(2)] = inst_41653);

(statearr_41905_42290[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (21))){
var inst_41179 = (state_41730[(13)]);
var inst_41192 = (state_41730[(39)]);
var inst_41193 = (state_41730[(15)]);
var _ = (function (){var statearr_41906 = state_41730;
(statearr_41906[(4)] = cljs.core.cons((24),(state_41730[(4)])));

return statearr_41906;
})();
var inst_41192__$1 = (new cljs.core.List(null,inst_41179,null,(1),null));
var inst_41193__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_41192__$1);
var state_41730__$1 = (function (){var statearr_41907 = state_41730;
(statearr_41907[(39)] = inst_41192__$1);

(statearr_41907[(15)] = inst_41193__$1);

return statearr_41907;
})();
if(cljs.core.truth_(inst_41193__$1)){
var statearr_41910_42291 = state_41730__$1;
(statearr_41910_42291[(1)] = (25));

} else {
var statearr_41911_42292 = state_41730__$1;
(statearr_41911_42292[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (31))){
var _ = (function (){var statearr_41914 = state_41730;
(statearr_41914[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41914;
})();
var state_41730__$1 = state_41730;
var ex41889 = (state_41730__$1[(2)]);
var statearr_41915_42293 = state_41730__$1;
(statearr_41915_42293[(5)] = ex41889);


var statearr_41918_42294 = state_41730__$1;
(statearr_41918_42294[(1)] = (30));

(statearr_41918_42294[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (32))){
var inst_41233 = (state_41730[(40)]);
var inst_41236 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41237 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_41238 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_41239 = cljs.core.cons(inst_41238,inst_41233);
var inst_41240 = ["bb_web_ds_tools/persistence_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),22,19,inst_41237,19,inst_41239,"DB created"];
var inst_41241 = cljs.core.PersistentHashMap.fromArrays(inst_41236,inst_41240);
var inst_41242 = cljs.test.report.call(null,inst_41241);
var state_41730__$1 = state_41730;
var statearr_41921_42295 = state_41730__$1;
(statearr_41921_42295[(2)] = inst_41242);

(statearr_41921_42295[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (40))){
var inst_41325 = (state_41730[(2)]);
var _ = (function (){var statearr_41926 = state_41730;
(statearr_41926[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41926;
})();
var state_41730__$1 = state_41730;
var statearr_41927_42296 = state_41730__$1;
(statearr_41927_42296[(2)] = inst_41325);

(statearr_41927_42296[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (91))){
var _ = (function (){var statearr_41946 = state_41730;
(statearr_41946[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41946;
})();
var inst_41626 = (state_41730[(2)]);
var inst_41627 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41628 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_41629 = (new cljs.core.PersistentVector(null,1,(5),inst_41627,inst_41628,null));
var inst_41630 = cljs.test.update_current_env_BANG_(inst_41629,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_41730[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_41730__$1 = (function (){var statearr_41954 = state_41730;
(statearr_41954[(41)] = inst_41630);

return statearr_41954;
})();
var statearr_41955_42297 = state_41730__$1;
(statearr_41955_42297[(2)] = inst_41626);

(statearr_41955_42297[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (56))){
var inst_41370 = (state_41730[(33)]);
var inst_41391 = (state_41730[(2)]);
var _ = (function (){var statearr_41957 = state_41730;
(statearr_41957[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41957;
})();
var state_41730__$1 = (function (){var statearr_41959 = state_41730;
(statearr_41959[(42)] = inst_41391);

return statearr_41959;
})();
var statearr_41960_42298 = state_41730__$1;
(statearr_41960_42298[(2)] = inst_41370);

(statearr_41960_42298[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (33))){
var inst_41233 = (state_41730[(40)]);
var inst_41244 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41245 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_41246 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41247 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_41248 = cljs.core.cons(inst_41247,inst_41233);
var inst_41249 = (new cljs.core.List(null,inst_41248,null,(1),null));
var inst_41250 = (new cljs.core.List(null,inst_41246,inst_41249,(2),null));
var inst_41251 = ["bb_web_ds_tools/persistence_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),22,19,inst_41245,19,inst_41250,"DB created"];
var inst_41252 = cljs.core.PersistentHashMap.fromArrays(inst_41244,inst_41251);
var inst_41253 = cljs.test.report.call(null,inst_41252);
var state_41730__$1 = state_41730;
var statearr_41971_42299 = state_41730__$1;
(statearr_41971_42299[(2)] = inst_41253);

(statearr_41971_42299[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (13))){
var _ = (function (){var statearr_41972 = state_41730;
(statearr_41972[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41972;
})();
var state_41730__$1 = state_41730;
var ex41956 = (state_41730__$1[(2)]);
var statearr_41973_42300 = state_41730__$1;
(statearr_41973_42300[(5)] = ex41956);


var statearr_41974_42301 = state_41730__$1;
(statearr_41974_42301[(1)] = (5));

(statearr_41974_42301[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (22))){
var inst_41179 = (state_41730[(13)]);
var inst_41217 = (state_41730[(2)]);
var inst_41218 = inst_41179.oo1;
var inst_41219 = inst_41218.DB;
var inst_41220 = (new inst_41219(":memory:","ct"));
var state_41730__$1 = (function (){var statearr_41981 = state_41730;
(statearr_41981[(43)] = inst_41217);

(statearr_41981[(24)] = inst_41220);

return statearr_41981;
})();
var statearr_41982_42302 = state_41730__$1;
(statearr_41982_42302[(2)] = null);

(statearr_41982_42302[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (90))){
var inst_41714 = (state_41730[(2)]);
var _ = (function (){var statearr_41983 = state_41730;
(statearr_41983[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_41983;
})();
var state_41730__$1 = state_41730;
var statearr_41984_42303 = state_41730__$1;
(statearr_41984_42303[(2)] = inst_41714);

(statearr_41984_42303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (36))){
var inst_41328 = (state_41730[(2)]);
var inst_41329 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41330 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_41331 = (new cljs.core.PersistentVector(null,1,(5),inst_41329,inst_41330,null));
var inst_41332 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_41331,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Insert and Query Manual"], 0));
var state_41730__$1 = (function (){var statearr_41985 = state_41730;
(statearr_41985[(44)] = inst_41328);

(statearr_41985[(45)] = inst_41332);

return statearr_41985;
})();
var statearr_41987_42304 = state_41730__$1;
(statearr_41987_42304[(2)] = null);

(statearr_41987_42304[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (41))){
var inst_41283 = (state_41730[(2)]);
var inst_41285 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41286 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_41289 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"error","error",-978969032),26,24,inst_41286,24,inst_41283,"datasets table exists"];
var inst_41290 = cljs.core.PersistentHashMap.fromArrays(inst_41285,inst_41289);
var inst_41291 = cljs.test.report.call(null,inst_41290);
var state_41730__$1 = state_41730;
var statearr_41992_42305 = state_41730__$1;
(statearr_41992_42305[(2)] = inst_41291);

(statearr_41992_42305[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (89))){
var inst_41220 = (state_41730[(24)]);
var _ = (function (){var statearr_41993 = state_41730;
(statearr_41993[(4)] = cljs.core.cons((91),(state_41730[(4)])));

return statearr_41993;
})();
var ___$1 = (function (){var statearr_41994 = state_41730;
(statearr_41994[(4)] = cljs.core.cons((92),(state_41730[(4)])));

return statearr_41994;
})();
var inst_41638 = bb_web_ds_tools.workspaces.persistence_fx.export_db(inst_41220);
var state_41730__$1 = (function (){var statearr_41995 = state_41730;
(statearr_41995[(46)] = inst_41638);

return statearr_41995;
})();
var statearr_41996_42306 = state_41730__$1;
(statearr_41996_42306[(2)] = null);

(statearr_41996_42306[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (100))){
var inst_41638 = (state_41730[(46)]);
var inst_41686 = (state_41730[(30)]);
var inst_41687 = (state_41730[(28)]);
var _ = (function (){var statearr_41997 = state_41730;
(statearr_41997[(4)] = cljs.core.cons((103),(state_41730[(4)])));

return statearr_41997;
})();
var inst_41684 = inst_41638.size;
var inst_41685 = (new cljs.core.List(null,(0),null,(1),null));
var inst_41686__$1 = (new cljs.core.List(null,inst_41684,inst_41685,(2),null));
var inst_41687__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,inst_41686__$1);
var state_41730__$1 = (function (){var statearr_41998 = state_41730;
(statearr_41998[(30)] = inst_41686__$1);

(statearr_41998[(28)] = inst_41687__$1);

return statearr_41998;
})();
if(cljs.core.truth_(inst_41687__$1)){
var statearr_41999_42307 = state_41730__$1;
(statearr_41999_42307[(1)] = (104));

} else {
var statearr_42000_42308 = state_41730__$1;
(statearr_42000_42308[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (43))){
var inst_41299 = (state_41730[(20)]);
var inst_41302 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41303 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_41304 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41305 = cljs.core.cons(inst_41304,inst_41299);
var inst_41306 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"pass","pass",1574159993),26,24,inst_41303,24,inst_41305,"datasets table exists"];
var inst_41307 = cljs.core.PersistentHashMap.fromArrays(inst_41302,inst_41306);
var inst_41308 = cljs.test.report.call(null,inst_41307);
var state_41730__$1 = state_41730;
var statearr_42014_42309 = state_41730__$1;
(statearr_42014_42309[(2)] = inst_41308);

(statearr_42014_42309[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (61))){
var inst_41409 = (state_41730[(9)]);
var inst_41412 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41413 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test",cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)),(1)));
var inst_41414 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41415 = cljs.core.cons(inst_41414,inst_41409);
var inst_41416 = ["bb_web_ds_tools/persistence_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),26,30,inst_41413,30,inst_41415,"Name matches"];
var inst_41417 = cljs.core.PersistentHashMap.fromArrays(inst_41412,inst_41416);
var inst_41418 = cljs.test.report.call(null,inst_41417);
var state_41730__$1 = state_41730;
var statearr_42044_42310 = state_41730__$1;
(statearr_42044_42310[(2)] = inst_41418);

(statearr_42044_42310[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (29))){
var inst_41259 = (state_41730[(2)]);
var inst_41260 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41261 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_41262 = (new cljs.core.PersistentVector(null,1,(5),inst_41260,inst_41261,null));
var inst_41263 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_41262,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Create Tables"], 0));
var state_41730__$1 = (function (){var statearr_42045 = state_41730;
(statearr_42045[(47)] = inst_41259);

(statearr_42045[(48)] = inst_41263);

return statearr_42045;
})();
var statearr_42046_42311 = state_41730__$1;
(statearr_42046_42311[(2)] = null);

(statearr_42046_42311[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (44))){
var inst_41299 = (state_41730[(20)]);
var inst_41310 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41311 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_41312 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41314 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41315 = cljs.core.cons(inst_41314,inst_41299);
var inst_41316 = (new cljs.core.List(null,inst_41315,null,(1),null));
var inst_41317 = (new cljs.core.List(null,inst_41312,inst_41316,(2),null));
var inst_41318 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"fail","fail",1706214930),26,24,inst_41311,24,inst_41317,"datasets table exists"];
var inst_41319 = cljs.core.PersistentHashMap.fromArrays(inst_41310,inst_41318);
var inst_41320 = cljs.test.report.call(null,inst_41319);
var state_41730__$1 = state_41730;
var statearr_42047_42312 = state_41730__$1;
(statearr_42047_42312[(2)] = inst_41320);

(statearr_42047_42312[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (93))){
var inst_41638 = (state_41730[(46)]);
var inst_41653 = (state_41730[(37)]);
var _ = (function (){var statearr_42074 = state_41730;
(statearr_42074[(4)] = cljs.core.cons((96),(state_41730[(4)])));

return statearr_42074;
})();
var inst_41652 = Blob;
var inst_41653__$1 = (inst_41638 instanceof inst_41652);
var state_41730__$1 = (function (){var statearr_42075 = state_41730;
(statearr_42075[(37)] = inst_41653__$1);

return statearr_42075;
})();
if(cljs.core.truth_(inst_41653__$1)){
var statearr_42076_42313 = state_41730__$1;
(statearr_42076_42313[(1)] = (97));

} else {
var statearr_42077_42314 = state_41730__$1;
(statearr_42077_42314[(1)] = (98));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (6))){
var _ = (function (){var statearr_42078 = state_41730;
(statearr_42078[(4)] = cljs.core.cons((9),(state_41730[(4)])));

return statearr_42078;
})();
var state_41730__$1 = state_41730;
var statearr_42079_42327 = state_41730__$1;
(statearr_42079_42327[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (28))){
var inst_41220 = (state_41730[(24)]);
var inst_41233 = (state_41730[(40)]);
var inst_41234 = (state_41730[(49)]);
var _ = (function (){var statearr_42086 = state_41730;
(statearr_42086[(4)] = cljs.core.cons((31),(state_41730[(4)])));

return statearr_42086;
})();
var inst_41233__$1 = (new cljs.core.List(null,inst_41220,null,(1),null));
var inst_41234__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_41233__$1);
var state_41730__$1 = (function (){var statearr_42094 = state_41730;
(statearr_42094[(40)] = inst_41233__$1);

(statearr_42094[(49)] = inst_41234__$1);

return statearr_42094;
})();
if(cljs.core.truth_(inst_41234__$1)){
var statearr_42096_42329 = state_41730__$1;
(statearr_42096_42329[(1)] = (32));

} else {
var statearr_42098_42330 = state_41730__$1;
(statearr_42098_42330[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (64))){
var inst_41220 = (state_41730[(24)]);
var _ = (function (){var statearr_42111 = state_41730;
(statearr_42111[(4)] = cljs.core.cons((66),(state_41730[(4)])));

return statearr_42111;
})();
var ___$1 = (function (){var statearr_42113 = state_41730;
(statearr_42113[(4)] = cljs.core.cons((67),(state_41730[(4)])));

return statearr_42113;
})();
var inst_41455 = ["d1"];
var inst_41456 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_41457 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41458 = [new cljs.core.Keyword(null,"a","a",-2123407586)];
var inst_41459 = [(1)];
var inst_41460 = cljs.core.PersistentHashMap.fromArrays(inst_41458,inst_41459);
var inst_41461 = [inst_41460];
var inst_41462 = (new cljs.core.PersistentVector(null,1,(5),inst_41457,inst_41461,null));
var inst_41463 = ["My Dataset",inst_41462];
var inst_41464 = cljs.core.PersistentHashMap.fromArrays(inst_41456,inst_41463);
var inst_41465 = [inst_41464];
var inst_41466 = cljs.core.PersistentHashMap.fromArrays(inst_41455,inst_41465);
var inst_41467 = bb_web_ds_tools.workspaces.persistence_fx.persist_datasets_BANG_(inst_41220,inst_41466);
var inst_41468 = bb_web_ds_tools.workspaces.persistence_fx.load_datasets_from_db(inst_41220);
var state_41730__$1 = (function (){var statearr_42124 = state_41730;
(statearr_42124[(50)] = inst_41467);

(statearr_42124[(34)] = inst_41468);

return statearr_42124;
})();
var statearr_42125_42332 = state_41730__$1;
(statearr_42125_42332[(2)] = null);

(statearr_42125_42332[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (103))){
var _ = (function (){var statearr_42126 = state_41730;
(statearr_42126[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42126;
})();
var state_41730__$1 = state_41730;
var ex42085 = (state_41730__$1[(2)]);
var statearr_42127_42333 = state_41730__$1;
(statearr_42127_42333[(5)] = ex42085);


var statearr_42128_42334 = state_41730__$1;
(statearr_42128_42334[(1)] = (102));

(statearr_42128_42334[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (51))){
var inst_41394 = (state_41730[(2)]);
var state_41730__$1 = (function (){var statearr_42129 = state_41730;
(statearr_42129[(51)] = inst_41394);

return statearr_42129;
})();
var statearr_42130_42335 = state_41730__$1;
(statearr_42130_42335[(2)] = null);

(statearr_42130_42335[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (25))){
var inst_41192 = (state_41730[(39)]);
var inst_41195 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41196 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_41197 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_41198 = cljs.core.cons(inst_41197,inst_41192);
var inst_41199 = ["bb_web_ds_tools/persistence_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),20,15,inst_41196,15,inst_41198,"SQLite module loaded"];
var inst_41200 = cljs.core.PersistentHashMap.fromArrays(inst_41195,inst_41199);
var inst_41201 = cljs.test.report.call(null,inst_41200);
var state_41730__$1 = state_41730;
var statearr_42131_42345 = state_41730__$1;
(statearr_42131_42345[(2)] = inst_41201);

(statearr_42131_42345[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (34))){
var inst_41234 = (state_41730[(49)]);
var inst_41255 = (state_41730[(2)]);
var _ = (function (){var statearr_42132 = state_41730;
(statearr_42132[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42132;
})();
var state_41730__$1 = (function (){var statearr_42133 = state_41730;
(statearr_42133[(52)] = inst_41255);

return statearr_42133;
})();
var statearr_42134_42347 = state_41730__$1;
(statearr_42134_42347[(2)] = inst_41234);

(statearr_42134_42347[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (17))){
var inst_41174 = (state_41730[(2)]);
var state_41730__$1 = state_41730;
if(cljs.core.truth_(inst_41174)){
var statearr_42135_42348 = state_41730__$1;
(statearr_42135_42348[(1)] = (18));

} else {
var statearr_42136_42349 = state_41730__$1;
(statearr_42136_42349[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (3))){
var inst_41717 = (state_41730[(2)]);
var state_41730__$1 = state_41730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41730__$1,inst_41717);
} else {
if((state_val_41731 === (12))){
var inst_41146 = (state_41730[(2)]);
var _ = (function (){var statearr_42137 = state_41730;
(statearr_42137[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42137;
})();
var state_41730__$1 = (function (){var statearr_42138 = state_41730;
(statearr_42138[(53)] = inst_41146);

return statearr_42138;
})();
var statearr_42139_42351 = state_41730__$1;
(statearr_42139_42351[(2)] = true);

(statearr_42139_42351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (2))){
var _ = (function (){var statearr_42140 = state_41730;
(statearr_42140[(4)] = cljs.core.cons((4),(state_41730[(4)])));

return statearr_42140;
})();
var ___$1 = (function (){var statearr_42141 = state_41730;
(statearr_42141[(4)] = cljs.core.cons((13),(state_41730[(4)])));

return statearr_42141;
})();
var inst_41156 = [new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.Keyword(null,"printErr","printErr",-1323332006)];
var inst_41157 = (function (){return (function (x){
return console.log("SQLite:",x);
});
})();
var inst_41158 = (function (){return (function (x){
return console.error("SQLite Err:",x);
});
})();
var inst_41159 = [inst_41157,inst_41158];
var inst_41160 = cljs.core.PersistentHashMap.fromArrays(inst_41156,inst_41159);
var inst_41161 = cljs.core.clj__GT_js(inst_41160);
var inst_41162 = shadow.js.shim.module$$sqlite_org$sqlite_wasm.default(inst_41161);
var inst_41163 = cljs.core.async.interop.p__GT_c(inst_41162);
var state_41730__$1 = state_41730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41730__$1,(14),inst_41163);
} else {
if((state_val_41731 === (66))){
var _ = (function (){var statearr_42142 = state_41730;
(statearr_42142[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42142;
})();
var inst_41443 = (state_41730[(2)]);
var inst_41444 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41445 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_41446 = (new cljs.core.PersistentVector(null,1,(5),inst_41444,inst_41445,null));
var inst_41447 = cljs.test.update_current_env_BANG_(inst_41446,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_41730[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_41730__$1 = (function (){var statearr_42143 = state_41730;
(statearr_42143[(54)] = inst_41447);

return statearr_42143;
})();
var statearr_42144_42352 = state_41730__$1;
(statearr_42144_42352[(2)] = inst_41443);

(statearr_42144_42352[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (23))){
var inst_41180 = (state_41730[(2)]);
var inst_41181 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41183 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_41184 = ["bb_web_ds_tools/persistence_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),20,15,inst_41183,15,inst_41180,"SQLite module loaded"];
var inst_41185 = cljs.core.PersistentHashMap.fromArrays(inst_41181,inst_41184);
var inst_41186 = cljs.test.report.call(null,inst_41185);
var state_41730__$1 = state_41730;
var statearr_42145_42353 = state_41730__$1;
(statearr_42145_42353[(2)] = inst_41186);

(statearr_42145_42353[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (47))){
var inst_41437 = (state_41730[(2)]);
var inst_41438 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41439 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_41440 = (new cljs.core.PersistentVector(null,1,(5),inst_41438,inst_41439,null));
var inst_41441 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_41440,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Persist Datasets"], 0));
var state_41730__$1 = (function (){var statearr_42146 = state_41730;
(statearr_42146[(55)] = inst_41437);

(statearr_42146[(56)] = inst_41441);

return statearr_42146;
})();
var statearr_42147_42354 = state_41730__$1;
(statearr_42147_42354[(2)] = null);

(statearr_42147_42354[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (35))){
var inst_41220 = (state_41730[(24)]);
var _ = (function (){var statearr_42148 = state_41730;
(statearr_42148[(4)] = cljs.core.cons((37),(state_41730[(4)])));

return statearr_42148;
})();
var ___$1 = (function (){var statearr_42149 = state_41730;
(statearr_42149[(4)] = cljs.core.cons((38),(state_41730[(4)])));

return statearr_42149;
})();
var inst_41277 = bb_web_ds_tools.workspaces.persistence_fx.create_tables_BANG_(inst_41220);
var inst_41278 = [new cljs.core.Keyword(null,"returnValue","returnValue",1643246062)];
var inst_41279 = ["resultRows"];
var inst_41280 = cljs.core.PersistentHashMap.fromArrays(inst_41278,inst_41279);
var inst_41281 = cljs.core.clj__GT_js(inst_41280);
var inst_41282 = inst_41220.exec("SELECT name FROM sqlite_master WHERE type='table' AND name='datasets'",inst_41281);
var state_41730__$1 = (function (){var statearr_42150 = state_41730;
(statearr_42150[(57)] = inst_41277);

(statearr_42150[(19)] = inst_41282);

return statearr_42150;
})();
var statearr_42151_42358 = state_41730__$1;
(statearr_42151_42358[(2)] = null);

(statearr_42151_42358[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (82))){
var inst_41468 = (state_41730[(34)]);
var inst_41587 = (state_41730[(12)]);
var inst_41588 = (state_41730[(22)]);
var _ = (function (){var statearr_42152 = state_41730;
(statearr_42152[(4)] = cljs.core.cons((85),(state_41730[(4)])));

return statearr_42152;
})();
var inst_41576 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41577 = [new cljs.core.Keyword(null,"a","a",-2123407586)];
var inst_41578 = [(1)];
var inst_41579 = cljs.core.PersistentHashMap.fromArrays(inst_41577,inst_41578);
var inst_41580 = [inst_41579];
var inst_41581 = (new cljs.core.PersistentVector(null,1,(5),inst_41576,inst_41580,null));
var inst_41582 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41583 = ["d1",new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_41584 = (new cljs.core.PersistentVector(null,2,(5),inst_41582,inst_41583,null));
var inst_41585 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_41468,inst_41584);
var inst_41586 = (new cljs.core.List(null,inst_41585,null,(1),null));
var inst_41587__$1 = (new cljs.core.List(null,inst_41581,inst_41586,(2),null));
var inst_41588__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_41587__$1);
var state_41730__$1 = (function (){var statearr_42153 = state_41730;
(statearr_42153[(12)] = inst_41587__$1);

(statearr_42153[(22)] = inst_41588__$1);

return statearr_42153;
})();
if(cljs.core.truth_(inst_41588__$1)){
var statearr_42154_42359 = state_41730__$1;
(statearr_42154_42359[(1)] = (86));

} else {
var statearr_42155_42360 = state_41730__$1;
(statearr_42155_42360[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (76))){
var inst_41564 = (state_41730[(2)]);
var state_41730__$1 = (function (){var statearr_42156 = state_41730;
(statearr_42156[(58)] = inst_41564);

return statearr_42156;
})();
var statearr_42157_42361 = state_41730__$1;
(statearr_42157_42361[(2)] = null);

(statearr_42157_42361[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (97))){
var inst_41638 = (state_41730[(46)]);
var inst_41655 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41656 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_41657 = cljs.core.type(inst_41638);
var inst_41658 = ["bb_web_ds_tools/persistence_test.cljs",50,new cljs.core.Keyword(null,"pass","pass",1574159993),26,42,inst_41656,42,inst_41657,"Export returns a Blob"];
var inst_41659 = cljs.core.PersistentHashMap.fromArrays(inst_41655,inst_41658);
var inst_41660 = cljs.test.report.call(null,inst_41659);
var state_41730__$1 = state_41730;
var statearr_42158_42362 = state_41730__$1;
(statearr_42158_42362[(2)] = inst_41660);

(statearr_42158_42362[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (19))){
var inst_41165 = (state_41730[(31)]);
var state_41730__$1 = state_41730;
var statearr_42159_42364 = state_41730__$1;
(statearr_42159_42364[(2)] = inst_41165);

(statearr_42159_42364[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (57))){
var inst_41354 = (state_41730[(26)]);
var inst_41409 = (state_41730[(9)]);
var inst_41410 = (state_41730[(59)]);
var _ = (function (){var statearr_42160 = state_41730;
(statearr_42160[(4)] = cljs.core.cons((60),(state_41730[(4)])));

return statearr_42160;
})();
var inst_41406 = cljs.core.first(inst_41354);
var inst_41407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_41406,(1));
var inst_41408 = (new cljs.core.List(null,inst_41407,null,(1),null));
var inst_41409__$1 = (new cljs.core.List(null,"test",inst_41408,(2),null));
var inst_41410__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_41409__$1);
var state_41730__$1 = (function (){var statearr_42161 = state_41730;
(statearr_42161[(9)] = inst_41409__$1);

(statearr_42161[(59)] = inst_41410__$1);

return statearr_42161;
})();
if(cljs.core.truth_(inst_41410__$1)){
var statearr_42162_42370 = state_41730__$1;
(statearr_42162_42370[(1)] = (61));

} else {
var statearr_42163_42371 = state_41730__$1;
(statearr_42163_42371[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (68))){
var inst_41468 = (state_41730[(34)]);
var inst_41482 = (state_41730[(14)]);
var inst_41483 = (state_41730[(10)]);
var _ = (function (){var statearr_42165 = state_41730;
(statearr_42165[(4)] = cljs.core.cons((71),(state_41730[(4)])));

return statearr_42165;
})();
var inst_41480 = cljs.core.count(inst_41468);
var inst_41481 = (new cljs.core.List(null,inst_41480,null,(1),null));
var inst_41482__$1 = (new cljs.core.List(null,(1),inst_41481,(2),null));
var inst_41483__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_41482__$1);
var state_41730__$1 = (function (){var statearr_42166 = state_41730;
(statearr_42166[(14)] = inst_41482__$1);

(statearr_42166[(10)] = inst_41483__$1);

return statearr_42166;
})();
if(cljs.core.truth_(inst_41483__$1)){
var statearr_42167_42372 = state_41730__$1;
(statearr_42167_42372[(1)] = (72));

} else {
var statearr_42168_42373 = state_41730__$1;
(statearr_42168_42373[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (11))){
var inst_41140 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41141 = true;
var inst_41142 = [null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,inst_41141,null,true,"Skipping SQLite tests due to environment limitations"];
var inst_41143 = cljs.core.PersistentHashMap.fromArrays(inst_41140,inst_41142);
var inst_41144 = cljs.test.report.call(null,inst_41143);
var state_41730__$1 = state_41730;
var statearr_42169_42374 = state_41730__$1;
(statearr_42169_42374[(2)] = inst_41144);

(statearr_42169_42374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (9))){
var _ = (function (){var statearr_42170 = state_41730;
(statearr_42170[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42170;
})();
var state_41730__$1 = state_41730;
var ex42164 = (state_41730__$1[(2)]);
var statearr_42171_42375 = state_41730__$1;
(statearr_42171_42375[(5)] = ex42164);


var statearr_42172_42376 = state_41730__$1;
(statearr_42172_42376[(1)] = (8));

(statearr_42172_42376[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (5))){
var inst_41114 = (state_41730[(2)]);
var inst_41115 = inst_41114.message;
var inst_41116 = console.warn("SQLite WASM initialization failed (expected if WASM assets are missing in test env):",inst_41115);
var state_41730__$1 = (function (){var statearr_42173 = state_41730;
(statearr_42173[(60)] = inst_41116);

return statearr_42173;
})();
var statearr_42174_42377 = state_41730__$1;
(statearr_42174_42377[(2)] = null);

(statearr_42174_42377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (83))){
var inst_41617 = (state_41730[(2)]);
var _ = (function (){var statearr_42175 = state_41730;
(statearr_42175[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42175;
})();
var state_41730__$1 = state_41730;
var statearr_42176_42378 = state_41730__$1;
(statearr_42176_42378[(2)] = inst_41617);

(statearr_42176_42378[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (14))){
var inst_41165 = (state_41730[(31)]);
var inst_41166 = (state_41730[(61)]);
var inst_41165__$1 = (state_41730[(2)]);
var inst_41166__$1 = (inst_41165__$1 instanceof cljs.core.ExceptionInfo);
var state_41730__$1 = (function (){var statearr_42178 = state_41730;
(statearr_42178[(31)] = inst_41165__$1);

(statearr_42178[(61)] = inst_41166__$1);

return statearr_42178;
})();
if(cljs.core.truth_(inst_41166__$1)){
var statearr_42179_42388 = state_41730__$1;
(statearr_42179_42388[(1)] = (15));

} else {
var statearr_42180_42389 = state_41730__$1;
(statearr_42180_42389[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (45))){
var inst_41300 = (state_41730[(21)]);
var inst_41322 = (state_41730[(2)]);
var _ = (function (){var statearr_42182 = state_41730;
(statearr_42182[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42182;
})();
var state_41730__$1 = (function (){var statearr_42183 = state_41730;
(statearr_42183[(62)] = inst_41322);

return statearr_42183;
})();
var statearr_42184_42390 = state_41730__$1;
(statearr_42184_42390[(2)] = inst_41300);

(statearr_42184_42390[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (53))){
var _ = (function (){var statearr_42185 = state_41730;
(statearr_42185[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42185;
})();
var state_41730__$1 = state_41730;
var ex42177 = (state_41730__$1[(2)]);
var statearr_42186_42391 = state_41730__$1;
(statearr_42186_42391[(5)] = ex42177);


var statearr_42187_42392 = state_41730__$1;
(statearr_42187_42392[(1)] = (52));

(statearr_42187_42392[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (78))){
var _ = (function (){var statearr_42188 = state_41730;
(statearr_42188[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42188;
})();
var state_41730__$1 = state_41730;
var ex42181 = (state_41730__$1[(2)]);
var statearr_42189_42393 = state_41730__$1;
(statearr_42189_42393[(5)] = ex42181);


var statearr_42190_42394 = state_41730__$1;
(statearr_42190_42394[(1)] = (77));

(statearr_42190_42394[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (26))){
var inst_41192 = (state_41730[(39)]);
var inst_41203 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41204 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_41205 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41206 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_41207 = cljs.core.cons(inst_41206,inst_41192);
var inst_41208 = (new cljs.core.List(null,inst_41207,null,(1),null));
var inst_41209 = (new cljs.core.List(null,inst_41205,inst_41208,(2),null));
var inst_41210 = ["bb_web_ds_tools/persistence_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),20,15,inst_41204,15,inst_41209,"SQLite module loaded"];
var inst_41211 = cljs.core.PersistentHashMap.fromArrays(inst_41203,inst_41210);
var inst_41212 = cljs.test.report.call(null,inst_41211);
var state_41730__$1 = state_41730;
var statearr_42191_42395 = state_41730__$1;
(statearr_42191_42395[(2)] = inst_41212);

(statearr_42191_42395[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (16))){
var inst_41166 = (state_41730[(61)]);
var state_41730__$1 = state_41730;
var statearr_42192_42396 = state_41730__$1;
(statearr_42192_42396[(2)] = inst_41166);

(statearr_42192_42396[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (81))){
var inst_41540 = (state_41730[(36)]);
var inst_41561 = (state_41730[(2)]);
var _ = (function (){var statearr_42194 = state_41730;
(statearr_42194[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42194;
})();
var state_41730__$1 = (function (){var statearr_42195 = state_41730;
(statearr_42195[(63)] = inst_41561);

return statearr_42195;
})();
var statearr_42196_42397 = state_41730__$1;
(statearr_42196_42397[(2)] = inst_41540);

(statearr_42196_42397[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (79))){
var inst_41539 = (state_41730[(35)]);
var inst_41542 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41543 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"My Dataset",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"name","name",1843675177)], null)));
var inst_41544 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41545 = cljs.core.cons(inst_41544,inst_41539);
var inst_41546 = ["bb_web_ds_tools/persistence_test.cljs",73,new cljs.core.Keyword(null,"pass","pass",1574159993),28,37,inst_41543,37,inst_41545,null];
var inst_41547 = cljs.core.PersistentHashMap.fromArrays(inst_41542,inst_41546);
var inst_41548 = cljs.test.report.call(null,inst_41547);
var state_41730__$1 = state_41730;
var statearr_42197_42404 = state_41730__$1;
(statearr_42197_42404[(2)] = inst_41548);

(statearr_42197_42404[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (38))){
var _ = (function (){var statearr_42198 = state_41730;
(statearr_42198[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42198;
})();
var state_41730__$1 = state_41730;
var ex42193 = (state_41730__$1[(2)]);
var statearr_42199_42405 = state_41730__$1;
(statearr_42199_42405[(5)] = ex42193);


throw ex42193;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (98))){
var inst_41638 = (state_41730[(46)]);
var inst_41662 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41663 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_41664 = cljs.core.type(inst_41638);
var inst_41665 = ["bb_web_ds_tools/persistence_test.cljs",50,new cljs.core.Keyword(null,"fail","fail",1706214930),26,42,inst_41663,42,inst_41664,"Export returns a Blob"];
var inst_41666 = cljs.core.PersistentHashMap.fromArrays(inst_41662,inst_41665);
var inst_41667 = cljs.test.report.call(null,inst_41666);
var state_41730__$1 = state_41730;
var statearr_42200_42406 = state_41730__$1;
(statearr_42200_42406[(2)] = inst_41667);

(statearr_42200_42406[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (87))){
var inst_41587 = (state_41730[(12)]);
var inst_41603 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41604 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"data","data",-232669377)], null)));
var inst_41605 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41606 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41607 = cljs.core.cons(inst_41606,inst_41587);
var inst_41608 = (new cljs.core.List(null,inst_41607,null,(1),null));
var inst_41609 = (new cljs.core.List(null,inst_41605,inst_41608,(2),null));
var inst_41610 = ["bb_web_ds_tools/persistence_test.cljs",69,new cljs.core.Keyword(null,"fail","fail",1706214930),28,38,inst_41604,38,inst_41609,null];
var inst_41611 = cljs.core.PersistentHashMap.fromArrays(inst_41603,inst_41610);
var inst_41612 = cljs.test.report.call(null,inst_41611);
var state_41730__$1 = state_41730;
var statearr_42204_42407 = state_41730__$1;
(statearr_42204_42407[(2)] = inst_41612);

(statearr_42204_42407[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (30))){
var inst_41221 = (state_41730[(2)]);
var inst_41223 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41224 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_41225 = ["bb_web_ds_tools/persistence_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),22,19,inst_41224,19,inst_41221,"DB created"];
var inst_41226 = cljs.core.PersistentHashMap.fromArrays(inst_41223,inst_41225);
var inst_41227 = cljs.test.report.call(null,inst_41226);
var state_41730__$1 = state_41730;
var statearr_42206_42408 = state_41730__$1;
(statearr_42206_42408[(2)] = inst_41227);

(statearr_42206_42408[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (73))){
var inst_41482 = (state_41730[(14)]);
var inst_41493 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41494 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null)));
var inst_41495 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41511 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41512 = cljs.core.cons(inst_41511,inst_41482);
var inst_41513 = (new cljs.core.List(null,inst_41512,null,(1),null));
var inst_41514 = (new cljs.core.List(null,inst_41495,inst_41513,(2),null));
var inst_41515 = ["bb_web_ds_tools/persistence_test.cljs",48,new cljs.core.Keyword(null,"fail","fail",1706214930),28,36,inst_41494,36,inst_41514,null];
var inst_41516 = cljs.core.PersistentHashMap.fromArrays(inst_41493,inst_41515);
var inst_41517 = cljs.test.report.call(null,inst_41516);
var state_41730__$1 = state_41730;
var statearr_42207_42429 = state_41730__$1;
(statearr_42207_42429[(2)] = inst_41517);

(statearr_42207_42429[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (96))){
var _ = (function (){var statearr_42208 = state_41730;
(statearr_42208[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42208;
})();
var state_41730__$1 = state_41730;
var ex42205 = (state_41730__$1[(2)]);
var statearr_42210_42430 = state_41730__$1;
(statearr_42210_42430[(5)] = ex42205);


var statearr_42211_42431 = state_41730__$1;
(statearr_42211_42431[(1)] = (95));

(statearr_42211_42431[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (10))){
var inst_41132 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41133 = true;
var inst_41135 = [null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,inst_41133,null,true,"Skipping SQLite tests due to environment limitations"];
var inst_41136 = cljs.core.PersistentHashMap.fromArrays(inst_41132,inst_41135);
var inst_41137 = cljs.test.report.call(null,inst_41136);
var state_41730__$1 = state_41730;
var statearr_42212_42432 = state_41730__$1;
(statearr_42212_42432[(2)] = inst_41137);

(statearr_42212_42432[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (18))){
var inst_41165 = (state_41730[(31)]);
var inst_41176 = (function(){throw inst_41165})();
var state_41730__$1 = state_41730;
var statearr_42213_42433 = state_41730__$1;
(statearr_42213_42433[(2)] = inst_41176);

(statearr_42213_42433[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (105))){
var inst_41686 = (state_41730[(30)]);
var inst_41697 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41698 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_41699 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41700 = new cljs.core.Symbol(null,">",">",1085014381,null);
var inst_41701 = cljs.core.cons(inst_41700,inst_41686);
var inst_41702 = (new cljs.core.List(null,inst_41701,null,(1),null));
var inst_41703 = (new cljs.core.List(null,inst_41699,inst_41702,(2),null));
var inst_41704 = ["bb_web_ds_tools/persistence_test.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),26,43,inst_41698,43,inst_41703,"Blob is not empty"];
var inst_41705 = cljs.core.PersistentHashMap.fromArrays(inst_41697,inst_41704);
var inst_41706 = cljs.test.report.call(null,inst_41705);
var state_41730__$1 = state_41730;
var statearr_42215_42434 = state_41730__$1;
(statearr_42215_42434[(2)] = inst_41706);

(statearr_42215_42434[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (52))){
var inst_41356 = (state_41730[(2)]);
var inst_41357 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41358 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_41359 = ["bb_web_ds_tools/persistence_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),26,29,inst_41358,29,inst_41356,"One row inserted"];
var inst_41360 = cljs.core.PersistentHashMap.fromArrays(inst_41357,inst_41359);
var inst_41361 = cljs.test.report.call(null,inst_41360);
var state_41730__$1 = state_41730;
var statearr_42217_42435 = state_41730__$1;
(statearr_42217_42435[(2)] = inst_41361);

(statearr_42217_42435[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (67))){
var _ = (function (){var statearr_42219 = state_41730;
(statearr_42219[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42219;
})();
var state_41730__$1 = state_41730;
var ex42214 = (state_41730__$1[(2)]);
var statearr_42220_42440 = state_41730__$1;
(statearr_42220_42440[(5)] = ex42214);


throw ex42214;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (71))){
var _ = (function (){var statearr_42221 = state_41730;
(statearr_42221[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42221;
})();
var state_41730__$1 = state_41730;
var ex42216 = (state_41730__$1[(2)]);
var statearr_42224_42441 = state_41730__$1;
(statearr_42224_42441[(5)] = ex42216);


var statearr_42225_42442 = state_41730__$1;
(statearr_42225_42442[(1)] = (70));

(statearr_42225_42442[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (42))){
var _ = (function (){var statearr_42226 = state_41730;
(statearr_42226[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42226;
})();
var state_41730__$1 = state_41730;
var ex42218 = (state_41730__$1[(2)]);
var statearr_42227_42443 = state_41730__$1;
(statearr_42227_42443[(5)] = ex42218);


var statearr_42228_42444 = state_41730__$1;
(statearr_42228_42444[(1)] = (41));

(statearr_42228_42444[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (80))){
var inst_41539 = (state_41730[(35)]);
var inst_41550 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41551 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"My Dataset",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"name","name",1843675177)], null)));
var inst_41552 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41553 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41554 = cljs.core.cons(inst_41553,inst_41539);
var inst_41555 = (new cljs.core.List(null,inst_41554,null,(1),null));
var inst_41556 = (new cljs.core.List(null,inst_41552,inst_41555,(2),null));
var inst_41557 = ["bb_web_ds_tools/persistence_test.cljs",73,new cljs.core.Keyword(null,"fail","fail",1706214930),28,37,inst_41551,37,inst_41556,null];
var inst_41558 = cljs.core.PersistentHashMap.fromArrays(inst_41550,inst_41557);
var inst_41559 = cljs.test.report.call(null,inst_41558);
var state_41730__$1 = state_41730;
var statearr_42229_42445 = state_41730__$1;
(statearr_42229_42445[(2)] = inst_41559);

(statearr_42229_42445[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (37))){
var _ = (function (){var statearr_42232 = state_41730;
(statearr_42232[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42232;
})();
var inst_41265 = (state_41730[(2)]);
var inst_41266 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41267 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_41268 = (new cljs.core.PersistentVector(null,1,(5),inst_41266,inst_41267,null));
var inst_41269 = cljs.test.update_current_env_BANG_(inst_41268,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_41730[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_41730__$1 = (function (){var statearr_42233 = state_41730;
(statearr_42233[(64)] = inst_41269);

return statearr_42233;
})();
var statearr_42234_42446 = state_41730__$1;
(statearr_42234_42446[(2)] = inst_41265);

(statearr_42234_42446[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (63))){
var inst_41410 = (state_41730[(59)]);
var inst_41431 = (state_41730[(2)]);
var _ = (function (){var statearr_42235 = state_41730;
(statearr_42235[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42235;
})();
var state_41730__$1 = (function (){var statearr_42236 = state_41730;
(statearr_42236[(65)] = inst_41431);

return statearr_42236;
})();
var statearr_42237_42451 = state_41730__$1;
(statearr_42237_42451[(2)] = inst_41410);

(statearr_42237_42451[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (94))){
var inst_41672 = (state_41730[(2)]);
var state_41730__$1 = (function (){var statearr_42239 = state_41730;
(statearr_42239[(66)] = inst_41672);

return statearr_42239;
})();
var statearr_42240_42455 = state_41730__$1;
(statearr_42240_42455[(2)] = null);

(statearr_42240_42455[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (8))){
var inst_41117 = (state_41730[(2)]);
var inst_41121 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41122 = true;
var inst_41123 = [null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,inst_41122,null,inst_41117,"Skipping SQLite tests due to environment limitations"];
var inst_41124 = cljs.core.PersistentHashMap.fromArrays(inst_41121,inst_41123);
var inst_41125 = cljs.test.report.call(null,inst_41124);
var state_41730__$1 = state_41730;
var statearr_42241_42456 = state_41730__$1;
(statearr_42241_42456[(2)] = inst_41125);

(statearr_42241_42456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (49))){
var _ = (function (){var statearr_42242 = state_41730;
(statearr_42242[(4)] = cljs.core.rest((state_41730[(4)])));

return statearr_42242;
})();
var state_41730__$1 = state_41730;
var ex42238 = (state_41730__$1[(2)]);
var statearr_42243_42457 = state_41730__$1;
(statearr_42243_42457[(5)] = ex42238);


throw ex42238;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41731 === (84))){
var inst_41565 = (state_41730[(2)]);
var inst_41566 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41567 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"data","data",-232669377)], null)));
var inst_41568 = ["bb_web_ds_tools/persistence_test.cljs",69,new cljs.core.Keyword(null,"error","error",-978969032),28,38,inst_41567,38,inst_41565,null];
var inst_41569 = cljs.core.PersistentHashMap.fromArrays(inst_41566,inst_41568);
var inst_41570 = cljs.test.report.call(null,inst_41569);
var state_41730__$1 = state_41730;
var statearr_42244_42458 = state_41730__$1;
(statearr_42244_42458[(2)] = inst_41570);

(statearr_42244_42458[(1)] = (83));


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
var bb_web_ds_tools$persistence_test$state_machine__24102__auto__ = null;
var bb_web_ds_tools$persistence_test$state_machine__24102__auto____0 = (function (){
var statearr_42245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42245[(0)] = bb_web_ds_tools$persistence_test$state_machine__24102__auto__);

(statearr_42245[(1)] = (1));

return statearr_42245;
});
var bb_web_ds_tools$persistence_test$state_machine__24102__auto____1 = (function (state_41730){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_41730);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e42246){var ex__24105__auto__ = e42246;
var statearr_42247_42462 = state_41730;
(statearr_42247_42462[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_41730[(4)]))){
var statearr_42248_42463 = state_41730;
(statearr_42248_42463[(1)] = cljs.core.first((state_41730[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42464 = state_41730;
state_41730 = G__42464;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$persistence_test$state_machine__24102__auto__ = function(state_41730){
switch(arguments.length){
case 0:
return bb_web_ds_tools$persistence_test$state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$persistence_test$state_machine__24102__auto____1.call(this,state_41730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$persistence_test$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$persistence_test$state_machine__24102__auto____0;
bb_web_ds_tools$persistence_test$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$persistence_test$state_machine__24102__auto____1;
return bb_web_ds_tools$persistence_test$state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_42249 = f__24149__auto__();
(statearr_42249[(6)] = c__24148__auto__);

return statearr_42249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test41087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta41088","meta41088",-1257070129,null)], null);
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test41087.cljs$lang$type = true);

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test41087.cljs$lang$ctorStr = "bb-web-ds-tools.persistence-test/t_bb_web_ds_tools$persistence_test41087");

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test41087.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.persistence-test/t_bb_web_ds_tools$persistence_test41087");
}));

/**
 * Positional factory function for bb-web-ds-tools.persistence-test/t_bb_web_ds_tools$persistence_test41087.
 */
bb_web_ds_tools.persistence_test.__GT_t_bb_web_ds_tools$persistence_test41087 = (function bb_web_ds_tools$persistence_test$__GT_t_bb_web_ds_tools$persistence_test41087(meta41088){
return (new bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test41087(meta41088));
});


bb_web_ds_tools.persistence_test.test_sqlite_wasm = (function bb_web_ds_tools$persistence_test$test_sqlite_wasm(){
return cljs.test.test_var(bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$var);
});
bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$test = (function (){
return (new bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test41087(null));
});

(bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.persistence_test.test_sqlite_wasm;},new cljs.core.Symbol("bb-web-ds-tools.persistence-test","test-sqlite-wasm","bb-web-ds-tools.persistence-test/test-sqlite-wasm",537405847,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.persistence-test","bb-web-ds-tools.persistence-test",724034039,null),new cljs.core.Symbol(null,"test-sqlite-wasm","test-sqlite-wasm",165441020,null),"bb_web_ds_tools/persistence_test.cljs",26,1,8,8,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.persistence_test.test_sqlite_wasm)?bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.persistence_test.js.map
