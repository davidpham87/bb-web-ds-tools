var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./reagent.core.js");
require("./re_frame.core.js");
require("./clojure.string.js");
require("./bb_web_ds_tools.components.common.js");
require("./bb_web_ds_tools.components.editor.js");
require("./bb_web_ds_tools.components.layout.js");
require("./bb_web_ds_tools.components.layout.tool_view.js");
require("./bb_web_ds_tools.components.navigation.js");
require("./bb_web_ds_tools.portal.js");
require("./bb_web_ds_tools.events.settings.js");
require("./bb_web_ds_tools.theme.js");
require("./bb_web_ds_tools.utils.dataset_processing.js");
require("./bb_web_ds_tools.workspaces.persistence.js");
require("./bb_web_ds_tools.utils.io.js");
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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.views.datasets.js");

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
var len__5749__auto___56806 = arguments.length;
var i__5750__auto___56807 = (0);
while(true){
if((i__5750__auto___56807 < len__5749__auto___56806)){
args__5755__auto__.push((arguments[i__5750__auto___56807]));

var G__56808 = (i__5750__auto___56807 + (1));
i__5750__auto___56807 = G__56808;
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
(bb_web_ds_tools.views.datasets.deep_merge.cljs$lang$applyTo = (function (seq56418){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56418));
}));

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","initialize","bb-web-ds-tools.views.datasets/initialize",2092636843),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null),(function (p1__56430_SHARP_){
return bb_web_ds_tools.views.datasets.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__56430_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"New Dataset",new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"columnar","columnar",-1122999701),new cljs.core.Keyword(null,"override-norm?","override-norm?",-1769899077),false], null)], null)], 0));
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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset","bb-web-ds-tools.views.datasets/active-dataset",366618334),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset-id","bb-web-ds-tools.views.datasets/active-dataset-id",-1144874757)], null),(function (p__56436){
var vec__56437 = p__56436;
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56437,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56437,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(items,id);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","dataset-list-state","bb-web-ds-tools.views.datasets/dataset-list-state",381011768),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset-id","bb-web-ds-tools.views.datasets/active-dataset-id",-1144874757)], null),(function (p__56441,_){
var vec__56442 = p__56441;
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56442,(0),null);
var active_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56442,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"active-id","active-id",-59238656),active_id], null);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","panel-state","bb-web-ds-tools.views.datasets/panel-state",-1661363564),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset-id","bb-web-ds-tools.views.datasets/active-dataset-id",-1144874757)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","active-dataset","bb-web-ds-tools.views.datasets/active-dataset",366618334)], null),(function (p__56446,_){
var vec__56447 = p__56446;
var active_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56447,(0),null);
var active_dataset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56447,(1),null);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","set-active-dataset-id","bb-web-ds-tools.views.datasets/set-active-dataset-id",1361188762),(function (db,p__56452){
var vec__56453 = p__56452;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56453,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56453,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"active-dataset-id","active-dataset-id",-735937827)], null),id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-new-dataset-state","bb-web-ds-tools.views.datasets/update-new-dataset-state",-1930125405),(function (db,p__56456){
var vec__56457 = p__56456;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56457,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56457,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56457,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301),k], null),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),(function (db,p__56462){
var vec__56463 = p__56462;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56463,(0),null);
var map__56466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56463,(1),null);
var map__56466__$1 = cljs.core.__destructure_map(map__56466);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56466__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56466__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var norm_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56466__$1,new cljs.core.Keyword(null,"norm-config","norm-config",1030876611));
var id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var valid_data = ((cljs.core.map_QMARK_(data))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null):((((cljs.core.coll_QMARK_(data)) && (cljs.core.seq(data))))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
if(cljs.core.map_QMARK_(row)){
return row;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),row], null);
}
}),data):cljs.core.PersistentVector.EMPTY
));
var normalized_data = (cljs.core.truth_(norm_config)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,bb_web_ds_tools.utils.dataset_processing.normalize_column_name(k,norm_config),v);
}),cljs.core.PersistentArrayMap.EMPTY,row);
}),valid_data):valid_data);
var data_with_ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56461_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56461_SHARP_,new cljs.core.Keyword(null,"_uuid","_uuid",797900280),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}),normalized_data);
var columns = ((cljs.core.seq(normalized_data))?cljs.core.keys(cljs.core.first(normalized_data)):cljs.core.PersistentVector.EMPTY);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938),id], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5025__auto__ = name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Untitled Dataset";
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),data_with_ids,new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"view-state","view-state",-976675614),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page","page",849072397),(0),new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959),(10),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"table","table",-564943036)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"active-dataset-id","active-dataset-id",-735937827)], null),id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","delete-dataset","bb-web-ds-tools.views.datasets/delete-dataset",243110744),(function (db,p__56477){
var vec__56479 = p__56477;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56479,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56479,(1),null);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.dissoc,id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"active-dataset-id","active-dataset-id",-735937827)], null),new cljs.core.Keyword(null,"new","new",-2085437848));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-dataset-name","bb-web-ds-tools.views.datasets/update-dataset-name",798576715),(function (db,p__56487){
var vec__56489 = p__56487;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56489,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56489,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56489,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938),id,new cljs.core.Keyword(null,"name","name",1843675177)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","patch-datasets","bb-web-ds-tools.views.datasets/patch-datasets",-67060040),(function (db,p__56493){
var vec__56495 = p__56493;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56495,(0),null);
var patch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56495,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.merge,patch);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","patch-datasets-from-r","bb-web-ds-tools.views.datasets/patch-datasets-from-r",-125752359),(function (db,p__56503){
var vec__56504 = p__56503;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56504,(0),null);
var r_datasets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56504,(1),null);
var current_items = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938)], null));
var name_to_id = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__56509){
var vec__56510 = p__56509;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56510,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56510,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),id);
}),cljs.core.PersistentArrayMap.EMPTY,current_items);
var updates = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__56514){
var vec__56516 = p__56514;
var ds_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56516,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56516,(1),null);
var existing_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(name_to_id,ds_name);
var id = (function (){var or__5025__auto__ = existing_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
}
})();
var normalized_data = ((cljs.core.map_QMARK_(data))?bb_web_ds_tools.utils.dataset_processing.normalize_columnar(data):((cljs.core.sequential_QMARK_(data))?cljs.core.vec(data):cljs.core.PersistentVector.EMPTY
));
var data_with_ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56499_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"_uuid","_uuid",797900280).cljs$core$IFn$_invoke$arity$1(p1__56499_SHARP_))){
return p1__56499_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56499_SHARP_,new cljs.core.Keyword(null,"_uuid","_uuid",797900280),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}
}),normalized_data);
var columns = ((cljs.core.seq(data_with_ids))?cljs.core.keys(cljs.core.first(data_with_ids)):cljs.core.PersistentVector.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),ds_name,new cljs.core.Keyword(null,"data","data",-232669377),data_with_ids,new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"view-state","view-state",-976675614),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(current_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"view-state","view-state",-976675614)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page","page",849072397),(0),new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959),(10),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"table","table",-564943036)], null))], null));
}),cljs.core.PersistentArrayMap.EMPTY,r_datasets);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.merge,updates);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),(function (db,p__56526){
var vec__56527 = p__56526;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56527,(0),null);
var dataset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56527,(1),null);
var row_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56527,(2),null);
var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56527,(3),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56527,(4),null);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),(function (db,p__56532){
var vec__56533 = p__56532;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56533,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56533,(1),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56533,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56533,(3),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938),id,new cljs.core.Keyword(null,"view-state","view-state",-976675614),key], null),value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","fetch-vega-datasets","bb-web-ds-tools.views.datasets/fetch-vega-datasets",202932363),(function (p__56544,_){
var map__56545 = p__56544;
var map__56545__$1 = cljs.core.__destructure_map(map__56545);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56545__$1,new cljs.core.Keyword(null,"db","db",993250759));
fetch("https://cdn.jsdelivr.net/npm/vega-datasets/data/").then((function (p1__56539_SHARP_){
return p1__56539_SHARP_.text();
})).then((function (p1__56540_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","receive-vega-datasets","bb-web-ds-tools.views.datasets/receive-vega-datasets",-736628262),p1__56540_SHARP_], null));
})).catch((function (p1__56541_SHARP_){
return console.error("Failed to fetch vega datasets list",p1__56541_SHARP_);
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"loading-vega-list?","loading-vega-list?",-1403989695)], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","receive-vega-datasets","bb-web-ds-tools.views.datasets/receive-vega-datasets",-736628262),(function (db,p__56554){
var vec__56556 = p__56554;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56556,(0),null);
var html_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56556,(1),null);
var parser = (new DOMParser());
var doc = parser.parseFromString(html_content,"text/html");
var links = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(doc.querySelectorAll("a"));
var filenames = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56552_SHARP_){
return cljs.core.re_find(/\.(json|csv|tsv|md)$/,p1__56552_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56550_SHARP_){
return p1__56550_SHARP_.innerText;
}),links))));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"vega-datasets-list","vega-datasets-list",-841202224)], null),filenames),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"loading-vega-list?","loading-vega-list?",-1403989695)], null),false);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","fetch-vega-dataset","bb-web-ds-tools.views.datasets/fetch-vega-dataset",1814090652),(function (p__56567,p__56568){
var map__56570 = p__56567;
var map__56570__$1 = cljs.core.__destructure_map(map__56570);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56570__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56571 = p__56568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56571,(0),null);
var filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56571,(1),null);
var url = ["https://cdn.jsdelivr.net/npm/vega-datasets@3/data/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('');
fetch(url).then((function (p1__56562_SHARP_){
return p1__56562_SHARP_.text();
})).then((function (p1__56563_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","receive-vega-dataset-content","bb-web-ds-tools.views.datasets/receive-vega-dataset-content",-385162532),filename,p1__56563_SHARP_], null));
})).catch((function (p1__56564_SHARP_){
return console.error("Failed to fetch vega dataset",p1__56564_SHARP_);
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","datasets","bb-web-ds-tools.views.datasets/datasets",-1461208347),new cljs.core.Keyword(null,"loading-vega-dataset?","loading-vega-dataset?",-1002270211)], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.datasets","receive-vega-dataset-content","bb-web-ds-tools.views.datasets/receive-vega-dataset-content",-385162532),(function (db,p__56579){
var vec__56580 = p__56579;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56580,(0),null);
var filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56580,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56580,(2),null);
var extension = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(filename,/\./));
var format = (function (){var G__56585 = extension;
switch (G__56585) {
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
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301),new cljs.core.Keyword(null,"text","text",-1790561697)], null),content),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301),new cljs.core.Keyword(null,"name","name",1843675177)], null),filename),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301),new cljs.core.Keyword(null,"format","format",-1306924766)], null),format),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"new-dataset-state","new-dataset-state",1109324301),new cljs.core.Keyword(null,"structure","structure",1563832083)], null),(cljs.core.truth_((function (){var fexpr__56588 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"csv","csv",-1164440893),null,new cljs.core.Keyword(null,"tsv","tsv",-1254214356),null], null), null);
return (fexpr__56588.cljs$core$IFn$_invoke$arity$1 ? fexpr__56588.cljs$core$IFn$_invoke$arity$1(format) : fexpr__56588.call(null,format));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.text_primary," px-4 py-2 rounded border ",bb_web_ds_tools.theme.border_default].join('')], null),"Select Columns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute hidden group-hover:block ",bb_web_ds_tools.theme.bg_input," border ",bb_web_ds_tools.theme.border_default," p-2 rounded shadow-lg z-10 w-48 max-h-60 overflow-y-auto"].join('')], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$column_toggle_dropdown_$_iter__56594(s__56595){
return (new cljs.core.LazySeq(null,(function (){
var s__56595__$1 = s__56595;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56595__$1);
if(temp__5825__auto__){
var s__56595__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56595__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56595__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56597 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56596 = (0);
while(true){
if((i__56596 < size__5502__auto__)){
var col = cljs.core._nth(c__5501__auto__,i__56596);
cljs.core.chunk_append(b__56597,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center space-x-2 p-1 ",bb_web_ds_tools.theme.bg_item_hover].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"w-auto",new cljs.core.Keyword(null,"checked","checked",-50955819),(!(cljs.core.contains_QMARK_(hidden_columns,col))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__56596,col,c__5501__auto__,size__5502__auto__,b__56597,s__56595__$2,temp__5825__auto__){
return (function (){
if(cljs.core.contains_QMARK_(hidden_columns,col)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(hidden_columns,col)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(hidden_columns,col)], null));
}
});})(i__56596,col,c__5501__auto__,size__5502__auto__,b__56597,s__56595__$2,temp__5825__auto__))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),bb_web_ds_tools.theme.text_primary], null),cljs.core.name(col)], null)], null));

