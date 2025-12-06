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
var len__5749__auto___43811 = arguments.length;
var i__5750__auto___43812 = (0);
while(true){
if((i__5750__auto___43812 < len__5749__auto___43811)){
args__5755__auto__.push((arguments[i__5750__auto___43812]));

var G__43813 = (i__5750__auto___43812 + (1));
i__5750__auto___43812 = G__43813;
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
(bb_web_ds_tools.views.datasets.deep_merge.cljs$lang$applyTo = (function (seq43595){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43595));
}));

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","initialize","bb-web-ds-tools.views.datasets/initialize",2092636843),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null),(function (p1__43599_SHARP_){
return bb_web_ds_tools.views.datasets.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__43599_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"New Dataset",new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null)], null)], 0));
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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset","bb-web-ds-tools.views.datasets/active-dataset",366618334),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset-id","bb-web-ds-tools.views.datasets/active-dataset-id",-1144874757)], null),(function (p__43612){
var vec__43613 = p__43612;
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43613,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43613,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(items,id);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","dataset-list-state","bb-web-ds-tools.views.datasets/dataset-list-state",381011768),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset-id","bb-web-ds-tools.views.datasets/active-dataset-id",-1144874757)], null),(function (p__43616,_){
var vec__43617 = p__43616;
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43617,(0),null);
var active_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43617,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"active-id","active-id",-59238656),active_id], null);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","panel-state","bb-web-ds-tools.views.datasets/panel-state",-1661363564),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset-id","bb-web-ds-tools.views.datasets/active-dataset-id",-1144874757)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset","bb-web-ds-tools.views.datasets/active-dataset",366618334)], null),(function (p__43620,_){
var vec__43621 = p__43620;
var active_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43621,(0),null);
var active_dataset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43621,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-id","active-id",-59238656),active_id,new cljs.core.Keyword(null,"active-dataset","active-dataset",771380472),active_dataset], null);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","vega-datasets-list","bb-web-ds-tools.views.datasets/vega-datasets-list",-168017942),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","component-root","bb-web-ds-tools.views.datasets/component-root",-1162643412)], null),(function (root){
return new cljs.core.Keyword(null,"vega-datasets-list","vega-datasets-list",-841202224).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","loading-vega-list?","bb-web-ds-tools.views.datasets/loading-vega-list?",-2047809625),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","component-root","bb-web-ds-tools.views.datasets/component-root",-1162643412)], null),(function (root){
return new cljs.core.Keyword(null,"loading-vega-list?","loading-vega-list?",-1403989695).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","loading-vega-dataset?","bb-web-ds-tools.views.datasets/loading-vega-dataset?",-35488745),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","component-root","bb-web-ds-tools.views.datasets/component-root",-1162643412)], null),(function (root){
return new cljs.core.Keyword(null,"loading-vega-dataset?","loading-vega-dataset?",-1002270211).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","set-active-dataset-id","bb-web-ds-tools.views.datasets/set-active-dataset-id",1361188762),(function (db,p__43624){
var vec__43625 = p__43624;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43625,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43625,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"active-dataset-id","active-dataset-id",-735937827)], null),id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-new-dataset-state","bb-web-ds-tools.views.datasets/update-new-dataset-state",-1930125405),(function (db,p__43628){
var vec__43629 = p__43628;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43629,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43629,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43629,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301),k], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),(function (db,p__43633){
var vec__43634 = p__43633;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43634,(0),null);
var map__43637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43634,(1),null);
var map__43637__$1 = cljs.core.__destructure_map(map__43637);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43637__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43637__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var valid_data = ((cljs.core.map_QMARK_(data))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null):((cljs.core.seq(data))?((cljs.core.map_QMARK_(cljs.core.first(data)))?data:cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),row], null);
}),data)):cljs.core.PersistentVector.EMPTY
));
var data_with_ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43632_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43632_SHARP_,new cljs.core.Keyword(null,"_uuid","_uuid",797900280),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","delete-dataset","bb-web-ds-tools.views.datasets/delete-dataset",243110744),(function (db,p__43639){
var vec__43640 = p__43639;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43640,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43640,(1),null);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.dissoc,id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"active-dataset-id","active-dataset-id",-735937827)], null),new cljs.core.Keyword(null,"new","new",-2085437848));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-dataset-name","bb-web-ds-tools.views.datasets/update-dataset-name",798576715),(function (db,p__43643){
var vec__43644 = p__43643;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43644,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43644,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43644,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938),id,new cljs.core.Keyword(null,"name","name",1843675177)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),(function (db,p__43647){
var vec__43666 = p__43647;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43666,(0),null);
var dataset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43666,(1),null);
var row_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43666,(2),null);
var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43666,(3),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43666,(4),null);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),(function (db,p__43675){
var vec__43676 = p__43675;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43676,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43676,(1),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43676,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43676,(3),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938),id,new cljs.core.Keyword(null,"view-state","view-state",-976675614),key], null),value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","fetch-vega-datasets","bb-web-ds-tools.views.datasets/fetch-vega-datasets",202932363),(function (p__43682,_){
var map__43683 = p__43682;
var map__43683__$1 = cljs.core.__destructure_map(map__43683);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43683__$1,new cljs.core.Keyword(null,"db","db",993250759));
fetch("https://cdn.jsdelivr.net/npm/vega-datasets/data/").then((function (p1__43679_SHARP_){
return p1__43679_SHARP_.text();
})).then((function (p1__43680_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","receive-vega-datasets","bb-web-ds-tools.views.datasets/receive-vega-datasets",-736628262),p1__43680_SHARP_], null));
})).catch((function (p1__43681_SHARP_){
return console.error("Failed to fetch vega datasets list",p1__43681_SHARP_);
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"loading-vega-list?","loading-vega-list?",-1403989695)], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","receive-vega-datasets","bb-web-ds-tools.views.datasets/receive-vega-datasets",-736628262),(function (db,p__43687){
var vec__43688 = p__43687;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43688,(0),null);
var html_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43688,(1),null);
var parser = (new DOMParser());
var doc = parser.parseFromString(html_content,"text/html");
var links = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(doc.querySelectorAll("a"));
var filenames = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43686_SHARP_){
return cljs.core.re_find(/\.(json|csv|tsv|md)$/,p1__43686_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43684_SHARP_){
return p1__43684_SHARP_.innerText;
}),links))));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"vega-datasets-list","vega-datasets-list",-841202224)], null),filenames),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"loading-vega-list?","loading-vega-list?",-1403989695)], null),false);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","fetch-vega-dataset","bb-web-ds-tools.views.datasets/fetch-vega-dataset",1814090652),(function (p__43698,p__43699){
var map__43700 = p__43698;
var map__43700__$1 = cljs.core.__destructure_map(map__43700);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43700__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43701 = p__43699;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43701,(0),null);
var filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43701,(1),null);
var url = ["https://cdn.jsdelivr.net/npm/vega-datasets@3/data/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('');
fetch(url).then((function (p1__43695_SHARP_){
return p1__43695_SHARP_.text();
})).then((function (p1__43696_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","receive-vega-dataset-content","bb-web-ds-tools.views.datasets/receive-vega-dataset-content",-385162532),filename,p1__43696_SHARP_], null));
})).catch((function (p1__43697_SHARP_){
return console.error("Failed to fetch vega dataset",p1__43697_SHARP_);
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"loading-vega-dataset?","loading-vega-dataset?",-1002270211)], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","receive-vega-dataset-content","bb-web-ds-tools.views.datasets/receive-vega-dataset-content",-385162532),(function (db,p__43713){
var vec__43714 = p__43713;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43714,(0),null);
var filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43714,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43714,(2),null);
var extension = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(filename,/\./));
var format = (function (){var G__43717 = extension;
switch (G__43717) {
case "json":
return new cljs.core.Keyword(null,"json","json",1279968570);

break;
case "csv":
return new cljs.core.Keyword(null,"csv","csv",-1164440893);

break;
case "tsv":
return new cljs.core.Keyword(null,"tsv","tsv",-1254214356);

break;
case "md":
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);

break;
default:
return new cljs.core.Keyword(null,"csv","csv",-1164440893);

}
})();
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301),new cljs.core.Keyword(null,"text","text",-1790561697)], null),content),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301),new cljs.core.Keyword(null,"name","name",1843675177)], null),filename),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301),new cljs.core.Keyword(null,"format","format",-1306924766)], null),format),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301),new cljs.core.Keyword(null,"structure","structure",1563832083)], null),(cljs.core.truth_((function (){var fexpr__43719 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"csv","csv",-1164440893),null,new cljs.core.Keyword(null,"tsv","tsv",-1254214356),null], null), null);
return (fexpr__43719.cljs$core$IFn$_invoke$arity$1 ? fexpr__43719.cljs$core$IFn$_invoke$arity$1(format) : fexpr__43719.call(null,format));
})())?new cljs.core.Keyword(null,"columnar","columnar",-1122999701):new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"loading-vega-dataset?","loading-vega-dataset?",-1002270211)], null),false);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.text_primary," px-4 py-2 rounded border ",bb_web_ds_tools.theme.border_default].join('')], null),"Select Columns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute hidden group-hover:block ",bb_web_ds_tools.theme.bg_input," border ",bb_web_ds_tools.theme.border_default," p-2 rounded shadow-lg z-10 w-48 max-h-60 overflow-y-auto"].join('')], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$column_toggle_dropdown_$_iter__43727(s__43728){
return (new cljs.core.LazySeq(null,(function (){
var s__43728__$1 = s__43728;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43728__$1);
if(temp__5825__auto__){
var s__43728__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43728__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43728__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43730 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43729 = (0);
while(true){
if((i__43729 < size__5502__auto__)){
var col = cljs.core._nth(c__5501__auto__,i__43729);
cljs.core.chunk_append(b__43730,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center space-x-2 p-1 ",bb_web_ds_tools.theme.bg_item_hover].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"w-auto",new cljs.core.Keyword(null,"checked","checked",-50955819),(!(cljs.core.contains_QMARK_(hidden_columns,col))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__43729,col,c__5501__auto__,size__5502__auto__,b__43730,s__43728__$2,temp__5825__auto__){
return (function (){
if(cljs.core.contains_QMARK_(hidden_columns,col)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(hidden_columns,col)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(hidden_columns,col)], null));
}
});})(i__43729,col,c__5501__auto__,size__5502__auto__,b__43730,s__43728__$2,temp__5825__auto__))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),bb_web_ds_tools.theme.text_primary], null),cljs.core.name(col)], null)], null));

