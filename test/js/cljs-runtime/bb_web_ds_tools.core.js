goog.provide('bb_web_ds_tools.core');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.core","current-route","bb-web-ds-tools.core/current-route",-183395378),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557),(function (_,p__42139){
var vec__42140 = p__42139;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42140,(0),null);
var route_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42140,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42140,(2),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42140,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [route_name,params,query], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (p__42143){
var vec__42144 = p__42143;
var route_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42144,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42144,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42144,(2),null);
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(route_name,params,query);
}));
/**
 * Retrieves the label for a given route name from nav-items.
 * 
 *   Args:
 *  route-name (keyword): The route name.
 * 
 *   Returns:
 *  string: The label.
 */
bb_web_ds_tools.core.get_route_label = (function bb_web_ds_tools$core$get_route_label(route_name){
var temp__5823__auto__ = cljs.core.some((function (p1__42147_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(p1__42147_SHARP_),route_name)){
return p1__42147_SHARP_;
} else {
return null;
}
}),bb_web_ds_tools.components.common.nav_items);
if(cljs.core.truth_(temp__5823__auto__)){
var item = temp__5823__auto__;
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item);
} else {
if(cljs.core.truth_(route_name)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"landing-page","landing-page",1687415187))){
return "Home";
} else {
if(cljs.core.truth_((function (){var fexpr__42148 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code-tab","code-tab",-2022166816),null,new cljs.core.Keyword(null,"malli-tab","malli-tab",1001902861),null], null), null);
return (fexpr__42148.cljs$core$IFn$_invoke$arity$1 ? fexpr__42148.cljs$core$IFn$_invoke$arity$1(route_name) : fexpr__42148.call(null,route_name));
})())){
var G__42149 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(route_name),/-/)));
return (bb_web_ds_tools.core.get_route_label.cljs$core$IFn$_invoke$arity$1 ? bb_web_ds_tools.core.get_route_label.cljs$core$IFn$_invoke$arity$1(G__42149) : bb_web_ds_tools.core.get_route_label.call(null,G__42149));
} else {
return cljs.core.name(route_name);

}
}
} else {
return "";
}
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.core","load-shared-state","bb-web-ds-tools.core/load-shared-state",-1474832379),(function (db,p__42150){
var vec__42151 = p__42150;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42151,(0),null);
var encoded_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42151,(1),null);
var temp__5823__auto__ = bb_web_ds_tools.utils.share.decode_state(encoded_state);
if(cljs.core.truth_(temp__5823__auto__)){
var decoded = temp__5823__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db,decoded], 0));
} else {
return db;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.core","navigated","bb-web-ds-tools.core/navigated",386373854),(function (p__42155,p__42156){
var map__42157 = p__42155;
var map__42157__$1 = cljs.core.__destructure_map(map__42157);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42157__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42158 = p__42156;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42158,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42158,(1),null);
var route_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var path_params = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"path","path",-188191168)], null));
var query_params = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null));
var state_str = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(query_params);
var tab = new cljs.core.Keyword(null,"tab","tab",-559583621).cljs$core$IFn$_invoke$arity$1(path_params);
var dispatches = (function (){var G__42161 = cljs.core.PersistentVector.EMPTY;
var G__42161__$1 = (cljs.core.truth_(state_str)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__42161,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","load-shared-state","bb-web-ds-tools.core/load-shared-state",-1474832379),state_str], null)):G__42161);
var G__42161__$2 = (cljs.core.truth_((function (){var and__5023__auto__ = tab;
if(cljs.core.truth_(and__5023__auto__)){
var fexpr__42162 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"malli-tab","malli-tab",1001902861),null,new cljs.core.Keyword(null,"malli","malli",814072082),null], null), null);
return (fexpr__42162.cljs$core$IFn$_invoke$arity$1 ? fexpr__42162.cljs$core$IFn$_invoke$arity$1(route_name) : fexpr__42162.call(null,route_name));
} else {
return and__5023__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__42161__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-active-tab","malli/set-active-tab",227854602),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tab)], null)):G__42161__$1);
var G__42161__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(tab);
if(and__5023__auto__){
var fexpr__42163 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"malli-tab","malli-tab",1001902861),null,new cljs.core.Keyword(null,"malli","malli",814072082),null], null), null);
return (fexpr__42163.cljs$core$IFn$_invoke$arity$1 ? fexpr__42163.cljs$core$IFn$_invoke$arity$1(route_name) : fexpr__42163.call(null,route_name));
} else {
return and__5023__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__42161__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","set-active-tab","malli/set-active-tab",227854602),new cljs.core.Keyword(null,"inference","inference",1425333267)], null)):G__42161__$2);
var G__42161__$4 = (cljs.core.truth_((function (){var and__5023__auto__ = tab;
if(cljs.core.truth_(and__5023__auto__)){
var fexpr__42164 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code-tab","code-tab",-2022166816),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null);
return (fexpr__42164.cljs$core$IFn$_invoke$arity$1 ? fexpr__42164.cljs$core$IFn$_invoke$arity$1(route_name) : fexpr__42164.call(null,route_name));
} else {
return and__5023__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__42161__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.code","set-active-tab","bb-web-ds-tools.views.code/set-active-tab",-1083304053),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tab)], null)):G__42161__$3);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(tab);
if(and__5023__auto__){
var fexpr__42165 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code-tab","code-tab",-2022166816),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null);
return (fexpr__42165.cljs$core$IFn$_invoke$arity$1 ? fexpr__42165.cljs$core$IFn$_invoke$arity$1(route_name) : fexpr__42165.call(null,route_name));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__42161__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.code","set-active-tab","bb-web-ds-tools.views.code/set-active-tab",-1083304053),new cljs.core.Keyword(null,"clojure-repl","clojure-repl",-863277991)], null));
} else {
return G__42161__$4;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),match),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),dispatches], null);
}));
bb_web_ds_tools.core.routes = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"landing-page","landing-page",1687415187)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["malli",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"malli","malli",814072082)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:tab",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"malli-tab","malli-tab",1001902861),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab","tab",-559583621),cljs.core.string_QMARK_], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["honeysql",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vega-lite",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gemma",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"gemma","gemma",2017704848)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["code",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"code","code",1586293142)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:tab",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"code-tab","code-tab",-2022166816),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab","tab",-559583621),cljs.core.string_QMARK_], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["datasets",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["changelog",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"changelog","changelog",-435725878)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["settings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app-db",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null)], null)], null);
bb_web_ds_tools.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.core.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
/**
 * Callback function triggered when the router navigates to a new match.
 * 
 *   Args:
 *  match (map): The Reitit match object containing route data.
 *  _ (any): Unused history object.
 * 
 *   Returns:
 *  nil: Dispatches a re-frame event.
 */
