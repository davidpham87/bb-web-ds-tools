goog.provide('bb_web_ds_tools.persistence_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test42810 = (function (meta42811){
this.meta42811 = meta42811;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test42810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42812,meta42811__$1){
var self__ = this;
var _42812__$1 = this;
return (new bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test42810(meta42811__$1));
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test42810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42812){
var self__ = this;
var _42812__$1 = this;
return self__.meta42811;
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test42810.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test42810.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__42814 = (arguments.length - (1));
switch (G__42814) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test42810.prototype.apply = (function (self__,args42813){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args42813)));
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test42810.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_43314){
var state_val_43317 = (state_43314[(1)]);
if((state_val_43317 === (65))){
var inst_43163 = (state_43314[(7)]);
var inst_43166 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43167 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"datasets","datasets",-758071350,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null));
var inst_43168 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43169 = cljs.core.cons(inst_43168,inst_43163);
var inst_43170 = ["bb_web_ds_tools/persistence_test.cljs",47,new cljs.core.Keyword(null,"pass","pass",1574159993),28,35,inst_43167,35,inst_43169,null];
var inst_43171 = cljs.core.PersistentHashMap.fromArrays(inst_43166,inst_43170);
var inst_43172 = cljs.test.report.call(null,inst_43171);
var state_43314__$1 = state_43314;
var statearr_43335_43789 = state_43314__$1;
(statearr_43335_43789[(2)] = inst_43172);

