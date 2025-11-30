goog.provide('bb_web_ds_tools.views.app_db');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","whole-db","bb-web-ds-tools.views.app-db/whole-db",-370638082),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return db;
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","user-input-root","bb-web-ds-tools.views.app-db/user-input-root",-243521323),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","user-input","bb-web-ds-tools.core/user-input",1937733608)], null),(function (user_input,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_input,new cljs.core.Keyword(null,"app-db","app-db",865606302));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","watched-paths","bb-web-ds-tools.views.app-db/watched-paths",-1650260145),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","user-input-root","bb-web-ds-tools.views.app-db/user-input-root",-243521323)], null),(function (root,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(root,new cljs.core.Keyword(null,"watched-paths","watched-paths",-1266999052),cljs.core.PersistentVector.EMPTY);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","active-path","bb-web-ds-tools.views.app-db/active-path",866671094),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"active-path","active-path",-899675889)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","path-value","bb-web-ds-tools.views.app-db/path-value",1939920672),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__28267){
var vec__28268 = p__28267;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28268,(0),null);
var path_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28268,(1),null);
try{var path = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(path_str);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,path,new cljs.core.Keyword("bb-web-ds-tools.views.app-db","not-found","bb-web-ds-tools.views.app-db/not-found",698968281));
}catch (e28271){var ___$1 = e28271;
return new cljs.core.Keyword("bb-web-ds-tools.views.app-db","error","bb-web-ds-tools.views.app-db/error",-336701303);
}})], 0));
bb_web_ds_tools.views.app_db.update_view = (function bb_web_ds_tools$views$app_db$update_view(local_edn_atom,print_level,value){
return cljs.core.reset_BANG_(local_edn_atom,(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28297_28398 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28298_28399 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28299_28400 = true;
var _STAR_print_fn_STAR__temp_val__28300_28401 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28299_28400);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28300_28401);

try{var _STAR_print_level_STAR__orig_val__28301_28402 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__28302_28403 = print_level;
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28302_28403);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(value);
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28301_28402);
}}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28298_28399);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28297_28398);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})());
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","set-active-path","bb-web-ds-tools.views.app-db/set-active-path",153735738),(function (db,p__28305){
var vec__28306 = p__28305;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28306,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28306,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"active-path","active-path",-899675889)], null),path);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","add-watch-path","bb-web-ds-tools.views.app-db/add-watch-path",1822864858),(function (db,p__28330){
var vec__28331 = p__28330;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28331,(0),null);
var path_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28331,(1),null);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([path_str]),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"watched-paths","watched-paths",-1266999052)], null),cljs.core.PersistentVector.EMPTY)))){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"active-path","active-path",-899675889)], null),path_str);
} else {
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"watched-paths","watched-paths",-1266999052)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),path_str),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"active-path","active-path",-899675889)], null),path_str);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","remove-watch-path","bb-web-ds-tools.views.app-db/remove-watch-path",178630062),(function (db,p__28336){
var vec__28337 = p__28336;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28337,(0),null);
var path_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28337,(1),null);
var watched_paths = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"watched-paths","watched-paths",-1266999052)], null),cljs.core.PersistentVector.EMPTY);
var new_paths = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28335_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28335_SHARP_,path_str);
}),watched_paths));
var active_path = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"active-path","active-path",-899675889)], null));
var G__28341 = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"watched-paths","watched-paths",-1266999052)], null),new_paths);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_path,path_str)){
return cljs.core.assoc_in(G__28341,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"active-path","active-path",-899675889)], null),cljs.core.first(new_paths));
} else {
return G__28341;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","update-path-value","bb-web-ds-tools.views.app-db/update-path-value",1384313983),(function (db,p__28344){
var vec__28345 = p__28344;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28345,(0),null);
var path_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28345,(1),null);
var new_value_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28345,(2),null);
try{var path = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(path_str);
var new_value = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new_value_str);
return cljs.core.assoc_in(db,path,new_value);
}catch (e28348){var e = e28348;
console.error("Failed to update path:",e);

return db;
}}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.app-db","open-in-portal","bb-web-ds-tools.views.app-db/open-in-portal",-1055334551),(function (p__28349,_){
var map__28350 = p__28349;
var map__28350__$1 = cljs.core.__destructure_map(map__28350);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28350__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),db], null)], null);
}));
bb_web_ds_tools.views.app_db.path_viewer = (function bb_web_ds_tools$views$app_db$path_viewer(path_str){
var print_level = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((5));
var local_edn = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var val = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","path-value","bb-web-ds-tools.views.app-db/path-value",1939920672),path_str], null)));
return bb_web_ds_tools.views.app_db.update_view(local_edn,cljs.core.deref(print_level),val);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (path_str__$1){
var current_value = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","path-value","bb-web-ds-tools.views.app-db/path-value",1939920672),path_str__$1], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col space-y-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between items-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["font-mono text-sm font-bold ",bb_web_ds_tools.theme.text_accent].join('')], null),path_str__$1], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center space-x-2 text-xs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["font-medium ",bb_web_ds_tools.theme.text_secondary].join('')], null),"Depth:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(print_level),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28352_SHARP_){
cljs.core.reset_BANG_(print_level,parseInt(p1__28352_SHARP_.target.value));

return bb_web_ds_tools.views.app_db.update_view(local_edn,cljs.core.deref(print_level),current_value);
}),new cljs.core.Keyword(null,"class","class",-2030961996),["w-12 rounded px-1 ",bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.border_default," ",bb_web_ds_tools.theme.text_primary].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bb_web_ds_tools.views.app_db.update_view(local_edn,cljs.core.deref(print_level),current_value);
})], null),"Refresh View"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","update-path-value","bb-web-ds-tools.views.app-db/update-path-value",1384313983),path_str__$1,cljs.core.deref(local_edn)], null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_button_primary," ",bb_web_ds_tools.theme.text_button_primary].join('')], null),"Update Path"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-[500px] border ",bb_web_ds_tools.theme.border_default].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(local_edn),new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"theme","theme",-1247880880),"zenburn",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"minimap","minimap",-1428643929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(14),new cljs.core.Keyword(null,"scrollBeyondLastLine","scrollBeyondLastLine",1848448074),false], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28353_SHARP_){
return cljs.core.reset_BANG_(local_edn,p1__28353_SHARP_);
})], null)], null)], null)], null);
})], null));
});
bb_web_ds_tools.views.app_db.add_path_view = (function bb_web_ds_tools$views$app_db$add_path_view(){
var with_let28356 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let28356","with-let28356",-1171615731));
var temp__5829__auto___28412 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5829__auto___28412 == null)){
} else {
var c__21956__auto___28413 = temp__5829__auto___28412;
if((with_let28356.generation === c__21956__auto___28413.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let28356.generation = c__21956__auto___28413.ratomGeneration);
}

var init28357 = (with_let28356.length === (0));
var new_path = ((((init28357) || (cljs.core.not(with_let28356.hasOwnProperty((0))))))?(with_let28356[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("")):(with_let28356[(0)]));
var res28358 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-8 flex flex-col items-center justify-center space-y-4 bg-transparent shadow-none"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-bold"], null),"Watch New Path"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full max-w-lg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(new_path),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28354_SHARP_){
return cljs.core.reset_BANG_(new_path,p1__28354_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter path e.g. [:user-input :datasets]",new cljs.core.Keyword(null,"class","class",-2030961996),"font-mono mb-4"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","add-watch-path","bb-web-ds-tools.views.app-db/add-watch-path",1822864858),cljs.core.deref(new_path)], null));

