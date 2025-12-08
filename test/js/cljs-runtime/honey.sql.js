goog.provide('honey.sql');
/**
 * The (default) order for known clauses. Can have items added and removed.
 */
honey.sql.default_clause_order = cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"alter-table","alter-table",1000463814),new cljs.core.Keyword(null,"add-column","add-column",141289410),new cljs.core.Keyword(null,"drop-column","drop-column",-1898063225),new cljs.core.Keyword(null,"alter-column","alter-column",-254828732),new cljs.core.Keyword(null,"modify-column","modify-column",-614135147),new cljs.core.Keyword(null,"rename-column","rename-column",737487070),new cljs.core.Keyword(null,"add-index","add-index",376820708),new cljs.core.Keyword(null,"drop-index","drop-index",-843154439),new cljs.core.Keyword(null,"rename-table","rename-table",-651328682),new cljs.core.Keyword(null,"create-table","create-table",1297148194),new cljs.core.Keyword(null,"create-table-as","create-table-as",209299497),new cljs.core.Keyword(null,"with-columns","with-columns",-1220776498),new cljs.core.Keyword(null,"create-view","create-view",-485638509),new cljs.core.Keyword(null,"create-or-replace-view","create-or-replace-view",1887806804),new cljs.core.Keyword(null,"create-materialized-view","create-materialized-view",-1173241),new cljs.core.Keyword(null,"create-extension","create-extension",853957283),new cljs.core.Keyword(null,"drop-table","drop-table",371446895),new cljs.core.Keyword(null,"drop-view","drop-view",1167937644),new cljs.core.Keyword(null,"drop-materialized-view","drop-materialized-view",-1779110488),new cljs.core.Keyword(null,"drop-extension","drop-extension",-1677190153),new cljs.core.Keyword(null,"refresh-materialized-view","refresh-materialized-view",-121074453),new cljs.core.Keyword(null,"create-index","create-index",154861140),new cljs.core.Keyword(null,"setting","setting",928308078),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"with-recursive","with-recursive",-331779146),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"union-all","union-all",672741919),new cljs.core.Keyword(null,"except","except",1116893347),new cljs.core.Keyword(null,"except-all","except-all",1562150045),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"assert","assert",-963103026),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"select-distinct","select-distinct",-412636114),new cljs.core.Keyword(null,"select-distinct-on","select-distinct-on",1224000227),new cljs.core.Keyword(null,"select-top","select-top",-1243842074),new cljs.core.Keyword(null,"select-distinct-top","select-distinct-top",781185536),new cljs.core.Keyword(null,"distinct","distinct",-1788879121),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"exclude","exclude",-1230250334),new cljs.core.Keyword(null,"rename","rename",1508157613),new cljs.core.Keyword(null,"into","into",-150836029),new cljs.core.Keyword(null,"bulk-collect-into","bulk-collect-into",1601778032),new cljs.core.Keyword(null,"insert-into","insert-into",382212789),new cljs.core.Keyword(null,"patch-into","patch-into",-245698135),new cljs.core.Keyword(null,"replace-into","replace-into",139321349),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"delete-from","delete-from",670763966),new cljs.core.Keyword(null,"erase-from","erase-from",565088869),new cljs.core.Keyword(null,"truncate","truncate",-1327322939),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"using","using",1948623036),new cljs.core.Keyword(null,"join-by","join-by",1125837996),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"left-join","left-join",-672831855),new cljs.core.Keyword(null,"right-join","right-join",-56349359),new cljs.core.Keyword(null,"inner-join","inner-join",659431740),new cljs.core.Keyword(null,"outer-join","outer-join",1845838048),new cljs.core.Keyword(null,"full-join","full-join",1305476385),new cljs.core.Keyword(null,"cross-join","cross-join",-1043003533),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.Keyword(null,"group-by","group-by",-379139802),new cljs.core.Keyword(null,"having","having",-399543166),new cljs.core.Keyword(null,"qualify","qualify",1565609728),new cljs.core.Keyword(null,"facet","facet",-801327574),new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"partition-by","partition-by",1324497520),new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"fetch","fetch",-1081994244),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"lock","lock",-488188066),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"records","records",1326822832),new cljs.core.Keyword(null,"on-conflict","on-conflict",1595391642),new cljs.core.Keyword(null,"on-constraint","on-constraint",1484874675),new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282),new cljs.core.Keyword(null,"do-update-set","do-update-set",-2028298967),new cljs.core.Keyword(null,"on-duplicate-key-update","on-duplicate-key-update",596044873),new cljs.core.Keyword(null,"returning","returning",-387623629),new cljs.core.Keyword(null,"with-data","with-data",-1106621804),new cljs.core.Keyword(null,"since","since",315379842),new cljs.core.Keyword(null,"until","until",-1189166390),new cljs.core.Keyword(null,"compare-with","compare-with",715346425),new cljs.core.Keyword(null,"timeseries","timeseries",958915787)], true);
/**
 * Low-level helper just to insert a new clause.
 * 
 *   If the clause is already in the list, this moves it to the end.
 */
honey.sql.add_clause_before = (function honey$sql$add_clause_before(order,clause,before){
var clauses = cljs.core.set(order);
var order__$1 = ((cljs.core.contains_QMARK_(clauses,clause))?cljs.core.filterv((function (p1__43891_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__43891_SHARP_,clause);
}),order):order);
if(cljs.core.truth_(before)){
if(cljs.core.contains_QMARK_(clauses,before)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("Unrecognized clause: ",before),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"known-clauses","known-clauses",-1092829159),order__$1], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,before)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(v,clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,k);
}
}),cljs.core.PersistentVector.EMPTY,order__$1);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(order__$1,clause);
}
});
/**
 * Escape any embedded closing strop characters.
 */
honey.sql.strop = (function honey$sql$strop(s,x,e){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(s,clojure.string.replace(x,honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(e),honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(e,e)),e);
});
honey.sql.dialects = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"dialect","dialect",-1374251073),k));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ansi","ansi",1415977390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p1__43892_SHARP_){
return honey.sql.strop("\"",p1__43892_SHARP_,"\"");
})], null),new cljs.core.Keyword(null,"sqlserver","sqlserver",222509918),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p1__43893_SHARP_){
return honey.sql.strop("[",p1__43893_SHARP_,"]");
}),new cljs.core.Keyword(null,"auto-lift-boolean","auto-lift-boolean",1793118318),true], null),new cljs.core.Keyword(null,"mysql","mysql",-1431590210),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p1__43894_SHARP_){
return honey.sql.strop("`",p1__43894_SHARP_,"`");
}),new cljs.core.Keyword(null,"clause-order-fn","clause-order-fn",-2005456179),(function (p1__43895_SHARP_){
return honey.sql.add_clause_before(p1__43895_SHARP_,new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"where","where",-2044795965));
})], null),new cljs.core.Keyword(null,"nrql","nrql",-1120573919),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p1__43896_SHARP_){
return honey.sql.strop("`",p1__43896_SHARP_,"`");
}),new cljs.core.Keyword(null,"col-fn","col-fn",69324006),(function (p1__43897_SHARP_){
if((p1__43897_SHARP_ instanceof cljs.core.Keyword)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(p1__43897_SHARP_),(1));
} else {
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(p1__43897_SHARP_);
}
}),new cljs.core.Keyword(null,"parts-fn","parts-fn",1152861),cljs.core.vector], null),new cljs.core.Keyword(null,"oracle","oracle",-2085139604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p1__43898_SHARP_){
return honey.sql.strop("\"",p1__43898_SHARP_,"\"");
}),new cljs.core.Keyword(null,"as","as",1148689641),false], null)], null)));
honey.sql.default_dialect = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ansi","ansi",1415977390).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(honey.sql.dialects)));
honey.sql.default_quoted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
honey.sql.default_quoted_always = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
honey.sql.default_quoted_snake = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
honey.sql.default_inline = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
honey.sql.default_checking = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"none","none",1333468478));
honey.sql.default_numbered = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
honey.sql._STAR_dialect_STAR_ = null;
honey.sql._STAR_options_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"caching","caching",-858598686),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"clause-order","clause-order",1290793904),new cljs.core.Keyword(null,"checking","checking",1748720818),new cljs.core.Keyword(null,"allow-suspicious-entities","allow-suspicious-entities",1032195474),new cljs.core.Keyword(null,"quoted-snake","quoted-snake",-1093133358),new cljs.core.Keyword(null,"numbered","numbered",-2119856269),new cljs.core.Keyword(null,"quoted-always","quoted-always",365198806),new cljs.core.Keyword(null,"quoted","quoted",2117344952),new cljs.core.Keyword(null,"dsl","dsl",397853177),new cljs.core.Keyword(null,"ignored-metadata","ignored-metadata",1251384217),new cljs.core.Keyword(null,"values-default-columns","values-default-columns",1352539997),new cljs.core.Keyword(null,"inline","inline",1399884222)],[null,null,honey.sql.default_clause_order,cljs.core.deref(honey.sql.default_checking),false,cljs.core.deref(honey.sql.default_quoted_snake),null,cljs.core.deref(honey.sql.default_quoted_always),cljs.core.deref(honey.sql.default_quoted),null,cljs.core.PersistentVector.EMPTY,null,cljs.core.deref(honey.sql.default_inline)]);
honey.sql._STAR_escape__QMARK__STAR_ = true;
honey.sql._STAR_nest_infix_STAR_ = true;
honey.sql.suspicious = ";";
honey.sql.suspicious_QMARK_ = (function honey$sql$suspicious_QMARK_(s){
return clojure.string.includes_QMARK_(s,honey.sql.suspicious);
});
honey.sql.suspicious_entity_check = (function honey$sql$suspicious_entity_check(entity){
if(cljs.core.truth_(new cljs.core.Keyword(null,"allow-suspicious-entities","allow-suspicious-entities",1032195474).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_options_STAR_))){
return null;
} else {
if(honey.sql.suspicious_QMARK_(entity)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("suspicious character found in entity: ",entity),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disallowed","disallowed",544208344),honey.sql.suspicious], null));
} else {
return null;
}
}
});
/**
 * If the current DSL expression being formatted contains the specified clause
 *   (as a keyword or symbol), returns that clause's value.
 */
honey.sql.clause_body = (function honey$sql$clause_body(clause){
var dsl = new cljs.core.Keyword(null,"dsl","dsl",397853177).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_options_STAR_);
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dsl,clause);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(dsl,(((clause instanceof cljs.core.Keyword))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(clause)):cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(clause))));
}
});
/**
 * Returns true if the current DSL expression being formatted
 *   contains the specified clause (as a keyword or symbol).
 */
honey.sql.contains_clause_QMARK_ = (function honey$sql$contains_clause_QMARK_(clause){
return (!((honey.sql.clause_body(clause) == null)));
});
/**
 * Helper to detect if MySQL is the current dialect.
 */
honey.sql.mysql_QMARK_ = (function honey$sql$mysql_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mysql","mysql",-1431590210),new cljs.core.Keyword(null,"dialect","dialect",-1374251073).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_dialect_STAR_));
});
/**
 * Helper to detect if SQL Server is the current dialect.
 */
honey.sql.sql_server_QMARK_ = (function honey$sql$sql_server_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sqlserver","sqlserver",222509918),new cljs.core.Keyword(null,"dialect","dialect",-1374251073).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_dialect_STAR_));
});
/**
 * In ClojureScript, just an alias for cljs.string/upper-case.
 */
honey.sql.upper_case = (function honey$sql$upper_case(s){
return clojure.string.upper_case(s);
});
/**
 * Replace _embedded_ hyphens with spaces.
 * 
 *   Hyphens at the start or end of a string should not be touched.
 */
honey.sql.dehyphen = (function honey$sql$dehyphen(s){
var G__43903 = s;
if(clojure.string.includes_QMARK_(s,"-")){
return clojure.string.replace(G__43903,/(\w)-(?=\w)/,"$1 ");
} else {
return G__43903;
}
});
/**
 * Return the namespace portion of a symbol, with dashes converted.
 */
honey.sql.namespace__ = (function honey$sql$namespace__(x){
try{var G__43905 = cljs.core.namespace(x);
if((G__43905 == null)){
return null;
} else {
return clojure.string.replace(G__43905,"-","_");
}
}catch (e43904){var t = e43904;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("expected symbol, found: ",cljs.core.type(x)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),x,new cljs.core.Keyword(null,"failure","failure",720415879),honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(t)], null));
}});
/**
 * Return the name portion of a symbol, with dashes converted.
 */
honey.sql.name__ = (function honey$sql$name__(x){
try{return clojure.string.replace(cljs.core.name(x),"-","_");
}catch (e43906){var t = e43906;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("expected symbol, found: ",cljs.core.type(x)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),x,new cljs.core.Keyword(null,"failure","failure",720415879),honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(t)], null));
}});
honey.sql.ensure_sequential = (function honey$sql$ensure_sequential(xs){
if(cljs.core.sequential_QMARK_(xs)){
return xs;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs], null);
}
});
/**
 * Basic regex for entities that do not need quoting.
 * Either:
 * * the whole entity is numeric (with optional underscores), or
 * * the first character is alphabetic (or underscore) and the rest is
 *   alphanumeric (or underscore).
 */
honey.sql.alphanumeric = /^(?:[0-9_]+|[A-Za-z_][A-Za-z0-9_]*)$/;
/**
 * Given a simple SQL entity (a keyword or symbol -- or string),
 *   return the equivalent SQL fragment (as a string -- no parameters).
 * 
 *   Handles quoting, splitting at / or ., replacing - with _ etc.
 */
honey.sql.format_entity = (function honey$sql$format_entity(var_args){
var G__43910 = arguments.length;
switch (G__43910) {
case 1:
return honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1 = (function (e){
return honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(e,cljs.core.PersistentArrayMap.EMPTY);
}));

(honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2 = (function (e,p__43911){
var map__43912 = p__43911;
var map__43912__$1 = cljs.core.__destructure_map(map__43912);
var aliased = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43912__$1,new cljs.core.Keyword(null,"aliased","aliased",-125439273));
var drop_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43912__$1,new cljs.core.Keyword(null,"drop-ns","drop-ns",-1721308319));
var dialect = honey.sql._STAR_dialect_STAR_;
var map__43913 = honey.sql._STAR_options_STAR_;
var map__43913__$1 = cljs.core.__destructure_map(map__43913);
var quoted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43913__$1,new cljs.core.Keyword(null,"quoted","quoted",2117344952));
var quoted_snake = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43913__$1,new cljs.core.Keyword(null,"quoted-snake","quoted-snake",-1093133358));
var quoted_always = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43913__$1,new cljs.core.Keyword(null,"quoted-always","quoted-always",365198806));
var e__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = aliased;
if(cljs.core.truth_(and__5023__auto__)){
return (((e instanceof cljs.core.Keyword)) && (clojure.string.starts_with_QMARK_(cljs.core.name(e),"'")));
} else {
return and__5023__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(e),(1)):e);
var col_fn = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"col-fn","col-fn",69324006).cljs$core$IFn$_invoke$arity$1(dialect);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.truth_((function (){var or__5025__auto____$1 = quoted;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return typeof e__$1 === 'string';
}
})())){
if(cljs.core.truth_(quoted_snake)){
return honey.sql.name__;
} else {
return cljs.core.name;
}
} else {
return honey.sql.name__;
}
}
})();
var col_e = (col_fn.cljs$core$IFn$_invoke$arity$1 ? col_fn.cljs$core$IFn$_invoke$arity$1(e__$1) : col_fn.call(null,e__$1));
var dialect_q = new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$2(dialect,cljs.core.identity);
var quote_fn = (cljs.core.truth_((function (){var or__5025__auto__ = quoted;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return typeof e__$1 === 'string';
}
})())?dialect_q:(((quoted == null))?(function honey$sql$opt_quote(part){
if(cljs.core.truth_((function (){var G__43914 = quoted_always;
if((G__43914 == null)){
return null;
} else {
return cljs.core.re_find(G__43914,part);
}
})())){
return (dialect_q.cljs$core$IFn$_invoke$arity$1 ? dialect_q.cljs$core$IFn$_invoke$arity$1(part) : dialect_q.call(null,part));
} else {
if(cljs.core.truth_(cljs.core.re_find(honey.sql.alphanumeric,part))){
return part;
} else {
return (dialect_q.cljs$core$IFn$_invoke$arity$1 ? dialect_q.cljs$core$IFn$_invoke$arity$1(part) : dialect_q.call(null,part));

}
}
}):(cljs.core.truth_(quoted_always)?(function honey$sql$always_quote(part){
if(cljs.core.truth_(cljs.core.re_find(quoted_always,part))){
return (dialect_q.cljs$core$IFn$_invoke$arity$1 ? dialect_q.cljs$core$IFn$_invoke$arity$1(part) : dialect_q.call(null,part));
} else {
return part;
}
}):cljs.core.identity
)));
var parts_fn = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"parts-fn","parts-fn",1152861).cljs$core$IFn$_invoke$arity$1(dialect);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (function (p1__43907_SHARP_){
var temp__5823__auto__ = (cljs.core.truth_((function (){var or__5025__auto____$1 = drop_ns;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return typeof e__$1 === 'string';
}
})())?null:honey.sql.namespace__(e__$1));
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,p1__43907_SHARP_], null);
} else {
if(cljs.core.truth_(aliased)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43907_SHARP_], null);
} else {
return honey.sql.util.split_by_separator(p1__43907_SHARP_,".");
}
}
});
}
})();
var parts = (parts_fn.cljs$core$IFn$_invoke$arity$1 ? parts_fn.cljs$core$IFn$_invoke$arity$1(col_e) : parts_fn.call(null,col_e));
var entity = honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(".",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__43908_SHARP_){
var G__43915 = p1__43908_SHARP_;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("*",p1__43908_SHARP_)){
return (quote_fn.cljs$core$IFn$_invoke$arity$1 ? quote_fn.cljs$core$IFn$_invoke$arity$1(G__43915) : quote_fn.call(null,G__43915));
} else {
return G__43915;
}
})),parts);
honey.sql.suspicious_entity_check(entity);

return entity;
}));

(honey.sql.format_entity.cljs$lang$maxFixedArity = 2);

/**
 * Given a keyword, return a SQL representation of it as a string.
 * 
 *   A keyword whose name begins with a single quote is left exactly as-is
 *   (with the `:` and `'` removed), otherwise a `:kebab-case` keyword
 *   becomes a `KEBAB CASE` (uppercase) string with hyphens replaced
 *   by spaces, e.g., `:insert-into` => `INSERT INTO`.
 * 
 *   Any namespace qualifier is ignored.
 * 
 *   Any ? is escaped to ??.
 */
honey.sql.sql_kw = (function honey$sql$sql_kw(k){
if(cljs.core.truth_(k)){
var n = (function (){var G__43916 = cljs.core.name(k);
if(cljs.core.truth_(honey.sql._STAR_escape__QMARK__STAR_)){
return clojure.string.replace(G__43916,"?","??");
} else {
return G__43916;
}
})();
if(clojure.string.starts_with_QMARK_(n,"'")){
var ident = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(1));
var ident_l = clojure.string.lower_case(ident);
var _STAR_options_STAR__orig_val__43917 = honey.sql._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__43918 = (function (){var G__43919 = honey.sql._STAR_options_STAR_;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ident_l,"array")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43919,new cljs.core.Keyword(null,"quoted","quoted",2117344952),null);
} else {
return G__43919;
}
})();
(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__temp_val__43918);

try{return honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ident));
}finally {(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__orig_val__43917);
}} else {
return honey.sql.upper_case(honey.sql.dehyphen(n));
}
} else {
return null;
}
});
/**
 * Given a symbol, produce a keyword, retaining the namespace
 *   qualifier, if any.
 */
honey.sql.sym__GT_kw = (function honey$sql$sym__GT_kw(s){
if((s instanceof cljs.core.Symbol)){
var temp__5823__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,cljs.core.name(s));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(s));
}
} else {
return s;
}
});
/**
 * Given a keyword, produce a symbol, retaining the namespace
 *   qualifier, if any.
 */
honey.sql.kw__GT_sym = (function honey$sql$kw__GT_sym(k){
if((k instanceof cljs.core.Keyword)){
var temp__5823__auto__ = cljs.core.namespace(k);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(n,cljs.core.name(k));
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k));
}
} else {
return k;
}
});
honey.sql.inline_map = (function honey$sql$inline_map(var_args){
var args__5755__auto__ = [];
var len__5749__auto___45292 = arguments.length;
var i__5750__auto___45293 = (0);
while(true){
if((i__5750__auto___45293 < len__5749__auto___45292)){
args__5755__auto__.push((arguments[i__5750__auto___45293]));

var G__45294 = (i__5750__auto___45293 + (1));
i__5750__auto___45293 = G__45294;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return honey.sql.inline_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(honey.sql.inline_map.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__43929){
var vec__43933 = p__43929;
var open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43933,(0),null);
var close = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43933,(1),null);
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3((function (){var or__5025__auto__ = open;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "{";
}
})(),honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__43936){
var vec__43937 = p__43936;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43937,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43937,(1),null);
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(k),": ",honey.sql.protocols.sqlize(v));
})),x),(function (){var or__5025__auto__ = close;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "}";
}
})());
}));

(honey.sql.inline_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(honey.sql.inline_map.cljs$lang$applyTo = (function (seq43924){
var G__43925 = cljs.core.first(seq43924);
var seq43924__$1 = cljs.core.next(seq43924);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43925,seq43924__$1);
}));

(honey.sql.protocols.InlineValue["null"] = true);

(honey.sql.protocols.sqlize["null"] = (function (_){
return "NULL";
}));

(honey.sql.protocols.InlineValue["string"] = true);

(honey.sql.protocols.sqlize["string"] = (function (x){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("'",clojure.string.replace(x,"'","''"),"'");
}));

(cljs.core.Keyword.prototype.honey$sql$protocols$InlineValue$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.honey$sql$protocols$InlineValue$sqlize$arity$1 = (function (x){
var x__$1 = this;
return honey.sql.sql_kw(x__$1);
}));

(cljs.core.Symbol.prototype.honey$sql$protocols$InlineValue$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.honey$sql$protocols$InlineValue$sqlize$arity$1 = (function (x){
var x__$1 = this;
return honey.sql.sql_kw(x__$1);
}));

(cljs.core.PersistentVector.prototype.honey$sql$protocols$InlineValue$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.honey$sql$protocols$InlineValue$sqlize$arity$1 = (function (x){
var x__$1 = this;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("[",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(honey.sql.protocols.sqlize),x__$1),"]");
}));

(cljs.core.PersistentArrayMap.prototype.honey$sql$protocols$InlineValue$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.honey$sql$protocols$InlineValue$sqlize$arity$1 = (function (x){
var x__$1 = this;
return honey.sql.inline_map(x__$1);
}));

(cljs.core.PersistentHashMap.prototype.honey$sql$protocols$InlineValue$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.honey$sql$protocols$InlineValue$sqlize$arity$1 = (function (x){
var x__$1 = this;
return honey.sql.inline_map(x__$1);
}));

(honey.sql.protocols.InlineValue["_"] = true);

(honey.sql.protocols.sqlize["_"] = (function (x){
if(typeof x === 'string'){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("'",clojure.string.replace(x,"'","''"),"'");
} else {
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(x);
}
}));
honey.sql.sqlize_value = (function honey$sql$sqlize_value(x){
return honey.sql.protocols.sqlize(x);
});
honey.sql.param_value = (function honey$sql$param_value(k){
var map__43946 = honey.sql._STAR_options_STAR_;
var map__43946__$1 = cljs.core.__destructure_map(map__43946);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43946__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.contains_QMARK_(params,k)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,k);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("missing parameter value for ",k),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.keys(params)], null));
}
});
honey.sql.__GT_param = (function honey$sql$__GT_param(k){
return cljs.core.with_meta(cljs.core.constantly(k),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("honey.sql","wrapper","honey.sql/wrapper",465758343),(function (fk,_){
return honey.sql.param_value((fk.cljs$core$IFn$_invoke$arity$0 ? fk.cljs$core$IFn$_invoke$arity$0() : fk.call(null)));
})], null));
});
honey.sql.__GT_numbered = (function honey$sql$__GT_numbered(v){
var map__43947 = honey.sql._STAR_options_STAR_;
var map__43947__$1 = cljs.core.__destructure_map(map__43947);
var numbered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43947__$1,new cljs.core.Keyword(null,"numbered","numbered",-2119856269));
var n = cljs.core.count(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(numbered,cljs.core.conj,v));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("$",n),cljs.core.with_meta(cljs.core.constantly((n - (1))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("honey.sql","wrapper","honey.sql/wrapper",465758343),(function (fk,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(numbered),(fk.cljs$core$IFn$_invoke$arity$0 ? fk.cljs$core$IFn$_invoke$arity$0() : fk.call(null)));
})], null))], null);
});
honey.sql.__GT_numbered_param = (function honey$sql$__GT_numbered_param(k){
var map__43952 = honey.sql._STAR_options_STAR_;
var map__43952__$1 = cljs.core.__destructure_map(map__43952);
var numbered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43952__$1,new cljs.core.Keyword(null,"numbered","numbered",-2119856269));
var n = cljs.core.count(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(numbered,cljs.core.conj,k));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("$",n),cljs.core.with_meta(cljs.core.constantly((n - (1))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("honey.sql","wrapper","honey.sql/wrapper",465758343),(function (fk,_){
return honey.sql.param_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(numbered),(fk.cljs$core$IFn$_invoke$arity$0 ? fk.cljs$core$IFn$_invoke$arity$0() : fk.call(null))));
})], null))], null);
});
honey.sql.format_fn_name = (function honey$sql$format_fn_name(x){
return honey.sql.upper_case(clojure.string.replace(cljs.core.name(x),"-","_"));
});
honey.sql.format_simple_var = (function honey$sql$format_simple_var(var_args){
var G__43954 = arguments.length;
switch (G__43954) {
case 1:
return honey.sql.format_simple_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return honey.sql.format_simple_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(honey.sql.format_simple_var.cljs$core$IFn$_invoke$arity$1 = (function (x){
var c = (((x instanceof cljs.core.Keyword))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(x),(1)):honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(x));
return honey.sql.format_simple_var.cljs$core$IFn$_invoke$arity$3(x,c,cljs.core.PersistentArrayMap.EMPTY);
}));

(honey.sql.format_simple_var.cljs$core$IFn$_invoke$arity$3 = (function (x,c,opts){
if(clojure.string.starts_with_QMARK_(c,"'")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(c,(1));
} else {
return honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(x,opts);
}
}));

(honey.sql.format_simple_var.cljs$lang$maxFixedArity = 3);

honey.sql.format_var = (function honey$sql$format_var(var_args){
var G__43957 = arguments.length;
switch (G__43957) {
case 1:
return honey.sql.format_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return honey.sql.format_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(honey.sql.format_var.cljs$core$IFn$_invoke$arity$1 = (function (x){
return honey.sql.format_var.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentArrayMap.EMPTY);
}));

(honey.sql.format_var.cljs$core$IFn$_invoke$arity$2 = (function (x,opts){
var map__43960 = honey.sql._STAR_options_STAR_;
var map__43960__$1 = cljs.core.__destructure_map(map__43960);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43960__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var numbered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43960__$1,new cljs.core.Keyword(null,"numbered","numbered",-2119856269));
var c = (((x instanceof cljs.core.Keyword))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(x),(1)):honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(x));
if(clojure.string.starts_with_QMARK_(c,"%")){
var vec__43961 = honey.sql.util.split_by_separator(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(c,(1)),".");
var seq__43962 = cljs.core.seq(vec__43961);
var first__43963 = cljs.core.first(seq__43962);
var seq__43962__$1 = cljs.core.next(seq__43962);
var f = first__43963;
var args = seq__43962__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(honey.sql.format_fn_name(f),"(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__43955_SHARP_){
return honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__43955_SHARP_),opts);
})),args),")")], null);
} else {
if(clojure.string.starts_with_QMARK_(c,"?")){
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(c,(1)));
if(cljs.core.truth_(inline)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sqlize_value(honey.sql.param_value(k))], null);
} else {
if(cljs.core.truth_(numbered)){
return honey.sql.__GT_numbered_param(k);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?",honey.sql.__GT_param(k)], null);

}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.format_simple_var.cljs$core$IFn$_invoke$arity$3(x,c,opts)], null);

}
}
}));

