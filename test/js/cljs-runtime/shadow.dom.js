goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_65956 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_65956(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_65957 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_65957(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__65582 = coll;
var G__65583 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__65582,G__65583) : shadow.dom.lazy_native_coll_seq.call(null,G__65582,G__65583));
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
var G__65587 = arguments.length;
switch (G__65587) {
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
var G__65591 = arguments.length;
switch (G__65591) {
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
var G__65596 = arguments.length;
switch (G__65596) {
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
var G__65601 = arguments.length;
switch (G__65601) {
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
var G__65607 = arguments.length;
switch (G__65607) {
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
var G__65622 = arguments.length;
switch (G__65622) {
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
}catch (e65641){if((e65641 instanceof Object)){
var e = e65641;
return console.log("didnt support attachEvent",el,e);
} else {
throw e65641;

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
var seq__65671 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__65672 = null;
var count__65673 = (0);
var i__65674 = (0);
while(true){
if((i__65674 < count__65673)){
var el = chunk__65672.cljs$core$IIndexed$_nth$arity$2(null,i__65674);
var handler_65964__$1 = ((function (seq__65671,chunk__65672,count__65673,i__65674,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65671,chunk__65672,count__65673,i__65674,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65964__$1);


var G__65965 = seq__65671;
var G__65966 = chunk__65672;
var G__65967 = count__65673;
var G__65968 = (i__65674 + (1));
seq__65671 = G__65965;
chunk__65672 = G__65966;
count__65673 = G__65967;
i__65674 = G__65968;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65671);
if(temp__5825__auto__){
var seq__65671__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65671__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65671__$1);
var G__65969 = cljs.core.chunk_rest(seq__65671__$1);
var G__65970 = c__5548__auto__;
var G__65971 = cljs.core.count(c__5548__auto__);
var G__65972 = (0);
seq__65671 = G__65969;
chunk__65672 = G__65970;
count__65673 = G__65971;
i__65674 = G__65972;
continue;
} else {
var el = cljs.core.first(seq__65671__$1);
var handler_65973__$1 = ((function (seq__65671,chunk__65672,count__65673,i__65674,el,seq__65671__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65671,chunk__65672,count__65673,i__65674,el,seq__65671__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65973__$1);


var G__65974 = cljs.core.next(seq__65671__$1);
var G__65975 = null;
var G__65976 = (0);
var G__65977 = (0);
seq__65671 = G__65974;
chunk__65672 = G__65975;
count__65673 = G__65976;
i__65674 = G__65977;
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
var G__65680 = arguments.length;
switch (G__65680) {
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
var seq__65681 = cljs.core.seq(events);
var chunk__65682 = null;
var count__65683 = (0);
var i__65684 = (0);
while(true){
if((i__65684 < count__65683)){
var vec__65691 = chunk__65682.cljs$core$IIndexed$_nth$arity$2(null,i__65684);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65691,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65691,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65979 = seq__65681;
var G__65980 = chunk__65682;
var G__65981 = count__65683;
var G__65982 = (i__65684 + (1));
seq__65681 = G__65979;
chunk__65682 = G__65980;
count__65683 = G__65981;
i__65684 = G__65982;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65681);
if(temp__5825__auto__){
var seq__65681__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65681__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65681__$1);
var G__65983 = cljs.core.chunk_rest(seq__65681__$1);
var G__65984 = c__5548__auto__;
var G__65985 = cljs.core.count(c__5548__auto__);
var G__65986 = (0);
seq__65681 = G__65983;
chunk__65682 = G__65984;
count__65683 = G__65985;
i__65684 = G__65986;
continue;
} else {
var vec__65694 = cljs.core.first(seq__65681__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65694,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65694,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65987 = cljs.core.next(seq__65681__$1);
var G__65988 = null;
var G__65989 = (0);
var G__65990 = (0);
seq__65681 = G__65987;
chunk__65682 = G__65988;
count__65683 = G__65989;
i__65684 = G__65990;
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
var seq__65697 = cljs.core.seq(styles);
var chunk__65698 = null;
var count__65699 = (0);
var i__65700 = (0);
while(true){
if((i__65700 < count__65699)){
var vec__65707 = chunk__65698.cljs$core$IIndexed$_nth$arity$2(null,i__65700);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65707,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65707,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65991 = seq__65697;
var G__65992 = chunk__65698;
var G__65993 = count__65699;
var G__65994 = (i__65700 + (1));
seq__65697 = G__65991;
chunk__65698 = G__65992;
count__65699 = G__65993;
i__65700 = G__65994;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65697);
if(temp__5825__auto__){
var seq__65697__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65697__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65697__$1);
var G__65995 = cljs.core.chunk_rest(seq__65697__$1);
var G__65996 = c__5548__auto__;
var G__65997 = cljs.core.count(c__5548__auto__);
var G__65998 = (0);
seq__65697 = G__65995;
chunk__65698 = G__65996;
count__65699 = G__65997;
i__65700 = G__65998;
continue;
} else {
var vec__65710 = cljs.core.first(seq__65697__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65710,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65710,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65999 = cljs.core.next(seq__65697__$1);
var G__66000 = null;
var G__66001 = (0);
var G__66002 = (0);
seq__65697 = G__65999;
chunk__65698 = G__66000;
count__65699 = G__66001;
i__65700 = G__66002;
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
var G__65713_66003 = key;
var G__65713_66004__$1 = (((G__65713_66003 instanceof cljs.core.Keyword))?G__65713_66003.fqn:null);
switch (G__65713_66004__$1) {
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
var ks_66006 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_66006,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_66006,"aria-");
}
})())){
el.setAttribute(ks_66006,value);
} else {
(el[ks_66006] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__65729){
var map__65730 = p__65729;
var map__65730__$1 = cljs.core.__destructure_map(map__65730);
var props = map__65730__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65730__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__65731 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65731,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65731,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65731,(2),null);
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
var G__65736 = arguments.length;
switch (G__65736) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__65737){
var vec__65738 = p__65737;
var seq__65739 = cljs.core.seq(vec__65738);
var first__65740 = cljs.core.first(seq__65739);
var seq__65739__$1 = cljs.core.next(seq__65739);
var nn = first__65740;
var first__65740__$1 = cljs.core.first(seq__65739__$1);
var seq__65739__$2 = cljs.core.next(seq__65739__$1);
var np = first__65740__$1;
var nc = seq__65739__$2;
var node = vec__65738;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65741 = nn;
var G__65742 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65741,G__65742) : create_fn.call(null,G__65741,G__65742));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65743 = nn;
var G__65744 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65743,G__65744) : create_fn.call(null,G__65743,G__65744));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__65745 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65745,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65745,(1),null);
var seq__65751_66008 = cljs.core.seq(node_children);
var chunk__65752_66009 = null;
var count__65753_66010 = (0);
var i__65754_66011 = (0);
while(true){
if((i__65754_66011 < count__65753_66010)){
var child_struct_66012 = chunk__65752_66009.cljs$core$IIndexed$_nth$arity$2(null,i__65754_66011);
var children_66013 = shadow.dom.dom_node(child_struct_66012);
if(cljs.core.seq_QMARK_(children_66013)){
var seq__65779_66014 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66013));
var chunk__65781_66015 = null;
var count__65782_66016 = (0);
var i__65783_66017 = (0);
while(true){
if((i__65783_66017 < count__65782_66016)){
var child_66018 = chunk__65781_66015.cljs$core$IIndexed$_nth$arity$2(null,i__65783_66017);
if(cljs.core.truth_(child_66018)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66018);


var G__66019 = seq__65779_66014;
var G__66020 = chunk__65781_66015;
var G__66021 = count__65782_66016;
var G__66022 = (i__65783_66017 + (1));
seq__65779_66014 = G__66019;
chunk__65781_66015 = G__66020;
count__65782_66016 = G__66021;
i__65783_66017 = G__66022;
continue;
} else {
var G__66023 = seq__65779_66014;
var G__66024 = chunk__65781_66015;
var G__66025 = count__65782_66016;
var G__66026 = (i__65783_66017 + (1));
seq__65779_66014 = G__66023;
chunk__65781_66015 = G__66024;
count__65782_66016 = G__66025;
i__65783_66017 = G__66026;
continue;
}
} else {
var temp__5825__auto___66027 = cljs.core.seq(seq__65779_66014);
if(temp__5825__auto___66027){
var seq__65779_66028__$1 = temp__5825__auto___66027;
if(cljs.core.chunked_seq_QMARK_(seq__65779_66028__$1)){
var c__5548__auto___66029 = cljs.core.chunk_first(seq__65779_66028__$1);
var G__66030 = cljs.core.chunk_rest(seq__65779_66028__$1);
var G__66031 = c__5548__auto___66029;
var G__66032 = cljs.core.count(c__5548__auto___66029);
var G__66033 = (0);
seq__65779_66014 = G__66030;
chunk__65781_66015 = G__66031;
count__65782_66016 = G__66032;
i__65783_66017 = G__66033;
continue;
} else {
var child_66034 = cljs.core.first(seq__65779_66028__$1);
if(cljs.core.truth_(child_66034)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66034);


var G__66035 = cljs.core.next(seq__65779_66028__$1);
var G__66036 = null;
var G__66037 = (0);
var G__66038 = (0);
seq__65779_66014 = G__66035;
chunk__65781_66015 = G__66036;
count__65782_66016 = G__66037;
i__65783_66017 = G__66038;
continue;
} else {
var G__66039 = cljs.core.next(seq__65779_66028__$1);
var G__66040 = null;
var G__66041 = (0);
var G__66042 = (0);
seq__65779_66014 = G__66039;
chunk__65781_66015 = G__66040;
count__65782_66016 = G__66041;
i__65783_66017 = G__66042;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66013);
}


var G__66043 = seq__65751_66008;
var G__66044 = chunk__65752_66009;
var G__66045 = count__65753_66010;
var G__66046 = (i__65754_66011 + (1));
seq__65751_66008 = G__66043;
chunk__65752_66009 = G__66044;
count__65753_66010 = G__66045;
i__65754_66011 = G__66046;
continue;
} else {
var temp__5825__auto___66047 = cljs.core.seq(seq__65751_66008);
if(temp__5825__auto___66047){
var seq__65751_66048__$1 = temp__5825__auto___66047;
if(cljs.core.chunked_seq_QMARK_(seq__65751_66048__$1)){
var c__5548__auto___66049 = cljs.core.chunk_first(seq__65751_66048__$1);
var G__66050 = cljs.core.chunk_rest(seq__65751_66048__$1);
var G__66051 = c__5548__auto___66049;
var G__66052 = cljs.core.count(c__5548__auto___66049);
var G__66053 = (0);
seq__65751_66008 = G__66050;
chunk__65752_66009 = G__66051;
count__65753_66010 = G__66052;
i__65754_66011 = G__66053;
continue;
} else {
var child_struct_66054 = cljs.core.first(seq__65751_66048__$1);
var children_66055 = shadow.dom.dom_node(child_struct_66054);
if(cljs.core.seq_QMARK_(children_66055)){
var seq__65787_66056 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66055));
var chunk__65789_66057 = null;
var count__65790_66058 = (0);
var i__65791_66059 = (0);
while(true){
if((i__65791_66059 < count__65790_66058)){
var child_66060 = chunk__65789_66057.cljs$core$IIndexed$_nth$arity$2(null,i__65791_66059);
if(cljs.core.truth_(child_66060)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66060);


var G__66061 = seq__65787_66056;
var G__66062 = chunk__65789_66057;
var G__66063 = count__65790_66058;
var G__66064 = (i__65791_66059 + (1));
seq__65787_66056 = G__66061;
chunk__65789_66057 = G__66062;
count__65790_66058 = G__66063;
i__65791_66059 = G__66064;
continue;
} else {
var G__66065 = seq__65787_66056;
var G__66066 = chunk__65789_66057;
var G__66067 = count__65790_66058;
var G__66068 = (i__65791_66059 + (1));
seq__65787_66056 = G__66065;
chunk__65789_66057 = G__66066;
count__65790_66058 = G__66067;
i__65791_66059 = G__66068;
continue;
}
} else {
var temp__5825__auto___66069__$1 = cljs.core.seq(seq__65787_66056);
if(temp__5825__auto___66069__$1){
var seq__65787_66070__$1 = temp__5825__auto___66069__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65787_66070__$1)){
var c__5548__auto___66071 = cljs.core.chunk_first(seq__65787_66070__$1);
var G__66072 = cljs.core.chunk_rest(seq__65787_66070__$1);
var G__66073 = c__5548__auto___66071;
var G__66074 = cljs.core.count(c__5548__auto___66071);
var G__66075 = (0);
seq__65787_66056 = G__66072;
chunk__65789_66057 = G__66073;
count__65790_66058 = G__66074;
i__65791_66059 = G__66075;
continue;
} else {
var child_66076 = cljs.core.first(seq__65787_66070__$1);
if(cljs.core.truth_(child_66076)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66076);


var G__66077 = cljs.core.next(seq__65787_66070__$1);
var G__66078 = null;
var G__66079 = (0);
var G__66080 = (0);
seq__65787_66056 = G__66077;
chunk__65789_66057 = G__66078;
count__65790_66058 = G__66079;
i__65791_66059 = G__66080;
continue;
} else {
var G__66081 = cljs.core.next(seq__65787_66070__$1);
var G__66082 = null;
var G__66083 = (0);
var G__66084 = (0);
seq__65787_66056 = G__66081;
chunk__65789_66057 = G__66082;
count__65790_66058 = G__66083;
i__65791_66059 = G__66084;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66055);
}


var G__66085 = cljs.core.next(seq__65751_66048__$1);
var G__66086 = null;
var G__66087 = (0);
var G__66088 = (0);
seq__65751_66008 = G__66085;
chunk__65752_66009 = G__66086;
count__65753_66010 = G__66087;
i__65754_66011 = G__66088;
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
var seq__65798 = cljs.core.seq(node);
var chunk__65799 = null;
var count__65800 = (0);
var i__65801 = (0);
while(true){
if((i__65801 < count__65800)){
var n = chunk__65799.cljs$core$IIndexed$_nth$arity$2(null,i__65801);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66089 = seq__65798;
var G__66090 = chunk__65799;
var G__66091 = count__65800;
var G__66092 = (i__65801 + (1));
seq__65798 = G__66089;
chunk__65799 = G__66090;
count__65800 = G__66091;
i__65801 = G__66092;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65798);
if(temp__5825__auto__){
var seq__65798__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65798__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65798__$1);
var G__66093 = cljs.core.chunk_rest(seq__65798__$1);
var G__66094 = c__5548__auto__;
var G__66095 = cljs.core.count(c__5548__auto__);
var G__66096 = (0);
seq__65798 = G__66093;
chunk__65799 = G__66094;
count__65800 = G__66095;
i__65801 = G__66096;
continue;
} else {
var n = cljs.core.first(seq__65798__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66097 = cljs.core.next(seq__65798__$1);
var G__66098 = null;
var G__66099 = (0);
var G__66100 = (0);
seq__65798 = G__66097;
chunk__65799 = G__66098;
count__65800 = G__66099;
i__65801 = G__66100;
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
var G__65806 = arguments.length;
switch (G__65806) {
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
var G__65814 = arguments.length;
switch (G__65814) {
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
var len__5749__auto___66104 = arguments.length;
var i__5750__auto___66105 = (0);
while(true){
if((i__5750__auto___66105 < len__5749__auto___66104)){
args__5755__auto__.push((arguments[i__5750__auto___66105]));

var G__66106 = (i__5750__auto___66105 + (1));
i__5750__auto___66105 = G__66106;
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
var seq__65818_66107 = cljs.core.seq(nodes);
var chunk__65819_66108 = null;
var count__65820_66109 = (0);
var i__65821_66110 = (0);
while(true){
if((i__65821_66110 < count__65820_66109)){
var node_66111 = chunk__65819_66108.cljs$core$IIndexed$_nth$arity$2(null,i__65821_66110);
fragment.appendChild(shadow.dom._to_dom(node_66111));


var G__66112 = seq__65818_66107;
var G__66113 = chunk__65819_66108;
var G__66114 = count__65820_66109;
var G__66115 = (i__65821_66110 + (1));
seq__65818_66107 = G__66112;
chunk__65819_66108 = G__66113;
count__65820_66109 = G__66114;
i__65821_66110 = G__66115;
continue;
} else {
var temp__5825__auto___66116 = cljs.core.seq(seq__65818_66107);
if(temp__5825__auto___66116){
var seq__65818_66117__$1 = temp__5825__auto___66116;
if(cljs.core.chunked_seq_QMARK_(seq__65818_66117__$1)){
var c__5548__auto___66118 = cljs.core.chunk_first(seq__65818_66117__$1);
var G__66119 = cljs.core.chunk_rest(seq__65818_66117__$1);
var G__66120 = c__5548__auto___66118;
var G__66121 = cljs.core.count(c__5548__auto___66118);
var G__66122 = (0);
seq__65818_66107 = G__66119;
chunk__65819_66108 = G__66120;
count__65820_66109 = G__66121;
i__65821_66110 = G__66122;
continue;
} else {
var node_66123 = cljs.core.first(seq__65818_66117__$1);
fragment.appendChild(shadow.dom._to_dom(node_66123));


var G__66124 = cljs.core.next(seq__65818_66117__$1);
var G__66125 = null;
var G__66126 = (0);
var G__66127 = (0);
seq__65818_66107 = G__66124;
chunk__65819_66108 = G__66125;
count__65820_66109 = G__66126;
i__65821_66110 = G__66127;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq65815){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65815));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65822_66128 = cljs.core.seq(scripts);
var chunk__65823_66129 = null;
var count__65824_66130 = (0);
var i__65825_66131 = (0);
while(true){
if((i__65825_66131 < count__65824_66130)){
var vec__65833_66132 = chunk__65823_66129.cljs$core$IIndexed$_nth$arity$2(null,i__65825_66131);
var script_tag_66133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65833_66132,(0),null);
var script_body_66134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65833_66132,(1),null);
eval(script_body_66134);


var G__66135 = seq__65822_66128;
var G__66136 = chunk__65823_66129;
var G__66137 = count__65824_66130;
var G__66138 = (i__65825_66131 + (1));
seq__65822_66128 = G__66135;
chunk__65823_66129 = G__66136;
count__65824_66130 = G__66137;
i__65825_66131 = G__66138;
continue;
} else {
var temp__5825__auto___66139 = cljs.core.seq(seq__65822_66128);
if(temp__5825__auto___66139){
var seq__65822_66140__$1 = temp__5825__auto___66139;
if(cljs.core.chunked_seq_QMARK_(seq__65822_66140__$1)){
var c__5548__auto___66141 = cljs.core.chunk_first(seq__65822_66140__$1);
var G__66142 = cljs.core.chunk_rest(seq__65822_66140__$1);
var G__66143 = c__5548__auto___66141;
var G__66144 = cljs.core.count(c__5548__auto___66141);
var G__66145 = (0);
seq__65822_66128 = G__66142;
chunk__65823_66129 = G__66143;
count__65824_66130 = G__66144;
i__65825_66131 = G__66145;
continue;
} else {
var vec__65839_66146 = cljs.core.first(seq__65822_66140__$1);
var script_tag_66147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65839_66146,(0),null);
var script_body_66148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65839_66146,(1),null);
eval(script_body_66148);


var G__66149 = cljs.core.next(seq__65822_66140__$1);
var G__66150 = null;
var G__66151 = (0);
var G__66152 = (0);
seq__65822_66128 = G__66149;
chunk__65823_66129 = G__66150;
count__65824_66130 = G__66151;
i__65825_66131 = G__66152;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__65842){
var vec__65843 = p__65842;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65843,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65843,(1),null);
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
var G__65851 = arguments.length;
switch (G__65851) {
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
var seq__65852 = cljs.core.seq(style_keys);
var chunk__65853 = null;
var count__65854 = (0);
var i__65855 = (0);
while(true){
if((i__65855 < count__65854)){
var it = chunk__65853.cljs$core$IIndexed$_nth$arity$2(null,i__65855);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66154 = seq__65852;
var G__66155 = chunk__65853;
var G__66156 = count__65854;
var G__66157 = (i__65855 + (1));
seq__65852 = G__66154;
chunk__65853 = G__66155;
count__65854 = G__66156;
i__65855 = G__66157;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65852);
if(temp__5825__auto__){
var seq__65852__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65852__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65852__$1);
var G__66158 = cljs.core.chunk_rest(seq__65852__$1);
var G__66159 = c__5548__auto__;
var G__66160 = cljs.core.count(c__5548__auto__);
var G__66161 = (0);
seq__65852 = G__66158;
chunk__65853 = G__66159;
count__65854 = G__66160;
i__65855 = G__66161;
continue;
} else {
var it = cljs.core.first(seq__65852__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66162 = cljs.core.next(seq__65852__$1);
var G__66163 = null;
var G__66164 = (0);
var G__66165 = (0);
seq__65852 = G__66162;
chunk__65853 = G__66163;
count__65854 = G__66164;
i__65855 = G__66165;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65861,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65866 = k65861;
var G__65866__$1 = (((G__65866 instanceof cljs.core.Keyword))?G__65866.fqn:null);
switch (G__65866__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65861,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65867){
var vec__65868 = p__65867;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65868,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65868,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65860){
var self__ = this;
var G__65860__$1 = this;
return (new cljs.core.RecordIter((0),G__65860__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65862,other65863){
var self__ = this;
var this65862__$1 = this;
return (((!((other65863 == null)))) && ((((this65862__$1.constructor === other65863.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65862__$1.x,other65863.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65862__$1.y,other65863.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65862__$1.__extmap,other65863.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65861){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65871 = k65861;
var G__65871__$1 = (((G__65871 instanceof cljs.core.Keyword))?G__65871.fqn:null);
switch (G__65871__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65861);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65860){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65872 = cljs.core.keyword_identical_QMARK_;
var expr__65873 = k__5332__auto__;
if(cljs.core.truth_((pred__65872.cljs$core$IFn$_invoke$arity$2 ? pred__65872.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__65873) : pred__65872.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__65873)))){
return (new shadow.dom.Coordinate(G__65860,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65872.cljs$core$IFn$_invoke$arity$2 ? pred__65872.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__65873) : pred__65872.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__65873)))){
return (new shadow.dom.Coordinate(self__.x,G__65860,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65860),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65860){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__65860,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__65865){
var extmap__5365__auto__ = (function (){var G__65875 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65865,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65865)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65875);
} else {
return G__65875;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__65865),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__65865),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65877,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65881 = k65877;
var G__65881__$1 = (((G__65881 instanceof cljs.core.Keyword))?G__65881.fqn:null);
switch (G__65881__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65877,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65882){
var vec__65883 = p__65882;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65883,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65883,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65876){
var self__ = this;
var G__65876__$1 = this;
return (new cljs.core.RecordIter((0),G__65876__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65878,other65879){
var self__ = this;
var this65878__$1 = this;
return (((!((other65879 == null)))) && ((((this65878__$1.constructor === other65879.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65878__$1.w,other65879.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65878__$1.h,other65879.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65878__$1.__extmap,other65879.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65877){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65886 = k65877;
var G__65886__$1 = (((G__65886 instanceof cljs.core.Keyword))?G__65886.fqn:null);
switch (G__65886__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65877);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65876){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65887 = cljs.core.keyword_identical_QMARK_;
var expr__65888 = k__5332__auto__;
if(cljs.core.truth_((pred__65887.cljs$core$IFn$_invoke$arity$2 ? pred__65887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__65888) : pred__65887.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__65888)))){
return (new shadow.dom.Size(G__65876,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65887.cljs$core$IFn$_invoke$arity$2 ? pred__65887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__65888) : pred__65887.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__65888)))){
return (new shadow.dom.Size(self__.w,G__65876,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65876),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65876){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65876,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65880){
var extmap__5365__auto__ = (function (){var G__65890 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65880,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65880)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65890);
} else {
return G__65890;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65880),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65880),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__66170 = (i + (1));
var G__66171 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__66170;
ret = G__66171;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65895){
var vec__65896 = p__65895;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65896,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65896,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65900 = arguments.length;
switch (G__65900) {
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
var G__66173 = ps;
var G__66174 = (i + (1));
el__$1 = G__66173;
i = G__66174;
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
var vec__65901 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65901,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65901,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65901,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65904_66175 = cljs.core.seq(props);
var chunk__65905_66176 = null;
var count__65906_66177 = (0);
var i__65907_66178 = (0);
while(true){
if((i__65907_66178 < count__65906_66177)){
var vec__65914_66179 = chunk__65905_66176.cljs$core$IIndexed$_nth$arity$2(null,i__65907_66178);
var k_66180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65914_66179,(0),null);
var v_66181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65914_66179,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_66180);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66180),v_66181);


var G__66182 = seq__65904_66175;
var G__66183 = chunk__65905_66176;
var G__66184 = count__65906_66177;
var G__66185 = (i__65907_66178 + (1));
seq__65904_66175 = G__66182;
chunk__65905_66176 = G__66183;
count__65906_66177 = G__66184;
i__65907_66178 = G__66185;
continue;
} else {
var temp__5825__auto___66186 = cljs.core.seq(seq__65904_66175);
if(temp__5825__auto___66186){
var seq__65904_66187__$1 = temp__5825__auto___66186;
if(cljs.core.chunked_seq_QMARK_(seq__65904_66187__$1)){
var c__5548__auto___66188 = cljs.core.chunk_first(seq__65904_66187__$1);
var G__66189 = cljs.core.chunk_rest(seq__65904_66187__$1);
var G__66190 = c__5548__auto___66188;
var G__66191 = cljs.core.count(c__5548__auto___66188);
var G__66192 = (0);
seq__65904_66175 = G__66189;
chunk__65905_66176 = G__66190;
count__65906_66177 = G__66191;
i__65907_66178 = G__66192;
continue;
} else {
var vec__65917_66193 = cljs.core.first(seq__65904_66187__$1);
var k_66194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65917_66193,(0),null);
var v_66195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65917_66193,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_66194);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66194),v_66195);


var G__66196 = cljs.core.next(seq__65904_66187__$1);
var G__66197 = null;
var G__66198 = (0);
var G__66199 = (0);
seq__65904_66175 = G__66196;
chunk__65905_66176 = G__66197;
count__65906_66177 = G__66198;
i__65907_66178 = G__66199;
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
var vec__65921 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65921,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65921,(1),null);
var seq__65924_66200 = cljs.core.seq(node_children);
var chunk__65926_66201 = null;
var count__65927_66202 = (0);
var i__65928_66203 = (0);
while(true){
if((i__65928_66203 < count__65927_66202)){
var child_struct_66204 = chunk__65926_66201.cljs$core$IIndexed$_nth$arity$2(null,i__65928_66203);
if((!((child_struct_66204 == null)))){
if(typeof child_struct_66204 === 'string'){
var text_66205 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66205),child_struct_66204].join(''));
} else {
var children_66206 = shadow.dom.svg_node(child_struct_66204);
if(cljs.core.seq_QMARK_(children_66206)){
var seq__65942_66207 = cljs.core.seq(children_66206);
var chunk__65944_66208 = null;
var count__65945_66209 = (0);
var i__65946_66210 = (0);
while(true){
if((i__65946_66210 < count__65945_66209)){
var child_66211 = chunk__65944_66208.cljs$core$IIndexed$_nth$arity$2(null,i__65946_66210);
if(cljs.core.truth_(child_66211)){
node.appendChild(child_66211);


var G__66212 = seq__65942_66207;
var G__66213 = chunk__65944_66208;
var G__66214 = count__65945_66209;
var G__66215 = (i__65946_66210 + (1));
seq__65942_66207 = G__66212;
chunk__65944_66208 = G__66213;
count__65945_66209 = G__66214;
i__65946_66210 = G__66215;
continue;
} else {
var G__66216 = seq__65942_66207;
var G__66217 = chunk__65944_66208;
var G__66218 = count__65945_66209;
var G__66219 = (i__65946_66210 + (1));
seq__65942_66207 = G__66216;
chunk__65944_66208 = G__66217;
count__65945_66209 = G__66218;
i__65946_66210 = G__66219;
continue;
}
} else {
var temp__5825__auto___66220 = cljs.core.seq(seq__65942_66207);
if(temp__5825__auto___66220){
var seq__65942_66221__$1 = temp__5825__auto___66220;
if(cljs.core.chunked_seq_QMARK_(seq__65942_66221__$1)){
var c__5548__auto___66222 = cljs.core.chunk_first(seq__65942_66221__$1);
var G__66223 = cljs.core.chunk_rest(seq__65942_66221__$1);
var G__66224 = c__5548__auto___66222;
var G__66225 = cljs.core.count(c__5548__auto___66222);
var G__66226 = (0);
seq__65942_66207 = G__66223;
chunk__65944_66208 = G__66224;
count__65945_66209 = G__66225;
i__65946_66210 = G__66226;
continue;
} else {
var child_66227 = cljs.core.first(seq__65942_66221__$1);
if(cljs.core.truth_(child_66227)){
node.appendChild(child_66227);


var G__66228 = cljs.core.next(seq__65942_66221__$1);
var G__66229 = null;
var G__66230 = (0);
var G__66231 = (0);
seq__65942_66207 = G__66228;
chunk__65944_66208 = G__66229;
count__65945_66209 = G__66230;
i__65946_66210 = G__66231;
continue;
} else {
var G__66232 = cljs.core.next(seq__65942_66221__$1);
var G__66233 = null;
var G__66234 = (0);
var G__66235 = (0);
seq__65942_66207 = G__66232;
chunk__65944_66208 = G__66233;
count__65945_66209 = G__66234;
i__65946_66210 = G__66235;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66206);
}
}


var G__66236 = seq__65924_66200;
var G__66237 = chunk__65926_66201;
var G__66238 = count__65927_66202;
var G__66239 = (i__65928_66203 + (1));
seq__65924_66200 = G__66236;
chunk__65926_66201 = G__66237;
count__65927_66202 = G__66238;
i__65928_66203 = G__66239;
continue;
} else {
var G__66240 = seq__65924_66200;
var G__66241 = chunk__65926_66201;
var G__66242 = count__65927_66202;
var G__66243 = (i__65928_66203 + (1));
seq__65924_66200 = G__66240;
chunk__65926_66201 = G__66241;
count__65927_66202 = G__66242;
i__65928_66203 = G__66243;
continue;
}
} else {
var temp__5825__auto___66244 = cljs.core.seq(seq__65924_66200);
if(temp__5825__auto___66244){
var seq__65924_66245__$1 = temp__5825__auto___66244;
if(cljs.core.chunked_seq_QMARK_(seq__65924_66245__$1)){
var c__5548__auto___66246 = cljs.core.chunk_first(seq__65924_66245__$1);
var G__66247 = cljs.core.chunk_rest(seq__65924_66245__$1);
var G__66248 = c__5548__auto___66246;
var G__66249 = cljs.core.count(c__5548__auto___66246);
var G__66250 = (0);
seq__65924_66200 = G__66247;
chunk__65926_66201 = G__66248;
count__65927_66202 = G__66249;
i__65928_66203 = G__66250;
continue;
} else {
var child_struct_66251 = cljs.core.first(seq__65924_66245__$1);
if((!((child_struct_66251 == null)))){
if(typeof child_struct_66251 === 'string'){
var text_66252 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66252),child_struct_66251].join(''));
} else {
var children_66253 = shadow.dom.svg_node(child_struct_66251);
if(cljs.core.seq_QMARK_(children_66253)){
var seq__65948_66254 = cljs.core.seq(children_66253);
var chunk__65950_66255 = null;
var count__65951_66256 = (0);
var i__65952_66257 = (0);
while(true){
if((i__65952_66257 < count__65951_66256)){
var child_66258 = chunk__65950_66255.cljs$core$IIndexed$_nth$arity$2(null,i__65952_66257);
if(cljs.core.truth_(child_66258)){
node.appendChild(child_66258);


var G__66259 = seq__65948_66254;
var G__66260 = chunk__65950_66255;
var G__66261 = count__65951_66256;
var G__66262 = (i__65952_66257 + (1));
seq__65948_66254 = G__66259;
chunk__65950_66255 = G__66260;
count__65951_66256 = G__66261;
i__65952_66257 = G__66262;
continue;
} else {
var G__66263 = seq__65948_66254;
var G__66264 = chunk__65950_66255;
var G__66265 = count__65951_66256;
var G__66266 = (i__65952_66257 + (1));
seq__65948_66254 = G__66263;
chunk__65950_66255 = G__66264;
count__65951_66256 = G__66265;
i__65952_66257 = G__66266;
continue;
}
} else {
var temp__5825__auto___66267__$1 = cljs.core.seq(seq__65948_66254);
if(temp__5825__auto___66267__$1){
var seq__65948_66268__$1 = temp__5825__auto___66267__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65948_66268__$1)){
var c__5548__auto___66269 = cljs.core.chunk_first(seq__65948_66268__$1);
var G__66270 = cljs.core.chunk_rest(seq__65948_66268__$1);
var G__66271 = c__5548__auto___66269;
var G__66272 = cljs.core.count(c__5548__auto___66269);
var G__66273 = (0);
seq__65948_66254 = G__66270;
chunk__65950_66255 = G__66271;
count__65951_66256 = G__66272;
i__65952_66257 = G__66273;
continue;
} else {
var child_66274 = cljs.core.first(seq__65948_66268__$1);
if(cljs.core.truth_(child_66274)){
node.appendChild(child_66274);


var G__66275 = cljs.core.next(seq__65948_66268__$1);
var G__66276 = null;
var G__66277 = (0);
var G__66278 = (0);
seq__65948_66254 = G__66275;
chunk__65950_66255 = G__66276;
count__65951_66256 = G__66277;
i__65952_66257 = G__66278;
continue;
} else {
var G__66279 = cljs.core.next(seq__65948_66268__$1);
var G__66280 = null;
var G__66281 = (0);
var G__66282 = (0);
seq__65948_66254 = G__66279;
chunk__65950_66255 = G__66280;
count__65951_66256 = G__66281;
i__65952_66257 = G__66282;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66253);
}
}


var G__66283 = cljs.core.next(seq__65924_66245__$1);
var G__66284 = null;
var G__66285 = (0);
var G__66286 = (0);
seq__65924_66200 = G__66283;
chunk__65926_66201 = G__66284;
count__65927_66202 = G__66285;
i__65928_66203 = G__66286;
continue;
} else {
var G__66287 = cljs.core.next(seq__65924_66245__$1);
var G__66288 = null;
var G__66289 = (0);
var G__66290 = (0);
seq__65924_66200 = G__66287;
chunk__65926_66201 = G__66288;
count__65927_66202 = G__66289;
i__65928_66203 = G__66290;
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
var len__5749__auto___66291 = arguments.length;
var i__5750__auto___66292 = (0);
while(true){
if((i__5750__auto___66292 < len__5749__auto___66291)){
args__5755__auto__.push((arguments[i__5750__auto___66292]));

var G__66293 = (i__5750__auto___66292 + (1));
i__5750__auto___66292 = G__66293;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq65954){
var G__65955 = cljs.core.first(seq65954);
var seq65954__$1 = cljs.core.next(seq65954);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65955,seq65954__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
