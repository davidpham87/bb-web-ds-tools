goog.provide('bb_web_ds_tools.views.r_repl');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","initialize","bb-web-ds-tools.views.r-repl/initialize",-1256766244),(function (p__51517,_){
var map__51519 = p__51517;
var map__51519__$1 = cljs.core.__destructure_map(map__51519);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51519__$1,new cljs.core.Keyword(null,"db","db",993250759));
var exists_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var ready_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386)], null));
var loading_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var G__51529 = db;
if(cljs.core.not(exists_QMARK_)){
return cljs.core.assoc_in(G__51529,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898),false,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386),false,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","error","bb-web-ds-tools.views.r-repl/error",1431453769),null,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","code","bb-web-ds-tools.views.r-repl/code",-302987231),["# To install packages use webr::install(\"package_name\")\n# Example: webr::install(\"bootstrap\")\n# Repository available here: https://repo.r-wasm.org/","\n\nwebr::install(\"ggplot2\")\nwebr::install(\"dplyr\")","\n\nlibrary(\"ggplot2\")\nlibrary(\"dplyr\")","\n\nmtcars %>% \n  filter(mpg > 20) %>% \n  ggplot(aes(x = wt, y = mpg)) + \n  geom_point() -> p\n\nprint(p)"].join('')], null));
} else {
return G__51529;
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-loading","bb-web-ds-tools.views.r-repl/set-loading",-2117313900),(function (db,p__51550){
var vec__51552 = p__51550;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51552,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51552,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898)], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-ready","bb-web-ds-tools.views.r-repl/set-ready",-1256747181),(function (db,p__51564){
var vec__51566 = p__51564;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51566,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386)], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-error","bb-web-ds-tools.views.r-repl/set-error",-250028219),(function (db,p__51583){
var vec__51585 = p__51583;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51585,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51585,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328)], null),cljs.core.assoc,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","error","bb-web-ds-tools.views.r-repl/error",1431453769),v,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-code","bb-web-ds-tools.views.r-repl/set-code",-1945147945),(function (db,p__51593){
var vec__51594 = p__51593;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51594,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51594,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","initialize-runtime","bb-web-ds-tools.views.r-repl/initialize-runtime",-1655199065),(function (p__51607,_){
var map__51610 = p__51607;
var map__51610__$1 = cljs.core.__destructure_map(map__51610);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51610__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"default","default",-1987822328)], null),cljs.core.assoc,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898),true,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","error","bb-web-ds-tools.views.r-repl/error",1431453769),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","load-runtime","bb-web-ds-tools.views.r-repl/load-runtime",-1780063609)], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","execute-r","bb-web-ds-tools.views.r-repl/execute-r",648570321),(function (p__51614){
var vec__51616 = p__51614;
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51616,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51616,(1),null);
return bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic(code,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","bind-datasets","bb-web-ds-tools.views.r-repl/bind-datasets",-1951732511),(function (p__51622){
var map__51623 = p__51622;
var map__51623__$1 = cljs.core.__destructure_map(map__51623);
var datasets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51623__$1,new cljs.core.Keyword(null,"datasets","datasets",1896364419));
var keys_to_bind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51623__$1,new cljs.core.Keyword(null,"keys-to-bind","keys-to-bind",2073155763));
return bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic(datasets,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_to_bind], 0));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","sync-datasets","bb-web-ds-tools.views.r-repl/sync-datasets",751733611),(function (_){
return bb_web_ds_tools.runtime.webr.sync_datasets();
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","run-code","bb-web-ds-tools.views.r-repl/run-code",-1991503277),(function (p__51629,p__51630){
var map__51633 = p__51629;
var map__51633__$1 = cljs.core.__destructure_map(map__51633);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51633__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51634 = p__51630;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51634,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51634,(1),null);
var webr_settings = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"webr","webr",-966893065)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container-width","container-width",-1461172864),(720),new cljs.core.Keyword(null,"container-height","container-height",-577782714),(800),new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110),0.72], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","execute-r","bb-web-ds-tools.views.r-repl/execute-r",648570321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"webr","webr",-966893065),webr_settings], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","on-mount","bb-web-ds-tools.views.r-repl/on-mount",647808555),(function (p__51640,_){
var map__51643 = p__51640;
var map__51643__$1 = cljs.core.__destructure_map(map__51643);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51643__$1,new cljs.core.Keyword(null,"db","db",993250759));
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
var len__5749__auto___51745 = arguments.length;
var i__5750__auto___51746 = (0);
while(true){
if((i__5750__auto___51746 < len__5749__auto___51745)){
args__5755__auto__.push((arguments[i__5750__auto___51746]));

var G__51747 = (i__5750__auto___51746 + (1));
i__5750__auto___51746 = G__51747;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.views.r_repl.panel_render.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.views.r_repl.panel_render.cljs$core$IFn$_invoke$arity$variadic = (function (p__51660){
var vec__51661 = p__51660;
var map__51664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51661,(0),null);
var map__51664__$1 = cljs.core.__destructure_map(map__51664);
var header_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51664__$1,new cljs.core.Keyword(null,"header-content","header-content",-2015916786));
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","loading?","bb-web-ds-tools.views.r-repl/loading?",-507319898)], null)));
var ready_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","ready?","bb-web-ds-tools.views.r-repl/ready?",-1998175386)], null)));
var error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","error","bb-web-ds-tools.views.r-repl/error",1431453769)], null)));
var code = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","code","bb-web-ds-tools.views.r-repl/code",-302987231)], null)));
var mac_os_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","mac-os?","bb-web-ds-tools.views.r-repl/mac-os?",1479779366)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.tool_view.tool_view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"R Code",new cljs.core.Keyword(null,"wiki-key","wiki-key",-1495409073),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),code,new cljs.core.Keyword(null,"language","language",-1591107564),"r",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),"off"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51649_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-code","bb-web-ds-tools.views.r-repl/set-code",-1945147945),p1__51649_SHARP_], null));
}),new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (p1__51651_SHARP_){
return bb_web_ds_tools.components.editor.setup_editor_actions(p1__51651_SHARP_,mac_os_QMARK_,(function (code__$1){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","run-code","bb-web-ds-tools.views.r-repl/run-code",-1991503277),code__$1], null));
}));
})], null)], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),bb_web_ds_tools.theme.text_accent], null),"Loading WebR..."], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","run-code","bb-web-ds-tools.views.r-repl/run-code",-1991503277),code], null));
})], null),"Eval"], null)], null)], null)], null);
}));