bb_web_ds_tools.core.on_navigate = (function bb_web_ds_tools$core$on_navigate(match,_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigated","bb-web-ds-tools.core/navigated",386373854),match], null));
});
/**
 * Initializes the Reitit router and starts the HTML5 history listener.
 * 
 *   Returns:
 *  nil: Starts the router side-effect.
 */
bb_web_ds_tools.core.init_routes_BANG_ = (function bb_web_ds_tools$core$init_routes_BANG_(){
return reitit.frontend.easy.start_BANG_(bb_web_ds_tools.core.router,bb_web_ds_tools.core.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.core","initialize-db","bb-web-ds-tools.core/initialize-db",-1812964254),(function (_,___$1){
var repl_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var mac_os_QMARK_ = cljs.core.boolean$(cljs.core.re_find(/(Mac|iPhone|iPod|iPad)/,navigator.platform));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"platform","platform",-1086422114),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mac-os?","mac-os?",-1478507137),mac_os_QMARK_], null),new cljs.core.Keyword(null,"repl","repl",-35398667),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"portal","portal",2002989957),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"open-tabs","open-tabs",-1348278997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),"initial code"], null)], null),new cljs.core.Keyword(null,"repl","repl",-35398667),cljs.core.PersistentArrayMap.createAsIfByAssoc([repl_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),repl_id,new cljs.core.Keyword(null,"code","code",1586293142),"",new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.PersistentVector.EMPTY], null)])], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.core","user-input","bb-web-ds-tools.core/user-input",1937733608),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"user-input","user-input",-504242422).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.core","editor","bb-web-ds-tools.core/editor",791716804),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","user-input","bb-web-ds-tools.core/user-input",1937733608)], null),(function (user_input){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(user_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.core","code","bb-web-ds-tools.core/code",-403485604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","editor","bb-web-ds-tools.core/editor",791716804)], null),(function (editor){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(editor);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.core","code-changed","bb-web-ds-tools.core/code-changed",-2041081013),(function (db,p__42168){
var vec__42169 = p__42168;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42169,(0),null);
var new_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42169,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"code","code",1586293142)], null),new_code);
}));
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.core !== 'undefined') && (typeof bb_web_ds_tools.core.view !== 'undefined')){
} else {
/**
 * Multimethod to render the view corresponding to the current route.
 * 
 *   Args:
 *  match (map): The Reitit match object.
 * 
 *   Returns:
 *  vector: A hiccup vector representing the view component.
 */
bb_web_ds_tools.core.view = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__42172 = cljs.core.get_global_hierarchy;
return (fexpr__42172.cljs$core$IFn$_invoke$arity$0 ? fexpr__42172.cljs$core$IFn$_invoke$arity$0() : fexpr__42172.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.core","view"),(function (match){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"404! Sorry"], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"landing-page","landing-page",1687415187),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.landing.landing_page], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"malli","malli",814072082),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"malli-tab","malli-tab",1001902861),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.malli.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.honeysql.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.core.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"gemma","gemma",2017704848),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.gemma.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"code","code",1586293142),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.code.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"code-tab","code-tab",-2022166816),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.code.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"changelog","changelog",-435725878),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.changelog.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"settings","settings",1556144875),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.settings.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.app_db.panel], null);
}));
/**
 * Renders the main application panel containing the tab bar and the current view.
 * 
 *   Returns:
 *  vector: A hiccup vector representing the main panel.
 */