return cljs.core.reset_BANG_(new_path,"");
})], null),"Add Watch"], null)], null)], null);
return res28358;
});
bb_web_ds_tools.views.app_db.panel = (function bb_web_ds_tools$views$app_db$panel(){
var watched_paths = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","watched-paths","bb-web-ds-tools.views.app-db/watched-paths",-1650260145)], null)));
var active_path = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","active-path","bb-web-ds-tools.views.app-db/active-path",866671094)], null)));
var current_tab = (function (){var or__5025__auto__ = active_path;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.first(watched_paths);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"new","new",-2085437848);
}
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-6"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between items-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl font-bold"], null),"App DB Editor"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","open-in-portal","bb-web-ds-tools.views.app-db/open-in-portal",-1055334551)], null));
})], null),"Inspect DB in Portal"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col min-h-[600px]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.tabs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),p,new cljs.core.Keyword(null,"label","label",1718410804),p,new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (p1__28373_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","remove-watch-path","bb-web-ds-tools.views.app-db/remove-watch-path",178630062),p1__28373_SHARP_], null));
})], null);
}),watched_paths),new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694),current_tab,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28374_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","set-active-path","bb-web-ds-tools.views.app-db/set-active-path",153735738),p1__28374_SHARP_], null));
}),new cljs.core.Keyword(null,"on-add","on-add",-1283372042),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.app-db","set-active-path","bb-web-ds-tools.views.app-db/set-active-path",153735738),new cljs.core.Keyword(null,"new","new",-2085437848)], null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 pt-2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-4 flex-grow"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_tab,new cljs.core.Keyword(null,"new","new",-2085437848)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.app_db.add_path_view], null):cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.app_db.path_viewer,current_tab], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),current_tab], null)))], null)], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.app_db.js.map