var G__56810 = (i__56596 + (1));
i__56596 = G__56810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56597),bb_web_ds_tools$views$datasets$column_toggle_dropdown_$_iter__56594(cljs.core.chunk_rest(s__56595__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56597),null);
}
} else {
var col = cljs.core.first(s__56595__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center space-x-2 p-1 ",bb_web_ds_tools.theme.bg_item_hover].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"w-auto",new cljs.core.Keyword(null,"checked","checked",-50955819),(!(cljs.core.contains_QMARK_(hidden_columns,col))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (col,s__56595__$2,temp__5825__auto__){
return (function (){
if(cljs.core.contains_QMARK_(hidden_columns,col)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(hidden_columns,col)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(hidden_columns,col)], null));
}
});})(col,s__56595__$2,temp__5825__auto__))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),bb_web_ds_tools.theme.text_primary], null),cljs.core.name(col)], null)], null),bb_web_ds_tools$views$datasets$column_toggle_dropdown_$_iter__56594(cljs.core.rest(s__56595__$2)));
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
var default_norm_config = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","column-normalizer","bb-web-ds-tools.events.settings/column-normalizer",-462853964)], null));
var vega_list = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","vega-datasets-list","bb-web-ds-tools.views.datasets/vega-datasets-list",-168017942)], null));
var loading_list_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","loading-vega-list?","bb-web-ds-tools.views.datasets/loading-vega-list?",-2047809625)], null));
var loading_dataset_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","loading-vega-dataset?","bb-web-ds-tools.views.datasets/loading-vega-dataset?",-35488745)], null));
return (function (){
var map__56621 = cljs.core.deref(state);
var map__56621__$1 = cljs.core.__destructure_map(map__56621);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56621__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var name_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56621__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56621__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var structure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56621__$1,new cljs.core.Keyword(null,"structure","structure",1563832083));
var override_norm_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56621__$1,new cljs.core.Keyword(null,"override-norm?","override-norm?",-1769899077));
var norm_case = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56621__$1,new cljs.core.Keyword(null,"norm-case","norm-case",165299926));
var norm_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56621__$1,new cljs.core.Keyword(null,"norm-output","norm-output",2009733096));
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
var norm_config = (cljs.core.truth_(override_norm_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),(function (){var or__5025__auto__ = norm_case;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"case","case",1143702196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(default_norm_config));
}
})(),new cljs.core.Keyword(null,"output","output",-1105869043),(function (){var or__5025__auto__ = norm_output;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(default_norm_config));
}
})()], null):cljs.core.deref(default_norm_config));
var set_state = (function (k,v){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-new-dataset-state","bb-web-ds-tools.views.datasets/update-new-dataset-state",-1930125405),k,v], null));
});
var supported_structures = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fmt,new cljs.core.Keyword(null,"text","text",-1790561697)))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),null,new cljs.core.Keyword(null,"lines","lines",-700165781),null], null), null):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"csv","csv",-1164440893),null,new cljs.core.Keyword(null,"tsv","tsv",-1254214356),null], null), null),fmt))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columnar","columnar",-1122999701),null], null), null):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"yaml","yaml",2065170959),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"json","json",1279968570),null], null), null),fmt))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tree","tree",-196312028),null,new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974),null,new cljs.core.Keyword(null,"columnar","columnar",-1122999701),null,new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),null], null), null):new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974),null,new cljs.core.Keyword(null,"columnar","columnar",-1122999701),null,new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),null], null), null)
)));
var struct_labels = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"columnar","columnar",-1122999701),"Columnar",new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),"Row (Maps)",new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974),"Array (Arrays)",new cljs.core.Keyword(null,"tree","tree",-196312028),"Tree (Raw)",new cljs.core.Keyword(null,"lines","lines",-700165781),"Lines",new cljs.core.Keyword(null,"raw","raw",1604651272),"Raw Text"], null);
if((((cljs.core.deref(vega_list) == null)) && (cljs.core.not(cljs.core.deref(loading_list_QMARK_))))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","fetch-vega-datasets","bb-web-ds-tools.views.datasets/fetch-vega-datasets",202932363)], null));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.tool_view.tool_view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Create New Dataset",new cljs.core.Keyword(null,"wiki-key","wiki-key",-1495409073),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center space-x-2"], null),(cljs.core.truth_(cljs.core.deref(loading_list_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm text-gray-500"], null),"Loading datasets..."], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm border rounded p-1 max-w-[150px] ",bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.text_primary," ",bb_web_ds_tools.theme.border_default].join(''),new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56613_SHARP_){
if(cljs.core.truth_(cljs.core.not_empty(p1__56613_SHARP_.target.value))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","fetch-vega-dataset","bb-web-ds-tools.views.datasets/fetch-vega-dataset",1814090652),p1__56613_SHARP_.target.value], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"Select Example Data..."], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$importer_view_$_iter__56622(s__56623){
return (new cljs.core.LazySeq(null,(function (){
var s__56623__$1 = s__56623;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56623__$1);
if(temp__5825__auto__){
var s__56623__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56623__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56623__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56625 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56624 = (0);
while(true){
if((i__56624 < size__5502__auto__)){
var ds = cljs.core._nth(c__5501__auto__,i__56624);
cljs.core.chunk_append(b__56625,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),ds,new cljs.core.Keyword(null,"value","value",305978217),ds], null),ds], null));

var G__56817 = (i__56624 + (1));
i__56624 = G__56817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56625),bb_web_ds_tools$views$datasets$importer_view_$_iter__56622(cljs.core.chunk_rest(s__56623__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56625),null);
}
} else {
var ds = cljs.core.first(s__56623__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),ds,new cljs.core.Keyword(null,"value","value",305978217),ds], null),ds], null),bb_web_ds_tools$views$datasets$importer_view_$_iter__56622(cljs.core.rest(s__56623__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.deref(vega_list));
})()], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$importer_view_$_iter__56630(s__56631){
return (new cljs.core.LazySeq(null,(function (){
var s__56631__$1 = s__56631;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56631__$1);
if(temp__5825__auto__){
var s__56631__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56631__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56631__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56633 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56632 = (0);
while(true){
if((i__56632 < size__5502__auto__)){
var f = cljs.core._nth(c__5501__auto__,i__56632);
cljs.core.chunk_append(b__56633,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"key","key",-1516042587),f,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fmt,f))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56632,f,c__5501__auto__,size__5502__auto__,b__56633,s__56631__$2,temp__5825__auto__,map__56621,map__56621__$1,fmt,name_val,text,structure,override_norm_QMARK_,norm_case,norm_output,structure__$1,dataset_name,norm_config,set_state,supported_structures,struct_labels,state,default_norm_config,vega_list,loading_list_QMARK_,loading_dataset_QMARK_){
return (function (){
set_state(new cljs.core.Keyword(null,"format","format",-1306924766),f);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"text","text",-1790561697))){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"lines","lines",-700165781));
} else {
if(cljs.core.truth_((function (){var fexpr__56642 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"csv","csv",-1164440893),null,new cljs.core.Keyword(null,"tsv","tsv",-1254214356),null], null), null);
return (fexpr__56642.cljs$core$IFn$_invoke$arity$1 ? fexpr__56642.cljs$core$IFn$_invoke$arity$1(f) : fexpr__56642.call(null,f));
})())){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
} else {
if(cljs.core.truth_((function (){var fexpr__56643 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"yaml","yaml",2065170959),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"json","json",1279968570),null], null), null);
return (fexpr__56643.cljs$core$IFn$_invoke$arity$1 ? fexpr__56643.cljs$core$IFn$_invoke$arity$1(f) : fexpr__56643.call(null,f));
})())){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284));
} else {
return null;
}
}
}
});})(i__56632,f,c__5501__auto__,size__5502__auto__,b__56633,s__56631__$2,temp__5825__auto__,map__56621,map__56621__$1,fmt,name_val,text,structure,override_norm_QMARK_,norm_case,norm_output,structure__$1,dataset_name,norm_config,set_state,supported_structures,struct_labels,state,default_norm_config,vega_list,loading_list_QMARK_,loading_dataset_QMARK_))
], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?"MD":clojure.string.upper_case(cljs.core.name(f)))], null));

