goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_65960 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_65960(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_65961 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_65961(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__65596 = coll;
var G__65597 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__65596,G__65597) : shadow.dom.lazy_native_coll_seq.call(null,G__65596,G__65597));
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
var G__65633 = arguments.length;
switch (G__65633) {
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
var G__65662 = arguments.length;
switch (G__65662) {
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
var G__65666 = arguments.length;
switch (G__65666) {
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
var G__65670 = arguments.length;
switch (G__65670) {
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
var G__65672 = arguments.length;
switch (G__65672) {
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
var G__65674 = arguments.length;
switch (G__65674) {
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
}catch (e65675){if((e65675 instanceof Object)){
var e = e65675;
return console.log("didnt support attachEvent",el,e);
} else {
throw e65675;

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
var seq__65676 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__65677 = null;
var count__65678 = (0);
var i__65679 = (0);
while(true){
if((i__65679 < count__65678)){
var el = chunk__65677.cljs$core$IIndexed$_nth$arity$2(null,i__65679);
var handler_65968__$1 = ((function (seq__65676,chunk__65677,count__65678,i__65679,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65676,chunk__65677,count__65678,i__65679,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65968__$1);


var G__65969 = seq__65676;
var G__65970 = chunk__65677;
var G__65971 = count__65678;
var G__65972 = (i__65679 + (1));
seq__65676 = G__65969;
chunk__65677 = G__65970;
count__65678 = G__65971;
i__65679 = G__65972;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65676);
if(temp__5825__auto__){
var seq__65676__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65676__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65676__$1);
var G__65973 = cljs.core.chunk_rest(seq__65676__$1);
var G__65974 = c__5548__auto__;
var G__65975 = cljs.core.count(c__5548__auto__);
var G__65976 = (0);
seq__65676 = G__65973;
chunk__65677 = G__65974;
count__65678 = G__65975;
i__65679 = G__65976;
continue;
} else {
var el = cljs.core.first(seq__65676__$1);
var handler_65977__$1 = ((function (seq__65676,chunk__65677,count__65678,i__65679,el,seq__65676__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65676,chunk__65677,count__65678,i__65679,el,seq__65676__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65977__$1);


var G__65978 = cljs.core.next(seq__65676__$1);
var G__65979 = null;
var G__65980 = (0);
var G__65981 = (0);
seq__65676 = G__65978;
chunk__65677 = G__65979;
count__65678 = G__65980;
i__65679 = G__65981;
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
var G__65682 = arguments.length;
switch (G__65682) {
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
var seq__65683 = cljs.core.seq(events);
var chunk__65684 = null;
var count__65685 = (0);
var i__65686 = (0);
while(true){
if((i__65686 < count__65685)){
var vec__65693 = chunk__65684.cljs$core$IIndexed$_nth$arity$2(null,i__65686);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65693,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65693,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65983 = seq__65683;
var G__65984 = chunk__65684;
var G__65985 = count__65685;
var G__65986 = (i__65686 + (1));
seq__65683 = G__65983;
chunk__65684 = G__65984;
count__65685 = G__65985;
i__65686 = G__65986;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65683);
if(temp__5825__auto__){
var seq__65683__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65683__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65683__$1);
var G__65987 = cljs.core.chunk_rest(seq__65683__$1);
var G__65988 = c__5548__auto__;
var G__65989 = cljs.core.count(c__5548__auto__);
var G__65990 = (0);
seq__65683 = G__65987;
chunk__65684 = G__65988;
count__65685 = G__65989;
i__65686 = G__65990;
continue;
} else {
var vec__65696 = cljs.core.first(seq__65683__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65696,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65696,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65991 = cljs.core.next(seq__65683__$1);
var G__65992 = null;
var G__65993 = (0);
var G__65994 = (0);
seq__65683 = G__65991;
chunk__65684 = G__65992;
count__65685 = G__65993;
i__65686 = G__65994;
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
var seq__65701 = cljs.core.seq(styles);
var chunk__65702 = null;
var count__65703 = (0);
var i__65704 = (0);
while(true){
if((i__65704 < count__65703)){
var vec__65711 = chunk__65702.cljs$core$IIndexed$_nth$arity$2(null,i__65704);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65711,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65711,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65995 = seq__65701;
var G__65996 = chunk__65702;
var G__65997 = count__65703;
var G__65998 = (i__65704 + (1));
seq__65701 = G__65995;
chunk__65702 = G__65996;
count__65703 = G__65997;
i__65704 = G__65998;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65701);
if(temp__5825__auto__){
var seq__65701__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65701__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65701__$1);
var G__65999 = cljs.core.chunk_rest(seq__65701__$1);
var G__66000 = c__5548__auto__;
var G__66001 = cljs.core.count(c__5548__auto__);
var G__66002 = (0);
seq__65701 = G__65999;
chunk__65702 = G__66000;
count__65703 = G__66001;
i__65704 = G__66002;
continue;
} else {
var vec__65714 = cljs.core.first(seq__65701__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65714,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65714,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__66003 = cljs.core.next(seq__65701__$1);
var G__66004 = null;
var G__66005 = (0);
var G__66006 = (0);
seq__65701 = G__66003;
chunk__65702 = G__66004;
count__65703 = G__66005;
i__65704 = G__66006;
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
var G__65717_66007 = key;
var G__65717_66008__$1 = (((G__65717_66007 instanceof cljs.core.Keyword))?G__65717_66007.fqn:null);
switch (G__65717_66008__$1) {
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
var ks_66010 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_66010,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_66010,"aria-");
}
})())){
el.setAttribute(ks_66010,value);
} else {
(el[ks_66010] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__65728){
var map__65729 = p__65728;
var map__65729__$1 = cljs.core.__destructure_map(map__65729);
var props = map__65729__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65729__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__65730 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65730,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65730,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65730,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__65734 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__65734,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__65734;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__65740 = arguments.length;
switch (G__65740) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__65741){
var vec__65742 = p__65741;
var seq__65743 = cljs.core.seq(vec__65742);
var first__65744 = cljs.core.first(seq__65743);
var seq__65743__$1 = cljs.core.next(seq__65743);
var nn = first__65744;
var first__65744__$1 = cljs.core.first(seq__65743__$1);
var seq__65743__$2 = cljs.core.next(seq__65743__$1);
var np = first__65744__$1;
var nc = seq__65743__$2;
var node = vec__65742;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65745 = nn;
var G__65746 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65745,G__65746) : create_fn.call(null,G__65745,G__65746));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65747 = nn;
var G__65748 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65747,G__65748) : create_fn.call(null,G__65747,G__65748));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__65749 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65749,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65749,(1),null);
var seq__65752_66012 = cljs.core.seq(node_children);
var chunk__65753_66013 = null;
var count__65754_66014 = (0);
var i__65755_66015 = (0);
while(true){
if((i__65755_66015 < count__65754_66014)){
var child_struct_66016 = chunk__65753_66013.cljs$core$IIndexed$_nth$arity$2(null,i__65755_66015);
var children_66017 = shadow.dom.dom_node(child_struct_66016);
if(cljs.core.seq_QMARK_(children_66017)){
var seq__65778_66018 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66017));
var chunk__65780_66019 = null;
var count__65781_66020 = (0);
var i__65782_66021 = (0);
while(true){
if((i__65782_66021 < count__65781_66020)){
var child_66022 = chunk__65780_66019.cljs$core$IIndexed$_nth$arity$2(null,i__65782_66021);
if(cljs.core.truth_(child_66022)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66022);


var G__66023 = seq__65778_66018;
var G__66024 = chunk__65780_66019;
var G__66025 = count__65781_66020;
var G__66026 = (i__65782_66021 + (1));
seq__65778_66018 = G__66023;
chunk__65780_66019 = G__66024;
count__65781_66020 = G__66025;
i__65782_66021 = G__66026;
continue;
} else {
var G__66027 = seq__65778_66018;
var G__66028 = chunk__65780_66019;
var G__66029 = count__65781_66020;
var G__66030 = (i__65782_66021 + (1));
seq__65778_66018 = G__66027;
chunk__65780_66019 = G__66028;
count__65781_66020 = G__66029;
i__65782_66021 = G__66030;
continue;
}
} else {
var temp__5825__auto___66031 = cljs.core.seq(seq__65778_66018);
if(temp__5825__auto___66031){
var seq__65778_66032__$1 = temp__5825__auto___66031;
if(cljs.core.chunked_seq_QMARK_(seq__65778_66032__$1)){
var c__5548__auto___66033 = cljs.core.chunk_first(seq__65778_66032__$1);
var G__66034 = cljs.core.chunk_rest(seq__65778_66032__$1);
var G__66035 = c__5548__auto___66033;
var G__66036 = cljs.core.count(c__5548__auto___66033);
var G__66037 = (0);
seq__65778_66018 = G__66034;
chunk__65780_66019 = G__66035;
count__65781_66020 = G__66036;
i__65782_66021 = G__66037;
continue;
} else {
var child_66038 = cljs.core.first(seq__65778_66032__$1);
if(cljs.core.truth_(child_66038)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66038);


var G__66039 = cljs.core.next(seq__65778_66032__$1);
var G__66040 = null;
var G__66041 = (0);
var G__66042 = (0);
seq__65778_66018 = G__66039;
chunk__65780_66019 = G__66040;
count__65781_66020 = G__66041;
i__65782_66021 = G__66042;
continue;
} else {
var G__66043 = cljs.core.next(seq__65778_66032__$1);
var G__66044 = null;
var G__66045 = (0);
var G__66046 = (0);
seq__65778_66018 = G__66043;
chunk__65780_66019 = G__66044;
count__65781_66020 = G__66045;
i__65782_66021 = G__66046;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66017);
}


var G__66047 = seq__65752_66012;
var G__66048 = chunk__65753_66013;
var G__66049 = count__65754_66014;
var G__66050 = (i__65755_66015 + (1));
seq__65752_66012 = G__66047;
chunk__65753_66013 = G__66048;
count__65754_66014 = G__66049;
i__65755_66015 = G__66050;
continue;
} else {
var temp__5825__auto___66051 = cljs.core.seq(seq__65752_66012);
if(temp__5825__auto___66051){
var seq__65752_66052__$1 = temp__5825__auto___66051;
if(cljs.core.chunked_seq_QMARK_(seq__65752_66052__$1)){
var c__5548__auto___66053 = cljs.core.chunk_first(seq__65752_66052__$1);
var G__66054 = cljs.core.chunk_rest(seq__65752_66052__$1);
var G__66055 = c__5548__auto___66053;
var G__66056 = cljs.core.count(c__5548__auto___66053);
var G__66057 = (0);
seq__65752_66012 = G__66054;
chunk__65753_66013 = G__66055;
count__65754_66014 = G__66056;
i__65755_66015 = G__66057;
continue;
} else {
var child_struct_66058 = cljs.core.first(seq__65752_66052__$1);
var children_66059 = shadow.dom.dom_node(child_struct_66058);
if(cljs.core.seq_QMARK_(children_66059)){
var seq__65789_66060 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66059));
var chunk__65791_66061 = null;
var count__65792_66062 = (0);
var i__65793_66063 = (0);
while(true){
if((i__65793_66063 < count__65792_66062)){
var child_66064 = chunk__65791_66061.cljs$core$IIndexed$_nth$arity$2(null,i__65793_66063);
if(cljs.core.truth_(child_66064)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66064);


var G__66065 = seq__65789_66060;
var G__66066 = chunk__65791_66061;
var G__66067 = count__65792_66062;
var G__66068 = (i__65793_66063 + (1));
seq__65789_66060 = G__66065;
chunk__65791_66061 = G__66066;
count__65792_66062 = G__66067;
i__65793_66063 = G__66068;
continue;
} else {
var G__66069 = seq__65789_66060;
var G__66070 = chunk__65791_66061;
var G__66071 = count__65792_66062;
var G__66072 = (i__65793_66063 + (1));
seq__65789_66060 = G__66069;
chunk__65791_66061 = G__66070;
count__65792_66062 = G__66071;
i__65793_66063 = G__66072;
continue;
}
} else {
var temp__5825__auto___66073__$1 = cljs.core.seq(seq__65789_66060);
if(temp__5825__auto___66073__$1){
var seq__65789_66074__$1 = temp__5825__auto___66073__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65789_66074__$1)){
var c__5548__auto___66075 = cljs.core.chunk_first(seq__65789_66074__$1);
var G__66076 = cljs.core.chunk_rest(seq__65789_66074__$1);
var G__66077 = c__5548__auto___66075;
var G__66078 = cljs.core.count(c__5548__auto___66075);
var G__66079 = (0);
seq__65789_66060 = G__66076;
chunk__65791_66061 = G__66077;
count__65792_66062 = G__66078;
i__65793_66063 = G__66079;
continue;
} else {
var child_66080 = cljs.core.first(seq__65789_66074__$1);
if(cljs.core.truth_(child_66080)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66080);


var G__66081 = cljs.core.next(seq__65789_66074__$1);
var G__66082 = null;
var G__66083 = (0);
var G__66084 = (0);
seq__65789_66060 = G__66081;
chunk__65791_66061 = G__66082;
count__65792_66062 = G__66083;
i__65793_66063 = G__66084;
continue;
} else {
var G__66085 = cljs.core.next(seq__65789_66074__$1);
var G__66086 = null;
var G__66087 = (0);
var G__66088 = (0);
seq__65789_66060 = G__66085;
chunk__65791_66061 = G__66086;
count__65792_66062 = G__66087;
i__65793_66063 = G__66088;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66059);
}


var G__66089 = cljs.core.next(seq__65752_66052__$1);
var G__66090 = null;
var G__66091 = (0);
var G__66092 = (0);
seq__65752_66012 = G__66089;
chunk__65753_66013 = G__66090;
count__65754_66014 = G__66091;
i__65755_66015 = G__66092;
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
var seq__65800 = cljs.core.seq(node);
var chunk__65801 = null;
var count__65802 = (0);
var i__65803 = (0);
while(true){
if((i__65803 < count__65802)){
var n = chunk__65801.cljs$core$IIndexed$_nth$arity$2(null,i__65803);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66093 = seq__65800;
var G__66094 = chunk__65801;
var G__66095 = count__65802;
var G__66096 = (i__65803 + (1));
seq__65800 = G__66093;
chunk__65801 = G__66094;
count__65802 = G__66095;
i__65803 = G__66096;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65800);
if(temp__5825__auto__){
var seq__65800__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65800__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65800__$1);
var G__66097 = cljs.core.chunk_rest(seq__65800__$1);
var G__66098 = c__5548__auto__;
var G__66099 = cljs.core.count(c__5548__auto__);
var G__66100 = (0);
seq__65800 = G__66097;
chunk__65801 = G__66098;
count__65802 = G__66099;
i__65803 = G__66100;
continue;
} else {
var n = cljs.core.first(seq__65800__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66101 = cljs.core.next(seq__65800__$1);
var G__66102 = null;
var G__66103 = (0);
var G__66104 = (0);
seq__65800 = G__66101;
chunk__65801 = G__66102;
count__65802 = G__66103;
i__65803 = G__66104;
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
var G__65807 = arguments.length;
switch (G__65807) {
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
var G__65810 = arguments.length;
switch (G__65810) {
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
var G__65815 = arguments.length;
switch (G__65815) {
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
var len__5749__auto___66108 = arguments.length;
var i__5750__auto___66109 = (0);
while(true){
if((i__5750__auto___66109 < len__5749__auto___66108)){
args__5755__auto__.push((arguments[i__5750__auto___66109]));

var G__66110 = (i__5750__auto___66109 + (1));
i__5750__auto___66109 = G__66110;
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
var seq__65820_66111 = cljs.core.seq(nodes);
var chunk__65821_66112 = null;
var count__65822_66113 = (0);
var i__65823_66114 = (0);
while(true){
if((i__65823_66114 < count__65822_66113)){
var node_66115 = chunk__65821_66112.cljs$core$IIndexed$_nth$arity$2(null,i__65823_66114);
fragment.appendChild(shadow.dom._to_dom(node_66115));


var G__66116 = seq__65820_66111;
var G__66117 = chunk__65821_66112;
var G__66118 = count__65822_66113;
var G__66119 = (i__65823_66114 + (1));
seq__65820_66111 = G__66116;
chunk__65821_66112 = G__66117;
count__65822_66113 = G__66118;
i__65823_66114 = G__66119;
continue;
} else {
var temp__5825__auto___66120 = cljs.core.seq(seq__65820_66111);
if(temp__5825__auto___66120){
var seq__65820_66121__$1 = temp__5825__auto___66120;
if(cljs.core.chunked_seq_QMARK_(seq__65820_66121__$1)){
var c__5548__auto___66122 = cljs.core.chunk_first(seq__65820_66121__$1);
var G__66123 = cljs.core.chunk_rest(seq__65820_66121__$1);
var G__66124 = c__5548__auto___66122;
var G__66125 = cljs.core.count(c__5548__auto___66122);
var G__66126 = (0);
seq__65820_66111 = G__66123;
chunk__65821_66112 = G__66124;
count__65822_66113 = G__66125;
i__65823_66114 = G__66126;
continue;
} else {
var node_66127 = cljs.core.first(seq__65820_66121__$1);
fragment.appendChild(shadow.dom._to_dom(node_66127));


var G__66128 = cljs.core.next(seq__65820_66121__$1);
var G__66129 = null;
var G__66130 = (0);
var G__66131 = (0);
seq__65820_66111 = G__66128;
chunk__65821_66112 = G__66129;
count__65822_66113 = G__66130;
i__65823_66114 = G__66131;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq65819){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65819));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65824_66132 = cljs.core.seq(scripts);
var chunk__65825_66133 = null;
var count__65826_66134 = (0);
var i__65827_66135 = (0);
while(true){
if((i__65827_66135 < count__65826_66134)){
var vec__65834_66136 = chunk__65825_66133.cljs$core$IIndexed$_nth$arity$2(null,i__65827_66135);
var script_tag_66137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65834_66136,(0),null);
var script_body_66138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65834_66136,(1),null);
eval(script_body_66138);


var G__66139 = seq__65824_66132;
var G__66140 = chunk__65825_66133;
var G__66141 = count__65826_66134;
var G__66142 = (i__65827_66135 + (1));
seq__65824_66132 = G__66139;
chunk__65825_66133 = G__66140;
count__65826_66134 = G__66141;
i__65827_66135 = G__66142;
continue;
} else {
var temp__5825__auto___66143 = cljs.core.seq(seq__65824_66132);
if(temp__5825__auto___66143){
var seq__65824_66144__$1 = temp__5825__auto___66143;
if(cljs.core.chunked_seq_QMARK_(seq__65824_66144__$1)){
var c__5548__auto___66145 = cljs.core.chunk_first(seq__65824_66144__$1);
var G__66146 = cljs.core.chunk_rest(seq__65824_66144__$1);
var G__66147 = c__5548__auto___66145;
var G__66148 = cljs.core.count(c__5548__auto___66145);
var G__66149 = (0);
seq__65824_66132 = G__66146;
chunk__65825_66133 = G__66147;
count__65826_66134 = G__66148;
i__65827_66135 = G__66149;
continue;
} else {
var vec__65837_66150 = cljs.core.first(seq__65824_66144__$1);
var script_tag_66151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65837_66150,(0),null);
var script_body_66152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65837_66150,(1),null);
eval(script_body_66152);


var G__66153 = cljs.core.next(seq__65824_66144__$1);
var G__66154 = null;
var G__66155 = (0);
var G__66156 = (0);
seq__65824_66132 = G__66153;
chunk__65825_66133 = G__66154;
count__65826_66134 = G__66155;
i__65827_66135 = G__66156;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__65840){
var vec__65841 = p__65840;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65841,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65841,(1),null);
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
var G__65845 = arguments.length;
switch (G__65845) {
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
var seq__65848 = cljs.core.seq(style_keys);
var chunk__65849 = null;
var count__65850 = (0);
var i__65851 = (0);
while(true){
if((i__65851 < count__65850)){
var it = chunk__65849.cljs$core$IIndexed$_nth$arity$2(null,i__65851);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66158 = seq__65848;
var G__66159 = chunk__65849;
var G__66160 = count__65850;
var G__66161 = (i__65851 + (1));
seq__65848 = G__66158;
chunk__65849 = G__66159;
count__65850 = G__66160;
i__65851 = G__66161;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65848);
if(temp__5825__auto__){
var seq__65848__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65848__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65848__$1);
var G__66162 = cljs.core.chunk_rest(seq__65848__$1);
var G__66163 = c__5548__auto__;
var G__66164 = cljs.core.count(c__5548__auto__);
var G__66165 = (0);
seq__65848 = G__66162;
chunk__65849 = G__66163;
count__65850 = G__66164;
i__65851 = G__66165;
continue;
} else {
var it = cljs.core.first(seq__65848__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66166 = cljs.core.next(seq__65848__$1);
var G__66167 = null;
var G__66168 = (0);
var G__66169 = (0);
seq__65848 = G__66166;
chunk__65849 = G__66167;
count__65850 = G__66168;
i__65851 = G__66169;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65853,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65861 = k65853;
var G__65861__$1 = (((G__65861 instanceof cljs.core.Keyword))?G__65861.fqn:null);
switch (G__65861__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65853,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65862){
var vec__65863 = p__65862;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65863,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65863,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65852){
var self__ = this;
var G__65852__$1 = this;
return (new cljs.core.RecordIter((0),G__65852__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65854,other65855){
var self__ = this;
var this65854__$1 = this;
return (((!((other65855 == null)))) && ((((this65854__$1.constructor === other65855.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65854__$1.x,other65855.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65854__$1.y,other65855.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65854__$1.__extmap,other65855.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65853){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65870 = k65853;
var G__65870__$1 = (((G__65870 instanceof cljs.core.Keyword))?G__65870.fqn:null);
switch (G__65870__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65853);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65852){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65871 = cljs.core.keyword_identical_QMARK_;
var expr__65872 = k__5332__auto__;
if(cljs.core.truth_((pred__65871.cljs$core$IFn$_invoke$arity$2 ? pred__65871.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__65872) : pred__65871.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__65872)))){
return (new shadow.dom.Coordinate(G__65852,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65871.cljs$core$IFn$_invoke$arity$2 ? pred__65871.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__65872) : pred__65871.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__65872)))){
return (new shadow.dom.Coordinate(self__.x,G__65852,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65852),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65852){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__65852,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__65856){
var extmap__5365__auto__ = (function (){var G__65878 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65856,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65856)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65878);
} else {
return G__65878;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__65856),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__65856),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65881,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65885 = k65881;
var G__65885__$1 = (((G__65885 instanceof cljs.core.Keyword))?G__65885.fqn:null);
switch (G__65885__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65881,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65886){
var vec__65887 = p__65886;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65887,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65887,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65880){
var self__ = this;
var G__65880__$1 = this;
return (new cljs.core.RecordIter((0),G__65880__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65882,other65883){
var self__ = this;
var this65882__$1 = this;
return (((!((other65883 == null)))) && ((((this65882__$1.constructor === other65883.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65882__$1.w,other65883.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65882__$1.h,other65883.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65882__$1.__extmap,other65883.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65881){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65890 = k65881;
var G__65890__$1 = (((G__65890 instanceof cljs.core.Keyword))?G__65890.fqn:null);
switch (G__65890__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65881);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65880){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65891 = cljs.core.keyword_identical_QMARK_;
var expr__65892 = k__5332__auto__;
if(cljs.core.truth_((pred__65891.cljs$core$IFn$_invoke$arity$2 ? pred__65891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__65892) : pred__65891.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__65892)))){
return (new shadow.dom.Size(G__65880,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65891.cljs$core$IFn$_invoke$arity$2 ? pred__65891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__65892) : pred__65891.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__65892)))){
return (new shadow.dom.Size(self__.w,G__65880,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65880),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65880){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65880,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65884){
var extmap__5365__auto__ = (function (){var G__65894 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65884,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65884)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65894);
} else {
return G__65894;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65884),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65884),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__66174 = (i + (1));
var G__66175 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__66174;
ret = G__66175;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65899){
var vec__65900 = p__65899;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65900,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65900,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65904 = arguments.length;
switch (G__65904) {
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
var G__66177 = ps;
var G__66178 = (i + (1));
el__$1 = G__66177;
i = G__66178;
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
var vec__65905 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65905,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65905,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65905,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65908_66179 = cljs.core.seq(props);
var chunk__65909_66180 = null;
var count__65910_66181 = (0);
var i__65911_66182 = (0);
while(true){
if((i__65911_66182 < count__65910_66181)){
var vec__65918_66183 = chunk__65909_66180.cljs$core$IIndexed$_nth$arity$2(null,i__65911_66182);
var k_66184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65918_66183,(0),null);
var v_66185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65918_66183,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_66184);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66184),v_66185);


var G__66186 = seq__65908_66179;
var G__66187 = chunk__65909_66180;
var G__66188 = count__65910_66181;
var G__66189 = (i__65911_66182 + (1));
seq__65908_66179 = G__66186;
chunk__65909_66180 = G__66187;
count__65910_66181 = G__66188;
i__65911_66182 = G__66189;
continue;
} else {
var temp__5825__auto___66190 = cljs.core.seq(seq__65908_66179);
if(temp__5825__auto___66190){
var seq__65908_66191__$1 = temp__5825__auto___66190;
if(cljs.core.chunked_seq_QMARK_(seq__65908_66191__$1)){
var c__5548__auto___66192 = cljs.core.chunk_first(seq__65908_66191__$1);
var G__66193 = cljs.core.chunk_rest(seq__65908_66191__$1);
var G__66194 = c__5548__auto___66192;
var G__66195 = cljs.core.count(c__5548__auto___66192);
var G__66196 = (0);
seq__65908_66179 = G__66193;
chunk__65909_66180 = G__66194;
count__65910_66181 = G__66195;
i__65911_66182 = G__66196;
continue;
} else {
var vec__65921_66197 = cljs.core.first(seq__65908_66191__$1);
var k_66198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65921_66197,(0),null);
var v_66199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65921_66197,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_66198);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66198),v_66199);


var G__66200 = cljs.core.next(seq__65908_66191__$1);
var G__66201 = null;
var G__66202 = (0);
var G__66203 = (0);
seq__65908_66179 = G__66200;
chunk__65909_66180 = G__66201;
count__65910_66181 = G__66202;
i__65911_66182 = G__66203;
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
var vec__65925 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65925,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65925,(1),null);
var seq__65928_66204 = cljs.core.seq(node_children);
var chunk__65930_66205 = null;
var count__65931_66206 = (0);
var i__65932_66207 = (0);
while(true){
if((i__65932_66207 < count__65931_66206)){
var child_struct_66208 = chunk__65930_66205.cljs$core$IIndexed$_nth$arity$2(null,i__65932_66207);
if((!((child_struct_66208 == null)))){
if(typeof child_struct_66208 === 'string'){
var text_66209 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66209),child_struct_66208].join(''));
} else {
var children_66210 = shadow.dom.svg_node(child_struct_66208);
if(cljs.core.seq_QMARK_(children_66210)){
var seq__65946_66211 = cljs.core.seq(children_66210);
var chunk__65948_66212 = null;
var count__65949_66213 = (0);
var i__65950_66214 = (0);
while(true){
if((i__65950_66214 < count__65949_66213)){
var child_66215 = chunk__65948_66212.cljs$core$IIndexed$_nth$arity$2(null,i__65950_66214);
if(cljs.core.truth_(child_66215)){
node.appendChild(child_66215);


var G__66216 = seq__65946_66211;
var G__66217 = chunk__65948_66212;
var G__66218 = count__65949_66213;
var G__66219 = (i__65950_66214 + (1));
seq__65946_66211 = G__66216;
chunk__65948_66212 = G__66217;
count__65949_66213 = G__66218;
i__65950_66214 = G__66219;
continue;
} else {
var G__66220 = seq__65946_66211;
var G__66221 = chunk__65948_66212;
var G__66222 = count__65949_66213;
var G__66223 = (i__65950_66214 + (1));
seq__65946_66211 = G__66220;
chunk__65948_66212 = G__66221;
count__65949_66213 = G__66222;
i__65950_66214 = G__66223;
continue;
}
} else {
var temp__5825__auto___66224 = cljs.core.seq(seq__65946_66211);
if(temp__5825__auto___66224){
var seq__65946_66225__$1 = temp__5825__auto___66224;
if(cljs.core.chunked_seq_QMARK_(seq__65946_66225__$1)){
var c__5548__auto___66226 = cljs.core.chunk_first(seq__65946_66225__$1);
var G__66227 = cljs.core.chunk_rest(seq__65946_66225__$1);
var G__66228 = c__5548__auto___66226;
var G__66229 = cljs.core.count(c__5548__auto___66226);
var G__66230 = (0);
seq__65946_66211 = G__66227;
chunk__65948_66212 = G__66228;
count__65949_66213 = G__66229;
i__65950_66214 = G__66230;
continue;
} else {
var child_66231 = cljs.core.first(seq__65946_66225__$1);
if(cljs.core.truth_(child_66231)){
node.appendChild(child_66231);


var G__66232 = cljs.core.next(seq__65946_66225__$1);
var G__66233 = null;
var G__66234 = (0);
var G__66235 = (0);
seq__65946_66211 = G__66232;
chunk__65948_66212 = G__66233;
count__65949_66213 = G__66234;
i__65950_66214 = G__66235;
continue;
} else {
var G__66236 = cljs.core.next(seq__65946_66225__$1);
var G__66237 = null;
var G__66238 = (0);
var G__66239 = (0);
seq__65946_66211 = G__66236;
chunk__65948_66212 = G__66237;
count__65949_66213 = G__66238;
i__65950_66214 = G__66239;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66210);
}
}


var G__66240 = seq__65928_66204;
var G__66241 = chunk__65930_66205;
var G__66242 = count__65931_66206;
var G__66243 = (i__65932_66207 + (1));
seq__65928_66204 = G__66240;
chunk__65930_66205 = G__66241;
count__65931_66206 = G__66242;
i__65932_66207 = G__66243;
continue;
} else {
var G__66244 = seq__65928_66204;
var G__66245 = chunk__65930_66205;
var G__66246 = count__65931_66206;
var G__66247 = (i__65932_66207 + (1));
seq__65928_66204 = G__66244;
chunk__65930_66205 = G__66245;
count__65931_66206 = G__66246;
i__65932_66207 = G__66247;
continue;
}
} else {
var temp__5825__auto___66248 = cljs.core.seq(seq__65928_66204);
if(temp__5825__auto___66248){
var seq__65928_66249__$1 = temp__5825__auto___66248;
if(cljs.core.chunked_seq_QMARK_(seq__65928_66249__$1)){
var c__5548__auto___66250 = cljs.core.chunk_first(seq__65928_66249__$1);
var G__66251 = cljs.core.chunk_rest(seq__65928_66249__$1);
var G__66252 = c__5548__auto___66250;
var G__66253 = cljs.core.count(c__5548__auto___66250);
var G__66254 = (0);
seq__65928_66204 = G__66251;
chunk__65930_66205 = G__66252;
count__65931_66206 = G__66253;
i__65932_66207 = G__66254;
continue;
} else {
var child_struct_66255 = cljs.core.first(seq__65928_66249__$1);
if((!((child_struct_66255 == null)))){
if(typeof child_struct_66255 === 'string'){
var text_66256 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66256),child_struct_66255].join(''));
} else {
var children_66257 = shadow.dom.svg_node(child_struct_66255);
if(cljs.core.seq_QMARK_(children_66257)){
var seq__65952_66258 = cljs.core.seq(children_66257);
var chunk__65954_66259 = null;
var count__65955_66260 = (0);
var i__65956_66261 = (0);
while(true){
if((i__65956_66261 < count__65955_66260)){
var child_66262 = chunk__65954_66259.cljs$core$IIndexed$_nth$arity$2(null,i__65956_66261);
if(cljs.core.truth_(child_66262)){
node.appendChild(child_66262);


var G__66263 = seq__65952_66258;
var G__66264 = chunk__65954_66259;
var G__66265 = count__65955_66260;
var G__66266 = (i__65956_66261 + (1));
seq__65952_66258 = G__66263;
chunk__65954_66259 = G__66264;
count__65955_66260 = G__66265;
i__65956_66261 = G__66266;
continue;
} else {
var G__66267 = seq__65952_66258;
var G__66268 = chunk__65954_66259;
var G__66269 = count__65955_66260;
var G__66270 = (i__65956_66261 + (1));
seq__65952_66258 = G__66267;
chunk__65954_66259 = G__66268;
count__65955_66260 = G__66269;
i__65956_66261 = G__66270;
continue;
}
} else {
var temp__5825__auto___66271__$1 = cljs.core.seq(seq__65952_66258);
if(temp__5825__auto___66271__$1){
var seq__65952_66272__$1 = temp__5825__auto___66271__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65952_66272__$1)){
var c__5548__auto___66273 = cljs.core.chunk_first(seq__65952_66272__$1);
var G__66274 = cljs.core.chunk_rest(seq__65952_66272__$1);
var G__66275 = c__5548__auto___66273;
var G__66276 = cljs.core.count(c__5548__auto___66273);
var G__66277 = (0);
seq__65952_66258 = G__66274;
chunk__65954_66259 = G__66275;
count__65955_66260 = G__66276;
i__65956_66261 = G__66277;
continue;
} else {
var child_66278 = cljs.core.first(seq__65952_66272__$1);
if(cljs.core.truth_(child_66278)){
node.appendChild(child_66278);


var G__66279 = cljs.core.next(seq__65952_66272__$1);
var G__66280 = null;
var G__66281 = (0);
var G__66282 = (0);
seq__65952_66258 = G__66279;
chunk__65954_66259 = G__66280;
count__65955_66260 = G__66281;
i__65956_66261 = G__66282;
continue;
} else {
var G__66283 = cljs.core.next(seq__65952_66272__$1);
var G__66284 = null;
var G__66285 = (0);
var G__66286 = (0);
seq__65952_66258 = G__66283;
chunk__65954_66259 = G__66284;
count__65955_66260 = G__66285;
i__65956_66261 = G__66286;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66257);
}
}


var G__66287 = cljs.core.next(seq__65928_66249__$1);
var G__66288 = null;
var G__66289 = (0);
var G__66290 = (0);
seq__65928_66204 = G__66287;
chunk__65930_66205 = G__66288;
count__65931_66206 = G__66289;
i__65932_66207 = G__66290;
continue;
} else {
var G__66291 = cljs.core.next(seq__65928_66249__$1);
var G__66292 = null;
var G__66293 = (0);
var G__66294 = (0);
seq__65928_66204 = G__66291;
chunk__65930_66205 = G__66292;
count__65931_66206 = G__66293;
i__65932_66207 = G__66294;
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
var len__5749__auto___66295 = arguments.length;
var i__5750__auto___66296 = (0);
while(true){
if((i__5750__auto___66296 < len__5749__auto___66295)){
args__5755__auto__.push((arguments[i__5750__auto___66296]));

var G__66297 = (i__5750__auto___66296 + (1));
i__5750__auto___66296 = G__66297;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq65958){
var G__65959 = cljs.core.first(seq65958);
var seq65958__$1 = cljs.core.next(seq65958);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65959,seq65958__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