(honey.sql.format_var.cljs$lang$maxFixedArity = 2);

honey.sql.format_entity_alias = (function honey$sql$format_entity_alias(x){
if(cljs.core.sequential_QMARK_(x)){
var s = cljs.core.first(x);
var pair_QMARK_ = ((1) < cljs.core.count(x));
if(cljs.core.map_QMARK_(s)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("selectable cannot be statement!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selectable","selectable",370587038),s], null));
} else {
}

var vec__43973 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(s) : honey.sql.format_expr.call(null,s));
var seq__43974 = cljs.core.seq(vec__43973);
var first__43975 = cljs.core.first(seq__43974);
var seq__43974__$1 = cljs.core.next(seq__43974);
var sql = first__43975;
var params = seq__43974__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43976 = sql;
if(pair_QMARK_){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(G__43976,((((cljs.core.contains_QMARK_(honey.sql._STAR_dialect_STAR_,new cljs.core.Keyword(null,"as","as",1148689641))) && (cljs.core.not(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_dialect_STAR_)))))?" ":" AS "),honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(cljs.core.second(x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aliased","aliased",-125439273),true], null)));
} else {
return G__43976;
}
})()], null),params);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(x)], null);

}
});
honey.sql.bigquery__STAR__except_replace_QMARK_ = (function honey$sql$bigquery__STAR__except_replace_QMARK_(p__43984){
var vec__43985 = p__43984;
var maybe__STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43985,(0),null);
var maybe_except_replace = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43985,(1),null);
var and__5023__auto__ = cljs.core.ident_QMARK_(maybe__STAR_);
if(and__5023__auto__){
var and__5023__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.name(maybe__STAR_))) || (clojure.string.ends_with_QMARK_(cljs.core.name(maybe__STAR_),".*")));
if(and__5023__auto____$1){
var and__5023__auto____$2 = cljs.core.ident_QMARK_(maybe_except_replace);
if(and__5023__auto____$2){
var G__43989 = cljs.core.name(maybe_except_replace);
var fexpr__43988 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["replace",null,"except",null], null), null);
return (fexpr__43988.cljs$core$IFn$_invoke$arity$1 ? fexpr__43988.cljs$core$IFn$_invoke$arity$1(G__43989) : fexpr__43988.call(null,G__43989));
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
/**
 * Format BigQuery * except/replace phrases #281.
 */
honey.sql.format_bigquery__STAR__except_replace = (function honey$sql$format_bigquery__STAR__except_replace(p__44008){
var vec__44009 = p__44008;
var seq__44010 = cljs.core.seq(vec__44009);
var first__44011 = cljs.core.first(seq__44010);
var seq__44010__$1 = cljs.core.next(seq__44010);
var star_cols = first__44011;
var x = seq__44010__$1;
var vec__44016 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(star_cols) : honey.sql.format_expr.call(null,star_cols));
var seq__44017 = cljs.core.seq(vec__44016);
var first__44018 = cljs.core.first(seq__44017);
var seq__44017__$1 = cljs.core.next(seq__44017);
var sql = first__44018;
var params = seq__44017__$1;
var vec__44019 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__44026,p__44027){
var vec__44029 = p__44026;
var seq__44030 = cljs.core.seq(vec__44029);
var first__44031 = cljs.core.first(seq__44030);
var seq__44030__$1 = cljs.core.next(seq__44030);
var sql__$1 = first__44031;
var params__$1 = seq__44030__$1;
var vec__44032 = p__44027;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44032,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44032,(1),null);
var vec__44036 = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.ident_QMARK_(k);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("except",cljs.core.name(k));
if(and__5023__auto____$1){
return arg;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?(function (){var vec__44039 = (function (){var G__44042 = arg;
var G__44043 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aliased","aliased",-125439273),true], null);
return (honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$2(G__44042,G__44043) : honey.sql.format_expr_list.call(null,G__44042,G__44043));
})();
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44039,(0),null);
var params__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44039,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(honey.sql.sql_kw(k)," (",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls),")"),params__$2], null);
})():(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.ident_QMARK_(k);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("replace",cljs.core.name(k));
if(and__5023__auto____$1){
return arg;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?(function (){var vec__44052 = (honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$3 ? honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$3(null,true,arg) : honey.sql.format_selects_common.call(null,null,true,arg));
var seq__44053 = cljs.core.seq(vec__44052);
var first__44054 = cljs.core.first(seq__44053);
var seq__44053__$1 = cljs.core.next(seq__44053);
var sql__$2 = first__44054;
var params__$2 = seq__44053__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(honey.sql.sql_kw(k)," (",sql__$2,")"),params__$2], null);
})():(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("bigquery * only supports except and replace",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clause","clause",1479668060),k,new cljs.core.Keyword(null,"arg","arg",-1747261837),arg], null))})()
));
var sql_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44036,(0),null);
var params_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44036,(1),null);
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44055 = sql_SINGLEQUOTE_;
if(cljs.core.truth_(sql__$1)){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql__$1," ",G__44055);
} else {
return G__44055;
}
})()], null),params__$1,params_SINGLEQUOTE_);
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),x));
var seq__44020 = cljs.core.seq(vec__44019);
var first__44021 = cljs.core.first(seq__44020);
var seq__44020__$1 = cljs.core.next(seq__44020);
var sql_SINGLEQUOTE_ = first__44021;
var params_SINGLEQUOTE_ = seq__44020__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql," ",sql_SINGLEQUOTE_)], null),params,params_SINGLEQUOTE_);
});
/**
 * Given a general selectable item, split it into the subject selectable,
 * an optional alias, and any temporal clauses present.
 */
honey.sql.split_alias_temporal = (function honey$sql$split_alias_temporal(p__44070){
var vec__44071 = p__44070;
var seq__44072 = cljs.core.seq(vec__44071);
var first__44073 = cljs.core.first(seq__44072);
var seq__44072__$1 = cljs.core.next(seq__44072);
var selectable = first__44073;
var first__44073__$1 = cljs.core.first(seq__44072__$1);
var seq__44072__$2 = cljs.core.next(seq__44072__$1);
var alias_for = first__44073__$1;
var first__44073__$2 = cljs.core.first(seq__44072__$2);
var seq__44072__$3 = cljs.core.next(seq__44072__$2);
var for_part = first__44073__$2;
var more = seq__44072__$3;
var no_alias_QMARK_ = (function (){var and__5023__auto__ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"for","for",316745208,null),null,new cljs.core.Keyword(null,"for","for",-1323786319),null], null), null),alias_for);
if(and__5023__auto__){
return for_part;
} else {
return and__5023__auto__;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selectable,(cljs.core.truth_(no_alias_QMARK_)?null:alias_for),(cljs.core.truth_(no_alias_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_for,for_part], null),more):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"for","for",316745208,null),null,new cljs.core.Keyword(null,"for","for",-1323786319),null], null), null),for_part))?cljs.core.cons(for_part,more):(cljs.core.truth_((function (){var or__5025__auto__ = for_part;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.seq(more);
}
})())?new cljs.core.Keyword("honey.sql","too-many!","honey.sql/too-many!",993345894):null)))], null);
});
/**
 * :for :some-time <period>
 * 
 * <period> may be:
 * * :all
 * * :as-of <value>
 * * :from <value> :to <value>
 * * :between <value> :and <value>
 * 
 * Then generic format here is to alternate between sql-kw and format-expr
 * as we walk the <period> sequence.
 */
honey.sql.format_temporal = (function honey$sql$format_temporal(p__44074){
var vec__44075 = p__44074;
var seq__44076 = cljs.core.seq(vec__44075);
var first__44077 = cljs.core.first(seq__44076);
var seq__44076__$1 = cljs.core.next(seq__44076);
var for_part = first__44077;
var first__44077__$1 = cljs.core.first(seq__44076__$1);
var seq__44076__$2 = cljs.core.next(seq__44076__$1);
var the_time = first__44077__$1;
var more = seq__44076__$2;
var control = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sql-kw","sql-kw",310316580),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sql_kw(x)], null);
}),new cljs.core.Keyword(null,"expr","expr",745722291)], null),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return honey.sql.format_expr;},new cljs.core.Symbol("honey.sql","format-expr","honey.sql/format-expr",-761931772,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-expr","format-expr",-1508928093,null),"honey/sql.cljc",21,1,41,true,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(honey.sql.format_expr)?honey.sql.format_expr.cljs$lang$test:null)])),new cljs.core.Keyword(null,"sql-kw","sql-kw",310316580)], null)], null);
var sqls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sql_kw(for_part),honey.sql.format_fn_name(the_time)], null);
var params = cljs.core.PersistentVector.EMPTY;
var more__$1 = more;
var fmt = new cljs.core.Keyword(null,"sql-kw","sql-kw",310316580);
while(true){
if(cljs.core.seq(more__$1)){
var vec__44087 = more__$1;
var seq__44088 = cljs.core.seq(vec__44087);
var first__44089 = cljs.core.first(seq__44088);
var seq__44088__$1 = cljs.core.next(seq__44088);
var x = first__44089;
var more__$2 = seq__44088__$1;
var vec__44090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(control,fmt);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44090,(0),null);
var fmt__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44090,(1),null);
var vec__44093 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
var seq__44094 = cljs.core.seq(vec__44093);
var first__44095 = cljs.core.first(seq__44094);
var seq__44094__$1 = cljs.core.next(seq__44094);
var sql_SINGLEQUOTE_ = first__44095;
var params_SINGLEQUOTE_ = seq__44094__$1;
var G__45309 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sqls,sql_SINGLEQUOTE_);
var G__45310 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(params,params_SINGLEQUOTE_);
var G__45311 = more__$2;
var G__45312 = fmt__$1;
sqls = G__45309;
params = G__45310;
more__$1 = G__45311;
fmt = G__45312;
continue;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(" ",sqls)], null),params);
}
break;
}
});
/**
 * If the expression has metadata, format it as a sequence of keywords,
 * treating `:foo true` as `FOO` and `:foo :bar` as `FOO BAR`.
 * Return nil if there is no metadata.
 */
honey.sql.format_meta = (function honey$sql$format_meta(var_args){
var G__44097 = arguments.length;
switch (G__44097) {
case 1:
return honey.sql.format_meta.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return honey.sql.format_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(honey.sql.format_meta.cljs$core$IFn$_invoke$arity$1 = (function (x){
return honey.sql.format_meta.cljs$core$IFn$_invoke$arity$2(x,null);
}));

(honey.sql.format_meta.cljs$core$IFn$_invoke$arity$2 = (function (x,sep){
var temp__5825__auto__ = cljs.core.meta(x);
if(cljs.core.truth_(temp__5825__auto__)){
var data = temp__5825__auto__;
var items = cljs.core.reduce_kv((function (acc,k,v){
if(typeof v === 'number'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(v)], 0));
} else {
if(v === true){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
if(cljs.core.ident_QMARK_(v)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
} else {
if(typeof v === 'string'){
honey.sql.suspicious_entity_check(v);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
} else {
return acc;

}
}
}
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,data,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"end-column","end-column",1425389514)], null),new cljs.core.Keyword(null,"ignored-metadata","ignored-metadata",1251384217).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_options_STAR_))));
if(cljs.core.seq(items)){
return honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(sep," "),cljs.core.map.cljs$core$IFn$_invoke$arity$1(honey.sql.sql_kw),items);
} else {
return null;
}
} else {
return null;
}
}));

(honey.sql.format_meta.cljs$lang$maxFixedArity = 2);

/**
 * Format all the possible ways to represent a table/column selection.
 */
honey.sql.format_item_selection = (function honey$sql$format_item_selection(x,as){
if(cljs.core.truth_(honey.sql.bigquery__STAR__except_replace_QMARK_(x))){
return honey.sql.format_bigquery__STAR__except_replace(x);
} else {
var use_index = new cljs.core.Keyword(null,"use-index","use-index",-1316566248).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
var hints = (cljs.core.truth_(use_index)?honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(honey.sql.format_simple_var,use_index)):honey.sql.format_meta.cljs$core$IFn$_invoke$arity$2(x,","));
var vec__44099 = honey.sql.split_alias_temporal(x);
var selectable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44099,(0),null);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44099,(1),null);
var temporal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44099,(2),null);
var _ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("honey.sql","too-many!","honey.sql/too-many!",993345894),temporal))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("illegal syntax in select expression",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),selectable,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),cljs.core.nnext(x)], null))})():null);
var vec__44102 = ((cljs.core.map_QMARK_(selectable))?(function (){var G__44111 = selectable;
var G__44112 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2(G__44111,G__44112) : honey.sql.format_dsl.call(null,G__44111,G__44112));
})():(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(selectable) : honey.sql.format_expr.call(null,selectable)));
var seq__44103 = cljs.core.seq(vec__44102);
var first__44104 = cljs.core.first(seq__44103);
var seq__44103__$1 = cljs.core.next(seq__44103);
var sql = first__44104;
var params = seq__44103__$1;
var _STAR__qualifier = (function (){var and__5023__auto__ = cljs.core.map_QMARK_(alias);
if(and__5023__auto__){
return cljs.core.some((function (p1__44098_SHARP_){
return cljs.core.contains_QMARK_(alias,p1__44098_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exclude","exclude",-1230250334),new cljs.core.Keyword(null,"rename","rename",1508157613),new cljs.core.Symbol(null,"exclude","exclude",410281193,null),new cljs.core.Symbol(null,"rename","rename",-1146278156,null)], null));
} else {
return and__5023__auto__;
}
})();
var vec__44105 = (cljs.core.truth_(alias)?((cljs.core.sequential_QMARK_(alias))?(function (){var vec__44113 = (function (){var G__44116 = alias;
var G__44117 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aliased","aliased",-125439273),true], null);
return (honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$2(G__44116,G__44117) : honey.sql.format_expr_list.call(null,G__44116,G__44117));
})();
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44113,(0),null);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44113,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(" ",sqls)], null),params__$1);
})():(cljs.core.truth_(_STAR__qualifier)?(honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(alias) : honey.sql.format_dsl.call(null,alias)):(function (){var G__44118 = alias;
var G__44119 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aliased","aliased",-125439273),true], null);
return (honey.sql.format_selectable_dsl.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_selectable_dsl.cljs$core$IFn$_invoke$arity$2(G__44118,G__44119) : honey.sql.format_selectable_dsl.call(null,G__44118,G__44119));
})()
)):null);
var seq__44106 = cljs.core.seq(vec__44105);
var first__44107 = cljs.core.first(seq__44106);
var seq__44106__$1 = cljs.core.next(seq__44106);
var sql_SINGLEQUOTE_ = first__44107;
var params_SINGLEQUOTE_ = seq__44106__$1;
var vec__44108 = (cljs.core.truth_(temporal)?honey.sql.format_temporal(temporal):null);
var seq__44109 = cljs.core.seq(vec__44108);
var first__44110 = cljs.core.first(seq__44109);
var seq__44109__$1 = cljs.core.next(seq__44109);
var sql_SINGLEQUOTE__SINGLEQUOTE_ = first__44110;
var params_SINGLEQUOTE__SINGLEQUOTE_ = seq__44109__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(sql,(cljs.core.truth_(sql_SINGLEQUOTE__SINGLEQUOTE_)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" ",sql_SINGLEQUOTE__SINGLEQUOTE_):null),(cljs.core.truth_(sql_SINGLEQUOTE_)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(as)?(cljs.core.truth_((function (){var or__5025__auto__ = _STAR__qualifier;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((cljs.core.contains_QMARK_(honey.sql._STAR_dialect_STAR_,new cljs.core.Keyword(null,"as","as",1148689641))) && (cljs.core.not(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_dialect_STAR_))));
}
})())?" ":" AS "):" "),sql_SINGLEQUOTE_):null),(cljs.core.truth_(hints)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(" ",(cljs.core.truth_(use_index)?"USE INDEX":"WITH")," (",hints,")"):null))], null),params,params_SINGLEQUOTE_,params_SINGLEQUOTE__SINGLEQUOTE_);
}
});
honey.sql.format_selectable_dsl = (function honey$sql$format_selectable_dsl(var_args){
var G__44121 = arguments.length;
switch (G__44121) {
case 1:
return honey.sql.format_selectable_dsl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return honey.sql.format_selectable_dsl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(honey.sql.format_selectable_dsl.cljs$core$IFn$_invoke$arity$1 = (function (x){
return honey.sql.format_selectable_dsl.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentArrayMap.EMPTY);
}));

(honey.sql.format_selectable_dsl.cljs$core$IFn$_invoke$arity$2 = (function (x,p__44122){
var map__44123 = p__44122;
var map__44123__$1 = cljs.core.__destructure_map(map__44123);
var opts = map__44123__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44123__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var aliased = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44123__$1,new cljs.core.Keyword(null,"aliased","aliased",-125439273));
if(cljs.core.map_QMARK_(x)){
var G__44124 = x;
var G__44125 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2(G__44124,G__44125) : honey.sql.format_dsl.call(null,G__44124,G__44125));
} else {
if(cljs.core.sequential_QMARK_(x)){
return honey.sql.format_item_selection(x,as);
} else {
if(cljs.core.ident_QMARK_(x)){
if(cljs.core.truth_(aliased)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(x,opts)], null);
} else {
return honey.sql.format_var.cljs$core$IFn$_invoke$arity$2(x,opts);
}
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = aliased;
if(cljs.core.truth_(and__5023__auto__)){
return typeof x === 'string';
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(x,opts)], null);
} else {
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(x) : honey.sql.format_expr.call(null,x));

}
}
}
}
}));

(honey.sql.format_selectable_dsl.cljs$lang$maxFixedArity = 2);

honey.sql.reduce_sql = (function honey$sql$reduce_sql(var_args){
var G__44127 = arguments.length;
switch (G__44127) {
case 1:
return honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,xs);
}));

(honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2 = (function (xform,xs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,(function() {
var G__45324 = null;
var G__45324__1 = (function (res){
return res;
});
var G__45324__2 = (function (p__44128,p__44129){
var vec__44130 = p__44128;
var sql = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44130,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44130,(1),null);
var vec__44133 = p__44129;
var seq__44134 = cljs.core.seq(vec__44133);
var first__44135 = cljs.core.first(seq__44134);
var seq__44134__$1 = cljs.core.next(seq__44134);
var sql_SINGLEQUOTE_ = first__44135;
var params_SINGLEQUOTE_ = seq__44134__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sql,sql_SINGLEQUOTE_),((params_SINGLEQUOTE_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(params,params_SINGLEQUOTE_):params)], null);
});
G__45324 = function(p__44128,p__44129){
switch(arguments.length){
case 1:
return G__45324__1.call(this,p__44128);
case 2:
return G__45324__2.call(this,p__44128,p__44129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45324.cljs$core$IFn$_invoke$arity$1 = G__45324__1;
G__45324.cljs$core$IFn$_invoke$arity$2 = G__45324__2;
return G__45324;
})()
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),xs);
}));

(honey.sql.reduce_sql.cljs$lang$maxFixedArity = 2);

honey.sql.format_on_set_op = (function honey$sql$format_on_set_op(k,xs){
var vec__44137 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44136_SHARP_){
return (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(p1__44136_SHARP_) : honey.sql.format_dsl.call(null,p1__44136_SHARP_));
}),xs));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44137,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44137,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(" ",honey.sql.sql_kw(k)," "),sqls)], null),params);
});
/**
 * Return true if the expression should be treated as an inline SQL keeyword.
 */
honey.sql.inline_kw_QMARK_ = (function honey$sql$inline_kw_QMARK_(expr){
var and__5023__auto__ = cljs.core.ident_QMARK_(expr);
if(and__5023__auto__){
var and__5023__auto____$1 = (cljs.core.namespace(expr) == null);
if(and__5023__auto____$1){
return cljs.core.re_find(/^![a-zA-Z]/,cljs.core.name(expr));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
/**
 * If there are inline (SQL) keywords, use them to join the formatted
 *   expressions together. Otherwise behaves like plain format-expr-list.
 * 
 *   This allows for argument lists like:
 *   * [:overlay :foo :*placing :?subs :*from 3 :*for 4]
 *   * [:trim :*leading-from :bar]
 */
honey.sql.format_interspersed_expr_list = (function honey$sql$format_interspersed_expr_list(var_args){
var G__44142 = arguments.length;
switch (G__44142) {
case 1:
return honey.sql.format_interspersed_expr_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return honey.sql.format_interspersed_expr_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(honey.sql.format_interspersed_expr_list.cljs$core$IFn$_invoke$arity$1 = (function (args){
return honey.sql.format_interspersed_expr_list.cljs$core$IFn$_invoke$arity$2(args,cljs.core.PersistentArrayMap.EMPTY);
}));

(honey.sql.format_interspersed_expr_list.cljs$core$IFn$_invoke$arity$2 = (function (args,opts){
var exprs = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__44140_SHARP_){
if(cljs.core.truth_(honey.sql.inline_kw_QMARK_(p1__44140_SHARP_))){
return null;
} else {
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(p1__44140_SHARP_,opts) : honey.sql.format_expr.call(null,p1__44140_SHARP_,opts));
}
}),args);
var args__$1 = args;
var prev_in = false;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(args__$1)){
var vec__44155 = args__$1;
var seq__44156 = cljs.core.seq(vec__44155);
var first__44157 = cljs.core.first(seq__44156);
var seq__44156__$1 = cljs.core.next(seq__44156);
var arg = first__44157;
var args_SINGLEQUOTE_ = seq__44156__$1;
if(cljs.core.truth_(honey.sql.inline_kw_QMARK_(arg))){
var sql = honey.sql.sql_kw(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(arg),(1))));
if(cljs.core.seq(result)){
var vec__44162 = cljs.core.peek(result);
var seq__44163 = cljs.core.seq(vec__44162);
var first__44164 = cljs.core.first(seq__44163);
var seq__44163__$1 = cljs.core.next(seq__44163);
var cur = first__44164;
var params = seq__44163__$1;
var G__45327 = exprs;
var G__45328 = args_SINGLEQUOTE_;
var G__45329 = true;
var G__45330 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(result),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(cur," ",sql)], null),params));
exprs = G__45327;
args__$1 = G__45328;
prev_in = G__45329;
result = G__45330;
continue;
} else {
var G__45331 = exprs;
var G__45332 = args_SINGLEQUOTE_;
var G__45333 = true;
var G__45334 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sql], null));
exprs = G__45331;
args__$1 = G__45332;
prev_in = G__45333;
result = G__45334;
continue;
}
} else {
if(prev_in){
var vec__44165 = cljs.core.peek(result);
var seq__44166 = cljs.core.seq(vec__44165);
var first__44167 = cljs.core.first(seq__44166);
var seq__44166__$1 = cljs.core.next(seq__44166);
var cur = first__44167;
var params = seq__44166__$1;
var vec__44168 = cljs.core.first(exprs);
var seq__44169 = cljs.core.seq(vec__44168);
var first__44170 = cljs.core.first(seq__44169);
var seq__44169__$1 = cljs.core.next(seq__44169);
var sql = first__44170;
var params_SINGLEQUOTE_ = seq__44169__$1;
var G__45335 = cljs.core.rest(exprs);
var G__45336 = args_SINGLEQUOTE_;
var G__45337 = false;
var G__45338 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(result),honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(cur," ",sql)], null),params,params_SINGLEQUOTE_));
exprs = G__45335;
args__$1 = G__45336;
prev_in = G__45337;
result = G__45338;
continue;
} else {
var G__45339 = cljs.core.rest(exprs);
var G__45340 = args_SINGLEQUOTE_;
var G__45341 = false;
var G__45342 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.first(exprs));
exprs = G__45339;
args__$1 = G__45340;
prev_in = G__45341;
result = G__45342;
continue;
}
}
} else {
return honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$1(result);
}
break;
}
}));

(honey.sql.format_interspersed_expr_list.cljs$lang$maxFixedArity = 2);

/**
 * Given a sequence of expressions represented as data, return a pair
 *   where the first element is a sequence of SQL fragments and the second
 *   element is a sequence of parameters. The caller should join the SQL
 *   fragments with whatever appropriate delimiter is needed and then
 *   return a vector whose first element is the complete SQL string and
 *   whose subsequent elements are the parameters:
 * 
 *   (let [[sqls params] (format-expr-list data opts)]
 *  (into [(str/join delim sqls)] params))
 * 
 *   This is intended to be used when writing your own formatters to
 *   extend the DSL supported by HoneySQL.
 */
honey.sql.format_expr_list = (function honey$sql$format_expr_list(var_args){
var G__44173 = arguments.length;
switch (G__44173) {
case 1:
return honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1 = (function (exprs){
return honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$2(exprs,cljs.core.PersistentArrayMap.EMPTY);
}));

(honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$2 = (function (exprs,opts){
if(cljs.core.sequential_QMARK_(exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("format-expr-list expects a sequence of expressions, found: ",cljs.core.type(exprs)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exprs","exprs",1795829094),exprs], null));
}

return honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44171_SHARP_){
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(p1__44171_SHARP_,opts) : honey.sql.format_expr.call(null,p1__44171_SHARP_,opts));
})),exprs);
}));

(honey.sql.format_expr_list.cljs$lang$maxFixedArity = 2);

honey.sql.format_columns = (function honey$sql$format_columns(k,xs){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"columns","columns",1998437288),k)) && (((honey.sql.contains_clause_QMARK_(new cljs.core.Keyword(null,"insert-into","insert-into",382212789))) || (((honey.sql.contains_clause_QMARK_(new cljs.core.Keyword(null,"patch-into","patch-into",-245698135))) || (honey.sql.contains_clause_QMARK_(new cljs.core.Keyword(null,"replace-into","replace-into",139321349))))))))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vec__44175 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop-ns","drop-ns",-1721308319),true], null));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44175,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44175,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls),")")], null),params);
}
});
honey.sql.format_selects_common = (function honey$sql$format_selects_common(var_args){
var G__44180 = arguments.length;
switch (G__44180) {
case 3:
return honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$3 = (function (prefix,as,xs){
return honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$4(prefix,as,xs,null);
}));

(honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$4 = (function (prefix,as,xs,wrap){
var qualifier = honey.sql.format_meta.cljs$core$IFn$_invoke$arity$1(xs);
var prefix__$1 = (cljs.core.truth_(prefix)?(function (){var G__44184 = prefix;
if(cljs.core.truth_(qualifier)){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(G__44184," ",qualifier);
} else {
return G__44184;
}
})():qualifier);
var vec__44181 = (cljs.core.truth_((function (){var and__5023__auto__ = wrap;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.sequential_QMARK_(xs)) && (((1) < cljs.core.count(xs))));
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null):null);
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44181,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44181,(1),null);
if(cljs.core.sequential_QMARK_(xs)){
var vec__44185 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44178_SHARP_){
return honey.sql.format_selectable_dsl.cljs$core$IFn$_invoke$arity$2(p1__44178_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as], null));
})),xs);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44185,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44185,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"checking","checking",1748720818).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_options_STAR_))){
} else {
if(cljs.core.empty_QMARK_(xs)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(prefix__$1," empty column list is illegal"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clause","clause",1479668060),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix__$1], null),xs)], null));
} else {
}
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4((cljs.core.truth_(prefix__$1)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(prefix__$1," "):null),pre,honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls),post)], null),params);
} else {
var vec__44188 = honey.sql.format_selectable_dsl.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as], null));
var seq__44189 = cljs.core.seq(vec__44188);
var first__44190 = cljs.core.first(seq__44189);
var seq__44189__$1 = cljs.core.next(seq__44189);
var sql = first__44190;
var params = seq__44189__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(prefix__$1)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(prefix__$1," "):null),sql)], null),params);
}
}));

(honey.sql.format_selects_common.cljs$lang$maxFixedArity = 4);