var G__43822 = (i__43729 + (1));
i__43729 = G__43822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43730),bb_web_ds_tools$views$datasets$column_toggle_dropdown_$_iter__43727(cljs.core.chunk_rest(s__43728__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43730),null);
}
} else {
var col = cljs.core.first(s__43728__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center space-x-2 p-1 ",bb_web_ds_tools.theme.bg_item_hover].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"w-auto",new cljs.core.Keyword(null,"checked","checked",-50955819),(!(cljs.core.contains_QMARK_(hidden_columns,col))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (col,s__43728__$2,temp__5825__auto__){
return (function (){
if(cljs.core.contains_QMARK_(hidden_columns,col)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(hidden_columns,col)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(hidden_columns,col)], null));
}
});})(col,s__43728__$2,temp__5825__auto__))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),bb_web_ds_tools.theme.text_primary], null),cljs.core.name(col)], null)], null),bb_web_ds_tools$views$datasets$column_toggle_dropdown_$_iter__43727(cljs.core.rest(s__43728__$2)));
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
var vega_list = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","vega-datasets-list","bb-web-ds-tools.views.datasets/vega-datasets-list",-168017942)], null));
var loading_list_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","loading-vega-list?","bb-web-ds-tools.views.datasets/loading-vega-list?",-2047809625)], null));
var loading_dataset_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","loading-vega-dataset?","bb-web-ds-tools.views.datasets/loading-vega-dataset?",-35488745)], null));
return (function (){
var map__43738 = cljs.core.deref(state);
var map__43738__$1 = cljs.core.__destructure_map(map__43738);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43738__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var name_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43738__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43738__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var structure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43738__$1,new cljs.core.Keyword(null,"structure","structure",1563832083));
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
if((((cljs.core.deref(vega_list) == null)) && (cljs.core.not(cljs.core.deref(loading_list_QMARK_))))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","fetch-vega-datasets","bb-web-ds-tools.views.datasets/fetch-vega-datasets",202932363)], null));
} else {
}

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full space-y-4 p-4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between items-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl font-bold ",bb_web_ds_tools.theme.text_accent].join('')], null),"Create New Dataset"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-4 items-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center space-x-2"], null),(cljs.core.truth_(cljs.core.deref(loading_list_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm text-gray-500"], null),"Loading datasets..."], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm border rounded p-1 max-w-[150px] ",bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.text_primary," ",bb_web_ds_tools.theme.border_default].join(''),new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43731_SHARP_){
if(cljs.core.truth_(cljs.core.not_empty(p1__43731_SHARP_.target.value))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","fetch-vega-dataset","bb-web-ds-tools.views.datasets/fetch-vega-dataset",1814090652),p1__43731_SHARP_.target.value], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"Select Example Data..."], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$importer_view_$_iter__43742(s__43743){
return (new cljs.core.LazySeq(null,(function (){
var s__43743__$1 = s__43743;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43743__$1);
if(temp__5825__auto__){
var s__43743__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43743__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43743__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43745 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43744 = (0);
while(true){
if((i__43744 < size__5502__auto__)){
var ds = cljs.core._nth(c__5501__auto__,i__43744);
cljs.core.chunk_append(b__43745,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),ds,new cljs.core.Keyword(null,"value","value",305978217),ds], null),ds], null));

var G__43827 = (i__43744 + (1));
i__43744 = G__43827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43745),bb_web_ds_tools$views$datasets$importer_view_$_iter__43742(cljs.core.chunk_rest(s__43743__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43745),null);
}
} else {
var ds = cljs.core.first(s__43743__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),ds,new cljs.core.Keyword(null,"value","value",305978217),ds], null),ds], null),bb_web_ds_tools$views$datasets$importer_view_$_iter__43742(cljs.core.rest(s__43743__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.deref(vega_list));
})()], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$importer_view_$_iter__43746(s__43747){
return (new cljs.core.LazySeq(null,(function (){
var s__43747__$1 = s__43747;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43747__$1);
if(temp__5825__auto__){
var s__43747__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43747__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43747__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43749 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43748 = (0);
while(true){
if((i__43748 < size__5502__auto__)){
var f = cljs.core._nth(c__5501__auto__,i__43748);
cljs.core.chunk_append(b__43749,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),f,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fmt,f))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43748,f,c__5501__auto__,size__5502__auto__,b__43749,s__43747__$2,temp__5825__auto__,map__43738,map__43738__$1,fmt,name_val,text,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state,vega_list,loading_list_QMARK_,loading_dataset_QMARK_){
return (function (){
set_state(new cljs.core.Keyword(null,"format","format",-1306924766),f);

if(cljs.core.truth_((function (){var fexpr__43750 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"csv","csv",-1164440893),null,new cljs.core.Keyword(null,"tsv","tsv",-1254214356),null], null), null);
return (fexpr__43750.cljs$core$IFn$_invoke$arity$1 ? fexpr__43750.cljs$core$IFn$_invoke$arity$1(f) : fexpr__43750.call(null,f));
})())){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
} else {
return null;
}
});})(i__43748,f,c__5501__auto__,size__5502__auto__,b__43749,s__43747__$2,temp__5825__auto__,map__43738,map__43738__$1,fmt,name_val,text,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state,vega_list,loading_list_QMARK_,loading_dataset_QMARK_))
], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?"MD":clojure.string.upper_case(cljs.core.name(f)))], null));