var G__56833 = (i__56632 + (1));
i__56632 = G__56833;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56633),bb_web_ds_tools$views$datasets$importer_view_$_iter__56630(cljs.core.chunk_rest(s__56631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56633),null);
}
} else {
var f = cljs.core.first(s__56631__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"key","key",-1516042587),f,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fmt,f))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (f,s__56631__$2,temp__5825__auto__,map__56621,map__56621__$1,fmt,name_val,text,structure,override_norm_QMARK_,norm_case,norm_output,structure__$1,dataset_name,norm_config,set_state,supported_structures,struct_labels,state,default_norm_config,vega_list,loading_list_QMARK_,loading_dataset_QMARK_){
return (function (){
set_state(new cljs.core.Keyword(null,"format","format",-1306924766),f);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"text","text",-1790561697))){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"lines","lines",-700165781));
} else {
if(cljs.core.truth_((function (){var fexpr__56648 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"csv","csv",-1164440893),null,new cljs.core.Keyword(null,"tsv","tsv",-1254214356),null], null), null);
return (fexpr__56648.cljs$core$IFn$_invoke$arity$1 ? fexpr__56648.cljs$core$IFn$_invoke$arity$1(f) : fexpr__56648.call(null,f));
})())){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
} else {
if(cljs.core.truth_((function (){var fexpr__56649 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"yaml","yaml",2065170959),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"json","json",1279968570),null], null), null);
return (fexpr__56649.cljs$core$IFn$_invoke$arity$1 ? fexpr__56649.cljs$core$IFn$_invoke$arity$1(f) : fexpr__56649.call(null,f));
})())){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284));
} else {
return null;
}
}
}
});})(f,s__56631__$2,temp__5825__auto__,map__56621,map__56621__$1,fmt,name_val,text,structure,override_norm_QMARK_,norm_case,norm_output,structure__$1,dataset_name,norm_config,set_state,supported_structures,struct_labels,state,default_norm_config,vega_list,loading_list_QMARK_,loading_dataset_QMARK_))
], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?"MD":clojure.string.upper_case(cljs.core.name(f)))], null),bb_web_ds_tools$views$datasets$importer_view_$_iter__56630(cljs.core.rest(s__56631__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"yaml","yaml",2065170959),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"text","text",-1790561697)], null));
})()], null)], null),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col space-y-4 h-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),dataset_name,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Dataset Name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56615_SHARP_){
return set_state(new cljs.core.Keyword(null,"name","name",1843675177),p1__56615_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center space-x-4 flex-wrap gap-y-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-baseline space-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm ",bb_web_ds_tools.theme.text_primary].join('')], null),"Structure:"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$importer_view_$_iter__56653(s__56654){
return (new cljs.core.LazySeq(null,(function (){
var s__56654__$1 = s__56654;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56654__$1);
if(temp__5825__auto__){
var s__56654__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56654__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56654__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56656 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56655 = (0);
while(true){
if((i__56655 < size__5502__auto__)){
var s = cljs.core._nth(c__5501__auto__,i__56655);
cljs.core.chunk_append(b__56656,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(cljs.core.contains_QMARK_(supported_structures,s))),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(structure__$1,s))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):(((!(cljs.core.contains_QMARK_(supported_structures,s))))?"hidden":"")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56655,s,c__5501__auto__,size__5502__auto__,b__56656,s__56654__$2,temp__5825__auto__,map__56621,map__56621__$1,fmt,name_val,text,structure,override_norm_QMARK_,norm_case,norm_output,structure__$1,dataset_name,norm_config,set_state,supported_structures,struct_labels,state,default_norm_config,vega_list,loading_list_QMARK_,loading_dataset_QMARK_){
return (function (){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),s);
});})(i__56655,s,c__5501__auto__,size__5502__auto__,b__56656,s__56654__$2,temp__5825__auto__,map__56621,map__56621__$1,fmt,name_val,text,structure,override_norm_QMARK_,norm_case,norm_output,structure__$1,dataset_name,norm_config,set_state,supported_structures,struct_labels,state,default_norm_config,vega_list,loading_list_QMARK_,loading_dataset_QMARK_))
], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(struct_labels,s)], null));

