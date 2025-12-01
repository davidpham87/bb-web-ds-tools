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
var order__$1 = ((cljs.core.contains_QMARK_(clauses,clause))?cljs.core.filterv((function (p1__28662_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__28662_SHARP_,clause);
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
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ansi","ansi",1415977390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p1__28670_SHARP_){
return honey.sql.strop("\"",p1__28670_SHARP_,"\"");
})], null),new cljs.core.Keyword(null,"sqlserver","sqlserver",222509918),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p1__28671_SHARP_){
return honey.sql.strop("[",p1__28671_SHARP_,"]");
}),new cljs.core.Keyword(null,"auto-lift-boolean","auto-lift-boolean",1793118318),true], null),new cljs.core.Keyword(null,"mysql","mysql",-1431590210),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p1__28672_SHARP_){
return honey.sql.strop("`",p1__28672_SHARP_,"`");
}),new cljs.core.Keyword(null,"clause-order-fn","clause-order-fn",-2005456179),(function (p1__28673_SHARP_){
return honey.sql.add_clause_before(p1__28673_SHARP_,new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"where","where",-2044795965));
})], null),new cljs.core.Keyword(null,"nrql","nrql",-1120573919),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p1__28674_SHARP_){
return honey.sql.strop("`",p1__28674_SHARP_,"`");
}),new cljs.core.Keyword(null,"col-fn","col-fn",69324006),(function (p1__28675_SHARP_){
if((p1__28675_SHARP_ instanceof cljs.core.Keyword)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(p1__28675_SHARP_),(1));
} else {
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(p1__28675_SHARP_);
}
}),new cljs.core.Keyword(null,"parts-fn","parts-fn",1152861),cljs.core.vector], null),new cljs.core.Keyword(null,"oracle","oracle",-2085139604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p1__28676_SHARP_){
return honey.sql.strop("\"",p1__28676_SHARP_,"\"");
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
var G__28704 = s;
if(clojure.string.includes_QMARK_(s,"-")){
return clojure.string.replace(G__28704,/(\w)-(?=\w)/,"$1 ");
} else {
return G__28704;
}
});
/**
 * Return the namespace portion of a symbol, with dashes converted.
 */
honey.sql.namespace__ = (function honey$sql$namespace__(x){
try{var G__28706 = cljs.core.namespace(x);
if((G__28706 == null)){
return null;
} else {
return clojure.string.replace(G__28706,"-","_");
}
}catch (e28705){var t = e28705;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("expected symbol, found: ",cljs.core.type(x)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),x,new cljs.core.Keyword(null,"failure","failure",720415879),honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(t)], null));
}});
/**
 * Return the name portion of a symbol, with dashes converted.
 */
honey.sql.name__ = (function honey$sql$name__(x){
try{return clojure.string.replace(cljs.core.name(x),"-","_");
}catch (e28707){var t = e28707;
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
var G__28711 = arguments.length;
switch (G__28711) {
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

(honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2 = (function (e,p__28715){
var map__28717 = p__28715;
var map__28717__$1 = cljs.core.__destructure_map(map__28717);
var aliased = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28717__$1,new cljs.core.Keyword(null,"aliased","aliased",-125439273));
var drop_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28717__$1,new cljs.core.Keyword(null,"drop-ns","drop-ns",-1721308319));
var dialect = honey.sql._STAR_dialect_STAR_;
var map__28719 = honey.sql._STAR_options_STAR_;
var map__28719__$1 = cljs.core.__destructure_map(map__28719);
var quoted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28719__$1,new cljs.core.Keyword(null,"quoted","quoted",2117344952));
var quoted_snake = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28719__$1,new cljs.core.Keyword(null,"quoted-snake","quoted-snake",-1093133358));
var quoted_always = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28719__$1,new cljs.core.Keyword(null,"quoted-always","quoted-always",365198806));
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
if(cljs.core.truth_((function (){var G__28722 = quoted_always;
if((G__28722 == null)){
return null;
} else {
return cljs.core.re_find(G__28722,part);
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
return (function (p1__28708_SHARP_){
var temp__5823__auto__ = (cljs.core.truth_((function (){var or__5025__auto____$1 = drop_ns;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return typeof e__$1 === 'string';
}
})())?null:honey.sql.namespace__(e__$1));
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,p1__28708_SHARP_], null);
} else {
if(cljs.core.truth_(aliased)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28708_SHARP_], null);
} else {
return honey.sql.util.split_by_separator(p1__28708_SHARP_,".");
}
}
});
}
})();
var parts = (parts_fn.cljs$core$IFn$_invoke$arity$1 ? parts_fn.cljs$core$IFn$_invoke$arity$1(col_e) : parts_fn.call(null,col_e));
var entity = honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(".",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__28709_SHARP_){
var G__28723 = p1__28709_SHARP_;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("*",p1__28709_SHARP_)){
return (quote_fn.cljs$core$IFn$_invoke$arity$1 ? quote_fn.cljs$core$IFn$_invoke$arity$1(G__28723) : quote_fn.call(null,G__28723));
} else {
return G__28723;
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
var n = (function (){var G__28724 = cljs.core.name(k);
if(cljs.core.truth_(honey.sql._STAR_escape__QMARK__STAR_)){
return clojure.string.replace(G__28724,"?","??");
} else {
return G__28724;
}
})();
if(clojure.string.starts_with_QMARK_(n,"'")){
var ident = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(1));
var ident_l = clojure.string.lower_case(ident);
var _STAR_options_STAR__orig_val__28726 = honey.sql._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__28727 = (function (){var G__28728 = honey.sql._STAR_options_STAR_;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ident_l,"array")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28728,new cljs.core.Keyword(null,"quoted","quoted",2117344952),null);
} else {
return G__28728;
}
})();
(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__temp_val__28727);

try{return honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ident));
}finally {(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__orig_val__28726);
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
var len__5749__auto___30492 = arguments.length;
var i__5750__auto___30493 = (0);
while(true){
if((i__5750__auto___30493 < len__5749__auto___30492)){
args__5755__auto__.push((arguments[i__5750__auto___30493]));

var G__30494 = (i__5750__auto___30493 + (1));
i__5750__auto___30493 = G__30494;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return honey.sql.inline_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(honey.sql.inline_map.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__28735){
var vec__28736 = p__28735;
var open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28736,(0),null);
var close = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28736,(1),null);
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3((function (){var or__5025__auto__ = open;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "{";
}
})(),honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__28739){
var vec__28740 = p__28739;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28740,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28740,(1),null);
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
(honey.sql.inline_map.cljs$lang$applyTo = (function (seq28733){
var G__28734 = cljs.core.first(seq28733);
var seq28733__$1 = cljs.core.next(seq28733);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28734,seq28733__$1);
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
var map__28745 = honey.sql._STAR_options_STAR_;
var map__28745__$1 = cljs.core.__destructure_map(map__28745);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28745__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
var map__28747 = honey.sql._STAR_options_STAR_;
var map__28747__$1 = cljs.core.__destructure_map(map__28747);
var numbered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28747__$1,new cljs.core.Keyword(null,"numbered","numbered",-2119856269));
var n = cljs.core.count(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(numbered,cljs.core.conj,v));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("$",n),cljs.core.with_meta(cljs.core.constantly((n - (1))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("honey.sql","wrapper","honey.sql/wrapper",465758343),(function (fk,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(numbered),(fk.cljs$core$IFn$_invoke$arity$0 ? fk.cljs$core$IFn$_invoke$arity$0() : fk.call(null)));
})], null))], null);
});
honey.sql.__GT_numbered_param = (function honey$sql$__GT_numbered_param(k){
var map__28749 = honey.sql._STAR_options_STAR_;
var map__28749__$1 = cljs.core.__destructure_map(map__28749);
var numbered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28749__$1,new cljs.core.Keyword(null,"numbered","numbered",-2119856269));
var n = cljs.core.count(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(numbered,cljs.core.conj,k));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("$",n),cljs.core.with_meta(cljs.core.constantly((n - (1))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("honey.sql","wrapper","honey.sql/wrapper",465758343),(function (fk,_){
return honey.sql.param_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(numbered),(fk.cljs$core$IFn$_invoke$arity$0 ? fk.cljs$core$IFn$_invoke$arity$0() : fk.call(null))));
})], null))], null);
});
honey.sql.format_fn_name = (function honey$sql$format_fn_name(x){
return honey.sql.upper_case(clojure.string.replace(cljs.core.name(x),"-","_"));
});
honey.sql.format_simple_var = (function honey$sql$format_simple_var(var_args){
var G__28752 = arguments.length;
switch (G__28752) {
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
var G__28755 = arguments.length;
switch (G__28755) {
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
var map__28756 = honey.sql._STAR_options_STAR_;
var map__28756__$1 = cljs.core.__destructure_map(map__28756);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28756__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var numbered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28756__$1,new cljs.core.Keyword(null,"numbered","numbered",-2119856269));
var c = (((x instanceof cljs.core.Keyword))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(x),(1)):honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(x));
if(clojure.string.starts_with_QMARK_(c,"%")){
var vec__28757 = honey.sql.util.split_by_separator(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(c,(1)),".");
var seq__28758 = cljs.core.seq(vec__28757);
var first__28759 = cljs.core.first(seq__28758);
var seq__28758__$1 = cljs.core.next(seq__28758);
var f = first__28759;
var args = seq__28758__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(honey.sql.format_fn_name(f),"(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__28753_SHARP_){
return honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__28753_SHARP_),opts);
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

var vec__28761 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(s) : honey.sql.format_expr.call(null,s));
var seq__28762 = cljs.core.seq(vec__28761);
var first__28763 = cljs.core.first(seq__28762);
var seq__28762__$1 = cljs.core.next(seq__28762);
var sql = first__28763;
var params = seq__28762__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28764 = sql;
if(pair_QMARK_){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(G__28764,((((cljs.core.contains_QMARK_(honey.sql._STAR_dialect_STAR_,new cljs.core.Keyword(null,"as","as",1148689641))) && (cljs.core.not(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_dialect_STAR_)))))?" ":" AS "),honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(cljs.core.second(x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aliased","aliased",-125439273),true], null)));
} else {
return G__28764;
}
})()], null),params);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(x)], null);

}
});
honey.sql.bigquery__STAR__except_replace_QMARK_ = (function honey$sql$bigquery__STAR__except_replace_QMARK_(p__28765){
var vec__28766 = p__28765;
var maybe__STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28766,(0),null);
var maybe_except_replace = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28766,(1),null);
var and__5023__auto__ = cljs.core.ident_QMARK_(maybe__STAR_);
if(and__5023__auto__){
var and__5023__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.name(maybe__STAR_))) || (clojure.string.ends_with_QMARK_(cljs.core.name(maybe__STAR_),".*")));
if(and__5023__auto____$1){
var and__5023__auto____$2 = cljs.core.ident_QMARK_(maybe_except_replace);
if(and__5023__auto____$2){
var G__28770 = cljs.core.name(maybe_except_replace);
var fexpr__28769 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["replace",null,"except",null], null), null);
return (fexpr__28769.cljs$core$IFn$_invoke$arity$1 ? fexpr__28769.cljs$core$IFn$_invoke$arity$1(G__28770) : fexpr__28769.call(null,G__28770));
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
honey.sql.format_bigquery__STAR__except_replace = (function honey$sql$format_bigquery__STAR__except_replace(p__28771){
var vec__28772 = p__28771;
var seq__28773 = cljs.core.seq(vec__28772);
var first__28774 = cljs.core.first(seq__28773);
var seq__28773__$1 = cljs.core.next(seq__28773);
var star_cols = first__28774;
var x = seq__28773__$1;
var vec__28775 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(star_cols) : honey.sql.format_expr.call(null,star_cols));
var seq__28776 = cljs.core.seq(vec__28775);
var first__28777 = cljs.core.first(seq__28776);
var seq__28776__$1 = cljs.core.next(seq__28776);
var sql = first__28777;
var params = seq__28776__$1;
var vec__28778 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__28781,p__28782){
var vec__28783 = p__28781;
var seq__28784 = cljs.core.seq(vec__28783);
var first__28785 = cljs.core.first(seq__28784);
var seq__28784__$1 = cljs.core.next(seq__28784);
var sql__$1 = first__28785;
var params__$1 = seq__28784__$1;
var vec__28786 = p__28782;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28786,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28786,(1),null);
var vec__28793 = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.ident_QMARK_(k);
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
})())?(function (){var vec__28796 = (function (){var G__28799 = arg;
var G__28800 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aliased","aliased",-125439273),true], null);
return (honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$2(G__28799,G__28800) : honey.sql.format_expr_list.call(null,G__28799,G__28800));
})();
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28796,(0),null);
var params__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28796,(1),null);
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
})())?(function (){var vec__28801 = (honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$3 ? honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$3(null,true,arg) : honey.sql.format_selects_common.call(null,null,true,arg));
var seq__28802 = cljs.core.seq(vec__28801);
var first__28803 = cljs.core.first(seq__28802);
var seq__28802__$1 = cljs.core.next(seq__28802);
var sql__$2 = first__28803;
var params__$2 = seq__28802__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(honey.sql.sql_kw(k)," (",sql__$2,")"),params__$2], null);
})():(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("bigquery * only supports except and replace",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clause","clause",1479668060),k,new cljs.core.Keyword(null,"arg","arg",-1747261837),arg], null))})()
));
var sql_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28793,(0),null);
var params_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28793,(1),null);
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28808 = sql_SINGLEQUOTE_;
if(cljs.core.truth_(sql__$1)){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql__$1," ",G__28808);
} else {
return G__28808;
}
})()], null),params__$1,params_SINGLEQUOTE_);
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),x));
var seq__28779 = cljs.core.seq(vec__28778);
var first__28780 = cljs.core.first(seq__28779);
var seq__28779__$1 = cljs.core.next(seq__28779);
var sql_SINGLEQUOTE_ = first__28780;
var params_SINGLEQUOTE_ = seq__28779__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql," ",sql_SINGLEQUOTE_)], null),params,params_SINGLEQUOTE_);
});
/**
 * Given a general selectable item, split it into the subject selectable,
 * an optional alias, and any temporal clauses present.
 */
