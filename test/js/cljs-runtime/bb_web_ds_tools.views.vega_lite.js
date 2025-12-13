goog.provide('bb_web_ds_tools.views.vega_lite');
bb_web_ds_tools.views.vega_lite.default_config_json = "{\n  \"$schema\": \"https://vega.github.io/schema/vega-lite/v5.json\",\n  \"mark\": \"bar\",\n  \"encoding\": {\n    \"x\": {\"field\": \"col1\", \"type\": \"ordinal\"},\n    \"y\": {\"field\": \"col2\", \"type\": \"quantitative\"}\n  }\n}";
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","initialize","bb-web-ds-tools.views.vega-lite/initialize",1758779882),(function (db,_){
var user_input_exists_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null));
var component_state_exists_QMARK_ = new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","vega-lite","bb-web-ds-tools.views.vega-lite/vega-lite",348810215).cljs$core$IFn$_invoke$arity$1(db);
var G__60261 = db;
var G__60261__$1 = ((cljs.core.not(user_input_exists_QMARK_))?cljs.core.assoc_in(G__60261,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","data-input","bb-web-ds-tools.views.vega-lite/data-input",-1679982013),"",new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-input","bb-web-ds-tools.views.vega-lite/config-input",-593303029),bb_web_ds_tools.views.vega_lite.default_config_json,new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-mode","bb-web-ds-tools.views.vega-lite/config-mode",-1590507328),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-config-name","bb-web-ds-tools.views.vega-lite/active-config-name",-1463263112),null], null)], null)):G__60261);
if(cljs.core.not(component_state_exists_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60261__$1,new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","vega-lite","bb-web-ds-tools.views.vega-lite/vega-lite",348810215),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","format","bb-web-ds-tools.views.vega-lite/format",-174777479),new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","structure","bb-web-ds-tools.views.vega-lite/structure",1637845102),new cljs.core.Keyword(null,"columnar","columnar",-1122999701),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","parsed-data","bb-web-ds-tools.views.vega-lite/parsed-data",1101160363),null,new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","inferred-schema","bb-web-ds-tools.views.vega-lite/inferred-schema",3976792),null,new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-left-tab","bb-web-ds-tools.views.vega-lite/active-left-tab",-1047612510),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-right-tab","bb-web-ds-tools.views.vega-lite/active-right-tab",-638097379),new cljs.core.Keyword(null,"plot","plot",2086832225)], null));
} else {
return G__60261__$1;
}
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","user-input-root","bb-web-ds-tools.views.vega-lite/user-input-root",1411762347),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","user-input","bb-web-ds-tools.core/user-input",1937733608)], null),(function (user_input){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(user_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","saved-configs","bb-web-ds-tools.views.vega-lite/saved-configs",-1510444428),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","user-input","bb-web-ds-tools.core/user-input",1937733608)], null),(function (user_input){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(user_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","component-root","bb-web-ds-tools.views.vega-lite/component-root",-1501251861),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","vega-lite","bb-web-ds-tools.views.vega-lite/vega-lite",348810215).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","data-input","bb-web-ds-tools.views.vega-lite/data-input",-1679982013),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","user-input-root","bb-web-ds-tools.views.vega-lite/user-input-root",1411762347)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","data-input","bb-web-ds-tools.views.vega-lite/data-input",-1679982013).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-input","bb-web-ds-tools.views.vega-lite/config-input",-593303029),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","user-input-root","bb-web-ds-tools.views.vega-lite/user-input-root",1411762347)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-input","bb-web-ds-tools.views.vega-lite/config-input",-593303029).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-mode","bb-web-ds-tools.views.vega-lite/config-mode",-1590507328),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","user-input-root","bb-web-ds-tools.views.vega-lite/user-input-root",1411762347)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-mode","bb-web-ds-tools.views.vega-lite/config-mode",-1590507328).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-config-name","bb-web-ds-tools.views.vega-lite/active-config-name",-1463263112),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","user-input-root","bb-web-ds-tools.views.vega-lite/user-input-root",1411762347)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-config-name","bb-web-ds-tools.views.vega-lite/active-config-name",-1463263112).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","format","bb-web-ds-tools.views.vega-lite/format",-174777479),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","component-root","bb-web-ds-tools.views.vega-lite/component-root",-1501251861)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","format","bb-web-ds-tools.views.vega-lite/format",-174777479).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","structure","bb-web-ds-tools.views.vega-lite/structure",1637845102),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","component-root","bb-web-ds-tools.views.vega-lite/component-root",-1501251861)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","structure","bb-web-ds-tools.views.vega-lite/structure",1637845102).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","parsed-data","bb-web-ds-tools.views.vega-lite/parsed-data",1101160363),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","component-root","bb-web-ds-tools.views.vega-lite/component-root",-1501251861)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","parsed-data","bb-web-ds-tools.views.vega-lite/parsed-data",1101160363).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","inferred-schema","bb-web-ds-tools.views.vega-lite/inferred-schema",3976792),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","component-root","bb-web-ds-tools.views.vega-lite/component-root",-1501251861)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","inferred-schema","bb-web-ds-tools.views.vega-lite/inferred-schema",3976792).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-left-tab","bb-web-ds-tools.views.vega-lite/active-left-tab",-1047612510),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","component-root","bb-web-ds-tools.views.vega-lite/component-root",-1501251861)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-left-tab","bb-web-ds-tools.views.vega-lite/active-left-tab",-1047612510).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-right-tab","bb-web-ds-tools.views.vega-lite/active-right-tab",-638097379),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","component-root","bb-web-ds-tools.views.vega-lite/component-root",-1501251861)], null),(function (root){
return new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-right-tab","bb-web-ds-tools.views.vega-lite/active-right-tab",-638097379).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-data-input","bb-web-ds-tools.views.vega-lite/set-data-input",672681982),(function (db,p__60263){
var vec__60264 = p__60263;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60264,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60264,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","data-input","bb-web-ds-tools.views.vega-lite/data-input",-1679982013)], null),val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-config-input","bb-web-ds-tools.views.vega-lite/set-config-input",1175394425),(function (db,p__60267){
var vec__60268 = p__60267;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60268,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60268,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-input","bb-web-ds-tools.views.vega-lite/config-input",-593303029)], null),val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-config-mode","bb-web-ds-tools.views.vega-lite/set-config-mode",1935491083),(function (db,p__60271){
var vec__60272 = p__60271;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60272,(0),null);
var new_mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60272,(1),null);
var user_input = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var current_mode = new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-mode","bb-web-ds-tools.views.vega-lite/config-mode",-1590507328).cljs$core$IFn$_invoke$arity$1(user_input);
var current_input = new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-input","bb-web-ds-tools.views.vega-lite/config-input",-593303029).cljs$core$IFn$_invoke$arity$1(user_input);
var new_input = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_mode,new cljs.core.Keyword(null,"json","json",1279968570))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_mode,new cljs.core.Keyword(null,"edn","edn",1317840885)))))?(function (){try{var obj = JSON.parse(current_input);
var edn_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60276_60369 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60277_60370 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60278_60371 = true;
var _STAR_print_fn_STAR__temp_val__60279_60372 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60278_60371);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60279_60372);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(edn_data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60277_60370);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60276_60369);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}catch (e60275){if((e60275 instanceof Error)){
var ___$1 = e60275;
return current_input;
} else {
throw e60275;

}
}})():((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_mode,new cljs.core.Keyword(null,"edn","edn",1317840885))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_mode,new cljs.core.Keyword(null,"json","json",1279968570)))))?(function (){try{var edn_data = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(current_input);
var obj = cljs.core.clj__GT_js(edn_data);
return JSON.stringify(obj,null,(2));
}catch (e60281){if((e60281 instanceof Error)){
var ___$1 = e60281;
return current_input;
} else {
throw e60281;

}
}})():current_input
));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-mode","bb-web-ds-tools.views.vega-lite/config-mode",-1590507328)], null),new_mode),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-input","bb-web-ds-tools.views.vega-lite/config-input",-593303029)], null),new_input);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-active-config-name","bb-web-ds-tools.views.vega-lite/set-active-config-name",-1337470050),(function (db,p__60282){
var vec__60283 = p__60282;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60283,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60283,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-config-name","bb-web-ds-tools.views.vega-lite/active-config-name",-1463263112)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-format","bb-web-ds-tools.views.vega-lite/set-format",600148309),(function (db,p__60286){
var vec__60287 = p__60286;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60287,(0),null);
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60287,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","vega-lite","bb-web-ds-tools.views.vega-lite/vega-lite",348810215),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","format","bb-web-ds-tools.views.vega-lite/format",-174777479)], null),fmt);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-structure","bb-web-ds-tools.views.vega-lite/set-structure",-607755948),(function (db,p__60290){
var vec__60291 = p__60290;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60291,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60291,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","vega-lite","bb-web-ds-tools.views.vega-lite/vega-lite",348810215),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","structure","bb-web-ds-tools.views.vega-lite/structure",1637845102)], null),s);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-active-left-tab","bb-web-ds-tools.views.vega-lite/set-active-left-tab",300865662),(function (db,p__60294){
var vec__60295 = p__60294;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60295,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60295,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","vega-lite","bb-web-ds-tools.views.vega-lite/vega-lite",348810215),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-left-tab","bb-web-ds-tools.views.vega-lite/active-left-tab",-1047612510)], null),tab);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-active-right-tab","bb-web-ds-tools.views.vega-lite/set-active-right-tab",-490897405),(function (db,p__60298){
var vec__60299 = p__60298;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60299,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60299,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","vega-lite","bb-web-ds-tools.views.vega-lite/vega-lite",348810215),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-right-tab","bb-web-ds-tools.views.vega-lite/active-right-tab",-638097379)], null),tab);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","save-config","bb-web-ds-tools.views.vega-lite/save-config",1789695845),(function (db,p__60302){
var vec__60303 = p__60302;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60303,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60303,(1),null);
var root = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var config = cljs.core.select_keys(root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-input","bb-web-ds-tools.views.vega-lite/config-input",-593303029),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-mode","bb-web-ds-tools.views.vega-lite/config-mode",-1590507328)], null));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315),name], null),config),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-config-name","bb-web-ds-tools.views.vega-lite/active-config-name",-1463263112)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","load-config","bb-web-ds-tools.views.vega-lite/load-config",-2057445703),(function (db,p__60307){
var vec__60308 = p__60307;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60308,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60308,(1),null);
var config = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315),name], null));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null),cljs.core.merge,config),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-config-name","bb-web-ds-tools.views.vega-lite/active-config-name",-1463263112)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","delete-config","bb-web-ds-tools.views.vega-lite/delete-config",-602454691),(function (db,p__60311){
var vec__60312 = p__60311;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60312,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60312,(1),null);
var active_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-config-name","bb-web-ds-tools.views.vega-lite/active-config-name",-1463263112)], null));
var G__60315 = db;
var G__60315__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__60315,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315)], null),cljs.core.dissoc,name)
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_name,name)){
return cljs.core.assoc_in(G__60315__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-config-name","bb-web-ds-tools.views.vega-lite/active-config-name",-1463263112)], null),null);
} else {
return G__60315__$1;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","import-dataset","bb-web-ds-tools.views.vega-lite/import-dataset",1691198254),(function (p__60318,p__60319){
var map__60320 = p__60318;
var map__60320__$1 = cljs.core.__destructure_map(map__60320);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60320__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__60321 = p__60319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60321,(0),null);
var dataset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60321,(1),null);
var datasets = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938)], null));
var dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datasets,dataset_id);
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(dataset);
var clean_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60316_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60316_SHARP_,new cljs.core.Keyword(null,"_uuid","_uuid",797900280));
}),data);
var data_str = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60324_60373 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60325_60374 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60326_60375 = true;
var _STAR_print_fn_STAR__temp_val__60327_60376 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60326_60375);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60327_60376);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(clean_data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60325_60374);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60324_60373);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","data-input","bb-web-ds-tools.views.vega-lite/data-input",-1679982013)], null),data_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","vega-lite","bb-web-ds-tools.views.vega-lite/vega-lite",348810215),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","format","bb-web-ds-tools.views.vega-lite/format",-174777479)], null),new cljs.core.Keyword(null,"edn","edn",1317840885)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","vega-lite","bb-web-ds-tools.views.vega-lite/vega-lite",348810215),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","structure","bb-web-ds-tools.views.vega-lite/structure",1637845102)], null),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","parse-data","bb-web-ds-tools.views.vega-lite/parse-data",812244552)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","parse-data","bb-web-ds-tools.views.vega-lite/parse-data",812244552),(function (db,_){
var user_input = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var component_state = new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","vega-lite","bb-web-ds-tools.views.vega-lite/vega-lite",348810215).cljs$core$IFn$_invoke$arity$1(db);
var text = new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","data-input","bb-web-ds-tools.views.vega-lite/data-input",-1679982013).cljs$core$IFn$_invoke$arity$1(user_input);
var fmt = new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","format","bb-web-ds-tools.views.vega-lite/format",-174777479).cljs$core$IFn$_invoke$arity$1(component_state);
var structure = new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","structure","bb-web-ds-tools.views.vega-lite/structure",1637845102).cljs$core$IFn$_invoke$arity$1(component_state);
var parsed = bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IFn$_invoke$arity$3(fmt,structure,text);
var schema = (function (){try{return malli.provider.provide.cljs$core$IFn$_invoke$arity$1(parsed);
}catch (e60328){if((e60328 instanceof Error)){
var e = e60328;
return ["Error inferring schema: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('');
} else {
throw e60328;

}
}})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","vega-lite","bb-web-ds-tools.views.vega-lite/vega-lite",348810215),cljs.core.assoc,new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","parsed-data","bb-web-ds-tools.views.vega-lite/parsed-data",1101160363),parsed,new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","inferred-schema","bb-web-ds-tools.views.vega-lite/inferred-schema",3976792),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema], 0));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","parsed-config-obj","bb-web-ds-tools.views.vega-lite/parsed-config-obj",-653801240),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-input","bb-web-ds-tools.views.vega-lite/config-input",-593303029)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-mode","bb-web-ds-tools.views.vega-lite/config-mode",-1590507328)], null),(function (p__60329){
var vec__60330 = p__60329;
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60330,(0),null);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60330,(1),null);
try{var G__60334 = mode;
var G__60334__$1 = (((G__60334 instanceof cljs.core.Keyword))?G__60334.fqn:null);
switch (G__60334__$1) {
case "json":
return JSON.parse(input);

break;
case "edn":
return cljs.core.clj__GT_js(clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(input));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60334__$1)].join('')));

}
}catch (e60333){if((e60333 instanceof Error)){
var _ = e60333;
return null;
} else {
throw e60333;

}
}})], 0));
/**
 * Loads a Vega-Lite example into the state.
 * 
 *   Args:
 *  fmt (keyword): The data format.
 *  structure (keyword): The data structure.
 * 
 *   Returns:
 *  nil: Dispatches events.
 */
