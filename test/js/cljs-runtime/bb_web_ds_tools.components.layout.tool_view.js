goog.provide('bb_web_ds_tools.components.layout.tool_view');
/**
 * Renders a standardized tool view with a header, editor/main area, and actions.
 * 
 *   Args:
 *  props (map): Configuration props. Keys:
 *    - :title (string): The title of the tool.
 *    - :wiki-key (keyword): The key for the wiki help link (e.g., :honeysql).
 *    - :actions (vector): Optional hiccup vector of action buttons.
 *    - :editor (hiccup): The editor component.
 *    - :output (hiccup, optional): The output/portal component. If present, renders a split view (flex-row).
 *    - :class (string): Optional CSS classes for the container.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.layout.tool_view.tool_view = (function bb_web_ds_tools$components$layout$tool_view$tool_view(p__22687){
var map__22688 = p__22687;
var map__22688__$1 = cljs.core.__destructure_map(map__22688);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22688__$1,new cljs.core.Keyword(null,"title","title",636505583));
var wiki_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22688__$1,new cljs.core.Keyword(null,"wiki-key","wiki-key",-1495409073));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22688__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22688__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22688__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22688__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.truth_(output)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full items-start gap-0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"gap-4 w-full max-w-3xl h-full p-4 border-r border-[#3f3f3f]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.section_header,title,(cljs.core.truth_(wiki_key)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.help_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),bb_web_ds_tools.components.navigation.get_wiki_url(wiki_key),new cljs.core.Keyword(null,"title","title",636505583),["Help: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1 !w-6 !h-6 opacity-50 hover:opacity-100"], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow rounded overflow-hidden border ",bb_web_ds_tools.theme.border_default].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),editor], null),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center gap-4 mt-2"], null),actions], null):null)], null),output], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full p-4 gap-4 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,title], null),(cljs.core.truth_(wiki_key)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.help_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),bb_web_ds_tools.components.navigation.get_wiki_url(wiki_key),new cljs.core.Keyword(null,"title","title",636505583),["Help: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1 !w-5 !h-5 opacity-50 hover:opacity-100 mb-2"], null)], null):null)], null),(cljs.core.truth_(actions)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-4"], null),actions], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow rounded overflow-hidden border ",bb_web_ds_tools.theme.border_default].join('')], null),editor], null)], null);
}
});

//# sourceMappingURL=bb_web_ds_tools.components.layout.tool_view.js.map
