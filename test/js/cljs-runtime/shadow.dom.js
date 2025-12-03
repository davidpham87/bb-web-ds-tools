goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_65383 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_65383(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_65384 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_65384(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__65018 = coll;
var G__65019 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__65018,G__65019) : shadow.dom.lazy_native_coll_seq.call(null,G__65018,G__65019));
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
var G__65026 = arguments.length;
switch (G__65026) {
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
var G__65046 = arguments.length;
switch (G__65046) {
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
var G__65059 = arguments.length;
switch (G__65059) {
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
var G__65090 = arguments.length;
switch (G__65090) {
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
var G__65097 = arguments.length;
switch (G__65097) {
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
var G__65099 = arguments.length;
switch (G__65099) {
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
}catch (e65101){if((e65101 instanceof Object)){
var e = e65101;
return console.log("didnt support attachEvent",el,e);
} else {
throw e65101;

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
var seq__65102 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__65103 = null;
var count__65104 = (0);
var i__65105 = (0);
while(true){
if((i__65105 < count__65104)){
var el = chunk__65103.cljs$core$IIndexed$_nth$arity$2(null,i__65105);
var handler_65391__$1 = ((function (seq__65102,chunk__65103,count__65104,i__65105,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65102,chunk__65103,count__65104,i__65105,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65391__$1);


var G__65392 = seq__65102;
var G__65393 = chunk__65103;
var G__65394 = count__65104;
var G__65395 = (i__65105 + (1));
seq__65102 = G__65392;
chunk__65103 = G__65393;
count__65104 = G__65394;
i__65105 = G__65395;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65102);
if(temp__5825__auto__){
var seq__65102__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65102__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65102__$1);
var G__65396 = cljs.core.chunk_rest(seq__65102__$1);
var G__65397 = c__5548__auto__;
var G__65398 = cljs.core.count(c__5548__auto__);
var G__65399 = (0);
seq__65102 = G__65396;
chunk__65103 = G__65397;
count__65104 = G__65398;
i__65105 = G__65399;
continue;
} else {
var el = cljs.core.first(seq__65102__$1);
var handler_65400__$1 = ((function (seq__65102,chunk__65103,count__65104,i__65105,el,seq__65102__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65102,chunk__65103,count__65104,i__65105,el,seq__65102__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65400__$1);


var G__65401 = cljs.core.next(seq__65102__$1);
var G__65402 = null;
var G__65403 = (0);
var G__65404 = (0);
seq__65102 = G__65401;
chunk__65103 = G__65402;
count__65104 = G__65403;
i__65105 = G__65404;
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
var G__65107 = arguments.length;
switch (G__65107) {
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
var seq__65108 = cljs.core.seq(events);
var chunk__65109 = null;
var count__65110 = (0);
var i__65111 = (0);
while(true){
if((i__65111 < count__65110)){
var vec__65118 = chunk__65109.cljs$core$IIndexed$_nth$arity$2(null,i__65111);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65118,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65118,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65406 = seq__65108;
var G__65407 = chunk__65109;
var G__65408 = count__65110;
var G__65409 = (i__65111 + (1));
seq__65108 = G__65406;
chunk__65109 = G__65407;
count__65110 = G__65408;
i__65111 = G__65409;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65108);
if(temp__5825__auto__){
var seq__65108__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65108__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65108__$1);
var G__65410 = cljs.core.chunk_rest(seq__65108__$1);
var G__65411 = c__5548__auto__;
var G__65412 = cljs.core.count(c__5548__auto__);
var G__65413 = (0);
seq__65108 = G__65410;
chunk__65109 = G__65411;
count__65110 = G__65412;
i__65111 = G__65413;
continue;
} else {
var vec__65121 = cljs.core.first(seq__65108__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65121,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65121,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65414 = cljs.core.next(seq__65108__$1);
var G__65415 = null;
var G__65416 = (0);
var G__65417 = (0);
seq__65108 = G__65414;
chunk__65109 = G__65415;
count__65110 = G__65416;
i__65111 = G__65417;
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
var seq__65124 = cljs.core.seq(styles);
var chunk__65125 = null;
var count__65126 = (0);
var i__65127 = (0);
while(true){
if((i__65127 < count__65126)){
var vec__65136 = chunk__65125.cljs$core$IIndexed$_nth$arity$2(null,i__65127);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65136,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65136,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65418 = seq__65124;
var G__65419 = chunk__65125;
var G__65420 = count__65126;
var G__65421 = (i__65127 + (1));
seq__65124 = G__65418;
chunk__65125 = G__65419;
count__65126 = G__65420;
i__65127 = G__65421;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65124);
if(temp__5825__auto__){
var seq__65124__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65124__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65124__$1);
var G__65422 = cljs.core.chunk_rest(seq__65124__$1);
var G__65423 = c__5548__auto__;
var G__65424 = cljs.core.count(c__5548__auto__);
var G__65425 = (0);
seq__65124 = G__65422;
chunk__65125 = G__65423;
count__65126 = G__65424;
i__65127 = G__65425;
continue;
} else {
var vec__65139 = cljs.core.first(seq__65124__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65139,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65426 = cljs.core.next(seq__65124__$1);
var G__65427 = null;
var G__65428 = (0);
var G__65429 = (0);
seq__65124 = G__65426;
chunk__65125 = G__65427;
count__65126 = G__65428;
i__65127 = G__65429;
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
var G__65142_65430 = key;
var G__65142_65431__$1 = (((G__65142_65430 instanceof cljs.core.Keyword))?G__65142_65430.fqn:null);
switch (G__65142_65431__$1) {
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
var ks_65433 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_65433,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_65433,"aria-");
}
})())){
el.setAttribute(ks_65433,value);
} else {
(el[ks_65433] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__65152){
var map__65153 = p__65152;
var map__65153__$1 = cljs.core.__destructure_map(map__65153);
var props = map__65153__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65153__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__65156 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65156,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65156,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65156,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__65161 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__65161,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__65161;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__65163 = arguments.length;
switch (G__65163) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__65164){
var vec__65165 = p__65164;
var seq__65166 = cljs.core.seq(vec__65165);
var first__65167 = cljs.core.first(seq__65166);
var seq__65166__$1 = cljs.core.next(seq__65166);
var nn = first__65167;
var first__65167__$1 = cljs.core.first(seq__65166__$1);
var seq__65166__$2 = cljs.core.next(seq__65166__$1);
var np = first__65167__$1;
var nc = seq__65166__$2;
var node = vec__65165;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65168 = nn;
var G__65169 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65168,G__65169) : create_fn.call(null,G__65168,G__65169));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65170 = nn;
var G__65171 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65170,G__65171) : create_fn.call(null,G__65170,G__65171));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__65172 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65172,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65172,(1),null);
var seq__65175_65435 = cljs.core.seq(node_children);
var chunk__65176_65436 = null;
var count__65177_65437 = (0);
var i__65178_65438 = (0);
while(true){
if((i__65178_65438 < count__65177_65437)){
var child_struct_65439 = chunk__65176_65436.cljs$core$IIndexed$_nth$arity$2(null,i__65178_65438);
var children_65440 = shadow.dom.dom_node(child_struct_65439);
if(cljs.core.seq_QMARK_(children_65440)){
var seq__65201_65441 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65440));
var chunk__65203_65442 = null;
var count__65204_65443 = (0);
var i__65205_65444 = (0);
while(true){
if((i__65205_65444 < count__65204_65443)){
var child_65445 = chunk__65203_65442.cljs$core$IIndexed$_nth$arity$2(null,i__65205_65444);
if(cljs.core.truth_(child_65445)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65445);


var G__65446 = seq__65201_65441;
var G__65447 = chunk__65203_65442;
var G__65448 = count__65204_65443;
var G__65449 = (i__65205_65444 + (1));
seq__65201_65441 = G__65446;
chunk__65203_65442 = G__65447;
count__65204_65443 = G__65448;
i__65205_65444 = G__65449;
continue;
} else {
var G__65450 = seq__65201_65441;
var G__65451 = chunk__65203_65442;
var G__65452 = count__65204_65443;
var G__65453 = (i__65205_65444 + (1));
seq__65201_65441 = G__65450;
chunk__65203_65442 = G__65451;
count__65204_65443 = G__65452;
i__65205_65444 = G__65453;
continue;
}
} else {
var temp__5825__auto___65454 = cljs.core.seq(seq__65201_65441);
if(temp__5825__auto___65454){
var seq__65201_65455__$1 = temp__5825__auto___65454;
if(cljs.core.chunked_seq_QMARK_(seq__65201_65455__$1)){
var c__5548__auto___65456 = cljs.core.chunk_first(seq__65201_65455__$1);
var G__65457 = cljs.core.chunk_rest(seq__65201_65455__$1);
var G__65458 = c__5548__auto___65456;
var G__65459 = cljs.core.count(c__5548__auto___65456);
var G__65460 = (0);
seq__65201_65441 = G__65457;
chunk__65203_65442 = G__65458;
count__65204_65443 = G__65459;
i__65205_65444 = G__65460;
continue;
} else {
var child_65461 = cljs.core.first(seq__65201_65455__$1);
if(cljs.core.truth_(child_65461)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65461);


var G__65462 = cljs.core.next(seq__65201_65455__$1);
var G__65463 = null;
var G__65464 = (0);
var G__65465 = (0);
seq__65201_65441 = G__65462;
chunk__65203_65442 = G__65463;
count__65204_65443 = G__65464;
i__65205_65444 = G__65465;
continue;
} else {
var G__65466 = cljs.core.next(seq__65201_65455__$1);
var G__65467 = null;
var G__65468 = (0);
var G__65469 = (0);
seq__65201_65441 = G__65466;
chunk__65203_65442 = G__65467;
count__65204_65443 = G__65468;
i__65205_65444 = G__65469;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65440);
}


var G__65470 = seq__65175_65435;
var G__65471 = chunk__65176_65436;
var G__65472 = count__65177_65437;
var G__65473 = (i__65178_65438 + (1));
seq__65175_65435 = G__65470;
chunk__65176_65436 = G__65471;
count__65177_65437 = G__65472;
i__65178_65438 = G__65473;
continue;
} else {
var temp__5825__auto___65474 = cljs.core.seq(seq__65175_65435);
if(temp__5825__auto___65474){
var seq__65175_65475__$1 = temp__5825__auto___65474;
if(cljs.core.chunked_seq_QMARK_(seq__65175_65475__$1)){
var c__5548__auto___65476 = cljs.core.chunk_first(seq__65175_65475__$1);
var G__65477 = cljs.core.chunk_rest(seq__65175_65475__$1);
var G__65478 = c__5548__auto___65476;
var G__65479 = cljs.core.count(c__5548__auto___65476);
var G__65480 = (0);
seq__65175_65435 = G__65477;
chunk__65176_65436 = G__65478;
count__65177_65437 = G__65479;
i__65178_65438 = G__65480;
continue;
} else {
var child_struct_65481 = cljs.core.first(seq__65175_65475__$1);
var children_65482 = shadow.dom.dom_node(child_struct_65481);
if(cljs.core.seq_QMARK_(children_65482)){
var seq__65212_65483 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65482));
var chunk__65214_65484 = null;
var count__65215_65485 = (0);
var i__65216_65486 = (0);
while(true){
if((i__65216_65486 < count__65215_65485)){
var child_65487 = chunk__65214_65484.cljs$core$IIndexed$_nth$arity$2(null,i__65216_65486);
if(cljs.core.truth_(child_65487)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65487);


var G__65488 = seq__65212_65483;
var G__65489 = chunk__65214_65484;
var G__65490 = count__65215_65485;
var G__65491 = (i__65216_65486 + (1));
seq__65212_65483 = G__65488;
chunk__65214_65484 = G__65489;
count__65215_65485 = G__65490;
i__65216_65486 = G__65491;
continue;
} else {
var G__65492 = seq__65212_65483;
var G__65493 = chunk__65214_65484;
var G__65494 = count__65215_65485;
var G__65495 = (i__65216_65486 + (1));
seq__65212_65483 = G__65492;
chunk__65214_65484 = G__65493;
count__65215_65485 = G__65494;
i__65216_65486 = G__65495;
continue;
}
} else {
var temp__5825__auto___65496__$1 = cljs.core.seq(seq__65212_65483);
if(temp__5825__auto___65496__$1){
var seq__65212_65497__$1 = temp__5825__auto___65496__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65212_65497__$1)){
var c__5548__auto___65498 = cljs.core.chunk_first(seq__65212_65497__$1);
var G__65499 = cljs.core.chunk_rest(seq__65212_65497__$1);
var G__65500 = c__5548__auto___65498;
var G__65501 = cljs.core.count(c__5548__auto___65498);
var G__65502 = (0);
seq__65212_65483 = G__65499;
chunk__65214_65484 = G__65500;
count__65215_65485 = G__65501;
i__65216_65486 = G__65502;
continue;
} else {
var child_65503 = cljs.core.first(seq__65212_65497__$1);
if(cljs.core.truth_(child_65503)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65503);


var G__65504 = cljs.core.next(seq__65212_65497__$1);
var G__65505 = null;
var G__65506 = (0);
var G__65507 = (0);
seq__65212_65483 = G__65504;
chunk__65214_65484 = G__65505;
count__65215_65485 = G__65506;
i__65216_65486 = G__65507;
continue;
} else {
var G__65508 = cljs.core.next(seq__65212_65497__$1);
var G__65509 = null;
var G__65510 = (0);
var G__65511 = (0);
seq__65212_65483 = G__65508;
chunk__65214_65484 = G__65509;
count__65215_65485 = G__65510;
i__65216_65486 = G__65511;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65482);
}


var G__65512 = cljs.core.next(seq__65175_65475__$1);
var G__65513 = null;
var G__65514 = (0);
var G__65515 = (0);
seq__65175_65435 = G__65512;
chunk__65176_65436 = G__65513;
count__65177_65437 = G__65514;
i__65178_65438 = G__65515;
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
var seq__65223 = cljs.core.seq(node);
var chunk__65224 = null;
var count__65225 = (0);
var i__65226 = (0);
while(true){
if((i__65226 < count__65225)){
var n = chunk__65224.cljs$core$IIndexed$_nth$arity$2(null,i__65226);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65516 = seq__65223;
var G__65517 = chunk__65224;
var G__65518 = count__65225;
var G__65519 = (i__65226 + (1));
seq__65223 = G__65516;
chunk__65224 = G__65517;
count__65225 = G__65518;
i__65226 = G__65519;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65223);
if(temp__5825__auto__){
var seq__65223__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65223__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65223__$1);
var G__65520 = cljs.core.chunk_rest(seq__65223__$1);
var G__65521 = c__5548__auto__;
var G__65522 = cljs.core.count(c__5548__auto__);
var G__65523 = (0);
seq__65223 = G__65520;
chunk__65224 = G__65521;
count__65225 = G__65522;
i__65226 = G__65523;
continue;
} else {
var n = cljs.core.first(seq__65223__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65524 = cljs.core.next(seq__65223__$1);
var G__65525 = null;
var G__65526 = (0);
var G__65527 = (0);
seq__65223 = G__65524;
chunk__65224 = G__65525;
count__65225 = G__65526;
i__65226 = G__65527;
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
var G__65231 = arguments.length;
switch (G__65231) {
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
var G__65235 = arguments.length;
switch (G__65235) {
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
var G__65241 = arguments.length;
switch (G__65241) {
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
var len__5749__auto___65531 = arguments.length;
var i__5750__auto___65532 = (0);
while(true){
if((i__5750__auto___65532 < len__5749__auto___65531)){
args__5755__auto__.push((arguments[i__5750__auto___65532]));

var G__65533 = (i__5750__auto___65532 + (1));
i__5750__auto___65532 = G__65533;
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
var seq__65243_65534 = cljs.core.seq(nodes);
var chunk__65244_65535 = null;
var count__65245_65536 = (0);
var i__65246_65537 = (0);
while(true){
if((i__65246_65537 < count__65245_65536)){
var node_65538 = chunk__65244_65535.cljs$core$IIndexed$_nth$arity$2(null,i__65246_65537);
fragment.appendChild(shadow.dom._to_dom(node_65538));


var G__65539 = seq__65243_65534;
var G__65540 = chunk__65244_65535;
var G__65541 = count__65245_65536;
var G__65542 = (i__65246_65537 + (1));
seq__65243_65534 = G__65539;
chunk__65244_65535 = G__65540;
count__65245_65536 = G__65541;
i__65246_65537 = G__65542;
continue;
} else {
var temp__5825__auto___65543 = cljs.core.seq(seq__65243_65534);
if(temp__5825__auto___65543){
var seq__65243_65544__$1 = temp__5825__auto___65543;
if(cljs.core.chunked_seq_QMARK_(seq__65243_65544__$1)){
var c__5548__auto___65545 = cljs.core.chunk_first(seq__65243_65544__$1);
var G__65546 = cljs.core.chunk_rest(seq__65243_65544__$1);
var G__65547 = c__5548__auto___65545;
var G__65548 = cljs.core.count(c__5548__auto___65545);
var G__65549 = (0);
seq__65243_65534 = G__65546;
chunk__65244_65535 = G__65547;
count__65245_65536 = G__65548;
i__65246_65537 = G__65549;
continue;
} else {
var node_65550 = cljs.core.first(seq__65243_65544__$1);
fragment.appendChild(shadow.dom._to_dom(node_65550));


var G__65551 = cljs.core.next(seq__65243_65544__$1);
var G__65552 = null;
var G__65553 = (0);
var G__65554 = (0);
seq__65243_65534 = G__65551;
chunk__65244_65535 = G__65552;
count__65245_65536 = G__65553;
i__65246_65537 = G__65554;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq65242){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65242));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65248_65555 = cljs.core.seq(scripts);
var chunk__65249_65556 = null;
var count__65250_65557 = (0);
var i__65251_65558 = (0);
while(true){
if((i__65251_65558 < count__65250_65557)){
var vec__65259_65559 = chunk__65249_65556.cljs$core$IIndexed$_nth$arity$2(null,i__65251_65558);
var script_tag_65560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65259_65559,(0),null);
var script_body_65561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65259_65559,(1),null);
eval(script_body_65561);


var G__65562 = seq__65248_65555;
var G__65563 = chunk__65249_65556;
var G__65564 = count__65250_65557;
var G__65565 = (i__65251_65558 + (1));
seq__65248_65555 = G__65562;
chunk__65249_65556 = G__65563;
count__65250_65557 = G__65564;
i__65251_65558 = G__65565;
continue;
} else {
var temp__5825__auto___65566 = cljs.core.seq(seq__65248_65555);
if(temp__5825__auto___65566){
var seq__65248_65567__$1 = temp__5825__auto___65566;
if(cljs.core.chunked_seq_QMARK_(seq__65248_65567__$1)){
var c__5548__auto___65568 = cljs.core.chunk_first(seq__65248_65567__$1);
var G__65569 = cljs.core.chunk_rest(seq__65248_65567__$1);
var G__65570 = c__5548__auto___65568;
var G__65571 = cljs.core.count(c__5548__auto___65568);
var G__65572 = (0);
seq__65248_65555 = G__65569;
chunk__65249_65556 = G__65570;
count__65250_65557 = G__65571;
i__65251_65558 = G__65572;
continue;
} else {
var vec__65262_65573 = cljs.core.first(seq__65248_65567__$1);
var script_tag_65574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65262_65573,(0),null);
var script_body_65575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65262_65573,(1),null);
eval(script_body_65575);


var G__65576 = cljs.core.next(seq__65248_65567__$1);
var G__65577 = null;
var G__65578 = (0);
var G__65579 = (0);
seq__65248_65555 = G__65576;
chunk__65249_65556 = G__65577;
count__65250_65557 = G__65578;
i__65251_65558 = G__65579;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__65265){
var vec__65266 = p__65265;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65266,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65266,(1),null);
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
var G__65270 = arguments.length;
switch (G__65270) {
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
var seq__65272 = cljs.core.seq(style_keys);
var chunk__65273 = null;
var count__65274 = (0);
var i__65275 = (0);
while(true){
if((i__65275 < count__65274)){
var it = chunk__65273.cljs$core$IIndexed$_nth$arity$2(null,i__65275);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__65581 = seq__65272;
var G__65582 = chunk__65273;
var G__65583 = count__65274;
var G__65584 = (i__65275 + (1));
seq__65272 = G__65581;
chunk__65273 = G__65582;
count__65274 = G__65583;
i__65275 = G__65584;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65272);
if(temp__5825__auto__){
var seq__65272__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65272__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65272__$1);
var G__65585 = cljs.core.chunk_rest(seq__65272__$1);
var G__65586 = c__5548__auto__;
var G__65587 = cljs.core.count(c__5548__auto__);
var G__65588 = (0);
seq__65272 = G__65585;
chunk__65273 = G__65586;
count__65274 = G__65587;
i__65275 = G__65588;
continue;
} else {
var it = cljs.core.first(seq__65272__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__65589 = cljs.core.next(seq__65272__$1);
var G__65590 = null;
var G__65591 = (0);
var G__65592 = (0);
seq__65272 = G__65589;
chunk__65273 = G__65590;
count__65274 = G__65591;
i__65275 = G__65592;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65280,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65288 = k65280;
var G__65288__$1 = (((G__65288 instanceof cljs.core.Keyword))?G__65288.fqn:null);
switch (G__65288__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65280,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65289){
var vec__65290 = p__65289;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65290,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65290,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65279){
var self__ = this;
var G__65279__$1 = this;
return (new cljs.core.RecordIter((0),G__65279__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65281,other65282){
var self__ = this;
var this65281__$1 = this;
return (((!((other65282 == null)))) && ((((this65281__$1.constructor === other65282.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65281__$1.x,other65282.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65281__$1.y,other65282.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65281__$1.__extmap,other65282.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65280){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65298 = k65280;
var G__65298__$1 = (((G__65298 instanceof cljs.core.Keyword))?G__65298.fqn:null);
switch (G__65298__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65280);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65279){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65299 = cljs.core.keyword_identical_QMARK_;
var expr__65300 = k__5332__auto__;
if(cljs.core.truth_((pred__65299.cljs$core$IFn$_invoke$arity$2 ? pred__65299.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__65300) : pred__65299.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__65300)))){
return (new shadow.dom.Coordinate(G__65279,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65299.cljs$core$IFn$_invoke$arity$2 ? pred__65299.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__65300) : pred__65299.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__65300)))){
return (new shadow.dom.Coordinate(self__.x,G__65279,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65279),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65279){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__65279,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__65286){
var extmap__5365__auto__ = (function (){var G__65302 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65286,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65286)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65302);
} else {
return G__65302;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__65286),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__65286),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65304,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65308 = k65304;
var G__65308__$1 = (((G__65308 instanceof cljs.core.Keyword))?G__65308.fqn:null);
switch (G__65308__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65304,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65309){
var vec__65310 = p__65309;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65310,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65310,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65303){
var self__ = this;
var G__65303__$1 = this;
return (new cljs.core.RecordIter((0),G__65303__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65305,other65306){
var self__ = this;
var this65305__$1 = this;
return (((!((other65306 == null)))) && ((((this65305__$1.constructor === other65306.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65305__$1.w,other65306.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65305__$1.h,other65306.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65305__$1.__extmap,other65306.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65304){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65313 = k65304;
var G__65313__$1 = (((G__65313 instanceof cljs.core.Keyword))?G__65313.fqn:null);
switch (G__65313__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65304);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65303){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65314 = cljs.core.keyword_identical_QMARK_;
var expr__65315 = k__5332__auto__;
if(cljs.core.truth_((pred__65314.cljs$core$IFn$_invoke$arity$2 ? pred__65314.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__65315) : pred__65314.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__65315)))){
return (new shadow.dom.Size(G__65303,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65314.cljs$core$IFn$_invoke$arity$2 ? pred__65314.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__65315) : pred__65314.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__65315)))){
return (new shadow.dom.Size(self__.w,G__65303,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65303),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65303){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65303,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65307){
var extmap__5365__auto__ = (function (){var G__65317 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65307,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65307)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65317);
} else {
return G__65317;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65307),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65307),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__65597 = (i + (1));
var G__65598 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__65597;
ret = G__65598;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65322){
var vec__65323 = p__65322;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65323,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65323,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65327 = arguments.length;
switch (G__65327) {
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
var G__65600 = ps;
var G__65601 = (i + (1));
el__$1 = G__65600;
i = G__65601;
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
var vec__65328 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65328,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65328,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65328,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65331_65602 = cljs.core.seq(props);
var chunk__65332_65603 = null;
var count__65333_65604 = (0);
var i__65334_65605 = (0);
while(true){
if((i__65334_65605 < count__65333_65604)){
var vec__65341_65606 = chunk__65332_65603.cljs$core$IIndexed$_nth$arity$2(null,i__65334_65605);
var k_65607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65341_65606,(0),null);
var v_65608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65341_65606,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_65607);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65607),v_65608);


var G__65609 = seq__65331_65602;
var G__65610 = chunk__65332_65603;
var G__65611 = count__65333_65604;
var G__65612 = (i__65334_65605 + (1));
seq__65331_65602 = G__65609;
chunk__65332_65603 = G__65610;
count__65333_65604 = G__65611;
i__65334_65605 = G__65612;
continue;
} else {
var temp__5825__auto___65613 = cljs.core.seq(seq__65331_65602);
if(temp__5825__auto___65613){
var seq__65331_65614__$1 = temp__5825__auto___65613;
if(cljs.core.chunked_seq_QMARK_(seq__65331_65614__$1)){
var c__5548__auto___65615 = cljs.core.chunk_first(seq__65331_65614__$1);
var G__65616 = cljs.core.chunk_rest(seq__65331_65614__$1);
var G__65617 = c__5548__auto___65615;
var G__65618 = cljs.core.count(c__5548__auto___65615);
var G__65619 = (0);
seq__65331_65602 = G__65616;
chunk__65332_65603 = G__65617;
count__65333_65604 = G__65618;
i__65334_65605 = G__65619;
continue;
} else {
var vec__65344_65620 = cljs.core.first(seq__65331_65614__$1);
var k_65621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65344_65620,(0),null);
var v_65622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65344_65620,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_65621);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65621),v_65622);


var G__65623 = cljs.core.next(seq__65331_65614__$1);
var G__65624 = null;
var G__65625 = (0);
var G__65626 = (0);
seq__65331_65602 = G__65623;
chunk__65332_65603 = G__65624;
count__65333_65604 = G__65625;
i__65334_65605 = G__65626;
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
var vec__65348 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65348,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65348,(1),null);
var seq__65351_65627 = cljs.core.seq(node_children);
var chunk__65353_65628 = null;
var count__65354_65629 = (0);
var i__65355_65630 = (0);
while(true){
if((i__65355_65630 < count__65354_65629)){
var child_struct_65631 = chunk__65353_65628.cljs$core$IIndexed$_nth$arity$2(null,i__65355_65630);
if((!((child_struct_65631 == null)))){
if(typeof child_struct_65631 === 'string'){
var text_65632 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65632),child_struct_65631].join(''));
} else {
var children_65633 = shadow.dom.svg_node(child_struct_65631);
if(cljs.core.seq_QMARK_(children_65633)){
var seq__65369_65634 = cljs.core.seq(children_65633);
var chunk__65371_65635 = null;
var count__65372_65636 = (0);
var i__65373_65637 = (0);
while(true){
if((i__65373_65637 < count__65372_65636)){
var child_65638 = chunk__65371_65635.cljs$core$IIndexed$_nth$arity$2(null,i__65373_65637);
if(cljs.core.truth_(child_65638)){
node.appendChild(child_65638);


var G__65639 = seq__65369_65634;
var G__65640 = chunk__65371_65635;
var G__65641 = count__65372_65636;
var G__65642 = (i__65373_65637 + (1));
seq__65369_65634 = G__65639;
chunk__65371_65635 = G__65640;
count__65372_65636 = G__65641;
i__65373_65637 = G__65642;
continue;
} else {
var G__65643 = seq__65369_65634;
var G__65644 = chunk__65371_65635;
var G__65645 = count__65372_65636;
var G__65646 = (i__65373_65637 + (1));
seq__65369_65634 = G__65643;
chunk__65371_65635 = G__65644;
count__65372_65636 = G__65645;
i__65373_65637 = G__65646;
continue;
}
} else {
var temp__5825__auto___65647 = cljs.core.seq(seq__65369_65634);
if(temp__5825__auto___65647){
var seq__65369_65648__$1 = temp__5825__auto___65647;
if(cljs.core.chunked_seq_QMARK_(seq__65369_65648__$1)){
var c__5548__auto___65649 = cljs.core.chunk_first(seq__65369_65648__$1);
var G__65650 = cljs.core.chunk_rest(seq__65369_65648__$1);
var G__65651 = c__5548__auto___65649;
var G__65652 = cljs.core.count(c__5548__auto___65649);
var G__65653 = (0);
seq__65369_65634 = G__65650;
chunk__65371_65635 = G__65651;
count__65372_65636 = G__65652;
i__65373_65637 = G__65653;
continue;
} else {
var child_65654 = cljs.core.first(seq__65369_65648__$1);
if(cljs.core.truth_(child_65654)){
node.appendChild(child_65654);


var G__65655 = cljs.core.next(seq__65369_65648__$1);
var G__65656 = null;
var G__65657 = (0);
var G__65658 = (0);
seq__65369_65634 = G__65655;
chunk__65371_65635 = G__65656;
count__65372_65636 = G__65657;
i__65373_65637 = G__65658;
continue;
} else {
var G__65659 = cljs.core.next(seq__65369_65648__$1);
var G__65660 = null;
var G__65661 = (0);
var G__65662 = (0);
seq__65369_65634 = G__65659;
chunk__65371_65635 = G__65660;
count__65372_65636 = G__65661;
i__65373_65637 = G__65662;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65633);
}
}


var G__65663 = seq__65351_65627;
var G__65664 = chunk__65353_65628;
var G__65665 = count__65354_65629;
var G__65666 = (i__65355_65630 + (1));
seq__65351_65627 = G__65663;
chunk__65353_65628 = G__65664;
count__65354_65629 = G__65665;
i__65355_65630 = G__65666;
continue;
} else {
var G__65667 = seq__65351_65627;
var G__65668 = chunk__65353_65628;
var G__65669 = count__65354_65629;
var G__65670 = (i__65355_65630 + (1));
seq__65351_65627 = G__65667;
chunk__65353_65628 = G__65668;
count__65354_65629 = G__65669;
i__65355_65630 = G__65670;
continue;
}
} else {
var temp__5825__auto___65671 = cljs.core.seq(seq__65351_65627);
if(temp__5825__auto___65671){
var seq__65351_65672__$1 = temp__5825__auto___65671;
if(cljs.core.chunked_seq_QMARK_(seq__65351_65672__$1)){
var c__5548__auto___65673 = cljs.core.chunk_first(seq__65351_65672__$1);
var G__65674 = cljs.core.chunk_rest(seq__65351_65672__$1);
var G__65675 = c__5548__auto___65673;
var G__65676 = cljs.core.count(c__5548__auto___65673);
var G__65677 = (0);
seq__65351_65627 = G__65674;
chunk__65353_65628 = G__65675;
count__65354_65629 = G__65676;
i__65355_65630 = G__65677;
continue;
} else {
var child_struct_65678 = cljs.core.first(seq__65351_65672__$1);
if((!((child_struct_65678 == null)))){
if(typeof child_struct_65678 === 'string'){
var text_65679 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65679),child_struct_65678].join(''));
} else {
var children_65680 = shadow.dom.svg_node(child_struct_65678);
if(cljs.core.seq_QMARK_(children_65680)){
var seq__65375_65681 = cljs.core.seq(children_65680);
var chunk__65377_65682 = null;
var count__65378_65683 = (0);
var i__65379_65684 = (0);
while(true){
if((i__65379_65684 < count__65378_65683)){
var child_65685 = chunk__65377_65682.cljs$core$IIndexed$_nth$arity$2(null,i__65379_65684);
if(cljs.core.truth_(child_65685)){
node.appendChild(child_65685);


var G__65686 = seq__65375_65681;
var G__65687 = chunk__65377_65682;
var G__65688 = count__65378_65683;
var G__65689 = (i__65379_65684 + (1));
seq__65375_65681 = G__65686;
chunk__65377_65682 = G__65687;
count__65378_65683 = G__65688;
i__65379_65684 = G__65689;
continue;
} else {
var G__65690 = seq__65375_65681;
var G__65691 = chunk__65377_65682;
var G__65692 = count__65378_65683;
var G__65693 = (i__65379_65684 + (1));
seq__65375_65681 = G__65690;
chunk__65377_65682 = G__65691;
count__65378_65683 = G__65692;
i__65379_65684 = G__65693;
continue;
}
} else {
var temp__5825__auto___65694__$1 = cljs.core.seq(seq__65375_65681);
if(temp__5825__auto___65694__$1){
var seq__65375_65695__$1 = temp__5825__auto___65694__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65375_65695__$1)){
var c__5548__auto___65696 = cljs.core.chunk_first(seq__65375_65695__$1);
var G__65697 = cljs.core.chunk_rest(seq__65375_65695__$1);
var G__65698 = c__5548__auto___65696;
var G__65699 = cljs.core.count(c__5548__auto___65696);
var G__65700 = (0);
seq__65375_65681 = G__65697;
chunk__65377_65682 = G__65698;
count__65378_65683 = G__65699;
i__65379_65684 = G__65700;
continue;
} else {
var child_65701 = cljs.core.first(seq__65375_65695__$1);
if(cljs.core.truth_(child_65701)){
node.appendChild(child_65701);


var G__65702 = cljs.core.next(seq__65375_65695__$1);
var G__65703 = null;
var G__65704 = (0);
var G__65705 = (0);
seq__65375_65681 = G__65702;
chunk__65377_65682 = G__65703;
count__65378_65683 = G__65704;
i__65379_65684 = G__65705;
continue;
} else {
var G__65706 = cljs.core.next(seq__65375_65695__$1);
var G__65707 = null;
var G__65708 = (0);
var G__65709 = (0);
seq__65375_65681 = G__65706;
chunk__65377_65682 = G__65707;
count__65378_65683 = G__65708;
i__65379_65684 = G__65709;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65680);
}
}


var G__65710 = cljs.core.next(seq__65351_65672__$1);
var G__65711 = null;
var G__65712 = (0);
var G__65713 = (0);
seq__65351_65627 = G__65710;
chunk__65353_65628 = G__65711;
count__65354_65629 = G__65712;
i__65355_65630 = G__65713;
continue;
} else {
var G__65714 = cljs.core.next(seq__65351_65672__$1);
var G__65715 = null;
var G__65716 = (0);
var G__65717 = (0);
seq__65351_65627 = G__65714;
chunk__65353_65628 = G__65715;
count__65354_65629 = G__65716;
i__65355_65630 = G__65717;
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
var len__5749__auto___65718 = arguments.length;
var i__5750__auto___65719 = (0);
while(true){
if((i__5750__auto___65719 < len__5749__auto___65718)){
args__5755__auto__.push((arguments[i__5750__auto___65719]));

var G__65720 = (i__5750__auto___65719 + (1));
i__5750__auto___65719 = G__65720;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq65381){
var G__65382 = cljs.core.first(seq65381);
var seq65381__$1 = cljs.core.next(seq65381);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65382,seq65381__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
