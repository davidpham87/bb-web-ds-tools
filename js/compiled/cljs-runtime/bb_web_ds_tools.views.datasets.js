goog.provide('bb_web_ds_tools.views.datasets');
bb_web_ds_tools.views.datasets.deep_merge = (function bb_web_ds_tools$views$datasets$deep_merge(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37484 = arguments.length;
var i__5750__auto___37485 = (0);
while(true){
if((i__5750__auto___37485 < len__5749__auto___37484)){
args__5755__auto__.push((arguments[i__5750__auto___37485]));

var G__37486 = (i__5750__auto___37485 + (1));
i__5750__auto___37485 = G__37486;
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
(bb_web_ds_tools.views.datasets.deep_merge.cljs$lang$applyTo = (function (seq37309){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37309));
}));

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","initialize","bb-web-ds-tools.views.datasets/initialize",2092636843),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null),(function (p1__37312_SHARP_){
return bb_web_ds_tools.views.datasets.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__37312_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"New Dataset",new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null)], null)], 0));
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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset","bb-web-ds-tools.views.datasets/active-dataset",366618334),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset-id","bb-web-ds-tools.views.datasets/active-dataset-id",-1144874757)], null),(function (p__37326){
var vec__37327 = p__37326;
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37327,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37327,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(items,id);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","set-active-dataset-id","bb-web-ds-tools.views.datasets/set-active-dataset-id",1361188762),(function (db,p__37330){
var vec__37331 = p__37330;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37331,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37331,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"active-dataset-id","active-dataset-id",-735937827)], null),id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-new-dataset-state","bb-web-ds-tools.views.datasets/update-new-dataset-state",-1930125405),(function (db,p__37335){
var vec__37336 = p__37335;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37336,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37336,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37336,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301),k], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),(function (db,p__37340){
var vec__37341 = p__37340;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37341,(0),null);
var map__37344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37341,(1),null);
var map__37344__$1 = cljs.core.__destructure_map(map__37344);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37344__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37344__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var valid_data = ((cljs.core.map_QMARK_(data))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null):((cljs.core.seq(data))?((cljs.core.map_QMARK_(cljs.core.first(data)))?data:cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),row], null);
}),data)):cljs.core.PersistentVector.EMPTY
));
var data_with_ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37339_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37339_SHARP_,new cljs.core.Keyword(null,"_uuid","_uuid",797900280),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","delete-dataset","bb-web-ds-tools.views.datasets/delete-dataset",243110744),(function (db,p__37349){
var vec__37350 = p__37349;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37350,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37350,(1),null);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.dissoc,id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"active-dataset-id","active-dataset-id",-735937827)], null),new cljs.core.Keyword(null,"new","new",-2085437848));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-dataset-name","bb-web-ds-tools.views.datasets/update-dataset-name",798576715),(function (db,p__37353){
var vec__37354 = p__37353;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37354,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37354,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37354,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938),id,new cljs.core.Keyword(null,"name","name",1843675177)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),(function (db,p__37357){
var vec__37358 = p__37357;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37358,(0),null);
var dataset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37358,(1),null);
var row_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37358,(2),null);
var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37358,(3),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37358,(4),null);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),(function (db,p__37361){
var vec__37362 = p__37361;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37362,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37362,(1),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37362,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37362,(3),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938),id,new cljs.core.Keyword(null,"view-state","view-state",-976675614),key], null),value);
}));
bb_web_ds_tools.views.datasets.column_toggle_dropdown = (function bb_web_ds_tools$views$datasets$column_toggle_dropdown(id,columns,hidden_columns){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.text_primary," px-4 py-2 rounded border ",bb_web_ds_tools.theme.border_default].join('')], null),"Select Columns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute hidden group-hover:block ",bb_web_ds_tools.theme.bg_input," border ",bb_web_ds_tools.theme.border_default," p-2 rounded shadow-lg z-10 w-48 max-h-60 overflow-y-auto"].join('')], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$column_toggle_dropdown_$_iter__37365(s__37366){
return (new cljs.core.LazySeq(null,(function (){
var s__37366__$1 = s__37366;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37366__$1);
if(temp__5825__auto__){
var s__37366__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37366__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37366__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37368 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37367 = (0);
while(true){
if((i__37367 < size__5502__auto__)){
var col = cljs.core._nth(c__5501__auto__,i__37367);
cljs.core.chunk_append(b__37368,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center space-x-2 p-1 ",bb_web_ds_tools.theme.bg_item_hover].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"w-auto",new cljs.core.Keyword(null,"checked","checked",-50955819),(!(cljs.core.contains_QMARK_(hidden_columns,col))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__37367,col,c__5501__auto__,size__5502__auto__,b__37368,s__37366__$2,temp__5825__auto__){
return (function (){
if(cljs.core.contains_QMARK_(hidden_columns,col)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(hidden_columns,col)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(hidden_columns,col)], null));
}
});})(i__37367,col,c__5501__auto__,size__5502__auto__,b__37368,s__37366__$2,temp__5825__auto__))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),bb_web_ds_tools.theme.text_primary], null),cljs.core.name(col)], null)], null));

