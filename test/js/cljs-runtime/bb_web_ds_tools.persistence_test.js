goog.provide('bb_web_ds_tools.persistence_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66566 = (function (meta66567){
this.meta66567 = meta66567;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66568,meta66567__$1){
var self__ = this;
var _66568__$1 = this;
return (new bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66566(meta66567__$1));
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66568){
var self__ = this;
var _66568__$1 = this;
return self__.meta66567;
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66566.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66566.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__66571 = (arguments.length - (1));
switch (G__66571) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66566.prototype.apply = (function (self__,args66570){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args66570)));
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66566.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_67173){
var state_val_67174 = (state_67173[(1)]);
if((state_val_67174 === (65))){
var inst_67069 = (state_67173[(2)]);
var inst_67070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67071 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_67072 = (new cljs.core.PersistentVector(null,1,(5),inst_67070,inst_67071,null));
var inst_67073 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_67072,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Export DB"], 0));
var state_67173__$1 = (function (){var statearr_67178 = state_67173;
(statearr_67178[(7)] = inst_67069);

(statearr_67178[(8)] = inst_67073);

return statearr_67178;
})();
var statearr_67179_67736 = state_67173__$1;
(statearr_67179_67736[(2)] = null);

(statearr_67179_67736[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (70))){
var inst_66932 = (state_67173[(2)]);
var inst_66933 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66934 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null)));
var inst_66935 = ["bb_web_ds_tools/persistence_test.cljs",48,new cljs.core.Keyword(null,"error","error",-978969032),28,36,inst_66934,36,inst_66932,null];
var inst_66936 = cljs.core.PersistentHashMap.fromArrays(inst_66933,inst_66935);
var inst_66937 = cljs.test.report.call(null,inst_66936);
var state_67173__$1 = state_67173;
var statearr_67180_67737 = state_67173__$1;
(statearr_67180_67737[(2)] = inst_66937);