honey.sql.split_alias_temporal = (function honey$sql$split_alias_temporal(p__28809){
var vec__28810 = p__28809;
var seq__28811 = cljs.core.seq(vec__28810);
var first__28812 = cljs.core.first(seq__28811);
var seq__28811__$1 = cljs.core.next(seq__28811);
var selectable = first__28812;
var first__28812__$1 = cljs.core.first(seq__28811__$1);
var seq__28811__$2 = cljs.core.next(seq__28811__$1);
var alias_for = first__28812__$1;
var first__28812__$2 = cljs.core.first(seq__28811__$2);
var seq__28811__$3 = cljs.core.next(seq__28811__$2);
var for_part = first__28812__$2;
var more = seq__28811__$3;
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
honey.sql.format_temporal = (function honey$sql$format_temporal(p__28817){
var vec__28818 = p__28817;
var seq__28819 = cljs.core.seq(vec__28818);
var first__28820 = cljs.core.first(seq__28819);
var seq__28819__$1 = cljs.core.next(seq__28819);
var for_part = first__28820;
var first__28820__$1 = cljs.core.first(seq__28819__$1);
var seq__28819__$2 = cljs.core.next(seq__28819__$1);
var the_time = first__28820__$1;
var more = seq__28819__$2;
var control = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sql-kw","sql-kw",310316580),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sql_kw(x)], null);
}),new cljs.core.Keyword(null,"expr","expr",745722291)], null),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return honey.sql.format_expr;},new cljs.core.Symbol("honey.sql","format-expr","honey.sql/format-expr",-761931772,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-expr","format-expr",-1508928093,null),"honey/sql.cljc",21,1,41,true,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(honey.sql.format_expr)?honey.sql.format_expr.cljs$lang$test:null)])),new cljs.core.Keyword(null,"sql-kw","sql-kw",310316580)], null)], null);
var sqls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sql_kw(for_part),honey.sql.format_fn_name(the_time)], null);
var params = cljs.core.PersistentVector.EMPTY;
var more__$1 = more;
var fmt = new cljs.core.Keyword(null,"sql-kw","sql-kw",310316580);
while(true){
if(cljs.core.seq(more__$1)){
var vec__28838 = more__$1;
var seq__28839 = cljs.core.seq(vec__28838);
var first__28840 = cljs.core.first(seq__28839);
var seq__28839__$1 = cljs.core.next(seq__28839);
var x = first__28840;
var more__$2 = seq__28839__$1;
var vec__28841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(control,fmt);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28841,(0),null);
var fmt__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28841,(1),null);
var vec__28844 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
var seq__28845 = cljs.core.seq(vec__28844);
var first__28846 = cljs.core.first(seq__28845);
var seq__28845__$1 = cljs.core.next(seq__28845);
var sql_SINGLEQUOTE_ = first__28846;
var params_SINGLEQUOTE_ = seq__28845__$1;
var G__30507 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sqls,sql_SINGLEQUOTE_);
var G__30508 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(params,params_SINGLEQUOTE_);
var G__30509 = more__$2;
var G__30510 = fmt__$1;
sqls = G__30507;
params = G__30508;
more__$1 = G__30509;
fmt = G__30510;
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
var G__28852 = arguments.length;
switch (G__28852) {
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
var vec__28866 = honey.sql.split_alias_temporal(x);
var selectable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28866,(0),null);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28866,(1),null);
var temporal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28866,(2),null);
var _ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("honey.sql","too-many!","honey.sql/too-many!",993345894),temporal))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("illegal syntax in select expression",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),selectable,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),cljs.core.nnext(x)], null))})():null);
var vec__28869 = ((cljs.core.map_QMARK_(selectable))?(function (){var G__28878 = selectable;
var G__28879 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2(G__28878,G__28879) : honey.sql.format_dsl.call(null,G__28878,G__28879));
})():(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(selectable) : honey.sql.format_expr.call(null,selectable)));
var seq__28870 = cljs.core.seq(vec__28869);
var first__28871 = cljs.core.first(seq__28870);
var seq__28870__$1 = cljs.core.next(seq__28870);
var sql = first__28871;
var params = seq__28870__$1;
var _STAR__qualifier = (function (){var and__5023__auto__ = cljs.core.map_QMARK_(alias);
if(and__5023__auto__){
return cljs.core.some((function (p1__28860_SHARP_){
return cljs.core.contains_QMARK_(alias,p1__28860_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exclude","exclude",-1230250334),new cljs.core.Keyword(null,"rename","rename",1508157613),new cljs.core.Symbol(null,"exclude","exclude",410281193,null),new cljs.core.Symbol(null,"rename","rename",-1146278156,null)], null));
} else {
return and__5023__auto__;
}
})();
var vec__28872 = (cljs.core.truth_(alias)?((cljs.core.sequential_QMARK_(alias))?(function (){var vec__28884 = (function (){var G__28887 = alias;
var G__28888 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aliased","aliased",-125439273),true], null);
return (honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$2(G__28887,G__28888) : honey.sql.format_expr_list.call(null,G__28887,G__28888));
})();
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28884,(0),null);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28884,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(" ",sqls)], null),params__$1);
})():(cljs.core.truth_(_STAR__qualifier)?(honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(alias) : honey.sql.format_dsl.call(null,alias)):(function (){var G__28890 = alias;
var G__28891 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aliased","aliased",-125439273),true], null);
return (honey.sql.format_selectable_dsl.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_selectable_dsl.cljs$core$IFn$_invoke$arity$2(G__28890,G__28891) : honey.sql.format_selectable_dsl.call(null,G__28890,G__28891));
})()
)):null);
var seq__28873 = cljs.core.seq(vec__28872);
var first__28874 = cljs.core.first(seq__28873);
var seq__28873__$1 = cljs.core.next(seq__28873);
var sql_SINGLEQUOTE_ = first__28874;
var params_SINGLEQUOTE_ = seq__28873__$1;
var vec__28875 = (cljs.core.truth_(temporal)?honey.sql.format_temporal(temporal):null);
var seq__28876 = cljs.core.seq(vec__28875);
var first__28877 = cljs.core.first(seq__28876);
var seq__28876__$1 = cljs.core.next(seq__28876);
var sql_SINGLEQUOTE__SINGLEQUOTE_ = first__28877;
var params_SINGLEQUOTE__SINGLEQUOTE_ = seq__28876__$1;
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
var G__28896 = arguments.length;
switch (G__28896) {
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

(honey.sql.format_selectable_dsl.cljs$core$IFn$_invoke$arity$2 = (function (x,p__28897){
var map__28898 = p__28897;
var map__28898__$1 = cljs.core.__destructure_map(map__28898);
var opts = map__28898__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28898__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var aliased = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28898__$1,new cljs.core.Keyword(null,"aliased","aliased",-125439273));
if(cljs.core.map_QMARK_(x)){
var G__28899 = x;
var G__28900 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2(G__28899,G__28900) : honey.sql.format_dsl.call(null,G__28899,G__28900));
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
var G__28902 = arguments.length;
switch (G__28902) {
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
var G__30518 = null;
var G__30518__1 = (function (res){
return res;
});
var G__30518__2 = (function (p__28907,p__28908){
var vec__28909 = p__28907;
var sql = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28909,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28909,(1),null);
var vec__28912 = p__28908;
var seq__28913 = cljs.core.seq(vec__28912);
var first__28914 = cljs.core.first(seq__28913);
var seq__28913__$1 = cljs.core.next(seq__28913);
var sql_SINGLEQUOTE_ = first__28914;
var params_SINGLEQUOTE_ = seq__28913__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sql,sql_SINGLEQUOTE_),((params_SINGLEQUOTE_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(params,params_SINGLEQUOTE_):params)], null);
});
G__30518 = function(p__28907,p__28908){
switch(arguments.length){
case 1:
return G__30518__1.call(this,p__28907);
case 2:
return G__30518__2.call(this,p__28907,p__28908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30518.cljs$core$IFn$_invoke$arity$1 = G__30518__1;
G__30518.cljs$core$IFn$_invoke$arity$2 = G__30518__2;
return G__30518;
})()
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),xs);
}));

(honey.sql.reduce_sql.cljs$lang$maxFixedArity = 2);

honey.sql.format_on_set_op = (function honey$sql$format_on_set_op(k,xs){
var vec__28917 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28916_SHARP_){
return (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(p1__28916_SHARP_) : honey.sql.format_dsl.call(null,p1__28916_SHARP_));
}),xs));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28917,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28917,(1),null);
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
var G__28929 = arguments.length;
switch (G__28929) {
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
var exprs = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__28926_SHARP_){
if(cljs.core.truth_(honey.sql.inline_kw_QMARK_(p1__28926_SHARP_))){
return null;
} else {
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(p1__28926_SHARP_,opts) : honey.sql.format_expr.call(null,p1__28926_SHARP_,opts));
}
}),args);
var args__$1 = args;
var prev_in = false;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(args__$1)){
var vec__28953 = args__$1;
var seq__28954 = cljs.core.seq(vec__28953);
var first__28955 = cljs.core.first(seq__28954);
var seq__28954__$1 = cljs.core.next(seq__28954);
var arg = first__28955;
var args_SINGLEQUOTE_ = seq__28954__$1;
if(cljs.core.truth_(honey.sql.inline_kw_QMARK_(arg))){
var sql = honey.sql.sql_kw(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(arg),(1))));
if(cljs.core.seq(result)){
var vec__28957 = cljs.core.peek(result);
var seq__28958 = cljs.core.seq(vec__28957);
var first__28959 = cljs.core.first(seq__28958);
var seq__28958__$1 = cljs.core.next(seq__28958);
var cur = first__28959;
var params = seq__28958__$1;
var G__30521 = exprs;
var G__30522 = args_SINGLEQUOTE_;
var G__30523 = true;
var G__30524 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(result),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(cur," ",sql)], null),params));
exprs = G__30521;
args__$1 = G__30522;
prev_in = G__30523;
result = G__30524;
continue;
} else {
var G__30525 = exprs;
var G__30526 = args_SINGLEQUOTE_;
var G__30527 = true;
var G__30528 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sql], null));
exprs = G__30525;
args__$1 = G__30526;
prev_in = G__30527;
result = G__30528;
continue;
}
} else {
if(prev_in){
var vec__28960 = cljs.core.peek(result);
var seq__28961 = cljs.core.seq(vec__28960);
var first__28962 = cljs.core.first(seq__28961);
var seq__28961__$1 = cljs.core.next(seq__28961);
var cur = first__28962;
var params = seq__28961__$1;
var vec__28963 = cljs.core.first(exprs);
var seq__28964 = cljs.core.seq(vec__28963);
var first__28965 = cljs.core.first(seq__28964);
var seq__28964__$1 = cljs.core.next(seq__28964);
var sql = first__28965;
var params_SINGLEQUOTE_ = seq__28964__$1;
var G__30529 = cljs.core.rest(exprs);
var G__30530 = args_SINGLEQUOTE_;
var G__30531 = false;
var G__30532 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(result),honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(cur," ",sql)], null),params,params_SINGLEQUOTE_));
exprs = G__30529;
args__$1 = G__30530;
prev_in = G__30531;
result = G__30532;
continue;
} else {
var G__30533 = cljs.core.rest(exprs);
var G__30534 = args_SINGLEQUOTE_;
var G__30535 = false;
var G__30536 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.first(exprs));
exprs = G__30533;
args__$1 = G__30534;
prev_in = G__30535;
result = G__30536;
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
var G__28970 = arguments.length;
switch (G__28970) {
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

return honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__28967_SHARP_){
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(p1__28967_SHARP_,opts) : honey.sql.format_expr.call(null,p1__28967_SHARP_,opts));
})),exprs);
}));

(honey.sql.format_expr_list.cljs$lang$maxFixedArity = 2);

honey.sql.format_columns = (function honey$sql$format_columns(k,xs){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"columns","columns",1998437288),k)) && (((honey.sql.contains_clause_QMARK_(new cljs.core.Keyword(null,"insert-into","insert-into",382212789))) || (((honey.sql.contains_clause_QMARK_(new cljs.core.Keyword(null,"patch-into","patch-into",-245698135))) || (honey.sql.contains_clause_QMARK_(new cljs.core.Keyword(null,"replace-into","replace-into",139321349))))))))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vec__28979 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop-ns","drop-ns",-1721308319),true], null));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28979,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28979,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls),")")], null),params);
}
});
honey.sql.format_selects_common = (function honey$sql$format_selects_common(var_args){
var G__28986 = arguments.length;
switch (G__28986) {
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
var prefix__$1 = (cljs.core.truth_(prefix)?(function (){var G__28994 = prefix;
if(cljs.core.truth_(qualifier)){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(G__28994," ",qualifier);
} else {
return G__28994;
}
})():qualifier);
var vec__28991 = (cljs.core.truth_((function (){var and__5023__auto__ = wrap;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.sequential_QMARK_(xs)) && (((1) < cljs.core.count(xs))));
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null):null);
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28991,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28991,(1),null);
if(cljs.core.sequential_QMARK_(xs)){
var vec__28996 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__28982_SHARP_){
return honey.sql.format_selectable_dsl.cljs$core$IFn$_invoke$arity$2(p1__28982_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as], null));
})),xs);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28996,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28996,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"checking","checking",1748720818).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_options_STAR_))){
} else {
if(cljs.core.empty_QMARK_(xs)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(prefix__$1," empty column list is illegal"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clause","clause",1479668060),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix__$1], null),xs)], null));
} else {
}
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4((cljs.core.truth_(prefix__$1)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(prefix__$1," "):null),pre,honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls),post)], null),params);
} else {
var vec__29001 = honey.sql.format_selectable_dsl.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as], null));
var seq__29002 = cljs.core.seq(vec__29001);
var first__29003 = cljs.core.first(seq__29002);
var seq__29002__$1 = cljs.core.next(seq__29002);
var sql = first__29003;
var params = seq__29002__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(prefix__$1)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(prefix__$1," "):null),sql)], null),params);
}
}));

(honey.sql.format_selects_common.cljs$lang$maxFixedArity = 4);

