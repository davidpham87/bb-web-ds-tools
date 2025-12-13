goog.provide('bb_web_ds_tools.workspaces.core');
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.workspaces !== 'undefined') && (typeof bb_web_ds_tools.workspaces.core !== 'undefined') && (typeof bb_web_ds_tools.workspaces.core.conn !== 'undefined')){
} else {
bb_web_ds_tools.workspaces.core.conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.workspaces.schema.schema);
}
/**
 * Retrieves all workspaces from the DB.
 * 
 *   Args:
 *  db (map): The DataScript DB.
 * 
 *   Returns:
 *  seq: List of [eid name] tuples.
 */
bb_web_ds_tools.workspaces.core.get_workspaces = (function bb_web_ds_tools$workspaces$core$get_workspaces(db){
var G__48892 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("workspace","name","workspace/name",-1408521004),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null)], null);
var G__48893 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__48892,G__48893) : datascript.core.q.call(null,G__48892,G__48893));
});
/**
 * Retrieves all inputs for a given workspace.
 * 
 *   Args:
 *  db (map): The DataScript DB.
 *  workspace-eid (int): The workspace entity ID.
 * 
 *   Returns:
 *  seq: List of input tuples.
 */
bb_web_ds_tools.workspaces.core.get_inputs = (function bb_web_ds_tools$workspaces$core$get_inputs(db,workspace_eid){
var G__48895 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?type","?type",-1287409101,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Symbol(null,"?content","?content",-956653715,null),new cljs.core.Symbol(null,"?updated","?updated",-715859215,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?w","?w",975714438,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","workspace","input/workspace",-660968483),new cljs.core.Symbol(null,"?w","?w",975714438,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Symbol(null,"?type","?type",-1287409101,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","content","input/content",-159506254),new cljs.core.Symbol(null,"?content","?content",-956653715,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","updated-at","input/updated-at",-1491743930),new cljs.core.Symbol(null,"?updated","?updated",-715859215,null)], null)], null);
var G__48896 = db;
var G__48897 = workspace_eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__48895,G__48896,G__48897) : datascript.core.q.call(null,G__48895,G__48896,G__48897));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","init","bb-web-ds-tools.workspaces.core/init",-136734310),(function (p__48899,_){
var map__48900 = p__48899;
var map__48900__$1 = cljs.core.__destructure_map(map__48900);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48900__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","active-workspace-id","bb-web-ds-tools.workspaces.core/active-workspace-id",-2027594487),null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","create-workspace","bb-web-ds-tools.workspaces.core/create-workspace",-1335462972),(function (p__48901,p__48902){
var map__48903 = p__48901;
var map__48903__$1 = cljs.core.__destructure_map(map__48903);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48903__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__48904 = p__48902;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48904,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48904,(1),null);
var id = cljs.core.random_uuid();
var tx_data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("workspace","id","workspace/id",1734778271),id,new cljs.core.Keyword("workspace","name","workspace/name",-1408521004),name,new cljs.core.Keyword("workspace","created-at","workspace/created-at",-1131011801),(new Date()),new cljs.core.Keyword("workspace","updated-at","workspace/updated-at",1662688881),(new Date())], null)], null);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.workspaces.core.conn,tx_data);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","switch-workspace","bb-web-ds-tools.workspaces.core/switch-workspace",1604304372),id], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","switch-workspace","bb-web-ds-tools.workspaces.core/switch-workspace",1604304372),(function (db,p__48908){
var vec__48909 = p__48908;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48909,(0),null);
var workspace_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48909,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","active-workspace-id","bb-web-ds-tools.workspaces.core/active-workspace-id",-2027594487),workspace_id);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","save-input","bb-web-ds-tools.workspaces.core/save-input",-2072202544),(function (p__48913,p__48914){
var map__48915 = p__48913;
var map__48915__$1 = cljs.core.__destructure_map(map__48915);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48915__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__48916 = p__48914;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48916,(0),null);
var map__48919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48916,(1),null);
var map__48919__$1 = cljs.core.__destructure_map(map__48919);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword(null,"content","content",15833224));
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
var workspace_id = new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","active-workspace-id","bb-web-ds-tools.workspaces.core/active-workspace-id",-2027594487).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(workspace_id)){
var ws_eid = (function (){var G__48920 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("workspace","id","workspace/id",1734778271),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null);
var G__48921 = cljs.core.deref(bb_web_ds_tools.workspaces.core.conn);
var G__48922 = workspace_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__48920,G__48921,G__48922) : datascript.core.q.call(null,G__48920,G__48921,G__48922));
})();
var existing_input = (function (){var G__48923 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?ws","?ws",-692097152,null),new cljs.core.Symbol(null,"?type","?type",-1287409101,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","workspace","input/workspace",-660968483),new cljs.core.Symbol(null,"?ws","?ws",-692097152,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Symbol(null,"?type","?type",-1287409101,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null)], null);
var G__48924 = cljs.core.deref(bb_web_ds_tools.workspaces.core.conn);
var G__48925 = ws_eid;
var G__48926 = type;
var G__48927 = name;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__48923,G__48924,G__48925,G__48926,G__48927) : datascript.core.q.call(null,G__48923,G__48924,G__48925,G__48926,G__48927));
})();
var tx_data = (cljs.core.truth_(existing_input)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),existing_input,new cljs.core.Keyword("input","content","input/content",-159506254),content,new cljs.core.Keyword("input","metadata","input/metadata",1699910183),metadata,new cljs.core.Keyword("input","updated-at","input/updated-at",-1491743930),(new Date())], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("input","id","input/id",-1287388534),cljs.core.random_uuid(),new cljs.core.Keyword("input","workspace","input/workspace",-660968483),ws_eid,new cljs.core.Keyword("input","type","input/type",1543186790),type,new cljs.core.Keyword("input","name","input/name",1609508871),name,new cljs.core.Keyword("input","content","input/content",-159506254),content,new cljs.core.Keyword("input","metadata","input/metadata",1699910183),metadata,new cljs.core.Keyword("input","updated-at","input/updated-at",-1491743930),(new Date())], null)], null));
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.workspaces.core.conn,tx_data);