var G__56842 = (i__56655 + (1));
i__56655 = G__56842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56656),bb_web_ds_tools$views$datasets$importer_view_$_iter__56653(cljs.core.chunk_rest(s__56654__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56656),null);
}
} else {
var s = cljs.core.first(s__56654__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(cljs.core.contains_QMARK_(supported_structures,s))),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(structure__$1,s))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):(((!(cljs.core.contains_QMARK_(supported_structures,s))))?"hidden":"")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,s__56654__$2,temp__5825__auto__,map__56621,map__56621__$1,fmt,name_val,text,structure,override_norm_QMARK_,norm_case,norm_output,structure__$1,dataset_name,norm_config,set_state,supported_structures,struct_labels,state,default_norm_config,vega_list,loading_list_QMARK_,loading_dataset_QMARK_){
return (function (){
return set_state(new cljs.core.Keyword(null,"structure","structure",1563832083),s);
});})(s,s__56654__$2,temp__5825__auto__,map__56621,map__56621__$1,fmt,name_val,text,structure,override_norm_QMARK_,norm_case,norm_output,structure__$1,dataset_name,norm_config,set_state,supported_structures,struct_labels,state,default_norm_config,vega_list,loading_list_QMARK_,loading_dataset_QMARK_))
], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(struct_labels,s)], null),bb_web_ds_tools$views$datasets$importer_view_$_iter__56653(cljs.core.rest(s__56654__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columnar","columnar",-1122999701),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"raw","raw",1604651272)], null));
})()], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fmt,new cljs.core.Keyword(null,"text","text",-1790561697)))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-400 p-2 bg-black/10 rounded space-y-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Work directly on text files. Load as 'Lines' (split by newline) or 'Raw' (single text block)."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-mono"], null),";; Example: Slurp (simulated via raw text)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-mono"], null),"(def content (-> @user/datasets :ds-id :data first :text))"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-mono"], null),";; Example: Regex Match"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-mono"], null),"(re-seq #\"[0-9]+\" content)"], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["space-x-2 text-sm ",bb_web_ds_tools.theme.text_primary," items-center"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_info,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return set_state(new cljs.core.Keyword(null,"text","text",-1790561697),bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IFn$_invoke$arity$2(fmt,structure__$1));
})], null),"Load Local Example"], null),(cljs.core.truth_(cljs.core.deref(loading_dataset_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs animate-pulse text-yellow-500"], null),"Fetching..."], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center gap-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xs ",bb_web_ds_tools.theme.text_secondary].join('')], null),"CLI: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-black/20 p-1 rounded"], null),"bb -x bb-web-ds-tools.cli.datasets/convert"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_button_primary," ",bb_web_ds_tools.theme.bg_button_primary_hover," text-white px-4"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var parsed = bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IFn$_invoke$arity$3(fmt,structure__$1,text);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),dataset_name,new cljs.core.Keyword(null,"data","data",-232669377),parsed,new cljs.core.Keyword(null,"norm-config","norm-config",1030876611),norm_config], null)], null));
})], null),"Create"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 space-y-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center space-x-2 mb-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"w-auto",new cljs.core.Keyword(null,"checked","checked",-50955819),override_norm_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return set_state(new cljs.core.Keyword(null,"override-norm?","override-norm?",-1769899077),cljs.core.not(override_norm_QMARK_));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm font-bold"], null),"Override Column Normalization"], null)], null),(cljs.core.truth_(override_norm_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center space-x-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs block mb-1 text-gray-400"], null),"Case"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm border rounded p-1 ",bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.text_primary," ",bb_web_ds_tools.theme.border_default].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(new cljs.core.Keyword(null,"case","case",1143702196).cljs$core$IFn$_invoke$arity$1(norm_config)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56619_SHARP_){
return set_state(new cljs.core.Keyword(null,"norm-case","norm-case",165299926),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__56619_SHARP_.target.value));
})], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$importer_view_$_iter__56678(s__56679){
return (new cljs.core.LazySeq(null,(function (){
var s__56679__$1 = s__56679;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56679__$1);
if(temp__5825__auto__){
var s__56679__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56679__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56679__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56681 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56680 = (0);
while(true){
if((i__56680 < size__5502__auto__)){
var c = cljs.core._nth(c__5501__auto__,i__56680);
cljs.core.chunk_append(b__56681,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),c,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(c)], null),cljs.core.name(c)], null));

var G__56855 = (i__56680 + (1));
i__56680 = G__56855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56681),bb_web_ds_tools$views$datasets$importer_view_$_iter__56678(cljs.core.chunk_rest(s__56679__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56681),null);
}
} else {
var c = cljs.core.first(s__56679__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),c,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(c)], null),cljs.core.name(c)], null),bb_web_ds_tools$views$datasets$importer_view_$_iter__56678(cljs.core.rest(s__56679__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283)], null));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs block mb-1 text-gray-400"], null),"Output"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm border rounded p-1 ",bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.text_primary," ",bb_web_ds_tools.theme.border_default].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(norm_config)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56620_SHARP_){
return set_state(new cljs.core.Keyword(null,"norm-output","norm-output",2009733096),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__56620_SHARP_.target.value));
})], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$importer_view_$_iter__56688(s__56689){
return (new cljs.core.LazySeq(null,(function (){
var s__56689__$1 = s__56689;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56689__$1);
if(temp__5825__auto__){
var s__56689__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56689__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56689__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56691 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56690 = (0);
while(true){
if((i__56690 < size__5502__auto__)){
var o = cljs.core._nth(c__5501__auto__,i__56690);
cljs.core.chunk_append(b__56691,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),o,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(o)], null),cljs.core.name(o)], null));

var G__56858 = (i__56690 + (1));
i__56690 = G__56858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56691),bb_web_ds_tools$views$datasets$importer_view_$_iter__56688(cljs.core.chunk_rest(s__56689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56691),null);
}
} else {
var o = cljs.core.first(s__56689__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),o,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(o)], null),cljs.core.name(o)], null),bb_web_ds_tools$views$datasets$importer_view_$_iter__56688(cljs.core.rest(s__56689__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null));
})()], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow ",bb_web_ds_tools.theme.bg_input," rounded overflow-hidden shadow-inner border ",bb_web_ds_tools.theme.border_default].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"language","language",-1591107564),(function (){var G__56701 = fmt;
var G__56701__$1 = (((G__56701 instanceof cljs.core.Keyword))?G__56701.fqn:null);
switch (G__56701__$1) {
case "json":
return "json";

break;
case "edn":
return "clojure";

break;
case "markdown":
return "markdown";

break;
case "yaml":
return "yaml";

break;
default:
return "plaintext";

}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-new-dataset-state","bb-web-ds-tools.views.datasets/update-new-dataset-state",-1930125405),new cljs.core.Keyword(null,"text","text",-1790561697)], null)], null)], null)], null)], null)], null)], null);
});
});
/**
 * Renders a single data row.
 */
