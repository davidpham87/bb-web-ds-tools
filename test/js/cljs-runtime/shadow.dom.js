goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_67403 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_67403(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_67404 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_67404(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__67040 = coll;
var G__67041 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__67040,G__67041) : shadow.dom.lazy_native_coll_seq.call(null,G__67040,G__67041));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__67078 = arguments.length;
switch (G__67078) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__67106 = arguments.length;
switch (G__67106) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__67110 = arguments.length;
switch (G__67110) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__67114 = arguments.length;
switch (G__67114) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__67116 = arguments.length;
switch (G__67116) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__67118 = arguments.length;
switch (G__67118) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e67119){if((e67119 instanceof Object)){
var e = e67119;
return console.log("didnt support attachEvent",el,e);
} else {
throw e67119;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__67120 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__67121 = null;
var count__67122 = (0);
var i__67123 = (0);
while(true){
if((i__67123 < count__67122)){
var el = chunk__67121.cljs$core$IIndexed$_nth$arity$2(null,i__67123);
var handler_67411__$1 = ((function (seq__67120,chunk__67121,count__67122,i__67123,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__67120,chunk__67121,count__67122,i__67123,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_67411__$1);


var G__67412 = seq__67120;
var G__67413 = chunk__67121;
var G__67414 = count__67122;
var G__67415 = (i__67123 + (1));
seq__67120 = G__67412;
chunk__67121 = G__67413;
count__67122 = G__67414;
i__67123 = G__67415;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67120);
if(temp__5825__auto__){
var seq__67120__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67120__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67120__$1);
var G__67416 = cljs.core.chunk_rest(seq__67120__$1);
var G__67417 = c__5548__auto__;
var G__67418 = cljs.core.count(c__5548__auto__);
var G__67419 = (0);
seq__67120 = G__67416;
chunk__67121 = G__67417;
count__67122 = G__67418;
i__67123 = G__67419;
continue;
} else {
var el = cljs.core.first(seq__67120__$1);
var handler_67420__$1 = ((function (seq__67120,chunk__67121,count__67122,i__67123,el,seq__67120__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__67120,chunk__67121,count__67122,i__67123,el,seq__67120__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_67420__$1);


var G__67421 = cljs.core.next(seq__67120__$1);
var G__67422 = null;
var G__67423 = (0);
var G__67424 = (0);
seq__67120 = G__67421;
chunk__67121 = G__67422;
count__67122 = G__67423;
i__67123 = G__67424;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__67127 = arguments.length;
switch (G__67127) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__67128 = cljs.core.seq(events);
var chunk__67129 = null;
var count__67130 = (0);
var i__67131 = (0);
while(true){
if((i__67131 < count__67130)){
var vec__67138 = chunk__67129.cljs$core$IIndexed$_nth$arity$2(null,i__67131);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67138,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67138,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__67426 = seq__67128;
var G__67427 = chunk__67129;
var G__67428 = count__67130;
var G__67429 = (i__67131 + (1));
seq__67128 = G__67426;
chunk__67129 = G__67427;
count__67130 = G__67428;
i__67131 = G__67429;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67128);
if(temp__5825__auto__){
var seq__67128__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67128__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67128__$1);
var G__67430 = cljs.core.chunk_rest(seq__67128__$1);
var G__67431 = c__5548__auto__;
var G__67432 = cljs.core.count(c__5548__auto__);
var G__67433 = (0);
seq__67128 = G__67430;
chunk__67129 = G__67431;
count__67130 = G__67432;
i__67131 = G__67433;
continue;
} else {
var vec__67141 = cljs.core.first(seq__67128__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67141,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67141,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__67434 = cljs.core.next(seq__67128__$1);
var G__67435 = null;
var G__67436 = (0);
var G__67437 = (0);
seq__67128 = G__67434;
chunk__67129 = G__67435;
count__67130 = G__67436;
i__67131 = G__67437;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__67146 = cljs.core.seq(styles);
var chunk__67147 = null;
var count__67148 = (0);
var i__67149 = (0);
while(true){
if((i__67149 < count__67148)){
var vec__67160 = chunk__67147.cljs$core$IIndexed$_nth$arity$2(null,i__67149);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67160,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67160,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__67438 = seq__67146;
var G__67439 = chunk__67147;
var G__67440 = count__67148;
var G__67441 = (i__67149 + (1));
seq__67146 = G__67438;
chunk__67147 = G__67439;
count__67148 = G__67440;
i__67149 = G__67441;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67146);
if(temp__5825__auto__){
var seq__67146__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67146__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67146__$1);
var G__67442 = cljs.core.chunk_rest(seq__67146__$1);
var G__67443 = c__5548__auto__;
var G__67444 = cljs.core.count(c__5548__auto__);
var G__67445 = (0);
seq__67146 = G__67442;
chunk__67147 = G__67443;
count__67148 = G__67444;
i__67149 = G__67445;
continue;
} else {
var vec__67167 = cljs.core.first(seq__67146__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67167,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67167,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__67446 = cljs.core.next(seq__67146__$1);
var G__67447 = null;
var G__67448 = (0);
var G__67449 = (0);
seq__67146 = G__67446;
chunk__67147 = G__67447;
count__67148 = G__67448;
i__67149 = G__67449;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__67175_67450 = key;
var G__67175_67451__$1 = (((G__67175_67450 instanceof cljs.core.Keyword))?G__67175_67450.fqn:null);
switch (G__67175_67451__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_67453 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_67453,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_67453,"aria-");
}
})())){
el.setAttribute(ks_67453,value);
} else {
(el[ks_67453] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__67176){
var map__67177 = p__67176;
var map__67177__$1 = cljs.core.__destructure_map(map__67177);
var props = map__67177__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67177__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__67181 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67181,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67181,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67181,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__67184 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__67184,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__67184;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__67189 = arguments.length;
switch (G__67189) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__67190){
var vec__67191 = p__67190;
var seq__67192 = cljs.core.seq(vec__67191);
var first__67193 = cljs.core.first(seq__67192);
var seq__67192__$1 = cljs.core.next(seq__67192);
var nn = first__67193;
var first__67193__$1 = cljs.core.first(seq__67192__$1);
var seq__67192__$2 = cljs.core.next(seq__67192__$1);
var np = first__67193__$1;
var nc = seq__67192__$2;
var node = vec__67191;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67194 = nn;
var G__67195 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__67194,G__67195) : create_fn.call(null,G__67194,G__67195));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67199 = nn;
var G__67200 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__67199,G__67200) : create_fn.call(null,G__67199,G__67200));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__67202 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67202,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67202,(1),null);
var seq__67205_67455 = cljs.core.seq(node_children);
var chunk__67206_67456 = null;
var count__67207_67457 = (0);
var i__67208_67458 = (0);
while(true){
if((i__67208_67458 < count__67207_67457)){
var child_struct_67459 = chunk__67206_67456.cljs$core$IIndexed$_nth$arity$2(null,i__67208_67458);
var children_67460 = shadow.dom.dom_node(child_struct_67459);
if(cljs.core.seq_QMARK_(children_67460)){
var seq__67228_67461 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_67460));
var chunk__67230_67462 = null;
var count__67231_67463 = (0);
var i__67232_67464 = (0);
while(true){
if((i__67232_67464 < count__67231_67463)){
var child_67465 = chunk__67230_67462.cljs$core$IIndexed$_nth$arity$2(null,i__67232_67464);
if(cljs.core.truth_(child_67465)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_67465);


var G__67466 = seq__67228_67461;
var G__67467 = chunk__67230_67462;
var G__67468 = count__67231_67463;
var G__67469 = (i__67232_67464 + (1));
seq__67228_67461 = G__67466;
chunk__67230_67462 = G__67467;
count__67231_67463 = G__67468;
i__67232_67464 = G__67469;
continue;
} else {
var G__67470 = seq__67228_67461;
var G__67471 = chunk__67230_67462;
var G__67472 = count__67231_67463;
var G__67473 = (i__67232_67464 + (1));
seq__67228_67461 = G__67470;
chunk__67230_67462 = G__67471;
count__67231_67463 = G__67472;
i__67232_67464 = G__67473;
continue;
}
} else {
var temp__5825__auto___67474 = cljs.core.seq(seq__67228_67461);
if(temp__5825__auto___67474){
var seq__67228_67475__$1 = temp__5825__auto___67474;
if(cljs.core.chunked_seq_QMARK_(seq__67228_67475__$1)){
var c__5548__auto___67476 = cljs.core.chunk_first(seq__67228_67475__$1);
var G__67477 = cljs.core.chunk_rest(seq__67228_67475__$1);
var G__67478 = c__5548__auto___67476;
var G__67479 = cljs.core.count(c__5548__auto___67476);
var G__67480 = (0);
seq__67228_67461 = G__67477;
chunk__67230_67462 = G__67478;
count__67231_67463 = G__67479;
i__67232_67464 = G__67480;
continue;
} else {
var child_67481 = cljs.core.first(seq__67228_67475__$1);
if(cljs.core.truth_(child_67481)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_67481);


var G__67482 = cljs.core.next(seq__67228_67475__$1);
var G__67483 = null;
var G__67484 = (0);
var G__67485 = (0);
seq__67228_67461 = G__67482;
chunk__67230_67462 = G__67483;
count__67231_67463 = G__67484;
i__67232_67464 = G__67485;
continue;
} else {
var G__67486 = cljs.core.next(seq__67228_67475__$1);
var G__67487 = null;
var G__67488 = (0);
var G__67489 = (0);
seq__67228_67461 = G__67486;
chunk__67230_67462 = G__67487;
count__67231_67463 = G__67488;
i__67232_67464 = G__67489;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_67460);
}


var G__67490 = seq__67205_67455;
var G__67491 = chunk__67206_67456;
var G__67492 = count__67207_67457;
var G__67493 = (i__67208_67458 + (1));
seq__67205_67455 = G__67490;
chunk__67206_67456 = G__67491;
count__67207_67457 = G__67492;
i__67208_67458 = G__67493;
continue;
} else {
var temp__5825__auto___67494 = cljs.core.seq(seq__67205_67455);
if(temp__5825__auto___67494){
var seq__67205_67495__$1 = temp__5825__auto___67494;
if(cljs.core.chunked_seq_QMARK_(seq__67205_67495__$1)){
var c__5548__auto___67496 = cljs.core.chunk_first(seq__67205_67495__$1);
var G__67497 = cljs.core.chunk_rest(seq__67205_67495__$1);
var G__67498 = c__5548__auto___67496;
var G__67499 = cljs.core.count(c__5548__auto___67496);
var G__67500 = (0);
seq__67205_67455 = G__67497;
chunk__67206_67456 = G__67498;
count__67207_67457 = G__67499;
i__67208_67458 = G__67500;
continue;
} else {
var child_struct_67501 = cljs.core.first(seq__67205_67495__$1);
var children_67502 = shadow.dom.dom_node(child_struct_67501);
if(cljs.core.seq_QMARK_(children_67502)){
var seq__67236_67503 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_67502));
var chunk__67238_67504 = null;
var count__67239_67505 = (0);
var i__67240_67506 = (0);
while(true){
if((i__67240_67506 < count__67239_67505)){
var child_67507 = chunk__67238_67504.cljs$core$IIndexed$_nth$arity$2(null,i__67240_67506);
if(cljs.core.truth_(child_67507)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_67507);


var G__67508 = seq__67236_67503;
var G__67509 = chunk__67238_67504;
var G__67510 = count__67239_67505;
var G__67511 = (i__67240_67506 + (1));
seq__67236_67503 = G__67508;
chunk__67238_67504 = G__67509;
count__67239_67505 = G__67510;
i__67240_67506 = G__67511;
continue;
} else {
var G__67512 = seq__67236_67503;
var G__67513 = chunk__67238_67504;
var G__67514 = count__67239_67505;
var G__67515 = (i__67240_67506 + (1));
seq__67236_67503 = G__67512;
chunk__67238_67504 = G__67513;
count__67239_67505 = G__67514;
i__67240_67506 = G__67515;
continue;
}
} else {
var temp__5825__auto___67516__$1 = cljs.core.seq(seq__67236_67503);
if(temp__5825__auto___67516__$1){
var seq__67236_67517__$1 = temp__5825__auto___67516__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67236_67517__$1)){
var c__5548__auto___67518 = cljs.core.chunk_first(seq__67236_67517__$1);
var G__67519 = cljs.core.chunk_rest(seq__67236_67517__$1);
var G__67520 = c__5548__auto___67518;
var G__67521 = cljs.core.count(c__5548__auto___67518);
var G__67522 = (0);
seq__67236_67503 = G__67519;
chunk__67238_67504 = G__67520;
count__67239_67505 = G__67521;
i__67240_67506 = G__67522;
continue;
} else {
var child_67523 = cljs.core.first(seq__67236_67517__$1);
if(cljs.core.truth_(child_67523)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_67523);


var G__67524 = cljs.core.next(seq__67236_67517__$1);
var G__67525 = null;
var G__67526 = (0);
var G__67527 = (0);
seq__67236_67503 = G__67524;
chunk__67238_67504 = G__67525;
count__67239_67505 = G__67526;
i__67240_67506 = G__67527;
continue;
} else {
var G__67528 = cljs.core.next(seq__67236_67517__$1);
var G__67529 = null;
var G__67530 = (0);
var G__67531 = (0);
seq__67236_67503 = G__67528;
chunk__67238_67504 = G__67529;
count__67239_67505 = G__67530;
i__67240_67506 = G__67531;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_67502);
}


var G__67532 = cljs.core.next(seq__67205_67495__$1);
var G__67533 = null;
var G__67534 = (0);
var G__67535 = (0);
seq__67205_67455 = G__67532;
chunk__67206_67456 = G__67533;
count__67207_67457 = G__67534;
i__67208_67458 = G__67535;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__67249 = cljs.core.seq(node);
var chunk__67250 = null;
var count__67251 = (0);
var i__67252 = (0);
while(true){
if((i__67252 < count__67251)){
var n = chunk__67250.cljs$core$IIndexed$_nth$arity$2(null,i__67252);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__67536 = seq__67249;
var G__67537 = chunk__67250;
var G__67538 = count__67251;
var G__67539 = (i__67252 + (1));
seq__67249 = G__67536;
chunk__67250 = G__67537;
count__67251 = G__67538;
i__67252 = G__67539;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67249);
if(temp__5825__auto__){
var seq__67249__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67249__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67249__$1);
var G__67540 = cljs.core.chunk_rest(seq__67249__$1);
var G__67541 = c__5548__auto__;
var G__67542 = cljs.core.count(c__5548__auto__);
var G__67543 = (0);
seq__67249 = G__67540;
chunk__67250 = G__67541;
count__67251 = G__67542;
i__67252 = G__67543;
continue;
} else {
var n = cljs.core.first(seq__67249__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__67544 = cljs.core.next(seq__67249__$1);
var G__67545 = null;
var G__67546 = (0);
var G__67547 = (0);
seq__67249 = G__67544;
chunk__67250 = G__67545;
count__67251 = G__67546;
i__67252 = G__67547;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__67257 = arguments.length;
switch (G__67257) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__67259 = arguments.length;
switch (G__67259) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__67261 = arguments.length;
switch (G__67261) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5755__auto__ = [];
var len__5749__auto___67551 = arguments.length;
var i__5750__auto___67552 = (0);
while(true){
if((i__5750__auto___67552 < len__5749__auto___67551)){
args__5755__auto__.push((arguments[i__5750__auto___67552]));

var G__67553 = (i__5750__auto___67552 + (1));
i__5750__auto___67552 = G__67553;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__67265_67554 = cljs.core.seq(nodes);
var chunk__67266_67555 = null;
var count__67267_67556 = (0);
var i__67268_67557 = (0);
while(true){
if((i__67268_67557 < count__67267_67556)){
var node_67558 = chunk__67266_67555.cljs$core$IIndexed$_nth$arity$2(null,i__67268_67557);
fragment.appendChild(shadow.dom._to_dom(node_67558));


var G__67559 = seq__67265_67554;
var G__67560 = chunk__67266_67555;
var G__67561 = count__67267_67556;
var G__67562 = (i__67268_67557 + (1));
seq__67265_67554 = G__67559;
chunk__67266_67555 = G__67560;
count__67267_67556 = G__67561;
i__67268_67557 = G__67562;
continue;
} else {
var temp__5825__auto___67563 = cljs.core.seq(seq__67265_67554);
if(temp__5825__auto___67563){
var seq__67265_67564__$1 = temp__5825__auto___67563;
if(cljs.core.chunked_seq_QMARK_(seq__67265_67564__$1)){
var c__5548__auto___67565 = cljs.core.chunk_first(seq__67265_67564__$1);
var G__67566 = cljs.core.chunk_rest(seq__67265_67564__$1);
var G__67567 = c__5548__auto___67565;
var G__67568 = cljs.core.count(c__5548__auto___67565);
var G__67569 = (0);
seq__67265_67554 = G__67566;
chunk__67266_67555 = G__67567;
count__67267_67556 = G__67568;
i__67268_67557 = G__67569;
continue;
} else {
var node_67570 = cljs.core.first(seq__67265_67564__$1);
fragment.appendChild(shadow.dom._to_dom(node_67570));


var G__67571 = cljs.core.next(seq__67265_67564__$1);
var G__67572 = null;
var G__67573 = (0);
var G__67574 = (0);
seq__67265_67554 = G__67571;
chunk__67266_67555 = G__67572;
count__67267_67556 = G__67573;
i__67268_67557 = G__67574;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq67264){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67264));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__67270_67575 = cljs.core.seq(scripts);
var chunk__67271_67576 = null;
var count__67272_67577 = (0);
var i__67273_67578 = (0);
while(true){
if((i__67273_67578 < count__67272_67577)){
var vec__67283_67579 = chunk__67271_67576.cljs$core$IIndexed$_nth$arity$2(null,i__67273_67578);
var script_tag_67580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67283_67579,(0),null);
var script_body_67581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67283_67579,(1),null);
eval(script_body_67581);


var G__67582 = seq__67270_67575;
var G__67583 = chunk__67271_67576;
var G__67584 = count__67272_67577;
var G__67585 = (i__67273_67578 + (1));
seq__67270_67575 = G__67582;
chunk__67271_67576 = G__67583;
count__67272_67577 = G__67584;
i__67273_67578 = G__67585;
continue;
} else {
var temp__5825__auto___67586 = cljs.core.seq(seq__67270_67575);
if(temp__5825__auto___67586){
var seq__67270_67587__$1 = temp__5825__auto___67586;
if(cljs.core.chunked_seq_QMARK_(seq__67270_67587__$1)){
var c__5548__auto___67588 = cljs.core.chunk_first(seq__67270_67587__$1);
var G__67589 = cljs.core.chunk_rest(seq__67270_67587__$1);
var G__67590 = c__5548__auto___67588;
var G__67591 = cljs.core.count(c__5548__auto___67588);
var G__67592 = (0);
seq__67270_67575 = G__67589;
chunk__67271_67576 = G__67590;
count__67272_67577 = G__67591;
i__67273_67578 = G__67592;
continue;
} else {
var vec__67286_67593 = cljs.core.first(seq__67270_67587__$1);
var script_tag_67594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67286_67593,(0),null);
var script_body_67595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67286_67593,(1),null);
eval(script_body_67595);


var G__67596 = cljs.core.next(seq__67270_67587__$1);
var G__67597 = null;
var G__67598 = (0);
var G__67599 = (0);
seq__67270_67575 = G__67596;
chunk__67271_67576 = G__67597;
count__67272_67577 = G__67598;
i__67273_67578 = G__67599;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__67291){
var vec__67293 = p__67291;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67293,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67293,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__67298 = arguments.length;
switch (G__67298) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__67299 = cljs.core.seq(style_keys);
var chunk__67300 = null;
var count__67301 = (0);
var i__67302 = (0);
while(true){
if((i__67302 < count__67301)){
var it = chunk__67300.cljs$core$IIndexed$_nth$arity$2(null,i__67302);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__67601 = seq__67299;
var G__67602 = chunk__67300;
var G__67603 = count__67301;
var G__67604 = (i__67302 + (1));
seq__67299 = G__67601;
chunk__67300 = G__67602;
count__67301 = G__67603;
i__67302 = G__67604;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67299);
if(temp__5825__auto__){
var seq__67299__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67299__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67299__$1);
var G__67605 = cljs.core.chunk_rest(seq__67299__$1);
var G__67606 = c__5548__auto__;
var G__67607 = cljs.core.count(c__5548__auto__);
var G__67608 = (0);
seq__67299 = G__67605;
chunk__67300 = G__67606;
count__67301 = G__67607;
i__67302 = G__67608;
continue;
} else {
var it = cljs.core.first(seq__67299__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__67609 = cljs.core.next(seq__67299__$1);
var G__67610 = null;
var G__67611 = (0);
var G__67612 = (0);
seq__67299 = G__67609;
chunk__67300 = G__67610;
count__67301 = G__67611;
i__67302 = G__67612;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k67308,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__67313 = k67308;
var G__67313__$1 = (((G__67313 instanceof cljs.core.Keyword))?G__67313.fqn:null);
switch (G__67313__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67308,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__67314){
var vec__67315 = p__67314;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67315,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67315,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67307){
var self__ = this;
var G__67307__$1 = this;
return (new cljs.core.RecordIter((0),G__67307__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67309,other67310){
var self__ = this;
var this67309__$1 = this;
return (((!((other67310 == null)))) && ((((this67309__$1.constructor === other67310.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67309__$1.x,other67310.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67309__$1.y,other67310.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67309__$1.__extmap,other67310.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k67308){
var self__ = this;
var this__5330__auto____$1 = this;
var G__67318 = k67308;
var G__67318__$1 = (((G__67318 instanceof cljs.core.Keyword))?G__67318.fqn:null);
switch (G__67318__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67308);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__67307){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__67319 = cljs.core.keyword_identical_QMARK_;
var expr__67320 = k__5332__auto__;
if(cljs.core.truth_((pred__67319.cljs$core$IFn$_invoke$arity$2 ? pred__67319.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__67320) : pred__67319.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__67320)))){
return (new shadow.dom.Coordinate(G__67307,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67319.cljs$core$IFn$_invoke$arity$2 ? pred__67319.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__67320) : pred__67319.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__67320)))){
return (new shadow.dom.Coordinate(self__.x,G__67307,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__67307),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__67307){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__67307,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__67312){
var extmap__5365__auto__ = (function (){var G__67322 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67312,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__67312)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67322);
} else {
return G__67322;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__67312),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__67312),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k67324,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__67328 = k67324;
var G__67328__$1 = (((G__67328 instanceof cljs.core.Keyword))?G__67328.fqn:null);
switch (G__67328__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67324,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__67329){
var vec__67330 = p__67329;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67330,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67330,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67323){
var self__ = this;
var G__67323__$1 = this;
return (new cljs.core.RecordIter((0),G__67323__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67325,other67326){
var self__ = this;
var this67325__$1 = this;
return (((!((other67326 == null)))) && ((((this67325__$1.constructor === other67326.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67325__$1.w,other67326.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67325__$1.h,other67326.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67325__$1.__extmap,other67326.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k67324){
var self__ = this;
var this__5330__auto____$1 = this;
var G__67333 = k67324;
var G__67333__$1 = (((G__67333 instanceof cljs.core.Keyword))?G__67333.fqn:null);
switch (G__67333__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67324);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__67323){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__67334 = cljs.core.keyword_identical_QMARK_;
var expr__67335 = k__5332__auto__;
if(cljs.core.truth_((pred__67334.cljs$core$IFn$_invoke$arity$2 ? pred__67334.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__67335) : pred__67334.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__67335)))){
return (new shadow.dom.Size(G__67323,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67334.cljs$core$IFn$_invoke$arity$2 ? pred__67334.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__67335) : pred__67334.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__67335)))){
return (new shadow.dom.Size(self__.w,G__67323,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__67323),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__67323){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__67323,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__67327){
var extmap__5365__auto__ = (function (){var G__67337 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67327,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__67327)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67337);
} else {
return G__67337;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__67327),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__67327),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__67617 = (i + (1));
var G__67618 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__67617;
ret = G__67618;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__67342){
var vec__67343 = p__67342;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67343,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67343,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__67347 = arguments.length;
switch (G__67347) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__67620 = ps;
var G__67621 = (i + (1));
el__$1 = G__67620;
i = G__67621;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__67348 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67348,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67348,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67348,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__67351_67622 = cljs.core.seq(props);
var chunk__67352_67623 = null;
var count__67353_67624 = (0);
var i__67354_67625 = (0);
while(true){
if((i__67354_67625 < count__67353_67624)){
var vec__67361_67626 = chunk__67352_67623.cljs$core$IIndexed$_nth$arity$2(null,i__67354_67625);
var k_67627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67361_67626,(0),null);
var v_67628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67361_67626,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_67627);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_67627),v_67628);


var G__67629 = seq__67351_67622;
var G__67630 = chunk__67352_67623;
var G__67631 = count__67353_67624;
var G__67632 = (i__67354_67625 + (1));
seq__67351_67622 = G__67629;
chunk__67352_67623 = G__67630;
count__67353_67624 = G__67631;
i__67354_67625 = G__67632;
continue;
} else {
var temp__5825__auto___67633 = cljs.core.seq(seq__67351_67622);
if(temp__5825__auto___67633){
var seq__67351_67634__$1 = temp__5825__auto___67633;
if(cljs.core.chunked_seq_QMARK_(seq__67351_67634__$1)){
var c__5548__auto___67635 = cljs.core.chunk_first(seq__67351_67634__$1);
var G__67636 = cljs.core.chunk_rest(seq__67351_67634__$1);
var G__67637 = c__5548__auto___67635;
var G__67638 = cljs.core.count(c__5548__auto___67635);
var G__67639 = (0);
seq__67351_67622 = G__67636;
chunk__67352_67623 = G__67637;
count__67353_67624 = G__67638;
i__67354_67625 = G__67639;
continue;
} else {
var vec__67364_67640 = cljs.core.first(seq__67351_67634__$1);
var k_67641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67364_67640,(0),null);
var v_67642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67364_67640,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_67641);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_67641),v_67642);


var G__67643 = cljs.core.next(seq__67351_67634__$1);
var G__67644 = null;
var G__67645 = (0);
var G__67646 = (0);
seq__67351_67622 = G__67643;
chunk__67352_67623 = G__67644;
count__67353_67624 = G__67645;
i__67354_67625 = G__67646;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__67368 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67368,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67368,(1),null);
var seq__67371_67647 = cljs.core.seq(node_children);
var chunk__67373_67648 = null;
var count__67374_67649 = (0);
var i__67375_67650 = (0);
while(true){
if((i__67375_67650 < count__67374_67649)){
var child_struct_67651 = chunk__67373_67648.cljs$core$IIndexed$_nth$arity$2(null,i__67375_67650);
if((!((child_struct_67651 == null)))){
if(typeof child_struct_67651 === 'string'){
var text_67652 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_67652),child_struct_67651].join(''));
} else {
var children_67653 = shadow.dom.svg_node(child_struct_67651);
if(cljs.core.seq_QMARK_(children_67653)){
var seq__67389_67654 = cljs.core.seq(children_67653);
var chunk__67391_67655 = null;
var count__67392_67656 = (0);
var i__67393_67657 = (0);
while(true){
if((i__67393_67657 < count__67392_67656)){
var child_67658 = chunk__67391_67655.cljs$core$IIndexed$_nth$arity$2(null,i__67393_67657);
if(cljs.core.truth_(child_67658)){
node.appendChild(child_67658);


var G__67659 = seq__67389_67654;
var G__67660 = chunk__67391_67655;
var G__67661 = count__67392_67656;
var G__67662 = (i__67393_67657 + (1));
seq__67389_67654 = G__67659;
chunk__67391_67655 = G__67660;
count__67392_67656 = G__67661;
i__67393_67657 = G__67662;
continue;
} else {
var G__67663 = seq__67389_67654;
var G__67664 = chunk__67391_67655;
var G__67665 = count__67392_67656;
var G__67666 = (i__67393_67657 + (1));
seq__67389_67654 = G__67663;
chunk__67391_67655 = G__67664;
count__67392_67656 = G__67665;
i__67393_67657 = G__67666;
continue;
}
} else {
var temp__5825__auto___67667 = cljs.core.seq(seq__67389_67654);
if(temp__5825__auto___67667){
var seq__67389_67668__$1 = temp__5825__auto___67667;
if(cljs.core.chunked_seq_QMARK_(seq__67389_67668__$1)){
var c__5548__auto___67669 = cljs.core.chunk_first(seq__67389_67668__$1);
var G__67670 = cljs.core.chunk_rest(seq__67389_67668__$1);
var G__67671 = c__5548__auto___67669;
var G__67672 = cljs.core.count(c__5548__auto___67669);
var G__67673 = (0);
seq__67389_67654 = G__67670;
chunk__67391_67655 = G__67671;
count__67392_67656 = G__67672;
i__67393_67657 = G__67673;
continue;
} else {
var child_67674 = cljs.core.first(seq__67389_67668__$1);
if(cljs.core.truth_(child_67674)){
node.appendChild(child_67674);


var G__67675 = cljs.core.next(seq__67389_67668__$1);
var G__67676 = null;
var G__67677 = (0);
var G__67678 = (0);
seq__67389_67654 = G__67675;
chunk__67391_67655 = G__67676;
count__67392_67656 = G__67677;
i__67393_67657 = G__67678;
continue;
} else {
var G__67679 = cljs.core.next(seq__67389_67668__$1);
var G__67680 = null;
var G__67681 = (0);
var G__67682 = (0);
seq__67389_67654 = G__67679;
chunk__67391_67655 = G__67680;
count__67392_67656 = G__67681;
i__67393_67657 = G__67682;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_67653);
}
}


var G__67683 = seq__67371_67647;
var G__67684 = chunk__67373_67648;
var G__67685 = count__67374_67649;
var G__67686 = (i__67375_67650 + (1));
seq__67371_67647 = G__67683;
chunk__67373_67648 = G__67684;
count__67374_67649 = G__67685;
i__67375_67650 = G__67686;
continue;
} else {
var G__67687 = seq__67371_67647;
var G__67688 = chunk__67373_67648;
var G__67689 = count__67374_67649;
var G__67690 = (i__67375_67650 + (1));
seq__67371_67647 = G__67687;
chunk__67373_67648 = G__67688;
count__67374_67649 = G__67689;
i__67375_67650 = G__67690;
continue;
}
} else {
var temp__5825__auto___67691 = cljs.core.seq(seq__67371_67647);
if(temp__5825__auto___67691){
var seq__67371_67692__$1 = temp__5825__auto___67691;
if(cljs.core.chunked_seq_QMARK_(seq__67371_67692__$1)){
var c__5548__auto___67693 = cljs.core.chunk_first(seq__67371_67692__$1);
var G__67694 = cljs.core.chunk_rest(seq__67371_67692__$1);
var G__67695 = c__5548__auto___67693;
var G__67696 = cljs.core.count(c__5548__auto___67693);
var G__67697 = (0);
seq__67371_67647 = G__67694;
chunk__67373_67648 = G__67695;
count__67374_67649 = G__67696;
i__67375_67650 = G__67697;
continue;
} else {
var child_struct_67698 = cljs.core.first(seq__67371_67692__$1);
if((!((child_struct_67698 == null)))){
if(typeof child_struct_67698 === 'string'){
var text_67699 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_67699),child_struct_67698].join(''));
} else {
var children_67700 = shadow.dom.svg_node(child_struct_67698);
if(cljs.core.seq_QMARK_(children_67700)){
var seq__67395_67701 = cljs.core.seq(children_67700);
var chunk__67397_67702 = null;
var count__67398_67703 = (0);
var i__67399_67704 = (0);
while(true){
if((i__67399_67704 < count__67398_67703)){
var child_67705 = chunk__67397_67702.cljs$core$IIndexed$_nth$arity$2(null,i__67399_67704);
if(cljs.core.truth_(child_67705)){
node.appendChild(child_67705);


var G__67706 = seq__67395_67701;
var G__67707 = chunk__67397_67702;
var G__67708 = count__67398_67703;
var G__67709 = (i__67399_67704 + (1));
seq__67395_67701 = G__67706;
chunk__67397_67702 = G__67707;
count__67398_67703 = G__67708;
i__67399_67704 = G__67709;
continue;
} else {
var G__67710 = seq__67395_67701;
var G__67711 = chunk__67397_67702;
var G__67712 = count__67398_67703;
var G__67713 = (i__67399_67704 + (1));
seq__67395_67701 = G__67710;
chunk__67397_67702 = G__67711;
count__67398_67703 = G__67712;
i__67399_67704 = G__67713;
continue;
}
} else {
var temp__5825__auto___67714__$1 = cljs.core.seq(seq__67395_67701);
if(temp__5825__auto___67714__$1){
var seq__67395_67715__$1 = temp__5825__auto___67714__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67395_67715__$1)){
var c__5548__auto___67716 = cljs.core.chunk_first(seq__67395_67715__$1);
var G__67717 = cljs.core.chunk_rest(seq__67395_67715__$1);
var G__67718 = c__5548__auto___67716;
var G__67719 = cljs.core.count(c__5548__auto___67716);
var G__67720 = (0);
seq__67395_67701 = G__67717;
chunk__67397_67702 = G__67718;
count__67398_67703 = G__67719;
i__67399_67704 = G__67720;
continue;
} else {
var child_67721 = cljs.core.first(seq__67395_67715__$1);
if(cljs.core.truth_(child_67721)){
node.appendChild(child_67721);


var G__67722 = cljs.core.next(seq__67395_67715__$1);
var G__67723 = null;
var G__67724 = (0);
var G__67725 = (0);
seq__67395_67701 = G__67722;
chunk__67397_67702 = G__67723;
count__67398_67703 = G__67724;
i__67399_67704 = G__67725;
continue;
} else {
var G__67726 = cljs.core.next(seq__67395_67715__$1);
var G__67727 = null;
var G__67728 = (0);
var G__67729 = (0);
seq__67395_67701 = G__67726;
chunk__67397_67702 = G__67727;
count__67398_67703 = G__67728;
i__67399_67704 = G__67729;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_67700);
}
}


var G__67730 = cljs.core.next(seq__67371_67692__$1);
var G__67731 = null;
var G__67732 = (0);
var G__67733 = (0);
seq__67371_67647 = G__67730;
chunk__67373_67648 = G__67731;
count__67374_67649 = G__67732;
i__67375_67650 = G__67733;
continue;
} else {
var G__67734 = cljs.core.next(seq__67371_67692__$1);
var G__67735 = null;
var G__67736 = (0);
var G__67737 = (0);
seq__67371_67647 = G__67734;
chunk__67373_67648 = G__67735;
count__67374_67649 = G__67736;
i__67375_67650 = G__67737;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___67738 = arguments.length;
var i__5750__auto___67739 = (0);
while(true){
if((i__5750__auto___67739 < len__5749__auto___67738)){
args__5755__auto__.push((arguments[i__5750__auto___67739]));

var G__67740 = (i__5750__auto___67739 + (1));
i__5750__auto___67739 = G__67740;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq67401){
var G__67402 = cljs.core.first(seq67401);
var seq67401__$1 = cljs.core.next(seq67401);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67402,seq67401__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