return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.workspaces !== 'undefined') && (typeof bb_web_ds_tools.workspaces.core !== 'undefined') && (typeof bb_web_ds_tools.workspaces.core.ds_version !== 'undefined')){
} else {
bb_web_ds_tools.workspaces.core.ds_version = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(bb_web_ds_tools.workspaces.core.conn,new cljs.core.Keyword(null,"listener","listener",882147248),(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.workspaces.core.ds_version,cljs.core.inc);
}));
re_frame.core.reg_sub_raw(new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","ds-version","bb-web-ds-tools.workspaces.core/ds-version",-571336530),(function (_,___$1){
return reagent.ratom.make_reaction((function (){
return cljs.core.deref(bb_web_ds_tools.workspaces.core.ds_version);
}));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","workspaces","bb-web-ds-tools.workspaces.core/workspaces",1907123679),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","ds-version","bb-web-ds-tools.workspaces.core/ds-version",-571336530)], null),(function (_,___$1){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("workspace","name","workspace/name",-1408521004),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__48928 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("workspace","id","workspace/id",1734778271)], null)], null);
var G__48929 = cljs.core.deref(bb_web_ds_tools.workspaces.core.conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__48928,G__48929) : datascript.core.q.call(null,G__48928,G__48929));
})()));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","active-workspace-id","bb-web-ds-tools.workspaces.core/active-workspace-id",-2027594487),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","active-workspace-id","bb-web-ds-tools.workspaces.core/active-workspace-id",-2027594487).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","active-workspace","bb-web-ds-tools.workspaces.core/active-workspace",-84225939),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","active-workspace-id","bb-web-ds-tools.workspaces.core/active-workspace-id",-2027594487)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","workspaces","bb-web-ds-tools.workspaces.core/workspaces",1907123679)], null),(function (p__48941,_){
var vec__48942 = p__48941;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48942,(0),null);
var workspaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48942,(1),null);
return cljs.core.some((function (p1__48940_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("workspace","id","workspace/id",1734778271).cljs$core$IFn$_invoke$arity$1(p1__48940_SHARP_),id)){
return p1__48940_SHARP_;
} else {
return null;
}
}),workspaces);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","current-inputs","bb-web-ds-tools.workspaces.core/current-inputs",1621571946),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","active-workspace","bb-web-ds-tools.workspaces.core/active-workspace",-84225939)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","ds-version","bb-web-ds-tools.workspaces.core/ds-version",-571336530)], null),(function (p__48945,_){
var vec__48946 = p__48945;
var workspace = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48946,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48946,(1),null);
if(cljs.core.truth_(workspace)){
var ws_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(workspace);
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("input","updated-at","input/updated-at",-1491743930),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__48949 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?ws","?ws",-692097152,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","workspace","input/workspace",-660968483),new cljs.core.Symbol(null,"?ws","?ws",-692097152,null)], null)], null);
var G__48950 = cljs.core.deref(bb_web_ds_tools.workspaces.core.conn);
var G__48951 = ws_eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__48949,G__48950,G__48951) : datascript.core.q.call(null,G__48949,G__48950,G__48951));
})())));
} else {
return null;
}
})], 0));

//# sourceMappingURL=bb_web_ds_tools.workspaces.core.js.map
