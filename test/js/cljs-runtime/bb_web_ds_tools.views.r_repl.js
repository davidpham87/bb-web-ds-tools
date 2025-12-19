goog.provide('bb_web_ds_tools.views.r_repl');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","initialize","bb-web-ds-tools.views.r-repl/initialize",-1256766244),(function (p__32589,_){
var map__32590 = p__32589;
var map__32590__$1 = cljs.core.__destructure_map(map__32590);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32590__$1,new cljs.core.Keyword(null,"db","db",993250759));
var exists_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var ready_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386)], null));
var loading_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var G__32591 = db;
if(cljs.core.not(exists_QMARK_)){
return cljs.core.assoc_in(G__32591,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898),false,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386),false,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","error","bb-web-ds-tools.views.r-repl/error",1431453769),null,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","code","bb-web-ds-tools.views.r-repl/code",-302987231),["# To install packages use webr::install(\"package_name\")\n# Example: webr::install(\"bootstrap\")\n# Repository available here: https://repo.r-wasm.org/","\n\nwebr::install(\"ggplot2\")\nwebr::install(\"dplyr\")","\n\nlibrary(\"ggplot2\")\nlibrary(\"dplyr\")","\n\nmtcars %>% \n  filter(mpg > 20) %>% \n  ggplot(aes(x = wt, y = mpg)) + \n  geom_point() -> p\n\nprint(p)"].join('')], null));
} else {
return G__32591;
}
})(),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((cljs.core.not(ready_QMARK_)) && (cljs.core.not(loading_QMARK_))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","initialize-runtime","bb-web-ds-tools.views.r-repl/initialize-runtime",-1655199065)], null)], null):null)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","root","bb-web-ds-tools.views.r-repl/root",-701617808),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","user-input","bb-web-ds-tools.core/user-input",1937733608)], null),(function (user_input,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(user_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","root","bb-web-ds-tools.views.r-repl/root",-701617808)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","root","bb-web-ds-tools.views.r-repl/root",-701617808)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","error","bb-web-ds-tools.views.r-repl/error",1431453769),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","root","bb-web-ds-tools.views.r-repl/root",-701617808)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","error","bb-web-ds-tools.views.r-repl/error",1431453769).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","code","bb-web-ds-tools.views.r-repl/code",-302987231),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","root","bb-web-ds-tools.views.r-repl/root",-701617808)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","code","bb-web-ds-tools.views.r-repl/code",-302987231).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","mac-os?","bb-web-ds-tools.views.r-repl/mac-os?",1479779366),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"platform","platform",-1086422114),new cljs.core.Keyword(null,"mac-os?","mac-os?",-1478507137)], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-loading","bb-web-ds-tools.views.r-repl/set-loading",-2117313900),(function (db,p__32592){
var vec__32593 = p__32592;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32593,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32593,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898)], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-ready","bb-web-ds-tools.views.r-repl/set-ready",-1256747181),(function (db,p__32596){
var vec__32597 = p__32596;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32597,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386)], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-error","bb-web-ds-tools.views.r-repl/set-error",-250028219),(function (db,p__32600){
var vec__32601 = p__32600;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32601,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32601,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328)], null),cljs.core.assoc,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","error","bb-web-ds-tools.views.r-repl/error",1431453769),v,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-code","bb-web-ds-tools.views.r-repl/set-code",-1945147945),(function (db,p__32604){
var vec__32605 = p__32604;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32605,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32605,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","code","bb-web-ds-tools.views.r-repl/code",-302987231)], null),v);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","load-runtime","bb-web-ds-tools.views.r-repl/load-runtime",-1780063609),(function (_){
return bb_web_ds_tools.runtime.webr.load_runtime_main((function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-ready","bb-web-ds-tools.views.r-repl/set-ready",-1256747181),true], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-loading","bb-web-ds-tools.views.r-repl/set-loading",-2117313900),false], null));
}),(function (err){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-error","bb-web-ds-tools.views.r-repl/set-error",-250028219),err], null));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","initialize-runtime","bb-web-ds-tools.views.r-repl/initialize-runtime",-1655199065),(function (p__32608,_){
var map__32609 = p__32608;
var map__32609__$1 = cljs.core.__destructure_map(map__32609);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32609__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328)], null),cljs.core.assoc,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898),true,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","error","bb-web-ds-tools.views.r-repl/error",1431453769),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","load-runtime","bb-web-ds-tools.views.r-repl/load-runtime",-1780063609)], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","execute-r","bb-web-ds-tools.views.r-repl/execute-r",648570321),(function (p__32610){
var vec__32611 = p__32610;
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32611,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32611,(1),null);
return bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic(code,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","bind-datasets","bb-web-ds-tools.views.r-repl/bind-datasets",-1951732511),(function (p__32614){
var map__32615 = p__32614;
var map__32615__$1 = cljs.core.__destructure_map(map__32615);
var datasets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32615__$1,new cljs.core.Keyword(null,"datasets","datasets",1896364419));
var keys_to_bind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32615__$1,new cljs.core.Keyword(null,"keys-to-bind","keys-to-bind",2073155763));
return bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic(datasets,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_to_bind], 0));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","sync-datasets","bb-web-ds-tools.views.r-repl/sync-datasets",751733611),(function (_){
return bb_web_ds_tools.runtime.webr.sync_datasets();
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","run-code","bb-web-ds-tools.views.r-repl/run-code",-1991503277),(function (p__32616,p__32617){
var map__32618 = p__32616;
var map__32618__$1 = cljs.core.__destructure_map(map__32618);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32618__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32619 = p__32617;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32619,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32619,(1),null);
var webr_settings = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"webr","webr",-966893065)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container-width","container-width",-1461172864),(720),new cljs.core.Keyword(null,"container-height","container-height",-577782714),(800),new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110),0.72], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","execute-r","bb-web-ds-tools.views.r-repl/execute-r",648570321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"webr","webr",-966893065),webr_settings], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","on-mount","bb-web-ds-tools.views.r-repl/on-mount",647808555),(function (p__32622,_){
var map__32623 = p__32622;
var map__32623__$1 = cljs.core.__destructure_map(map__32623);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32623__$1,new cljs.core.Keyword(null,"db","db",993250759));
var datasets = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","initialize","bb-web-ds-tools.views.r-repl/initialize",-1256766244)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","bind-datasets","bb-web-ds-tools.views.r-repl/bind-datasets",-1951732511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datasets","datasets",1896364419),datasets], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","on-unmount","bb-web-ds-tools.views.r-repl/on-unmount",510191938),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","sync-datasets","bb-web-ds-tools.views.r-repl/sync-datasets",751733611)], null)], null)], null);
}));
/**
 * Renders the R REPL view content.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.r_repl.panel_render = (function bb_web_ds_tools$views$r_repl$panel_render(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32654 = arguments.length;
var i__5750__auto___32655 = (0);
while(true){
if((i__5750__auto___32655 < len__5749__auto___32654)){
args__5755__auto__.push((arguments[i__5750__auto___32655]));

var G__32668 = (i__5750__auto___32655 + (1));
i__5750__auto___32655 = G__32668;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.views.r_repl.panel_render.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.views.r_repl.panel_render.cljs$core$IFn$_invoke$arity$variadic = (function (p__32627){
var vec__32628 = p__32627;
var map__32631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32628,(0),null);
var map__32631__$1 = cljs.core.__destructure_map(map__32631);
var header_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32631__$1,new cljs.core.Keyword(null,"header-content","header-content",-2015916786));
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898)], null)));
var ready_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386)], null)));
var error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","error","bb-web-ds-tools.views.r-repl/error",1431453769)], null)));
var code = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","code","bb-web-ds-tools.views.r-repl/code",-302987231)], null)));
var mac_os_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","mac-os?","bb-web-ds-tools.views.r-repl/mac-os?",1479779366)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.tool_view.tool_view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"R Code",new cljs.core.Keyword(null,"wiki-key","wiki-key",-1495409073),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),code,new cljs.core.Keyword(null,"language","language",-1591107564),"r",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),"off"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__32624_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-code","bb-web-ds-tools.views.r-repl/set-code",-1945147945),p1__32624_SHARP_], null));
}),new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (p1__32625_SHARP_){
return bb_web_ds_tools.components.editor.setup_editor_actions(p1__32625_SHARP_,mac_os_QMARK_,(function (code__$1){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","run-code","bb-web-ds-tools.views.r-repl/run-code",-1991503277),code__$1], null));
}));
})], null)], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),bb_web_ds_tools.theme.text_accent], null),"Loading WebR..."], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","run-code","bb-web-ds-tools.views.r-repl/run-code",-1991503277),code], null));
})], null),"Eval"], null)], null)], null)], null);
}));

(bb_web_ds_tools.views.r_repl.panel_render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.views.r_repl.panel_render.cljs$lang$applyTo = (function (seq32626){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32626));
}));

/**
 * Main component for the R REPL view. Initializes state on mount.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.r_repl.panel = (function bb_web_ds_tools$views$r_repl$panel(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32671 = arguments.length;
var i__5750__auto___32672 = (0);
while(true){
if((i__5750__auto___32672 < len__5749__auto___32671)){
args__5755__auto__.push((arguments[i__5750__auto___32672]));

var G__32673 = (i__5750__auto___32672 + (1));
i__5750__auto___32672 = G__32673;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.views.r_repl.panel.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.views.r_repl.panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__32633){
var vec__32634 = p__32633;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32634,(0),null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"r-repl-panel",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","on-mount","bb-web-ds-tools.views.r-repl/on-mount",647808555)], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__32676__delegate = function (p__32637){
var vec__32638 = p__32637;
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32638,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.r_repl.panel_render,props__$1], null);
};
var G__32676 = function (var_args){
var p__32637 = null;
if (arguments.length > 0) {
var G__32677__i = 0, G__32677__a = new Array(arguments.length -  0);
while (G__32677__i < G__32677__a.length) {G__32677__a[G__32677__i] = arguments[G__32677__i + 0]; ++G__32677__i;}
  p__32637 = new cljs.core.IndexedSeq(G__32677__a,0,null);
} 
return G__32676__delegate.call(this,p__32637);};
G__32676.cljs$lang$maxFixedArity = 0;
G__32676.cljs$lang$applyTo = (function (arglist__32678){
var p__32637 = cljs.core.seq(arglist__32678);
return G__32676__delegate(p__32637);
});
G__32676.cljs$core$IFn$_invoke$arity$variadic = G__32676__delegate;
return G__32676;
})()
], null));
}));

(bb_web_ds_tools.views.r_repl.panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.views.r_repl.panel.cljs$lang$applyTo = (function (seq32632){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32632));
}));


//# sourceMappingURL=bb_web_ds_tools.views.r_repl.js.map