honey.sql.format_selects = (function honey$sql$format_selects(k,xs){
return honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$4(honey.sql.sql_kw(k),(function (){var fexpr__29007 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Symbol(null,"select","select",-1506602266,null),null,new cljs.core.Keyword(null,"facet","facet",-801327574),null,new cljs.core.Keyword(null,"rename","rename",1508157613),null,new cljs.core.Keyword(null,"select-distinct","select-distinct",-412636114),null,new cljs.core.Keyword(null,"window","window",724519534),null,new cljs.core.Symbol(null,"rename","rename",-1146278156,null),null,new cljs.core.Symbol(null,"select-distinct","select-distinct",1227895413,null),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Symbol(null,"from","from",-839142725,null),null,new cljs.core.Symbol(null,"window","window",-1929916235,null),null,new cljs.core.Symbol(null,"facet","facet",839203953,null),null,new cljs.core.Symbol(null,"delete-from","delete-from",-1983671803,null),null,new cljs.core.Keyword(null,"delete-from","delete-from",670763966),null,new cljs.core.Keyword(null,"select","select",1147833503),null], null), null);
return (fexpr__29007.cljs$core$IFn$_invoke$arity$1 ? fexpr__29007.cljs$core$IFn$_invoke$arity$1(k) : fexpr__29007.call(null,k));
})(),xs,(function (){var fexpr__29008 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"exclude","exclude",-1230250334),null,new cljs.core.Keyword(null,"rename","rename",1508157613),null,new cljs.core.Symbol(null,"exclude","exclude",410281193,null),null,new cljs.core.Symbol(null,"rename","rename",-1146278156,null),null], null), null);
return (fexpr__29008.cljs$core$IFn$_invoke$arity$1 ? fexpr__29008.cljs$core$IFn$_invoke$arity$1(k) : fexpr__29008.call(null,k));
})());
});
honey.sql.format_selects_on = (function honey$sql$format_selects_on(_,xs){
var vec__29011 = xs;
var seq__29012 = cljs.core.seq(vec__29011);
var first__29013 = cljs.core.first(seq__29012);
var seq__29012__$1 = cljs.core.next(seq__29012);
var on = first__29013;
var cols = seq__29012__$1;
var vec__29014 = (function (){var G__29020 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"distinct-on","distinct-on",341946250)], null),on);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(G__29020) : honey.sql.format_expr.call(null,G__29020));
})();
var seq__29015 = cljs.core.seq(vec__29014);
var first__29016 = cljs.core.first(seq__29015);
var seq__29015__$1 = cljs.core.next(seq__29015);
var sql = first__29016;
var params = seq__29015__$1;
var vec__29017 = honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$3(honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(new cljs.core.Keyword(null,"select","select",1147833503))," ",sql),true,cols);
var seq__29018 = cljs.core.seq(vec__29017);
var first__29019 = cljs.core.first(seq__29018);
var seq__29018__$1 = cljs.core.next(seq__29018);
var sql_SINGLEQUOTE_ = first__29019;
var params_SINGLEQUOTE_ = seq__29018__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sql_SINGLEQUOTE_], null),params,params_SINGLEQUOTE_);
});
honey.sql.format_select_top = (function honey$sql$format_select_top(k,xs){
var vec__29025 = xs;
var seq__29026 = cljs.core.seq(vec__29025);
var first__29027 = cljs.core.first(seq__29026);
var seq__29026__$1 = cljs.core.next(seq__29026);
var top = first__29027;
var cols = seq__29026__$1;
var vec__29028 = ((cljs.core.sequential_QMARK_(top))?(function (){var top_q_QMARK_ = (function (p1__29023_SHARP_){
var and__5023__auto__ = cljs.core.ident_QMARK_(p1__29023_SHARP_);
if(and__5023__auto__){
var G__29039 = honey.sql.sym__GT_kw(p1__29023_SHARP_);
var fexpr__29038 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-ties","with-ties",-1030545914),null,new cljs.core.Keyword(null,"percent","percent",2031453817),null], null), null);
return (fexpr__29038.cljs$core$IFn$_invoke$arity$1 ? fexpr__29038.cljs$core$IFn$_invoke$arity$1(G__29039) : fexpr__29038.call(null,G__29039));
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
var seq__29029 = cljs.core.seq(vec__29028);
var first__29030 = cljs.core.first(seq__29029);
var seq__29029__$1 = cljs.core.next(seq__29029);
var top__$1 = first__29030;
var parts = seq__29029__$1;
var vec__29031 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(top__$1) : honey.sql.format_expr.call(null,top__$1));
var seq__29032 = cljs.core.seq(vec__29031);
var first__29033 = cljs.core.first(seq__29032);
var seq__29032__$1 = cljs.core.next(seq__29032);
var sql = first__29033;
var params = seq__29032__$1;
var vec__29034 = honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$3(honey.sql.util.str.cljs$core$IFn$_invoke$arity$variadic(honey.sql.sql_kw(k),"(",sql,")",((cljs.core.seq(parts))?" ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(honey.sql.sql_kw),parts)], 0)),true,cols);
var seq__29035 = cljs.core.seq(vec__29034);
var first__29036 = cljs.core.first(seq__29035);
var seq__29035__$1 = cljs.core.next(seq__29035);
var sql_SINGLEQUOTE_ = first__29036;
var params_SINGLEQUOTE_ = seq__29035__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sql_SINGLEQUOTE_], null),params,params_SINGLEQUOTE_);
});
honey.sql.format_select_into = (function honey$sql$format_select_into(k,xs){
var vec__29046 = honey.sql.ensure_sequential(xs);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29046,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29046,(1),null);
var vec__29049 = (cljs.core.truth_(e)?(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(e) : honey.sql.format_expr.call(null,e)):null);
var seq__29050 = cljs.core.seq(vec__29049);
var first__29051 = cljs.core.first(seq__29050);
var seq__29050__$1 = cljs.core.next(seq__29050);
var sql = first__29051;
var params = seq__29050__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(honey.sql.sql_kw(k)," ",honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(v),(cljs.core.truth_(sql)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(" ",honey.sql.sql_kw(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"into","into",-150836029),k))?new cljs.core.Keyword(null,"in","in",-1531184865):new cljs.core.Keyword(null,"limit","limit",-1355822363)))," ",sql):null))], null),params);
});
honey.sql.format_with_part = (function honey$sql$format_with_part(x){
if(cljs.core.sequential_QMARK_(x)){
var vec__29053 = (function (){var G__29056 = cljs.core.second(x);
return (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(G__29056) : honey.sql.format_dsl.call(null,G__29056));
})();
var seq__29054 = cljs.core.seq(vec__29053);
var first__29055 = cljs.core.first(seq__29054);
var seq__29054__$1 = cljs.core.next(seq__29054);
var sql = first__29055;
var params = seq__29054__$1;
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
return honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__29059){
var vec__29060 = p__29059;
var kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29060,(0),null);
var entities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29060,(1),null);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"default","default",-347290801,null),null,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Symbol(null,"to","to",1832630534,null),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),kw)){
var vec__29063 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(entities) : honey.sql.format_expr.call(null,entities));
var seq__29064 = cljs.core.seq(vec__29063);
var first__29065 = cljs.core.first(seq__29064);
var seq__29064__$1 = cljs.core.next(seq__29064);
var sql = first__29065;
var params = seq__29064__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(kw)," ",sql)], null),params);
} else {
if(cljs.core.sequential_QMARK_(entities)){
var vec__29068 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(entities);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29068,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29068,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(kw)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls))], null),params);
} else {
var vec__29073 = honey.sql.format_var.cljs$core$IFn$_invoke$arity$1(entities);
var seq__29074 = cljs.core.seq(vec__29073);
var first__29075 = cljs.core.first(seq__29074);
var seq__29074__$1 = cljs.core.next(seq__29074);
var sql = first__29075;
var params = seq__29074__$1;
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
var vec__29078 = honey.sql.format_with_query_tail_STAR_(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),xs__$1));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29078,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29078,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(" ",sqls)], null),params);
});
honey.sql.format_with = (function honey$sql$format_with(k,xs){
var as_fn = (function (p__29092){
var vec__29093 = p__29092;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29093,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29093,(1),null);
var materialization = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29093,(2),null);
var pred__29097 = cljs.core._EQ_;
var expr__29098 = materialization;
if(cljs.core.truth_((pred__29097.cljs$core$IFn$_invoke$arity$2 ? pred__29097.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"materialized","materialized",-1815568995),expr__29098) : pred__29097.call(null,new cljs.core.Keyword(null,"materialized","materialized",-1815568995),expr__29098)))){
return "AS MATERIALIZED";
} else {
if(cljs.core.truth_((function (){var G__29100 = new cljs.core.Symbol(null,"materialized","materialized",-175037468,null);
var G__29101 = expr__29098;
return (pred__29097.cljs$core$IFn$_invoke$arity$2 ? pred__29097.cljs$core$IFn$_invoke$arity$2(G__29100,G__29101) : pred__29097.call(null,G__29100,G__29101));
})())){
return "AS MATERIALIZED";
} else {
if(cljs.core.truth_((pred__29097.cljs$core$IFn$_invoke$arity$2 ? pred__29097.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not-materialized","not-materialized",-390756108),expr__29098) : pred__29097.call(null,new cljs.core.Keyword(null,"not-materialized","not-materialized",-390756108),expr__29098)))){
return "AS NOT MATERIALIZED";
} else {
if(cljs.core.truth_((function (){var G__29102 = new cljs.core.Symbol(null,"not-materialized","not-materialized",1249775419,null);
var G__29103 = expr__29098;
return (pred__29097.cljs$core$IFn$_invoke$arity$2 ? pred__29097.cljs$core$IFn$_invoke$arity$2(G__29102,G__29103) : pred__29097.call(null,G__29102,G__29103));
})())){
return "AS NOT MATERIALIZED";
} else {
return "AS";
}
}
}
}
});
var vec__29089 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__29105){
var vec__29106 = p__29105;
var seq__29107 = cljs.core.seq(vec__29106);
var first__29108 = cljs.core.first(seq__29107);
var seq__29107__$1 = cljs.core.next(seq__29107);
var x = first__29108;
var first__29108__$1 = cljs.core.first(seq__29107__$1);
var seq__29107__$2 = cljs.core.next(seq__29107__$1);
var expr = first__29108__$1;
var tail = seq__29107__$2;
var with$ = vec__29106;
var vec__29109 = honey.sql.format_with_part(x);
var seq__29110 = cljs.core.seq(vec__29109);
var first__29111 = cljs.core.first(seq__29110);
var seq__29110__$1 = cljs.core.next(seq__29110);
var sql = first__29111;
var params = seq__29110__$1;
var non_query_expr_QMARK_ = (!(cljs.core.map_QMARK_(expr)));
var vec__29112 = ((non_query_expr_QMARK_)?(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(expr) : honey.sql.format_expr.call(null,expr)):(honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(expr) : honey.sql.format_dsl.call(null,expr)));
var seq__29113 = cljs.core.seq(vec__29112);
var first__29114 = cljs.core.first(seq__29113);
var seq__29113__$1 = cljs.core.next(seq__29113);
var sql_SINGLEQUOTE_ = first__29114;
var params_SINGLEQUOTE_ = seq__29113__$1;
var vec__29115 = ((non_query_expr_QMARK_)?honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql_SINGLEQUOTE_," AS ",sql)], null),params_SINGLEQUOTE_,params):honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(sql," ",as_fn(with$)," ",honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",sql_SINGLEQUOTE_,")"))], null),params,params_SINGLEQUOTE_));
var seq__29116 = cljs.core.seq(vec__29115);
var first__29117 = cljs.core.first(seq__29116);
var seq__29116__$1 = cljs.core.next(seq__29116);
var sql_SINGLEQUOTE__SINGLEQUOTE_ = first__29117;
var params_SINGLEQUOTE__SINGLEQUOTE_ = seq__29116__$1;
var sql_params_SINGLEQUOTE__SINGLEQUOTE_ = vec__29115;
var vec__29118 = honey.sql.format_with_query_tail(tail);
var seq__29119 = cljs.core.seq(vec__29118);
var first__29120 = cljs.core.first(seq__29119);
var seq__29119__$1 = cljs.core.next(seq__29119);
var tail_sql = first__29120;
var tail_params = seq__29119__$1;
if(cljs.core.seq(tail_sql)){
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql_SINGLEQUOTE__SINGLEQUOTE_," ",tail_sql)], null),params_SINGLEQUOTE__SINGLEQUOTE_,tail_params);
} else {
return sql_params_SINGLEQUOTE__SINGLEQUOTE_;
}
})),xs);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29089,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29089,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls))], null),params);
});
honey.sql.format_selector = (function honey$sql$format_selector(k,xs){
return honey.sql.format_selects(k,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs], null));
});
honey.sql.format_window = (function honey$sql$format_window(k,xs){
return honey.sql.format_selects(k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),xs)));
});
honey.sql.format_insert = (function honey$sql$format_insert(k,table){
var vec__29150 = (function (){var temp__5823__auto__ = honey.sql.clause_body(new cljs.core.Keyword(null,"columns","columns",1998437288));
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
var cols_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29150,(0),null);
var cols_sql_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29150,(1),null);
var cols_params_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29150,(2),null);
var vec__29153 = ((((cljs.core.sequential_QMARK_(table)) && (cljs.core.map_QMARK_(cljs.core.first(table)))))?cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(table):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,table], null));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29153,(0),null);
var table__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29153,(1),null);
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
var vec__29161 = table__$1;
var table__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29161,(0),null);
var statement = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29161,(1),null);
var vec__29164 = ((((cljs.core.sequential_QMARK_(table__$2)) && (cljs.core.sequential_QMARK_(cljs.core.second(table__$2)))))?table__$2:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table__$2], null));
var table__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29164,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29164,(1),null);
var vec__29167 = (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(statement) : honey.sql.format_dsl.call(null,statement));
var seq__29168 = cljs.core.seq(vec__29167);
var first__29169 = cljs.core.first(seq__29168);
var seq__29168__$1 = cljs.core.next(seq__29168);
var sql = first__29169;
var params = seq__29168__$1;
var vec__29170 = honey.sql.format_entity_alias(table__$3);
var seq__29171 = cljs.core.seq(vec__29170);
var first__29172 = cljs.core.first(seq__29171);
var seq__29171__$1 = cljs.core.next(seq__29171);
var t_sql = first__29172;
var t_params = seq__29171__$1;
var vec__29173 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Var(function(){return honey.sql.format_entity_alias;},new cljs.core.Symbol("honey.sql","format-entity-alias","honey.sql/format-entity-alias",-793484786,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-entity-alias","format-entity-alias",457072549,null),"honey/sql.cljc",27,1,499,499,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(honey.sql.format_entity_alias)?honey.sql.format_entity_alias.cljs$lang$test:null)]))),cols);
var c_sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29173,(0),null);
var c_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29173,(1),null);
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$variadic(honey.sql.sql_kw(k)," ",t_sql," ",((cljs.core.seq(cols))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",c_sqls),") "):((cljs.core.seq(cols_SINGLEQUOTE_))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(cols_sql_SINGLEQUOTE_," "):null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([overriding,sql], 0))], null),t_params,c_params,cols_params_SINGLEQUOTE_,params);
} else {
if(cljs.core.sequential_QMARK_(cljs.core.second(table__$1))){
var vec__29184 = table__$1;
var table__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29184,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29184,(1),null);
var vec__29187 = honey.sql.format_entity_alias(table__$2);
var seq__29188 = cljs.core.seq(vec__29187);
var first__29189 = cljs.core.first(seq__29188);
var seq__29188__$1 = cljs.core.next(seq__29188);
var t_sql = first__29189;
var t_params = seq__29188__$1;
var vec__29190 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Var(function(){return honey.sql.format_entity_alias;},new cljs.core.Symbol("honey.sql","format-entity-alias","honey.sql/format-entity-alias",-793484786,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-entity-alias","format-entity-alias",457072549,null),"honey/sql.cljc",27,1,499,499,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(honey.sql.format_entity_alias)?honey.sql.format_entity_alias.cljs$lang$test:null)]))),cols);
var c_sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29190,(0),null);
var c_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29190,(1),null);
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$variadic(honey.sql.sql_kw(k)," ",t_sql," (",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",c_sqls),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")",overriding], 0))], null),t_params,c_params);
} else {
var vec__29197 = honey.sql.format_entity_alias(table__$1);
var seq__29198 = cljs.core.seq(vec__29197);
var first__29199 = cljs.core.first(seq__29198);
var seq__29198__$1 = cljs.core.next(seq__29198);
var sql = first__29199;
var params = seq__29198__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(honey.sql.sql_kw(k)," ",sql,((cljs.core.seq(cols_SINGLEQUOTE_))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" ",cols_sql_SINGLEQUOTE_):null),overriding)], null),cols_params_SINGLEQUOTE_,params);

}
}
} else {
var vec__29200 = honey.sql.format_entity_alias(table__$1);
var seq__29201 = cljs.core.seq(vec__29200);
var first__29202 = cljs.core.first(seq__29201);
var seq__29201__$1 = cljs.core.next(seq__29201);
var sql = first__29202;
var params = seq__29201__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(honey.sql.sql_kw(k)," ",sql,((cljs.core.seq(cols_SINGLEQUOTE_))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" ",cols_sql_SINGLEQUOTE_):null),overriding)], null),cols_params_SINGLEQUOTE_,params);
}
});
honey.sql.format_join = (function honey$sql$format_join(k,clauses){
var vec__29207 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),(function() {
var G__30554 = null;
var G__30554__1 = (function (res){
return res;
});
var G__30554__2 = (function (p__29211,p__29212){
var vec__29214 = p__29211;
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29214,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29214,(1),null);
var vec__29217 = p__29212;
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29217,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29217,(1),null);
var vec__29221 = honey.sql.format_selects_common.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),k))?new cljs.core.Keyword(null,"inner-join","inner-join",659431740):k)),true,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [j], null));
var seq__29222 = cljs.core.seq(vec__29221);
var first__29223 = cljs.core.first(seq__29222);
var seq__29222__$1 = cljs.core.next(seq__29222);
var sql_j = first__29223;
var params_j = seq__29222__$1;
var sqls__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sqls,sql_j);
if(((cljs.core.sequential_QMARK_(e)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"using","using",-705812733,null),null,new cljs.core.Keyword(null,"using","using",1948623036),null], null), null),cljs.core.first(e))))){
var vec__29229 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Var(function(){return honey.sql.format_entity_alias;},new cljs.core.Symbol("honey.sql","format-entity-alias","honey.sql/format-entity-alias",-793484786,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-entity-alias","format-entity-alias",457072549,null),"honey/sql.cljc",27,1,499,499,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(honey.sql.format_entity_alias)?honey.sql.format_entity_alias.cljs$lang$test:null)]))),cljs.core.rest(e));
var u_sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29229,(0),null);
var u_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29229,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sqls__$1,"USING",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",u_sqls),")")], 0)),honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(params,params_j,u_params)], null);
} else {
var vec__29235 = (cljs.core.truth_(e)?(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(e) : honey.sql.format_expr.call(null,e)):null);
var seq__29236 = cljs.core.seq(vec__29235);
var first__29237 = cljs.core.first(seq__29236);
var seq__29236__$1 = cljs.core.next(seq__29236);
var sql = first__29237;
var params_SINGLEQUOTE_ = seq__29236__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29238 = sqls__$1;
if(cljs.core.truth_(e)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__29238,"ON",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sql], 0));
} else {
return G__29238;
}
})(),honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(params,params_j,params_SINGLEQUOTE_)], null);
}
});
G__30554 = function(p__29211,p__29212){
switch(arguments.length){
case 1:
return G__30554__1.call(this,p__29211);
case 2:
return G__30554__2.call(this,p__29211,p__29212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30554.cljs$core$IFn$_invoke$arity$1 = G__30554__1;
G__30554.cljs$core$IFn$_invoke$arity$2 = G__30554__2;
return G__30554;
})()
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),clauses);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29207,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29207,(1),null);
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
var joins = ((cljs.core.every_QMARK_(cljs.core.map_QMARK_,clauses))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__29239_SHARP_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.val),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__29239_SHARP_], 0));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vector)),clauses):cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.ident_QMARK_,clauses));
if(cljs.core.even_QMARK_(cljs.core.count(joins))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(":join-by expects a sequence of join clauses",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses], null));
}