(statearr_67180_67737[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (62))){
var inst_66872 = (state_67173[(9)]);
var inst_66883 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66884 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test",cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)),(1)));
var inst_66885 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66886 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66887 = cljs.core.cons(inst_66886,inst_66872);
var inst_66888 = (new cljs.core.List(null,inst_66887,null,(1),null));
var inst_66889 = (new cljs.core.List(null,inst_66885,inst_66888,(2),null));
var inst_66890 = ["bb_web_ds_tools/persistence_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),26,30,inst_66884,30,inst_66889,"Name matches"];
var inst_66891 = cljs.core.PersistentHashMap.fromArrays(inst_66883,inst_66890);
var inst_66892 = cljs.test.report.call(null,inst_66891);
var state_67173__$1 = state_67173;
var statearr_67181_67738 = state_67173__$1;
(statearr_67181_67738[(2)] = inst_66892);

(statearr_67181_67738[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (74))){
var inst_66946 = (state_67173[(10)]);
var inst_66968 = (state_67173[(2)]);
var _ = (function (){var statearr_67182 = state_67173;
(statearr_67182[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67182;
})();
var state_67173__$1 = (function (){var statearr_67183 = state_67173;
(statearr_67183[(11)] = inst_66968);

return statearr_67183;
})();
var statearr_67184_67739 = state_67173__$1;
(statearr_67184_67739[(2)] = inst_66946);

(statearr_67184_67739[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (7))){
var inst_66611 = (state_67173[(2)]);
var state_67173__$1 = state_67173;
var statearr_67192_67740 = state_67173__$1;
(statearr_67192_67740[(2)] = inst_66611);

(statearr_67192_67740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (59))){
var inst_66858 = (state_67173[(2)]);
var inst_66859 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66860 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test",cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)),(1)));
var inst_66861 = ["bb_web_ds_tools/persistence_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),26,30,inst_66860,30,inst_66858,"Name matches"];
var inst_66862 = cljs.core.PersistentHashMap.fromArrays(inst_66859,inst_66861);
var inst_66863 = cljs.test.report.call(null,inst_66862);
var state_67173__$1 = state_67173;
var statearr_67195_67741 = state_67173__$1;
(statearr_67195_67741[(2)] = inst_66863);

(statearr_67195_67741[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (86))){
var inst_67041 = (state_67173[(12)]);
var inst_67044 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67045 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"data","data",-232669377)], null)));
var inst_67046 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_67047 = cljs.core.cons(inst_67046,inst_67041);
var inst_67048 = ["bb_web_ds_tools/persistence_test.cljs",69,new cljs.core.Keyword(null,"pass","pass",1574159993),28,38,inst_67045,38,inst_67047,null];
var inst_67049 = cljs.core.PersistentHashMap.fromArrays(inst_67044,inst_67048);
var inst_67050 = cljs.test.report.call(null,inst_67049);
var state_67173__$1 = state_67173;
var statearr_67196_67742 = state_67173__$1;
(statearr_67196_67742[(2)] = inst_67050);

(statearr_67196_67742[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (20))){
var inst_66640 = (state_67173[(2)]);
var state_67173__$1 = (function (){var statearr_67197 = state_67173;
(statearr_67197[(13)] = inst_66640);

return statearr_67197;
})();
var statearr_67198_67743 = state_67173__$1;
(statearr_67198_67743[(2)] = null);

(statearr_67198_67743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (72))){
var inst_66945 = (state_67173[(14)]);
var inst_66949 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66950 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null)));
var inst_66951 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66952 = cljs.core.cons(inst_66951,inst_66945);
var inst_66953 = ["bb_web_ds_tools/persistence_test.cljs",48,new cljs.core.Keyword(null,"pass","pass",1574159993),28,36,inst_66950,36,inst_66952,null];
var inst_66954 = cljs.core.PersistentHashMap.fromArrays(inst_66949,inst_66953);
var inst_66955 = cljs.test.report.call(null,inst_66954);
var state_67173__$1 = state_67173;
var statearr_67200_67744 = state_67173__$1;
(statearr_67200_67744[(2)] = inst_66955);

(statearr_67200_67744[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (58))){
var inst_66897 = (state_67173[(2)]);
var _ = (function (){var statearr_67201 = state_67173;
(statearr_67201[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67201;
})();
var state_67173__$1 = state_67173;
var statearr_67202_67745 = state_67173__$1;
(statearr_67202_67745[(2)] = inst_66897);

(statearr_67202_67745[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (60))){
var _ = (function (){var statearr_67203 = state_67173;
(statearr_67203[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67203;
})();
var state_67173__$1 = state_67173;
var ex67199 = (state_67173__$1[(2)]);
var statearr_67204_67746 = state_67173__$1;
(statearr_67204_67746[(5)] = ex67199);


var statearr_67206_67747 = state_67173__$1;
(statearr_67206_67747[(1)] = (59));

(statearr_67206_67747[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (27))){
var inst_66653 = (state_67173[(15)]);
var inst_66675 = (state_67173[(2)]);
var _ = (function (){var statearr_67211 = state_67173;
(statearr_67211[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67211;
})();
var state_67173__$1 = (function (){var statearr_67212 = state_67173;
(statearr_67212[(16)] = inst_66675);

return statearr_67212;
})();
var statearr_67213_67748 = state_67173__$1;
(statearr_67213_67748[(2)] = inst_66653);

(statearr_67213_67748[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (1))){
var state_67173__$1 = state_67173;
var statearr_67220_67749 = state_67173__$1;
(statearr_67220_67749[(2)] = null);

(statearr_67220_67749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (69))){
var inst_66971 = (state_67173[(2)]);
var state_67173__$1 = (function (){var statearr_67223 = state_67173;
(statearr_67223[(17)] = inst_66971);

return statearr_67223;
})();
var statearr_67224_67750 = state_67173__$1;
(statearr_67224_67750[(2)] = null);

(statearr_67224_67750[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (101))){
var inst_67165 = (state_67173[(2)]);
var _ = (function (){var statearr_67228 = state_67173;
(statearr_67228[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67228;
})();
var state_67173__$1 = state_67173;
var statearr_67229_67751 = state_67173__$1;
(statearr_67229_67751[(2)] = inst_67165);

(statearr_67229_67751[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (24))){
var _ = (function (){var statearr_67237 = state_67173;
(statearr_67237[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67237;
})();
var state_67173__$1 = state_67173;
var ex67222 = (state_67173__$1[(2)]);
var statearr_67238_67752 = state_67173__$1;
(statearr_67238_67752[(5)] = ex67222);


var statearr_67239_67753 = state_67173__$1;
(statearr_67239_67753[(1)] = (23));

(statearr_67239_67753[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (102))){
var inst_67122 = (state_67173[(2)]);
var inst_67123 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67124 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_67125 = ["bb_web_ds_tools/persistence_test.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),26,43,inst_67124,43,inst_67122,"Blob is not empty"];
var inst_67126 = cljs.core.PersistentHashMap.fromArrays(inst_67123,inst_67125);
var inst_67127 = cljs.test.report.call(null,inst_67126);
var state_67173__$1 = state_67173;
var statearr_67242_67754 = state_67173__$1;
(statearr_67242_67754[(2)] = inst_67127);

(statearr_67242_67754[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (55))){
var inst_66831 = (state_67173[(18)]);
var inst_66842 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66843 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_66844 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66845 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66846 = cljs.core.cons(inst_66845,inst_66831);
var inst_66847 = (new cljs.core.List(null,inst_66846,null,(1),null));
var inst_66848 = (new cljs.core.List(null,inst_66844,inst_66847,(2),null));
var inst_66849 = ["bb_web_ds_tools/persistence_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),26,29,inst_66843,29,inst_66848,"One row inserted"];
var inst_66850 = cljs.core.PersistentHashMap.fromArrays(inst_66842,inst_66849);
var inst_66851 = cljs.test.report.call(null,inst_66850);
var state_67173__$1 = state_67173;
var statearr_67249_67755 = state_67173__$1;
(statearr_67249_67755[(2)] = inst_66851);

(statearr_67249_67755[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (85))){
var _ = (function (){var statearr_67251 = state_67173;
(statearr_67251[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67251;
})();
var state_67173__$1 = state_67173;
var ex67241 = (state_67173__$1[(2)]);
var statearr_67255_67756 = state_67173__$1;
(statearr_67255_67756[(5)] = ex67241);


var statearr_67256_67757 = state_67173__$1;
(statearr_67256_67757[(1)] = (84));

(statearr_67256_67757[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (39))){
var inst_66743 = (state_67173[(19)]);
var inst_66757 = (state_67173[(20)]);
var inst_66758 = (state_67173[(21)]);
var _ = (function (){var statearr_67264 = state_67173;
(statearr_67264[(4)] = cljs.core.cons((42),(state_67173[(4)])));

return statearr_67264;
})();
var inst_66755 = inst_66743.length;
var inst_66756 = (new cljs.core.List(null,inst_66755,null,(1),null));
var inst_66757__$1 = (new cljs.core.List(null,(1),inst_66756,(2),null));
var inst_66758__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66757__$1);
var state_67173__$1 = (function (){var statearr_67266 = state_67173;
(statearr_67266[(20)] = inst_66757__$1);

(statearr_67266[(21)] = inst_66758__$1);

return statearr_67266;
})();
if(cljs.core.truth_(inst_66758__$1)){
var statearr_67267_67758 = state_67173__$1;
(statearr_67267_67758[(1)] = (43));

} else {
var statearr_67268_67759 = state_67173__$1;
(statearr_67268_67759[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (88))){
var inst_67042 = (state_67173[(22)]);
var inst_67063 = (state_67173[(2)]);
var _ = (function (){var statearr_67269 = state_67173;
(statearr_67269[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67269;
})();
var state_67173__$1 = (function (){var statearr_67270 = state_67173;
(statearr_67270[(23)] = inst_67063);

return statearr_67270;
})();
var statearr_67271_67760 = state_67173__$1;
(statearr_67271_67760[(2)] = inst_67042);

(statearr_67271_67760[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (46))){
var inst_66681 = (state_67173[(24)]);
var _ = (function (){var statearr_67279 = state_67173;
(statearr_67279[(4)] = cljs.core.cons((48),(state_67173[(4)])));

return statearr_67279;
})();
var ___$1 = (function (){var statearr_67280 = state_67173;
(statearr_67280[(4)] = cljs.core.cons((49),(state_67173[(4)])));

return statearr_67280;
})();
var inst_66808 = inst_66681.exec("INSERT INTO datasets VALUES ('1', 'test', 'content', 123)");
var inst_66809 = [new cljs.core.Keyword(null,"returnValue","returnValue",1643246062)];
var inst_66810 = ["resultRows"];
var inst_66811 = cljs.core.PersistentHashMap.fromArrays(inst_66809,inst_66810);
var inst_66815 = cljs.core.clj__GT_js(inst_66811);
var inst_66816 = inst_66681.exec("SELECT * FROM datasets",inst_66815);
var state_67173__$1 = (function (){var statearr_67284 = state_67173;
(statearr_67284[(25)] = inst_66808);

(statearr_67284[(26)] = inst_66816);

return statearr_67284;
})();
var statearr_67285_67761 = state_67173__$1;
(statearr_67285_67761[(2)] = null);

(statearr_67285_67761[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (4))){
var _ = (function (){var statearr_67286 = state_67173;
(statearr_67286[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67286;
})();
var inst_66577 = (state_67173[(2)]);
var inst_66578 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var ___$1 = (function (){var temp__5825__auto__ = (state_67173[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31772__auto__ = temp__5825__auto__;
throw e__31772__auto__;
} else {
return null;
}
})();
var state_67173__$1 = (function (){var statearr_67296 = state_67173;
(statearr_67296[(27)] = inst_66578);

return statearr_67296;
})();
var statearr_67298_67762 = state_67173__$1;
(statearr_67298_67762[(2)] = inst_66577);

(statearr_67298_67762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (77))){
var inst_66972 = (state_67173[(2)]);
var inst_66973 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66974 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"My Dataset",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"name","name",1843675177)], null)));
var inst_66975 = ["bb_web_ds_tools/persistence_test.cljs",73,new cljs.core.Keyword(null,"error","error",-978969032),28,37,inst_66974,37,inst_66972,null];
var inst_66976 = cljs.core.PersistentHashMap.fromArrays(inst_66973,inst_66975);
var inst_66977 = cljs.test.report.call(null,inst_66976);
var state_67173__$1 = state_67173;
var statearr_67299_67763 = state_67173__$1;
(statearr_67299_67763[(2)] = inst_66977);

(statearr_67299_67763[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (106))){
var inst_67136 = (state_67173[(28)]);
var inst_67162 = (state_67173[(2)]);
var _ = (function (){var statearr_67300 = state_67173;
(statearr_67300[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67300;
})();
var state_67173__$1 = (function (){var statearr_67301 = state_67173;
(statearr_67301[(29)] = inst_67162);

return statearr_67301;
})();
var statearr_67308_67767 = state_67173__$1;
(statearr_67308_67767[(2)] = inst_67136);

(statearr_67308_67767[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (95))){
var inst_67088 = (state_67173[(2)]);
var inst_67089 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67090 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_67091 = ["bb_web_ds_tools/persistence_test.cljs",50,new cljs.core.Keyword(null,"error","error",-978969032),26,42,inst_67090,42,inst_67088,"Export returns a Blob"];
var inst_67092 = cljs.core.PersistentHashMap.fromArrays(inst_67089,inst_67091);
var inst_67093 = cljs.test.report.call(null,inst_67092);
var state_67173__$1 = state_67173;
var statearr_67311_67768 = state_67173__$1;
(statearr_67311_67768[(2)] = inst_67093);

(statearr_67311_67768[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (54))){
var inst_66831 = (state_67173[(18)]);
var inst_66834 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66835 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_66836 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66837 = cljs.core.cons(inst_66836,inst_66831);
var inst_66838 = ["bb_web_ds_tools/persistence_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),26,29,inst_66835,29,inst_66837,"One row inserted"];
var inst_66839 = cljs.core.PersistentHashMap.fromArrays(inst_66834,inst_66838);
var inst_66840 = cljs.test.report.call(null,inst_66839);
var state_67173__$1 = state_67173;
var statearr_67315_67769 = state_67173__$1;
(statearr_67315_67769[(2)] = inst_66840);

(statearr_67315_67769[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (92))){
var _ = (function (){var statearr_67325 = state_67173;
(statearr_67325[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67325;
})();
var state_67173__$1 = state_67173;
var ex67310 = (state_67173__$1[(2)]);
var statearr_67326_67770 = state_67173__$1;
(statearr_67326_67770[(5)] = ex67310);


throw ex67310;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (104))){
var inst_67135 = (state_67173[(30)]);
var inst_67138 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67139 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_67140 = new cljs.core.Symbol(null,">",">",1085014381,null);
var inst_67141 = cljs.core.cons(inst_67140,inst_67135);
var inst_67142 = ["bb_web_ds_tools/persistence_test.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),26,43,inst_67139,43,inst_67141,"Blob is not empty"];
var inst_67143 = cljs.core.PersistentHashMap.fromArrays(inst_67138,inst_67142);
var inst_67144 = cljs.test.report.call(null,inst_67143);
var state_67173__$1 = state_67173;
var statearr_67328_67773 = state_67173__$1;
(statearr_67328_67773[(2)] = inst_67144);

(statearr_67328_67773[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (15))){
var inst_66627 = (state_67173[(31)]);
var inst_66630 = cljs.core.ex_data(inst_66627);
var inst_66631 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_66630);
var inst_66632 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66631,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_67173__$1 = state_67173;
var statearr_67330_67774 = state_67173__$1;
(statearr_67330_67774[(2)] = inst_66632);

(statearr_67330_67774[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (48))){
var _ = (function (){var statearr_67331 = state_67173;
(statearr_67331[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67331;
})();
var inst_66792 = (state_67173[(2)]);
var inst_66793 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66794 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66796 = (new cljs.core.PersistentVector(null,1,(5),inst_66793,inst_66794,null));
var inst_66800 = cljs.test.update_current_env_BANG_(inst_66796,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_67173[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31772__auto__ = temp__5825__auto__;
throw e__31772__auto__;
} else {
return null;
}
})();
var state_67173__$1 = (function (){var statearr_67332 = state_67173;
(statearr_67332[(32)] = inst_66800);

return statearr_67332;
})();
var statearr_67333_67775 = state_67173__$1;
(statearr_67333_67775[(2)] = inst_66792);

(statearr_67333_67775[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (50))){
var inst_66816 = (state_67173[(26)]);
var inst_66831 = (state_67173[(18)]);
var inst_66832 = (state_67173[(33)]);
var _ = (function (){var statearr_67345 = state_67173;
(statearr_67345[(4)] = cljs.core.cons((53),(state_67173[(4)])));

return statearr_67345;
})();
var inst_66829 = cljs.core.count(inst_66816);
var inst_66830 = (new cljs.core.List(null,inst_66829,null,(1),null));
var inst_66831__$1 = (new cljs.core.List(null,(1),inst_66830,(2),null));
var inst_66832__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66831__$1);
var state_67173__$1 = (function (){var statearr_67347 = state_67173;
(statearr_67347[(18)] = inst_66831__$1);

(statearr_67347[(33)] = inst_66832__$1);

return statearr_67347;
})();
if(cljs.core.truth_(inst_66832__$1)){
var statearr_67352_67776 = state_67173__$1;
(statearr_67352_67776[(1)] = (54));

} else {
var statearr_67353_67777 = state_67173__$1;
(statearr_67353_67777[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (75))){
var inst_66931 = (state_67173[(34)]);
var inst_66989 = (state_67173[(35)]);
var inst_66990 = (state_67173[(36)]);
var _ = (function (){var statearr_67361 = state_67173;
(statearr_67361[(4)] = cljs.core.cons((78),(state_67173[(4)])));

return statearr_67361;
})();
var inst_66984 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66985 = ["d1",new cljs.core.Keyword(null,"name","name",1843675177)];
var inst_66986 = (new cljs.core.PersistentVector(null,2,(5),inst_66984,inst_66985,null));
var inst_66987 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_66931,inst_66986);
var inst_66988 = (new cljs.core.List(null,inst_66987,null,(1),null));
var inst_66989__$1 = (new cljs.core.List(null,"My Dataset",inst_66988,(2),null));
var inst_66990__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66989__$1);
var state_67173__$1 = (function (){var statearr_67363 = state_67173;
(statearr_67363[(35)] = inst_66989__$1);

(statearr_67363[(36)] = inst_66990__$1);

return statearr_67363;
})();
if(cljs.core.truth_(inst_66990__$1)){
var statearr_67366_67779 = state_67173__$1;
(statearr_67366_67779[(1)] = (79));

} else {
var statearr_67367_67780 = state_67173__$1;
(statearr_67367_67780[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (99))){
var inst_67100 = (state_67173[(37)]);
var inst_67118 = (state_67173[(2)]);
var _ = (function (){var statearr_67369 = state_67173;
(statearr_67369[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67369;
})();
var state_67173__$1 = (function (){var statearr_67371 = state_67173;
(statearr_67371[(38)] = inst_67118);

return statearr_67371;
})();
var statearr_67376_67781 = state_67173__$1;
(statearr_67376_67781[(2)] = inst_67100);

(statearr_67376_67781[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (21))){
var inst_66640 = (state_67173[(13)]);
var inst_66652 = (state_67173[(39)]);
var inst_66653 = (state_67173[(15)]);
var _ = (function (){var statearr_67377 = state_67173;
(statearr_67377[(4)] = cljs.core.cons((24),(state_67173[(4)])));

return statearr_67377;
})();
var inst_66652__$1 = (new cljs.core.List(null,inst_66640,null,(1),null));
var inst_66653__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_66652__$1);
var state_67173__$1 = (function (){var statearr_67390 = state_67173;
(statearr_67390[(39)] = inst_66652__$1);

(statearr_67390[(15)] = inst_66653__$1);

return statearr_67390;
})();
if(cljs.core.truth_(inst_66653__$1)){
var statearr_67392_67783 = state_67173__$1;
(statearr_67392_67783[(1)] = (25));

} else {
var statearr_67393_67784 = state_67173__$1;
(statearr_67393_67784[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (31))){
var _ = (function (){var statearr_67397 = state_67173;
(statearr_67397[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67397;
})();
var state_67173__$1 = state_67173;
var ex67368 = (state_67173__$1[(2)]);
var statearr_67398_67785 = state_67173__$1;
(statearr_67398_67785[(5)] = ex67368);


var statearr_67400_67786 = state_67173__$1;
(statearr_67400_67786[(1)] = (30));

(statearr_67400_67786[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (32))){
var inst_66693 = (state_67173[(40)]);
var inst_66696 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66697 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_66698 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_66699 = cljs.core.cons(inst_66698,inst_66693);
var inst_66700 = ["bb_web_ds_tools/persistence_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),22,19,inst_66697,19,inst_66699,"DB created"];
var inst_66701 = cljs.core.PersistentHashMap.fromArrays(inst_66696,inst_66700);
var inst_66702 = cljs.test.report.call(null,inst_66701);
var state_67173__$1 = state_67173;
var statearr_67401_67788 = state_67173__$1;
(statearr_67401_67788[(2)] = inst_66702);

(statearr_67401_67788[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (40))){
var inst_66783 = (state_67173[(2)]);
var _ = (function (){var statearr_67411 = state_67173;
(statearr_67411[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67411;
})();
var state_67173__$1 = state_67173;
var statearr_67414_67789 = state_67173__$1;
(statearr_67414_67789[(2)] = inst_66783);

(statearr_67414_67789[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (91))){
var _ = (function (){var statearr_67428 = state_67173;
(statearr_67428[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67428;
})();
var inst_67075 = (state_67173[(2)]);
var inst_67076 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67077 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_67078 = (new cljs.core.PersistentVector(null,1,(5),inst_67076,inst_67077,null));
var inst_67079 = cljs.test.update_current_env_BANG_(inst_67078,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_67173[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31772__auto__ = temp__5825__auto__;
throw e__31772__auto__;
} else {
return null;
}
})();
var state_67173__$1 = (function (){var statearr_67433 = state_67173;
(statearr_67433[(41)] = inst_67079);

return statearr_67433;
})();
var statearr_67435_67791 = state_67173__$1;
(statearr_67435_67791[(2)] = inst_67075);

(statearr_67435_67791[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (56))){
var inst_66832 = (state_67173[(33)]);
var inst_66853 = (state_67173[(2)]);
var _ = (function (){var statearr_67437 = state_67173;
(statearr_67437[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67437;
})();
var state_67173__$1 = (function (){var statearr_67438 = state_67173;
(statearr_67438[(42)] = inst_66853);

return statearr_67438;
})();
var statearr_67439_67792 = state_67173__$1;
(statearr_67439_67792[(2)] = inst_66832);

(statearr_67439_67792[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (33))){
var inst_66693 = (state_67173[(40)]);
var inst_66705 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66706 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_66707 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66708 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_66709 = cljs.core.cons(inst_66708,inst_66693);
var inst_66710 = (new cljs.core.List(null,inst_66709,null,(1),null));
var inst_66711 = (new cljs.core.List(null,inst_66707,inst_66710,(2),null));
var inst_66712 = ["bb_web_ds_tools/persistence_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),22,19,inst_66706,19,inst_66711,"DB created"];
var inst_66713 = cljs.core.PersistentHashMap.fromArrays(inst_66705,inst_66712);
var inst_66714 = cljs.test.report.call(null,inst_66713);
var state_67173__$1 = state_67173;
var statearr_67440_67793 = state_67173__$1;
(statearr_67440_67793[(2)] = inst_66714);

(statearr_67440_67793[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (13))){
var _ = (function (){var statearr_67445 = state_67173;
(statearr_67445[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67445;
})();
var state_67173__$1 = state_67173;
var ex67436 = (state_67173__$1[(2)]);
var statearr_67451_67794 = state_67173__$1;
(statearr_67451_67794[(5)] = ex67436);


var statearr_67517_67795 = state_67173__$1;
(statearr_67517_67795[(1)] = (5));

(statearr_67517_67795[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (22))){
var inst_66640 = (state_67173[(13)]);
var inst_66678 = (state_67173[(2)]);
var inst_66679 = inst_66640.oo1;
var inst_66680 = inst_66679.DB;
var inst_66681 = (new inst_66680(":memory:","ct"));
var state_67173__$1 = (function (){var statearr_67553 = state_67173;
(statearr_67553[(43)] = inst_66678);

(statearr_67553[(24)] = inst_66681);

return statearr_67553;
})();
var statearr_67554_67796 = state_67173__$1;
(statearr_67554_67796[(2)] = null);

(statearr_67554_67796[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (90))){
var inst_67168 = (state_67173[(2)]);
var _ = (function (){var statearr_67559 = state_67173;
(statearr_67559[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67559;
})();
var state_67173__$1 = state_67173;
var statearr_67560_67797 = state_67173__$1;
(statearr_67560_67797[(2)] = inst_67168);

(statearr_67560_67797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (36))){
var inst_66786 = (state_67173[(2)]);
var inst_66787 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66788 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66789 = (new cljs.core.PersistentVector(null,1,(5),inst_66787,inst_66788,null));
var inst_66790 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_66789,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Insert and Query Manual"], 0));
var state_67173__$1 = (function (){var statearr_67575 = state_67173;
(statearr_67575[(44)] = inst_66786);

(statearr_67575[(45)] = inst_66790);

return statearr_67575;
})();
var statearr_67576_67798 = state_67173__$1;
(statearr_67576_67798[(2)] = null);

(statearr_67576_67798[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (41))){
var inst_66744 = (state_67173[(2)]);
var inst_66745 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66746 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_66747 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"error","error",-978969032),26,24,inst_66746,24,inst_66744,"datasets table exists"];
var inst_66748 = cljs.core.PersistentHashMap.fromArrays(inst_66745,inst_66747);
var inst_66749 = cljs.test.report.call(null,inst_66748);
var state_67173__$1 = state_67173;
var statearr_67579_67799 = state_67173__$1;
(statearr_67579_67799[(2)] = inst_66749);

(statearr_67579_67799[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (89))){
var inst_66681 = (state_67173[(24)]);
var _ = (function (){var statearr_67581 = state_67173;
(statearr_67581[(4)] = cljs.core.cons((91),(state_67173[(4)])));

return statearr_67581;
})();
var ___$1 = (function (){var statearr_67582 = state_67173;
(statearr_67582[(4)] = cljs.core.cons((92),(state_67173[(4)])));

return statearr_67582;
})();
var inst_67087 = bb_web_ds_tools.workspaces.persistence_fx.export_db(inst_66681);
var state_67173__$1 = (function (){var statearr_67583 = state_67173;
(statearr_67583[(46)] = inst_67087);

return statearr_67583;
})();
var statearr_67584_67800 = state_67173__$1;
(statearr_67584_67800[(2)] = null);

(statearr_67584_67800[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (100))){
var inst_67087 = (state_67173[(46)]);
var inst_67135 = (state_67173[(30)]);
var inst_67136 = (state_67173[(28)]);
var _ = (function (){var statearr_67585 = state_67173;
(statearr_67585[(4)] = cljs.core.cons((103),(state_67173[(4)])));

return statearr_67585;
})();
var inst_67133 = inst_67087.size;
var inst_67134 = (new cljs.core.List(null,(0),null,(1),null));
var inst_67135__$1 = (new cljs.core.List(null,inst_67133,inst_67134,(2),null));
var inst_67136__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,inst_67135__$1);
var state_67173__$1 = (function (){var statearr_67586 = state_67173;
(statearr_67586[(30)] = inst_67135__$1);

(statearr_67586[(28)] = inst_67136__$1);

return statearr_67586;
})();
if(cljs.core.truth_(inst_67136__$1)){
var statearr_67587_67801 = state_67173__$1;
(statearr_67587_67801[(1)] = (104));

} else {
var statearr_67588_67802 = state_67173__$1;
(statearr_67588_67802[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (43))){
var inst_66757 = (state_67173[(20)]);
var inst_66760 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66761 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_66762 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66763 = cljs.core.cons(inst_66762,inst_66757);
var inst_66764 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"pass","pass",1574159993),26,24,inst_66761,24,inst_66763,"datasets table exists"];
var inst_66765 = cljs.core.PersistentHashMap.fromArrays(inst_66760,inst_66764);
var inst_66766 = cljs.test.report.call(null,inst_66765);
var state_67173__$1 = state_67173;
var statearr_67589_67803 = state_67173__$1;
(statearr_67589_67803[(2)] = inst_66766);

(statearr_67589_67803[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (61))){
var inst_66872 = (state_67173[(9)]);
var inst_66875 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66876 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test",cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)),(1)));
var inst_66877 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66878 = cljs.core.cons(inst_66877,inst_66872);
var inst_66879 = ["bb_web_ds_tools/persistence_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),26,30,inst_66876,30,inst_66878,"Name matches"];
var inst_66880 = cljs.core.PersistentHashMap.fromArrays(inst_66875,inst_66879);
var inst_66881 = cljs.test.report.call(null,inst_66880);
var state_67173__$1 = state_67173;
var statearr_67590_67805 = state_67173__$1;
(statearr_67590_67805[(2)] = inst_66881);

(statearr_67590_67805[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (29))){
var inst_66719 = (state_67173[(2)]);
var inst_66720 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66721 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66722 = (new cljs.core.PersistentVector(null,1,(5),inst_66720,inst_66721,null));
var inst_66723 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_66722,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Create Tables"], 0));
var state_67173__$1 = (function (){var statearr_67591 = state_67173;
(statearr_67591[(47)] = inst_66719);

(statearr_67591[(48)] = inst_66723);

return statearr_67591;
})();
var statearr_67592_67806 = state_67173__$1;
(statearr_67592_67806[(2)] = null);

(statearr_67592_67806[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (44))){
var inst_66757 = (state_67173[(20)]);
var inst_66769 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66770 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_66771 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66772 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66773 = cljs.core.cons(inst_66772,inst_66757);
var inst_66774 = (new cljs.core.List(null,inst_66773,null,(1),null));
var inst_66775 = (new cljs.core.List(null,inst_66771,inst_66774,(2),null));
var inst_66776 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"fail","fail",1706214930),26,24,inst_66770,24,inst_66775,"datasets table exists"];
var inst_66777 = cljs.core.PersistentHashMap.fromArrays(inst_66769,inst_66776);
var inst_66778 = cljs.test.report.call(null,inst_66777);
var state_67173__$1 = state_67173;
var statearr_67593_67807 = state_67173__$1;
(statearr_67593_67807[(2)] = inst_66778);

(statearr_67593_67807[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (93))){
var inst_67087 = (state_67173[(46)]);
var inst_67100 = (state_67173[(37)]);
var _ = (function (){var statearr_67594 = state_67173;
(statearr_67594[(4)] = cljs.core.cons((96),(state_67173[(4)])));

return statearr_67594;
})();
var inst_67099 = Blob;
var inst_67100__$1 = (inst_67087 instanceof inst_67099);
var state_67173__$1 = (function (){var statearr_67595 = state_67173;
(statearr_67595[(37)] = inst_67100__$1);

return statearr_67595;
})();
if(cljs.core.truth_(inst_67100__$1)){
var statearr_67596_67809 = state_67173__$1;
(statearr_67596_67809[(1)] = (97));

} else {
var statearr_67597_67810 = state_67173__$1;
(statearr_67597_67810[(1)] = (98));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (6))){
var _ = (function (){var statearr_67598 = state_67173;
(statearr_67598[(4)] = cljs.core.cons((9),(state_67173[(4)])));

return statearr_67598;
})();
var state_67173__$1 = state_67173;
var statearr_67599_67811 = state_67173__$1;
(statearr_67599_67811[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (28))){
var inst_66681 = (state_67173[(24)]);
var inst_66693 = (state_67173[(40)]);
var inst_66694 = (state_67173[(49)]);
var _ = (function (){var statearr_67602 = state_67173;
(statearr_67602[(4)] = cljs.core.cons((31),(state_67173[(4)])));

return statearr_67602;
})();
var inst_66693__$1 = (new cljs.core.List(null,inst_66681,null,(1),null));
var inst_66694__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_66693__$1);
var state_67173__$1 = (function (){var statearr_67603 = state_67173;
(statearr_67603[(40)] = inst_66693__$1);

(statearr_67603[(49)] = inst_66694__$1);

return statearr_67603;
})();
if(cljs.core.truth_(inst_66694__$1)){
var statearr_67604_67812 = state_67173__$1;
(statearr_67604_67812[(1)] = (32));

} else {
var statearr_67605_67813 = state_67173__$1;
(statearr_67605_67813[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (64))){
var inst_66681 = (state_67173[(24)]);
var _ = (function (){var statearr_67606 = state_67173;
(statearr_67606[(4)] = cljs.core.cons((66),(state_67173[(4)])));

return statearr_67606;
})();
var ___$1 = (function (){var statearr_67607 = state_67173;
(statearr_67607[(4)] = cljs.core.cons((67),(state_67173[(4)])));

return statearr_67607;
})();
var inst_66918 = ["d1"];
var inst_66919 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_66920 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66921 = [new cljs.core.Keyword(null,"a","a",-2123407586)];
var inst_66922 = [(1)];
var inst_66923 = cljs.core.PersistentHashMap.fromArrays(inst_66921,inst_66922);
var inst_66924 = [inst_66923];
var inst_66925 = (new cljs.core.PersistentVector(null,1,(5),inst_66920,inst_66924,null));
var inst_66926 = ["My Dataset",inst_66925];
var inst_66927 = cljs.core.PersistentHashMap.fromArrays(inst_66919,inst_66926);
var inst_66928 = [inst_66927];
var inst_66929 = cljs.core.PersistentHashMap.fromArrays(inst_66918,inst_66928);
var inst_66930 = bb_web_ds_tools.workspaces.persistence_fx.persist_datasets_BANG_(inst_66681,inst_66929);
var inst_66931 = bb_web_ds_tools.workspaces.persistence_fx.load_datasets_from_db(inst_66681);
var state_67173__$1 = (function (){var statearr_67608 = state_67173;
(statearr_67608[(50)] = inst_66930);

(statearr_67608[(34)] = inst_66931);

return statearr_67608;
})();
var statearr_67609_67814 = state_67173__$1;
(statearr_67609_67814[(2)] = null);

(statearr_67609_67814[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (103))){
var _ = (function (){var statearr_67610 = state_67173;
(statearr_67610[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67610;
})();
var state_67173__$1 = state_67173;
var ex67601 = (state_67173__$1[(2)]);
var statearr_67611_67815 = state_67173__$1;
(statearr_67611_67815[(5)] = ex67601);


var statearr_67612_67816 = state_67173__$1;
(statearr_67612_67816[(1)] = (102));

(statearr_67612_67816[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (51))){
var inst_66856 = (state_67173[(2)]);
var state_67173__$1 = (function (){var statearr_67613 = state_67173;
(statearr_67613[(51)] = inst_66856);

return statearr_67613;
})();
var statearr_67614_67817 = state_67173__$1;
(statearr_67614_67817[(2)] = null);

(statearr_67614_67817[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (25))){
var inst_66652 = (state_67173[(39)]);
var inst_66655 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66656 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_66657 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_66658 = cljs.core.cons(inst_66657,inst_66652);
var inst_66659 = ["bb_web_ds_tools/persistence_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),20,15,inst_66656,15,inst_66658,"SQLite module loaded"];
var inst_66660 = cljs.core.PersistentHashMap.fromArrays(inst_66655,inst_66659);
var inst_66661 = cljs.test.report.call(null,inst_66660);
var state_67173__$1 = state_67173;
var statearr_67615_67818 = state_67173__$1;
(statearr_67615_67818[(2)] = inst_66661);

(statearr_67615_67818[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (34))){
var inst_66694 = (state_67173[(49)]);
var inst_66716 = (state_67173[(2)]);
var _ = (function (){var statearr_67616 = state_67173;
(statearr_67616[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67616;
})();
var state_67173__$1 = (function (){var statearr_67617 = state_67173;
(statearr_67617[(52)] = inst_66716);

return statearr_67617;
})();
var statearr_67618_67819 = state_67173__$1;
(statearr_67618_67819[(2)] = inst_66694);

(statearr_67618_67819[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (17))){
var inst_66635 = (state_67173[(2)]);
var state_67173__$1 = state_67173;
if(cljs.core.truth_(inst_66635)){
var statearr_67619_67820 = state_67173__$1;
(statearr_67619_67820[(1)] = (18));

} else {
var statearr_67620_67821 = state_67173__$1;
(statearr_67620_67821[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (3))){
var inst_67171 = (state_67173[(2)]);
var state_67173__$1 = state_67173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67173__$1,inst_67171);
} else {
if((state_val_67174 === (12))){
var inst_66608 = (state_67173[(2)]);
var _ = (function (){var statearr_67621 = state_67173;
(statearr_67621[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67621;
})();
var state_67173__$1 = (function (){var statearr_67622 = state_67173;
(statearr_67622[(53)] = inst_66608);

return statearr_67622;
})();
var statearr_67623_67822 = state_67173__$1;
(statearr_67623_67822[(2)] = true);

(statearr_67623_67822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (2))){
var _ = (function (){var statearr_67624 = state_67173;
(statearr_67624[(4)] = cljs.core.cons((4),(state_67173[(4)])));

return statearr_67624;
})();
var ___$1 = (function (){var statearr_67625 = state_67173;
(statearr_67625[(4)] = cljs.core.cons((13),(state_67173[(4)])));

return statearr_67625;
})();
var inst_66618 = [new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.Keyword(null,"printErr","printErr",-1323332006)];
var inst_66619 = (function (){return (function (x){
return console.log("SQLite:",x);
});
})();
var inst_66620 = (function (){return (function (x){
return console.error("SQLite Err:",x);
});
})();
var inst_66621 = [inst_66619,inst_66620];
var inst_66622 = cljs.core.PersistentHashMap.fromArrays(inst_66618,inst_66621);
var inst_66623 = cljs.core.clj__GT_js(inst_66622);
var inst_66624 = shadow.js.shim.module$$sqlite_org$sqlite_wasm.default(inst_66623);
var inst_66625 = cljs.core.async.interop.p__GT_c(inst_66624);
var state_67173__$1 = state_67173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67173__$1,(14),inst_66625);
} else {
if((state_val_67174 === (66))){
var _ = (function (){var statearr_67626 = state_67173;
(statearr_67626[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67626;
})();
var inst_66906 = (state_67173[(2)]);
var inst_66907 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66908 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66909 = (new cljs.core.PersistentVector(null,1,(5),inst_66907,inst_66908,null));
var inst_66910 = cljs.test.update_current_env_BANG_(inst_66909,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_67173[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31772__auto__ = temp__5825__auto__;
throw e__31772__auto__;
} else {
return null;
}
})();
var state_67173__$1 = (function (){var statearr_67627 = state_67173;
(statearr_67627[(54)] = inst_66910);

return statearr_67627;
})();
var statearr_67628_67823 = state_67173__$1;
(statearr_67628_67823[(2)] = inst_66906);

(statearr_67628_67823[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (23))){
var inst_66641 = (state_67173[(2)]);
var inst_66642 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66643 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_66644 = ["bb_web_ds_tools/persistence_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),20,15,inst_66643,15,inst_66641,"SQLite module loaded"];
var inst_66645 = cljs.core.PersistentHashMap.fromArrays(inst_66642,inst_66644);
var inst_66646 = cljs.test.report.call(null,inst_66645);
var state_67173__$1 = state_67173;
var statearr_67629_67824 = state_67173__$1;
(statearr_67629_67824[(2)] = inst_66646);

(statearr_67629_67824[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (47))){
var inst_66900 = (state_67173[(2)]);
var inst_66901 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66902 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66903 = (new cljs.core.PersistentVector(null,1,(5),inst_66901,inst_66902,null));
var inst_66904 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_66903,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Persist Datasets"], 0));
var state_67173__$1 = (function (){var statearr_67630 = state_67173;
(statearr_67630[(55)] = inst_66900);

(statearr_67630[(56)] = inst_66904);

return statearr_67630;
})();
var statearr_67631_67825 = state_67173__$1;
(statearr_67631_67825[(2)] = null);

(statearr_67631_67825[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (35))){
var inst_66681 = (state_67173[(24)]);
var _ = (function (){var statearr_67632 = state_67173;
(statearr_67632[(4)] = cljs.core.cons((37),(state_67173[(4)])));

return statearr_67632;
})();
var ___$1 = (function (){var statearr_67633 = state_67173;
(statearr_67633[(4)] = cljs.core.cons((38),(state_67173[(4)])));

return statearr_67633;
})();
var inst_66738 = bb_web_ds_tools.workspaces.persistence_fx.create_tables_BANG_(inst_66681);
var inst_66739 = [new cljs.core.Keyword(null,"returnValue","returnValue",1643246062)];
var inst_66740 = ["resultRows"];
var inst_66741 = cljs.core.PersistentHashMap.fromArrays(inst_66739,inst_66740);
var inst_66742 = cljs.core.clj__GT_js(inst_66741);
var inst_66743 = inst_66681.exec("SELECT name FROM sqlite_master WHERE type='table' AND name='datasets'",inst_66742);
var state_67173__$1 = (function (){var statearr_67634 = state_67173;
(statearr_67634[(57)] = inst_66738);

(statearr_67634[(19)] = inst_66743);

return statearr_67634;
})();
var statearr_67635_67827 = state_67173__$1;
(statearr_67635_67827[(2)] = null);

(statearr_67635_67827[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (82))){
var inst_66931 = (state_67173[(34)]);
var inst_67041 = (state_67173[(12)]);
var inst_67042 = (state_67173[(22)]);
var _ = (function (){var statearr_67636 = state_67173;
(statearr_67636[(4)] = cljs.core.cons((85),(state_67173[(4)])));

return statearr_67636;
})();
var inst_67030 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67031 = [new cljs.core.Keyword(null,"a","a",-2123407586)];
var inst_67032 = [(1)];
var inst_67033 = cljs.core.PersistentHashMap.fromArrays(inst_67031,inst_67032);
var inst_67034 = [inst_67033];
var inst_67035 = (new cljs.core.PersistentVector(null,1,(5),inst_67030,inst_67034,null));
var inst_67036 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67037 = ["d1",new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_67038 = (new cljs.core.PersistentVector(null,2,(5),inst_67036,inst_67037,null));
var inst_67039 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_66931,inst_67038);
var inst_67040 = (new cljs.core.List(null,inst_67039,null,(1),null));
var inst_67041__$1 = (new cljs.core.List(null,inst_67035,inst_67040,(2),null));
var inst_67042__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_67041__$1);
var state_67173__$1 = (function (){var statearr_67637 = state_67173;
(statearr_67637[(12)] = inst_67041__$1);

(statearr_67637[(22)] = inst_67042__$1);

return statearr_67637;
})();
if(cljs.core.truth_(inst_67042__$1)){
var statearr_67638_67831 = state_67173__$1;
(statearr_67638_67831[(1)] = (86));

} else {
var statearr_67639_67832 = state_67173__$1;
(statearr_67639_67832[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (76))){
var inst_67018 = (state_67173[(2)]);
var state_67173__$1 = (function (){var statearr_67640 = state_67173;
(statearr_67640[(58)] = inst_67018);

return statearr_67640;
})();
var statearr_67641_67834 = state_67173__$1;
(statearr_67641_67834[(2)] = null);

(statearr_67641_67834[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (97))){
var inst_67087 = (state_67173[(46)]);
var inst_67102 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67103 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_67104 = cljs.core.type(inst_67087);
var inst_67105 = ["bb_web_ds_tools/persistence_test.cljs",50,new cljs.core.Keyword(null,"pass","pass",1574159993),26,42,inst_67103,42,inst_67104,"Export returns a Blob"];
var inst_67106 = cljs.core.PersistentHashMap.fromArrays(inst_67102,inst_67105);
var inst_67107 = cljs.test.report.call(null,inst_67106);
var state_67173__$1 = state_67173;
var statearr_67642_67835 = state_67173__$1;
(statearr_67642_67835[(2)] = inst_67107);

(statearr_67642_67835[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (19))){
var inst_66627 = (state_67173[(31)]);
var state_67173__$1 = state_67173;
var statearr_67643_67836 = state_67173__$1;
(statearr_67643_67836[(2)] = inst_66627);

(statearr_67643_67836[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (57))){
var inst_66816 = (state_67173[(26)]);
var inst_66872 = (state_67173[(9)]);
var inst_66873 = (state_67173[(59)]);
var _ = (function (){var statearr_67647 = state_67173;
(statearr_67647[(4)] = cljs.core.cons((60),(state_67173[(4)])));

return statearr_67647;
})();
var inst_66869 = cljs.core.first(inst_66816);
var inst_66870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_66869,(1));
var inst_66871 = (new cljs.core.List(null,inst_66870,null,(1),null));
var inst_66872__$1 = (new cljs.core.List(null,"test",inst_66871,(2),null));
var inst_66873__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66872__$1);
var state_67173__$1 = (function (){var statearr_67648 = state_67173;
(statearr_67648[(9)] = inst_66872__$1);

(statearr_67648[(59)] = inst_66873__$1);

return statearr_67648;
})();
if(cljs.core.truth_(inst_66873__$1)){
var statearr_67649_67837 = state_67173__$1;
(statearr_67649_67837[(1)] = (61));

} else {
var statearr_67650_67838 = state_67173__$1;
(statearr_67650_67838[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (68))){
var inst_66931 = (state_67173[(34)]);
var inst_66945 = (state_67173[(14)]);
var inst_66946 = (state_67173[(10)]);
var _ = (function (){var statearr_67652 = state_67173;
(statearr_67652[(4)] = cljs.core.cons((71),(state_67173[(4)])));

return statearr_67652;
})();
var inst_66943 = cljs.core.count(inst_66931);
var inst_66944 = (new cljs.core.List(null,inst_66943,null,(1),null));
var inst_66945__$1 = (new cljs.core.List(null,(1),inst_66944,(2),null));
var inst_66946__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66945__$1);
var state_67173__$1 = (function (){var statearr_67653 = state_67173;
(statearr_67653[(14)] = inst_66945__$1);

(statearr_67653[(10)] = inst_66946__$1);

return statearr_67653;
})();
if(cljs.core.truth_(inst_66946__$1)){
var statearr_67654_67839 = state_67173__$1;
(statearr_67654_67839[(1)] = (72));

} else {
var statearr_67655_67840 = state_67173__$1;
(statearr_67655_67840[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (11))){
var inst_66602 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66603 = true;
var inst_66604 = [null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,inst_66603,null,true,"Skipping SQLite tests due to environment limitations"];
var inst_66605 = cljs.core.PersistentHashMap.fromArrays(inst_66602,inst_66604);
var inst_66606 = cljs.test.report.call(null,inst_66605);
var state_67173__$1 = state_67173;
var statearr_67656_67841 = state_67173__$1;
(statearr_67656_67841[(2)] = inst_66606);

(statearr_67656_67841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (9))){
var _ = (function (){var statearr_67657 = state_67173;
(statearr_67657[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67657;
})();
var state_67173__$1 = state_67173;
var ex67651 = (state_67173__$1[(2)]);
var statearr_67658_67842 = state_67173__$1;
(statearr_67658_67842[(5)] = ex67651);


var statearr_67659_67843 = state_67173__$1;
(statearr_67659_67843[(1)] = (8));

(statearr_67659_67843[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (5))){
var inst_66581 = (state_67173[(2)]);
var inst_66582 = inst_66581.message;
var inst_66583 = console.warn("SQLite WASM initialization failed (expected if WASM assets are missing in test env):",inst_66582);
var state_67173__$1 = (function (){var statearr_67660 = state_67173;
(statearr_67660[(60)] = inst_66583);

return statearr_67660;
})();
var statearr_67661_67844 = state_67173__$1;
(statearr_67661_67844[(2)] = null);

(statearr_67661_67844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (83))){
var inst_67066 = (state_67173[(2)]);
var _ = (function (){var statearr_67662 = state_67173;
(statearr_67662[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67662;
})();
var state_67173__$1 = state_67173;
var statearr_67663_67845 = state_67173__$1;
(statearr_67663_67845[(2)] = inst_67066);

(statearr_67663_67845[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (14))){
var inst_66627 = (state_67173[(31)]);
var inst_66628 = (state_67173[(61)]);
var inst_66627__$1 = (state_67173[(2)]);
var inst_66628__$1 = (inst_66627__$1 instanceof cljs.core.ExceptionInfo);
var state_67173__$1 = (function (){var statearr_67665 = state_67173;
(statearr_67665[(31)] = inst_66627__$1);

(statearr_67665[(61)] = inst_66628__$1);

return statearr_67665;
})();
if(cljs.core.truth_(inst_66628__$1)){
var statearr_67666_67846 = state_67173__$1;
(statearr_67666_67846[(1)] = (15));

} else {
var statearr_67667_67847 = state_67173__$1;
(statearr_67667_67847[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (45))){
var inst_66758 = (state_67173[(21)]);
var inst_66780 = (state_67173[(2)]);
var _ = (function (){var statearr_67669 = state_67173;
(statearr_67669[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67669;
})();
var state_67173__$1 = (function (){var statearr_67670 = state_67173;
(statearr_67670[(62)] = inst_66780);

return statearr_67670;
})();
var statearr_67671_67848 = state_67173__$1;
(statearr_67671_67848[(2)] = inst_66758);

(statearr_67671_67848[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (53))){
var _ = (function (){var statearr_67672 = state_67173;
(statearr_67672[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67672;
})();
var state_67173__$1 = state_67173;
var ex67664 = (state_67173__$1[(2)]);
var statearr_67673_67850 = state_67173__$1;
(statearr_67673_67850[(5)] = ex67664);


var statearr_67674_67851 = state_67173__$1;
(statearr_67674_67851[(1)] = (52));

(statearr_67674_67851[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (78))){
var _ = (function (){var statearr_67675 = state_67173;
(statearr_67675[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67675;
})();
var state_67173__$1 = state_67173;
var ex67668 = (state_67173__$1[(2)]);
var statearr_67676_67852 = state_67173__$1;
(statearr_67676_67852[(5)] = ex67668);


var statearr_67677_67853 = state_67173__$1;
(statearr_67677_67853[(1)] = (77));

(statearr_67677_67853[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (26))){
var inst_66652 = (state_67173[(39)]);
var inst_66663 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66664 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_66665 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66667 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_66668 = cljs.core.cons(inst_66667,inst_66652);
var inst_66669 = (new cljs.core.List(null,inst_66668,null,(1),null));
var inst_66670 = (new cljs.core.List(null,inst_66665,inst_66669,(2),null));
var inst_66671 = ["bb_web_ds_tools/persistence_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),20,15,inst_66664,15,inst_66670,"SQLite module loaded"];
var inst_66672 = cljs.core.PersistentHashMap.fromArrays(inst_66663,inst_66671);
var inst_66673 = cljs.test.report.call(null,inst_66672);
var state_67173__$1 = state_67173;
var statearr_67678_67854 = state_67173__$1;
(statearr_67678_67854[(2)] = inst_66673);

(statearr_67678_67854[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (16))){
var inst_66628 = (state_67173[(61)]);
var state_67173__$1 = state_67173;
var statearr_67679_67855 = state_67173__$1;
(statearr_67679_67855[(2)] = inst_66628);

(statearr_67679_67855[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (81))){
var inst_66990 = (state_67173[(36)]);
var inst_67015 = (state_67173[(2)]);
var _ = (function (){var statearr_67681 = state_67173;
(statearr_67681[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67681;
})();
var state_67173__$1 = (function (){var statearr_67682 = state_67173;
(statearr_67682[(63)] = inst_67015);

return statearr_67682;
})();
var statearr_67683_67857 = state_67173__$1;
(statearr_67683_67857[(2)] = inst_66990);

(statearr_67683_67857[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (79))){
var inst_66989 = (state_67173[(35)]);
var inst_66992 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66993 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"My Dataset",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"name","name",1843675177)], null)));
var inst_66994 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66995 = cljs.core.cons(inst_66994,inst_66989);
var inst_66996 = ["bb_web_ds_tools/persistence_test.cljs",73,new cljs.core.Keyword(null,"pass","pass",1574159993),28,37,inst_66993,37,inst_66995,null];
var inst_66997 = cljs.core.PersistentHashMap.fromArrays(inst_66992,inst_66996);
var inst_66998 = cljs.test.report.call(null,inst_66997);
var state_67173__$1 = state_67173;
var statearr_67684_67858 = state_67173__$1;
(statearr_67684_67858[(2)] = inst_66998);

(statearr_67684_67858[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (38))){
var _ = (function (){var statearr_67685 = state_67173;
(statearr_67685[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67685;
})();
var state_67173__$1 = state_67173;
var ex67680 = (state_67173__$1[(2)]);
var statearr_67686_67859 = state_67173__$1;
(statearr_67686_67859[(5)] = ex67680);


throw ex67680;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (98))){
var inst_67087 = (state_67173[(46)]);
var inst_67109 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67111 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_67113 = cljs.core.type(inst_67087);
var inst_67114 = ["bb_web_ds_tools/persistence_test.cljs",50,new cljs.core.Keyword(null,"fail","fail",1706214930),26,42,inst_67111,42,inst_67113,"Export returns a Blob"];
var inst_67115 = cljs.core.PersistentHashMap.fromArrays(inst_67109,inst_67114);
var inst_67116 = cljs.test.report.call(null,inst_67115);
var state_67173__$1 = state_67173;
var statearr_67687_67860 = state_67173__$1;
(statearr_67687_67860[(2)] = inst_67116);

(statearr_67687_67860[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (87))){
var inst_67041 = (state_67173[(12)]);
var inst_67052 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67053 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"data","data",-232669377)], null)));
var inst_67054 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_67055 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_67056 = cljs.core.cons(inst_67055,inst_67041);
var inst_67057 = (new cljs.core.List(null,inst_67056,null,(1),null));
var inst_67058 = (new cljs.core.List(null,inst_67054,inst_67057,(2),null));
var inst_67059 = ["bb_web_ds_tools/persistence_test.cljs",69,new cljs.core.Keyword(null,"fail","fail",1706214930),28,38,inst_67053,38,inst_67058,null];
var inst_67060 = cljs.core.PersistentHashMap.fromArrays(inst_67052,inst_67059);
var inst_67061 = cljs.test.report.call(null,inst_67060);
var state_67173__$1 = state_67173;
var statearr_67688_67861 = state_67173__$1;
(statearr_67688_67861[(2)] = inst_67061);

(statearr_67688_67861[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (30))){
var inst_66682 = (state_67173[(2)]);
var inst_66683 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66684 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_66685 = ["bb_web_ds_tools/persistence_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),22,19,inst_66684,19,inst_66682,"DB created"];
var inst_66686 = cljs.core.PersistentHashMap.fromArrays(inst_66683,inst_66685);
var inst_66687 = cljs.test.report.call(null,inst_66686);
var state_67173__$1 = state_67173;
var statearr_67690_67862 = state_67173__$1;
(statearr_67690_67862[(2)] = inst_66687);

(statearr_67690_67862[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (73))){
var inst_66945 = (state_67173[(14)]);
var inst_66957 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66958 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null)));
var inst_66959 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66960 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66961 = cljs.core.cons(inst_66960,inst_66945);
var inst_66962 = (new cljs.core.List(null,inst_66961,null,(1),null));
var inst_66963 = (new cljs.core.List(null,inst_66959,inst_66962,(2),null));
var inst_66964 = ["bb_web_ds_tools/persistence_test.cljs",48,new cljs.core.Keyword(null,"fail","fail",1706214930),28,36,inst_66958,36,inst_66963,null];
var inst_66965 = cljs.core.PersistentHashMap.fromArrays(inst_66957,inst_66964);
var inst_66966 = cljs.test.report.call(null,inst_66965);
var state_67173__$1 = state_67173;
var statearr_67692_67863 = state_67173__$1;
(statearr_67692_67863[(2)] = inst_66966);

(statearr_67692_67863[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (96))){
var _ = (function (){var statearr_67693 = state_67173;
(statearr_67693[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67693;
})();
var state_67173__$1 = state_67173;
var ex67689 = (state_67173__$1[(2)]);
var statearr_67694_67864 = state_67173__$1;
(statearr_67694_67864[(5)] = ex67689);


var statearr_67695_67865 = state_67173__$1;
(statearr_67695_67865[(1)] = (95));

(statearr_67695_67865[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (10))){
var inst_66596 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66597 = true;
var inst_66598 = [null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,inst_66597,null,true,"Skipping SQLite tests due to environment limitations"];
var inst_66599 = cljs.core.PersistentHashMap.fromArrays(inst_66596,inst_66598);
var inst_66600 = cljs.test.report.call(null,inst_66599);
var state_67173__$1 = state_67173;
var statearr_67696_67866 = state_67173__$1;
(statearr_67696_67866[(2)] = inst_66600);

(statearr_67696_67866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (18))){
var inst_66627 = (state_67173[(31)]);
var inst_66637 = (function(){throw inst_66627})();
var state_67173__$1 = state_67173;
var statearr_67697_67867 = state_67173__$1;
(statearr_67697_67867[(2)] = inst_66637);

(statearr_67697_67867[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (105))){
var inst_67135 = (state_67173[(30)]);
var inst_67146 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67147 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_67148 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_67149 = new cljs.core.Symbol(null,">",">",1085014381,null);
var inst_67150 = cljs.core.cons(inst_67149,inst_67135);
var inst_67156 = (new cljs.core.List(null,inst_67150,null,(1),null));
var inst_67157 = (new cljs.core.List(null,inst_67148,inst_67156,(2),null));
var inst_67158 = ["bb_web_ds_tools/persistence_test.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),26,43,inst_67147,43,inst_67157,"Blob is not empty"];
var inst_67159 = cljs.core.PersistentHashMap.fromArrays(inst_67146,inst_67158);
var inst_67160 = cljs.test.report.call(null,inst_67159);
var state_67173__$1 = state_67173;
var statearr_67699_67869 = state_67173__$1;
(statearr_67699_67869[(2)] = inst_67160);

(statearr_67699_67869[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (52))){
var inst_66817 = (state_67173[(2)]);
var inst_66819 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66820 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_66821 = ["bb_web_ds_tools/persistence_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),26,29,inst_66820,29,inst_66817,"One row inserted"];
var inst_66822 = cljs.core.PersistentHashMap.fromArrays(inst_66819,inst_66821);
var inst_66823 = cljs.test.report.call(null,inst_66822);
var state_67173__$1 = state_67173;
var statearr_67701_67870 = state_67173__$1;
(statearr_67701_67870[(2)] = inst_66823);

(statearr_67701_67870[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (67))){
var _ = (function (){var statearr_67703 = state_67173;
(statearr_67703[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67703;
})();
var state_67173__$1 = state_67173;
var ex67698 = (state_67173__$1[(2)]);
var statearr_67704_67871 = state_67173__$1;
(statearr_67704_67871[(5)] = ex67698);


throw ex67698;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (71))){
var _ = (function (){var statearr_67705 = state_67173;
(statearr_67705[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67705;
})();
var state_67173__$1 = state_67173;
var ex67700 = (state_67173__$1[(2)]);
var statearr_67706_67872 = state_67173__$1;
(statearr_67706_67872[(5)] = ex67700);


var statearr_67707_67873 = state_67173__$1;
(statearr_67707_67873[(1)] = (70));

(statearr_67707_67873[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (42))){
var _ = (function (){var statearr_67708 = state_67173;
(statearr_67708[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67708;
})();
var state_67173__$1 = state_67173;
var ex67702 = (state_67173__$1[(2)]);
var statearr_67709_67874 = state_67173__$1;
(statearr_67709_67874[(5)] = ex67702);


var statearr_67710_67875 = state_67173__$1;
(statearr_67710_67875[(1)] = (41));

(statearr_67710_67875[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (80))){
var inst_66989 = (state_67173[(35)]);
var inst_67000 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67001 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"My Dataset",cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"name","name",1843675177)], null)));
var inst_67002 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_67003 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_67004 = cljs.core.cons(inst_67003,inst_66989);
var inst_67005 = (new cljs.core.List(null,inst_67004,null,(1),null));
var inst_67006 = (new cljs.core.List(null,inst_67002,inst_67005,(2),null));
var inst_67007 = ["bb_web_ds_tools/persistence_test.cljs",73,new cljs.core.Keyword(null,"fail","fail",1706214930),28,37,inst_67001,37,inst_67006,null];
var inst_67008 = cljs.core.PersistentHashMap.fromArrays(inst_67000,inst_67007);
var inst_67013 = cljs.test.report.call(null,inst_67008);
var state_67173__$1 = state_67173;
var statearr_67711_67876 = state_67173__$1;
(statearr_67711_67876[(2)] = inst_67013);

(statearr_67711_67876[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (37))){
var _ = (function (){var statearr_67712 = state_67173;
(statearr_67712[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67712;
})();
var inst_66725 = (state_67173[(2)]);
var inst_66727 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66728 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_66729 = (new cljs.core.PersistentVector(null,1,(5),inst_66727,inst_66728,null));
var inst_66730 = cljs.test.update_current_env_BANG_(inst_66729,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_67173[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31772__auto__ = temp__5825__auto__;
throw e__31772__auto__;
} else {
return null;
}
})();
var state_67173__$1 = (function (){var statearr_67713 = state_67173;
(statearr_67713[(64)] = inst_66730);

return statearr_67713;
})();
var statearr_67714_67877 = state_67173__$1;
(statearr_67714_67877[(2)] = inst_66725);

(statearr_67714_67877[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (63))){
var inst_66873 = (state_67173[(59)]);
var inst_66894 = (state_67173[(2)]);
var _ = (function (){var statearr_67715 = state_67173;
(statearr_67715[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67715;
})();
var state_67173__$1 = (function (){var statearr_67716 = state_67173;
(statearr_67716[(65)] = inst_66894);

return statearr_67716;
})();
var statearr_67717_67878 = state_67173__$1;
(statearr_67717_67878[(2)] = inst_66873);

(statearr_67717_67878[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (94))){
var inst_67121 = (state_67173[(2)]);
var state_67173__$1 = (function (){var statearr_67720 = state_67173;
(statearr_67720[(66)] = inst_67121);

return statearr_67720;
})();
var statearr_67721_67879 = state_67173__$1;
(statearr_67721_67879[(2)] = null);

(statearr_67721_67879[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (8))){
var inst_66584 = (state_67173[(2)]);
var inst_66585 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66586 = true;
var inst_66587 = [null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,inst_66586,null,inst_66584,"Skipping SQLite tests due to environment limitations"];
var inst_66588 = cljs.core.PersistentHashMap.fromArrays(inst_66585,inst_66587);
var inst_66589 = cljs.test.report.call(null,inst_66588);
var state_67173__$1 = state_67173;
var statearr_67722_67880 = state_67173__$1;
(statearr_67722_67880[(2)] = inst_66589);

(statearr_67722_67880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (49))){
var _ = (function (){var statearr_67723 = state_67173;
(statearr_67723[(4)] = cljs.core.rest((state_67173[(4)])));

return statearr_67723;
})();
var state_67173__$1 = state_67173;
var ex67718 = (state_67173__$1[(2)]);
var statearr_67725_67881 = state_67173__$1;
(statearr_67725_67881[(5)] = ex67718);


throw ex67718;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67174 === (84))){
var inst_67019 = (state_67173[(2)]);
var inst_67020 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67021 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d1",new cljs.core.Keyword(null,"data","data",-232669377)], null)));
var inst_67022 = ["bb_web_ds_tools/persistence_test.cljs",69,new cljs.core.Keyword(null,"error","error",-978969032),28,38,inst_67021,38,inst_67019,null];
var inst_67023 = cljs.core.PersistentHashMap.fromArrays(inst_67020,inst_67022);
var inst_67024 = cljs.test.report.call(null,inst_67023);
var state_67173__$1 = state_67173;
var statearr_67726_67882 = state_67173__$1;
(statearr_67726_67882[(2)] = inst_67024);

(statearr_67726_67882[(1)] = (83));


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
var bb_web_ds_tools$persistence_test$state_machine__32540__auto__ = null;
var bb_web_ds_tools$persistence_test$state_machine__32540__auto____0 = (function (){
var statearr_67727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67727[(0)] = bb_web_ds_tools$persistence_test$state_machine__32540__auto__);

(statearr_67727[(1)] = (1));

return statearr_67727;
});
var bb_web_ds_tools$persistence_test$state_machine__32540__auto____1 = (function (state_67173){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_67173);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e67728){var ex__32543__auto__ = e67728;
var statearr_67729_67883 = state_67173;
(statearr_67729_67883[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_67173[(4)]))){
var statearr_67730_67884 = state_67173;
(statearr_67730_67884[(1)] = cljs.core.first((state_67173[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67885 = state_67173;
state_67173 = G__67885;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
bb_web_ds_tools$persistence_test$state_machine__32540__auto__ = function(state_67173){
switch(arguments.length){
case 0:
return bb_web_ds_tools$persistence_test$state_machine__32540__auto____0.call(this);
case 1:
return bb_web_ds_tools$persistence_test$state_machine__32540__auto____1.call(this,state_67173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$persistence_test$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$persistence_test$state_machine__32540__auto____0;
bb_web_ds_tools$persistence_test$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$persistence_test$state_machine__32540__auto____1;
return bb_web_ds_tools$persistence_test$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_67733 = f__32611__auto__();
(statearr_67733[(6)] = c__32610__auto__);

return statearr_67733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta66567","meta66567",499401525,null)], null);
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66566.cljs$lang$type = true);

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66566.cljs$lang$ctorStr = "bb-web-ds-tools.persistence-test/t_bb_web_ds_tools$persistence_test66566");

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66566.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.persistence-test/t_bb_web_ds_tools$persistence_test66566");
}));

/**
 * Positional factory function for bb-web-ds-tools.persistence-test/t_bb_web_ds_tools$persistence_test66566.
 */
bb_web_ds_tools.persistence_test.__GT_t_bb_web_ds_tools$persistence_test66566 = (function bb_web_ds_tools$persistence_test$__GT_t_bb_web_ds_tools$persistence_test66566(meta66567){
return (new bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66566(meta66567));
});


bb_web_ds_tools.persistence_test.test_sqlite_wasm = (function bb_web_ds_tools$persistence_test$test_sqlite_wasm(){
return cljs.test.test_var(bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$var);
});
bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$test = (function (){
return (new bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test66566(null));
});

(bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.persistence_test.test_sqlite_wasm;},new cljs.core.Symbol("bb-web-ds-tools.persistence-test","test-sqlite-wasm","bb-web-ds-tools.persistence-test/test-sqlite-wasm",537405847,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.persistence-test","bb-web-ds-tools.persistence-test",724034039,null),new cljs.core.Symbol(null,"test-sqlite-wasm","test-sqlite-wasm",165441020,null),"bb_web_ds_tools/persistence_test.cljs",26,1,8,8,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.persistence_test.test_sqlite_wasm)?bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.persistence_test.js.map