var G__37499 = (i__37367 + (1));
i__37367 = G__37499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37368),bb_web_ds_tools$views$datasets$column_toggle_dropdown_$_iter__37365(cljs.core.chunk_rest(s__37366__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37368),null);
}
} else {
var col = cljs.core.first(s__37366__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center space-x-2 p-1 ",bb_web_ds_tools.theme.bg_item_hover].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"w-auto",new cljs.core.Keyword(null,"checked","checked",-50955819),(!(cljs.core.contains_QMARK_(hidden_columns,col))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (col,s__37366__$2,temp__5825__auto__){
return (function (){
if(cljs.core.contains_QMARK_(hidden_columns,col)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(hidden_columns,col)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(hidden_columns,col)], null));
}
});})(col,s__37366__$2,temp__5825__auto__))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),bb_web_ds_tools.theme.text_primary], null),cljs.core.name(col)], null)], null),bb_web_ds_tools$views$datasets$column_toggle_dropdown_$_iter__37365(cljs.core.rest(s__37366__$2)));
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
bb_web_ds_tools.views.datasets.importer_view = (function bb_web_ds_tools$views$datasets$importer_view(){
var state = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","new-dataset-state","bb-web-ds-tools.views.datasets/new-dataset-state",-1723938765)], null));
return (function (){
var map__37372 = cljs.core.deref(state);
var map__37372__$1 = cljs.core.__destructure_map(map__37372);
var name_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37372__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37372__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37372__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var structure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37372__$1,new cljs.core.Keyword(null,"structure","structure",1563832083));
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
var supported_structures = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"csv","csv",-1164440893),null,new cljs.core.Keyword(null,"tsv","tsv",-1254214356),null], null), null),format))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columnar","columnar",-1122999701),null], null), null):new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974),null,new cljs.core.Keyword(null,"columnar","columnar",-1122999701),null,new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),null], null), null));
var struct_labels = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columnar","columnar",-1122999701),"Columnar",new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),"Row (Maps)",new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974),"Array (Arrays)"], null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full space-y-4 p-4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between items-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl font-bold ",bb_web_ds_tools.theme.text_accent].join('')], null),"Create New Dataset"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$importer_view_$_iter__37375(s__37376){
return (new cljs.core.LazySeq(null,(function (){
var s__37376__$1 = s__37376;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37376__$1);
if(temp__5825__auto__){
var s__37376__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37376__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37376__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37378 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37377 = (0);
while(true){
if((i__37377 < size__5502__auto__)){
var fmt = cljs.core._nth(c__5501__auto__,i__37377);
cljs.core.chunk_append(b__37378,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),fmt,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,fmt))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37377,fmt,c__5501__auto__,size__5502__auto__,b__37378,s__37376__$2,temp__5825__auto__,map__37372,map__37372__$1,name_val,text,format,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state){
return (function (){
set_state(new cljs.core.Keyword(null,"format","format",-1306924766),fmt);

if(cljs.core.truth_((function (){var fexpr__37379 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"csv","csv",-1164440893),null,new cljs.core.Keyword(null,"tsv","tsv",-1254214356),null], null), null);
return (fexpr__37379.cljs$core$IFn$_invoke$arity$1 ? fexpr__37379.cljs$core$IFn$_invoke$arity$1(fmt) : fexpr__37379.call(null,fmt));
})())){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
} else {
return null;
}
});})(i__37377,fmt,c__5501__auto__,size__5502__auto__,b__37378,s__37376__$2,temp__5825__auto__,map__37372,map__37372__$1,name_val,text,format,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state))
], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fmt,new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?"MD":clojure.string.upper_case(cljs.core.name(fmt)))], null));