honey.sql.format_selects = (function honey$sql$format_selects(k,xs){
return honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$4(honey.sql.sql_kw(k),(function (){var fexpr__44191 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Symbol(null,"select","select",-1506602266,null),null,new cljs.core.Keyword(null,"facet","facet",-801327574),null,new cljs.core.Keyword(null,"rename","rename",1508157613),null,new cljs.core.Keyword(null,"select-distinct","select-distinct",-412636114),null,new cljs.core.Keyword(null,"window","window",724519534),null,new cljs.core.Symbol(null,"rename","rename",-1146278156,null),null,new cljs.core.Symbol(null,"select-distinct","select-distinct",1227895413,null),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Symbol(null,"from","from",-839142725,null),null,new cljs.core.Symbol(null,"window","window",-1929916235,null),null,new cljs.core.Symbol(null,"facet","facet",839203953,null),null,new cljs.core.Symbol(null,"delete-from","delete-from",-1983671803,null),null,new cljs.core.Keyword(null,"delete-from","delete-from",670763966),null,new cljs.core.Keyword(null,"select","select",1147833503),null], null), null);
return (fexpr__44191.cljs$core$IFn$_invoke$arity$1 ? fexpr__44191.cljs$core$IFn$_invoke$arity$1(k) : fexpr__44191.call(null,k));
})(),xs,(function (){var fexpr__44192 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"exclude","exclude",-1230250334),null,new cljs.core.Keyword(null,"rename","rename",1508157613),null,new cljs.core.Symbol(null,"exclude","exclude",410281193,null),null,new cljs.core.Symbol(null,"rename","rename",-1146278156,null),null], null), null);
return (fexpr__44192.cljs$core$IFn$_invoke$arity$1 ? fexpr__44192.cljs$core$IFn$_invoke$arity$1(k) : fexpr__44192.call(null,k));
})());
});
honey.sql.format_selects_on = (function honey$sql$format_selects_on(_,xs){
var vec__44193 = xs;
var seq__44194 = cljs.core.seq(vec__44193);
var first__44195 = cljs.core.first(seq__44194);
var seq__44194__$1 = cljs.core.next(seq__44194);
var on = first__44195;
var cols = seq__44194__$1;
var vec__44196 = (function (){var G__44202 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"distinct-on","distinct-on",341946250)], null),on);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(G__44202) : honey.sql.format_expr.call(null,G__44202));
})();
var seq__44197 = cljs.core.seq(vec__44196);
var first__44198 = cljs.core.first(seq__44197);
var seq__44197__$1 = cljs.core.next(seq__44197);
var sql = first__44198;
var params = seq__44197__$1;
var vec__44199 = honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$3(honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(new cljs.core.Keyword(null,"select","select",1147833503))," ",sql),true,cols);
var seq__44200 = cljs.core.seq(vec__44199);
var first__44201 = cljs.core.first(seq__44200);
var seq__44200__$1 = cljs.core.next(seq__44200);
var sql_SINGLEQUOTE_ = first__44201;
var params_SINGLEQUOTE_ = seq__44200__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sql_SINGLEQUOTE_], null),params,params_SINGLEQUOTE_);
});
honey.sql.format_select_top = (function honey$sql$format_select_top(k,xs){
var vec__44204 = xs;
var seq__44205 = cljs.core.seq(vec__44204);
var first__44206 = cljs.core.first(seq__44205);
var seq__44205__$1 = cljs.core.next(seq__44205);
var top = first__44206;
var cols = seq__44205__$1;
var vec__44207 = ((cljs.core.sequential_QMARK_(top))?(function (){var top_q_QMARK_ = (function (p1__44203_SHARP_){
var and__5023__auto__ = cljs.core.ident_QMARK_(p1__44203_SHARP_);
if(and__5023__auto__){
var G__44217 = honey.sql.sym__GT_kw(p1__44203_SHARP_);
var fexpr__44216 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-ties","with-ties",-1030545914),null,new cljs.core.Keyword(null,"percent","percent",2031453817),null], null), null);
return (fexpr__44216.cljs$core$IFn$_invoke$arity$1 ? fexpr__44216.cljs$core$IFn$_invoke$arity$1(G__44217) : fexpr__44216.call(null,G__44217));
} else {
return and__5023__auto__;
}
});
var r_top = cljs.core.reverse(top);
var top_quals = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(top_q_QMARK_,r_top);
var top_list = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(top_q_QMARK_,r_top);
if(cljs.core.seq(top_quals)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(top_list))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(top_list),cljs.core.reverse(top_quals));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unparseable TOP expression",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),top], null));
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [top], null);
}
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [top], null));
var seq__44208 = cljs.core.seq(vec__44207);
var first__44209 = cljs.core.first(seq__44208);
var seq__44208__$1 = cljs.core.next(seq__44208);
var top__$1 = first__44209;
var parts = seq__44208__$1;
var vec__44210 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(top__$1) : honey.sql.format_expr.call(null,top__$1));
var seq__44211 = cljs.core.seq(vec__44210);
var first__44212 = cljs.core.first(seq__44211);
var seq__44211__$1 = cljs.core.next(seq__44211);
var sql = first__44212;
var params = seq__44211__$1;
var vec__44213 = honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$3(honey.sql.util.str.cljs$core$IFn$_invoke$arity$variadic(honey.sql.sql_kw(k),"(",sql,")",((cljs.core.seq(parts))?" ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(honey.sql.sql_kw),parts)], 0)),true,cols);
var seq__44214 = cljs.core.seq(vec__44213);
var first__44215 = cljs.core.first(seq__44214);
var seq__44214__$1 = cljs.core.next(seq__44214);
var sql_SINGLEQUOTE_ = first__44215;
var params_SINGLEQUOTE_ = seq__44214__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sql_SINGLEQUOTE_], null),params,params_SINGLEQUOTE_);
});
honey.sql.format_select_into = (function honey$sql$format_select_into(k,xs){
var vec__44218 = honey.sql.ensure_sequential(xs);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44218,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44218,(1),null);
var vec__44221 = (cljs.core.truth_(e)?(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(e) : honey.sql.format_expr.call(null,e)):null);
var seq__44222 = cljs.core.seq(vec__44221);
var first__44223 = cljs.core.first(seq__44222);
var seq__44222__$1 = cljs.core.next(seq__44222);
var sql = first__44223;
var params = seq__44222__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(honey.sql.sql_kw(k)," ",honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(v),(cljs.core.truth_(sql)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(" ",honey.sql.sql_kw(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"into","into",-150836029),k))?new cljs.core.Keyword(null,"in","in",-1531184865):new cljs.core.Keyword(null,"limit","limit",-1355822363)))," ",sql):null))], null),params);
});
honey.sql.format_with_part = (function honey$sql$format_with_part(x){
if(cljs.core.sequential_QMARK_(x)){
var vec__44224 = (function (){var G__44227 = cljs.core.second(x);
return (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(G__44227) : honey.sql.format_dsl.call(null,G__44227));
})();
var seq__44225 = cljs.core.seq(vec__44224);
var first__44226 = cljs.core.first(seq__44225);
var seq__44225__$1 = cljs.core.next(seq__44225);
var sql = first__44226;
var params = seq__44225__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(cljs.core.first(x))," ",sql)], null),params);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(x)], null);
}
});
/**
 * Given a sequence of pairs, format as a series of SQL keywords followed by
 * entities or comma-separated entities (or, if following TO, an expression).
 */
honey.sql.format_with_query_tail_STAR_ = (function honey$sql$format_with_query_tail_STAR_(pairs){
return honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__44228){
var vec__44229 = p__44228;
var kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44229,(0),null);
var entities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44229,(1),null);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"default","default",-347290801,null),null,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Symbol(null,"to","to",1832630534,null),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),kw)){
var vec__44232 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(entities) : honey.sql.format_expr.call(null,entities));
var seq__44233 = cljs.core.seq(vec__44232);
var first__44234 = cljs.core.first(seq__44233);
var seq__44233__$1 = cljs.core.next(seq__44233);
var sql = first__44234;
var params = seq__44233__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(kw)," ",sql)], null),params);
} else {
if(cljs.core.sequential_QMARK_(entities)){
var vec__44235 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(entities);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44235,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44235,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(kw)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls))], null),params);
} else {
var vec__44238 = honey.sql.format_var.cljs$core$IFn$_invoke$arity$1(entities);
var seq__44239 = cljs.core.seq(vec__44238);
var first__44240 = cljs.core.first(seq__44239);
var seq__44239__$1 = cljs.core.next(seq__44239);
var sql = first__44240;
var params = seq__44239__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(kw)," ",sql)], null),params);

}
}
})),pairs);
});
/**
 * Given the tail of a WITH query, that may start with [not] materialized,
 * partition it into pairs of keywords and entities, and format that, then
 * return the formatted SQL and parameters.
 */
honey.sql.format_with_query_tail = (function honey$sql$format_with_query_tail(xs){
var xs__$1 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"not-materialized","not-materialized",1249775419,null),null,new cljs.core.Keyword(null,"not-materialized","not-materialized",-390756108),null,new cljs.core.Symbol(null,"materialized","materialized",-175037468,null),null,new cljs.core.Keyword(null,"materialized","materialized",-1815568995),null], null), null),cljs.core.first(xs)))?cljs.core.rest(xs):xs);
var vec__44242 = honey.sql.format_with_query_tail_STAR_(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),xs__$1));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44242,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44242,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(" ",sqls)], null),params);
});
honey.sql.format_with = (function honey$sql$format_with(k,xs){
var as_fn = (function (p__44248){
var vec__44249 = p__44248;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44249,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44249,(1),null);
var materialization = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44249,(2),null);
var pred__44252 = cljs.core._EQ_;
var expr__44253 = materialization;
if(cljs.core.truth_((pred__44252.cljs$core$IFn$_invoke$arity$2 ? pred__44252.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"materialized","materialized",-1815568995),expr__44253) : pred__44252.call(null,new cljs.core.Keyword(null,"materialized","materialized",-1815568995),expr__44253)))){
return "AS MATERIALIZED";
} else {
if(cljs.core.truth_((function (){var G__44255 = new cljs.core.Symbol(null,"materialized","materialized",-175037468,null);
var G__44257 = expr__44253;
return (pred__44252.cljs$core$IFn$_invoke$arity$2 ? pred__44252.cljs$core$IFn$_invoke$arity$2(G__44255,G__44257) : pred__44252.call(null,G__44255,G__44257));
})())){
return "AS MATERIALIZED";
} else {
if(cljs.core.truth_((pred__44252.cljs$core$IFn$_invoke$arity$2 ? pred__44252.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not-materialized","not-materialized",-390756108),expr__44253) : pred__44252.call(null,new cljs.core.Keyword(null,"not-materialized","not-materialized",-390756108),expr__44253)))){
return "AS NOT MATERIALIZED";
} else {
if(cljs.core.truth_((function (){var G__44258 = new cljs.core.Symbol(null,"not-materialized","not-materialized",1249775419,null);
var G__44259 = expr__44253;
return (pred__44252.cljs$core$IFn$_invoke$arity$2 ? pred__44252.cljs$core$IFn$_invoke$arity$2(G__44258,G__44259) : pred__44252.call(null,G__44258,G__44259));
})())){
return "AS NOT MATERIALIZED";
} else {
return "AS";
}
}
}
}
});
var vec__44245 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__44261){
var vec__44262 = p__44261;
var seq__44263 = cljs.core.seq(vec__44262);
var first__44264 = cljs.core.first(seq__44263);
var seq__44263__$1 = cljs.core.next(seq__44263);
var x = first__44264;
var first__44264__$1 = cljs.core.first(seq__44263__$1);
var seq__44263__$2 = cljs.core.next(seq__44263__$1);
var expr = first__44264__$1;
var tail = seq__44263__$2;
var with$ = vec__44262;
var vec__44265 = honey.sql.format_with_part(x);
var seq__44266 = cljs.core.seq(vec__44265);
var first__44267 = cljs.core.first(seq__44266);
var seq__44266__$1 = cljs.core.next(seq__44266);
var sql = first__44267;
var params = seq__44266__$1;
var non_query_expr_QMARK_ = (!(cljs.core.map_QMARK_(expr)));
var vec__44268 = ((non_query_expr_QMARK_)?(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(expr) : honey.sql.format_expr.call(null,expr)):(honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(expr) : honey.sql.format_dsl.call(null,expr)));
var seq__44269 = cljs.core.seq(vec__44268);
var first__44270 = cljs.core.first(seq__44269);
var seq__44269__$1 = cljs.core.next(seq__44269);
var sql_SINGLEQUOTE_ = first__44270;
var params_SINGLEQUOTE_ = seq__44269__$1;
var vec__44271 = ((non_query_expr_QMARK_)?honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql_SINGLEQUOTE_," AS ",sql)], null),params_SINGLEQUOTE_,params):honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(sql," ",as_fn(with$)," ",honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",sql_SINGLEQUOTE_,")"))], null),params,params_SINGLEQUOTE_));
var seq__44272 = cljs.core.seq(vec__44271);
var first__44273 = cljs.core.first(seq__44272);
var seq__44272__$1 = cljs.core.next(seq__44272);
var sql_SINGLEQUOTE__SINGLEQUOTE_ = first__44273;
var params_SINGLEQUOTE__SINGLEQUOTE_ = seq__44272__$1;
var sql_params_SINGLEQUOTE__SINGLEQUOTE_ = vec__44271;
var vec__44274 = honey.sql.format_with_query_tail(tail);
var seq__44275 = cljs.core.seq(vec__44274);
var first__44276 = cljs.core.first(seq__44275);
var seq__44275__$1 = cljs.core.next(seq__44275);
var tail_sql = first__44276;
var tail_params = seq__44275__$1;
if(cljs.core.seq(tail_sql)){
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql_SINGLEQUOTE__SINGLEQUOTE_," ",tail_sql)], null),params_SINGLEQUOTE__SINGLEQUOTE_,tail_params);
} else {
return sql_params_SINGLEQUOTE__SINGLEQUOTE_;
}
})),xs);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44245,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44245,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls))], null),params);
});
honey.sql.format_selector = (function honey$sql$format_selector(k,xs){
return honey.sql.format_selects(k,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs], null));
});
honey.sql.format_window = (function honey$sql$format_window(k,xs){
return honey.sql.format_selects(k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),xs)));
});
honey.sql.format_insert = (function honey$sql$format_insert(k,table){
var vec__44284 = (function (){var temp__5823__auto__ = honey.sql.clause_body(new cljs.core.Keyword(null,"columns","columns",1998437288));
if(cljs.core.truth_(temp__5823__auto__)){
var columns = temp__5823__auto__;
return cljs.core.cons(columns,honey.sql.format_columns(new cljs.core.Keyword(null,"force-columns","force-columns",779933315),columns));
} else {
var temp__5825__auto__ = honey.sql.clause_body(new cljs.core.Keyword(null,"values","values",372645556));
if(cljs.core.truth_(temp__5825__auto__)){
var values = temp__5825__auto__;
return (honey.sql.columns_from_values.cljs$core$IFn$_invoke$arity$2 ? honey.sql.columns_from_values.cljs$core$IFn$_invoke$arity$2(values,false) : honey.sql.columns_from_values.call(null,values,false));
} else {
return null;
}
}
})();
var cols_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44284,(0),null);
var cols_sql_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44284,(1),null);
var cols_params_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44284,(2),null);
var vec__44287 = ((((cljs.core.sequential_QMARK_(table)) && (cljs.core.map_QMARK_(cljs.core.first(table)))))?cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(table):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,table], null));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44287,(0),null);
var table__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44287,(1),null);
var overriding = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"overriding-value","overriding-value",945614086).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto__)){
var type = temp__5825__auto__;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(" OVERRIDING ",honey.sql.sql_kw(type)," VALUE");
} else {
return null;
}
})();
if(cljs.core.sequential_QMARK_(table__$1)){
if(cljs.core.map_QMARK_(cljs.core.second(table__$1))){
var vec__44291 = table__$1;
var table__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44291,(0),null);
var statement = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44291,(1),null);
var vec__44294 = ((((cljs.core.sequential_QMARK_(table__$2)) && (cljs.core.sequential_QMARK_(cljs.core.second(table__$2)))))?table__$2:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table__$2], null));
var table__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44294,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44294,(1),null);
var vec__44297 = (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(statement) : honey.sql.format_dsl.call(null,statement));
var seq__44298 = cljs.core.seq(vec__44297);
var first__44299 = cljs.core.first(seq__44298);
var seq__44298__$1 = cljs.core.next(seq__44298);
var sql = first__44299;
var params = seq__44298__$1;
var vec__44300 = honey.sql.format_entity_alias(table__$3);
var seq__44301 = cljs.core.seq(vec__44300);
var first__44302 = cljs.core.first(seq__44301);
var seq__44301__$1 = cljs.core.next(seq__44301);
var t_sql = first__44302;
var t_params = seq__44301__$1;
var vec__44303 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Var(function(){return honey.sql.format_entity_alias;},new cljs.core.Symbol("honey.sql","format-entity-alias","honey.sql/format-entity-alias",-793484786,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-entity-alias","format-entity-alias",457072549,null),"honey/sql.cljc",27,1,499,499,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(honey.sql.format_entity_alias)?honey.sql.format_entity_alias.cljs$lang$test:null)]))),cols);
var c_sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44303,(0),null);
var c_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44303,(1),null);
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$variadic(honey.sql.sql_kw(k)," ",t_sql," ",((cljs.core.seq(cols))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",c_sqls),") "):((cljs.core.seq(cols_SINGLEQUOTE_))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(cols_sql_SINGLEQUOTE_," "):null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([overriding,sql], 0))], null),t_params,c_params,cols_params_SINGLEQUOTE_,params);
} else {
if(cljs.core.sequential_QMARK_(cljs.core.second(table__$1))){
var vec__44308 = table__$1;
var table__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44308,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44308,(1),null);
var vec__44311 = honey.sql.format_entity_alias(table__$2);
var seq__44312 = cljs.core.seq(vec__44311);
var first__44313 = cljs.core.first(seq__44312);
var seq__44312__$1 = cljs.core.next(seq__44312);
var t_sql = first__44313;
var t_params = seq__44312__$1;
var vec__44314 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Var(function(){return honey.sql.format_entity_alias;},new cljs.core.Symbol("honey.sql","format-entity-alias","honey.sql/format-entity-alias",-793484786,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-entity-alias","format-entity-alias",457072549,null),"honey/sql.cljc",27,1,499,499,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(honey.sql.format_entity_alias)?honey.sql.format_entity_alias.cljs$lang$test:null)]))),cols);
var c_sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44314,(0),null);
var c_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44314,(1),null);
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$variadic(honey.sql.sql_kw(k)," ",t_sql," (",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",c_sqls),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")",overriding], 0))], null),t_params,c_params);
} else {
var vec__44317 = honey.sql.format_entity_alias(table__$1);
var seq__44318 = cljs.core.seq(vec__44317);
var first__44319 = cljs.core.first(seq__44318);
var seq__44318__$1 = cljs.core.next(seq__44318);
var sql = first__44319;
var params = seq__44318__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(honey.sql.sql_kw(k)," ",sql,((cljs.core.seq(cols_SINGLEQUOTE_))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" ",cols_sql_SINGLEQUOTE_):null),overriding)], null),cols_params_SINGLEQUOTE_,params);

}
}
} else {
var vec__44320 = honey.sql.format_entity_alias(table__$1);
var seq__44321 = cljs.core.seq(vec__44320);
var first__44322 = cljs.core.first(seq__44321);
var seq__44321__$1 = cljs.core.next(seq__44321);
var sql = first__44322;
var params = seq__44321__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(honey.sql.sql_kw(k)," ",sql,((cljs.core.seq(cols_SINGLEQUOTE_))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" ",cols_sql_SINGLEQUOTE_):null),overriding)], null),cols_params_SINGLEQUOTE_,params);
}
});
honey.sql.format_join = (function honey$sql$format_join(k,clauses){
var vec__44323 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),(function() {
var G__45368 = null;
var G__45368__1 = (function (res){
return res;
});
var G__45368__2 = (function (p__44326,p__44327){
var vec__44328 = p__44326;
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44328,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44328,(1),null);
var vec__44331 = p__44327;
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44331,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44331,(1),null);
var vec__44334 = honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),k))?new cljs.core.Keyword(null,"inner-join","inner-join",659431740):k)),true,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [j], null));
var seq__44335 = cljs.core.seq(vec__44334);
var first__44336 = cljs.core.first(seq__44335);
var seq__44335__$1 = cljs.core.next(seq__44335);
var sql_j = first__44336;
var params_j = seq__44335__$1;
var sqls__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sqls,sql_j);
if(((cljs.core.sequential_QMARK_(e)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"using","using",-705812733,null),null,new cljs.core.Keyword(null,"using","using",1948623036),null], null), null),cljs.core.first(e))))){
var vec__44337 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Var(function(){return honey.sql.format_entity_alias;},new cljs.core.Symbol("honey.sql","format-entity-alias","honey.sql/format-entity-alias",-793484786,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-entity-alias","format-entity-alias",457072549,null),"honey/sql.cljc",27,1,499,499,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(honey.sql.format_entity_alias)?honey.sql.format_entity_alias.cljs$lang$test:null)]))),cljs.core.rest(e));
var u_sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44337,(0),null);
var u_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44337,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sqls__$1,"USING",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",u_sqls),")")], 0)),honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(params,params_j,u_params)], null);
} else {
var vec__44340 = (cljs.core.truth_(e)?(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(e) : honey.sql.format_expr.call(null,e)):null);
var seq__44341 = cljs.core.seq(vec__44340);
var first__44342 = cljs.core.first(seq__44341);
var seq__44341__$1 = cljs.core.next(seq__44341);
var sql = first__44342;
var params_SINGLEQUOTE_ = seq__44341__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44343 = sqls__$1;
if(cljs.core.truth_(e)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__44343,"ON",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sql], 0));
} else {
return G__44343;
}
})(),honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(params,params_j,params_SINGLEQUOTE_)], null);
}
});
G__45368 = function(p__44326,p__44327){
switch(arguments.length){
case 1:
return G__45368__1.call(this,p__44326);
case 2:
return G__45368__2.call(this,p__44326,p__44327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45368.cljs$core$IFn$_invoke$arity$1 = G__45368__1;
G__45368.cljs$core$IFn$_invoke$arity$2 = G__45368__2;
return G__45368;
})()
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),clauses);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44323,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44323,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(" ",sqls)], null),params);
});
/**
 * Map of shorthand to longhand join names.
 */
honey.sql.join_by_aliases = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"inner-join","inner-join",659431740),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"left-join","left-join",-672831855),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"right-join","right-join",-56349359),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"inner-join","inner-join",659431740),new cljs.core.Keyword(null,"outer","outer",-375185956),new cljs.core.Keyword(null,"outer-join","outer-join",1845838048),new cljs.core.Keyword(null,"full","full",436801220),new cljs.core.Keyword(null,"full-join","full-join",1305476385),new cljs.core.Keyword(null,"cross","cross",194557789),new cljs.core.Keyword(null,"cross-join","cross-join",-1043003533)], null);
honey.sql.valid_joins = cljs.core.set(cljs.core.vals(honey.sql.join_by_aliases));
/**
 * Clauses should be a sequence of join types followed
 *   by their table and condition, or a sequence of join
 *   clauses, so that you can construct a series of joins
 *   in a specific order.
 */
honey.sql.format_join_by = (function honey$sql$format_join_by(_,clauses){
var joins = ((cljs.core.every_QMARK_(cljs.core.map_QMARK_,clauses))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__44344_SHARP_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.val),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__44344_SHARP_], 0));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vector)),clauses):cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.ident_QMARK_,clauses));
if(cljs.core.even_QMARK_(cljs.core.count(joins))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(":join-by expects a sequence of join clauses",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses], null));
}