bb_web_ds_tools.views.datasets.data_row = (function bb_web_ds_tools$views$datasets$data_row(id,row,visible_columns){
var row_uuid = new cljs.core.Keyword(null,"_uuid","_uuid",797900280).cljs$core$IFn$_invoke$arity$1(row);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_uuid], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$data_row_$_iter__56709(s__56710){
return (new cljs.core.LazySeq(null,(function (){
var s__56710__$1 = s__56710;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56710__$1);
if(temp__5825__auto__){
var s__56710__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56710__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56710__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56712 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56711 = (0);
while(true){
if((i__56711 < size__5502__auto__)){
var col = cljs.core._nth(c__5501__auto__,i__56711);
cljs.core.chunk_append(b__56712,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-transparent focus:",bb_web_ds_tools.theme.bg_input," focus:ring-1 ",bb_web_ds_tools.theme.ring_focus," rounded px-1 outline-none border-0"].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(row,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__56711,col,c__5501__auto__,size__5502__auto__,b__56712,s__56710__$2,temp__5825__auto__,row_uuid){
return (function (p1__56705_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),id,row_uuid,col,p1__56705_SHARP_.target.value], null));
});})(i__56711,col,c__5501__auto__,size__5502__auto__,b__56712,s__56710__$2,temp__5825__auto__,row_uuid))
], null)], null)], null));

var G__56867 = (i__56711 + (1));
i__56711 = G__56867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56712),bb_web_ds_tools$views$datasets$data_row_$_iter__56709(cljs.core.chunk_rest(s__56710__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56712),null);
}
} else {
var col = cljs.core.first(s__56710__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-transparent focus:",bb_web_ds_tools.theme.bg_input," focus:ring-1 ",bb_web_ds_tools.theme.ring_focus," rounded px-1 outline-none border-0"].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(row,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (col,s__56710__$2,temp__5825__auto__,row_uuid){
return (function (p1__56705_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),id,row_uuid,col,p1__56705_SHARP_.target.value], null));
});})(col,s__56710__$2,temp__5825__auto__,row_uuid))
], null)], null)], null),bb_web_ds_tools$views$datasets$data_row_$_iter__56709(cljs.core.rest(s__56710__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(visible_columns);
})()], null);
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
var save_modal_open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var new_dataset_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dataset))," (filtered)"].join(''));
return (function (dataset__$1){
var map__56737 = dataset__$1;
var map__56737__$1 = cljs.core.__destructure_map(map__56737);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56737__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56737__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56737__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var view_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56737__$1,new cljs.core.Keyword(null,"view-state","view-state",-976675614));
var map__56738 = view_state;
var map__56738__$1 = cljs.core.__destructure_map(map__56738);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"page","page",849072397));
var rows_per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var hidden_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757));
var map__56739 = bb_web_ds_tools.utils.dataset_processing.process_table_data(data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(view_state,new cljs.core.Keyword(null,"columns","columns",1998437288),columns));
var map__56739__$1 = cljs.core.__destructure_map(map__56739);
var page_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56739__$1,new cljs.core.Keyword(null,"page-data","page-data",1443840710));
var total_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56739__$1,new cljs.core.Keyword(null,"total-rows","total-rows",1745495528));
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56739__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56739__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var visible_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56739__$1,new cljs.core.Keyword(null,"visible-columns","visible-columns",1134718660));
var filtered_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56739__$1,new cljs.core.Keyword(null,"filtered-data","filtered-data",732030032));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-4 p-4"], null),(cljs.core.truth_(cljs.core.deref(save_modal_open_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fixed inset-0 z-50 flex items-center justify-center bg-black/50"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-6 space-y-4 w-96 shadow-xl border border-gray-600"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-bold"], null),"Save Filtered Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium mb-1"], null),"New Dataset Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(new_dataset_name),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56725_SHARP_){
return cljs.core.reset_BANG_(new_dataset_name,p1__56725_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__56726_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__56726_SHARP_.key)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref(new_dataset_name),new cljs.core.Keyword(null,"data","data",-232669377),filtered_data], null)], null));

return cljs.core.reset_BANG_(save_modal_open_QMARK_,false);
} else {
return null;
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-end space-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-gray-600 hover:bg-gray-500 text-white",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(save_modal_open_QMARK_,false);
})], null),"Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_button_primary," ",bb_web_ds_tools.theme.bg_button_primary_hover," text-white"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref(new_dataset_name),new cljs.core.Keyword(null,"data","data",-232669377),filtered_data], null)], null));

return cljs.core.reset_BANG_(save_modal_open_QMARK_,false);
})], null),"Save"], null)], null)], null)], null):null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-wrap gap-4 items-end ",bb_web_ds_tools.theme.bg_toolbar," p-2 rounded shadow-sm"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Rows"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-1",new cljs.core.Keyword(null,"value","value",305978217),rows_per_page,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56728_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"rows-per-page","rows-per-page",249655959),parseInt(p1__56728_SHARP_.target.value)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(5)], null),"5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(10)], null),"10"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(25)], null),"25"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(50)], null),"50"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Columns"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.column_toggle_dropdown,id,columns,hidden_columns], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.seq(filters))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):"opacity-50 cursor-not-allowed"),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_(filters),new cljs.core.Keyword(null,"title","title",636505583),"Save current filtered results as a new dataset",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(new_dataset_name,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dataset__$1))," (filtered)"].join(''));