var vec__29248 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__29251,p__29252){
var vec__29253 = p__29251;
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29253,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29253,(1),null);
var vec__29256 = p__29252;
var vec__29259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29256,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29259,(0),null);
var vec__29262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29256,(1),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29262,(0),null);
var j_SINGLEQUOTE_ = honey.sql.sym__GT_kw(j);
var j_SINGLEQUOTE___$1 = honey.sql.sym__GT_kw((honey.sql.join_by_aliases.cljs$core$IFn$_invoke$arity$2 ? honey.sql.join_by_aliases.cljs$core$IFn$_invoke$arity$2(j_SINGLEQUOTE_,j_SINGLEQUOTE_) : honey.sql.join_by_aliases.call(null,j_SINGLEQUOTE_,j_SINGLEQUOTE_)));
if(cljs.core.truth_((honey.sql.valid_joins.cljs$core$IFn$_invoke$arity$1 ? honey.sql.valid_joins.cljs$core$IFn$_invoke$arity$1(j_SINGLEQUOTE___$1) : honey.sql.valid_joins.call(null,j_SINGLEQUOTE___$1)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(":join-by found an invalid join type ",j),cljs.core.PersistentArrayMap.EMPTY);
}

var vec__29269 = (function (){var G__29272 = cljs.core.PersistentArrayMap.createAsIfByAssoc([j_SINGLEQUOTE___$1,clauses__$1]);
return (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(G__29272) : honey.sql.format_dsl.call(null,G__29272));
})();
var seq__29270 = cljs.core.seq(vec__29269);
var first__29271 = cljs.core.first(seq__29270);
var seq__29270__$1 = cljs.core.next(seq__29270);
var sql_SINGLEQUOTE_ = first__29271;
var params_SINGLEQUOTE_ = seq__29270__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sqls,sql_SINGLEQUOTE_),cljs.core.into.cljs$core$IFn$_invoke$arity$2(params,params_SINGLEQUOTE_)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),joins));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29248,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29248,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(" ",sqls)], null),params);
});
honey.sql.format_on_expr = (function honey$sql$format_on_expr(k,e){
if((((!(cljs.core.sequential_QMARK_(e)))) || (cljs.core.seq(e)))){
var vec__29277 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(e) : honey.sql.format_expr.call(null,e));
var seq__29278 = cljs.core.seq(vec__29277);
var first__29279 = cljs.core.first(seq__29278);
var seq__29278__$1 = cljs.core.next(seq__29278);
var sql = first__29279;
var params = seq__29278__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",sql)], null),params);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
honey.sql.format_group_by = (function honey$sql$format_group_by(k,xs){
var vec__29281 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(honey.sql.ensure_sequential(xs));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29281,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29281,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls))], null),params);
});
honey.sql.format_order_by = (function honey$sql$format_order_by(k,xs){
var xs__$1 = honey.sql.ensure_sequential(xs);
var dirs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29284_SHARP_){
if(cljs.core.sequential_QMARK_(p1__29284_SHARP_)){
return cljs.core.second(p1__29284_SHARP_);
} else {
return null;
}
}),xs__$1);
var vec__29287 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29285_SHARP_){
if(cljs.core.sequential_QMARK_(p1__29285_SHARP_)){
return cljs.core.first(p1__29285_SHARP_);
} else {
return p1__29285_SHARP_;
}
}),xs__$1));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29287,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29287,(1),null);
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
var vec__29292 = honey.sql.ensure_sequential(xs);
var strength = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29292,(0),null);
var tables = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29292,(1),null);
var nowait = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29292,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(honey.sql.sql_kw(k)," ",honey.sql.sql_kw(strength),(cljs.core.truth_(tables)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.ident_QMARK_(tables);
if(and__5023__auto__){
var G__29298 = honey.sql.sym__GT_kw(tables);
var fexpr__29297 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-locked","skip-locked",-202896094),null,new cljs.core.Keyword(null,"nowait","nowait",-1298090166),null,new cljs.core.Keyword(null,"wait","wait",-260664777),null], null), null);
return (fexpr__29297.cljs$core$IFn$_invoke$arity$1 ? fexpr__29297.cljs$core$IFn$_invoke$arity$1(G__29298) : fexpr__29297.call(null,G__29298));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cols,(cljs.core.truth_(skip_cols_sql)?null:honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29305_SHARP_){
return honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(p1__29305_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop-ns","drop-ns",-1721308319),true], null));
})),cols),")"))], null);
} else {
return null;
}
});
honey.sql.format_values = (function honey$sql$format_values(k,xs){
var map__29321 = honey.sql._STAR_options_STAR_;
var map__29321__$1 = cljs.core.__destructure_map(map__29321);
var values_default_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29321__$1,new cljs.core.Keyword(null,"values-default-columns","values-default-columns",1352539997));
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
var vec__29329 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__29333,x){
var vec__29334 = p__29333;
var sql = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29334,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29334,(1),null);
if(cljs.core.sequential_QMARK_(x)){
var vec__29338 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(x);
var sqls_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29338,(0),null);
var params_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29338,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sql,((cljs.core.sequential_QMARK_(sqls_SINGLEQUOTE_))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls_SINGLEQUOTE_),")"):sqls_SINGLEQUOTE_)),honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$2(params,params_SINGLEQUOTE_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sql,honey.sql.sql_kw(x)),params], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),xs_SINGLEQUOTE_);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29329,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29329,(1),null);
var sqls__$1 = ((row_ctr)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29317_SHARP_){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("ROW",p1__29317_SHARP_);
}),sqls):sqls);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls__$1))], null),params);
} else {
if(cljs.core.map_QMARK_(first_xs)){
var vec__29344 = honey.sql.columns_from_values(xs__$2,((honey.sql.contains_clause_QMARK_(new cljs.core.Keyword(null,"insert-into","insert-into",382212789))) || (((honey.sql.contains_clause_QMARK_(new cljs.core.Keyword(null,"patch-into","patch-into",-245698135))) || (((honey.sql.contains_clause_QMARK_(new cljs.core.Keyword(null,"replace-into","replace-into",139321349))) || (honey.sql.contains_clause_QMARK_(new cljs.core.Keyword(null,"columns","columns",1998437288)))))))));
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29344,(0),null);
var cols_sql = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29344,(1),null);
var vec__29347 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__29352,x){
var vec__29353 = p__29352;
var sql = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29353,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29353,(1),null);
if(cljs.core.map_QMARK_(x)){
var vec__29357 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29318_SHARP_){
var G__29360 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,p1__29318_SHARP_,((cljs.core.contains_QMARK_(values_default_columns,p1__29318_SHARP_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328)], null):null));
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(G__29360) : honey.sql.format_expr.call(null,G__29360));
})),cols);
var sqls_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29357,(0),null);
var params_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29357,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sql,((cljs.core.sequential_QMARK_(sqls_SINGLEQUOTE_))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls_SINGLEQUOTE_),")"):sqls_SINGLEQUOTE_)),honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$2(params,params_SINGLEQUOTE_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sql,honey.sql.sql_kw(x)),params], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),xs__$2);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29347,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29347,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4((cljs.core.truth_(cols_sql)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(cols_sql," "):null),honey.sql.sql_kw(k)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls))], null),params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(":values expects a sequence of rows (maps) or column values (sequences)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first","first",-644103046),cljs.core.first(xs__$2)], null));

}
}
}
}
});
honey.sql.format_set_exprs = (function honey$sql$format_set_exprs(k,xs){
var vec__29371 = cljs.core.reduce_kv((function (p__29374,v,e){
var vec__29375 = p__29374;
var sql = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29375,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29375,(1),null);
var vec__29379 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(e) : honey.sql.format_expr.call(null,e));
var seq__29380 = cljs.core.seq(vec__29379);
var first__29381 = cljs.core.first(seq__29380);
var seq__29380__$1 = cljs.core.next(seq__29380);
var sql_SINGLEQUOTE_ = first__29381;
var params_SINGLEQUOTE_ = seq__29380__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sql,honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop-ns","drop-ns",-1721308319),(!(honey.sql.mysql_QMARK_()))], null))," = ",sql_SINGLEQUOTE_)),((params_SINGLEQUOTE_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(params,params_SINGLEQUOTE_):params)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),xs);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29371,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29371,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls))], null),params);
});
honey.sql.format_on_conflict = (function honey$sql$format_on_conflict(k,x){
if(cljs.core.sequential_QMARK_(x)){
var exprs = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.map_QMARK_),x);
var n = cljs.core.count(exprs);
var vec__29384 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,x);
var seq__29385 = cljs.core.seq(vec__29384);
var first__29386 = cljs.core.first(seq__29385);
var seq__29385__$1 = cljs.core.next(seq__29385);
var clause = first__29386;
var more = seq__29385__$1;
var _ = ((cljs.core.seq(more))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported :on-conflict format",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clause","clause",1479668060),x], null))})():null);
var vec__29387 = ((cljs.core.seq(exprs))?honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
if(cljs.core.sequential_QMARK_(e)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),e], null);
} else {
return e;
}
}),exprs)):null);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29387,(0),null);
var expr_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29387,(1),null);
var vec__29390 = (cljs.core.truth_(clause)?(honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(clause) : honey.sql.format_dsl.call(null,clause)):null);
var seq__29391 = cljs.core.seq(vec__29390);
var first__29392 = cljs.core.first(seq__29391);
var seq__29391__$1 = cljs.core.next(seq__29391);
var sql = first__29392;
var clause_params = seq__29391__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k),(((n > (0)))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(" (",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls),")"):null),(cljs.core.truth_(sql)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" ",sql):null))], null),expr_params,clause_params);
} else {
var G__29402 = k;
var G__29403 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
return (honey.sql.format_on_conflict.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_on_conflict.cljs$core$IFn$_invoke$arity$2(G__29402,G__29403) : honey.sql.format_on_conflict.call(null,G__29402,G__29403));
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
var fexpr__29418 = new cljs.core.Symbol(null,"fields","fields",-291534703,null);
return (fexpr__29418.cljs$core$IFn$_invoke$arity$1 ? fexpr__29418.cljs$core$IFn$_invoke$arity$1(x) : fexpr__29418.call(null,x));
}
})();
var vec__29412 = ((cljs.core.map_QMARK_(fields))?honey.sql.format_set_exprs(k,fields):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (k,x,fields){
return (function (e){
var e__$1 = honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop-ns","drop-ns",-1721308319),true], null));
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(e__$1," = EXCLUDED.",e__$1);
});})(k,x,fields))
),fields))], null));
var seq__29413 = cljs.core.seq(vec__29412);
var first__29414 = cljs.core.first(seq__29413);
var seq__29413__$1 = cljs.core.next(seq__29413);
var sets = first__29414;
var set_params = seq__29413__$1;
var where = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var fexpr__29419 = new cljs.core.Symbol(null,"where","where",-404264438,null);
return (fexpr__29419.cljs$core$IFn$_invoke$arity$1 ? fexpr__29419.cljs$core$IFn$_invoke$arity$1(x) : fexpr__29419.call(null,x));
}
})();
var vec__29415 = (cljs.core.truth_(where)?(function (){var G__29421 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"where","where",-2044795965),where], null);
return (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(G__29421) : honey.sql.format_dsl.call(null,G__29421));
})():null);
var seq__29416 = cljs.core.seq(vec__29415);
var first__29417 = cljs.core.first(seq__29416);
var seq__29416__$1 = cljs.core.next(seq__29416);
var sql = first__29417;
var params = seq__29416__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(sets,(cljs.core.truth_(sql)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" ",sql):null))], null),set_params,params);
} else {
return honey.sql.format_set_exprs(k,x);
}
} else {
if(cljs.core.sequential_QMARK_(x)){
var vec__29422 = cljs.core.split_with(cljs.core.complement(cljs.core.map_QMARK_),x);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29422,(0),null);
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29422,(1),null);
if(cljs.core.seq(cols)){
var G__30570 = k;
var G__30571 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fields","fields",-1932066230),cols,new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clauses))], null);
k = G__30570;
x = G__30571;
continue;
} else {
var G__30572 = k;
var G__30573 = cljs.core.first(clauses);
k = G__30572;
x = G__30573;
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
var _STAR_options_STAR__orig_val__29429 = honey.sql._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__29430 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(honey.sql._STAR_options_STAR_,new cljs.core.Keyword(null,"inline","inline",1399884222),true);
(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__temp_val__29430);

try{var vec__29433 = (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(c) : honey.sql.format_dsl.call(null,c));
var seq__29434 = cljs.core.seq(vec__29433);
var first__29435 = cljs.core.first(seq__29434);
var seq__29434__$1 = cljs.core.next(seq__29434);
var sql = first__29435;
var params = seq__29434__$1;
if(cljs.core.seq(params)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("parameters are not accepted in ",context),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clause","clause",1479668060),c,new cljs.core.Keyword(null,"params","params",710516235),params], null));
} else {
}

return sql;
}finally {(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__orig_val__29429);
}});
honey.sql.format_simple_expr = (function honey$sql$format_simple_expr(e,context){
var _STAR_options_STAR__orig_val__29436 = honey.sql._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__29437 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(honey.sql._STAR_options_STAR_,new cljs.core.Keyword(null,"inline","inline",1399884222),true);
(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__temp_val__29437);

try{var vec__29440 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(e) : honey.sql.format_expr.call(null,e));
var seq__29441 = cljs.core.seq(vec__29440);
var first__29442 = cljs.core.first(seq__29441);
var seq__29441__$1 = cljs.core.next(seq__29441);
var sql = first__29442;
var params = seq__29441__$1;
if(cljs.core.seq(params)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("parameters are not accepted in ",context),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expr","expr",745722291),e,new cljs.core.Keyword(null,"params","params",710516235),params], null));
} else {
}

return sql;
}finally {(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__orig_val__29436);
}});
honey.sql.format_alter_table = (function honey$sql$format_alter_table(k,x){
if(cljs.core.sequential_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(honey.sql.sql_kw(k)," ",honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(cljs.core.first(x)),(function (){var temp__5825__auto__ = cljs.core.next(x);
if(temp__5825__auto__){
var clauses = temp__5825__auto__;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29443_SHARP_){
return honey.sql.format_simple_clause(p1__29443_SHARP_,"column/index operations");
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
var iter__5503__auto__ = (function honey$sql$format_ddl_options_$_iter__29451(s__29452){
return (new cljs.core.LazySeq(null,(function (){
var s__29452__$1 = s__29452;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__29452__$1);
if(temp__5825__auto__){
var s__29452__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29452__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__29452__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__29454 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__29453 = (0);
while(true){
if((i__29453 < size__5502__auto__)){
var opt = cljs.core._nth(c__5501__auto__,i__29453);
cljs.core.chunk_append(b__29454,((cljs.core.map_QMARK_(opt))?honey.sql.format_simple_clause(opt,context):((cljs.core.sequential_QMARK_(opt))?honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (i__29453,opt,c__5501__auto__,size__5502__auto__,b__29454,s__29452__$2,temp__5825__auto__){
return (function (e){
if(cljs.core.ident_QMARK_(e)){
return honey.sql.sql_kw_ddl(e);
} else {
return honey.sql.format_simple_expr(e,context);
}
});})(i__29453,opt,c__5501__auto__,size__5502__auto__,b__29454,s__29452__$2,temp__5825__auto__))
),opt):((cljs.core.ident_QMARK_(opt))?honey.sql.sql_kw_ddl(opt):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("expected symbol or keyword",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),opt], null))})()
))));

var G__30581 = (i__29453 + (1));
i__29453 = G__30581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29454),honey$sql$format_ddl_options_$_iter__29451(cljs.core.chunk_rest(s__29452__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29454),null);
}
} else {
var opt = cljs.core.first(s__29452__$2);
return cljs.core.cons(((cljs.core.map_QMARK_(opt))?honey.sql.format_simple_clause(opt,context):((cljs.core.sequential_QMARK_(opt))?honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (opt,s__29452__$2,temp__5825__auto__){
return (function (e){
if(cljs.core.ident_QMARK_(e)){
return honey.sql.sql_kw_ddl(e);
} else {
return honey.sql.format_simple_expr(e,context);
}
});})(opt,s__29452__$2,temp__5825__auto__))
),opt):((cljs.core.ident_QMARK_(opt))?honey.sql.sql_kw_ddl(opt):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("expected symbol or keyword",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),opt], null))})()
))),honey$sql$format_ddl_options_$_iter__29451(cljs.core.rest(s__29452__$2)));
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
var tab_QMARK_ = (function (p1__29468_SHARP_){
return ((cljs.core.ident_QMARK_(p1__29468_SHARP_)) || (typeof p1__29468_SHARP_ === 'string'));
});
var coll = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(tab_QMARK_,params);
var opts = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(tab_QMARK_,params));
var ine = cljs.core.last(coll);
var vec__29470 = (function (){var ine_kw = honey.sql.sym__GT_kw(ine);
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
var prequel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29470,(0),null);
var table__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29470,(1),null);
var ine__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29470,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(honey.sql.sql_kw),prequel),(cljs.core.truth_(table__$1)?honey.sql.format_simple_var.cljs$core$IFn$_invoke$arity$1(table__$1):null),(cljs.core.truth_(ine__$1)?honey.sql.sql_kw(ine__$1):null)], null),(cljs.core.truth_(opts)?honey.sql.format_ddl_options(opts,context):null));
});
honey.sql.format_truncate = (function honey$sql$format_truncate(_,xs){
var vec__29483 = honey.sql.ensure_sequential(xs);
var seq__29484 = cljs.core.seq(vec__29483);
var first__29485 = cljs.core.first(seq__29484);
var seq__29484__$1 = cljs.core.next(seq__29484);
var table = first__29485;
var options = seq__29484__$1;
var table__$1 = ((((cljs.core.ident_QMARK_(table)) || (typeof table === 'string')))?honey.sql.format_simple_var.cljs$core$IFn$_invoke$arity$1(table):honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(honey.sql.format_simple_var,table)));
var vec__29486 = honey.sql.destructure_ddl_item(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,options], null),"truncate");
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29486,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29486,(1),null);
var ine = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29486,(2),null);
var options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29486,(3),null);
if(cljs.core.seq(pre)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("TRUNCATE syntax error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),pre], null));
} else {
}

if(cljs.core.seq(ine)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("TRUNCATE syntax error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),ine], null));
} else {
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var G__29490 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TRUNCATE TABLE",table__$1], null);
if(cljs.core.seq(options__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__29490,options__$1);
} else {
return G__29490;
}
})())], null);
});
honey.sql.format_create = (function honey$sql$format_create(q,k,item,as){
var vec__29493 = honey.sql.destructure_ddl_item(item,honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(honey.sql.sql_kw(q)," options"));
var seq__29494 = cljs.core.seq(vec__29493);
var first__29495 = cljs.core.first(seq__29494);
var seq__29494__$1 = cljs.core.next(seq__29494);
var pre = first__29495;
var first__29495__$1 = cljs.core.first(seq__29494__$1);
var seq__29494__$2 = cljs.core.next(seq__29494__$1);
var entity = first__29495__$1;
var first__29495__$2 = cljs.core.first(seq__29494__$2);
var seq__29494__$3 = cljs.core.next(seq__29494__$2);
var ine = first__29495__$2;
var more = seq__29494__$3;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sql_kw(q),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),q)) && (cljs.core.seq(pre))))?pre:null),honey.sql.sql_kw(k),ine,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refresh","refresh",1947415525),q)) && (cljs.core.seq(pre))))?pre:null),entity], null),more),(cljs.core.truth_(as)?honey.sql.sql_kw(as):null)))], null);
});
honey.sql.format_create_index = (function honey$sql$format_create_index(k,clauses){
var vec__29499 = clauses;
var index_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29499,(0),null);
var vec__29502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29499,(1),null);
var seq__29503 = cljs.core.seq(vec__29502);
var first__29504 = cljs.core.first(seq__29503);
var seq__29503__$1 = cljs.core.next(seq__29503);
var table = first__29504;
var exprs = seq__29503__$1;
var vec__29505 = honey.sql.destructure_ddl_item(index_spec,honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(honey.sql.sql_kw(k)," options"));
var seq__29506 = cljs.core.seq(vec__29505);
var first__29507 = cljs.core.first(seq__29506);
var seq__29506__$1 = cljs.core.next(seq__29506);
var pre = first__29507;
var first__29507__$1 = cljs.core.first(seq__29506__$1);
var seq__29506__$2 = cljs.core.next(seq__29506__$1);
var entity = first__29507__$1;
var first__29507__$2 = cljs.core.first(seq__29506__$2);
var seq__29506__$3 = cljs.core.next(seq__29506__$2);
var ine = first__29507__$2;
var more = seq__29506__$3;
var vec__29508 = (function (){var item = cljs.core.first(exprs);
if(((cljs.core.ident_QMARK_(item)) && (clojure.string.starts_with_QMARK_(honey.sql.util.str.cljs$core$IFn$_invoke$arity$1(honey.sql.kw__GT_sym(item)),"using-")))){
return exprs;
} else {
return cljs.core.cons(null,exprs);
}
})();
var seq__29509 = cljs.core.seq(vec__29508);
var first__29510 = cljs.core.first(seq__29509);
var seq__29509__$1 = cljs.core.next(seq__29509);
var using = first__29510;
var exprs__$1 = seq__29509__$1;
var vec__29511 = honey.sql.format_order_by(null,exprs__$1);
var seq__29512 = cljs.core.seq(vec__29511);
var first__29513 = cljs.core.first(seq__29512);
var seq__29512__$1 = cljs.core.next(seq__29512);
var sql = first__29513;
var params = seq__29512__$1;
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
var vec__29537 = (cljs.core.truth_((function (){var G__29542 = cljs.core.first(coll);
var fexpr__29541 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"if-exists","if-exists",-1964107033),null,new cljs.core.Symbol(null,"if-exists","if-exists",-323575506,null),null], null), null);
return (fexpr__29541.cljs$core$IFn$_invoke$arity$1 ? fexpr__29541.cljs$core$IFn$_invoke$arity$1(G__29542) : fexpr__29541.call(null,G__29542));
})())?coll:cljs.core.cons(null,coll));
var seq__29538 = cljs.core.seq(vec__29537);
var first__29539 = cljs.core.first(seq__29538);
var seq__29538__$1 = cljs.core.next(seq__29538);
var if_exists = first__29539;
var tables__$1 = seq__29538__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(if_exists)?honey.sql.sql_kw(new cljs.core.Keyword(null,"if-exists","if-exists",-1964107033)):null),honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Var(function(){return honey.sql.format_entity;},new cljs.core.Symbol("honey.sql","format-entity","honey.sql/format-entity",-1824420277,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"format-entity","format-entity",618285344,null),"honey/sql.cljc",20,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aliased","aliased",1515092254,null),new cljs.core.Symbol(null,"drop-ns","drop-ns",-80776792,null)], null)], null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aliased","aliased",1515092254,null),new cljs.core.Symbol(null,"drop-ns","drop-ns",-80776792,null)], null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,284,284,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aliased","aliased",1515092254,null),new cljs.core.Symbol(null,"drop-ns","drop-ns",-80776792,null)], null)], null)], null)),"Given a simple SQL entity (a keyword or symbol -- or string),\n  return the equivalent SQL fragment (as a string -- no parameters).\n\n  Handles quoting, splitting at / or ., replacing - with _ etc.",(cljs.core.truth_(honey.sql.format_entity)?honey.sql.format_entity.cljs$lang$test:null)]))),tables__$1)], null),honey.sql.format_ddl_options(opts,context));
});
honey.sql.format_drop_items = (function honey$sql$format_drop_items(k,params){
var vec__29545 = honey.sql.destructure_drop_items(params,"DROP options");
var seq__29546 = cljs.core.seq(vec__29545);
var first__29547 = cljs.core.first(seq__29546);
var seq__29546__$1 = cljs.core.next(seq__29546);
var if_exists = first__29547;
var first__29547__$1 = cljs.core.first(seq__29546__$1);
var seq__29546__$2 = cljs.core.next(seq__29546__$1);
var tables = first__29547__$1;
var more = seq__29546__$2;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sql_kw(k),if_exists,tables], null),more))], null);
});
honey.sql.format_single_column = (function honey$sql$format_single_column(xs){
var vec__29555 = ((cljs.core.ident_QMARK_(cljs.core.first(xs)))?xs:cljs.core.cons(null,xs));
var seq__29556 = cljs.core.seq(vec__29555);
var first__29557 = cljs.core.first(seq__29556);
var seq__29556__$1 = cljs.core.next(seq__29556);
var col = first__29557;
var options = seq__29556__$1;
var vec__29558 = honey.sql.destructure_ddl_item(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,options], null),"column operation");
var seq__29559 = cljs.core.seq(vec__29558);
var first__29560 = cljs.core.first(seq__29559);
var seq__29559__$1 = cljs.core.next(seq__29559);
var pre = first__29560;
var first__29560__$1 = cljs.core.first(seq__29559__$1);
var seq__29559__$2 = cljs.core.next(seq__29559__$1);
var col__$1 = first__29560__$1;
var first__29560__$2 = cljs.core.first(seq__29559__$2);
var seq__29559__$3 = cljs.core.next(seq__29559__$2);
var ine = first__29560__$2;
var options__$1 = seq__29559__$3;
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29573_SHARP_){
return honey.sql.format_add_single_item(k,p1__29573_SHARP_);
})),items)], null);
});
honey.sql.format_rename_item = (function honey$sql$format_rename_item(k,p__29579){
var vec__29580 = p__29579;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29580,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29580,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(honey.sql.sql_kw(k)," ",honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(x)," TO ",honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(y))], null);
});
honey.sql.raw_render = (function honey$sql$raw_render(s){
if(cljs.core.sequential_QMARK_(s)){
var vec__29588 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__29591,s__$1){
var vec__29592 = p__29591;
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29592,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29592,(1),null);
if(cljs.core.sequential_QMARK_(s__$1)){
var vec__29595 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(s__$1) : honey.sql.format_expr.call(null,s__$1));
var seq__29596 = cljs.core.seq(vec__29595);
var first__29597 = cljs.core.first(seq__29596);
var seq__29596__$1 = cljs.core.next(seq__29596);
var sql = first__29597;
var params_SINGLEQUOTE_ = seq__29596__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sqls,sql),cljs.core.into.cljs$core$IFn$_invoke$arity$2(params,params_SINGLEQUOTE_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sqls,s__$1),params], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),s);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29588,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29588,(1),null);
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
if(cljs.core.truth_((function (){var G__29613 = cljs.core.first(coll);
var fexpr__29612 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"if-exists","if-exists",-1964107033),null,new cljs.core.Symbol(null,"if-exists","if-exists",-323575506,null),null], null), null);
return (fexpr__29612.cljs$core$IFn$_invoke$arity$1 ? fexpr__29612.cljs$core$IFn$_invoke$arity$1(G__29613) : fexpr__29612.call(null,G__29613));
})())){
var G__30594 = true;
var G__30595 = cljs.core.rest(coll);
var G__30596 = sqls;
if_exists = G__30594;
coll = G__30595;
sqls = G__30596;
continue;
} else {
var G__30597 = false;
var G__30598 = cljs.core.rest(coll);
var G__30599 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sqls,(function (){var G__29617 = honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coll));
if(if_exists){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(new cljs.core.Keyword(null,"if-exists","if-exists",-1964107033))," ",G__29617);
} else {
return G__29617;
}
})());
if_exists = G__30597;
coll = G__30598;
sqls = G__30599;
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29621_SHARP_){
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",p1__29621_SHARP_);
})),tables)], null);
});
honey.sql.format_interval = (function honey$sql$format_interval(k,args){
if(cljs.core.sequential_QMARK_(args)){
var vec__29623 = args;
var seq__29624 = cljs.core.seq(vec__29623);
var first__29625 = cljs.core.first(seq__29624);
var seq__29624__$1 = cljs.core.next(seq__29624);
var n = first__29625;
var units = seq__29624__$1;
if(cljs.core.seq(units)){
var vec__29626 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(n) : honey.sql.format_expr.call(null,n));
var seq__29627 = cljs.core.seq(vec__29626);
var first__29628 = cljs.core.first(seq__29627);
var seq__29627__$1 = cljs.core.next(seq__29627);
var sql = first__29628;
var params = seq__29627__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(honey.sql.sql_kw(k)," ",sql," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(honey.sql.sql_kw),units))], null),params);
} else {
var _STAR_options_STAR__orig_val__29630 = honey.sql._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__29631 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(honey.sql._STAR_options_STAR_,new cljs.core.Keyword(null,"inline","inline",1399884222),true);
(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__temp_val__29631);

try{var vec__29634 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(n) : honey.sql.format_expr.call(null,n));
var seq__29635 = cljs.core.seq(vec__29634);
var first__29636 = cljs.core.first(seq__29635);
var seq__29635__$1 = cljs.core.next(seq__29635);
var sql = first__29636;
var params = seq__29635__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",sql)], null),params);
}finally {(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__orig_val__29630);
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
var args__$1 = ((cljs.core.every_QMARK_(cljs.core.map_QMARK_,args))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29637_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lift","lift",903632035),p1__29637_SHARP_],null));
}),args):args);
var vec__29638 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(args__$1);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29638,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29638,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls))], null),params);
} else {
var G__29643 = k;
var G__29644 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null);
return (honey.sql.format_records.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_records.cljs$core$IFn$_invoke$arity$2(G__29643,G__29644) : honey.sql.format_records.call(null,G__29643,G__29644));
}
});
honey.sql.format_setting = (function honey$sql$format_setting(k,args){
if(((cljs.core.sequential_QMARK_(args)) && (cljs.core.ident_QMARK_(cljs.core.first(args))))){
var G__29664 = k;
var G__29665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null);
return (honey.sql.format_setting.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_setting.cljs$core$IFn$_invoke$arity$2(G__29664,G__29665) : honey.sql.format_setting.call(null,G__29664,G__29665));
} else {
var vec__29667 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (arg){
var vec__29670 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.ident_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((clojure.string.ends_with_QMARK_(cljs.core.name(x),"-time"))?honey.sql.format_fn_name(x):honey.sql.sql_kw(x))], null);
} else {
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(x) : honey.sql.format_expr.call(null,x));
}
}),arg));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29670,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29670,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(" ",sqls)], null),params);
}),args));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29667,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29667,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls))], null),params);
}
});
/**
 * Given a formatter function, performs a pre-flight check that there is
 *   a non-empty where clause if at least basic checking is enabled.
 */
