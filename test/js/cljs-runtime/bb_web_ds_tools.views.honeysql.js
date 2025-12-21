goog.provide('bb_web_ds_tools.views.honeysql');
/**
 * Retrieves the HoneySQL state from the database.
 * 
 *   Args:
 *  db (map): The application database.
 * 
 *   Returns:
 *  map: A map containing :input and :output.
 */
bb_web_ds_tools.views.honeysql.get_honeysql_state = (function bb_web_ds_tools$views$honeysql$get_honeysql_state(db){
var user_input = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var component_state = new cljs.core.Keyword("bb-web-ds-tools.views.honeysql","honeysql","bb-web-ds-tools.views.honeysql/honeysql",98872056).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(user_input),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(component_state)], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("honeysql","initialize","honeysql/initialize",28712902),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),"{:select [:id :username :email]\n :from [:users]\n :where [:and\n         [:= :active true]\n         [:> :created_at \"2023-01-01\"]]}"], null)),new cljs.core.Keyword("bb-web-ds-tools.views.honeysql","honeysql","bb-web-ds-tools.views.honeysql/honeysql",98872056),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"output","output",-1105869043),""], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("honeysql","update-input","honeysql/update-input",1611103297),(function (db,p__33337){
var vec__33338 = p__33337;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33338,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33338,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"input","input",556931961)], null),text);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("honeysql","convert-to-sql","honeysql/convert-to-sql",1363941562),(function (p__33344,_){
var map__33345 = p__33344;
var map__33345__$1 = cljs.core.__destructure_map(map__33345);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33345__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__33346 = bb_web_ds_tools.views.honeysql.get_honeysql_state(db);
var map__33346__$1 = cljs.core.__destructure_map(map__33346);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33346__$1,new cljs.core.Keyword(null,"input","input",556931961));
if(cljs.core.empty_QMARK_(input)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var result = bb_web_ds_tools.components.honeysql.convert_to_sql(input);
var output = (cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result))?new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(result):new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.honeysql","honeysql","bb-web-ds-tools.views.honeysql/honeysql",98872056),new cljs.core.Keyword(null,"output","output",-1105869043)], null),output)], null);
}
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("honeysql","user-input-root","honeysql/user-input-root",2072182455),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","user-input","bb-web-ds-tools.core/user-input",1937733608)], null),(function (user_input,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(user_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("honeysql","component-root","honeysql/component-root",36074719),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("bb-web-ds-tools.views.honeysql","honeysql","bb-web-ds-tools.views.honeysql/honeysql",98872056).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("honeysql","input","honeysql/input",201662062),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","user-input-root","honeysql/user-input-root",2072182455)], null),(function (root,_){
return new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("honeysql","output","honeysql/output",-656227780),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","component-root","honeysql/component-root",36074719)], null),(function (root,_){
return new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("honeysql","panel-state","honeysql/panel-state",-660162611),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","input","honeysql/input",201662062)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","output","honeysql/output",-656227780)], null),(function (p__33353,_){
var vec__33354 = p__33353;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(0),null);
var output = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"output","output",-1105869043),output], null);
})], 0));
/**
 * Renders the HoneySQL view panel.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.honeysql.panel = (function bb_web_ds_tools$views$honeysql$panel(){
var state_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","panel-state","honeysql/panel-state",-660162611)], null));
return (function (){
var map__33360 = cljs.core.deref(state_sub);
var map__33360__$1 = cljs.core.__destructure_map(map__33360);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33360__$1,new cljs.core.Keyword(null,"input","input",556931961));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33360__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.tool_view.tool_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Convert to SQL",new cljs.core.Keyword(null,"wiki-key","wiki-key",-1495409073),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),input,new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__33358_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","update-input","honeysql/update-input",1611103297),p1__33358_SHARP_], null));
})], null)], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("honeysql","convert-to-sql","honeysql/convert-to-sql",1363941562)], null));
})], null),"Convert"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xs ",bb_web_ds_tools.theme.text_secondary].join('')], null),"CLI: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-black/20 p-1 rounded"], null),"bb -x bb-web-ds-tools.cli.honeysql/convert"], null)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.portal.portal_panel,output], null)], null)], null);
});
});

//# sourceMappingURL=bb_web_ds_tools.views.honeysql.js.map
