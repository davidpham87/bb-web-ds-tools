goog.provide('bb_web_ds_tools.views.code');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.code","initialize","bb-web-ds-tools.views.code/initialize",1752373785),(function (db,_){
if(cljs.core.truth_(new cljs.core.Keyword("bb-web-ds-tools.views.code","active-tab","bb-web-ds-tools.views.code/active-tab",95275616).cljs$core$IFn$_invoke$arity$1(db))){
return db;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.views.code","active-tab","bb-web-ds-tools.views.code/active-tab",95275616),new cljs.core.Keyword(null,"clojure-repl","clojure-repl",-863277991));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.code","set-active-tab","bb-web-ds-tools.views.code/set-active-tab",-1083304053),(function (db,p__51577){
var vec__51579 = p__51577;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51579,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51579,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.views.code","active-tab","bb-web-ds-tools.views.code/active-tab",95275616),tab);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.code","active-tab","bb-web-ds-tools.views.code/active-tab",95275616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.views.code","active-tab","bb-web-ds-tools.views.code/active-tab",95275616),new cljs.core.Keyword(null,"clojure-repl","clojure-repl",-863277991));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.code","set-mobile-view-mode","bb-web-ds-tools.views.code/set-mobile-view-mode",192678378),(function (db,p__51588){
var vec__51590 = p__51588;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51590,(0),null);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51590,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.views.code","mobile-view-mode","bb-web-ds-tools.views.code/mobile-view-mode",-1491968158),mode);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.code","mobile-view-mode","bb-web-ds-tools.views.code/mobile-view-mode",-1491968158),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.views.code","mobile-view-mode","bb-web-ds-tools.views.code/mobile-view-mode",-1491968158),new cljs.core.Keyword(null,"editor","editor",-989377770));
})], 0));
bb_web_ds_tools.views.code.mobile_view_toggle = (function bb_web_ds_tools$views$code$mobile_view_toggle(mode,set_mode_fn){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-row space-x-4 p-2 md:hidden justify-center bg-[#2d2d2d] border-b border-[#3f3f3f]"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-2 cursor-pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"mobile-view-mode",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"editor","editor",-989377770)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return (set_mode_fn.cljs$core$IFn$_invoke$arity$1 ? set_mode_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"editor","editor",-989377770)) : set_mode_fn.call(null,new cljs.core.Keyword(null,"editor","editor",-989377770)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"form-radio text-blue-600"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Editor"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-2 cursor-pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"mobile-view-mode",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"portal","portal",2002989957)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return (set_mode_fn.cljs$core$IFn$_invoke$arity$1 ? set_mode_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"portal","portal",2002989957)) : set_mode_fn.call(null,new cljs.core.Keyword(null,"portal","portal",2002989957)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"form-radio text-blue-600"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Portal"], null)], null)], null);
});
/**
 * Renders the content of the Code view, switching between sub-views based on the active tab.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.code.panel_render = (function bb_web_ds_tools$views$code$panel_render(){
var active_tab = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.code","active-tab","bb-web-ds-tools.views.code/active-tab",95275616)], null)));
var editor_settings = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","editor-settings","bb-web-ds-tools.events.settings/editor-settings",74758155)], null)));
var mobile_view_mode = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.code","mobile-view-mode","bb-web-ds-tools.views.code/mobile-view-mode",-1491968158)], null)));
var is_md_QMARK_ = (function (){var with_let51627 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let51627","with-let51627",-1178168462));
var temp__5829__auto___51680 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5829__auto___51680 == null)){
} else {
var c__23462__auto___51681 = temp__5829__auto___51680;
if((with_let51627.generation === c__23462__auto___51681.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let51627.generation = c__23462__auto___51681.ratomGeneration);
}

var init51628 = (with_let51627.length === (0));
var mql = ((((init51628) || (cljs.core.not(with_let51627.hasOwnProperty((0))))))?(with_let51627[(0)] = window.matchMedia("(min-width: 768px)")):(with_let51627[(0)]));
var match = ((((init51628) || (cljs.core.not(with_let51627.hasOwnProperty((1))))))?(with_let51627[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(mql.matches)):(with_let51627[(1)]));
var handler = ((((init51628) || (cljs.core.not(with_let51627.hasOwnProperty((2))))))?(with_let51627[(2)] = (function (e){
return cljs.core.reset_BANG_(match,e.matches);
})):(with_let51627[(2)]));
var res51629 = (function (){
mql.addEventListener("change",handler);

return cljs.core.deref(match);
})()
;
var destroy__23461__auto___51688 = (function (){
return mql.removeEventListener("change",handler);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let51627.destroy == null)){
(with_let51627.destroy = destroy__23461__auto___51688);
} else {
}
} else {
destroy__23461__auto___51688();
}

return res51629;
})();
var tabs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"clojure-repl","clojure-repl",-863277991),new cljs.core.Keyword(null,"label","label",1718410804),"Clojure"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword(null,"label","label",1718410804),"Python"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"label","label",1718410804),"R"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"label","label",1718410804),"Editor"], null)], null);
var tabs_component = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.nav_tabs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694),active_tab,new cljs.core.Keyword(null,"class","class",-2030961996),"border-b-0 bg-transparent px-0 text-xs",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51619_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.code","set-active-tab","bb-web-ds-tools.views.code/set-active-tab",-1083304053),p1__51619_SHARP_], null));
})], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full w-full"], null),(cljs.core.truth_(is_md_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.code.mobile_view_toggle,mobile_view_mode,(function (p1__51621_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.code","set-mobile-view-mode","bb-web-ds-tools.views.code/set-mobile-view-mode",192678378),p1__51621_SHARP_], null));
})], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col md:flex-row h-full w-full overflow-hidden"], null),(cljs.core.truth_((function (){var or__5025__auto__ = is_md_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mobile_view_mode,new cljs.core.Keyword(null,"editor","editor",-989377770));
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full md:h-full overflow-auto border-r border-[#3f3f3f] flex-shrink-0",new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(is_md_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(editor_settings)], null):null)], null),(function (){var props = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header-content","header-content",-2015916786),tabs_component], null);
var G__51653 = active_tab;
var G__51653__$1 = (((G__51653 instanceof cljs.core.Keyword))?G__51653.fqn:null);
switch (G__51653__$1) {
case "clojure-repl":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.repl.panel,props], null);

break;
case "pyodide":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.pyodide.panel,props], null);

break;
case "r-repl":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.r_repl.panel,props], null);

break;
case "editor":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.editor.panel,props], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.repl.panel,props], null);

}
})()], null):null),(cljs.core.truth_((function (){var or__5025__auto__ = is_md_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mobile_view_mode,new cljs.core.Keyword(null,"portal","portal",2002989957));
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full md:h-full flex-grow overflow-hidden"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.portal.portal_frame], null)], null):null)], null)], null);
});
/**
 * Main component for the Code view. Initializes state on mount.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.code.panel = (function bb_web_ds_tools$views$code$panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.create_panel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"code-panel",new cljs.core.Keyword(null,"init-event","init-event",-2064696416),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.code","initialize","bb-web-ds-tools.views.code/initialize",1752373785)], null),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),bb_web_ds_tools.views.code.panel_render], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.code.js.map
