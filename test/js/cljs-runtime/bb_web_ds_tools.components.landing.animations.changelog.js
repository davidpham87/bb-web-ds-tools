goog.provide('bb_web_ds_tools.components.landing.animations.changelog');
bb_web_ds_tools.components.landing.animations.changelog.draw_changelog = (function bb_web_ds_tools$components$landing$animations$changelog$draw_changelog(ctx,w,h,t){
bb_web_ds_tools.components.landing.animations.common.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var scroll_y = cljs.core.mod((t * 0.05),(200));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.font = "12px monospace");

(ctx.textAlign = "left");

var seq__52313 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
var chunk__52314 = null;
var count__52315 = (0);
var i__52316 = (0);
while(true){
if((i__52316 < count__52315)){
var i = chunk__52314.cljs$core$IIndexed$_nth$arity$2(null,i__52316);
var y_52322 = (((200) + (i * (20))) - scroll_y);
if((((y_52322 > (0))) && ((y_52322 < (200))))){
ctx.fillText(["- Update ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," fixed stuff"].join(''),(20),y_52322);
} else {
}


var G__52323 = seq__52313;
var G__52324 = chunk__52314;
var G__52325 = count__52315;
var G__52326 = (i__52316 + (1));
seq__52313 = G__52323;
chunk__52314 = G__52324;
count__52315 = G__52325;
i__52316 = G__52326;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52313);
if(temp__5825__auto__){
var seq__52313__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52313__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__52313__$1);
var G__52327 = cljs.core.chunk_rest(seq__52313__$1);
var G__52328 = c__5548__auto__;
var G__52329 = cljs.core.count(c__5548__auto__);
var G__52330 = (0);
seq__52313 = G__52327;
chunk__52314 = G__52328;
count__52315 = G__52329;
i__52316 = G__52330;
continue;
} else {
var i = cljs.core.first(seq__52313__$1);
var y_52331 = (((200) + (i * (20))) - scroll_y);
if((((y_52331 > (0))) && ((y_52331 < (200))))){
ctx.fillText(["- Update ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," fixed stuff"].join(''),(20),y_52331);
} else {
}


var G__52332 = cljs.core.next(seq__52313__$1);
var G__52333 = null;
var G__52334 = (0);
var G__52335 = (0);
seq__52313 = G__52332;
chunk__52314 = G__52333;
count__52315 = G__52334;
i__52316 = G__52335;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.changelog.js.map
