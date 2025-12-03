goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_65360 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_65360(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_65361 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_65361(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__64956 = coll;
var G__64957 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__64956,G__64957) : shadow.dom.lazy_native_coll_seq.call(null,G__64956,G__64957));
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
var G__64962 = arguments.length;
switch (G__64962) {
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
var G__64965 = arguments.length;
switch (G__64965) {
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
var G__64976 = arguments.length;
switch (G__64976) {
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
var G__64982 = arguments.length;
switch (G__64982) {
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
var G__64991 = arguments.length;
switch (G__64991) {
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
var G__64994 = arguments.length;
switch (G__64994) {
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
}catch (e64995){if((e64995 instanceof Object)){
var e = e64995;
return console.log("didnt support attachEvent",el,e);
} else {
throw e64995;

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
var seq__65000 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__65001 = null;
var count__65002 = (0);
var i__65003 = (0);
while(true){
if((i__65003 < count__65002)){
var el = chunk__65001.cljs$core$IIndexed$_nth$arity$2(null,i__65003);
var handler_65368__$1 = ((function (seq__65000,chunk__65001,count__65002,i__65003,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65000,chunk__65001,count__65002,i__65003,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65368__$1);


var G__65369 = seq__65000;
var G__65370 = chunk__65001;
var G__65371 = count__65002;
var G__65372 = (i__65003 + (1));
seq__65000 = G__65369;
chunk__65001 = G__65370;
count__65002 = G__65371;
i__65003 = G__65372;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65000);
if(temp__5825__auto__){
var seq__65000__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65000__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65000__$1);
var G__65373 = cljs.core.chunk_rest(seq__65000__$1);
var G__65374 = c__5548__auto__;
var G__65375 = cljs.core.count(c__5548__auto__);
var G__65376 = (0);
seq__65000 = G__65373;
chunk__65001 = G__65374;
count__65002 = G__65375;
i__65003 = G__65376;
continue;
} else {
var el = cljs.core.first(seq__65000__$1);
var handler_65377__$1 = ((function (seq__65000,chunk__65001,count__65002,i__65003,el,seq__65000__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65000,chunk__65001,count__65002,i__65003,el,seq__65000__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65377__$1);


var G__65378 = cljs.core.next(seq__65000__$1);
var G__65379 = null;
var G__65380 = (0);
var G__65381 = (0);
seq__65000 = G__65378;
chunk__65001 = G__65379;
count__65002 = G__65380;
i__65003 = G__65381;
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
var G__65006 = arguments.length;
switch (G__65006) {
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
var seq__65009 = cljs.core.seq(events);
var chunk__65010 = null;
var count__65011 = (0);
var i__65012 = (0);
while(true){
if((i__65012 < count__65011)){
var vec__65024 = chunk__65010.cljs$core$IIndexed$_nth$arity$2(null,i__65012);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65024,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65024,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65383 = seq__65009;
var G__65384 = chunk__65010;
var G__65385 = count__65011;
var G__65386 = (i__65012 + (1));
seq__65009 = G__65383;
chunk__65010 = G__65384;
count__65011 = G__65385;
i__65012 = G__65386;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65009);
if(temp__5825__auto__){
var seq__65009__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65009__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65009__$1);
var G__65387 = cljs.core.chunk_rest(seq__65009__$1);
var G__65388 = c__5548__auto__;
var G__65389 = cljs.core.count(c__5548__auto__);
var G__65390 = (0);
seq__65009 = G__65387;
chunk__65010 = G__65388;
count__65011 = G__65389;
i__65012 = G__65390;
continue;
} else {
var vec__65029 = cljs.core.first(seq__65009__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65029,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65029,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65391 = cljs.core.next(seq__65009__$1);
var G__65392 = null;
var G__65393 = (0);
var G__65394 = (0);
seq__65009 = G__65391;
chunk__65010 = G__65392;
count__65011 = G__65393;
i__65012 = G__65394;
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
var seq__65033 = cljs.core.seq(styles);
var chunk__65034 = null;
var count__65035 = (0);
var i__65036 = (0);
while(true){
if((i__65036 < count__65035)){
var vec__65046 = chunk__65034.cljs$core$IIndexed$_nth$arity$2(null,i__65036);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65046,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65046,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65395 = seq__65033;
var G__65396 = chunk__65034;
var G__65397 = count__65035;
var G__65398 = (i__65036 + (1));
seq__65033 = G__65395;
chunk__65034 = G__65396;
count__65035 = G__65397;
i__65036 = G__65398;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65033);
if(temp__5825__auto__){
var seq__65033__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65033__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65033__$1);
var G__65399 = cljs.core.chunk_rest(seq__65033__$1);
var G__65400 = c__5548__auto__;
var G__65401 = cljs.core.count(c__5548__auto__);
var G__65402 = (0);
seq__65033 = G__65399;
chunk__65034 = G__65400;
count__65035 = G__65401;
i__65036 = G__65402;
continue;
} else {
var vec__65049 = cljs.core.first(seq__65033__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65049,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65049,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65403 = cljs.core.next(seq__65033__$1);
var G__65404 = null;
var G__65405 = (0);
var G__65406 = (0);
seq__65033 = G__65403;
chunk__65034 = G__65404;
count__65035 = G__65405;
i__65036 = G__65406;
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
var G__65052_65407 = key;
var G__65052_65408__$1 = (((G__65052_65407 instanceof cljs.core.Keyword))?G__65052_65407.fqn:null);
switch (G__65052_65408__$1) {
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
var ks_65410 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_65410,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_65410,"aria-");
}
})())){
el.setAttribute(ks_65410,value);
} else {
(el[ks_65410] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__65077){
var map__65078 = p__65077;
var map__65078__$1 = cljs.core.__destructure_map(map__65078);
var props = map__65078__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65078__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__65082 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65082,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65082,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65082,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__65087 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__65087,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__65087;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__65089 = arguments.length;
switch (G__65089) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__65096){
var vec__65102 = p__65096;
var seq__65103 = cljs.core.seq(vec__65102);
var first__65104 = cljs.core.first(seq__65103);
var seq__65103__$1 = cljs.core.next(seq__65103);
var nn = first__65104;
var first__65104__$1 = cljs.core.first(seq__65103__$1);
var seq__65103__$2 = cljs.core.next(seq__65103__$1);
var np = first__65104__$1;
var nc = seq__65103__$2;
var node = vec__65102;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65120 = nn;
var G__65121 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65120,G__65121) : create_fn.call(null,G__65120,G__65121));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65128 = nn;
var G__65129 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65128,G__65129) : create_fn.call(null,G__65128,G__65129));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__65130 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65130,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65130,(1),null);
var seq__65134_65412 = cljs.core.seq(node_children);
var chunk__65135_65413 = null;
var count__65136_65414 = (0);
var i__65137_65415 = (0);
while(true){
if((i__65137_65415 < count__65136_65414)){
var child_struct_65416 = chunk__65135_65413.cljs$core$IIndexed$_nth$arity$2(null,i__65137_65415);
var children_65417 = shadow.dom.dom_node(child_struct_65416);
if(cljs.core.seq_QMARK_(children_65417)){
var seq__65159_65418 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65417));
var chunk__65161_65419 = null;
var count__65162_65420 = (0);
var i__65163_65421 = (0);
while(true){
if((i__65163_65421 < count__65162_65420)){
var child_65422 = chunk__65161_65419.cljs$core$IIndexed$_nth$arity$2(null,i__65163_65421);
if(cljs.core.truth_(child_65422)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65422);


var G__65423 = seq__65159_65418;
var G__65424 = chunk__65161_65419;
var G__65425 = count__65162_65420;
var G__65426 = (i__65163_65421 + (1));
seq__65159_65418 = G__65423;
chunk__65161_65419 = G__65424;
count__65162_65420 = G__65425;
i__65163_65421 = G__65426;
continue;
} else {
var G__65427 = seq__65159_65418;
var G__65428 = chunk__65161_65419;
var G__65429 = count__65162_65420;
var G__65430 = (i__65163_65421 + (1));
seq__65159_65418 = G__65427;
chunk__65161_65419 = G__65428;
count__65162_65420 = G__65429;
i__65163_65421 = G__65430;
continue;
}
} else {
var temp__5825__auto___65431 = cljs.core.seq(seq__65159_65418);
if(temp__5825__auto___65431){
var seq__65159_65432__$1 = temp__5825__auto___65431;
if(cljs.core.chunked_seq_QMARK_(seq__65159_65432__$1)){
var c__5548__auto___65433 = cljs.core.chunk_first(seq__65159_65432__$1);
var G__65434 = cljs.core.chunk_rest(seq__65159_65432__$1);
var G__65435 = c__5548__auto___65433;
var G__65436 = cljs.core.count(c__5548__auto___65433);
var G__65437 = (0);
seq__65159_65418 = G__65434;
chunk__65161_65419 = G__65435;
count__65162_65420 = G__65436;
i__65163_65421 = G__65437;
continue;
} else {
var child_65438 = cljs.core.first(seq__65159_65432__$1);
if(cljs.core.truth_(child_65438)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65438);


var G__65439 = cljs.core.next(seq__65159_65432__$1);
var G__65440 = null;
var G__65441 = (0);
var G__65442 = (0);
seq__65159_65418 = G__65439;
chunk__65161_65419 = G__65440;
count__65162_65420 = G__65441;
i__65163_65421 = G__65442;
continue;
} else {
var G__65443 = cljs.core.next(seq__65159_65432__$1);
var G__65444 = null;
var G__65445 = (0);
var G__65446 = (0);
seq__65159_65418 = G__65443;
chunk__65161_65419 = G__65444;
count__65162_65420 = G__65445;
i__65163_65421 = G__65446;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65417);
}


var G__65447 = seq__65134_65412;
var G__65448 = chunk__65135_65413;
var G__65449 = count__65136_65414;
var G__65450 = (i__65137_65415 + (1));
seq__65134_65412 = G__65447;
chunk__65135_65413 = G__65448;
count__65136_65414 = G__65449;
i__65137_65415 = G__65450;
continue;
} else {
var temp__5825__auto___65451 = cljs.core.seq(seq__65134_65412);
if(temp__5825__auto___65451){
var seq__65134_65452__$1 = temp__5825__auto___65451;
if(cljs.core.chunked_seq_QMARK_(seq__65134_65452__$1)){
var c__5548__auto___65453 = cljs.core.chunk_first(seq__65134_65452__$1);
var G__65454 = cljs.core.chunk_rest(seq__65134_65452__$1);
var G__65455 = c__5548__auto___65453;
var G__65456 = cljs.core.count(c__5548__auto___65453);
var G__65457 = (0);
seq__65134_65412 = G__65454;
chunk__65135_65413 = G__65455;
count__65136_65414 = G__65456;
i__65137_65415 = G__65457;
continue;
} else {
var child_struct_65458 = cljs.core.first(seq__65134_65452__$1);
var children_65459 = shadow.dom.dom_node(child_struct_65458);
if(cljs.core.seq_QMARK_(children_65459)){
var seq__65174_65460 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65459));
var chunk__65176_65461 = null;
var count__65177_65462 = (0);
var i__65178_65463 = (0);
while(true){
if((i__65178_65463 < count__65177_65462)){
var child_65464 = chunk__65176_65461.cljs$core$IIndexed$_nth$arity$2(null,i__65178_65463);
if(cljs.core.truth_(child_65464)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65464);


var G__65465 = seq__65174_65460;
var G__65466 = chunk__65176_65461;
var G__65467 = count__65177_65462;
var G__65468 = (i__65178_65463 + (1));
seq__65174_65460 = G__65465;
chunk__65176_65461 = G__65466;
count__65177_65462 = G__65467;
i__65178_65463 = G__65468;
continue;
} else {
var G__65469 = seq__65174_65460;
var G__65470 = chunk__65176_65461;
var G__65471 = count__65177_65462;
var G__65472 = (i__65178_65463 + (1));
seq__65174_65460 = G__65469;
chunk__65176_65461 = G__65470;
count__65177_65462 = G__65471;
i__65178_65463 = G__65472;
continue;
}
} else {
var temp__5825__auto___65473__$1 = cljs.core.seq(seq__65174_65460);
if(temp__5825__auto___65473__$1){
var seq__65174_65474__$1 = temp__5825__auto___65473__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65174_65474__$1)){
var c__5548__auto___65475 = cljs.core.chunk_first(seq__65174_65474__$1);
var G__65476 = cljs.core.chunk_rest(seq__65174_65474__$1);
var G__65477 = c__5548__auto___65475;
var G__65478 = cljs.core.count(c__5548__auto___65475);
var G__65479 = (0);
seq__65174_65460 = G__65476;
chunk__65176_65461 = G__65477;
count__65177_65462 = G__65478;
i__65178_65463 = G__65479;
continue;
} else {
var child_65480 = cljs.core.first(seq__65174_65474__$1);
if(cljs.core.truth_(child_65480)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65480);


var G__65481 = cljs.core.next(seq__65174_65474__$1);
var G__65482 = null;
var G__65483 = (0);
var G__65484 = (0);
seq__65174_65460 = G__65481;
chunk__65176_65461 = G__65482;
count__65177_65462 = G__65483;
i__65178_65463 = G__65484;
continue;
} else {
var G__65485 = cljs.core.next(seq__65174_65474__$1);
var G__65486 = null;
var G__65487 = (0);
var G__65488 = (0);
seq__65174_65460 = G__65485;
chunk__65176_65461 = G__65486;
count__65177_65462 = G__65487;
i__65178_65463 = G__65488;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65459);
}


var G__65489 = cljs.core.next(seq__65134_65452__$1);
var G__65490 = null;
var G__65491 = (0);
var G__65492 = (0);
seq__65134_65412 = G__65489;
chunk__65135_65413 = G__65490;
count__65136_65414 = G__65491;
i__65137_65415 = G__65492;
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
var seq__65187 = cljs.core.seq(node);
var chunk__65188 = null;
var count__65189 = (0);
var i__65190 = (0);
while(true){
if((i__65190 < count__65189)){
var n = chunk__65188.cljs$core$IIndexed$_nth$arity$2(null,i__65190);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65493 = seq__65187;
var G__65494 = chunk__65188;
var G__65495 = count__65189;
var G__65496 = (i__65190 + (1));
seq__65187 = G__65493;
chunk__65188 = G__65494;
count__65189 = G__65495;
i__65190 = G__65496;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65187);
if(temp__5825__auto__){
var seq__65187__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65187__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65187__$1);
var G__65497 = cljs.core.chunk_rest(seq__65187__$1);
var G__65498 = c__5548__auto__;
var G__65499 = cljs.core.count(c__5548__auto__);
var G__65500 = (0);
seq__65187 = G__65497;
chunk__65188 = G__65498;
count__65189 = G__65499;
i__65190 = G__65500;
continue;
} else {
var n = cljs.core.first(seq__65187__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65501 = cljs.core.next(seq__65187__$1);
var G__65502 = null;
var G__65503 = (0);
var G__65504 = (0);
seq__65187 = G__65501;
chunk__65188 = G__65502;
count__65189 = G__65503;
i__65190 = G__65504;
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
var G__65195 = arguments.length;
switch (G__65195) {
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
var G__65201 = arguments.length;
switch (G__65201) {
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
var G__65207 = arguments.length;
switch (G__65207) {
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
var len__5749__auto___65508 = arguments.length;
var i__5750__auto___65509 = (0);
while(true){
if((i__5750__auto___65509 < len__5749__auto___65508)){
args__5755__auto__.push((arguments[i__5750__auto___65509]));

var G__65510 = (i__5750__auto___65509 + (1));
i__5750__auto___65509 = G__65510;
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
var seq__65209_65511 = cljs.core.seq(nodes);
var chunk__65210_65512 = null;
var count__65211_65513 = (0);
var i__65212_65514 = (0);
while(true){
if((i__65212_65514 < count__65211_65513)){
var node_65515 = chunk__65210_65512.cljs$core$IIndexed$_nth$arity$2(null,i__65212_65514);
fragment.appendChild(shadow.dom._to_dom(node_65515));


var G__65516 = seq__65209_65511;
var G__65517 = chunk__65210_65512;
var G__65518 = count__65211_65513;
var G__65519 = (i__65212_65514 + (1));
seq__65209_65511 = G__65516;
chunk__65210_65512 = G__65517;
count__65211_65513 = G__65518;
i__65212_65514 = G__65519;
continue;
} else {
var temp__5825__auto___65520 = cljs.core.seq(seq__65209_65511);
if(temp__5825__auto___65520){
var seq__65209_65521__$1 = temp__5825__auto___65520;
if(cljs.core.chunked_seq_QMARK_(seq__65209_65521__$1)){
var c__5548__auto___65522 = cljs.core.chunk_first(seq__65209_65521__$1);
var G__65523 = cljs.core.chunk_rest(seq__65209_65521__$1);
var G__65524 = c__5548__auto___65522;
var G__65525 = cljs.core.count(c__5548__auto___65522);
var G__65526 = (0);
seq__65209_65511 = G__65523;
chunk__65210_65512 = G__65524;
count__65211_65513 = G__65525;
i__65212_65514 = G__65526;
continue;
} else {
var node_65527 = cljs.core.first(seq__65209_65521__$1);
fragment.appendChild(shadow.dom._to_dom(node_65527));


var G__65528 = cljs.core.next(seq__65209_65521__$1);
var G__65529 = null;
var G__65530 = (0);
var G__65531 = (0);
seq__65209_65511 = G__65528;
chunk__65210_65512 = G__65529;
count__65211_65513 = G__65530;
i__65212_65514 = G__65531;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq65208){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65208));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65215_65532 = cljs.core.seq(scripts);
var chunk__65216_65533 = null;
var count__65217_65534 = (0);
var i__65218_65535 = (0);
while(true){
if((i__65218_65535 < count__65217_65534)){
var vec__65227_65536 = chunk__65216_65533.cljs$core$IIndexed$_nth$arity$2(null,i__65218_65535);
var script_tag_65537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65227_65536,(0),null);
var script_body_65538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65227_65536,(1),null);
eval(script_body_65538);


var G__65539 = seq__65215_65532;
var G__65540 = chunk__65216_65533;
var G__65541 = count__65217_65534;
var G__65542 = (i__65218_65535 + (1));
seq__65215_65532 = G__65539;
chunk__65216_65533 = G__65540;
count__65217_65534 = G__65541;
i__65218_65535 = G__65542;
continue;
} else {
var temp__5825__auto___65543 = cljs.core.seq(seq__65215_65532);
if(temp__5825__auto___65543){
var seq__65215_65544__$1 = temp__5825__auto___65543;
if(cljs.core.chunked_seq_QMARK_(seq__65215_65544__$1)){
var c__5548__auto___65545 = cljs.core.chunk_first(seq__65215_65544__$1);
var G__65546 = cljs.core.chunk_rest(seq__65215_65544__$1);
var G__65547 = c__5548__auto___65545;
var G__65548 = cljs.core.count(c__5548__auto___65545);
var G__65549 = (0);
seq__65215_65532 = G__65546;
chunk__65216_65533 = G__65547;
count__65217_65534 = G__65548;
i__65218_65535 = G__65549;
continue;
} else {
var vec__65230_65550 = cljs.core.first(seq__65215_65544__$1);
var script_tag_65551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65230_65550,(0),null);
var script_body_65552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65230_65550,(1),null);
eval(script_body_65552);


var G__65553 = cljs.core.next(seq__65215_65544__$1);
var G__65554 = null;
var G__65555 = (0);
var G__65556 = (0);
seq__65215_65532 = G__65553;
chunk__65216_65533 = G__65554;
count__65217_65534 = G__65555;
i__65218_65535 = G__65556;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__65233){
var vec__65234 = p__65233;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65234,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65234,(1),null);
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
var G__65241 = arguments.length;
switch (G__65241) {
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
var seq__65246 = cljs.core.seq(style_keys);
var chunk__65247 = null;
var count__65248 = (0);
var i__65249 = (0);
while(true){
if((i__65249 < count__65248)){
var it = chunk__65247.cljs$core$IIndexed$_nth$arity$2(null,i__65249);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__65558 = seq__65246;
var G__65559 = chunk__65247;
var G__65560 = count__65248;
var G__65561 = (i__65249 + (1));
seq__65246 = G__65558;
chunk__65247 = G__65559;
count__65248 = G__65560;
i__65249 = G__65561;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65246);
if(temp__5825__auto__){
var seq__65246__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65246__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65246__$1);
var G__65562 = cljs.core.chunk_rest(seq__65246__$1);
var G__65563 = c__5548__auto__;
var G__65564 = cljs.core.count(c__5548__auto__);
var G__65565 = (0);
seq__65246 = G__65562;
chunk__65247 = G__65563;
count__65248 = G__65564;
i__65249 = G__65565;
continue;
} else {
var it = cljs.core.first(seq__65246__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__65566 = cljs.core.next(seq__65246__$1);
var G__65567 = null;
var G__65568 = (0);
var G__65569 = (0);
seq__65246 = G__65566;
chunk__65247 = G__65567;
count__65248 = G__65568;
i__65249 = G__65569;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65251,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65255 = k65251;
var G__65255__$1 = (((G__65255 instanceof cljs.core.Keyword))?G__65255.fqn:null);
switch (G__65255__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65251,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65258){
var vec__65259 = p__65258;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65259,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65259,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65250){
var self__ = this;
var G__65250__$1 = this;
return (new cljs.core.RecordIter((0),G__65250__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65252,other65253){
var self__ = this;
var this65252__$1 = this;
return (((!((other65253 == null)))) && ((((this65252__$1.constructor === other65253.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65252__$1.x,other65253.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65252__$1.y,other65253.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65252__$1.__extmap,other65253.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65251){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65262 = k65251;
var G__65262__$1 = (((G__65262 instanceof cljs.core.Keyword))?G__65262.fqn:null);
switch (G__65262__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65251);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65250){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65264 = cljs.core.keyword_identical_QMARK_;
var expr__65265 = k__5332__auto__;
if(cljs.core.truth_((pred__65264.cljs$core$IFn$_invoke$arity$2 ? pred__65264.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__65265) : pred__65264.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__65265)))){
return (new shadow.dom.Coordinate(G__65250,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65264.cljs$core$IFn$_invoke$arity$2 ? pred__65264.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__65265) : pred__65264.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__65265)))){
return (new shadow.dom.Coordinate(self__.x,G__65250,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65250),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65250){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__65250,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__65254){
var extmap__5365__auto__ = (function (){var G__65274 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65254,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65254)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65274);
} else {
return G__65274;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__65254),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__65254),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65276,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65280 = k65276;
var G__65280__$1 = (((G__65280 instanceof cljs.core.Keyword))?G__65280.fqn:null);
switch (G__65280__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65276,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65281){
var vec__65282 = p__65281;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65282,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65282,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65275){
var self__ = this;
var G__65275__$1 = this;
return (new cljs.core.RecordIter((0),G__65275__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65277,other65278){
var self__ = this;
var this65277__$1 = this;
return (((!((other65278 == null)))) && ((((this65277__$1.constructor === other65278.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65277__$1.w,other65278.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65277__$1.h,other65278.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65277__$1.__extmap,other65278.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65276){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65290 = k65276;
var G__65290__$1 = (((G__65290 instanceof cljs.core.Keyword))?G__65290.fqn:null);
switch (G__65290__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65276);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65275){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65291 = cljs.core.keyword_identical_QMARK_;
var expr__65292 = k__5332__auto__;
if(cljs.core.truth_((pred__65291.cljs$core$IFn$_invoke$arity$2 ? pred__65291.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__65292) : pred__65291.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__65292)))){
return (new shadow.dom.Size(G__65275,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65291.cljs$core$IFn$_invoke$arity$2 ? pred__65291.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__65292) : pred__65291.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__65292)))){
return (new shadow.dom.Size(self__.w,G__65275,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65275),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65275){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65275,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65279){
var extmap__5365__auto__ = (function (){var G__65294 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65279,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65279)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65294);
} else {
return G__65294;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65279),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65279),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__65574 = (i + (1));
var G__65575 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__65574;
ret = G__65575;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65299){
var vec__65300 = p__65299;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65300,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65300,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65304 = arguments.length;
switch (G__65304) {
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
var G__65577 = ps;
var G__65578 = (i + (1));
el__$1 = G__65577;
i = G__65578;
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
var vec__65305 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65305,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65305,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65305,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65308_65579 = cljs.core.seq(props);
var chunk__65309_65580 = null;
var count__65310_65581 = (0);
var i__65311_65582 = (0);
while(true){
if((i__65311_65582 < count__65310_65581)){
var vec__65318_65583 = chunk__65309_65580.cljs$core$IIndexed$_nth$arity$2(null,i__65311_65582);
var k_65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65318_65583,(0),null);
var v_65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65318_65583,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_65584);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65584),v_65585);


var G__65586 = seq__65308_65579;
var G__65587 = chunk__65309_65580;
var G__65588 = count__65310_65581;
var G__65589 = (i__65311_65582 + (1));
seq__65308_65579 = G__65586;
chunk__65309_65580 = G__65587;
count__65310_65581 = G__65588;
i__65311_65582 = G__65589;
continue;
} else {
var temp__5825__auto___65590 = cljs.core.seq(seq__65308_65579);
if(temp__5825__auto___65590){
var seq__65308_65591__$1 = temp__5825__auto___65590;
if(cljs.core.chunked_seq_QMARK_(seq__65308_65591__$1)){
var c__5548__auto___65592 = cljs.core.chunk_first(seq__65308_65591__$1);
var G__65593 = cljs.core.chunk_rest(seq__65308_65591__$1);
var G__65594 = c__5548__auto___65592;
var G__65595 = cljs.core.count(c__5548__auto___65592);
var G__65596 = (0);
seq__65308_65579 = G__65593;
chunk__65309_65580 = G__65594;
count__65310_65581 = G__65595;
i__65311_65582 = G__65596;
continue;
} else {
var vec__65321_65597 = cljs.core.first(seq__65308_65591__$1);
var k_65598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65321_65597,(0),null);
var v_65599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65321_65597,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_65598);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65598),v_65599);


var G__65600 = cljs.core.next(seq__65308_65591__$1);
var G__65601 = null;
var G__65602 = (0);
var G__65603 = (0);
seq__65308_65579 = G__65600;
chunk__65309_65580 = G__65601;
count__65310_65581 = G__65602;
i__65311_65582 = G__65603;
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
var vec__65325 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65325,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65325,(1),null);
var seq__65328_65604 = cljs.core.seq(node_children);
var chunk__65330_65605 = null;
var count__65331_65606 = (0);
var i__65332_65607 = (0);
while(true){
if((i__65332_65607 < count__65331_65606)){
var child_struct_65608 = chunk__65330_65605.cljs$core$IIndexed$_nth$arity$2(null,i__65332_65607);
if((!((child_struct_65608 == null)))){
if(typeof child_struct_65608 === 'string'){
var text_65609 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65609),child_struct_65608].join(''));
} else {
var children_65610 = shadow.dom.svg_node(child_struct_65608);
if(cljs.core.seq_QMARK_(children_65610)){
var seq__65346_65611 = cljs.core.seq(children_65610);
var chunk__65348_65612 = null;
var count__65349_65613 = (0);
var i__65350_65614 = (0);
while(true){
if((i__65350_65614 < count__65349_65613)){
var child_65615 = chunk__65348_65612.cljs$core$IIndexed$_nth$arity$2(null,i__65350_65614);
if(cljs.core.truth_(child_65615)){
node.appendChild(child_65615);


var G__65616 = seq__65346_65611;
var G__65617 = chunk__65348_65612;
var G__65618 = count__65349_65613;
var G__65619 = (i__65350_65614 + (1));
seq__65346_65611 = G__65616;
chunk__65348_65612 = G__65617;
count__65349_65613 = G__65618;
i__65350_65614 = G__65619;
continue;
} else {
var G__65620 = seq__65346_65611;
var G__65621 = chunk__65348_65612;
var G__65622 = count__65349_65613;
var G__65623 = (i__65350_65614 + (1));
seq__65346_65611 = G__65620;
chunk__65348_65612 = G__65621;
count__65349_65613 = G__65622;
i__65350_65614 = G__65623;
continue;
}
} else {
var temp__5825__auto___65624 = cljs.core.seq(seq__65346_65611);
if(temp__5825__auto___65624){
var seq__65346_65625__$1 = temp__5825__auto___65624;
if(cljs.core.chunked_seq_QMARK_(seq__65346_65625__$1)){
var c__5548__auto___65626 = cljs.core.chunk_first(seq__65346_65625__$1);
var G__65627 = cljs.core.chunk_rest(seq__65346_65625__$1);
var G__65628 = c__5548__auto___65626;
var G__65629 = cljs.core.count(c__5548__auto___65626);
var G__65630 = (0);
seq__65346_65611 = G__65627;
chunk__65348_65612 = G__65628;
count__65349_65613 = G__65629;
i__65350_65614 = G__65630;
continue;
} else {
var child_65631 = cljs.core.first(seq__65346_65625__$1);
if(cljs.core.truth_(child_65631)){
node.appendChild(child_65631);


var G__65632 = cljs.core.next(seq__65346_65625__$1);
var G__65633 = null;
var G__65634 = (0);
var G__65635 = (0);
seq__65346_65611 = G__65632;
chunk__65348_65612 = G__65633;
count__65349_65613 = G__65634;
i__65350_65614 = G__65635;
continue;
} else {
var G__65636 = cljs.core.next(seq__65346_65625__$1);
var G__65637 = null;
var G__65638 = (0);
var G__65639 = (0);
seq__65346_65611 = G__65636;
chunk__65348_65612 = G__65637;
count__65349_65613 = G__65638;
i__65350_65614 = G__65639;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65610);
}
}


var G__65640 = seq__65328_65604;
var G__65641 = chunk__65330_65605;
var G__65642 = count__65331_65606;
var G__65643 = (i__65332_65607 + (1));
seq__65328_65604 = G__65640;
chunk__65330_65605 = G__65641;
count__65331_65606 = G__65642;
i__65332_65607 = G__65643;
continue;
} else {
var G__65644 = seq__65328_65604;
var G__65645 = chunk__65330_65605;
var G__65646 = count__65331_65606;
var G__65647 = (i__65332_65607 + (1));
seq__65328_65604 = G__65644;
chunk__65330_65605 = G__65645;
count__65331_65606 = G__65646;
i__65332_65607 = G__65647;
continue;
}
} else {
var temp__5825__auto___65648 = cljs.core.seq(seq__65328_65604);
if(temp__5825__auto___65648){
var seq__65328_65649__$1 = temp__5825__auto___65648;
if(cljs.core.chunked_seq_QMARK_(seq__65328_65649__$1)){
var c__5548__auto___65650 = cljs.core.chunk_first(seq__65328_65649__$1);
var G__65651 = cljs.core.chunk_rest(seq__65328_65649__$1);
var G__65652 = c__5548__auto___65650;
var G__65653 = cljs.core.count(c__5548__auto___65650);
var G__65654 = (0);
seq__65328_65604 = G__65651;
chunk__65330_65605 = G__65652;
count__65331_65606 = G__65653;
i__65332_65607 = G__65654;
continue;
} else {
var child_struct_65655 = cljs.core.first(seq__65328_65649__$1);
if((!((child_struct_65655 == null)))){
if(typeof child_struct_65655 === 'string'){
var text_65656 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65656),child_struct_65655].join(''));
} else {
var children_65657 = shadow.dom.svg_node(child_struct_65655);
if(cljs.core.seq_QMARK_(children_65657)){
var seq__65352_65658 = cljs.core.seq(children_65657);
var chunk__65354_65659 = null;
var count__65355_65660 = (0);
var i__65356_65661 = (0);
while(true){
if((i__65356_65661 < count__65355_65660)){
var child_65662 = chunk__65354_65659.cljs$core$IIndexed$_nth$arity$2(null,i__65356_65661);
if(cljs.core.truth_(child_65662)){
node.appendChild(child_65662);


var G__65663 = seq__65352_65658;
var G__65664 = chunk__65354_65659;
var G__65665 = count__65355_65660;
var G__65666 = (i__65356_65661 + (1));
seq__65352_65658 = G__65663;
chunk__65354_65659 = G__65664;
count__65355_65660 = G__65665;
i__65356_65661 = G__65666;
continue;
} else {
var G__65667 = seq__65352_65658;
var G__65668 = chunk__65354_65659;
var G__65669 = count__65355_65660;
var G__65670 = (i__65356_65661 + (1));
seq__65352_65658 = G__65667;
chunk__65354_65659 = G__65668;
count__65355_65660 = G__65669;
i__65356_65661 = G__65670;
continue;
}
} else {
var temp__5825__auto___65671__$1 = cljs.core.seq(seq__65352_65658);
if(temp__5825__auto___65671__$1){
var seq__65352_65672__$1 = temp__5825__auto___65671__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65352_65672__$1)){
var c__5548__auto___65673 = cljs.core.chunk_first(seq__65352_65672__$1);
var G__65674 = cljs.core.chunk_rest(seq__65352_65672__$1);
var G__65675 = c__5548__auto___65673;
var G__65676 = cljs.core.count(c__5548__auto___65673);
var G__65677 = (0);
seq__65352_65658 = G__65674;
chunk__65354_65659 = G__65675;
count__65355_65660 = G__65676;
i__65356_65661 = G__65677;
continue;
} else {
var child_65678 = cljs.core.first(seq__65352_65672__$1);
if(cljs.core.truth_(child_65678)){
node.appendChild(child_65678);


var G__65679 = cljs.core.next(seq__65352_65672__$1);
var G__65680 = null;
var G__65681 = (0);
var G__65682 = (0);
seq__65352_65658 = G__65679;
chunk__65354_65659 = G__65680;
count__65355_65660 = G__65681;
i__65356_65661 = G__65682;
continue;
} else {
var G__65683 = cljs.core.next(seq__65352_65672__$1);
var G__65684 = null;
var G__65685 = (0);
var G__65686 = (0);
seq__65352_65658 = G__65683;
chunk__65354_65659 = G__65684;
count__65355_65660 = G__65685;
i__65356_65661 = G__65686;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65657);
}
}


var G__65687 = cljs.core.next(seq__65328_65649__$1);
var G__65688 = null;
var G__65689 = (0);
var G__65690 = (0);
seq__65328_65604 = G__65687;
chunk__65330_65605 = G__65688;
count__65331_65606 = G__65689;
i__65332_65607 = G__65690;
continue;
} else {
var G__65691 = cljs.core.next(seq__65328_65649__$1);
var G__65692 = null;
var G__65693 = (0);
var G__65694 = (0);
seq__65328_65604 = G__65691;
chunk__65330_65605 = G__65692;
count__65331_65606 = G__65693;
i__65332_65607 = G__65694;
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
var len__5749__auto___65695 = arguments.length;
var i__5750__auto___65696 = (0);
while(true){
if((i__5750__auto___65696 < len__5749__auto___65695)){
args__5755__auto__.push((arguments[i__5750__auto___65696]));

var G__65697 = (i__5750__auto___65696 + (1));
i__5750__auto___65696 = G__65697;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq65358){
var G__65359 = cljs.core.first(seq65358);
var seq65358__$1 = cljs.core.next(seq65358);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65359,seq65358__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