(statearr_43335_43789[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (70))){
var _ = (function (){var statearr_43336 = state_43314;
(statearr_43336[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43336;
})();
var inst_43209 = (state_43314[(2)]);
var inst_43210 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43212 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_43213 = (new cljs.core.PersistentVector(null,1,(5),inst_43210,inst_43212,null));
var inst_43214 = cljs.test.update_current_env_BANG_(inst_43213,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_43314[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_43314__$1 = (function (){var statearr_43339 = state_43314;
(statearr_43339[(8)] = inst_43214);

return statearr_43339;
})();
var statearr_43340_43790 = state_43314__$1;
(statearr_43340_43790[(2)] = inst_43209);

(statearr_43340_43790[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (62))){
var inst_43200 = (state_43314[(2)]);
var _ = (function (){var statearr_43342 = state_43314;
(statearr_43342[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43342;
})();
var state_43314__$1 = state_43314;
var statearr_43343_43791 = state_43314__$1;
(statearr_43343_43791[(2)] = inst_43200);

(statearr_43343_43791[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (74))){
var inst_43230 = (state_43314[(2)]);
var inst_43231 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43232 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_43233 = ["bb_web_ds_tools/persistence_test.cljs",50,new cljs.core.Keyword(null,"error","error",-978969032),26,39,inst_43232,39,inst_43230,"Export returns a Blob"];
var inst_43234 = cljs.core.PersistentHashMap.fromArrays(inst_43231,inst_43233);
var inst_43235 = cljs.test.report.call(null,inst_43234);
var state_43314__$1 = state_43314;
var statearr_43357_43792 = state_43314__$1;
(statearr_43357_43792[(2)] = inst_43235);

(statearr_43357_43792[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (7))){
var inst_42850 = (state_43314[(2)]);
var state_43314__$1 = state_43314;
var statearr_43358_43793 = state_43314__$1;
(statearr_43358_43793[(2)] = inst_42850);

(statearr_43358_43793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (59))){
var _ = (function (){var statearr_43360 = state_43314;
(statearr_43360[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43360;
})();
var inst_43120 = (state_43314[(2)]);
var inst_43125 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43126 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_43127 = (new cljs.core.PersistentVector(null,1,(5),inst_43125,inst_43126,null));
var inst_43128 = cljs.test.update_current_env_BANG_(inst_43127,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_43314[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_43314__$1 = (function (){var statearr_43366 = state_43314;
(statearr_43366[(9)] = inst_43128);

return statearr_43366;
})();
var statearr_43367_43794 = state_43314__$1;
(statearr_43367_43794[(2)] = inst_43120);

(statearr_43367_43794[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (20))){
var inst_42879 = (state_43314[(2)]);
var state_43314__$1 = (function (){var statearr_43374 = state_43314;
(statearr_43374[(10)] = inst_42879);

return statearr_43374;
})();
var statearr_43375_43795 = state_43314__$1;
(statearr_43375_43795[(2)] = null);

(statearr_43375_43795[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (72))){
var inst_43222 = (state_43314[(11)]);
var inst_43242 = (state_43314[(12)]);
var _ = (function (){var statearr_43377 = state_43314;
(statearr_43377[(4)] = cljs.core.cons((75),(state_43314[(4)])));

return statearr_43377;
})();
var inst_43241 = Blob;
var inst_43242__$1 = (inst_43222 instanceof inst_43241);
var state_43314__$1 = (function (){var statearr_43378 = state_43314;
(statearr_43378[(12)] = inst_43242__$1);

return statearr_43378;
})();
if(cljs.core.truth_(inst_43242__$1)){
var statearr_43379_43796 = state_43314__$1;
(statearr_43379_43796[(1)] = (76));

} else {
var statearr_43380_43797 = state_43314__$1;
(statearr_43380_43797[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (58))){
var inst_43203 = (state_43314[(2)]);
var inst_43204 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43205 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_43206 = (new cljs.core.PersistentVector(null,1,(5),inst_43204,inst_43205,null));
var inst_43207 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_43206,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Export DB"], 0));
var state_43314__$1 = (function (){var statearr_43381 = state_43314;
(statearr_43381[(13)] = inst_43203);

(statearr_43381[(14)] = inst_43207);

return statearr_43381;
})();
var statearr_43382_43798 = state_43314__$1;
(statearr_43382_43798[(2)] = null);

(statearr_43382_43798[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (60))){
var _ = (function (){var statearr_43383 = state_43314;
(statearr_43383[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43383;
})();
var state_43314__$1 = state_43314;
var ex43376 = (state_43314__$1[(2)]);
var statearr_43394_43799 = state_43314__$1;
(statearr_43394_43799[(5)] = ex43376);


throw ex43376;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (27))){
var inst_42903 = (state_43314[(15)]);
var inst_42924 = (state_43314[(2)]);
var _ = (function (){var statearr_43395 = state_43314;
(statearr_43395[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43395;
})();
var state_43314__$1 = (function (){var statearr_43396 = state_43314;
(statearr_43396[(16)] = inst_42924);

return statearr_43396;
})();
var statearr_43397_43800 = state_43314__$1;
(statearr_43397_43800[(2)] = inst_42903);

(statearr_43397_43800[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (1))){
var state_43314__$1 = state_43314;
var statearr_43399_43801 = state_43314__$1;
(statearr_43399_43801[(2)] = null);

(statearr_43399_43801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (69))){
var inst_43305 = (state_43314[(2)]);
var _ = (function (){var statearr_43400 = state_43314;
(statearr_43400[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43400;
})();
var state_43314__$1 = state_43314;
var statearr_43401_43802 = state_43314__$1;
(statearr_43401_43802[(2)] = inst_43305);

(statearr_43401_43802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (24))){
var _ = (function (){var statearr_43402 = state_43314;
(statearr_43402[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43402;
})();
var state_43314__$1 = state_43314;
var ex43398 = (state_43314__$1[(2)]);
var statearr_43403_43803 = state_43314__$1;
(statearr_43403_43803[(5)] = ex43398);


var statearr_43411_43804 = state_43314__$1;
(statearr_43411_43804[(1)] = (23));

(statearr_43411_43804[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (55))){
var inst_43086 = (state_43314[(17)]);
var inst_43097 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43098 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","test","content",(123)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_43099 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43100 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43101 = cljs.core.cons(inst_43100,inst_43086);
var inst_43102 = (new cljs.core.List(null,inst_43101,null,(1),null));
var inst_43103 = (new cljs.core.List(null,inst_43099,inst_43102,(2),null));
var inst_43104 = ["bb_web_ds_tools/persistence_test.cljs",73,new cljs.core.Keyword(null,"fail","fail",1706214930),26,29,inst_43098,29,inst_43103,"Row matches"];
var inst_43105 = cljs.core.PersistentHashMap.fromArrays(inst_43097,inst_43104);
var inst_43106 = cljs.test.report.call(null,inst_43105);
var state_43314__$1 = state_43314;
var statearr_43413_43805 = state_43314__$1;
(statearr_43413_43805[(2)] = inst_43106);

(statearr_43413_43805[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (85))){
var inst_43277 = (state_43314[(18)]);
var inst_43299 = (state_43314[(2)]);
var _ = (function (){var statearr_43414 = state_43314;
(statearr_43414[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43414;
})();
var state_43314__$1 = (function (){var statearr_43415 = state_43314;
(statearr_43415[(19)] = inst_43299);

return statearr_43415;
})();
var statearr_43416_43806 = state_43314__$1;
(statearr_43416_43806[(2)] = inst_43277);

(statearr_43416_43806[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (39))){
var inst_42999 = (state_43314[(20)]);
var inst_43013 = (state_43314[(21)]);
var inst_43014 = (state_43314[(22)]);
var _ = (function (){var statearr_43417 = state_43314;
(statearr_43417[(4)] = cljs.core.cons((42),(state_43314[(4)])));

return statearr_43417;
})();
var inst_43011 = inst_42999.length;
var inst_43012 = (new cljs.core.List(null,inst_43011,null,(1),null));
var inst_43013__$1 = (new cljs.core.List(null,(1),inst_43012,(2),null));
var inst_43014__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_43013__$1);
var state_43314__$1 = (function (){var statearr_43421 = state_43314;
(statearr_43421[(21)] = inst_43013__$1);

(statearr_43421[(22)] = inst_43014__$1);

return statearr_43421;
})();
if(cljs.core.truth_(inst_43014__$1)){
var statearr_43422_43808 = state_43314__$1;
(statearr_43422_43808[(1)] = (43));

} else {
var statearr_43423_43810 = state_43314__$1;
(statearr_43423_43810[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (46))){
var inst_42930 = (state_43314[(23)]);
var _ = (function (){var statearr_43424 = state_43314;
(statearr_43424[(4)] = cljs.core.cons((48),(state_43314[(4)])));

return statearr_43424;
})();
var ___$1 = (function (){var statearr_43425 = state_43314;
(statearr_43425[(4)] = cljs.core.cons((49),(state_43314[(4)])));

return statearr_43425;
})();
var inst_43061 = inst_42930.exec("INSERT INTO datasets VALUES ('1', 'test', 'content', 123)");
var inst_43062 = [new cljs.core.Keyword(null,"returnValue","returnValue",1643246062)];
var inst_43063 = ["resultRows"];
var inst_43064 = cljs.core.PersistentHashMap.fromArrays(inst_43062,inst_43063);
var inst_43065 = cljs.core.clj__GT_js(inst_43064);
var inst_43066 = inst_42930.exec("SELECT * FROM datasets",inst_43065);
var state_43314__$1 = (function (){var statearr_43426 = state_43314;
(statearr_43426[(24)] = inst_43061);

(statearr_43426[(25)] = inst_43066);

return statearr_43426;
})();
var statearr_43427_43811 = state_43314__$1;
(statearr_43427_43811[(2)] = null);

(statearr_43427_43811[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (4))){
var _ = (function (){var statearr_43428 = state_43314;
(statearr_43428[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43428;
})();
var inst_42816 = (state_43314[(2)]);
var inst_42817 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var ___$1 = (function (){var temp__5825__auto__ = (state_43314[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_43314__$1 = (function (){var statearr_43429 = state_43314;
(statearr_43429[(26)] = inst_42817);

return statearr_43429;
})();
var statearr_43431_43812 = state_43314__$1;
(statearr_43431_43812[(2)] = inst_42816);

(statearr_43431_43812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (77))){
var inst_43222 = (state_43314[(11)]);
var inst_43252 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43253 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_43254 = cljs.core.type(inst_43222);
var inst_43255 = ["bb_web_ds_tools/persistence_test.cljs",50,new cljs.core.Keyword(null,"fail","fail",1706214930),26,39,inst_43253,39,inst_43254,"Export returns a Blob"];
var inst_43256 = cljs.core.PersistentHashMap.fromArrays(inst_43252,inst_43255);
var inst_43257 = cljs.test.report.call(null,inst_43256);
var state_43314__$1 = state_43314;
var statearr_43432_43813 = state_43314__$1;
(statearr_43432_43813[(2)] = inst_43257);

(statearr_43432_43813[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (54))){
var inst_43086 = (state_43314[(17)]);
var inst_43089 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43090 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","test","content",(123)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_43091 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43092 = cljs.core.cons(inst_43091,inst_43086);
var inst_43093 = ["bb_web_ds_tools/persistence_test.cljs",73,new cljs.core.Keyword(null,"pass","pass",1574159993),26,29,inst_43090,29,inst_43092,"Row matches"];
var inst_43094 = cljs.core.PersistentHashMap.fromArrays(inst_43089,inst_43093);
var inst_43095 = cljs.test.report.call(null,inst_43094);
var state_43314__$1 = state_43314;
var statearr_43433_43814 = state_43314__$1;
(statearr_43433_43814[(2)] = inst_43095);

(statearr_43433_43814[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (15))){
var inst_42866 = (state_43314[(27)]);
var inst_42869 = cljs.core.ex_data(inst_42866);
var inst_42870 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42869);
var inst_42871 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42870,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_43314__$1 = state_43314;
var statearr_43434_43815 = state_43314__$1;
(statearr_43434_43815[(2)] = inst_42871);

(statearr_43434_43815[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (48))){
var _ = (function (){var statearr_43436 = state_43314;
(statearr_43436[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43436;
})();
var inst_43049 = (state_43314[(2)]);
var inst_43050 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43051 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_43052 = (new cljs.core.PersistentVector(null,1,(5),inst_43050,inst_43051,null));
var inst_43053 = cljs.test.update_current_env_BANG_(inst_43052,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_43314[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_43314__$1 = (function (){var statearr_43441 = state_43314;
(statearr_43441[(28)] = inst_43053);

return statearr_43441;
})();
var statearr_43442_43816 = state_43314__$1;
(statearr_43442_43816[(2)] = inst_43049);

(statearr_43442_43816[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (50))){
var inst_43066 = (state_43314[(25)]);
var inst_43086 = (state_43314[(17)]);
var inst_43087 = (state_43314[(29)]);
var _ = (function (){var statearr_43443 = state_43314;
(statearr_43443[(4)] = cljs.core.cons((53),(state_43314[(4)])));

return statearr_43443;
})();
var inst_43078 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43079 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43080 = ["1","test","content",(123)];
var inst_43081 = (new cljs.core.PersistentVector(null,4,(5),inst_43079,inst_43080,null));
var inst_43082 = [inst_43081];
var inst_43083 = (new cljs.core.PersistentVector(null,1,(5),inst_43078,inst_43082,null));
var inst_43084 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_43066);
var inst_43085 = (new cljs.core.List(null,inst_43084,null,(1),null));
var inst_43086__$1 = (new cljs.core.List(null,inst_43083,inst_43085,(2),null));
var inst_43087__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_43086__$1);
var state_43314__$1 = (function (){var statearr_43444 = state_43314;
(statearr_43444[(17)] = inst_43086__$1);

(statearr_43444[(29)] = inst_43087__$1);

return statearr_43444;
})();
if(cljs.core.truth_(inst_43087__$1)){
var statearr_43445_43817 = state_43314__$1;
(statearr_43445_43817[(1)] = (54));

} else {
var statearr_43446_43818 = state_43314__$1;
(statearr_43446_43818[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (75))){
var _ = (function (){var statearr_43448 = state_43314;
(statearr_43448[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43448;
})();
var state_43314__$1 = state_43314;
var ex43435 = (state_43314__$1[(2)]);
var statearr_43466_43819 = state_43314__$1;
(statearr_43466_43819[(5)] = ex43435);


var statearr_43467_43820 = state_43314__$1;
(statearr_43467_43820[(1)] = (74));

(statearr_43467_43820[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (21))){
var inst_42879 = (state_43314[(10)]);
var inst_42902 = (state_43314[(30)]);
var inst_42903 = (state_43314[(15)]);
var _ = (function (){var statearr_43468 = state_43314;
(statearr_43468[(4)] = cljs.core.cons((24),(state_43314[(4)])));

return statearr_43468;
})();
var inst_42902__$1 = (new cljs.core.List(null,inst_42879,null,(1),null));
var inst_42903__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_42902__$1);
var state_43314__$1 = (function (){var statearr_43469 = state_43314;
(statearr_43469[(30)] = inst_42902__$1);

(statearr_43469[(15)] = inst_42903__$1);

return statearr_43469;
})();
if(cljs.core.truth_(inst_42903__$1)){
var statearr_43470_43821 = state_43314__$1;
(statearr_43470_43821[(1)] = (25));

} else {
var statearr_43471_43822 = state_43314__$1;
(statearr_43471_43822[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (31))){
var _ = (function (){var statearr_43472 = state_43314;
(statearr_43472[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43472;
})();
var state_43314__$1 = state_43314;
var ex43447 = (state_43314__$1[(2)]);
var statearr_43473_43823 = state_43314__$1;
(statearr_43473_43823[(5)] = ex43447);


var statearr_43488_43824 = state_43314__$1;
(statearr_43488_43824[(1)] = (30));

(statearr_43488_43824[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (32))){
var inst_42942 = (state_43314[(31)]);
var inst_42945 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42946 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_42947 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_42948 = cljs.core.cons(inst_42947,inst_42942);
var inst_42949 = ["bb_web_ds_tools/persistence_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),22,19,inst_42946,19,inst_42948,"DB created"];
var inst_42950 = cljs.core.PersistentHashMap.fromArrays(inst_42945,inst_42949);
var inst_42951 = cljs.test.report.call(null,inst_42950);
var state_43314__$1 = state_43314;
var statearr_43491_43825 = state_43314__$1;
(statearr_43491_43825[(2)] = inst_42951);

(statearr_43491_43825[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (40))){
var inst_43038 = (state_43314[(2)]);
var _ = (function (){var statearr_43496 = state_43314;
(statearr_43496[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43496;
})();
var state_43314__$1 = state_43314;
var statearr_43497_43826 = state_43314__$1;
(statearr_43497_43826[(2)] = inst_43038);

(statearr_43497_43826[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (56))){
var inst_43087 = (state_43314[(29)]);
var inst_43108 = (state_43314[(2)]);
var _ = (function (){var statearr_43499 = state_43314;
(statearr_43499[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43499;
})();
var state_43314__$1 = (function (){var statearr_43501 = state_43314;
(statearr_43501[(32)] = inst_43108);

return statearr_43501;
})();
var statearr_43502_43827 = state_43314__$1;
(statearr_43502_43827[(2)] = inst_43087);

(statearr_43502_43827[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (33))){
var inst_42942 = (state_43314[(31)]);
var inst_42961 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42962 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_42963 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42964 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_42965 = cljs.core.cons(inst_42964,inst_42942);
var inst_42966 = (new cljs.core.List(null,inst_42965,null,(1),null));
var inst_42967 = (new cljs.core.List(null,inst_42963,inst_42966,(2),null));
var inst_42968 = ["bb_web_ds_tools/persistence_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),22,19,inst_42962,19,inst_42967,"DB created"];
var inst_42969 = cljs.core.PersistentHashMap.fromArrays(inst_42961,inst_42968);
var inst_42970 = cljs.test.report.call(null,inst_42969);
var state_43314__$1 = state_43314;
var statearr_43523_43828 = state_43314__$1;
(statearr_43523_43828[(2)] = inst_42970);

(statearr_43523_43828[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (13))){
var _ = (function (){var statearr_43524 = state_43314;
(statearr_43524[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43524;
})();
var state_43314__$1 = state_43314;
var ex43498 = (state_43314__$1[(2)]);
var statearr_43526_43829 = state_43314__$1;
(statearr_43526_43829[(5)] = ex43498);


var statearr_43527_43830 = state_43314__$1;
(statearr_43527_43830[(1)] = (5));

(statearr_43527_43830[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (22))){
var inst_42879 = (state_43314[(10)]);
var inst_42927 = (state_43314[(2)]);
var inst_42928 = inst_42879.oo1;
var inst_42929 = inst_42928.DB;
var inst_42930 = (new inst_42929(":memory:","ct"));
var state_43314__$1 = (function (){var statearr_43548 = state_43314;
(statearr_43548[(33)] = inst_42927);

(statearr_43548[(23)] = inst_42930);

return statearr_43548;
})();
var statearr_43597_43831 = state_43314__$1;
(statearr_43597_43831[(2)] = null);

(statearr_43597_43831[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (36))){
var inst_43041 = (state_43314[(2)]);
var inst_43044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43045 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_43046 = (new cljs.core.PersistentVector(null,1,(5),inst_43044,inst_43045,null));
var inst_43047 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_43046,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Insert and Query Manual"], 0));
var state_43314__$1 = (function (){var statearr_43606 = state_43314;
(statearr_43606[(34)] = inst_43041);

(statearr_43606[(35)] = inst_43047);

return statearr_43606;
})();
var statearr_43607_43832 = state_43314__$1;
(statearr_43607_43832[(2)] = null);

(statearr_43607_43832[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (41))){
var inst_43000 = (state_43314[(2)]);
var inst_43001 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43002 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_43003 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"error","error",-978969032),26,24,inst_43002,24,inst_43000,"datasets table exists"];
var inst_43004 = cljs.core.PersistentHashMap.fromArrays(inst_43001,inst_43003);
var inst_43005 = cljs.test.report.call(null,inst_43004);
var state_43314__$1 = state_43314;
var statearr_43617_43833 = state_43314__$1;
(statearr_43617_43833[(2)] = inst_43005);

(statearr_43617_43833[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (43))){
var inst_43013 = (state_43314[(21)]);
var inst_43016 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43017 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_43018 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43019 = cljs.core.cons(inst_43018,inst_43013);
var inst_43020 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"pass","pass",1574159993),26,24,inst_43017,24,inst_43019,"datasets table exists"];
var inst_43021 = cljs.core.PersistentHashMap.fromArrays(inst_43016,inst_43020);
var inst_43022 = cljs.test.report.call(null,inst_43021);
var state_43314__$1 = state_43314;
var statearr_43632_43834 = state_43314__$1;
(statearr_43632_43834[(2)] = inst_43022);

(statearr_43632_43834[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (61))){
var inst_43149 = (state_43314[(36)]);
var inst_43147 = (state_43314[(37)]);
var inst_43163 = (state_43314[(7)]);
var inst_43164 = (state_43314[(38)]);
var _ = (function (){var statearr_43642 = state_43314;
(statearr_43642[(4)] = cljs.core.cons((64),(state_43314[(4)])));

return statearr_43642;
})();
var inst_43162 = (new cljs.core.List(null,inst_43149,null,(1),null));
var inst_43163__$1 = (new cljs.core.List(null,inst_43147,inst_43162,(2),null));
var inst_43164__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_43163__$1);
var state_43314__$1 = (function (){var statearr_43643 = state_43314;
(statearr_43643[(7)] = inst_43163__$1);

(statearr_43643[(38)] = inst_43164__$1);

return statearr_43643;
})();
if(cljs.core.truth_(inst_43164__$1)){
var statearr_43644_43835 = state_43314__$1;
(statearr_43644_43835[(1)] = (65));

} else {
var statearr_43645_43836 = state_43314__$1;
(statearr_43645_43836[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (29))){
var inst_42975 = (state_43314[(2)]);
var inst_42976 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42977 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_42978 = (new cljs.core.PersistentVector(null,1,(5),inst_42976,inst_42977,null));
var inst_42979 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_42978,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Create Tables"], 0));
var state_43314__$1 = (function (){var statearr_43646 = state_43314;
(statearr_43646[(39)] = inst_42975);

(statearr_43646[(40)] = inst_42979);

return statearr_43646;
})();
var statearr_43647_43837 = state_43314__$1;
(statearr_43647_43837[(2)] = null);

(statearr_43647_43837[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (44))){
var inst_43013 = (state_43314[(21)]);
var inst_43024 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43025 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_43026 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43027 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43028 = cljs.core.cons(inst_43027,inst_43013);
var inst_43029 = (new cljs.core.List(null,inst_43028,null,(1),null));
var inst_43030 = (new cljs.core.List(null,inst_43026,inst_43029,(2),null));
var inst_43031 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"fail","fail",1706214930),26,24,inst_43025,24,inst_43030,"datasets table exists"];
var inst_43032 = cljs.core.PersistentHashMap.fromArrays(inst_43024,inst_43031);
var inst_43033 = cljs.test.report.call(null,inst_43032);
var state_43314__$1 = state_43314;
var statearr_43648_43838 = state_43314__$1;
(statearr_43648_43838[(2)] = inst_43033);

(statearr_43648_43838[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (6))){
var _ = (function (){var statearr_43650 = state_43314;
(statearr_43650[(4)] = cljs.core.cons((9),(state_43314[(4)])));

return statearr_43650;
})();
var state_43314__$1 = state_43314;
var statearr_43651_43839 = state_43314__$1;
(statearr_43651_43839[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (28))){
var inst_42930 = (state_43314[(23)]);
var inst_42942 = (state_43314[(31)]);
var inst_42943 = (state_43314[(41)]);
var _ = (function (){var statearr_43653 = state_43314;
(statearr_43653[(4)] = cljs.core.cons((31),(state_43314[(4)])));

return statearr_43653;
})();
var inst_42942__$1 = (new cljs.core.List(null,inst_42930,null,(1),null));
var inst_42943__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_42942__$1);
var state_43314__$1 = (function (){var statearr_43654 = state_43314;
(statearr_43654[(31)] = inst_42942__$1);

(statearr_43654[(41)] = inst_42943__$1);

return statearr_43654;
})();
if(cljs.core.truth_(inst_42943__$1)){
var statearr_43655_43840 = state_43314__$1;
(statearr_43655_43840[(1)] = (32));

} else {
var statearr_43656_43841 = state_43314__$1;
(statearr_43656_43841[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (64))){
var _ = (function (){var statearr_43657 = state_43314;
(statearr_43657[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43657;
})();
var state_43314__$1 = state_43314;
var ex43649 = (state_43314__$1[(2)]);
var statearr_43658_43842 = state_43314__$1;
(statearr_43658_43842[(5)] = ex43649);


var statearr_43659_43843 = state_43314__$1;
(statearr_43659_43843[(1)] = (63));

(statearr_43659_43843[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (51))){
var inst_43111 = (state_43314[(2)]);
var _ = (function (){var statearr_43660 = state_43314;
(statearr_43660[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43660;
})();
var state_43314__$1 = state_43314;
var statearr_43665_43844 = state_43314__$1;
(statearr_43665_43844[(2)] = inst_43111);

(statearr_43665_43844[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (25))){
var inst_42902 = (state_43314[(30)]);
var inst_42905 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42906 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_42907 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_42908 = cljs.core.cons(inst_42907,inst_42902);
var inst_42909 = ["bb_web_ds_tools/persistence_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),20,15,inst_42906,15,inst_42908,"SQLite module loaded"];
var inst_42910 = cljs.core.PersistentHashMap.fromArrays(inst_42905,inst_42909);
var inst_42911 = cljs.test.report.call(null,inst_42910);
var state_43314__$1 = state_43314;
var statearr_43667_43845 = state_43314__$1;
(statearr_43667_43845[(2)] = inst_42911);

(statearr_43667_43845[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (34))){
var inst_42943 = (state_43314[(41)]);
var inst_42972 = (state_43314[(2)]);
var _ = (function (){var statearr_43668 = state_43314;
(statearr_43668[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43668;
})();
var state_43314__$1 = (function (){var statearr_43669 = state_43314;
(statearr_43669[(42)] = inst_42972);

return statearr_43669;
})();
var statearr_43670_43846 = state_43314__$1;
(statearr_43670_43846[(2)] = inst_42943);

(statearr_43670_43846[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (17))){
var inst_42874 = (state_43314[(2)]);
var state_43314__$1 = state_43314;
if(cljs.core.truth_(inst_42874)){
var statearr_43671_43847 = state_43314__$1;
(statearr_43671_43847[(1)] = (18));

} else {
var statearr_43672_43848 = state_43314__$1;
(statearr_43672_43848[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (3))){
var inst_43308 = (state_43314[(2)]);
var state_43314__$1 = state_43314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43314__$1,inst_43308);
} else {
if((state_val_43317 === (12))){
var inst_42847 = (state_43314[(2)]);
var _ = (function (){var statearr_43674 = state_43314;
(statearr_43674[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43674;
})();
var state_43314__$1 = (function (){var statearr_43675 = state_43314;
(statearr_43675[(43)] = inst_42847);

return statearr_43675;
})();
var statearr_43676_43849 = state_43314__$1;
(statearr_43676_43849[(2)] = true);

(statearr_43676_43849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (2))){
var _ = (function (){var statearr_43677 = state_43314;
(statearr_43677[(4)] = cljs.core.cons((4),(state_43314[(4)])));

return statearr_43677;
})();
var ___$1 = (function (){var statearr_43678 = state_43314;
(statearr_43678[(4)] = cljs.core.cons((13),(state_43314[(4)])));

return statearr_43678;
})();
var inst_42857 = [new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.Keyword(null,"printErr","printErr",-1323332006)];
var inst_42858 = (function (){return (function (x){
return console.log("SQLite:",x);
});
})();
var inst_42859 = (function (){return (function (x){
return console.error("SQLite Err:",x);
});
})();
var inst_42860 = [inst_42858,inst_42859];
var inst_42861 = cljs.core.PersistentHashMap.fromArrays(inst_42857,inst_42860);
var inst_42862 = cljs.core.clj__GT_js(inst_42861);
var inst_42863 = shadow.js.shim.module$$sqlite_org$sqlite_wasm.default(inst_42862);
var inst_42864 = cljs.core.async.interop.p__GT_c(inst_42863);
var state_43314__$1 = state_43314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43314__$1,(14),inst_42864);
} else {
if((state_val_43317 === (66))){
var inst_43163 = (state_43314[(7)]);
var inst_43175 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43176 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"datasets","datasets",-758071350,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null));
var inst_43177 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43178 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43179 = cljs.core.cons(inst_43178,inst_43163);
var inst_43180 = (new cljs.core.List(null,inst_43179,null,(1),null));
var inst_43181 = (new cljs.core.List(null,inst_43177,inst_43180,(2),null));
var inst_43182 = ["bb_web_ds_tools/persistence_test.cljs",47,new cljs.core.Keyword(null,"fail","fail",1706214930),28,35,inst_43176,35,inst_43181,null];
var inst_43183 = cljs.core.PersistentHashMap.fromArrays(inst_43175,inst_43182);
var inst_43184 = cljs.test.report.call(null,inst_43183);
var state_43314__$1 = state_43314;
var statearr_43680_43850 = state_43314__$1;
(statearr_43680_43850[(2)] = inst_43184);

(statearr_43680_43850[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (23))){
var inst_42891 = (state_43314[(2)]);
var inst_42892 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42893 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_42894 = ["bb_web_ds_tools/persistence_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),20,15,inst_42893,15,inst_42891,"SQLite module loaded"];
var inst_42895 = cljs.core.PersistentHashMap.fromArrays(inst_42892,inst_42894);
var inst_42896 = cljs.test.report.call(null,inst_42895);
var state_43314__$1 = state_43314;
var statearr_43681_43851 = state_43314__$1;
(statearr_43681_43851[(2)] = inst_42896);

(statearr_43681_43851[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (47))){
var inst_43114 = (state_43314[(2)]);
var inst_43115 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43116 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_43117 = (new cljs.core.PersistentVector(null,1,(5),inst_43115,inst_43116,null));
var inst_43118 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_43117,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Persist Datasets"], 0));
var state_43314__$1 = (function (){var statearr_43683 = state_43314;
(statearr_43683[(44)] = inst_43114);

(statearr_43683[(45)] = inst_43118);

return statearr_43683;
})();
var statearr_43687_43852 = state_43314__$1;
(statearr_43687_43852[(2)] = null);

(statearr_43687_43852[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (35))){
var inst_42930 = (state_43314[(23)]);
var _ = (function (){var statearr_43689 = state_43314;
(statearr_43689[(4)] = cljs.core.cons((37),(state_43314[(4)])));

return statearr_43689;
})();
var ___$1 = (function (){var statearr_43691 = state_43314;
(statearr_43691[(4)] = cljs.core.cons((38),(state_43314[(4)])));

return statearr_43691;
})();
var inst_42994 = bb_web_ds_tools.workspaces.persistence_fx.create_tables_BANG_(inst_42930);
var inst_42995 = [new cljs.core.Keyword(null,"returnValue","returnValue",1643246062)];
var inst_42996 = ["resultRows"];
var inst_42997 = cljs.core.PersistentHashMap.fromArrays(inst_42995,inst_42996);
var inst_42998 = cljs.core.clj__GT_js(inst_42997);
var inst_42999 = inst_42930.exec("SELECT name FROM sqlite_master WHERE type='table' AND name='datasets'",inst_42998);
var state_43314__$1 = (function (){var statearr_43692 = state_43314;
(statearr_43692[(46)] = inst_42994);

(statearr_43692[(20)] = inst_42999);

return statearr_43692;
})();
var statearr_43693_43853 = state_43314__$1;
(statearr_43693_43853[(2)] = null);

(statearr_43693_43853[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (82))){
var _ = (function (){var statearr_43694 = state_43314;
(statearr_43694[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43694;
})();
var state_43314__$1 = state_43314;
var ex43682 = (state_43314__$1[(2)]);
var statearr_43695_43854 = state_43314__$1;
(statearr_43695_43854[(5)] = ex43682);


var statearr_43696_43855 = state_43314__$1;
(statearr_43696_43855[(1)] = (81));

(statearr_43696_43855[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (76))){
var inst_43222 = (state_43314[(11)]);
var inst_43244 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43245 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_43246 = cljs.core.type(inst_43222);
var inst_43247 = ["bb_web_ds_tools/persistence_test.cljs",50,new cljs.core.Keyword(null,"pass","pass",1574159993),26,39,inst_43245,39,inst_43246,"Export returns a Blob"];
var inst_43249 = cljs.core.PersistentHashMap.fromArrays(inst_43244,inst_43247);
var inst_43250 = cljs.test.report.call(null,inst_43249);
var state_43314__$1 = state_43314;
var statearr_43697_43856 = state_43314__$1;
(statearr_43697_43856[(2)] = inst_43250);

(statearr_43697_43856[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (19))){
var inst_42866 = (state_43314[(27)]);
var state_43314__$1 = state_43314;
var statearr_43698_43857 = state_43314__$1;
(statearr_43698_43857[(2)] = inst_42866);

(statearr_43698_43857[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (57))){
var inst_42930 = (state_43314[(23)]);
var inst_43147 = (state_43314[(37)]);
var _ = (function (){var statearr_43700 = state_43314;
(statearr_43700[(4)] = cljs.core.cons((59),(state_43314[(4)])));

return statearr_43700;
})();
var ___$1 = (function (){var statearr_43701 = state_43314;
(statearr_43701[(4)] = cljs.core.cons((60),(state_43314[(4)])));

return statearr_43701;
})();
var inst_43136 = ["d1"];
var inst_43137 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_43138 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43139 = [new cljs.core.Keyword(null,"a","a",-2123407586)];
var inst_43140 = [(1)];
var inst_43141 = cljs.core.PersistentHashMap.fromArrays(inst_43139,inst_43140);
var inst_43142 = [inst_43141];
var inst_43143 = (new cljs.core.PersistentVector(null,1,(5),inst_43138,inst_43142,null));
var inst_43144 = ["My Dataset",inst_43143];
var inst_43145 = cljs.core.PersistentHashMap.fromArrays(inst_43137,inst_43144);
var inst_43146 = [inst_43145];
var inst_43147__$1 = cljs.core.PersistentHashMap.fromArrays(inst_43136,inst_43146);
var inst_43148 = bb_web_ds_tools.workspaces.persistence_fx.persist_datasets_BANG_(inst_42930,inst_43147__$1);
var inst_43149 = bb_web_ds_tools.workspaces.persistence_fx.load_datasets_from_db(inst_42930);
var state_43314__$1 = (function (){var statearr_43702 = state_43314;
(statearr_43702[(37)] = inst_43147__$1);

(statearr_43702[(47)] = inst_43148);

(statearr_43702[(36)] = inst_43149);

return statearr_43702;
})();
var statearr_43703_43858 = state_43314__$1;
(statearr_43703_43858[(2)] = null);

(statearr_43703_43858[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (68))){
var inst_42930 = (state_43314[(23)]);
var _ = (function (){var statearr_43705 = state_43314;
(statearr_43705[(4)] = cljs.core.cons((70),(state_43314[(4)])));

return statearr_43705;
})();
var ___$1 = (function (){var statearr_43706 = state_43314;
(statearr_43706[(4)] = cljs.core.cons((71),(state_43314[(4)])));

return statearr_43706;
})();
var inst_43222 = bb_web_ds_tools.workspaces.persistence_fx.export_db(inst_42930);
var state_43314__$1 = (function (){var statearr_43707 = state_43314;
(statearr_43707[(11)] = inst_43222);

return statearr_43707;
})();
var statearr_43708_43859 = state_43314__$1;
(statearr_43708_43859[(2)] = null);

(statearr_43708_43859[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (11))){
var inst_42841 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42842 = true;
var inst_42843 = [null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,inst_42842,null,true,"Skipping SQLite tests due to environment limitations"];
var inst_42844 = cljs.core.PersistentHashMap.fromArrays(inst_42841,inst_42843);
var inst_42845 = cljs.test.report.call(null,inst_42844);
var state_43314__$1 = state_43314;
var statearr_43709_43860 = state_43314__$1;
(statearr_43709_43860[(2)] = inst_42845);

(statearr_43709_43860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (9))){
var _ = (function (){var statearr_43712 = state_43314;
(statearr_43712[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43712;
})();
var state_43314__$1 = state_43314;
var ex43704 = (state_43314__$1[(2)]);
var statearr_43713_43863 = state_43314__$1;
(statearr_43713_43863[(5)] = ex43704);


var statearr_43714_43864 = state_43314__$1;
(statearr_43714_43864[(1)] = (8));

(statearr_43714_43864[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (5))){
var inst_42820 = (state_43314[(2)]);
var inst_42821 = inst_42820.message;
var inst_42822 = console.warn("SQLite WASM initialization failed (expected if WASM assets are missing in test env):",inst_42821);
var state_43314__$1 = (function (){var statearr_43715 = state_43314;
(statearr_43715[(48)] = inst_42822);

return statearr_43715;
})();
var statearr_43716_43865 = state_43314__$1;
(statearr_43716_43865[(2)] = null);

(statearr_43716_43865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (83))){
var inst_43276 = (state_43314[(49)]);
var inst_43279 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43280 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_43281 = new cljs.core.Symbol(null,">",">",1085014381,null);
var inst_43282 = cljs.core.cons(inst_43281,inst_43276);
var inst_43283 = ["bb_web_ds_tools/persistence_test.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),26,40,inst_43280,40,inst_43282,"Blob is not empty"];
var inst_43284 = cljs.core.PersistentHashMap.fromArrays(inst_43279,inst_43283);
var inst_43285 = cljs.test.report.call(null,inst_43284);
var state_43314__$1 = state_43314;
var statearr_43718_43866 = state_43314__$1;
(statearr_43718_43866[(2)] = inst_43285);

(statearr_43718_43866[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (14))){
var inst_42866 = (state_43314[(27)]);
var inst_42867 = (state_43314[(50)]);
var inst_42866__$1 = (state_43314[(2)]);
var inst_42867__$1 = (inst_42866__$1 instanceof cljs.core.ExceptionInfo);
var state_43314__$1 = (function (){var statearr_43726 = state_43314;
(statearr_43726[(27)] = inst_42866__$1);

(statearr_43726[(50)] = inst_42867__$1);

return statearr_43726;
})();
if(cljs.core.truth_(inst_42867__$1)){
var statearr_43727_43867 = state_43314__$1;
(statearr_43727_43867[(1)] = (15));

} else {
var statearr_43728_43868 = state_43314__$1;
(statearr_43728_43868[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (45))){
var inst_43014 = (state_43314[(22)]);
var inst_43035 = (state_43314[(2)]);
var _ = (function (){var statearr_43730 = state_43314;
(statearr_43730[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43730;
})();
var state_43314__$1 = (function (){var statearr_43731 = state_43314;
(statearr_43731[(51)] = inst_43035);

return statearr_43731;
})();
var statearr_43732_43869 = state_43314__$1;
(statearr_43732_43869[(2)] = inst_43014);

(statearr_43732_43869[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (53))){
var _ = (function (){var statearr_43737 = state_43314;
(statearr_43737[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43737;
})();
var state_43314__$1 = state_43314;
var ex43721 = (state_43314__$1[(2)]);
var statearr_43738_43870 = state_43314__$1;
(statearr_43738_43870[(5)] = ex43721);


var statearr_43739_43871 = state_43314__$1;
(statearr_43739_43871[(1)] = (52));

(statearr_43739_43871[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (78))){
var inst_43242 = (state_43314[(12)]);
var inst_43259 = (state_43314[(2)]);
var _ = (function (){var statearr_43740 = state_43314;
(statearr_43740[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43740;
})();
var state_43314__$1 = (function (){var statearr_43741 = state_43314;
(statearr_43741[(52)] = inst_43259);

return statearr_43741;
})();
var statearr_43742_43872 = state_43314__$1;
(statearr_43742_43872[(2)] = inst_43242);

(statearr_43742_43872[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (26))){
var inst_42902 = (state_43314[(30)]);
var inst_42913 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42914 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_42915 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42916 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_42917 = cljs.core.cons(inst_42916,inst_42902);
var inst_42918 = (new cljs.core.List(null,inst_42917,null,(1),null));
var inst_42919 = (new cljs.core.List(null,inst_42915,inst_42918,(2),null));
var inst_42920 = ["bb_web_ds_tools/persistence_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),20,15,inst_42914,15,inst_42919,"SQLite module loaded"];
var inst_42921 = cljs.core.PersistentHashMap.fromArrays(inst_42913,inst_42920);
var inst_42922 = cljs.test.report.call(null,inst_42921);
var state_43314__$1 = state_43314;
var statearr_43744_43873 = state_43314__$1;
(statearr_43744_43873[(2)] = inst_42922);

(statearr_43744_43873[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (16))){
var inst_42867 = (state_43314[(50)]);
var state_43314__$1 = state_43314;
var statearr_43745_43874 = state_43314__$1;
(statearr_43745_43874[(2)] = inst_42867);

(statearr_43745_43874[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (81))){
var inst_43263 = (state_43314[(2)]);
var inst_43264 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43265 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_43266 = ["bb_web_ds_tools/persistence_test.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),26,40,inst_43265,40,inst_43263,"Blob is not empty"];
var inst_43267 = cljs.core.PersistentHashMap.fromArrays(inst_43264,inst_43266);
var inst_43268 = cljs.test.report.call(null,inst_43267);
var state_43314__$1 = state_43314;
var statearr_43747_43875 = state_43314__$1;
(statearr_43747_43875[(2)] = inst_43268);

(statearr_43747_43875[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (79))){
var inst_43222 = (state_43314[(11)]);
var inst_43276 = (state_43314[(49)]);
var inst_43277 = (state_43314[(18)]);
var _ = (function (){var statearr_43748 = state_43314;
(statearr_43748[(4)] = cljs.core.cons((82),(state_43314[(4)])));

return statearr_43748;
})();
var inst_43274 = inst_43222.size;
var inst_43275 = (new cljs.core.List(null,(0),null,(1),null));
var inst_43276__$1 = (new cljs.core.List(null,inst_43274,inst_43275,(2),null));
var inst_43277__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,inst_43276__$1);
var state_43314__$1 = (function (){var statearr_43749 = state_43314;
(statearr_43749[(49)] = inst_43276__$1);

(statearr_43749[(18)] = inst_43277__$1);

return statearr_43749;
})();
if(cljs.core.truth_(inst_43277__$1)){
var statearr_43750_43877 = state_43314__$1;
(statearr_43750_43877[(1)] = (83));

} else {
var statearr_43751_43878 = state_43314__$1;
(statearr_43751_43878[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (38))){
var _ = (function (){var statearr_43752 = state_43314;
(statearr_43752[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43752;
})();
var state_43314__$1 = state_43314;
var ex43746 = (state_43314__$1[(2)]);
var statearr_43753_43879 = state_43314__$1;
(statearr_43753_43879[(5)] = ex43746);


throw ex43746;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (30))){
var inst_42931 = (state_43314[(2)]);
var inst_42932 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42933 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_42934 = ["bb_web_ds_tools/persistence_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),22,19,inst_42933,19,inst_42931,"DB created"];
var inst_42935 = cljs.core.PersistentHashMap.fromArrays(inst_42932,inst_42934);
var inst_42936 = cljs.test.report.call(null,inst_42935);
var state_43314__$1 = state_43314;
var statearr_43754_43880 = state_43314__$1;
(statearr_43754_43880[(2)] = inst_42936);

(statearr_43754_43880[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (73))){
var inst_43262 = (state_43314[(2)]);
var state_43314__$1 = (function (){var statearr_43755 = state_43314;
(statearr_43755[(53)] = inst_43262);

return statearr_43755;
})();
var statearr_43756_43881 = state_43314__$1;
(statearr_43756_43881[(2)] = null);

(statearr_43756_43881[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (10))){
var inst_42835 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42836 = true;
var inst_42837 = [null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,inst_42836,null,true,"Skipping SQLite tests due to environment limitations"];
var inst_42838 = cljs.core.PersistentHashMap.fromArrays(inst_42835,inst_42837);
var inst_42839 = cljs.test.report.call(null,inst_42838);
var state_43314__$1 = state_43314;
var statearr_43757_43882 = state_43314__$1;
(statearr_43757_43882[(2)] = inst_42839);

(statearr_43757_43882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (18))){
var inst_42866 = (state_43314[(27)]);
var inst_42876 = (function(){throw inst_42866})();
var state_43314__$1 = state_43314;
var statearr_43758_43883 = state_43314__$1;
(statearr_43758_43883[(2)] = inst_42876);

(statearr_43758_43883[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (52))){
var inst_43067 = (state_43314[(2)]);
var inst_43068 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43069 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","test","content",(123)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_43070 = ["bb_web_ds_tools/persistence_test.cljs",73,new cljs.core.Keyword(null,"error","error",-978969032),26,29,inst_43069,29,inst_43067,"Row matches"];
var inst_43071 = cljs.core.PersistentHashMap.fromArrays(inst_43068,inst_43070);
var inst_43072 = cljs.test.report.call(null,inst_43071);
var state_43314__$1 = state_43314;
var statearr_43760_43885 = state_43314__$1;
(statearr_43760_43885[(2)] = inst_43072);

(statearr_43760_43885[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (67))){
var inst_43164 = (state_43314[(38)]);
var inst_43186 = (state_43314[(2)]);
var _ = (function (){var statearr_43762 = state_43314;
(statearr_43762[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43762;
})();
var state_43314__$1 = (function (){var statearr_43763 = state_43314;
(statearr_43763[(54)] = inst_43186);

return statearr_43763;
})();
var statearr_43764_43886 = state_43314__$1;
(statearr_43764_43886[(2)] = inst_43164);

(statearr_43764_43886[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (71))){
var _ = (function (){var statearr_43765 = state_43314;
(statearr_43765[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43765;
})();
var state_43314__$1 = state_43314;
var ex43759 = (state_43314__$1[(2)]);
var statearr_43766_43887 = state_43314__$1;
(statearr_43766_43887[(5)] = ex43759);


throw ex43759;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (42))){
var _ = (function (){var statearr_43767 = state_43314;
(statearr_43767[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43767;
})();
var state_43314__$1 = state_43314;
var ex43761 = (state_43314__$1[(2)]);
var statearr_43768_43889 = state_43314__$1;
(statearr_43768_43889[(5)] = ex43761);


var statearr_43769_43890 = state_43314__$1;
(statearr_43769_43890[(1)] = (41));

(statearr_43769_43890[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (80))){
var inst_43302 = (state_43314[(2)]);
var _ = (function (){var statearr_43770 = state_43314;
(statearr_43770[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43770;
})();
var state_43314__$1 = state_43314;
var statearr_43771_43891 = state_43314__$1;
(statearr_43771_43891[(2)] = inst_43302);

(statearr_43771_43891[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (37))){
var _ = (function (){var statearr_43772 = state_43314;
(statearr_43772[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43772;
})();
var inst_42981 = (state_43314[(2)]);
var inst_42983 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42984 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_42985 = (new cljs.core.PersistentVector(null,1,(5),inst_42983,inst_42984,null));
var inst_42986 = cljs.test.update_current_env_BANG_(inst_42985,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_43314[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_43314__$1 = (function (){var statearr_43773 = state_43314;
(statearr_43773[(55)] = inst_42986);

return statearr_43773;
})();
var statearr_43774_43892 = state_43314__$1;
(statearr_43774_43892[(2)] = inst_42981);

(statearr_43774_43892[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (63))){
var inst_43151 = (state_43314[(2)]);
var inst_43152 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43153 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"datasets","datasets",-758071350,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null));
var inst_43154 = ["bb_web_ds_tools/persistence_test.cljs",47,new cljs.core.Keyword(null,"error","error",-978969032),28,35,inst_43153,35,inst_43151,null];
var inst_43155 = cljs.core.PersistentHashMap.fromArrays(inst_43152,inst_43154);
var inst_43156 = cljs.test.report.call(null,inst_43155);
var state_43314__$1 = state_43314;
var statearr_43776_43893 = state_43314__$1;
(statearr_43776_43893[(2)] = inst_43156);

(statearr_43776_43893[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (8))){
var inst_42823 = (state_43314[(2)]);
var inst_42824 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42825 = true;
var inst_42826 = [null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,inst_42825,null,inst_42823,"Skipping SQLite tests due to environment limitations"];
var inst_42827 = cljs.core.PersistentHashMap.fromArrays(inst_42824,inst_42826);
var inst_42828 = cljs.test.report.call(null,inst_42827);
var state_43314__$1 = state_43314;
var statearr_43777_43894 = state_43314__$1;
(statearr_43777_43894[(2)] = inst_42828);

(statearr_43777_43894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (49))){
var _ = (function (){var statearr_43778 = state_43314;
(statearr_43778[(4)] = cljs.core.rest((state_43314[(4)])));

return statearr_43778;
})();
var state_43314__$1 = state_43314;
var ex43775 = (state_43314__$1[(2)]);
var statearr_43779_43895 = state_43314__$1;
(statearr_43779_43895[(5)] = ex43775);


throw ex43775;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43317 === (84))){
var inst_43276 = (state_43314[(49)]);
var inst_43287 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43288 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_43290 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43291 = new cljs.core.Symbol(null,">",">",1085014381,null);
var inst_43292 = cljs.core.cons(inst_43291,inst_43276);
var inst_43293 = (new cljs.core.List(null,inst_43292,null,(1),null));
var inst_43294 = (new cljs.core.List(null,inst_43290,inst_43293,(2),null));
var inst_43295 = ["bb_web_ds_tools/persistence_test.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),26,40,inst_43288,40,inst_43294,"Blob is not empty"];
var inst_43296 = cljs.core.PersistentHashMap.fromArrays(inst_43287,inst_43295);
var inst_43297 = cljs.test.report.call(null,inst_43296);
var state_43314__$1 = state_43314;
var statearr_43780_43896 = state_43314__$1;
(statearr_43780_43896[(2)] = inst_43297);

(statearr_43780_43896[(1)] = (85));


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
});
return (function() {
var bb_web_ds_tools$persistence_test$state_machine__24102__auto__ = null;
var bb_web_ds_tools$persistence_test$state_machine__24102__auto____0 = (function (){
var statearr_43781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43781[(0)] = bb_web_ds_tools$persistence_test$state_machine__24102__auto__);

(statearr_43781[(1)] = (1));

return statearr_43781;
});
var bb_web_ds_tools$persistence_test$state_machine__24102__auto____1 = (function (state_43314){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_43314);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e43782){var ex__24105__auto__ = e43782;
var statearr_43783_43898 = state_43314;
(statearr_43783_43898[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_43314[(4)]))){
var statearr_43784_43899 = state_43314;
(statearr_43784_43899[(1)] = cljs.core.first((state_43314[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43900 = state_43314;
state_43314 = G__43900;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$persistence_test$state_machine__24102__auto__ = function(state_43314){
switch(arguments.length){
case 0:
return bb_web_ds_tools$persistence_test$state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$persistence_test$state_machine__24102__auto____1.call(this,state_43314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$persistence_test$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$persistence_test$state_machine__24102__auto____0;
bb_web_ds_tools$persistence_test$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$persistence_test$state_machine__24102__auto____1;
return bb_web_ds_tools$persistence_test$state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_43785 = f__24149__auto__();
(statearr_43785[(6)] = c__24148__auto__);

return statearr_43785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test42810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42811","meta42811",-1894749182,null)], null);
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test42810.cljs$lang$type = true);

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test42810.cljs$lang$ctorStr = "bb-web-ds-tools.persistence-test/t_bb_web_ds_tools$persistence_test42810");

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test42810.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.persistence-test/t_bb_web_ds_tools$persistence_test42810");
}));

/**
 * Positional factory function for bb-web-ds-tools.persistence-test/t_bb_web_ds_tools$persistence_test42810.
 */
bb_web_ds_tools.persistence_test.__GT_t_bb_web_ds_tools$persistence_test42810 = (function bb_web_ds_tools$persistence_test$__GT_t_bb_web_ds_tools$persistence_test42810(meta42811){
return (new bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test42810(meta42811));
});


bb_web_ds_tools.persistence_test.test_sqlite_wasm = (function bb_web_ds_tools$persistence_test$test_sqlite_wasm(){
return cljs.test.test_var(bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$var);
});
bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$test = (function (){
return (new bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test42810(null));
});

(bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.persistence_test.test_sqlite_wasm;},new cljs.core.Symbol("bb-web-ds-tools.persistence-test","test-sqlite-wasm","bb-web-ds-tools.persistence-test/test-sqlite-wasm",537405847,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.persistence-test","bb-web-ds-tools.persistence-test",724034039,null),new cljs.core.Symbol(null,"test-sqlite-wasm","test-sqlite-wasm",165441020,null),"bb_web_ds_tools/persistence_test.cljs",26,1,8,8,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.persistence_test.test_sqlite_wasm)?bb_web_ds_tools.persistence_test.test_sqlite_wasm.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.persistence_test.js.map
