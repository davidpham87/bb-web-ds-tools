goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51496 = arguments.length;
var i__4865__auto___51497 = (0);
while(true){
if((i__4865__auto___51497 < len__4864__auto___51496)){
args__4870__auto__.push((arguments[i__4865__auto___51497]));

var G__51498 = (i__4865__auto___51497 + (1));
i__4865__auto___51497 = G__51498;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51301){
var G__51302 = cljs.core.first(seq51301);
var seq51301__$1 = cljs.core.next(seq51301);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51302,seq51301__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51306 = cljs.core.seq(sources);
var chunk__51307 = null;
var count__51308 = (0);
var i__51309 = (0);
while(true){
if((i__51309 < count__51308)){
var map__51324 = chunk__51307.cljs$core$IIndexed$_nth$arity$2(null,i__51309);
var map__51324__$1 = cljs.core.__destructure_map(map__51324);
var src = map__51324__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51324__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51324__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51324__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51324__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51325){var e_51500 = e51325;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51500);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51500.message)].join('')));
}

var G__51502 = seq__51306;
var G__51503 = chunk__51307;
var G__51504 = count__51308;
var G__51505 = (i__51309 + (1));
seq__51306 = G__51502;
chunk__51307 = G__51503;
count__51308 = G__51504;
i__51309 = G__51505;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51306);
if(temp__5825__auto__){
var seq__51306__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51306__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51306__$1);
var G__51508 = cljs.core.chunk_rest(seq__51306__$1);
var G__51509 = c__4679__auto__;
var G__51510 = cljs.core.count(c__4679__auto__);
var G__51511 = (0);
seq__51306 = G__51508;
chunk__51307 = G__51509;
count__51308 = G__51510;
i__51309 = G__51511;
continue;
} else {
var map__51326 = cljs.core.first(seq__51306__$1);
var map__51326__$1 = cljs.core.__destructure_map(map__51326);
var src = map__51326__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51326__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51326__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51326__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51326__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51327){var e_51513 = e51327;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51513);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51513.message)].join('')));
}

var G__51514 = cljs.core.next(seq__51306__$1);
var G__51515 = null;
var G__51516 = (0);
var G__51517 = (0);
seq__51306 = G__51514;
chunk__51307 = G__51515;
count__51308 = G__51516;
i__51309 = G__51517;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__51328 = cljs.core.seq(js_requires);
var chunk__51329 = null;
var count__51330 = (0);
var i__51331 = (0);
while(true){
if((i__51331 < count__51330)){
var js_ns = chunk__51329.cljs$core$IIndexed$_nth$arity$2(null,i__51331);
var require_str_51518 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51518);


var G__51519 = seq__51328;
var G__51520 = chunk__51329;
var G__51521 = count__51330;
var G__51522 = (i__51331 + (1));
seq__51328 = G__51519;
chunk__51329 = G__51520;
count__51330 = G__51521;
i__51331 = G__51522;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51328);
if(temp__5825__auto__){
var seq__51328__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51328__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51328__$1);
var G__51523 = cljs.core.chunk_rest(seq__51328__$1);
var G__51524 = c__4679__auto__;
var G__51525 = cljs.core.count(c__4679__auto__);
var G__51526 = (0);
seq__51328 = G__51523;
chunk__51329 = G__51524;
count__51330 = G__51525;
i__51331 = G__51526;
continue;
} else {
var js_ns = cljs.core.first(seq__51328__$1);
var require_str_51535 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51535);


