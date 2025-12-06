goog.provide('bb_web_ds_tools.views.editor');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.editor","save-code","bb-web-ds-tools.views.editor/save-code",1365207386),(function (db,_){
alert("Saved code successfully!");

return db;
}));
/**
 * Renders the editor form.
 * 
 *   Args:
 *  props (map): Optional properties map with keys :path and :initial-code.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.editor.editor_form = (function bb_web_ds_tools$views$editor$editor_form(p__43396){
var map__43400 = p__43396;
var map__43400__$1 = cljs.core.__destructure_map(map__43400);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43400__$1,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-form","editor-form",2054255699)], null));
var initial_code = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43400__$1,new cljs.core.Keyword(null,"initial-code","initial-code",-1940969145),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","code","bb-web-ds-tools.core/code",-403485604)], null))));
var initial_code__$1 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","code","bb-web-ds-tools.core/code",-403485604)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork.re_frame.form,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"initial-values","initial-values",1392120293),new cljs.core.PersistentArrayMap(null, 1, ["code",initial_code__$1], null),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),true,new cljs.core.Keyword(null,"clean-on-unmount?","clean-on-unmount?",-1144411068),true,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p__43401){
var map__43402 = p__43401;
var map__43402__$1 = cljs.core.__destructure_map(map__43402);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43402__$1,new cljs.core.Keyword(null,"values","values",372645556));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","code-changed","bb-web-ds-tools.core/code-changed",-2041081013),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(values)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.editor","save-code","bb-web-ds-tools.views.editor/save-code",1365207386)], null));
})], null),(function (p__43403){
var map__43404 = p__43403;
var map__43404__$1 = cljs.core.__destructure_map(map__43404);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43404__$1,new cljs.core.Keyword(null,"values","values",372645556));
var set_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43404__$1,new cljs.core.Keyword(null,"set-values","set-values",-928640446));
var handle_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43404__$1,new cljs.core.Keyword(null,"handle-submit","handle-submit",1732326917));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),handle_submit,new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-[#2f2f2f] rounded shadow-sm overflow-hidden border border-[#5f5f5f]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(values),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"600px"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43395_SHARP_){
var G__43405 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),p1__43395_SHARP_], null);
return (set_values.cljs$core$IFn$_invoke$arity$1 ? set_values.cljs$core$IFn$_invoke$arity$1(G__43405) : set_values.call(null,G__43405));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-end","div.flex.justify-end",-2056434577),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Save Code"], null)], null)], null);
})], null);
});
/**
 * Renders the editor view panel.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.editor.panel = (function bb_web_ds_tools$views$editor$panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container mx-auto max-w-6xl p-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.editor.editor_form,cljs.core.PersistentArrayMap.EMPTY], null)], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.editor.js.map