honey.sql.check_where = (function honey$sql$check_where(formatter){
return (function (k,xs){
var map__29703_30603 = honey.sql._STAR_options_STAR_;
var map__29703_30604__$1 = cljs.core.__destructure_map(map__29703_30603);
var checking_30605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29703_30604__$1,new cljs.core.Keyword(null,"checking","checking",1748720818));
var dsl_30606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29703_30604__$1,new cljs.core.Keyword(null,"dsl","dsl",397853177));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),checking_30605)){
} else {
if(((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(dsl_30606))) && (cljs.core.empty_QMARK_((function (){var fexpr__29704 = new cljs.core.Symbol(null,"where","where",-404264438,null);
return (fexpr__29704.cljs$core$IFn$_invoke$arity$1 ? fexpr__29704.cljs$core$IFn$_invoke$arity$1(dsl_30606) : fexpr__29704.call(null,dsl_30606));
})())))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(honey.sql.sql_kw(k)," without a non-empty WHERE clause is dangerous"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clause","clause",1479668060),k,new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(dsl_30606)], null));
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
var vec__29713 = (function (){var G__29716 = x;
var G__29717 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2(G__29716,G__29717) : honey.sql.format_dsl.call(null,G__29716,G__29717));
})();
var seq__29714 = cljs.core.seq(vec__29713);
var first__29715 = cljs.core.first(seq__29714);
var seq__29714__$1 = cljs.core.next(seq__29714);
var sql = first__29715;
var params = seq__29714__$1;
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
var vec__29752 = honey.sql.format_on_expr(new cljs.core.Keyword(null,"offset","offset",296498311),x);
var seq__29753 = cljs.core.seq(vec__29752);
var first__29754 = cljs.core.first(seq__29753);
var seq__29753__$1 = cljs.core.next(seq__29753);
var sql = first__29754;
var params = seq__29753__$1;
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
var vec__29785 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(xs) : honey.sql.format_expr.call(null,xs));
var seq__29786 = cljs.core.seq(vec__29785);
var first__29787 = cljs.core.first(seq__29786);
var seq__29786__$1 = cljs.core.next(seq__29786);
var sql = first__29787;
var params = seq__29786__$1;
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
var vec__29806 = honey.sql.format_on_expr(which,x);
var seq__29807 = cljs.core.seq(vec__29806);
var first__29808 = cljs.core.first(seq__29807);
var seq__29807__$1 = cljs.core.next(seq__29807);
var sql = first__29808;
var params = seq__29807__$1;
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
var G__29810 = arguments.length;
switch (G__29810) {
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

(honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2 = (function (statement_map,p__29812){
var map__29813 = p__29812;
var map__29813__$1 = cljs.core.__destructure_map(map__29813);
var aliased = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29813__$1,new cljs.core.Keyword(null,"aliased","aliased",-125439273));
var nested = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29813__$1,new cljs.core.Keyword(null,"nested","nested",18943849));
var pretty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29813__$1,new cljs.core.Keyword(null,"pretty","pretty",-1916372486));
var _STAR_options_STAR__orig_val__29815 = honey.sql._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__29816 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(honey.sql._STAR_options_STAR_,new cljs.core.Keyword(null,"dsl","dsl",397853177),statement_map);
(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__temp_val__29816);

try{var vec__29817 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__29820,k){
var vec__29821 = p__29820;
var sql = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29821,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29821,(1),null);
var leftover = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29821,(2),null);
var result = vec__29821;
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
var formatter = (function (){var G__29827 = cljs.core.deref(honey.sql.clause_format);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__29827) : k.call(null,G__29827));
})();
var vec__29824 = (formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(k,xs) : formatter.call(null,k,xs));
var seq__29825 = cljs.core.seq(vec__29824);
var first__29826 = cljs.core.first(seq__29825);
var seq__29825__$1 = cljs.core.next(seq__29825);
var sql_SINGLEQUOTE_ = first__29826;
var params_SINGLEQUOTE_ = seq__29825__$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sql,sql_SINGLEQUOTE_),((params_SINGLEQUOTE_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(params,params_SINGLEQUOTE_):params),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(leftover,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([honey.sql.kw__GT_sym(k)], 0))], null);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,statement_map], null),new cljs.core.Keyword(null,"clause-order","clause-order",1290793904).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_options_STAR_));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29817,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29817,(1),null);
var leftover = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29817,(2),null);
if(cljs.core.seq(leftover)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$5("These SQL clauses are unknown or have nil values: ",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(leftover))," (perhaps you need [:lift {",cljs.core.first(cljs.core.keys(leftover))," ...}] here?)"),leftover);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29828 = honey.sql.util.join.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(pretty)?"\n":" "),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_),sqls);
var G__29828__$1 = (cljs.core.truth_(pretty)?(function (){var s = G__29828;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("\n",s,"\n");
})():G__29828);
if(cljs.core.truth_((function (){var and__5023__auto__ = nested;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(aliased);
} else {
return and__5023__auto__;
}
})())){
var s = G__29828__$1;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",s,")");
} else {
return G__29828__$1;
}
})()], null),params);
}
}finally {(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__orig_val__29815);
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
honey.sql.format_in = (function honey$sql$format_in(in$,p__29833){
var vec__29834 = p__29833;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29834,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29834,(1),null);
var map__29837 = honey.sql._STAR_options_STAR_;
var map__29837__$1 = cljs.core.__destructure_map(map__29837);
var caching = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29837__$1,new cljs.core.Keyword(null,"caching","caching",-858598686));
var checking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29837__$1,new cljs.core.Keyword(null,"checking","checking",1748720818));
var numbered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29837__$1,new cljs.core.Keyword(null,"numbered","numbered",-2119856269));
var vec__29838 = (function (){var G__29848 = x;
var G__29849 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__29848,G__29849) : honey.sql.format_expr.call(null,G__29848,G__29849));
})();
var seq__29839 = cljs.core.seq(vec__29838);
var first__29840 = cljs.core.first(seq__29839);
var seq__29839__$1 = cljs.core.next(seq__29839);
var sql_x = first__29840;
var params_x = seq__29839__$1;
var vec__29841 = (function (){var G__29850 = y;
var G__29851 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__29850,G__29851) : honey.sql.format_expr.call(null,G__29850,G__29851));
})();
var seq__29842 = cljs.core.seq(vec__29841);
var first__29843 = cljs.core.first(seq__29842);
var seq__29842__$1 = cljs.core.next(seq__29842);
var sql_y = first__29843;
var params_y = seq__29842__$1;
var vec__29844 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29832_SHARP_){
return honey.sql.unwrap(p1__29832_SHARP_,cljs.core.PersistentArrayMap.EMPTY);
}),params_y);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29844,(0),null);
var values = vec__29844;
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
var vs = (function (){var iter__5503__auto__ = (function honey$sql$format_in_$_iter__29852(s__29853){
return (new cljs.core.LazySeq(null,(function (){
var s__29853__$1 = s__29853;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__29853__$1);
if(temp__5825__auto__){
var s__29853__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29853__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__29853__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__29855 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__29854 = (0);
while(true){
if((i__29854 < size__5502__auto__)){
var v = cljs.core._nth(c__5501__auto__,i__29854);
cljs.core.chunk_append(b__29855,honey.sql.__GT_numbered(v));

var G__30657 = (i__29854 + (1));
i__29854 = G__30657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29855),honey$sql$format_in_$_iter__29852(cljs.core.chunk_rest(s__29853__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29855),null);
}
} else {
var v = cljs.core.first(s__29853__$2);
return cljs.core.cons(honey.sql.__GT_numbered(v),honey$sql$format_in_$_iter__29852(cljs.core.rest(s__29853__$2)));
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(honey.sql.sql_kw(k),((cljs.core.seq(xs))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29860_SHARP_){
return honey.sql.format_simple_expr(p1__29860_SHARP_,"column/index operation");
})),xs),")"):null))], null);
});
honey.sql.function_1 = (function honey$sql$function_1(k,xs){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(honey.sql.sql_kw(k),((cljs.core.seq(xs))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(" ",honey.sql.format_simple_expr(cljs.core.first(xs),"column/index operation"),(function (){var temp__5825__auto__ = cljs.core.next(xs);
if(temp__5825__auto__){
var args = temp__5825__auto__;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29861_SHARP_){
return honey.sql.format_simple_expr(p1__29861_SHARP_,"column/index operation");
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
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29862_SHARP_){
return honey.sql.format_simple_expr(p1__29862_SHARP_,"column/index operation");
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
var vec__29863 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__29866,p__29867){
var vec__29868 = p__29866;
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29868,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29868,(1),null);
var vec__29871 = p__29867;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29871,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29871,(1),null);
var vec__29875 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(e) : honey.sql.format_expr.call(null,e));
var seq__29876 = cljs.core.seq(vec__29875);
var first__29877 = cljs.core.first(seq__29876);
var seq__29876__$1 = cljs.core.next(seq__29876);
var sql_e = first__29877;
var params_e = seq__29876__$1;
var vec__29878 = honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null));
var seq__29879 = cljs.core.seq(vec__29878);
var first__29880 = cljs.core.first(seq__29879);
var seq__29879__$1 = cljs.core.next(seq__29879);
var sql_c = first__29880;
var params_c = seq__29879__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sqls,honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(sql_e," ",honey.sql.sql_kw(k)," ",sql_c)),honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(params,params_e,params_c)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),pairs));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29863,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29863,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls)], null),params);
});
/**
 * For both :case and :case-expr.
 */