var vec__44345 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__44348,p__44349){
var vec__44350 = p__44348;
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44350,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44350,(1),null);
var vec__44353 = p__44349;
var vec__44356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44353,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44356,(0),null);
var vec__44359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44353,(1),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44359,(0),null);
var j_SINGLEQUOTE_ = honey.sql.sym__GT_kw(j);
var j_SINGLEQUOTE___$1 = honey.sql.sym__GT_kw((honey.sql.join_by_aliases.cljs$core$IFn$_invoke$arity$2 ? honey.sql.join_by_aliases.cljs$core$IFn$_invoke$arity$2(j_SINGLEQUOTE_,j_SINGLEQUOTE_) : honey.sql.join_by_aliases.call(null,j_SINGLEQUOTE_,j_SINGLEQUOTE_)));
if(cljs.core.truth_((honey.sql.valid_joins.cljs$core$IFn$_invoke$arity$1 ? honey.sql.valid_joins.cljs$core$IFn$_invoke$arity$1(j_SINGLEQUOTE___$1) : honey.sql.valid_joins.call(null,j_SINGLEQUOTE___$1)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(":join-by found an invalid join type ",j),cljs.core.PersistentArrayMap.EMPTY);
}

var vec__44362 = (function (){var G__44365 = cljs.core.PersistentArrayMap.createAsIfByAssoc([j_SINGLEQUOTE___$1,clauses__$1]);
return (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(G__44365) : honey.sql.format_dsl.call(null,G__44365));
})();
var seq__44363 = cljs.core.seq(vec__44362);
var first__44364 = cljs.core.first(seq__44363);
var seq__44363__$1 = cljs.core.next(seq__44363);
var sql_SINGLEQUOTE_ = first__44364;
var params_SINGLEQUOTE_ = seq__44363__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sqls,sql_SINGLEQUOTE_),cljs.core.into.cljs$core$IFn$_invoke$arity$2(params,params_SINGLEQUOTE_)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),joins));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44345,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44345,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(" ",sqls)], null),params);
});
honey.sql.format_on_expr = (function honey$sql$format_on_expr(k,e){
if((((!(cljs.core.sequential_QMARK_(e)))) || (cljs.core.seq(e)))){
var vec__44366 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(e) : honey.sql.format_expr.call(null,e));
var seq__44367 = cljs.core.seq(vec__44366);
var first__44368 = cljs.core.first(seq__44367);
var seq__44367__$1 = cljs.core.next(seq__44367);
var sql = first__44368;
var params = seq__44367__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",sql)], null),params);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
honey.sql.format_group_by = (function honey$sql$format_group_by(k,xs){
var vec__44369 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(honey.sql.ensure_sequential(xs));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44369,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44369,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls))], null),params);
});
honey.sql.format_order_by = (function honey$sql$format_order_by(k,xs){
var xs__$1 = honey.sql.ensure_sequential(xs);
var dirs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44372_SHARP_){
if(cljs.core.sequential_QMARK_(p1__44372_SHARP_)){
return cljs.core.second(p1__44372_SHARP_);
} else {
return null;
}
}),xs__$1);
var vec__44374 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44373_SHARP_){
if(cljs.core.sequential_QMARK_(p1__44373_SHARP_)){
return cljs.core.first(p1__44373_SHARP_);
} else {
return p1__44373_SHARP_;
}
}),xs__$1));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44374,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44374,(1),null);
if(cljs.core.seq(sqls)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(k)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(honey.sql.sql_kw(k)," "):null),honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (sql,dir){
if(cljs.core.truth_((function (){var or__5025__auto__ = k;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return dir;
}
})())){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql," ",honey.sql.sql_kw((function (){var or__5025__auto__ = dir;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"asc","asc",356854569);
}
})()));
} else {
return sql;
}
}),sqls,dirs)))], null),params);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
honey.sql.format_lock_strength = (function honey$sql$format_lock_strength(k,xs){
var vec__44377 = honey.sql.ensure_sequential(xs);
var strength = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44377,(0),null);
var tables = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44377,(1),null);
var nowait = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44377,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(honey.sql.sql_kw(k)," ",honey.sql.sql_kw(strength),(cljs.core.truth_(tables)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.ident_QMARK_(tables);
if(and__5023__auto__){
var G__44381 = honey.sql.sym__GT_kw(tables);
var fexpr__44380 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-locked","skip-locked",-202896094),null,new cljs.core.Keyword(null,"nowait","nowait",-1298090166),null,new cljs.core.Keyword(null,"wait","wait",-260664777),null], null), null);
return (fexpr__44380.cljs$core$IFn$_invoke$arity$1 ? fexpr__44380.cljs$core$IFn$_invoke$arity$1(G__44381) : fexpr__44380.call(null,G__44381));
} else {
return and__5023__auto__;
}
})())?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" ",honey.sql.sql_kw(tables)):((cljs.core.sequential_QMARK_(tables))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" OF ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Var(function(){return honey.sql.format_entity;},new cljs.core.Symbol("honey.sql","format-entity","honey.sql/format-entity",-1824420277,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-entity","format-entity",618285344,null),"honey/sql.cljc",20,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aliased","aliased",1515092254,null),new cljs.core.Symbol(null,"drop-ns","drop-ns",-80776792,null)], null)], null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aliased","aliased",1515092254,null),new cljs.core.Symbol(null,"drop-ns","drop-ns",-80776792,null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,284,284,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aliased","aliased",1515092254,null),new cljs.core.Symbol(null,"drop-ns","drop-ns",-80776792,null)], null)], null)], null)),"Given a simple SQL entity (a keyword or symbol -- or string),\n  return the equivalent SQL fragment (as a string -- no parameters).\n\n  Handles quoting, splitting at / or ., replacing - with _ etc.",(cljs.core.truth_(honey.sql.format_entity)?honey.sql.format_entity.cljs$lang$test:null)]))),tables)):honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" OF ",honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(tables))
)),(cljs.core.truth_(nowait)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" ",honey.sql.sql_kw(nowait)):null)):null))], null);
});
honey.sql.columns_from_values = (function honey$sql$columns_from_values(xs,skip_cols_sql){
var first_xs = ((cljs.core.sequential_QMARK_(xs))?cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.ident_QMARK_,xs)):null);
if(cljs.core.map_QMARK_(first_xs)){
var cols_1 = cljs.core.keys(cljs.core.first(xs));
var cols_n = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.map_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.keys)),xs);
var cols = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cols_1),cols_n))?cols_1:cols_n);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cols,(cljs.core.truth_(skip_cols_sql)?null:honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44382_SHARP_){
return honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(p1__44382_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop-ns","drop-ns",-1721308319),true], null));
})),cols),")"))], null);
} else {
return null;
}
});
honey.sql.format_values = (function honey$sql$format_values(k,xs){
var map__44385 = honey.sql._STAR_options_STAR_;
var map__44385__$1 = cljs.core.__destructure_map(map__44385);
var values_default_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44385__$1,new cljs.core.Keyword(null,"values-default-columns","values-default-columns",1352539997));
var first_xs = ((cljs.core.sequential_QMARK_(xs))?cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.ident_QMARK_,xs)):null);
var row_ctr = ((cljs.core.sequential_QMARK_(xs)) && (((cljs.core.ident_QMARK_(cljs.core.first(xs))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"row","row",1070392006,null),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null),cljs.core.first(xs))))));
var xs__$1 = ((cljs.core.sequential_QMARK_(xs))?cljs.core.vec(xs):xs);
var xs__$2 = ((row_ctr)?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(xs__$1,(1)):xs__$1);
if(((cljs.core.ident_QMARK_(xs__$2)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"default","default",-347290801,null),null,new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null),xs__$2)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(xs__$2)," ",honey.sql.sql_kw(k))], null);
} else {
if(cljs.core.empty_QMARK_(xs__$2)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(honey.sql.sql_kw(k)," ()")], null);
} else {
if(cljs.core.sequential_QMARK_(first_xs)){
var n_1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.sequential_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count)),xs__$2);
var xs_SINGLEQUOTE_ = (cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,n_1))?xs__$2:(function (){var n_n = ((cljs.core.seq(n_1))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,n_1):null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n_n,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
} else {
return x;
}
}),xs__$2);
})());
var vec__44386 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__44389,x){
var vec__44390 = p__44389;
var sql = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44390,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44390,(1),null);
if(cljs.core.sequential_QMARK_(x)){
var vec__44393 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(x);
var sqls_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44393,(0),null);
var params_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44393,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sql,((cljs.core.sequential_QMARK_(sqls_SINGLEQUOTE_))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls_SINGLEQUOTE_),")"):sqls_SINGLEQUOTE_)),honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$2(params,params_SINGLEQUOTE_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sql,honey.sql.sql_kw(x)),params], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),xs_SINGLEQUOTE_);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44386,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44386,(1),null);
var sqls__$1 = ((row_ctr)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44383_SHARP_){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("ROW",p1__44383_SHARP_);
}),sqls):sqls);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls__$1))], null),params);
} else {
if(cljs.core.map_QMARK_(first_xs)){
var vec__44396 = honey.sql.columns_from_values(xs__$2,((honey.sql.contains_clause_QMARK_(new cljs.core.Keyword(null,"insert-into","insert-into",382212789))) || (((honey.sql.contains_clause_QMARK_(new cljs.core.Keyword(null,"patch-into","patch-into",-245698135))) || (((honey.sql.contains_clause_QMARK_(new cljs.core.Keyword(null,"replace-into","replace-into",139321349))) || (honey.sql.contains_clause_QMARK_(new cljs.core.Keyword(null,"columns","columns",1998437288)))))))));
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44396,(0),null);
var cols_sql = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44396,(1),null);
var vec__44399 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__44402,x){
var vec__44403 = p__44402;
var sql = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44403,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44403,(1),null);
if(cljs.core.map_QMARK_(x)){
var vec__44406 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44384_SHARP_){
var G__44409 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,p1__44384_SHARP_,((cljs.core.contains_QMARK_(values_default_columns,p1__44384_SHARP_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328)], null):null));
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(G__44409) : honey.sql.format_expr.call(null,G__44409));
})),cols);
var sqls_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44406,(0),null);
var params_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44406,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sql,((cljs.core.sequential_QMARK_(sqls_SINGLEQUOTE_))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls_SINGLEQUOTE_),")"):sqls_SINGLEQUOTE_)),honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$2(params,params_SINGLEQUOTE_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sql,honey.sql.sql_kw(x)),params], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),xs__$2);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44399,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44399,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4((cljs.core.truth_(cols_sql)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(cols_sql," "):null),honey.sql.sql_kw(k)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls))], null),params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(":values expects a sequence of rows (maps) or column values (sequences)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first","first",-644103046),cljs.core.first(xs__$2)], null));

}
}
}
}
});
honey.sql.format_set_exprs = (function honey$sql$format_set_exprs(k,xs){
var vec__44410 = cljs.core.reduce_kv((function (p__44413,v,e){
var vec__44414 = p__44413;
var sql = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44414,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44414,(1),null);
var vec__44417 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(e) : honey.sql.format_expr.call(null,e));
var seq__44418 = cljs.core.seq(vec__44417);
var first__44419 = cljs.core.first(seq__44418);
var seq__44418__$1 = cljs.core.next(seq__44418);
var sql_SINGLEQUOTE_ = first__44419;
var params_SINGLEQUOTE_ = seq__44418__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sql,honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop-ns","drop-ns",-1721308319),(!(honey.sql.mysql_QMARK_()))], null))," = ",sql_SINGLEQUOTE_)),((params_SINGLEQUOTE_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(params,params_SINGLEQUOTE_):params)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),xs);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44410,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44410,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls))], null),params);
});
honey.sql.format_on_conflict = (function honey$sql$format_on_conflict(k,x){
if(cljs.core.sequential_QMARK_(x)){
var exprs = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.map_QMARK_),x);
var n = cljs.core.count(exprs);
var vec__44420 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,x);
var seq__44421 = cljs.core.seq(vec__44420);
var first__44422 = cljs.core.first(seq__44421);
var seq__44421__$1 = cljs.core.next(seq__44421);
var clause = first__44422;
var more = seq__44421__$1;
var _ = ((cljs.core.seq(more))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported :on-conflict format",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clause","clause",1479668060),x], null))})():null);
var vec__44423 = ((cljs.core.seq(exprs))?honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
if(cljs.core.sequential_QMARK_(e)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),e], null);
} else {
return e;
}
}),exprs)):null);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44423,(0),null);
var expr_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44423,(1),null);
var vec__44426 = (cljs.core.truth_(clause)?(honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(clause) : honey.sql.format_dsl.call(null,clause)):null);
var seq__44427 = cljs.core.seq(vec__44426);
var first__44428 = cljs.core.first(seq__44427);
var seq__44427__$1 = cljs.core.next(seq__44427);
var sql = first__44428;
var clause_params = seq__44427__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k),(((n > (0)))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(" (",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls),")"):null),(cljs.core.truth_(sql)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" ",sql):null))], null),expr_params,clause_params);
} else {
var G__44429 = k;
var G__44430 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
return (honey.sql.format_on_conflict.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_on_conflict.cljs$core$IFn$_invoke$arity$2(G__44429,G__44430) : honey.sql.format_on_conflict.call(null,G__44429,G__44430));
}
});
honey.sql.format_do_update_set = (function honey$sql$format_do_update_set(k,x){
while(true){
if(cljs.core.map_QMARK_(x)){
if(((cljs.core.contains_QMARK_(x,new cljs.core.Keyword(null,"fields","fields",-1932066230))) || (cljs.core.contains_QMARK_(x,new cljs.core.Symbol(null,"fields","fields",-291534703,null))))){
var fields = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var fexpr__44437 = new cljs.core.Symbol(null,"fields","fields",-291534703,null);
return (fexpr__44437.cljs$core$IFn$_invoke$arity$1 ? fexpr__44437.cljs$core$IFn$_invoke$arity$1(x) : fexpr__44437.call(null,x));
}
})();
var vec__44431 = ((cljs.core.map_QMARK_(fields))?honey.sql.format_set_exprs(k,fields):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (k,x,fields){
return (function (e){
var e__$1 = honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop-ns","drop-ns",-1721308319),true], null));
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(e__$1," = EXCLUDED.",e__$1);
});})(k,x,fields))
),fields))], null));
var seq__44432 = cljs.core.seq(vec__44431);
var first__44433 = cljs.core.first(seq__44432);
var seq__44432__$1 = cljs.core.next(seq__44432);
var sets = first__44433;
var set_params = seq__44432__$1;
var where = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var fexpr__44438 = new cljs.core.Symbol(null,"where","where",-404264438,null);
return (fexpr__44438.cljs$core$IFn$_invoke$arity$1 ? fexpr__44438.cljs$core$IFn$_invoke$arity$1(x) : fexpr__44438.call(null,x));
}
})();
var vec__44434 = (cljs.core.truth_(where)?(function (){var G__44439 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"where","where",-2044795965),where], null);
return (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(G__44439) : honey.sql.format_dsl.call(null,G__44439));
})():null);
var seq__44435 = cljs.core.seq(vec__44434);
var first__44436 = cljs.core.first(seq__44435);
var seq__44435__$1 = cljs.core.next(seq__44435);
var sql = first__44436;
var params = seq__44435__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(sets,(cljs.core.truth_(sql)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" ",sql):null))], null),set_params,params);
} else {
return honey.sql.format_set_exprs(k,x);
}
} else {
if(cljs.core.sequential_QMARK_(x)){
var vec__44440 = cljs.core.split_with(cljs.core.complement(cljs.core.map_QMARK_),x);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44440,(0),null);
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44440,(1),null);
if(cljs.core.seq(cols)){
var G__45391 = k;
var G__45392 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fields","fields",-1932066230),cols,new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clauses))], null);
k = G__45391;
x = G__45392;
continue;
} else {
var G__45393 = k;
var G__45394 = cljs.core.first(clauses);
k = G__45393;
x = G__45394;
continue;
}
} else {
var e = honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop-ns","drop-ns",-1721308319),true], null));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(honey.sql.sql_kw(k)," ",e," = EXCLUDED.",e)], null);

}
}
break;
}
});
honey.sql.format_simple_clause = (function honey$sql$format_simple_clause(c,context){
var _STAR_options_STAR__orig_val__44443 = honey.sql._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__44444 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(honey.sql._STAR_options_STAR_,new cljs.core.Keyword(null,"inline","inline",1399884222),true);
(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__temp_val__44444);

try{var vec__44446 = (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(c) : honey.sql.format_dsl.call(null,c));
var seq__44447 = cljs.core.seq(vec__44446);
var first__44448 = cljs.core.first(seq__44447);
var seq__44447__$1 = cljs.core.next(seq__44447);
var sql = first__44448;
var params = seq__44447__$1;
if(cljs.core.seq(params)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("parameters are not accepted in ",context),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clause","clause",1479668060),c,new cljs.core.Keyword(null,"params","params",710516235),params], null));
} else {
}

return sql;
}finally {(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__orig_val__44443);
}});
honey.sql.format_simple_expr = (function honey$sql$format_simple_expr(e,context){
var _STAR_options_STAR__orig_val__44451 = honey.sql._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__44452 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(honey.sql._STAR_options_STAR_,new cljs.core.Keyword(null,"inline","inline",1399884222),true);
(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__temp_val__44452);

try{var vec__44456 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(e) : honey.sql.format_expr.call(null,e));
var seq__44457 = cljs.core.seq(vec__44456);
var first__44458 = cljs.core.first(seq__44457);
var seq__44457__$1 = cljs.core.next(seq__44457);
var sql = first__44458;
var params = seq__44457__$1;
if(cljs.core.seq(params)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("parameters are not accepted in ",context),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expr","expr",745722291),e,new cljs.core.Keyword(null,"params","params",710516235),params], null));
} else {
}

return sql;
}finally {(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__orig_val__44451);
}});
honey.sql.format_alter_table = (function honey$sql$format_alter_table(k,x){
if(cljs.core.sequential_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(honey.sql.sql_kw(k)," ",honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(cljs.core.first(x)),(function (){var temp__5825__auto__ = cljs.core.next(x);
if(temp__5825__auto__){
var clauses = temp__5825__auto__;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44461_SHARP_){
return honey.sql.format_simple_clause(p1__44461_SHARP_,"column/index operations");
})),clauses));
} else {
return null;
}
})())], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(x))], null);
}
});
/**
 * If these are found in DDL, they should map to the given
 *   SQL string instead of what sql-kw would do.
 */
honey.sql.special_ddl_keywords = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auto-increment","auto-increment",2054074588),"AUTO_INCREMENT"], null);
/**
 * Handle SQL keywords in DDL (allowing for special/exceptions).
 */
honey.sql.sql_kw_ddl = (function honey$sql$sql_kw_ddl(id){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(honey.sql.special_ddl_keywords,honey.sql.sym__GT_kw(id));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return honey.sql.sql_kw(id);
}
});
/**
 * Given a sequence of options for a DDL statement (the part that
 *   comes between the entity name being created/dropped and the
 *   remaining part of the statement), render clauses and sequences
 *   of keywords and entity names. Returns a sequence of SQL strings.
 */
honey.sql.format_ddl_options = (function honey$sql$format_ddl_options(opts,context){
var iter__5503__auto__ = (function honey$sql$format_ddl_options_$_iter__44469(s__44470){
return (new cljs.core.LazySeq(null,(function (){
var s__44470__$1 = s__44470;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__44470__$1);
if(temp__5825__auto__){
var s__44470__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44470__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__44470__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__44472 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__44471 = (0);
while(true){
if((i__44471 < size__5502__auto__)){
var opt = cljs.core._nth(c__5501__auto__,i__44471);
cljs.core.chunk_append(b__44472,((cljs.core.map_QMARK_(opt))?honey.sql.format_simple_clause(opt,context):((cljs.core.sequential_QMARK_(opt))?honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (i__44471,opt,c__5501__auto__,size__5502__auto__,b__44472,s__44470__$2,temp__5825__auto__){
return (function (e){
if(cljs.core.ident_QMARK_(e)){
return honey.sql.sql_kw_ddl(e);
} else {
return honey.sql.format_simple_expr(e,context);
}
});})(i__44471,opt,c__5501__auto__,size__5502__auto__,b__44472,s__44470__$2,temp__5825__auto__))
),opt):((cljs.core.ident_QMARK_(opt))?honey.sql.sql_kw_ddl(opt):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("expected symbol or keyword",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),opt], null))})()
))));

var G__45405 = (i__44471 + (1));
i__44471 = G__45405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44472),honey$sql$format_ddl_options_$_iter__44469(cljs.core.chunk_rest(s__44470__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44472),null);
}
} else {
var opt = cljs.core.first(s__44470__$2);
return cljs.core.cons(((cljs.core.map_QMARK_(opt))?honey.sql.format_simple_clause(opt,context):((cljs.core.sequential_QMARK_(opt))?honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (opt,s__44470__$2,temp__5825__auto__){
return (function (e){
if(cljs.core.ident_QMARK_(e)){
return honey.sql.sql_kw_ddl(e);
} else {
return honey.sql.format_simple_expr(e,context);
}
});})(opt,s__44470__$2,temp__5825__auto__))
),opt):((cljs.core.ident_QMARK_(opt))?honey.sql.sql_kw_ddl(opt):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("expected symbol or keyword",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),opt], null))})()
))),honey$sql$format_ddl_options_$_iter__44469(cljs.core.rest(s__44470__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(opts);
});
honey.sql.destructure_ddl_item = (function honey$sql$destructure_ddl_item(table,context){
var params = ((cljs.core.sequential_QMARK_(table))?table:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table], null));
var tab_QMARK_ = (function (p1__44478_SHARP_){
return ((cljs.core.ident_QMARK_(p1__44478_SHARP_)) || (typeof p1__44478_SHARP_ === 'string'));
});
var coll = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(tab_QMARK_,params);
var opts = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(tab_QMARK_,params));
var ine = cljs.core.last(coll);
var vec__44479 = (function (){var ine_kw = honey.sql.sym__GT_kw(ine);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"if-not-exists","if-not-exists",739006925),ine_kw)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast(cljs.core.butlast(coll)),cljs.core.last(cljs.core.butlast(coll)),ine], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"or-replace","or-replace",-1048806850),ine_kw)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cons(ine,cljs.core.butlast(cljs.core.butlast(coll))),cljs.core.last(cljs.core.butlast(coll)),null], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast(coll),cljs.core.last(coll),null], null);

}
}
})();
var prequel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44479,(0),null);
var table__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44479,(1),null);
var ine__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44479,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(honey.sql.sql_kw),prequel),(cljs.core.truth_(table__$1)?honey.sql.format_simple_var.cljs$core$IFn$_invoke$arity$1(table__$1):null),(cljs.core.truth_(ine__$1)?honey.sql.sql_kw(ine__$1):null)], null),(cljs.core.truth_(opts)?honey.sql.format_ddl_options(opts,context):null));
});
honey.sql.format_truncate = (function honey$sql$format_truncate(_,xs){
var vec__44482 = honey.sql.ensure_sequential(xs);
var seq__44483 = cljs.core.seq(vec__44482);
var first__44484 = cljs.core.first(seq__44483);
var seq__44483__$1 = cljs.core.next(seq__44483);
var table = first__44484;
var options = seq__44483__$1;
var table__$1 = ((((cljs.core.ident_QMARK_(table)) || (typeof table === 'string')))?honey.sql.format_simple_var.cljs$core$IFn$_invoke$arity$1(table):honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(honey.sql.format_simple_var,table)));
var vec__44485 = honey.sql.destructure_ddl_item(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,options], null),"truncate");
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44485,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44485,(1),null);
var ine = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44485,(2),null);
var options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44485,(3),null);
if(cljs.core.seq(pre)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("TRUNCATE syntax error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),pre], null));
} else {
}

if(cljs.core.seq(ine)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("TRUNCATE syntax error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),ine], null));
} else {
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var G__44496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TRUNCATE TABLE",table__$1], null);
if(cljs.core.seq(options__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__44496,options__$1);
} else {
return G__44496;
}
})())], null);
});
honey.sql.format_create = (function honey$sql$format_create(q,k,item,as){
var vec__44500 = honey.sql.destructure_ddl_item(item,honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(honey.sql.sql_kw(q)," options"));
var seq__44501 = cljs.core.seq(vec__44500);
var first__44502 = cljs.core.first(seq__44501);
var seq__44501__$1 = cljs.core.next(seq__44501);
var pre = first__44502;
var first__44502__$1 = cljs.core.first(seq__44501__$1);
var seq__44501__$2 = cljs.core.next(seq__44501__$1);
var entity = first__44502__$1;
var first__44502__$2 = cljs.core.first(seq__44501__$2);
var seq__44501__$3 = cljs.core.next(seq__44501__$2);
var ine = first__44502__$2;
var more = seq__44501__$3;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sql_kw(q),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),q)) && (cljs.core.seq(pre))))?pre:null),honey.sql.sql_kw(k),ine,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refresh","refresh",1947415525),q)) && (cljs.core.seq(pre))))?pre:null),entity], null),more),(cljs.core.truth_(as)?honey.sql.sql_kw(as):null)))], null);
});
honey.sql.format_create_index = (function honey$sql$format_create_index(k,clauses){
var vec__44509 = clauses;
var index_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44509,(0),null);
var vec__44512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44509,(1),null);
var seq__44513 = cljs.core.seq(vec__44512);
var first__44514 = cljs.core.first(seq__44513);
var seq__44513__$1 = cljs.core.next(seq__44513);
var table = first__44514;
var exprs = seq__44513__$1;
var vec__44515 = honey.sql.destructure_ddl_item(index_spec,honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(honey.sql.sql_kw(k)," options"));
var seq__44516 = cljs.core.seq(vec__44515);
var first__44517 = cljs.core.first(seq__44516);
var seq__44516__$1 = cljs.core.next(seq__44516);
var pre = first__44517;
var first__44517__$1 = cljs.core.first(seq__44516__$1);
var seq__44516__$2 = cljs.core.next(seq__44516__$1);
var entity = first__44517__$1;
var first__44517__$2 = cljs.core.first(seq__44516__$2);
var seq__44516__$3 = cljs.core.next(seq__44516__$2);
var ine = first__44517__$2;
var more = seq__44516__$3;
var vec__44518 = (function (){var item = cljs.core.first(exprs);
if(((cljs.core.ident_QMARK_(item)) && (clojure.string.starts_with_QMARK_(honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(honey.sql.kw__GT_sym(item)),"using-")))){
return exprs;
} else {
return cljs.core.cons(null,exprs);
}
})();
var seq__44519 = cljs.core.seq(vec__44518);
var first__44520 = cljs.core.first(seq__44519);
var seq__44519__$1 = cljs.core.next(seq__44519);
var using = first__44520;
var exprs__$1 = seq__44519__$1;
var vec__44521 = honey.sql.format_order_by(null,exprs__$1);
var seq__44522 = cljs.core.seq(vec__44521);
var first__44523 = cljs.core.first(seq__44522);
var seq__44522__$1 = cljs.core.next(seq__44522);
var sql = first__44523;
var params = seq__44522__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CREATE",pre,"INDEX",ine,entity,"ON",honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(table),(cljs.core.truth_(using)?honey.sql.sql_kw(using):null),honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",sql,")")], null),more))], null),params);
});
honey.sql.format_with_data = (function honey$sql$format_with_data(_,data){
var data__$1 = ((cljs.core.sequential_QMARK_(data))?cljs.core.first(data):data);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sql_kw(new cljs.core.Keyword(null,"with","with",-1536296876)),(cljs.core.truth_(data__$1)?null:honey.sql.sql_kw(new cljs.core.Keyword(null,"no","no",-390373634))),honey.sql.sql_kw(new cljs.core.Keyword(null,"data","data",-232669377))], null))], null);
});
honey.sql.destructure_drop_items = (function honey$sql$destructure_drop_items(tables,context){
var params = ((cljs.core.sequential_QMARK_(tables))?tables:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tables], null));
var coll = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.ident_QMARK_,params);
var opts = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.ident_QMARK_,params);
var vec__44533 = (cljs.core.truth_((function (){var G__44537 = cljs.core.first(coll);
var fexpr__44536 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"if-exists","if-exists",-1964107033),null,new cljs.core.Symbol(null,"if-exists","if-exists",-323575506,null),null], null), null);
return (fexpr__44536.cljs$core$IFn$_invoke$arity$1 ? fexpr__44536.cljs$core$IFn$_invoke$arity$1(G__44537) : fexpr__44536.call(null,G__44537));
})())?coll:cljs.core.cons(null,coll));
var seq__44534 = cljs.core.seq(vec__44533);
var first__44535 = cljs.core.first(seq__44534);
var seq__44534__$1 = cljs.core.next(seq__44534);
var if_exists = first__44535;
var tables__$1 = seq__44534__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(if_exists)?honey.sql.sql_kw(new cljs.core.Keyword(null,"if-exists","if-exists",-1964107033)):null),honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Var(function(){return honey.sql.format_entity;},new cljs.core.Symbol("honey.sql","format-entity","honey.sql/format-entity",-1824420277,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-entity","format-entity",618285344,null),"honey/sql.cljc",20,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aliased","aliased",1515092254,null),new cljs.core.Symbol(null,"drop-ns","drop-ns",-80776792,null)], null)], null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aliased","aliased",1515092254,null),new cljs.core.Symbol(null,"drop-ns","drop-ns",-80776792,null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,284,284,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aliased","aliased",1515092254,null),new cljs.core.Symbol(null,"drop-ns","drop-ns",-80776792,null)], null)], null)], null)),"Given a simple SQL entity (a keyword or symbol -- or string),\n  return the equivalent SQL fragment (as a string -- no parameters).\n\n  Handles quoting, splitting at / or ., replacing - with _ etc.",(cljs.core.truth_(honey.sql.format_entity)?honey.sql.format_entity.cljs$lang$test:null)]))),tables__$1)], null),honey.sql.format_ddl_options(opts,context));
});
honey.sql.format_drop_items = (function honey$sql$format_drop_items(k,params){
var vec__44542 = honey.sql.destructure_drop_items(params,"DROP options");
var seq__44543 = cljs.core.seq(vec__44542);
var first__44544 = cljs.core.first(seq__44543);
var seq__44543__$1 = cljs.core.next(seq__44543);
var if_exists = first__44544;
var first__44544__$1 = cljs.core.first(seq__44543__$1);
var seq__44543__$2 = cljs.core.next(seq__44543__$1);
var tables = first__44544__$1;
var more = seq__44543__$2;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sql_kw(k),if_exists,tables], null),more))], null);
});
honey.sql.format_single_column = (function honey$sql$format_single_column(xs){
var vec__44548 = ((cljs.core.ident_QMARK_(cljs.core.first(xs)))?xs:cljs.core.cons(null,xs));
var seq__44549 = cljs.core.seq(vec__44548);
var first__44550 = cljs.core.first(seq__44549);
var seq__44549__$1 = cljs.core.next(seq__44549);
var col = first__44550;
var options = seq__44549__$1;
var vec__44551 = honey.sql.destructure_ddl_item(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,options], null),"column operation");
var seq__44552 = cljs.core.seq(vec__44551);
var first__44553 = cljs.core.first(seq__44552);
var seq__44552__$1 = cljs.core.next(seq__44552);
var pre = first__44553;
var first__44553__$1 = cljs.core.first(seq__44552__$1);
var seq__44552__$2 = cljs.core.next(seq__44552__$1);
var col__$1 = first__44553__$1;
var first__44553__$2 = cljs.core.first(seq__44552__$2);
var seq__44552__$3 = cljs.core.next(seq__44552__$2);
var ine = first__44553__$2;
var options__$1 = seq__44552__$3;
if(cljs.core.seq(pre)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("column syntax error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),pre], null));
} else {
}

if(cljs.core.seq(ine)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("column syntax error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),ine], null));
} else {
}

return honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_),cljs.core.cons(col__$1,options__$1));
});
honey.sql.format_table_columns = (function honey$sql$format_table_columns(_,xs){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Var(function(){return honey.sql.format_single_column;},new cljs.core.Symbol("honey.sql","format-single-column","honey.sql/format-single-column",348585542,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-single-column","format-single-column",1632648491,null),"honey/sql.cljc",28,1,1493,1493,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_single_column)?honey.sql.format_single_column.cljs$lang$test:null)]))),xs),")")], null);
});
honey.sql.format_add_single_item = (function honey$sql$format_add_single_item(k,spec){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"if-not-exists","if-not-exists",-1915428844,null),null,new cljs.core.Keyword(null,"if-not-exists","if-not-exists",739006925),null], null), null),cljs.core.last(spec))){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(honey.sql.sql_kw(k)," ",honey.sql.sql_kw(new cljs.core.Keyword(null,"if-not-exists","if-not-exists",739006925))," ",honey.sql.format_single_column(cljs.core.butlast(spec)));
} else {
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.format_single_column(spec));
}
});
honey.sql.format_add_item = (function honey$sql$format_add_item(k,spec){
var items = ((((cljs.core.sequential_QMARK_(spec)) && (cljs.core.sequential_QMARK_(cljs.core.first(spec)))))?spec:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44575_SHARP_){
return honey.sql.format_add_single_item(k,p1__44575_SHARP_);
})),items)], null);
});
honey.sql.format_rename_item = (function honey$sql$format_rename_item(k,p__44580){
var vec__44582 = p__44580;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44582,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44582,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(honey.sql.sql_kw(k)," ",honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(x)," TO ",honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(y))], null);
});
honey.sql.raw_render = (function honey$sql$raw_render(s){
if(cljs.core.sequential_QMARK_(s)){
var vec__44589 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__44597,s__$1){
var vec__44604 = p__44597;
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44604,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44604,(1),null);
if(cljs.core.sequential_QMARK_(s__$1)){
var vec__44607 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(s__$1) : honey.sql.format_expr.call(null,s__$1));
var seq__44608 = cljs.core.seq(vec__44607);
var first__44609 = cljs.core.first(seq__44608);
var seq__44608__$1 = cljs.core.next(seq__44608);
var sql = first__44609;
var params_SINGLEQUOTE_ = seq__44608__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sqls,sql),cljs.core.into.cljs$core$IFn$_invoke$arity$2(params,params_SINGLEQUOTE_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sqls,s__$1),params], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),s);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44589,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44589,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2("",sqls)], null),params);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
}
});
honey.sql.destructure_drop_columns = (function honey$sql$destructure_drop_columns(tables){
var params = ((cljs.core.sequential_QMARK_(tables))?tables:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tables], null));
var _ = ((cljs.core.every_QMARK_(cljs.core.ident_QMARK_,params))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("DROP COLUMNS expects just column names",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tables","tables",1334623052),tables], null))})());
var if_exists = false;
var coll = params;
var sqls = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(coll)){
if(cljs.core.truth_((function (){var G__44625 = cljs.core.first(coll);
var fexpr__44624 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"if-exists","if-exists",-1964107033),null,new cljs.core.Symbol(null,"if-exists","if-exists",-323575506,null),null], null), null);
return (fexpr__44624.cljs$core$IFn$_invoke$arity$1 ? fexpr__44624.cljs$core$IFn$_invoke$arity$1(G__44625) : fexpr__44624.call(null,G__44625));
})())){
var G__45435 = true;
var G__45436 = cljs.core.rest(coll);
var G__45437 = sqls;
if_exists = G__45435;
coll = G__45436;
sqls = G__45437;
continue;
} else {
var G__45438 = false;
var G__45439 = cljs.core.rest(coll);
var G__45440 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sqls,(function (){var G__44626 = honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coll));
if(if_exists){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(new cljs.core.Keyword(null,"if-exists","if-exists",-1964107033))," ",G__44626);
} else {
return G__44626;
}
})());
if_exists = G__45438;
coll = G__45439;
sqls = G__45440;
continue;
}
} else {
if(if_exists){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$1("DROP COLUMNS: missing column name after IF EXISTS"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tables","tables",1334623052),tables], null));
} else {
return sqls;
}
}
break;
}
});
honey.sql.format_drop_columns = (function honey$sql$format_drop_columns(k,params){
var tables = honey.sql.destructure_drop_columns(params);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44627_SHARP_){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",p1__44627_SHARP_);
})),tables)], null);
});
honey.sql.format_interval = (function honey$sql$format_interval(k,args){
if(cljs.core.sequential_QMARK_(args)){
var vec__44632 = args;
var seq__44633 = cljs.core.seq(vec__44632);
var first__44634 = cljs.core.first(seq__44633);
var seq__44633__$1 = cljs.core.next(seq__44633);
var n = first__44634;
var units = seq__44633__$1;
if(cljs.core.seq(units)){
var vec__44635 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(n) : honey.sql.format_expr.call(null,n));
var seq__44636 = cljs.core.seq(vec__44635);
var first__44637 = cljs.core.first(seq__44636);
var seq__44636__$1 = cljs.core.next(seq__44636);
var sql = first__44637;
var params = seq__44636__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(honey.sql.sql_kw(k)," ",sql," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(honey.sql.sql_kw),units))], null),params);
} else {
var _STAR_options_STAR__orig_val__44638 = honey.sql._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__44639 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(honey.sql._STAR_options_STAR_,new cljs.core.Keyword(null,"inline","inline",1399884222),true);
(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__temp_val__44639);

try{var vec__44640 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(n) : honey.sql.format_expr.call(null,n));
var seq__44641 = cljs.core.seq(vec__44640);
var first__44642 = cljs.core.first(seq__44641);
var seq__44641__$1 = cljs.core.next(seq__44641);
var sql = first__44642;
var params = seq__44641__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",sql)], null),params);
}finally {(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__orig_val__44638);
}}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.sql_kw(args))], null);
}
});
/**
 * Records can take a single map or a sequence of maps.
 * 
 * A map will be inherently treated as a lifted parameter.
 * Records can be inlined [:inline some-map]
 */
