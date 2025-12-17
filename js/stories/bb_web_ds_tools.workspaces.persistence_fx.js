var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./bb_web_ds_tools.workspaces.core.js");
require("./cljs.core.async.js");
require("./cljs.core.async.interop.js");
require("./clojure.string.js");
require("./cognitect.transit.js");
require("./datascript.core.js");
require("./re_frame.core.js");
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
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var me=$CLJS.me || ($CLJS.me = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.workspaces.persistence_fx.js");

goog.provide('bb_web_ds_tools.workspaces.persistence_fx');
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.workspaces !== 'undefined') && (typeof bb_web_ds_tools.workspaces.persistence_fx !== 'undefined') && (typeof bb_web_ds_tools.workspaces.persistence_fx.sqlite_lib !== 'undefined')){
} else {
bb_web_ds_tools.workspaces.persistence_fx.sqlite_lib = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.workspaces !== 'undefined') && (typeof bb_web_ds_tools.workspaces.persistence_fx !== 'undefined') && (typeof bb_web_ds_tools.workspaces.persistence_fx.sql_db !== 'undefined')){
} else {
bb_web_ds_tools.workspaces.persistence_fx.sql_db = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.workspaces !== 'undefined') && (typeof bb_web_ds_tools.workspaces.persistence_fx !== 'undefined') && (typeof bb_web_ds_tools.workspaces.persistence_fx.worker !== 'undefined')){
} else {
bb_web_ds_tools.workspaces.persistence_fx.worker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Encodes a Clojure data structure to a Transit JSON string.
 * 
 *   Args:
 *  x (any): The data to encode.
 * 
 *   Returns:
 *  string: The encoded JSON string.
 */
bb_web_ds_tools.workspaces.persistence_fx.transit_encode = (function bb_web_ds_tools$workspaces$persistence_fx$transit_encode(x){
var w = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.write(w,x);
});
/**
 * Decodes a Transit JSON string to a Clojure data structure.
 * 
 *   Args:
 *  x (string): The Transit JSON string.
 * 
 *   Returns:
 *  any: The decoded data.
 */
bb_web_ds_tools.workspaces.persistence_fx.transit_decode = (function bb_web_ds_tools$workspaces$persistence_fx$transit_decode(x){
var r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.read(r,x);
});
/**
 * Creates the necessary tables in the SQLite database.
 * 
 *   Args:
 *  db (object): The SQLite database instance.
 */
bb_web_ds_tools.workspaces.persistence_fx.create_tables_BANG_ = (function bb_web_ds_tools$workspaces$persistence_fx$create_tables_BANG_(db){
var sql = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CREATE TABLE IF NOT EXISTS workspaces (id TEXT PRIMARY KEY, name TEXT, created_at INTEGER, updated_at INTEGER);","CREATE TABLE IF NOT EXISTS inputs (id TEXT PRIMARY KEY, workspace_id TEXT, type TEXT, name TEXT, content TEXT, metadata TEXT, updated_at INTEGER);","CREATE TABLE IF NOT EXISTS datasets (id TEXT PRIMARY KEY, name TEXT, content TEXT, created_at INTEGER);"], null));
return db.exec(sql);
});
/**
 * Dumps the current DataScript state to the SQLite database.
 * 
 *   Args:
 *  db (object): The SQLite database instance.
 * 
 *   Returns:
 *  nil: Side effect.
 */
bb_web_ds_tools.workspaces.persistence_fx.persist_all_BANG_ = (function bb_web_ds_tools$workspaces$persistence_fx$persist_all_BANG_(db){
bb_web_ds_tools.workspaces.persistence_fx.create_tables_BANG_(db);

var workspaces = (function (){var G__56269 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Symbol(null,"?created","?created",869162468,null),new cljs.core.Symbol(null,"?updated","?updated",-715859215,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("workspace","id","workspace/id",1734778271),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("workspace","name","workspace/name",-1408521004),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("workspace","created-at","workspace/created-at",-1131011801),new cljs.core.Symbol(null,"?created","?created",869162468,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("workspace","updated-at","workspace/updated-at",1662688881),new cljs.core.Symbol(null,"?updated","?updated",-715859215,null)], null)], null);
var G__56270 = cljs.core.deref(bb_web_ds_tools.workspaces.core.conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__56269,G__56270) : datascript.core.q.call(null,G__56269,G__56270));
})();
var inputs = (function (){var G__56273 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?ws-id","?ws-id",-2043108780,null),new cljs.core.Symbol(null,"?type","?type",-1287409101,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Symbol(null,"?content","?content",-956653715,null),new cljs.core.Symbol(null,"?meta","?meta",846970754,null),new cljs.core.Symbol(null,"?updated","?updated",-715859215,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","id","input/id",-1287388534),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","workspace","input/workspace",-660968483),new cljs.core.Symbol(null,"?ws-ref","?ws-ref",-1957705337,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ws-ref","?ws-ref",-1957705337,null),new cljs.core.Keyword("workspace","id","workspace/id",1734778271),new cljs.core.Symbol(null,"?ws-id","?ws-id",-2043108780,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Symbol(null,"?type","?type",-1287409101,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","content","input/content",-159506254),new cljs.core.Symbol(null,"?content","?content",-956653715,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","metadata","input/metadata",1699910183),new cljs.core.Symbol(null,"?meta","?meta",846970754,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","updated-at","input/updated-at",-1491743930),new cljs.core.Symbol(null,"?updated","?updated",-715859215,null)], null)], null);
var G__56274 = cljs.core.deref(bb_web_ds_tools.workspaces.core.conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__56273,G__56274) : datascript.core.q.call(null,G__56273,G__56274));
})();
var ws_inserts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56282){
var vec__56284 = p__56282;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56284,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56284,(1),null);
var created = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56284,(2),null);
var updated = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56284,(3),null);
return ["INSERT INTO workspaces VALUES (","'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"', ","'",clojure.string.replace(name,"'","''"),"', ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(created.getTime()),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(updated.getTime()),");"].join('');
}),workspaces);
var input_inserts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56295){
var vec__56297 = p__56295;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56297,(0),null);
var ws_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56297,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56297,(2),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56297,(3),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56297,(4),null);
var meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56297,(5),null);
var updated = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56297,(6),null);
return ["INSERT INTO inputs VALUES (","'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"', ","'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ws_id),"', ","'",cljs.core.str.cljs$core$IFn$_invoke$arity$1((name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(type) : name.call(null,type))),"', ","'",clojure.string.replace(name,"'","''"),"', ","'",clojure.string.replace(content,"'","''"),"', ","'",clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta], 0)),"'","''"),"', ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(updated.getTime()),");"].join('');
}),inputs);
var all_sql = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BEGIN TRANSACTION;","DELETE FROM workspaces;","DELETE FROM inputs;"], null),ws_inserts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_inserts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMMIT;"], null)], 0)));
db.exec(all_sql);

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Persisted to in-memory SQL DB."], 0));
});
/**
 * Persists user datasets to the SQLite DB using Transit encoding.
 * 
 *   Args:
 *  db (object): The SQLite database instance.
 *  datasets-map (map): The datasets map to persist.
 * 
 *   Returns:
 *  nil: Side effect.
 */