honey.sql.case_clauses = (function honey$sql$case_clauses(k,clauses){
var case_expr_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"case-expr","case-expr",-1006930349),k);
var vec__29889 = ((case_expr_QMARK_)?(function (){var G__29895 = cljs.core.first(clauses);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(G__29895) : honey.sql.format_expr.call(null,G__29895));
})():null);
var seq__29890 = cljs.core.seq(vec__29889);
var first__29891 = cljs.core.first(seq__29890);
var seq__29890__$1 = cljs.core.next(seq__29890);
var sqlx = first__29891;
var paramsx = seq__29890__$1;
var vec__29892 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__29896,p__29897){
var vec__29898 = p__29896;
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29898,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29898,(1),null);
var vec__29901 = p__29897;
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29901,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29901,(1),null);
var vec__29904 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),condition))?null:(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(condition) : honey.sql.format_expr.call(null,condition)));
var seq__29905 = cljs.core.seq(vec__29904);
var first__29906 = cljs.core.first(seq__29905);
var seq__29905__$1 = cljs.core.next(seq__29905);
var sqlc = first__29906;
var paramsc = seq__29905__$1;
var vec__29907 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(value) : honey.sql.format_expr.call(null,value));
var seq__29908 = cljs.core.seq(vec__29907);
var first__29909 = cljs.core.first(seq__29908);
var seq__29908__$1 = cljs.core.next(seq__29908);
var sqlv = first__29909;
var paramsv = seq__29908__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),condition)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"else","else",132154381,null),condition))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sqls,honey.sql.sql_kw(new cljs.core.Keyword(null,"else","else",-1508377146)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sqlv], 0)):cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sqls,honey.sql.sql_kw(new cljs.core.Keyword(null,"when","when",-576417306)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sqlc,honey.sql.sql_kw(new cljs.core.Keyword(null,"then","then",460598070)),sqlv], 0))),honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(params,paramsc,paramsv)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),((case_expr_QMARK_)?cljs.core.rest(clauses):clauses)));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29892,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29892,(1),null);
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$variadic(honey.sql.sql_kw(new cljs.core.Keyword(null,"case","case",1143702196))," ",((case_expr_QMARK_)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(sqlx," "):null),honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(" ",sqls)," ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([honey.sql.sql_kw(new cljs.core.Keyword(null,"end","end",-268185958))], 0))], null),paramsx,params);
});
/**
 * For both :between and :not-between
 */
honey.sql.between_fn = (function honey$sql$between_fn(k,p__29910){
var vec__29912 = p__29910;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29912,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29912,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29912,(2),null);
var vec__29918 = (function (){var G__29927 = x;
var G__29928 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__29927,G__29928) : honey.sql.format_expr.call(null,G__29927,G__29928));
})();
var seq__29919 = cljs.core.seq(vec__29918);
var first__29920 = cljs.core.first(seq__29919);
var seq__29919__$1 = cljs.core.next(seq__29919);
var sql_x = first__29920;
var params_x = seq__29919__$1;
var vec__29921 = (function (){var G__29929 = a;
var G__29930 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__29929,G__29930) : honey.sql.format_expr.call(null,G__29929,G__29930));
})();
var seq__29922 = cljs.core.seq(vec__29921);
var first__29923 = cljs.core.first(seq__29922);
var seq__29922__$1 = cljs.core.next(seq__29922);
var sql_a = first__29923;
var params_a = seq__29922__$1;
var vec__29924 = (function (){var G__29931 = b;
var G__29932 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__29931,G__29932) : honey.sql.format_expr.call(null,G__29931,G__29932));
})();
var seq__29925 = cljs.core.seq(vec__29924);
var first__29926 = cljs.core.first(seq__29925);
var seq__29925__$1 = cljs.core.next(seq__29925);
var sql_b = first__29926;
var params_b = seq__29925__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$variadic(sql_x," ",honey.sql.sql_kw(k)," ",sql_a,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" AND ",sql_b], 0))], null),params_x,params_a,params_b);
});
honey.sql.object_record_literal = (function honey$sql$object_record_literal(k,p__29936){
var vec__29937 = p__29936;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29937,(0),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(k)," ",honey.sql.inline_map.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",")"], 0)))], null);
});
/**
 * [:get-in expr key-or-index1 key-or-index2 ...]
 */