var G__43832 = (i__43748 + (1));
i__43748 = G__43832;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43749),bb_web_ds_tools$views$datasets$importer_view_$_iter__43746(cljs.core.chunk_rest(s__43747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43749),null);
}
} else {
var f = cljs.core.first(s__43747__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),f,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fmt,f))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (f,s__43747__$2,temp__5825__auto__,map__43738,map__43738__$1,fmt,name_val,text,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state,vega_list,loading_list_QMARK_,loading_dataset_QMARK_){
return (function (){
set_state(new cljs.core.Keyword(null,"format","format",-1306924766),f);

if(cljs.core.truth_((function (){var fexpr__43751 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"csv","csv",-1164440893),null,new cljs.core.Keyword(null,"tsv","tsv",-1254214356),null], null), null);
return (fexpr__43751.cljs$core$IFn$_invoke$arity$1 ? fexpr__43751.cljs$core$IFn$_invoke$arity$1(f) : fexpr__43751.call(null,f));
})())){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
} else {
return null;
}
});})(f,s__43747__$2,temp__5825__auto__,map__43738,map__43738__$1,fmt,name_val,text,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state,vega_list,loading_list_QMARK_,loading_dataset_QMARK_))
], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?"MD":clojure.string.upper_case(cljs.core.name(f)))], null),bb_web_ds_tools$views$datasets$importer_view_$_iter__43746(cljs.core.rest(s__43747__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),dataset_name,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Dataset Name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43733_SHARP_){
return set_state(new cljs.core.Keyword(null,"name","name",1843675177),p1__43733_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center space-x-4 flex-wrap gap-y-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-baseline space-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm ",bb_web_ds_tools.theme.text_primary].join('')], null),"Structure:"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$importer_view_$_iter__43752(s__43753){
return (new cljs.core.LazySeq(null,(function (){
var s__43753__$1 = s__43753;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43753__$1);
if(temp__5825__auto__){
var s__43753__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43753__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43753__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43755 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43754 = (0);
while(true){
if((i__43754 < size__5502__auto__)){
var s = cljs.core._nth(c__5501__auto__,i__43754);
cljs.core.chunk_append(b__43755,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(cljs.core.contains_QMARK_(supported_structures,s))),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(structure__$1,s))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):(((!(cljs.core.contains_QMARK_(supported_structures,s))))?"opacity-50 cursor-not-allowed":"")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43754,s,c__5501__auto__,size__5502__auto__,b__43755,s__43753__$2,temp__5825__auto__,map__43738,map__43738__$1,fmt,name_val,text,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state,vega_list,loading_list_QMARK_,loading_dataset_QMARK_){
return (function (){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),s);
});})(i__43754,s,c__5501__auto__,size__5502__auto__,b__43755,s__43753__$2,temp__5825__auto__,map__43738,map__43738__$1,fmt,name_val,text,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state,vega_list,loading_list_QMARK_,loading_dataset_QMARK_))
], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(struct_labels,s)], null));

