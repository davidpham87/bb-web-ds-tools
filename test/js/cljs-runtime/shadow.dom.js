goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_65377 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_65377(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_65378 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_65378(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__64993 = coll;
var G__64994 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__64993,G__64994) : shadow.dom.lazy_native_coll_seq.call(null,G__64993,G__64994));
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
var G__65008 = arguments.length;
switch (G__65008) {
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
var G__65011 = arguments.length;
switch (G__65011) {
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
var G__65015 = arguments.length;
switch (G__65015) {
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
var G__65020 = arguments.length;
switch (G__65020) {
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
var G__65025 = arguments.length;
switch (G__65025) {
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
var G__65028 = arguments.length;
switch (G__65028) {
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
}catch (e65034){if((e65034 instanceof Object)){
var e = e65034;
return console.log("didnt support attachEvent",el,e);
} else {
throw e65034;

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
var seq__65050 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__65051 = null;
var count__65052 = (0);
var i__65053 = (0);
while(true){
if((i__65053 < count__65052)){
var el = chunk__65051.cljs$core$IIndexed$_nth$arity$2(null,i__65053);
var handler_65385__$1 = ((function (seq__65050,chunk__65051,count__65052,i__65053,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65050,chunk__65051,count__65052,i__65053,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65385__$1);


var G__65386 = seq__65050;
var G__65387 = chunk__65051;
var G__65388 = count__65052;
var G__65389 = (i__65053 + (1));
seq__65050 = G__65386;
chunk__65051 = G__65387;
count__65052 = G__65388;
i__65053 = G__65389;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65050);
if(temp__5825__auto__){
var seq__65050__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65050__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65050__$1);
var G__65390 = cljs.core.chunk_rest(seq__65050__$1);
var G__65391 = c__5548__auto__;
var G__65392 = cljs.core.count(c__5548__auto__);
var G__65393 = (0);
seq__65050 = G__65390;
chunk__65051 = G__65391;
count__65052 = G__65392;
i__65053 = G__65393;
continue;
} else {
var el = cljs.core.first(seq__65050__$1);
var handler_65394__$1 = ((function (seq__65050,chunk__65051,count__65052,i__65053,el,seq__65050__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65050,chunk__65051,count__65052,i__65053,el,seq__65050__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65394__$1);


var G__65395 = cljs.core.next(seq__65050__$1);
var G__65396 = null;
var G__65397 = (0);
var G__65398 = (0);
seq__65050 = G__65395;
chunk__65051 = G__65396;
count__65052 = G__65397;
i__65053 = G__65398;
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
var G__65087 = arguments.length;
switch (G__65087) {
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
var seq__65096 = cljs.core.seq(events);
var chunk__65097 = null;
var count__65098 = (0);
var i__65099 = (0);
while(true){
if((i__65099 < count__65098)){
var vec__65109 = chunk__65097.cljs$core$IIndexed$_nth$arity$2(null,i__65099);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65109,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65109,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65400 = seq__65096;
var G__65401 = chunk__65097;
var G__65402 = count__65098;
var G__65403 = (i__65099 + (1));
seq__65096 = G__65400;
chunk__65097 = G__65401;
count__65098 = G__65402;
i__65099 = G__65403;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65096);
if(temp__5825__auto__){
var seq__65096__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65096__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65096__$1);
var G__65404 = cljs.core.chunk_rest(seq__65096__$1);
var G__65405 = c__5548__auto__;
var G__65406 = cljs.core.count(c__5548__auto__);
var G__65407 = (0);
seq__65096 = G__65404;
chunk__65097 = G__65405;
count__65098 = G__65406;
i__65099 = G__65407;
continue;
} else {
var vec__65112 = cljs.core.first(seq__65096__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65112,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65112,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65408 = cljs.core.next(seq__65096__$1);
var G__65409 = null;
var G__65410 = (0);
var G__65411 = (0);
seq__65096 = G__65408;
chunk__65097 = G__65409;
count__65098 = G__65410;
i__65099 = G__65411;
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
var seq__65116 = cljs.core.seq(styles);
var chunk__65117 = null;
var count__65118 = (0);
var i__65119 = (0);
while(true){
if((i__65119 < count__65118)){
var vec__65126 = chunk__65117.cljs$core$IIndexed$_nth$arity$2(null,i__65119);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65126,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65126,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65412 = seq__65116;
var G__65413 = chunk__65117;
var G__65414 = count__65118;
var G__65415 = (i__65119 + (1));
seq__65116 = G__65412;
chunk__65117 = G__65413;
count__65118 = G__65414;
i__65119 = G__65415;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65116);
if(temp__5825__auto__){
var seq__65116__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65116__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65116__$1);
var G__65416 = cljs.core.chunk_rest(seq__65116__$1);
var G__65417 = c__5548__auto__;
var G__65418 = cljs.core.count(c__5548__auto__);
var G__65419 = (0);
seq__65116 = G__65416;
chunk__65117 = G__65417;
count__65118 = G__65418;
i__65119 = G__65419;
continue;
} else {
var vec__65129 = cljs.core.first(seq__65116__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65129,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65129,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65420 = cljs.core.next(seq__65116__$1);
var G__65421 = null;
var G__65422 = (0);
var G__65423 = (0);
seq__65116 = G__65420;
chunk__65117 = G__65421;
count__65118 = G__65422;
i__65119 = G__65423;
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
var G__65132_65424 = key;
var G__65132_65425__$1 = (((G__65132_65424 instanceof cljs.core.Keyword))?G__65132_65424.fqn:null);
switch (G__65132_65425__$1) {
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
var ks_65427 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_65427,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_65427,"aria-");
}
})())){
el.setAttribute(ks_65427,value);
} else {
(el[ks_65427] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__65135){
var map__65136 = p__65135;
var map__65136__$1 = cljs.core.__destructure_map(map__65136);
var props = map__65136__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65136__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__65137 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65137,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65137,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65137,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__65140 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__65140,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__65140;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__65142 = arguments.length;
switch (G__65142) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__65143){
var vec__65144 = p__65143;
var seq__65145 = cljs.core.seq(vec__65144);
var first__65146 = cljs.core.first(seq__65145);
var seq__65145__$1 = cljs.core.next(seq__65145);
var nn = first__65146;
var first__65146__$1 = cljs.core.first(seq__65145__$1);
var seq__65145__$2 = cljs.core.next(seq__65145__$1);
var np = first__65146__$1;
var nc = seq__65145__$2;
var node = vec__65144;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65147 = nn;
var G__65148 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65147,G__65148) : create_fn.call(null,G__65147,G__65148));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65149 = nn;
var G__65150 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65149,G__65150) : create_fn.call(null,G__65149,G__65150));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__65151 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65151,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65151,(1),null);
var seq__65154_65429 = cljs.core.seq(node_children);
var chunk__65155_65430 = null;
var count__65156_65431 = (0);
var i__65157_65432 = (0);
while(true){
if((i__65157_65432 < count__65156_65431)){
var child_struct_65433 = chunk__65155_65430.cljs$core$IIndexed$_nth$arity$2(null,i__65157_65432);
var children_65434 = shadow.dom.dom_node(child_struct_65433);
if(cljs.core.seq_QMARK_(children_65434)){
var seq__65176_65435 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65434));
var chunk__65178_65436 = null;
var count__65179_65437 = (0);
var i__65180_65438 = (0);
while(true){
if((i__65180_65438 < count__65179_65437)){
var child_65439 = chunk__65178_65436.cljs$core$IIndexed$_nth$arity$2(null,i__65180_65438);
if(cljs.core.truth_(child_65439)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65439);


var G__65440 = seq__65176_65435;
var G__65441 = chunk__65178_65436;
var G__65442 = count__65179_65437;
var G__65443 = (i__65180_65438 + (1));
seq__65176_65435 = G__65440;
chunk__65178_65436 = G__65441;
count__65179_65437 = G__65442;
i__65180_65438 = G__65443;
continue;
} else {
var G__65444 = seq__65176_65435;
var G__65445 = chunk__65178_65436;
var G__65446 = count__65179_65437;
var G__65447 = (i__65180_65438 + (1));
seq__65176_65435 = G__65444;
chunk__65178_65436 = G__65445;
count__65179_65437 = G__65446;
i__65180_65438 = G__65447;
continue;
}
} else {
var temp__5825__auto___65448 = cljs.core.seq(seq__65176_65435);
if(temp__5825__auto___65448){
var seq__65176_65449__$1 = temp__5825__auto___65448;
if(cljs.core.chunked_seq_QMARK_(seq__65176_65449__$1)){
var c__5548__auto___65450 = cljs.core.chunk_first(seq__65176_65449__$1);
var G__65451 = cljs.core.chunk_rest(seq__65176_65449__$1);
var G__65452 = c__5548__auto___65450;
var G__65453 = cljs.core.count(c__5548__auto___65450);
var G__65454 = (0);
seq__65176_65435 = G__65451;
chunk__65178_65436 = G__65452;
count__65179_65437 = G__65453;
i__65180_65438 = G__65454;
continue;
} else {
var child_65455 = cljs.core.first(seq__65176_65449__$1);
if(cljs.core.truth_(child_65455)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65455);


var G__65456 = cljs.core.next(seq__65176_65449__$1);
var G__65457 = null;
var G__65458 = (0);
var G__65459 = (0);
seq__65176_65435 = G__65456;
chunk__65178_65436 = G__65457;
count__65179_65437 = G__65458;
i__65180_65438 = G__65459;
continue;
} else {
var G__65460 = cljs.core.next(seq__65176_65449__$1);
var G__65461 = null;
var G__65462 = (0);
var G__65463 = (0);
seq__65176_65435 = G__65460;
chunk__65178_65436 = G__65461;
count__65179_65437 = G__65462;
i__65180_65438 = G__65463;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65434);
}


var G__65464 = seq__65154_65429;
var G__65465 = chunk__65155_65430;
var G__65466 = count__65156_65431;
var G__65467 = (i__65157_65432 + (1));
seq__65154_65429 = G__65464;
chunk__65155_65430 = G__65465;
count__65156_65431 = G__65466;
i__65157_65432 = G__65467;
continue;
} else {
var temp__5825__auto___65468 = cljs.core.seq(seq__65154_65429);
if(temp__5825__auto___65468){
var seq__65154_65469__$1 = temp__5825__auto___65468;
if(cljs.core.chunked_seq_QMARK_(seq__65154_65469__$1)){
var c__5548__auto___65470 = cljs.core.chunk_first(seq__65154_65469__$1);
var G__65471 = cljs.core.chunk_rest(seq__65154_65469__$1);
var G__65472 = c__5548__auto___65470;
var G__65473 = cljs.core.count(c__5548__auto___65470);
var G__65474 = (0);
seq__65154_65429 = G__65471;
chunk__65155_65430 = G__65472;
count__65156_65431 = G__65473;
i__65157_65432 = G__65474;
continue;
} else {
var child_struct_65475 = cljs.core.first(seq__65154_65469__$1);
var children_65476 = shadow.dom.dom_node(child_struct_65475);
if(cljs.core.seq_QMARK_(children_65476)){
var seq__65186_65477 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65476));
var chunk__65188_65478 = null;
var count__65189_65479 = (0);
var i__65190_65480 = (0);
while(true){
if((i__65190_65480 < count__65189_65479)){
var child_65481 = chunk__65188_65478.cljs$core$IIndexed$_nth$arity$2(null,i__65190_65480);
if(cljs.core.truth_(child_65481)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65481);


var G__65482 = seq__65186_65477;
var G__65483 = chunk__65188_65478;
var G__65484 = count__65189_65479;
var G__65485 = (i__65190_65480 + (1));
seq__65186_65477 = G__65482;
chunk__65188_65478 = G__65483;
count__65189_65479 = G__65484;
i__65190_65480 = G__65485;
continue;
} else {
var G__65486 = seq__65186_65477;
var G__65487 = chunk__65188_65478;
var G__65488 = count__65189_65479;
var G__65489 = (i__65190_65480 + (1));
seq__65186_65477 = G__65486;
chunk__65188_65478 = G__65487;
count__65189_65479 = G__65488;
i__65190_65480 = G__65489;
continue;
}
} else {
var temp__5825__auto___65490__$1 = cljs.core.seq(seq__65186_65477);
if(temp__5825__auto___65490__$1){
var seq__65186_65491__$1 = temp__5825__auto___65490__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65186_65491__$1)){
var c__5548__auto___65492 = cljs.core.chunk_first(seq__65186_65491__$1);
var G__65493 = cljs.core.chunk_rest(seq__65186_65491__$1);
var G__65494 = c__5548__auto___65492;
var G__65495 = cljs.core.count(c__5548__auto___65492);
var G__65496 = (0);
seq__65186_65477 = G__65493;
chunk__65188_65478 = G__65494;
count__65189_65479 = G__65495;
i__65190_65480 = G__65496;
continue;
} else {
var child_65497 = cljs.core.first(seq__65186_65491__$1);
if(cljs.core.truth_(child_65497)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65497);


var G__65498 = cljs.core.next(seq__65186_65491__$1);
var G__65499 = null;
var G__65500 = (0);
var G__65501 = (0);
seq__65186_65477 = G__65498;
chunk__65188_65478 = G__65499;
count__65189_65479 = G__65500;
i__65190_65480 = G__65501;
continue;
} else {
var G__65502 = cljs.core.next(seq__65186_65491__$1);
var G__65503 = null;
var G__65504 = (0);
var G__65505 = (0);
seq__65186_65477 = G__65502;
chunk__65188_65478 = G__65503;
count__65189_65479 = G__65504;
i__65190_65480 = G__65505;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65476);
}


var G__65506 = cljs.core.next(seq__65154_65469__$1);
var G__65507 = null;
var G__65508 = (0);
var G__65509 = (0);
seq__65154_65429 = G__65506;
chunk__65155_65430 = G__65507;
count__65156_65431 = G__65508;
i__65157_65432 = G__65509;
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
var seq__65198 = cljs.core.seq(node);
var chunk__65199 = null;
var count__65200 = (0);
var i__65201 = (0);
while(true){
if((i__65201 < count__65200)){
var n = chunk__65199.cljs$core$IIndexed$_nth$arity$2(null,i__65201);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65510 = seq__65198;
var G__65511 = chunk__65199;
var G__65512 = count__65200;
var G__65513 = (i__65201 + (1));
seq__65198 = G__65510;
chunk__65199 = G__65511;
count__65200 = G__65512;
i__65201 = G__65513;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65198);
if(temp__5825__auto__){
var seq__65198__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65198__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65198__$1);
var G__65514 = cljs.core.chunk_rest(seq__65198__$1);
var G__65515 = c__5548__auto__;
var G__65516 = cljs.core.count(c__5548__auto__);
var G__65517 = (0);
seq__65198 = G__65514;
chunk__65199 = G__65515;
count__65200 = G__65516;
i__65201 = G__65517;
continue;
} else {
var n = cljs.core.first(seq__65198__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65518 = cljs.core.next(seq__65198__$1);
var G__65519 = null;
var G__65520 = (0);
var G__65521 = (0);
seq__65198 = G__65518;
chunk__65199 = G__65519;
count__65200 = G__65520;
i__65201 = G__65521;
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
var G__65203 = arguments.length;
switch (G__65203) {
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
var G__65205 = arguments.length;
switch (G__65205) {
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
var G__65213 = arguments.length;
switch (G__65213) {
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
var len__5749__auto___65525 = arguments.length;
var i__5750__auto___65526 = (0);
while(true){
if((i__5750__auto___65526 < len__5749__auto___65525)){
args__5755__auto__.push((arguments[i__5750__auto___65526]));

var G__65527 = (i__5750__auto___65526 + (1));
i__5750__auto___65526 = G__65527;
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
var seq__65219_65528 = cljs.core.seq(nodes);
var chunk__65220_65529 = null;
var count__65221_65530 = (0);
var i__65222_65531 = (0);
while(true){
if((i__65222_65531 < count__65221_65530)){
var node_65532 = chunk__65220_65529.cljs$core$IIndexed$_nth$arity$2(null,i__65222_65531);
fragment.appendChild(shadow.dom._to_dom(node_65532));


var G__65533 = seq__65219_65528;
var G__65534 = chunk__65220_65529;
var G__65535 = count__65221_65530;
var G__65536 = (i__65222_65531 + (1));
seq__65219_65528 = G__65533;
chunk__65220_65529 = G__65534;
count__65221_65530 = G__65535;
i__65222_65531 = G__65536;
continue;
} else {
var temp__5825__auto___65537 = cljs.core.seq(seq__65219_65528);
if(temp__5825__auto___65537){
var seq__65219_65538__$1 = temp__5825__auto___65537;
if(cljs.core.chunked_seq_QMARK_(seq__65219_65538__$1)){
var c__5548__auto___65539 = cljs.core.chunk_first(seq__65219_65538__$1);
var G__65540 = cljs.core.chunk_rest(seq__65219_65538__$1);
var G__65541 = c__5548__auto___65539;
var G__65542 = cljs.core.count(c__5548__auto___65539);
var G__65543 = (0);
seq__65219_65528 = G__65540;
chunk__65220_65529 = G__65541;
count__65221_65530 = G__65542;
i__65222_65531 = G__65543;
continue;
} else {
var node_65544 = cljs.core.first(seq__65219_65538__$1);
fragment.appendChild(shadow.dom._to_dom(node_65544));


var G__65545 = cljs.core.next(seq__65219_65538__$1);
var G__65546 = null;
var G__65547 = (0);
var G__65548 = (0);
seq__65219_65528 = G__65545;
chunk__65220_65529 = G__65546;
count__65221_65530 = G__65547;
i__65222_65531 = G__65548;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq65218){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65218));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65228_65549 = cljs.core.seq(scripts);
var chunk__65229_65550 = null;
var count__65230_65551 = (0);
var i__65231_65552 = (0);
while(true){
if((i__65231_65552 < count__65230_65551)){
var vec__65238_65553 = chunk__65229_65550.cljs$core$IIndexed$_nth$arity$2(null,i__65231_65552);
var script_tag_65554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65238_65553,(0),null);
var script_body_65555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65238_65553,(1),null);
eval(script_body_65555);


var G__65556 = seq__65228_65549;
var G__65557 = chunk__65229_65550;
var G__65558 = count__65230_65551;
var G__65559 = (i__65231_65552 + (1));
seq__65228_65549 = G__65556;
chunk__65229_65550 = G__65557;
count__65230_65551 = G__65558;
i__65231_65552 = G__65559;
continue;
} else {
var temp__5825__auto___65560 = cljs.core.seq(seq__65228_65549);
if(temp__5825__auto___65560){
var seq__65228_65561__$1 = temp__5825__auto___65560;
if(cljs.core.chunked_seq_QMARK_(seq__65228_65561__$1)){
var c__5548__auto___65562 = cljs.core.chunk_first(seq__65228_65561__$1);
var G__65563 = cljs.core.chunk_rest(seq__65228_65561__$1);
var G__65564 = c__5548__auto___65562;
var G__65565 = cljs.core.count(c__5548__auto___65562);
var G__65566 = (0);
seq__65228_65549 = G__65563;
chunk__65229_65550 = G__65564;
count__65230_65551 = G__65565;
i__65231_65552 = G__65566;
continue;
} else {
var vec__65243_65567 = cljs.core.first(seq__65228_65561__$1);
var script_tag_65568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65243_65567,(0),null);
var script_body_65569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65243_65567,(1),null);
eval(script_body_65569);


var G__65570 = cljs.core.next(seq__65228_65561__$1);
var G__65571 = null;
var G__65572 = (0);
var G__65573 = (0);
seq__65228_65549 = G__65570;
chunk__65229_65550 = G__65571;
count__65230_65551 = G__65572;
i__65231_65552 = G__65573;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__65246){
var vec__65247 = p__65246;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65247,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65247,(1),null);
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
var G__65251 = arguments.length;
switch (G__65251) {
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
var seq__65254 = cljs.core.seq(style_keys);
var chunk__65255 = null;
var count__65256 = (0);
var i__65257 = (0);
while(true){
if((i__65257 < count__65256)){
var it = chunk__65255.cljs$core$IIndexed$_nth$arity$2(null,i__65257);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__65575 = seq__65254;
var G__65576 = chunk__65255;
var G__65577 = count__65256;
var G__65578 = (i__65257 + (1));
seq__65254 = G__65575;
chunk__65255 = G__65576;
count__65256 = G__65577;
i__65257 = G__65578;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65254);
if(temp__5825__auto__){
var seq__65254__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65254__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65254__$1);
var G__65579 = cljs.core.chunk_rest(seq__65254__$1);
var G__65580 = c__5548__auto__;
var G__65581 = cljs.core.count(c__5548__auto__);
var G__65582 = (0);
seq__65254 = G__65579;
chunk__65255 = G__65580;
count__65256 = G__65581;
i__65257 = G__65582;
continue;
} else {
var it = cljs.core.first(seq__65254__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__65583 = cljs.core.next(seq__65254__$1);
var G__65584 = null;
var G__65585 = (0);
var G__65586 = (0);
seq__65254 = G__65583;
chunk__65255 = G__65584;
count__65256 = G__65585;
i__65257 = G__65586;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65259,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65265 = k65259;
var G__65265__$1 = (((G__65265 instanceof cljs.core.Keyword))?G__65265.fqn:null);
switch (G__65265__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65259,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65266){
var vec__65267 = p__65266;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65267,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65267,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65258){
var self__ = this;
var G__65258__$1 = this;
return (new cljs.core.RecordIter((0),G__65258__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65260,other65261){
var self__ = this;
var this65260__$1 = this;
return (((!((other65261 == null)))) && ((((this65260__$1.constructor === other65261.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65260__$1.x,other65261.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65260__$1.y,other65261.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65260__$1.__extmap,other65261.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65259){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65273 = k65259;
var G__65273__$1 = (((G__65273 instanceof cljs.core.Keyword))?G__65273.fqn:null);
switch (G__65273__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65259);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65258){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65274 = cljs.core.keyword_identical_QMARK_;
var expr__65275 = k__5332__auto__;
if(cljs.core.truth_((pred__65274.cljs$core$IFn$_invoke$arity$2 ? pred__65274.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__65275) : pred__65274.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__65275)))){
return (new shadow.dom.Coordinate(G__65258,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65274.cljs$core$IFn$_invoke$arity$2 ? pred__65274.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__65275) : pred__65274.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__65275)))){
return (new shadow.dom.Coordinate(self__.x,G__65258,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65258),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65258){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__65258,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__65262){
var extmap__5365__auto__ = (function (){var G__65279 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65262,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65262)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65279);
} else {
return G__65279;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__65262),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__65262),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65281,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65287 = k65281;
var G__65287__$1 = (((G__65287 instanceof cljs.core.Keyword))?G__65287.fqn:null);
switch (G__65287__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65281,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65288){
var vec__65289 = p__65288;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65289,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65289,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65280){
var self__ = this;
var G__65280__$1 = this;
return (new cljs.core.RecordIter((0),G__65280__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65282,other65283){
var self__ = this;
var this65282__$1 = this;
return (((!((other65283 == null)))) && ((((this65282__$1.constructor === other65283.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65282__$1.w,other65283.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65282__$1.h,other65283.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65282__$1.__extmap,other65283.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65281){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65292 = k65281;
var G__65292__$1 = (((G__65292 instanceof cljs.core.Keyword))?G__65292.fqn:null);
switch (G__65292__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65281);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65280){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65293 = cljs.core.keyword_identical_QMARK_;
var expr__65294 = k__5332__auto__;
if(cljs.core.truth_((pred__65293.cljs$core$IFn$_invoke$arity$2 ? pred__65293.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__65294) : pred__65293.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__65294)))){
return (new shadow.dom.Size(G__65280,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65293.cljs$core$IFn$_invoke$arity$2 ? pred__65293.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__65294) : pred__65293.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__65294)))){
return (new shadow.dom.Size(self__.w,G__65280,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65280),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65280){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65280,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65284){
var extmap__5365__auto__ = (function (){var G__65296 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65284,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65284)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65296);
} else {
return G__65296;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65284),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65284),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__65591 = (i + (1));
var G__65592 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__65591;
ret = G__65592;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65303){
var vec__65304 = p__65303;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65304,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65304,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65308 = arguments.length;
switch (G__65308) {
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
var G__65594 = ps;
var G__65595 = (i + (1));
el__$1 = G__65594;
i = G__65595;
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
var vec__65317 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65317,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65317,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65317,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65320_65596 = cljs.core.seq(props);
var chunk__65321_65597 = null;
var count__65322_65598 = (0);
var i__65323_65599 = (0);
while(true){
if((i__65323_65599 < count__65322_65598)){
var vec__65330_65600 = chunk__65321_65597.cljs$core$IIndexed$_nth$arity$2(null,i__65323_65599);
var k_65601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65330_65600,(0),null);
var v_65602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65330_65600,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_65601);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65601),v_65602);


var G__65603 = seq__65320_65596;
var G__65604 = chunk__65321_65597;
var G__65605 = count__65322_65598;
var G__65606 = (i__65323_65599 + (1));
seq__65320_65596 = G__65603;
chunk__65321_65597 = G__65604;
count__65322_65598 = G__65605;
i__65323_65599 = G__65606;
continue;
} else {
var temp__5825__auto___65607 = cljs.core.seq(seq__65320_65596);
if(temp__5825__auto___65607){
var seq__65320_65608__$1 = temp__5825__auto___65607;
if(cljs.core.chunked_seq_QMARK_(seq__65320_65608__$1)){
var c__5548__auto___65609 = cljs.core.chunk_first(seq__65320_65608__$1);
var G__65610 = cljs.core.chunk_rest(seq__65320_65608__$1);
var G__65611 = c__5548__auto___65609;
var G__65612 = cljs.core.count(c__5548__auto___65609);
var G__65613 = (0);
seq__65320_65596 = G__65610;
chunk__65321_65597 = G__65611;
count__65322_65598 = G__65612;
i__65323_65599 = G__65613;
continue;
} else {
var vec__65333_65614 = cljs.core.first(seq__65320_65608__$1);
var k_65615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65333_65614,(0),null);
var v_65616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65333_65614,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_65615);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65615),v_65616);


var G__65617 = cljs.core.next(seq__65320_65608__$1);
var G__65618 = null;
var G__65619 = (0);
var G__65620 = (0);
seq__65320_65596 = G__65617;
chunk__65321_65597 = G__65618;
count__65322_65598 = G__65619;
i__65323_65599 = G__65620;
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
var vec__65337 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65337,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65337,(1),null);
var seq__65340_65621 = cljs.core.seq(node_children);
var chunk__65342_65622 = null;
var count__65343_65623 = (0);
var i__65344_65624 = (0);
while(true){
if((i__65344_65624 < count__65343_65623)){
var child_struct_65625 = chunk__65342_65622.cljs$core$IIndexed$_nth$arity$2(null,i__65344_65624);
if((!((child_struct_65625 == null)))){
if(typeof child_struct_65625 === 'string'){
var text_65626 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65626),child_struct_65625].join(''));
} else {
var children_65627 = shadow.dom.svg_node(child_struct_65625);
if(cljs.core.seq_QMARK_(children_65627)){
var seq__65363_65628 = cljs.core.seq(children_65627);
var chunk__65365_65629 = null;
var count__65366_65630 = (0);
var i__65367_65631 = (0);
while(true){
if((i__65367_65631 < count__65366_65630)){
var child_65632 = chunk__65365_65629.cljs$core$IIndexed$_nth$arity$2(null,i__65367_65631);
if(cljs.core.truth_(child_65632)){
node.appendChild(child_65632);


var G__65633 = seq__65363_65628;
var G__65634 = chunk__65365_65629;
var G__65635 = count__65366_65630;
var G__65636 = (i__65367_65631 + (1));
seq__65363_65628 = G__65633;
chunk__65365_65629 = G__65634;
count__65366_65630 = G__65635;
i__65367_65631 = G__65636;
continue;
} else {
var G__65637 = seq__65363_65628;
var G__65638 = chunk__65365_65629;
var G__65639 = count__65366_65630;
var G__65640 = (i__65367_65631 + (1));
seq__65363_65628 = G__65637;
chunk__65365_65629 = G__65638;
count__65366_65630 = G__65639;
i__65367_65631 = G__65640;
continue;
}
} else {
var temp__5825__auto___65641 = cljs.core.seq(seq__65363_65628);
if(temp__5825__auto___65641){
var seq__65363_65642__$1 = temp__5825__auto___65641;
if(cljs.core.chunked_seq_QMARK_(seq__65363_65642__$1)){
var c__5548__auto___65643 = cljs.core.chunk_first(seq__65363_65642__$1);
var G__65644 = cljs.core.chunk_rest(seq__65363_65642__$1);
var G__65645 = c__5548__auto___65643;
var G__65646 = cljs.core.count(c__5548__auto___65643);
var G__65647 = (0);
seq__65363_65628 = G__65644;
chunk__65365_65629 = G__65645;
count__65366_65630 = G__65646;
i__65367_65631 = G__65647;
continue;
} else {
var child_65648 = cljs.core.first(seq__65363_65642__$1);
if(cljs.core.truth_(child_65648)){
node.appendChild(child_65648);


var G__65649 = cljs.core.next(seq__65363_65642__$1);
var G__65650 = null;
var G__65651 = (0);
var G__65652 = (0);
seq__65363_65628 = G__65649;
chunk__65365_65629 = G__65650;
count__65366_65630 = G__65651;
i__65367_65631 = G__65652;
continue;
} else {
var G__65653 = cljs.core.next(seq__65363_65642__$1);
var G__65654 = null;
var G__65655 = (0);
var G__65656 = (0);
seq__65363_65628 = G__65653;
chunk__65365_65629 = G__65654;
count__65366_65630 = G__65655;
i__65367_65631 = G__65656;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65627);
}
}


var G__65657 = seq__65340_65621;
var G__65658 = chunk__65342_65622;
var G__65659 = count__65343_65623;
var G__65660 = (i__65344_65624 + (1));
seq__65340_65621 = G__65657;
chunk__65342_65622 = G__65658;
count__65343_65623 = G__65659;
i__65344_65624 = G__65660;
continue;
} else {
var G__65661 = seq__65340_65621;
var G__65662 = chunk__65342_65622;
var G__65663 = count__65343_65623;
var G__65664 = (i__65344_65624 + (1));
seq__65340_65621 = G__65661;
chunk__65342_65622 = G__65662;
count__65343_65623 = G__65663;
i__65344_65624 = G__65664;
continue;
}
} else {
var temp__5825__auto___65665 = cljs.core.seq(seq__65340_65621);
if(temp__5825__auto___65665){
var seq__65340_65666__$1 = temp__5825__auto___65665;
if(cljs.core.chunked_seq_QMARK_(seq__65340_65666__$1)){
var c__5548__auto___65667 = cljs.core.chunk_first(seq__65340_65666__$1);
var G__65668 = cljs.core.chunk_rest(seq__65340_65666__$1);
var G__65669 = c__5548__auto___65667;
var G__65670 = cljs.core.count(c__5548__auto___65667);
var G__65671 = (0);
seq__65340_65621 = G__65668;
chunk__65342_65622 = G__65669;
count__65343_65623 = G__65670;
i__65344_65624 = G__65671;
continue;
} else {
var child_struct_65672 = cljs.core.first(seq__65340_65666__$1);
if((!((child_struct_65672 == null)))){
if(typeof child_struct_65672 === 'string'){
var text_65673 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65673),child_struct_65672].join(''));
} else {
var children_65674 = shadow.dom.svg_node(child_struct_65672);
if(cljs.core.seq_QMARK_(children_65674)){
var seq__65369_65675 = cljs.core.seq(children_65674);
var chunk__65371_65676 = null;
var count__65372_65677 = (0);
var i__65373_65678 = (0);
while(true){
if((i__65373_65678 < count__65372_65677)){
var child_65679 = chunk__65371_65676.cljs$core$IIndexed$_nth$arity$2(null,i__65373_65678);
if(cljs.core.truth_(child_65679)){
node.appendChild(child_65679);


var G__65680 = seq__65369_65675;
var G__65681 = chunk__65371_65676;
var G__65682 = count__65372_65677;
var G__65683 = (i__65373_65678 + (1));
seq__65369_65675 = G__65680;
chunk__65371_65676 = G__65681;
count__65372_65677 = G__65682;
i__65373_65678 = G__65683;
continue;
} else {
var G__65684 = seq__65369_65675;
var G__65685 = chunk__65371_65676;
var G__65686 = count__65372_65677;
var G__65687 = (i__65373_65678 + (1));
seq__65369_65675 = G__65684;
chunk__65371_65676 = G__65685;
count__65372_65677 = G__65686;
i__65373_65678 = G__65687;
continue;
}
} else {
var temp__5825__auto___65688__$1 = cljs.core.seq(seq__65369_65675);
if(temp__5825__auto___65688__$1){
var seq__65369_65689__$1 = temp__5825__auto___65688__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65369_65689__$1)){
var c__5548__auto___65690 = cljs.core.chunk_first(seq__65369_65689__$1);
var G__65691 = cljs.core.chunk_rest(seq__65369_65689__$1);
var G__65692 = c__5548__auto___65690;
var G__65693 = cljs.core.count(c__5548__auto___65690);
var G__65694 = (0);
seq__65369_65675 = G__65691;
chunk__65371_65676 = G__65692;
count__65372_65677 = G__65693;
i__65373_65678 = G__65694;
continue;
} else {
var child_65695 = cljs.core.first(seq__65369_65689__$1);
if(cljs.core.truth_(child_65695)){
node.appendChild(child_65695);


var G__65696 = cljs.core.next(seq__65369_65689__$1);
var G__65697 = null;
var G__65698 = (0);
var G__65699 = (0);
seq__65369_65675 = G__65696;
chunk__65371_65676 = G__65697;
count__65372_65677 = G__65698;
i__65373_65678 = G__65699;
continue;
} else {
var G__65700 = cljs.core.next(seq__65369_65689__$1);
var G__65701 = null;
var G__65702 = (0);
var G__65703 = (0);
seq__65369_65675 = G__65700;
chunk__65371_65676 = G__65701;
count__65372_65677 = G__65702;
i__65373_65678 = G__65703;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65674);
}
}


var G__65704 = cljs.core.next(seq__65340_65666__$1);
var G__65705 = null;
var G__65706 = (0);
var G__65707 = (0);
seq__65340_65621 = G__65704;
chunk__65342_65622 = G__65705;
count__65343_65623 = G__65706;
i__65344_65624 = G__65707;
continue;
} else {
var G__65708 = cljs.core.next(seq__65340_65666__$1);
var G__65709 = null;
var G__65710 = (0);
var G__65711 = (0);
seq__65340_65621 = G__65708;
chunk__65342_65622 = G__65709;
count__65343_65623 = G__65710;
i__65344_65624 = G__65711;
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
var len__5749__auto___65712 = arguments.length;
var i__5750__auto___65713 = (0);
while(true){
if((i__5750__auto___65713 < len__5749__auto___65712)){
args__5755__auto__.push((arguments[i__5750__auto___65713]));

var G__65714 = (i__5750__auto___65713 + (1));
i__5750__auto___65713 = G__65714;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq65375){
var G__65376 = cljs.core.first(seq65375);
var seq65375__$1 = cljs.core.next(seq65375);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65376,seq65375__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
