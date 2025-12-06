goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_65959 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_65959(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_65960 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_65960(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__65660 = coll;
var G__65661 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__65660,G__65661) : shadow.dom.lazy_native_coll_seq.call(null,G__65660,G__65661));
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
var G__65666 = arguments.length;
switch (G__65666) {
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
var G__65668 = arguments.length;
switch (G__65668) {
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
var G__65670 = arguments.length;
switch (G__65670) {
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
var G__65672 = arguments.length;
switch (G__65672) {
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
var G__65674 = arguments.length;
switch (G__65674) {
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
var G__65676 = arguments.length;
switch (G__65676) {
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
}catch (e65683){if((e65683 instanceof Object)){
var e = e65683;
return console.log("didnt support attachEvent",el,e);
} else {
throw e65683;

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
var seq__65688 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__65689 = null;
var count__65690 = (0);
var i__65691 = (0);
while(true){
if((i__65691 < count__65690)){
var el = chunk__65689.cljs$core$IIndexed$_nth$arity$2(null,i__65691);
var handler_65967__$1 = ((function (seq__65688,chunk__65689,count__65690,i__65691,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65688,chunk__65689,count__65690,i__65691,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65967__$1);


var G__65968 = seq__65688;
var G__65969 = chunk__65689;
var G__65970 = count__65690;
var G__65971 = (i__65691 + (1));
seq__65688 = G__65968;
chunk__65689 = G__65969;
count__65690 = G__65970;
i__65691 = G__65971;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65688);
if(temp__5825__auto__){
var seq__65688__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65688__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65688__$1);
var G__65972 = cljs.core.chunk_rest(seq__65688__$1);
var G__65973 = c__5548__auto__;
var G__65974 = cljs.core.count(c__5548__auto__);
var G__65975 = (0);
seq__65688 = G__65972;
chunk__65689 = G__65973;
count__65690 = G__65974;
i__65691 = G__65975;
continue;
} else {
var el = cljs.core.first(seq__65688__$1);
var handler_65976__$1 = ((function (seq__65688,chunk__65689,count__65690,i__65691,el,seq__65688__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65688,chunk__65689,count__65690,i__65691,el,seq__65688__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65976__$1);


var G__65977 = cljs.core.next(seq__65688__$1);
var G__65978 = null;
var G__65979 = (0);
var G__65980 = (0);
seq__65688 = G__65977;
chunk__65689 = G__65978;
count__65690 = G__65979;
i__65691 = G__65980;
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
var G__65698 = arguments.length;
switch (G__65698) {
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
var seq__65699 = cljs.core.seq(events);
var chunk__65700 = null;
var count__65701 = (0);
var i__65702 = (0);
while(true){
if((i__65702 < count__65701)){
var vec__65715 = chunk__65700.cljs$core$IIndexed$_nth$arity$2(null,i__65702);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65715,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65715,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65982 = seq__65699;
var G__65983 = chunk__65700;
var G__65984 = count__65701;
var G__65985 = (i__65702 + (1));
seq__65699 = G__65982;
chunk__65700 = G__65983;
count__65701 = G__65984;
i__65702 = G__65985;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65699);
if(temp__5825__auto__){
var seq__65699__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65699__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65699__$1);
var G__65986 = cljs.core.chunk_rest(seq__65699__$1);
var G__65987 = c__5548__auto__;
var G__65988 = cljs.core.count(c__5548__auto__);
var G__65989 = (0);
seq__65699 = G__65986;
chunk__65700 = G__65987;
count__65701 = G__65988;
i__65702 = G__65989;
continue;
} else {
var vec__65718 = cljs.core.first(seq__65699__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65718,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65718,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65990 = cljs.core.next(seq__65699__$1);
var G__65991 = null;
var G__65992 = (0);
var G__65993 = (0);
seq__65699 = G__65990;
chunk__65700 = G__65991;
count__65701 = G__65992;
i__65702 = G__65993;
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
var seq__65721 = cljs.core.seq(styles);
var chunk__65722 = null;
var count__65723 = (0);
var i__65724 = (0);
while(true){
if((i__65724 < count__65723)){
var vec__65735 = chunk__65722.cljs$core$IIndexed$_nth$arity$2(null,i__65724);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65735,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65735,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65994 = seq__65721;
var G__65995 = chunk__65722;
var G__65996 = count__65723;
var G__65997 = (i__65724 + (1));
seq__65721 = G__65994;
chunk__65722 = G__65995;
count__65723 = G__65996;
i__65724 = G__65997;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65721);
if(temp__5825__auto__){
var seq__65721__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65721__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65721__$1);
var G__65998 = cljs.core.chunk_rest(seq__65721__$1);
var G__65999 = c__5548__auto__;
var G__66000 = cljs.core.count(c__5548__auto__);
var G__66001 = (0);
seq__65721 = G__65998;
chunk__65722 = G__65999;
count__65723 = G__66000;
i__65724 = G__66001;
continue;
} else {
var vec__65741 = cljs.core.first(seq__65721__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65741,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65741,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__66002 = cljs.core.next(seq__65721__$1);
var G__66003 = null;
var G__66004 = (0);
var G__66005 = (0);
seq__65721 = G__66002;
chunk__65722 = G__66003;
count__65723 = G__66004;
i__65724 = G__66005;
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
var G__65746_66006 = key;
var G__65746_66007__$1 = (((G__65746_66006 instanceof cljs.core.Keyword))?G__65746_66006.fqn:null);
switch (G__65746_66007__$1) {
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
var ks_66009 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_66009,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_66009,"aria-");
}
})())){
el.setAttribute(ks_66009,value);
} else {
(el[ks_66009] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__65751){
var map__65752 = p__65751;
var map__65752__$1 = cljs.core.__destructure_map(map__65752);
var props = map__65752__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65752__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__65753 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65753,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65753,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65753,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__65756 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__65756,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__65756;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__65760 = arguments.length;
switch (G__65760) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__65761){
var vec__65762 = p__65761;
var seq__65763 = cljs.core.seq(vec__65762);
var first__65764 = cljs.core.first(seq__65763);
var seq__65763__$1 = cljs.core.next(seq__65763);
var nn = first__65764;
var first__65764__$1 = cljs.core.first(seq__65763__$1);
var seq__65763__$2 = cljs.core.next(seq__65763__$1);
var np = first__65764__$1;
var nc = seq__65763__$2;
var node = vec__65762;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65766 = nn;
var G__65767 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65766,G__65767) : create_fn.call(null,G__65766,G__65767));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65768 = nn;
var G__65769 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65768,G__65769) : create_fn.call(null,G__65768,G__65769));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__65772 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65772,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65772,(1),null);
var seq__65775_66011 = cljs.core.seq(node_children);
var chunk__65776_66012 = null;
var count__65777_66013 = (0);
var i__65778_66014 = (0);
while(true){
if((i__65778_66014 < count__65777_66013)){
var child_struct_66015 = chunk__65776_66012.cljs$core$IIndexed$_nth$arity$2(null,i__65778_66014);
var children_66016 = shadow.dom.dom_node(child_struct_66015);
if(cljs.core.seq_QMARK_(children_66016)){
var seq__65795_66017 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66016));
var chunk__65797_66018 = null;
var count__65798_66019 = (0);
var i__65799_66020 = (0);
while(true){
if((i__65799_66020 < count__65798_66019)){
var child_66021 = chunk__65797_66018.cljs$core$IIndexed$_nth$arity$2(null,i__65799_66020);
if(cljs.core.truth_(child_66021)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66021);


var G__66022 = seq__65795_66017;
var G__66023 = chunk__65797_66018;
var G__66024 = count__65798_66019;
var G__66025 = (i__65799_66020 + (1));
seq__65795_66017 = G__66022;
chunk__65797_66018 = G__66023;
count__65798_66019 = G__66024;
i__65799_66020 = G__66025;
continue;
} else {
var G__66026 = seq__65795_66017;
var G__66027 = chunk__65797_66018;
var G__66028 = count__65798_66019;
var G__66029 = (i__65799_66020 + (1));
seq__65795_66017 = G__66026;
chunk__65797_66018 = G__66027;
count__65798_66019 = G__66028;
i__65799_66020 = G__66029;
continue;
}
} else {
var temp__5825__auto___66030 = cljs.core.seq(seq__65795_66017);
if(temp__5825__auto___66030){
var seq__65795_66031__$1 = temp__5825__auto___66030;
if(cljs.core.chunked_seq_QMARK_(seq__65795_66031__$1)){
var c__5548__auto___66032 = cljs.core.chunk_first(seq__65795_66031__$1);
var G__66033 = cljs.core.chunk_rest(seq__65795_66031__$1);
var G__66034 = c__5548__auto___66032;
var G__66035 = cljs.core.count(c__5548__auto___66032);
var G__66036 = (0);
seq__65795_66017 = G__66033;
chunk__65797_66018 = G__66034;
count__65798_66019 = G__66035;
i__65799_66020 = G__66036;
continue;
} else {
var child_66037 = cljs.core.first(seq__65795_66031__$1);
if(cljs.core.truth_(child_66037)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66037);


var G__66038 = cljs.core.next(seq__65795_66031__$1);
var G__66039 = null;
var G__66040 = (0);
var G__66041 = (0);
seq__65795_66017 = G__66038;
chunk__65797_66018 = G__66039;
count__65798_66019 = G__66040;
i__65799_66020 = G__66041;
continue;
} else {
var G__66042 = cljs.core.next(seq__65795_66031__$1);
var G__66043 = null;
var G__66044 = (0);
var G__66045 = (0);
seq__65795_66017 = G__66042;
chunk__65797_66018 = G__66043;
count__65798_66019 = G__66044;
i__65799_66020 = G__66045;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66016);
}


var G__66046 = seq__65775_66011;
var G__66047 = chunk__65776_66012;
var G__66048 = count__65777_66013;
var G__66049 = (i__65778_66014 + (1));
seq__65775_66011 = G__66046;
chunk__65776_66012 = G__66047;
count__65777_66013 = G__66048;
i__65778_66014 = G__66049;
continue;
} else {
var temp__5825__auto___66050 = cljs.core.seq(seq__65775_66011);
if(temp__5825__auto___66050){
var seq__65775_66051__$1 = temp__5825__auto___66050;
if(cljs.core.chunked_seq_QMARK_(seq__65775_66051__$1)){
var c__5548__auto___66052 = cljs.core.chunk_first(seq__65775_66051__$1);
var G__66053 = cljs.core.chunk_rest(seq__65775_66051__$1);
var G__66054 = c__5548__auto___66052;
var G__66055 = cljs.core.count(c__5548__auto___66052);
var G__66056 = (0);
seq__65775_66011 = G__66053;
chunk__65776_66012 = G__66054;
count__65777_66013 = G__66055;
i__65778_66014 = G__66056;
continue;
} else {
var child_struct_66057 = cljs.core.first(seq__65775_66051__$1);
var children_66058 = shadow.dom.dom_node(child_struct_66057);
if(cljs.core.seq_QMARK_(children_66058)){
var seq__65803_66059 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66058));
var chunk__65805_66060 = null;
var count__65806_66061 = (0);
var i__65807_66062 = (0);
while(true){
if((i__65807_66062 < count__65806_66061)){
var child_66063 = chunk__65805_66060.cljs$core$IIndexed$_nth$arity$2(null,i__65807_66062);
if(cljs.core.truth_(child_66063)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66063);


var G__66064 = seq__65803_66059;
var G__66065 = chunk__65805_66060;
var G__66066 = count__65806_66061;
var G__66067 = (i__65807_66062 + (1));
seq__65803_66059 = G__66064;
chunk__65805_66060 = G__66065;
count__65806_66061 = G__66066;
i__65807_66062 = G__66067;
continue;
} else {
var G__66068 = seq__65803_66059;
var G__66069 = chunk__65805_66060;
var G__66070 = count__65806_66061;
var G__66071 = (i__65807_66062 + (1));
seq__65803_66059 = G__66068;
chunk__65805_66060 = G__66069;
count__65806_66061 = G__66070;
i__65807_66062 = G__66071;
continue;
}
} else {
var temp__5825__auto___66072__$1 = cljs.core.seq(seq__65803_66059);
if(temp__5825__auto___66072__$1){
var seq__65803_66073__$1 = temp__5825__auto___66072__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65803_66073__$1)){
var c__5548__auto___66074 = cljs.core.chunk_first(seq__65803_66073__$1);
var G__66075 = cljs.core.chunk_rest(seq__65803_66073__$1);
var G__66076 = c__5548__auto___66074;
var G__66077 = cljs.core.count(c__5548__auto___66074);
var G__66078 = (0);
seq__65803_66059 = G__66075;
chunk__65805_66060 = G__66076;
count__65806_66061 = G__66077;
i__65807_66062 = G__66078;
continue;
} else {
var child_66079 = cljs.core.first(seq__65803_66073__$1);
if(cljs.core.truth_(child_66079)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66079);


var G__66080 = cljs.core.next(seq__65803_66073__$1);
var G__66081 = null;
var G__66082 = (0);
var G__66083 = (0);
seq__65803_66059 = G__66080;
chunk__65805_66060 = G__66081;
count__65806_66061 = G__66082;
i__65807_66062 = G__66083;
continue;
} else {
var G__66084 = cljs.core.next(seq__65803_66073__$1);
var G__66085 = null;
var G__66086 = (0);
var G__66087 = (0);
seq__65803_66059 = G__66084;
chunk__65805_66060 = G__66085;
count__65806_66061 = G__66086;
i__65807_66062 = G__66087;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66058);
}


var G__66088 = cljs.core.next(seq__65775_66051__$1);
var G__66089 = null;
var G__66090 = (0);
var G__66091 = (0);
seq__65775_66011 = G__66088;
chunk__65776_66012 = G__66089;
count__65777_66013 = G__66090;
i__65778_66014 = G__66091;
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
var seq__65818 = cljs.core.seq(node);
var chunk__65819 = null;
var count__65820 = (0);
var i__65821 = (0);
while(true){
if((i__65821 < count__65820)){
var n = chunk__65819.cljs$core$IIndexed$_nth$arity$2(null,i__65821);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66092 = seq__65818;
var G__66093 = chunk__65819;
var G__66094 = count__65820;
var G__66095 = (i__65821 + (1));
seq__65818 = G__66092;
chunk__65819 = G__66093;
count__65820 = G__66094;
i__65821 = G__66095;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65818);
if(temp__5825__auto__){
var seq__65818__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65818__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65818__$1);
var G__66096 = cljs.core.chunk_rest(seq__65818__$1);
var G__66097 = c__5548__auto__;
var G__66098 = cljs.core.count(c__5548__auto__);
var G__66099 = (0);
seq__65818 = G__66096;
chunk__65819 = G__66097;
count__65820 = G__66098;
i__65821 = G__66099;
continue;
} else {
var n = cljs.core.first(seq__65818__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66100 = cljs.core.next(seq__65818__$1);
var G__66101 = null;
var G__66102 = (0);
var G__66103 = (0);
seq__65818 = G__66100;
chunk__65819 = G__66101;
count__65820 = G__66102;
i__65821 = G__66103;
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
var G__65827 = arguments.length;
switch (G__65827) {
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
var G__65830 = arguments.length;
switch (G__65830) {
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
var G__65832 = arguments.length;
switch (G__65832) {
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
var len__5749__auto___66107 = arguments.length;
var i__5750__auto___66108 = (0);
while(true){
if((i__5750__auto___66108 < len__5749__auto___66107)){
args__5755__auto__.push((arguments[i__5750__auto___66108]));

var G__66109 = (i__5750__auto___66108 + (1));
i__5750__auto___66108 = G__66109;
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
var seq__65834_66110 = cljs.core.seq(nodes);
var chunk__65835_66111 = null;
var count__65836_66112 = (0);
var i__65837_66113 = (0);
while(true){
if((i__65837_66113 < count__65836_66112)){
var node_66114 = chunk__65835_66111.cljs$core$IIndexed$_nth$arity$2(null,i__65837_66113);
fragment.appendChild(shadow.dom._to_dom(node_66114));


var G__66115 = seq__65834_66110;
var G__66116 = chunk__65835_66111;
var G__66117 = count__65836_66112;
var G__66118 = (i__65837_66113 + (1));
seq__65834_66110 = G__66115;
chunk__65835_66111 = G__66116;
count__65836_66112 = G__66117;
i__65837_66113 = G__66118;
continue;
} else {
var temp__5825__auto___66119 = cljs.core.seq(seq__65834_66110);
if(temp__5825__auto___66119){
var seq__65834_66120__$1 = temp__5825__auto___66119;
if(cljs.core.chunked_seq_QMARK_(seq__65834_66120__$1)){
var c__5548__auto___66121 = cljs.core.chunk_first(seq__65834_66120__$1);
var G__66122 = cljs.core.chunk_rest(seq__65834_66120__$1);
var G__66123 = c__5548__auto___66121;
var G__66124 = cljs.core.count(c__5548__auto___66121);
var G__66125 = (0);
seq__65834_66110 = G__66122;
chunk__65835_66111 = G__66123;
count__65836_66112 = G__66124;
i__65837_66113 = G__66125;
continue;
} else {
var node_66126 = cljs.core.first(seq__65834_66120__$1);
fragment.appendChild(shadow.dom._to_dom(node_66126));


var G__66127 = cljs.core.next(seq__65834_66120__$1);
var G__66128 = null;
var G__66129 = (0);
var G__66130 = (0);
seq__65834_66110 = G__66127;
chunk__65835_66111 = G__66128;
count__65836_66112 = G__66129;
i__65837_66113 = G__66130;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq65833){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65833));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65838_66131 = cljs.core.seq(scripts);
var chunk__65839_66132 = null;
var count__65840_66133 = (0);
var i__65841_66134 = (0);
while(true){
if((i__65841_66134 < count__65840_66133)){
var vec__65848_66135 = chunk__65839_66132.cljs$core$IIndexed$_nth$arity$2(null,i__65841_66134);
var script_tag_66136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65848_66135,(0),null);
var script_body_66137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65848_66135,(1),null);
eval(script_body_66137);


var G__66138 = seq__65838_66131;
var G__66139 = chunk__65839_66132;
var G__66140 = count__65840_66133;
var G__66141 = (i__65841_66134 + (1));
seq__65838_66131 = G__66138;
chunk__65839_66132 = G__66139;
count__65840_66133 = G__66140;
i__65841_66134 = G__66141;
continue;
} else {
var temp__5825__auto___66142 = cljs.core.seq(seq__65838_66131);
if(temp__5825__auto___66142){
var seq__65838_66143__$1 = temp__5825__auto___66142;
if(cljs.core.chunked_seq_QMARK_(seq__65838_66143__$1)){
var c__5548__auto___66144 = cljs.core.chunk_first(seq__65838_66143__$1);
var G__66145 = cljs.core.chunk_rest(seq__65838_66143__$1);
var G__66146 = c__5548__auto___66144;
var G__66147 = cljs.core.count(c__5548__auto___66144);
var G__66148 = (0);
seq__65838_66131 = G__66145;
chunk__65839_66132 = G__66146;
count__65840_66133 = G__66147;
i__65841_66134 = G__66148;
continue;
} else {
var vec__65851_66149 = cljs.core.first(seq__65838_66143__$1);
var script_tag_66150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65851_66149,(0),null);
var script_body_66151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65851_66149,(1),null);
eval(script_body_66151);


var G__66152 = cljs.core.next(seq__65838_66143__$1);
var G__66153 = null;
var G__66154 = (0);
var G__66155 = (0);
seq__65838_66131 = G__66152;
chunk__65839_66132 = G__66153;
count__65840_66133 = G__66154;
i__65841_66134 = G__66155;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__65854){
var vec__65855 = p__65854;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65855,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65855,(1),null);
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
var G__65859 = arguments.length;
switch (G__65859) {
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
var seq__65860 = cljs.core.seq(style_keys);
var chunk__65861 = null;
var count__65862 = (0);
var i__65863 = (0);
while(true){
if((i__65863 < count__65862)){
var it = chunk__65861.cljs$core$IIndexed$_nth$arity$2(null,i__65863);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66157 = seq__65860;
var G__66158 = chunk__65861;
var G__66159 = count__65862;
var G__66160 = (i__65863 + (1));
seq__65860 = G__66157;
chunk__65861 = G__66158;
count__65862 = G__66159;
i__65863 = G__66160;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65860);
if(temp__5825__auto__){
var seq__65860__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65860__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65860__$1);
var G__66161 = cljs.core.chunk_rest(seq__65860__$1);
var G__66162 = c__5548__auto__;
var G__66163 = cljs.core.count(c__5548__auto__);
var G__66164 = (0);
seq__65860 = G__66161;
chunk__65861 = G__66162;
count__65862 = G__66163;
i__65863 = G__66164;
continue;
} else {
var it = cljs.core.first(seq__65860__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66165 = cljs.core.next(seq__65860__$1);
var G__66166 = null;
var G__66167 = (0);
var G__66168 = (0);
seq__65860 = G__66165;
chunk__65861 = G__66166;
count__65862 = G__66167;
i__65863 = G__66168;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65865,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65869 = k65865;
var G__65869__$1 = (((G__65869 instanceof cljs.core.Keyword))?G__65869.fqn:null);
switch (G__65869__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65865,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65870){
var vec__65871 = p__65870;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65871,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65871,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65864){
var self__ = this;
var G__65864__$1 = this;
return (new cljs.core.RecordIter((0),G__65864__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65866,other65867){
var self__ = this;
var this65866__$1 = this;
return (((!((other65867 == null)))) && ((((this65866__$1.constructor === other65867.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65866__$1.x,other65867.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65866__$1.y,other65867.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65866__$1.__extmap,other65867.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65865){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65874 = k65865;
var G__65874__$1 = (((G__65874 instanceof cljs.core.Keyword))?G__65874.fqn:null);
switch (G__65874__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65865);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65864){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65875 = cljs.core.keyword_identical_QMARK_;
var expr__65876 = k__5332__auto__;
if(cljs.core.truth_((pred__65875.cljs$core$IFn$_invoke$arity$2 ? pred__65875.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__65876) : pred__65875.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__65876)))){
return (new shadow.dom.Coordinate(G__65864,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65875.cljs$core$IFn$_invoke$arity$2 ? pred__65875.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__65876) : pred__65875.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__65876)))){
return (new shadow.dom.Coordinate(self__.x,G__65864,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65864),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65864){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__65864,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__65868){
var extmap__5365__auto__ = (function (){var G__65878 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65868,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65868)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65878);
} else {
return G__65878;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__65868),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__65868),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65880,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65884 = k65880;
var G__65884__$1 = (((G__65884 instanceof cljs.core.Keyword))?G__65884.fqn:null);
switch (G__65884__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65880,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65885){
var vec__65886 = p__65885;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65886,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65886,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65879){
var self__ = this;
var G__65879__$1 = this;
return (new cljs.core.RecordIter((0),G__65879__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65881,other65882){
var self__ = this;
var this65881__$1 = this;
return (((!((other65882 == null)))) && ((((this65881__$1.constructor === other65882.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65881__$1.w,other65882.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65881__$1.h,other65882.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65881__$1.__extmap,other65882.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65880){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65889 = k65880;
var G__65889__$1 = (((G__65889 instanceof cljs.core.Keyword))?G__65889.fqn:null);
switch (G__65889__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65880);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65879){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65890 = cljs.core.keyword_identical_QMARK_;
var expr__65891 = k__5332__auto__;
if(cljs.core.truth_((pred__65890.cljs$core$IFn$_invoke$arity$2 ? pred__65890.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__65891) : pred__65890.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__65891)))){
return (new shadow.dom.Size(G__65879,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65890.cljs$core$IFn$_invoke$arity$2 ? pred__65890.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__65891) : pred__65890.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__65891)))){
return (new shadow.dom.Size(self__.w,G__65879,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65879),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65879){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65879,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65883){
var extmap__5365__auto__ = (function (){var G__65893 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65883,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65883)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65893);
} else {
return G__65893;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65883),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65883),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__66173 = (i + (1));
var G__66174 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__66173;
ret = G__66174;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65898){
var vec__65899 = p__65898;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65899,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65899,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65903 = arguments.length;
switch (G__65903) {
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
var G__66176 = ps;
var G__66177 = (i + (1));
el__$1 = G__66176;
i = G__66177;
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
var vec__65904 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65904,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65904,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65904,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65907_66178 = cljs.core.seq(props);
var chunk__65908_66179 = null;
var count__65909_66180 = (0);
var i__65910_66181 = (0);
while(true){
if((i__65910_66181 < count__65909_66180)){
var vec__65917_66182 = chunk__65908_66179.cljs$core$IIndexed$_nth$arity$2(null,i__65910_66181);
var k_66183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65917_66182,(0),null);
var v_66184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65917_66182,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_66183);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66183),v_66184);


var G__66185 = seq__65907_66178;
var G__66186 = chunk__65908_66179;
var G__66187 = count__65909_66180;
var G__66188 = (i__65910_66181 + (1));
seq__65907_66178 = G__66185;
chunk__65908_66179 = G__66186;
count__65909_66180 = G__66187;
i__65910_66181 = G__66188;
continue;
} else {
var temp__5825__auto___66189 = cljs.core.seq(seq__65907_66178);
if(temp__5825__auto___66189){
var seq__65907_66190__$1 = temp__5825__auto___66189;
if(cljs.core.chunked_seq_QMARK_(seq__65907_66190__$1)){
var c__5548__auto___66191 = cljs.core.chunk_first(seq__65907_66190__$1);
var G__66192 = cljs.core.chunk_rest(seq__65907_66190__$1);
var G__66193 = c__5548__auto___66191;
var G__66194 = cljs.core.count(c__5548__auto___66191);
var G__66195 = (0);
seq__65907_66178 = G__66192;
chunk__65908_66179 = G__66193;
count__65909_66180 = G__66194;
i__65910_66181 = G__66195;
continue;
} else {
var vec__65920_66196 = cljs.core.first(seq__65907_66190__$1);
var k_66197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65920_66196,(0),null);
var v_66198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65920_66196,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_66197);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66197),v_66198);


var G__66199 = cljs.core.next(seq__65907_66190__$1);
var G__66200 = null;
var G__66201 = (0);
var G__66202 = (0);
seq__65907_66178 = G__66199;
chunk__65908_66179 = G__66200;
count__65909_66180 = G__66201;
i__65910_66181 = G__66202;
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
var vec__65924 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65924,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65924,(1),null);
var seq__65927_66203 = cljs.core.seq(node_children);
var chunk__65929_66204 = null;
var count__65930_66205 = (0);
var i__65931_66206 = (0);
while(true){
if((i__65931_66206 < count__65930_66205)){
var child_struct_66207 = chunk__65929_66204.cljs$core$IIndexed$_nth$arity$2(null,i__65931_66206);
if((!((child_struct_66207 == null)))){
if(typeof child_struct_66207 === 'string'){
var text_66208 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66208),child_struct_66207].join(''));
} else {
var children_66209 = shadow.dom.svg_node(child_struct_66207);
if(cljs.core.seq_QMARK_(children_66209)){
var seq__65945_66210 = cljs.core.seq(children_66209);
var chunk__65947_66211 = null;
var count__65948_66212 = (0);
var i__65949_66213 = (0);
while(true){
if((i__65949_66213 < count__65948_66212)){
var child_66214 = chunk__65947_66211.cljs$core$IIndexed$_nth$arity$2(null,i__65949_66213);
if(cljs.core.truth_(child_66214)){
node.appendChild(child_66214);


var G__66215 = seq__65945_66210;
var G__66216 = chunk__65947_66211;
var G__66217 = count__65948_66212;
var G__66218 = (i__65949_66213 + (1));
seq__65945_66210 = G__66215;
chunk__65947_66211 = G__66216;
count__65948_66212 = G__66217;
i__65949_66213 = G__66218;
continue;
} else {
var G__66219 = seq__65945_66210;
var G__66220 = chunk__65947_66211;
var G__66221 = count__65948_66212;
var G__66222 = (i__65949_66213 + (1));
seq__65945_66210 = G__66219;
chunk__65947_66211 = G__66220;
count__65948_66212 = G__66221;
i__65949_66213 = G__66222;
continue;
}
} else {
var temp__5825__auto___66223 = cljs.core.seq(seq__65945_66210);
if(temp__5825__auto___66223){
var seq__65945_66224__$1 = temp__5825__auto___66223;
if(cljs.core.chunked_seq_QMARK_(seq__65945_66224__$1)){
var c__5548__auto___66225 = cljs.core.chunk_first(seq__65945_66224__$1);
var G__66226 = cljs.core.chunk_rest(seq__65945_66224__$1);
var G__66227 = c__5548__auto___66225;
var G__66228 = cljs.core.count(c__5548__auto___66225);
var G__66229 = (0);
seq__65945_66210 = G__66226;
chunk__65947_66211 = G__66227;
count__65948_66212 = G__66228;
i__65949_66213 = G__66229;
continue;
} else {
var child_66230 = cljs.core.first(seq__65945_66224__$1);
if(cljs.core.truth_(child_66230)){
node.appendChild(child_66230);


var G__66231 = cljs.core.next(seq__65945_66224__$1);
var G__66232 = null;
var G__66233 = (0);
var G__66234 = (0);
seq__65945_66210 = G__66231;
chunk__65947_66211 = G__66232;
count__65948_66212 = G__66233;
i__65949_66213 = G__66234;
continue;
} else {
var G__66235 = cljs.core.next(seq__65945_66224__$1);
var G__66236 = null;
var G__66237 = (0);
var G__66238 = (0);
seq__65945_66210 = G__66235;
chunk__65947_66211 = G__66236;
count__65948_66212 = G__66237;
i__65949_66213 = G__66238;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66209);
}
}


var G__66239 = seq__65927_66203;
var G__66240 = chunk__65929_66204;
var G__66241 = count__65930_66205;
var G__66242 = (i__65931_66206 + (1));
seq__65927_66203 = G__66239;
chunk__65929_66204 = G__66240;
count__65930_66205 = G__66241;
i__65931_66206 = G__66242;
continue;
} else {
var G__66243 = seq__65927_66203;
var G__66244 = chunk__65929_66204;
var G__66245 = count__65930_66205;
var G__66246 = (i__65931_66206 + (1));
seq__65927_66203 = G__66243;
chunk__65929_66204 = G__66244;
count__65930_66205 = G__66245;
i__65931_66206 = G__66246;
continue;
}
} else {
var temp__5825__auto___66247 = cljs.core.seq(seq__65927_66203);
if(temp__5825__auto___66247){
var seq__65927_66248__$1 = temp__5825__auto___66247;
if(cljs.core.chunked_seq_QMARK_(seq__65927_66248__$1)){
var c__5548__auto___66249 = cljs.core.chunk_first(seq__65927_66248__$1);
var G__66250 = cljs.core.chunk_rest(seq__65927_66248__$1);
var G__66251 = c__5548__auto___66249;
var G__66252 = cljs.core.count(c__5548__auto___66249);
var G__66253 = (0);
seq__65927_66203 = G__66250;
chunk__65929_66204 = G__66251;
count__65930_66205 = G__66252;
i__65931_66206 = G__66253;
continue;
} else {
var child_struct_66254 = cljs.core.first(seq__65927_66248__$1);
if((!((child_struct_66254 == null)))){
if(typeof child_struct_66254 === 'string'){
var text_66255 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66255),child_struct_66254].join(''));
} else {
var children_66256 = shadow.dom.svg_node(child_struct_66254);
if(cljs.core.seq_QMARK_(children_66256)){
var seq__65951_66257 = cljs.core.seq(children_66256);
var chunk__65953_66258 = null;
var count__65954_66259 = (0);
var i__65955_66260 = (0);
while(true){
if((i__65955_66260 < count__65954_66259)){
var child_66261 = chunk__65953_66258.cljs$core$IIndexed$_nth$arity$2(null,i__65955_66260);
if(cljs.core.truth_(child_66261)){
node.appendChild(child_66261);


var G__66262 = seq__65951_66257;
var G__66263 = chunk__65953_66258;
var G__66264 = count__65954_66259;
var G__66265 = (i__65955_66260 + (1));
seq__65951_66257 = G__66262;
chunk__65953_66258 = G__66263;
count__65954_66259 = G__66264;
i__65955_66260 = G__66265;
continue;
} else {
var G__66266 = seq__65951_66257;
var G__66267 = chunk__65953_66258;
var G__66268 = count__65954_66259;
var G__66269 = (i__65955_66260 + (1));
seq__65951_66257 = G__66266;
chunk__65953_66258 = G__66267;
count__65954_66259 = G__66268;
i__65955_66260 = G__66269;
continue;
}
} else {
var temp__5825__auto___66270__$1 = cljs.core.seq(seq__65951_66257);
if(temp__5825__auto___66270__$1){
var seq__65951_66271__$1 = temp__5825__auto___66270__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65951_66271__$1)){
var c__5548__auto___66272 = cljs.core.chunk_first(seq__65951_66271__$1);
var G__66273 = cljs.core.chunk_rest(seq__65951_66271__$1);
var G__66274 = c__5548__auto___66272;
var G__66275 = cljs.core.count(c__5548__auto___66272);
var G__66276 = (0);
seq__65951_66257 = G__66273;
chunk__65953_66258 = G__66274;
count__65954_66259 = G__66275;
i__65955_66260 = G__66276;
continue;
} else {
var child_66277 = cljs.core.first(seq__65951_66271__$1);
if(cljs.core.truth_(child_66277)){
node.appendChild(child_66277);


var G__66278 = cljs.core.next(seq__65951_66271__$1);
var G__66279 = null;
var G__66280 = (0);
var G__66281 = (0);
seq__65951_66257 = G__66278;
chunk__65953_66258 = G__66279;
count__65954_66259 = G__66280;
i__65955_66260 = G__66281;
continue;
} else {
var G__66282 = cljs.core.next(seq__65951_66271__$1);
var G__66283 = null;
var G__66284 = (0);
var G__66285 = (0);
seq__65951_66257 = G__66282;
chunk__65953_66258 = G__66283;
count__65954_66259 = G__66284;
i__65955_66260 = G__66285;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66256);
}
}


var G__66286 = cljs.core.next(seq__65927_66248__$1);
var G__66287 = null;
var G__66288 = (0);
var G__66289 = (0);
seq__65927_66203 = G__66286;
chunk__65929_66204 = G__66287;
count__65930_66205 = G__66288;
i__65931_66206 = G__66289;
continue;
} else {
var G__66290 = cljs.core.next(seq__65927_66248__$1);
var G__66291 = null;
var G__66292 = (0);
var G__66293 = (0);
seq__65927_66203 = G__66290;
chunk__65929_66204 = G__66291;
count__65930_66205 = G__66292;
i__65931_66206 = G__66293;
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
var len__5749__auto___66294 = arguments.length;
var i__5750__auto___66295 = (0);
while(true){
if((i__5750__auto___66295 < len__5749__auto___66294)){
args__5755__auto__.push((arguments[i__5750__auto___66295]));

var G__66296 = (i__5750__auto___66295 + (1));
i__5750__auto___66295 = G__66296;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq65957){
var G__65958 = cljs.core.first(seq65957);
var seq65957__$1 = cljs.core.next(seq65957);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65958,seq65957__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