var G__43837 = (i__43754 + (1));
i__43754 = G__43837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43755),bb_web_ds_tools$views$datasets$importer_view_$_iter__43752(cljs.core.chunk_rest(s__43753__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43755),null);
}
} else {
var s = cljs.core.first(s__43753__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(cljs.core.contains_QMARK_(supported_structures,s))),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(structure__$1,s))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):(((!(cljs.core.contains_QMARK_(supported_structures,s))))?"opacity-50 cursor-not-allowed":"")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,s__43753__$2,temp__5825__auto__,map__43738,map__43738__$1,fmt,name_val,text,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state,vega_list,loading_list_QMARK_,loading_dataset_QMARK_){
return (function (){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),s);
});})(s,s__43753__$2,temp__5825__auto__,map__43738,map__43738__$1,fmt,name_val,text,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state,vega_list,loading_list_QMARK_,loading_dataset_QMARK_))
], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(struct_labels,s)], null),bb_web_ds_tools$views$datasets$importer_view_$_iter__43752(cljs.core.rest(s__43753__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columnar","columnar",-1122999701),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974)], null));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["space-x-2 text-sm ",bb_web_ds_tools.theme.text_primary," items-center"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_info,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return set_state(new cljs.core.Keyword(null,"text","text",-1790561697),bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IFn$_invoke$arity$2(fmt,structure__$1));
})], null),"Load Local Example"], null),(cljs.core.truth_(cljs.core.deref(loading_dataset_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs animate-pulse text-yellow-500"], null),"Fetching..."], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_button_primary," ",bb_web_ds_tools.theme.bg_button_primary_hover," text-white px-4"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var parsed = bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IFn$_invoke$arity$3(fmt,structure__$1,text);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),dataset_name,new cljs.core.Keyword(null,"data","data",-232669377),parsed], null)], null));
})], null),"Create"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow ",bb_web_ds_tools.theme.bg_input," rounded overflow-hidden shadow-inner border ",bb_web_ds_tools.theme.border_default].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"language","language",-1591107564),(function (){var G__43758 = fmt;
var G__43758__$1 = (((G__43758 instanceof cljs.core.Keyword))?G__43758.fqn:null);
switch (G__43758__$1) {
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
var map__43763 = dataset;
var map__43763__$1 = cljs.core.__destructure_map(map__43763);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43763__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43763__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43763__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var view_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43763__$1,new cljs.core.Keyword(null,"view-state","view-state",-976675614));
var map__43764 = view_state;
var map__43764__$1 = cljs.core.__destructure_map(map__43764);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43764__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43764__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43764__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43764__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43764__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43764__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var map__43765 = bb_web_ds_tools.utils.dataset_processing.process_table_data(data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(view_state,new cljs.core.Keyword(null,"columns","columns",1998437288),columns));
var map__43765__$1 = cljs.core.__destructure_map(map__43765);
var page_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43765__$1,new cljs.core.Keyword(null,"page-data","page-data",1443840710));
var total_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43765__$1,new cljs.core.Keyword(null,"total-rows","total-rows",1745495528));
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43765__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43765__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var visible_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43765__$1,new cljs.core.Keyword(null,"visible-columns","visible-columns",1134718660));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-4 p-4"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-wrap gap-4 items-end ",bb_web_ds_tools.theme.bg_toolbar," p-2 rounded shadow-sm"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Rows"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1",new cljs.core.Keyword(null,"value","value",305978217),rows_per_page,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43759_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959),parseInt(p1__43759_SHARP_.target.value)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(5)], null),"5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(10)], null),"10"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(25)], null),"25"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(50)], null),"50"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Columns"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.column_toggle_dropdown,id,columns,hidden_columns], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm ",bb_web_ds_tools.theme.text_secondary].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((start_idx + (1))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_idx)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_rows)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"page","page",849072397),(page - (1))], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(page === (0))], null),"Prev"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"page","page",849072397),(page + (1))], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(end_idx >= total_rows)], null),"Next"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.table_container,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.table,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.thead,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tr,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$data_table_$_iter__43766(s__43767){
return (new cljs.core.LazySeq(null,(function (){
var s__43767__$1 = s__43767;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43767__$1);
if(temp__5825__auto__){
var s__43767__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43767__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43767__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43769 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43768 = (0);
while(true){
if((i__43768 < size__5502__auto__)){
var col = cljs.core._nth(c__5501__auto__,i__43768);
cljs.core.chunk_append(b__43769,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.th,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer ",bb_web_ds_tools.theme.bg_item_hover].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43768,col,c__5501__auto__,size__5502__auto__,b__43769,s__43767__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (){
var new_dir = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),col], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757),new_dir], null));
});})(i__43768,col,c__5501__auto__,size__5502__auto__,b__43769,s__43767__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.name(col)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,col))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10px] transform translate-y-px"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?"\u25B2":"\u25BC")], null):null)], null)], null));

