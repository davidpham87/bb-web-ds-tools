goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62916 = (function (meta62917){
this.meta62917 = meta62917;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62918,meta62917__$1){
var self__ = this;
var _62918__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62916(meta62917__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62918){
var self__ = this;
var _62918__$1 = this;
return self__.meta62917;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62916.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62916.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__62920 = (arguments.length - (1));
switch (G__62920) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62916.prototype.apply = (function (self__,args62919){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args62919)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62916.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_63088){
var state_val_63089 = (state_63088[(1)]);
if((state_val_63089 === (7))){
var inst_62936 = (state_63088[(2)]);
var inst_62937 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62938 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62939 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_62938,19,inst_62936,"Buffer should not flush automatically without timer"];
var inst_62940 = cljs.core.PersistentHashMap.fromArrays(inst_62937,inst_62939);
var inst_62941 = cljs.test.report.call(null,inst_62940);
var state_63088__$1 = state_63088;
var statearr_63094_63648 = state_63088__$1;
(statearr_63094_63648[(2)] = inst_62941);

(statearr_63094_63648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (20))){
var inst_62928 = (state_63088[(7)]);
var inst_63025 = (state_63088[(2)]);
var inst_63026 = (inst_62928.cljs$core$IFn$_invoke$arity$0 ? inst_62928.cljs$core$IFn$_invoke$arity$0() : inst_62928.call(null));
var inst_63027 = cljs.core.async.timeout((20));
var state_63088__$1 = (function (){var statearr_63095 = state_63088;
(statearr_63095[(8)] = inst_63025);

(statearr_63095[(9)] = inst_63026);

return statearr_63095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63088__$1,(21),inst_63027);
} else {
if((state_val_63089 === (27))){
var inst_63059 = (state_63088[(10)]);
var inst_63071 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63072 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63073 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63074 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63075 = cljs.core.cons(inst_63074,inst_63059);
var inst_63076 = (new cljs.core.List(null,inst_63075,null,(1),null));
var inst_63077 = (new cljs.core.List(null,inst_63073,inst_63076,(2),null));
var inst_63078 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_63072,29,inst_63077,"Subsequent flush should work"];
var inst_63079 = cljs.core.PersistentHashMap.fromArrays(inst_63071,inst_63078);
var inst_63080 = cljs.test.report.call(null,inst_63079);
var state_63088__$1 = state_63088;
var statearr_63096_63649 = state_63088__$1;
(statearr_63096_63649[(2)] = inst_63080);

(statearr_63096_63649[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (1))){
var inst_62921 = (state_63088[(11)]);
var inst_62923 = (state_63088[(12)]);
var inst_62921__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_62922 = cljs.core.PersistentVector.EMPTY;
var inst_62923__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_62922);
var inst_62924 = (function (){var input_ch = inst_62921__$1;
var results = inst_62923__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_62925 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_62926 = [inst_62921__$1,inst_62924];
var inst_62927 = cljs.core.PersistentHashMap.fromArrays(inst_62925,inst_62926);
var inst_62928 = bb_web_ds_tools.components.async_buffer.create(inst_62927);
var state_63088__$1 = (function (){var statearr_63098 = state_63088;
(statearr_63098[(11)] = inst_62921__$1);

(statearr_63098[(12)] = inst_62923__$1);

(statearr_63098[(7)] = inst_62928);

return statearr_63098;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63088__$1,(2),inst_62921__$1,(1));
} else {
if((state_val_63089 === (24))){
var inst_63033 = (state_63088[(2)]);
var inst_63034 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63035 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63036 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_63035,29,inst_63033,"Subsequent flush should work"];
var inst_63037 = cljs.core.PersistentHashMap.fromArrays(inst_63034,inst_63036);
var inst_63038 = cljs.test.report.call(null,inst_63037);
var state_63088__$1 = state_63088;
var statearr_63099_63650 = state_63088__$1;
(statearr_63099_63650[(2)] = inst_63038);

(statearr_63099_63650[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (4))){
var inst_62935 = (state_63088[(2)]);
var state_63088__$1 = (function (){var statearr_63101 = state_63088;
(statearr_63101[(13)] = inst_62935);

return statearr_63101;
})();
var statearr_63102_63651 = state_63088__$1;
(statearr_63102_63651[(2)] = null);

(statearr_63102_63651[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (15))){
var inst_62978 = (state_63088[(2)]);
var inst_62979 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62980 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62981 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_62980,24,inst_62978,"Manual flush should flush all items"];
var inst_62982 = cljs.core.PersistentHashMap.fromArrays(inst_62979,inst_62981);
var inst_62983 = cljs.test.report.call(null,inst_62982);
var state_63088__$1 = state_63088;
var statearr_63104_63652 = state_63088__$1;
(statearr_63104_63652[(2)] = inst_62983);

(statearr_63104_63652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (21))){
var inst_63029 = (state_63088[(2)]);
var state_63088__$1 = (function (){var statearr_63105 = state_63088;
(statearr_63105[(14)] = inst_63029);

return statearr_63105;
})();
var statearr_63106_63653 = state_63088__$1;
(statearr_63106_63653[(2)] = null);

(statearr_63106_63653[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (13))){
var inst_62923 = (state_63088[(12)]);
var inst_62997 = (state_63088[(15)]);
var inst_62998 = (state_63088[(16)]);
var _ = (function (){var statearr_63108 = state_63088;
(statearr_63108[(4)] = cljs.core.cons((16),(state_63088[(4)])));

return statearr_63108;
})();
var inst_62989 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62990 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62991 = [(1),(2)];
var inst_62992 = (new cljs.core.PersistentVector(null,2,(5),inst_62990,inst_62991,null));
var inst_62993 = [inst_62992];
var inst_62994 = (new cljs.core.PersistentVector(null,1,(5),inst_62989,inst_62993,null));
var inst_62995 = cljs.core.deref(inst_62923);
var inst_62996 = (new cljs.core.List(null,inst_62995,null,(1),null));
var inst_62997__$1 = (new cljs.core.List(null,inst_62994,inst_62996,(2),null));
var inst_62998__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_62997__$1);
var state_63088__$1 = (function (){var statearr_63109 = state_63088;
(statearr_63109[(15)] = inst_62997__$1);

(statearr_63109[(16)] = inst_62998__$1);

return statearr_63109;
})();
if(cljs.core.truth_(inst_62998__$1)){
var statearr_63114_63654 = state_63088__$1;
(statearr_63114_63654[(1)] = (17));

} else {
var statearr_63116_63655 = state_63088__$1;
(statearr_63116_63655[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (22))){
var inst_62923 = (state_63088[(12)]);
var inst_63059 = (state_63088[(10)]);
var inst_63060 = (state_63088[(17)]);
var _ = (function (){var statearr_63117 = state_63088;
(statearr_63117[(4)] = cljs.core.cons((25),(state_63088[(4)])));

return statearr_63117;
})();
var inst_63044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63046 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63047 = [(1),(2)];
var inst_63048 = (new cljs.core.PersistentVector(null,2,(5),inst_63046,inst_63047,null));
var inst_63049 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63053 = [(3)];
var inst_63054 = (new cljs.core.PersistentVector(null,1,(5),inst_63049,inst_63053,null));
var inst_63055 = [inst_63048,inst_63054];
var inst_63056 = (new cljs.core.PersistentVector(null,2,(5),inst_63044,inst_63055,null));
var inst_63057 = cljs.core.deref(inst_62923);
var inst_63058 = (new cljs.core.List(null,inst_63057,null,(1),null));
var inst_63059__$1 = (new cljs.core.List(null,inst_63056,inst_63058,(2),null));
var inst_63060__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63059__$1);
var state_63088__$1 = (function (){var statearr_63118 = state_63088;
(statearr_63118[(10)] = inst_63059__$1);

(statearr_63118[(17)] = inst_63060__$1);

return statearr_63118;
})();
if(cljs.core.truth_(inst_63060__$1)){
var statearr_63120_63667 = state_63088__$1;
(statearr_63120_63667[(1)] = (26));

} else {
var statearr_63121_63668 = state_63088__$1;
(statearr_63121_63668[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (6))){
var inst_62928 = (state_63088[(7)]);
var inst_62973 = (state_63088[(2)]);
var inst_62974 = (inst_62928.cljs$core$IFn$_invoke$arity$0 ? inst_62928.cljs$core$IFn$_invoke$arity$0() : inst_62928.call(null));
var inst_62975 = cljs.core.async.timeout((20));
var state_63088__$1 = (function (){var statearr_63125 = state_63088;
(statearr_63125[(18)] = inst_62973);

(statearr_63125[(19)] = inst_62974);

return statearr_63125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63088__$1,(12),inst_62975);
} else {
if((state_val_63089 === (28))){
var inst_63060 = (state_63088[(17)]);
var inst_63082 = (state_63088[(2)]);
var _ = (function (){var statearr_63127 = state_63088;
(statearr_63127[(4)] = cljs.core.rest((state_63088[(4)])));

return statearr_63127;
})();
var state_63088__$1 = (function (){var statearr_63130 = state_63088;
(statearr_63130[(20)] = inst_63082);

return statearr_63130;
})();
var statearr_63131_63669 = state_63088__$1;
(statearr_63131_63669[(2)] = inst_63060);

(statearr_63131_63669[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (25))){
var _ = (function (){var statearr_63133 = state_63088;
(statearr_63133[(4)] = cljs.core.rest((state_63088[(4)])));

return statearr_63133;
})();
var state_63088__$1 = state_63088;
var ex63122 = (state_63088__$1[(2)]);
var statearr_63136_63671 = state_63088__$1;
(statearr_63136_63671[(5)] = ex63122);


var statearr_63137_63672 = state_63088__$1;
(statearr_63137_63672[(1)] = (24));

(statearr_63137_63672[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (17))){
var inst_62997 = (state_63088[(15)]);
var inst_63000 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63001 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63002 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63003 = cljs.core.cons(inst_63002,inst_62997);
var inst_63004 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_63001,24,inst_63003,"Manual flush should flush all items"];
var inst_63005 = cljs.core.PersistentHashMap.fromArrays(inst_63000,inst_63004);
var inst_63006 = cljs.test.report.call(null,inst_63005);
var state_63088__$1 = state_63088;
var statearr_63139_63677 = state_63088__$1;
(statearr_63139_63677[(2)] = inst_63006);

(statearr_63139_63677[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (3))){
var inst_62932 = (state_63088[(2)]);
var inst_62933 = cljs.core.async.timeout((20));
var state_63088__$1 = (function (){var statearr_63140 = state_63088;
(statearr_63140[(21)] = inst_62932);

return statearr_63140;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63088__$1,(4),inst_62933);
} else {
if((state_val_63089 === (12))){
var inst_62977 = (state_63088[(2)]);
var state_63088__$1 = (function (){var statearr_63141 = state_63088;
(statearr_63141[(22)] = inst_62977);

return statearr_63141;
})();
var statearr_63142_63678 = state_63088__$1;
(statearr_63142_63678[(2)] = null);

(statearr_63142_63678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (2))){
var inst_62921 = (state_63088[(11)]);
var inst_62930 = (state_63088[(2)]);
var state_63088__$1 = (function (){var statearr_63143 = state_63088;
(statearr_63143[(23)] = inst_62930);

return statearr_63143;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63088__$1,(3),inst_62921,(2));
} else {
if((state_val_63089 === (23))){
var inst_63085 = (state_63088[(2)]);
var inst_63086 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_63088__$1 = (function (){var statearr_63144 = state_63088;
(statearr_63144[(24)] = inst_63085);

return statearr_63144;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63088__$1,inst_63086);
} else {
if((state_val_63089 === (19))){
var inst_62998 = (state_63088[(16)]);
var inst_63019 = (state_63088[(2)]);
var _ = (function (){var statearr_63145 = state_63088;
(statearr_63145[(4)] = cljs.core.rest((state_63088[(4)])));

return statearr_63145;
})();
var state_63088__$1 = (function (){var statearr_63146 = state_63088;
(statearr_63146[(25)] = inst_63019);

return statearr_63146;
})();
var statearr_63147_63679 = state_63088__$1;
(statearr_63147_63679[(2)] = inst_62998);

(statearr_63147_63679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (11))){
var inst_62949 = (state_63088[(26)]);
var inst_62970 = (state_63088[(2)]);
var _ = (function (){var statearr_63148 = state_63088;
(statearr_63148[(4)] = cljs.core.rest((state_63088[(4)])));

return statearr_63148;
})();
var state_63088__$1 = (function (){var statearr_63149 = state_63088;
(statearr_63149[(27)] = inst_62970);

return statearr_63149;
})();
var statearr_63150_63680 = state_63088__$1;
(statearr_63150_63680[(2)] = inst_62949);

(statearr_63150_63680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (9))){
var inst_62948 = (state_63088[(28)]);
var inst_62951 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62952 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62953 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_62954 = cljs.core.cons(inst_62953,inst_62948);
var inst_62955 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_62952,19,inst_62954,"Buffer should not flush automatically without timer"];
var inst_62956 = cljs.core.PersistentHashMap.fromArrays(inst_62951,inst_62955);
var inst_62957 = cljs.test.report.call(null,inst_62956);
var state_63088__$1 = state_63088;
var statearr_63151_63681 = state_63088__$1;
(statearr_63151_63681[(2)] = inst_62957);

(statearr_63151_63681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (5))){
var inst_62923 = (state_63088[(12)]);
var inst_62948 = (state_63088[(28)]);
var inst_62949 = (state_63088[(26)]);
var _ = (function (){var statearr_63152 = state_63088;
(statearr_63152[(4)] = cljs.core.cons((8),(state_63088[(4)])));

return statearr_63152;
})();
var inst_62947 = cljs.core.deref(inst_62923);
var inst_62948__$1 = (new cljs.core.List(null,inst_62947,null,(1),null));
var inst_62949__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_62948__$1);
var state_63088__$1 = (function (){var statearr_63153 = state_63088;
(statearr_63153[(28)] = inst_62948__$1);

(statearr_63153[(26)] = inst_62949__$1);

return statearr_63153;
})();
if(cljs.core.truth_(inst_62949__$1)){
var statearr_63154_63682 = state_63088__$1;
(statearr_63154_63682[(1)] = (9));

} else {
var statearr_63155_63683 = state_63088__$1;
(statearr_63155_63683[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (14))){
var inst_62921 = (state_63088[(11)]);
var inst_63022 = (state_63088[(2)]);
var state_63088__$1 = (function (){var statearr_63157 = state_63088;
(statearr_63157[(29)] = inst_63022);

return statearr_63157;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63088__$1,(20),inst_62921,(3));
} else {
if((state_val_63089 === (26))){
var inst_63059 = (state_63088[(10)]);
var inst_63062 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63064 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63065 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63066 = cljs.core.cons(inst_63065,inst_63059);
var inst_63067 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_63064,29,inst_63066,"Subsequent flush should work"];
var inst_63068 = cljs.core.PersistentHashMap.fromArrays(inst_63062,inst_63067);
var inst_63069 = cljs.test.report.call(null,inst_63068);
var state_63088__$1 = state_63088;
var statearr_63158_63684 = state_63088__$1;
(statearr_63158_63684[(2)] = inst_63069);

(statearr_63158_63684[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (16))){
var _ = (function (){var statearr_63159 = state_63088;
(statearr_63159[(4)] = cljs.core.rest((state_63088[(4)])));

return statearr_63159;
})();
var state_63088__$1 = state_63088;
var ex63156 = (state_63088__$1[(2)]);
var statearr_63160_63685 = state_63088__$1;
(statearr_63160_63685[(5)] = ex63156);


var statearr_63161_63686 = state_63088__$1;
(statearr_63161_63686[(1)] = (15));

(statearr_63161_63686[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (10))){
var inst_62948 = (state_63088[(28)]);
var inst_62959 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62960 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62961 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_62962 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_62963 = cljs.core.cons(inst_62962,inst_62948);
var inst_62964 = (new cljs.core.List(null,inst_62963,null,(1),null));
var inst_62965 = (new cljs.core.List(null,inst_62961,inst_62964,(2),null));
var inst_62966 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_62960,19,inst_62965,"Buffer should not flush automatically without timer"];
var inst_62967 = cljs.core.PersistentHashMap.fromArrays(inst_62959,inst_62966);
var inst_62968 = cljs.test.report.call(null,inst_62967);
var state_63088__$1 = state_63088;
var statearr_63163_63687 = state_63088__$1;
(statearr_63163_63687[(2)] = inst_62968);

(statearr_63163_63687[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (18))){
var inst_62997 = (state_63088[(15)]);
var inst_63008 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63009 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63010 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63011 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63012 = cljs.core.cons(inst_63011,inst_62997);
var inst_63013 = (new cljs.core.List(null,inst_63012,null,(1),null));
var inst_63014 = (new cljs.core.List(null,inst_63010,inst_63013,(2),null));
var inst_63015 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_63009,24,inst_63014,"Manual flush should flush all items"];
var inst_63016 = cljs.core.PersistentHashMap.fromArrays(inst_63008,inst_63015);
var inst_63017 = cljs.test.report.call(null,inst_63016);
var state_63088__$1 = state_63088;
var statearr_63164_63688 = state_63088__$1;
(statearr_63164_63688[(2)] = inst_63017);

(statearr_63164_63688[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63089 === (8))){
var _ = (function (){var statearr_63165 = state_63088;
(statearr_63165[(4)] = cljs.core.rest((state_63088[(4)])));

return statearr_63165;
})();
var state_63088__$1 = state_63088;
var ex63162 = (state_63088__$1[(2)]);
var statearr_63166_63689 = state_63088__$1;
(statearr_63166_63689[(5)] = ex63162);


var statearr_63167_63690 = state_63088__$1;
(statearr_63167_63690[(1)] = (7));

(statearr_63167_63690[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____0 = (function (){
var statearr_63168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63168[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__);

(statearr_63168[(1)] = (1));

return statearr_63168;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____1 = (function (state_63088){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_63088);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e63169){var ex__32377__auto__ = e63169;
var statearr_63170_63691 = state_63088;
(statearr_63170_63691[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_63088[(4)]))){
var statearr_63171_63692 = state_63088;
(statearr_63171_63692[(1)] = cljs.core.first((state_63088[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63693 = state_63088;
state_63088 = G__63693;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__ = function(state_63088){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____1.call(this,state_63088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_63172 = f__32463__auto__();
(statearr_63172[(6)] = c__32462__auto__);

return statearr_63172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));

return c__32462__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta62917","meta62917",-1088453447,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62916.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62916.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test62916");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62916.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test62916");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test62916.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test62916 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test62916(meta62917){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62916(meta62917));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62916(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63173 = (function (meta63174){
this.meta63174 = meta63174;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63175,meta63174__$1){
var self__ = this;
var _63175__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63173(meta63174__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63175){
var self__ = this;
var _63175__$1 = this;
return self__.meta63174;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63173.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63173.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__63177 = (arguments.length - (1));
switch (G__63177) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63173.prototype.apply = (function (self__,args63176){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args63176)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63173.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_63389){
var state_val_63394 = (state_63389[(1)]);
if((state_val_63394 === (7))){
var inst_63193 = (state_63389[(2)]);
var inst_63194 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63195 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63196 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_63195,47,inst_63193,"Should not flush before timeout"];
var inst_63197 = cljs.core.PersistentHashMap.fromArrays(inst_63194,inst_63196);
var inst_63198 = cljs.test.report.call(null,inst_63197);
var state_63389__$1 = state_63389;
var statearr_63398_63695 = state_63389__$1;
(statearr_63398_63695[(2)] = inst_63198);

(statearr_63398_63695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (20))){
var inst_63280 = (state_63389[(2)]);
var inst_63281 = cljs.core.async.timeout((50));
var state_63389__$1 = (function (){var statearr_63400 = state_63389;
(statearr_63400[(7)] = inst_63280);

return statearr_63400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63389__$1,(21),inst_63281);
} else {
if((state_val_63394 === (27))){
var _ = (function (){var statearr_63401 = state_63389;
(statearr_63401[(4)] = cljs.core.rest((state_63389[(4)])));

return statearr_63401;
})();
var state_63389__$1 = state_63389;
var ex63396 = (state_63389__$1[(2)]);
var statearr_63402_63696 = state_63389__$1;
(statearr_63402_63696[(5)] = ex63396);


var statearr_63404_63697 = state_63389__$1;
(statearr_63404_63697[(1)] = (26));

(statearr_63404_63697[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (1))){
var inst_63178 = (state_63389[(8)]);
var inst_63180 = (state_63389[(9)]);
var inst_63178__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_63179 = cljs.core.PersistentVector.EMPTY;
var inst_63180__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_63179);
var inst_63181 = (function (){var input_ch = inst_63178__$1;
var results = inst_63180__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_63182 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_63183 = [inst_63178__$1,(100),inst_63181];
var inst_63184 = cljs.core.PersistentHashMap.fromArrays(inst_63182,inst_63183);
var inst_63185 = bb_web_ds_tools.components.async_buffer.create(inst_63184);
var state_63389__$1 = (function (){var statearr_63405 = state_63389;
(statearr_63405[(8)] = inst_63178__$1);

(statearr_63405[(9)] = inst_63180__$1);

(statearr_63405[(10)] = inst_63185);

return statearr_63405;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63389__$1,(2),inst_63178__$1,(1));
} else {
if((state_val_63394 === (24))){
var inst_63180 = (state_63389[(9)]);
var inst_63308 = (state_63389[(11)]);
var inst_63309 = (state_63389[(12)]);
var _ = (function (){var statearr_63407 = state_63389;
(statearr_63407[(4)] = cljs.core.cons((27),(state_63389[(4)])));

return statearr_63407;
})();
var inst_63300 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63301 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63302 = [(1),(2)];
var inst_63303 = (new cljs.core.PersistentVector(null,2,(5),inst_63301,inst_63302,null));
var inst_63304 = [inst_63303];
var inst_63305 = (new cljs.core.PersistentVector(null,1,(5),inst_63300,inst_63304,null));
var inst_63306 = cljs.core.deref(inst_63180);
var inst_63307 = (new cljs.core.List(null,inst_63306,null,(1),null));
var inst_63308__$1 = (new cljs.core.List(null,inst_63305,inst_63307,(2),null));
var inst_63309__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63308__$1);
var state_63389__$1 = (function (){var statearr_63409 = state_63389;
(statearr_63409[(11)] = inst_63308__$1);

(statearr_63409[(12)] = inst_63309__$1);

return statearr_63409;
})();
if(cljs.core.truth_(inst_63309__$1)){
var statearr_63410_63702 = state_63389__$1;
(statearr_63410_63702[(1)] = (28));

} else {
var statearr_63411_63703 = state_63389__$1;
(statearr_63411_63703[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (4))){
var inst_63192 = (state_63389[(2)]);
var state_63389__$1 = (function (){var statearr_63412 = state_63389;
(statearr_63412[(13)] = inst_63192);

return statearr_63412;
})();
var statearr_63413_63704 = state_63389__$1;
(statearr_63413_63704[(2)] = null);

(statearr_63413_63704[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (15))){
var inst_63234 = (state_63389[(2)]);
var inst_63235 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63236 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63237 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_63236,50,inst_63234,"Should flush after timeout"];
var inst_63238 = cljs.core.PersistentHashMap.fromArrays(inst_63235,inst_63237);
var inst_63239 = cljs.test.report.call(null,inst_63238);
var state_63389__$1 = state_63389;
var statearr_63414_63706 = state_63389__$1;
(statearr_63414_63706[(2)] = inst_63239);

(statearr_63414_63706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (21))){
var inst_63178 = (state_63389[(8)]);
var inst_63283 = (state_63389[(2)]);
var state_63389__$1 = (function (){var statearr_63421 = state_63389;
(statearr_63421[(14)] = inst_63283);

return statearr_63421;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63389__$1,(22),inst_63178,(4));
} else {
if((state_val_63394 === (31))){
var inst_63336 = (state_63389[(2)]);
var state_63389__$1 = (function (){var statearr_63422 = state_63389;
(statearr_63422[(15)] = inst_63336);

return statearr_63422;
})();
var statearr_63423_63712 = state_63389__$1;
(statearr_63423_63712[(2)] = null);

(statearr_63423_63712[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (32))){
var inst_63180 = (state_63389[(9)]);
var inst_63359 = (state_63389[(16)]);
var inst_63360 = (state_63389[(17)]);
var _ = (function (){var statearr_63428 = state_63389;
(statearr_63428[(4)] = cljs.core.cons((35),(state_63389[(4)])));

return statearr_63428;
})();
var inst_63348 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63349 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63350 = [(1),(2)];
var inst_63351 = (new cljs.core.PersistentVector(null,2,(5),inst_63349,inst_63350,null));
var inst_63352 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63353 = [(3),(4)];
var inst_63354 = (new cljs.core.PersistentVector(null,2,(5),inst_63352,inst_63353,null));
var inst_63355 = [inst_63351,inst_63354];
var inst_63356 = (new cljs.core.PersistentVector(null,2,(5),inst_63348,inst_63355,null));
var inst_63357 = cljs.core.deref(inst_63180);
var inst_63358 = (new cljs.core.List(null,inst_63357,null,(1),null));
var inst_63359__$1 = (new cljs.core.List(null,inst_63356,inst_63358,(2),null));
var inst_63360__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63359__$1);
var state_63389__$1 = (function (){var statearr_63430 = state_63389;
(statearr_63430[(16)] = inst_63359__$1);

(statearr_63430[(17)] = inst_63360__$1);

return statearr_63430;
})();
if(cljs.core.truth_(inst_63360__$1)){
var statearr_63433_63715 = state_63389__$1;
(statearr_63433_63715[(1)] = (36));

} else {
var statearr_63434_63716 = state_63389__$1;
(statearr_63434_63716[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (33))){
var inst_63384 = (state_63389[(2)]);
var inst_63385 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_63389__$1 = (function (){var statearr_63436 = state_63389;
(statearr_63436[(18)] = inst_63384);

return statearr_63436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63389__$1,inst_63385);
} else {
if((state_val_63394 === (13))){
var inst_63180 = (state_63389[(9)]);
var inst_63253 = (state_63389[(19)]);
var inst_63254 = (state_63389[(20)]);
var _ = (function (){var statearr_63439 = state_63389;
(statearr_63439[(4)] = cljs.core.cons((16),(state_63389[(4)])));

return statearr_63439;
})();
var inst_63245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63246 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63247 = [(1),(2)];
var inst_63248 = (new cljs.core.PersistentVector(null,2,(5),inst_63246,inst_63247,null));
var inst_63249 = [inst_63248];
var inst_63250 = (new cljs.core.PersistentVector(null,1,(5),inst_63245,inst_63249,null));
var inst_63251 = cljs.core.deref(inst_63180);
var inst_63252 = (new cljs.core.List(null,inst_63251,null,(1),null));
var inst_63253__$1 = (new cljs.core.List(null,inst_63250,inst_63252,(2),null));
var inst_63254__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63253__$1);
var state_63389__$1 = (function (){var statearr_63441 = state_63389;
(statearr_63441[(19)] = inst_63253__$1);

(statearr_63441[(20)] = inst_63254__$1);

return statearr_63441;
})();
if(cljs.core.truth_(inst_63254__$1)){
var statearr_63442_63718 = state_63389__$1;
(statearr_63442_63718[(1)] = (17));

} else {
var statearr_63443_63719 = state_63389__$1;
(statearr_63443_63719[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (22))){
var inst_63285 = (state_63389[(2)]);
var inst_63286 = cljs.core.async.timeout((20));
var state_63389__$1 = (function (){var statearr_63444 = state_63389;
(statearr_63444[(21)] = inst_63285);

return statearr_63444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63389__$1,(23),inst_63286);
} else {
if((state_val_63394 === (36))){
var inst_63359 = (state_63389[(16)]);
var inst_63362 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63363 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63364 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63365 = cljs.core.cons(inst_63364,inst_63359);
var inst_63366 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_63363,60,inst_63365,"Should flush 3,4 after timeout from first message"];
var inst_63367 = cljs.core.PersistentHashMap.fromArrays(inst_63362,inst_63366);
var inst_63368 = cljs.test.report.call(null,inst_63367);
var state_63389__$1 = state_63389;
var statearr_63445_63722 = state_63389__$1;
(statearr_63445_63722[(2)] = inst_63368);

(statearr_63445_63722[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (29))){
var inst_63308 = (state_63389[(11)]);
var inst_63319 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63320 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63321 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63322 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63323 = cljs.core.cons(inst_63322,inst_63308);
var inst_63324 = (new cljs.core.List(null,inst_63323,null,(1),null));
var inst_63325 = (new cljs.core.List(null,inst_63321,inst_63324,(2),null));
var inst_63326 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_63320,57,inst_63325,"Should not flush 3,4 yet"];
var inst_63327 = cljs.core.PersistentHashMap.fromArrays(inst_63319,inst_63326);
var inst_63328 = cljs.test.report.call(null,inst_63327);
var state_63389__$1 = state_63389;
var statearr_63447_63726 = state_63389__$1;
(statearr_63447_63726[(2)] = inst_63328);

(statearr_63447_63726[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (6))){
var inst_63230 = (state_63389[(2)]);
var inst_63231 = cljs.core.async.timeout((100));
var state_63389__$1 = (function (){var statearr_63448 = state_63389;
(statearr_63448[(22)] = inst_63230);

return statearr_63448;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63389__$1,(12),inst_63231);
} else {
if((state_val_63394 === (28))){
var inst_63308 = (state_63389[(11)]);
var inst_63311 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63312 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63313 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63314 = cljs.core.cons(inst_63313,inst_63308);
var inst_63315 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_63312,57,inst_63314,"Should not flush 3,4 yet"];
var inst_63316 = cljs.core.PersistentHashMap.fromArrays(inst_63311,inst_63315);
var inst_63317 = cljs.test.report.call(null,inst_63316);
var state_63389__$1 = state_63389;
var statearr_63449_63729 = state_63389__$1;
(statearr_63449_63729[(2)] = inst_63317);

(statearr_63449_63729[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (25))){
var inst_63333 = (state_63389[(2)]);
var inst_63334 = cljs.core.async.timeout((80));
var state_63389__$1 = (function (){var statearr_63450 = state_63389;
(statearr_63450[(23)] = inst_63333);

return statearr_63450;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63389__$1,(31),inst_63334);
} else {
if((state_val_63394 === (34))){
var inst_63337 = (state_63389[(2)]);
var inst_63338 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63339 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63340 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_63339,60,inst_63337,"Should flush 3,4 after timeout from first message"];
var inst_63341 = cljs.core.PersistentHashMap.fromArrays(inst_63338,inst_63340);
var inst_63342 = cljs.test.report.call(null,inst_63341);
var state_63389__$1 = state_63389;
var statearr_63451_63733 = state_63389__$1;
(statearr_63451_63733[(2)] = inst_63342);

(statearr_63451_63733[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (17))){
var inst_63253 = (state_63389[(19)]);
var inst_63256 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63257 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63258 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63259 = cljs.core.cons(inst_63258,inst_63253);
var inst_63260 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_63257,50,inst_63259,"Should flush after timeout"];
var inst_63261 = cljs.core.PersistentHashMap.fromArrays(inst_63256,inst_63260);
var inst_63262 = cljs.test.report.call(null,inst_63261);
var state_63389__$1 = state_63389;
var statearr_63452_63735 = state_63389__$1;
(statearr_63452_63735[(2)] = inst_63262);

(statearr_63452_63735[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (3))){
var inst_63189 = (state_63389[(2)]);
var inst_63190 = cljs.core.async.timeout((50));
var state_63389__$1 = (function (){var statearr_63453 = state_63389;
(statearr_63453[(24)] = inst_63189);

return statearr_63453;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63389__$1,(4),inst_63190);
} else {
if((state_val_63394 === (12))){
var inst_63233 = (state_63389[(2)]);
var state_63389__$1 = (function (){var statearr_63454 = state_63389;
(statearr_63454[(25)] = inst_63233);

return statearr_63454;
})();
var statearr_63455_63736 = state_63389__$1;
(statearr_63455_63736[(2)] = null);

(statearr_63455_63736[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (2))){
var inst_63178 = (state_63389[(8)]);
var inst_63187 = (state_63389[(2)]);
var state_63389__$1 = (function (){var statearr_63457 = state_63389;
(statearr_63457[(26)] = inst_63187);

return statearr_63457;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63389__$1,(3),inst_63178,(2));
} else {
if((state_val_63394 === (23))){
var inst_63288 = (state_63389[(2)]);
var state_63389__$1 = (function (){var statearr_63458 = state_63389;
(statearr_63458[(27)] = inst_63288);

return statearr_63458;
})();
var statearr_63459_63737 = state_63389__$1;
(statearr_63459_63737[(2)] = null);

(statearr_63459_63737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (35))){
var _ = (function (){var statearr_63460 = state_63389;
(statearr_63460[(4)] = cljs.core.rest((state_63389[(4)])));

return statearr_63460;
})();
var state_63389__$1 = state_63389;
var ex63456 = (state_63389__$1[(2)]);
var statearr_63461_63738 = state_63389__$1;
(statearr_63461_63738[(5)] = ex63456);


var statearr_63462_63739 = state_63389__$1;
(statearr_63462_63739[(1)] = (34));

(statearr_63462_63739[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (19))){
var inst_63254 = (state_63389[(20)]);
var inst_63275 = (state_63389[(2)]);
var _ = (function (){var statearr_63463 = state_63389;
(statearr_63463[(4)] = cljs.core.rest((state_63389[(4)])));

return statearr_63463;
})();
var state_63389__$1 = (function (){var statearr_63464 = state_63389;
(statearr_63464[(28)] = inst_63275);

return statearr_63464;
})();
var statearr_63465_63741 = state_63389__$1;
(statearr_63465_63741[(2)] = inst_63254);

(statearr_63465_63741[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (11))){
var inst_63206 = (state_63389[(29)]);
var inst_63227 = (state_63389[(2)]);
var _ = (function (){var statearr_63466 = state_63389;
(statearr_63466[(4)] = cljs.core.rest((state_63389[(4)])));

return statearr_63466;
})();
var state_63389__$1 = (function (){var statearr_63467 = state_63389;
(statearr_63467[(30)] = inst_63227);

return statearr_63467;
})();
var statearr_63469_63742 = state_63389__$1;
(statearr_63469_63742[(2)] = inst_63206);

(statearr_63469_63742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (9))){
var inst_63205 = (state_63389[(31)]);
var inst_63208 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63209 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63210 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63211 = cljs.core.cons(inst_63210,inst_63205);
var inst_63212 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_63209,47,inst_63211,"Should not flush before timeout"];
var inst_63213 = cljs.core.PersistentHashMap.fromArrays(inst_63208,inst_63212);
var inst_63214 = cljs.test.report.call(null,inst_63213);
var state_63389__$1 = state_63389;
var statearr_63470_63743 = state_63389__$1;
(statearr_63470_63743[(2)] = inst_63214);

(statearr_63470_63743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (5))){
var inst_63180 = (state_63389[(9)]);
var inst_63205 = (state_63389[(31)]);
var inst_63206 = (state_63389[(29)]);
var _ = (function (){var statearr_63471 = state_63389;
(statearr_63471[(4)] = cljs.core.cons((8),(state_63389[(4)])));

return statearr_63471;
})();
var inst_63204 = cljs.core.deref(inst_63180);
var inst_63205__$1 = (new cljs.core.List(null,inst_63204,null,(1),null));
var inst_63206__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_63205__$1);
var state_63389__$1 = (function (){var statearr_63472 = state_63389;
(statearr_63472[(31)] = inst_63205__$1);

(statearr_63472[(29)] = inst_63206__$1);

return statearr_63472;
})();
if(cljs.core.truth_(inst_63206__$1)){
var statearr_63473_63744 = state_63389__$1;
(statearr_63473_63744[(1)] = (9));

} else {
var statearr_63474_63745 = state_63389__$1;
(statearr_63474_63745[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (14))){
var inst_63178 = (state_63389[(8)]);
var inst_63278 = (state_63389[(2)]);
var state_63389__$1 = (function (){var statearr_63476 = state_63389;
(statearr_63476[(32)] = inst_63278);

return statearr_63476;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63389__$1,(20),inst_63178,(3));
} else {
if((state_val_63394 === (26))){
var inst_63289 = (state_63389[(2)]);
var inst_63290 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63291 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63292 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_63291,57,inst_63289,"Should not flush 3,4 yet"];
var inst_63293 = cljs.core.PersistentHashMap.fromArrays(inst_63290,inst_63292);
var inst_63294 = cljs.test.report.call(null,inst_63293);
var state_63389__$1 = state_63389;
var statearr_63478_63746 = state_63389__$1;
(statearr_63478_63746[(2)] = inst_63294);

(statearr_63478_63746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (16))){
var _ = (function (){var statearr_63479 = state_63389;
(statearr_63479[(4)] = cljs.core.rest((state_63389[(4)])));

return statearr_63479;
})();
var state_63389__$1 = state_63389;
var ex63475 = (state_63389__$1[(2)]);
var statearr_63480_63747 = state_63389__$1;
(statearr_63480_63747[(5)] = ex63475);


var statearr_63485_63748 = state_63389__$1;
(statearr_63485_63748[(1)] = (15));

(statearr_63485_63748[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (38))){
var inst_63360 = (state_63389[(17)]);
var inst_63381 = (state_63389[(2)]);
var _ = (function (){var statearr_63487 = state_63389;
(statearr_63487[(4)] = cljs.core.rest((state_63389[(4)])));

return statearr_63487;
})();
var state_63389__$1 = (function (){var statearr_63488 = state_63389;
(statearr_63488[(33)] = inst_63381);

return statearr_63488;
})();
var statearr_63489_63749 = state_63389__$1;
(statearr_63489_63749[(2)] = inst_63360);

(statearr_63489_63749[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (30))){
var inst_63309 = (state_63389[(12)]);
var inst_63330 = (state_63389[(2)]);
var _ = (function (){var statearr_63490 = state_63389;
(statearr_63490[(4)] = cljs.core.rest((state_63389[(4)])));

return statearr_63490;
})();
var state_63389__$1 = (function (){var statearr_63491 = state_63389;
(statearr_63491[(34)] = inst_63330);

return statearr_63491;
})();
var statearr_63492_63750 = state_63389__$1;
(statearr_63492_63750[(2)] = inst_63309);

(statearr_63492_63750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (10))){
var inst_63205 = (state_63389[(31)]);
var inst_63216 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63217 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63218 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63219 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63220 = cljs.core.cons(inst_63219,inst_63205);
var inst_63221 = (new cljs.core.List(null,inst_63220,null,(1),null));
var inst_63222 = (new cljs.core.List(null,inst_63218,inst_63221,(2),null));
var inst_63223 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_63217,47,inst_63222,"Should not flush before timeout"];
var inst_63224 = cljs.core.PersistentHashMap.fromArrays(inst_63216,inst_63223);
var inst_63225 = cljs.test.report.call(null,inst_63224);
var state_63389__$1 = state_63389;
var statearr_63493_63751 = state_63389__$1;
(statearr_63493_63751[(2)] = inst_63225);

(statearr_63493_63751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (18))){
var inst_63253 = (state_63389[(19)]);
var inst_63264 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63265 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63266 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63267 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63268 = cljs.core.cons(inst_63267,inst_63253);
var inst_63269 = (new cljs.core.List(null,inst_63268,null,(1),null));
var inst_63270 = (new cljs.core.List(null,inst_63266,inst_63269,(2),null));
var inst_63271 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_63265,50,inst_63270,"Should flush after timeout"];
var inst_63272 = cljs.core.PersistentHashMap.fromArrays(inst_63264,inst_63271);
var inst_63273 = cljs.test.report.call(null,inst_63272);
var state_63389__$1 = state_63389;
var statearr_63495_63752 = state_63389__$1;
(statearr_63495_63752[(2)] = inst_63273);

(statearr_63495_63752[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (37))){
var inst_63359 = (state_63389[(16)]);
var inst_63370 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63371 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63372 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63373 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63374 = cljs.core.cons(inst_63373,inst_63359);
var inst_63375 = (new cljs.core.List(null,inst_63374,null,(1),null));
var inst_63376 = (new cljs.core.List(null,inst_63372,inst_63375,(2),null));
var inst_63377 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_63371,60,inst_63376,"Should flush 3,4 after timeout from first message"];
var inst_63378 = cljs.core.PersistentHashMap.fromArrays(inst_63370,inst_63377);
var inst_63379 = cljs.test.report.call(null,inst_63378);
var state_63389__$1 = state_63389;
var statearr_63496_63753 = state_63389__$1;
(statearr_63496_63753[(2)] = inst_63379);

(statearr_63496_63753[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63394 === (8))){
var _ = (function (){var statearr_63497 = state_63389;
(statearr_63497[(4)] = cljs.core.rest((state_63389[(4)])));

return statearr_63497;
})();
var state_63389__$1 = state_63389;
var ex63494 = (state_63389__$1[(2)]);
var statearr_63498_63754 = state_63389__$1;
(statearr_63498_63754[(5)] = ex63494);


var statearr_63499_63755 = state_63389__$1;
(statearr_63499_63755[(1)] = (7));

(statearr_63499_63755[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____0 = (function (){
var statearr_63500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63500[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__);

(statearr_63500[(1)] = (1));

return statearr_63500;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____1 = (function (state_63389){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_63389);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e63502){var ex__32377__auto__ = e63502;
var statearr_63503_63756 = state_63389;
(statearr_63503_63756[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_63389[(4)]))){
var statearr_63504_63757 = state_63389;
(statearr_63504_63757[(1)] = cljs.core.first((state_63389[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63758 = state_63389;
state_63389 = G__63758;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__ = function(state_63389){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____1.call(this,state_63389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_63505 = f__32463__auto__();
(statearr_63505[(6)] = c__32462__auto__);

return statearr_63505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));

return c__32462__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63174","meta63174",-1618766218,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63173.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63173.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63173");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63173.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63173");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63173.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test63173 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test63173(meta63174){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63173(meta63174));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63173(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63506 = (function (meta63507){
this.meta63507 = meta63507;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63508,meta63507__$1){
var self__ = this;
var _63508__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63506(meta63507__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63508){
var self__ = this;
var _63508__$1 = this;
return self__.meta63507;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63506.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63506.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__63510 = (arguments.length - (1));
switch (G__63510) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63506.prototype.apply = (function (self__,args63509){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args63509)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63506.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_63575){
var state_val_63576 = (state_63575[(1)]);
if((state_val_63576 === (7))){
var inst_63528 = (state_63575[(2)]);
var inst_63529 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63530 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63531 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_63530,78,inst_63528,"Closing input should flush remaining"];
var inst_63532 = cljs.core.PersistentHashMap.fromArrays(inst_63529,inst_63531);
var inst_63533 = cljs.test.report.call(null,inst_63532);
var state_63575__$1 = state_63575;
var statearr_63577_63760 = state_63575__$1;
(statearr_63577_63760[(2)] = inst_63533);

(statearr_63577_63760[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (1))){
var inst_63512 = (state_63575[(7)]);
var inst_63514 = (state_63575[(8)]);
var inst_63512__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_63513 = cljs.core.PersistentVector.EMPTY;
var inst_63514__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_63513);
var inst_63515 = (function (){var input_ch = inst_63512__$1;
var results = inst_63514__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_63516 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_63517 = [inst_63512__$1,inst_63515];
var inst_63518 = cljs.core.PersistentHashMap.fromArrays(inst_63516,inst_63517);
var inst_63519 = bb_web_ds_tools.components.async_buffer.create(inst_63518);
var state_63575__$1 = (function (){var statearr_63582 = state_63575;
(statearr_63582[(7)] = inst_63512__$1);

(statearr_63582[(8)] = inst_63514__$1);

(statearr_63582[(9)] = inst_63519);

return statearr_63582;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63575__$1,(2),inst_63512__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_63576 === (4))){
var inst_63527 = (state_63575[(2)]);
var state_63575__$1 = (function (){var statearr_63586 = state_63575;
(statearr_63586[(10)] = inst_63527);

return statearr_63586;
})();
var statearr_63587_63761 = state_63575__$1;
(statearr_63587_63761[(2)] = null);

(statearr_63587_63761[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (6))){
var inst_63572 = (state_63575[(2)]);
var inst_63573 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_63575__$1 = (function (){var statearr_63588 = state_63575;
(statearr_63588[(11)] = inst_63572);

return statearr_63588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63575__$1,inst_63573);
} else {
if((state_val_63576 === (3))){
var inst_63512 = (state_63575[(7)]);
var inst_63523 = (state_63575[(2)]);
var inst_63524 = cljs.core.async.close_BANG_(inst_63512);
var inst_63525 = cljs.core.async.timeout((20));
var state_63575__$1 = (function (){var statearr_63590 = state_63575;
(statearr_63590[(12)] = inst_63523);

(statearr_63590[(13)] = inst_63524);

return statearr_63590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63575__$1,(4),inst_63525);
} else {
if((state_val_63576 === (2))){
var inst_63512 = (state_63575[(7)]);
var inst_63521 = (state_63575[(2)]);
var state_63575__$1 = (function (){var statearr_63593 = state_63575;
(statearr_63593[(14)] = inst_63521);

return statearr_63593;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63575__$1,(3),inst_63512,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_63576 === (11))){
var inst_63548 = (state_63575[(15)]);
var inst_63569 = (state_63575[(2)]);
var _ = (function (){var statearr_63594 = state_63575;
(statearr_63594[(4)] = cljs.core.rest((state_63575[(4)])));

return statearr_63594;
})();
var state_63575__$1 = (function (){var statearr_63595 = state_63575;
(statearr_63595[(16)] = inst_63569);

return statearr_63595;
})();
var statearr_63596_63762 = state_63575__$1;
(statearr_63596_63762[(2)] = inst_63548);

(statearr_63596_63762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (9))){
var inst_63547 = (state_63575[(17)]);
var inst_63550 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63551 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63552 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63553 = cljs.core.cons(inst_63552,inst_63547);
var inst_63554 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_63551,78,inst_63553,"Closing input should flush remaining"];
var inst_63555 = cljs.core.PersistentHashMap.fromArrays(inst_63550,inst_63554);
var inst_63556 = cljs.test.report.call(null,inst_63555);
var state_63575__$1 = state_63575;
var statearr_63597_63763 = state_63575__$1;
(statearr_63597_63763[(2)] = inst_63556);

(statearr_63597_63763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (5))){
var inst_63514 = (state_63575[(8)]);
var inst_63547 = (state_63575[(17)]);
var inst_63548 = (state_63575[(15)]);
var _ = (function (){var statearr_63599 = state_63575;
(statearr_63599[(4)] = cljs.core.cons((8),(state_63575[(4)])));

return statearr_63599;
})();
var inst_63539 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63540 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63541 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_63542 = (new cljs.core.PersistentVector(null,2,(5),inst_63540,inst_63541,null));
var inst_63543 = [inst_63542];
var inst_63544 = (new cljs.core.PersistentVector(null,1,(5),inst_63539,inst_63543,null));
var inst_63545 = cljs.core.deref(inst_63514);
var inst_63546 = (new cljs.core.List(null,inst_63545,null,(1),null));
var inst_63547__$1 = (new cljs.core.List(null,inst_63544,inst_63546,(2),null));
var inst_63548__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63547__$1);
var state_63575__$1 = (function (){var statearr_63601 = state_63575;
(statearr_63601[(17)] = inst_63547__$1);

(statearr_63601[(15)] = inst_63548__$1);

return statearr_63601;
})();
if(cljs.core.truth_(inst_63548__$1)){
var statearr_63602_63764 = state_63575__$1;
(statearr_63602_63764[(1)] = (9));

} else {
var statearr_63605_63765 = state_63575__$1;
(statearr_63605_63765[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (10))){
var inst_63547 = (state_63575[(17)]);
var inst_63558 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63559 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63560 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63561 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63562 = cljs.core.cons(inst_63561,inst_63547);
var inst_63563 = (new cljs.core.List(null,inst_63562,null,(1),null));
var inst_63564 = (new cljs.core.List(null,inst_63560,inst_63563,(2),null));
var inst_63565 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_63559,78,inst_63564,"Closing input should flush remaining"];
var inst_63566 = cljs.core.PersistentHashMap.fromArrays(inst_63558,inst_63565);
var inst_63567 = cljs.test.report.call(null,inst_63566);
var state_63575__$1 = state_63575;
var statearr_63608_63766 = state_63575__$1;
(statearr_63608_63766[(2)] = inst_63567);

(statearr_63608_63766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63576 === (8))){
var _ = (function (){var statearr_63610 = state_63575;
(statearr_63610[(4)] = cljs.core.rest((state_63575[(4)])));

return statearr_63610;
})();
var state_63575__$1 = state_63575;
var ex63598 = (state_63575__$1[(2)]);
var statearr_63611_63767 = state_63575__$1;
(statearr_63611_63767[(5)] = ex63598);


var statearr_63616_63768 = state_63575__$1;
(statearr_63616_63768[(1)] = (7));

(statearr_63616_63768[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____0 = (function (){
var statearr_63619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63619[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__);

(statearr_63619[(1)] = (1));

return statearr_63619;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____1 = (function (state_63575){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_63575);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e63623){var ex__32377__auto__ = e63623;
var statearr_63624_63769 = state_63575;
(statearr_63624_63769[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_63575[(4)]))){
var statearr_63625_63770 = state_63575;
(statearr_63625_63770[(1)] = cljs.core.first((state_63575[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63771 = state_63575;
state_63575 = G__63771;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__ = function(state_63575){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____1.call(this,state_63575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_63626 = f__32463__auto__();
(statearr_63626[(6)] = c__32462__auto__);

return statearr_63626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));

return c__32462__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63507","meta63507",-1298865454,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63506.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63506.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63506");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63506.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63506");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63506.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test63506 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test63506(meta63507){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63506(meta63507));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63506(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
