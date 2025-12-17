goog.provide('bb_web_ds_tools.components.landing.animations.changelog');
bb_web_ds_tools.components.landing.animations.changelog.draw_log_entry = (function bb_web_ds_tools$components$landing$animations$changelog$draw_log_entry(ctx,i,scroll_y){
var y = (((200) + (i * (20))) - scroll_y);
if((((y > (0))) && ((y < (200))))){
return ctx.fillText(["- Update ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," fixed stuff"].join(''),(20),y);
} else {
return null;
}
});
bb_web_ds_tools.components.landing.animations.changelog.draw_changelog = (function bb_web_ds_tools$components$landing$animations$changelog$draw_changelog(ctx,w,h,t){
bb_web_ds_tools.components.landing.animations.common.clear(ctx,w,h);

var scroll_y = cljs.core.mod((t * 0.05),(200));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.font = "12px monospace");

(ctx.textAlign = "left");

var seq__52922 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
var chunk__52923 = null;
var count__52924 = (0);
var i__52925 = (0);
while(true){
if((i__52925 < count__52924)){
var i = chunk__52923.cljs$core$IIndexed$_nth$arity$2(null,i__52925);
bb_web_ds_tools.components.landing.animations.changelog.draw_log_entry(ctx,i,scroll_y);


var G__52926 = seq__52922;
var G__52927 = chunk__52923;
var G__52928 = count__52924;
var G__52929 = (i__52925 + (1));
seq__52922 = G__52926;
chunk__52923 = G__52927;
count__52924 = G__52928;
i__52925 = G__52929;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52922);
if(temp__5825__auto__){
var seq__52922__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52922__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__52922__$1);
var G__52930 = cljs.core.chunk_rest(seq__52922__$1);
var G__52931 = c__5548__auto__;
var G__52932 = cljs.core.count(c__5548__auto__);
var G__52933 = (0);
seq__52922 = G__52930;
chunk__52923 = G__52931;
count__52924 = G__52932;
i__52925 = G__52933;
continue;
} else {
var i = cljs.core.first(seq__52922__$1);
bb_web_ds_tools.components.landing.animations.changelog.draw_log_entry(ctx,i,scroll_y);


var G__52934 = cljs.core.next(seq__52922__$1);
var G__52935 = null;
var G__52936 = (0);
var G__52937 = (0);
seq__52922 = G__52934;
chunk__52923 = G__52935;
count__52924 = G__52936;
i__52925 = G__52937;
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