return cljs.core.reset_BANG_(save_modal_open_QMARK_,true);
})], null),"Save Filtered"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm ",bb_web_ds_tools.theme.text_secondary].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((start_idx + (1))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_idx)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_rows)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"page","page",849072397),(page - (1))], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(page === (0))], null),"Prev"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"page","page",849072397),(page + (1))], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(end_idx >= total_rows)], null),"Next"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.table_container,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.table,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.thead,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tr,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$data_table_$_iter__56757(s__56758){
return (new cljs.core.LazySeq(null,(function (){
var s__56758__$1 = s__56758;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56758__$1);
if(temp__5825__auto__){
var s__56758__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56758__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56758__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56760 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56759 = (0);
while(true){
if((i__56759 < size__5502__auto__)){
var col = cljs.core._nth(c__5501__auto__,i__56759);
cljs.core.chunk_append(b__56760,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.th,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer ",bb_web_ds_tools.theme.bg_item_hover].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56759,col,c__5501__auto__,size__5502__auto__,b__56760,s__56758__$2,temp__5825__auto__,map__56737,map__56737__$1,id,data,columns,view_state,map__56738,map__56738__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__56739,map__56739__$1,page_data,total_rows,start_idx,end_idx,visible_columns,filtered_data,save_modal_open_QMARK_,new_dataset_name){
return (function (){
var new_dir = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),col], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757),new_dir], null));
});})(i__56759,col,c__5501__auto__,size__5502__auto__,b__56760,s__56758__$2,temp__5825__auto__,map__56737,map__56737__$1,id,data,columns,view_state,map__56738,map__56738__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__56739,map__56739__$1,page_data,total_rows,start_idx,end_idx,visible_columns,filtered_data,save_modal_open_QMARK_,new_dataset_name))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.name(col)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,col))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10px] transform translate-y-px"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?"\u25B2":"\u25BC")], null):null)], null)], null));

var G__56875 = (i__56759 + (1));
i__56759 = G__56875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56760),bb_web_ds_tools$views$datasets$data_table_$_iter__56757(cljs.core.chunk_rest(s__56758__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56760),null);
}
} else {
var col = cljs.core.first(s__56758__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.th,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer ",bb_web_ds_tools.theme.bg_item_hover].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (col,s__56758__$2,temp__5825__auto__,map__56737,map__56737__$1,id,data,columns,view_state,map__56738,map__56738__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__56739,map__56739__$1,page_data,total_rows,start_idx,end_idx,visible_columns,filtered_data,save_modal_open_QMARK_,new_dataset_name){
return (function (){
var new_dir = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),col], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"sort-dir","sort-dir",35994757),new_dir], null));
});})(col,s__56758__$2,temp__5825__auto__,map__56737,map__56737__$1,id,data,columns,view_state,map__56738,map__56738__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__56739,map__56739__$1,page_data,total_rows,start_idx,end_idx,visible_columns,filtered_data,save_modal_open_QMARK_,new_dataset_name))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.name(col)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,col))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10px] transform translate-y-px"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?"\u25B2":"\u25BC")], null):null)], null)], null),bb_web_ds_tools$views$datasets$data_table_$_iter__56757(cljs.core.rest(s__56758__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(visible_columns);
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tbody,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tr,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$data_table_$_iter__56765(s__56766){
return (new cljs.core.LazySeq(null,(function (){
var s__56766__$1 = s__56766;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56766__$1);
if(temp__5825__auto__){
var s__56766__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56766__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56766__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56768 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56767 = (0);
while(true){
if((i__56767 < size__5502__auto__)){
var col = cljs.core._nth(c__5501__auto__,i__56767);
cljs.core.chunk_append(b__56768,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["filter-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-1.5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),["Filter ",cljs.core.name(col)," (expr)"].join(''),new cljs.core.Keyword(null,"title","title",636505583),"Enter a value or a Clojure expression (e.g. #(> % 10))",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(filters,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__56767,col,c__5501__auto__,size__5502__auto__,b__56768,s__56766__$2,temp__5825__auto__,map__56737,map__56737__$1,id,data,columns,view_state,map__56738,map__56738__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__56739,map__56739__$1,page_data,total_rows,start_idx,end_idx,visible_columns,filtered_data,save_modal_open_QMARK_,new_dataset_name){
return (function (p1__56731_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(filters,col,p1__56731_SHARP_.target.value)], null));
});})(i__56767,col,c__5501__auto__,size__5502__auto__,b__56768,s__56766__$2,temp__5825__auto__,map__56737,map__56737__$1,id,data,columns,view_state,map__56738,map__56738__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__56739,map__56739__$1,page_data,total_rows,start_idx,end_idx,visible_columns,filtered_data,save_modal_open_QMARK_,new_dataset_name))
], null)], null)], null));

var G__56880 = (i__56767 + (1));
i__56767 = G__56880;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56768),bb_web_ds_tools$views$datasets$data_table_$_iter__56765(cljs.core.chunk_rest(s__56766__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56768),null);
}
} else {
var col = cljs.core.first(s__56766__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.td,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["filter-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-1.5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),["Filter ",cljs.core.name(col)," (expr)"].join(''),new cljs.core.Keyword(null,"title","title",636505583),"Enter a value or a Clojure expression (e.g. #(> % 10))",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(filters,col,""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (col,s__56766__$2,temp__5825__auto__,map__56737,map__56737__$1,id,data,columns,view_state,map__56738,map__56738__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__56739,map__56739__$1,page_data,total_rows,start_idx,end_idx,visible_columns,filtered_data,save_modal_open_QMARK_,new_dataset_name){
return (function (p1__56731_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),id,new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(filters,col,p1__56731_SHARP_.target.value)], null));
});})(col,s__56766__$2,temp__5825__auto__,map__56737,map__56737__$1,id,data,columns,view_state,map__56738,map__56738__$1,page,rows_per_page,filters,hidden_columns,sort_col,sort_dir,map__56739,map__56739__$1,page_data,total_rows,start_idx,end_idx,visible_columns,filtered_data,save_modal_open_QMARK_,new_dataset_name))
], null)], null)], null),bb_web_ds_tools$views$datasets$data_table_$_iter__56765(cljs.core.rest(s__56766__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(visible_columns);
})()], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$data_table_$_iter__56769(s__56770){
return (new cljs.core.LazySeq(null,(function (){
var s__56770__$1 = s__56770;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56770__$1);
if(temp__5825__auto__){
var s__56770__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56770__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56770__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56772 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56771 = (0);
while(true){
if((i__56771 < size__5502__auto__)){
var row = cljs.core._nth(c__5501__auto__,i__56771);
cljs.core.chunk_append(b__56772,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.data_row,id,row,visible_columns], null));

var G__56885 = (i__56771 + (1));
i__56771 = G__56885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56772),bb_web_ds_tools$views$datasets$data_table_$_iter__56769(cljs.core.chunk_rest(s__56770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56772),null);
}
} else {
var row = cljs.core.first(s__56770__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.data_row,id,row,visible_columns], null),bb_web_ds_tools$views$datasets$data_table_$_iter__56769(cljs.core.rest(s__56770__$2)));
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
});
/**
 * Renders the export/download view for a dataset.
 */