var G__51536 = cljs.core.next(seq__51328__$1);
var G__51537 = null;
var G__51538 = (0);
var G__51539 = (0);
seq__51328 = G__51536;
chunk__51329 = G__51537;
count__51330 = G__51538;
i__51331 = G__51539;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__51339){
var map__51340 = p__51339;
var map__51340__$1 = cljs.core.__destructure_map(map__51340);
var msg = map__51340__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51340__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51340__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51341(s__51342){
return (new cljs.core.LazySeq(null,(function (){
var s__51342__$1 = s__51342;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__51342__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__51347 = cljs.core.first(xs__6385__auto__);
var map__51347__$1 = cljs.core.__destructure_map(map__51347);
var src = map__51347__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51347__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51347__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__51342__$1,map__51347,map__51347__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__51340,map__51340__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51341_$_iter__51343(s__51344){
return (new cljs.core.LazySeq(null,((function (s__51342__$1,map__51347,map__51347__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__51340,map__51340__$1,msg,info,reload_info){
return (function (){
var s__51344__$1 = s__51344;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__51344__$1);
if(temp__5825__auto____$1){
var s__51344__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51344__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51344__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51346 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51345 = (0);
while(true){
if((i__51345 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__51345);
cljs.core.chunk_append(b__51346,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51541 = (i__51345 + (1));
i__51345 = G__51541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51346),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51341_$_iter__51343(cljs.core.chunk_rest(s__51344__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51346),null);
}
} else {
var warning = cljs.core.first(s__51344__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51341_$_iter__51343(cljs.core.rest(s__51344__$2)));
}
} else {
return null;
}
break;
}
});})(s__51342__$1,map__51347,map__51347__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__51340,map__51340__$1,msg,info,reload_info))
,null,null));
});})(s__51342__$1,map__51347,map__51347__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__51340,map__51340__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51341(cljs.core.rest(s__51342__$1)));
} else {
var G__51542 = cljs.core.rest(s__51342__$1);
s__51342__$1 = G__51542;
continue;
}
} else {
var G__51543 = cljs.core.rest(s__51342__$1);
s__51342__$1 = G__51543;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__51348_51545 = cljs.core.seq(warnings);
var chunk__51349_51546 = null;
var count__51350_51547 = (0);
var i__51351_51548 = (0);
while(true){
if((i__51351_51548 < count__51350_51547)){
var map__51354_51549 = chunk__51349_51546.cljs$core$IIndexed$_nth$arity$2(null,i__51351_51548);
var map__51354_51550__$1 = cljs.core.__destructure_map(map__51354_51549);
var w_51551 = map__51354_51550__$1;
var msg_51552__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51354_51550__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51354_51550__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51354_51550__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51354_51550__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51555)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51553),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51554),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51552__$1)].join(''));


var G__51556 = seq__51348_51545;
var G__51557 = chunk__51349_51546;
var G__51558 = count__51350_51547;
var G__51559 = (i__51351_51548 + (1));
seq__51348_51545 = G__51556;
chunk__51349_51546 = G__51557;
count__51350_51547 = G__51558;
i__51351_51548 = G__51559;
continue;
} else {
var temp__5825__auto___51561 = cljs.core.seq(seq__51348_51545);
if(temp__5825__auto___51561){
var seq__51348_51562__$1 = temp__5825__auto___51561;
if(cljs.core.chunked_seq_QMARK_(seq__51348_51562__$1)){
var c__4679__auto___51563 = cljs.core.chunk_first(seq__51348_51562__$1);
var G__51564 = cljs.core.chunk_rest(seq__51348_51562__$1);
var G__51565 = c__4679__auto___51563;
var G__51566 = cljs.core.count(c__4679__auto___51563);
var G__51567 = (0);
seq__51348_51545 = G__51564;
chunk__51349_51546 = G__51565;
count__51350_51547 = G__51566;
i__51351_51548 = G__51567;
continue;
} else {
var map__51355_51568 = cljs.core.first(seq__51348_51562__$1);
var map__51355_51569__$1 = cljs.core.__destructure_map(map__51355_51568);
var w_51570 = map__51355_51569__$1;
var msg_51571__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51355_51569__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51355_51569__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51355_51569__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51355_51569__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51574)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51572),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51573),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51571__$1)].join(''));


