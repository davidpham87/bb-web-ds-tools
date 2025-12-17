goog.provide('bb_web_ds_tools.persistence_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66549 = (function (meta66550){
this.meta66550 = meta66550;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66551,meta66550__$1){
var self__ = this;
var _66551__$1 = this;
return (new bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66549(meta66550__$1));
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66551){
var self__ = this;
var _66551__$1 = this;
return self__.meta66550;
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66549.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66549.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__66561 = (arguments.length - (1));
switch (G__66561) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66549.prototype.apply = (function (self__,args66552){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args66552)));
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66549.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_67193){
var state_val_67197 = (state_67193[(1)]);
if((state_val_67197 === (65))){
var inst_67079 = (state_67193[(2)]);
var inst_67080 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67081 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_67082 = (new cljs.core.PersistentVector(null,1,(5),inst_67080,inst_67081,null));
var inst_67083 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_67082,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Export DB"], 0));
var state_67193__$1 = (function (){var statearr_67201 = state_67193;
(statearr_67201[(7)] = inst_67079);

(statearr_67201[(8)] = inst_67083);

return statearr_67201;
})();
var statearr_67203_67712 = state_67193__$1;
(statearr_67203_67712[(2)] = null);

(statearr_67203_67712[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (70))){
var inst_66930 = (state_67193[(2)]);
var inst_66931 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66932 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null)));
var inst_66933 = ["bb_web_ds_tools/persistence_test.cljs",48,new cljs.core.Keyword(null,"error","error",-978969032),28,36,inst_66932,36,inst_66930,null];
var inst_66934 = cljs.core.PersistentHashMap.fromArrays(inst_66931,inst_66933);
var inst_66935 = cljs.test.report.call(null,inst_66934);
var state_67193__$1 = state_67193;
var statearr_67210_67714 = state_67193__$1;
(statearr_67210_67714[(2)] = inst_66935);

