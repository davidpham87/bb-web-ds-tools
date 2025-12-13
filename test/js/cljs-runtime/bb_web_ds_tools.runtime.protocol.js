goog.provide('bb_web_ds_tools.runtime.protocol');
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.runtime !== 'undefined') && (typeof bb_web_ds_tools.runtime.protocol !== 'undefined') && (typeof bb_web_ds_tools.runtime.protocol.portal_submit !== 'undefined')){
} else {
/**
 * Dispatches a message based on the runtime identifier and the message type.
 * Arguments:
 *   runtime - The runtime identifier (e.g., :sci, :pyodide, :webr).
 *   msg     - The message map, expected to have a :type key.
 */
bb_web_ds_tools.runtime.protocol.portal_submit = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65894 = cljs.core.get_global_hierarchy;
return (fexpr__65894.cljs$core$IFn$_invoke$arity$0 ? fexpr__65894.cljs$core$IFn$_invoke$arity$0() : fexpr__65894.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bb-web-ds-tools.runtime.protocol","portal-submit"),(function (runtime,msg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [runtime,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(msg)], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}

//# sourceMappingURL=bb_web_ds_tools.runtime.protocol.js.map