var G__37515 = (i__37377 + (1));
i__37377 = G__37515;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37378),bb_web_ds_tools$views$datasets$importer_view_$_iter__37375(cljs.core.chunk_rest(s__37376__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37378),null);
}
} else {
var fmt = cljs.core.first(s__37376__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),fmt,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,fmt))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (fmt,s__37376__$2,temp__5825__auto__,map__37372,map__37372__$1,name_val,text,format,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state){
return (function (){
set_state(new cljs.core.Keyword(null,"format","format",-1306924766),fmt);

if(cljs.core.truth_((function (){var fexpr__37380 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"csv","csv",-1164440893),null,new cljs.core.Keyword(null,"tsv","tsv",-1254214356),null], null), null);
return (fexpr__37380.cljs$core$IFn$_invoke$arity$1 ? fexpr__37380.cljs$core$IFn$_invoke$arity$1(fmt) : fexpr__37380.call(null,fmt));
})())){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
} else {
return null;
}
});})(fmt,s__37376__$2,temp__5825__auto__,map__37372,map__37372__$1,name_val,text,format,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state))
], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fmt,new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?"MD":clojure.string.upper_case(cljs.core.name(fmt)))], null),bb_web_ds_tools$views$datasets$importer_view_$_iter__37375(cljs.core.rest(s__37376__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),dataset_name,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Dataset Name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__37371_SHARP_){
return set_state(new cljs.core.Keyword(null,"name","name",1843675177),p1__37371_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center space-x-4 flex-wrap gap-y-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-baseline space-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm ",bb_web_ds_tools.theme.text_primary].join('')], null),"Structure:"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$importer_view_$_iter__37384(s__37385){
return (new cljs.core.LazySeq(null,(function (){
var s__37385__$1 = s__37385;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37385__$1);
if(temp__5825__auto__){
var s__37385__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37385__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37385__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37387 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37386 = (0);
while(true){
if((i__37386 < size__5502__auto__)){
var s = cljs.core._nth(c__5501__auto__,i__37386);
cljs.core.chunk_append(b__37387,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(cljs.core.contains_QMARK_(supported_structures,s))),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(structure__$1,s))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):(((!(cljs.core.contains_QMARK_(supported_structures,s))))?"opacity-50 cursor-not-allowed":"")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37386,s,c__5501__auto__,size__5502__auto__,b__37387,s__37385__$2,temp__5825__auto__,map__37372,map__37372__$1,name_val,text,format,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state){
return (function (){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),s);
});})(i__37386,s,c__5501__auto__,size__5502__auto__,b__37387,s__37385__$2,temp__5825__auto__,map__37372,map__37372__$1,name_val,text,format,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state))
], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(struct_labels,s)], null));