var G__51577 = cljs.core.next(seq__51348_51562__$1);
var G__51578 = null;
var G__51579 = (0);
var G__51580 = (0);
seq__51348_51545 = G__51577;
chunk__51349_51546 = G__51578;
count__51350_51547 = G__51579;
i__51351_51548 = G__51580;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__51338_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51338_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51356){
var map__51357 = p__51356;
var map__51357__$1 = cljs.core.__destructure_map(map__51357);
var msg = map__51357__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51357__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51358 = cljs.core.seq(updates);
var chunk__51360 = null;
var count__51361 = (0);
var i__51362 = (0);
while(true){
if((i__51362 < count__51361)){
var path = chunk__51360.cljs$core$IIndexed$_nth$arity$2(null,i__51362);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51414_51582 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51418_51583 = null;
var count__51419_51584 = (0);
var i__51420_51585 = (0);
while(true){
if((i__51420_51585 < count__51419_51584)){
var node_51586 = chunk__51418_51583.cljs$core$IIndexed$_nth$arity$2(null,i__51420_51585);
if(cljs.core.not(node_51586.shadow$old)){
var path_match_51587 = shadow.cljs.devtools.client.browser.match_paths(node_51586.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51587)){
var new_link_51588 = (function (){var G__51426 = node_51586.cloneNode(true);
G__51426.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51587),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51426;
})();
(node_51586.shadow$old = true);

(new_link_51588.onload = ((function (seq__51414_51582,chunk__51418_51583,count__51419_51584,i__51420_51585,seq__51358,chunk__51360,count__51361,i__51362,new_link_51588,path_match_51587,node_51586,path,map__51357,map__51357__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51586);
});})(seq__51414_51582,chunk__51418_51583,count__51419_51584,i__51420_51585,seq__51358,chunk__51360,count__51361,i__51362,new_link_51588,path_match_51587,node_51586,path,map__51357,map__51357__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51587], 0));

goog.dom.insertSiblingAfter(new_link_51588,node_51586);


var G__51589 = seq__51414_51582;
var G__51590 = chunk__51418_51583;
var G__51591 = count__51419_51584;
var G__51592 = (i__51420_51585 + (1));
seq__51414_51582 = G__51589;
chunk__51418_51583 = G__51590;
count__51419_51584 = G__51591;
i__51420_51585 = G__51592;
continue;
} else {
var G__51593 = seq__51414_51582;
var G__51594 = chunk__51418_51583;
var G__51595 = count__51419_51584;
var G__51596 = (i__51420_51585 + (1));
seq__51414_51582 = G__51593;
chunk__51418_51583 = G__51594;
count__51419_51584 = G__51595;
i__51420_51585 = G__51596;
continue;
}
} else {
var G__51597 = seq__51414_51582;
var G__51598 = chunk__51418_51583;
var G__51599 = count__51419_51584;
var G__51600 = (i__51420_51585 + (1));
seq__51414_51582 = G__51597;
chunk__51418_51583 = G__51598;
count__51419_51584 = G__51599;
i__51420_51585 = G__51600;
continue;
}
} else {
var temp__5825__auto___51601 = cljs.core.seq(seq__51414_51582);
if(temp__5825__auto___51601){
var seq__51414_51602__$1 = temp__5825__auto___51601;
if(cljs.core.chunked_seq_QMARK_(seq__51414_51602__$1)){
var c__4679__auto___51603 = cljs.core.chunk_first(seq__51414_51602__$1);
var G__51604 = cljs.core.chunk_rest(seq__51414_51602__$1);
var G__51605 = c__4679__auto___51603;
var G__51606 = cljs.core.count(c__4679__auto___51603);
var G__51607 = (0);
seq__51414_51582 = G__51604;
chunk__51418_51583 = G__51605;
count__51419_51584 = G__51606;
i__51420_51585 = G__51607;
continue;
} else {
var node_51608 = cljs.core.first(seq__51414_51602__$1);
if(cljs.core.not(node_51608.shadow$old)){
var path_match_51609 = shadow.cljs.devtools.client.browser.match_paths(node_51608.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51609)){
var new_link_51610 = (function (){var G__51439 = node_51608.cloneNode(true);
G__51439.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51609),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51439;
})();
(node_51608.shadow$old = true);

(new_link_51610.onload = ((function (seq__51414_51582,chunk__51418_51583,count__51419_51584,i__51420_51585,seq__51358,chunk__51360,count__51361,i__51362,new_link_51610,path_match_51609,node_51608,seq__51414_51602__$1,temp__5825__auto___51601,path,map__51357,map__51357__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51608);
});})(seq__51414_51582,chunk__51418_51583,count__51419_51584,i__51420_51585,seq__51358,chunk__51360,count__51361,i__51362,new_link_51610,path_match_51609,node_51608,seq__51414_51602__$1,temp__5825__auto___51601,path,map__51357,map__51357__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51609], 0));

goog.dom.insertSiblingAfter(new_link_51610,node_51608);


var G__51611 = cljs.core.next(seq__51414_51602__$1);
var G__51612 = null;
var G__51613 = (0);
var G__51614 = (0);
seq__51414_51582 = G__51611;
chunk__51418_51583 = G__51612;
count__51419_51584 = G__51613;
i__51420_51585 = G__51614;
continue;
} else {
var G__51615 = cljs.core.next(seq__51414_51602__$1);
var G__51616 = null;
var G__51617 = (0);
var G__51618 = (0);
seq__51414_51582 = G__51615;
chunk__51418_51583 = G__51616;
count__51419_51584 = G__51617;
i__51420_51585 = G__51618;
continue;
}
} else {
var G__51619 = cljs.core.next(seq__51414_51602__$1);
var G__51620 = null;
var G__51621 = (0);
var G__51622 = (0);
seq__51414_51582 = G__51619;
chunk__51418_51583 = G__51620;
count__51419_51584 = G__51621;
i__51420_51585 = G__51622;
continue;
}
}
} else {
}
}
break;
}