bb_web_ds_tools.views.datasets.dataset_export_view = (function bb_web_ds_tools$views$datasets$dataset_export_view(dataset){
var export_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fmt","fmt",332300772),new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"struct","struct",-1314558596),new cljs.core.Keyword(null,"columnar","columnar",-1122999701)], null));
return (function (dataset__$1){
var map__56773 = cljs.core.deref(export_state);
var map__56773__$1 = cljs.core.__destructure_map(map__56773);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56773__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var struct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56773__$1,new cljs.core.Keyword(null,"struct","struct",-1314558596));
var supported_structures = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"csv","csv",-1164440893),null,new cljs.core.Keyword(null,"tsv","tsv",-1254214356),null], null), null),fmt))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columnar","columnar",-1122999701),null], null), null):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"yaml","yaml",2065170959),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"json","json",1279968570),null], null), null),fmt))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tree","tree",-196312028),null,new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974),null,new cljs.core.Keyword(null,"columnar","columnar",-1122999701),null,new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),null], null), null):new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columnar","columnar",-1122999701),null], null), null)
));
var preview = (function (){try{return bb_web_ds_tools.utils.dataset_processing.convert_data(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(dataset__$1),fmt,struct);
}catch (e56774){var e = e56774;
return ["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
}})();
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dataset__$1)),".",cljs.core.name(fmt)].join('');
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.tool_view.tool_view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Export / Download",new cljs.core.Keyword(null,"wiki-key","wiki-key",-1495409073),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col space-y-4 h-full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-row space-x-2"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$dataset_export_view_$_iter__56775(s__56776){
return (new cljs.core.LazySeq(null,(function (){
var s__56776__$1 = s__56776;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56776__$1);
if(temp__5825__auto__){
var s__56776__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56776__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56776__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56778 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56777 = (0);
while(true){
if((i__56777 < size__5502__auto__)){
var f = cljs.core._nth(c__5501__auto__,i__56777);
cljs.core.chunk_append(b__56778,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fmt,f))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56777,f,c__5501__auto__,size__5502__auto__,b__56778,s__56776__$2,temp__5825__auto__,map__56773,map__56773__$1,fmt,struct,supported_structures,preview,filename,export_state){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(export_state,cljs.core.assoc,new cljs.core.Keyword(null,"fmt","fmt",332300772),f);

if(cljs.core.truth_((function (){var fexpr__56779 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"csv","csv",-1164440893),null,new cljs.core.Keyword(null,"tsv","tsv",-1254214356),null], null), null);
return (fexpr__56779.cljs$core$IFn$_invoke$arity$1 ? fexpr__56779.cljs$core$IFn$_invoke$arity$1(f) : fexpr__56779.call(null,f));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(export_state,cljs.core.assoc,new cljs.core.Keyword(null,"struct","struct",-1314558596),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
} else {
if(cljs.core.truth_((function (){var fexpr__56780 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"yaml","yaml",2065170959),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"json","json",1279968570),null], null), null);
return (fexpr__56780.cljs$core$IFn$_invoke$arity$1 ? fexpr__56780.cljs$core$IFn$_invoke$arity$1(f) : fexpr__56780.call(null,f));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(export_state,cljs.core.assoc,new cljs.core.Keyword(null,"struct","struct",-1314558596),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284));
} else {
return null;
}
}
});})(i__56777,f,c__5501__auto__,size__5502__auto__,b__56778,s__56776__$2,temp__5825__auto__,map__56773,map__56773__$1,fmt,struct,supported_structures,preview,filename,export_state))
], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?"MD":clojure.string.upper_case(cljs.core.name(f)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),f], null)));

var G__56901 = (i__56777 + (1));
i__56777 = G__56901;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56778),bb_web_ds_tools$views$datasets$dataset_export_view_$_iter__56775(cljs.core.chunk_rest(s__56776__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56778),null);
}
} else {
var f = cljs.core.first(s__56776__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fmt,f))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (f,s__56776__$2,temp__5825__auto__,map__56773,map__56773__$1,fmt,struct,supported_structures,preview,filename,export_state){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(export_state,cljs.core.assoc,new cljs.core.Keyword(null,"fmt","fmt",332300772),f);

if(cljs.core.truth_((function (){var fexpr__56781 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"csv","csv",-1164440893),null,new cljs.core.Keyword(null,"tsv","tsv",-1254214356),null], null), null);
return (fexpr__56781.cljs$core$IFn$_invoke$arity$1 ? fexpr__56781.cljs$core$IFn$_invoke$arity$1(f) : fexpr__56781.call(null,f));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(export_state,cljs.core.assoc,new cljs.core.Keyword(null,"struct","struct",-1314558596),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
} else {
if(cljs.core.truth_((function (){var fexpr__56782 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"yaml","yaml",2065170959),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"json","json",1279968570),null], null), null);
return (fexpr__56782.cljs$core$IFn$_invoke$arity$1 ? fexpr__56782.cljs$core$IFn$_invoke$arity$1(f) : fexpr__56782.call(null,f));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(export_state,cljs.core.assoc,new cljs.core.Keyword(null,"struct","struct",-1314558596),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284));
} else {
return null;
}
}
});})(f,s__56776__$2,temp__5825__auto__,map__56773,map__56773__$1,fmt,struct,supported_structures,preview,filename,export_state))
], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?"MD":clojure.string.upper_case(cljs.core.name(f)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),f], null)),bb_web_ds_tools$views$datasets$dataset_export_view_$_iter__56775(cljs.core.rest(s__56776__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"yaml","yaml",2065170959),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null));
})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-row items-baseline space-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm ",bb_web_ds_tools.theme.text_primary].join('')], null),"Structure:"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$dataset_export_view_$_iter__56783(s__56784){
return (new cljs.core.LazySeq(null,(function (){
var s__56784__$1 = s__56784;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56784__$1);
if(temp__5825__auto__){
var s__56784__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56784__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56784__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56786 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56785 = (0);
while(true){
if((i__56785 < size__5502__auto__)){
var s = cljs.core._nth(c__5501__auto__,i__56785);
cljs.core.chunk_append(b__56786,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(cljs.core.contains_QMARK_(supported_structures,s))),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(struct,s))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):(((!(cljs.core.contains_QMARK_(supported_structures,s))))?"hidden":"")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56785,s,c__5501__auto__,size__5502__auto__,b__56786,s__56784__$2,temp__5825__auto__,map__56773,map__56773__$1,fmt,struct,supported_structures,preview,filename,export_state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(export_state,cljs.core.assoc,new cljs.core.Keyword(null,"struct","struct",-1314558596),s);
});})(i__56785,s,c__5501__auto__,size__5502__auto__,b__56786,s__56784__$2,temp__5825__auto__,map__56773,map__56773__$1,fmt,struct,supported_structures,preview,filename,export_state))
], null),cljs.core.name(s)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)));