var G__37516 = (i__37386 + (1));
i__37386 = G__37516;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37387),bb_web_ds_tools$views$datasets$importer_view_$_iter__37384(cljs.core.chunk_rest(s__37385__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37387),null);
}
} else {
var s = cljs.core.first(s__37385__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(cljs.core.contains_QMARK_(supported_structures,s))),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(structure__$1,s))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):(((!(cljs.core.contains_QMARK_(supported_structures,s))))?"opacity-50 cursor-not-allowed":"")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,s__37385__$2,temp__5825__auto__,map__37372,map__37372__$1,name_val,text,format,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state){
return (function (){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),s);
});})(s,s__37385__$2,temp__5825__auto__,map__37372,map__37372__$1,name_val,text,format,structure,structure__$1,dataset_name,set_state,supported_structures,struct_labels,state))
], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(struct_labels,s)], null),bb_web_ds_tools$views$datasets$importer_view_$_iter__37384(cljs.core.rest(s__37385__$2)));
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
return set_state(new cljs.core.Keyword(null,"text","text",-1790561697),bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IFn$_invoke$arity$2(format,structure__$1));
})], null),"Load Example"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_button_primary," ",bb_web_ds_tools.theme.bg_button_primary_hover," text-white px-4"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var parsed = bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IFn$_invoke$arity$3(format,structure__$1,text);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),dataset_name,new cljs.core.Keyword(null,"data","data",-232669377),parsed], null)], null));
})], null),"Create"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow ",bb_web_ds_tools.theme.bg_input," rounded overflow-hidden shadow-inner border ",bb_web_ds_tools.theme.border_default].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"language","language",-1591107564),(function (){var G__37400 = format;
var G__37400__$1 = (((G__37400 instanceof cljs.core.Keyword))?G__37400.fqn:null);
switch (G__37400__$1) {
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
bb_web_ds_tools.views.datasets.data_table = (function bb_web_ds_tools$views$datasets$data_table(dataset){
var map__37404 = dataset;
var map__37404__$1 = cljs.core.__destructure_map(map__37404);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37404__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37404__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37404__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var view_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37404__$1,new cljs.core.Keyword(null,"view-state","view-state",-976675614));
var map__37405 = view_state;
var map__37405__$1 = cljs.core.__destructure_map(map__37405);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37405__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37405__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37405__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37405__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37405__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37405__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var map__37406 = bb_web_ds_tools.utils.dataset_processing.process_table_data(data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(view_state,new cljs.core.Keyword(null,"columns","columns",1998437288),columns));
var map__37406__$1 = cljs.core.__destructure_map(map__37406);
var page_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37406__$1,new cljs.core.Keyword(null,"page-data","page-data",1443840710));
var total_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37406__$1,new cljs.core.Keyword(null,"total-rows","total-rows",1745495528));
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37406__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37406__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var visible_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37406__$1,new cljs.core.Keyword(null,"visible-columns","visible-columns",1134718660));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-4 p-4"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-wrap gap-4 items-end ",bb_web_ds_tools.theme.bg_toolbar," p-2 rounded shadow-sm"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Rows"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1",new cljs.core.Keyword(null,"value","value",305978217),rows_per_page,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__37401_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959),parseInt(p1__37401_SHARP_.target.value)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(5)], null),"5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(10)], null),"10"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(25)], null),"25"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(50)], null),"50"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Columns"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.column_toggle_dropdown,id,columns,hidden_columns], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm ",bb_web_ds_tools.theme.text_secondary].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((start_idx + (1))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_idx)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_rows)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"page","page",849072397),(page - (1))], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(page === (0))], null),"Prev"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"page","page",849072397),(page + (1))], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(end_idx >= total_rows)], null),"Next"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.table_container,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.table,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.thead,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tr,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$data_table_$_iter__37423(s__37424){
return (new cljs.core.LazySeq(null,(function (){
var s__37424__$1 = s__37424;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37424__$1);
if(temp__5825__auto__){
var s__37424__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37424__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37424__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37426 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37425 = (0);
while(true){
if((i__37425 < size__5502__auto__)){
var col = cljs.core._nth(c__5501__auto__,i__37425);
cljs.core.chunk_append(b__37426,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.th,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer ",bb_web_ds_tools.theme.bg_item_hover].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37425,col,c__5501__auto__,size__5502__auto__,b__37426,s__37424__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (){
var new_dir = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),col], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757),new_dir], null));
});})(i__37425,col,c__5501__auto__,size__5502__auto__,b__37426,s__37424__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.name(col)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,col))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10px] transform translate-y-px"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?"\u25B2":"\u25BC")], null):null)], null)], null));

