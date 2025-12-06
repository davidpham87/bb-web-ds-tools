goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_65974 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_65974(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_65975 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_65975(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__65586 = coll;
var G__65587 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__65586,G__65587) : shadow.dom.lazy_native_coll_seq.call(null,G__65586,G__65587));
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
var G__65600 = arguments.length;
switch (G__65600) {
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
var G__65602 = arguments.length;
switch (G__65602) {
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
var G__65608 = arguments.length;
switch (G__65608) {
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
var G__65611 = arguments.length;
switch (G__65611) {
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
var G__65613 = arguments.length;
switch (G__65613) {
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
var G__65618 = arguments.length;
switch (G__65618) {
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
}catch (e65620){if((e65620 instanceof Object)){
var e = e65620;
return console.log("didnt support attachEvent",el,e);
} else {
throw e65620;

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
var seq__65621 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__65622 = null;
var count__65623 = (0);
var i__65624 = (0);
while(true){
if((i__65624 < count__65623)){
var el = chunk__65622.cljs$core$IIndexed$_nth$arity$2(null,i__65624);
var handler_65982__$1 = ((function (seq__65621,chunk__65622,count__65623,i__65624,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65621,chunk__65622,count__65623,i__65624,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65982__$1);


var G__65983 = seq__65621;
var G__65984 = chunk__65622;
var G__65985 = count__65623;
var G__65986 = (i__65624 + (1));
seq__65621 = G__65983;
chunk__65622 = G__65984;
count__65623 = G__65985;
i__65624 = G__65986;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65621);
if(temp__5825__auto__){
var seq__65621__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65621__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65621__$1);
var G__65987 = cljs.core.chunk_rest(seq__65621__$1);
var G__65988 = c__5548__auto__;
var G__65989 = cljs.core.count(c__5548__auto__);
var G__65990 = (0);
seq__65621 = G__65987;
chunk__65622 = G__65988;
count__65623 = G__65989;
i__65624 = G__65990;
continue;
} else {
var el = cljs.core.first(seq__65621__$1);
var handler_65991__$1 = ((function (seq__65621,chunk__65622,count__65623,i__65624,el,seq__65621__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65621,chunk__65622,count__65623,i__65624,el,seq__65621__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65991__$1);


var G__65992 = cljs.core.next(seq__65621__$1);
var G__65993 = null;
var G__65994 = (0);
var G__65995 = (0);
seq__65621 = G__65992;
chunk__65622 = G__65993;
count__65623 = G__65994;
i__65624 = G__65995;
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
var G__65633 = arguments.length;
switch (G__65633) {
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
var seq__65637 = cljs.core.seq(events);
var chunk__65638 = null;
var count__65639 = (0);
var i__65640 = (0);
while(true){
if((i__65640 < count__65639)){
var vec__65647 = chunk__65638.cljs$core$IIndexed$_nth$arity$2(null,i__65640);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65647,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65647,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65997 = seq__65637;
var G__65998 = chunk__65638;
var G__65999 = count__65639;
var G__66000 = (i__65640 + (1));
seq__65637 = G__65997;
chunk__65638 = G__65998;
count__65639 = G__65999;
i__65640 = G__66000;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65637);
if(temp__5825__auto__){
var seq__65637__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65637__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65637__$1);
var G__66001 = cljs.core.chunk_rest(seq__65637__$1);
var G__66002 = c__5548__auto__;
var G__66003 = cljs.core.count(c__5548__auto__);
var G__66004 = (0);
seq__65637 = G__66001;
chunk__65638 = G__66002;
count__65639 = G__66003;
i__65640 = G__66004;
continue;
} else {
var vec__65651 = cljs.core.first(seq__65637__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65651,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65651,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__66005 = cljs.core.next(seq__65637__$1);
var G__66006 = null;
var G__66007 = (0);
var G__66008 = (0);
seq__65637 = G__66005;
chunk__65638 = G__66006;
count__65639 = G__66007;
i__65640 = G__66008;
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
var seq__65665 = cljs.core.seq(styles);
var chunk__65666 = null;
var count__65667 = (0);
var i__65668 = (0);
while(true){
if((i__65668 < count__65667)){
var vec__65689 = chunk__65666.cljs$core$IIndexed$_nth$arity$2(null,i__65668);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65689,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65689,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__66009 = seq__65665;
var G__66010 = chunk__65666;
var G__66011 = count__65667;
var G__66012 = (i__65668 + (1));
seq__65665 = G__66009;
chunk__65666 = G__66010;
count__65667 = G__66011;
i__65668 = G__66012;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65665);
if(temp__5825__auto__){
var seq__65665__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65665__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65665__$1);
var G__66013 = cljs.core.chunk_rest(seq__65665__$1);
var G__66014 = c__5548__auto__;
var G__66015 = cljs.core.count(c__5548__auto__);
var G__66016 = (0);
seq__65665 = G__66013;
chunk__65666 = G__66014;
count__65667 = G__66015;
i__65668 = G__66016;
continue;
} else {
var vec__65711 = cljs.core.first(seq__65665__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65711,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65711,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__66017 = cljs.core.next(seq__65665__$1);
var G__66018 = null;
var G__66019 = (0);
var G__66020 = (0);
seq__65665 = G__66017;
chunk__65666 = G__66018;
count__65667 = G__66019;
i__65668 = G__66020;
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
var G__65727_66021 = key;
var G__65727_66022__$1 = (((G__65727_66021 instanceof cljs.core.Keyword))?G__65727_66021.fqn:null);
switch (G__65727_66022__$1) {
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
var ks_66024 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_66024,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_66024,"aria-");
}
})())){
el.setAttribute(ks_66024,value);
} else {
(el[ks_66024] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__65732){
var map__65733 = p__65732;
var map__65733__$1 = cljs.core.__destructure_map(map__65733);
var props = map__65733__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65733__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__65734 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65734,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65734,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65734,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__65737 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__65737,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__65737;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__65741 = arguments.length;
switch (G__65741) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65751 = nn;
var G__65752 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65751,G__65752) : create_fn.call(null,G__65751,G__65752));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65753 = nn;
var G__65754 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65753,G__65754) : create_fn.call(null,G__65753,G__65754));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__65755 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65755,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65755,(1),null);
var seq__65758_66026 = cljs.core.seq(node_children);
var chunk__65759_66027 = null;
var count__65760_66028 = (0);
var i__65761_66029 = (0);
while(true){
if((i__65761_66029 < count__65760_66028)){
var child_struct_66030 = chunk__65759_66027.cljs$core$IIndexed$_nth$arity$2(null,i__65761_66029);
var children_66031 = shadow.dom.dom_node(child_struct_66030);
if(cljs.core.seq_QMARK_(children_66031)){
var seq__65782_66032 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66031));
var chunk__65784_66033 = null;
var count__65785_66034 = (0);
var i__65786_66035 = (0);
while(true){
if((i__65786_66035 < count__65785_66034)){
var child_66036 = chunk__65784_66033.cljs$core$IIndexed$_nth$arity$2(null,i__65786_66035);
if(cljs.core.truth_(child_66036)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66036);


var G__66037 = seq__65782_66032;
var G__66038 = chunk__65784_66033;
var G__66039 = count__65785_66034;
var G__66040 = (i__65786_66035 + (1));
seq__65782_66032 = G__66037;
chunk__65784_66033 = G__66038;
count__65785_66034 = G__66039;
i__65786_66035 = G__66040;
continue;
} else {
var G__66041 = seq__65782_66032;
var G__66042 = chunk__65784_66033;
var G__66043 = count__65785_66034;
var G__66044 = (i__65786_66035 + (1));
seq__65782_66032 = G__66041;
chunk__65784_66033 = G__66042;
count__65785_66034 = G__66043;
i__65786_66035 = G__66044;
continue;
}
} else {
var temp__5825__auto___66045 = cljs.core.seq(seq__65782_66032);
if(temp__5825__auto___66045){
var seq__65782_66046__$1 = temp__5825__auto___66045;
if(cljs.core.chunked_seq_QMARK_(seq__65782_66046__$1)){
var c__5548__auto___66047 = cljs.core.chunk_first(seq__65782_66046__$1);
var G__66048 = cljs.core.chunk_rest(seq__65782_66046__$1);
var G__66049 = c__5548__auto___66047;
var G__66050 = cljs.core.count(c__5548__auto___66047);
var G__66051 = (0);
seq__65782_66032 = G__66048;
chunk__65784_66033 = G__66049;
count__65785_66034 = G__66050;
i__65786_66035 = G__66051;
continue;
} else {
var child_66052 = cljs.core.first(seq__65782_66046__$1);
if(cljs.core.truth_(child_66052)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66052);


var G__66053 = cljs.core.next(seq__65782_66046__$1);
var G__66054 = null;
var G__66055 = (0);
var G__66056 = (0);
seq__65782_66032 = G__66053;
chunk__65784_66033 = G__66054;
count__65785_66034 = G__66055;
i__65786_66035 = G__66056;
continue;
} else {
var G__66057 = cljs.core.next(seq__65782_66046__$1);
var G__66058 = null;
var G__66059 = (0);
var G__66060 = (0);
seq__65782_66032 = G__66057;
chunk__65784_66033 = G__66058;
count__65785_66034 = G__66059;
i__65786_66035 = G__66060;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66031);
}


var G__66061 = seq__65758_66026;
var G__66062 = chunk__65759_66027;
var G__66063 = count__65760_66028;
var G__66064 = (i__65761_66029 + (1));
seq__65758_66026 = G__66061;
chunk__65759_66027 = G__66062;
count__65760_66028 = G__66063;
i__65761_66029 = G__66064;
continue;
} else {
var temp__5825__auto___66065 = cljs.core.seq(seq__65758_66026);
if(temp__5825__auto___66065){
var seq__65758_66066__$1 = temp__5825__auto___66065;
if(cljs.core.chunked_seq_QMARK_(seq__65758_66066__$1)){
var c__5548__auto___66067 = cljs.core.chunk_first(seq__65758_66066__$1);
var G__66068 = cljs.core.chunk_rest(seq__65758_66066__$1);
var G__66069 = c__5548__auto___66067;
var G__66070 = cljs.core.count(c__5548__auto___66067);
var G__66071 = (0);
seq__65758_66026 = G__66068;
chunk__65759_66027 = G__66069;
count__65760_66028 = G__66070;
i__65761_66029 = G__66071;
continue;
} else {
var child_struct_66072 = cljs.core.first(seq__65758_66066__$1);
var children_66073 = shadow.dom.dom_node(child_struct_66072);
if(cljs.core.seq_QMARK_(children_66073)){
var seq__65788_66074 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66073));
var chunk__65790_66075 = null;
var count__65791_66076 = (0);
var i__65792_66077 = (0);
while(true){
if((i__65792_66077 < count__65791_66076)){
var child_66078 = chunk__65790_66075.cljs$core$IIndexed$_nth$arity$2(null,i__65792_66077);
if(cljs.core.truth_(child_66078)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66078);


var G__66079 = seq__65788_66074;
var G__66080 = chunk__65790_66075;
var G__66081 = count__65791_66076;
var G__66082 = (i__65792_66077 + (1));
seq__65788_66074 = G__66079;
chunk__65790_66075 = G__66080;
count__65791_66076 = G__66081;
i__65792_66077 = G__66082;
continue;
} else {
var G__66083 = seq__65788_66074;
var G__66084 = chunk__65790_66075;
var G__66085 = count__65791_66076;
var G__66086 = (i__65792_66077 + (1));
seq__65788_66074 = G__66083;
chunk__65790_66075 = G__66084;
count__65791_66076 = G__66085;
i__65792_66077 = G__66086;
continue;
}
} else {
var temp__5825__auto___66087__$1 = cljs.core.seq(seq__65788_66074);
if(temp__5825__auto___66087__$1){
var seq__65788_66088__$1 = temp__5825__auto___66087__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65788_66088__$1)){
var c__5548__auto___66089 = cljs.core.chunk_first(seq__65788_66088__$1);
var G__66090 = cljs.core.chunk_rest(seq__65788_66088__$1);
var G__66091 = c__5548__auto___66089;
var G__66092 = cljs.core.count(c__5548__auto___66089);
var G__66093 = (0);
seq__65788_66074 = G__66090;
chunk__65790_66075 = G__66091;
count__65791_66076 = G__66092;
i__65792_66077 = G__66093;
continue;
} else {
var child_66094 = cljs.core.first(seq__65788_66088__$1);
if(cljs.core.truth_(child_66094)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66094);


var G__66095 = cljs.core.next(seq__65788_66088__$1);
var G__66096 = null;
var G__66097 = (0);
var G__66098 = (0);
seq__65788_66074 = G__66095;
chunk__65790_66075 = G__66096;
count__65791_66076 = G__66097;
i__65792_66077 = G__66098;
continue;
} else {
var G__66099 = cljs.core.next(seq__65788_66088__$1);
var G__66100 = null;
var G__66101 = (0);
var G__66102 = (0);
seq__65788_66074 = G__66099;
chunk__65790_66075 = G__66100;
count__65791_66076 = G__66101;
i__65792_66077 = G__66102;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66073);
}


var G__66103 = cljs.core.next(seq__65758_66066__$1);
var G__66104 = null;
var G__66105 = (0);
var G__66106 = (0);
seq__65758_66026 = G__66103;
chunk__65759_66027 = G__66104;
count__65760_66028 = G__66105;
i__65761_66029 = G__66106;
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
var seq__65801 = cljs.core.seq(node);
var chunk__65802 = null;
var count__65803 = (0);
var i__65804 = (0);
while(true){
if((i__65804 < count__65803)){
var n = chunk__65802.cljs$core$IIndexed$_nth$arity$2(null,i__65804);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66107 = seq__65801;
var G__66108 = chunk__65802;
var G__66109 = count__65803;
var G__66110 = (i__65804 + (1));
seq__65801 = G__66107;
chunk__65802 = G__66108;
count__65803 = G__66109;
i__65804 = G__66110;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65801);
if(temp__5825__auto__){
var seq__65801__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65801__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65801__$1);
var G__66111 = cljs.core.chunk_rest(seq__65801__$1);
var G__66112 = c__5548__auto__;
var G__66113 = cljs.core.count(c__5548__auto__);
var G__66114 = (0);
seq__65801 = G__66111;
chunk__65802 = G__66112;
count__65803 = G__66113;
i__65804 = G__66114;
continue;
} else {
var n = cljs.core.first(seq__65801__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66115 = cljs.core.next(seq__65801__$1);
var G__66116 = null;
var G__66117 = (0);
var G__66118 = (0);
seq__65801 = G__66115;
chunk__65802 = G__66116;
count__65803 = G__66117;
i__65804 = G__66118;
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
var G__65813 = arguments.length;
switch (G__65813) {
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
var G__65817 = arguments.length;
switch (G__65817) {
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
var G__65821 = arguments.length;
switch (G__65821) {
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
var len__5749__auto___66122 = arguments.length;
var i__5750__auto___66123 = (0);
while(true){
if((i__5750__auto___66123 < len__5749__auto___66122)){
args__5755__auto__.push((arguments[i__5750__auto___66123]));

var G__66124 = (i__5750__auto___66123 + (1));
i__5750__auto___66123 = G__66124;
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
var seq__65823_66125 = cljs.core.seq(nodes);
var chunk__65824_66126 = null;
var count__65825_66127 = (0);
var i__65826_66128 = (0);
while(true){
if((i__65826_66128 < count__65825_66127)){
var node_66129 = chunk__65824_66126.cljs$core$IIndexed$_nth$arity$2(null,i__65826_66128);
fragment.appendChild(shadow.dom._to_dom(node_66129));


var G__66130 = seq__65823_66125;
var G__66131 = chunk__65824_66126;
var G__66132 = count__65825_66127;
var G__66133 = (i__65826_66128 + (1));
seq__65823_66125 = G__66130;
chunk__65824_66126 = G__66131;
count__65825_66127 = G__66132;
i__65826_66128 = G__66133;
continue;
} else {
var temp__5825__auto___66134 = cljs.core.seq(seq__65823_66125);
if(temp__5825__auto___66134){
var seq__65823_66135__$1 = temp__5825__auto___66134;
if(cljs.core.chunked_seq_QMARK_(seq__65823_66135__$1)){
var c__5548__auto___66136 = cljs.core.chunk_first(seq__65823_66135__$1);
var G__66137 = cljs.core.chunk_rest(seq__65823_66135__$1);
var G__66138 = c__5548__auto___66136;
var G__66139 = cljs.core.count(c__5548__auto___66136);
var G__66140 = (0);
seq__65823_66125 = G__66137;
chunk__65824_66126 = G__66138;
count__65825_66127 = G__66139;
i__65826_66128 = G__66140;
continue;
} else {
var node_66141 = cljs.core.first(seq__65823_66135__$1);
fragment.appendChild(shadow.dom._to_dom(node_66141));


var G__66142 = cljs.core.next(seq__65823_66135__$1);
var G__66143 = null;
var G__66144 = (0);
var G__66145 = (0);
seq__65823_66125 = G__66142;
chunk__65824_66126 = G__66143;
count__65825_66127 = G__66144;
i__65826_66128 = G__66145;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq65822){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65822));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65830_66146 = cljs.core.seq(scripts);
var chunk__65831_66147 = null;
var count__65832_66148 = (0);
var i__65833_66149 = (0);
while(true){
if((i__65833_66149 < count__65832_66148)){
var vec__65841_66150 = chunk__65831_66147.cljs$core$IIndexed$_nth$arity$2(null,i__65833_66149);
var script_tag_66151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65841_66150,(0),null);
var script_body_66152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65841_66150,(1),null);
eval(script_body_66152);


var G__66153 = seq__65830_66146;
var G__66154 = chunk__65831_66147;
var G__66155 = count__65832_66148;
var G__66156 = (i__65833_66149 + (1));
seq__65830_66146 = G__66153;
chunk__65831_66147 = G__66154;
count__65832_66148 = G__66155;
i__65833_66149 = G__66156;
continue;
} else {
var temp__5825__auto___66157 = cljs.core.seq(seq__65830_66146);
if(temp__5825__auto___66157){
var seq__65830_66158__$1 = temp__5825__auto___66157;
if(cljs.core.chunked_seq_QMARK_(seq__65830_66158__$1)){
var c__5548__auto___66159 = cljs.core.chunk_first(seq__65830_66158__$1);
var G__66160 = cljs.core.chunk_rest(seq__65830_66158__$1);
var G__66161 = c__5548__auto___66159;
var G__66162 = cljs.core.count(c__5548__auto___66159);
var G__66163 = (0);
seq__65830_66146 = G__66160;
chunk__65831_66147 = G__66161;
count__65832_66148 = G__66162;
i__65833_66149 = G__66163;
continue;
} else {
var vec__65844_66164 = cljs.core.first(seq__65830_66158__$1);
var script_tag_66165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65844_66164,(0),null);
var script_body_66166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65844_66164,(1),null);
eval(script_body_66166);


var G__66167 = cljs.core.next(seq__65830_66158__$1);
var G__66168 = null;
var G__66169 = (0);
var G__66170 = (0);
seq__65830_66146 = G__66167;
chunk__65831_66147 = G__66168;
count__65832_66148 = G__66169;
i__65833_66149 = G__66170;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__65847){
var vec__65848 = p__65847;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65848,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65848,(1),null);
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
var G__65856 = arguments.length;
switch (G__65856) {
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


var G__66172 = seq__65860;
var G__66173 = chunk__65861;
var G__66174 = count__65862;
var G__66175 = (i__65863 + (1));
seq__65860 = G__66172;
chunk__65861 = G__66173;
count__65862 = G__66174;
i__65863 = G__66175;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65860);
if(temp__5825__auto__){
var seq__65860__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65860__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65860__$1);
var G__66176 = cljs.core.chunk_rest(seq__65860__$1);
var G__66177 = c__5548__auto__;
var G__66178 = cljs.core.count(c__5548__auto__);
var G__66179 = (0);
seq__65860 = G__66176;
chunk__65861 = G__66177;
count__65862 = G__66178;
i__65863 = G__66179;
continue;
} else {
var it = cljs.core.first(seq__65860__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66180 = cljs.core.next(seq__65860__$1);
var G__66181 = null;
var G__66182 = (0);
var G__66183 = (0);
seq__65860 = G__66180;
chunk__65861 = G__66181;
count__65862 = G__66182;
i__65863 = G__66183;
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
var G__65870 = k65865;
var G__65870__$1 = (((G__65870 instanceof cljs.core.Keyword))?G__65870.fqn:null);
switch (G__65870__$1) {
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65872){
var vec__65873 = p__65872;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65873,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65873,(1),null);
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
var G__65880 = k65865;
var G__65880__$1 = (((G__65880 instanceof cljs.core.Keyword))?G__65880.fqn:null);
switch (G__65880__$1) {
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
var pred__65881 = cljs.core.keyword_identical_QMARK_;
var expr__65882 = k__5332__auto__;
if(cljs.core.truth_((pred__65881.cljs$core$IFn$_invoke$arity$2 ? pred__65881.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__65882) : pred__65881.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__65882)))){
return (new shadow.dom.Coordinate(G__65864,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65881.cljs$core$IFn$_invoke$arity$2 ? pred__65881.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__65882) : pred__65881.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__65882)))){
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
var extmap__5365__auto__ = (function (){var G__65888 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65868,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65868)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65888);
} else {
return G__65888;
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65890,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65894 = k65890;
var G__65894__$1 = (((G__65894 instanceof cljs.core.Keyword))?G__65894.fqn:null);
switch (G__65894__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65890,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65895){
var vec__65896 = p__65895;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65896,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65896,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65889){
var self__ = this;
var G__65889__$1 = this;
return (new cljs.core.RecordIter((0),G__65889__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65891,other65892){
var self__ = this;
var this65891__$1 = this;
return (((!((other65892 == null)))) && ((((this65891__$1.constructor === other65892.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65891__$1.w,other65892.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65891__$1.h,other65892.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65891__$1.__extmap,other65892.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65890){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65904 = k65890;
var G__65904__$1 = (((G__65904 instanceof cljs.core.Keyword))?G__65904.fqn:null);
switch (G__65904__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65890);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65889){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65905 = cljs.core.keyword_identical_QMARK_;
var expr__65906 = k__5332__auto__;
if(cljs.core.truth_((pred__65905.cljs$core$IFn$_invoke$arity$2 ? pred__65905.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__65906) : pred__65905.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__65906)))){
return (new shadow.dom.Size(G__65889,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65905.cljs$core$IFn$_invoke$arity$2 ? pred__65905.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__65906) : pred__65905.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__65906)))){
return (new shadow.dom.Size(self__.w,G__65889,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65889),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65889){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65889,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65893){
var extmap__5365__auto__ = (function (){var G__65908 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65893,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65893)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65908);
} else {
return G__65908;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65893),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65893),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__66188 = (i + (1));
var G__66189 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__66188;
ret = G__66189;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65913){
var vec__65914 = p__65913;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65914,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65914,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65918 = arguments.length;
switch (G__65918) {
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
var G__66191 = ps;
var G__66192 = (i + (1));
el__$1 = G__66191;
i = G__66192;
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
var vec__65919 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65919,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65919,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65919,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65922_66193 = cljs.core.seq(props);
var chunk__65923_66194 = null;
var count__65924_66195 = (0);
var i__65925_66196 = (0);
while(true){
if((i__65925_66196 < count__65924_66195)){
var vec__65932_66197 = chunk__65923_66194.cljs$core$IIndexed$_nth$arity$2(null,i__65925_66196);
var k_66198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65932_66197,(0),null);
var v_66199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65932_66197,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_66198);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66198),v_66199);


var G__66200 = seq__65922_66193;
var G__66201 = chunk__65923_66194;
var G__66202 = count__65924_66195;
var G__66203 = (i__65925_66196 + (1));
seq__65922_66193 = G__66200;
chunk__65923_66194 = G__66201;
count__65924_66195 = G__66202;
i__65925_66196 = G__66203;
continue;
} else {
var temp__5825__auto___66204 = cljs.core.seq(seq__65922_66193);
if(temp__5825__auto___66204){
var seq__65922_66205__$1 = temp__5825__auto___66204;
if(cljs.core.chunked_seq_QMARK_(seq__65922_66205__$1)){
var c__5548__auto___66206 = cljs.core.chunk_first(seq__65922_66205__$1);
var G__66207 = cljs.core.chunk_rest(seq__65922_66205__$1);
var G__66208 = c__5548__auto___66206;
var G__66209 = cljs.core.count(c__5548__auto___66206);
var G__66210 = (0);
seq__65922_66193 = G__66207;
chunk__65923_66194 = G__66208;
count__65924_66195 = G__66209;
i__65925_66196 = G__66210;
continue;
} else {
var vec__65935_66211 = cljs.core.first(seq__65922_66205__$1);
var k_66212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65935_66211,(0),null);
var v_66213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65935_66211,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_66212);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66212),v_66213);


var G__66214 = cljs.core.next(seq__65922_66205__$1);
var G__66215 = null;
var G__66216 = (0);
var G__66217 = (0);
seq__65922_66193 = G__66214;
chunk__65923_66194 = G__66215;
count__65924_66195 = G__66216;
i__65925_66196 = G__66217;
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
var vec__65939 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65939,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65939,(1),null);
var seq__65942_66218 = cljs.core.seq(node_children);
var chunk__65944_66219 = null;
var count__65945_66220 = (0);
var i__65946_66221 = (0);
while(true){
if((i__65946_66221 < count__65945_66220)){
var child_struct_66222 = chunk__65944_66219.cljs$core$IIndexed$_nth$arity$2(null,i__65946_66221);
if((!((child_struct_66222 == null)))){
if(typeof child_struct_66222 === 'string'){
var text_66223 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66223),child_struct_66222].join(''));
} else {
var children_66224 = shadow.dom.svg_node(child_struct_66222);
if(cljs.core.seq_QMARK_(children_66224)){
var seq__65960_66225 = cljs.core.seq(children_66224);
var chunk__65962_66226 = null;
var count__65963_66227 = (0);
var i__65964_66228 = (0);
while(true){
if((i__65964_66228 < count__65963_66227)){
var child_66229 = chunk__65962_66226.cljs$core$IIndexed$_nth$arity$2(null,i__65964_66228);
if(cljs.core.truth_(child_66229)){
node.appendChild(child_66229);


var G__66230 = seq__65960_66225;
var G__66231 = chunk__65962_66226;
var G__66232 = count__65963_66227;
var G__66233 = (i__65964_66228 + (1));
seq__65960_66225 = G__66230;
chunk__65962_66226 = G__66231;
count__65963_66227 = G__66232;
i__65964_66228 = G__66233;
continue;
} else {
var G__66234 = seq__65960_66225;
var G__66235 = chunk__65962_66226;
var G__66236 = count__65963_66227;
var G__66237 = (i__65964_66228 + (1));
seq__65960_66225 = G__66234;
chunk__65962_66226 = G__66235;
count__65963_66227 = G__66236;
i__65964_66228 = G__66237;
continue;
}
} else {
var temp__5825__auto___66238 = cljs.core.seq(seq__65960_66225);
if(temp__5825__auto___66238){
var seq__65960_66239__$1 = temp__5825__auto___66238;
if(cljs.core.chunked_seq_QMARK_(seq__65960_66239__$1)){
var c__5548__auto___66240 = cljs.core.chunk_first(seq__65960_66239__$1);
var G__66241 = cljs.core.chunk_rest(seq__65960_66239__$1);
var G__66242 = c__5548__auto___66240;
var G__66243 = cljs.core.count(c__5548__auto___66240);
var G__66244 = (0);
seq__65960_66225 = G__66241;
chunk__65962_66226 = G__66242;
count__65963_66227 = G__66243;
i__65964_66228 = G__66244;
continue;
} else {
var child_66245 = cljs.core.first(seq__65960_66239__$1);
if(cljs.core.truth_(child_66245)){
node.appendChild(child_66245);


var G__66246 = cljs.core.next(seq__65960_66239__$1);
var G__66247 = null;
var G__66248 = (0);
var G__66249 = (0);
seq__65960_66225 = G__66246;
chunk__65962_66226 = G__66247;
count__65963_66227 = G__66248;
i__65964_66228 = G__66249;
continue;
} else {
var G__66250 = cljs.core.next(seq__65960_66239__$1);
var G__66251 = null;
var G__66252 = (0);
var G__66253 = (0);
seq__65960_66225 = G__66250;
chunk__65962_66226 = G__66251;
count__65963_66227 = G__66252;
i__65964_66228 = G__66253;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66224);
}
}


var G__66254 = seq__65942_66218;
var G__66255 = chunk__65944_66219;
var G__66256 = count__65945_66220;
var G__66257 = (i__65946_66221 + (1));
seq__65942_66218 = G__66254;
chunk__65944_66219 = G__66255;
count__65945_66220 = G__66256;
i__65946_66221 = G__66257;
continue;
} else {
var G__66258 = seq__65942_66218;
var G__66259 = chunk__65944_66219;
var G__66260 = count__65945_66220;
var G__66261 = (i__65946_66221 + (1));
seq__65942_66218 = G__66258;
chunk__65944_66219 = G__66259;
count__65945_66220 = G__66260;
i__65946_66221 = G__66261;
continue;
}
} else {
var temp__5825__auto___66262 = cljs.core.seq(seq__65942_66218);
if(temp__5825__auto___66262){
var seq__65942_66263__$1 = temp__5825__auto___66262;
if(cljs.core.chunked_seq_QMARK_(seq__65942_66263__$1)){
var c__5548__auto___66264 = cljs.core.chunk_first(seq__65942_66263__$1);
var G__66265 = cljs.core.chunk_rest(seq__65942_66263__$1);
var G__66266 = c__5548__auto___66264;
var G__66267 = cljs.core.count(c__5548__auto___66264);
var G__66268 = (0);
seq__65942_66218 = G__66265;
chunk__65944_66219 = G__66266;
count__65945_66220 = G__66267;
i__65946_66221 = G__66268;
continue;
} else {
var child_struct_66269 = cljs.core.first(seq__65942_66263__$1);
if((!((child_struct_66269 == null)))){
if(typeof child_struct_66269 === 'string'){
var text_66270 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66270),child_struct_66269].join(''));
} else {
var children_66271 = shadow.dom.svg_node(child_struct_66269);
if(cljs.core.seq_QMARK_(children_66271)){
var seq__65966_66272 = cljs.core.seq(children_66271);
var chunk__65968_66273 = null;
var count__65969_66274 = (0);
var i__65970_66275 = (0);
while(true){
if((i__65970_66275 < count__65969_66274)){
var child_66276 = chunk__65968_66273.cljs$core$IIndexed$_nth$arity$2(null,i__65970_66275);
if(cljs.core.truth_(child_66276)){
node.appendChild(child_66276);


var G__66277 = seq__65966_66272;
var G__66278 = chunk__65968_66273;
var G__66279 = count__65969_66274;
var G__66280 = (i__65970_66275 + (1));
seq__65966_66272 = G__66277;
chunk__65968_66273 = G__66278;
count__65969_66274 = G__66279;
i__65970_66275 = G__66280;
continue;
} else {
var G__66281 = seq__65966_66272;
var G__66282 = chunk__65968_66273;
var G__66283 = count__65969_66274;
var G__66284 = (i__65970_66275 + (1));
seq__65966_66272 = G__66281;
chunk__65968_66273 = G__66282;
count__65969_66274 = G__66283;
i__65970_66275 = G__66284;
continue;
}
} else {
var temp__5825__auto___66285__$1 = cljs.core.seq(seq__65966_66272);
if(temp__5825__auto___66285__$1){
var seq__65966_66286__$1 = temp__5825__auto___66285__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65966_66286__$1)){
var c__5548__auto___66287 = cljs.core.chunk_first(seq__65966_66286__$1);
var G__66288 = cljs.core.chunk_rest(seq__65966_66286__$1);
var G__66289 = c__5548__auto___66287;
var G__66290 = cljs.core.count(c__5548__auto___66287);
var G__66291 = (0);
seq__65966_66272 = G__66288;
chunk__65968_66273 = G__66289;
count__65969_66274 = G__66290;
i__65970_66275 = G__66291;
continue;
} else {
var child_66292 = cljs.core.first(seq__65966_66286__$1);
if(cljs.core.truth_(child_66292)){
node.appendChild(child_66292);


var G__66293 = cljs.core.next(seq__65966_66286__$1);
var G__66294 = null;
var G__66295 = (0);
var G__66296 = (0);
seq__65966_66272 = G__66293;
chunk__65968_66273 = G__66294;
count__65969_66274 = G__66295;
i__65970_66275 = G__66296;
continue;
} else {
var G__66297 = cljs.core.next(seq__65966_66286__$1);
var G__66298 = null;
var G__66299 = (0);
var G__66300 = (0);
seq__65966_66272 = G__66297;
chunk__65968_66273 = G__66298;
count__65969_66274 = G__66299;
i__65970_66275 = G__66300;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66271);
}
}


var G__66301 = cljs.core.next(seq__65942_66263__$1);
var G__66302 = null;
var G__66303 = (0);
var G__66304 = (0);
seq__65942_66218 = G__66301;
chunk__65944_66219 = G__66302;
count__65945_66220 = G__66303;
i__65946_66221 = G__66304;
continue;
} else {
var G__66305 = cljs.core.next(seq__65942_66263__$1);
var G__66306 = null;
var G__66307 = (0);
var G__66308 = (0);
seq__65942_66218 = G__66305;
chunk__65944_66219 = G__66306;
count__65945_66220 = G__66307;
i__65946_66221 = G__66308;
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
var len__5749__auto___66309 = arguments.length;
var i__5750__auto___66310 = (0);
while(true){
if((i__5750__auto___66310 < len__5749__auto___66309)){
args__5755__auto__.push((arguments[i__5750__auto___66310]));

var G__66311 = (i__5750__auto___66310 + (1));
i__5750__auto___66310 = G__66311;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq65972){
var G__65973 = cljs.core.first(seq65972);
var seq65972__$1 = cljs.core.next(seq65972);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65973,seq65972__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