var G__51623 = seq__51358;
var G__51624 = chunk__51360;
var G__51625 = count__51361;
var G__51626 = (i__51362 + (1));
seq__51358 = G__51623;
chunk__51360 = G__51624;
count__51361 = G__51625;
i__51362 = G__51626;
continue;
} else {
var G__51628 = seq__51358;
var G__51629 = chunk__51360;
var G__51630 = count__51361;
var G__51631 = (i__51362 + (1));
seq__51358 = G__51628;
chunk__51360 = G__51629;
count__51361 = G__51630;
i__51362 = G__51631;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51358);
if(temp__5825__auto__){
var seq__51358__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51358__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51358__$1);
var G__51632 = cljs.core.chunk_rest(seq__51358__$1);
var G__51633 = c__4679__auto__;
var G__51634 = cljs.core.count(c__4679__auto__);
var G__51635 = (0);
seq__51358 = G__51632;
chunk__51360 = G__51633;
count__51361 = G__51634;
i__51362 = G__51635;
continue;
} else {
var path = cljs.core.first(seq__51358__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51444_51636 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51448_51637 = null;
var count__51449_51638 = (0);
var i__51450_51639 = (0);
while(true){
if((i__51450_51639 < count__51449_51638)){
var node_51640 = chunk__51448_51637.cljs$core$IIndexed$_nth$arity$2(null,i__51450_51639);
if(cljs.core.not(node_51640.shadow$old)){
var path_match_51642 = shadow.cljs.devtools.client.browser.match_paths(node_51640.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51642)){
var new_link_51644 = (function (){var G__51457 = node_51640.cloneNode(true);
G__51457.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51642),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51457;
})();
(node_51640.shadow$old = true);

(new_link_51644.onload = ((function (seq__51444_51636,chunk__51448_51637,count__51449_51638,i__51450_51639,seq__51358,chunk__51360,count__51361,i__51362,new_link_51644,path_match_51642,node_51640,path,seq__51358__$1,temp__5825__auto__,map__51357,map__51357__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51640);
});})(seq__51444_51636,chunk__51448_51637,count__51449_51638,i__51450_51639,seq__51358,chunk__51360,count__51361,i__51362,new_link_51644,path_match_51642,node_51640,path,seq__51358__$1,temp__5825__auto__,map__51357,map__51357__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51642], 0));

goog.dom.insertSiblingAfter(new_link_51644,node_51640);


var G__51647 = seq__51444_51636;
var G__51648 = chunk__51448_51637;
var G__51649 = count__51449_51638;
var G__51650 = (i__51450_51639 + (1));
seq__51444_51636 = G__51647;
chunk__51448_51637 = G__51648;
count__51449_51638 = G__51649;
i__51450_51639 = G__51650;
continue;
} else {
var G__51651 = seq__51444_51636;
var G__51652 = chunk__51448_51637;
var G__51653 = count__51449_51638;
var G__51654 = (i__51450_51639 + (1));
seq__51444_51636 = G__51651;
chunk__51448_51637 = G__51652;
count__51449_51638 = G__51653;
i__51450_51639 = G__51654;
continue;
}
} else {
var G__51655 = seq__51444_51636;
var G__51656 = chunk__51448_51637;
var G__51657 = count__51449_51638;
var G__51658 = (i__51450_51639 + (1));
seq__51444_51636 = G__51655;
chunk__51448_51637 = G__51656;
count__51449_51638 = G__51657;
i__51450_51639 = G__51658;
continue;
}
} else {
var temp__5825__auto___51659__$1 = cljs.core.seq(seq__51444_51636);
if(temp__5825__auto___51659__$1){
var seq__51444_51661__$1 = temp__5825__auto___51659__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51444_51661__$1)){
var c__4679__auto___51662 = cljs.core.chunk_first(seq__51444_51661__$1);
var G__51663 = cljs.core.chunk_rest(seq__51444_51661__$1);
var G__51664 = c__4679__auto___51662;
var G__51665 = cljs.core.count(c__4679__auto___51662);
var G__51666 = (0);
seq__51444_51636 = G__51663;
chunk__51448_51637 = G__51664;
count__51449_51638 = G__51665;
i__51450_51639 = G__51666;
continue;
} else {
var node_51667 = cljs.core.first(seq__51444_51661__$1);
if(cljs.core.not(node_51667.shadow$old)){
var path_match_51668 = shadow.cljs.devtools.client.browser.match_paths(node_51667.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51668)){
var new_link_51669 = (function (){var G__51458 = node_51667.cloneNode(true);
G__51458.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51668),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51458;
})();
(node_51667.shadow$old = true);

(new_link_51669.onload = ((function (seq__51444_51636,chunk__51448_51637,count__51449_51638,i__51450_51639,seq__51358,chunk__51360,count__51361,i__51362,new_link_51669,path_match_51668,node_51667,seq__51444_51661__$1,temp__5825__auto___51659__$1,path,seq__51358__$1,temp__5825__auto__,map__51357,map__51357__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51667);
});})(seq__51444_51636,chunk__51448_51637,count__51449_51638,i__51450_51639,seq__51358,chunk__51360,count__51361,i__51362,new_link_51669,path_match_51668,node_51667,seq__51444_51661__$1,temp__5825__auto___51659__$1,path,seq__51358__$1,temp__5825__auto__,map__51357,map__51357__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51668], 0));