var G__37537 = (i__37425 + (1));
i__37425 = G__37537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37426),bb_web_ds_tools$views$datasets$data_table_$_iter__37423(cljs.core.chunk_rest(s__37424__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37426),null);
}
} else {
var col = cljs.core.first(s__37424__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.th,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer ",bb_web_ds_tools.theme.bg_item_hover].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (col,s__37424__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (){
var new_dir = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),col], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757),new_dir], null));
});})(col,s__37424__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.name(col)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,col))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10px] transform translate-y-px"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?"\u25B2":"\u25BC")], null):null)], null)], null),bb_web_ds_tools$views$datasets$data_table_$_iter__37423(cljs.core.rest(s__37424__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(visible_columns);
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tbody,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tr,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$data_table_$_iter__37427(s__37428){
return (new cljs.core.LazySeq(null,(function (){
var s__37428__$1 = s__37428;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37428__$1);
if(temp__5825__auto__){
var s__37428__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37428__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37428__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37430 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37429 = (0);
while(true){
if((i__37429 < size__5502__auto__)){
var col = cljs.core._nth(c__5501__auto__,i__37429);
cljs.core.chunk_append(b__37430,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["filter-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-1.5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),["Filter ",cljs.core.name(col)].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(filters,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__37429,col,c__5501__auto__,size__5502__auto__,b__37430,s__37428__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__37402_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(filters,col,p1__37402_SHARP_.target.value)], null));
});})(i__37429,col,c__5501__auto__,size__5502__auto__,b__37430,s__37428__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null));

var G__37556 = (i__37429 + (1));
i__37429 = G__37556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37430),bb_web_ds_tools$views$datasets$data_table_$_iter__37427(cljs.core.chunk_rest(s__37428__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37430),null);
}
} else {
var col = cljs.core.first(s__37428__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["filter-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-1.5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),["Filter ",cljs.core.name(col)].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(filters,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (col,s__37428__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__37402_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(filters,col,p1__37402_SHARP_.target.value)], null));
});})(col,s__37428__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null),bb_web_ds_tools$views$datasets$data_table_$_iter__37427(cljs.core.rest(s__37428__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(visible_columns);
})()], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$data_table_$_iter__37435(s__37436){
return (new cljs.core.LazySeq(null,(function (){
var s__37436__$1 = s__37436;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37436__$1);
if(temp__5825__auto__){
var s__37436__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37436__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37436__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37438 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37437 = (0);
while(true){
if((i__37437 < size__5502__auto__)){
var row = cljs.core._nth(c__5501__auto__,i__37437);
cljs.core.chunk_append(b__37438,(function (){var row_uuid = new cljs.core.Keyword(null,"_uuid","_uuid",797900280).cljs$core$IFn$_invoke$arity$1(row);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_uuid], null),(function (){var iter__5503__auto__ = ((function (i__37437,row_uuid,row,c__5501__auto__,size__5502__auto__,b__37438,s__37436__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function bb_web_ds_tools$views$datasets$data_table_$_iter__37435_$_iter__37439(s__37440){
return (new cljs.core.LazySeq(null,((function (i__37437,row_uuid,row,c__5501__auto__,size__5502__auto__,b__37438,s__37436__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (){
var s__37440__$1 = s__37440;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37440__$1);
if(temp__5825__auto____$1){
var s__37440__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37440__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__37440__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__37442 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__37441 = (0);
while(true){
if((i__37441 < size__5502__auto____$1)){
var col = cljs.core._nth(c__5501__auto____$1,i__37441);
cljs.core.chunk_append(b__37442,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-transparent focus:",bb_web_ds_tools.theme.bg_input," focus:ring-1 ",bb_web_ds_tools.theme.ring_focus," rounded px-1 outline-none border-0"].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(row,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__37441,i__37437,col,c__5501__auto____$1,size__5502__auto____$1,b__37442,s__37440__$2,temp__5825__auto____$1,row_uuid,row,c__5501__auto__,size__5502__auto__,b__37438,s__37436__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__37403_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),id,row_uuid,col,p1__37403_SHARP_.target.value], null));
});})(i__37441,i__37437,col,c__5501__auto____$1,size__5502__auto____$1,b__37442,s__37440__$2,temp__5825__auto____$1,row_uuid,row,c__5501__auto__,size__5502__auto__,b__37438,s__37436__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null));

var G__37563 = (i__37441 + (1));
i__37441 = G__37563;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37442),bb_web_ds_tools$views$datasets$data_table_$_iter__37435_$_iter__37439(cljs.core.chunk_rest(s__37440__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37442),null);
}
} else {
var col = cljs.core.first(s__37440__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-transparent focus:",bb_web_ds_tools.theme.bg_input," focus:ring-1 ",bb_web_ds_tools.theme.ring_focus," rounded px-1 outline-none border-0"].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(row,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__37437,col,s__37440__$2,temp__5825__auto____$1,row_uuid,row,c__5501__auto__,size__5502__auto__,b__37438,s__37436__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__37403_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),id,row_uuid,col,p1__37403_SHARP_.target.value], null));
});})(i__37437,col,s__37440__$2,temp__5825__auto____$1,row_uuid,row,c__5501__auto__,size__5502__auto__,b__37438,s__37436__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null),bb_web_ds_tools$views$datasets$data_table_$_iter__37435_$_iter__37439(cljs.core.rest(s__37440__$2)));
}
} else {
return null;
}
break;
}
});})(i__37437,row_uuid,row,c__5501__auto__,size__5502__auto__,b__37438,s__37436__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
,null,null));
});})(i__37437,row_uuid,row,c__5501__auto__,size__5502__auto__,b__37438,s__37436__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
;
return iter__5503__auto__(visible_columns);
})()], null);
})());

