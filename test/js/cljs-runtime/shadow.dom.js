goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_67539 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_67539(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_67540 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_67540(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__67237 = coll;
var G__67238 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__67237,G__67238) : shadow.dom.lazy_native_coll_seq.call(null,G__67237,G__67238));
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
var G__67243 = arguments.length;
switch (G__67243) {
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
var G__67245 = arguments.length;
switch (G__67245) {
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
var G__67248 = arguments.length;
switch (G__67248) {
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
var G__67250 = arguments.length;
switch (G__67250) {
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
var G__67252 = arguments.length;
switch (G__67252) {
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
var G__67254 = arguments.length;
switch (G__67254) {
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
}catch (e67255){if((e67255 instanceof Object)){
var e = e67255;
return console.log("didnt support attachEvent",el,e);
} else {
throw e67255;

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
var seq__67258 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__67259 = null;
var count__67260 = (0);
var i__67261 = (0);
while(true){
if((i__67261 < count__67260)){
var el = chunk__67259.cljs$core$IIndexed$_nth$arity$2(null,i__67261);
var handler_67547__$1 = ((function (seq__67258,chunk__67259,count__67260,i__67261,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__67258,chunk__67259,count__67260,i__67261,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_67547__$1);


var G__67548 = seq__67258;
var G__67549 = chunk__67259;
var G__67550 = count__67260;
var G__67551 = (i__67261 + (1));
seq__67258 = G__67548;
chunk__67259 = G__67549;
count__67260 = G__67550;
i__67261 = G__67551;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67258);
if(temp__5825__auto__){
var seq__67258__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67258__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67258__$1);
var G__67552 = cljs.core.chunk_rest(seq__67258__$1);
var G__67553 = c__5548__auto__;
var G__67554 = cljs.core.count(c__5548__auto__);
var G__67555 = (0);
seq__67258 = G__67552;
chunk__67259 = G__67553;
count__67260 = G__67554;
i__67261 = G__67555;
continue;
} else {
var el = cljs.core.first(seq__67258__$1);
var handler_67556__$1 = ((function (seq__67258,chunk__67259,count__67260,i__67261,el,seq__67258__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__67258,chunk__67259,count__67260,i__67261,el,seq__67258__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_67556__$1);


var G__67557 = cljs.core.next(seq__67258__$1);
var G__67558 = null;
var G__67559 = (0);
var G__67560 = (0);
seq__67258 = G__67557;
chunk__67259 = G__67558;
count__67260 = G__67559;
i__67261 = G__67560;
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
var G__67263 = arguments.length;
switch (G__67263) {
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
var seq__67264 = cljs.core.seq(events);
var chunk__67265 = null;
var count__67266 = (0);
var i__67267 = (0);
while(true){
if((i__67267 < count__67266)){
var vec__67274 = chunk__67265.cljs$core$IIndexed$_nth$arity$2(null,i__67267);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67274,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67274,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__67562 = seq__67264;
var G__67563 = chunk__67265;
var G__67564 = count__67266;
var G__67565 = (i__67267 + (1));
seq__67264 = G__67562;
chunk__67265 = G__67563;
count__67266 = G__67564;
i__67267 = G__67565;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67264);
if(temp__5825__auto__){
var seq__67264__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67264__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67264__$1);
var G__67566 = cljs.core.chunk_rest(seq__67264__$1);
var G__67567 = c__5548__auto__;
var G__67568 = cljs.core.count(c__5548__auto__);
var G__67569 = (0);
seq__67264 = G__67566;
chunk__67265 = G__67567;
count__67266 = G__67568;
i__67267 = G__67569;
continue;
} else {
var vec__67277 = cljs.core.first(seq__67264__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67277,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67277,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__67570 = cljs.core.next(seq__67264__$1);
var G__67571 = null;
var G__67572 = (0);
var G__67573 = (0);
seq__67264 = G__67570;
chunk__67265 = G__67571;
count__67266 = G__67572;
i__67267 = G__67573;
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
var seq__67284 = cljs.core.seq(styles);
var chunk__67285 = null;
var count__67286 = (0);
var i__67287 = (0);
while(true){
if((i__67287 < count__67286)){
var vec__67297 = chunk__67285.cljs$core$IIndexed$_nth$arity$2(null,i__67287);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67297,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67297,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__67574 = seq__67284;
var G__67575 = chunk__67285;
var G__67576 = count__67286;
var G__67577 = (i__67287 + (1));
seq__67284 = G__67574;
chunk__67285 = G__67575;
count__67286 = G__67576;
i__67287 = G__67577;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67284);
if(temp__5825__auto__){
var seq__67284__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67284__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67284__$1);
var G__67578 = cljs.core.chunk_rest(seq__67284__$1);
var G__67579 = c__5548__auto__;
var G__67580 = cljs.core.count(c__5548__auto__);
var G__67581 = (0);
seq__67284 = G__67578;
chunk__67285 = G__67579;
count__67286 = G__67580;
i__67287 = G__67581;
continue;
} else {
var vec__67304 = cljs.core.first(seq__67284__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67304,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67304,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__67582 = cljs.core.next(seq__67284__$1);
var G__67583 = null;
var G__67584 = (0);
var G__67585 = (0);
seq__67284 = G__67582;
chunk__67285 = G__67583;
count__67286 = G__67584;
i__67287 = G__67585;
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
var G__67311_67586 = key;
var G__67311_67587__$1 = (((G__67311_67586 instanceof cljs.core.Keyword))?G__67311_67586.fqn:null);
switch (G__67311_67587__$1) {
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
var ks_67589 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_67589,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_67589,"aria-");
}
})())){
el.setAttribute(ks_67589,value);
} else {
(el[ks_67589] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__67315){
var map__67316 = p__67315;
var map__67316__$1 = cljs.core.__destructure_map(map__67316);
var props = map__67316__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67316__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__67320 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67320,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67320,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67320,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__67323 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__67323,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__67323;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__67325 = arguments.length;
switch (G__67325) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__67326){
var vec__67327 = p__67326;
var seq__67328 = cljs.core.seq(vec__67327);
var first__67329 = cljs.core.first(seq__67328);
var seq__67328__$1 = cljs.core.next(seq__67328);
var nn = first__67329;
var first__67329__$1 = cljs.core.first(seq__67328__$1);
var seq__67328__$2 = cljs.core.next(seq__67328__$1);
var np = first__67329__$1;
var nc = seq__67328__$2;
var node = vec__67327;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67330 = nn;
var G__67331 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__67330,G__67331) : create_fn.call(null,G__67330,G__67331));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67332 = nn;
var G__67333 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__67332,G__67333) : create_fn.call(null,G__67332,G__67333));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__67334 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67334,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67334,(1),null);
var seq__67337_67591 = cljs.core.seq(node_children);
var chunk__67338_67592 = null;
var count__67339_67593 = (0);
var i__67340_67594 = (0);
while(true){
if((i__67340_67594 < count__67339_67593)){
var child_struct_67595 = chunk__67338_67592.cljs$core$IIndexed$_nth$arity$2(null,i__67340_67594);
var children_67596 = shadow.dom.dom_node(child_struct_67595);
if(cljs.core.seq_QMARK_(children_67596)){
var seq__67362_67597 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_67596));
var chunk__67364_67598 = null;
var count__67365_67599 = (0);
var i__67366_67600 = (0);
while(true){
if((i__67366_67600 < count__67365_67599)){
var child_67601 = chunk__67364_67598.cljs$core$IIndexed$_nth$arity$2(null,i__67366_67600);
if(cljs.core.truth_(child_67601)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_67601);


var G__67602 = seq__67362_67597;
var G__67603 = chunk__67364_67598;
var G__67604 = count__67365_67599;
var G__67605 = (i__67366_67600 + (1));
seq__67362_67597 = G__67602;
chunk__67364_67598 = G__67603;
count__67365_67599 = G__67604;
i__67366_67600 = G__67605;
continue;
} else {
var G__67606 = seq__67362_67597;
var G__67607 = chunk__67364_67598;
var G__67608 = count__67365_67599;
var G__67609 = (i__67366_67600 + (1));
seq__67362_67597 = G__67606;
chunk__67364_67598 = G__67607;
count__67365_67599 = G__67608;
i__67366_67600 = G__67609;
continue;
}
} else {
var temp__5825__auto___67610 = cljs.core.seq(seq__67362_67597);
if(temp__5825__auto___67610){
var seq__67362_67611__$1 = temp__5825__auto___67610;
if(cljs.core.chunked_seq_QMARK_(seq__67362_67611__$1)){
var c__5548__auto___67612 = cljs.core.chunk_first(seq__67362_67611__$1);
var G__67613 = cljs.core.chunk_rest(seq__67362_67611__$1);
var G__67614 = c__5548__auto___67612;
var G__67615 = cljs.core.count(c__5548__auto___67612);
var G__67616 = (0);
seq__67362_67597 = G__67613;
chunk__67364_67598 = G__67614;
count__67365_67599 = G__67615;
i__67366_67600 = G__67616;
continue;
} else {
var child_67617 = cljs.core.first(seq__67362_67611__$1);
if(cljs.core.truth_(child_67617)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_67617);


var G__67618 = cljs.core.next(seq__67362_67611__$1);
var G__67619 = null;
var G__67620 = (0);
var G__67621 = (0);
seq__67362_67597 = G__67618;
chunk__67364_67598 = G__67619;
count__67365_67599 = G__67620;
i__67366_67600 = G__67621;
continue;
} else {
var G__67622 = cljs.core.next(seq__67362_67611__$1);
var G__67623 = null;
var G__67624 = (0);
var G__67625 = (0);
seq__67362_67597 = G__67622;
chunk__67364_67598 = G__67623;
count__67365_67599 = G__67624;
i__67366_67600 = G__67625;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_67596);
}


var G__67626 = seq__67337_67591;
var G__67627 = chunk__67338_67592;
var G__67628 = count__67339_67593;
var G__67629 = (i__67340_67594 + (1));
seq__67337_67591 = G__67626;
chunk__67338_67592 = G__67627;
count__67339_67593 = G__67628;
i__67340_67594 = G__67629;
continue;
} else {
var temp__5825__auto___67630 = cljs.core.seq(seq__67337_67591);
if(temp__5825__auto___67630){
var seq__67337_67631__$1 = temp__5825__auto___67630;
if(cljs.core.chunked_seq_QMARK_(seq__67337_67631__$1)){
var c__5548__auto___67632 = cljs.core.chunk_first(seq__67337_67631__$1);
var G__67633 = cljs.core.chunk_rest(seq__67337_67631__$1);
var G__67634 = c__5548__auto___67632;
var G__67635 = cljs.core.count(c__5548__auto___67632);
var G__67636 = (0);
seq__67337_67591 = G__67633;
chunk__67338_67592 = G__67634;
count__67339_67593 = G__67635;
i__67340_67594 = G__67636;
continue;
} else {
var child_struct_67637 = cljs.core.first(seq__67337_67631__$1);
var children_67638 = shadow.dom.dom_node(child_struct_67637);
if(cljs.core.seq_QMARK_(children_67638)){
var seq__67370_67639 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_67638));
var chunk__67372_67640 = null;
var count__67373_67641 = (0);
var i__67374_67642 = (0);
while(true){
if((i__67374_67642 < count__67373_67641)){
var child_67643 = chunk__67372_67640.cljs$core$IIndexed$_nth$arity$2(null,i__67374_67642);
if(cljs.core.truth_(child_67643)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_67643);


var G__67644 = seq__67370_67639;
var G__67645 = chunk__67372_67640;
var G__67646 = count__67373_67641;
var G__67647 = (i__67374_67642 + (1));
seq__67370_67639 = G__67644;
chunk__67372_67640 = G__67645;
count__67373_67641 = G__67646;
i__67374_67642 = G__67647;
continue;
} else {
var G__67648 = seq__67370_67639;
var G__67649 = chunk__67372_67640;
var G__67650 = count__67373_67641;
var G__67651 = (i__67374_67642 + (1));
seq__67370_67639 = G__67648;
chunk__67372_67640 = G__67649;
count__67373_67641 = G__67650;
i__67374_67642 = G__67651;
continue;
}
} else {
var temp__5825__auto___67652__$1 = cljs.core.seq(seq__67370_67639);
if(temp__5825__auto___67652__$1){
var seq__67370_67653__$1 = temp__5825__auto___67652__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67370_67653__$1)){
var c__5548__auto___67654 = cljs.core.chunk_first(seq__67370_67653__$1);
var G__67655 = cljs.core.chunk_rest(seq__67370_67653__$1);
var G__67656 = c__5548__auto___67654;
var G__67657 = cljs.core.count(c__5548__auto___67654);
var G__67658 = (0);
seq__67370_67639 = G__67655;
chunk__67372_67640 = G__67656;
count__67373_67641 = G__67657;
i__67374_67642 = G__67658;
continue;
} else {
var child_67659 = cljs.core.first(seq__67370_67653__$1);
if(cljs.core.truth_(child_67659)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_67659);


var G__67660 = cljs.core.next(seq__67370_67653__$1);
var G__67661 = null;
var G__67662 = (0);
var G__67663 = (0);
seq__67370_67639 = G__67660;
chunk__67372_67640 = G__67661;
count__67373_67641 = G__67662;
i__67374_67642 = G__67663;
continue;
} else {
var G__67664 = cljs.core.next(seq__67370_67653__$1);
var G__67665 = null;
var G__67666 = (0);
var G__67667 = (0);
seq__67370_67639 = G__67664;
chunk__67372_67640 = G__67665;
count__67373_67641 = G__67666;
i__67374_67642 = G__67667;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_67638);
}


var G__67668 = cljs.core.next(seq__67337_67631__$1);
var G__67669 = null;
var G__67670 = (0);
var G__67671 = (0);
seq__67337_67591 = G__67668;
chunk__67338_67592 = G__67669;
count__67339_67593 = G__67670;
i__67340_67594 = G__67671;
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
var seq__67378 = cljs.core.seq(node);
var chunk__67379 = null;
var count__67380 = (0);
var i__67381 = (0);
while(true){
if((i__67381 < count__67380)){
var n = chunk__67379.cljs$core$IIndexed$_nth$arity$2(null,i__67381);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__67672 = seq__67378;
var G__67673 = chunk__67379;
var G__67674 = count__67380;
var G__67675 = (i__67381 + (1));
seq__67378 = G__67672;
chunk__67379 = G__67673;
count__67380 = G__67674;
i__67381 = G__67675;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67378);
if(temp__5825__auto__){
var seq__67378__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67378__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67378__$1);
var G__67676 = cljs.core.chunk_rest(seq__67378__$1);
var G__67677 = c__5548__auto__;
var G__67678 = cljs.core.count(c__5548__auto__);
var G__67679 = (0);
seq__67378 = G__67676;
chunk__67379 = G__67677;
count__67380 = G__67678;
i__67381 = G__67679;
continue;
} else {
var n = cljs.core.first(seq__67378__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__67680 = cljs.core.next(seq__67378__$1);
var G__67681 = null;
var G__67682 = (0);
var G__67683 = (0);
seq__67378 = G__67680;
chunk__67379 = G__67681;
count__67380 = G__67682;
i__67381 = G__67683;
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
var G__67384 = arguments.length;
switch (G__67384) {
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
var G__67388 = arguments.length;
switch (G__67388) {
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
var G__67390 = arguments.length;
switch (G__67390) {
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
var len__5749__auto___67687 = arguments.length;
var i__5750__auto___67688 = (0);
while(true){
if((i__5750__auto___67688 < len__5749__auto___67687)){
args__5755__auto__.push((arguments[i__5750__auto___67688]));

var G__67689 = (i__5750__auto___67688 + (1));
i__5750__auto___67688 = G__67689;
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
var seq__67397_67690 = cljs.core.seq(nodes);
var chunk__67398_67691 = null;
var count__67399_67692 = (0);
var i__67400_67693 = (0);
while(true){
if((i__67400_67693 < count__67399_67692)){
var node_67694 = chunk__67398_67691.cljs$core$IIndexed$_nth$arity$2(null,i__67400_67693);
fragment.appendChild(shadow.dom._to_dom(node_67694));


var G__67695 = seq__67397_67690;
var G__67696 = chunk__67398_67691;
var G__67697 = count__67399_67692;
var G__67698 = (i__67400_67693 + (1));
seq__67397_67690 = G__67695;
chunk__67398_67691 = G__67696;
count__67399_67692 = G__67697;
i__67400_67693 = G__67698;
continue;
} else {
var temp__5825__auto___67699 = cljs.core.seq(seq__67397_67690);
if(temp__5825__auto___67699){
var seq__67397_67700__$1 = temp__5825__auto___67699;
if(cljs.core.chunked_seq_QMARK_(seq__67397_67700__$1)){
var c__5548__auto___67701 = cljs.core.chunk_first(seq__67397_67700__$1);
var G__67702 = cljs.core.chunk_rest(seq__67397_67700__$1);
var G__67703 = c__5548__auto___67701;
var G__67704 = cljs.core.count(c__5548__auto___67701);
var G__67705 = (0);
seq__67397_67690 = G__67702;
chunk__67398_67691 = G__67703;
count__67399_67692 = G__67704;
i__67400_67693 = G__67705;
continue;
} else {
var node_67706 = cljs.core.first(seq__67397_67700__$1);
fragment.appendChild(shadow.dom._to_dom(node_67706));


var G__67707 = cljs.core.next(seq__67397_67700__$1);
var G__67708 = null;
var G__67709 = (0);
var G__67710 = (0);
seq__67397_67690 = G__67707;
chunk__67398_67691 = G__67708;
count__67399_67692 = G__67709;
i__67400_67693 = G__67710;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq67394){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67394));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__67401_67711 = cljs.core.seq(scripts);
var chunk__67402_67712 = null;
var count__67403_67713 = (0);
var i__67404_67714 = (0);
while(true){
if((i__67404_67714 < count__67403_67713)){
var vec__67413_67715 = chunk__67402_67712.cljs$core$IIndexed$_nth$arity$2(null,i__67404_67714);
var script_tag_67716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67413_67715,(0),null);
var script_body_67717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67413_67715,(1),null);
eval(script_body_67717);


var G__67718 = seq__67401_67711;
var G__67719 = chunk__67402_67712;
var G__67720 = count__67403_67713;
var G__67721 = (i__67404_67714 + (1));
seq__67401_67711 = G__67718;
chunk__67402_67712 = G__67719;
count__67403_67713 = G__67720;
i__67404_67714 = G__67721;
continue;
} else {
var temp__5825__auto___67722 = cljs.core.seq(seq__67401_67711);
if(temp__5825__auto___67722){
var seq__67401_67723__$1 = temp__5825__auto___67722;
if(cljs.core.chunked_seq_QMARK_(seq__67401_67723__$1)){
var c__5548__auto___67724 = cljs.core.chunk_first(seq__67401_67723__$1);
var G__67725 = cljs.core.chunk_rest(seq__67401_67723__$1);
var G__67726 = c__5548__auto___67724;
var G__67727 = cljs.core.count(c__5548__auto___67724);
var G__67728 = (0);
seq__67401_67711 = G__67725;
chunk__67402_67712 = G__67726;
count__67403_67713 = G__67727;
i__67404_67714 = G__67728;
continue;
} else {
var vec__67416_67729 = cljs.core.first(seq__67401_67723__$1);
var script_tag_67730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67416_67729,(0),null);
var script_body_67731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67416_67729,(1),null);
eval(script_body_67731);


var G__67732 = cljs.core.next(seq__67401_67723__$1);
var G__67733 = null;
var G__67734 = (0);
var G__67735 = (0);
seq__67401_67711 = G__67732;
chunk__67402_67712 = G__67733;
count__67403_67713 = G__67734;
i__67404_67714 = G__67735;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__67419){
var vec__67420 = p__67419;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67420,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67420,(1),null);
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
var G__67424 = arguments.length;
switch (G__67424) {
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
var seq__67425 = cljs.core.seq(style_keys);
var chunk__67426 = null;
var count__67427 = (0);
var i__67428 = (0);
while(true){
if((i__67428 < count__67427)){
var it = chunk__67426.cljs$core$IIndexed$_nth$arity$2(null,i__67428);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__67737 = seq__67425;
var G__67738 = chunk__67426;
var G__67739 = count__67427;
var G__67740 = (i__67428 + (1));
seq__67425 = G__67737;
chunk__67426 = G__67738;
count__67427 = G__67739;
i__67428 = G__67740;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67425);
if(temp__5825__auto__){
var seq__67425__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67425__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67425__$1);
var G__67741 = cljs.core.chunk_rest(seq__67425__$1);
var G__67742 = c__5548__auto__;
var G__67743 = cljs.core.count(c__5548__auto__);
var G__67744 = (0);
seq__67425 = G__67741;
chunk__67426 = G__67742;
count__67427 = G__67743;
i__67428 = G__67744;
continue;
} else {
var it = cljs.core.first(seq__67425__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__67745 = cljs.core.next(seq__67425__$1);
var G__67746 = null;
var G__67747 = (0);
var G__67748 = (0);
seq__67425 = G__67745;
chunk__67426 = G__67746;
count__67427 = G__67747;
i__67428 = G__67748;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k67432,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__67436 = k67432;
var G__67436__$1 = (((G__67436 instanceof cljs.core.Keyword))?G__67436.fqn:null);
switch (G__67436__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67432,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__67437){
var vec__67438 = p__67437;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67438,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67438,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67431){
var self__ = this;
var G__67431__$1 = this;
return (new cljs.core.RecordIter((0),G__67431__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67433,other67434){
var self__ = this;
var this67433__$1 = this;
return (((!((other67434 == null)))) && ((((this67433__$1.constructor === other67434.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67433__$1.x,other67434.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67433__$1.y,other67434.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67433__$1.__extmap,other67434.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k67432){
var self__ = this;
var this__5330__auto____$1 = this;
var G__67442 = k67432;
var G__67442__$1 = (((G__67442 instanceof cljs.core.Keyword))?G__67442.fqn:null);
switch (G__67442__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67432);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__67431){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__67446 = cljs.core.keyword_identical_QMARK_;
var expr__67447 = k__5332__auto__;
if(cljs.core.truth_((pred__67446.cljs$core$IFn$_invoke$arity$2 ? pred__67446.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__67447) : pred__67446.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__67447)))){
return (new shadow.dom.Coordinate(G__67431,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67446.cljs$core$IFn$_invoke$arity$2 ? pred__67446.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__67447) : pred__67446.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__67447)))){
return (new shadow.dom.Coordinate(self__.x,G__67431,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__67431),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__67431){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__67431,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__67435){
var extmap__5365__auto__ = (function (){var G__67453 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67435,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__67435)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67453);
} else {
return G__67453;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__67435),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__67435),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k67455,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__67459 = k67455;
var G__67459__$1 = (((G__67459 instanceof cljs.core.Keyword))?G__67459.fqn:null);
switch (G__67459__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67455,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__67460){
var vec__67461 = p__67460;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67461,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67461,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67454){
var self__ = this;
var G__67454__$1 = this;
return (new cljs.core.RecordIter((0),G__67454__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67456,other67457){
var self__ = this;
var this67456__$1 = this;
return (((!((other67457 == null)))) && ((((this67456__$1.constructor === other67457.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67456__$1.w,other67457.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67456__$1.h,other67457.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67456__$1.__extmap,other67457.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k67455){
var self__ = this;
var this__5330__auto____$1 = this;
var G__67466 = k67455;
var G__67466__$1 = (((G__67466 instanceof cljs.core.Keyword))?G__67466.fqn:null);
switch (G__67466__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67455);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__67454){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__67469 = cljs.core.keyword_identical_QMARK_;
var expr__67470 = k__5332__auto__;
if(cljs.core.truth_((pred__67469.cljs$core$IFn$_invoke$arity$2 ? pred__67469.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__67470) : pred__67469.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__67470)))){
return (new shadow.dom.Size(G__67454,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67469.cljs$core$IFn$_invoke$arity$2 ? pred__67469.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__67470) : pred__67469.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__67470)))){
return (new shadow.dom.Size(self__.w,G__67454,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__67454),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__67454){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__67454,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__67458){
var extmap__5365__auto__ = (function (){var G__67473 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67458,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__67458)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67473);
} else {
return G__67473;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__67458),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__67458),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__67753 = (i + (1));
var G__67754 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__67753;
ret = G__67754;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__67478){
var vec__67479 = p__67478;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67479,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67479,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__67483 = arguments.length;
switch (G__67483) {
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
var G__67756 = ps;
var G__67757 = (i + (1));
el__$1 = G__67756;
i = G__67757;
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
var vec__67484 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67484,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67484,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67484,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__67487_67758 = cljs.core.seq(props);
var chunk__67488_67759 = null;
var count__67489_67760 = (0);
var i__67490_67761 = (0);
while(true){
if((i__67490_67761 < count__67489_67760)){
var vec__67497_67762 = chunk__67488_67759.cljs$core$IIndexed$_nth$arity$2(null,i__67490_67761);
var k_67763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67497_67762,(0),null);
var v_67764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67497_67762,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_67763);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_67763),v_67764);


var G__67765 = seq__67487_67758;
var G__67766 = chunk__67488_67759;
var G__67767 = count__67489_67760;
var G__67768 = (i__67490_67761 + (1));
seq__67487_67758 = G__67765;
chunk__67488_67759 = G__67766;
count__67489_67760 = G__67767;
i__67490_67761 = G__67768;
continue;
} else {
var temp__5825__auto___67769 = cljs.core.seq(seq__67487_67758);
if(temp__5825__auto___67769){
var seq__67487_67770__$1 = temp__5825__auto___67769;
if(cljs.core.chunked_seq_QMARK_(seq__67487_67770__$1)){
var c__5548__auto___67771 = cljs.core.chunk_first(seq__67487_67770__$1);
var G__67772 = cljs.core.chunk_rest(seq__67487_67770__$1);
var G__67773 = c__5548__auto___67771;
var G__67774 = cljs.core.count(c__5548__auto___67771);
var G__67775 = (0);
seq__67487_67758 = G__67772;
chunk__67488_67759 = G__67773;
count__67489_67760 = G__67774;
i__67490_67761 = G__67775;
continue;
} else {
var vec__67500_67776 = cljs.core.first(seq__67487_67770__$1);
var k_67777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67500_67776,(0),null);
var v_67778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67500_67776,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_67777);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_67777),v_67778);


var G__67779 = cljs.core.next(seq__67487_67770__$1);
var G__67780 = null;
var G__67781 = (0);
var G__67782 = (0);
seq__67487_67758 = G__67779;
chunk__67488_67759 = G__67780;
count__67489_67760 = G__67781;
i__67490_67761 = G__67782;
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
var vec__67504 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67504,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67504,(1),null);
var seq__67507_67783 = cljs.core.seq(node_children);
var chunk__67509_67784 = null;
var count__67510_67785 = (0);
var i__67511_67786 = (0);
while(true){
if((i__67511_67786 < count__67510_67785)){
var child_struct_67787 = chunk__67509_67784.cljs$core$IIndexed$_nth$arity$2(null,i__67511_67786);
if((!((child_struct_67787 == null)))){
if(typeof child_struct_67787 === 'string'){
var text_67788 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_67788),child_struct_67787].join(''));
} else {
var children_67789 = shadow.dom.svg_node(child_struct_67787);
if(cljs.core.seq_QMARK_(children_67789)){
var seq__67525_67790 = cljs.core.seq(children_67789);
var chunk__67527_67791 = null;
var count__67528_67792 = (0);
var i__67529_67793 = (0);
while(true){
if((i__67529_67793 < count__67528_67792)){
var child_67794 = chunk__67527_67791.cljs$core$IIndexed$_nth$arity$2(null,i__67529_67793);
if(cljs.core.truth_(child_67794)){
node.appendChild(child_67794);


var G__67795 = seq__67525_67790;
var G__67796 = chunk__67527_67791;
var G__67797 = count__67528_67792;
var G__67798 = (i__67529_67793 + (1));
seq__67525_67790 = G__67795;
chunk__67527_67791 = G__67796;
count__67528_67792 = G__67797;
i__67529_67793 = G__67798;
continue;
} else {
var G__67799 = seq__67525_67790;
var G__67800 = chunk__67527_67791;
var G__67801 = count__67528_67792;
var G__67802 = (i__67529_67793 + (1));
seq__67525_67790 = G__67799;
chunk__67527_67791 = G__67800;
count__67528_67792 = G__67801;
i__67529_67793 = G__67802;
continue;
}
} else {
var temp__5825__auto___67803 = cljs.core.seq(seq__67525_67790);
if(temp__5825__auto___67803){
var seq__67525_67804__$1 = temp__5825__auto___67803;
if(cljs.core.chunked_seq_QMARK_(seq__67525_67804__$1)){
var c__5548__auto___67805 = cljs.core.chunk_first(seq__67525_67804__$1);
var G__67806 = cljs.core.chunk_rest(seq__67525_67804__$1);
var G__67807 = c__5548__auto___67805;
var G__67808 = cljs.core.count(c__5548__auto___67805);
var G__67809 = (0);
seq__67525_67790 = G__67806;
chunk__67527_67791 = G__67807;
count__67528_67792 = G__67808;
i__67529_67793 = G__67809;
continue;
} else {
var child_67810 = cljs.core.first(seq__67525_67804__$1);
if(cljs.core.truth_(child_67810)){
node.appendChild(child_67810);


var G__67811 = cljs.core.next(seq__67525_67804__$1);
var G__67812 = null;
var G__67813 = (0);
var G__67814 = (0);
seq__67525_67790 = G__67811;
chunk__67527_67791 = G__67812;
count__67528_67792 = G__67813;
i__67529_67793 = G__67814;
continue;
} else {
var G__67815 = cljs.core.next(seq__67525_67804__$1);
var G__67816 = null;
var G__67817 = (0);
var G__67818 = (0);
seq__67525_67790 = G__67815;
chunk__67527_67791 = G__67816;
count__67528_67792 = G__67817;
i__67529_67793 = G__67818;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_67789);
}
}


var G__67819 = seq__67507_67783;
var G__67820 = chunk__67509_67784;
var G__67821 = count__67510_67785;
var G__67822 = (i__67511_67786 + (1));
seq__67507_67783 = G__67819;
chunk__67509_67784 = G__67820;
count__67510_67785 = G__67821;
i__67511_67786 = G__67822;
continue;
} else {
var G__67823 = seq__67507_67783;
var G__67824 = chunk__67509_67784;
var G__67825 = count__67510_67785;
var G__67826 = (i__67511_67786 + (1));
seq__67507_67783 = G__67823;
chunk__67509_67784 = G__67824;
count__67510_67785 = G__67825;
i__67511_67786 = G__67826;
continue;
}
} else {
var temp__5825__auto___67827 = cljs.core.seq(seq__67507_67783);
if(temp__5825__auto___67827){
var seq__67507_67828__$1 = temp__5825__auto___67827;
if(cljs.core.chunked_seq_QMARK_(seq__67507_67828__$1)){
var c__5548__auto___67829 = cljs.core.chunk_first(seq__67507_67828__$1);
var G__67830 = cljs.core.chunk_rest(seq__67507_67828__$1);
var G__67831 = c__5548__auto___67829;
var G__67832 = cljs.core.count(c__5548__auto___67829);
var G__67833 = (0);
seq__67507_67783 = G__67830;
chunk__67509_67784 = G__67831;
count__67510_67785 = G__67832;
i__67511_67786 = G__67833;
continue;
} else {
var child_struct_67834 = cljs.core.first(seq__67507_67828__$1);
if((!((child_struct_67834 == null)))){
if(typeof child_struct_67834 === 'string'){
var text_67835 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_67835),child_struct_67834].join(''));
} else {
var children_67836 = shadow.dom.svg_node(child_struct_67834);
if(cljs.core.seq_QMARK_(children_67836)){
var seq__67531_67837 = cljs.core.seq(children_67836);
var chunk__67533_67838 = null;
var count__67534_67839 = (0);
var i__67535_67840 = (0);
while(true){
if((i__67535_67840 < count__67534_67839)){
var child_67841 = chunk__67533_67838.cljs$core$IIndexed$_nth$arity$2(null,i__67535_67840);
if(cljs.core.truth_(child_67841)){
node.appendChild(child_67841);


var G__67842 = seq__67531_67837;
var G__67843 = chunk__67533_67838;
var G__67844 = count__67534_67839;
var G__67845 = (i__67535_67840 + (1));
seq__67531_67837 = G__67842;
chunk__67533_67838 = G__67843;
count__67534_67839 = G__67844;
i__67535_67840 = G__67845;
continue;
} else {
var G__67846 = seq__67531_67837;
var G__67847 = chunk__67533_67838;
var G__67848 = count__67534_67839;
var G__67849 = (i__67535_67840 + (1));
seq__67531_67837 = G__67846;
chunk__67533_67838 = G__67847;
count__67534_67839 = G__67848;
i__67535_67840 = G__67849;
continue;
}
} else {
var temp__5825__auto___67850__$1 = cljs.core.seq(seq__67531_67837);
if(temp__5825__auto___67850__$1){
var seq__67531_67851__$1 = temp__5825__auto___67850__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67531_67851__$1)){
var c__5548__auto___67852 = cljs.core.chunk_first(seq__67531_67851__$1);
var G__67853 = cljs.core.chunk_rest(seq__67531_67851__$1);
var G__67854 = c__5548__auto___67852;
var G__67855 = cljs.core.count(c__5548__auto___67852);
var G__67856 = (0);
seq__67531_67837 = G__67853;
chunk__67533_67838 = G__67854;
count__67534_67839 = G__67855;
i__67535_67840 = G__67856;
continue;
} else {
var child_67857 = cljs.core.first(seq__67531_67851__$1);
if(cljs.core.truth_(child_67857)){
node.appendChild(child_67857);


var G__67858 = cljs.core.next(seq__67531_67851__$1);
var G__67859 = null;
var G__67860 = (0);
var G__67861 = (0);
seq__67531_67837 = G__67858;
chunk__67533_67838 = G__67859;
count__67534_67839 = G__67860;
i__67535_67840 = G__67861;
continue;
} else {
var G__67862 = cljs.core.next(seq__67531_67851__$1);
var G__67863 = null;
var G__67864 = (0);
var G__67865 = (0);
seq__67531_67837 = G__67862;
chunk__67533_67838 = G__67863;
count__67534_67839 = G__67864;
i__67535_67840 = G__67865;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_67836);
}
}


var G__67866 = cljs.core.next(seq__67507_67828__$1);
var G__67867 = null;
var G__67868 = (0);
var G__67869 = (0);
seq__67507_67783 = G__67866;
chunk__67509_67784 = G__67867;
count__67510_67785 = G__67868;
i__67511_67786 = G__67869;
continue;
} else {
var G__67870 = cljs.core.next(seq__67507_67828__$1);
var G__67871 = null;
var G__67872 = (0);
var G__67873 = (0);
seq__67507_67783 = G__67870;
chunk__67509_67784 = G__67871;
count__67510_67785 = G__67872;
i__67511_67786 = G__67873;
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
var len__5749__auto___67874 = arguments.length;
var i__5750__auto___67875 = (0);
while(true){
if((i__5750__auto___67875 < len__5749__auto___67874)){
args__5755__auto__.push((arguments[i__5750__auto___67875]));

var G__67876 = (i__5750__auto___67875 + (1));
i__5750__auto___67875 = G__67876;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq67537){
var G__67538 = cljs.core.first(seq67537);
var seq67537__$1 = cljs.core.next(seq67537);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67538,seq67537__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