var G__43846 = (i__43768 + (1));
i__43768 = G__43846;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43769),bb_web_ds_tools$views$datasets$data_table_$_iter__43766(cljs.core.chunk_rest(s__43767__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43769),null);
}
} else {
var col = cljs.core.first(s__43767__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.th,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer ",bb_web_ds_tools.theme.bg_item_hover].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (col,s__43767__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (){
var new_dir = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),col], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757),new_dir], null));
});})(col,s__43767__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.name(col)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,col))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10px] transform translate-y-px"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?"\u25B2":"\u25BC")], null):null)], null)], null),bb_web_ds_tools$views$datasets$data_table_$_iter__43766(cljs.core.rest(s__43767__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(visible_columns);
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tbody,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tr,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$data_table_$_iter__43771(s__43772){
return (new cljs.core.LazySeq(null,(function (){
var s__43772__$1 = s__43772;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43772__$1);
if(temp__5825__auto__){
var s__43772__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43772__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43772__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43774 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43773 = (0);
while(true){
if((i__43773 < size__5502__auto__)){
var col = cljs.core._nth(c__5501__auto__,i__43773);
cljs.core.chunk_append(b__43774,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["filter-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-1.5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),["Filter ",cljs.core.name(col)].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(filters,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__43773,col,c__5501__auto__,size__5502__auto__,b__43774,s__43772__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__43761_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(filters,col,p1__43761_SHARP_.target.value)], null));
});})(i__43773,col,c__5501__auto__,size__5502__auto__,b__43774,s__43772__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null));

var G__43855 = (i__43773 + (1));
i__43773 = G__43855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43774),bb_web_ds_tools$views$datasets$data_table_$_iter__43771(cljs.core.chunk_rest(s__43772__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43774),null);
}
} else {
var col = cljs.core.first(s__43772__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["filter-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-1.5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),["Filter ",cljs.core.name(col)].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(filters,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (col,s__43772__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__43761_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(filters,col,p1__43761_SHARP_.target.value)], null));
});})(col,s__43772__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null),bb_web_ds_tools$views$datasets$data_table_$_iter__43771(cljs.core.rest(s__43772__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(visible_columns);
})()], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$data_table_$_iter__43778(s__43779){
return (new cljs.core.LazySeq(null,(function (){
var s__43779__$1 = s__43779;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43779__$1);
if(temp__5825__auto__){
var s__43779__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43779__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43779__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43781 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43780 = (0);
while(true){
if((i__43780 < size__5502__auto__)){
var row = cljs.core._nth(c__5501__auto__,i__43780);
cljs.core.chunk_append(b__43781,(function (){var row_uuid = new cljs.core.Keyword(null,"_uuid","_uuid",797900280).cljs$core$IFn$_invoke$arity$1(row);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_uuid], null),(function (){var iter__5503__auto__ = ((function (i__43780,row_uuid,row,c__5501__auto__,size__5502__auto__,b__43781,s__43779__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function bb_web_ds_tools$views$datasets$data_table_$_iter__43778_$_iter__43783(s__43784){
return (new cljs.core.LazySeq(null,((function (i__43780,row_uuid,row,c__5501__auto__,size__5502__auto__,b__43781,s__43779__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (){
var s__43784__$1 = s__43784;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__43784__$1);
if(temp__5825__auto____$1){
var s__43784__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43784__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__43784__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__43786 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__43785 = (0);
while(true){
if((i__43785 < size__5502__auto____$1)){
var col = cljs.core._nth(c__5501__auto____$1,i__43785);
cljs.core.chunk_append(b__43786,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-transparent focus:",bb_web_ds_tools.theme.bg_input," focus:ring-1 ",bb_web_ds_tools.theme.ring_focus," rounded px-1 outline-none border-0"].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(row,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__43785,i__43780,col,c__5501__auto____$1,size__5502__auto____$1,b__43786,s__43784__$2,temp__5825__auto____$1,row_uuid,row,c__5501__auto__,size__5502__auto__,b__43781,s__43779__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__43762_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),id,row_uuid,col,p1__43762_SHARP_.target.value], null));
});})(i__43785,i__43780,col,c__5501__auto____$1,size__5502__auto____$1,b__43786,s__43784__$2,temp__5825__auto____$1,row_uuid,row,c__5501__auto__,size__5502__auto__,b__43781,s__43779__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null));

var G__43856 = (i__43785 + (1));
i__43785 = G__43856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43786),bb_web_ds_tools$views$datasets$data_table_$_iter__43778_$_iter__43783(cljs.core.chunk_rest(s__43784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43786),null);
}
} else {
var col = cljs.core.first(s__43784__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-transparent focus:",bb_web_ds_tools.theme.bg_input," focus:ring-1 ",bb_web_ds_tools.theme.ring_focus," rounded px-1 outline-none border-0"].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(row,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__43780,col,s__43784__$2,temp__5825__auto____$1,row_uuid,row,c__5501__auto__,size__5502__auto__,b__43781,s__43779__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__43762_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),id,row_uuid,col,p1__43762_SHARP_.target.value], null));
});})(i__43780,col,s__43784__$2,temp__5825__auto____$1,row_uuid,row,c__5501__auto__,size__5502__auto__,b__43781,s__43779__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null),bb_web_ds_tools$views$datasets$data_table_$_iter__43778_$_iter__43783(cljs.core.rest(s__43784__$2)));
}
} else {
return null;
}
break;
}
});})(i__43780,row_uuid,row,c__5501__auto__,size__5502__auto__,b__43781,s__43779__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
,null,null));
});})(i__43780,row_uuid,row,c__5501__auto__,size__5502__auto__,b__43781,s__43779__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
;
return iter__5503__auto__(visible_columns);
})()], null);
})());