(bb_web_ds_tools.views.r_repl.panel_render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.views.r_repl.panel_render.cljs$lang$applyTo = (function (seq51652){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51652));
}));

/**
 * Main component for the R REPL view. Initializes state on mount.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.r_repl.panel = (function bb_web_ds_tools$views$r_repl$panel(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51759 = arguments.length;
var i__5750__auto___51760 = (0);
while(true){
if((i__5750__auto___51760 < len__5749__auto___51759)){
args__5755__auto__.push((arguments[i__5750__auto___51760]));

var G__51762 = (i__5750__auto___51760 + (1));
i__5750__auto___51760 = G__51762;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.views.r_repl.panel.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.views.r_repl.panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__51688){
var vec__51691 = p__51688;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51691,(0),null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"r-repl-panel",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","on-mount","bb-web-ds-tools.views.r-repl/on-mount",647808555)], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__51766__delegate = function (p__51696){
var vec__51697 = p__51696;
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51697,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.r_repl.panel_render,props__$1], null);
};
var G__51766 = function (var_args){
var p__51696 = null;
if (arguments.length > 0) {
var G__51767__i = 0, G__51767__a = new Array(arguments.length -  0);
while (G__51767__i < G__51767__a.length) {G__51767__a[G__51767__i] = arguments[G__51767__i + 0]; ++G__51767__i;}
  p__51696 = new cljs.core.IndexedSeq(G__51767__a,0,null);
} 
return G__51766__delegate.call(this,p__51696);};
G__51766.cljs$lang$maxFixedArity = 0;
G__51766.cljs$lang$applyTo = (function (arglist__51768){
var p__51696 = cljs.core.seq(arglist__51768);
return G__51766__delegate(p__51696);
});
G__51766.cljs$core$IFn$_invoke$arity$variadic = G__51766__delegate;
return G__51766;
})()
], null));
}));

(bb_web_ds_tools.views.r_repl.panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.views.r_repl.panel.cljs$lang$applyTo = (function (seq51683){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51683));
}));


//# sourceMappingURL=bb_web_ds_tools.views.r_repl.js.map
