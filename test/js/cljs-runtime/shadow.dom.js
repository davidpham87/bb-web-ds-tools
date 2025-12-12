goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_67401 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_67401(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_67402 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_67402(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__66998 = coll;
var G__66999 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__66998,G__66999) : shadow.dom.lazy_native_coll_seq.call(null,G__66998,G__66999));
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
var G__67017 = arguments.length;
switch (G__67017) {
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
var G__67023 = arguments.length;
switch (G__67023) {
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
var G__67029 = arguments.length;
switch (G__67029) {
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
var G__67035 = arguments.length;
switch (G__67035) {
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
var G__67040 = arguments.length;
switch (G__67040) {
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
var G__67047 = arguments.length;
switch (G__67047) {
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
}catch (e67051){if((e67051 instanceof Object)){
var e = e67051;
return console.log("didnt support attachEvent",el,e);
} else {
throw e67051;

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
var seq__67055 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__67056 = null;
var count__67057 = (0);
var i__67058 = (0);
while(true){
if((i__67058 < count__67057)){
var el = chunk__67056.cljs$core$IIndexed$_nth$arity$2(null,i__67058);
var handler_67409__$1 = ((function (seq__67055,chunk__67056,count__67057,i__67058,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__67055,chunk__67056,count__67057,i__67058,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_67409__$1);


var G__67410 = seq__67055;
var G__67411 = chunk__67056;
var G__67412 = count__67057;
var G__67413 = (i__67058 + (1));
seq__67055 = G__67410;
chunk__67056 = G__67411;
count__67057 = G__67412;
i__67058 = G__67413;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67055);
if(temp__5825__auto__){
var seq__67055__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67055__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67055__$1);
var G__67414 = cljs.core.chunk_rest(seq__67055__$1);
var G__67415 = c__5548__auto__;
var G__67416 = cljs.core.count(c__5548__auto__);
var G__67417 = (0);
seq__67055 = G__67414;
chunk__67056 = G__67415;
count__67057 = G__67416;
i__67058 = G__67417;
continue;
} else {
var el = cljs.core.first(seq__67055__$1);
var handler_67418__$1 = ((function (seq__67055,chunk__67056,count__67057,i__67058,el,seq__67055__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__67055,chunk__67056,count__67057,i__67058,el,seq__67055__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_67418__$1);


var G__67419 = cljs.core.next(seq__67055__$1);
var G__67420 = null;
var G__67421 = (0);
var G__67422 = (0);
seq__67055 = G__67419;
chunk__67056 = G__67420;
count__67057 = G__67421;
i__67058 = G__67422;
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
var G__67091 = arguments.length;
switch (G__67091) {
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
var seq__67122 = cljs.core.seq(events);
var chunk__67123 = null;
var count__67124 = (0);
var i__67125 = (0);
while(true){
if((i__67125 < count__67124)){
var vec__67136 = chunk__67123.cljs$core$IIndexed$_nth$arity$2(null,i__67125);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67136,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67136,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__67424 = seq__67122;
var G__67425 = chunk__67123;
var G__67426 = count__67124;
var G__67427 = (i__67125 + (1));
seq__67122 = G__67424;
chunk__67123 = G__67425;
count__67124 = G__67426;
i__67125 = G__67427;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67122);
if(temp__5825__auto__){
var seq__67122__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67122__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67122__$1);
var G__67428 = cljs.core.chunk_rest(seq__67122__$1);
var G__67429 = c__5548__auto__;
var G__67430 = cljs.core.count(c__5548__auto__);
var G__67431 = (0);
seq__67122 = G__67428;
chunk__67123 = G__67429;
count__67124 = G__67430;
i__67125 = G__67431;
continue;
} else {
var vec__67139 = cljs.core.first(seq__67122__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67139,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__67432 = cljs.core.next(seq__67122__$1);
var G__67433 = null;
var G__67434 = (0);
var G__67435 = (0);
seq__67122 = G__67432;
chunk__67123 = G__67433;
count__67124 = G__67434;
i__67125 = G__67435;
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
var seq__67142 = cljs.core.seq(styles);
var chunk__67143 = null;
var count__67144 = (0);
var i__67145 = (0);
while(true){
if((i__67145 < count__67144)){
var vec__67152 = chunk__67143.cljs$core$IIndexed$_nth$arity$2(null,i__67145);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67152,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67152,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__67436 = seq__67142;
var G__67437 = chunk__67143;
var G__67438 = count__67144;
var G__67439 = (i__67145 + (1));
seq__67142 = G__67436;
chunk__67143 = G__67437;
count__67144 = G__67438;
i__67145 = G__67439;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67142);
if(temp__5825__auto__){
var seq__67142__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67142__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67142__$1);
var G__67440 = cljs.core.chunk_rest(seq__67142__$1);
var G__67441 = c__5548__auto__;
var G__67442 = cljs.core.count(c__5548__auto__);
var G__67443 = (0);
seq__67142 = G__67440;
chunk__67143 = G__67441;
count__67144 = G__67442;
i__67145 = G__67443;
continue;
} else {
var vec__67155 = cljs.core.first(seq__67142__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67155,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67155,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__67444 = cljs.core.next(seq__67142__$1);
var G__67445 = null;
var G__67446 = (0);
var G__67447 = (0);
seq__67142 = G__67444;
chunk__67143 = G__67445;
count__67144 = G__67446;
i__67145 = G__67447;
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
var G__67158_67448 = key;
var G__67158_67449__$1 = (((G__67158_67448 instanceof cljs.core.Keyword))?G__67158_67448.fqn:null);
switch (G__67158_67449__$1) {
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
var ks_67451 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_67451,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_67451,"aria-");
}
})())){
el.setAttribute(ks_67451,value);
} else {
(el[ks_67451] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__67174){
var map__67175 = p__67174;
var map__67175__$1 = cljs.core.__destructure_map(map__67175);
var props = map__67175__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67175__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__67176 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67176,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67176,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67176,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__67179 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__67179,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__67179;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__67181 = arguments.length;
switch (G__67181) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__67188){
var vec__67189 = p__67188;
var seq__67190 = cljs.core.seq(vec__67189);
var first__67191 = cljs.core.first(seq__67190);
var seq__67190__$1 = cljs.core.next(seq__67190);
var nn = first__67191;
var first__67191__$1 = cljs.core.first(seq__67190__$1);
var seq__67190__$2 = cljs.core.next(seq__67190__$1);
var np = first__67191__$1;
var nc = seq__67190__$2;
var node = vec__67189;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67192 = nn;
var G__67193 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__67192,G__67193) : create_fn.call(null,G__67192,G__67193));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67194 = nn;
var G__67195 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__67194,G__67195) : create_fn.call(null,G__67194,G__67195));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__67196 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67196,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67196,(1),null);
var seq__67199_67453 = cljs.core.seq(node_children);
var chunk__67200_67454 = null;
var count__67201_67455 = (0);
var i__67202_67456 = (0);
while(true){
if((i__67202_67456 < count__67201_67455)){
var child_struct_67457 = chunk__67200_67454.cljs$core$IIndexed$_nth$arity$2(null,i__67202_67456);
var children_67458 = shadow.dom.dom_node(child_struct_67457);
if(cljs.core.seq_QMARK_(children_67458)){
var seq__67226_67459 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_67458));
var chunk__67228_67460 = null;
var count__67229_67461 = (0);
var i__67230_67462 = (0);
while(true){
if((i__67230_67462 < count__67229_67461)){
var child_67463 = chunk__67228_67460.cljs$core$IIndexed$_nth$arity$2(null,i__67230_67462);
if(cljs.core.truth_(child_67463)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_67463);


var G__67464 = seq__67226_67459;
var G__67465 = chunk__67228_67460;
var G__67466 = count__67229_67461;
var G__67467 = (i__67230_67462 + (1));
seq__67226_67459 = G__67464;
chunk__67228_67460 = G__67465;
count__67229_67461 = G__67466;
i__67230_67462 = G__67467;
continue;
} else {
var G__67468 = seq__67226_67459;
var G__67469 = chunk__67228_67460;
var G__67470 = count__67229_67461;
var G__67471 = (i__67230_67462 + (1));
seq__67226_67459 = G__67468;
chunk__67228_67460 = G__67469;
count__67229_67461 = G__67470;
i__67230_67462 = G__67471;
continue;
}
} else {
var temp__5825__auto___67472 = cljs.core.seq(seq__67226_67459);
if(temp__5825__auto___67472){
var seq__67226_67473__$1 = temp__5825__auto___67472;
if(cljs.core.chunked_seq_QMARK_(seq__67226_67473__$1)){
var c__5548__auto___67474 = cljs.core.chunk_first(seq__67226_67473__$1);
var G__67475 = cljs.core.chunk_rest(seq__67226_67473__$1);
var G__67476 = c__5548__auto___67474;
var G__67477 = cljs.core.count(c__5548__auto___67474);
var G__67478 = (0);
seq__67226_67459 = G__67475;
chunk__67228_67460 = G__67476;
count__67229_67461 = G__67477;
i__67230_67462 = G__67478;
continue;
} else {
var child_67479 = cljs.core.first(seq__67226_67473__$1);
if(cljs.core.truth_(child_67479)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_67479);


var G__67480 = cljs.core.next(seq__67226_67473__$1);
var G__67481 = null;
var G__67482 = (0);
var G__67483 = (0);
seq__67226_67459 = G__67480;
chunk__67228_67460 = G__67481;
count__67229_67461 = G__67482;
i__67230_67462 = G__67483;
continue;
} else {
var G__67484 = cljs.core.next(seq__67226_67473__$1);
var G__67485 = null;
var G__67486 = (0);
var G__67487 = (0);
seq__67226_67459 = G__67484;
chunk__67228_67460 = G__67485;
count__67229_67461 = G__67486;
i__67230_67462 = G__67487;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_67458);
}


var G__67488 = seq__67199_67453;
var G__67489 = chunk__67200_67454;
var G__67490 = count__67201_67455;
var G__67491 = (i__67202_67456 + (1));
seq__67199_67453 = G__67488;
chunk__67200_67454 = G__67489;
count__67201_67455 = G__67490;
i__67202_67456 = G__67491;
continue;
} else {
var temp__5825__auto___67492 = cljs.core.seq(seq__67199_67453);
if(temp__5825__auto___67492){
var seq__67199_67493__$1 = temp__5825__auto___67492;
if(cljs.core.chunked_seq_QMARK_(seq__67199_67493__$1)){
var c__5548__auto___67494 = cljs.core.chunk_first(seq__67199_67493__$1);
var G__67495 = cljs.core.chunk_rest(seq__67199_67493__$1);
var G__67496 = c__5548__auto___67494;
var G__67497 = cljs.core.count(c__5548__auto___67494);
var G__67498 = (0);
seq__67199_67453 = G__67495;
chunk__67200_67454 = G__67496;
count__67201_67455 = G__67497;
i__67202_67456 = G__67498;
continue;
} else {
var child_struct_67499 = cljs.core.first(seq__67199_67493__$1);
var children_67500 = shadow.dom.dom_node(child_struct_67499);
if(cljs.core.seq_QMARK_(children_67500)){
var seq__67234_67501 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_67500));
var chunk__67236_67502 = null;
var count__67237_67503 = (0);
var i__67238_67504 = (0);
while(true){
if((i__67238_67504 < count__67237_67503)){
var child_67505 = chunk__67236_67502.cljs$core$IIndexed$_nth$arity$2(null,i__67238_67504);
if(cljs.core.truth_(child_67505)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_67505);


var G__67506 = seq__67234_67501;
var G__67507 = chunk__67236_67502;
var G__67508 = count__67237_67503;
var G__67509 = (i__67238_67504 + (1));
seq__67234_67501 = G__67506;
chunk__67236_67502 = G__67507;
count__67237_67503 = G__67508;
i__67238_67504 = G__67509;
continue;
} else {
var G__67510 = seq__67234_67501;
var G__67511 = chunk__67236_67502;
var G__67512 = count__67237_67503;
var G__67513 = (i__67238_67504 + (1));
seq__67234_67501 = G__67510;
chunk__67236_67502 = G__67511;
count__67237_67503 = G__67512;
i__67238_67504 = G__67513;
continue;
}
} else {
var temp__5825__auto___67514__$1 = cljs.core.seq(seq__67234_67501);
if(temp__5825__auto___67514__$1){
var seq__67234_67515__$1 = temp__5825__auto___67514__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67234_67515__$1)){
var c__5548__auto___67516 = cljs.core.chunk_first(seq__67234_67515__$1);
var G__67517 = cljs.core.chunk_rest(seq__67234_67515__$1);
var G__67518 = c__5548__auto___67516;
var G__67519 = cljs.core.count(c__5548__auto___67516);
var G__67520 = (0);
seq__67234_67501 = G__67517;
chunk__67236_67502 = G__67518;
count__67237_67503 = G__67519;
i__67238_67504 = G__67520;
continue;
} else {
var child_67521 = cljs.core.first(seq__67234_67515__$1);
if(cljs.core.truth_(child_67521)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_67521);


var G__67522 = cljs.core.next(seq__67234_67515__$1);
var G__67523 = null;
var G__67524 = (0);
var G__67525 = (0);
seq__67234_67501 = G__67522;
chunk__67236_67502 = G__67523;
count__67237_67503 = G__67524;
i__67238_67504 = G__67525;
continue;
} else {
var G__67526 = cljs.core.next(seq__67234_67515__$1);
var G__67527 = null;
var G__67528 = (0);
var G__67529 = (0);
seq__67234_67501 = G__67526;
chunk__67236_67502 = G__67527;
count__67237_67503 = G__67528;
i__67238_67504 = G__67529;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_67500);
}


var G__67530 = cljs.core.next(seq__67199_67493__$1);
var G__67531 = null;
var G__67532 = (0);
var G__67533 = (0);
seq__67199_67453 = G__67530;
chunk__67200_67454 = G__67531;
count__67201_67455 = G__67532;
i__67202_67456 = G__67533;
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
var seq__67248 = cljs.core.seq(node);
var chunk__67249 = null;
var count__67250 = (0);
var i__67251 = (0);
while(true){
if((i__67251 < count__67250)){
var n = chunk__67249.cljs$core$IIndexed$_nth$arity$2(null,i__67251);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__67534 = seq__67248;
var G__67535 = chunk__67249;
var G__67536 = count__67250;
var G__67537 = (i__67251 + (1));
seq__67248 = G__67534;
chunk__67249 = G__67535;
count__67250 = G__67536;
i__67251 = G__67537;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67248);
if(temp__5825__auto__){
var seq__67248__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67248__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67248__$1);
var G__67538 = cljs.core.chunk_rest(seq__67248__$1);
var G__67539 = c__5548__auto__;
var G__67540 = cljs.core.count(c__5548__auto__);
var G__67541 = (0);
seq__67248 = G__67538;
chunk__67249 = G__67539;
count__67250 = G__67540;
i__67251 = G__67541;
continue;
} else {
var n = cljs.core.first(seq__67248__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__67542 = cljs.core.next(seq__67248__$1);
var G__67543 = null;
var G__67544 = (0);
var G__67545 = (0);
seq__67248 = G__67542;
chunk__67249 = G__67543;
count__67250 = G__67544;
i__67251 = G__67545;
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
var G__67255 = arguments.length;
switch (G__67255) {
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
var G__67257 = arguments.length;
switch (G__67257) {
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
var G__67259 = arguments.length;
switch (G__67259) {
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
var len__5749__auto___67549 = arguments.length;
var i__5750__auto___67550 = (0);
while(true){
if((i__5750__auto___67550 < len__5749__auto___67549)){
args__5755__auto__.push((arguments[i__5750__auto___67550]));

var G__67551 = (i__5750__auto___67550 + (1));
i__5750__auto___67550 = G__67551;
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
var seq__67263_67552 = cljs.core.seq(nodes);
var chunk__67264_67553 = null;
var count__67265_67554 = (0);
var i__67266_67555 = (0);
while(true){
if((i__67266_67555 < count__67265_67554)){
var node_67556 = chunk__67264_67553.cljs$core$IIndexed$_nth$arity$2(null,i__67266_67555);
fragment.appendChild(shadow.dom._to_dom(node_67556));


var G__67557 = seq__67263_67552;
var G__67558 = chunk__67264_67553;
var G__67559 = count__67265_67554;
var G__67560 = (i__67266_67555 + (1));
seq__67263_67552 = G__67557;
chunk__67264_67553 = G__67558;
count__67265_67554 = G__67559;
i__67266_67555 = G__67560;
continue;
} else {
var temp__5825__auto___67561 = cljs.core.seq(seq__67263_67552);
if(temp__5825__auto___67561){
var seq__67263_67562__$1 = temp__5825__auto___67561;
if(cljs.core.chunked_seq_QMARK_(seq__67263_67562__$1)){
var c__5548__auto___67563 = cljs.core.chunk_first(seq__67263_67562__$1);
var G__67564 = cljs.core.chunk_rest(seq__67263_67562__$1);
var G__67565 = c__5548__auto___67563;
var G__67566 = cljs.core.count(c__5548__auto___67563);
var G__67567 = (0);
seq__67263_67552 = G__67564;
chunk__67264_67553 = G__67565;
count__67265_67554 = G__67566;
i__67266_67555 = G__67567;
continue;
} else {
var node_67568 = cljs.core.first(seq__67263_67562__$1);
fragment.appendChild(shadow.dom._to_dom(node_67568));


var G__67569 = cljs.core.next(seq__67263_67562__$1);
var G__67570 = null;
var G__67571 = (0);
var G__67572 = (0);
seq__67263_67552 = G__67569;
chunk__67264_67553 = G__67570;
count__67265_67554 = G__67571;
i__67266_67555 = G__67572;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq67262){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67262));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__67271_67573 = cljs.core.seq(scripts);
var chunk__67272_67574 = null;
var count__67273_67575 = (0);
var i__67274_67576 = (0);
while(true){
if((i__67274_67576 < count__67273_67575)){
var vec__67282_67577 = chunk__67272_67574.cljs$core$IIndexed$_nth$arity$2(null,i__67274_67576);
var script_tag_67578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67282_67577,(0),null);
var script_body_67579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67282_67577,(1),null);
eval(script_body_67579);


var G__67580 = seq__67271_67573;
var G__67581 = chunk__67272_67574;
var G__67582 = count__67273_67575;
var G__67583 = (i__67274_67576 + (1));
seq__67271_67573 = G__67580;
chunk__67272_67574 = G__67581;
count__67273_67575 = G__67582;
i__67274_67576 = G__67583;
continue;
} else {
var temp__5825__auto___67584 = cljs.core.seq(seq__67271_67573);
if(temp__5825__auto___67584){
var seq__67271_67585__$1 = temp__5825__auto___67584;
if(cljs.core.chunked_seq_QMARK_(seq__67271_67585__$1)){
var c__5548__auto___67586 = cljs.core.chunk_first(seq__67271_67585__$1);
var G__67587 = cljs.core.chunk_rest(seq__67271_67585__$1);
var G__67588 = c__5548__auto___67586;
var G__67589 = cljs.core.count(c__5548__auto___67586);
var G__67590 = (0);
seq__67271_67573 = G__67587;
chunk__67272_67574 = G__67588;
count__67273_67575 = G__67589;
i__67274_67576 = G__67590;
continue;
} else {
var vec__67288_67591 = cljs.core.first(seq__67271_67585__$1);
var script_tag_67592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67288_67591,(0),null);
var script_body_67593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67288_67591,(1),null);
eval(script_body_67593);


var G__67594 = cljs.core.next(seq__67271_67585__$1);
var G__67595 = null;
var G__67596 = (0);
var G__67597 = (0);
seq__67271_67573 = G__67594;
chunk__67272_67574 = G__67595;
count__67273_67575 = G__67596;
i__67274_67576 = G__67597;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__67291){
var vec__67292 = p__67291;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67292,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67292,(1),null);
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
var G__67296 = arguments.length;
switch (G__67296) {
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


var G__67599 = seq__67299;
var G__67600 = chunk__67300;
var G__67601 = count__67301;
var G__67602 = (i__67302 + (1));
seq__67299 = G__67599;
chunk__67300 = G__67600;
count__67301 = G__67601;
i__67302 = G__67602;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67299);
if(temp__5825__auto__){
var seq__67299__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67299__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67299__$1);
var G__67603 = cljs.core.chunk_rest(seq__67299__$1);
var G__67604 = c__5548__auto__;
var G__67605 = cljs.core.count(c__5548__auto__);
var G__67606 = (0);
seq__67299 = G__67603;
chunk__67300 = G__67604;
count__67301 = G__67605;
i__67302 = G__67606;
continue;
} else {
var it = cljs.core.first(seq__67299__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__67607 = cljs.core.next(seq__67299__$1);
var G__67608 = null;
var G__67609 = (0);
var G__67610 = (0);
seq__67299 = G__67607;
chunk__67300 = G__67608;
count__67301 = G__67609;
i__67302 = G__67610;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k67307,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__67311 = k67307;
var G__67311__$1 = (((G__67311 instanceof cljs.core.Keyword))?G__67311.fqn:null);
switch (G__67311__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67307,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__67312){
var vec__67313 = p__67312;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67313,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67313,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67306){
var self__ = this;
var G__67306__$1 = this;
return (new cljs.core.RecordIter((0),G__67306__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67308,other67309){
var self__ = this;
var this67308__$1 = this;
return (((!((other67309 == null)))) && ((((this67308__$1.constructor === other67309.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67308__$1.x,other67309.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67308__$1.y,other67309.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67308__$1.__extmap,other67309.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k67307){
var self__ = this;
var this__5330__auto____$1 = this;
var G__67316 = k67307;
var G__67316__$1 = (((G__67316 instanceof cljs.core.Keyword))?G__67316.fqn:null);
switch (G__67316__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67307);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__67306){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__67317 = cljs.core.keyword_identical_QMARK_;
var expr__67318 = k__5332__auto__;
if(cljs.core.truth_((pred__67317.cljs$core$IFn$_invoke$arity$2 ? pred__67317.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__67318) : pred__67317.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__67318)))){
return (new shadow.dom.Coordinate(G__67306,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67317.cljs$core$IFn$_invoke$arity$2 ? pred__67317.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__67318) : pred__67317.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__67318)))){
return (new shadow.dom.Coordinate(self__.x,G__67306,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__67306),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__67306){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__67306,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__67310){
var extmap__5365__auto__ = (function (){var G__67320 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67310,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__67310)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67320);
} else {
return G__67320;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__67310),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__67310),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k67322,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__67326 = k67322;
var G__67326__$1 = (((G__67326 instanceof cljs.core.Keyword))?G__67326.fqn:null);
switch (G__67326__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67322,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__67327){
var vec__67328 = p__67327;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67328,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67328,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67321){
var self__ = this;
var G__67321__$1 = this;
return (new cljs.core.RecordIter((0),G__67321__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67323,other67324){
var self__ = this;
var this67323__$1 = this;
return (((!((other67324 == null)))) && ((((this67323__$1.constructor === other67324.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67323__$1.w,other67324.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67323__$1.h,other67324.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67323__$1.__extmap,other67324.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k67322){
var self__ = this;
var this__5330__auto____$1 = this;
var G__67331 = k67322;
var G__67331__$1 = (((G__67331 instanceof cljs.core.Keyword))?G__67331.fqn:null);
switch (G__67331__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67322);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__67321){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__67332 = cljs.core.keyword_identical_QMARK_;
var expr__67333 = k__5332__auto__;
if(cljs.core.truth_((pred__67332.cljs$core$IFn$_invoke$arity$2 ? pred__67332.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__67333) : pred__67332.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__67333)))){
return (new shadow.dom.Size(G__67321,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67332.cljs$core$IFn$_invoke$arity$2 ? pred__67332.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__67333) : pred__67332.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__67333)))){
return (new shadow.dom.Size(self__.w,G__67321,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__67321),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__67321){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__67321,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__67325){
var extmap__5365__auto__ = (function (){var G__67335 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67325,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__67325)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67335);
} else {
return G__67335;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__67325),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__67325),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__67615 = (i + (1));
var G__67616 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__67615;
ret = G__67616;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__67340){
var vec__67341 = p__67340;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67341,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67341,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__67345 = arguments.length;
switch (G__67345) {
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
var G__67618 = ps;
var G__67619 = (i + (1));
el__$1 = G__67618;
i = G__67619;
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
var vec__67346 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67346,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67346,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67346,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__67349_67620 = cljs.core.seq(props);
var chunk__67350_67621 = null;
var count__67351_67622 = (0);
var i__67352_67623 = (0);
while(true){
if((i__67352_67623 < count__67351_67622)){
var vec__67359_67624 = chunk__67350_67621.cljs$core$IIndexed$_nth$arity$2(null,i__67352_67623);
var k_67625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67359_67624,(0),null);
var v_67626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67359_67624,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_67625);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_67625),v_67626);


var G__67627 = seq__67349_67620;
var G__67628 = chunk__67350_67621;
var G__67629 = count__67351_67622;
var G__67630 = (i__67352_67623 + (1));
seq__67349_67620 = G__67627;
chunk__67350_67621 = G__67628;
count__67351_67622 = G__67629;
i__67352_67623 = G__67630;
continue;
} else {
var temp__5825__auto___67631 = cljs.core.seq(seq__67349_67620);
if(temp__5825__auto___67631){
var seq__67349_67632__$1 = temp__5825__auto___67631;
if(cljs.core.chunked_seq_QMARK_(seq__67349_67632__$1)){
var c__5548__auto___67633 = cljs.core.chunk_first(seq__67349_67632__$1);
var G__67634 = cljs.core.chunk_rest(seq__67349_67632__$1);
var G__67635 = c__5548__auto___67633;
var G__67636 = cljs.core.count(c__5548__auto___67633);
var G__67637 = (0);
seq__67349_67620 = G__67634;
chunk__67350_67621 = G__67635;
count__67351_67622 = G__67636;
i__67352_67623 = G__67637;
continue;
} else {
var vec__67362_67638 = cljs.core.first(seq__67349_67632__$1);
var k_67639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67362_67638,(0),null);
var v_67640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67362_67638,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_67639);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_67639),v_67640);


var G__67641 = cljs.core.next(seq__67349_67632__$1);
var G__67642 = null;
var G__67643 = (0);
var G__67644 = (0);
seq__67349_67620 = G__67641;
chunk__67350_67621 = G__67642;
count__67351_67622 = G__67643;
i__67352_67623 = G__67644;
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
var vec__67366 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67366,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67366,(1),null);
var seq__67369_67645 = cljs.core.seq(node_children);
var chunk__67371_67646 = null;
var count__67372_67647 = (0);
var i__67373_67648 = (0);
while(true){
if((i__67373_67648 < count__67372_67647)){
var child_struct_67649 = chunk__67371_67646.cljs$core$IIndexed$_nth$arity$2(null,i__67373_67648);
if((!((child_struct_67649 == null)))){
if(typeof child_struct_67649 === 'string'){
var text_67650 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_67650),child_struct_67649].join(''));
} else {
var children_67651 = shadow.dom.svg_node(child_struct_67649);
if(cljs.core.seq_QMARK_(children_67651)){
var seq__67387_67652 = cljs.core.seq(children_67651);
var chunk__67389_67653 = null;
var count__67390_67654 = (0);
var i__67391_67655 = (0);
while(true){
if((i__67391_67655 < count__67390_67654)){
var child_67656 = chunk__67389_67653.cljs$core$IIndexed$_nth$arity$2(null,i__67391_67655);
if(cljs.core.truth_(child_67656)){
node.appendChild(child_67656);


var G__67657 = seq__67387_67652;
var G__67658 = chunk__67389_67653;
var G__67659 = count__67390_67654;
var G__67660 = (i__67391_67655 + (1));
seq__67387_67652 = G__67657;
chunk__67389_67653 = G__67658;
count__67390_67654 = G__67659;
i__67391_67655 = G__67660;
continue;
} else {
var G__67661 = seq__67387_67652;
var G__67662 = chunk__67389_67653;
var G__67663 = count__67390_67654;
var G__67664 = (i__67391_67655 + (1));
seq__67387_67652 = G__67661;
chunk__67389_67653 = G__67662;
count__67390_67654 = G__67663;
i__67391_67655 = G__67664;
continue;
}
} else {
var temp__5825__auto___67665 = cljs.core.seq(seq__67387_67652);
if(temp__5825__auto___67665){
var seq__67387_67666__$1 = temp__5825__auto___67665;
if(cljs.core.chunked_seq_QMARK_(seq__67387_67666__$1)){
var c__5548__auto___67667 = cljs.core.chunk_first(seq__67387_67666__$1);
var G__67668 = cljs.core.chunk_rest(seq__67387_67666__$1);
var G__67669 = c__5548__auto___67667;
var G__67670 = cljs.core.count(c__5548__auto___67667);
var G__67671 = (0);
seq__67387_67652 = G__67668;
chunk__67389_67653 = G__67669;
count__67390_67654 = G__67670;
i__67391_67655 = G__67671;
continue;
} else {
var child_67672 = cljs.core.first(seq__67387_67666__$1);
if(cljs.core.truth_(child_67672)){
node.appendChild(child_67672);


var G__67673 = cljs.core.next(seq__67387_67666__$1);
var G__67674 = null;
var G__67675 = (0);
var G__67676 = (0);
seq__67387_67652 = G__67673;
chunk__67389_67653 = G__67674;
count__67390_67654 = G__67675;
i__67391_67655 = G__67676;
continue;
} else {
var G__67677 = cljs.core.next(seq__67387_67666__$1);
var G__67678 = null;
var G__67679 = (0);
var G__67680 = (0);
seq__67387_67652 = G__67677;
chunk__67389_67653 = G__67678;
count__67390_67654 = G__67679;
i__67391_67655 = G__67680;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_67651);
}
}


var G__67681 = seq__67369_67645;
var G__67682 = chunk__67371_67646;
var G__67683 = count__67372_67647;
var G__67684 = (i__67373_67648 + (1));
seq__67369_67645 = G__67681;
chunk__67371_67646 = G__67682;
count__67372_67647 = G__67683;
i__67373_67648 = G__67684;
continue;
} else {
var G__67685 = seq__67369_67645;
var G__67686 = chunk__67371_67646;
var G__67687 = count__67372_67647;
var G__67688 = (i__67373_67648 + (1));
seq__67369_67645 = G__67685;
chunk__67371_67646 = G__67686;
count__67372_67647 = G__67687;
i__67373_67648 = G__67688;
continue;
}
} else {
var temp__5825__auto___67689 = cljs.core.seq(seq__67369_67645);
if(temp__5825__auto___67689){
var seq__67369_67690__$1 = temp__5825__auto___67689;
if(cljs.core.chunked_seq_QMARK_(seq__67369_67690__$1)){
var c__5548__auto___67691 = cljs.core.chunk_first(seq__67369_67690__$1);
var G__67692 = cljs.core.chunk_rest(seq__67369_67690__$1);
var G__67693 = c__5548__auto___67691;
var G__67694 = cljs.core.count(c__5548__auto___67691);
var G__67695 = (0);
seq__67369_67645 = G__67692;
chunk__67371_67646 = G__67693;
count__67372_67647 = G__67694;
i__67373_67648 = G__67695;
continue;
} else {
var child_struct_67696 = cljs.core.first(seq__67369_67690__$1);
if((!((child_struct_67696 == null)))){
if(typeof child_struct_67696 === 'string'){
var text_67697 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_67697),child_struct_67696].join(''));
} else {
var children_67698 = shadow.dom.svg_node(child_struct_67696);
if(cljs.core.seq_QMARK_(children_67698)){
var seq__67393_67699 = cljs.core.seq(children_67698);
var chunk__67395_67700 = null;
var count__67396_67701 = (0);
var i__67397_67702 = (0);
while(true){
if((i__67397_67702 < count__67396_67701)){
var child_67703 = chunk__67395_67700.cljs$core$IIndexed$_nth$arity$2(null,i__67397_67702);
if(cljs.core.truth_(child_67703)){
node.appendChild(child_67703);


var G__67704 = seq__67393_67699;
var G__67705 = chunk__67395_67700;
var G__67706 = count__67396_67701;
var G__67707 = (i__67397_67702 + (1));
seq__67393_67699 = G__67704;
chunk__67395_67700 = G__67705;
count__67396_67701 = G__67706;
i__67397_67702 = G__67707;
continue;
} else {
var G__67708 = seq__67393_67699;
var G__67709 = chunk__67395_67700;
var G__67710 = count__67396_67701;
var G__67711 = (i__67397_67702 + (1));
seq__67393_67699 = G__67708;
chunk__67395_67700 = G__67709;
count__67396_67701 = G__67710;
i__67397_67702 = G__67711;
continue;
}
} else {
var temp__5825__auto___67712__$1 = cljs.core.seq(seq__67393_67699);
if(temp__5825__auto___67712__$1){
var seq__67393_67713__$1 = temp__5825__auto___67712__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67393_67713__$1)){
var c__5548__auto___67714 = cljs.core.chunk_first(seq__67393_67713__$1);
var G__67715 = cljs.core.chunk_rest(seq__67393_67713__$1);
var G__67716 = c__5548__auto___67714;
var G__67717 = cljs.core.count(c__5548__auto___67714);
var G__67718 = (0);
seq__67393_67699 = G__67715;
chunk__67395_67700 = G__67716;
count__67396_67701 = G__67717;
i__67397_67702 = G__67718;
continue;
} else {
var child_67719 = cljs.core.first(seq__67393_67713__$1);
if(cljs.core.truth_(child_67719)){
node.appendChild(child_67719);


var G__67720 = cljs.core.next(seq__67393_67713__$1);
var G__67721 = null;
var G__67722 = (0);
var G__67723 = (0);
seq__67393_67699 = G__67720;
chunk__67395_67700 = G__67721;
count__67396_67701 = G__67722;
i__67397_67702 = G__67723;
continue;
} else {
var G__67724 = cljs.core.next(seq__67393_67713__$1);
var G__67725 = null;
var G__67726 = (0);
var G__67727 = (0);
seq__67393_67699 = G__67724;
chunk__67395_67700 = G__67725;
count__67396_67701 = G__67726;
i__67397_67702 = G__67727;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_67698);
}
}


var G__67728 = cljs.core.next(seq__67369_67690__$1);
var G__67729 = null;
var G__67730 = (0);
var G__67731 = (0);
seq__67369_67645 = G__67728;
chunk__67371_67646 = G__67729;
count__67372_67647 = G__67730;
i__67373_67648 = G__67731;
continue;
} else {
var G__67732 = cljs.core.next(seq__67369_67690__$1);
var G__67733 = null;
var G__67734 = (0);
var G__67735 = (0);
seq__67369_67645 = G__67732;
chunk__67371_67646 = G__67733;
count__67372_67647 = G__67734;
i__67373_67648 = G__67735;
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
var len__5749__auto___67736 = arguments.length;
var i__5750__auto___67737 = (0);
while(true){
if((i__5750__auto___67737 < len__5749__auto___67736)){
args__5755__auto__.push((arguments[i__5750__auto___67737]));

var G__67738 = (i__5750__auto___67737 + (1));
i__5750__auto___67737 = G__67738;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq67399){
var G__67400 = cljs.core.first(seq67399);
var seq67399__$1 = cljs.core.next(seq67399);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67400,seq67399__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