bb_web_ds_tools.workspaces.persistence_fx.persist_datasets_BANG_ = (function bb_web_ds_tools$workspaces$persistence_fx$persist_datasets_BANG_(db,datasets_map){
bb_web_ds_tools.workspaces.persistence_fx.create_tables_BANG_(db);

var ds_inserts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56315){
var vec__56316 = p__56315;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56316,(0),null);
var dataset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56316,(1),null);
var encoded = bb_web_ds_tools.workspaces.persistence_fx.transit_encode(dataset);
var created_at = Date.now();
return ["INSERT INTO datasets VALUES (","'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"', ","'",clojure.string.replace(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dataset),"'","''"),"', ","'",clojure.string.replace(encoded,"'","''"),"', ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(created_at),");"].join('');
}),datasets_map);
var all_sql = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BEGIN TRANSACTION;","DELETE FROM datasets;"], null),ds_inserts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMMIT;"], null)], 0)));
db.exec(all_sql);

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Datasets persisted to DB."], 0));
});
/**
 * Loads datasets from the SQLite DB.
 * 
 *   Args:
 *  db (object): The SQLite database instance.
 * 
 *   Returns:
 *  map: The loaded datasets map.
 */
bb_web_ds_tools.workspaces.persistence_fx.load_datasets_from_db = (function bb_web_ds_tools$workspaces$persistence_fx$load_datasets_from_db(db){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var rows = db.exec(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sql","sql",1251448786),"SELECT id, content FROM datasets",new cljs.core.Keyword(null,"rowMode","rowMode",812194884),"array",new cljs.core.Keyword(null,"returnValue","returnValue",1643246062),"resultRows"], null)));
var seq__56327_56397 = cljs.core.seq(rows);
var chunk__56328_56398 = null;
var count__56329_56399 = (0);
var i__56330_56400 = (0);
while(true){
if((i__56330_56400 < count__56329_56399)){
var vec__56348_56401 = chunk__56328_56398.cljs$core$IIndexed$_nth$arity$2(null,i__56330_56400);
var id_56402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56348_56401,(0),null);
var content_56403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56348_56401,(1),null);
var dataset_56404 = bb_web_ds_tools.workspaces.persistence_fx.transit_decode(content_56403);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(res,cljs.core.assoc,id_56402,dataset_56404);


var G__56406 = seq__56327_56397;
var G__56407 = chunk__56328_56398;
var G__56408 = count__56329_56399;
var G__56409 = (i__56330_56400 + (1));
seq__56327_56397 = G__56406;
chunk__56328_56398 = G__56407;
count__56329_56399 = G__56408;
i__56330_56400 = G__56409;
continue;
} else {
var temp__5825__auto___56411 = cljs.core.seq(seq__56327_56397);
if(temp__5825__auto___56411){
var seq__56327_56412__$1 = temp__5825__auto___56411;
if(cljs.core.chunked_seq_QMARK_(seq__56327_56412__$1)){
var c__5548__auto___56415 = cljs.core.chunk_first(seq__56327_56412__$1);
var G__56416 = cljs.core.chunk_rest(seq__56327_56412__$1);
var G__56417 = c__5548__auto___56415;
var G__56418 = cljs.core.count(c__5548__auto___56415);
var G__56419 = (0);
seq__56327_56397 = G__56416;
chunk__56328_56398 = G__56417;
count__56329_56399 = G__56418;
i__56330_56400 = G__56419;
continue;
} else {
var vec__56357_56420 = cljs.core.first(seq__56327_56412__$1);
var id_56421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56357_56420,(0),null);
var content_56422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56357_56420,(1),null);
var dataset_56423 = bb_web_ds_tools.workspaces.persistence_fx.transit_decode(content_56422);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(res,cljs.core.assoc,id_56421,dataset_56423);


var G__56425 = cljs.core.next(seq__56327_56412__$1);
var G__56426 = null;
var G__56427 = (0);
var G__56428 = (0);
seq__56327_56397 = G__56425;
chunk__56328_56398 = G__56426;
count__56329_56399 = G__56427;
i__56330_56400 = G__56428;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(res);
});
/**
 * Exports the SQLite database as a binary blob.
 * 
 *   Args:
 *  db (object): The SQLite database instance.
 * 
 *   Returns:
 *  Blob: The database blob.
 */
bb_web_ds_tools.workspaces.persistence_fx.export_db = (function bb_web_ds_tools$workspaces$persistence_fx$export_db(db){
bb_web_ds_tools.workspaces.persistence_fx.persist_all_BANG_(db);

var capi = cljs.core.deref(bb_web_ds_tools.workspaces.persistence_fx.sqlite_lib).capi;
var p_db = db.pointer;
var bytes = capi.sqlite3_js_db_export(p_db);
var blob = (new Blob(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bytes], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"application/x-sqlite3"], null))));
return blob;
});
/**
 * Initializes the SQLite database via Web Worker.
 * 
 *   Returns:
 *  nil: Starts the worker.
 */