bb_web_ds_tools.core.main_panel = (function bb_web_ds_tools$core$main_panel(){
var current_route = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","current-route","bb-web-ds-tools.core/current-route",-183395378)], null)));
var active_tab_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var label = bb_web_ds_tools.core.get_route_label(active_tab_id);
var landing_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab_id,new cljs.core.Keyword(null,"landing-page","landing-page",1687415187));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-col h-screen w-full overflow-hidden ",bb_web_ds_tools.theme.bg_page," ",bb_web_ds_tools.theme.text_primary].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.navigation.top_bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-label","active-label",1965964916),label,new cljs.core.Keyword(null,"active-route","active-route",-1914333809),active_tab_id], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.main,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow relative h-full ",((landing_page_QMARK_)?"overflow-y-auto":"overflow-hidden")].join('')], null),(cljs.core.truth_(current_route)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.core.view,current_route], null):null)], null)], null)], null);
});
/**
 * The root component of the application.
 * 
 *   Returns:
 *  vector: A hiccup vector representing the root application component.
 */
bb_web_ds_tools.core.app = (function bb_web_ds_tools$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.page_container,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.core.main_panel], null)], null);
});
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.core !== 'undefined') && (typeof bb_web_ds_tools.core.root !== 'undefined')){
} else {
bb_web_ds_tools.core.root = (function (){var temp__5825__auto__ = document.getElementById("app");
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
return reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(el);
} else {
return null;
}
})();
}
/**
 * The entry point of the application. Initializes the database, router, and mounts the React root.
 * 
 *   Returns:
 *  nil: Performs side-effects to start the app.
 */
bb_web_ds_tools.core.init = (function bb_web_ds_tools$core$init(){
malli.registry.set_default_registry_BANG_(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.default_schemas(),malli.experimental.time.schemas()], 0)));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","initialize-db","bb-web-ds-tools.core/initialize-db",-1812964254)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.workspaces.persistence","init-persistence","bb-web-ds-tools.workspaces.persistence/init-persistence",-1263695702)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.theme","set-theme","bb-web-ds-tools.events.theme/set-theme",607625894),new cljs.core.Keyword(null,"zenburn","zenburn",-688714384)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","initialize","bb-web-ds-tools.events.settings/initialize",-887932124)], null));

bb_web_ds_tools.core.init_routes_BANG_();

if(cljs.core.truth_(bb_web_ds_tools.core.root)){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.core.app], null));
} else {
return null;
}
});
goog.exportSymbol('bb_web_ds_tools.core.init', bb_web_ds_tools.core.init);
/**
 * Reload hook for shadow-cljs. Re-mounts the application after code changes.
 * 
 *   Returns:
 *  nil: Re-renders the app.
 */
bb_web_ds_tools.core.reload_BANG_ = (function bb_web_ds_tools$core$reload_BANG_(){
console.log("reload");

if(cljs.core.truth_(bb_web_ds_tools.core.root)){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.core.app], null));
} else {
return null;
}
});

//# sourceMappingURL=bb_web_ds_tools.core.js.map