var G__43857 = (i__43780 + (1));
i__43780 = G__43857;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43781),bb_web_ds_tools$views$datasets$data_table_$_iter__43778(cljs.core.chunk_rest(s__43779__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43781),null);
}
} else {
var row = cljs.core.first(s__43779__$2);
return cljs.core.cons((function (){var row_uuid = new cljs.core.Keyword(null,"_uuid","_uuid",797900280).cljs$core$IFn$_invoke$arity$1(row);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_uuid], null),(function (){var iter__5503__auto__ = ((function (row_uuid,row,s__43779__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function bb_web_ds_tools$views$datasets$data_table_$_iter__43778_$_iter__43790(s__43791){
return (new cljs.core.LazySeq(null,(function (){
var s__43791__$1 = s__43791;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__43791__$1);
if(temp__5825__auto____$1){
var s__43791__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43791__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43791__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43793 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43792 = (0);
while(true){
if((i__43792 < size__5502__auto__)){
var col = cljs.core._nth(c__5501__auto__,i__43792);
cljs.core.chunk_append(b__43793,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-transparent focus:",bb_web_ds_tools.theme.bg_input," focus:ring-1 ",bb_web_ds_tools.theme.ring_focus," rounded px-1 outline-none border-0"].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(row,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__43792,col,c__5501__auto__,size__5502__auto__,b__43793,s__43791__$2,temp__5825__auto____$1,row_uuid,row,s__43779__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__43762_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),id,row_uuid,col,p1__43762_SHARP_.target.value], null));
});})(i__43792,col,c__5501__auto__,size__5502__auto__,b__43793,s__43791__$2,temp__5825__auto____$1,row_uuid,row,s__43779__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null));

var G__43859 = (i__43792 + (1));
i__43792 = G__43859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43793),bb_web_ds_tools$views$datasets$data_table_$_iter__43778_$_iter__43790(cljs.core.chunk_rest(s__43791__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43793),null);
}
} else {
var col = cljs.core.first(s__43791__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-transparent focus:",bb_web_ds_tools.theme.bg_input," focus:ring-1 ",bb_web_ds_tools.theme.ring_focus," rounded px-1 outline-none border-0"].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(row,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (col,s__43791__$2,temp__5825__auto____$1,row_uuid,row,s__43779__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__43762_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),id,row_uuid,col,p1__43762_SHARP_.target.value], null));
});})(col,s__43791__$2,temp__5825__auto____$1,row_uuid,row,s__43779__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null),bb_web_ds_tools$views$datasets$data_table_$_iter__43778_$_iter__43790(cljs.core.rest(s__43791__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_uuid,row,s__43779__$2,temp__5825__auto__,map__43763,map__43763__$1,id,data,columns,view_state,map__43764,map__43764__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__43765,map__43765__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
;
return iter__5503__auto__(visible_columns);
})()], null);
})(),bb_web_ds_tools$views$datasets$data_table_$_iter__43778(cljs.core.rest(s__43779__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["justify-between ",bb_web_ds_tools.theme.bg_toolbar," p-2 rounded shadow-sm m-4 mt-0 mb-0"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-baseline space-x-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl font-bold bg-transparent ",bb_web_ds_tools.theme.text_accent," border-b border-transparent ",bb_web_ds_tools.theme.border_focus_accent," ",bb_web_ds_tools.theme.outline_none].join(''),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dataset),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43794_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-dataset-name","bb-web-ds-tools.views.datasets/update-dataset-name",798576715),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dataset),p1__43794_SHARP_.target.value], null));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-2 rounded ",bb_web_ds_tools.theme.bg_input," border ",bb_web_ds_tools.theme.border_focus," flex items-center space-x-2"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow h-6 text-sm py-0",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(temp_name),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43795_SHARP_){
return cljs.core.reset_BANG_(temp_name,p1__43795_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__43796_SHARP_){
var G__43797 = p1__43796_SHARP_.key;
switch (G__43797) {
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
var map__43798 = cljs.core.deref(state_sub);
var map__43798__$1 = cljs.core.__destructure_map(map__43798);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43798__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var active_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43798__$1,new cljs.core.Keyword(null,"active-id","active-id",-59238656));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full w-full ",bb_web_ds_tools.theme.bg_sidebar," flex flex-col p-4 border-r border-[#3f3f3f]"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["pb-4 border-b ",bb_web_ds_tools.theme.border_main].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-lg font-semibold ",bb_web_ds_tools.theme.text_accent," mb-4"].join('')], null),"Datasets"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-full ",bb_web_ds_tools.theme.bg_button," ",bb_web_ds_tools.theme.bg_button_hover," justify-center"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","set-active-dataset-id","bb-web-ds-tools.views.datasets/set-active-dataset-id",1361188762),new cljs.core.Keyword(null,"new","new",-2085437848)], null));
})], null),"+ New Dataset"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow overflow-y-auto pt-4 space-y-1"], null),((cljs.core.seq(items))?(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$dataset_list_$_iter__43799(s__43800){
return (new cljs.core.LazySeq(null,(function (){
var s__43800__$1 = s__43800;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43800__$1);
if(temp__5825__auto__){
var s__43800__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43800__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__43800__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__43802 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__43801 = (0);
while(true){
if((i__43801 < size__5502__auto__)){
var vec__43803 = cljs.core._nth(c__5501__auto__,i__43801);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43803,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43803,(1),null);
cljs.core.chunk_append(b__43802,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.dataset_list_item,id,ds,active_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__43865 = (i__43801 + (1));
i__43801 = G__43865;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43802),bb_web_ds_tools$views$datasets$dataset_list_$_iter__43799(cljs.core.chunk_rest(s__43800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43802),null);
}
} else {
var vec__43806 = cljs.core.first(s__43800__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43806,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43806,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.dataset_list_item,id,ds,active_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),bb_web_ds_tools$views$datasets$dataset_list_$_iter__43799(cljs.core.rest(s__43800__$2)));
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
var map__43810 = cljs.core.deref(state_sub);
var map__43810__$1 = cljs.core.__destructure_map(map__43810);
var active_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43810__$1,new cljs.core.Keyword(null,"active-id","active-id",-59238656));
var active_dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43810__$1,new cljs.core.Keyword(null,"active-dataset","active-dataset",771380472));
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
