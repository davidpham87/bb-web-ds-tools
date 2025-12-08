goog.provide('fork.re_frame');
fork.re_frame.set_waiting = (function fork$re_frame$set_waiting(db,path,input_name,bool){
return fork.core.set_waiting(db,path,input_name,bool);
});
fork.re_frame.set_submitting = (function fork$re_frame$set_submitting(state,path,bool){
return fork.core.set_submitting(state,path,bool);
});
fork.re_frame.set_server_message = (function fork$re_frame$set_server_message(db,path,message){
return fork.core.set_server_message(db,path,message);
});
fork.re_frame.set_error = (function fork$re_frame$set_error(state,path,input_name,message){
return fork.core.set_error(state,path,input_name,message);
});
fork.re_frame.retrieve_event_value = (function fork$re_frame$retrieve_event_value(evt){
return fork.core.element_value(evt);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fork.re-frame","server-dispatch-logic","fork.re-frame/server-dispatch-logic",-1023921676),(function (db,p__43605){
var vec__43606 = p__43605;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43606,(0),null);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43606,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43606,(2),null);
var set_waiting_QMARK_ = fork.core.config_set_waiting_QMARK_(config);
var input_names = new cljs.core.Keyword(null,"clean-on-refetch","clean-on-refetch",-385424580).cljs$core$IFn$_invoke$arity$1(config);
var G__43609 = db;
var G__43609__$1 = ((cljs.core.seq(input_names))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__43609,path,(function (m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,m,new cljs.core.Keyword(null,"server","server",1499190120),cljs.core.dissoc,input_names);
})):G__43609);
if(cljs.core.truth_(set_waiting_QMARK_)){
return cljs.core.assoc_in(G__43609__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215)], null)),true);
} else {
return G__43609__$1;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fork.re-frame","server-set-waiting","fork.re-frame/server-set-waiting",-1277872097),(function (db,p__43610){
var vec__43611 = p__43610;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43611,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43611,(1),null);
var input_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43611,(2),null);
var bool = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43611,(3),null);
return cljs.core.assoc_in(db,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),input_key,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215)], null)),bool);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("fork.re-frame","db","fork.re-frame/db",503486154),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__43618){
var vec__43619 = p__43618;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43619,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43619,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fork.re-frame","clean","fork.re-frame/clean",-448599170),(function (db,p__43622){
var vec__43623 = p__43622;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43623,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43623,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(path))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.first(path));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,cljs.core.butlast(path),cljs.core.dissoc,cljs.core.last(path));
}
}));
fork.re_frame.field_array = (function fork$re_frame$field_array(props,component){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork.core.field_array,props,component], null);
});
fork.re_frame.form = (function fork$re_frame$form(props,_){
var state = fork.core.initialize_state(props);
var p = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(props);
var path = (cljs.core.truth_((function (){var and__5023__auto__ = p;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.vector_QMARK_(p);
} else {
return and__5023__auto__;
}
})())?p:(((p instanceof cljs.core.Keyword))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[p],null)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fork.re-frame","global","fork.re-frame/global",600763048)], null)
));
var form_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"form-id","form-id",-158754567).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
}
})();
var handlers = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"disable","disable",1717637504),new cljs.core.Keyword(null,"handle-blur","handle-blur",-546639264),new cljs.core.Keyword(null,"set-values","set-values",-928640446),new cljs.core.Keyword(null,"handle-change","handle-change",741134083),new cljs.core.Keyword(null,"enable","enable",-1839114332),new cljs.core.Keyword(null,"set-untouched","set-untouched",922972645),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"set-handle-blur","set-handle-blur",1284701225),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429),new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"normalize-name","normalize-name",-510567633),new cljs.core.Keyword(null,"send-server-request","send-server-request",175775635),new cljs.core.Keyword(null,"set-handle-change","set-handle-change",-827648040),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)],[(function() { 
var G__43675__delegate = function (ks){
return fork.core.disable.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
};
var G__43675 = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__43676__i = 0, G__43676__a = new Array(arguments.length -  0);
while (G__43676__i < G__43676__a.length) {G__43676__a[G__43676__i] = arguments[G__43676__i + 0]; ++G__43676__i;}
  ks = new cljs.core.IndexedSeq(G__43676__a,0,null);
} 
return G__43675__delegate.call(this,ks);};
G__43675.cljs$lang$maxFixedArity = 0;
G__43675.cljs$lang$applyTo = (function (arglist__43677){
var ks = cljs.core.seq(arglist__43677);
return G__43675__delegate(ks);
});
G__43675.cljs$core$IFn$_invoke$arity$variadic = G__43675__delegate;
return G__43675;
})()
,(function (p1__43644_SHARP_){
return fork.core.handle_blur(p1__43644_SHARP_,state);
}),(function (p1__43632_SHARP_){
return fork.core.set_values(p1__43632_SHARP_,state);
}),(function (p1__43643_SHARP_){
return fork.core.handle_change(p1__43643_SHARP_,state);
}),(function() { 
var G__43678__delegate = function (ks){
return fork.core.enable.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
};
var G__43678 = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__43679__i = 0, G__43679__a = new Array(arguments.length -  0);
while (G__43679__i < G__43679__a.length) {G__43679__a[G__43679__i] = arguments[G__43679__i + 0]; ++G__43679__i;}
  ks = new cljs.core.IndexedSeq(G__43679__a,0,null);
} 
return G__43678__delegate.call(this,ks);};
G__43678.cljs$lang$maxFixedArity = 0;
G__43678.cljs$lang$applyTo = (function (arglist__43680){
var ks = cljs.core.seq(arglist__43680);
return G__43678__delegate(ks);
});
G__43678.cljs$core$IFn$_invoke$arity$variadic = G__43678__delegate;
return G__43678;
})()
,(function() { 
var G__43681__delegate = function (ks){
return fork.core.set_untouched(ks,state);
};
var G__43681 = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__43683__i = 0, G__43683__a = new Array(arguments.length -  0);
while (G__43683__i < G__43683__a.length) {G__43683__a[G__43683__i] = arguments[G__43683__i + 0]; ++G__43683__i;}
  ks = new cljs.core.IndexedSeq(G__43683__a,0,null);
} 
return G__43681__delegate.call(this,ks);};
G__43681.cljs$lang$maxFixedArity = 0;
G__43681.cljs$lang$applyTo = (function (arglist__43684){
var ks = cljs.core.seq(arglist__43684);
return G__43681__delegate(ks);
});
G__43681.cljs$core$IFn$_invoke$arity$variadic = G__43681__delegate;
return G__43681;
})()
,(function() { 
var G__43685__delegate = function (p__43646){
var vec__43647 = p__43646;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43647,(0),null);
cljs.core.reset_BANG_(state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252).cljs$core$IFn$_invoke$arity$1(props))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null):null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"touched","touched",-609134419),cljs.core.PersistentHashSet.EMPTY], null),m], 0)));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fork.re-frame","clean","fork.re-frame/clean",-448599170),path], null));
};
var G__43685 = function (var_args){
var p__43646 = null;
if (arguments.length > 0) {
var G__43686__i = 0, G__43686__a = new Array(arguments.length -  0);
while (G__43686__i < G__43686__a.length) {G__43686__a[G__43686__i] = arguments[G__43686__i + 0]; ++G__43686__i;}
  p__43646 = new cljs.core.IndexedSeq(G__43686__a,0,null);
} 
return G__43685__delegate.call(this,p__43646);};
G__43685.cljs$lang$maxFixedArity = 0;
G__43685.cljs$lang$applyTo = (function (arglist__43687){
var p__43646 = cljs.core.seq(arglist__43687);
return G__43685__delegate(p__43646);
});
G__43685.cljs$core$IFn$_invoke$arity$variadic = G__43685__delegate;
return G__43685;
})()
,(function (p1__43642_SHARP_){
return fork.core.set_handle_blur(p1__43642_SHARP_,state);
}),(function() { 
var G__43688__delegate = function (ks){
return fork.core.set_touched(ks,state);
};
var G__43688 = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__43689__i = 0, G__43689__a = new Array(arguments.length -  0);
while (G__43689__i < G__43689__a.length) {G__43689__a[G__43689__i] = arguments[G__43689__i + 0]; ++G__43689__i;}
  ks = new cljs.core.IndexedSeq(G__43689__a,0,null);
} 
return G__43688__delegate.call(this,ks);};
G__43688.cljs$lang$maxFixedArity = 0;
G__43688.cljs$lang$applyTo = (function (arglist__43690){
var ks = cljs.core.seq(arglist__43690);
return G__43688__delegate(ks);
});
G__43688.cljs$core$IFn$_invoke$arity$variadic = G__43688__delegate;
return G__43688;
})()
,(function (k){
return fork.core.touched(state,k);
}),(function (p1__43636_SHARP_){
return fork.core.normalize_name(p1__43636_SHARP_,props);
}),(function (config,callback){
return fork.core.send_server_request(callback,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"server-dispatch-logic","server-dispatch-logic",-465441551),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fork.re-frame","server-dispatch-logic","fork.re-frame/server-dispatch-logic",-1023921676),config,path], null));
})], null)], 0)));
}),(function (p1__43641_SHARP_){
return fork.core.set_handle_change(p1__43641_SHARP_,state);
}),(function (p1__43633_SHARP_){
return fork.core.disabled_QMARK_(state,p1__43633_SHARP_);
})]);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var temp__5825__auto__ = new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5825__auto__)){
var on_mount = temp__5825__auto__;
return (on_mount.cljs$core$IFn$_invoke$arity$1 ? on_mount.cljs$core$IFn$_invoke$arity$1(handlers) : on_mount.call(null,handlers));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"clean-on-unmount?","clean-on-unmount?",-1144411068).cljs$core$IFn$_invoke$arity$1(props))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fork.re-frame","clean","fork.re-frame/clean",-448599170),path], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (props__$1,component){
var db = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fork.re-frame","db","fork.re-frame/db",503486154),path], null)));
var validation = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"validation","validation",-2141396518).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var val_fn = temp__5825__auto__;
return fork.core.handle_validation(cljs.core.deref(state),val_fn);
} else {
return null;
}
})();
var server_validation = fork.core.resolve_server_validation(new cljs.core.Keyword(null,"server","server",1499190120).cljs$core$IFn$_invoke$arity$1(db));
var on_submit_server_message = new cljs.core.Keyword(null,"server-message","server-message",-678695903).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"disable","disable",1717637504),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"handle-blur","handle-blur",-546639264),new cljs.core.Keyword(null,"dirty","dirty",729553281),new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"set-values","set-values",-928640446),new cljs.core.Keyword(null,"handle-change","handle-change",741134083),new cljs.core.Keyword(null,"enable","enable",-1839114332),new cljs.core.Keyword(null,"set-untouched","set-untouched",922972645),new cljs.core.Keyword(null,"handle-submit","handle-submit",1732326917),new cljs.core.Keyword(null,"successful-submissions","successful-submissions",-961073531),new cljs.core.Keyword(null,"submitting?","submitting?",1281507942),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"set-handle-blur","set-handle-blur",1284701225),new cljs.core.Keyword(null,"attempted-submissions","attempted-submissions",2035303435),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"normalize-name","normalize-name",-510567633),new cljs.core.Keyword(null,"on-submit-server-message","on-submit-server-message",-1306531376),new cljs.core.Keyword(null,"send-server-request","send-server-request",175775635),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"set-handle-change","set-handle-change",-827648040),new cljs.core.Keyword(null,"form-id","form-id",-158754567),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),new cljs.core.Keyword(null,"props","props",453281727)],[new cljs.core.Keyword(null,"disable","disable",1717637504).cljs$core$IFn$_invoke$arity$1(handlers),path,new cljs.core.Keyword(null,"handle-blur","handle-blur",-546639264).cljs$core$IFn$_invoke$arity$1(handlers),fork.core.dirty(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-values","initial-values",1392120293).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"touched-values","touched-values",-1817885644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], 0))),validation,new cljs.core.Keyword(null,"set-values","set-values",-928640446).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"handle-change","handle-change",741134083).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"enable","enable",-1839114332).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"set-untouched","set-untouched",922972645).cljs$core$IFn$_invoke$arity$1(handlers),(function (p1__43645_SHARP_){
return fork.core.handle_submit(p1__43645_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"server","server",1499190120).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"form-id","form-id",-158754567),form_id,new cljs.core.Keyword(null,"validation","validation",-2141396518),validation,new cljs.core.Keyword(null,"already-submitting?","already-submitting?",1438118407),new cljs.core.Keyword(null,"submitting?","submitting?",1281507942).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(handlers)], null)], 0)));
}),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"successful-submissions","successful-submissions",-961073531).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"submitting?","submitting?",1281507942).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(handlers),db,new cljs.core.Keyword(null,"set-handle-blur","set-handle-blur",1284701225).cljs$core$IFn$_invoke$arity$1(handlers),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"attempted-submissions","attempted-submissions",2035303435).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429).cljs$core$IFn$_invoke$arity$1(handlers),state,new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"normalize-name","normalize-name",-510567633).cljs$core$IFn$_invoke$arity$1(handlers),on_submit_server_message,new cljs.core.Keyword(null,"send-server-request","send-server-request",175775635).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"set-handle-change","set-handle-change",-827648040).cljs$core$IFn$_invoke$arity$1(handlers),form_id,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(handlers),server_validation,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(props__$1)])], null);
})], null));
});

//# sourceMappingURL=fork.re_frame.js.map