honey.sql.format_records = (function honey$sql$format_records(k,args){
if(cljs.core.sequential_QMARK_(args)){
var args__$1 = ((cljs.core.every_QMARK_(cljs.core.map_QMARK_,args))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44643_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lift","lift",903632035),p1__44643_SHARP_],null));
}),args):args);
var vec__44645 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(args__$1);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44645,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44645,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls))], null),params);
} else {
var G__44649 = k;
var G__44650 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null);
return (honey.sql.format_records.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_records.cljs$core$IFn$_invoke$arity$2(G__44649,G__44650) : honey.sql.format_records.call(null,G__44649,G__44650));
}
});
honey.sql.format_setting = (function honey$sql$format_setting(k,args){
if(((cljs.core.sequential_QMARK_(args)) && (cljs.core.ident_QMARK_(cljs.core.first(args))))){
var G__44654 = k;
var G__44655 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null);
return (honey.sql.format_setting.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_setting.cljs$core$IFn$_invoke$arity$2(G__44654,G__44655) : honey.sql.format_setting.call(null,G__44654,G__44655));
} else {
var vec__44656 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (arg){
var vec__44659 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.ident_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((clojure.string.ends_with_QMARK_(cljs.core.name(x),"-time"))?honey.sql.format_fn_name(x):honey.sql.sql_kw(x))], null);
} else {
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(x) : honey.sql.format_expr.call(null,x));
}
}),arg));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44659,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44659,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(" ",sqls)], null),params);
}),args));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44656,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44656,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls))], null),params);
}
});
/**
 * Given a formatter function, performs a pre-flight check that there is
 *   a non-empty where clause if at least basic checking is enabled.
 */
honey.sql.check_where = (function honey$sql$check_where(formatter){
return (function (k,xs){
var map__44670_45443 = honey.sql._STAR_options_STAR_;
var map__44670_45444__$1 = cljs.core.__destructure_map(map__44670_45443);
var checking_45445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44670_45444__$1,new cljs.core.Keyword(null,"checking","checking",1748720818));
var dsl_45446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44670_45444__$1,new cljs.core.Keyword(null,"dsl","dsl",397853177));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),checking_45445)){
} else {
if(((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(dsl_45446))) && (cljs.core.empty_QMARK_((function (){var fexpr__44671 = new cljs.core.Symbol(null,"where","where",-404264438,null);
return (fexpr__44671.cljs$core$IFn$_invoke$arity$1 ? fexpr__44671.cljs$core$IFn$_invoke$arity$1(dsl_45446) : fexpr__44671.call(null,dsl_45446));
})())))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(honey.sql.sql_kw(k)," without a non-empty WHERE clause is dangerous"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clause","clause",1479668060),k,new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(dsl_45446)], null));
} else {
}
}

return (formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(k,xs) : formatter.call(null,k,xs));
});
});
/**
 * The (base) order for known clauses. Can have items added and removed.
 * 
 *   This is the 'pre-dialect' ordering.
 */
honey.sql.base_clause_order = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(honey.sql.default_clause_order);
/**
 * The (current) order for known clauses. Can have items added and removed.
 * 
 *   This is the 'post-dialect` ordering when a new default dialect is set.
 */
honey.sql.current_clause_order = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(honey.sql.default_clause_order);
/**
 * The (default) behavior for each known clause. Can also have items added
 *   and removed.
 */
honey.sql.clause_format = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"outer-join","outer-join",1845838048),new cljs.core.Keyword(null,"select-distinct-top","select-distinct-top",781185536),new cljs.core.Keyword(null,"qualify","qualify",1565609728),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"full-join","full-join",1305476385),new cljs.core.Keyword(null,"since","since",315379842),new cljs.core.Keyword(null,"having","having",-399543166),new cljs.core.Keyword(null,"create-table","create-table",1297148194),new cljs.core.Keyword(null,"exclude","exclude",-1230250334),new cljs.core.Keyword(null,"add-column","add-column",141289410),new cljs.core.Keyword(null,"except","except",1116893347),new cljs.core.Keyword(null,"into","into",-150836029),new cljs.core.Keyword(null,"create-extension","create-extension",853957283),new cljs.core.Keyword(null,"select-distinct-on","select-distinct-on",1224000227),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.Keyword(null,"alter-column","alter-column",-254828732),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"add-index","add-index",376820708),new cljs.core.Keyword(null,"replace-into","replace-into",139321349),new cljs.core.Keyword(null,"truncate","truncate",-1327322939),new cljs.core.Keyword(null,"erase-from","erase-from",565088869),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"group-by","group-by",-379139802),new cljs.core.Keyword(null,"alter-table","alter-table",1000463814),new cljs.core.Keyword(null,"select-top","select-top",-1243842074),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"create-materialized-view","create-materialized-view",-1173241),new cljs.core.Keyword(null,"drop-column","drop-column",-1898063225),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"drop-materialized-view","drop-materialized-view",-1779110488),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"create-table-as","create-table-as",209299497),new cljs.core.Keyword(null,"on-duplicate-key-update","on-duplicate-key-update",596044873),new cljs.core.Keyword(null,"do-update-set","do-update-set",-2028298967),new cljs.core.Keyword(null,"patch-into","patch-into",-245698135),new cljs.core.Keyword(null,"facet","facet",-801327574),new cljs.core.Keyword(null,"until","until",-1189166390),new cljs.core.Keyword(null,"timeseries","timeseries",958915787),new cljs.core.Keyword(null,"refresh-materialized-view","refresh-materialized-view",-121074453),new cljs.core.Keyword(null,"drop-view","drop-view",1167937644),new cljs.core.Keyword(null,"join-by","join-by",1125837996),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"rename","rename",1508157613),new cljs.core.Keyword(null,"select-distinct","select-distinct",-412636114),new cljs.core.Keyword(null,"with-columns","with-columns",-1220776498),new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"assert","assert",-963103026),new cljs.core.Keyword(null,"setting","setting",928308078),new cljs.core.Keyword(null,"drop-table","drop-table",371446895),new cljs.core.Keyword(null,"distinct","distinct",-1788879121),new cljs.core.Keyword(null,"bulk-collect-into","bulk-collect-into",1601778032),new cljs.core.Keyword(null,"records","records",1326822832),new cljs.core.Keyword(null,"partition-by","partition-by",1324497520),new cljs.core.Keyword(null,"right-join","right-join",-56349359),new cljs.core.Keyword(null,"left-join","left-join",-672831855),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"returning","returning",-387623629),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"create-view","create-view",-485638509),new cljs.core.Keyword(null,"cross-join","cross-join",-1043003533),new cljs.core.Keyword(null,"on-constraint","on-constraint",1484874675),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"create-or-replace-view","create-or-replace-view",1887806804),new cljs.core.Keyword(null,"create-index","create-index",154861140),new cljs.core.Keyword(null,"with-data","with-data",-1106621804),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"modify-column","modify-column",-614135147),new cljs.core.Keyword(null,"insert-into","insert-into",382212789),new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.Keyword(null,"rename-table","rename-table",-651328682),new cljs.core.Keyword(null,"with-recursive","with-recursive",-331779146),new cljs.core.Keyword(null,"drop-extension","drop-extension",-1677190153),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"compare-with","compare-with",715346425),new cljs.core.Keyword(null,"drop-index","drop-index",-843154439),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282),new cljs.core.Keyword(null,"on-conflict","on-conflict",1595391642),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"using","using",1948623036),new cljs.core.Keyword(null,"inner-join","inner-join",659431740),new cljs.core.Keyword(null,"fetch","fetch",-1081994244),new cljs.core.Keyword(null,"except-all","except-all",1562150045),new cljs.core.Keyword(null,"rename-column","rename-column",737487070),new cljs.core.Keyword(null,"lock","lock",-488188066),new cljs.core.Keyword(null,"delete-from","delete-from",670763966),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"union-all","union-all",672741919)],[new cljs.core.Var(function(){return honey.sql.format_join;},new cljs.core.Symbol("honey.sql","format-join","honey.sql/format-join",1142939916,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-join","format-join",-242897439,null),"honey/sql.cljc",19,1,1061,1061,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null)),null,(cljs.core.truth_(honey.sql.format_join)?honey.sql.format_join.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_select_top;},new cljs.core.Symbol("honey.sql","format-select-top","honey.sql/format-select-top",-1063564218,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-select-top","format-select-top",872583137,null),"honey/sql.cljc",25,1,863,863,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_select_top)?honey.sql.format_select_top.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_on_expr;},new cljs.core.Symbol("honey.sql","format-on-expr","honey.sql/format-on-expr",-1077648278,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-on-expr","format-on-expr",-211932223,null),"honey/sql.cljc",22,1,1133,1133,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)),null,(cljs.core.truth_(honey.sql.format_on_expr)?honey.sql.format_on_expr.cljs$lang$test:null)])),(function (_,x){
var vec__44674 = (function (){var G__44677 = x;
var G__44678 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2(G__44677,G__44678) : honey.sql.format_dsl.call(null,G__44677,G__44678));
})();
var seq__44675 = cljs.core.seq(vec__44674);
var first__44676 = cljs.core.first(seq__44675);
var seq__44675__$1 = cljs.core.next(seq__44675);
var sql = first__44676;
var params = seq__44675__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sql], null),params);
}),new cljs.core.Var(function(){return honey.sql.format_join;},new cljs.core.Symbol("honey.sql","format-join","honey.sql/format-join",1142939916,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-join","format-join",-242897439,null),"honey/sql.cljc",19,1,1061,1061,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null)),null,(cljs.core.truth_(honey.sql.format_join)?honey.sql.format_join.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_interval;},new cljs.core.Symbol("honey.sql","format-interval","honey.sql/format-interval",-1155608910,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-interval","format-interval",-257652183,null),"honey/sql.cljc",23,1,1579,1579,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),null,(cljs.core.truth_(honey.sql.format_interval)?honey.sql.format_interval.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_on_expr;},new cljs.core.Symbol("honey.sql","format-on-expr","honey.sql/format-on-expr",-1077648278,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-on-expr","format-on-expr",-211932223,null),"honey/sql.cljc",22,1,1133,1133,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)),null,(cljs.core.truth_(honey.sql.format_on_expr)?honey.sql.format_on_expr.cljs$lang$test:null)])),(function (_,x){
return honey.sql.format_create(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"table","table",-564943036),x,null);
}),new cljs.core.Var(function(){return honey.sql.format_selects;},new cljs.core.Symbol("honey.sql","format-selects","honey.sql/format-selects",-1805335445,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selects","format-selects",1626536724,null),"honey/sql.cljc",22,1,842,842,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selects)?honey.sql.format_selects.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_add_item;},new cljs.core.Symbol("honey.sql","format-add-item","honey.sql/format-add-item",-481215333,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-add-item","format-add-item",-1344569474,null),"honey/sql.cljc",23,1,1526,1526,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null)], null)),null,(cljs.core.truth_(honey.sql.format_add_item)?honey.sql.format_add_item.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_on_set_op;},new cljs.core.Symbol("honey.sql","format-on-set-op","honey.sql/format-on-set-op",-1702673170,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-on-set-op","format-on-set-op",-700808827,null),"honey/sql.cljc",24,1,739,739,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_on_set_op)?honey.sql.format_on_set_op.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_select_into;},new cljs.core.Symbol("honey.sql","format-select-into","honey.sql/format-select-into",-75466708,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-select-into","format-select-into",253379723,null),"honey/sql.cljc",26,1,891,891,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_select_into)?honey.sql.format_select_into.cljs$lang$test:null)])),(function (_,x){
return honey.sql.format_create(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"extension","extension",1453374065),x,null);
}),new cljs.core.Var(function(){return honey.sql.format_selects_on;},new cljs.core.Symbol("honey.sql","format-selects-on","honey.sql/format-selects-on",-1915340976,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selects-on","format-selects-on",1178618827,null),"honey/sql.cljc",25,1,852,852,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selects_on)?honey.sql.format_selects_on.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_on_expr;},new cljs.core.Symbol("honey.sql","format-on-expr","honey.sql/format-on-expr",-1077648278,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-on-expr","format-on-expr",-211932223,null),"honey/sql.cljc",22,1,1133,1133,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)),null,(cljs.core.truth_(honey.sql.format_on_expr)?honey.sql.format_on_expr.cljs$lang$test:null)])),(function (k,spec){
return honey.sql.format_add_item(((honey.sql.mysql_QMARK_())?new cljs.core.Keyword(null,"modify-column","modify-column",-614135147):k),spec);
}),new cljs.core.Var(function(){return honey.sql.format_selector;},new cljs.core.Symbol("honey.sql","format-selector","honey.sql/format-selector",-2093502057,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selector","format-selector",1319204090,null),"honey/sql.cljc",23,1,993,993,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selector)?honey.sql.format_selector.cljs$lang$test:null)])),(function (_,x){
return honey.sql.format_on_expr(new cljs.core.Keyword(null,"add","add",235287739),x);
}),new cljs.core.Var(function(){return honey.sql.format_insert;},new cljs.core.Symbol("honey.sql","format-insert","honey.sql/format-insert",-710305188,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-insert","format-insert",-1993090639,null),"honey/sql.cljc",21,1,1001,1001,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"table","table",1075588491,null)], null)),null,(cljs.core.truth_(honey.sql.format_insert)?honey.sql.format_insert.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_truncate;},new cljs.core.Symbol("honey.sql","format-truncate","honey.sql/format-truncate",-1669872793,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-truncate","format-truncate",-771882982,null),"honey/sql.cljc",23,1,1411,1411,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_truncate)?honey.sql.format_truncate.cljs$lang$test:null)])),honey.sql.check_where(new cljs.core.Var(function(){return honey.sql.format_selector;},new cljs.core.Symbol("honey.sql","format-selector","honey.sql/format-selector",-2093502057,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selector","format-selector",1319204090,null),"honey/sql.cljc",23,1,993,993,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selector)?honey.sql.format_selector.cljs$lang$test:null)]))),new cljs.core.Var(function(){return honey.sql.format_on_expr;},new cljs.core.Symbol("honey.sql","format-on-expr","honey.sql/format-on-expr",-1077648278,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-on-expr","format-on-expr",-211932223,null),"honey/sql.cljc",22,1,1133,1133,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)),null,(cljs.core.truth_(honey.sql.format_on_expr)?honey.sql.format_on_expr.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_group_by;},new cljs.core.Symbol("honey.sql","format-group-by","honey.sql/format-group-by",508553260,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-group-by","format-group-by",1120249041,null),"honey/sql.cljc",23,1,1139,1139,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_group_by)?honey.sql.format_group_by.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_alter_table;},new cljs.core.Symbol("honey.sql","format-alter-table","honey.sql/format-alter-table",-772015936,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-alter-table","format-alter-table",1715578287,null),"honey/sql.cljc",26,1,1345,1345,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(honey.sql.format_alter_table)?honey.sql.format_alter_table.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_select_top;},new cljs.core.Symbol("honey.sql","format-select-top","honey.sql/format-select-top",-1063564218,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-select-top","format-select-top",872583137,null),"honey/sql.cljc",25,1,863,863,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_select_top)?honey.sql.format_select_top.cljs$lang$test:null)])),(function (_,x){
if(((honey.sql.contains_clause_QMARK_(new cljs.core.Keyword(null,"fetch","fetch",-1081994244))) || (honey.sql.sql_server_QMARK_()))){
var vec__44690 = honey.sql.format_on_expr(new cljs.core.Keyword(null,"offset","offset",296498311),x);
var seq__44691 = cljs.core.seq(vec__44690);
var first__44692 = cljs.core.first(seq__44691);
var seq__44691__$1 = cljs.core.next(seq__44691);
var sql = first__44692;
var params = seq__44691__$1;
var rows = ((((typeof x === 'number') && (((1) === x))))?new cljs.core.Keyword(null,"row","row",-570139521):new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql," ",honey.sql.sql_kw(rows))], null),params);
} else {
return honey.sql.format_on_expr(new cljs.core.Keyword(null,"offset","offset",296498311),x);
}
}),(function (_,x){
return honey.sql.format_create(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"materialized-view","materialized-view",-1218575593),x,new cljs.core.Keyword(null,"as","as",1148689641));
}),new cljs.core.Var(function(){return honey.sql.format_drop_columns;},new cljs.core.Symbol("honey.sql","format-drop-columns","honey.sql/format-drop-columns",-1638182041,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-drop-columns","format-drop-columns",-741273574,null),"honey/sql.cljc",27,1,1574,1574,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(honey.sql.format_drop_columns)?honey.sql.format_drop_columns.cljs$lang$test:null)])),(function (_,x){
return honey.sql.raw_render(x);
}),new cljs.core.Var(function(){return honey.sql.format_drop_items;},new cljs.core.Symbol("honey.sql","format-drop-items","honey.sql/format-drop-items",-1127399848,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-drop-items","format-drop-items",-390921529,null),"honey/sql.cljc",25,1,1488,1488,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(honey.sql.format_drop_items)?honey.sql.format_drop_items.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_columns;},new cljs.core.Symbol("honey.sql","format-columns","honey.sql/format-columns",-981158916,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-columns","format-columns",-1878102175,null),"honey/sql.cljc",22,1,814,814,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_columns)?honey.sql.format_columns.cljs$lang$test:null)])),(function (_,x){
return honey.sql.format_create(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"table","table",-564943036),x,new cljs.core.Keyword(null,"as","as",1148689641));
}),new cljs.core.Var(function(){return honey.sql.format_do_update_set;},new cljs.core.Symbol("honey.sql","format-do-update-set","honey.sql/format-do-update-set",566436710,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-do-update-set","format-do-update-set",-1807098341,null),"honey/sql.cljc",28,1,1302,1302,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(honey.sql.format_do_update_set)?honey.sql.format_do_update_set.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_do_update_set;},new cljs.core.Symbol("honey.sql","format-do-update-set","honey.sql/format-do-update-set",566436710,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-do-update-set","format-do-update-set",-1807098341,null),"honey/sql.cljc",28,1,1302,1302,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(honey.sql.format_do_update_set)?honey.sql.format_do_update_set.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_insert;},new cljs.core.Symbol("honey.sql","format-insert","honey.sql/format-insert",-710305188,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-insert","format-insert",-1993090639,null),"honey/sql.cljc",21,1,1001,1001,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"table","table",1075588491,null)], null)),null,(cljs.core.truth_(honey.sql.format_insert)?honey.sql.format_insert.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_selects;},new cljs.core.Symbol("honey.sql","format-selects","honey.sql/format-selects",-1805335445,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selects","format-selects",1626536724,null),"honey/sql.cljc",22,1,842,842,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selects)?honey.sql.format_selects.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_interval;},new cljs.core.Symbol("honey.sql","format-interval","honey.sql/format-interval",-1155608910,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-interval","format-interval",-257652183,null),"honey/sql.cljc",23,1,1579,1579,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),null,(cljs.core.truth_(honey.sql.format_interval)?honey.sql.format_interval.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_interval;},new cljs.core.Symbol("honey.sql","format-interval","honey.sql/format-interval",-1155608910,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-interval","format-interval",-257652183,null),"honey/sql.cljc",23,1,1579,1579,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),null,(cljs.core.truth_(honey.sql.format_interval)?honey.sql.format_interval.cljs$lang$test:null)])),(function (_,x){
return honey.sql.format_create(new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"materialized-view","materialized-view",-1218575593),x,null);
}),new cljs.core.Var(function(){return honey.sql.format_drop_items;},new cljs.core.Symbol("honey.sql","format-drop-items","honey.sql/format-drop-items",-1127399848,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-drop-items","format-drop-items",-390921529,null),"honey/sql.cljc",25,1,1488,1488,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(honey.sql.format_drop_items)?honey.sql.format_drop_items.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_join_by;},new cljs.core.Symbol("honey.sql","format-join-by","honey.sql/format-join-by",-957187997,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-join-by","format-join-by",289946392,null),"honey/sql.cljc",22,1,1104,1104,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null)),"Clauses should be a sequence of join types followed\n  by their table and condition, or a sequence of join\n  clauses, so that you can construct a series of joins\n  in a specific order.",(cljs.core.truth_(honey.sql.format_join_by)?honey.sql.format_join_by.cljs$lang$test:null)])),honey.sql.check_where(new cljs.core.Var(function(){return honey.sql.format_selector;},new cljs.core.Symbol("honey.sql","format-selector","honey.sql/format-selector",-2093502057,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selector","format-selector",1319204090,null),"honey/sql.cljc",23,1,993,993,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selector)?honey.sql.format_selector.cljs$lang$test:null)]))),honey.sql.check_where(new cljs.core.Var(function(){return honey.sql.format_selects;},new cljs.core.Symbol("honey.sql","format-selects","honey.sql/format-selects",-1805335445,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selects","format-selects",1626536724,null),"honey/sql.cljc",22,1,842,842,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selects)?honey.sql.format_selects.cljs$lang$test:null)]))),new cljs.core.Var(function(){return honey.sql.format_selects;},new cljs.core.Symbol("honey.sql","format-selects","honey.sql/format-selects",-1805335445,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selects","format-selects",1626536724,null),"honey/sql.cljc",22,1,842,842,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selects)?honey.sql.format_selects.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_selects;},new cljs.core.Symbol("honey.sql","format-selects","honey.sql/format-selects",-1805335445,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selects","format-selects",1626536724,null),"honey/sql.cljc",22,1,842,842,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selects)?honey.sql.format_selects.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_table_columns;},new cljs.core.Symbol("honey.sql","format-table-columns","honey.sql/format-table-columns",-1905715432,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-table-columns","format-table-columns",-218935107,null),"honey/sql.cljc",28,1,1516,1516,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_table_columns)?honey.sql.format_table_columns.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_window;},new cljs.core.Symbol("honey.sql","format-window","honey.sql/format-window",-223652212,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-window","format-window",1027412459,null),"honey/sql.cljc",21,1,996,996,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_window)?honey.sql.format_window.cljs$lang$test:null)])),(function (k,xs){
var vec__44698 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(xs) : honey.sql.format_expr.call(null,xs));
var seq__44699 = cljs.core.seq(vec__44698);
var first__44700 = cljs.core.first(seq__44699);
var seq__44699__$1 = cljs.core.next(seq__44699);
var sql = first__44700;
var params = seq__44699__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",sql)], null),params);
}),new cljs.core.Var(function(){return honey.sql.format_setting;},new cljs.core.Symbol("honey.sql","format-setting","honey.sql/format-setting",1540511570,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-setting","format-setting",-1890875203,null),"honey/sql.cljc",22,1,1607,1607,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),null,(cljs.core.truth_(honey.sql.format_setting)?honey.sql.format_setting.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_drop_items;},new cljs.core.Symbol("honey.sql","format-drop-items","honey.sql/format-drop-items",-1127399848,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-drop-items","format-drop-items",-390921529,null),"honey/sql.cljc",25,1,1488,1488,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(honey.sql.format_drop_items)?honey.sql.format_drop_items.cljs$lang$test:null)])),(function (k,xs){
return honey.sql.format_selects(k,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs], null)], null));
}),new cljs.core.Var(function(){return honey.sql.format_select_into;},new cljs.core.Symbol("honey.sql","format-select-into","honey.sql/format-select-into",-75466708,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-select-into","format-select-into",253379723,null),"honey/sql.cljc",26,1,891,891,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_select_into)?honey.sql.format_select_into.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_records;},new cljs.core.Symbol("honey.sql","format-records","honey.sql/format-records",1935950182,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-records","format-records",132022785,null),"honey/sql.cljc",22,1,1593,1593,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),"Records can take a single map or a sequence of maps.\n\n   A map will be inherently treated as a lifted parameter.\n   Records can be inlined [:inline some-map]",(cljs.core.truth_(honey.sql.format_records)?honey.sql.format_records.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_selects;},new cljs.core.Symbol("honey.sql","format-selects","honey.sql/format-selects",-1805335445,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selects","format-selects",1626536724,null),"honey/sql.cljc",22,1,842,842,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selects)?honey.sql.format_selects.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_join;},new cljs.core.Symbol("honey.sql","format-join","honey.sql/format-join",1142939916,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-join","format-join",-242897439,null),"honey/sql.cljc",19,1,1061,1061,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null)),null,(cljs.core.truth_(honey.sql.format_join)?honey.sql.format_join.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_join;},new cljs.core.Symbol("honey.sql","format-join","honey.sql/format-join",1142939916,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-join","format-join",-242897439,null),"honey/sql.cljc",19,1,1061,1061,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null)),null,(cljs.core.truth_(honey.sql.format_join)?honey.sql.format_join.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_lock_strength;},new cljs.core.Symbol("honey.sql","format-lock-strength","honey.sql/format-lock-strength",1596503099,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-lock-strength","format-lock-strength",-476935778,null),"honey/sql.cljc",28,1,1158,1158,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_lock_strength)?honey.sql.format_lock_strength.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_selects;},new cljs.core.Symbol("honey.sql","format-selects","honey.sql/format-selects",-1805335445,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selects","format-selects",1626536724,null),"honey/sql.cljc",22,1,842,842,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selects)?honey.sql.format_selects.cljs$lang$test:null)])),(function (_,xs){
return honey.sql.format_selects(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs], null)], null));
}),(function (_,x){
return honey.sql.format_create(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"view","view",1247994814),x,new cljs.core.Keyword(null,"as","as",1148689641));
}),new cljs.core.Var(function(){return honey.sql.format_selects;},new cljs.core.Symbol("honey.sql","format-selects","honey.sql/format-selects",-1805335445,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selects","format-selects",1626536724,null),"honey/sql.cljc",22,1,842,842,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selects)?honey.sql.format_selects.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_selector;},new cljs.core.Symbol("honey.sql","format-selector","honey.sql/format-selector",-2093502057,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selector","format-selector",1319204090,null),"honey/sql.cljc",23,1,993,993,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selector)?honey.sql.format_selector.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_with;},new cljs.core.Symbol("honey.sql","format-with","honey.sql/format-with",1900770805,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-with","format-with",984985960,null),"honey/sql.cljc",19,1,959,959,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_with)?honey.sql.format_with.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_selects;},new cljs.core.Symbol("honey.sql","format-selects","honey.sql/format-selects",-1805335445,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selects","format-selects",1626536724,null),"honey/sql.cljc",22,1,842,842,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selects)?honey.sql.format_selects.cljs$lang$test:null)])),(function (_,x){
return honey.sql.format_create(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"or-replace-view","or-replace-view",-931074825),x,new cljs.core.Keyword(null,"as","as",1148689641));
}),new cljs.core.Var(function(){return honey.sql.format_create_index;},new cljs.core.Symbol("honey.sql","format-create-index","honey.sql/format-create-index",-2030978957,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-create-index","format-create-index",-917796906,null),"honey/sql.cljc",27,1,1449,1449,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null)),null,(cljs.core.truth_(honey.sql.format_create_index)?honey.sql.format_create_index.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_with_data;},new cljs.core.Symbol("honey.sql","format-with-data","honey.sql/format-with-data",231865992,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-with-data","format-with-data",-1186217417,null),"honey/sql.cljc",24,1,1467,1467,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null)),null,(cljs.core.truth_(honey.sql.format_with_data)?honey.sql.format_with_data.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_values;},new cljs.core.Symbol("honey.sql","format-values","honey.sql/format-values",-1036296980,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-values","format-values",245403713,null),"honey/sql.cljc",21,1,1189,1189,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_values)?honey.sql.format_values.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_add_item;},new cljs.core.Symbol("honey.sql","format-add-item","honey.sql/format-add-item",-481215333,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-add-item","format-add-item",-1344569474,null),"honey/sql.cljc",23,1,1526,1526,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null)], null)),null,(cljs.core.truth_(honey.sql.format_add_item)?honey.sql.format_add_item.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_insert;},new cljs.core.Symbol("honey.sql","format-insert","honey.sql/format-insert",-710305188,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-insert","format-insert",-1993090639,null),"honey/sql.cljc",21,1,1001,1001,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"table","table",1075588491,null)], null)),null,(cljs.core.truth_(honey.sql.format_insert)?honey.sql.format_insert.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_order_by;},new cljs.core.Symbol("honey.sql","format-order-by","honey.sql/format-order-by",995782973,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-order-by","format-order-by",-154127200,null),"honey/sql.cljc",23,1,1143,1143,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_order_by)?honey.sql.format_order_by.cljs$lang$test:null)])),(function (_,x){
return honey.sql.format_selector(new cljs.core.Keyword(null,"rename-to","rename-to",610483329),x);
}),new cljs.core.Var(function(){return honey.sql.format_with;},new cljs.core.Symbol("honey.sql","format-with","honey.sql/format-with",1900770805,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-with","format-with",984985960,null),"honey/sql.cljc",19,1,959,959,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_with)?honey.sql.format_with.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_drop_items;},new cljs.core.Symbol("honey.sql","format-drop-items","honey.sql/format-drop-items",-1127399848,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-drop-items","format-drop-items",-390921529,null),"honey/sql.cljc",25,1,1488,1488,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(honey.sql.format_drop_items)?honey.sql.format_drop_items.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_on_set_op;},new cljs.core.Symbol("honey.sql","format-on-set-op","honey.sql/format-on-set-op",-1702673170,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-on-set-op","format-on-set-op",-700808827,null),"honey/sql.cljc",24,1,739,739,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_on_set_op)?honey.sql.format_on_set_op.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_interval;},new cljs.core.Symbol("honey.sql","format-interval","honey.sql/format-interval",-1155608910,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-interval","format-interval",-257652183,null),"honey/sql.cljc",23,1,1579,1579,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),null,(cljs.core.truth_(honey.sql.format_interval)?honey.sql.format_interval.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_selector;},new cljs.core.Symbol("honey.sql","format-selector","honey.sql/format-selector",-2093502057,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selector","format-selector",1319204090,null),"honey/sql.cljc",23,1,993,993,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selector)?honey.sql.format_selector.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_set_exprs;},new cljs.core.Symbol("honey.sql","format-set-exprs","honey.sql/format-set-exprs",-1348278137,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-set-exprs","format-set-exprs",2077764458,null),"honey/sql.cljc",24,1,1270,1270,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_set_exprs)?honey.sql.format_set_exprs.cljs$lang$test:null)])),(function (k,_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[honey.sql.sql_kw(k)],null));
}),new cljs.core.Var(function(){return honey.sql.format_on_conflict;},new cljs.core.Symbol("honey.sql","format-on-conflict","honey.sql/format-on-conflict",1697823191,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-on-conflict","format-on-conflict",-1736149702,null),"honey/sql.cljc",26,1,1280,1280,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(honey.sql.format_on_conflict)?honey.sql.format_on_conflict.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_on_set_op;},new cljs.core.Symbol("honey.sql","format-on-set-op","honey.sql/format-on-set-op",-1702673170,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-on-set-op","format-on-set-op",-700808827,null),"honey/sql.cljc",24,1,739,739,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_on_set_op)?honey.sql.format_on_set_op.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_selects;},new cljs.core.Symbol("honey.sql","format-selects","honey.sql/format-selects",-1805335445,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selects","format-selects",1626536724,null),"honey/sql.cljc",22,1,842,842,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selects)?honey.sql.format_selects.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_join;},new cljs.core.Symbol("honey.sql","format-join","honey.sql/format-join",1142939916,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-join","format-join",-242897439,null),"honey/sql.cljc",19,1,1061,1061,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null)),null,(cljs.core.truth_(honey.sql.format_join)?honey.sql.format_join.cljs$lang$test:null)])),(function (_,x){
var which = ((honey.sql.contains_clause_QMARK_(new cljs.core.Keyword(null,"offset","offset",296498311)))?new cljs.core.Keyword(null,"fetch-next","fetch-next",-1540729894):new cljs.core.Keyword(null,"fetch-first","fetch-first",-2144229787));
var rows = ((((typeof x === 'number') && (((1) === x))))?new cljs.core.Keyword(null,"row-only","row-only",-701331619):new cljs.core.Keyword(null,"rows-only","rows-only",1193970146));
var vec__44718 = honey.sql.format_on_expr(which,x);
var seq__44719 = cljs.core.seq(vec__44718);
var first__44720 = cljs.core.first(seq__44719);
var seq__44719__$1 = cljs.core.next(seq__44719);
var sql = first__44720;
var params = seq__44719__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql," ",honey.sql.sql_kw(rows))], null),params);
}),new cljs.core.Var(function(){return honey.sql.format_on_set_op;},new cljs.core.Symbol("honey.sql","format-on-set-op","honey.sql/format-on-set-op",-1702673170,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-on-set-op","format-on-set-op",-700808827,null),"honey/sql.cljc",24,1,739,739,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_on_set_op)?honey.sql.format_on_set_op.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_rename_item;},new cljs.core.Symbol("honey.sql","format-rename-item","honey.sql/format-rename-item",853110413,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-rename-item","format-rename-item",1197681200,null),"honey/sql.cljc",26,1,1536,1536,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null)], null)),null,(cljs.core.truth_(honey.sql.format_rename_item)?honey.sql.format_rename_item.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_lock_strength;},new cljs.core.Symbol("honey.sql","format-lock-strength","honey.sql/format-lock-strength",1596503099,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-lock-strength","format-lock-strength",-476935778,null),"honey/sql.cljc",28,1,1158,1158,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_lock_strength)?honey.sql.format_lock_strength.cljs$lang$test:null)])),honey.sql.check_where(new cljs.core.Var(function(){return honey.sql.format_selector;},new cljs.core.Symbol("honey.sql","format-selector","honey.sql/format-selector",-2093502057,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selector","format-selector",1319204090,null),"honey/sql.cljc",23,1,993,993,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selector)?honey.sql.format_selector.cljs$lang$test:null)]))),new cljs.core.Var(function(){return honey.sql.format_join;},new cljs.core.Symbol("honey.sql","format-join","honey.sql/format-join",1142939916,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-join","format-join",-242897439,null),"honey/sql.cljc",19,1,1061,1061,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null)),null,(cljs.core.truth_(honey.sql.format_join)?honey.sql.format_join.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_selects;},new cljs.core.Symbol("honey.sql","format-selects","honey.sql/format-selects",-1805335445,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-selects","format-selects",1626536724,null),"honey/sql.cljc",22,1,842,842,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_selects)?honey.sql.format_selects.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.format_on_set_op;},new cljs.core.Symbol("honey.sql","format-on-set-op","honey.sql/format-on-set-op",-1702673170,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-on-set-op","format-on-set-op",-700808827,null),"honey/sql.cljc",24,1,739,739,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.format_on_set_op)?honey.sql.format_on_set_op.cljs$lang$test:null)]))]));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.deref(honey.sql.base_clause_order)),cljs.core.set(cljs.core.deref(honey.sql.current_clause_order)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.set(cljs.core.keys(cljs.core.deref(honey.sql.clause_format)))], 0))){
} else {
throw (new Error("Assert failed: (= (set (clojure.core/deref base-clause-order)) (set (clojure.core/deref current-clause-order)) (set (keys (clojure.core/deref clause-format))))"));
}
/**
 * Given a hash map representing a SQL statement and a hash map
 *   of options, return a vector containing a string -- the formatted
 *   SQL statement -- followed by any parameter values that SQL needs.
 * 
 *   This is intended to be used when writing your own formatters to
 *   extend the DSL supported by HoneySQL.
 */
