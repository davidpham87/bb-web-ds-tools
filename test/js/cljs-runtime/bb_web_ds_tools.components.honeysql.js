goog.provide('bb_web_ds_tools.components.honeysql');
bb_web_ds_tools.components.honeysql.sci_ctx = sci.core.init(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Converts a HoneySQL map (as a string or data) to a SQL string.
 * 
 *   Args:
 *  input-text (string): The HoneySQL map as a string (EDN).
 * 
 *   Returns:
 *  map: {:success true/false :output string :error string}.
 */
bb_web_ds_tools.components.honeysql.convert_to_sql = (function bb_web_ds_tools$components$honeysql$convert_to_sql(input_text){
try{var input_data = sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(input_text,bb_web_ds_tools.components.honeysql.sci_ctx);
if(cljs.core.map_QMARK_(input_data)){
try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.first(honey.sql.format.cljs$core$IFn$_invoke$arity$2(input_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inline","inline",1399884222),true], null)))], null);
}catch (e41143){var e = e41143;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),["Error formatting SQL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message(e))].join('')], null);
}} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),["Error: Last evaluated value must be a map. Got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(input_data))].join('')], null);
}
}catch (e41141){var e = e41141;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),["Error evaluating code: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message(e))].join('')], null);
}});

//# sourceMappingURL=bb_web_ds_tools.components.honeysql.js.map