var G__37565 = (i__37437 + (1));
i__37437 = G__37565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37438),bb_web_ds_tools$views$datasets$data_table_$_iter__37435(cljs.core.chunk_rest(s__37436__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37438),null);
}
} else {
var row = cljs.core.first(s__37436__$2);
return cljs.core.cons((function (){var row_uuid = new cljs.core.Keyword(null,"_uuid","_uuid",797900280).cljs$core$IFn$_invoke$arity$1(row);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_uuid], null),(function (){var iter__5503__auto__ = ((function (row_uuid,row,s__37436__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function bb_web_ds_tools$views$datasets$data_table_$_iter__37435_$_iter__37443(s__37444){
return (new cljs.core.LazySeq(null,(function (){
var s__37444__$1 = s__37444;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37444__$1);
if(temp__5825__auto____$1){
var s__37444__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37444__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37444__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37446 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37445 = (0);
while(true){
if((i__37445 < size__5502__auto__)){
var col = cljs.core._nth(c__5501__auto__,i__37445);
cljs.core.chunk_append(b__37446,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-transparent focus:",bb_web_ds_tools.theme.bg_input," focus:ring-1 ",bb_web_ds_tools.theme.ring_focus," rounded px-1 outline-none border-0"].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(row,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__37445,col,c__5501__auto__,size__5502__auto__,b__37446,s__37444__$2,temp__5825__auto____$1,row_uuid,row,s__37436__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__37403_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),id,row_uuid,col,p1__37403_SHARP_.target.value], null));
});})(i__37445,col,c__5501__auto__,size__5502__auto__,b__37446,s__37444__$2,temp__5825__auto____$1,row_uuid,row,s__37436__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null));

var G__37573 = (i__37445 + (1));
i__37445 = G__37573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37446),bb_web_ds_tools$views$datasets$data_table_$_iter__37435_$_iter__37443(cljs.core.chunk_rest(s__37444__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37446),null);
}
} else {
var col = cljs.core.first(s__37444__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-transparent focus:",bb_web_ds_tools.theme.bg_input," focus:ring-1 ",bb_web_ds_tools.theme.ring_focus," rounded px-1 outline-none border-0"].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(row,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (col,s__37444__$2,temp__5825__auto____$1,row_uuid,row,s__37436__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns){
return (function (p1__37403_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),id,row_uuid,col,p1__37403_SHARP_.target.value], null));
});})(col,s__37444__$2,temp__5825__auto____$1,row_uuid,row,s__37436__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
], null)], null)], null),bb_web_ds_tools$views$datasets$data_table_$_iter__37435_$_iter__37443(cljs.core.rest(s__37444__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_uuid,row,s__37436__$2,temp__5825__auto__,map__37404,map__37404__$1,id,data,columns,view_state,map__37405,map__37405__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__37406,map__37406__$1,page_data,total_rows,start_idx,end_idx,visible_columns))
;
return iter__5503__auto__(visible_columns);
})()], null);
})(),bb_web_ds_tools$views$datasets$data_table_$_iter__37435(cljs.core.rest(s__37436__$2)));
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
bb_web_ds_tools.views.datasets.dataset_view = (function bb_web_ds_tools$views$datasets$dataset_view(dataset){
var view_mode = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(dataset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-state","view-state",-976675614),new cljs.core.Keyword(null,"mode","mode",654403691)], null),new cljs.core.Keyword(null,"table","table",-564943036));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["justify-between ",bb_web_ds_tools.theme.bg_toolbar," p-2 rounded shadow-sm m-4 mt-0 mb-0"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-baseline space-x-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl font-bold bg-transparent ",bb_web_ds_tools.theme.text_accent," border-b border-transparent ",bb_web_ds_tools.theme.border_focus_accent," ",bb_web_ds_tools.theme.outline_none].join(''),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dataset),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__37447_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-dataset-name","bb-web-ds-tools.views.datasets/update-dataset-name",798576715),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dataset),p1__37447_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.text_secondary," text-sm"].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(dataset)))," rows"].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2 items-center"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex rounded bg-black/20 p-1 space-x-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"table","table",-564943036)))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):"opacity-50 hover:opacity-100"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dataset),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"table","table",-564943036)], null));
})], null),"Table"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"portal","portal",2002989957)))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):"opacity-50 hover:opacity-100"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dataset),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"portal","portal",2002989957)], null));
})], null),"Portal"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_button_danger," ",bb_web_ds_tools.theme.bg_button_danger_hover," ",bb_web_ds_tools.theme.text_button_primary].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","delete-dataset","bb-web-ds-tools.views.datasets/delete-dataset",243110744),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dataset)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.dustbin_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5"], null)], null)], null)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"portal","portal",2002989957)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.portal.portal_viewer,dataset], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.data_table,dataset], null))], null);
});
bb_web_ds_tools.views.datasets.dataset_list_item = (function bb_web_ds_tools$views$datasets$dataset_list_item(id,ds,active_id){
var editing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var temp_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds));
return (function (id__$1,ds__$1,active_id__$1){
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id__$1,active_id__$1);
if(cljs.core.truth_(cljs.core.deref(editing_QMARK_))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-2 rounded ",bb_web_ds_tools.theme.bg_input," border ",bb_web_ds_tools.theme.border_focus," flex items-center space-x-2"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow h-6 text-sm py-0",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(temp_name),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__37448_SHARP_){
return cljs.core.reset_BANG_(temp_name,p1__37448_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__37449_SHARP_){
var G__37450 = p1__37449_SHARP_.key;
switch (G__37450) {
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
bb_web_ds_tools.views.datasets.dataset_list = (function bb_web_ds_tools$views$datasets$dataset_list(){
var items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null)));
var active_id = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset-id","bb-web-ds-tools.views.datasets/active-dataset-id",-1144874757)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full ",bb_web_ds_tools.theme.bg_sidebar," flex flex-col"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-4 border-b ",bb_web_ds_tools.theme.border_main].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-lg font-semibold ",bb_web_ds_tools.theme.text_accent," mb-4"].join('')], null),"Datasets"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-full ",bb_web_ds_tools.theme.bg_button," ",bb_web_ds_tools.theme.bg_button_hover," justify-center"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","set-active-dataset-id","bb-web-ds-tools.views.datasets/set-active-dataset-id",1361188762),new cljs.core.Keyword(null,"new","new",-2085437848)], null));
})], null),"+ New Dataset"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow overflow-y-auto p-2 space-y-1"], null),((cljs.core.seq(items))?(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$dataset_list_$_iter__37474(s__37475){
return (new cljs.core.LazySeq(null,(function (){
var s__37475__$1 = s__37475;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37475__$1);
if(temp__5825__auto__){
var s__37475__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37475__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37475__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37477 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37476 = (0);
while(true){
if((i__37476 < size__5502__auto__)){
var vec__37478 = cljs.core._nth(c__5501__auto__,i__37476);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37478,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37478,(1),null);
cljs.core.chunk_append(b__37477,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.dataset_list_item,id,ds,active_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__37597 = (i__37476 + (1));
i__37476 = G__37597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37477),bb_web_ds_tools$views$datasets$dataset_list_$_iter__37474(cljs.core.chunk_rest(s__37475__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37477),null);
}
} else {
var vec__37481 = cljs.core.first(s__37475__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37481,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37481,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.dataset_list_item,id,ds,active_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),bb_web_ds_tools$views$datasets$dataset_list_$_iter__37474(cljs.core.rest(s__37475__$2)));
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
bb_web_ds_tools.views.datasets.panel_render = (function bb_web_ds_tools$views$datasets$panel_render(){
var active_id = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset-id","bb-web-ds-tools.views.datasets/active-dataset-id",-1144874757)], null)));
var active_dataset = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset","bb-web-ds-tools.views.datasets/active-dataset",366618334)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.split_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"1-3","1-3",-870297994)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.dataset_list], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_id,new cljs.core.Keyword(null,"new","new",-2085437848)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.importer_view], null):(cljs.core.truth_(active_dataset)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.dataset_view,active_dataset], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-center ",bb_web_ds_tools.theme.text_muted," mt-20"].join('')], null),"Select a dataset."], null)))], null);
});
bb_web_ds_tools.views.datasets.panel = (function bb_web_ds_tools$views$datasets$panel(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"datasets-panel",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","initialize","bb-web-ds-tools.views.datasets/initialize",2092636843)], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),bb_web_ds_tools.views.datasets.panel_render], null));
});

//# sourceMappingURL=bb_web_ds_tools.views.datasets.js.map
