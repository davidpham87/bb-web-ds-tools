var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./re_frame.core.js");
require("./reagent.core.js");
require("./datascript.core.js");
require("./bb_web_ds_tools.workspaces.schema.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var reitit=$CLJS.reitit || ($CLJS.reitit = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var bb_web_ds_tools=$CLJS.bb_web_ds_tools || ($CLJS.bb_web_ds_tools = {});
var sci=$CLJS.sci || ($CLJS.sci = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var camel_snake_kebab=$CLJS.camel_snake_kebab || ($CLJS.camel_snake_kebab = {});
var module$shadow_js_shim_module$js_yaml=$CLJS.module$shadow_js_shim_module$js_yaml || ($CLJS.module$shadow_js_shim_module$js_yaml = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var me=$CLJS.me || ($CLJS.me = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.workspaces.core.js");

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
var G__52798 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("workspace","name","workspace/name",-1408521004),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null)], null);
var G__52799 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__52798,G__52799) : datascript.core.q.call(null,G__52798,G__52799));
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
var G__52801 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?type","?type",-1287409101,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Symbol(null,"?content","?content",-956653715,null),new cljs.core.Symbol(null,"?updated","?updated",-715859215,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?w","?w",975714438,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","workspace","input/workspace",-660968483),new cljs.core.Symbol(null,"?w","?w",975714438,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Symbol(null,"?type","?type",-1287409101,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","content","input/content",-159506254),new cljs.core.Symbol(null,"?content","?content",-956653715,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","updated-at","input/updated-at",-1491743930),new cljs.core.Symbol(null,"?updated","?updated",-715859215,null)], null)], null);
var G__52802 = db;
var G__52803 = workspace_eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__52801,G__52802,G__52803) : datascript.core.q.call(null,G__52801,G__52802,G__52803));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","init","bb-web-ds-tools.workspaces.core/init",-136734310),(function (p__52804,_){
var map__52805 = p__52804;
var map__52805__$1 = cljs.core.__destructure_map(map__52805);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52805__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","active-workspace-id","bb-web-ds-tools.workspaces.core/active-workspace-id",-2027594487),null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","create-workspace","bb-web-ds-tools.workspaces.core/create-workspace",-1335462972),(function (p__52807,p__52808){
var map__52809 = p__52807;
var map__52809__$1 = cljs.core.__destructure_map(map__52809);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52809__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52810 = p__52808;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52810,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52810,(1),null);
var id = cljs.core.random_uuid();
var tx_data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("workspace","id","workspace/id",1734778271),id,new cljs.core.Keyword("workspace","name","workspace/name",-1408521004),name,new cljs.core.Keyword("workspace","created-at","workspace/created-at",-1131011801),(new Date()),new cljs.core.Keyword("workspace","updated-at","workspace/updated-at",1662688881),(new Date())], null)], null);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.workspaces.core.conn,tx_data);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","switch-workspace","bb-web-ds-tools.workspaces.core/switch-workspace",1604304372),id], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","switch-workspace","bb-web-ds-tools.workspaces.core/switch-workspace",1604304372),(function (db,p__52813){
var vec__52814 = p__52813;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52814,(0),null);
var workspace_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52814,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","active-workspace-id","bb-web-ds-tools.workspaces.core/active-workspace-id",-2027594487),workspace_id);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","save-input","bb-web-ds-tools.workspaces.core/save-input",-2072202544),(function (p__52817,p__52818){
var map__52819 = p__52817;
var map__52819__$1 = cljs.core.__destructure_map(map__52819);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52819__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52820 = p__52818;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52820,(0),null);
var map__52823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52820,(1),null);
var map__52823__$1 = cljs.core.__destructure_map(map__52823);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52823__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52823__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52823__$1,new cljs.core.Keyword(null,"content","content",15833224));
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52823__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
var workspace_id = new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","active-workspace-id","bb-web-ds-tools.workspaces.core/active-workspace-id",-2027594487).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(workspace_id)){
var ws_eid = (function (){var G__52824 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("workspace","id","workspace/id",1734778271),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null);
var G__52825 = cljs.core.deref(bb_web_ds_tools.workspaces.core.conn);
var G__52826 = workspace_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__52824,G__52825,G__52826) : datascript.core.q.call(null,G__52824,G__52825,G__52826));
})();
var existing_input = (function (){var G__52828 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?ws","?ws",-692097152,null),new cljs.core.Symbol(null,"?type","?type",-1287409101,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","workspace","input/workspace",-660968483),new cljs.core.Symbol(null,"?ws","?ws",-692097152,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Symbol(null,"?type","?type",-1287409101,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null)], null);
var G__52829 = cljs.core.deref(bb_web_ds_tools.workspaces.core.conn);
var G__52830 = ws_eid;
var G__52831 = type;
var G__52832 = name;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__52828,G__52829,G__52830,G__52831,G__52832) : datascript.core.q.call(null,G__52828,G__52829,G__52830,G__52831,G__52832));
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
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("workspace","name","workspace/name",-1408521004),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__52839 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("workspace","id","workspace/id",1734778271)], null)], null);
var G__52840 = cljs.core.deref(bb_web_ds_tools.workspaces.core.conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__52839,G__52840) : datascript.core.q.call(null,G__52839,G__52840));
})()));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","active-workspace-id","bb-web-ds-tools.workspaces.core/active-workspace-id",-2027594487),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","active-workspace-id","bb-web-ds-tools.workspaces.core/active-workspace-id",-2027594487).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","active-workspace","bb-web-ds-tools.workspaces.core/active-workspace",-84225939),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","active-workspace-id","bb-web-ds-tools.workspaces.core/active-workspace-id",-2027594487)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","workspaces","bb-web-ds-tools.workspaces.core/workspaces",1907123679)], null),(function (p__52863,_){
var vec__52864 = p__52863;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52864,(0),null);
var workspaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52864,(1),null);
return cljs.core.some((function (p1__52855_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("workspace","id","workspace/id",1734778271).cljs$core$IFn$_invoke$arity$1(p1__52855_SHARP_),id)){
return p1__52855_SHARP_;
} else {
return null;
}
}),workspaces);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","current-inputs","bb-web-ds-tools.workspaces.core/current-inputs",1621571946),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","active-workspace","bb-web-ds-tools.workspaces.core/active-workspace",-84225939)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.workspaces.core","ds-version","bb-web-ds-tools.workspaces.core/ds-version",-571336530)], null),(function (p__52868,_){
var vec__52869 = p__52868;
var workspace = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52869,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52869,(1),null);
if(cljs.core.truth_(workspace)){
var ws_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(workspace);
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("input","updated-at","input/updated-at",-1491743930),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__52872 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?ws","?ws",-692097152,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","workspace","input/workspace",-660968483),new cljs.core.Symbol(null,"?ws","?ws",-692097152,null)], null)], null);
var G__52873 = cljs.core.deref(bb_web_ds_tools.workspaces.core.conn);
var G__52874 = ws_eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__52872,G__52873,G__52874) : datascript.core.q.call(null,G__52872,G__52873,G__52874));
})())));
} else {
return null;
}
})], 0));

//# sourceMappingURL=bb_web_ds_tools.workspaces.core.js.map
