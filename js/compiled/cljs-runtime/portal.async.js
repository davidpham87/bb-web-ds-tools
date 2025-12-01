goog.provide('portal.async');
portal.async.race = (function portal$async$race(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21745 = arguments.length;
var i__5750__auto___21746 = (0);
while(true){
if((i__5750__auto___21746 < len__5749__auto___21745)){
args__5755__auto__.push((arguments[i__5750__auto___21746]));

var G__21747 = (i__5750__auto___21746 + (1));
i__5750__auto___21746 = G__21747;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return portal.async.race.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(portal.async.race.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return Promise.race(args);
}));

(portal.async.race.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(portal.async.race.cljs$lang$applyTo = (function (seq21744){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21744));
}));


//# sourceMappingURL=portal.async.js.map