(statearr_67210_67714[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (62))){
var inst_66867 = (state_67193[(9)]);
var inst_66881 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66882 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test",cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)),(1)));
var inst_66883 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66884 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66885 = cljs.core.cons(inst_66884,inst_66867);
var inst_66886 = (new cljs.core.List(null,inst_66885,null,(1),null));
var inst_66887 = (new cljs.core.List(null,inst_66883,inst_66886,(2),null));
var inst_66888 = ["bb_web_ds_tools/persistence_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),26,30,inst_66882,30,inst_66887,"Name matches"];
var inst_66889 = cljs.core.PersistentHashMap.fromArrays(inst_66881,inst_66888);
var inst_66890 = cljs.test.report.call(null,inst_66889);
var state_67193__$1 = state_67193;
var statearr_67211_67715 = state_67193__$1;
(statearr_67211_67715[(2)] = inst_66890);

(statearr_67211_67715[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (74))){
var inst_66944 = (state_67193[(10)]);
var inst_66965 = (state_67193[(2)]);
var _ = (function (){var statearr_67212 = state_67193;
(statearr_67212[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67212;
})();
var state_67193__$1 = (function (){var statearr_67214 = state_67193;
(statearr_67214[(11)] = inst_66965);

return statearr_67214;
})();
var statearr_67215_67716 = state_67193__$1;
(statearr_67215_67716[(2)] = inst_66944);

(statearr_67215_67716[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (7))){
var inst_66599 = (state_67193[(2)]);
var state_67193__$1 = state_67193;
var statearr_67216_67717 = state_67193__$1;
(statearr_67216_67717[(2)] = inst_66599);

(statearr_67216_67717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (59))){
var inst_66853 = (state_67193[(2)]);
var inst_66854 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66855 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test",cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)),(1)));
var inst_66856 = ["bb_web_ds_tools/persistence_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),26,30,inst_66855,30,inst_66853,"Name matches"];
var inst_66857 = cljs.core.PersistentHashMap.fromArrays(inst_66854,inst_66856);
var inst_66858 = cljs.test.report.call(null,inst_66857);
var state_67193__$1 = state_67193;
var statearr_67217_67718 = state_67193__$1;
(statearr_67217_67718[(2)] = inst_66858);

(statearr_67217_67718[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (86))){
var inst_67049 = (state_67193[(12)]);
var inst_67052 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67053 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"data","data",-232669377)], null)));
var inst_67054 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_67055 = cljs.core.cons(inst_67054,inst_67049);
var inst_67056 = ["bb_web_ds_tools/persistence_test.cljs",69,new cljs.core.Keyword(null,"pass","pass",1574159993),28,38,inst_67053,38,inst_67055,null];
var inst_67057 = cljs.core.PersistentHashMap.fromArrays(inst_67052,inst_67056);
var inst_67058 = cljs.test.report.call(null,inst_67057);
var state_67193__$1 = state_67193;
var statearr_67229_67720 = state_67193__$1;
(statearr_67229_67720[(2)] = inst_67058);

(statearr_67229_67720[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (20))){
var inst_66629 = (state_67193[(2)]);
var state_67193__$1 = (function (){var statearr_67230 = state_67193;
(statearr_67230[(13)] = inst_66629);

return statearr_67230;
})();
var statearr_67231_67721 = state_67193__$1;
(statearr_67231_67721[(2)] = null);

(statearr_67231_67721[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (72))){
var inst_66943 = (state_67193[(14)]);
var inst_66946 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66947 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null)));
var inst_66948 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66949 = cljs.core.cons(inst_66948,inst_66943);
var inst_66950 = ["bb_web_ds_tools/persistence_test.cljs",48,new cljs.core.Keyword(null,"pass","pass",1574159993),28,36,inst_66947,36,inst_66949,null];
var inst_66951 = cljs.core.PersistentHashMap.fromArrays(inst_66946,inst_66950);
var inst_66952 = cljs.test.report.call(null,inst_66951);
var state_67193__$1 = state_67193;
var statearr_67238_67723 = state_67193__$1;
(statearr_67238_67723[(2)] = inst_66952);

(statearr_67238_67723[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (58))){
var inst_66895 = (state_67193[(2)]);
var _ = (function (){var statearr_67239 = state_67193;
(statearr_67239[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67239;
})();
var state_67193__$1 = state_67193;
var statearr_67240_67724 = state_67193__$1;
(statearr_67240_67724[(2)] = inst_66895);

(statearr_67240_67724[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (60))){
var _ = (function (){var statearr_67241 = state_67193;
(statearr_67241[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67241;
})();
var state_67193__$1 = state_67193;
var ex67236 = (state_67193__$1[(2)]);
var statearr_67242_67725 = state_67193__$1;
(statearr_67242_67725[(5)] = ex67236);


var statearr_67243_67727 = state_67193__$1;
(statearr_67243_67727[(1)] = (59));

(statearr_67243_67727[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (27))){
var inst_66647 = (state_67193[(15)]);
var inst_66668 = (state_67193[(2)]);
var _ = (function (){var statearr_67244 = state_67193;
(statearr_67244[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67244;
})();
var state_67193__$1 = (function (){var statearr_67246 = state_67193;
(statearr_67246[(16)] = inst_66668);

return statearr_67246;
})();
var statearr_67247_67728 = state_67193__$1;
(statearr_67247_67728[(2)] = inst_66647);

(statearr_67247_67728[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (1))){
var state_67193__$1 = state_67193;
var statearr_67249_67729 = state_67193__$1;
(statearr_67249_67729[(2)] = null);

(statearr_67249_67729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (69))){
var inst_66968 = (state_67193[(2)]);
var state_67193__$1 = (function (){var statearr_67251 = state_67193;
(statearr_67251[(17)] = inst_66968);

return statearr_67251;
})();
var statearr_67252_67730 = state_67193__$1;
(statearr_67252_67730[(2)] = null);

(statearr_67252_67730[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (101))){
var inst_67182 = (state_67193[(2)]);
var _ = (function (){var statearr_67253 = state_67193;
(statearr_67253[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67253;
})();
var state_67193__$1 = state_67193;
var statearr_67254_67731 = state_67193__$1;
(statearr_67254_67731[(2)] = inst_67182);

(statearr_67254_67731[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (24))){
var _ = (function (){var statearr_67255 = state_67193;
(statearr_67255[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67255;
})();
var state_67193__$1 = state_67193;
var ex67250 = (state_67193__$1[(2)]);
var statearr_67256_67732 = state_67193__$1;
(statearr_67256_67732[(5)] = ex67250);


var statearr_67257_67733 = state_67193__$1;
(statearr_67257_67733[(1)] = (23));

(statearr_67257_67733[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (102))){
var inst_67131 = (state_67193[(2)]);
var inst_67144 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67145 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_67146 = ["bb_web_ds_tools/persistence_test.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),26,43,inst_67145,43,inst_67131,"Blob is not empty"];
var inst_67147 = cljs.core.PersistentHashMap.fromArrays(inst_67144,inst_67146);
var inst_67148 = cljs.test.report.call(null,inst_67147);
var state_67193__$1 = state_67193;
var statearr_67259_67734 = state_67193__$1;
(statearr_67259_67734[(2)] = inst_67148);

(statearr_67259_67734[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (55))){
var inst_66821 = (state_67193[(18)]);
var inst_66833 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66834 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_66835 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66836 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66841 = cljs.core.cons(inst_66836,inst_66821);
var inst_66842 = (new cljs.core.List(null,inst_66841,null,(1),null));
var inst_66843 = (new cljs.core.List(null,inst_66835,inst_66842,(2),null));
var inst_66844 = ["bb_web_ds_tools/persistence_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),26,29,inst_66834,29,inst_66843,"One row inserted"];
var inst_66845 = cljs.core.PersistentHashMap.fromArrays(inst_66833,inst_66844);
var inst_66846 = cljs.test.report.call(null,inst_66845);
var state_67193__$1 = state_67193;
var statearr_67262_67735 = state_67193__$1;
(statearr_67262_67735[(2)] = inst_66846);

(statearr_67262_67735[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (85))){
var _ = (function (){var statearr_67265 = state_67193;
(statearr_67265[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67265;
})();
var state_67193__$1 = state_67193;
var ex67258 = (state_67193__$1[(2)]);
var statearr_67266_67736 = state_67193__$1;
(statearr_67266_67736[(5)] = ex67258);


var statearr_67268_67737 = state_67193__$1;
(statearr_67268_67737[(1)] = (84));

(statearr_67268_67737[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (39))){
var inst_66737 = (state_67193[(19)]);
var inst_66751 = (state_67193[(20)]);
var inst_66752 = (state_67193[(21)]);
var _ = (function (){var statearr_67272 = state_67193;
(statearr_67272[(4)] = cljs.core.cons((42),(state_67193[(4)])));

return statearr_67272;
})();
var inst_66749 = inst_66737.length;
var inst_66750 = (new cljs.core.List(null,inst_66749,null,(1),null));
var inst_66751__$1 = (new cljs.core.List(null,(1),inst_66750,(2),null));
var inst_66752__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66751__$1);
var state_67193__$1 = (function (){var statearr_67273 = state_67193;
(statearr_67273[(20)] = inst_66751__$1);

(statearr_67273[(21)] = inst_66752__$1);

return statearr_67273;
})();
if(cljs.core.truth_(inst_66752__$1)){
var statearr_67275_67738 = state_67193__$1;
(statearr_67275_67738[(1)] = (43));

} else {
var statearr_67278_67739 = state_67193__$1;
(statearr_67278_67739[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (88))){
var inst_67050 = (state_67193[(22)]);
var inst_67073 = (state_67193[(2)]);
var _ = (function (){var statearr_67279 = state_67193;
(statearr_67279[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67279;
})();
var state_67193__$1 = (function (){var statearr_67280 = state_67193;
(statearr_67280[(23)] = inst_67073);

return statearr_67280;
})();
var statearr_67281_67740 = state_67193__$1;
(statearr_67281_67740[(2)] = inst_67050);

(statearr_67281_67740[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (46))){
var inst_66674 = (state_67193[(24)]);
var _ = (function (){var statearr_67305 = state_67193;
(statearr_67305[(4)] = cljs.core.cons((48),(state_67193[(4)])));

return statearr_67305;
})();
var ___$1 = (function (){var statearr_67308 = state_67193;
(statearr_67308[(4)] = cljs.core.cons((49),(state_67193[(4)])));

return statearr_67308;
})();
var inst_66801 = inst_66674.exec("INSERT INTO datasets VALUES ('1', 'test', 'content', 123)");
var inst_66802 = [new cljs.core.Keyword(null,"returnValue","returnValue",1643246062)];
var inst_66804 = ["resultRows"];
var inst_66805 = cljs.core.PersistentHashMap.fromArrays(inst_66802,inst_66804);
var inst_66806 = cljs.core.clj__GT_js(inst_66805);
var inst_66807 = inst_66674.exec("SELECT * FROM datasets",inst_66806);
var state_67193__$1 = (function (){var statearr_67309 = state_67193;
(statearr_67309[(25)] = inst_66801);

(statearr_67309[(26)] = inst_66807);

return statearr_67309;
})();
var statearr_67310_67741 = state_67193__$1;
(statearr_67310_67741[(2)] = null);

(statearr_67310_67741[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (4))){
var _ = (function (){var statearr_67314 = state_67193;
(statearr_67314[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67314;
})();
var inst_66564 = (state_67193[(2)]);
var inst_66565 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var ___$1 = (function (){var temp__5825__auto__ = (state_67193[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31623__auto__ = temp__5825__auto__;
throw e__31623__auto__;
} else {
return null;
}
})();
var state_67193__$1 = (function (){var statearr_67315 = state_67193;
(statearr_67315[(27)] = inst_66565);

return statearr_67315;
})();
var statearr_67316_67742 = state_67193__$1;
(statearr_67316_67742[(2)] = inst_66564);

(statearr_67316_67742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (77))){
var inst_66969 = (state_67193[(2)]);
var inst_66970 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66971 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"My Dataset",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"name","name",1843675177)], null)));
var inst_66972 = ["bb_web_ds_tools/persistence_test.cljs",73,new cljs.core.Keyword(null,"error","error",-978969032),28,37,inst_66971,37,inst_66969,null];
var inst_66973 = cljs.core.PersistentHashMap.fromArrays(inst_66970,inst_66972);
var inst_66974 = cljs.test.report.call(null,inst_66973);
var state_67193__$1 = state_67193;
var statearr_67321_67744 = state_67193__$1;
(statearr_67321_67744[(2)] = inst_66974);

(statearr_67321_67744[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (106))){
var inst_67157 = (state_67193[(28)]);
var inst_67179 = (state_67193[(2)]);
var _ = (function (){var statearr_67323 = state_67193;
(statearr_67323[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67323;
})();
var state_67193__$1 = (function (){var statearr_67326 = state_67193;
(statearr_67326[(29)] = inst_67179);

return statearr_67326;
})();
var statearr_67341_67745 = state_67193__$1;
(statearr_67341_67745[(2)] = inst_67157);

(statearr_67341_67745[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (95))){
var inst_67099 = (state_67193[(2)]);
var inst_67100 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67101 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_67102 = ["bb_web_ds_tools/persistence_test.cljs",50,new cljs.core.Keyword(null,"error","error",-978969032),26,42,inst_67101,42,inst_67099,"Export returns a Blob"];
var inst_67103 = cljs.core.PersistentHashMap.fromArrays(inst_67100,inst_67102);
var inst_67104 = cljs.test.report.call(null,inst_67103);
var state_67193__$1 = state_67193;
var statearr_67344_67746 = state_67193__$1;
(statearr_67344_67746[(2)] = inst_67104);

(statearr_67344_67746[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (54))){
var inst_66821 = (state_67193[(18)]);
var inst_66824 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66825 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_66826 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66827 = cljs.core.cons(inst_66826,inst_66821);
var inst_66828 = ["bb_web_ds_tools/persistence_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),26,29,inst_66825,29,inst_66827,"One row inserted"];
var inst_66829 = cljs.core.PersistentHashMap.fromArrays(inst_66824,inst_66828);
var inst_66830 = cljs.test.report.call(null,inst_66829);
var state_67193__$1 = state_67193;
var statearr_67348_67747 = state_67193__$1;
(statearr_67348_67747[(2)] = inst_66830);

(statearr_67348_67747[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (92))){
var _ = (function (){var statearr_67350 = state_67193;
(statearr_67350[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67350;
})();
var state_67193__$1 = state_67193;
var ex67342 = (state_67193__$1[(2)]);
var statearr_67353_67748 = state_67193__$1;
(statearr_67353_67748[(5)] = ex67342);


throw ex67342;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (104))){
var inst_67156 = (state_67193[(30)]);
var inst_67159 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67160 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_67161 = new cljs.core.Symbol(null,">",">",1085014381,null);
var inst_67162 = cljs.core.cons(inst_67161,inst_67156);
var inst_67163 = ["bb_web_ds_tools/persistence_test.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),26,43,inst_67160,43,inst_67162,"Blob is not empty"];
var inst_67164 = cljs.core.PersistentHashMap.fromArrays(inst_67159,inst_67163);
var inst_67165 = cljs.test.report.call(null,inst_67164);
var state_67193__$1 = state_67193;
var statearr_67359_67749 = state_67193__$1;
(statearr_67359_67749[(2)] = inst_67165);

(statearr_67359_67749[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (15))){
var inst_66616 = (state_67193[(31)]);
var inst_66619 = cljs.core.ex_data(inst_66616);
var inst_66620 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66619);
var inst_66621 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66620,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_67193__$1 = state_67193;
var statearr_67383_67750 = state_67193__$1;
(statearr_67383_67750[(2)] = inst_66621);

(statearr_67383_67750[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (48))){
var _ = (function (){var statearr_67390 = state_67193;
(statearr_67390[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67390;
})();
var inst_66789 = (state_67193[(2)]);
var inst_66790 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66791 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66792 = (new cljs.core.PersistentVector(null,1,(5),inst_66790,inst_66791,null));
var inst_66793 = cljs.test.update_current_env_BANG_(inst_66792,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_67193[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31623__auto__ = temp__5825__auto__;
throw e__31623__auto__;
} else {
return null;
}
})();
var state_67193__$1 = (function (){var statearr_67401 = state_67193;
(statearr_67401[(32)] = inst_66793);

return statearr_67401;
})();
var statearr_67402_67751 = state_67193__$1;
(statearr_67402_67751[(2)] = inst_66789);

(statearr_67402_67751[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (50))){
var inst_66807 = (state_67193[(26)]);
var inst_66821 = (state_67193[(18)]);
var inst_66822 = (state_67193[(33)]);
var _ = (function (){var statearr_67404 = state_67193;
(statearr_67404[(4)] = cljs.core.cons((53),(state_67193[(4)])));

return statearr_67404;
})();
var inst_66819 = cljs.core.count(inst_66807);
var inst_66820 = (new cljs.core.List(null,inst_66819,null,(1),null));
var inst_66821__$1 = (new cljs.core.List(null,(1),inst_66820,(2),null));
var inst_66822__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66821__$1);
var state_67193__$1 = (function (){var statearr_67417 = state_67193;
(statearr_67417[(18)] = inst_66821__$1);

(statearr_67417[(33)] = inst_66822__$1);

return statearr_67417;
})();
if(cljs.core.truth_(inst_66822__$1)){
var statearr_67418_67752 = state_67193__$1;
(statearr_67418_67752[(1)] = (54));

} else {
var statearr_67419_67753 = state_67193__$1;
(statearr_67419_67753[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (75))){
var inst_66929 = (state_67193[(34)]);
var inst_66985 = (state_67193[(35)]);
var inst_66986 = (state_67193[(36)]);
var _ = (function (){var statearr_67428 = state_67193;
(statearr_67428[(4)] = cljs.core.cons((78),(state_67193[(4)])));

return statearr_67428;
})();
var inst_66980 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66981 = ["d1",new cljs.core.Keyword(null,"name","name",1843675177)];
var inst_66982 = (new cljs.core.PersistentVector(null,2,(5),inst_66980,inst_66981,null));
var inst_66983 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_66929,inst_66982);
var inst_66984 = (new cljs.core.List(null,inst_66983,null,(1),null));
var inst_66985__$1 = (new cljs.core.List(null,"My Dataset",inst_66984,(2),null));
var inst_66986__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66985__$1);
var state_67193__$1 = (function (){var statearr_67431 = state_67193;
(statearr_67431[(35)] = inst_66985__$1);

(statearr_67431[(36)] = inst_66986__$1);

return statearr_67431;
})();
if(cljs.core.truth_(inst_66986__$1)){
var statearr_67432_67757 = state_67193__$1;
(statearr_67432_67757[(1)] = (79));

} else {
var statearr_67464_67758 = state_67193__$1;
(statearr_67464_67758[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (99))){
var inst_67111 = (state_67193[(37)]);
var inst_67127 = (state_67193[(2)]);
var _ = (function (){var statearr_67474 = state_67193;
(statearr_67474[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67474;
})();
var state_67193__$1 = (function (){var statearr_67475 = state_67193;
(statearr_67475[(38)] = inst_67127);

return statearr_67475;
})();
var statearr_67476_67759 = state_67193__$1;
(statearr_67476_67759[(2)] = inst_67111);

(statearr_67476_67759[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (21))){
var inst_66629 = (state_67193[(13)]);
var inst_66646 = (state_67193[(39)]);
var inst_66647 = (state_67193[(15)]);
var _ = (function (){var statearr_67477 = state_67193;
(statearr_67477[(4)] = cljs.core.cons((24),(state_67193[(4)])));

return statearr_67477;
})();
var inst_66646__$1 = (new cljs.core.List(null,inst_66629,null,(1),null));
var inst_66647__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_66646__$1);
var state_67193__$1 = (function (){var statearr_67478 = state_67193;
(statearr_67478[(39)] = inst_66646__$1);

(statearr_67478[(15)] = inst_66647__$1);

return statearr_67478;
})();
if(cljs.core.truth_(inst_66647__$1)){
var statearr_67479_67760 = state_67193__$1;
(statearr_67479_67760[(1)] = (25));

} else {
var statearr_67480_67761 = state_67193__$1;
(statearr_67480_67761[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (31))){
var _ = (function (){var statearr_67481 = state_67193;
(statearr_67481[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67481;
})();
var state_67193__$1 = state_67193;
var ex67466 = (state_67193__$1[(2)]);
var statearr_67482_67762 = state_67193__$1;
(statearr_67482_67762[(5)] = ex67466);


var statearr_67483_67763 = state_67193__$1;
(statearr_67483_67763[(1)] = (30));

(statearr_67483_67763[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (32))){
var inst_66686 = (state_67193[(40)]);
var inst_66690 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66691 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_66692 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_66693 = cljs.core.cons(inst_66692,inst_66686);
var inst_66694 = ["bb_web_ds_tools/persistence_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),22,19,inst_66691,19,inst_66693,"DB created"];
var inst_66695 = cljs.core.PersistentHashMap.fromArrays(inst_66690,inst_66694);
var inst_66696 = cljs.test.report.call(null,inst_66695);
var state_67193__$1 = state_67193;
var statearr_67484_67764 = state_67193__$1;
(statearr_67484_67764[(2)] = inst_66696);

(statearr_67484_67764[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (40))){
var inst_66780 = (state_67193[(2)]);
var _ = (function (){var statearr_67485 = state_67193;
(statearr_67485[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67485;
})();
var state_67193__$1 = state_67193;
var statearr_67486_67766 = state_67193__$1;
(statearr_67486_67766[(2)] = inst_66780);

(statearr_67486_67766[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (91))){
var _ = (function (){var statearr_67487 = state_67193;
(statearr_67487[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67487;
})();
var inst_67085 = (state_67193[(2)]);
var inst_67086 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67087 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_67088 = (new cljs.core.PersistentVector(null,1,(5),inst_67086,inst_67087,null));
var inst_67089 = cljs.test.update_current_env_BANG_(inst_67088,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_67193[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31623__auto__ = temp__5825__auto__;
throw e__31623__auto__;
} else {
return null;
}
})();
var state_67193__$1 = (function (){var statearr_67488 = state_67193;
(statearr_67488[(41)] = inst_67089);

return statearr_67488;
})();
var statearr_67489_67767 = state_67193__$1;
(statearr_67489_67767[(2)] = inst_67085);

(statearr_67489_67767[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (56))){
var inst_66822 = (state_67193[(33)]);
var inst_66848 = (state_67193[(2)]);
var _ = (function (){var statearr_67491 = state_67193;
(statearr_67491[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67491;
})();
var state_67193__$1 = (function (){var statearr_67492 = state_67193;
(statearr_67492[(42)] = inst_66848);

return statearr_67492;
})();
var statearr_67493_67768 = state_67193__$1;
(statearr_67493_67768[(2)] = inst_66822);

(statearr_67493_67768[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (33))){
var inst_66686 = (state_67193[(40)]);
var inst_66698 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66699 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_66700 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66701 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_66702 = cljs.core.cons(inst_66701,inst_66686);
var inst_66703 = (new cljs.core.List(null,inst_66702,null,(1),null));
var inst_66704 = (new cljs.core.List(null,inst_66700,inst_66703,(2),null));
var inst_66705 = ["bb_web_ds_tools/persistence_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),22,19,inst_66699,19,inst_66704,"DB created"];
var inst_66706 = cljs.core.PersistentHashMap.fromArrays(inst_66698,inst_66705);
var inst_66707 = cljs.test.report.call(null,inst_66706);
var state_67193__$1 = state_67193;
var statearr_67494_67772 = state_67193__$1;
(statearr_67494_67772[(2)] = inst_66707);

(statearr_67494_67772[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (13))){
var _ = (function (){var statearr_67495 = state_67193;
(statearr_67495[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67495;
})();
var state_67193__$1 = state_67193;
var ex67490 = (state_67193__$1[(2)]);
var statearr_67496_67773 = state_67193__$1;
(statearr_67496_67773[(5)] = ex67490);


var statearr_67497_67774 = state_67193__$1;
(statearr_67497_67774[(1)] = (5));

(statearr_67497_67774[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (22))){
var inst_66629 = (state_67193[(13)]);
var inst_66671 = (state_67193[(2)]);
var inst_66672 = inst_66629.oo1;
var inst_66673 = inst_66672.DB;
var inst_66674 = (new inst_66673(":memory:","ct"));
var state_67193__$1 = (function (){var statearr_67498 = state_67193;
(statearr_67498[(43)] = inst_66671);

(statearr_67498[(24)] = inst_66674);

return statearr_67498;
})();
var statearr_67499_67775 = state_67193__$1;
(statearr_67499_67775[(2)] = null);

(statearr_67499_67775[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (90))){
var inst_67185 = (state_67193[(2)]);
var _ = (function (){var statearr_67500 = state_67193;
(statearr_67500[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67500;
})();
var state_67193__$1 = state_67193;
var statearr_67501_67776 = state_67193__$1;
(statearr_67501_67776[(2)] = inst_67185);

(statearr_67501_67776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (36))){
var inst_66783 = (state_67193[(2)]);
var inst_66784 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66785 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66786 = (new cljs.core.PersistentVector(null,1,(5),inst_66784,inst_66785,null));
var inst_66787 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_66786,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Insert and Query Manual"], 0));
var state_67193__$1 = (function (){var statearr_67507 = state_67193;
(statearr_67507[(44)] = inst_66783);

(statearr_67507[(45)] = inst_66787);

return statearr_67507;
})();
var statearr_67508_67777 = state_67193__$1;
(statearr_67508_67777[(2)] = null);

(statearr_67508_67777[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (41))){
var inst_66738 = (state_67193[(2)]);
var inst_66739 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66740 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_66741 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"error","error",-978969032),26,24,inst_66740,24,inst_66738,"datasets table exists"];
var inst_66742 = cljs.core.PersistentHashMap.fromArrays(inst_66739,inst_66741);
var inst_66743 = cljs.test.report.call(null,inst_66742);
var state_67193__$1 = state_67193;
var statearr_67509_67778 = state_67193__$1;
(statearr_67509_67778[(2)] = inst_66743);

(statearr_67509_67778[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (89))){
var inst_66674 = (state_67193[(24)]);
var _ = (function (){var statearr_67511 = state_67193;
(statearr_67511[(4)] = cljs.core.cons((91),(state_67193[(4)])));

return statearr_67511;
})();
var ___$1 = (function (){var statearr_67512 = state_67193;
(statearr_67512[(4)] = cljs.core.cons((92),(state_67193[(4)])));

return statearr_67512;
})();
var inst_67097 = bb_web_ds_tools.workspaces.persistence_fx.export_db(inst_66674);
var state_67193__$1 = (function (){var statearr_67513 = state_67193;
(statearr_67513[(46)] = inst_67097);

return statearr_67513;
})();
var statearr_67514_67779 = state_67193__$1;
(statearr_67514_67779[(2)] = null);

(statearr_67514_67779[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (100))){
var inst_67097 = (state_67193[(46)]);
var inst_67156 = (state_67193[(30)]);
var inst_67157 = (state_67193[(28)]);
var _ = (function (){var statearr_67515 = state_67193;
(statearr_67515[(4)] = cljs.core.cons((103),(state_67193[(4)])));

return statearr_67515;
})();
var inst_67154 = inst_67097.size;
var inst_67155 = (new cljs.core.List(null,(0),null,(1),null));
var inst_67156__$1 = (new cljs.core.List(null,inst_67154,inst_67155,(2),null));
var inst_67157__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,inst_67156__$1);
var state_67193__$1 = (function (){var statearr_67517 = state_67193;
(statearr_67517[(30)] = inst_67156__$1);

(statearr_67517[(28)] = inst_67157__$1);

return statearr_67517;
})();
if(cljs.core.truth_(inst_67157__$1)){
var statearr_67522_67780 = state_67193__$1;
(statearr_67522_67780[(1)] = (104));

} else {
var statearr_67524_67781 = state_67193__$1;
(statearr_67524_67781[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (43))){
var inst_66751 = (state_67193[(20)]);
var inst_66754 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66758 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_66759 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66760 = cljs.core.cons(inst_66759,inst_66751);
var inst_66761 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"pass","pass",1574159993),26,24,inst_66758,24,inst_66760,"datasets table exists"];
var inst_66762 = cljs.core.PersistentHashMap.fromArrays(inst_66754,inst_66761);
var inst_66763 = cljs.test.report.call(null,inst_66762);
var state_67193__$1 = state_67193;
var statearr_67527_67782 = state_67193__$1;
(statearr_67527_67782[(2)] = inst_66763);

(statearr_67527_67782[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (61))){
var inst_66867 = (state_67193[(9)]);
var inst_66870 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66871 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test",cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)),(1)));
var inst_66872 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66873 = cljs.core.cons(inst_66872,inst_66867);
var inst_66874 = ["bb_web_ds_tools/persistence_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),26,30,inst_66871,30,inst_66873,"Name matches"];
var inst_66875 = cljs.core.PersistentHashMap.fromArrays(inst_66870,inst_66874);
var inst_66876 = cljs.test.report.call(null,inst_66875);
var state_67193__$1 = state_67193;
var statearr_67529_67783 = state_67193__$1;
(statearr_67529_67783[(2)] = inst_66876);

(statearr_67529_67783[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (29))){
var inst_66712 = (state_67193[(2)]);
var inst_66713 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66714 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66716 = (new cljs.core.PersistentVector(null,1,(5),inst_66713,inst_66714,null));
var inst_66717 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_66716,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Create Tables"], 0));
var state_67193__$1 = (function (){var statearr_67530 = state_67193;
(statearr_67530[(47)] = inst_66712);

(statearr_67530[(48)] = inst_66717);

return statearr_67530;
})();
var statearr_67531_67785 = state_67193__$1;
(statearr_67531_67785[(2)] = null);

(statearr_67531_67785[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (44))){
var inst_66751 = (state_67193[(20)]);
var inst_66766 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66767 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_66768 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66769 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66770 = cljs.core.cons(inst_66769,inst_66751);
var inst_66771 = (new cljs.core.List(null,inst_66770,null,(1),null));
var inst_66772 = (new cljs.core.List(null,inst_66768,inst_66771,(2),null));
var inst_66773 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"fail","fail",1706214930),26,24,inst_66767,24,inst_66772,"datasets table exists"];
var inst_66774 = cljs.core.PersistentHashMap.fromArrays(inst_66766,inst_66773);
var inst_66775 = cljs.test.report.call(null,inst_66774);
var state_67193__$1 = state_67193;
var statearr_67533_67786 = state_67193__$1;
(statearr_67533_67786[(2)] = inst_66775);

(statearr_67533_67786[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (93))){
var inst_67097 = (state_67193[(46)]);
var inst_67111 = (state_67193[(37)]);
var _ = (function (){var statearr_67538 = state_67193;
(statearr_67538[(4)] = cljs.core.cons((96),(state_67193[(4)])));

return statearr_67538;
})();
var inst_67110 = Blob;
var inst_67111__$1 = (inst_67097 instanceof inst_67110);
var state_67193__$1 = (function (){var statearr_67539 = state_67193;
(statearr_67539[(37)] = inst_67111__$1);

return statearr_67539;
})();
if(cljs.core.truth_(inst_67111__$1)){
var statearr_67540_67787 = state_67193__$1;
(statearr_67540_67787[(1)] = (97));

} else {
var statearr_67541_67788 = state_67193__$1;
(statearr_67541_67788[(1)] = (98));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (6))){
var _ = (function (){var statearr_67543 = state_67193;
(statearr_67543[(4)] = cljs.core.cons((9),(state_67193[(4)])));

return statearr_67543;
})();
var state_67193__$1 = state_67193;
var statearr_67544_67789 = state_67193__$1;
(statearr_67544_67789[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (28))){
var inst_66674 = (state_67193[(24)]);
var inst_66686 = (state_67193[(40)]);
var inst_66687 = (state_67193[(49)]);
var _ = (function (){var statearr_67547 = state_67193;
(statearr_67547[(4)] = cljs.core.cons((31),(state_67193[(4)])));

return statearr_67547;
})();
var inst_66686__$1 = (new cljs.core.List(null,inst_66674,null,(1),null));
var inst_66687__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_66686__$1);
var state_67193__$1 = (function (){var statearr_67548 = state_67193;
(statearr_67548[(40)] = inst_66686__$1);

(statearr_67548[(49)] = inst_66687__$1);

return statearr_67548;
})();
if(cljs.core.truth_(inst_66687__$1)){
var statearr_67549_67790 = state_67193__$1;
(statearr_67549_67790[(1)] = (32));

} else {
var statearr_67550_67791 = state_67193__$1;
(statearr_67550_67791[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (64))){
var inst_66674 = (state_67193[(24)]);
var _ = (function (){var statearr_67551 = state_67193;
(statearr_67551[(4)] = cljs.core.cons((66),(state_67193[(4)])));

return statearr_67551;
})();
var ___$1 = (function (){var statearr_67552 = state_67193;
(statearr_67552[(4)] = cljs.core.cons((67),(state_67193[(4)])));

return statearr_67552;
})();
var inst_66916 = ["d1"];
var inst_66917 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_66918 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66919 = [new cljs.core.Keyword(null,"a","a",-2123407586)];
var inst_66920 = [(1)];
var inst_66921 = cljs.core.PersistentHashMap.fromArrays(inst_66919,inst_66920);
var inst_66922 = [inst_66921];
var inst_66923 = (new cljs.core.PersistentVector(null,1,(5),inst_66918,inst_66922,null));
var inst_66924 = ["My Dataset",inst_66923];
var inst_66925 = cljs.core.PersistentHashMap.fromArrays(inst_66917,inst_66924);
var inst_66926 = [inst_66925];
var inst_66927 = cljs.core.PersistentHashMap.fromArrays(inst_66916,inst_66926);
var inst_66928 = bb_web_ds_tools.workspaces.persistence_fx.persist_datasets_BANG_(inst_66674,inst_66927);
var inst_66929 = bb_web_ds_tools.workspaces.persistence_fx.load_datasets_from_db(inst_66674);
var state_67193__$1 = (function (){var statearr_67560 = state_67193;
(statearr_67560[(50)] = inst_66928);

(statearr_67560[(34)] = inst_66929);

return statearr_67560;
})();
var statearr_67561_67792 = state_67193__$1;
(statearr_67561_67792[(2)] = null);

(statearr_67561_67792[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (103))){
var _ = (function (){var statearr_67562 = state_67193;
(statearr_67562[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67562;
})();
var state_67193__$1 = state_67193;
var ex67546 = (state_67193__$1[(2)]);
var statearr_67564_67793 = state_67193__$1;
(statearr_67564_67793[(5)] = ex67546);


var statearr_67567_67794 = state_67193__$1;
(statearr_67567_67794[(1)] = (102));

(statearr_67567_67794[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (51))){
var inst_66851 = (state_67193[(2)]);
var state_67193__$1 = (function (){var statearr_67568 = state_67193;
(statearr_67568[(51)] = inst_66851);

return statearr_67568;
})();
var statearr_67569_67795 = state_67193__$1;
(statearr_67569_67795[(2)] = null);

(statearr_67569_67795[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (25))){
var inst_66646 = (state_67193[(39)]);
var inst_66649 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66650 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_66651 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_66652 = cljs.core.cons(inst_66651,inst_66646);
var inst_66653 = ["bb_web_ds_tools/persistence_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),20,15,inst_66650,15,inst_66652,"SQLite module loaded"];
var inst_66654 = cljs.core.PersistentHashMap.fromArrays(inst_66649,inst_66653);
var inst_66655 = cljs.test.report.call(null,inst_66654);
var state_67193__$1 = state_67193;
var statearr_67571_67796 = state_67193__$1;
(statearr_67571_67796[(2)] = inst_66655);

(statearr_67571_67796[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (34))){
var inst_66687 = (state_67193[(49)]);
var inst_66709 = (state_67193[(2)]);
var _ = (function (){var statearr_67577 = state_67193;
(statearr_67577[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67577;
})();
var state_67193__$1 = (function (){var statearr_67585 = state_67193;
(statearr_67585[(52)] = inst_66709);

return statearr_67585;
})();
var statearr_67586_67797 = state_67193__$1;
(statearr_67586_67797[(2)] = inst_66687);

(statearr_67586_67797[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (17))){
var inst_66624 = (state_67193[(2)]);
var state_67193__$1 = state_67193;
if(cljs.core.truth_(inst_66624)){
var statearr_67587_67805 = state_67193__$1;
(statearr_67587_67805[(1)] = (18));

} else {
var statearr_67588_67806 = state_67193__$1;
(statearr_67588_67806[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (3))){
var inst_67188 = (state_67193[(2)]);
var state_67193__$1 = state_67193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67193__$1,inst_67188);
} else {
if((state_val_67197 === (12))){
var inst_66596 = (state_67193[(2)]);
var _ = (function (){var statearr_67589 = state_67193;
(statearr_67589[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67589;
})();
var state_67193__$1 = (function (){var statearr_67590 = state_67193;
(statearr_67590[(53)] = inst_66596);

return statearr_67590;
})();
var statearr_67591_67807 = state_67193__$1;
(statearr_67591_67807[(2)] = true);

(statearr_67591_67807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (2))){
var _ = (function (){var statearr_67592 = state_67193;
(statearr_67592[(4)] = cljs.core.cons((4),(state_67193[(4)])));

return statearr_67592;
})();
var ___$1 = (function (){var statearr_67593 = state_67193;
(statearr_67593[(4)] = cljs.core.cons((13),(state_67193[(4)])));

return statearr_67593;
})();
var inst_66606 = [new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.Keyword(null,"printErr","printErr",-1323332006)];
var inst_66607 = (function (){return (function (x){
return console.log("SQLite:",x);
});
})();
var inst_66608 = (function (){return (function (x){
return console.error("SQLite Err:",x);
});
})();
var inst_66609 = [inst_66607,inst_66608];
var inst_66610 = cljs.core.PersistentHashMap.fromArrays(inst_66606,inst_66609);
var inst_66611 = cljs.core.clj__GT_js(inst_66610);
var inst_66613 = shadow.js.shim.module$$sqlite_org$sqlite_wasm.default(inst_66611);
var inst_66614 = cljs.core.async.interop.p__GT_c(inst_66613);
var state_67193__$1 = state_67193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67193__$1,(14),inst_66614);
} else {
if((state_val_67197 === (66))){
var _ = (function (){var statearr_67594 = state_67193;
(statearr_67594[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67594;
})();
var inst_66904 = (state_67193[(2)]);
var inst_66905 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66906 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66907 = (new cljs.core.PersistentVector(null,1,(5),inst_66905,inst_66906,null));
var inst_66908 = cljs.test.update_current_env_BANG_(inst_66907,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_67193[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31623__auto__ = temp__5825__auto__;
throw e__31623__auto__;
} else {
return null;
}
})();
var state_67193__$1 = (function (){var statearr_67595 = state_67193;
(statearr_67595[(54)] = inst_66908);

return statearr_67595;
})();
var statearr_67596_67808 = state_67193__$1;
(statearr_67596_67808[(2)] = inst_66904);

(statearr_67596_67808[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (23))){
var inst_66630 = (state_67193[(2)]);
var inst_66631 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66637 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_66638 = ["bb_web_ds_tools/persistence_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),20,15,inst_66637,15,inst_66630,"SQLite module loaded"];
var inst_66639 = cljs.core.PersistentHashMap.fromArrays(inst_66631,inst_66638);
var inst_66640 = cljs.test.report.call(null,inst_66639);
var state_67193__$1 = state_67193;
var statearr_67597_67809 = state_67193__$1;
(statearr_67597_67809[(2)] = inst_66640);

(statearr_67597_67809[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (47))){
var inst_66898 = (state_67193[(2)]);
var inst_66899 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66900 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66901 = (new cljs.core.PersistentVector(null,1,(5),inst_66899,inst_66900,null));
var inst_66902 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_66901,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Persist Datasets"], 0));
var state_67193__$1 = (function (){var statearr_67598 = state_67193;
(statearr_67598[(55)] = inst_66898);

(statearr_67598[(56)] = inst_66902);

return statearr_67598;
})();
var statearr_67599_67810 = state_67193__$1;
(statearr_67599_67810[(2)] = null);

(statearr_67599_67810[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (35))){
var inst_66674 = (state_67193[(24)]);
var _ = (function (){var statearr_67600 = state_67193;
(statearr_67600[(4)] = cljs.core.cons((37),(state_67193[(4)])));

return statearr_67600;
})();
var ___$1 = (function (){var statearr_67601 = state_67193;
(statearr_67601[(4)] = cljs.core.cons((38),(state_67193[(4)])));

return statearr_67601;
})();
var inst_66732 = bb_web_ds_tools.workspaces.persistence_fx.create_tables_BANG_(inst_66674);
var inst_66733 = [new cljs.core.Keyword(null,"returnValue","returnValue",1643246062)];
var inst_66734 = ["resultRows"];
var inst_66735 = cljs.core.PersistentHashMap.fromArrays(inst_66733,inst_66734);
var inst_66736 = cljs.core.clj__GT_js(inst_66735);
var inst_66737 = inst_66674.exec("SELECT name FROM sqlite_master WHERE type='table' AND name='datasets'",inst_66736);
var state_67193__$1 = (function (){var statearr_67602 = state_67193;
(statearr_67602[(57)] = inst_66732);

(statearr_67602[(19)] = inst_66737);

return statearr_67602;
})();
var statearr_67603_67818 = state_67193__$1;
(statearr_67603_67818[(2)] = null);

(statearr_67603_67818[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (82))){
var inst_66929 = (state_67193[(34)]);
var inst_67049 = (state_67193[(12)]);
var inst_67050 = (state_67193[(22)]);
var _ = (function (){var statearr_67604 = state_67193;
(statearr_67604[(4)] = cljs.core.cons((85),(state_67193[(4)])));

return statearr_67604;
})();
var inst_67037 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67038 = [new cljs.core.Keyword(null,"a","a",-2123407586)];
var inst_67039 = [(1)];
var inst_67040 = cljs.core.PersistentHashMap.fromArrays(inst_67038,inst_67039);
var inst_67041 = [inst_67040];
var inst_67042 = (new cljs.core.PersistentVector(null,1,(5),inst_67037,inst_67041,null));
var inst_67043 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67044 = ["d1",new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_67045 = (new cljs.core.PersistentVector(null,2,(5),inst_67043,inst_67044,null));
var inst_67046 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_66929,inst_67045);
var inst_67048 = (new cljs.core.List(null,inst_67046,null,(1),null));
var inst_67049__$1 = (new cljs.core.List(null,inst_67042,inst_67048,(2),null));
var inst_67050__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_67049__$1);
var state_67193__$1 = (function (){var statearr_67605 = state_67193;
(statearr_67605[(12)] = inst_67049__$1);

(statearr_67605[(22)] = inst_67050__$1);

return statearr_67605;
})();
if(cljs.core.truth_(inst_67050__$1)){
var statearr_67606_67819 = state_67193__$1;
(statearr_67606_67819[(1)] = (86));

} else {
var statearr_67607_67820 = state_67193__$1;
(statearr_67607_67820[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (76))){
var inst_67021 = (state_67193[(2)]);
var state_67193__$1 = (function (){var statearr_67608 = state_67193;
(statearr_67608[(58)] = inst_67021);

return statearr_67608;
})();
var statearr_67609_67821 = state_67193__$1;
(statearr_67609_67821[(2)] = null);

(statearr_67609_67821[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (97))){
var inst_67097 = (state_67193[(46)]);
var inst_67113 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67114 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_67115 = cljs.core.type(inst_67097);
var inst_67116 = ["bb_web_ds_tools/persistence_test.cljs",50,new cljs.core.Keyword(null,"pass","pass",1574159993),26,42,inst_67114,42,inst_67115,"Export returns a Blob"];
var inst_67117 = cljs.core.PersistentHashMap.fromArrays(inst_67113,inst_67116);
var inst_67118 = cljs.test.report.call(null,inst_67117);
var state_67193__$1 = state_67193;
var statearr_67610_67822 = state_67193__$1;
(statearr_67610_67822[(2)] = inst_67118);

(statearr_67610_67822[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (19))){
var inst_66616 = (state_67193[(31)]);
var state_67193__$1 = state_67193;
var statearr_67611_67823 = state_67193__$1;
(statearr_67611_67823[(2)] = inst_66616);

(statearr_67611_67823[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (57))){
var inst_66807 = (state_67193[(26)]);
var inst_66867 = (state_67193[(9)]);
var inst_66868 = (state_67193[(59)]);
var _ = (function (){var statearr_67612 = state_67193;
(statearr_67612[(4)] = cljs.core.cons((60),(state_67193[(4)])));

return statearr_67612;
})();
var inst_66864 = cljs.core.first(inst_66807);
var inst_66865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_66864,(1));
var inst_66866 = (new cljs.core.List(null,inst_66865,null,(1),null));
var inst_66867__$1 = (new cljs.core.List(null,"test",inst_66866,(2),null));
var inst_66868__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66867__$1);
var state_67193__$1 = (function (){var statearr_67613 = state_67193;
(statearr_67613[(9)] = inst_66867__$1);

(statearr_67613[(59)] = inst_66868__$1);

return statearr_67613;
})();
if(cljs.core.truth_(inst_66868__$1)){
var statearr_67614_67824 = state_67193__$1;
(statearr_67614_67824[(1)] = (61));

} else {
var statearr_67615_67825 = state_67193__$1;
(statearr_67615_67825[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (68))){
var inst_66929 = (state_67193[(34)]);
var inst_66943 = (state_67193[(14)]);
var inst_66944 = (state_67193[(10)]);
var _ = (function (){var statearr_67617 = state_67193;
(statearr_67617[(4)] = cljs.core.cons((71),(state_67193[(4)])));

return statearr_67617;
})();
var inst_66941 = cljs.core.count(inst_66929);
var inst_66942 = (new cljs.core.List(null,inst_66941,null,(1),null));
var inst_66943__$1 = (new cljs.core.List(null,(1),inst_66942,(2),null));
var inst_66944__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66943__$1);
var state_67193__$1 = (function (){var statearr_67618 = state_67193;
(statearr_67618[(14)] = inst_66943__$1);

(statearr_67618[(10)] = inst_66944__$1);

return statearr_67618;
})();
if(cljs.core.truth_(inst_66944__$1)){
var statearr_67619_67826 = state_67193__$1;
(statearr_67619_67826[(1)] = (72));

} else {
var statearr_67620_67827 = state_67193__$1;
(statearr_67620_67827[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (11))){
var inst_66590 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66591 = true;
var inst_66592 = [null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,inst_66591,null,true,"Skipping SQLite tests due to environment limitations"];
var inst_66593 = cljs.core.PersistentHashMap.fromArrays(inst_66590,inst_66592);
var inst_66594 = cljs.test.report.call(null,inst_66593);
var state_67193__$1 = state_67193;
var statearr_67621_67852 = state_67193__$1;
(statearr_67621_67852[(2)] = inst_66594);

(statearr_67621_67852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (9))){
var _ = (function (){var statearr_67622 = state_67193;
(statearr_67622[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67622;
})();
var state_67193__$1 = state_67193;
var ex67616 = (state_67193__$1[(2)]);
var statearr_67623_67853 = state_67193__$1;
(statearr_67623_67853[(5)] = ex67616);


var statearr_67624_67854 = state_67193__$1;
(statearr_67624_67854[(1)] = (8));

(statearr_67624_67854[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (5))){
var inst_66568 = (state_67193[(2)]);
var inst_66569 = inst_66568.message;
var inst_66570 = console.warn("SQLite WASM initialization failed (expected if WASM assets are missing in test env):",inst_66569);
var state_67193__$1 = (function (){var statearr_67625 = state_67193;
(statearr_67625[(60)] = inst_66570);

return statearr_67625;
})();
var statearr_67626_67855 = state_67193__$1;
(statearr_67626_67855[(2)] = null);

(statearr_67626_67855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (83))){
var inst_67076 = (state_67193[(2)]);
var _ = (function (){var statearr_67627 = state_67193;
(statearr_67627[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67627;
})();
var state_67193__$1 = state_67193;
var statearr_67628_67856 = state_67193__$1;
(statearr_67628_67856[(2)] = inst_67076);

(statearr_67628_67856[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (14))){
var inst_66616 = (state_67193[(31)]);
var inst_66617 = (state_67193[(61)]);
var inst_66616__$1 = (state_67193[(2)]);
var inst_66617__$1 = (inst_66616__$1 instanceof cljs.core.ExceptionInfo);
var state_67193__$1 = (function (){var statearr_67631 = state_67193;
(statearr_67631[(31)] = inst_66616__$1);

(statearr_67631[(61)] = inst_66617__$1);

return statearr_67631;
})();
if(cljs.core.truth_(inst_66617__$1)){
var statearr_67634_67857 = state_67193__$1;
(statearr_67634_67857[(1)] = (15));

} else {
var statearr_67635_67858 = state_67193__$1;
(statearr_67635_67858[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (45))){
var inst_66752 = (state_67193[(21)]);
var inst_66777 = (state_67193[(2)]);
var _ = (function (){var statearr_67638 = state_67193;
(statearr_67638[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67638;
})();
var state_67193__$1 = (function (){var statearr_67639 = state_67193;
(statearr_67639[(62)] = inst_66777);

return statearr_67639;
})();
var statearr_67640_67860 = state_67193__$1;
(statearr_67640_67860[(2)] = inst_66752);

(statearr_67640_67860[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (53))){
var _ = (function (){var statearr_67641 = state_67193;
(statearr_67641[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67641;
})();
var state_67193__$1 = state_67193;
var ex67629 = (state_67193__$1[(2)]);
var statearr_67642_67861 = state_67193__$1;
(statearr_67642_67861[(5)] = ex67629);


var statearr_67643_67862 = state_67193__$1;
(statearr_67643_67862[(1)] = (52));

(statearr_67643_67862[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (78))){
var _ = (function (){var statearr_67644 = state_67193;
(statearr_67644[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67644;
})();
var state_67193__$1 = state_67193;
var ex67637 = (state_67193__$1[(2)]);
var statearr_67645_67863 = state_67193__$1;
(statearr_67645_67863[(5)] = ex67637);


var statearr_67647_67864 = state_67193__$1;
(statearr_67647_67864[(1)] = (77));

(statearr_67647_67864[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (26))){
var inst_66646 = (state_67193[(39)]);
var inst_66657 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66658 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_66659 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66660 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_66661 = cljs.core.cons(inst_66660,inst_66646);
var inst_66662 = (new cljs.core.List(null,inst_66661,null,(1),null));
var inst_66663 = (new cljs.core.List(null,inst_66659,inst_66662,(2),null));
var inst_66664 = ["bb_web_ds_tools/persistence_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),20,15,inst_66658,15,inst_66663,"SQLite module loaded"];
var inst_66665 = cljs.core.PersistentHashMap.fromArrays(inst_66657,inst_66664);
var inst_66666 = cljs.test.report.call(null,inst_66665);
var state_67193__$1 = state_67193;
var statearr_67648_67866 = state_67193__$1;
(statearr_67648_67866[(2)] = inst_66666);

(statearr_67648_67866[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (16))){
var inst_66617 = (state_67193[(61)]);
var state_67193__$1 = state_67193;
var statearr_67651_67867 = state_67193__$1;
(statearr_67651_67867[(2)] = inst_66617);

(statearr_67651_67867[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (81))){
var inst_66986 = (state_67193[(36)]);
var inst_67018 = (state_67193[(2)]);
var _ = (function (){var statearr_67653 = state_67193;
(statearr_67653[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67653;
})();
var state_67193__$1 = (function (){var statearr_67654 = state_67193;
(statearr_67654[(63)] = inst_67018);

return statearr_67654;
})();
var statearr_67655_67875 = state_67193__$1;
(statearr_67655_67875[(2)] = inst_66986);

(statearr_67655_67875[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (79))){
var inst_66985 = (state_67193[(35)]);
var inst_66999 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67000 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"My Dataset",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"name","name",1843675177)], null)));
var inst_67001 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_67002 = cljs.core.cons(inst_67001,inst_66985);
var inst_67003 = ["bb_web_ds_tools/persistence_test.cljs",73,new cljs.core.Keyword(null,"pass","pass",1574159993),28,37,inst_67000,37,inst_67002,null];
var inst_67004 = cljs.core.PersistentHashMap.fromArrays(inst_66999,inst_67003);
var inst_67005 = cljs.test.report.call(null,inst_67004);
var state_67193__$1 = state_67193;
var statearr_67657_67876 = state_67193__$1;
(statearr_67657_67876[(2)] = inst_67005);

(statearr_67657_67876[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (38))){
var _ = (function (){var statearr_67658 = state_67193;
(statearr_67658[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67658;
})();
var state_67193__$1 = state_67193;
var ex67652 = (state_67193__$1[(2)]);
var statearr_67659_67877 = state_67193__$1;
(statearr_67659_67877[(5)] = ex67652);


throw ex67652;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (98))){
var inst_67097 = (state_67193[(46)]);
var inst_67120 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67121 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_67122 = cljs.core.type(inst_67097);
var inst_67123 = ["bb_web_ds_tools/persistence_test.cljs",50,new cljs.core.Keyword(null,"fail","fail",1706214930),26,42,inst_67121,42,inst_67122,"Export returns a Blob"];
var inst_67124 = cljs.core.PersistentHashMap.fromArrays(inst_67120,inst_67123);
var inst_67125 = cljs.test.report.call(null,inst_67124);
var state_67193__$1 = state_67193;
var statearr_67664_67878 = state_67193__$1;
(statearr_67664_67878[(2)] = inst_67125);

(statearr_67664_67878[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (87))){
var inst_67049 = (state_67193[(12)]);
var inst_67062 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67063 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"data","data",-232669377)], null)));
var inst_67064 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_67065 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_67066 = cljs.core.cons(inst_67065,inst_67049);
var inst_67067 = (new cljs.core.List(null,inst_67066,null,(1),null));
var inst_67068 = (new cljs.core.List(null,inst_67064,inst_67067,(2),null));
var inst_67069 = ["bb_web_ds_tools/persistence_test.cljs",69,new cljs.core.Keyword(null,"fail","fail",1706214930),28,38,inst_67063,38,inst_67068,null];
var inst_67070 = cljs.core.PersistentHashMap.fromArrays(inst_67062,inst_67069);
var inst_67071 = cljs.test.report.call(null,inst_67070);
var state_67193__$1 = state_67193;
var statearr_67666_67879 = state_67193__$1;
(statearr_67666_67879[(2)] = inst_67071);

(statearr_67666_67879[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (30))){
var inst_66675 = (state_67193[(2)]);
var inst_66676 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66677 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_66678 = ["bb_web_ds_tools/persistence_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),22,19,inst_66677,19,inst_66675,"DB created"];
var inst_66679 = cljs.core.PersistentHashMap.fromArrays(inst_66676,inst_66678);
var inst_66680 = cljs.test.report.call(null,inst_66679);
var state_67193__$1 = state_67193;
var statearr_67668_67881 = state_67193__$1;
(statearr_67668_67881[(2)] = inst_66680);

(statearr_67668_67881[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (73))){
var inst_66943 = (state_67193[(14)]);
var inst_66954 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66955 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null)));
var inst_66956 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66957 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66958 = cljs.core.cons(inst_66957,inst_66943);
var inst_66959 = (new cljs.core.List(null,inst_66958,null,(1),null));
var inst_66960 = (new cljs.core.List(null,inst_66956,inst_66959,(2),null));
var inst_66961 = ["bb_web_ds_tools/persistence_test.cljs",48,new cljs.core.Keyword(null,"fail","fail",1706214930),28,36,inst_66955,36,inst_66960,null];
var inst_66962 = cljs.core.PersistentHashMap.fromArrays(inst_66954,inst_66961);
var inst_66963 = cljs.test.report.call(null,inst_66962);
var state_67193__$1 = state_67193;
var statearr_67669_67883 = state_67193__$1;
(statearr_67669_67883[(2)] = inst_66963);

(statearr_67669_67883[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (96))){
var _ = (function (){var statearr_67670 = state_67193;
(statearr_67670[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67670;
})();
var state_67193__$1 = state_67193;
var ex67667 = (state_67193__$1[(2)]);
var statearr_67671_67884 = state_67193__$1;
(statearr_67671_67884[(5)] = ex67667);


var statearr_67672_67885 = state_67193__$1;
(statearr_67672_67885[(1)] = (95));

(statearr_67672_67885[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (10))){
var inst_66584 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66585 = true;
var inst_66586 = [null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,inst_66585,null,true,"Skipping SQLite tests due to environment limitations"];
var inst_66587 = cljs.core.PersistentHashMap.fromArrays(inst_66584,inst_66586);
var inst_66588 = cljs.test.report.call(null,inst_66587);
var state_67193__$1 = state_67193;
var statearr_67673_67895 = state_67193__$1;
(statearr_67673_67895[(2)] = inst_66588);

(statearr_67673_67895[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (18))){
var inst_66616 = (state_67193[(31)]);
var inst_66626 = (function(){throw inst_66616})();
var state_67193__$1 = state_67193;
var statearr_67674_67896 = state_67193__$1;
(statearr_67674_67896[(2)] = inst_66626);

(statearr_67674_67896[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (105))){
var inst_67156 = (state_67193[(30)]);
var inst_67168 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67169 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_67170 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_67171 = new cljs.core.Symbol(null,">",">",1085014381,null);
var inst_67172 = cljs.core.cons(inst_67171,inst_67156);
var inst_67173 = (new cljs.core.List(null,inst_67172,null,(1),null));
var inst_67174 = (new cljs.core.List(null,inst_67170,inst_67173,(2),null));
var inst_67175 = ["bb_web_ds_tools/persistence_test.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),26,43,inst_67169,43,inst_67174,"Blob is not empty"];
var inst_67176 = cljs.core.PersistentHashMap.fromArrays(inst_67168,inst_67175);
var inst_67177 = cljs.test.report.call(null,inst_67176);
var state_67193__$1 = state_67193;
var statearr_67676_67898 = state_67193__$1;
(statearr_67676_67898[(2)] = inst_67177);

(statearr_67676_67898[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (52))){
var inst_66808 = (state_67193[(2)]);
var inst_66809 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66810 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_66811 = ["bb_web_ds_tools/persistence_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),26,29,inst_66810,29,inst_66808,"One row inserted"];
var inst_66812 = cljs.core.PersistentHashMap.fromArrays(inst_66809,inst_66811);
var inst_66813 = cljs.test.report.call(null,inst_66812);
var state_67193__$1 = state_67193;
var statearr_67679_67899 = state_67193__$1;
(statearr_67679_67899[(2)] = inst_66813);

(statearr_67679_67899[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (67))){
var _ = (function (){var statearr_67681 = state_67193;
(statearr_67681[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67681;
})();
var state_67193__$1 = state_67193;
var ex67675 = (state_67193__$1[(2)]);
var statearr_67682_67900 = state_67193__$1;
(statearr_67682_67900[(5)] = ex67675);


throw ex67675;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (71))){
var _ = (function (){var statearr_67683 = state_67193;
(statearr_67683[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67683;
})();
var state_67193__$1 = state_67193;
var ex67677 = (state_67193__$1[(2)]);
var statearr_67684_67901 = state_67193__$1;
(statearr_67684_67901[(5)] = ex67677);


var statearr_67685_67902 = state_67193__$1;
(statearr_67685_67902[(1)] = (70));

(statearr_67685_67902[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (42))){
var _ = (function (){var statearr_67686 = state_67193;
(statearr_67686[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67686;
})();
var state_67193__$1 = state_67193;
var ex67680 = (state_67193__$1[(2)]);
var statearr_67687_67903 = state_67193__$1;
(statearr_67687_67903[(5)] = ex67680);


var statearr_67688_67904 = state_67193__$1;
(statearr_67688_67904[(1)] = (41));

(statearr_67688_67904[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (80))){
var inst_66985 = (state_67193[(35)]);
var inst_67007 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67008 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"My Dataset",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"name","name",1843675177)], null)));
var inst_67009 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_67010 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_67011 = cljs.core.cons(inst_67010,inst_66985);
var inst_67012 = (new cljs.core.List(null,inst_67011,null,(1),null));
var inst_67013 = (new cljs.core.List(null,inst_67009,inst_67012,(2),null));
var inst_67014 = ["bb_web_ds_tools/persistence_test.cljs",73,new cljs.core.Keyword(null,"fail","fail",1706214930),28,37,inst_67008,37,inst_67013,null];
var inst_67015 = cljs.core.PersistentHashMap.fromArrays(inst_67007,inst_67014);
var inst_67016 = cljs.test.report.call(null,inst_67015);
var state_67193__$1 = state_67193;
var statearr_67689_67905 = state_67193__$1;
(statearr_67689_67905[(2)] = inst_67016);

(statearr_67689_67905[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (37))){
var _ = (function (){var statearr_67690 = state_67193;
(statearr_67690[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67690;
})();
var inst_66719 = (state_67193[(2)]);
var inst_66720 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66721 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66722 = (new cljs.core.PersistentVector(null,1,(5),inst_66720,inst_66721,null));
var inst_66723 = cljs.test.update_current_env_BANG_(inst_66722,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_67193[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31623__auto__ = temp__5825__auto__;
throw e__31623__auto__;
} else {
return null;
}
})();
var state_67193__$1 = (function (){var statearr_67691 = state_67193;
(statearr_67691[(64)] = inst_66723);

return statearr_67691;
})();
var statearr_67692_67921 = state_67193__$1;
(statearr_67692_67921[(2)] = inst_66719);

(statearr_67692_67921[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (63))){
var inst_66868 = (state_67193[(59)]);
var inst_66892 = (state_67193[(2)]);
var _ = (function (){var statearr_67694 = state_67193;
(statearr_67694[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67694;
})();
var state_67193__$1 = (function (){var statearr_67695 = state_67193;
(statearr_67695[(65)] = inst_66892);

return statearr_67695;
})();
var statearr_67696_67923 = state_67193__$1;
(statearr_67696_67923[(2)] = inst_66868);

(statearr_67696_67923[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (94))){
var inst_67130 = (state_67193[(2)]);
var state_67193__$1 = (function (){var statearr_67698 = state_67193;
(statearr_67698[(66)] = inst_67130);

return statearr_67698;
})();
var statearr_67699_67924 = state_67193__$1;
(statearr_67699_67924[(2)] = null);

(statearr_67699_67924[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (8))){
var inst_66571 = (state_67193[(2)]);
var inst_66572 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66573 = true;
var inst_66574 = [null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,inst_66573,null,inst_66571,"Skipping SQLite tests due to environment limitations"];
var inst_66575 = cljs.core.PersistentHashMap.fromArrays(inst_66572,inst_66574);
var inst_66576 = cljs.test.report.call(null,inst_66575);
var state_67193__$1 = state_67193;
var statearr_67701_67925 = state_67193__$1;
(statearr_67701_67925[(2)] = inst_66576);

(statearr_67701_67925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (49))){
var _ = (function (){var statearr_67702 = state_67193;
(statearr_67702[(4)] = cljs.core.rest((state_67193[(4)])));

return statearr_67702;
})();
var state_67193__$1 = state_67193;
var ex67697 = (state_67193__$1[(2)]);
var statearr_67703_67926 = state_67193__$1;
(statearr_67703_67926[(5)] = ex67697);


throw ex67697;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67197 === (84))){
var inst_67022 = (state_67193[(2)]);
var inst_67023 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67024 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"data","data",-232669377)], null)));
var inst_67025 = ["bb_web_ds_tools/persistence_test.cljs",69,new cljs.core.Keyword(null,"error","error",-978969032),28,38,inst_67024,38,inst_67022,null];
var inst_67026 = cljs.core.PersistentHashMap.fromArrays(inst_67023,inst_67025);
var inst_67027 = cljs.test.report.call(null,inst_67026);
var state_67193__$1 = state_67193;
var statearr_67704_67928 = state_67193__$1;
(statearr_67704_67928[(2)] = inst_67027);

(statearr_67704_67928[(1)] = (83));


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
var bb_web_ds_tools$persistence_test$state_machine__32391__auto__ = null;
var bb_web_ds_tools$persistence_test$state_machine__32391__auto____0 = (function (){
var statearr_67705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67705[(0)] = bb_web_ds_tools$persistence_test$state_machine__32391__auto__);

(statearr_67705[(1)] = (1));

return statearr_67705;
});
var bb_web_ds_tools$persistence_test$state_machine__32391__auto____1 = (function (state_67193){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_67193);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e67706){var ex__32394__auto__ = e67706;
var statearr_67707_67929 = state_67193;
(statearr_67707_67929[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_67193[(4)]))){
var statearr_67708_67930 = state_67193;
(statearr_67708_67930[(1)] = cljs.core.first((state_67193[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67931 = state_67193;
state_67193 = G__67931;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
bb_web_ds_tools$persistence_test$state_machine__32391__auto__ = function(state_67193){
switch(arguments.length){
case 0:
return bb_web_ds_tools$persistence_test$state_machine__32391__auto____0.call(this);
case 1:
return bb_web_ds_tools$persistence_test$state_machine__32391__auto____1.call(this,state_67193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$persistence_test$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$persistence_test$state_machine__32391__auto____0;
bb_web_ds_tools$persistence_test$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$persistence_test$state_machine__32391__auto____1;
return bb_web_ds_tools$persistence_test$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_67709 = f__32472__auto__();
(statearr_67709[(6)] = c__32471__auto__);

return statearr_67709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta66550","meta66550",-721342320,null)], null);
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66549.cljs$lang$type = true);

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66549.cljs$lang$ctorStr = "bb-web-ds-tools.persistence-test/t_bb_web_ds_tools$persistence_test66549");

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66549.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.persistence-test/t_bb_web_ds_tools$persistence_test66549");
}));

/**
 * Positional factory function for bb-web-ds-tools.persistence-test/t_bb_web_ds_tools$persistence_test66549.
 */
bb_web_ds_tools.persistence_test.__GT_t_bb_web_ds_tools$persistence_test66549 = (function bb_web_ds_tools$persistence_test$__GT_t_bb_web_ds_tools$persistence_test66549(meta66550){
return (new bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66549(meta66550));
});


bb_web_ds_tools.persistence_test.test_sqlite_wasm = (function bb_web_ds_tools$persistence_test$test_sqlite_wasm(){
return cljs.test.test_var(bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$var);
});
bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$test = (function (){
return (new bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66549(null));
});

(bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.persistence_test.test_sqlite_wasm;},new cljs.core.Symbol("bb-web-ds-tools.persistence-test","test-sqlite-wasm","bb-web-ds-tools.persistence-test/test-sqlite-wasm",537405847,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.persistence-test","bb-web-ds-tools.persistence-test",724034039,null),new cljs.core.Symbol(null,"test-sqlite-wasm","test-sqlite-wasm",165441020,null),"bb_web_ds_tools/persistence_test.cljs",26,1,8,8,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.persistence_test.test_sqlite_wasm)?bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.persistence_test.js.map
