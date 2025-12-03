goog.provide('bb_web_ds_tools.views.datasets');
/**
 * Recursively merges maps.
 * 
 *   Args:
 *  maps (rest): Maps to merge.
 * 
 *   Returns:
 *  map: The merged map.
 */
bb_web_ds_tools.views.datasets.deep_merge = (function bb_web_ds_tools$views$datasets$deep_merge(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43943 = arguments.length;
var i__5750__auto___43944 = (0);
while(true){
if((i__5750__auto___43944 < len__5749__auto___43943)){
args__5755__auto__.push((arguments[i__5750__auto___43944]));

var G__43945 = (i__5750__auto___43944 + (1));
i__5750__auto___43944 = G__43945;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.views.datasets.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.views.datasets.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,bb_web_ds_tools.views.datasets.deep_merge,maps);
} else {
return cljs.core.last(maps);
}
}));

(bb_web_ds_tools.views.datasets.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.views.datasets.deep_merge.cljs$lang$applyTo = (function (seq43632){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43632));
}));

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","initialize","bb-web-ds-tools.views.datasets/initialize",2092636843),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null),(function (p1__43637_SHARP_){
return bb_web_ds_tools.views.datasets.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__43637_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"New Dataset",new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null)], null)], 0));
})),new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-dataset-id","active-dataset-id",-735937827),new cljs.core.Keyword(null,"new","new",-2085437848)], null));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","user-input-root","bb-web-ds-tools.views.datasets/user-input-root",540281190),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","user-input","bb-web-ds-tools.core/user-input",1937733608)], null),(function (user_input){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_input,new cljs.core.Keyword(null,"datasets","datasets",1896364419));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","component-root","bb-web-ds-tools.views.datasets/component-root",-1162643412),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","user-input-root","bb-web-ds-tools.views.datasets/user-input-root",540281190)], null),(function (root){
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset-id","bb-web-ds-tools.views.datasets/active-dataset-id",-1144874757),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","component-root","bb-web-ds-tools.views.datasets/component-root",-1162643412)], null),(function (root){
return new cljs.core.Keyword(null,"active-dataset-id","active-dataset-id",-735937827).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","new-dataset-state","bb-web-ds-tools.views.datasets/new-dataset-state",-1723938765),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","user-input-root","bb-web-ds-tools.views.datasets/user-input-root",540281190)], null),(function (root){
return new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset","bb-web-ds-tools.views.datasets/active-dataset",366618334),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset-id","bb-web-ds-tools.views.datasets/active-dataset-id",-1144874757)], null),(function (p__43650){
var vec__43651 = p__43650;
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43651,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43651,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(items,id);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","dataset-list-state","bb-web-ds-tools.views.datasets/dataset-list-state",381011768),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset-id","bb-web-ds-tools.views.datasets/active-dataset-id",-1144874757)], null),(function (p__43660,_){
var vec__43661 = p__43660;
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43661,(0),null);
var active_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43661,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"active-id","active-id",-59238656),active_id], null);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","panel-state","bb-web-ds-tools.views.datasets/panel-state",-1661363564),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset-id","bb-web-ds-tools.views.datasets/active-dataset-id",-1144874757)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset","bb-web-ds-tools.views.datasets/active-dataset",366618334)], null),(function (p__43670,_){
var vec__43671 = p__43670;
var active_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43671,(0),null);
var active_dataset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43671,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-id","active-id",-59238656),active_id,new cljs.core.Keyword(null,"active-dataset","active-dataset",771380472),active_dataset], null);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","set-active-dataset-id","bb-web-ds-tools.views.datasets/set-active-dataset-id",1361188762),(function (db,p__43693){
var vec__43694 = p__43693;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43694,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43694,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"active-dataset-id","active-dataset-id",-735937827)], null),id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-new-dataset-state","bb-web-ds-tools.views.datasets/update-new-dataset-state",-1930125405),(function (db,p__43697){
var vec__43698 = p__43697;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43698,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43698,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43698,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301),k], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),(function (db,p__43707){
var vec__43708 = p__43707;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43708,(0),null);
var map__43711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43708,(1),null);
var map__43711__$1 = cljs.core.__destructure_map(map__43711);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43711__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43711__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var valid_data = ((cljs.core.map_QMARK_(data))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null):((cljs.core.seq(data))?((cljs.core.map_QMARK_(cljs.core.first(data)))?data:cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),row], null);
}),data)):cljs.core.PersistentVector.EMPTY
));
var data_with_ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43703_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43703_SHARP_,new cljs.core.Keyword(null,"_uuid","_uuid",797900280),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}),valid_data);
var columns = ((cljs.core.seq(valid_data))?cljs.core.keys(cljs.core.first(valid_data)):cljs.core.PersistentVector.EMPTY);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938),id], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5025__auto__ = name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Untitled Dataset";
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),data_with_ids,new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"view-state","view-state",-976675614),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page","page",849072397),(0),new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959),(10),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"table","table",-564943036)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"active-dataset-id","active-dataset-id",-735937827)], null),id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","delete-dataset","bb-web-ds-tools.views.datasets/delete-dataset",243110744),(function (db,p__43719){
var vec__43720 = p__43719;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43720,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43720,(1),null);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.dissoc,id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"active-dataset-id","active-dataset-id",-735937827)], null),new cljs.core.Keyword(null,"new","new",-2085437848));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-dataset-name","bb-web-ds-tools.views.datasets/update-dataset-name",798576715),(function (db,p__43723){
var vec__43724 = p__43723;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43724,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43724,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43724,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938),id,new cljs.core.Keyword(null,"name","name",1843675177)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),(function (db,p__43727){
var vec__43728 = p__43727;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43728,(0),null);
var dataset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43728,(1),null);
var row_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43728,(2),null);
var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43728,(3),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43728,(4),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938),dataset_id,new cljs.core.Keyword(null,"data","data",-232669377)], null),(function (data){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_uuid","_uuid",797900280).cljs$core$IFn$_invoke$arity$1(row),row_uuid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,col_key,value);
} else {
return row;
}
}),data);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),(function (db,p__43731){
var vec__43732 = p__43731;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43732,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43732,(1),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43732,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43732,(3),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938),id,new cljs.core.Keyword(null,"view-state","view-state",-976675614),key], null),value);
}));
/**
 * Renders a dropdown menu to toggle column visibility.
 * 
 *   Args:
 *  id (string): The dataset ID.
 *  columns (seq): List of all columns.
 *  hidden-columns (set): Set of hidden columns.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.datasets.column_toggle_dropdown = (function bb_web_ds_tools$views$datasets$column_toggle_dropdown(id,columns,hidden_columns){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.text_primary," px-4 py-2 rounded border ",bb_web_ds_tools.theme.border_default].join('')], null),"Select Columns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute hidden group-hover:block ",bb_web_ds_tools.theme.bg_input," border ",bb_web_ds_tools.theme.border_default," p-2 rounded shadow-lg z-10 w-48 max-h-60 overflow-y-auto"].join('')], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$column_toggle_dropdown_$_iter__43736(s__43737){
return (new cljs.core.LazySeq(null,(function (){
var s__43737__$1 = s__43737;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43737__$1);
if(temp__5825__auto__){
var s__43737__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43737__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43737__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43739 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43738 = (0);
while(true){
if((i__43738 < size__5502__auto__)){
var col = cljs.core._nth(c__5501__auto__,i__43738);
cljs.core.chunk_append(b__43739,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center space-x-2 p-1 ",bb_web_ds_tools.theme.bg_item_hover].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"w-auto",new cljs.core.Keyword(null,"checked","checked",-50955819),(!(cljs.core.contains_QMARK_(hidden_columns,col))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__43738,col,c__5501__auto__,size__5502__auto__,b__43739,s__43737__$2,temp__5825__auto__){
return (function (){
if(cljs.core.contains_QMARK_(hidden_columns,col)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(hidden_columns,col)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(hidden_columns,col)], null));
}
});})(i__43738,col,c__5501__auto__,size__5502__auto__,b__43739,s__43737__$2,temp__5825__auto__))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),bb_web_ds_tools.theme.text_primary], null),cljs.core.name(col)], null)], null));

var G__43973 = (i__43738 + (1));
i__43738 = G__43973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43739),bb_web_ds_tools$views$datasets$column_toggle_dropdown_$_iter__43736(cljs.core.chunk_rest(s__43737__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43739),null);
}
} else {
var col = cljs.core.first(s__43737__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center space-x-2 p-1 ",bb_web_ds_tools.theme.bg_item_hover].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"w-auto",new cljs.core.Keyword(null,"checked","checked",-50955819),(!(cljs.core.contains_QMARK_(hidden_columns,col))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (col,s__43737__$2,temp__5825__auto__){
return (function (){
if(cljs.core.contains_QMARK_(hidden_columns,col)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(hidden_columns,col)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(hidden_columns,col)], null));
}
});})(col,s__43737__$2,temp__5825__auto__))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),bb_web_ds_tools.theme.text_primary], null),cljs.core.name(col)], null)], null),bb_web_ds_tools$views$datasets$column_toggle_dropdown_$_iter__43736(cljs.core.rest(s__43737__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(columns);
})()], null)], null);
});
/**
 * Renders the dataset importer view.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.datasets.importer_view = (function bb_web_ds_tools$views$datasets$importer_view(){
var state = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","new-dataset-state","bb-web-ds-tools.views.datasets/new-dataset-state",-1723938765)], null));
return (function (){
var map__43752 = cljs.core.deref(state);
var map__43752__$1 = cljs.core.__destructure_map(map__43752);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43752__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var name_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43752__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43752__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var structure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43752__$1,new cljs.core.Keyword(null,"structure","structure",1563832083));
var structure__$1 = (function (){var or__5025__auto__ = structure;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"columnar","columnar",-1122999701);
}
})();
var dataset_name = (function (){var or__5025__auto__ = name_val;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "New Dataset";
}
})();
var set_state = (function (k,v){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-new-dataset-state","bb-web-ds-tools.views.datasets/update-new-dataset-state",-1930125405),k,v], null));
});
var supported_structures = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"csv","csv",-1164440893),null,new cljs.core.Keyword(null,"tsv","tsv",-1254214356),null], null), null),fmt))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columnar","columnar",-1122999701),null], null), null):new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974),null,new cljs.core.Keyword(null,"columnar","columnar",-1122999701),null,new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),null], null), null));
var struct_labels = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columnar","columnar",-1122999701),"Columnar",new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),"Row (Maps)",new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974),"Array (Arrays)"], null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full space-y-4 p-4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between items-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl font-bold ",bb_web_ds_tools.theme.text_accent].join('')], null),"Create New Dataset"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$importer_view_$_iter__43754(s__43755){
return (new cljs.core.LazySeq(null,(function (){
var s__43755__$1 = s__43755;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43755__$1);
if(temp__5825__auto__){
var s__43755__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43755__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43755__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43757 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43756 = (0);
while(true){
if((i__43756 < size__5502__auto__)){
var f = cljs.core._nth(c__5501__auto__,i__43756);
cljs.core.chunk_append(b__43757,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),f,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fmt,f))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43756,f,c__5501__auto__,size__5502__auto__,b__43757,s__43755__$2,temp__5825__auto__,map__43752,map__43752__$1,fmt,name_val,text,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state){
return (function (){
set_state(new cljs.core.Keyword(null,"format","format",-1306924766),f);

if(cljs.core.truth_((function (){var fexpr__43764 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"csv","csv",-1164440893),null,new cljs.core.Keyword(null,"tsv","tsv",-1254214356),null], null), null);
return (fexpr__43764.cljs$core$IFn$_invoke$arity$1 ? fexpr__43764.cljs$core$IFn$_invoke$arity$1(f) : fexpr__43764.call(null,f));
})())){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
} else {
return null;
}
});})(i__43756,f,c__5501__auto__,size__5502__auto__,b__43757,s__43755__$2,temp__5825__auto__,map__43752,map__43752__$1,fmt,name_val,text,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state))
], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?"MD":clojure.string.upper_case(cljs.core.name(f)))], null));

var G__43977 = (i__43756 + (1));
i__43756 = G__43977;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43757),bb_web_ds_tools$views$datasets$importer_view_$_iter__43754(cljs.core.chunk_rest(s__43755__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43757),null);
}
} else {
var f = cljs.core.first(s__43755__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),f,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fmt,f))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (f,s__43755__$2,temp__5825__auto__,map__43752,map__43752__$1,fmt,name_val,text,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state){
return (function (){
set_state(new cljs.core.Keyword(null,"format","format",-1306924766),f);

if(cljs.core.truth_((function (){var fexpr__43766 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"csv","csv",-1164440893),null,new cljs.core.Keyword(null,"tsv","tsv",-1254214356),null], null), null);
return (fexpr__43766.cljs$core$IFn$_invoke$arity$1 ? fexpr__43766.cljs$core$IFn$_invoke$arity$1(f) : fexpr__43766.call(null,f));
})())){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
} else {
return null;
}
});})(f,s__43755__$2,temp__5825__auto__,map__43752,map__43752__$1,fmt,name_val,text,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state))
], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?"MD":clojure.string.upper_case(cljs.core.name(f)))], null),bb_web_ds_tools$views$datasets$importer_view_$_iter__43754(cljs.core.rest(s__43755__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),dataset_name,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Dataset Name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43750_SHARP_){
return set_state(new cljs.core.Keyword(null,"name","name",1843675177),p1__43750_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center space-x-4 flex-wrap gap-y-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-baseline space-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm ",bb_web_ds_tools.theme.text_primary].join('')], null),"Structure:"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$importer_view_$_iter__43774(s__43775){
return (new cljs.core.LazySeq(null,(function (){
var s__43775__$1 = s__43775;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43775__$1);
if(temp__5825__auto__){
var s__43775__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43775__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43775__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43777 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43776 = (0);
while(true){
if((i__43776 < size__5502__auto__)){
var s = cljs.core._nth(c__5501__auto__,i__43776);
cljs.core.chunk_append(b__43777,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(cljs.core.contains_QMARK_(supported_structures,s))),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(structure__$1,s))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):(((!(cljs.core.contains_QMARK_(supported_structures,s))))?"opacity-50 cursor-not-allowed":"")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43776,s,c__5501__auto__,size__5502__auto__,b__43777,s__43775__$2,temp__5825__auto__,map__43752,map__43752__$1,fmt,name_val,text,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state){
return (function (){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),s);
});})(i__43776,s,c__5501__auto__,size__5502__auto__,b__43777,s__43775__$2,temp__5825__auto__,map__43752,map__43752__$1,fmt,name_val,text,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state))
], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(struct_labels,s)], null));

var G__43982 = (i__43776 + (1));
i__43776 = G__43982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43777),bb_web_ds_tools$views$datasets$importer_view_$_iter__43774(cljs.core.chunk_rest(s__43775__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43777),null);
}
} else {
var s = cljs.core.first(s__43775__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(cljs.core.contains_QMARK_(supported_structures,s))),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(structure__$1,s))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):(((!(cljs.core.contains_QMARK_(supported_structures,s))))?"opacity-50 cursor-not-allowed":"")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,s__43775__$2,temp__5825__auto__,map__43752,map__43752__$1,fmt,name_val,text,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state){
return (function (){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),s);
});})(s,s__43775__$2,temp__5825__auto__,map__43752,map__43752__$1,fmt,name_val,text,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state))
], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(struct_labels,s)], null),bb_web_ds_tools$views$datasets$importer_view_$_iter__43774(cljs.core.rest(s__43775__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columnar","columnar",-1122999701),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["space-x-2 text-sm ",bb_web_ds_tools.theme.text_primary," items-center"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_info,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return set_state(new cljs.core.Keyword(null,"text","text",-1790561697),bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IFn$_invoke$arity$2(fmt,structure__$1));
})], null),"Load Example"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_button_primary," ",bb_web_ds_tools.theme.bg_button_primary_hover," text-white px-4"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var parsed = bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IFn$_invoke$arity$3(fmt,structure__$1,text);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),dataset_name,new cljs.core.Keyword(null,"data","data",-232669377),parsed], null)], null));
})], null),"Create"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow ",bb_web_ds_tools.theme.bg_input," rounded overflow-hidden shadow-inner border ",bb_web_ds_tools.theme.border_default].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"language","language",-1591107564),(function (){var G__43779 = fmt;
var G__43779__$1 = (((G__43779 instanceof cljs.core.Keyword))?G__43779.fqn:null);
switch (G__43779__$1) {
case "json":
return "json";

break;
case "edn":
return "clojure";

break;
case "markdown":
return "markdown";

break;
default:
return "plaintext";

}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-new-dataset-state","bb-web-ds-tools.views.datasets/update-new-dataset-state",-1930125405),new cljs.core.Keyword(null,"text","text",-1790561697)], null)], null)], null)], null)], null);
});
});
/**
 * Renders the interactive data table for a dataset.
 * 
 *   Args:
 *  dataset (map): The dataset map containing :data, :columns, etc.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.datasets.data_table = (function bb_web_ds_tools$views$datasets$data_table(dataset){
var map__43785 = dataset;
var map__43785__$1 = cljs.core.__destructure_map(map__43785);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43785__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43785__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43785__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var view_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43785__$1,new cljs.core.Keyword(null,"view-state","view-state",-976675614));
var map__43786 = view_state;
var map__43786__$1 = cljs.core.__destructure_map(map__43786);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43786__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43786__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43786__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43786__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43786__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43786__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var map__43787 = bb_web_ds_tools.utils.dataset_processing.process_table_data(data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(view_state,new cljs.core.Keyword(null,"columns","columns",1998437288),columns));
var map__43787__$1 = cljs.core.__destructure_map(map__43787);
var page_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43787__$1,new cljs.core.Keyword(null,"page-data","page-data",1443840710));
var total_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43787__$1,new cljs.core.Keyword(null,"total-rows","total-rows",1745495528));
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43787__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43787__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var visible_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43787__$1,new cljs.core.Keyword(null,"visible-columns","visible-columns",1134718660));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-4 p-4"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-wrap gap-4 items-end ",bb_web_ds_tools.theme.bg_toolbar," p-2 rounded shadow-sm"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Rows"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1",new cljs.core.Keyword(null,"value","value",305978217),rows_per_page,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43782_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959),parseInt(p1__43782_SHARP_.target.value)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(5)], null),"5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(10)], null),"10"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(25)], null),"25"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(50)], null),"50"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Columns"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.column_toggle_dropdown,id,columns,hidden_columns], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm ",bb_web_ds_tools.theme.text_secondary].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((start_idx + (1))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_idx)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_rows)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"page","page",849072397),(page - (1))], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(page === (0))], null),"Prev"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"page","page",849072397),(page + (1))], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(end_idx >= total_rows)], null),"Next"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.table_container,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.table,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.thead,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tr,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$data_table_$_iter__43790(s__43791){
return (new cljs.core.LazySeq(null,(function (){
var s__43791__$1 = s__43791;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43791__$1);
if(temp__5825__auto__){
var s__43791__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43791__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43791__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43793 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43792 = (0);
while(true){
if((i__43792 < size__5502__auto__)){
var col = cljs.core._nth(c__5501__auto__,i__43792);
cljs.core.chunk_append(b__43793,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.th,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer ",bb_web_ds_tools.theme.bg_item_hover].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43792,col,c__5501__auto__,size__5502__auto__,b__43793,s__43791__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (){
var new_dir = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),col], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757),new_dir], null));
});})(i__43792,col,c__5501__auto__,size__5502__auto__,b__43793,s__43791__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.name(col)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,col))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10px] transform translate-y-px"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?"\u25B2":"\u25BC")], null):null)], null)], null));

var G__43998 = (i__43792 + (1));
i__43792 = G__43998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43793),bb_web_ds_tools$views$datasets$data_table_$_iter__43790(cljs.core.chunk_rest(s__43791__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43793),null);
}
} else {
var col = cljs.core.first(s__43791__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.th,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer ",bb_web_ds_tools.theme.bg_item_hover].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (col,s__43791__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (){
var new_dir = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),col], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757),new_dir], null));
});})(col,s__43791__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.name(col)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,col))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10px] transform translate-y-px"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?"\u25B2":"\u25BC")], null):null)], null)], null),bb_web_ds_tools$views$datasets$data_table_$_iter__43790(cljs.core.rest(s__43791__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(visible_columns);
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tbody,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tr,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$data_table_$_iter__43801(s__43802){
return (new cljs.core.LazySeq(null,(function (){
var s__43802__$1 = s__43802;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43802__$1);
if(temp__5825__auto__){
var s__43802__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43802__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43802__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43804 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43803 = (0);
while(true){
if((i__43803 < size__5502__auto__)){
var col = cljs.core._nth(c__5501__auto__,i__43803);
cljs.core.chunk_append(b__43804,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["filter-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-1.5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),["Filter ",cljs.core.name(col)].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(filters,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__43803,col,c__5501__auto__,size__5502__auto__,b__43804,s__43802__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__43783_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(filters,col,p1__43783_SHARP_.target.value)], null));
});})(i__43803,col,c__5501__auto__,size__5502__auto__,b__43804,s__43802__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null));

var G__44010 = (i__43803 + (1));
i__43803 = G__44010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43804),bb_web_ds_tools$views$datasets$data_table_$_iter__43801(cljs.core.chunk_rest(s__43802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43804),null);
}
} else {
var col = cljs.core.first(s__43802__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["filter-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-1.5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),["Filter ",cljs.core.name(col)].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(filters,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (col,s__43802__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__43783_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(filters,col,p1__43783_SHARP_.target.value)], null));
});})(col,s__43802__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null),bb_web_ds_tools$views$datasets$data_table_$_iter__43801(cljs.core.rest(s__43802__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(visible_columns);
})()], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$data_table_$_iter__43809(s__43810){
return (new cljs.core.LazySeq(null,(function (){
var s__43810__$1 = s__43810;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43810__$1);
if(temp__5825__auto__){
var s__43810__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43810__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43810__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43812 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43811 = (0);
while(true){
if((i__43811 < size__5502__auto__)){
var row = cljs.core._nth(c__5501__auto__,i__43811);
cljs.core.chunk_append(b__43812,(function (){var row_uuid = new cljs.core.Keyword(null,"_uuid","_uuid",797900280).cljs$core$IFn$_invoke$arity$1(row);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_uuid], null),(function (){var iter__5503__auto__ = ((function (i__43811,row_uuid,row,c__5501__auto__,size__5502__auto__,b__43812,s__43810__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function bb_web_ds_tools$views$datasets$data_table_$_iter__43809_$_iter__43819(s__43820){
return (new cljs.core.LazySeq(null,((function (i__43811,row_uuid,row,c__5501__auto__,size__5502__auto__,b__43812,s__43810__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (){
var s__43820__$1 = s__43820;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__43820__$1);
if(temp__5825__auto____$1){
var s__43820__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43820__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__43820__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__43822 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__43821 = (0);
while(true){
if((i__43821 < size__5502__auto____$1)){
var col = cljs.core._nth(c__5501__auto____$1,i__43821);
cljs.core.chunk_append(b__43822,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-transparent focus:",bb_web_ds_tools.theme.bg_input," focus:ring-1 ",bb_web_ds_tools.theme.ring_focus," rounded px-1 outline-none border-0"].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(row,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__43821,i__43811,col,c__5501__auto____$1,size__5502__auto____$1,b__43822,s__43820__$2,temp__5825__auto____$1,row_uuid,row,c__5501__auto__,size__5502__auto__,b__43812,s__43810__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__43784_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),id,row_uuid,col,p1__43784_SHARP_.target.value], null));
});})(i__43821,i__43811,col,c__5501__auto____$1,size__5502__auto____$1,b__43822,s__43820__$2,temp__5825__auto____$1,row_uuid,row,c__5501__auto__,size__5502__auto__,b__43812,s__43810__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null));

var G__44025 = (i__43821 + (1));
i__43821 = G__44025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43822),bb_web_ds_tools$views$datasets$data_table_$_iter__43809_$_iter__43819(cljs.core.chunk_rest(s__43820__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43822),null);
}
} else {
var col = cljs.core.first(s__43820__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-transparent focus:",bb_web_ds_tools.theme.bg_input," focus:ring-1 ",bb_web_ds_tools.theme.ring_focus," rounded px-1 outline-none border-0"].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(row,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__43811,col,s__43820__$2,temp__5825__auto____$1,row_uuid,row,c__5501__auto__,size__5502__auto__,b__43812,s__43810__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__43784_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),id,row_uuid,col,p1__43784_SHARP_.target.value], null));
});})(i__43811,col,s__43820__$2,temp__5825__auto____$1,row_uuid,row,c__5501__auto__,size__5502__auto__,b__43812,s__43810__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null),bb_web_ds_tools$views$datasets$data_table_$_iter__43809_$_iter__43819(cljs.core.rest(s__43820__$2)));
}
} else {
return null;
}
break;
}
});})(i__43811,row_uuid,row,c__5501__auto__,size__5502__auto__,b__43812,s__43810__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
,null,null));
});})(i__43811,row_uuid,row,c__5501__auto__,size__5502__auto__,b__43812,s__43810__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
;
return iter__5503__auto__(visible_columns);
})()], null);
})());

var G__44032 = (i__43811 + (1));
i__43811 = G__44032;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43812),bb_web_ds_tools$views$datasets$data_table_$_iter__43809(cljs.core.chunk_rest(s__43810__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43812),null);
}
} else {
var row = cljs.core.first(s__43810__$2);
return cljs.core.cons((function (){var row_uuid = new cljs.core.Keyword(null,"_uuid","_uuid",797900280).cljs$core$IFn$_invoke$arity$1(row);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_uuid], null),(function (){var iter__5503__auto__ = ((function (row_uuid,row,s__43810__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function bb_web_ds_tools$views$datasets$data_table_$_iter__43809_$_iter__43847(s__43848){
return (new cljs.core.LazySeq(null,(function (){
var s__43848__$1 = s__43848;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__43848__$1);
if(temp__5825__auto____$1){
var s__43848__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43848__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43848__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43850 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43849 = (0);
while(true){
if((i__43849 < size__5502__auto__)){
var col = cljs.core._nth(c__5501__auto__,i__43849);
cljs.core.chunk_append(b__43850,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-transparent focus:",bb_web_ds_tools.theme.bg_input," focus:ring-1 ",bb_web_ds_tools.theme.ring_focus," rounded px-1 outline-none border-0"].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(row,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__43849,col,c__5501__auto__,size__5502__auto__,b__43850,s__43848__$2,temp__5825__auto____$1,row_uuid,row,s__43810__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__43784_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),id,row_uuid,col,p1__43784_SHARP_.target.value], null));
});})(i__43849,col,c__5501__auto__,size__5502__auto__,b__43850,s__43848__$2,temp__5825__auto____$1,row_uuid,row,s__43810__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null));

var G__44037 = (i__43849 + (1));
i__43849 = G__44037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43850),bb_web_ds_tools$views$datasets$data_table_$_iter__43809_$_iter__43847(cljs.core.chunk_rest(s__43848__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43850),null);
}
} else {
var col = cljs.core.first(s__43848__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-transparent focus:",bb_web_ds_tools.theme.bg_input," focus:ring-1 ",bb_web_ds_tools.theme.ring_focus," rounded px-1 outline-none border-0"].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(row,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (col,s__43848__$2,temp__5825__auto____$1,row_uuid,row,s__43810__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__43784_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),id,row_uuid,col,p1__43784_SHARP_.target.value], null));
});})(col,s__43848__$2,temp__5825__auto____$1,row_uuid,row,s__43810__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null),bb_web_ds_tools$views$datasets$data_table_$_iter__43809_$_iter__43847(cljs.core.rest(s__43848__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_uuid,row,s__43810__$2,temp__5825__auto__,map__43785,map__43785__$1,id,data,columns,view_state,map__43786,map__43786__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43787,map__43787__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
;
return iter__5503__auto__(visible_columns);
})()], null);
})(),bb_web_ds_tools$views$datasets$data_table_$_iter__43809(cljs.core.rest(s__43810__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(page_data);
})()], null)], null)], null)], null);
});
/**
 * Renders the main view for a single dataset (table or portal).
 * 
 *   Args:
 *  dataset (map): The dataset map.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.datasets.dataset_view = (function bb_web_ds_tools$views$datasets$dataset_view(dataset){
var view_mode = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(dataset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-state","view-state",-976675614),new cljs.core.Keyword(null,"mode","mode",654403691)], null),new cljs.core.Keyword(null,"table","table",-564943036));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["justify-between ",bb_web_ds_tools.theme.bg_toolbar," p-2 rounded shadow-sm m-4 mt-0 mb-0"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-baseline space-x-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl font-bold bg-transparent ",bb_web_ds_tools.theme.text_accent," border-b border-transparent ",bb_web_ds_tools.theme.border_focus_accent," ",bb_web_ds_tools.theme.outline_none].join(''),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dataset),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43857_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-dataset-name","bb-web-ds-tools.views.datasets/update-dataset-name",798576715),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dataset),p1__43857_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.text_secondary," text-sm"].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(dataset)))," rows"].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2 items-center"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex rounded bg-black/20 p-1 space-x-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"table","table",-564943036)))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):"opacity-50 hover:opacity-100"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dataset),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"table","table",-564943036)], null));
})], null),"Table"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"portal","portal",2002989957)))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):"opacity-50 hover:opacity-100"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dataset),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"portal","portal",2002989957)], null));
})], null),"Portal"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_button_danger," ",bb_web_ds_tools.theme.bg_button_danger_hover," ",bb_web_ds_tools.theme.text_button_primary].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","delete-dataset","bb-web-ds-tools.views.datasets/delete-dataset",243110744),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dataset)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.dustbin_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5"], null)], null)], null)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"portal","portal",2002989957)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.portal.portal_panel,dataset], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.data_table,dataset], null))], null);
});
/**
 * Renders a single dataset item in the sidebar list.
 * 
 *   Args:
 *  id (string): The dataset ID.
 *  ds (map): The dataset map.
 *  active-id (string): The currently active dataset ID.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.datasets.dataset_list_item = (function bb_web_ds_tools$views$datasets$dataset_list_item(id,ds,active_id){
var editing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var temp_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds));
return (function (id__$1,ds__$1,active_id__$1){
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id__$1,active_id__$1);
if(cljs.core.truth_(cljs.core.deref(editing_QMARK_))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-2 rounded ",bb_web_ds_tools.theme.bg_input," border ",bb_web_ds_tools.theme.border_focus," flex items-center space-x-2"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow h-6 text-sm py-0",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(temp_name),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43866_SHARP_){
return cljs.core.reset_BANG_(temp_name,p1__43866_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__43867_SHARP_){
var G__43877 = p1__43867_SHARP_.key;
switch (G__43877) {
case "Enter":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-dataset-name","bb-web-ds-tools.views.datasets/update-dataset-name",798576715),id__$1,cljs.core.deref(temp_name)], null));

return cljs.core.reset_BANG_(editing_QMARK_,false);

break;
case "Escape":
cljs.core.reset_BANG_(temp_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds__$1));

return cljs.core.reset_BANG_(editing_QMARK_,false);

break;
default:
return null;

}
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-dataset-name","bb-web-ds-tools.views.datasets/update-dataset-name",798576715),id__$1,cljs.core.deref(temp_name)], null));

return cljs.core.reset_BANG_(editing_QMARK_,false);
})], null),"Save"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["group flex items-center justify-between p-3 rounded cursor-pointer transition-colors text-sm font-medium ",((active_QMARK_)?[bb_web_ds_tools.theme.bg_card," ",bb_web_ds_tools.theme.text_accent," shadow-sm"].join(''):[bb_web_ds_tools.theme.text_primary," ",bb_web_ds_tools.theme.bg_item_hover].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","set-active-dataset-id","bb-web-ds-tools.views.datasets/set-active-dataset-id",1361188762),id__$1], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"truncate flex-grow"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds__$1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity ",((active_QMARK_)?"opacity-100":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-1 rounded hover:",bb_web_ds_tools.theme.bg_button_hover," text-xs"].join(''),new cljs.core.Keyword(null,"title","title",636505583),"Rename",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

cljs.core.reset_BANG_(temp_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds__$1));

return cljs.core.reset_BANG_(editing_QMARK_,true);
})], null),"\u270E"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-1 rounded hover:",bb_web_ds_tools.theme.bg_button_danger_hover," hover:text-white text-xs"].join(''),new cljs.core.Keyword(null,"title","title",636505583),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

if(cljs.core.truth_(confirm(["Delete dataset '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds__$1)),"'?"].join('')))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","delete-dataset","bb-web-ds-tools.views.datasets/delete-dataset",243110744),id__$1], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.dustbin_icon], null)], null)], null)], null);
}
});
});
/**
 * Renders the sidebar list of datasets.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.datasets.dataset_list = (function bb_web_ds_tools$views$datasets$dataset_list(){
var state_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","dataset-list-state","bb-web-ds-tools.views.datasets/dataset-list-state",381011768)], null));
return (function (){
var map__43907 = cljs.core.deref(state_sub);
var map__43907__$1 = cljs.core.__destructure_map(map__43907);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43907__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var active_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43907__$1,new cljs.core.Keyword(null,"active-id","active-id",-59238656));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full ",bb_web_ds_tools.theme.bg_sidebar," flex flex-col"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-4 border-b ",bb_web_ds_tools.theme.border_main].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-lg font-semibold ",bb_web_ds_tools.theme.text_accent," mb-4"].join('')], null),"Datasets"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-full ",bb_web_ds_tools.theme.bg_button," ",bb_web_ds_tools.theme.bg_button_hover," justify-center"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","set-active-dataset-id","bb-web-ds-tools.views.datasets/set-active-dataset-id",1361188762),new cljs.core.Keyword(null,"new","new",-2085437848)], null));
})], null),"+ New Dataset"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow overflow-y-auto p-2 space-y-1"], null),((cljs.core.seq(items))?(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$dataset_list_$_iter__43912(s__43913){
return (new cljs.core.LazySeq(null,(function (){
var s__43913__$1 = s__43913;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43913__$1);
if(temp__5825__auto__){
var s__43913__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43913__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43913__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43915 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43914 = (0);
while(true){
if((i__43914 < size__5502__auto__)){
var vec__43916 = cljs.core._nth(c__5501__auto__,i__43914);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43916,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43916,(1),null);
cljs.core.chunk_append(b__43915,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.dataset_list_item,id,ds,active_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__44073 = (i__43914 + (1));
i__43914 = G__44073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43915),bb_web_ds_tools$views$datasets$dataset_list_$_iter__43912(cljs.core.chunk_rest(s__43913__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43915),null);
}
} else {
var vec__43921 = cljs.core.first(s__43913__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43921,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43921,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.dataset_list_item,id,ds,active_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),bb_web_ds_tools$views$datasets$dataset_list_$_iter__43912(cljs.core.rest(s__43913__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(items);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm ",bb_web_ds_tools.theme.text_muted," italic p-2"].join('')], null),"No datasets"], null))], null)], null);
});
});
/**
 * Renders the datasets panel content (split view).
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.datasets.panel_render = (function bb_web_ds_tools$views$datasets$panel_render(){
var state_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","panel-state","bb-web-ds-tools.views.datasets/panel-state",-1661363564)], null));
return (function (){
var map__43928 = cljs.core.deref(state_sub);
var map__43928__$1 = cljs.core.__destructure_map(map__43928);
var active_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43928__$1,new cljs.core.Keyword(null,"active-id","active-id",-59238656));
var active_dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43928__$1,new cljs.core.Keyword(null,"active-dataset","active-dataset",771380472));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.split_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"1-3","1-3",-870297994)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.dataset_list], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_id,new cljs.core.Keyword(null,"new","new",-2085437848)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.importer_view], null):(cljs.core.truth_(active_dataset)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.dataset_view,active_dataset], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-center ",bb_web_ds_tools.theme.text_muted," mt-20"].join('')], null),"Select a dataset."], null)))], null);
});
});
/**
 * Main component for the Datasets view. Initializes state on mount.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.datasets.panel = (function bb_web_ds_tools$views$datasets$panel(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"datasets-panel",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","initialize","bb-web-ds-tools.views.datasets/initialize",2092636843)], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),bb_web_ds_tools.views.datasets.panel_render], null));
});

//# sourceMappingURL=bb_web_ds_tools.views.datasets.js.map