bb_web_ds_tools.workspaces.persistence_fx.init_db_BANG_ = (function bb_web_ds_tools$workspaces$persistence_fx$init_db_BANG_(){
var w = (new Worker("js/compiled/persistence-worker.js",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"module"], null))));
cljs.core.reset_BANG_(bb_web_ds_tools.workspaces.persistence_fx.worker,w);

(w.onmessage = (function (e){
return console.log("Msg from worker:",e.data);
}));

return console.log("Worker started.");
});
re_frame.core.reg_fx(new cljs.core.Keyword("persistence","init","persistence/init",-1559746299),(function (_){
return bb_web_ds_tools.workspaces.persistence_fx.init_db_BANG_();
}));
re_frame.core.reg_fx(new cljs.core.Keyword("persistence","save-datasets","persistence/save-datasets",-1056785523),(function (datasets){
var temp__5825__auto__ = cljs.core.deref(bb_web_ds_tools.workspaces.persistence_fx.sql_db);
if(cljs.core.truth_(temp__5825__auto__)){
var db = temp__5825__auto__;
return bb_web_ds_tools.workspaces.persistence_fx.persist_datasets_BANG_(db,datasets);
} else {
return null;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword("persistence","load-datasets","persistence/load-datasets",2001936203),(function (_){
var temp__5825__auto__ = cljs.core.deref(bb_web_ds_tools.workspaces.persistence_fx.sql_db);
if(cljs.core.truth_(temp__5825__auto__)){
var db = temp__5825__auto__;
var datasets = bb_web_ds_tools.workspaces.persistence_fx.load_datasets_from_db(db);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.workspaces.persistence","datasets-loaded","bb-web-ds-tools.workspaces.persistence/datasets-loaded",1851286842),datasets], null));
} else {
return null;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword("persistence","export","persistence/export",-1043786355),(function (datasets){
var temp__5825__auto__ = cljs.core.deref(bb_web_ds_tools.workspaces.persistence_fx.sql_db);
if(cljs.core.truth_(temp__5825__auto__)){
var db = temp__5825__auto__;
bb_web_ds_tools.workspaces.persistence_fx.persist_datasets_BANG_(db,datasets);

var temp__5825__auto____$1 = bb_web_ds_tools.workspaces.persistence_fx.export_db(db);
if(cljs.core.truth_(temp__5825__auto____$1)){
var blob = temp__5825__auto____$1;
var url = URL.createObjectURL(blob);
var a = document.createElement("a");
(a.href = url);

(a.download = "bb-web-ds-tools.sqlite");

a.click();

return URL.revokeObjectURL(url);
} else {
return null;
}
} else {
return null;
}
}));

//# sourceMappingURL=bb_web_ds_tools.workspaces.persistence_fx.js.map
