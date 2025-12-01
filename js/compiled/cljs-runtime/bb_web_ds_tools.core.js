goog.provide('bb_web_ds_tools.core');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.core","current-route","bb-web-ds-tools.core/current-route",-183395378),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557),(function (_,p__54972){
var vec__54973 = p__54972;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54973,(0),null);
var route_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54973,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54973,(2),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54973,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [route_name,params,query], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (p__54976){
var vec__54977 = p__54976;
var route_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54977,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54977,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54977,(2),null);
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(route_name,params,query);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.core","navigated","bb-web-ds-tools.core/navigated",386373854),(function (db,p__54980){
var vec__54981 = p__54980;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54981,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54981,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),match);
}));
bb_web_ds_tools.core.routes = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"landing-page","landing-page",1687415187)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["workspaces",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"workspaces","workspaces",168825563)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["malli",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"malli","malli",814072082)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["honeysql",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vega-lite",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gemma",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"gemma","gemma",2017704848)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pyodide",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["editor",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"editor","editor",-989377770)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["repl",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"repl","repl",-35398667)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r-repl",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["datasets",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["changelog",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"changelog","changelog",-435725878)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["settings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app-db",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null)], null)], null);
bb_web_ds_tools.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.core.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
bb_web_ds_tools.core.on_navigate = (function bb_web_ds_tools$core$on_navigate(match,_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigated","bb-web-ds-tools.core/navigated",386373854),match], null));
});
bb_web_ds_tools.core.init_routes_BANG_ = (function bb_web_ds_tools$core$init_routes_BANG_(){
return reitit.frontend.easy.start_BANG_(bb_web_ds_tools.core.router,bb_web_ds_tools.core.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.core","initialize-db","bb-web-ds-tools.core/initialize-db",-1812964254),(function (_,___$1){
var repl_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var mac_os_QMARK_ = cljs.core.boolean$(cljs.core.re_find(/(Mac|iPhone|iPod|iPad)/,navigator.platform));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"platform","platform",-1086422114),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mac-os?","mac-os?",-1478507137),mac_os_QMARK_], null),new cljs.core.Keyword(null,"repl","repl",-35398667),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"portal","portal",2002989957),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),"initial code"], null)], null),new cljs.core.Keyword(null,"repl","repl",-35398667),cljs.core.PersistentArrayMap.createAsIfByAssoc([repl_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),repl_id,new cljs.core.Keyword(null,"code","code",1586293142),"",new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.PersistentVector.EMPTY], null)])], null)], null);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.core","code-changed","bb-web-ds-tools.core/code-changed",-2041081013),(function (db,p__54984){
var vec__54985 = p__54984;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54985,(0),null);
var new_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54985,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"code","code",1586293142)], null),new_code);
}));
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.core !== 'undefined') && (typeof bb_web_ds_tools.core.view !== 'undefined')){
} else {
bb_web_ds_tools.core.view = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54988 = cljs.core.get_global_hierarchy;
return (fexpr__54988.cljs$core$IFn$_invoke$arity$0 ? fexpr__54988.cljs$core$IFn$_invoke$arity$0() : fexpr__54988.call(null));
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
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.pyodide.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"editor","editor",-989377770),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.editor.panel], null);
}));
bb_web_ds_tools.core.view.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.repl.panel], null);
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
bb_web_ds_tools.core.top_tab_bar = (function bb_web_ds_tools$core$top_tab_bar(){
var current_route = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","current-route","bb-web-ds-tools.core/current-route",-183395378)], null)));
var current_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route));
var tab_style = (function (route_name){
return ["px-4 py-2 text-xs font-medium rounded-t-lg ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_name,route_name))?[bb_web_ds_tools.theme.bg_page," ",bb_web_ds_tools.theme.text_accent," border-t border-l border-r ",bb_web_ds_tools.theme.border_main].join(''):[bb_web_ds_tools.theme.text_primary," hover:",bb_web_ds_tools.theme.text_accent," border-transparent border-t border-l border-r"].join(''))].join('');
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-10 ",bb_web_ds_tools.theme.bg_toolbar," border-b ",bb_web_ds_tools.theme.border_main," flex items-end"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"landing-page","landing-page",1687415187)),new cljs.core.Keyword(null,"class","class",-2030961996),[tab_style(new cljs.core.Keyword(null,"landing-page","landing-page",1687415187))," ml-2"].join('')], null),"Home"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$core$top_tab_bar_$_iter__54989(s__54990){
return (new cljs.core.LazySeq(null,(function (){
var s__54990__$1 = s__54990;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__54990__$1);
if(temp__5825__auto__){
var s__54990__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54990__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__54990__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__54992 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__54991 = (0);
while(true){
if((i__54991 < size__5502__auto__)){
var item = cljs.core._nth(c__5501__auto__,i__54991);
cljs.core.chunk_append(b__54992,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(item)),new cljs.core.Keyword(null,"class","class",-2030961996),tab_style(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(item))], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__54993 = (i__54991 + (1));
i__54991 = G__54993;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54992),bb_web_ds_tools$core$top_tab_bar_$_iter__54989(cljs.core.chunk_rest(s__54990__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54992),null);
}
} else {
var item = cljs.core.first(s__54990__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(item)),new cljs.core.Keyword(null,"class","class",-2030961996),tab_style(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(item))], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(item)], null)),bb_web_ds_tools$core$top_tab_bar_$_iter__54989(cljs.core.rest(s__54990__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(bb_web_ds_tools.components.common.nav_items);
})()], null);
});
bb_web_ds_tools.core.main_panel = (function bb_web_ds_tools$core$main_panel(){
var current_route = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","current-route","bb-web-ds-tools.core/current-route",-183395378)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.main,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.core.top_tab_bar], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow overflow-auto relative"], null),(cljs.core.truth_(current_route)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.core.view,current_route], null):null)], null)], null);
});
bb_web_ds_tools.core.app = (function bb_web_ds_tools$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.page_container,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.core.main_panel], null)], null);
});
bb_web_ds_tools.core.init = (function bb_web_ds_tools$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","initialize-db","bb-web-ds-tools.core/initialize-db",-1812964254)], null));

bb_web_ds_tools.core.init_routes_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('bb_web_ds_tools.core.init', bb_web_ds_tools.core.init);
bb_web_ds_tools.core.reload_BANG_ = (function bb_web_ds_tools$core$reload_BANG_(){
console.log("reload");

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.core.app], null),document.getElementById("app"));
});

//# sourceMappingURL=bb_web_ds_tools.core.js.map