honey.sql.format_dsl = (function honey$sql$format_dsl(var_args){
var G__44732 = arguments.length;
switch (G__44732) {
case 1:
return honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 = (function (statement_map){
return honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2(statement_map,cljs.core.PersistentArrayMap.EMPTY);
}));

(honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2 = (function (statement_map,p__44733){
var map__44734 = p__44733;
var map__44734__$1 = cljs.core.__destructure_map(map__44734);
var aliased = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44734__$1,new cljs.core.Keyword(null,"aliased","aliased",-125439273));
var nested = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44734__$1,new cljs.core.Keyword(null,"nested","nested",18943849));
var pretty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44734__$1,new cljs.core.Keyword(null,"pretty","pretty",-1916372486));
var _STAR_options_STAR__orig_val__44735 = honey.sql._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__44736 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(honey.sql._STAR_options_STAR_,new cljs.core.Keyword(null,"dsl","dsl",397853177),statement_map);
(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__temp_val__44736);

try{var vec__44737 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__44745,k){
var vec__44746 = p__44745;
var sql = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44746,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44746,(1),null);
var leftover = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44746,(2),null);
var result = vec__44746;
var temp__5827__auto__ = (function (){var temp__5827__auto__ = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(leftover) : k.call(null,leftover));
if((temp__5827__auto__ == null)){
var s = honey.sql.kw__GT_sym(k);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(leftover,s);
} else {
var xs = temp__5827__auto__;
return xs;
}
})();
if((temp__5827__auto__ == null)){
return result;
} else {
var xs = temp__5827__auto__;
var formatter = (function (){var G__44752 = cljs.core.deref(honey.sql.clause_format);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__44752) : k.call(null,G__44752));
})();
var vec__44749 = (formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(k,xs) : formatter.call(null,k,xs));
var seq__44750 = cljs.core.seq(vec__44749);
var first__44751 = cljs.core.first(seq__44750);
var seq__44750__$1 = cljs.core.next(seq__44750);
var sql_SINGLEQUOTE_ = first__44751;
var params_SINGLEQUOTE_ = seq__44750__$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sql,sql_SINGLEQUOTE_),((params_SINGLEQUOTE_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(params,params_SINGLEQUOTE_):params),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(leftover,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([honey.sql.kw__GT_sym(k)], 0))], null);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,statement_map], null),new cljs.core.Keyword(null,"clause-order","clause-order",1290793904).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_options_STAR_));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44737,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44737,(1),null);
var leftover = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44737,(2),null);
if(cljs.core.seq(leftover)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$5("These SQL clauses are unknown or have nil values: ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(leftover))," (perhaps you need [:lift {",cljs.core.first(cljs.core.keys(leftover))," ...}] here?)"),leftover);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44758 = honey.sql.util.join.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(pretty)?"\n":" "),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_),sqls);
var G__44758__$1 = (cljs.core.truth_(pretty)?(function (){var s = G__44758;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("\n",s,"\n");
})():G__44758);
if(cljs.core.truth_((function (){var and__5023__auto__ = nested;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(aliased);
} else {
return and__5023__auto__;
}
})())){
var s = G__44758__$1;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",s,")");
} else {
return G__44758__$1;
}
})()], null),params);
}
}finally {(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__orig_val__44735);
}}));

(honey.sql.format_dsl.cljs$lang$maxFixedArity = 2);

/**
 * Provided for backward compatibility with earlier HoneySQL versions.
 */
honey.sql.infix_aliases = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"not=","not=",-173995323),new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.Keyword(null,"!=","!=",-1841737356),new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"regexp","regexp",-541372782)], null);
honey.sql.infix_ops = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 25, ["&&",null,"!=",null,"<->",null,"<=",null,"with-ordinality",null,"~",null,"is",null,"like",null,"is-distinct-from",null,"regex",null,"not-like",null,"is-not-distinct-from",null,"similar-to",null,"not=",null,"regexp",null,"or",null,">=",null,"not-similar-to",null,"and",null,"<>",null,"not-ilike",null,"is-not",null,"ilike",null,"||",null,"xor",null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str,"+-*%|&^=<>")),cljs.core.keys(honey.sql.infix_aliases)),cljs.core.vals(honey.sql.infix_aliases))),new cljs.core.Keyword(null,"/","/",1282502798)));
honey.sql.op_ignore_nil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",235744169),null,new cljs.core.Keyword(null,"and","and",-971899817),null], null), null));
/**
 * The operators that can be unary. This is a fixed set until someone
 *   identifies any new ones.
 */
honey.sql.op_can_be_unary = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,honey.sql.util.str),"+-~")));
honey.sql.unwrap = (function honey$sql$unwrap(x,opts){
var temp__5823__auto__ = cljs.core.meta(x);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var temp__5823__auto____$1 = new cljs.core.Keyword("honey.sql","wrapper","honey.sql/wrapper",465758343).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto____$1)){
var f = temp__5823__auto____$1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,opts) : f.call(null,x,opts));
} else {
return x;
}
} else {
return x;
}
});
honey.sql.format_in = (function honey$sql$format_in(in$,p__44775){
var vec__44786 = p__44775;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44786,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44786,(1),null);
var map__44789 = honey.sql._STAR_options_STAR_;
var map__44789__$1 = cljs.core.__destructure_map(map__44789);
var caching = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"caching","caching",-858598686));
var checking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"checking","checking",1748720818));
var numbered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789__$1,new cljs.core.Keyword(null,"numbered","numbered",-2119856269));
var vec__44790 = (function (){var G__44799 = x;
var G__44800 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__44799,G__44800) : honey.sql.format_expr.call(null,G__44799,G__44800));
})();
var seq__44791 = cljs.core.seq(vec__44790);
var first__44792 = cljs.core.first(seq__44791);
var seq__44791__$1 = cljs.core.next(seq__44791);
var sql_x = first__44792;
var params_x = seq__44791__$1;
var vec__44793 = (function (){var G__44801 = y;
var G__44802 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__44801,G__44802) : honey.sql.format_expr.call(null,G__44801,G__44802));
})();
var seq__44794 = cljs.core.seq(vec__44793);
var first__44795 = cljs.core.first(seq__44794);
var seq__44794__$1 = cljs.core.next(seq__44794);
var sql_y = first__44795;
var params_y = seq__44794__$1;
var vec__44796 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44769_SHARP_){
return honey.sql.unwrap(p1__44769_SHARP_,cljs.core.PersistentArrayMap.EMPTY);
}),params_y);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44796,(0),null);
var values = vec__44796;
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.meta(cljs.core.first(params_y));
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = new cljs.core.Keyword("honey.sql","wrapper","honey.sql/wrapper",465758343).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(params_y)));
if(cljs.core.truth_(and__5023__auto____$1)){
return caching;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("SQL that includes IN () expressions cannot be cached",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),checking)){
} else {
if(((((cljs.core.sequential_QMARK_(y)) && (cljs.core.empty_QMARK_(y)))) || (((cljs.core.sequential_QMARK_(v1)) && (cljs.core.empty_QMARK_(v1)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("IN () empty collection is illegal",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clause","clause",1479668060),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,x,y], null)], null));
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"strict","strict",-665564191),checking);
if(and__5023__auto__){
var or__5025__auto__ = (function (){var and__5023__auto____$1 = cljs.core.sequential_QMARK_(y);
if(and__5023__auto____$1){
return cljs.core.some(cljs.core.nil_QMARK_,y);
} else {
return and__5023__auto____$1;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto____$1 = cljs.core.sequential_QMARK_(v1);
if(and__5023__auto____$1){
return cljs.core.some(cljs.core.nil_QMARK_,v1);
} else {
return and__5023__auto____$1;
}
}
} else {
return and__5023__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("IN (NULL) does not match",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clause","clause",1479668060),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,x,y], null)], null));
} else {
}
}

if(((cljs.core.not(numbered)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",sql_y)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(params_y))) && (cljs.core.coll_QMARK_(v1)))))))){
var sql = honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(v1),"?")),")");
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(sql_x," ",honey.sql.sql_kw(in$)," ",sql)], null),params_x,v1);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = numbered;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("$",cljs.core.count(cljs.core.deref(numbered))),sql_y)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(params_y))) && (cljs.core.coll_QMARK_(v1)))));
} else {
return and__5023__auto__;
}
})())){
var vs = (function (){var iter__5503__auto__ = (function honey$sql$format_in_$_iter__44813(s__44814){
return (new cljs.core.LazySeq(null,(function (){
var s__44814__$1 = s__44814;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__44814__$1);
if(temp__5825__auto__){
var s__44814__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44814__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__44814__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__44816 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__44815 = (0);
while(true){
if((i__44815 < size__5502__auto__)){
var v = cljs.core._nth(c__5501__auto__,i__44815);
cljs.core.chunk_append(b__44816,honey.sql.__GT_numbered(v));

var G__45484 = (i__44815 + (1));
i__44815 = G__45484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44816),honey$sql$format_in_$_iter__44813(cljs.core.chunk_rest(s__44814__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44816),null);
}
} else {
var v = cljs.core.first(s__44814__$2);
return cljs.core.cons(honey.sql.__GT_numbered(v),honey$sql$format_in_$_iter__44813(cljs.core.rest(s__44814__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(v1);
})();
var sql = honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),vs),")");
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(sql_x," ",honey.sql.sql_kw(in$)," ",sql)], null),params_x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,vs));
} else {
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(sql_x," ",honey.sql.sql_kw(in$)," ",sql_y)], null),params_x,(cljs.core.truth_(numbered)?values:params_y));

}
}
});
honey.sql.function_0 = (function honey$sql$function_0(k,xs){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(honey.sql.sql_kw(k),((cljs.core.seq(xs))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44827_SHARP_){
return honey.sql.format_simple_expr(p1__44827_SHARP_,"column/index operation");
})),xs),")"):null))], null);
});
honey.sql.function_1 = (function honey$sql$function_1(k,xs){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(honey.sql.sql_kw(k),((cljs.core.seq(xs))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(" ",honey.sql.format_simple_expr(cljs.core.first(xs),"column/index operation"),(function (){var temp__5825__auto__ = cljs.core.next(xs);
if(temp__5825__auto__){
var args = temp__5825__auto__;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44833_SHARP_){
return honey.sql.format_simple_expr(p1__44833_SHARP_,"column/index operation");
})),args),")");
} else {
return null;
}
})()):null))], null);
});
honey.sql.function_1_opt = (function honey$sql$function_1_opt(k,xs){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(honey.sql.sql_kw(k),((cljs.core.seq(xs))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2((function (){var temp__5825__auto__ = cljs.core.first(xs);
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" ",honey.sql.format_simple_expr(e,"column/index operation"));
} else {
return null;
}
})(),(function (){var temp__5825__auto__ = cljs.core.next(xs);
if(temp__5825__auto__){
var args = temp__5825__auto__;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44834_SHARP_){
return honey.sql.format_simple_expr(p1__44834_SHARP_,"column/index operation");
})),args),")");
} else {
return null;
}
})()):null))], null);
});
/**
 * For FILTER and WITHIN GROUP that have an expression
 *   followed by a SQL clause.
 */
honey.sql.expr_clause_pairs = (function honey$sql$expr_clause_pairs(k,pairs){
var vec__44841 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__44844,p__44845){
var vec__44846 = p__44844;
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44846,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44846,(1),null);
var vec__44849 = p__44845;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44849,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44849,(1),null);
var vec__44852 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(e) : honey.sql.format_expr.call(null,e));
var seq__44853 = cljs.core.seq(vec__44852);
var first__44854 = cljs.core.first(seq__44853);
var seq__44853__$1 = cljs.core.next(seq__44853);
var sql_e = first__44854;
var params_e = seq__44853__$1;
var vec__44855 = honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null));
var seq__44856 = cljs.core.seq(vec__44855);
var first__44857 = cljs.core.first(seq__44856);
var seq__44856__$1 = cljs.core.next(seq__44856);
var sql_c = first__44857;
var params_c = seq__44856__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sqls,honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(sql_e," ",honey.sql.sql_kw(k)," ",sql_c)),honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(params,params_e,params_c)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),pairs));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44841,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44841,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls)], null),params);
});
/**
 * For both :case and :case-expr.
 */
honey.sql.case_clauses = (function honey$sql$case_clauses(k,clauses){
var case_expr_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"case-expr","case-expr",-1006930349),k);
var vec__44870 = ((case_expr_QMARK_)?(function (){var G__44876 = cljs.core.first(clauses);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(G__44876) : honey.sql.format_expr.call(null,G__44876));
})():null);
var seq__44871 = cljs.core.seq(vec__44870);
var first__44872 = cljs.core.first(seq__44871);
var seq__44871__$1 = cljs.core.next(seq__44871);
var sqlx = first__44872;
var paramsx = seq__44871__$1;
var vec__44873 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__44877,p__44878){
var vec__44879 = p__44877;
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44879,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44879,(1),null);
var vec__44882 = p__44878;
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44882,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44882,(1),null);
var vec__44891 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),condition))?null:(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(condition) : honey.sql.format_expr.call(null,condition)));
var seq__44892 = cljs.core.seq(vec__44891);
var first__44893 = cljs.core.first(seq__44892);
var seq__44892__$1 = cljs.core.next(seq__44892);
var sqlc = first__44893;
var paramsc = seq__44892__$1;
var vec__44894 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(value) : honey.sql.format_expr.call(null,value));
var seq__44895 = cljs.core.seq(vec__44894);
var first__44896 = cljs.core.first(seq__44895);
var seq__44895__$1 = cljs.core.next(seq__44895);
var sqlv = first__44896;
var paramsv = seq__44895__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),condition)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"else","else",132154381,null),condition))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sqls,honey.sql.sql_kw(new cljs.core.Keyword(null,"else","else",-1508377146)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sqlv], 0)):cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sqls,honey.sql.sql_kw(new cljs.core.Keyword(null,"when","when",-576417306)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sqlc,honey.sql.sql_kw(new cljs.core.Keyword(null,"then","then",460598070)),sqlv], 0))),honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(params,paramsc,paramsv)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),((case_expr_QMARK_)?cljs.core.rest(clauses):clauses)));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44873,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44873,(1),null);
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$variadic(honey.sql.sql_kw(new cljs.core.Keyword(null,"case","case",1143702196))," ",((case_expr_QMARK_)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(sqlx," "):null),honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(" ",sqls)," ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([honey.sql.sql_kw(new cljs.core.Keyword(null,"end","end",-268185958))], 0))], null),paramsx,params);
});
/**
 * For both :between and :not-between
 */
honey.sql.between_fn = (function honey$sql$between_fn(k,p__44897){
var vec__44898 = p__44897;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44898,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44898,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44898,(2),null);
var vec__44901 = (function (){var G__44910 = x;
var G__44911 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__44910,G__44911) : honey.sql.format_expr.call(null,G__44910,G__44911));
})();
var seq__44902 = cljs.core.seq(vec__44901);
var first__44903 = cljs.core.first(seq__44902);
var seq__44902__$1 = cljs.core.next(seq__44902);
var sql_x = first__44903;
var params_x = seq__44902__$1;
var vec__44904 = (function (){var G__44912 = a;
var G__44913 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__44912,G__44913) : honey.sql.format_expr.call(null,G__44912,G__44913));
})();
var seq__44905 = cljs.core.seq(vec__44904);
var first__44906 = cljs.core.first(seq__44905);
var seq__44905__$1 = cljs.core.next(seq__44905);
var sql_a = first__44906;
var params_a = seq__44905__$1;
var vec__44907 = (function (){var G__44914 = b;
var G__44915 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__44914,G__44915) : honey.sql.format_expr.call(null,G__44914,G__44915));
})();
var seq__44908 = cljs.core.seq(vec__44907);
var first__44909 = cljs.core.first(seq__44908);
var seq__44908__$1 = cljs.core.next(seq__44908);
var sql_b = first__44909;
var params_b = seq__44908__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$variadic(sql_x," ",honey.sql.sql_kw(k)," ",sql_a,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" AND ",sql_b], 0))], null),params_x,params_a,params_b);
});
honey.sql.object_record_literal = (function honey$sql$object_record_literal(k,p__44916){
var vec__44917 = p__44916;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44917,(0),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.inline_map.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",")"], 0)))], null);
});
/**
 * [:get-in expr key-or-index1 key-or-index2 ...]
 */
