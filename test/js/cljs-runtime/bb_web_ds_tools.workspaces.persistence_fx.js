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

var workspaces = (function (){var G__49421 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Symbol(null,"?created","?created",869162468,null),new cljs.core.Symbol(null,"?updated","?updated",-715859215,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("workspace","id","workspace/id",1734778271),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("workspace","name","workspace/name",-1408521004),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("workspace","created-at","workspace/created-at",-1131011801),new cljs.core.Symbol(null,"?created","?created",869162468,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("workspace","updated-at","workspace/updated-at",1662688881),new cljs.core.Symbol(null,"?updated","?updated",-715859215,null)], null)], null);
var G__49422 = cljs.core.deref(bb_web_ds_tools.workspaces.core.conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__49421,G__49422) : datascript.core.q.call(null,G__49421,G__49422));
})();
var inputs = (function (){var G__49423 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?ws-id","?ws-id",-2043108780,null),new cljs.core.Symbol(null,"?type","?type",-1287409101,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Symbol(null,"?content","?content",-956653715,null),new cljs.core.Symbol(null,"?meta","?meta",846970754,null),new cljs.core.Symbol(null,"?updated","?updated",-715859215,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","id","input/id",-1287388534),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","workspace","input/workspace",-660968483),new cljs.core.Symbol(null,"?ws-ref","?ws-ref",-1957705337,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ws-ref","?ws-ref",-1957705337,null),new cljs.core.Keyword("workspace","id","workspace/id",1734778271),new cljs.core.Symbol(null,"?ws-id","?ws-id",-2043108780,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Symbol(null,"?type","?type",-1287409101,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Symbol(null,"?name","?name",2050703390,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","content","input/content",-159506254),new cljs.core.Symbol(null,"?content","?content",-956653715,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","metadata","input/metadata",1699910183),new cljs.core.Symbol(null,"?meta","?meta",846970754,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("input","updated-at","input/updated-at",-1491743930),new cljs.core.Symbol(null,"?updated","?updated",-715859215,null)], null)], null);
var G__49424 = cljs.core.deref(bb_web_ds_tools.workspaces.core.conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__49423,G__49424) : datascript.core.q.call(null,G__49423,G__49424));
})();
var ws_inserts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49425){
var vec__49426 = p__49425;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49426,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49426,(1),null);
var created = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49426,(2),null);
var updated = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49426,(3),null);
return ["INSERT INTO workspaces VALUES (","'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"', ","'",clojure.string.replace(name,"'","''"),"', ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(created.getTime()),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(updated.getTime()),");"].join('');
}),workspaces);
var input_inserts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49429){
var vec__49430 = p__49429;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49430,(0),null);
var ws_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49430,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49430,(2),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49430,(3),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49430,(4),null);
var meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49430,(5),null);
var updated = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49430,(6),null);
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

var ds_inserts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49433){
var vec__49434 = p__49433;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49434,(0),null);
var dataset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49434,(1),null);
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
var seq__49437_49459 = cljs.core.seq(rows);
var chunk__49438_49460 = null;
var count__49439_49461 = (0);
var i__49440_49462 = (0);
while(true){
if((i__49440_49462 < count__49439_49461)){
var vec__49447_49463 = chunk__49438_49460.cljs$core$IIndexed$_nth$arity$2(null,i__49440_49462);
var id_49464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49447_49463,(0),null);
var content_49465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49447_49463,(1),null);
var dataset_49466 = bb_web_ds_tools.workspaces.persistence_fx.transit_decode(content_49465);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(res,cljs.core.assoc,id_49464,dataset_49466);


var G__49467 = seq__49437_49459;
var G__49468 = chunk__49438_49460;
var G__49469 = count__49439_49461;
var G__49470 = (i__49440_49462 + (1));
seq__49437_49459 = G__49467;
chunk__49438_49460 = G__49468;
count__49439_49461 = G__49469;
i__49440_49462 = G__49470;
continue;
} else {
var temp__5825__auto___49471 = cljs.core.seq(seq__49437_49459);
if(temp__5825__auto___49471){
var seq__49437_49472__$1 = temp__5825__auto___49471;
if(cljs.core.chunked_seq_QMARK_(seq__49437_49472__$1)){
var c__5548__auto___49473 = cljs.core.chunk_first(seq__49437_49472__$1);
var G__49474 = cljs.core.chunk_rest(seq__49437_49472__$1);
var G__49475 = c__5548__auto___49473;
var G__49476 = cljs.core.count(c__5548__auto___49473);
var G__49477 = (0);
seq__49437_49459 = G__49474;
chunk__49438_49460 = G__49475;
count__49439_49461 = G__49476;
i__49440_49462 = G__49477;
continue;
} else {
var vec__49450_49478 = cljs.core.first(seq__49437_49472__$1);
var id_49479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49450_49478,(0),null);
var content_49480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49450_49478,(1),null);
var dataset_49481 = bb_web_ds_tools.workspaces.persistence_fx.transit_decode(content_49480);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(res,cljs.core.assoc,id_49479,dataset_49481);


var G__49482 = cljs.core.next(seq__49437_49472__$1);
var G__49483 = null;
var G__49484 = (0);
var G__49485 = (0);
seq__49437_49459 = G__49482;
chunk__49438_49460 = G__49483;
count__49439_49461 = G__49484;
i__49440_49462 = G__49485;
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