var G__56908 = (i__56785 + (1));
i__56785 = G__56908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56786),bb_web_ds_tools$views$datasets$dataset_export_view_$_iter__56783(cljs.core.chunk_rest(s__56784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56786),null);
}
} else {
var s = cljs.core.first(s__56784__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(cljs.core.contains_QMARK_(supported_structures,s))),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(struct,s))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):(((!(cljs.core.contains_QMARK_(supported_structures,s))))?"hidden":"")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,s__56784__$2,temp__5825__auto__,map__56773,map__56773__$1,fmt,struct,supported_structures,preview,filename,export_state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(export_state,cljs.core.assoc,new cljs.core.Keyword(null,"struct","struct",-1314558596),s);
});})(s,s__56784__$2,temp__5825__auto__,map__56773,map__56773__$1,fmt,struct,supported_structures,preview,filename,export_state))
], null),cljs.core.name(s)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)),bb_web_ds_tools$views$datasets$dataset_export_view_$_iter__56783(cljs.core.rest(s__56784__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columnar","columnar",-1122999701),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974),new cljs.core.Keyword(null,"tree","tree",-196312028)], null));
})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between items-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm text-gray-500"], null),["Preview (",filename,")"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bb_web_ds_tools.utils.io.download_file(preview,filename,(function (){var G__56787 = fmt;
var G__56787__$1 = (((G__56787 instanceof cljs.core.Keyword))?G__56787.fqn:null);
switch (G__56787__$1) {
case "json":
return "application/json";

break;
case "csv":
return "text/csv";

break;
case "tsv":
return "text/tab-separated-values";

break;
case "yaml":
return "text/yaml";

break;
case "edn":
return "application/edn";

break;
case "markdown":
return "text/markdown";

break;
default:
return "text/plain";

}
})());
})], null),"Download"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow ",bb_web_ds_tools.theme.bg_input," rounded overflow-hidden shadow-inner border ",bb_web_ds_tools.theme.border_default].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),preview,new cljs.core.Keyword(null,"language","language",-1591107564),(function (){var G__56788 = fmt;
var G__56788__$1 = (((G__56788 instanceof cljs.core.Keyword))?G__56788.fqn:null);
switch (G__56788__$1) {
case "json":
return "json";

break;
case "edn":
return "clojure";

break;
case "markdown":
return "markdown";

break;
case "yaml":
return "yaml";

break;
case "csv":
case "tsv":
return "csv";

break;
default:
return "plaintext";

}
})(),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true], null)], null)], null)], null)], null)], null);
});
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["justify-between ",bb_web_ds_tools.theme.bg_toolbar," p-2 rounded shadow-sm m-4 mt-0 mb-0"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-baseline space-x-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-2xl font-bold bg-transparent ",bb_web_ds_tools.theme.text_accent," border-b border-transparent ",bb_web_ds_tools.theme.border_focus_accent," ",bb_web_ds_tools.theme.outline_none].join(''),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dataset),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56789_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-dataset-name","bb-web-ds-tools.views.datasets/update-dataset-name",798576715),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dataset),p1__56789_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.text_secondary," text-sm"].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(dataset)))," rows"].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2 items-center"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex rounded bg-black/20 p-1 space-x-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"table","table",-564943036)))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):"opacity-50 hover:opacity-100"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dataset),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"table","table",-564943036)], null));
})], null),"Table"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"portal","portal",2002989957)))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):"opacity-50 hover:opacity-100"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dataset),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"portal","portal",2002989957)], null));
})], null),"Portal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_mode,new cljs.core.Keyword(null,"export","export",214356590)))?[bb_web_ds_tools.theme.bg_button_primary," text-white"].join(''):"opacity-50 hover:opacity-100"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-view-state","bb-web-ds-tools.views.datasets/update-view-state",951614371),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dataset),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"export","export",214356590)], null));
})], null),"Export"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_button_danger," ",bb_web_ds_tools.theme.bg_button_danger_hover," ",bb_web_ds_tools.theme.text_button_primary].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","delete-dataset","bb-web-ds-tools.views.datasets/delete-dataset",243110744),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dataset)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.dustbin_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5"], null)], null)], null)], null)], null),(function (){var G__56790 = view_mode;
var G__56790__$1 = (((G__56790 instanceof cljs.core.Keyword))?G__56790.fqn:null);
switch (G__56790__$1) {
case "portal":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.portal.portal_panel,dataset], null);

break;
case "export":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.dataset_export_view,dataset], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.data_table,dataset], null);

}
})()], null);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-2 rounded ",bb_web_ds_tools.theme.bg_input," border ",bb_web_ds_tools.theme.border_focus," flex items-center space-x-2"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow h-6 text-sm py-0",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(temp_name),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56791_SHARP_){
return cljs.core.reset_BANG_(temp_name,p1__56791_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__56792_SHARP_){
var G__56793 = p1__56792_SHARP_.key;
switch (G__56793) {
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
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
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
var map__56794 = cljs.core.deref(state_sub);
var map__56794__$1 = cljs.core.__destructure_map(map__56794);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56794__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var active_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56794__$1,new cljs.core.Keyword(null,"active-id","active-id",-59238656));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full w-full ",bb_web_ds_tools.theme.bg_sidebar," flex flex-col p-4 border-r border-[#3f3f3f]"].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["pb-4 border-b ",bb_web_ds_tools.theme.border_main," flex flex-col gap-2"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.section_header,"Datasets",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.help_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),bb_web_ds_tools.components.navigation.get_wiki_url(new cljs.core.Keyword(null,"datasets","datasets",1896364419)),new cljs.core.Keyword(null,"title","title",636505583),"Help: Datasets",new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1 !w-5 !h-5 opacity-50 hover:opacity-100"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"gap-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"class","class",-2030961996),["flex-1 ",bb_web_ds_tools.theme.bg_button," ",bb_web_ds_tools.theme.bg_button_hover].join(''),new cljs.core.Keyword(null,"title","title",636505583),"Save all datasets to browser storage",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.workspaces.persistence","save-datasets","bb-web-ds-tools.workspaces.persistence/save-datasets",-553694078)], null));
})], null),"Save All"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"class","class",-2030961996),["flex-1 ",bb_web_ds_tools.theme.bg_button," ",bb_web_ds_tools.theme.bg_button_hover].join(''),new cljs.core.Keyword(null,"title","title",636505583),"Load datasets from browser storage",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.workspaces.persistence","load-datasets","bb-web-ds-tools.workspaces.persistence/load-datasets",425111618)], null));
})], null),"Load All"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"class","class",-2030961996),["w-full ",bb_web_ds_tools.theme.bg_button," ",bb_web_ds_tools.theme.bg_button_hover," justify-center"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","set-active-dataset-id","bb-web-ds-tools.views.datasets/set-active-dataset-id",1361188762),new cljs.core.Keyword(null,"new","new",-2085437848)], null));
})], null),"+ New Dataset"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow overflow-y-auto pt-4 space-y-1"], null),((cljs.core.seq(items))?(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$datasets$dataset_list_$_iter__56795(s__56796){
return (new cljs.core.LazySeq(null,(function (){
var s__56796__$1 = s__56796;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56796__$1);
if(temp__5825__auto__){
var s__56796__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56796__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56796__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56798 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56797 = (0);
while(true){
if((i__56797 < size__5502__auto__)){
var vec__56799 = cljs.core._nth(c__5501__auto__,i__56797);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56799,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56799,(1),null);
cljs.core.chunk_append(b__56798,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.dataset_list_item,id,ds,active_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__56934 = (i__56797 + (1));
i__56797 = G__56934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56798),bb_web_ds_tools$views$datasets$dataset_list_$_iter__56795(cljs.core.chunk_rest(s__56796__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56798),null);
}
} else {
var vec__56802 = cljs.core.first(s__56796__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56802,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56802,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.datasets.dataset_list_item,id,ds,active_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),bb_web_ds_tools$views$datasets$dataset_list_$_iter__56795(cljs.core.rest(s__56796__$2)));
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
var map__56805 = cljs.core.deref(state_sub);
var map__56805__$1 = cljs.core.__destructure_map(map__56805);
var active_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56805__$1,new cljs.core.Keyword(null,"active-id","active-id",-59238656));
var active_dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56805__$1,new cljs.core.Keyword(null,"active-dataset","active-dataset",771380472));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.create_panel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"datasets-panel",new cljs.core.Keyword(null,"init-event","init-event",-2064696416),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","initialize","bb-web-ds-tools.views.datasets/initialize",2092636843)], null),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),bb_web_ds_tools.views.datasets.panel_render], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.datasets.js.map
