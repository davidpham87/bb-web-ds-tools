goog.provide('bb_web_ds_tools.views.r_repl');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","initialize","bb-web-ds-tools.views.r-repl/initialize",-1256766244),(function (p__50756,_){
var map__50757 = p__50756;
var map__50757__$1 = cljs.core.__destructure_map(map__50757);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50757__$1,new cljs.core.Keyword(null,"db","db",993250759));
var exists_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var ready_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386)], null));
var loading_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var G__50758 = db;
if(cljs.core.not(exists_QMARK_)){
return cljs.core.assoc_in(G__50758,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898),false,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386),false,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","error","bb-web-ds-tools.views.r-repl/error",1431453769),null,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","code","bb-web-ds-tools.views.r-repl/code",-302987231),"# To install packages use webr::install(\"package_name\")\n# Example: webr::install(\"bootstrap\")\n# Repository available here: https://repo.r-wasm.org/\n\nwebr::install(\"ggplot2\")\nwebr::install(\"dplyr\")\n\nmtcars %>% \n  filter(mpg > 20) %>% \n  ggplot(aes(x = wt, y = mpg)) + \n  geom_point() -> p\n\nprint(p)"], null));
} else {
return G__50758;
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-loading","bb-web-ds-tools.views.r-repl/set-loading",-2117313900),(function (db,p__50762){
var vec__50763 = p__50762;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50763,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50763,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898)], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-ready","bb-web-ds-tools.views.r-repl/set-ready",-1256747181),(function (db,p__50766){
var vec__50767 = p__50766;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50767,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50767,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386)], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-error","bb-web-ds-tools.views.r-repl/set-error",-250028219),(function (db,p__50774){
var vec__50776 = p__50774;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50776,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50776,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328)], null),cljs.core.assoc,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","error","bb-web-ds-tools.views.r-repl/error",1431453769),v,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-code","bb-web-ds-tools.views.r-repl/set-code",-1945147945),(function (db,p__50782){
var vec__50783 = p__50782;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50783,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50783,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","initialize-runtime","bb-web-ds-tools.views.r-repl/initialize-runtime",-1655199065),(function (p__50792,_){
var map__50793 = p__50792;
var map__50793__$1 = cljs.core.__destructure_map(map__50793);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50793__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328)], null),cljs.core.assoc,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898),true,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","error","bb-web-ds-tools.views.r-repl/error",1431453769),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","load-runtime","bb-web-ds-tools.views.r-repl/load-runtime",-1780063609)], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","execute-r","bb-web-ds-tools.views.r-repl/execute-r",648570321),(function (p__50801){
var vec__50802 = p__50801;
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50802,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50802,(1),null);
return bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic(code,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","bind-datasets","bb-web-ds-tools.views.r-repl/bind-datasets",-1951732511),(function (p__50807){
var map__50809 = p__50807;
var map__50809__$1 = cljs.core.__destructure_map(map__50809);
var datasets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50809__$1,new cljs.core.Keyword(null,"datasets","datasets",1896364419));
var keys_to_bind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50809__$1,new cljs.core.Keyword(null,"keys-to-bind","keys-to-bind",2073155763));
return bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic(datasets,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_to_bind], 0));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","sync-datasets","bb-web-ds-tools.views.r-repl/sync-datasets",751733611),(function (_){
return bb_web_ds_tools.runtime.webr.sync_datasets();
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","run-code","bb-web-ds-tools.views.r-repl/run-code",-1991503277),(function (p__50815,p__50816){
var map__50818 = p__50815;
var map__50818__$1 = cljs.core.__destructure_map(map__50818);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50818__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__50819 = p__50816;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50819,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50819,(1),null);
var webr_settings = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"webr","webr",-966893065)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container-width","container-width",-1461172864),(720),new cljs.core.Keyword(null,"container-height","container-height",-577782714),(800),new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110),0.72], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","execute-r","bb-web-ds-tools.views.r-repl/execute-r",648570321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"webr","webr",-966893065),webr_settings], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","on-mount","bb-web-ds-tools.views.r-repl/on-mount",647808555),(function (p__50824,_){
var map__50825 = p__50824;
var map__50825__$1 = cljs.core.__destructure_map(map__50825);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50825__$1,new cljs.core.Keyword(null,"db","db",993250759));
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
bb_web_ds_tools.views.r_repl.panel_render = (function bb_web_ds_tools$views$r_repl$panel_render(){
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898)], null)));
var ready_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386)], null)));
var error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","error","bb-web-ds-tools.views.r-repl/error",1431453769)], null)));
var code = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","code","bb-web-ds-tools.views.r-repl/code",-302987231)], null)));
var mac_os_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","mac-os?","bb-web-ds-tools.views.r-repl/mac-os?",1479779366)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full w-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full p-2 space-y-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"R Code"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-4"], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),bb_web_ds_tools.theme.text_accent], null),"Loading WebR..."], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","run-code","bb-web-ds-tools.views.r-repl/run-code",-1991503277),code], null));
})], null),"Eval"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow rounded overflow-hidden border ",bb_web_ds_tools.theme.border_default].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),code,new cljs.core.Keyword(null,"language","language",-1591107564),"r",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),"off"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__50836_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-code","bb-web-ds-tools.views.r-repl/set-code",-1945147945),p1__50836_SHARP_], null));
}),new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (p1__50837_SHARP_){
return bb_web_ds_tools.components.editor.setup_editor_actions(p1__50837_SHARP_,mac_os_QMARK_,(function (code__$1){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","run-code","bb-web-ds-tools.views.r-repl/run-code",-1991503277),code__$1], null));
}));
})], null)], null)], null)], null)], null);
});
/**
 * Main component for the R REPL view. Initializes state on mount.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.r_repl.panel = (function bb_web_ds_tools$views$r_repl$panel(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"r-repl-panel",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","on-mount","bb-web-ds-tools.views.r-repl/on-mount",647808555)], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.r_repl.panel_render], null);
})], null));
});

//# sourceMappingURL=bb_web_ds_tools.views.r_repl.js.map
