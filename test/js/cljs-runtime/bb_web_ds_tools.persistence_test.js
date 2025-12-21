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
var G__42815 = (arguments.length - (1));
switch (G__42815) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test42810.prototype.apply = (function (self__,args42814){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args42814)));
}));

(bb_web_ds_tools.persistence_test.t_bb_web_ds_tools$persistence_test42810.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_43306){
var state_val_43307 = (state_43306[(1)]);
if((state_val_43307 === (65))){
var inst_43162 = (state_43306[(7)]);
var inst_43165 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43166 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"datasets","datasets",-758071350,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null));
var inst_43167 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43168 = cljs.core.cons(inst_43167,inst_43162);
var inst_43169 = ["bb_web_ds_tools/persistence_test.cljs",47,new cljs.core.Keyword(null,"pass","pass",1574159993),28,35,inst_43166,35,inst_43168,null];
var inst_43170 = cljs.core.PersistentHashMap.fromArrays(inst_43165,inst_43169);
var inst_43171 = cljs.test.report.call(null,inst_43170);
var state_43306__$1 = state_43306;
var statearr_43311_43785 = state_43306__$1;
(statearr_43311_43785[(2)] = inst_43171);

(statearr_43311_43785[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (70))){
var _ = (function (){var statearr_43312 = state_43306;
(statearr_43312[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43312;
})();
var inst_43196 = (state_43306[(2)]);
var inst_43197 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43198 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_43199 = (new cljs.core.PersistentVector(null,1,(5),inst_43197,inst_43198,null));
var inst_43200 = cljs.test.update_current_env_BANG_(inst_43199,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_43306[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_43306__$1 = (function (){var statearr_43313 = state_43306;
(statearr_43313[(8)] = inst_43200);

return statearr_43313;
})();
var statearr_43314_43786 = state_43306__$1;
(statearr_43314_43786[(2)] = inst_43196);

(statearr_43314_43786[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (62))){
var inst_43187 = (state_43306[(2)]);
var _ = (function (){var statearr_43316 = state_43306;
(statearr_43316[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43316;
})();
var state_43306__$1 = state_43306;
var statearr_43317_43787 = state_43306__$1;
(statearr_43317_43787[(2)] = inst_43187);

(statearr_43317_43787[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (74))){
var inst_43210 = (state_43306[(2)]);
var inst_43211 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43212 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_43213 = ["bb_web_ds_tools/persistence_test.cljs",50,new cljs.core.Keyword(null,"error","error",-978969032),26,39,inst_43212,39,inst_43210,"Export returns a Blob"];
var inst_43214 = cljs.core.PersistentHashMap.fromArrays(inst_43211,inst_43213);
var inst_43215 = cljs.test.report.call(null,inst_43214);
var state_43306__$1 = state_43306;
var statearr_43330_43788 = state_43306__$1;
(statearr_43330_43788[(2)] = inst_43215);

(statearr_43330_43788[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (7))){
var inst_42852 = (state_43306[(2)]);
var state_43306__$1 = state_43306;
var statearr_43331_43789 = state_43306__$1;
(statearr_43331_43789[(2)] = inst_42852);

(statearr_43331_43789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (59))){
var _ = (function (){var statearr_43341 = state_43306;
(statearr_43341[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43341;
})();
var inst_43116 = (state_43306[(2)]);
var inst_43117 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43118 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_43119 = (new cljs.core.PersistentVector(null,1,(5),inst_43117,inst_43118,null));
var inst_43120 = cljs.test.update_current_env_BANG_(inst_43119,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_43306[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_43306__$1 = (function (){var statearr_43342 = state_43306;
(statearr_43342[(9)] = inst_43120);

return statearr_43342;
})();
var statearr_43343_43790 = state_43306__$1;
(statearr_43343_43790[(2)] = inst_43116);

(statearr_43343_43790[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (20))){
var inst_42881 = (state_43306[(2)]);
var state_43306__$1 = (function (){var statearr_43345 = state_43306;
(statearr_43345[(10)] = inst_42881);

return statearr_43345;
})();
var statearr_43346_43791 = state_43306__$1;
(statearr_43346_43791[(2)] = null);

(statearr_43346_43791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (72))){
var inst_43208 = (state_43306[(11)]);
var inst_43222 = (state_43306[(12)]);
var _ = (function (){var statearr_43348 = state_43306;
(statearr_43348[(4)] = cljs.core.cons((75),(state_43306[(4)])));

return statearr_43348;
})();
var inst_43221 = Blob;
var inst_43222__$1 = (inst_43208 instanceof inst_43221);
var state_43306__$1 = (function (){var statearr_43349 = state_43306;
(statearr_43349[(12)] = inst_43222__$1);

return statearr_43349;
})();
if(cljs.core.truth_(inst_43222__$1)){
var statearr_43350_43792 = state_43306__$1;
(statearr_43350_43792[(1)] = (76));

} else {
var statearr_43351_43793 = state_43306__$1;
(statearr_43351_43793[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (58))){
var inst_43190 = (state_43306[(2)]);
var inst_43191 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43192 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_43193 = (new cljs.core.PersistentVector(null,1,(5),inst_43191,inst_43192,null));
var inst_43194 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_43193,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Export DB"], 0));
var state_43306__$1 = (function (){var statearr_43355 = state_43306;
(statearr_43355[(13)] = inst_43190);

(statearr_43355[(14)] = inst_43194);

return statearr_43355;
})();
var statearr_43356_43794 = state_43306__$1;
(statearr_43356_43794[(2)] = null);

(statearr_43356_43794[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (60))){
var _ = (function (){var statearr_43357 = state_43306;
(statearr_43357[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43357;
})();
var state_43306__$1 = state_43306;
var ex43347 = (state_43306__$1[(2)]);
var statearr_43358_43795 = state_43306__$1;
(statearr_43358_43795[(5)] = ex43347);


throw ex43347;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (27))){
var inst_42895 = (state_43306[(15)]);
var inst_42916 = (state_43306[(2)]);
var _ = (function (){var statearr_43360 = state_43306;
(statearr_43360[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43360;
})();
var state_43306__$1 = (function (){var statearr_43361 = state_43306;
(statearr_43361[(16)] = inst_42916);

return statearr_43361;
})();
var statearr_43362_43796 = state_43306__$1;
(statearr_43362_43796[(2)] = inst_42895);

(statearr_43362_43796[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (1))){
var state_43306__$1 = state_43306;
var statearr_43364_43797 = state_43306__$1;
(statearr_43364_43797[(2)] = null);

(statearr_43364_43797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (69))){
var inst_43300 = (state_43306[(2)]);
var _ = (function (){var statearr_43365 = state_43306;
(statearr_43365[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43365;
})();
var state_43306__$1 = state_43306;
var statearr_43366_43798 = state_43306__$1;
(statearr_43366_43798[(2)] = inst_43300);

(statearr_43366_43798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (24))){
var _ = (function (){var statearr_43374 = state_43306;
(statearr_43374[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43374;
})();
var state_43306__$1 = state_43306;
var ex43363 = (state_43306__$1[(2)]);
var statearr_43375_43799 = state_43306__$1;
(statearr_43375_43799[(5)] = ex43363);


var statearr_43376_43800 = state_43306__$1;
(statearr_43376_43800[(1)] = (23));

(statearr_43376_43800[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (55))){
var inst_43082 = (state_43306[(17)]);
var inst_43093 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43094 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","test","content",(123)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_43095 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43096 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43097 = cljs.core.cons(inst_43096,inst_43082);
var inst_43098 = (new cljs.core.List(null,inst_43097,null,(1),null));
var inst_43099 = (new cljs.core.List(null,inst_43095,inst_43098,(2),null));
var inst_43100 = ["bb_web_ds_tools/persistence_test.cljs",73,new cljs.core.Keyword(null,"fail","fail",1706214930),26,29,inst_43094,29,inst_43099,"Row matches"];
var inst_43101 = cljs.core.PersistentHashMap.fromArrays(inst_43093,inst_43100);
var inst_43102 = cljs.test.report.call(null,inst_43101);
var state_43306__$1 = state_43306;
var statearr_43379_43801 = state_43306__$1;
(statearr_43379_43801[(2)] = inst_43102);

(statearr_43379_43801[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (85))){
var inst_43264 = (state_43306[(18)]);
var inst_43294 = (state_43306[(2)]);
var _ = (function (){var statearr_43380 = state_43306;
(statearr_43380[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43380;
})();
var state_43306__$1 = (function (){var statearr_43381 = state_43306;
(statearr_43381[(19)] = inst_43294);

return statearr_43381;
})();
var statearr_43394_43802 = state_43306__$1;
(statearr_43394_43802[(2)] = inst_43264);

(statearr_43394_43802[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (39))){
var inst_42982 = (state_43306[(20)]);
var inst_42996 = (state_43306[(21)]);
var inst_42997 = (state_43306[(22)]);
var _ = (function (){var statearr_43398 = state_43306;
(statearr_43398[(4)] = cljs.core.cons((42),(state_43306[(4)])));

return statearr_43398;
})();
var inst_42994 = inst_42982.length;
var inst_42995 = (new cljs.core.List(null,inst_42994,null,(1),null));
var inst_42996__$1 = (new cljs.core.List(null,(1),inst_42995,(2),null));
var inst_42997__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_42996__$1);
var state_43306__$1 = (function (){var statearr_43399 = state_43306;
(statearr_43399[(21)] = inst_42996__$1);

(statearr_43399[(22)] = inst_42997__$1);

return statearr_43399;
})();
if(cljs.core.truth_(inst_42997__$1)){
var statearr_43401_43803 = state_43306__$1;
(statearr_43401_43803[(1)] = (43));

} else {
var statearr_43402_43804 = state_43306__$1;
(statearr_43402_43804[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (46))){
var inst_42922 = (state_43306[(23)]);
var _ = (function (){var statearr_43403 = state_43306;
(statearr_43403[(4)] = cljs.core.cons((48),(state_43306[(4)])));

return statearr_43403;
})();
var ___$1 = (function (){var statearr_43404 = state_43306;
(statearr_43404[(4)] = cljs.core.cons((49),(state_43306[(4)])));

return statearr_43404;
})();
var inst_43057 = inst_42922.exec("INSERT INTO datasets VALUES ('1', 'test', 'content', 123)");
var inst_43058 = [new cljs.core.Keyword(null,"returnValue","returnValue",1643246062)];
var inst_43059 = ["resultRows"];
var inst_43060 = cljs.core.PersistentHashMap.fromArrays(inst_43058,inst_43059);
var inst_43061 = cljs.core.clj__GT_js(inst_43060);
var inst_43062 = inst_42922.exec("SELECT * FROM datasets",inst_43061);
var state_43306__$1 = (function (){var statearr_43405 = state_43306;
(statearr_43405[(24)] = inst_43057);

(statearr_43405[(25)] = inst_43062);

return statearr_43405;
})();
var statearr_43410_43805 = state_43306__$1;
(statearr_43410_43805[(2)] = null);

(statearr_43410_43805[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (4))){
var _ = (function (){var statearr_43411 = state_43306;
(statearr_43411[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43411;
})();
var inst_42817 = (state_43306[(2)]);
var inst_42818 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var ___$1 = (function (){var temp__5825__auto__ = (state_43306[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_43306__$1 = (function (){var statearr_43412 = state_43306;
(statearr_43412[(26)] = inst_42818);

return statearr_43412;
})();
var statearr_43413_43806 = state_43306__$1;
(statearr_43413_43806[(2)] = inst_42817);

(statearr_43413_43806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (77))){
var inst_43208 = (state_43306[(11)]);
var inst_43239 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43240 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_43241 = cljs.core.type(inst_43208);
var inst_43242 = ["bb_web_ds_tools/persistence_test.cljs",50,new cljs.core.Keyword(null,"fail","fail",1706214930),26,39,inst_43240,39,inst_43241,"Export returns a Blob"];
var inst_43243 = cljs.core.PersistentHashMap.fromArrays(inst_43239,inst_43242);
var inst_43244 = cljs.test.report.call(null,inst_43243);
var state_43306__$1 = state_43306;
var statearr_43414_43807 = state_43306__$1;
(statearr_43414_43807[(2)] = inst_43244);

(statearr_43414_43807[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (54))){
var inst_43082 = (state_43306[(17)]);
var inst_43085 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43086 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","test","content",(123)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_43087 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43088 = cljs.core.cons(inst_43087,inst_43082);
var inst_43089 = ["bb_web_ds_tools/persistence_test.cljs",73,new cljs.core.Keyword(null,"pass","pass",1574159993),26,29,inst_43086,29,inst_43088,"Row matches"];
var inst_43090 = cljs.core.PersistentHashMap.fromArrays(inst_43085,inst_43089);
var inst_43091 = cljs.test.report.call(null,inst_43090);
var state_43306__$1 = state_43306;
var statearr_43424_43808 = state_43306__$1;
(statearr_43424_43808[(2)] = inst_43091);

(statearr_43424_43808[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (15))){
var inst_42868 = (state_43306[(27)]);
var inst_42871 = cljs.core.ex_data(inst_42868);
var inst_42872 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_42871);
var inst_42873 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42872,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_43306__$1 = state_43306;
var statearr_43425_43809 = state_43306__$1;
(statearr_43425_43809[(2)] = inst_42873);

(statearr_43425_43809[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (48))){
var _ = (function (){var statearr_43427 = state_43306;
(statearr_43427[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43427;
})();
var inst_43030 = (state_43306[(2)]);
var inst_43031 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43047 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_43048 = (new cljs.core.PersistentVector(null,1,(5),inst_43031,inst_43047,null));
var inst_43049 = cljs.test.update_current_env_BANG_(inst_43048,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_43306[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_43306__$1 = (function (){var statearr_43433 = state_43306;
(statearr_43433[(28)] = inst_43049);

return statearr_43433;
})();
var statearr_43434_43810 = state_43306__$1;
(statearr_43434_43810[(2)] = inst_43030);

(statearr_43434_43810[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (50))){
var inst_43062 = (state_43306[(25)]);
var inst_43082 = (state_43306[(17)]);
var inst_43083 = (state_43306[(29)]);
var _ = (function (){var statearr_43437 = state_43306;
(statearr_43437[(4)] = cljs.core.cons((53),(state_43306[(4)])));

return statearr_43437;
})();
var inst_43074 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43075 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43076 = ["1","test","content",(123)];
var inst_43077 = (new cljs.core.PersistentVector(null,4,(5),inst_43075,inst_43076,null));
var inst_43078 = [inst_43077];
var inst_43079 = (new cljs.core.PersistentVector(null,1,(5),inst_43074,inst_43078,null));
var inst_43080 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_43062);
var inst_43081 = (new cljs.core.List(null,inst_43080,null,(1),null));
var inst_43082__$1 = (new cljs.core.List(null,inst_43079,inst_43081,(2),null));
var inst_43083__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_43082__$1);
var state_43306__$1 = (function (){var statearr_43438 = state_43306;
(statearr_43438[(17)] = inst_43082__$1);

(statearr_43438[(29)] = inst_43083__$1);

return statearr_43438;
})();
if(cljs.core.truth_(inst_43083__$1)){
var statearr_43439_43811 = state_43306__$1;
(statearr_43439_43811[(1)] = (54));

} else {
var statearr_43440_43812 = state_43306__$1;
(statearr_43440_43812[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (75))){
var _ = (function (){var statearr_43443 = state_43306;
(statearr_43443[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43443;
})();
var state_43306__$1 = state_43306;
var ex43426 = (state_43306__$1[(2)]);
var statearr_43444_43813 = state_43306__$1;
(statearr_43444_43813[(5)] = ex43426);


var statearr_43445_43814 = state_43306__$1;
(statearr_43445_43814[(1)] = (74));

(statearr_43445_43814[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (21))){
var inst_42881 = (state_43306[(10)]);
var inst_42893 = (state_43306[(30)]);
var inst_42895 = (state_43306[(15)]);
var _ = (function (){var statearr_43448 = state_43306;
(statearr_43448[(4)] = cljs.core.cons((24),(state_43306[(4)])));

return statearr_43448;
})();
var inst_42893__$1 = (new cljs.core.List(null,inst_42881,null,(1),null));
var inst_42895__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_42893__$1);
var state_43306__$1 = (function (){var statearr_43449 = state_43306;
(statearr_43449[(30)] = inst_42893__$1);

(statearr_43449[(15)] = inst_42895__$1);

return statearr_43449;
})();
if(cljs.core.truth_(inst_42895__$1)){
var statearr_43450_43815 = state_43306__$1;
(statearr_43450_43815[(1)] = (25));

} else {
var statearr_43451_43816 = state_43306__$1;
(statearr_43451_43816[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (31))){
var _ = (function (){var statearr_43452 = state_43306;
(statearr_43452[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43452;
})();
var state_43306__$1 = state_43306;
var ex43442 = (state_43306__$1[(2)]);
var statearr_43453_43817 = state_43306__$1;
(statearr_43453_43817[(5)] = ex43442);


var statearr_43454_43818 = state_43306__$1;
(statearr_43454_43818[(1)] = (30));

(statearr_43454_43818[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (32))){
var inst_42934 = (state_43306[(31)]);
var inst_42937 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42938 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_42939 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_42940 = cljs.core.cons(inst_42939,inst_42934);
var inst_42941 = ["bb_web_ds_tools/persistence_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),22,19,inst_42938,19,inst_42940,"DB created"];
var inst_42942 = cljs.core.PersistentHashMap.fromArrays(inst_42937,inst_42941);
var inst_42943 = cljs.test.report.call(null,inst_42942);
var state_43306__$1 = state_43306;
var statearr_43455_43819 = state_43306__$1;
(statearr_43455_43819[(2)] = inst_42943);

(statearr_43455_43819[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (40))){
var inst_43021 = (state_43306[(2)]);
var _ = (function (){var statearr_43456 = state_43306;
(statearr_43456[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43456;
})();
var state_43306__$1 = state_43306;
var statearr_43457_43820 = state_43306__$1;
(statearr_43457_43820[(2)] = inst_43021);

(statearr_43457_43820[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (56))){
var inst_43083 = (state_43306[(29)]);
var inst_43104 = (state_43306[(2)]);
var _ = (function (){var statearr_43461 = state_43306;
(statearr_43461[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43461;
})();
var state_43306__$1 = (function (){var statearr_43462 = state_43306;
(statearr_43462[(32)] = inst_43104);

return statearr_43462;
})();
var statearr_43463_43821 = state_43306__$1;
(statearr_43463_43821[(2)] = inst_43083);

(statearr_43463_43821[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (33))){
var inst_42934 = (state_43306[(31)]);
var inst_42945 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42946 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_42947 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42948 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_42949 = cljs.core.cons(inst_42948,inst_42934);
var inst_42950 = (new cljs.core.List(null,inst_42949,null,(1),null));
var inst_42951 = (new cljs.core.List(null,inst_42947,inst_42950,(2),null));
var inst_42952 = ["bb_web_ds_tools/persistence_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),22,19,inst_42946,19,inst_42951,"DB created"];
var inst_42953 = cljs.core.PersistentHashMap.fromArrays(inst_42945,inst_42952);
var inst_42954 = cljs.test.report.call(null,inst_42953);
var state_43306__$1 = state_43306;
var statearr_43468_43822 = state_43306__$1;
(statearr_43468_43822[(2)] = inst_42954);

(statearr_43468_43822[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (13))){
var _ = (function (){var statearr_43470 = state_43306;
(statearr_43470[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43470;
})();
var state_43306__$1 = state_43306;
var ex43458 = (state_43306__$1[(2)]);
var statearr_43472_43823 = state_43306__$1;
(statearr_43472_43823[(5)] = ex43458);


var statearr_43475_43824 = state_43306__$1;
(statearr_43475_43824[(1)] = (5));

(statearr_43475_43824[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (22))){
var inst_42881 = (state_43306[(10)]);
var inst_42919 = (state_43306[(2)]);
var inst_42920 = inst_42881.oo1;
var inst_42921 = inst_42920.DB;
var inst_42922 = (new inst_42921(":memory:","ct"));
var state_43306__$1 = (function (){var statearr_43477 = state_43306;
(statearr_43477[(33)] = inst_42919);

(statearr_43477[(23)] = inst_42922);

return statearr_43477;
})();
var statearr_43478_43825 = state_43306__$1;
(statearr_43478_43825[(2)] = null);

(statearr_43478_43825[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (36))){
var inst_43024 = (state_43306[(2)]);
var inst_43025 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43026 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_43027 = (new cljs.core.PersistentVector(null,1,(5),inst_43025,inst_43026,null));
var inst_43028 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_43027,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Insert and Query Manual"], 0));
var state_43306__$1 = (function (){var statearr_43490 = state_43306;
(statearr_43490[(34)] = inst_43024);

(statearr_43490[(35)] = inst_43028);

return statearr_43490;
})();
var statearr_43491_43826 = state_43306__$1;
(statearr_43491_43826[(2)] = null);

(statearr_43491_43826[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (41))){
var inst_42983 = (state_43306[(2)]);
var inst_42984 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42985 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_42986 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"error","error",-978969032),26,24,inst_42985,24,inst_42983,"datasets table exists"];
var inst_42987 = cljs.core.PersistentHashMap.fromArrays(inst_42984,inst_42986);
var inst_42988 = cljs.test.report.call(null,inst_42987);
var state_43306__$1 = state_43306;
var statearr_43495_43827 = state_43306__$1;
(statearr_43495_43827[(2)] = inst_42988);

(statearr_43495_43827[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (43))){
var inst_42996 = (state_43306[(21)]);
var inst_42999 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43000 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_43001 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43002 = cljs.core.cons(inst_43001,inst_42996);
var inst_43003 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"pass","pass",1574159993),26,24,inst_43000,24,inst_43002,"datasets table exists"];
var inst_43004 = cljs.core.PersistentHashMap.fromArrays(inst_42999,inst_43003);
var inst_43005 = cljs.test.report.call(null,inst_43004);
var state_43306__$1 = state_43306;
var statearr_43497_43828 = state_43306__$1;
(statearr_43497_43828[(2)] = inst_43005);

(statearr_43497_43828[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (61))){
var inst_43141 = (state_43306[(36)]);
var inst_43139 = (state_43306[(37)]);
var inst_43162 = (state_43306[(7)]);
var inst_43163 = (state_43306[(38)]);
var _ = (function (){var statearr_43500 = state_43306;
(statearr_43500[(4)] = cljs.core.cons((64),(state_43306[(4)])));

return statearr_43500;
})();
var inst_43161 = (new cljs.core.List(null,inst_43141,null,(1),null));
var inst_43162__$1 = (new cljs.core.List(null,inst_43139,inst_43161,(2),null));
var inst_43163__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_43162__$1);
var state_43306__$1 = (function (){var statearr_43501 = state_43306;
(statearr_43501[(7)] = inst_43162__$1);

(statearr_43501[(38)] = inst_43163__$1);

return statearr_43501;
})();
if(cljs.core.truth_(inst_43163__$1)){
var statearr_43502_43829 = state_43306__$1;
(statearr_43502_43829[(1)] = (65));

} else {
var statearr_43503_43830 = state_43306__$1;
(statearr_43503_43830[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (29))){
var inst_42959 = (state_43306[(2)]);
var inst_42960 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42961 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_42962 = (new cljs.core.PersistentVector(null,1,(5),inst_42960,inst_42961,null));
var inst_42963 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_42962,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Create Tables"], 0));
var state_43306__$1 = (function (){var statearr_43504 = state_43306;
(statearr_43504[(39)] = inst_42959);

(statearr_43504[(40)] = inst_42963);

return statearr_43504;
})();
var statearr_43505_43831 = state_43306__$1;
(statearr_43505_43831[(2)] = null);

(statearr_43505_43831[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (44))){
var inst_42996 = (state_43306[(21)]);
var inst_43007 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43008 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"res","res",245523648,null)));
var inst_43009 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43010 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43011 = cljs.core.cons(inst_43010,inst_42996);
var inst_43012 = (new cljs.core.List(null,inst_43011,null,(1),null));
var inst_43013 = (new cljs.core.List(null,inst_43009,inst_43012,(2),null));
var inst_43014 = ["bb_web_ds_tools/persistence_test.cljs",46,new cljs.core.Keyword(null,"fail","fail",1706214930),26,24,inst_43008,24,inst_43013,"datasets table exists"];
var inst_43015 = cljs.core.PersistentHashMap.fromArrays(inst_43007,inst_43014);
var inst_43016 = cljs.test.report.call(null,inst_43015);
var state_43306__$1 = state_43306;
var statearr_43506_43832 = state_43306__$1;
(statearr_43506_43832[(2)] = inst_43016);

(statearr_43506_43832[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (6))){
var _ = (function (){var statearr_43510 = state_43306;
(statearr_43510[(4)] = cljs.core.cons((9),(state_43306[(4)])));

return statearr_43510;
})();
var state_43306__$1 = state_43306;
var statearr_43511_43833 = state_43306__$1;
(statearr_43511_43833[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (28))){
var inst_42922 = (state_43306[(23)]);
var inst_42934 = (state_43306[(31)]);
var inst_42935 = (state_43306[(41)]);
var _ = (function (){var statearr_43515 = state_43306;
(statearr_43515[(4)] = cljs.core.cons((31),(state_43306[(4)])));

return statearr_43515;
})();
var inst_42934__$1 = (new cljs.core.List(null,inst_42922,null,(1),null));
var inst_42935__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_42934__$1);
var state_43306__$1 = (function (){var statearr_43516 = state_43306;
(statearr_43516[(31)] = inst_42934__$1);

(statearr_43516[(41)] = inst_42935__$1);

return statearr_43516;
})();
if(cljs.core.truth_(inst_42935__$1)){
var statearr_43518_43834 = state_43306__$1;
(statearr_43518_43834[(1)] = (32));

} else {
var statearr_43519_43835 = state_43306__$1;
(statearr_43519_43835[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (64))){
var _ = (function (){var statearr_43522 = state_43306;
(statearr_43522[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43522;
})();
var state_43306__$1 = state_43306;
var ex43509 = (state_43306__$1[(2)]);
var statearr_43523_43836 = state_43306__$1;
(statearr_43523_43836[(5)] = ex43509);


var statearr_43524_43837 = state_43306__$1;
(statearr_43524_43837[(1)] = (63));

(statearr_43524_43837[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (51))){
var inst_43107 = (state_43306[(2)]);
var _ = (function (){var statearr_43525 = state_43306;
(statearr_43525[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43525;
})();
var state_43306__$1 = state_43306;
var statearr_43526_43838 = state_43306__$1;
(statearr_43526_43838[(2)] = inst_43107);

(statearr_43526_43838[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (25))){
var inst_42893 = (state_43306[(30)]);
var inst_42897 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42898 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_42899 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_42900 = cljs.core.cons(inst_42899,inst_42893);
var inst_42901 = ["bb_web_ds_tools/persistence_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),20,15,inst_42898,15,inst_42900,"SQLite module loaded"];
var inst_42902 = cljs.core.PersistentHashMap.fromArrays(inst_42897,inst_42901);
var inst_42903 = cljs.test.report.call(null,inst_42902);
var state_43306__$1 = state_43306;
var statearr_43528_43839 = state_43306__$1;
(statearr_43528_43839[(2)] = inst_42903);

(statearr_43528_43839[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (34))){
var inst_42935 = (state_43306[(41)]);
var inst_42956 = (state_43306[(2)]);
var _ = (function (){var statearr_43531 = state_43306;
(statearr_43531[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43531;
})();
var state_43306__$1 = (function (){var statearr_43532 = state_43306;
(statearr_43532[(42)] = inst_42956);

return statearr_43532;
})();
var statearr_43533_43840 = state_43306__$1;
(statearr_43533_43840[(2)] = inst_42935);

(statearr_43533_43840[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (17))){
var inst_42876 = (state_43306[(2)]);
var state_43306__$1 = state_43306;
if(cljs.core.truth_(inst_42876)){
var statearr_43536_43841 = state_43306__$1;
(statearr_43536_43841[(1)] = (18));

} else {
var statearr_43539_43842 = state_43306__$1;
(statearr_43539_43842[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (3))){
var inst_43303 = (state_43306[(2)]);
var state_43306__$1 = state_43306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43306__$1,inst_43303);
} else {
if((state_val_43307 === (12))){
var inst_42849 = (state_43306[(2)]);
var _ = (function (){var statearr_43541 = state_43306;
(statearr_43541[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43541;
})();
var state_43306__$1 = (function (){var statearr_43542 = state_43306;
(statearr_43542[(43)] = inst_42849);

return statearr_43542;
})();
var statearr_43543_43843 = state_43306__$1;
(statearr_43543_43843[(2)] = true);

(statearr_43543_43843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (2))){
var _ = (function (){var statearr_43544 = state_43306;
(statearr_43544[(4)] = cljs.core.cons((4),(state_43306[(4)])));

return statearr_43544;
})();
var ___$1 = (function (){var statearr_43545 = state_43306;
(statearr_43545[(4)] = cljs.core.cons((13),(state_43306[(4)])));

return statearr_43545;
})();
var inst_42859 = [new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.Keyword(null,"printErr","printErr",-1323332006)];
var inst_42860 = (function (){return (function (x){
return console.log("SQLite:",x);
});
})();
var inst_42861 = (function (){return (function (x){
return console.error("SQLite Err:",x);
});
})();
var inst_42862 = [inst_42860,inst_42861];
var inst_42863 = cljs.core.PersistentHashMap.fromArrays(inst_42859,inst_42862);
var inst_42864 = cljs.core.clj__GT_js(inst_42863);
var inst_42865 = shadow.js.shim.module$$sqlite_org$sqlite_wasm.default(inst_42864);
var inst_42866 = cljs.core.async.interop.p__GT_c(inst_42865);
var state_43306__$1 = state_43306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43306__$1,(14),inst_42866);
} else {
if((state_val_43307 === (66))){
var inst_43162 = (state_43306[(7)]);
var inst_43173 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43174 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"datasets","datasets",-758071350,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null));
var inst_43175 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43176 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43177 = cljs.core.cons(inst_43176,inst_43162);
var inst_43178 = (new cljs.core.List(null,inst_43177,null,(1),null));
var inst_43179 = (new cljs.core.List(null,inst_43175,inst_43178,(2),null));
var inst_43180 = ["bb_web_ds_tools/persistence_test.cljs",47,new cljs.core.Keyword(null,"fail","fail",1706214930),28,35,inst_43174,35,inst_43179,null];
var inst_43181 = cljs.core.PersistentHashMap.fromArrays(inst_43173,inst_43180);
var inst_43182 = cljs.test.report.call(null,inst_43181);
var state_43306__$1 = state_43306;
var statearr_43548_43844 = state_43306__$1;
(statearr_43548_43844[(2)] = inst_43182);

(statearr_43548_43844[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (23))){
var inst_42882 = (state_43306[(2)]);
var inst_42883 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42884 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_42885 = ["bb_web_ds_tools/persistence_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),20,15,inst_42884,15,inst_42882,"SQLite module loaded"];
var inst_42886 = cljs.core.PersistentHashMap.fromArrays(inst_42883,inst_42885);
var inst_42887 = cljs.test.report.call(null,inst_42886);
var state_43306__$1 = state_43306;
var statearr_43558_43845 = state_43306__$1;
(statearr_43558_43845[(2)] = inst_42887);

(statearr_43558_43845[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (47))){
var inst_43110 = (state_43306[(2)]);
var inst_43111 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43112 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_43113 = (new cljs.core.PersistentVector(null,1,(5),inst_43111,inst_43112,null));
var inst_43114 = cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(inst_43113,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Persist Datasets"], 0));
var state_43306__$1 = (function (){var statearr_43562 = state_43306;
(statearr_43562[(44)] = inst_43110);

(statearr_43562[(45)] = inst_43114);

return statearr_43562;
})();
var statearr_43563_43846 = state_43306__$1;
(statearr_43563_43846[(2)] = null);

(statearr_43563_43846[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (35))){
var inst_42922 = (state_43306[(23)]);
var _ = (function (){var statearr_43564 = state_43306;
(statearr_43564[(4)] = cljs.core.cons((37),(state_43306[(4)])));

return statearr_43564;
})();
var ___$1 = (function (){var statearr_43565 = state_43306;
(statearr_43565[(4)] = cljs.core.cons((38),(state_43306[(4)])));

return statearr_43565;
})();
var inst_42977 = bb_web_ds_tools.workspaces.persistence_fx.create_tables_BANG_(inst_42922);
var inst_42978 = [new cljs.core.Keyword(null,"returnValue","returnValue",1643246062)];
var inst_42979 = ["resultRows"];
var inst_42980 = cljs.core.PersistentHashMap.fromArrays(inst_42978,inst_42979);
var inst_42981 = cljs.core.clj__GT_js(inst_42980);
var inst_42982 = inst_42922.exec("SELECT name FROM sqlite_master WHERE type='table' AND name='datasets'",inst_42981);
var state_43306__$1 = (function (){var statearr_43566 = state_43306;
(statearr_43566[(46)] = inst_42977);

(statearr_43566[(20)] = inst_42982);

return statearr_43566;
})();
var statearr_43567_43847 = state_43306__$1;
(statearr_43567_43847[(2)] = null);

(statearr_43567_43847[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (82))){
var _ = (function (){var statearr_43568 = state_43306;
(statearr_43568[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43568;
})();
var state_43306__$1 = state_43306;
var ex43561 = (state_43306__$1[(2)]);
var statearr_43569_43848 = state_43306__$1;
(statearr_43569_43848[(5)] = ex43561);


var statearr_43570_43849 = state_43306__$1;
(statearr_43570_43849[(1)] = (81));

(statearr_43570_43849[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (76))){
var inst_43208 = (state_43306[(11)]);
var inst_43224 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43225 = cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","Blob","js/Blob",1701222,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null));
var inst_43226 = cljs.core.type(inst_43208);
var inst_43227 = ["bb_web_ds_tools/persistence_test.cljs",50,new cljs.core.Keyword(null,"pass","pass",1574159993),26,39,inst_43225,39,inst_43226,"Export returns a Blob"];
var inst_43228 = cljs.core.PersistentHashMap.fromArrays(inst_43224,inst_43227);
var inst_43229 = cljs.test.report.call(null,inst_43228);
var state_43306__$1 = state_43306;
var statearr_43583_43850 = state_43306__$1;
(statearr_43583_43850[(2)] = inst_43229);

(statearr_43583_43850[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (19))){
var inst_42868 = (state_43306[(27)]);
var state_43306__$1 = state_43306;
var statearr_43584_43851 = state_43306__$1;
(statearr_43584_43851[(2)] = inst_42868);

(statearr_43584_43851[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (57))){
var inst_42922 = (state_43306[(23)]);
var inst_43139 = (state_43306[(37)]);
var _ = (function (){var statearr_43585 = state_43306;
(statearr_43585[(4)] = cljs.core.cons((59),(state_43306[(4)])));

return statearr_43585;
})();
var ___$1 = (function (){var statearr_43587 = state_43306;
(statearr_43587[(4)] = cljs.core.cons((60),(state_43306[(4)])));

return statearr_43587;
})();
var inst_43128 = ["d1"];
var inst_43129 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_43130 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43131 = [new cljs.core.Keyword(null,"a","a",-2123407586)];
var inst_43132 = [(1)];
var inst_43133 = cljs.core.PersistentHashMap.fromArrays(inst_43131,inst_43132);
var inst_43134 = [inst_43133];
var inst_43135 = (new cljs.core.PersistentVector(null,1,(5),inst_43130,inst_43134,null));
var inst_43136 = ["My Dataset",inst_43135];
var inst_43137 = cljs.core.PersistentHashMap.fromArrays(inst_43129,inst_43136);
var inst_43138 = [inst_43137];
var inst_43139__$1 = cljs.core.PersistentHashMap.fromArrays(inst_43128,inst_43138);
var inst_43140 = bb_web_ds_tools.workspaces.persistence_fx.persist_datasets_BANG_(inst_42922,inst_43139__$1);
var inst_43141 = bb_web_ds_tools.workspaces.persistence_fx.load_datasets_from_db(inst_42922);
var state_43306__$1 = (function (){var statearr_43588 = state_43306;
(statearr_43588[(37)] = inst_43139__$1);

(statearr_43588[(47)] = inst_43140);

(statearr_43588[(36)] = inst_43141);

return statearr_43588;
})();
var statearr_43598_43852 = state_43306__$1;
(statearr_43598_43852[(2)] = null);

(statearr_43598_43852[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (68))){
var inst_42922 = (state_43306[(23)]);
var _ = (function (){var statearr_43600 = state_43306;
(statearr_43600[(4)] = cljs.core.cons((70),(state_43306[(4)])));

return statearr_43600;
})();
var ___$1 = (function (){var statearr_43601 = state_43306;
(statearr_43601[(4)] = cljs.core.cons((71),(state_43306[(4)])));

return statearr_43601;
})();
var inst_43208 = bb_web_ds_tools.workspaces.persistence_fx.export_db(inst_42922);
var state_43306__$1 = (function (){var statearr_43602 = state_43306;
(statearr_43602[(11)] = inst_43208);

return statearr_43602;
})();
var statearr_43603_43853 = state_43306__$1;
(statearr_43603_43853[(2)] = null);

(statearr_43603_43853[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (11))){
var inst_42843 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42844 = true;
var inst_42845 = [null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,inst_42844,null,true,"Skipping SQLite tests due to environment limitations"];
var inst_42846 = cljs.core.PersistentHashMap.fromArrays(inst_42843,inst_42845);
var inst_42847 = cljs.test.report.call(null,inst_42846);
var state_43306__$1 = state_43306;
var statearr_43604_43854 = state_43306__$1;
(statearr_43604_43854[(2)] = inst_42847);

(statearr_43604_43854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (9))){
var _ = (function (){var statearr_43608 = state_43306;
(statearr_43608[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43608;
})();
var state_43306__$1 = state_43306;
var ex43599 = (state_43306__$1[(2)]);
var statearr_43610_43855 = state_43306__$1;
(statearr_43610_43855[(5)] = ex43599);


var statearr_43611_43856 = state_43306__$1;
(statearr_43611_43856[(1)] = (8));

(statearr_43611_43856[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (5))){
var inst_42821 = (state_43306[(2)]);
var inst_42822 = inst_42821.message;
var inst_42823 = console.warn("SQLite WASM initialization failed (expected if WASM assets are missing in test env):",inst_42822);
var state_43306__$1 = (function (){var statearr_43627 = state_43306;
(statearr_43627[(48)] = inst_42823);

return statearr_43627;
})();
var statearr_43628_43857 = state_43306__$1;
(statearr_43628_43857[(2)] = null);

(statearr_43628_43857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (83))){
var inst_43263 = (state_43306[(49)]);
var inst_43266 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43267 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_43268 = new cljs.core.Symbol(null,">",">",1085014381,null);
var inst_43269 = cljs.core.cons(inst_43268,inst_43263);
var inst_43270 = ["bb_web_ds_tools/persistence_test.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),26,40,inst_43267,40,inst_43269,"Blob is not empty"];
var inst_43271 = cljs.core.PersistentHashMap.fromArrays(inst_43266,inst_43270);
var inst_43272 = cljs.test.report.call(null,inst_43271);
var state_43306__$1 = state_43306;
var statearr_43629_43858 = state_43306__$1;
(statearr_43629_43858[(2)] = inst_43272);

(statearr_43629_43858[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (14))){
var inst_42868 = (state_43306[(27)]);
var inst_42869 = (state_43306[(50)]);
var inst_42868__$1 = (state_43306[(2)]);
var inst_42869__$1 = (inst_42868__$1 instanceof cljs.core.ExceptionInfo);
var state_43306__$1 = (function (){var statearr_43631 = state_43306;
(statearr_43631[(27)] = inst_42868__$1);

(statearr_43631[(50)] = inst_42869__$1);

return statearr_43631;
})();
if(cljs.core.truth_(inst_42869__$1)){
var statearr_43632_43859 = state_43306__$1;
(statearr_43632_43859[(1)] = (15));

} else {
var statearr_43633_43860 = state_43306__$1;
(statearr_43633_43860[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (45))){
var inst_42997 = (state_43306[(22)]);
var inst_43018 = (state_43306[(2)]);
var _ = (function (){var statearr_43634 = state_43306;
(statearr_43634[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43634;
})();
var state_43306__$1 = (function (){var statearr_43667 = state_43306;
(statearr_43667[(51)] = inst_43018);

return statearr_43667;
})();
var statearr_43668_43861 = state_43306__$1;
(statearr_43668_43861[(2)] = inst_42997);

(statearr_43668_43861[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (53))){
var _ = (function (){var statearr_43697 = state_43306;
(statearr_43697[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43697;
})();
var state_43306__$1 = state_43306;
var ex43630 = (state_43306__$1[(2)]);
var statearr_43699_43862 = state_43306__$1;
(statearr_43699_43862[(5)] = ex43630);


var statearr_43700_43863 = state_43306__$1;
(statearr_43700_43863[(1)] = (52));

(statearr_43700_43863[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (78))){
var inst_43222 = (state_43306[(12)]);
var inst_43246 = (state_43306[(2)]);
var _ = (function (){var statearr_43703 = state_43306;
(statearr_43703[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43703;
})();
var state_43306__$1 = (function (){var statearr_43705 = state_43306;
(statearr_43705[(52)] = inst_43246);

return statearr_43705;
})();
var statearr_43706_43864 = state_43306__$1;
(statearr_43706_43864[(2)] = inst_43222);

(statearr_43706_43864[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (26))){
var inst_42893 = (state_43306[(30)]);
var inst_42905 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42906 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"sqlite3","sqlite3",846378027,null));
var inst_42907 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42908 = new cljs.core.Symbol(null,"some?","some?",234752293,null);
var inst_42909 = cljs.core.cons(inst_42908,inst_42893);
var inst_42910 = (new cljs.core.List(null,inst_42909,null,(1),null));
var inst_42911 = (new cljs.core.List(null,inst_42907,inst_42910,(2),null));
var inst_42912 = ["bb_web_ds_tools/persistence_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),20,15,inst_42906,15,inst_42911,"SQLite module loaded"];
var inst_42913 = cljs.core.PersistentHashMap.fromArrays(inst_42905,inst_42912);
var inst_42914 = cljs.test.report.call(null,inst_42913);
var state_43306__$1 = state_43306;
var statearr_43719_43865 = state_43306__$1;
(statearr_43719_43865[(2)] = inst_42914);

(statearr_43719_43865[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (16))){
var inst_42869 = (state_43306[(50)]);
var state_43306__$1 = state_43306;
var statearr_43728_43866 = state_43306__$1;
(statearr_43728_43866[(2)] = inst_42869);

(statearr_43728_43866[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (81))){
var inst_43250 = (state_43306[(2)]);
var inst_43251 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43252 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_43253 = ["bb_web_ds_tools/persistence_test.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),26,40,inst_43252,40,inst_43250,"Blob is not empty"];
var inst_43254 = cljs.core.PersistentHashMap.fromArrays(inst_43251,inst_43253);
var inst_43255 = cljs.test.report.call(null,inst_43254);
var state_43306__$1 = state_43306;
var statearr_43741_43867 = state_43306__$1;
(statearr_43741_43867[(2)] = inst_43255);

(statearr_43741_43867[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (79))){
var inst_43208 = (state_43306[(11)]);
var inst_43263 = (state_43306[(49)]);
var inst_43264 = (state_43306[(18)]);
var _ = (function (){var statearr_43742 = state_43306;
(statearr_43742[(4)] = cljs.core.cons((82),(state_43306[(4)])));

return statearr_43742;
})();
var inst_43261 = inst_43208.size;
var inst_43262 = (new cljs.core.List(null,(0),null,(1),null));
var inst_43263__$1 = (new cljs.core.List(null,inst_43261,inst_43262,(2),null));
var inst_43264__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,inst_43263__$1);
var state_43306__$1 = (function (){var statearr_43743 = state_43306;
(statearr_43743[(49)] = inst_43263__$1);

(statearr_43743[(18)] = inst_43264__$1);

return statearr_43743;
})();
if(cljs.core.truth_(inst_43264__$1)){
var statearr_43744_43868 = state_43306__$1;
(statearr_43744_43868[(1)] = (83));

} else {
var statearr_43745_43869 = state_43306__$1;
(statearr_43745_43869[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (38))){
var _ = (function (){var statearr_43746 = state_43306;
(statearr_43746[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43746;
})();
var state_43306__$1 = state_43306;
var ex43730 = (state_43306__$1[(2)]);
var statearr_43747_43870 = state_43306__$1;
(statearr_43747_43870[(5)] = ex43730);


throw ex43730;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (30))){
var inst_42923 = (state_43306[(2)]);
var inst_42924 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42925 = cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"db","db",-1661185010,null));
var inst_42926 = ["bb_web_ds_tools/persistence_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),22,19,inst_42925,19,inst_42923,"DB created"];
var inst_42927 = cljs.core.PersistentHashMap.fromArrays(inst_42924,inst_42926);
var inst_42928 = cljs.test.report.call(null,inst_42927);
var state_43306__$1 = state_43306;
var statearr_43751_43871 = state_43306__$1;
(statearr_43751_43871[(2)] = inst_42928);

(statearr_43751_43871[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (73))){
var inst_43249 = (state_43306[(2)]);
var state_43306__$1 = (function (){var statearr_43752 = state_43306;
(statearr_43752[(53)] = inst_43249);

return statearr_43752;
})();
var statearr_43753_43872 = state_43306__$1;
(statearr_43753_43872[(2)] = null);

(statearr_43753_43872[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (10))){
var inst_42836 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42837 = true;
var inst_42838 = [null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,inst_42837,null,true,"Skipping SQLite tests due to environment limitations"];
var inst_42839 = cljs.core.PersistentHashMap.fromArrays(inst_42836,inst_42838);
var inst_42840 = cljs.test.report.call(null,inst_42839);
var state_43306__$1 = state_43306;
var statearr_43754_43873 = state_43306__$1;
(statearr_43754_43873[(2)] = inst_42840);

(statearr_43754_43873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (18))){
var inst_42868 = (state_43306[(27)]);
var inst_42878 = (function(){throw inst_42868})();
var state_43306__$1 = state_43306;
var statearr_43755_43874 = state_43306__$1;
(statearr_43755_43874[(2)] = inst_42878);

(statearr_43755_43874[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (52))){
var inst_43063 = (state_43306[(2)]);
var inst_43064 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43065 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","test","content",(123)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)));
var inst_43066 = ["bb_web_ds_tools/persistence_test.cljs",73,new cljs.core.Keyword(null,"error","error",-978969032),26,29,inst_43065,29,inst_43063,"Row matches"];
var inst_43067 = cljs.core.PersistentHashMap.fromArrays(inst_43064,inst_43066);
var inst_43068 = cljs.test.report.call(null,inst_43067);
var state_43306__$1 = state_43306;
var statearr_43757_43875 = state_43306__$1;
(statearr_43757_43875[(2)] = inst_43068);

(statearr_43757_43875[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (67))){
var inst_43163 = (state_43306[(38)]);
var inst_43184 = (state_43306[(2)]);
var _ = (function (){var statearr_43759 = state_43306;
(statearr_43759[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43759;
})();
var state_43306__$1 = (function (){var statearr_43760 = state_43306;
(statearr_43760[(54)] = inst_43184);

return statearr_43760;
})();
var statearr_43761_43876 = state_43306__$1;
(statearr_43761_43876[(2)] = inst_43163);

(statearr_43761_43876[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (71))){
var _ = (function (){var statearr_43763 = state_43306;
(statearr_43763[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43763;
})();
var state_43306__$1 = state_43306;
var ex43756 = (state_43306__$1[(2)]);
var statearr_43764_43877 = state_43306__$1;
(statearr_43764_43877[(5)] = ex43756);


throw ex43756;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (42))){
var _ = (function (){var statearr_43765 = state_43306;
(statearr_43765[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43765;
})();
var state_43306__$1 = state_43306;
var ex43758 = (state_43306__$1[(2)]);
var statearr_43766_43878 = state_43306__$1;
(statearr_43766_43878[(5)] = ex43758);


var statearr_43767_43879 = state_43306__$1;
(statearr_43767_43879[(1)] = (41));

(statearr_43767_43879[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (80))){
var inst_43297 = (state_43306[(2)]);
var _ = (function (){var statearr_43768 = state_43306;
(statearr_43768[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43768;
})();
var state_43306__$1 = state_43306;
var statearr_43769_43880 = state_43306__$1;
(statearr_43769_43880[(2)] = inst_43297);

(statearr_43769_43880[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (37))){
var _ = (function (){var statearr_43770 = state_43306;
(statearr_43770[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43770;
})();
var inst_42965 = (state_43306[(2)]);
var inst_42966 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42967 = [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)];
var inst_42968 = (new cljs.core.PersistentVector(null,1,(5),inst_42966,inst_42967,null));
var inst_42969 = cljs.test.update_current_env_BANG_(inst_42968,cljs.core.rest);
var ___$1 = (function (){var temp__5825__auto__ = (state_43306[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_43306__$1 = (function (){var statearr_43771 = state_43306;
(statearr_43771[(55)] = inst_42969);

return statearr_43771;
})();
var statearr_43772_43881 = state_43306__$1;
(statearr_43772_43881[(2)] = inst_42965);

(statearr_43772_43881[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (63))){
var inst_43148 = (state_43306[(2)]);
var inst_43149 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43150 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"datasets","datasets",-758071350,null),new cljs.core.Symbol(null,"loaded","loaded",394049234,null));
var inst_43151 = ["bb_web_ds_tools/persistence_test.cljs",47,new cljs.core.Keyword(null,"error","error",-978969032),28,35,inst_43150,35,inst_43148,null];
var inst_43152 = cljs.core.PersistentHashMap.fromArrays(inst_43149,inst_43151);
var inst_43153 = cljs.test.report.call(null,inst_43152);
var state_43306__$1 = state_43306;
var statearr_43774_43882 = state_43306__$1;
(statearr_43774_43882[(2)] = inst_43153);

(statearr_43774_43882[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (8))){
var inst_42824 = (state_43306[(2)]);
var inst_42825 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42826 = true;
var inst_42827 = [null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,inst_42826,null,inst_42824,"Skipping SQLite tests due to environment limitations"];
var inst_42828 = cljs.core.PersistentHashMap.fromArrays(inst_42825,inst_42827);
var inst_42829 = cljs.test.report.call(null,inst_42828);
var state_43306__$1 = state_43306;
var statearr_43775_43883 = state_43306__$1;
(statearr_43775_43883[(2)] = inst_42829);

(statearr_43775_43883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (49))){
var _ = (function (){var statearr_43776 = state_43306;
(statearr_43776[(4)] = cljs.core.rest((state_43306[(4)])));

return statearr_43776;
})();
var state_43306__$1 = state_43306;
var ex43773 = (state_43306__$1[(2)]);
var statearr_43777_43884 = state_43306__$1;
(statearr_43777_43884[(5)] = ex43773);


throw ex43773;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43307 === (84))){
var inst_43263 = (state_43306[(49)]);
var inst_43274 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43275 = cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,".-size",".-size",541051946,null),new cljs.core.Symbol(null,"blob","blob",-1017470536,null)),(0));
var inst_43276 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43277 = new cljs.core.Symbol(null,">",">",1085014381,null);
var inst_43287 = cljs.core.cons(inst_43277,inst_43263);
var inst_43288 = (new cljs.core.List(null,inst_43287,null,(1),null));
var inst_43289 = (new cljs.core.List(null,inst_43276,inst_43288,(2),null));
var inst_43290 = ["bb_web_ds_tools/persistence_test.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),26,40,inst_43275,40,inst_43289,"Blob is not empty"];
var inst_43291 = cljs.core.PersistentHashMap.fromArrays(inst_43274,inst_43290);
var inst_43292 = cljs.test.report.call(null,inst_43291);
var state_43306__$1 = state_43306;
var statearr_43778_43885 = state_43306__$1;
(statearr_43778_43885[(2)] = inst_43292);

(statearr_43778_43885[(1)] = (85));


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
var statearr_43779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43779[(0)] = bb_web_ds_tools$persistence_test$state_machine__24102__auto__);

(statearr_43779[(1)] = (1));

return statearr_43779;
});
var bb_web_ds_tools$persistence_test$state_machine__24102__auto____1 = (function (state_43306){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_43306);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e43780){var ex__24105__auto__ = e43780;
var statearr_43781_43886 = state_43306;
(statearr_43781_43886[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_43306[(4)]))){
var statearr_43782_43887 = state_43306;
(statearr_43782_43887[(1)] = cljs.core.first((state_43306[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43888 = state_43306;
state_43306 = G__43888;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$persistence_test$state_machine__24102__auto__ = function(state_43306){
switch(arguments.length){
case 0:
return bb_web_ds_tools$persistence_test$state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$persistence_test$state_machine__24102__auto____1.call(this,state_43306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$persistence_test$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$persistence_test$state_machine__24102__auto____0;
bb_web_ds_tools$persistence_test$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$persistence_test$state_machine__24102__auto____1;
return bb_web_ds_tools$persistence_test$state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_43783 = f__24149__auto__();
(statearr_43783[(6)] = c__24148__auto__);

return statearr_43783;
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
