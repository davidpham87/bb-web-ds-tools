goog.provide('bb_web_ds_tools.views.vega_lite.common');
bb_web_ds_tools.views.vega_lite.common.state_key = new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","state","bb-web-ds-tools.views.vega-lite/state",-1240646282);
bb_web_ds_tools.views.vega_lite.common.default_config_json = "{\n  \"$schema\": \"https://vega.github.io/schema/vega-lite/v5.json\",\n  \"mark\": \"bar\",\n  \"encoding\": {\n    \"x\": {\"field\": \"col1\", \"type\": \"ordinal\"},\n    \"y\": {\"field\": \"col2\", \"type\": \"quantitative\"}\n  }\n}";
/**
 * Limits the data for preview to the first 100 observations.
 */
bb_web_ds_tools.views.vega_lite.common.limit_preview = (function bb_web_ds_tools$views$vega_lite$common$limit_preview(data){
var limit = (100);
if(cljs.core.sequential_QMARK_(data)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,data));
} else {
if(cljs.core.map_QMARK_(data)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60866){
var vec__60867 = p__60866;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60867,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60867,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.sequential_QMARK_(v))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,v)):v)], null);
}),data));
} else {
return data;

}
}
});

//# sourceMappingURL=bb_web_ds_tools.views.vega_lite.common.js.map