goog.dom.insertSiblingAfter(new_link_51669,node_51667);


var G__51671 = cljs.core.next(seq__51444_51661__$1);
var G__51672 = null;
var G__51673 = (0);
var G__51674 = (0);
seq__51444_51636 = G__51671;
chunk__51448_51637 = G__51672;
count__51449_51638 = G__51673;
i__51450_51639 = G__51674;
continue;
} else {
var G__51675 = cljs.core.next(seq__51444_51661__$1);
var G__51676 = null;
var G__51677 = (0);
var G__51678 = (0);
seq__51444_51636 = G__51675;
chunk__51448_51637 = G__51676;
count__51449_51638 = G__51677;
i__51450_51639 = G__51678;
continue;
}
} else {
var G__51679 = cljs.core.next(seq__51444_51661__$1);
var G__51680 = null;
var G__51681 = (0);
var G__51682 = (0);
seq__51444_51636 = G__51679;
chunk__51448_51637 = G__51680;
count__51449_51638 = G__51681;
i__51450_51639 = G__51682;
continue;
}
}
} else {
}
}
break;
}


var G__51683 = cljs.core.next(seq__51358__$1);
var G__51684 = null;
var G__51685 = (0);
var G__51686 = (0);
seq__51358 = G__51683;
chunk__51360 = G__51684;
count__51361 = G__51685;
i__51362 = G__51686;
continue;
} else {
var G__51687 = cljs.core.next(seq__51358__$1);
var G__51688 = null;
var G__51689 = (0);
var G__51690 = (0);
seq__51358 = G__51687;
chunk__51360 = G__51688;
count__51361 = G__51689;
i__51362 = G__51690;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51459){
var map__51460 = p__51459;
var map__51460__$1 = cljs.core.__destructure_map(map__51460);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51460__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51461){
var map__51462 = p__51461;
var map__51462__$1 = cljs.core.__destructure_map(map__51462);
var _ = map__51462__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51462__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51463,done,error){
var map__51464 = p__51463;
var map__51464__$1 = cljs.core.__destructure_map(map__51464);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51464__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51469,done,error){
var map__51470 = p__51469;
var map__51470__$1 = cljs.core.__destructure_map(map__51470);
var msg = map__51470__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51470__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51470__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51470__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51471){
var map__51472 = p__51471;
var map__51472__$1 = cljs.core.__destructure_map(map__51472);
var src = map__51472__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51472__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51473 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51473) : done.call(null,G__51473));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51474){
var map__51475 = p__51474;
var map__51475__$1 = cljs.core.__destructure_map(map__51475);
var msg__$1 = map__51475__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51475__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51476){var ex = e51476;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51477){
var map__51478 = p__51477;
var map__51478__$1 = cljs.core.__destructure_map(map__51478);
var env = map__51478__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51478__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__51485){
var map__51486 = p__51485;
var map__51486__$1 = cljs.core.__destructure_map(map__51486);
var msg = map__51486__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51486__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51487){
var map__51488 = p__51487;
var map__51488__$1 = cljs.core.__destructure_map(map__51488);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51488__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51488__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51489){
var map__51490 = p__51489;
var map__51490__$1 = cljs.core.__destructure_map(map__51490);
var svc = map__51490__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51490__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
