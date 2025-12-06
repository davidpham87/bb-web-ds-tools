goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_65971 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_65971(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_65972 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_65972(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__65585 = coll;
var G__65586 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__65585,G__65586) : shadow.dom.lazy_native_coll_seq.call(null,G__65585,G__65586));
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
var G__65603 = arguments.length;
switch (G__65603) {
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
var G__65607 = arguments.length;
switch (G__65607) {
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
var G__65611 = arguments.length;
switch (G__65611) {
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
var G__65617 = arguments.length;
switch (G__65617) {
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
var G__65622 = arguments.length;
switch (G__65622) {
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
var G__65625 = arguments.length;
switch (G__65625) {
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
}catch (e65644){if((e65644 instanceof Object)){
var e = e65644;
return console.log("didnt support attachEvent",el,e);
} else {
throw e65644;

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
var seq__65678 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__65679 = null;
var count__65680 = (0);
var i__65681 = (0);
while(true){
if((i__65681 < count__65680)){
var el = chunk__65679.cljs$core$IIndexed$_nth$arity$2(null,i__65681);
var handler_65979__$1 = ((function (seq__65678,chunk__65679,count__65680,i__65681,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65678,chunk__65679,count__65680,i__65681,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65979__$1);


var G__65980 = seq__65678;
var G__65981 = chunk__65679;
var G__65982 = count__65680;
var G__65983 = (i__65681 + (1));
seq__65678 = G__65980;
chunk__65679 = G__65981;
count__65680 = G__65982;
i__65681 = G__65983;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65678);
if(temp__5825__auto__){
var seq__65678__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65678__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65678__$1);
var G__65984 = cljs.core.chunk_rest(seq__65678__$1);
var G__65985 = c__5548__auto__;
var G__65986 = cljs.core.count(c__5548__auto__);
var G__65987 = (0);
seq__65678 = G__65984;
chunk__65679 = G__65985;
count__65680 = G__65986;
i__65681 = G__65987;
continue;
} else {
var el = cljs.core.first(seq__65678__$1);
var handler_65988__$1 = ((function (seq__65678,chunk__65679,count__65680,i__65681,el,seq__65678__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65678,chunk__65679,count__65680,i__65681,el,seq__65678__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65988__$1);


var G__65989 = cljs.core.next(seq__65678__$1);
var G__65990 = null;
var G__65991 = (0);
var G__65992 = (0);
seq__65678 = G__65989;
chunk__65679 = G__65990;
count__65680 = G__65991;
i__65681 = G__65992;
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
var G__65695 = arguments.length;
switch (G__65695) {
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
var seq__65696 = cljs.core.seq(events);
var chunk__65697 = null;
var count__65698 = (0);
var i__65699 = (0);
while(true){
if((i__65699 < count__65698)){
var vec__65706 = chunk__65697.cljs$core$IIndexed$_nth$arity$2(null,i__65699);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65706,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65706,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65994 = seq__65696;
var G__65995 = chunk__65697;
var G__65996 = count__65698;
var G__65997 = (i__65699 + (1));
seq__65696 = G__65994;
chunk__65697 = G__65995;
count__65698 = G__65996;
i__65699 = G__65997;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65696);
if(temp__5825__auto__){
var seq__65696__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65696__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65696__$1);
var G__65998 = cljs.core.chunk_rest(seq__65696__$1);
var G__65999 = c__5548__auto__;
var G__66000 = cljs.core.count(c__5548__auto__);
var G__66001 = (0);
seq__65696 = G__65998;
chunk__65697 = G__65999;
count__65698 = G__66000;
i__65699 = G__66001;
continue;
} else {
var vec__65709 = cljs.core.first(seq__65696__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65709,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65709,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__66002 = cljs.core.next(seq__65696__$1);
var G__66003 = null;
var G__66004 = (0);
var G__66005 = (0);
seq__65696 = G__66002;
chunk__65697 = G__66003;
count__65698 = G__66004;
i__65699 = G__66005;
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
var seq__65712 = cljs.core.seq(styles);
var chunk__65713 = null;
var count__65714 = (0);
var i__65715 = (0);
while(true){
if((i__65715 < count__65714)){
var vec__65722 = chunk__65713.cljs$core$IIndexed$_nth$arity$2(null,i__65715);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65722,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65722,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__66006 = seq__65712;
var G__66007 = chunk__65713;
var G__66008 = count__65714;
var G__66009 = (i__65715 + (1));
seq__65712 = G__66006;
chunk__65713 = G__66007;
count__65714 = G__66008;
i__65715 = G__66009;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65712);
if(temp__5825__auto__){
var seq__65712__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65712__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65712__$1);
var G__66010 = cljs.core.chunk_rest(seq__65712__$1);
var G__66011 = c__5548__auto__;
var G__66012 = cljs.core.count(c__5548__auto__);
var G__66013 = (0);
seq__65712 = G__66010;
chunk__65713 = G__66011;
count__65714 = G__66012;
i__65715 = G__66013;
continue;
} else {
var vec__65725 = cljs.core.first(seq__65712__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65725,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65725,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__66014 = cljs.core.next(seq__65712__$1);
var G__66015 = null;
var G__66016 = (0);
var G__66017 = (0);
seq__65712 = G__66014;
chunk__65713 = G__66015;
count__65714 = G__66016;
i__65715 = G__66017;
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
var G__65728_66018 = key;
var G__65728_66019__$1 = (((G__65728_66018 instanceof cljs.core.Keyword))?G__65728_66018.fqn:null);
switch (G__65728_66019__$1) {
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
var ks_66021 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_66021,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_66021,"aria-");
}
})())){
el.setAttribute(ks_66021,value);
} else {
(el[ks_66021] = value);
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

var G__65736 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__65736,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__65736;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__65747){
var vec__65748 = p__65747;
var seq__65749 = cljs.core.seq(vec__65748);
var first__65750 = cljs.core.first(seq__65749);
var seq__65749__$1 = cljs.core.next(seq__65749);
var nn = first__65750;
var first__65750__$1 = cljs.core.first(seq__65749__$1);
var seq__65749__$2 = cljs.core.next(seq__65749__$1);
var np = first__65750__$1;
var nc = seq__65749__$2;
var node = vec__65748;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65752 = nn;
var G__65753 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65752,G__65753) : create_fn.call(null,G__65752,G__65753));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65756 = nn;
var G__65757 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65756,G__65757) : create_fn.call(null,G__65756,G__65757));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__65760 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65760,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65760,(1),null);
var seq__65763_66023 = cljs.core.seq(node_children);
var chunk__65764_66024 = null;
var count__65765_66025 = (0);
var i__65766_66026 = (0);
while(true){
if((i__65766_66026 < count__65765_66025)){
var child_struct_66027 = chunk__65764_66024.cljs$core$IIndexed$_nth$arity$2(null,i__65766_66026);
var children_66028 = shadow.dom.dom_node(child_struct_66027);
if(cljs.core.seq_QMARK_(children_66028)){
var seq__65785_66029 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66028));
var chunk__65787_66030 = null;
var count__65788_66031 = (0);
var i__65789_66032 = (0);
while(true){
if((i__65789_66032 < count__65788_66031)){
var child_66033 = chunk__65787_66030.cljs$core$IIndexed$_nth$arity$2(null,i__65789_66032);
if(cljs.core.truth_(child_66033)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66033);


var G__66034 = seq__65785_66029;
var G__66035 = chunk__65787_66030;
var G__66036 = count__65788_66031;
var G__66037 = (i__65789_66032 + (1));
seq__65785_66029 = G__66034;
chunk__65787_66030 = G__66035;
count__65788_66031 = G__66036;
i__65789_66032 = G__66037;
continue;
} else {
var G__66038 = seq__65785_66029;
var G__66039 = chunk__65787_66030;
var G__66040 = count__65788_66031;
var G__66041 = (i__65789_66032 + (1));
seq__65785_66029 = G__66038;
chunk__65787_66030 = G__66039;
count__65788_66031 = G__66040;
i__65789_66032 = G__66041;
continue;
}
} else {
var temp__5825__auto___66042 = cljs.core.seq(seq__65785_66029);
if(temp__5825__auto___66042){
var seq__65785_66043__$1 = temp__5825__auto___66042;
if(cljs.core.chunked_seq_QMARK_(seq__65785_66043__$1)){
var c__5548__auto___66044 = cljs.core.chunk_first(seq__65785_66043__$1);
var G__66045 = cljs.core.chunk_rest(seq__65785_66043__$1);
var G__66046 = c__5548__auto___66044;
var G__66047 = cljs.core.count(c__5548__auto___66044);
var G__66048 = (0);
seq__65785_66029 = G__66045;
chunk__65787_66030 = G__66046;
count__65788_66031 = G__66047;
i__65789_66032 = G__66048;
continue;
} else {
var child_66049 = cljs.core.first(seq__65785_66043__$1);
if(cljs.core.truth_(child_66049)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66049);


var G__66050 = cljs.core.next(seq__65785_66043__$1);
var G__66051 = null;
var G__66052 = (0);
var G__66053 = (0);
seq__65785_66029 = G__66050;
chunk__65787_66030 = G__66051;
count__65788_66031 = G__66052;
i__65789_66032 = G__66053;
continue;
} else {
var G__66054 = cljs.core.next(seq__65785_66043__$1);
var G__66055 = null;
var G__66056 = (0);
var G__66057 = (0);
seq__65785_66029 = G__66054;
chunk__65787_66030 = G__66055;
count__65788_66031 = G__66056;
i__65789_66032 = G__66057;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66028);
}


var G__66058 = seq__65763_66023;
var G__66059 = chunk__65764_66024;
var G__66060 = count__65765_66025;
var G__66061 = (i__65766_66026 + (1));
seq__65763_66023 = G__66058;
chunk__65764_66024 = G__66059;
count__65765_66025 = G__66060;
i__65766_66026 = G__66061;
continue;
} else {
var temp__5825__auto___66062 = cljs.core.seq(seq__65763_66023);
if(temp__5825__auto___66062){
var seq__65763_66063__$1 = temp__5825__auto___66062;
if(cljs.core.chunked_seq_QMARK_(seq__65763_66063__$1)){
var c__5548__auto___66064 = cljs.core.chunk_first(seq__65763_66063__$1);
var G__66065 = cljs.core.chunk_rest(seq__65763_66063__$1);
var G__66066 = c__5548__auto___66064;
var G__66067 = cljs.core.count(c__5548__auto___66064);
var G__66068 = (0);
seq__65763_66023 = G__66065;
chunk__65764_66024 = G__66066;
count__65765_66025 = G__66067;
i__65766_66026 = G__66068;
continue;
} else {
var child_struct_66069 = cljs.core.first(seq__65763_66063__$1);
var children_66070 = shadow.dom.dom_node(child_struct_66069);
if(cljs.core.seq_QMARK_(children_66070)){
var seq__65795_66071 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66070));
var chunk__65797_66072 = null;
var count__65798_66073 = (0);
var i__65799_66074 = (0);
while(true){
if((i__65799_66074 < count__65798_66073)){
var child_66075 = chunk__65797_66072.cljs$core$IIndexed$_nth$arity$2(null,i__65799_66074);
if(cljs.core.truth_(child_66075)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66075);


var G__66076 = seq__65795_66071;
var G__66077 = chunk__65797_66072;
var G__66078 = count__65798_66073;
var G__66079 = (i__65799_66074 + (1));
seq__65795_66071 = G__66076;
chunk__65797_66072 = G__66077;
count__65798_66073 = G__66078;
i__65799_66074 = G__66079;
continue;
} else {
var G__66080 = seq__65795_66071;
var G__66081 = chunk__65797_66072;
var G__66082 = count__65798_66073;
var G__66083 = (i__65799_66074 + (1));
seq__65795_66071 = G__66080;
chunk__65797_66072 = G__66081;
count__65798_66073 = G__66082;
i__65799_66074 = G__66083;
continue;
}
} else {
var temp__5825__auto___66084__$1 = cljs.core.seq(seq__65795_66071);
if(temp__5825__auto___66084__$1){
var seq__65795_66085__$1 = temp__5825__auto___66084__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65795_66085__$1)){
var c__5548__auto___66086 = cljs.core.chunk_first(seq__65795_66085__$1);
var G__66087 = cljs.core.chunk_rest(seq__65795_66085__$1);
var G__66088 = c__5548__auto___66086;
var G__66089 = cljs.core.count(c__5548__auto___66086);
var G__66090 = (0);
seq__65795_66071 = G__66087;
chunk__65797_66072 = G__66088;
count__65798_66073 = G__66089;
i__65799_66074 = G__66090;
continue;
} else {
var child_66091 = cljs.core.first(seq__65795_66085__$1);
if(cljs.core.truth_(child_66091)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66091);


var G__66092 = cljs.core.next(seq__65795_66085__$1);
var G__66093 = null;
var G__66094 = (0);
var G__66095 = (0);
seq__65795_66071 = G__66092;
chunk__65797_66072 = G__66093;
count__65798_66073 = G__66094;
i__65799_66074 = G__66095;
continue;
} else {
var G__66096 = cljs.core.next(seq__65795_66085__$1);
var G__66097 = null;
var G__66098 = (0);
var G__66099 = (0);
seq__65795_66071 = G__66096;
chunk__65797_66072 = G__66097;
count__65798_66073 = G__66098;
i__65799_66074 = G__66099;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66070);
}


var G__66100 = cljs.core.next(seq__65763_66063__$1);
var G__66101 = null;
var G__66102 = (0);
var G__66103 = (0);
seq__65763_66023 = G__66100;
chunk__65764_66024 = G__66101;
count__65765_66025 = G__66102;
i__65766_66026 = G__66103;
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
var seq__65809 = cljs.core.seq(node);
var chunk__65810 = null;
var count__65811 = (0);
var i__65812 = (0);
while(true){
if((i__65812 < count__65811)){
var n = chunk__65810.cljs$core$IIndexed$_nth$arity$2(null,i__65812);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66104 = seq__65809;
var G__66105 = chunk__65810;
var G__66106 = count__65811;
var G__66107 = (i__65812 + (1));
seq__65809 = G__66104;
chunk__65810 = G__66105;
count__65811 = G__66106;
i__65812 = G__66107;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65809);
if(temp__5825__auto__){
var seq__65809__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65809__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65809__$1);
var G__66108 = cljs.core.chunk_rest(seq__65809__$1);
var G__66109 = c__5548__auto__;
var G__66110 = cljs.core.count(c__5548__auto__);
var G__66111 = (0);
seq__65809 = G__66108;
chunk__65810 = G__66109;
count__65811 = G__66110;
i__65812 = G__66111;
continue;
} else {
var n = cljs.core.first(seq__65809__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66112 = cljs.core.next(seq__65809__$1);
var G__66113 = null;
var G__66114 = (0);
var G__66115 = (0);
seq__65809 = G__66112;
chunk__65810 = G__66113;
count__65811 = G__66114;
i__65812 = G__66115;
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
var G__65816 = arguments.length;
switch (G__65816) {
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
var G__65820 = arguments.length;
switch (G__65820) {
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
var G__65823 = arguments.length;
switch (G__65823) {
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
var len__5749__auto___66119 = arguments.length;
var i__5750__auto___66120 = (0);
while(true){
if((i__5750__auto___66120 < len__5749__auto___66119)){
args__5755__auto__.push((arguments[i__5750__auto___66120]));

var G__66121 = (i__5750__auto___66120 + (1));
i__5750__auto___66120 = G__66121;
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
var seq__65831_66122 = cljs.core.seq(nodes);
var chunk__65832_66123 = null;
var count__65833_66124 = (0);
var i__65834_66125 = (0);
while(true){
if((i__65834_66125 < count__65833_66124)){
var node_66126 = chunk__65832_66123.cljs$core$IIndexed$_nth$arity$2(null,i__65834_66125);
fragment.appendChild(shadow.dom._to_dom(node_66126));


var G__66127 = seq__65831_66122;
var G__66128 = chunk__65832_66123;
var G__66129 = count__65833_66124;
var G__66130 = (i__65834_66125 + (1));
seq__65831_66122 = G__66127;
chunk__65832_66123 = G__66128;
count__65833_66124 = G__66129;
i__65834_66125 = G__66130;
continue;
} else {
var temp__5825__auto___66131 = cljs.core.seq(seq__65831_66122);
if(temp__5825__auto___66131){
var seq__65831_66132__$1 = temp__5825__auto___66131;
if(cljs.core.chunked_seq_QMARK_(seq__65831_66132__$1)){
var c__5548__auto___66133 = cljs.core.chunk_first(seq__65831_66132__$1);
var G__66134 = cljs.core.chunk_rest(seq__65831_66132__$1);
var G__66135 = c__5548__auto___66133;
var G__66136 = cljs.core.count(c__5548__auto___66133);
var G__66137 = (0);
seq__65831_66122 = G__66134;
chunk__65832_66123 = G__66135;
count__65833_66124 = G__66136;
i__65834_66125 = G__66137;
continue;
} else {
var node_66138 = cljs.core.first(seq__65831_66132__$1);
fragment.appendChild(shadow.dom._to_dom(node_66138));


var G__66139 = cljs.core.next(seq__65831_66132__$1);
var G__66140 = null;
var G__66141 = (0);
var G__66142 = (0);
seq__65831_66122 = G__66139;
chunk__65832_66123 = G__66140;
count__65833_66124 = G__66141;
i__65834_66125 = G__66142;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq65830){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65830));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65837_66143 = cljs.core.seq(scripts);
var chunk__65838_66144 = null;
var count__65839_66145 = (0);
var i__65840_66146 = (0);
while(true){
if((i__65840_66146 < count__65839_66145)){
var vec__65847_66147 = chunk__65838_66144.cljs$core$IIndexed$_nth$arity$2(null,i__65840_66146);
var script_tag_66148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65847_66147,(0),null);
var script_body_66149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65847_66147,(1),null);
eval(script_body_66149);


var G__66150 = seq__65837_66143;
var G__66151 = chunk__65838_66144;
var G__66152 = count__65839_66145;
var G__66153 = (i__65840_66146 + (1));
seq__65837_66143 = G__66150;
chunk__65838_66144 = G__66151;
count__65839_66145 = G__66152;
i__65840_66146 = G__66153;
continue;
} else {
var temp__5825__auto___66154 = cljs.core.seq(seq__65837_66143);
if(temp__5825__auto___66154){
var seq__65837_66155__$1 = temp__5825__auto___66154;
if(cljs.core.chunked_seq_QMARK_(seq__65837_66155__$1)){
var c__5548__auto___66156 = cljs.core.chunk_first(seq__65837_66155__$1);
var G__66157 = cljs.core.chunk_rest(seq__65837_66155__$1);
var G__66158 = c__5548__auto___66156;
var G__66159 = cljs.core.count(c__5548__auto___66156);
var G__66160 = (0);
seq__65837_66143 = G__66157;
chunk__65838_66144 = G__66158;
count__65839_66145 = G__66159;
i__65840_66146 = G__66160;
continue;
} else {
var vec__65850_66161 = cljs.core.first(seq__65837_66155__$1);
var script_tag_66162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65850_66161,(0),null);
var script_body_66163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65850_66161,(1),null);
eval(script_body_66163);


var G__66164 = cljs.core.next(seq__65837_66155__$1);
var G__66165 = null;
var G__66166 = (0);
var G__66167 = (0);
seq__65837_66143 = G__66164;
chunk__65838_66144 = G__66165;
count__65839_66145 = G__66166;
i__65840_66146 = G__66167;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__65853){
var vec__65854 = p__65853;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65854,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65854,(1),null);
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
var G__65862 = arguments.length;
switch (G__65862) {
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
var seq__65867 = cljs.core.seq(style_keys);
var chunk__65868 = null;
var count__65869 = (0);
var i__65870 = (0);
while(true){
if((i__65870 < count__65869)){
var it = chunk__65868.cljs$core$IIndexed$_nth$arity$2(null,i__65870);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66169 = seq__65867;
var G__66170 = chunk__65868;
var G__66171 = count__65869;
var G__66172 = (i__65870 + (1));
seq__65867 = G__66169;
chunk__65868 = G__66170;
count__65869 = G__66171;
i__65870 = G__66172;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65867);
if(temp__5825__auto__){
var seq__65867__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65867__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65867__$1);
var G__66173 = cljs.core.chunk_rest(seq__65867__$1);
var G__66174 = c__5548__auto__;
var G__66175 = cljs.core.count(c__5548__auto__);
var G__66176 = (0);
seq__65867 = G__66173;
chunk__65868 = G__66174;
count__65869 = G__66175;
i__65870 = G__66176;
continue;
} else {
var it = cljs.core.first(seq__65867__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66177 = cljs.core.next(seq__65867__$1);
var G__66178 = null;
var G__66179 = (0);
var G__66180 = (0);
seq__65867 = G__66177;
chunk__65868 = G__66178;
count__65869 = G__66179;
i__65870 = G__66180;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65872,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65876 = k65872;
var G__65876__$1 = (((G__65876 instanceof cljs.core.Keyword))?G__65876.fqn:null);
switch (G__65876__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65872,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65877){
var vec__65878 = p__65877;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65878,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65878,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65871){
var self__ = this;
var G__65871__$1 = this;
return (new cljs.core.RecordIter((0),G__65871__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65873,other65874){
var self__ = this;
var this65873__$1 = this;
return (((!((other65874 == null)))) && ((((this65873__$1.constructor === other65874.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65873__$1.x,other65874.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65873__$1.y,other65874.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65873__$1.__extmap,other65874.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65872){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65881 = k65872;
var G__65881__$1 = (((G__65881 instanceof cljs.core.Keyword))?G__65881.fqn:null);
switch (G__65881__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65872);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65871){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65882 = cljs.core.keyword_identical_QMARK_;
var expr__65883 = k__5332__auto__;
if(cljs.core.truth_((pred__65882.cljs$core$IFn$_invoke$arity$2 ? pred__65882.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__65883) : pred__65882.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__65883)))){
return (new shadow.dom.Coordinate(G__65871,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65882.cljs$core$IFn$_invoke$arity$2 ? pred__65882.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__65883) : pred__65882.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__65883)))){
return (new shadow.dom.Coordinate(self__.x,G__65871,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65871),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65871){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__65871,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__65875){
var extmap__5365__auto__ = (function (){var G__65890 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65875,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65875)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65890);
} else {
return G__65890;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__65875),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__65875),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65892,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65896 = k65892;
var G__65896__$1 = (((G__65896 instanceof cljs.core.Keyword))?G__65896.fqn:null);
switch (G__65896__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65892,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65897){
var vec__65898 = p__65897;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65898,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65898,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65891){
var self__ = this;
var G__65891__$1 = this;
return (new cljs.core.RecordIter((0),G__65891__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65893,other65894){
var self__ = this;
var this65893__$1 = this;
return (((!((other65894 == null)))) && ((((this65893__$1.constructor === other65894.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65893__$1.w,other65894.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65893__$1.h,other65894.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65893__$1.__extmap,other65894.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65892){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65901 = k65892;
var G__65901__$1 = (((G__65901 instanceof cljs.core.Keyword))?G__65901.fqn:null);
switch (G__65901__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65892);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65891){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65902 = cljs.core.keyword_identical_QMARK_;
var expr__65903 = k__5332__auto__;
if(cljs.core.truth_((pred__65902.cljs$core$IFn$_invoke$arity$2 ? pred__65902.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__65903) : pred__65902.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__65903)))){
return (new shadow.dom.Size(G__65891,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65902.cljs$core$IFn$_invoke$arity$2 ? pred__65902.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__65903) : pred__65902.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__65903)))){
return (new shadow.dom.Size(self__.w,G__65891,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65891),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65891){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65891,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65895){
var extmap__5365__auto__ = (function (){var G__65905 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65895,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65895)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65905);
} else {
return G__65905;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65895),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65895),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__66185 = (i + (1));
var G__66186 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__66185;
ret = G__66186;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65910){
var vec__65911 = p__65910;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65911,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65911,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65915 = arguments.length;
switch (G__65915) {
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
var G__66188 = ps;
var G__66189 = (i + (1));
el__$1 = G__66188;
i = G__66189;
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
var vec__65916 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65916,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65916,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65916,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65919_66190 = cljs.core.seq(props);
var chunk__65920_66191 = null;
var count__65921_66192 = (0);
var i__65922_66193 = (0);
while(true){
if((i__65922_66193 < count__65921_66192)){
var vec__65929_66194 = chunk__65920_66191.cljs$core$IIndexed$_nth$arity$2(null,i__65922_66193);
var k_66195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65929_66194,(0),null);
var v_66196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65929_66194,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_66195);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66195),v_66196);


var G__66197 = seq__65919_66190;
var G__66198 = chunk__65920_66191;
var G__66199 = count__65921_66192;
var G__66200 = (i__65922_66193 + (1));
seq__65919_66190 = G__66197;
chunk__65920_66191 = G__66198;
count__65921_66192 = G__66199;
i__65922_66193 = G__66200;
continue;
} else {
var temp__5825__auto___66201 = cljs.core.seq(seq__65919_66190);
if(temp__5825__auto___66201){
var seq__65919_66202__$1 = temp__5825__auto___66201;
if(cljs.core.chunked_seq_QMARK_(seq__65919_66202__$1)){
var c__5548__auto___66203 = cljs.core.chunk_first(seq__65919_66202__$1);
var G__66204 = cljs.core.chunk_rest(seq__65919_66202__$1);
var G__66205 = c__5548__auto___66203;
var G__66206 = cljs.core.count(c__5548__auto___66203);
var G__66207 = (0);
seq__65919_66190 = G__66204;
chunk__65920_66191 = G__66205;
count__65921_66192 = G__66206;
i__65922_66193 = G__66207;
continue;
} else {
var vec__65932_66208 = cljs.core.first(seq__65919_66202__$1);
var k_66209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65932_66208,(0),null);
var v_66210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65932_66208,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_66209);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66209),v_66210);


var G__66211 = cljs.core.next(seq__65919_66202__$1);
var G__66212 = null;
var G__66213 = (0);
var G__66214 = (0);
seq__65919_66190 = G__66211;
chunk__65920_66191 = G__66212;
count__65921_66192 = G__66213;
i__65922_66193 = G__66214;
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
var vec__65936 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65936,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65936,(1),null);
var seq__65939_66215 = cljs.core.seq(node_children);
var chunk__65941_66216 = null;
var count__65942_66217 = (0);
var i__65943_66218 = (0);
while(true){
if((i__65943_66218 < count__65942_66217)){
var child_struct_66219 = chunk__65941_66216.cljs$core$IIndexed$_nth$arity$2(null,i__65943_66218);
if((!((child_struct_66219 == null)))){
if(typeof child_struct_66219 === 'string'){
var text_66220 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66220),child_struct_66219].join(''));
} else {
var children_66221 = shadow.dom.svg_node(child_struct_66219);
if(cljs.core.seq_QMARK_(children_66221)){
var seq__65957_66222 = cljs.core.seq(children_66221);
var chunk__65959_66223 = null;
var count__65960_66224 = (0);
var i__65961_66225 = (0);
while(true){
if((i__65961_66225 < count__65960_66224)){
var child_66226 = chunk__65959_66223.cljs$core$IIndexed$_nth$arity$2(null,i__65961_66225);
if(cljs.core.truth_(child_66226)){
node.appendChild(child_66226);


var G__66227 = seq__65957_66222;
var G__66228 = chunk__65959_66223;
var G__66229 = count__65960_66224;
var G__66230 = (i__65961_66225 + (1));
seq__65957_66222 = G__66227;
chunk__65959_66223 = G__66228;
count__65960_66224 = G__66229;
i__65961_66225 = G__66230;
continue;
} else {
var G__66231 = seq__65957_66222;
var G__66232 = chunk__65959_66223;
var G__66233 = count__65960_66224;
var G__66234 = (i__65961_66225 + (1));
seq__65957_66222 = G__66231;
chunk__65959_66223 = G__66232;
count__65960_66224 = G__66233;
i__65961_66225 = G__66234;
continue;
}
} else {
var temp__5825__auto___66235 = cljs.core.seq(seq__65957_66222);
if(temp__5825__auto___66235){
var seq__65957_66236__$1 = temp__5825__auto___66235;
if(cljs.core.chunked_seq_QMARK_(seq__65957_66236__$1)){
var c__5548__auto___66237 = cljs.core.chunk_first(seq__65957_66236__$1);
var G__66238 = cljs.core.chunk_rest(seq__65957_66236__$1);
var G__66239 = c__5548__auto___66237;
var G__66240 = cljs.core.count(c__5548__auto___66237);
var G__66241 = (0);
seq__65957_66222 = G__66238;
chunk__65959_66223 = G__66239;
count__65960_66224 = G__66240;
i__65961_66225 = G__66241;
continue;
} else {
var child_66242 = cljs.core.first(seq__65957_66236__$1);
if(cljs.core.truth_(child_66242)){
node.appendChild(child_66242);


var G__66243 = cljs.core.next(seq__65957_66236__$1);
var G__66244 = null;
var G__66245 = (0);
var G__66246 = (0);
seq__65957_66222 = G__66243;
chunk__65959_66223 = G__66244;
count__65960_66224 = G__66245;
i__65961_66225 = G__66246;
continue;
} else {
var G__66247 = cljs.core.next(seq__65957_66236__$1);
var G__66248 = null;
var G__66249 = (0);
var G__66250 = (0);
seq__65957_66222 = G__66247;
chunk__65959_66223 = G__66248;
count__65960_66224 = G__66249;
i__65961_66225 = G__66250;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66221);
}
}


var G__66251 = seq__65939_66215;
var G__66252 = chunk__65941_66216;
var G__66253 = count__65942_66217;
var G__66254 = (i__65943_66218 + (1));
seq__65939_66215 = G__66251;
chunk__65941_66216 = G__66252;
count__65942_66217 = G__66253;
i__65943_66218 = G__66254;
continue;
} else {
var G__66255 = seq__65939_66215;
var G__66256 = chunk__65941_66216;
var G__66257 = count__65942_66217;
var G__66258 = (i__65943_66218 + (1));
seq__65939_66215 = G__66255;
chunk__65941_66216 = G__66256;
count__65942_66217 = G__66257;
i__65943_66218 = G__66258;
continue;
}
} else {
var temp__5825__auto___66259 = cljs.core.seq(seq__65939_66215);
if(temp__5825__auto___66259){
var seq__65939_66260__$1 = temp__5825__auto___66259;
if(cljs.core.chunked_seq_QMARK_(seq__65939_66260__$1)){
var c__5548__auto___66261 = cljs.core.chunk_first(seq__65939_66260__$1);
var G__66262 = cljs.core.chunk_rest(seq__65939_66260__$1);
var G__66263 = c__5548__auto___66261;
var G__66264 = cljs.core.count(c__5548__auto___66261);
var G__66265 = (0);
seq__65939_66215 = G__66262;
chunk__65941_66216 = G__66263;
count__65942_66217 = G__66264;
i__65943_66218 = G__66265;
continue;
} else {
var child_struct_66266 = cljs.core.first(seq__65939_66260__$1);
if((!((child_struct_66266 == null)))){
if(typeof child_struct_66266 === 'string'){
var text_66267 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66267),child_struct_66266].join(''));
} else {
var children_66268 = shadow.dom.svg_node(child_struct_66266);
if(cljs.core.seq_QMARK_(children_66268)){
var seq__65963_66269 = cljs.core.seq(children_66268);
var chunk__65965_66270 = null;
var count__65966_66271 = (0);
var i__65967_66272 = (0);
while(true){
if((i__65967_66272 < count__65966_66271)){
var child_66273 = chunk__65965_66270.cljs$core$IIndexed$_nth$arity$2(null,i__65967_66272);
if(cljs.core.truth_(child_66273)){
node.appendChild(child_66273);


var G__66274 = seq__65963_66269;
var G__66275 = chunk__65965_66270;
var G__66276 = count__65966_66271;
var G__66277 = (i__65967_66272 + (1));
seq__65963_66269 = G__66274;
chunk__65965_66270 = G__66275;
count__65966_66271 = G__66276;
i__65967_66272 = G__66277;
continue;
} else {
var G__66278 = seq__65963_66269;
var G__66279 = chunk__65965_66270;
var G__66280 = count__65966_66271;
var G__66281 = (i__65967_66272 + (1));
seq__65963_66269 = G__66278;
chunk__65965_66270 = G__66279;
count__65966_66271 = G__66280;
i__65967_66272 = G__66281;
continue;
}
} else {
var temp__5825__auto___66282__$1 = cljs.core.seq(seq__65963_66269);
if(temp__5825__auto___66282__$1){
var seq__65963_66283__$1 = temp__5825__auto___66282__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65963_66283__$1)){
var c__5548__auto___66284 = cljs.core.chunk_first(seq__65963_66283__$1);
var G__66285 = cljs.core.chunk_rest(seq__65963_66283__$1);
var G__66286 = c__5548__auto___66284;
var G__66287 = cljs.core.count(c__5548__auto___66284);
var G__66288 = (0);
seq__65963_66269 = G__66285;
chunk__65965_66270 = G__66286;
count__65966_66271 = G__66287;
i__65967_66272 = G__66288;
continue;
} else {
var child_66289 = cljs.core.first(seq__65963_66283__$1);
if(cljs.core.truth_(child_66289)){
node.appendChild(child_66289);


var G__66290 = cljs.core.next(seq__65963_66283__$1);
var G__66291 = null;
var G__66292 = (0);
var G__66293 = (0);
seq__65963_66269 = G__66290;
chunk__65965_66270 = G__66291;
count__65966_66271 = G__66292;
i__65967_66272 = G__66293;
continue;
} else {
var G__66294 = cljs.core.next(seq__65963_66283__$1);
var G__66295 = null;
var G__66296 = (0);
var G__66297 = (0);
seq__65963_66269 = G__66294;
chunk__65965_66270 = G__66295;
count__65966_66271 = G__66296;
i__65967_66272 = G__66297;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66268);
}
}


var G__66298 = cljs.core.next(seq__65939_66260__$1);
var G__66299 = null;
var G__66300 = (0);
var G__66301 = (0);
seq__65939_66215 = G__66298;
chunk__65941_66216 = G__66299;
count__65942_66217 = G__66300;
i__65943_66218 = G__66301;
continue;
} else {
var G__66302 = cljs.core.next(seq__65939_66260__$1);
var G__66303 = null;
var G__66304 = (0);
var G__66305 = (0);
seq__65939_66215 = G__66302;
chunk__65941_66216 = G__66303;
count__65942_66217 = G__66304;
i__65943_66218 = G__66305;
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
var len__5749__auto___66306 = arguments.length;
var i__5750__auto___66307 = (0);
while(true){
if((i__5750__auto___66307 < len__5749__auto___66306)){
args__5755__auto__.push((arguments[i__5750__auto___66307]));

var G__66308 = (i__5750__auto___66307 + (1));
i__5750__auto___66307 = G__66308;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq65969){
var G__65970 = cljs.core.first(seq65969);
var seq65969__$1 = cljs.core.next(seq65969);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65970,seq65969__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