honey.sql.get_in_navigation = (function honey$sql$get_in_navigation(wrap,p__29943){
var vec__29944 = p__29943;
var seq__29945 = cljs.core.seq(vec__29944);
var first__29946 = cljs.core.first(seq__29945);
var seq__29945__$1 = cljs.core.next(seq__29945);
var expr = first__29946;
var kix = seq__29945__$1;
var vec__29947 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(expr) : honey.sql.format_expr.call(null,expr));
var seq__29948 = cljs.core.seq(vec__29947);
var first__29949 = cljs.core.first(seq__29948);
var seq__29948__$1 = cljs.core.next(seq__29948);
var sql = first__29949;
var params = seq__29948__$1;
var vec__29950 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29942_SHARP_){
if(typeof p1__29942_SHARP_ === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("[",p1__29942_SHARP_,"]")], null);
} else {
if(typeof p1__29942_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("[",honey.sql.sqlize_value(p1__29942_SHARP_),"]")], null);
} else {
if(cljs.core.ident_QMARK_(p1__29942_SHARP_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(".",honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(p1__29942_SHARP_))], null);
} else {
var vec__29953 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(p1__29942_SHARP_) : honey.sql.format_expr.call(null,p1__29942_SHARP_));
var seq__29954 = cljs.core.seq(vec__29953);
var first__29955 = cljs.core.first(seq__29954);
var seq__29954__$1 = cljs.core.next(seq__29954);
var sql_SINGLEQUOTE_ = first__29955;
var params_SINGLEQUOTE_ = seq__29954__$1;
return cljs.core.cons(honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("[",sql_SINGLEQUOTE_,"]"),params_SINGLEQUOTE_);

}
}
}
}),kix));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29950,(0),null);
var params_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29950,(1),null);
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(wrap)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",sql,")"):sql),honey.sql.util.join.cljs$core$IFn$_invoke$arity$2("",sqls))], null),params,params_SINGLEQUOTE_);
});
honey.sql.ignore_respect_nulls = (function honey$sql$ignore_respect_nulls(k,p__29957){
var vec__29958 = p__29957;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29958,(0),null);
var vec__29963 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(x) : honey.sql.format_expr.call(null,x));
var seq__29964 = cljs.core.seq(vec__29963);
var first__29965 = cljs.core.first(seq__29964);
var seq__29964__$1 = cljs.core.next(seq__29964);
var sql = first__29965;
var params = seq__29964__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql," ",honey.sql.sql_kw(k))], null),params);
});
honey.sql.dot_navigation = (function honey$sql$dot_navigation(sep,p__29970){
var vec__29972 = p__29970;
var seq__29973 = cljs.core.seq(vec__29972);
var first__29974 = cljs.core.first(seq__29973);
var seq__29973__$1 = cljs.core.next(seq__29973);
var expr = first__29974;
var first__29974__$1 = cljs.core.first(seq__29973__$1);
var seq__29973__$2 = cljs.core.next(seq__29973__$1);
var col = first__29974__$1;
var subcols = seq__29973__$2;
var vec__29976 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(expr) : honey.sql.format_expr.call(null,expr));
var seq__29977 = cljs.core.seq(vec__29976);
var first__29978 = cljs.core.first(seq__29977);
var seq__29977__$1 = cljs.core.next(seq__29977);
var sql = first__29978;
var params = seq__29977__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(sql,sep,honey.sql.format_simple_expr(col,"dot navigation"),((cljs.core.seq(subcols))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(".",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29968_SHARP_){
return honey.sql.format_simple_expr(p1__29968_SHARP_,"dot navigation");
}),subcols))):null))], null),params);
});
honey.sql.format_fn_call_expr = (function honey$sql$format_fn_call_expr(f,expr){
var args = cljs.core.rest(expr);
var vec__29979 = ((cljs.core.sequential_QMARK_(f))?(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(f) : honey.sql.format_expr.call(null,f)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sql_kw(f)], null));
var seq__29980 = cljs.core.seq(vec__29979);
var first__29981 = cljs.core.first(seq__29980);
var seq__29980__$1 = cljs.core.next(seq__29980);
var f_sql = first__29981;
var f_params = seq__29980__$1;
var vec__29982 = honey.sql.format_interspersed_expr_list.cljs$core$IFn$_invoke$arity$1(args);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29982,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29982,(1),null);
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(f_sql,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args))) && (((cljs.core.map_QMARK_(cljs.core.first(args))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(sqls)))))))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.first(sqls)):honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls),")")))], null),f_params,params);
});
honey.sql.special_syntax = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"constraint","constraint",1725147424),new cljs.core.Keyword(null,"escape","escape",-991601952),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"unique","unique",329397282),new cljs.core.Keyword(null,"lift","lift",903632035),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"composite","composite",-257118970),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword("bigquery","array","bigquery/array",1718523718),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,".:.",".:.",-872581656),new cljs.core.Keyword(null,"cast","cast",-1761029143),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"not","not",-595976884),new cljs.core.Keyword(null,"references","references",882562509),new cljs.core.Keyword(null,"array","array",-2080713842),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Keyword(null,"distinct","distinct",-1788879121),new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,"case-expr","case-expr",-1006930349),new cljs.core.Keyword("bigquery","struct","bigquery/struct",-596080428),new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"respect-nulls","respect-nulls",1325870772),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"record","record",-779106859),new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.Keyword(null,"foreign-key","foreign-key",124300407),new cljs.core.Keyword(null,"ignore-nulls","ignore-nulls",838890039),new cljs.core.Keyword(null,"get-in","get-in",688791704),new cljs.core.Keyword(null,"interval","interval",1708495417),new cljs.core.Keyword(null,"within-group","within-group",-1794793927),new cljs.core.Keyword(null,"over","over",192553051),new cljs.core.Keyword(null,"not-between","not-between",-979594021),new cljs.core.Keyword(null,"xtql","xtql",948290267),new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"primary-key","primary-key",1422512605),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"at-time-zone","at-time-zone",1251199038),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"lateral","lateral",2094286431)],[new cljs.core.Var(function(){return honey.sql.function_1;},new cljs.core.Symbol("honey.sql","function-1","honey.sql/function-1",-375233619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"function-1","function-1",890872902,null),"honey/sql.cljc",18,1,1887,1887,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.function_1)?honey.sql.function_1.cljs$lang$test:null)])),(function (_,p__29992){
var vec__29993 = p__29992;
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29993,(0),null);
var escape_chars = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29993,(1),null);
var vec__29996 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(pattern) : honey.sql.format_expr.call(null,pattern));
var seq__29997 = cljs.core.seq(vec__29996);
var first__29998 = cljs.core.first(seq__29997);
var seq__29997__$1 = cljs.core.next(seq__29997);
var sql_p = first__29998;
var params_p = seq__29997__$1;
var vec__29999 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(escape_chars) : honey.sql.format_expr.call(null,escape_chars));
var seq__30000 = cljs.core.seq(vec__29999);
var first__30001 = cljs.core.first(seq__30000);
var seq__30000__$1 = cljs.core.next(seq__30000);
var sql_e = first__30001;
var params_e = seq__30000__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(sql_p," ",honey.sql.sql_kw(new cljs.core.Keyword(null,"escape","escape",-991601952))," ",sql_e)], null),params_p,params_e);
}),(function (_,p__30002){
var vec__30003 = p__30002;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30003,(0),null);
var vec__30006 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(x) : honey.sql.format_expr.call(null,x));
var seq__30007 = cljs.core.seq(vec__30006);
var first__30008 = cljs.core.first(seq__30007);
var seq__30007__$1 = cljs.core.next(seq__30007);
var sql = first__30008;
var params = seq__30007__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",sql,")")], null),params);
}),new cljs.core.Var(function(){return honey.sql.function_1_opt;},new cljs.core.Symbol("honey.sql","function-1-opt","honey.sql/function-1-opt",1209651237,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"function-1-opt","function-1-opt",-1283255102,null),"honey/sql.cljc",22,1,1899,1899,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.function_1_opt)?honey.sql.function_1_opt.cljs$lang$test:null)])),(function (_,p__30009){
var vec__30010 = p__30009;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30010,(0),null);
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
}),new cljs.core.Var(function(){return honey.sql.function_1_opt;},new cljs.core.Symbol("honey.sql","function-1-opt","honey.sql/function-1-opt",1209651237,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"function-1-opt","function-1-opt",-1283255102,null),"honey/sql.cljc",22,1,1899,1899,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.function_1_opt)?honey.sql.function_1_opt.cljs$lang$test:null)])),(function (_,p__30015){
var vec__30017 = p__30015;
var seq__30018 = cljs.core.seq(vec__30017);
var args = seq__30018;
var vec__30021 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(args);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30021,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30021,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls),")")], null),params);
}),(function (_,p__30025){
var vec__30027 = p__30025;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30027,(0),null);
var expr = vec__30027;
return honey.sql.format_fn_call_expr(f,expr);
}),(function (_,spec){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("ARRAY<",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(honey.sql.sql_kw),spec),">")], null);
}),(function (_,p__30030){
var vec__30031 = p__30030;
var seq__30032 = cljs.core.seq(vec__30031);
var xs = seq__30032;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(xs))){
return honey.sql.raw_render(cljs.core.first(xs));
} else {
return honey.sql.raw_render(xs);
}
}),new cljs.core.Var(function(){return honey.sql.function_1;},new cljs.core.Symbol("honey.sql","function-1","honey.sql/function-1",-375233619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"function-1","function-1",890872902,null),"honey/sql.cljc",18,1,1887,1887,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.function_1)?honey.sql.function_1.cljs$lang$test:null)])),(function (_,data){
return honey.sql.dot_navigation(":",data);
}),(function (_,p__30035){
var vec__30036 = p__30035;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30036,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30036,(1),null);
var vec__30040 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(x) : honey.sql.format_expr.call(null,x));
var seq__30041 = cljs.core.seq(vec__30040);
var first__30042 = cljs.core.first(seq__30041);
var seq__30041__$1 = cljs.core.next(seq__30041);
var sql = first__30042;
var params = seq__30041__$1;
var vec__30043 = ((cljs.core.ident_QMARK_(type))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.sql_kw(type)], null):(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(type) : honey.sql.format_expr.call(null,type)));
var seq__30044 = cljs.core.seq(vec__30043);
var first__30045 = cljs.core.first(seq__30044);
var seq__30044__$1 = cljs.core.next(seq__30044);
var sql_SINGLEQUOTE_ = first__30045;
var params_SINGLEQUOTE_ = seq__30044__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$5("CAST(",sql," AS ",sql_SINGLEQUOTE_,")")], null),params,params_SINGLEQUOTE_);
}),new cljs.core.Var(function(){return honey.sql.between_fn;},new cljs.core.Symbol("honey.sql","between-fn","honey.sql/between-fn",1741524863,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"between-fn","between-fn",-763672350,null),"honey/sql.cljc",18,1,1949,1949,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null)], null)),"For both :between and :not-between",(cljs.core.truth_(honey.sql.between_fn)?honey.sql.between_fn.cljs$lang$test:null)])),(function (_,p__30046){
var vec__30047 = p__30046;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30047,(0),null);
var vec__30050 = (function (){var G__30053 = x;
var G__30054 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__30053,G__30054) : honey.sql.format_expr.call(null,G__30053,G__30054));
})();
var seq__30051 = cljs.core.seq(vec__30050);
var first__30052 = cljs.core.first(seq__30051);
var seq__30051__$1 = cljs.core.next(seq__30051);
var sql = first__30052;
var params = seq__30051__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("NOT ",sql)], null),params);
}),new cljs.core.Var(function(){return honey.sql.function_1;},new cljs.core.Symbol("honey.sql","function-1","honey.sql/function-1",-375233619,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"function-1","function-1",890872902,null),"honey/sql.cljc",18,1,1887,1887,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.function_1)?honey.sql.function_1.cljs$lang$test:null)])),(function (_,p__30059){
var vec__30060 = p__30059;
var arr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30060,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30060,(1),null);
if(cljs.core.map_QMARK_(arr)){
var vec__30064 = honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(arr);
var seq__30065 = cljs.core.seq(vec__30064);
var first__30066 = cljs.core.first(seq__30065);
var seq__30065__$1 = cljs.core.next(seq__30065);
var sql = first__30066;
var params = seq__30065__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("ARRAY(",sql,")")], null),params);
} else {
var vec__30068 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(arr);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30068,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30068,(1),null);
var type_str = (cljs.core.truth_(type)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("::",honey.sql.sql_kw(type),"[]"):null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$4("ARRAY[",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls),"]",type_str)], null),params);
}
}),(function (_,p__30075){
var vec__30076 = p__30075;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30076,(0),null);
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
}),(function (_,p__30079){
var vec__30080 = p__30079;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30080,(0),null);
var vec__30083 = (function (){var G__30086 = x;
var G__30087 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__30086,G__30087) : honey.sql.format_expr.call(null,G__30086,G__30087));
})();
var seq__30084 = cljs.core.seq(vec__30083);
var first__30085 = cljs.core.first(seq__30084);
var seq__30084__$1 = cljs.core.next(seq__30084);
var sql = first__30085;
var params = seq__30084__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("DISTINCT ",sql)], null),params);
}),(function (_,p__30089){
var vec__30090 = p__30089;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30090,(0),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.format_entity.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aliased","aliased",-125439273),true], null))], null);
}),honey.sql.expr_clause_pairs,(function (_,data){
return honey.sql.dot_navigation(".",data);
}),new cljs.core.Var(function(){return honey.sql.case_clauses;},new cljs.core.Symbol("honey.sql","case-clauses","honey.sql/case-clauses",-228279509,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"case-clauses","case-clauses",233734030,null),"honey/sql.cljc",20,1,1925,1925,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null)),"For both :case and :case-expr.",(cljs.core.truth_(honey.sql.case_clauses)?honey.sql.case_clauses.cljs$lang$test:null)])),(function (_,spec){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("STRUCT<",honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(honey.sql.format_single_column),spec),">")], null);
}),new cljs.core.Var(function(){return honey.sql.case_clauses;},new cljs.core.Symbol("honey.sql","case-clauses","honey.sql/case-clauses",-228279509,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"case-clauses","case-clauses",233734030,null),"honey/sql.cljc",20,1,1925,1925,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null)),"For both :case and :case-expr.",(cljs.core.truth_(honey.sql.case_clauses)?honey.sql.case_clauses.cljs$lang$test:null)])),honey.sql.ignore_respect_nulls,(function (_,data){
return honey.sql.get_in_navigation(false,data);
}),new cljs.core.Var(function(){return honey.sql.object_record_literal;},new cljs.core.Symbol("honey.sql","object-record-literal","honey.sql/object-record-literal",2085315930,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"object-record-literal","object-record-literal",-1044307713,null),"honey/sql.cljc",29,1,1958,1958,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null)),null,(cljs.core.truth_(honey.sql.object_record_literal)?honey.sql.object_record_literal.cljs$lang$test:null)])),(function (k,p__30101){
var vec__30103 = p__30101;
var seq__30104 = cljs.core.seq(vec__30103);
var first__30105 = cljs.core.first(seq__30104);
var seq__30104__$1 = cljs.core.next(seq__30104);
var e = first__30105;
var qs = seq__30104__$1;
var vec__30109 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(e) : honey.sql.format_expr.call(null,e));
var seq__30110 = cljs.core.seq(vec__30109);
var first__30111 = cljs.core.first(seq__30110);
var seq__30110__$1 = cljs.core.next(seq__30110);
var sql_e = first__30111;
var params_e = seq__30110__$1;
var vec__30112 = honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([k,qs]));
var seq__30113 = cljs.core.seq(vec__30112);
var first__30114 = cljs.core.first(seq__30113);
var seq__30113__$1 = cljs.core.next(seq__30113);
var sql_q = first__30114;
var params_q = seq__30113__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql_e," ",sql_q)], null),params_e,params_q);
}),new cljs.core.Var(function(){return honey.sql.function_0;},new cljs.core.Symbol("honey.sql","function-0","honey.sql/function-0",1871273967,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"function-0","function-0",-617407678,null),"honey/sql.cljc",18,1,1878,1878,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.function_0)?honey.sql.function_0.cljs$lang$test:null)])),honey.sql.ignore_respect_nulls,(function (_,data){
return honey.sql.get_in_navigation(true,data);
}),honey.sql.format_interval,honey.sql.expr_clause_pairs,(function (_,p__30121){
var vec__30122 = p__30121;
var seq__30123 = cljs.core.seq(vec__30122);
var args = seq__30123;
var vec__30125 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__30132,p__30133){
var vec__30134 = p__30132;
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30134,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30134,(1),null);
var vec__30137 = p__30133;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30137,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30137,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30137,(2),null);
var vec__30141 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(e) : honey.sql.format_expr.call(null,e));
var seq__30142 = cljs.core.seq(vec__30141);
var first__30143 = cljs.core.first(seq__30142);
var seq__30142__$1 = cljs.core.next(seq__30142);
var sql_e = first__30143;
var params_e = seq__30142__$1;
var vec__30144 = (((((p == null)) || (cljs.core.map_QMARK_(p))))?honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(p)], null));
var seq__30145 = cljs.core.seq(vec__30144);
var first__30146 = cljs.core.first(seq__30145);
var seq__30145__$1 = cljs.core.next(seq__30145);
var sql_p = first__30146;
var params_p = seq__30145__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sqls,honey.sql.util.str.cljs$core$IFn$_invoke$arity$4(sql_e," OVER ",sql_p,(cljs.core.truth_(a)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2(" AS ",honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(a)):null))),honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3(params,params_e,params_p)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),args);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30125,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30125,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(", ",sqls)], null),params);
}),new cljs.core.Var(function(){return honey.sql.between_fn;},new cljs.core.Symbol("honey.sql","between-fn","honey.sql/between-fn",1741524863,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"between-fn","between-fn",-763672350,null),"honey/sql.cljc",18,1,1949,1949,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null)], null)),"For both :between and :not-between",(cljs.core.truth_(honey.sql.between_fn)?honey.sql.between_fn.cljs$lang$test:null)])),(function (_,p__30162){
var vec__30165 = p__30162;
var seq__30166 = cljs.core.seq(vec__30165);
var first__30167 = cljs.core.first(seq__30166);
var seq__30166__$1 = cljs.core.next(seq__30166);
var x = first__30167;
var args = seq__30166__$1;
var arg_count = ((((cljs.core.sequential_QMARK_(x)) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null], null), null),cljs.core.first(x))) && (cljs.core.sequential_QMARK_(cljs.core.second(x)))))))?cljs.core.count(cljs.core.second(x)):null);
var base_xtql = honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("$$ ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))," $$");
var arg_tail = (cljs.core.truth_(arg_count)?honey.sql.util.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(arg_count,", ?")):null);
var xtql = honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("XTQL ",(cljs.core.truth_(arg_tail)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$4("(",base_xtql,arg_tail,")"):base_xtql));
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"dsl","dsl",397853177).cljs$core$IFn$_invoke$arity$1(honey.sql._STAR_options_STAR_))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",xtql,")"):xtql)], null),args);
}),(function (_,p__30171){
var vec__30172 = p__30171;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30172,(0),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.format_entity.cljs$core$IFn$_invoke$arity$1(e)], null);
}),new cljs.core.Var(function(){return honey.sql.function_0;},new cljs.core.Symbol("honey.sql","function-0","honey.sql/function-0",1871273967,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"function-0","function-0",-617407678,null),"honey/sql.cljc",18,1,1878,1878,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),null,(cljs.core.truth_(honey.sql.function_0)?honey.sql.function_0.cljs$lang$test:null)])),new cljs.core.Var(function(){return honey.sql.object_record_literal;},new cljs.core.Symbol("honey.sql","object-record-literal","honey.sql/object-record-literal",2085315930,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"honey.sql","honey.sql",335271223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Primary API for HoneySQL 2.x.\n\n  This includes the `format` function -- the primary entry point -- as well\n  as several public formatters that are intended to help users extend the\n  supported syntax.\n\n  In addition, functions to extend HoneySQL are also provided here:\n  * `clause-order` -- returns the current clause priority ordering;\n        intended as aid when registering new clauses.\n  * `format-dsl` -- intended to format SQL statements; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-entity` -- intended to format SQL entities; returns a string\n        representing the SQL entity.\n  * `format-expr` -- intended to format SQL expressions; returns a vector\n        containing a SQL string followed by parameter values.\n  * `format-expr-list` -- intended to format a list of SQL expressions;\n        returns a pair comprising: a sequence of SQL expressions (to be\n        join with a delimiter) and a sequence of parameter values.\n  * `register-clause!` -- register a new statement/clause formatter.\n  * `register-fn!` -- register a new function call (or special syntax)\n        formatter.\n  * `register-op!` -- register a new operator formatter.\n  * `set-dialect!` -- set the default dialect to be used for formatting,\n        and optionally set a global `:quoted` option.\n  * `sql-kw` -- turns a Clojure keyword (or symbol) into SQL code (makes\n        it uppercase and replaces - with space). "], null)),new cljs.core.Symbol(null,"object-record-literal","object-record-literal",-1044307713,null),"honey/sql.cljc",29,1,1958,1958,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null)),null,(cljs.core.truth_(honey.sql.object_record_literal)?honey.sql.object_record_literal.cljs$lang$test:null)])),(function (_,p__30175){
var vec__30176 = p__30175;
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30176,(0),null);
var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30176,(1),null);
var vec__30179 = (function (){var G__30185 = expr;
var G__30186 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__30185,G__30186) : honey.sql.format_expr.call(null,G__30185,G__30186));
})();
var seq__30180 = cljs.core.seq(vec__30179);
var first__30181 = cljs.core.first(seq__30180);
var seq__30180__$1 = cljs.core.next(seq__30180);
var sql = first__30181;
var params = seq__30180__$1;
var vec__30182 = (function (){var _STAR_options_STAR__orig_val__30187 = honey.sql._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__30188 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(honey.sql._STAR_options_STAR_,new cljs.core.Keyword(null,"inline","inline",1399884222),true);
(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__temp_val__30188);

try{var G__30193 = ((cljs.core.ident_QMARK_(tz))?cljs.core.name(tz):tz);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(G__30193) : honey.sql.format_expr.call(null,G__30193));
}finally {(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__orig_val__30187);
}})();
var seq__30183 = cljs.core.seq(vec__30182);
var first__30184 = cljs.core.first(seq__30183);
var seq__30183__$1 = cljs.core.next(seq__30183);
var tz_sql = first__30184;
var ___$1 = seq__30183__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(sql," AT TIME ZONE ",tz_sql)], null),params);
}),(function (_,xs){
var _STAR_options_STAR__orig_val__30196 = honey.sql._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__30197 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(honey.sql._STAR_options_STAR_,new cljs.core.Keyword(null,"inline","inline",1399884222),true);
(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__temp_val__30197);

try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__29989_SHARP_){
var G__30199 = p1__29989_SHARP_;
var G__30200 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"record","record",-779106859),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__30199,G__30200) : honey.sql.format_expr.call(null,G__30199,G__30200));
})),xs)], null);
}finally {(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__orig_val__30196);
}}),(function (_,p__30202){
var vec__30203 = p__30202;
var seq__30204 = cljs.core.seq(vec__30203);
var first__30205 = cljs.core.first(seq__30204);
var seq__30204__$1 = cljs.core.next(seq__30204);
var e = first__30205;
var js = seq__30204__$1;
var vec__30207 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(honey.sql.format_selectable_dsl.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),true], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(honey.sql.format_dsl,js)));
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30207,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30207,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(" ",sqls),")")], null),params);
}),(function (_,p__30210){
var vec__30211 = p__30210;
var clause_or_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30211,(0),null);
if(cljs.core.map_QMARK_(clause_or_expr)){
var vec__30215 = honey.sql.format_dsl.cljs$core$IFn$_invoke$arity$1(clause_or_expr);
var seq__30216 = cljs.core.seq(vec__30215);
var first__30217 = cljs.core.first(seq__30216);
var seq__30216__$1 = cljs.core.next(seq__30216);
var sql = first__30217;
var params = seq__30216__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("LATERAL (",sql,")")], null),params);
} else {
var vec__30218 = (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$1(clause_or_expr) : honey.sql.format_expr.call(null,clause_or_expr));
var seq__30219 = cljs.core.seq(vec__30218);
var first__30220 = cljs.core.first(seq__30219);
var seq__30219__$1 = cljs.core.next(seq__30219);
var sql = first__30220;
var params = seq__30219__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("LATERAL ",sql)], null),params);
}
})]));
honey.sql.format_equality_expr = (function honey$sql$format_equality_expr(op_SINGLEQUOTE_,op,expr,nested){
var vec__30221 = expr;
var seq__30222 = cljs.core.seq(vec__30221);
var first__30223 = cljs.core.first(seq__30222);
var seq__30222__$1 = cljs.core.next(seq__30222);
var _ = first__30223;
var first__30223__$1 = cljs.core.first(seq__30222__$1);
var seq__30222__$2 = cljs.core.next(seq__30222__$1);
var a = first__30223__$1;
var first__30223__$2 = cljs.core.first(seq__30222__$2);
var seq__30222__$3 = cljs.core.next(seq__30222__$2);
var b = first__30223__$2;
var y = seq__30222__$3;
var ___$1 = ((cljs.core.seq(y))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("only binary ",op_SINGLEQUOTE_," is supported"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),expr], null))})():null);
var vec__30224 = (function (){var G__30231 = a;
var G__30232 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__30231,G__30232) : honey.sql.format_expr.call(null,G__30231,G__30232));
})();
var seq__30225 = cljs.core.seq(vec__30224);
var first__30226 = cljs.core.first(seq__30225);
var seq__30225__$1 = cljs.core.next(seq__30225);
var s1 = first__30226;
var p1 = seq__30225__$1;
var vec__30227 = (function (){var G__30235 = b;
var G__30236 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),true], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__30235,G__30236) : honey.sql.format_expr.call(null,G__30235,G__30236));
})();
var seq__30228 = cljs.core.seq(vec__30227);
var first__30229 = cljs.core.first(seq__30228);
var seq__30228__$1 = cljs.core.next(seq__30228);
var s2 = first__30229;
var p2 = seq__30228__$1;
return honey.sql.util.into_STAR_.cljs$core$IFn$_invoke$arity$3((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__30238 = (((((a == null)) || ((b == null))))?honey.sql.util.str.cljs$core$IFn$_invoke$arity$2((((a == null))?(((b == null))?"NULL":s2):s1),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"=","=",1152933628),op))?" IS NULL":" IS NOT NULL")):honey.sql.util.str.cljs$core$IFn$_invoke$arity$5(s1," ",honey.sql.sql_kw(op)," ",s2));
if(cljs.core.truth_(nested)){
var s = G__30238;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",s,")");
} else {
return G__30238;
}
})()],null)),p1,p2);
});
honey.sql.format_infix_expr = (function honey$sql$format_infix_expr(op_SINGLEQUOTE_,op,expr,nested){
var args = (function (){var G__30252 = cljs.core.rest(expr);
if(cljs.core.contains_QMARK_(cljs.core.deref(honey.sql.op_ignore_nil),op)){
return cljs.core.filterv(cljs.core.some_QMARK_,G__30252);
} else {
return G__30252;
}
})();
var args__$1 = ((cljs.core.seq(args))?args:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"and","and",-971899817),op))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"or","or",235744169),op))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null):cljs.core.PersistentVector.EMPTY
)));
var vec__30249 = honey.sql.reduce_sql.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__30244_SHARP_){
var G__30255 = p1__30244_SHARP_;
var G__30256 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),honey.sql._STAR_nest_infix_STAR_], null);
return (honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 ? honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2(G__30255,G__30256) : honey.sql.format_expr.call(null,G__30255,G__30256));
})),args__$1);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30249,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30249,(1),null);
if((cljs.core.count(sqls) > (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$2("no operands found for ",op_SINGLEQUOTE_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),expr], null));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30257 = honey.sql.util.join.cljs$core$IFn$_invoke$arity$2(honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(" ",honey.sql.sql_kw(op)," "),sqls);
var G__30257__$1 = ((((cljs.core.contains_QMARK_(cljs.core.deref(honey.sql.op_can_be_unary),op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(sqls)))))?(function (){var s = G__30257;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3(honey.sql.sql_kw(op)," ",s);
})():G__30257);
if(cljs.core.truth_(nested)){
var s = G__30257__$1;
return honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",s,")");
} else {
return G__30257__$1;
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
var G__30270 = arguments.length;
switch (G__30270) {
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

(honey.sql.format_expr.cljs$core$IFn$_invoke$arity$2 = (function (expr,p__30282){
var map__30283 = p__30282;
var map__30283__$1 = cljs.core.__destructure_map(map__30283);
var opts = map__30283__$1;
var nested = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30283__$1,new cljs.core.Keyword(null,"nested","nested",18943849));
var record = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30283__$1,new cljs.core.Keyword(null,"record","record",-779106859));
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
var vec__30288 = honey.sql.format_in(op,cljs.core.rest(expr));
var seq__30289 = cljs.core.seq(vec__30288);
var first__30290 = cljs.core.first(seq__30289);
var seq__30289__$1 = cljs.core.next(seq__30289);
var sql = first__30290;
var params = seq__30289__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(nested)?honey.sql.util.str.cljs$core$IFn$_invoke$arity$3("(",sql,")"):sql)], null),params);
} else {
if(cljs.core.contains_QMARK_(cljs.core.deref(honey.sql.special_syntax),op)){
var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(honey.sql.special_syntax),op);
var G__30297 = op;
var G__30298 = cljs.core.rest(expr);
return (formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(G__30297,G__30298) : formatter.call(null,G__30297,G__30298));
} else {
return honey.sql.format_fn_call_expr(op,expr);

}
}
}
} else {
var vec__30299 = honey.sql.format_expr_list.cljs$core$IFn$_invoke$arity$1(expr);
var sqls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30299,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30299,(1),null);
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
var G__30319 = arguments.length;
switch (G__30319) {
case 1:
return honey.sql.format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return honey.sql.format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___30707 = arguments.length;
var i__5750__auto___30708 = (0);
while(true){
if((i__5750__auto___30708 < len__5749__auto___30707)){
args_arr__5774__auto__.push((arguments[i__5750__auto___30708]));

var G__30709 = (i__5750__auto___30708 + (1));
i__5750__auto___30708 = G__30709;
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
var G__30326 = cljs.core.deref(honey.sql.base_clause_order);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30326) : f.call(null,G__30326));
} else {
return cljs.core.deref(honey.sql.current_clause_order);
}
})():cljs.core.deref(honey.sql.current_clause_order)),new cljs.core.Keyword(null,"checking","checking",1748720818).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref(honey.sql.default_checking)),new cljs.core.Keyword(null,"quoted-snake","quoted-snake",-1093133358).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref(honey.sql.default_quoted_snake)),(cljs.core.truth_(numbered_QMARK_)?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY):null),new cljs.core.Keyword(null,"quoted-always","quoted-always",365198806).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref(honey.sql.default_quoted_always)),((cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"quoted","quoted",2117344952)))?new cljs.core.Keyword(null,"quoted","quoted",2117344952).cljs$core$IFn$_invoke$arity$1(opts):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nrql","nrql",-1120573919),new cljs.core.Keyword(null,"dialect","dialect",-1374251073).cljs$core$IFn$_invoke$arity$1(dialect)))?null:((dialect_QMARK_)?true:cljs.core.deref(honey.sql.default_quoted)
))),new cljs.core.Keyword(null,"ignored-metadata","ignored-metadata",1251384217).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"values-default-columns","values-default-columns",1352539997).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$2(opts,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nrql","nrql",-1120573919),new cljs.core.Keyword(null,"dialect","dialect",-1374251073).cljs$core$IFn$_invoke$arity$1(dialect)))?true:cljs.core.deref(honey.sql.default_inline)))]);
var _STAR_dialect_STAR__orig_val__30327 = honey.sql._STAR_dialect_STAR_;
var _STAR_options_STAR__orig_val__30328 = honey.sql._STAR_options_STAR_;
var _STAR_dialect_STAR__temp_val__30329 = dialect;
var _STAR_options_STAR__temp_val__30330 = options;
(honey.sql._STAR_dialect_STAR_ = _STAR_dialect_STAR__temp_val__30329);

(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__temp_val__30330);

try{if(cljs.core.truth_(cache)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30306_SHARP_){
return honey.sql.unwrap(p1__30306_SHARP_,opts);
}),honey.sql.through_opts(opts,cache,data,(function (_){
var G__30334 = data;
var G__30335 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"cache","cache",-1237023054));
return (formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(G__30334,G__30335) : formatter.call(null,G__30334,G__30335));
})));
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30307_SHARP_){
return honey.sql.unwrap(p1__30307_SHARP_,opts);
}),(formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(data,opts) : formatter.call(null,data,opts)));
}
}finally {(honey.sql._STAR_options_STAR_ = _STAR_options_STAR__orig_val__30328);

(honey.sql._STAR_dialect_STAR_ = _STAR_dialect_STAR__orig_val__30327);
}}));

(honey.sql.format.cljs$core$IFn$_invoke$arity$variadic = (function (data,k,v,p__30341){
var map__30342 = p__30341;
var map__30342__$1 = cljs.core.__destructure_map(map__30342);
var opts = map__30342__$1;
return honey.sql.format.cljs$core$IFn$_invoke$arity$2(data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,k,v));
}));

/** @this {Function} */
(honey.sql.format.cljs$lang$applyTo = (function (seq30310){
var G__30316 = cljs.core.first(seq30310);
var seq30310__$1 = cljs.core.next(seq30310);
var G__30317 = cljs.core.first(seq30310__$1);
var seq30310__$2 = cljs.core.next(seq30310__$1);
var G__30318 = cljs.core.first(seq30310__$2);
var seq30310__$3 = cljs.core.next(seq30310__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30316,G__30317,G__30318,seq30310__$3);
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
var len__5749__auto___30718 = arguments.length;
var i__5750__auto___30721 = (0);
while(true){
if((i__5750__auto___30721 < len__5749__auto___30718)){
args__5755__auto__.push((arguments[i__5750__auto___30721]));

var G__30722 = (i__5750__auto___30721 + (1));
i__5750__auto___30721 = G__30722;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return honey.sql.set_dialect_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(honey.sql.set_dialect_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (dialect,p__30366){
var map__30367 = p__30366;
var map__30367__$1 = cljs.core.__destructure_map(map__30367);
var quoted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30367__$1,new cljs.core.Keyword(null,"quoted","quoted",2117344952));
cljs.core.reset_BANG_(honey.sql.default_dialect,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(honey.sql.dialects),honey.sql.check_dialect(dialect)));

var f_30728 = new cljs.core.Keyword(null,"clause-order-fn","clause-order-fn",-2005456179).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(honey.sql.default_dialect),cljs.core.identity);
cljs.core.reset_BANG_(honey.sql.current_clause_order,(function (){var G__30370 = cljs.core.deref(honey.sql.base_clause_order);
return (f_30728.cljs$core$IFn$_invoke$arity$1 ? f_30728.cljs$core$IFn$_invoke$arity$1(G__30370) : f_30728.call(null,G__30370));
})());

return cljs.core.reset_BANG_(honey.sql.default_quoted,quoted);
}));

(honey.sql.set_dialect_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(honey.sql.set_dialect_BANG_.cljs$lang$applyTo = (function (seq30350){
var G__30351 = cljs.core.first(seq30350);
var seq30350__$1 = cljs.core.next(seq30350);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30351,seq30350__$1);
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

var temp__5825__auto___30743 = new cljs.core.Keyword(null,"clause-order-fn","clause-order-fn",-2005456179).cljs$core$IFn$_invoke$arity$1(dialect_spec);
if(cljs.core.truth_(temp__5825__auto___30743)){
var cof_30744 = temp__5825__auto___30743;
if(cljs.core.fn_QMARK_(cof_30744)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Dialect spec contains :clause-order-fn but it is not a function",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialect-spec","dialect-spec",383903007),dialect_spec], null));
}
} else {
}

var temp__5829__auto___30745 = new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(dialect_spec);
if((temp__5829__auto___30745 == null)){
} else {
var as_30746 = temp__5829__auto___30745;
if(cljs.core.boolean_QMARK_(as_30746)){
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
var len__5749__auto___30765 = arguments.length;
var i__5750__auto___30766 = (0);
while(true){
if((i__5750__auto___30766 < len__5749__auto___30765)){
args__5755__auto__.push((arguments[i__5750__auto___30766]));

var G__30769 = (i__5750__auto___30766 + (1));
i__5750__auto___30766 = G__30769;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return honey.sql.register_op_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(honey.sql.register_op_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (op,p__30441){
var map__30446 = p__30441;
var map__30446__$1 = cljs.core.__destructure_map(map__30446);
var ignore_nil = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30446__$1,new cljs.core.Keyword(null,"ignore-nil","ignore-nil",132231320));
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
(honey.sql.register_op_BANG_.cljs$lang$applyTo = (function (seq30426){
var G__30427 = cljs.core.first(seq30426);
var seq30426__$1 = cljs.core.next(seq30426);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30427,seq30426__$1);
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
var G__30472 = arguments.length;
switch (G__30472) {
case 1:
return honey.sql.semicolon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___30787 = arguments.length;
var i__5750__auto___30788 = (0);
while(true){
if((i__5750__auto___30788 < len__5749__auto___30787)){
args_arr__5774__auto__.push((arguments[i__5750__auto___30788]));

var G__30789 = (i__5750__auto___30788 + (1));
i__5750__auto___30788 = G__30789;
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
(honey.sql.semicolon.cljs$lang$applyTo = (function (seq30470){
var G__30471 = cljs.core.first(seq30470);
var seq30470__$1 = cljs.core.next(seq30470);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30471,seq30470__$1);
}));

(honey.sql.semicolon.cljs$lang$maxFixedArity = (1));

honey.sql.call = (function honey$sql$call(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30790 = arguments.length;
var i__5750__auto___30791 = (0);
while(true){
if((i__5750__auto___30791 < len__5749__auto___30790)){
args__5755__auto__.push((arguments[i__5750__auto___30791]));

var G__30792 = (i__5750__auto___30791 + (1));
i__5750__auto___30791 = G__30792;
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
(honey.sql.call.cljs$lang$applyTo = (function (seq30473){
var G__30474 = cljs.core.first(seq30473);
var seq30473__$1 = cljs.core.next(seq30473);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30474,seq30473__$1);
}));


//# sourceMappingURL=honey.sql.js.map
