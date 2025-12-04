goog.provide('bb_web_ds_tools.core');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.core","current-route","bb-web-ds-tools.core/current-route",-183395378),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557),(function (_,p__55963){
var vec__55964 = p__55963;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55964,(0),null);
var route_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55964,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55964,(2),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55964,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [route_name,params,query], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (p__55968){
var vec__55969 = p__55968;
var route_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55969,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55969,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55969,(2),null);
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
var temp__5823__auto__ = cljs.core.some((function (p1__55972_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(p1__55972_SHARP_),route_name)){
return p1__55972_SHARP_;
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
return cljs.core.name(route_name);
}
} else {
return "";
}
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.core","navigated","bb-web-ds-tools.core/navigated",386373854),(function (db,p__56048){
var vec__56050 = p__56048;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56050,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56050,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),match);
}));
bb_web_ds_tools.core.routes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"landing-page","landing-page",1687415187)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["workspaces",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"workspaces","workspaces",168825563)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["malli",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"malli","malli",814072082)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["honeysql",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vega-lite",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gemma",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"gemma","gemma",2017704848)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["code",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"code","code",1586293142)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["datasets",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["changelog",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"changelog","changelog",-435725878)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["settings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app-db",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null)], null)], null);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.core","code-changed","bb-web-ds-tools.core/code-changed",-2041081013),(function (db,p__56075){
var vec__56077 = p__56075;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56077,(0),null);
var new_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56077,(1),null);
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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__56083 = cljs.core.get_global_hierarchy;
return (fexpr__56083.cljs$core$IFn$_invoke$arity$0 ? fexpr__56083.cljs$core$IFn$_invoke$arity$0() : fexpr__56083.call(null));
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
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.honeysql.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"gemma","gemma",2017704848),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.gemma.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"code","code",1586293142),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.code.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"changelog","changelog",-435725878),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.changelog.changelog_page], null);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-col h-screen w-full overflow-hidden ",bb_web_ds_tools.theme.bg_page," ",bb_web_ds_tools.theme.text_primary].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.navigation.top_bar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-label","active-label",1965964916),label], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.main,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow overflow-hidden relative h-full"], null),(cljs.core.truth_(current_route)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.core.view,current_route], null):null)], null)], null)], null);
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
/**
 * The entry point of the application. Initializes the database, router, and mounts the React root.
 * 
 *   Returns:
 *  nil: Performs side-effects to start the app.
 */
bb_web_ds_tools.core.init = (function bb_web_ds_tools$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","initialize-db","bb-web-ds-tools.core/initialize-db",-1812964254)], null));

bb_web_ds_tools.core.init_routes_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.core.app], null),document.getElementById("app"));
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

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.core.app], null),document.getElementById("app"));
});

//# sourceMappingURL=bb_web_ds_tools.core.js.map
