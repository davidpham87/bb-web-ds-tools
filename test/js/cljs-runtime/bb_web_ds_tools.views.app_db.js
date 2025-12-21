goog.provide('bb_web_ds_tools.views.app_db');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","whole-db","bb-web-ds-tools.views.app-db/whole-db",-370638082),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return db;
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","user-input-root","bb-web-ds-tools.views.app-db/user-input-root",-243521323),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","user-input","bb-web-ds-tools.core/user-input",1937733608)], null),(function (user_input,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_input,new cljs.core.Keyword(null,"app-db","app-db",865606302));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","watched-paths","bb-web-ds-tools.views.app-db/watched-paths",-1650260145),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","user-input-root","bb-web-ds-tools.views.app-db/user-input-root",-243521323)], null),(function (root,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(root,new cljs.core.Keyword(null,"watched-paths","watched-paths",-1266999052),cljs.core.PersistentVector.EMPTY);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","active-path","bb-web-ds-tools.views.app-db/active-path",866671094),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"active-path","active-path",-899675889)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","path-value","bb-web-ds-tools.views.app-db/path-value",1939920672),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__22619){
var vec__22620 = p__22619;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22620,(0),null);
var path_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22620,(1),null);
try{var path = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(path_str);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,path,new cljs.core.Keyword("bb-web-ds-tools.views.app-db","not-found","bb-web-ds-tools.views.app-db/not-found",698968281));
}catch (e22627){var ___$1 = e22627;
return new cljs.core.Keyword("bb-web-ds-tools.views.app-db","error","bb-web-ds-tools.views.app-db/error",-336701303);
}})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","initialize","bb-web-ds-tools.views.app-db/initialize",-1891418852),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),(function (p1__22628_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"watched-paths","watched-paths",-1266999052),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"active-path","active-path",-899675889),null], null),p1__22628_SHARP_], 0));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","set-active-path","bb-web-ds-tools.views.app-db/set-active-path",153735738),(function (db,p__22630){
var vec__22631 = p__22630;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22631,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22631,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"active-path","active-path",-899675889)], null),path);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","add-watch-path","bb-web-ds-tools.views.app-db/add-watch-path",1822864858),(function (db,p__22634){
var vec__22635 = p__22634;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22635,(0),null);
var path_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22635,(1),null);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([path_str]),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"watched-paths","watched-paths",-1266999052)], null),cljs.core.PersistentVector.EMPTY)))){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"active-path","active-path",-899675889)], null),path_str);
} else {
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"watched-paths","watched-paths",-1266999052)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),path_str),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"active-path","active-path",-899675889)], null),path_str);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","remove-watch-path","bb-web-ds-tools.views.app-db/remove-watch-path",178630062),(function (db,p__22643){
var vec__22644 = p__22643;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22644,(0),null);
var path_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22644,(1),null);
var watched_paths = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"watched-paths","watched-paths",-1266999052)], null),cljs.core.PersistentVector.EMPTY);
var new_paths = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22642_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__22642_SHARP_,path_str);
}),watched_paths));
var active_path = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"active-path","active-path",-899675889)], null));
var G__22647 = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"watched-paths","watched-paths",-1266999052)], null),new_paths);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_path,path_str)){
return cljs.core.assoc_in(G__22647,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"active-path","active-path",-899675889)], null),(function (){var or__5025__auto__ = cljs.core.first(new_paths);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"new","new",-2085437848);
}
})());
} else {
return G__22647;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","update-watch-path","bb-web-ds-tools.views.app-db/update-watch-path",-1498068284),(function (db,p__22652){
var vec__22653 = p__22652;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22653,(0),null);
var old_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22653,(1),null);
var new_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22653,(2),null);
var paths = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"watched-paths","watched-paths",-1266999052)], null),cljs.core.PersistentVector.EMPTY);
var idx = paths.indexOf(old_path);
var active_path = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"active-path","active-path",-899675889)], null));
if((idx < (0))){
return db;
} else {
var G__22656 = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"watched-paths","watched-paths",-1266999052)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(paths,idx,new_path));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_path,old_path)){
return cljs.core.assoc_in(G__22656,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"active-path","active-path",-899675889)], null),new_path);
} else {
return G__22656;
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","open-in-portal","bb-web-ds-tools.views.app-db/open-in-portal",-1055334551),(function (p__22657,_){
var map__22658 = p__22657;
var map__22658__$1 = cljs.core.__destructure_map(map__22658);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22658__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),db], null)], null);
}));
/**
 * Renders a single item in the watched paths list.
 * 
 *   Args:
 *  path (any): The path vector or string.
 *  active? (boolean): Whether this path is currently active.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.app_db.path_list_item = (function bb_web_ds_tools$views$app_db$path_list_item(path,active_QMARK_){
var editing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var temp_path = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(path);
return (function (path__$1,active_QMARK___$1){
if(cljs.core.truth_(cljs.core.deref(editing_QMARK_))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-2 rounded ",bb_web_ds_tools.theme.bg_input," border ",bb_web_ds_tools.theme.border_focus," flex items-center space-x-2"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow h-6 text-sm py-0 font-mono",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(temp_path),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22659_SHARP_){
return cljs.core.reset_BANG_(temp_path,p1__22659_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__22660_SHARP_){
var G__22661 = p1__22660_SHARP_.key;
switch (G__22661) {
case "Enter":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","update-watch-path","bb-web-ds-tools.views.app-db/update-watch-path",-1498068284),path__$1,cljs.core.deref(temp_path)], null));

return cljs.core.reset_BANG_(editing_QMARK_,false);

break;
case "Escape":
cljs.core.reset_BANG_(temp_path,path__$1);

return cljs.core.reset_BANG_(editing_QMARK_,false);

break;
default:
return null;

}
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","update-watch-path","bb-web-ds-tools.views.app-db/update-watch-path",-1498068284),path__$1,cljs.core.deref(temp_path)], null));

return cljs.core.reset_BANG_(editing_QMARK_,false);
})], null),"Save"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["group flex items-center justify-between p-3 rounded cursor-pointer transition-colors text-sm font-medium ",(cljs.core.truth_(active_QMARK___$1)?[bb_web_ds_tools.theme.bg_card," ",bb_web_ds_tools.theme.text_accent," shadow-sm"].join(''):[bb_web_ds_tools.theme.text_primary," ",bb_web_ds_tools.theme.bg_item_hover].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","set-active-path","bb-web-ds-tools.views.app-db/set-active-path",153735738),path__$1], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"truncate flex-grow font-mono"], null),path__$1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity ",(cljs.core.truth_(active_QMARK___$1)?"opacity-100":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-1 rounded hover:",bb_web_ds_tools.theme.bg_button_hover," text-xs"].join(''),new cljs.core.Keyword(null,"title","title",636505583),"Edit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

cljs.core.reset_BANG_(temp_path,path__$1);

return cljs.core.reset_BANG_(editing_QMARK_,true);
})], null),"\u270E"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-1 rounded hover:",bb_web_ds_tools.theme.bg_button_danger_hover," hover:text-white text-xs"].join(''),new cljs.core.Keyword(null,"title","title",636505583),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

if(cljs.core.truth_(confirm(["Remove watch '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),"'?"].join('')))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","remove-watch-path","bb-web-ds-tools.views.app-db/remove-watch-path",178630062),path__$1], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.dustbin_icon], null)], null)], null)], null);
}
});
});
/**
 * Renders the sidebar list of watched paths.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.app_db.path_list = (function bb_web_ds_tools$views$app_db$path_list(){
var watched_paths = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","watched-paths","bb-web-ds-tools.views.app-db/watched-paths",-1650260145)], null)));
var active_path = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","active-path","bb-web-ds-tools.views.app-db/active-path",866671094)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full ",bb_web_ds_tools.theme.bg_sidebar," flex flex-col"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-4 border-b ",bb_web_ds_tools.theme.border_main].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.section_header,"App DB",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.help_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),bb_web_ds_tools.components.navigation.get_wiki_url(new cljs.core.Keyword(null,"app-db","app-db",865606302)),new cljs.core.Keyword(null,"title","title",636505583),"Help: App DB",new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1 !w-5 !h-5 opacity-50 hover:opacity-100"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),["w-full ",bb_web_ds_tools.theme.bg_button," ",bb_web_ds_tools.theme.bg_button_hover," justify-center"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","set-active-path","bb-web-ds-tools.views.app-db/set-active-path",153735738),new cljs.core.Keyword(null,"new","new",-2085437848)], null));
})], null),"+ New Watch"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow overflow-y-auto p-2 space-y-1"], null),((cljs.core.seq(watched_paths))?(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$app_db$path_list_$_iter__22667(s__22668){
return (new cljs.core.LazySeq(null,(function (){
var s__22668__$1 = s__22668;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22668__$1);
if(temp__5825__auto__){
var s__22668__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22668__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__22668__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__22670 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__22669 = (0);
while(true){
if((i__22669 < size__5502__auto__)){
var path = cljs.core._nth(c__5501__auto__,i__22669);
cljs.core.chunk_append(b__22670,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.app_db.path_list_item,path,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,active_path)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),path], null)));

var G__22692 = (i__22669 + (1));
i__22669 = G__22692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22670),bb_web_ds_tools$views$app_db$path_list_$_iter__22667(cljs.core.chunk_rest(s__22668__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22670),null);
}
} else {
var path = cljs.core.first(s__22668__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.app_db.path_list_item,path,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,active_path)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),path], null)),bb_web_ds_tools$views$app_db$path_list_$_iter__22667(cljs.core.rest(s__22668__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(watched_paths);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm ",bb_web_ds_tools.theme.text_muted," italic p-2"].join('')], null),"No watched paths"], null))], null)], null);
});
/**
 * Renders the form to add a new path to watch.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.app_db.add_path_view = (function bb_web_ds_tools$views$app_db$add_path_view(){
var with_let22679 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let22679","with-let22679",-701097169));
var temp__5829__auto___22693 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5829__auto___22693 == null)){
} else {
var c__20886__auto___22694 = temp__5829__auto___22693;
if((with_let22679.generation === c__20886__auto___22694.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let22679.generation = c__20886__auto___22694.ratomGeneration);
}

var init22680 = (with_let22679.length === (0));
var new_path = ((((init22680) || (cljs.core.not(with_let22679.hasOwnProperty((0))))))?(with_let22679[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("")):(with_let22679[(0)]));
var res22681 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-8 flex flex-col items-center justify-center space-y-4 bg-transparent shadow-none h-full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-bold"], null),"Watch New Path"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full max-w-lg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(new_path),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22678_SHARP_){
return cljs.core.reset_BANG_(new_path,p1__22678_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter path e.g. [:user-input :datasets]",new cljs.core.Keyword(null,"class","class",-2030961996),"font-mono mb-4"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","add-watch-path","bb-web-ds-tools.views.app-db/add-watch-path",1822864858),cljs.core.deref(new_path)], null));

return cljs.core.reset_BANG_(new_path,"");
})], null),"Add Watch"], null)], null)], null);
return res22681;
});
/**
 * Renders the App DB inspector panel.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.app_db.panel = (function bb_web_ds_tools$views$app_db$panel(){
var active_path = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","active-path","bb-web-ds-tools.views.app-db/active-path",866671094)], null)));
var active_value = (cljs.core.truth_((function (){var and__5023__auto__ = active_path;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(active_path,new cljs.core.Keyword(null,"new","new",-2085437848));
} else {
return and__5023__auto__;
}
})())?cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","path-value","bb-web-ds-tools.views.app-db/path-value",1939920672),active_path], null))):null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.split_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"1-3","1-3",-870297994)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.app_db.path_list], null),(((((active_path == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_path,new cljs.core.Keyword(null,"new","new",-2085437848)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.app_db.add_path_view], null):cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.portal.portal_panel,active_value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),active_path], null)))], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.app_db.js.map