honey.sql.get_in_navigation = (function honey$sql$get_in_navigation(wrap,p__44921){
var vec__44922 = p__44921;
var seq__44923 = cljs.core.seq(vec__44922);
var first__44924 = cljs.core.first(seq__44923);
var seq__44923__$1 = cljs.core.next(seq__44923);
var expr = first__44924;
var kix = seq__44923__$1;
var vec__44925 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(expr) : honey.sql.format_expr.call(null,expr));
var seq__44926 = cljs.core.seq(vec__44925);
var first__44927 = cljs.core.first(seq__44926);
var seq__44926__$1 = cljs.core.next(seq__44926);
var sql = first__44927;
var params = seq__44926__$1;
var vec__44928 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44920_SHARP_){
if(typeof p1__44920_SHARP_ === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("[",p1__44920_SHARP_,"]")], null);
} else {
if(typeof p1__44920_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("[",honey.sql.sqlize_value(p1__44920_SHARP_),"]")], null);
} else {
if(cljs.core.ident_QMARK_(p1__44920_SHARP_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(".",honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(p1__44920_SHARP_))], null);
} else {
var vec__44931 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(p1__44920_SHARP_) : honey.sql.format_expr.call(null,p1__44920_SHARP_));
var seq__44932 = cljs.core.seq(vec__44931);
var first__44933 = cljs.core.first(seq__44932);
var seq__44932__$1 = cljs.core.next(seq__44932);
var sql_SINGLEQUOTE_ = first__44933;
var params_SINGLEQUOTE_ = seq__44932__$1;
return cljs.core.cons(honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("[",sql_SINGLEQUOTE_,"]"),params_SINGLEQUOTE_);

}
}
}
}),kix));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44928,(0),null);
var params_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44928,(1),null);
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(wrap)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",sql,")"):sql),honey.sql.util.join.cljs$core$IFn$_invoke$arity$2("",sqls))], null),params,params_SINGLEQUOTE_);
});
honey.sql.ignore_respect_nulls = (function honey$sql$ignore_respect_nulls(k,p__44934){
var vec__44935 = p__44934;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44935,(0),null);
var vec__44938 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(x) : honey.sql.format_expr.call(null,x));
var seq__44939 = cljs.core.seq(vec__44938);
var first__44940 = cljs.core.first(seq__44939);
var seq__44939__$1 = cljs.core.next(seq__44939);
var sql = first__44940;
var params = seq__44939__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql," ",honey.sql.sql_kw(k))], null),params);
});
honey.sql.dot_navigation = (function honey$sql$dot_navigation(sep,p__44942){
var vec__44943 = p__44942;
var seq__44944 = cljs.core.seq(vec__44943);
var first__44945 = cljs.core.first(seq__44944);
var seq__44944__$1 = cljs.core.next(seq__44944);
var expr = first__44945;
var first__44945__$1 = cljs.core.first(seq__44944__$1);
var seq__44944__$2 = cljs.core.next(seq__44944__$1);
var col = first__44945__$1;
var subcols = seq__44944__$2;
var vec__44946 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(expr) : honey.sql.format_expr.call(null,expr));
var seq__44947 = cljs.core.seq(vec__44946);
var first__44948 = cljs.core.first(seq__44947);
var seq__44947__$1 = cljs.core.next(seq__44947);
var sql = first__44948;
var params = seq__44947__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(sql,sep,honey.sql.format_simple_expr(col,"dot navigation"),((cljs.core.seq(subcols))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(".",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44941_SHARP_){
return honey.sql.format_simple_expr(p1__44941_SHARP_,"dot navigation");
}),subcols))):null))], null),params);
});
honey.sql.format_fn_call_expr = (function honey$sql$format_fn_call_expr(f,expr){
var args = cljs.core.rest(expr);
var vec__44949 = ((cljs.core.sequential_QMARK_(f))?(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(f) : honey.sql.format_expr.call(null,f)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sql_kw(f)], null));
var seq__44950 = cljs.core.seq(vec__44949);
var first__44951 = cljs.core.first(seq__44950);
var seq__44950__$1 = cljs.core.next(seq__44950);
var f_sql = first__44951;
var f_params = seq__44950__$1;
var vec__44952 = honey.sql.format_interspersed_expr_list.cljs$core$IFn$_invoke$arity$1(args);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44952,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44952,(1),null);
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(f_sql,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args))) && (((cljs.core.map_QMARK_(cljs.core.first(args))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(sqls)))))))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.first(sqls)):honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls),")")))], null),f_params,params);
});
honey.sql.special_syntax = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"constraint","constraint",1725147424),new cljs.core.Keyword(null,"escape","escape",-991601952),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"unique","unique",329397282),new cljs.core.Keyword(null,"lift","lift",903632035),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"composite","composite",-257118970),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword("bigquery","array","bigquery/array",1718523718),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,".:.",".:.",-872581656),new cljs.core.Keyword(null,"cast","cast",-1761029143),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"not","not",-595976884),new cljs.core.Keyword(null,"references","references",882562509),new cljs.core.Keyword(null,"array","array",-2080713842),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Keyword(null,"distinct","distinct",-1788879121),new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,"case-expr","case-expr",-1006930349),new cljs.core.Keyword("bigquery","struct","bigquery/struct",-596080428),new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"respect-nulls","respect-nulls",1325870772),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"record","record",-779106859),new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.Keyword(null,"foreign-key","foreign-key",124300407),new cljs.core.Keyword(null,"ignore-nulls","ignore-nulls",838890039),new cljs.core.Keyword(null,"get-in","get-in",688791704),new cljs.core.Keyword(null,"interval","interval",1708495417),new cljs.core.Keyword(null,"within-group","within-group",-1794793927),new cljs.core.Keyword(null,"over","over",192553051),new cljs.core.Keyword(null,"not-between","not-between",-979594021),new cljs.core.Keyword(null,"xtql","xtql",948290267),new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"primary-key","primary-key",1422512605),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"at-time-zone","at-time-zone",1251199038),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"lateral","lateral",2094286431)],[new cljs.core.Var(function(){return honey.sql.function_1;},new cljs.core.Symbol("honey.sql","function-1","honey.sql/function-1",-375233619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"function-1","function-1",890872902,null),"honey/sql.cljc",18,1,1887,1887,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.function_1)?honey.sql.function_1.cljs$lang$test:null)])),(function (_,p__44956){
var vec__44957 = p__44956;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44957,(0),null);
var escape_chars = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44957,(1),null);
var vec__44960 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(pattern) : honey.sql.format_expr.call(null,pattern));
var seq__44961 = cljs.core.seq(vec__44960);
var first__44962 = cljs.core.first(seq__44961);
var seq__44961__$1 = cljs.core.next(seq__44961);
var sql_p = first__44962;
var params_p = seq__44961__$1;
var vec__44963 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(escape_chars) : honey.sql.format_expr.call(null,escape_chars));
var seq__44964 = cljs.core.seq(vec__44963);
var first__44965 = cljs.core.first(seq__44964);
var seq__44964__$1 = cljs.core.next(seq__44964);
var sql_e = first__44965;
var params_e = seq__44964__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(sql_p," ",honey.sql.sql_kw(new cljs.core.Keyword(null,"escape","escape",-991601952))," ",sql_e)], null),params_p,params_e);
}),(function (_,p__44966){
var vec__44967 = p__44966;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44967,(0),null);
var vec__44970 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(x) : honey.sql.format_expr.call(null,x));
var seq__44971 = cljs.core.seq(vec__44970);
var first__44972 = cljs.core.first(seq__44971);
var seq__44971__$1 = cljs.core.next(seq__44971);
var sql = first__44972;
var params = seq__44971__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",sql,")")], null),params);
}),new cljs.core.Var(function(){return honey.sql.function_1_opt;},new cljs.core.Symbol("honey.sql","function-1-opt","honey.sql/function-1-opt",1209651237,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"function-1-opt","function-1-opt",-1283255102,null),"honey/sql.cljc",22,1,1899,1899,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.function_1_opt)?honey.sql.function_1_opt.cljs$lang$test:null)])),(function (_,p__44973){
var vec__44974 = p__44973;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44974,(0),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_options_STAR_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sqlize_value(x)], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"numbered","numbered",-2119856269).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_options_STAR_))){
return honey.sql.__GT_numbered(x);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?",cljs.core.with_meta(cljs.core.constantly(x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("honey.sql","wrapper","honey.sql/wrapper",465758343),(function (fx,___$1){
return (fx.cljs$core$IFn$_invoke$arity$0 ? fx.cljs$core$IFn$_invoke$arity$0() : fx.call(null));
})], null))], null);

}
}
}),new cljs.core.Var(function(){return honey.sql.function_1_opt;},new cljs.core.Symbol("honey.sql","function-1-opt","honey.sql/function-1-opt",1209651237,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"function-1-opt","function-1-opt",-1283255102,null),"honey/sql.cljc",22,1,1899,1899,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.function_1_opt)?honey.sql.function_1_opt.cljs$lang$test:null)])),(function (_,p__44977){
var vec__44978 = p__44977;
var seq__44979 = cljs.core.seq(vec__44978);
var args = seq__44979;
var vec__44981 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(args);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44981,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44981,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls),")")], null),params);
}),(function (_,p__44984){
var vec__44985 = p__44984;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44985,(0),null);
var expr = vec__44985;
return honey.sql.format_fn_call_expr(f,expr);
}),(function (_,spec){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("ARRAY<",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(honey.sql.sql_kw),spec),">")], null);
}),(function (_,p__44988){
var vec__44989 = p__44988;
var seq__44990 = cljs.core.seq(vec__44989);
var xs = seq__44990;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(xs))){
return honey.sql.raw_render(cljs.core.first(xs));
} else {
return honey.sql.raw_render(xs);
}
}),new cljs.core.Var(function(){return honey.sql.function_1;},new cljs.core.Symbol("honey.sql","function-1","honey.sql/function-1",-375233619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"function-1","function-1",890872902,null),"honey/sql.cljc",18,1,1887,1887,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.function_1)?honey.sql.function_1.cljs$lang$test:null)])),(function (_,data){
return honey.sql.dot_navigation(":",data);
}),(function (_,p__44992){
var vec__44993 = p__44992;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44993,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44993,(1),null);
var vec__44996 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(x) : honey.sql.format_expr.call(null,x));
var seq__44997 = cljs.core.seq(vec__44996);
var first__44998 = cljs.core.first(seq__44997);
var seq__44997__$1 = cljs.core.next(seq__44997);
var sql = first__44998;
var params = seq__44997__$1;
var vec__44999 = ((cljs.core.ident_QMARK_(type))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sql_kw(type)], null):(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(type) : honey.sql.format_expr.call(null,type)));
var seq__45000 = cljs.core.seq(vec__44999);
var first__45001 = cljs.core.first(seq__45000);
var seq__45000__$1 = cljs.core.next(seq__45000);
var sql_SINGLEQUOTE_ = first__45001;
var params_SINGLEQUOTE_ = seq__45000__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5("CAST(",sql," AS ",sql_SINGLEQUOTE_,")")], null),params,params_SINGLEQUOTE_);
}),new cljs.core.Var(function(){return honey.sql.between_fn;},new cljs.core.Symbol("honey.sql","between-fn","honey.sql/between-fn",1741524863,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"between-fn","between-fn",-763672350,null),"honey/sql.cljc",18,1,1949,1949,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null)], null)),"For both :between and :not-between",(cljs.core.truth_(honey.sql.between_fn)?honey.sql.between_fn.cljs$lang$test:null)])),(function (_,p__45007){
var vec__45008 = p__45007;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45008,(0),null);
var vec__45011 = (function (){var G__45014 = x;
var G__45015 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__45014,G__45015) : honey.sql.format_expr.call(null,G__45014,G__45015));
})();
var seq__45012 = cljs.core.seq(vec__45011);
var first__45013 = cljs.core.first(seq__45012);
var seq__45012__$1 = cljs.core.next(seq__45012);
var sql = first__45013;
var params = seq__45012__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("NOT ",sql)], null),params);
}),new cljs.core.Var(function(){return honey.sql.function_1;},new cljs.core.Symbol("honey.sql","function-1","honey.sql/function-1",-375233619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"function-1","function-1",890872902,null),"honey/sql.cljc",18,1,1887,1887,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.function_1)?honey.sql.function_1.cljs$lang$test:null)])),(function (_,p__45016){
var vec__45017 = p__45016;
var arr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45017,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45017,(1),null);
if(cljs.core.map_QMARK_(arr)){
var vec__45020 = honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(arr);
var seq__45021 = cljs.core.seq(vec__45020);
var first__45022 = cljs.core.first(seq__45021);
var seq__45021__$1 = cljs.core.next(seq__45021);
var sql = first__45022;
var params = seq__45021__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("ARRAY(",sql,")")], null),params);
} else {
var vec__45023 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(arr);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45023,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45023,(1),null);
var type_str = (cljs.core.truth_(type)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("::",honey.sql.sql_kw(type),"[]"):null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4("ARRAY[",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls),"]",type_str)], null),params);
}
}),(function (_,p__45026){
var vec__45027 = p__45026;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45027,(0),null);
var k__$1 = honey.sql.sym__GT_kw(k);
if(cljs.core.truth_(new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_options_STAR_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sqlize_value(honey.sql.param_value(k__$1))], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"numbered","numbered",-2119856269).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_options_STAR_))){
return honey.sql.__GT_numbered_param(k__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?",honey.sql.__GT_param(k__$1)], null);

}
}
}),(function (_,p__45030){
var vec__45031 = p__45030;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45031,(0),null);
var vec__45034 = (function (){var G__45037 = x;
var G__45038 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__45037,G__45038) : honey.sql.format_expr.call(null,G__45037,G__45038));
})();
var seq__45035 = cljs.core.seq(vec__45034);
var first__45036 = cljs.core.first(seq__45035);
var seq__45035__$1 = cljs.core.next(seq__45035);
var sql = first__45036;
var params = seq__45035__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("DISTINCT ",sql)], null),params);
}),(function (_,p__45039){
var vec__45040 = p__45039;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45040,(0),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aliased","aliased",-125439273),true], null))], null);
}),honey.sql.expr_clause_pairs,(function (_,data){
return honey.sql.dot_navigation(".",data);
}),new cljs.core.Var(function(){return honey.sql.case_clauses;},new cljs.core.Symbol("honey.sql","case-clauses","honey.sql/case-clauses",-228279509,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"case-clauses","case-clauses",233734030,null),"honey/sql.cljc",20,1,1925,1925,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null)),"For both :case and :case-expr.",(cljs.core.truth_(honey.sql.case_clauses)?honey.sql.case_clauses.cljs$lang$test:null)])),(function (_,spec){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("STRUCT<",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(honey.sql.format_single_column),spec),">")], null);
}),new cljs.core.Var(function(){return honey.sql.case_clauses;},new cljs.core.Symbol("honey.sql","case-clauses","honey.sql/case-clauses",-228279509,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"case-clauses","case-clauses",233734030,null),"honey/sql.cljc",20,1,1925,1925,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null)),"For both :case and :case-expr.",(cljs.core.truth_(honey.sql.case_clauses)?honey.sql.case_clauses.cljs$lang$test:null)])),honey.sql.ignore_respect_nulls,(function (_,data){
return honey.sql.get_in_navigation(false,data);
}),new cljs.core.Var(function(){return honey.sql.object_record_literal;},new cljs.core.Symbol("honey.sql","object-record-literal","honey.sql/object-record-literal",2085315930,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"object-record-literal","object-record-literal",-1044307713,null),"honey/sql.cljc",29,1,1958,1958,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null)),null,(cljs.core.truth_(honey.sql.object_record_literal)?honey.sql.object_record_literal.cljs$lang$test:null)])),(function (k,p__45048){
var vec__45049 = p__45048;
var seq__45050 = cljs.core.seq(vec__45049);
var first__45051 = cljs.core.first(seq__45050);
var seq__45050__$1 = cljs.core.next(seq__45050);
var e = first__45051;
var qs = seq__45050__$1;
var vec__45052 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(e) : honey.sql.format_expr.call(null,e));
var seq__45053 = cljs.core.seq(vec__45052);
var first__45054 = cljs.core.first(seq__45053);
var seq__45053__$1 = cljs.core.next(seq__45053);
var sql_e = first__45054;
var params_e = seq__45053__$1;
var vec__45055 = honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([k,qs]));
var seq__45056 = cljs.core.seq(vec__45055);
var first__45057 = cljs.core.first(seq__45056);
var seq__45056__$1 = cljs.core.next(seq__45056);
var sql_q = first__45057;
var params_q = seq__45056__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql_e," ",sql_q)], null),params_e,params_q);
}),new cljs.core.Var(function(){return honey.sql.function_0;},new cljs.core.Symbol("honey.sql","function-0","honey.sql/function-0",1871273967,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"function-0","function-0",-617407678,null),"honey/sql.cljc",18,1,1878,1878,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.function_0)?honey.sql.function_0.cljs$lang$test:null)])),honey.sql.ignore_respect_nulls,(function (_,data){
return honey.sql.get_in_navigation(true,data);
}),honey.sql.format_interval,honey.sql.expr_clause_pairs,(function (_,p__45058){
var vec__45059 = p__45058;
var seq__45060 = cljs.core.seq(vec__45059);
var args = seq__45060;
var vec__45062 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__45065,p__45066){
var vec__45067 = p__45065;
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45067,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45067,(1),null);
var vec__45070 = p__45066;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45070,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45070,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45070,(2),null);
var vec__45073 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(e) : honey.sql.format_expr.call(null,e));
var seq__45074 = cljs.core.seq(vec__45073);
var first__45075 = cljs.core.first(seq__45074);
var seq__45074__$1 = cljs.core.next(seq__45074);
var sql_e = first__45075;
var params_e = seq__45074__$1;
var vec__45076 = (((((p == null)) || (cljs.core.map_QMARK_(p))))?honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(p)], null));
var seq__45077 = cljs.core.seq(vec__45076);
var first__45078 = cljs.core.first(seq__45077);
var seq__45077__$1 = cljs.core.next(seq__45077);
var sql_p = first__45078;
var params_p = seq__45077__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sqls,honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(sql_e," OVER ",sql_p,(cljs.core.truth_(a)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" AS ",honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(a)):null))),honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(params,params_e,params_p)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),args);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45062,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45062,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls)], null),params);
}),new cljs.core.Var(function(){return honey.sql.between_fn;},new cljs.core.Symbol("honey.sql","between-fn","honey.sql/between-fn",1741524863,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"between-fn","between-fn",-763672350,null),"honey/sql.cljc",18,1,1949,1949,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null)], null)),"For both :between and :not-between",(cljs.core.truth_(honey.sql.between_fn)?honey.sql.between_fn.cljs$lang$test:null)])),(function (_,p__45085){
var vec__45086 = p__45085;
var seq__45087 = cljs.core.seq(vec__45086);
var first__45088 = cljs.core.first(seq__45087);
var seq__45087__$1 = cljs.core.next(seq__45087);
var x = first__45088;
var args = seq__45087__$1;
var arg_count = ((((cljs.core.sequential_QMARK_(x)) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null], null), null),cljs.core.first(x))) && (cljs.core.sequential_QMARK_(cljs.core.second(x)))))))?cljs.core.count(cljs.core.second(x)):null);
var base_xtql = honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("$$ ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))," $$");
var arg_tail = (cljs.core.truth_(arg_count)?honey.sql.util.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(arg_count,", ?")):null);
var xtql = honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("XTQL ",(cljs.core.truth_(arg_tail)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$4("(",base_xtql,arg_tail,")"):base_xtql));
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"dsl","dsl",397853177).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_options_STAR_))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",xtql,")"):xtql)], null),args);
}),(function (_,p__45089){
var vec__45090 = p__45089;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45090,(0),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(e)], null);
}),new cljs.core.Var(function(){return honey.sql.function_0;},new cljs.core.Symbol("honey.sql","function-0","honey.sql/function-0",1871273967,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"function-0","function-0",-617407678,null),"honey/sql.cljc",18,1,1878,1878,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.function_0)?honey.sql.function_0.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.object_record_literal;},new cljs.core.Symbol("honey.sql","object-record-literal","honey.sql/object-record-literal",2085315930,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"object-record-literal","object-record-literal",-1044307713,null),"honey/sql.cljc",29,1,1958,1958,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null)),null,(cljs.core.truth_(honey.sql.object_record_literal)?honey.sql.object_record_literal.cljs$lang$test:null)])),(function (_,p__45094){
var vec__45095 = p__45094;
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45095,(0),null);
var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45095,(1),null);
var vec__45099 = (function (){var G__45105 = expr;
var G__45106 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__45105,G__45106) : honey.sql.format_expr.call(null,G__45105,G__45106));
})();
var seq__45100 = cljs.core.seq(vec__45099);
var first__45101 = cljs.core.first(seq__45100);
var seq__45100__$1 = cljs.core.next(seq__45100);
var sql = first__45101;
var params = seq__45100__$1;
var vec__45102 = (function (){var _STAR_options_STAR__orig_val__45108 = honey.sql._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__45109 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(honey.sql._STAR_options_STAR_,new cljs.core.Keyword(null,"inline","inline",1399884222),true);
(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__temp_val__45109);

try{var G__45111 = ((cljs.core.ident_QMARK_(tz))?cljs.core.name(tz):tz);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(G__45111) : honey.sql.format_expr.call(null,G__45111));
}finally {(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__orig_val__45108);
}})();
var seq__45103 = cljs.core.seq(vec__45102);
var first__45104 = cljs.core.first(seq__45103);
var seq__45103__$1 = cljs.core.next(seq__45103);
var tz_sql = first__45104;
var ___$1 = seq__45103__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql," AT TIME ZONE ",tz_sql)], null),params);
}),(function (_,xs){
var _STAR_options_STAR__orig_val__45113 = honey.sql._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__45114 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(honey.sql._STAR_options_STAR_,new cljs.core.Keyword(null,"inline","inline",1399884222),true);
(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__temp_val__45114);

try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__44955_SHARP_){
var G__45115 = p1__44955_SHARP_;
var G__45116 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"record","record",-779106859),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__45115,G__45116) : honey.sql.format_expr.call(null,G__45115,G__45116));
})),xs)], null);
}finally {(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__orig_val__45113);
}}),(function (_,p__45118){
var vec__45119 = p__45118;
var seq__45120 = cljs.core.seq(vec__45119);
var first__45121 = cljs.core.first(seq__45120);
var seq__45120__$1 = cljs.core.next(seq__45120);
var e = first__45121;
var js = seq__45120__$1;
var vec__45122 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(honey.sql.format_selectable_dsl.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),true], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(honey.sql.format_dsl,js)));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45122,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45122,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(" ",sqls),")")], null),params);
}),(function (_,p__45126){
var vec__45127 = p__45126;
var clause_or_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45127,(0),null);
if(cljs.core.map_QMARK_(clause_or_expr)){
var vec__45131 = honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(clause_or_expr);
var seq__45132 = cljs.core.seq(vec__45131);
var first__45133 = cljs.core.first(seq__45132);
var seq__45132__$1 = cljs.core.next(seq__45132);
var sql = first__45133;
var params = seq__45132__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("LATERAL (",sql,")")], null),params);
} else {
var vec__45135 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(clause_or_expr) : honey.sql.format_expr.call(null,clause_or_expr));
var seq__45136 = cljs.core.seq(vec__45135);
var first__45137 = cljs.core.first(seq__45136);
var seq__45136__$1 = cljs.core.next(seq__45136);
var sql = first__45137;
var params = seq__45136__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("LATERAL ",sql)], null),params);
}
})]));
honey.sql.format_equality_expr = (function honey$sql$format_equality_expr(op_SINGLEQUOTE_,op,expr,nested){
var vec__45140 = expr;
var seq__45141 = cljs.core.seq(vec__45140);
var first__45142 = cljs.core.first(seq__45141);
var seq__45141__$1 = cljs.core.next(seq__45141);
var _ = first__45142;
var first__45142__$1 = cljs.core.first(seq__45141__$1);
var seq__45141__$2 = cljs.core.next(seq__45141__$1);
var a = first__45142__$1;
var first__45142__$2 = cljs.core.first(seq__45141__$2);
var seq__45141__$3 = cljs.core.next(seq__45141__$2);
var b = first__45142__$2;
var y = seq__45141__$3;
var ___$1 = ((cljs.core.seq(y))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("only binary ",op_SINGLEQUOTE_," is supported"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),expr], null))})():null);
var vec__45143 = (function (){var G__45150 = a;
var G__45151 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__45150,G__45151) : honey.sql.format_expr.call(null,G__45150,G__45151));
})();
var seq__45144 = cljs.core.seq(vec__45143);
var first__45145 = cljs.core.first(seq__45144);
var seq__45144__$1 = cljs.core.next(seq__45144);
var s1 = first__45145;
var p1 = seq__45144__$1;
var vec__45146 = (function (){var G__45152 = b;
var G__45153 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__45152,G__45153) : honey.sql.format_expr.call(null,G__45152,G__45153));
})();
var seq__45147 = cljs.core.seq(vec__45146);
var first__45148 = cljs.core.first(seq__45147);
var seq__45147__$1 = cljs.core.next(seq__45147);
var s2 = first__45148;
var p2 = seq__45147__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__45155 = (((((a == null)) || ((b == null))))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2((((a == null))?(((b == null))?"NULL":s2):s1),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"=","=",1152933628),op))?" IS NULL":" IS NOT NULL")):honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(s1," ",honey.sql.sql_kw(op)," ",s2));
if(cljs.core.truth_(nested)){
var s = G__45155;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",s,")");
} else {
return G__45155;
}
})()],null)),p1,p2);
});
honey.sql.format_infix_expr = (function honey$sql$format_infix_expr(op_SINGLEQUOTE_,op,expr,nested){
var args = (function (){var G__45161 = cljs.core.rest(expr);
if(cljs.core.contains_QMARK_(cljs.core.deref(honey.sql.op_ignore_nil),op)){
return cljs.core.filterv(cljs.core.some_QMARK_,G__45161);
} else {
return G__45161;
}
})();
var args__$1 = ((cljs.core.seq(args))?args:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"and","and",-971899817),op))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"or","or",235744169),op))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null):cljs.core.PersistentVector.EMPTY
)));
var vec__45158 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__45157_SHARP_){
var G__45162 = p1__45157_SHARP_;
var G__45163 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),honey.sql._STAR_nest_infix_STAR_], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__45162,G__45163) : honey.sql.format_expr.call(null,G__45162,G__45163));
})),args__$1);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45158,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45158,(1),null);
if((cljs.core.count(sqls) > (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("no operands found for ",op_SINGLEQUOTE_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),expr], null));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45165 = honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(" ",honey.sql.sql_kw(op)," "),sqls);
var G__45165__$1 = ((((cljs.core.contains_QMARK_(cljs.core.deref(honey.sql.op_can_be_unary),op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(sqls)))))?(function (){var s = G__45165;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(op)," ",s);
})():G__45165);
if(cljs.core.truth_(nested)){
var s = G__45165__$1;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",s,")");
} else {
return G__45165__$1;
}
})()], null),params);
});
/**
 * Given a data structure that represents a SQL expression and a hash
 *   map of options, return a vector containing a string -- the formatted
 *   SQL statement -- followed by any parameter values that SQL needs.
 * 
 *   This is intended to be used when writing your own formatters to
 *   extend the DSL supported by HoneySQL.
 */
honey.sql.format_expr = (function honey$sql$format_expr(var_args){
var G__45171 = arguments.length;
switch (G__45171) {
case 1:
return honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(expr,cljs.core.PersistentArrayMap.EMPTY);
}));

