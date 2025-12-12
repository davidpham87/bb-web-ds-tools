goog.provide('fork.reagent');
fork.reagent.set_waiting = (function fork$reagent$set_waiting(state,path,input_name,bool){
return fork.core.set_waiting(state,path,input_name,bool);
});
fork.reagent.set_submitting = (function fork$reagent$set_submitting(state,path,bool){
return fork.core.set_submitting(state,path,bool);
});
fork.reagent.set_server_message = (function fork$reagent$set_server_message(state,path,message){
return fork.core.set_server_message(state,path,message);
});
fork.reagent.set_error = (function fork$reagent$set_error(state,path,input_name,message){
return fork.core.set_error(state,path,input_name,message);
});
fork.reagent.retrieve_event_value = (function fork$reagent$retrieve_event_value(evt){
return fork.core.element_value(evt);
});
fork.reagent.server_dispatch_logic = (function fork$reagent$server_dispatch_logic(state,config,path){
var set_waiting_QMARK_ = fork.core.config_set_waiting_QMARK_(config);
var input_names = new cljs.core.Keyword(null,"clean-on-refetch","clean-on-refetch",-385424580).cljs$core$IFn$_invoke$arity$1(config);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
var G__49833 = s;
var G__49833__$1 = (cljs.core.truth_(cljs.core.not_empty(input_names))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__49833,path,(function (m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,m,new cljs.core.Keyword(null,"server","server",1499190120),cljs.core.dissoc,input_names);
})):G__49833);
if(cljs.core.truth_(set_waiting_QMARK_)){
return fork.core.set_waiting(G__49833__$1,path,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(config),true);
} else {
return G__49833__$1;
}
}));
});
fork.reagent.field_array = (function fork$reagent$field_array(props,component){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork.core.field_array,props,component], null);
});
fork.reagent.form = (function fork$reagent$form(props,_){
var state = fork.core.initialize_state(props);
var p = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(props);
var path = (cljs.core.truth_((function (){var and__5023__auto__ = p;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.vector_QMARK_(p);
} else {
return and__5023__auto__;
}
})())?p:(((p instanceof cljs.core.Keyword))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[p],null)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fork.reagent","global","fork.reagent/global",-911045303)], null)
));
var form_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"form-id","form-id",-158754567).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
}
})();
var handlers = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"disable","disable",1717637504),new cljs.core.Keyword(null,"handle-blur","handle-blur",-546639264),new cljs.core.Keyword(null,"set-values","set-values",-928640446),new cljs.core.Keyword(null,"handle-change","handle-change",741134083),new cljs.core.Keyword(null,"enable","enable",-1839114332),new cljs.core.Keyword(null,"set-untouched","set-untouched",922972645),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"set-handle-blur","set-handle-blur",1284701225),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429),new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"normalize-name","normalize-name",-510567633),new cljs.core.Keyword(null,"send-server-request","send-server-request",175775635),new cljs.core.Keyword(null,"set-handle-change","set-handle-change",-827648040),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)],[(function() { 
var G__49952__delegate = function (ks){
return fork.core.disable.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
};
var G__49952 = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__49955__i = 0, G__49955__a = new Array(arguments.length -  0);
while (G__49955__i < G__49955__a.length) {G__49955__a[G__49955__i] = arguments[G__49955__i + 0]; ++G__49955__i;}
  ks = new cljs.core.IndexedSeq(G__49955__a,0,null);
} 
return G__49952__delegate.call(this,ks);};
G__49952.cljs$lang$maxFixedArity = 0;
G__49952.cljs$lang$applyTo = (function (arglist__49956){
var ks = cljs.core.seq(arglist__49956);
return G__49952__delegate(ks);
});
G__49952.cljs$core$IFn$_invoke$arity$variadic = G__49952__delegate;
return G__49952;
})()
,(function (p1__49844_SHARP_){
return fork.core.handle_blur(p1__49844_SHARP_,state);
}),(function (p1__49838_SHARP_){
return fork.core.set_values(p1__49838_SHARP_,state);
}),(function (p1__49843_SHARP_){
return fork.core.handle_change(p1__49843_SHARP_,state);
}),(function() { 
var G__49962__delegate = function (ks){
return fork.core.enable.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
};
var G__49962 = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__49963__i = 0, G__49963__a = new Array(arguments.length -  0);
while (G__49963__i < G__49963__a.length) {G__49963__a[G__49963__i] = arguments[G__49963__i + 0]; ++G__49963__i;}
  ks = new cljs.core.IndexedSeq(G__49963__a,0,null);
} 
return G__49962__delegate.call(this,ks);};
G__49962.cljs$lang$maxFixedArity = 0;
G__49962.cljs$lang$applyTo = (function (arglist__49965){
var ks = cljs.core.seq(arglist__49965);
return G__49962__delegate(ks);
});
G__49962.cljs$core$IFn$_invoke$arity$variadic = G__49962__delegate;
return G__49962;
})()
,(function() { 
var G__49967__delegate = function (ks){
return fork.core.set_untouched(ks,state);
};
var G__49967 = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__49971__i = 0, G__49971__a = new Array(arguments.length -  0);
while (G__49971__i < G__49971__a.length) {G__49971__a[G__49971__i] = arguments[G__49971__i + 0]; ++G__49971__i;}
  ks = new cljs.core.IndexedSeq(G__49971__a,0,null);
} 
return G__49967__delegate.call(this,ks);};
G__49967.cljs$lang$maxFixedArity = 0;
G__49967.cljs$lang$applyTo = (function (arglist__49975){
var ks = cljs.core.seq(arglist__49975);
return G__49967__delegate(ks);
});
G__49967.cljs$core$IFn$_invoke$arity$variadic = G__49967__delegate;
return G__49967;
})()
,(function() { 
var G__49977__delegate = function (p__49907){
var vec__49908 = p__49907;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49908,(0),null);
return cljs.core.reset_BANG_(state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252).cljs$core$IFn$_invoke$arity$1(props))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null):null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"touched","touched",-609134419),cljs.core.PersistentHashSet.EMPTY], null),m], 0)));
};
var G__49977 = function (var_args){
var p__49907 = null;
if (arguments.length > 0) {
var G__49988__i = 0, G__49988__a = new Array(arguments.length -  0);
while (G__49988__i < G__49988__a.length) {G__49988__a[G__49988__i] = arguments[G__49988__i + 0]; ++G__49988__i;}
  p__49907 = new cljs.core.IndexedSeq(G__49988__a,0,null);
} 
return G__49977__delegate.call(this,p__49907);};
G__49977.cljs$lang$maxFixedArity = 0;
G__49977.cljs$lang$applyTo = (function (arglist__49989){
var p__49907 = cljs.core.seq(arglist__49989);
return G__49977__delegate(p__49907);
});
G__49977.cljs$core$IFn$_invoke$arity$variadic = G__49977__delegate;
return G__49977;
})()
,(function (p1__49842_SHARP_){
return fork.core.set_handle_blur(p1__49842_SHARP_,state);
}),(function() { 
var G__49990__delegate = function (ks){
return fork.core.set_touched(ks,state);
};
var G__49990 = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__49991__i = 0, G__49991__a = new Array(arguments.length -  0);
while (G__49991__i < G__49991__a.length) {G__49991__a[G__49991__i] = arguments[G__49991__i + 0]; ++G__49991__i;}
  ks = new cljs.core.IndexedSeq(G__49991__a,0,null);
} 
return G__49990__delegate.call(this,ks);};
G__49990.cljs$lang$maxFixedArity = 0;
G__49990.cljs$lang$applyTo = (function (arglist__49992){
var ks = cljs.core.seq(arglist__49992);
return G__49990__delegate(ks);
});
G__49990.cljs$core$IFn$_invoke$arity$variadic = G__49990__delegate;
return G__49990;
})()
,(function (k){
return fork.core.touched(state,k);
}),(function (p1__49840_SHARP_){
return fork.core.normalize_name(p1__49840_SHARP_,props);
}),(function (config,callback){
return fork.core.send_server_request(callback,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"server-dispatch-logic","server-dispatch-logic",-465441551),(function (){
return fork.reagent.server_dispatch_logic(state,config,path);
})], null)], 0)));
}),(function (p1__49841_SHARP_){
return fork.core.set_handle_change(p1__49841_SHARP_,state);
}),(function (p1__49839_SHARP_){
return fork.core.disabled_QMARK_(state,p1__49839_SHARP_);
})]);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var temp__5825__auto__ = new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5825__auto__)){
var on_mount = temp__5825__auto__;
return (on_mount.cljs$core$IFn$_invoke$arity$1 ? on_mount.cljs$core$IFn$_invoke$arity$1(handlers) : on_mount.call(null,handlers));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (props__$1,component){
var validation = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"validation","validation",-2141396518).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var val_fn = temp__5825__auto__;
return fork.core.handle_validation(cljs.core.deref(state),val_fn);
} else {
return null;
}
})();
var server_validation = fork.core.resolve_server_validation(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"server","server",1499190120))));
var on_submit_server_message = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-message","server-message",-678695903)], null)));
var submitting_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submitting?","submitting?",1281507942)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"disable","disable",1717637504),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"handle-blur","handle-blur",-546639264),new cljs.core.Keyword(null,"dirty","dirty",729553281),new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"set-values","set-values",-928640446),new cljs.core.Keyword(null,"handle-change","handle-change",741134083),new cljs.core.Keyword(null,"enable","enable",-1839114332),new cljs.core.Keyword(null,"set-untouched","set-untouched",922972645),new cljs.core.Keyword(null,"handle-submit","handle-submit",1732326917),new cljs.core.Keyword(null,"successful-submissions","successful-submissions",-961073531),new cljs.core.Keyword(null,"submitting?","submitting?",1281507942),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"set-handle-blur","set-handle-blur",1284701225),new cljs.core.Keyword(null,"attempted-submissions","attempted-submissions",2035303435),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"normalize-name","normalize-name",-510567633),new cljs.core.Keyword(null,"on-submit-server-message","on-submit-server-message",-1306531376),new cljs.core.Keyword(null,"send-server-request","send-server-request",175775635),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"set-handle-change","set-handle-change",-827648040),new cljs.core.Keyword(null,"form-id","form-id",-158754567),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),new cljs.core.Keyword(null,"props","props",453281727)],[new cljs.core.Keyword(null,"disable","disable",1717637504).cljs$core$IFn$_invoke$arity$1(handlers),path,new cljs.core.Keyword(null,"handle-blur","handle-blur",-546639264).cljs$core$IFn$_invoke$arity$1(handlers),fork.core.dirty(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-values","initial-values",1392120293).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"touched-values","touched-values",-1817885644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], 0))),validation,new cljs.core.Keyword(null,"set-values","set-values",-928640446).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"handle-change","handle-change",741134083).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"enable","enable",-1839114332).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"set-untouched","set-untouched",922972645).cljs$core$IFn$_invoke$arity$1(handlers),(function (evt){
return fork.core.handle_submit(evt,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"server","server",1499190120),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120)], null))),new cljs.core.Keyword(null,"form-id","form-id",-158754567),form_id,new cljs.core.Keyword(null,"validation","validation",-2141396518),validation,new cljs.core.Keyword(null,"already-submitting?","already-submitting?",1438118407),submitting_QMARK_,new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(handlers)], null)], 0)));
}),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"successful-submissions","successful-submissions",-961073531).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})(),submitting_QMARK_,new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"set-handle-blur","set-handle-blur",1284701225).cljs$core$IFn$_invoke$arity$1(handlers),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"attempted-submissions","attempted-submissions",2035303435).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429).cljs$core$IFn$_invoke$arity$1(handlers),state,new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"normalize-name","normalize-name",-510567633).cljs$core$IFn$_invoke$arity$1(handlers),on_submit_server_message,new cljs.core.Keyword(null,"send-server-request","send-server-request",175775635).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"set-handle-change","set-handle-change",-827648040).cljs$core$IFn$_invoke$arity$1(handlers),form_id,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(handlers),server_validation,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(props__$1)])], null);
})], null));
});

//# sourceMappingURL=fork.reagent.js.map
