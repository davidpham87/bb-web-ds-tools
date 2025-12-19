goog.provide('bb_web_ds_tools.views.vega_lite.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","initialize","bb-web-ds-tools.views.vega-lite.events/initialize",-1222516143),(function (db,_){
var user_input_exists_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null));
var component_state_exists_QMARK_ = bb_web_ds_tools.views.vega_lite.common.state_key.cljs$core$IFn$_invoke$arity$1(db);
var G__60870 = db;
var G__60870__$1 = ((cljs.core.not(user_input_exists_QMARK_))?cljs.core.assoc_in(G__60870,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-input","data-input",-1083421732),"",new cljs.core.Keyword(null,"config-input","config-input",-1590708818),bb_web_ds_tools.views.vega_lite.common.default_config_json,new cljs.core.Keyword(null,"config-mode","config-mode",-325176811),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601),null], null)], null)):G__60870);
if(cljs.core.not(component_state_exists_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60870__$1,bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"columnar","columnar",-1122999701),new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652),null,new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545),null,new cljs.core.Keyword(null,"active-left-tab","active-left-tab",49789881),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"active-right-tab","active-right-tab",373601478),new cljs.core.Keyword(null,"plot","plot",2086832225)], null));
} else {
return G__60870__$1;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-data-input","bb-web-ds-tools.views.vega-lite.events/set-data-input",1499556021),(function (db,p__60871){
var vec__60872 = p__60871;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60872,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60872,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"data-input","data-input",-1083421732)], null),val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-config-input","bb-web-ds-tools.views.vega-lite.events/set-config-input",-195817504),(function (db,p__60875){
var vec__60876 = p__60875;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60876,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60876,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"config-input","config-input",-1590708818)], null),val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-config-mode","bb-web-ds-tools.views.vega-lite.events/set-config-mode",-2057938962),(function (db,p__60879){
var vec__60880 = p__60879;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60880,(0),null);
var new_mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60880,(1),null);
var user_input = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var current_mode = new cljs.core.Keyword(null,"config-mode","config-mode",-325176811).cljs$core$IFn$_invoke$arity$1(user_input);
var current_input = new cljs.core.Keyword(null,"config-input","config-input",-1590708818).cljs$core$IFn$_invoke$arity$1(user_input);
var new_input = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_mode,new cljs.core.Keyword(null,"json","json",1279968570))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_mode,new cljs.core.Keyword(null,"edn","edn",1317840885)))))?(function (){try{var obj = JSON.parse(current_input);
var edn_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60884_60941 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60885_60942 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60886_60943 = true;
var _STAR_print_fn_STAR__temp_val__60887_60944 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60886_60943);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60887_60944);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(edn_data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60885_60942);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60884_60941);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}catch (e60883){if((e60883 instanceof Error)){
var ___$1 = e60883;
return current_input;
} else {
throw e60883;

}
}})():((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_mode,new cljs.core.Keyword(null,"edn","edn",1317840885))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_mode,new cljs.core.Keyword(null,"json","json",1279968570)))))?(function (){try{var edn_data = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(current_input);
var obj = cljs.core.clj__GT_js(edn_data);
return JSON.stringify(obj,null,(2));
}catch (e60888){if((e60888 instanceof Error)){
var ___$1 = e60888;
return current_input;
} else {
throw e60888;

}
}})():current_input
));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"config-mode","config-mode",-325176811)], null),new_mode),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"config-input","config-input",-1590708818)], null),new_input);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-active-config-name","bb-web-ds-tools.views.vega-lite.events/set-active-config-name",-1030567933),(function (db,p__60889){
var vec__60890 = p__60889;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60890,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60890,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-format","bb-web-ds-tools.views.vega-lite.events/set-format",-370233380),(function (db,p__60893){
var vec__60894 = p__60893;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60894,(0),null);
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60894,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"format","format",-1306924766)], null),fmt);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-structure","bb-web-ds-tools.views.vega-lite.events/set-structure",234846197),(function (db,p__60897){
var vec__60898 = p__60897;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60898,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60898,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"structure","structure",1563832083)], null),s);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-active-left-tab","bb-web-ds-tools.views.vega-lite.events/set-active-left-tab",-880549579),(function (db,p__60901){
var vec__60902 = p__60901;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60902,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60902,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"active-left-tab","active-left-tab",49789881)], null),tab);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-active-right-tab","bb-web-ds-tools.views.vega-lite.events/set-active-right-tab",688298150),(function (db,p__60905){
var vec__60906 = p__60905;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60906,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60906,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"active-right-tab","active-right-tab",373601478)], null),tab);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","save-config","bb-web-ds-tools.views.vega-lite.events/save-config",549818302),(function (db,p__60909){
var vec__60910 = p__60909;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60910,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60910,(1),null);
var root = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var config = cljs.core.select_keys(root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config-input","config-input",-1590708818),new cljs.core.Keyword(null,"config-mode","config-mode",-325176811)], null));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315),name], null),config),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","load-config","bb-web-ds-tools.views.vega-lite.events/load-config",1873202338),(function (db,p__60914){
var vec__60918 = p__60914;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60918,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60918,(1),null);
var config = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315),name], null));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null),cljs.core.merge,config),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","delete-config","bb-web-ds-tools.views.vega-lite.events/delete-config",223100310),(function (db,p__60923){
var vec__60924 = p__60923;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60924,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60924,(1),null);
var active_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null));
var G__60927 = db;
var G__60927__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__60927,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315)], null),cljs.core.dissoc,name)
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_name,name)){
return cljs.core.assoc_in(G__60927__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null),null);
} else {
return G__60927__$1;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","import-dataset","bb-web-ds-tools.views.vega-lite.events/import-dataset",-1293640811),(function (p__60929,p__60930){
var map__60931 = p__60929;
var map__60931__$1 = cljs.core.__destructure_map(map__60931);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60931__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__60932 = p__60930;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60932,(0),null);
var dataset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60932,(1),null);
var datasets = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938)], null));
var dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datasets,dataset_id);
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(dataset);
var clean_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60928_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60928_SHARP_,new cljs.core.Keyword(null,"_uuid","_uuid",797900280));
}),data);
var data_str = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60936_60945 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60937_60946 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60938_60947 = true;
var _STAR_print_fn_STAR__temp_val__60939_60948 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60938_60947);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60939_60948);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(clean_data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60937_60946);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60936_60945);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"data-input","data-input",-1083421732)], null),data_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"format","format",-1306924766)], null),new cljs.core.Keyword(null,"edn","edn",1317840885)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"structure","structure",1563832083)], null),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"active-left-tab","active-left-tab",49789881)], null),new cljs.core.Keyword(null,"config","config",994861415)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"active-right-tab","active-right-tab",373601478)], null),new cljs.core.Keyword(null,"plot","plot",2086832225)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","parse-data","bb-web-ds-tools.views.vega-lite.events/parse-data",1051780767)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","parse-data","bb-web-ds-tools.views.vega-lite.events/parse-data",1051780767),(function (db,_){
var user_input = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var component_state = bb_web_ds_tools.views.vega_lite.common.state_key.cljs$core$IFn$_invoke$arity$1(db);
var text = new cljs.core.Keyword(null,"data-input","data-input",-1083421732).cljs$core$IFn$_invoke$arity$1(user_input);
var fmt = new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(component_state);
var structure = new cljs.core.Keyword(null,"structure","structure",1563832083).cljs$core$IFn$_invoke$arity$1(component_state);
var parsed = bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IFn$_invoke$arity$3(fmt,structure,text);
var schema = (function (){try{return malli.provider.provide.cljs$core$IFn$_invoke$arity$1(parsed);
}catch (e60940){if((e60940 instanceof Error)){
var e = e60940;
return ["Error inferring schema: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('');
} else {
throw e60940;

}
}})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(db,bb_web_ds_tools.views.vega_lite.common.state_key,cljs.core.assoc,new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652),parsed,new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema], 0));
}));

//# sourceMappingURL=bb_web_ds_tools.views.vega_lite.events.js.map