(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 = (function (expr,p__45176){
var map__45177 = p__45176;
var map__45177__$1 = cljs.core.__destructure_map(map__45177);
var opts = map__45177__$1;
var nested = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45177__$1,new cljs.core.Keyword(null,"nested","nested",18943849));
var record = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45177__$1,new cljs.core.Keyword(null,"record","record",-779106859));
if(cljs.core.ident_QMARK_(expr)){
return honey.sql.format_var.cljs$core$IFn$_invoke$arity$2(expr,opts);
} else {
if(((cljs.core.map_QMARK_(expr)) && (cljs.core.not(record)))){
return honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2(expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"nested","nested",18943849),true));
} else {
if(cljs.core.sequential_QMARK_(expr)){
var op_SINGLEQUOTE_ = honey.sql.sym__GT_kw(cljs.core.first(expr));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$3(honey.sql.infix_aliases,op_SINGLEQUOTE_,op_SINGLEQUOTE_);
if((op_SINGLEQUOTE_ instanceof cljs.core.Keyword)){
if(cljs.core.contains_QMARK_(cljs.core.deref(honey.sql.infix_ops),op_SINGLEQUOTE_)){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"<>","<>",1280186386),null,new cljs.core.Keyword(null,"=","=",1152933628),null], null), null),op)){
return honey.sql.format_equality_expr(op_SINGLEQUOTE_,op,expr,nested);
} else {
return honey.sql.format_infix_expr(op_SINGLEQUOTE_,op,expr,nested);
}
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"not-in","not-in",1005390648),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),op)){
var vec__45182 = honey.sql.format_in(op,cljs.core.rest(expr));
var seq__45183 = cljs.core.seq(vec__45182);
var first__45184 = cljs.core.first(seq__45183);
var seq__45183__$1 = cljs.core.next(seq__45183);
var sql = first__45184;
var params = seq__45183__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(nested)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",sql,")"):sql)], null),params);
} else {
if(cljs.core.contains_QMARK_(cljs.core.deref(honey.sql.special_syntax),op)){
var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(honey.sql.special_syntax),op);
var G__45185 = op;
var G__45186 = cljs.core.rest(expr);
return (formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(G__45185,G__45186) : formatter.call(null,G__45185,G__45186));
} else {
return honey.sql.format_fn_call_expr(op,expr);

}
}
}
} else {
var vec__45187 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(expr);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45187,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45187,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls),")")], null),params);
}
} else {
if(cljs.core.boolean_QMARK_(expr)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-lift-boolean","auto-lift-boolean",1793118318).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_dialect_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?",expr], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.upper_case(honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(expr))], null);
}
} else {
if((expr == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NULL"], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_options_STAR_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sqlize_value(expr)], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"numbered","numbered",-2119856269).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_options_STAR_))){
return honey.sql.__GT_numbered(expr);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?",expr], null);

}
}

}
}
}
}
}
}));

(honey.sql.format_expr.cljs$lang$maxFixedArity = 2);

honey.sql.check_dialect = (function honey$sql$check_dialect(dialect){
if(cljs.core.contains_QMARK_(cljs.core.deref(honey.sql.dialects),dialect)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("Invalid dialect: ",dialect),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valid-dialects","valid-dialects",-1269252169),cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.deref(honey.sql.dialects))))], null));
}

return dialect;
});
/**
 * If org.clojure/core.cache is available, resolves to a function that
 *   calls core.cache.wrapped/lookup-or-miss, otherwise to a function that
 *   throws an exception.
 * 
 *   In ClojureScript, a resolves to a function that throws an exception
 *   because core.cache relies on JVM machinery and is Clojure-only.
 */
honey.sql.through_opts = (function honey$sql$through_opts(opts,_cache,_data,_f){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cached queries are not supported in ClojureScript",opts);
});
/**
 * Turn the data DSL into a vector containing a SQL string followed by
 *   any parameter values that were encountered in the DSL structure.
 * 
 *   This is the primary API for HoneySQL and handles dialects, quoting,
 *   and named parameters.
 * 
 *   If the data DSL is a hash map, it will be treated as a SQL statement
 *   and formatted via `format-dsl`, otherwise it will be treated as a SQL
 *   expression and formatted via `format-expr`.
 * 
 *   `format` accepts options as either a single hash map argument or
 *   as named arguments (alternating keys and values). If you are using
 *   Clojure 1.11 (or later) you can mix'n'match, providing some options
 *   as named arguments followed by other options in a hash map.
 */
honey.sql.format = (function honey$sql$format(var_args){
var G__45211 = arguments.length;
switch (G__45211) {
case 1:
return honey.sql.format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return honey.sql.format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___45611 = arguments.length;
var i__5750__auto___45612 = (0);
while(true){
if((i__5750__auto___45612 < len__5749__auto___45611)){
args_arr__5774__auto__.push((arguments[i__5750__auto___45612]));

var G__45613 = (i__5750__auto___45612 + (1));
i__5750__auto___45612 = G__45613;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return honey.sql.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(honey.sql.format.cljs$core$IFn$_invoke$arity$1 = (function (data){
return honey.sql.format.cljs$core$IFn$_invoke$arity$2(data,cljs.core.PersistentArrayMap.EMPTY);
}));

(honey.sql.format.cljs$core$IFn$_invoke$arity$2 = (function (data,opts){
var cache = new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(opts);
var dialect_QMARK_ = cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"dialect","dialect",-1374251073));
var dialect = ((dialect_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(honey.sql.dialects),honey.sql.check_dialect(new cljs.core.Keyword(null,"dialect","dialect",-1374251073).cljs$core$IFn$_invoke$arity$1(opts))):cljs.core.deref(honey.sql.default_dialect));
var numbered_QMARK_ = new cljs.core.Keyword(null,"numbered","numbered",-2119856269).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref(honey.sql.default_numbered));
var formatter = ((cljs.core.map_QMARK_(data))?new cljs.core.Var(function(){return honey.sql.format_dsl;},new cljs.core.Symbol("honey.sql","format-dsl","honey.sql/format-dsl",1968312051,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-dsl","format-dsl",-1194734244,null),"honey/sql.cljc",17,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"statement-map","statement-map",1814367581,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"statement-map","statement-map",1814367581,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aliased","aliased",1515092254,null),new cljs.core.Symbol(null,"nested","nested",1659475376,null),new cljs.core.Symbol(null,"pretty","pretty",-275840959,null)], null)], null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"statement-map","statement-map",1814367581,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"statement-map","statement-map",1814367581,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aliased","aliased",1515092254,null),new cljs.core.Symbol(null,"nested","nested",1659475376,null),new cljs.core.Symbol(null,"pretty","pretty",-275840959,null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,1770,1770,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"statement-map","statement-map",1814367581,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"statement-map","statement-map",1814367581,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aliased","aliased",1515092254,null),new cljs.core.Symbol(null,"nested","nested",1659475376,null),new cljs.core.Symbol(null,"pretty","pretty",-275840959,null)], null)], null)], null)),"Given a hash map representing a SQL statement and a hash map\n  of options, return a vector containing a string -- the formatted\n  SQL statement -- followed by any parameter values that SQL needs.\n\n  This is intended to be used when writing your own formatters to\n  extend the DSL supported by HoneySQL.",(cljs.core.truth_(honey.sql.format_dsl)?honey.sql.format_dsl.cljs$lang$test:null)])):new cljs.core.Var(function(){return honey.sql.format_expr;},new cljs.core.Symbol("honey.sql","format-expr","honey.sql/format-expr",-761931772,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-expr","format-expr",-1508928093,null),"honey/sql.cljc",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1908713478,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nested","nested",1659475376,null),new cljs.core.Symbol(null,"record","record",861424668,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1908713478,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nested","nested",1659475376,null),new cljs.core.Symbol(null,"record","record",861424668,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,2235,2235,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1908713478,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nested","nested",1659475376,null),new cljs.core.Symbol(null,"record","record",861424668,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null)),"Given a data structure that represents a SQL expression and a hash\n  map of options, return a vector containing a string -- the formatted\n  SQL statement -- followed by any parameter values that SQL needs.\n\n  This is intended to be used when writing your own formatters to\n  extend the DSL supported by HoneySQL.",(cljs.core.truth_(honey.sql.format_expr)?honey.sql.format_expr.cljs$lang$test:null)])));
var options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"caching","caching",-858598686),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"clause-order","clause-order",1290793904),new cljs.core.Keyword(null,"checking","checking",1748720818),new cljs.core.Keyword(null,"quoted-snake","quoted-snake",-1093133358),new cljs.core.Keyword(null,"numbered","numbered",-2119856269),new cljs.core.Keyword(null,"quoted-always","quoted-always",365198806),new cljs.core.Keyword(null,"quoted","quoted",2117344952),new cljs.core.Keyword(null,"ignored-metadata","ignored-metadata",1251384217),new cljs.core.Keyword(null,"values-default-columns","values-default-columns",1352539997),new cljs.core.Keyword(null,"inline","inline",1399884222)],[cache,cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,honey.sql.sym__GT_kw(k),v);
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(opts)),((dialect_QMARK_)?(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"clause-order-fn","clause-order-fn",-2005456179).cljs$core$IFn$_invoke$arity$1(dialect);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
var G__45224 = cljs.core.deref(honey.sql.base_clause_order);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45224) : f.call(null,G__45224));
} else {
return cljs.core.deref(honey.sql.current_clause_order);
}
})():cljs.core.deref(honey.sql.current_clause_order)),new cljs.core.Keyword(null,"checking","checking",1748720818).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref(honey.sql.default_checking)),new cljs.core.Keyword(null,"quoted-snake","quoted-snake",-1093133358).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref(honey.sql.default_quoted_snake)),(cljs.core.truth_(numbered_QMARK_)?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY):null),new cljs.core.Keyword(null,"quoted-always","quoted-always",365198806).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref(honey.sql.default_quoted_always)),((cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"quoted","quoted",2117344952)))?new cljs.core.Keyword(null,"quoted","quoted",2117344952).cljs$core$IFn$_invoke$arity$1(opts):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nrql","nrql",-1120573919),new cljs.core.Keyword(null,"dialect","dialect",-1374251073).cljs$core$IFn$_invoke$arity$1(dialect)))?null:((dialect_QMARK_)?true:cljs.core.deref(honey.sql.default_quoted)
))),new cljs.core.Keyword(null,"ignored-metadata","ignored-metadata",1251384217).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"values-default-columns","values-default-columns",1352539997).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$2(opts,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nrql","nrql",-1120573919),new cljs.core.Keyword(null,"dialect","dialect",-1374251073).cljs$core$IFn$_invoke$arity$1(dialect)))?true:cljs.core.deref(honey.sql.default_inline)))]);
var _STAR_dialect_STAR__orig_val__45228 = honey.sql._STAR_dialect_STAR_;
var _STAR_options_STAR__orig_val__45229 = honey.sql._STAR_options_STAR_;
var _STAR_dialect_STAR__temp_val__45230 = dialect;
var _STAR_options_STAR__temp_val__45231 = options;
(honey.sql._STAR_dialect_STAR_ = _STAR_dialect_STAR__temp_val__45230);

(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__temp_val__45231);

try{if(cljs.core.truth_(cache)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__45199_SHARP_){
return honey.sql.unwrap(p1__45199_SHARP_,opts);
}),honey.sql.through_opts(opts,cache,data,(function (_){
var G__45235 = data;
var G__45236 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"cache","cache",-1237023054));
return (formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(G__45235,G__45236) : formatter.call(null,G__45235,G__45236));
})));
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__45200_SHARP_){
return honey.sql.unwrap(p1__45200_SHARP_,opts);
}),(formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(data,opts) : formatter.call(null,data,opts)));
}
}finally {(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__orig_val__45229);

(honey.sql._STAR_dialect_STAR_ = _STAR_dialect_STAR__orig_val__45228);
}}));

(honey.sql.format.cljs$core$IFn$_invoke$arity$variadic = (function (data,k,v,p__45237){
var map__45240 = p__45237;
var map__45240__$1 = cljs.core.__destructure_map(map__45240);
var opts = map__45240__$1;
return honey.sql.format.cljs$core$IFn$_invoke$arity$2(data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,k,v));
}));

/** @this {Function} */
(honey.sql.format.cljs$lang$applyTo = (function (seq45203){
var G__45204 = cljs.core.first(seq45203);
var seq45203__$1 = cljs.core.next(seq45203);
var G__45205 = cljs.core.first(seq45203__$1);
var seq45203__$2 = cljs.core.next(seq45203__$1);
var G__45206 = cljs.core.first(seq45203__$2);
var seq45203__$3 = cljs.core.next(seq45203__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45204,G__45205,G__45206,seq45203__$3);
}));

(honey.sql.format.cljs$lang$maxFixedArity = (3));

/**
 * Set the default dialect for formatting.
 * 
 *   Can be: `:ansi` (the default), `:mysql`, `:oracle`, or `:sqlserver`.
 * 
 *   Can optionally accept `:quoted true` (or `:quoted false`) to set the
 *   default global quoting strategy. Without `:quoted`, the default global
 *   quoting strategy will be reset (only quoting unusual entity names).
 * 
 *   Note that calling `set-options!` can override this default.
 * 
 *   Dialects are always applied to the base order to create the current order.
 */
honey.sql.set_dialect_BANG_ = (function honey$sql$set_dialect_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___45697 = arguments.length;
var i__5750__auto___45698 = (0);
while(true){
if((i__5750__auto___45698 < len__5749__auto___45697)){
args__5755__auto__.push((arguments[i__5750__auto___45698]));

var G__45700 = (i__5750__auto___45698 + (1));
i__5750__auto___45698 = G__45700;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return honey.sql.set_dialect_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(honey.sql.set_dialect_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (dialect,p__45244){
var map__45245 = p__45244;
var map__45245__$1 = cljs.core.__destructure_map(map__45245);
var quoted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45245__$1,new cljs.core.Keyword(null,"quoted","quoted",2117344952));
cljs.core.reset_BANG_(honey.sql.default_dialect,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(honey.sql.dialects),honey.sql.check_dialect(dialect)));

var f_45701 = new cljs.core.Keyword(null,"clause-order-fn","clause-order-fn",-2005456179).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(honey.sql.default_dialect),cljs.core.identity);
cljs.core.reset_BANG_(honey.sql.current_clause_order,(function (){var G__45246 = cljs.core.deref(honey.sql.base_clause_order);
return (f_45701.cljs$core$IFn$_invoke$arity$1 ? f_45701.cljs$core$IFn$_invoke$arity$1(G__45246) : f_45701.call(null,G__45246));
})());

return cljs.core.reset_BANG_(honey.sql.default_quoted,quoted);
}));

(honey.sql.set_dialect_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(honey.sql.set_dialect_BANG_.cljs$lang$applyTo = (function (seq45242){
var G__45243 = cljs.core.first(seq45242);
var seq45242__$1 = cljs.core.next(seq45242);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45243,seq45242__$1);
}));

/**
 * Set default values for any or all of the following options:
 *   * :checking
 *   * :inline
 *   * :numbered
 *   * :quoted
 *   * :quoted-always
 *   * :quoted-snake
 *   Note that calling `set-dialect!` can override the default for `:quoted`.
 */
honey.sql.set_options_BANG_ = (function honey$sql$set_options_BANG_(opts){
var unknowns = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"checking","checking",1748720818),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"numbered","numbered",-2119856269),new cljs.core.Keyword(null,"quoted","quoted",2117344952),new cljs.core.Keyword(null,"quoted-snake","quoted-snake",-1093133358)], 0));
if(cljs.core.seq(unknowns)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(unknowns))," are not options that can be set globally."),unknowns);
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"checking","checking",1748720818))){
cljs.core.reset_BANG_(honey.sql.default_checking,new cljs.core.Keyword(null,"checking","checking",1748720818).cljs$core$IFn$_invoke$arity$1(opts));
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"inline","inline",1399884222))){
cljs.core.reset_BANG_(honey.sql.default_inline,new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(opts));
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"numbered","numbered",-2119856269))){
cljs.core.reset_BANG_(honey.sql.default_numbered,new cljs.core.Keyword(null,"numbered","numbered",-2119856269).cljs$core$IFn$_invoke$arity$1(opts));
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"quoted","quoted",2117344952))){
cljs.core.reset_BANG_(honey.sql.default_quoted,new cljs.core.Keyword(null,"quoted","quoted",2117344952).cljs$core$IFn$_invoke$arity$1(opts));
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"quoted-always","quoted-always",365198806))){
cljs.core.reset_BANG_(honey.sql.default_quoted_always,new cljs.core.Keyword(null,"quoted-always","quoted-always",365198806).cljs$core$IFn$_invoke$arity$1(opts));
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"quoted-snake","quoted-snake",-1093133358))){
return cljs.core.reset_BANG_(honey.sql.default_quoted_snake,new cljs.core.Keyword(null,"quoted-snake","quoted-snake",-1093133358).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return null;
}
});
/**
 * Return the current order that known clauses will be applied when
 *   formatting a data structure into SQL. This may be useful when you are
 *   figuring out the `before` argument of `register-clause!` as well as
 *   for debugging new clauses you have registered.
 */
honey.sql.clause_order = (function honey$sql$clause_order(){
return cljs.core.deref(honey.sql.current_clause_order);
});
/**
 * Register a new clause formatter. If `before` is `nil`, the clause is
 *   added to the end of the list of known clauses, otherwise it is inserted
 *   immediately prior to that clause.
 * 
 *   New clauses are registered in the base order and the current order so
 *   that any dialect selections are able to include them while still working
 *   predictably from the base order. Caveat: that means if you register a new
 *   clause `before` a clause that is ordered differently in different
 *   dialects, your new clause may also end up in a different place. The
 *   only clause so far where that would matter is `:set` which differs in
 *   MySQL.
 * 
 *   Use `clause-order` to see the full ordering of existing clauses.
 */
honey.sql.register_clause_BANG_ = (function honey$sql$register_clause_BANG_(clause,formatter,before){
var clause__$1 = honey.sql.sym__GT_kw(clause);
var before__$1 = honey.sql.sym__GT_kw(before);
if((clause__$1 instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The clause must be a keyword or symbol",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clause","clause",1479668060),clause__$1], null));
}

var k = honey.sql.sym__GT_kw(formatter);
var f = (((k instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(honey.sql.clause_format),k):formatter);
if(cljs.core.truth_((function (){var and__5023__auto__ = f;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.fn_QMARK_(f)) || (((cljs.core.var_QMARK_(f)) && (cljs.core.fn_QMARK_(cljs.core.deref(f))))));
} else {
return and__5023__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The formatter must be a function or existing clause",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(formatter)], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(honey.sql.base_clause_order,honey.sql.add_clause_before,clause__$1,before__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(honey.sql.current_clause_order,honey.sql.add_clause_before,clause__$1,before__$1);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(honey.sql.clause_format,cljs.core.assoc,clause__$1,f);
});
/**
 * Return true if the clause is known to HoneySQL.
 */
honey.sql.registered_clause_QMARK_ = (function honey$sql$registered_clause_QMARK_(clause){
return cljs.core.contains_QMARK_(cljs.core.deref(honey.sql.clause_format),honey.sql.sym__GT_kw(clause));
});
/**
 * Register a new dialect. Accepts a dialect name (keyword) and a hash
 *   map that must contain at least a `:quoted` key whose value is a unary
 *   function that accepts a string and returns it quoted per the dialect.
 * 
 *   It may also contain a `:clause-order-fn` key whose value is a unary
 *   function that accepts a list of SQL clauses (keywords) in order of
 *   precedence and returns an updated list of SQL clauses in order. It
 *   may use `add-clause-before` to achieve this. Currently, the only
 *   dialect that does this is MySQL, whose `SET` clause (`:set`) has a
 *   non-standard precedence, compared to other SQL dialects.
 */
honey.sql.register_dialect_BANG_ = (function honey$sql$register_dialect_BANG_(dialect,dialect_spec){
if((dialect instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Dialect must be a keyword",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialect","dialect",-1374251073),dialect], null));
}

if(cljs.core.map_QMARK_(dialect_spec)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Dialect spec must be a hash map containing at least a :quote function",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialect-spec","dialect-spec",383903007),dialect_spec], null));
}

if(cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(dialect_spec))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Dialect spec is missing a :quote function",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialect-spec","dialect-spec",383903007),dialect_spec], null));
}

var temp__5825__auto___45756 = new cljs.core.Keyword(null,"clause-order-fn","clause-order-fn",-2005456179).cljs$core$IFn$_invoke$arity$1(dialect_spec);
if(cljs.core.truth_(temp__5825__auto___45756)){
var cof_45757 = temp__5825__auto___45756;
if(cljs.core.fn_QMARK_(cof_45757)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Dialect spec contains :clause-order-fn but it is not a function",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialect-spec","dialect-spec",383903007),dialect_spec], null));
}
} else {
}

var temp__5829__auto___45759 = new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(dialect_spec);
if((temp__5829__auto___45759 == null)){
} else {
var as_45772 = temp__5829__auto___45759;
if(cljs.core.boolean_QMARK_(as_45772)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Dialect spec contains :as but it is not a boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialect-spec","dialect-spec",383903007),dialect_spec], null));
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(honey.sql.dialects,cljs.core.assoc,dialect,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dialect_spec,new cljs.core.Keyword(null,"dialect","dialect",-1374251073),dialect));
});
/**
 * Return true if the dialect is known to HoneySQL.
 */
honey.sql.registered_dialect_QMARK_ = (function honey$sql$registered_dialect_QMARK_(dialect){
return cljs.core.contains_QMARK_(cljs.core.deref(honey.sql.dialects),dialect);
});
/**
 * Given a dialect name (keyword), return its definition.
 *   Returns `nil` if the dialect is unknown.
 */
honey.sql.get_dialect = (function honey$sql$get_dialect(dialect){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(honey.sql.dialects),dialect);
});
/**
 * Register a new function (as special syntax). The `formatter` is either
 *   a keyword, meaning that this new function should use the same syntax as
 *   an existing function, or a function of two arguments that generates a
 *   SQL string and parameters (as a vector). The two arguments are the name
 *   of the function (as a keyword) and a sequence of the arguments from the
 *   DSL.
 */
honey.sql.register_fn_BANG_ = (function honey$sql$register_fn_BANG_(function$,formatter){
var function$__$1 = honey.sql.sym__GT_kw(function$);
if((function$__$1 instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The function must be a keyword or symbol",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"function","function",-2127255473),function$__$1], null));
}

var k = honey.sql.sym__GT_kw(formatter);
var f = (((k instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(honey.sql.special_syntax),k):formatter);
if(cljs.core.truth_((function (){var and__5023__auto__ = f;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.fn_QMARK_(f)) || (((cljs.core.var_QMARK_(f)) && (cljs.core.fn_QMARK_(cljs.core.deref(f))))));
} else {
return and__5023__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The formatter must be a function or existing fn name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(formatter)], null));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(honey.sql.special_syntax,cljs.core.assoc,function$__$1,f);
});
/**
 * Return true if the function is known to HoneySQL.
 */
honey.sql.registered_fn_QMARK_ = (function honey$sql$registered_fn_QMARK_(function$){
return cljs.core.contains_QMARK_(cljs.core.deref(honey.sql.special_syntax),honey.sql.sym__GT_kw(function$));
});
/**
 * Register a new infix operator. All operators are variadic and may choose
 *   to ignore `nil` arguments (this can make it easier to programmatically
 *   construct the DSL).
 */
honey.sql.register_op_BANG_ = (function honey$sql$register_op_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___45790 = arguments.length;
var i__5750__auto___45791 = (0);
while(true){
if((i__5750__auto___45791 < len__5749__auto___45790)){
args__5755__auto__.push((arguments[i__5750__auto___45791]));

var G__45792 = (i__5750__auto___45791 + (1));
i__5750__auto___45791 = G__45792;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return honey.sql.register_op_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(honey.sql.register_op_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (op,p__45265){
var map__45266 = p__45265;
var map__45266__$1 = cljs.core.__destructure_map(map__45266);
var ignore_nil = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45266__$1,new cljs.core.Keyword(null,"ignore-nil","ignore-nil",132231320));
var op__$1 = honey.sql.sym__GT_kw(op);
if((op__$1 instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The operator must be a keyword or symbol",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"operator","operator",-1860875338),op__$1], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(honey.sql.infix_ops,cljs.core.conj,op__$1);

if(cljs.core.truth_(ignore_nil)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(honey.sql.op_ignore_nil,cljs.core.conj,op__$1);
} else {
return null;
}
}));

(honey.sql.register_op_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(honey.sql.register_op_BANG_.cljs$lang$applyTo = (function (seq45261){
var G__45262 = cljs.core.first(seq45261);
var seq45261__$1 = cljs.core.next(seq45261);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45262,seq45261__$1);
}));

/**
 * Return true if the operator is known to HoneySQL.
 */
honey.sql.registered_op_QMARK_ = (function honey$sql$registered_op_QMARK_(op){
return cljs.core.contains_QMARK_(cljs.core.deref(honey.sql.infix_ops),honey.sql.sym__GT_kw(op));
});
/**
 * Given a hash map, return a condition structure that can be used in a
 *   WHERE clause to test for equality:
 * 
 *   {:select :* :from :table :where (sql/map= {:id 1})}
 * 
 *   will produce: SELECT * FROM table WHERE id = ? (and a parameter of 1)
 */
honey.sql.map_EQ_ = (function honey$sql$map_EQ_(data){
var clauses = cljs.core.reduce_kv((function (where,col,val){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),col,val], null));
}),cljs.core.PersistentVector.EMPTY,data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(clauses))){
return cljs.core.first(clauses);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817)], null),clauses);
}
});
/**
 * Given either a vector of formatted SQL+params vectors, or two or more
 *   SQL+params vectors as arguments, merge them into a single SQL+params
 *   vector with the SQL strings separated by semicolons.
 */
honey.sql.semicolon = (function honey$sql$semicolon(var_args){
var G__45275 = arguments.length;
switch (G__45275) {
case 1:
return honey.sql.semicolon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___45826 = arguments.length;
var i__5750__auto___45827 = (0);
while(true){
if((i__5750__auto___45827 < len__5749__auto___45826)){
args_arr__5774__auto__.push((arguments[i__5750__auto___45827]));

var G__45828 = (i__5750__auto___45827 + (1));
i__5750__auto___45827 = G__45828;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((1)),(0),null)):null);
return honey.sql.semicolon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);

}
});

(honey.sql.semicolon.cljs$core$IFn$_invoke$arity$1 = (function (sql_PLUS_params_vector){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$2("; ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,sql_PLUS_params_vector))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,sql_PLUS_params_vector));
}));

(honey.sql.semicolon.cljs$core$IFn$_invoke$arity$variadic = (function (sql_PLUS_params,more){
return honey.sql.semicolon.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(sql_PLUS_params,more));
}));

/** @this {Function} */
(honey.sql.semicolon.cljs$lang$applyTo = (function (seq45273){
var G__45274 = cljs.core.first(seq45273);
var seq45273__$1 = cljs.core.next(seq45273);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45274,seq45273__$1);
}));

(honey.sql.semicolon.cljs$lang$maxFixedArity = (1));

honey.sql.call = (function honey$sql$call(var_args){
var args__5755__auto__ = [];
var len__5749__auto___45862 = arguments.length;
var i__5750__auto___45863 = (0);
while(true){
if((i__5750__auto___45863 < len__5749__auto___45862)){
args__5755__auto__.push((arguments[i__5750__auto___45863]));

var G__45864 = (i__5750__auto___45863 + (1));
i__5750__auto___45863 = G__45864;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return honey.sql.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(honey.sql.call.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,new cljs.core.Keyword(null,"call","call",-519999866),f,args);
}));

(honey.sql.call.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(honey.sql.call.cljs$lang$applyTo = (function (seq45281){
var G__45282 = cljs.core.first(seq45281);
var seq45281__$1 = cljs.core.next(seq45281);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45282,seq45281__$1);
}));


//# sourceMappingURL=honey.sql.js.map