bb_web_ds_tools.views.vega_lite.load_example = (function bb_web_ds_tools$views$vega_lite$load_example(fmt,structure){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-format","bb-web-ds-tools.views.vega-lite/set-format",600148309),fmt], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-structure","bb-web-ds-tools.views.vega-lite/set-structure",-607755948),structure], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-data-input","bb-web-ds-tools.views.vega-lite/set-data-input",672681982),bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IFn$_invoke$arity$2(fmt,structure)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","parse-data","bb-web-ds-tools.views.vega-lite/parse-data",812244552)], null));
});
/**
 * Renders the Vega-Lite visualization into the DOM.
 * 
 *   Args:
 *  component (object): The React component instance.
 *  spec-obj (object): The Vega-Lite specification.
 *  data (object): The data to visualize.
 * 
 *   Returns:
 *  nil: Modifies the DOM.
 */
bb_web_ds_tools.views.vega_lite.render_vega = (function bb_web_ds_tools$views$vega_lite$render_vega(component,spec_obj,data){
if(cljs.core.truth_((function (){var and__5023__auto__ = spec_obj;
if(cljs.core.truth_(and__5023__auto__)){
return data;
} else {
return and__5023__auto__;
}
})())){
try{var spec_with_data = Object.assign(({}),spec_obj);
(spec_with_data.data = ({"values": cljs.core.clj__GT_js(data)}));

return vegaEmbed(shadow.js.shim.module$react_dom.findDOMNode(component),spec_with_data);
}catch (e60336){if((e60336 instanceof Error)){
var e = e60336;
return console.warn("Vega render error",e);
} else {
throw e60336;

}
}} else {
return null;
}
});
/**
 * Wrapper component for Vega-Lite visualization.
 * 
 *   Args:
 *  props (map): Contains :spec-obj and :data.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.vega_lite.vega_viz = (function bb_web_ds_tools$views$vega_lite$vega_viz(p__60338){
var map__60339 = p__60338;
var map__60339__$1 = cljs.core.__destructure_map(map__60339);
var spec_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60339__$1,new cljs.core.Keyword(null,"spec-obj","spec-obj",-642575778));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60339__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"vega-viz",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return bb_web_ds_tools.views.vega_lite.render_vega(this$,new cljs.core.Keyword(null,"spec-obj","spec-obj",-642575778).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
return bb_web_ds_tools.views.vega_lite.render_vega(this$,new cljs.core.Keyword(null,"spec-obj","spec-obj",-642575778).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null);
})], null));
});
/**
 * Renders a tab button.
 * 
 *   Args:
 *  active? (boolean): Whether the tab is active.
 *  label (string): The tab label.
 *  on-click (fn): Click handler.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.vega_lite.tab_button = (function bb_web_ds_tools$views$vega_lite$tab_button(active_QMARK_,label,on_click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["py-2 px-4 font-medium text-sm transition-colors border-b-2 ",(cljs.core.truth_(active_QMARK_)?["border-[#f0dfaf] ",bb_web_ds_tools.theme.text_accent].join(''):["border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:text-[#dcdccc]"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),label], null);
});
/**
 * Renders a modal to save the current configuration.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.vega_lite.save_config_modal = (function bb_web_ds_tools$views$vega_lite$save_config_modal(){
var open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var name_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative inline-block"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(open_QMARK_,true);
})], null),"Save"], null),(cljs.core.truth_(cljs.core.deref(open_QMARK_))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute top-8 right-0 z-50 p-2 rounded shadow-lg border ",bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.border_default," flex items-center space-x-2"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-32 text-xs",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Name",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(name_input),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60340_SHARP_){
return cljs.core.reset_BANG_(name_input,p1__60340_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"text-green-400 !px-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","save-config","bb-web-ds-tools.views.vega-lite/save-config",1789695845),cljs.core.deref(name_input)], null));

return cljs.core.reset_BANG_(open_QMARK_,false);
})], null),"\u2713"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"text-red-400 !px-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(open_QMARK_,false);
})], null),"\u2717"], null)], null):null)], null);
});
});
/**
 * Renders the main Vega-Lite view content.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.vega_lite.panel_render = (function bb_web_ds_tools$views$vega_lite$panel_render(){
var data_input = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","data-input","bb-web-ds-tools.views.vega-lite/data-input",-1679982013)], null)));
var config_input = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-input","bb-web-ds-tools.views.vega-lite/config-input",-593303029)], null)));
var parsed_data = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","parsed-data","bb-web-ds-tools.views.vega-lite/parsed-data",1101160363)], null)));
var active_left_tab = (function (){var or__5025__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-left-tab","bb-web-ds-tools.views.vega-lite/active-left-tab",-1047612510)], null)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"data","data",-232669377);
}
})();
var active_right_tab = (function (){var or__5025__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-right-tab","bb-web-ds-tools.views.vega-lite/active-right-tab",-638097379)], null)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"plot","plot",2086832225);
}
})();
var datasets = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null)));
var config_mode = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","config-mode","bb-web-ds-tools.views.vega-lite/config-mode",-1590507328)], null)));
var saved_configs = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","saved-configs","bb-web-ds-tools.views.vega-lite/saved-configs",-1510444428)], null)));
var active_config_name = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","active-config-name","bb-web-ds-tools.views.vega-lite/active-config-name",-1463263112)], null)));
var parsed_config_obj = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","parsed-config-obj","bb-web-ds-tools.views.vega-lite/parsed-config-obj",-653801240)], null)));
var format = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","format","bb-web-ds-tools.views.vega-lite/format",-174777479)], null)));
var inferred_schema = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","inferred-schema","bb-web-ds-tools.views.vega-lite/inferred-schema",3976792)], null)));
var tabs = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"label","label",1718410804),"Data"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"label","label",1718410804),"Config"], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full w-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.navigation.portal_to_top_bar,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.nav_tabs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694),active_left_tab,new cljs.core.Keyword(null,"class","class",-2030961996),"border-b-0 bg-transparent px-0",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60341_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-active-left-tab","bb-web-ds-tools.views.vega-lite/set-active-left-tab",300865662),p1__60341_SHARP_], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.help_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),bb_web_ds_tools.components.navigation.get_wiki_url(new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)),new cljs.core.Keyword(null,"title","title",636505583),"Help: Vega-Lite",new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1 !w-5 !h-5 opacity-50 hover:opacity-100"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col md:flex-row h-full w-full overflow-hidden"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-1/2 md:h-full overflow-auto border-b md:border-b-0 md:border-r border-[#3f3f3f] w-full md:max-w-3xl flex-shrink-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow overflow-hidden relative"], null),(function (){var G__60345 = active_left_tab;
var G__60345__$1 = (((G__60345 instanceof cljs.core.Keyword))?G__60345.fqn:null);
switch (G__60345__$1) {
case "data":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 gap-2 flex-wrap border-b border-[#3f3f3f] bg-[#1c2128] items-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bb_web_ds_tools.views.vega_lite.load_example(new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
})], null),"CSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bb_web_ds_tools.views.vega_lite.load_example(new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
})], null),"TSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bb_web_ds_tools.views.vega_lite.load_example(new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
})], null),"MD"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bb_web_ds_tools.views.vega_lite.load_example(new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284));
})], null),"JSON Maps"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bb_web_ds_tools.views.vega_lite.load_example(new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974));
})], null),"JSON Arrays"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bb_web_ds_tools.views.vega_lite.load_example(new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284));
})], null),"EDN Maps"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bb_web_ds_tools.views.vega_lite.load_example(new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
})], null),"EDN Col"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative group ml-auto"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"border-dashed border-white/50"], null),"Import Dataset \u25BC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute hidden group-hover:block right-0 ",bb_web_ds_tools.theme.bg_input," border ",bb_web_ds_tools.theme.border_default," p-1 rounded shadow-lg z-10 w-48 max-h-60 overflow-y-auto"].join('')], null),((cljs.core.seq(datasets))?(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$vega_lite$panel_render_$_iter__60346(s__60347){
return (new cljs.core.LazySeq(null,(function (){
var s__60347__$1 = s__60347;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__60347__$1);
if(temp__5825__auto__){
var s__60347__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60347__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__60347__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__60349 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__60348 = (0);
while(true){
if((i__60348 < size__5502__auto__)){
var vec__60350 = cljs.core._nth(c__5501__auto__,i__60348);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60350,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60350,(1),null);
cljs.core.chunk_append(b__60349,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer px-2 py-1 text-xs ",bb_web_ds_tools.theme.bg_item_hover," truncate"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60348,vec__60350,id,ds,c__5501__auto__,size__5502__auto__,b__60349,s__60347__$2,temp__5825__auto__,G__60345,G__60345__$1,data_input,config_input,parsed_data,active_left_tab,active_right_tab,datasets,config_mode,saved_configs,active_config_name,parsed_config_obj,format,inferred_schema,tabs){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","import-dataset","bb-web-ds-tools.views.vega-lite/import-dataset",1691198254),id], null));
});})(i__60348,vec__60350,id,ds,c__5501__auto__,size__5502__auto__,b__60349,s__60347__$2,temp__5825__auto__,G__60345,G__60345__$1,data_input,config_input,parsed_data,active_left_tab,active_right_tab,datasets,config_mode,saved_configs,active_config_name,parsed_config_obj,format,inferred_schema,tabs))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds)], null));

var G__60379 = (i__60348 + (1));
i__60348 = G__60379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60349),bb_web_ds_tools$views$vega_lite$panel_render_$_iter__60346(cljs.core.chunk_rest(s__60347__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60349),null);
}
} else {
var vec__60353 = cljs.core.first(s__60347__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60353,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60353,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer px-2 py-1 text-xs ",bb_web_ds_tools.theme.bg_item_hover," truncate"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__60353,id,ds,s__60347__$2,temp__5825__auto__,G__60345,G__60345__$1,data_input,config_input,parsed_data,active_left_tab,active_right_tab,datasets,config_mode,saved_configs,active_config_name,parsed_config_obj,format,inferred_schema,tabs){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","import-dataset","bb-web-ds-tools.views.vega-lite/import-dataset",1691198254),id], null));
});})(vec__60353,id,ds,s__60347__$2,temp__5825__auto__,G__60345,G__60345__$1,data_input,config_input,parsed_data,active_left_tab,active_right_tab,datasets,config_mode,saved_configs,active_config_name,parsed_config_obj,format,inferred_schema,tabs))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds)], null),bb_web_ds_tools$views$vega_lite$panel_render_$_iter__60346(cljs.core.rest(s__60347__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(datasets);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-500 p-2"], null),"No datasets created."], null))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),data_input,new cljs.core.Keyword(null,"language","language",-1591107564),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"clojure"),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null),new cljs.core.Keyword(null,"minimap","minimap",-1428643929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-data-input","bb-web-ds-tools.views.vega-lite/set-data-input",672681982),val], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","parse-data","bb-web-ds-tools.views.vega-lite/parse-data",812244552)], null));
})], null)], null)], null)], null);

break;
case "config":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 gap-2 border-b border-[#3f3f3f] bg-[#1c2128] items-center justify-between"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2 items-center text-xs text-gray-400"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Mode:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-1 cursor-pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"config-mode",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(config_mode,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-config-mode","bb-web-ds-tools.views.vega-lite/set-config-mode",1935491083),new cljs.core.Keyword(null,"json","json",1279968570)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"JSON"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-1 cursor-pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"config-mode",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(config_mode,new cljs.core.Keyword(null,"edn","edn",1317840885)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-config-mode","bb-web-ds-tools.views.vega-lite/set-config-mode",1935491083),new cljs.core.Keyword(null,"edn","edn",1317840885)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"EDN"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2 items-center"], null),((cljs.core.seq(saved_configs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xs py-1 px-2 rounded ",bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.border_default].join(''),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5025__auto__ = active_config_name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60343_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","load-config","bb-web-ds-tools.views.vega-lite/load-config",-2057445703),p1__60343_SHARP_.target.value], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"Select Config..."], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$vega_lite$panel_render_$_iter__60356(s__60357){
return (new cljs.core.LazySeq(null,(function (){
var s__60357__$1 = s__60357;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__60357__$1);
if(temp__5825__auto__){
var s__60357__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60357__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__60357__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__60359 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__60358 = (0);
while(true){
if((i__60358 < size__5502__auto__)){
var name = cljs.core._nth(c__5501__auto__,i__60358);
cljs.core.chunk_append(b__60359,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"value","value",305978217),name], null),name], null));

var G__60380 = (i__60358 + (1));
i__60358 = G__60380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60359),bb_web_ds_tools$views$vega_lite$panel_render_$_iter__60356(cljs.core.chunk_rest(s__60357__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60359),null);
}
} else {
var name = cljs.core.first(s__60357__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"value","value",305978217),name], null),name], null),bb_web_ds_tools$views$vega_lite$panel_render_$_iter__60356(cljs.core.rest(s__60357__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.keys(saved_configs));
})()], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.save_config_modal], null),(cljs.core.truth_(active_config_name)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"text-red-400 !px-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","delete-config","bb-web-ds-tools.views.vega-lite/delete-config",-602454691),active_config_name], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.dustbin_icon], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),config_input,new cljs.core.Keyword(null,"language","language",-1591107564),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(config_mode,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"clojure"),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null),new cljs.core.Keyword(null,"minimap","minimap",-1428643929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60344_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-config-input","bb-web-ds-tools.views.vega-lite/set-config-input",1175394425),p1__60344_SHARP_], null));
})], null)], null)], null)], null);

break;
default:
return null;

}
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-1/2 md:h-full overflow-auto flex-grow"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["justify-between border-b ",bb_web_ds_tools.theme.border_default," px-2 ",bb_web_ds_tools.theme.bg_toolbar].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.tab_button,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_right_tab,new cljs.core.Keyword(null,"plot","plot",2086832225)),"Plot",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-active-right-tab","bb-web-ds-tools.views.vega-lite/set-active-right-tab",-490897405),new cljs.core.Keyword(null,"plot","plot",2086832225)], null));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.tab_button,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_right_tab,new cljs.core.Keyword(null,"parsed","parsed",-819589156)),"Parsed Data",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-active-right-tab","bb-web-ds-tools.views.vega-lite/set-active-right-tab",-490897405),new cljs.core.Keyword(null,"parsed","parsed",-819589156)], null));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.tab_button,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_right_tab,new cljs.core.Keyword(null,"schema","schema",-1582001791)),"Schema",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-active-right-tab","bb-web-ds-tools.views.vega-lite/set-active-right-tab",-490897405),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
})], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_right_tab,new cljs.core.Keyword(null,"plot","plot",2086832225)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var config_edn = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(parsed_config_obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var final_edn = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config_edn,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),parsed_data], null));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),final_edn], null));
})], null),"Send to Portal"], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow overflow-hidden relative bg-white"], null),(function (){var G__60360 = active_right_tab;
var G__60360__$1 = (((G__60360 instanceof cljs.core.Keyword))?G__60360.fqn:null);
switch (G__60360__$1) {
case "plot":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full w-full overflow-auto p-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.vega_viz,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec-obj","spec-obj",-642575778),parsed_config_obj,new cljs.core.Keyword(null,"data","data",-232669377),parsed_data], null)], null)], null);

break;
case "parsed":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full w-full ",bb_web_ds_tools.theme.bg_page].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60361_60382 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60362_60383 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60363_60384 = true;
var _STAR_print_fn_STAR__temp_val__60364_60385 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60363_60384);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60364_60385);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(parsed_data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60362_60383);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60361_60382);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})(),new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"minimap","minimap",-1428643929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)], null)], null)], null)], null);

break;
case "schema":
if(cljs.core.seq(parsed_data)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full w-full ",bb_web_ds_tools.theme.bg_page].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60365_60386 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60366_60387 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60367_60388 = true;
var _STAR_print_fn_STAR__temp_val__60368_60389 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60367_60388);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60368_60389);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(inferred_schema);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60366_60387);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60365_60386);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})(),new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"minimap","minimap",-1428643929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full w-full flex items-center justify-center ",bb_web_ds_tools.theme.bg_page," ",bb_web_ds_tools.theme.text_secondary].join('')], null),"No data available to infer schema."], null);
}

break;
default:
return null;

}
})()], null)], null)], null)], null)], null);
});
/**
 * Main component for the Vega-Lite view. Initializes on mount.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.vega_lite.panel = (function bb_web_ds_tools$views$vega_lite$panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.create_panel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"vega-lite-panel",new cljs.core.Keyword(null,"init-event","init-event",-2064696416),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","initialize","bb-web-ds-tools.views.vega-lite/initialize",1758779882)], null),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),bb_web_ds_tools.views.vega_lite.panel_render], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.vega_lite.js.map
