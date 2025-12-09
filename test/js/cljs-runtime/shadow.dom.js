goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_68933 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_68933(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_68936 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_68936(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__68550 = coll;
var G__68551 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__68550,G__68551) : shadow.dom.lazy_native_coll_seq.call(null,G__68550,G__68551));
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
var G__68562 = arguments.length;
switch (G__68562) {
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
var G__68569 = arguments.length;
switch (G__68569) {
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
var G__68572 = arguments.length;
switch (G__68572) {
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
var G__68578 = arguments.length;
switch (G__68578) {
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
var G__68580 = arguments.length;
switch (G__68580) {
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
var G__68586 = arguments.length;
switch (G__68586) {
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
}catch (e68588){if((e68588 instanceof Object)){
var e = e68588;
return console.log("didnt support attachEvent",el,e);
} else {
throw e68588;

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
var seq__68593 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__68594 = null;
var count__68595 = (0);
var i__68596 = (0);
while(true){
if((i__68596 < count__68595)){
var el = chunk__68594.cljs$core$IIndexed$_nth$arity$2(null,i__68596);
var handler_68948__$1 = ((function (seq__68593,chunk__68594,count__68595,i__68596,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__68593,chunk__68594,count__68595,i__68596,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_68948__$1);


var G__68949 = seq__68593;
var G__68950 = chunk__68594;
var G__68951 = count__68595;
var G__68952 = (i__68596 + (1));
seq__68593 = G__68949;
chunk__68594 = G__68950;
count__68595 = G__68951;
i__68596 = G__68952;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68593);
if(temp__5825__auto__){
var seq__68593__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68593__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68593__$1);
var G__68953 = cljs.core.chunk_rest(seq__68593__$1);
var G__68954 = c__5548__auto__;
var G__68955 = cljs.core.count(c__5548__auto__);
var G__68956 = (0);
seq__68593 = G__68953;
chunk__68594 = G__68954;
count__68595 = G__68955;
i__68596 = G__68956;
continue;
} else {
var el = cljs.core.first(seq__68593__$1);
var handler_68957__$1 = ((function (seq__68593,chunk__68594,count__68595,i__68596,el,seq__68593__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__68593,chunk__68594,count__68595,i__68596,el,seq__68593__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_68957__$1);


var G__68958 = cljs.core.next(seq__68593__$1);
var G__68959 = null;
var G__68960 = (0);
var G__68961 = (0);
seq__68593 = G__68958;
chunk__68594 = G__68959;
count__68595 = G__68960;
i__68596 = G__68961;
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
var G__68609 = arguments.length;
switch (G__68609) {
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
var seq__68615 = cljs.core.seq(events);
var chunk__68616 = null;
var count__68617 = (0);
var i__68618 = (0);
while(true){
if((i__68618 < count__68617)){
var vec__68628 = chunk__68616.cljs$core$IIndexed$_nth$arity$2(null,i__68618);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68628,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68628,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__68963 = seq__68615;
var G__68964 = chunk__68616;
var G__68965 = count__68617;
var G__68966 = (i__68618 + (1));
seq__68615 = G__68963;
chunk__68616 = G__68964;
count__68617 = G__68965;
i__68618 = G__68966;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68615);
if(temp__5825__auto__){
var seq__68615__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68615__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68615__$1);
var G__68967 = cljs.core.chunk_rest(seq__68615__$1);
var G__68968 = c__5548__auto__;
var G__68969 = cljs.core.count(c__5548__auto__);
var G__68970 = (0);
seq__68615 = G__68967;
chunk__68616 = G__68968;
count__68617 = G__68969;
i__68618 = G__68970;
continue;
} else {
var vec__68636 = cljs.core.first(seq__68615__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68636,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68636,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__68971 = cljs.core.next(seq__68615__$1);
var G__68972 = null;
var G__68973 = (0);
var G__68974 = (0);
seq__68615 = G__68971;
chunk__68616 = G__68972;
count__68617 = G__68973;
i__68618 = G__68974;
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
var seq__68640 = cljs.core.seq(styles);
var chunk__68641 = null;
var count__68642 = (0);
var i__68643 = (0);
while(true){
if((i__68643 < count__68642)){
var vec__68655 = chunk__68641.cljs$core$IIndexed$_nth$arity$2(null,i__68643);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68655,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68655,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__68977 = seq__68640;
var G__68978 = chunk__68641;
var G__68979 = count__68642;
var G__68980 = (i__68643 + (1));
seq__68640 = G__68977;
chunk__68641 = G__68978;
count__68642 = G__68979;
i__68643 = G__68980;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68640);
if(temp__5825__auto__){
var seq__68640__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68640__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68640__$1);
var G__68981 = cljs.core.chunk_rest(seq__68640__$1);
var G__68982 = c__5548__auto__;
var G__68983 = cljs.core.count(c__5548__auto__);
var G__68984 = (0);
seq__68640 = G__68981;
chunk__68641 = G__68982;
count__68642 = G__68983;
i__68643 = G__68984;
continue;
} else {
var vec__68660 = cljs.core.first(seq__68640__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68660,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68660,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__68985 = cljs.core.next(seq__68640__$1);
var G__68986 = null;
var G__68987 = (0);
var G__68988 = (0);
seq__68640 = G__68985;
chunk__68641 = G__68986;
count__68642 = G__68987;
i__68643 = G__68988;
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
var G__68664_68989 = key;
var G__68664_68990__$1 = (((G__68664_68989 instanceof cljs.core.Keyword))?G__68664_68989.fqn:null);
switch (G__68664_68990__$1) {
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
var ks_68992 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_68992,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_68992,"aria-");
}
})())){
el.setAttribute(ks_68992,value);
} else {
(el[ks_68992] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__68673){
var map__68674 = p__68673;
var map__68674__$1 = cljs.core.__destructure_map(map__68674);
var props = map__68674__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68674__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__68675 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68675,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68675,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68675,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__68678 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__68678,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__68678;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__68680 = arguments.length;
switch (G__68680) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__68692){
var vec__68694 = p__68692;
var seq__68695 = cljs.core.seq(vec__68694);
var first__68696 = cljs.core.first(seq__68695);
var seq__68695__$1 = cljs.core.next(seq__68695);
var nn = first__68696;
var first__68696__$1 = cljs.core.first(seq__68695__$1);
var seq__68695__$2 = cljs.core.next(seq__68695__$1);
var np = first__68696__$1;
var nc = seq__68695__$2;
var node = vec__68694;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__68698 = nn;
var G__68699 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__68698,G__68699) : create_fn.call(null,G__68698,G__68699));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__68702 = nn;
var G__68703 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__68702,G__68703) : create_fn.call(null,G__68702,G__68703));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__68707 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68707,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68707,(1),null);
var seq__68711_68994 = cljs.core.seq(node_children);
var chunk__68712_68995 = null;
var count__68713_68996 = (0);
var i__68714_68997 = (0);
while(true){
if((i__68714_68997 < count__68713_68996)){
var child_struct_68998 = chunk__68712_68995.cljs$core$IIndexed$_nth$arity$2(null,i__68714_68997);
var children_68999 = shadow.dom.dom_node(child_struct_68998);
if(cljs.core.seq_QMARK_(children_68999)){
var seq__68741_69000 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_68999));
var chunk__68743_69001 = null;
var count__68744_69002 = (0);
var i__68745_69003 = (0);
while(true){
if((i__68745_69003 < count__68744_69002)){
var child_69004 = chunk__68743_69001.cljs$core$IIndexed$_nth$arity$2(null,i__68745_69003);
if(cljs.core.truth_(child_69004)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69004);


var G__69005 = seq__68741_69000;
var G__69006 = chunk__68743_69001;
var G__69007 = count__68744_69002;
var G__69008 = (i__68745_69003 + (1));
seq__68741_69000 = G__69005;
chunk__68743_69001 = G__69006;
count__68744_69002 = G__69007;
i__68745_69003 = G__69008;
continue;
} else {
var G__69009 = seq__68741_69000;
var G__69010 = chunk__68743_69001;
var G__69011 = count__68744_69002;
var G__69012 = (i__68745_69003 + (1));
seq__68741_69000 = G__69009;
chunk__68743_69001 = G__69010;
count__68744_69002 = G__69011;
i__68745_69003 = G__69012;
continue;
}
} else {
var temp__5825__auto___69013 = cljs.core.seq(seq__68741_69000);
if(temp__5825__auto___69013){
var seq__68741_69014__$1 = temp__5825__auto___69013;
if(cljs.core.chunked_seq_QMARK_(seq__68741_69014__$1)){
var c__5548__auto___69015 = cljs.core.chunk_first(seq__68741_69014__$1);
var G__69016 = cljs.core.chunk_rest(seq__68741_69014__$1);
var G__69017 = c__5548__auto___69015;
var G__69018 = cljs.core.count(c__5548__auto___69015);
var G__69019 = (0);
seq__68741_69000 = G__69016;
chunk__68743_69001 = G__69017;
count__68744_69002 = G__69018;
i__68745_69003 = G__69019;
continue;
} else {
var child_69020 = cljs.core.first(seq__68741_69014__$1);
if(cljs.core.truth_(child_69020)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69020);


var G__69021 = cljs.core.next(seq__68741_69014__$1);
var G__69022 = null;
var G__69023 = (0);
var G__69024 = (0);
seq__68741_69000 = G__69021;
chunk__68743_69001 = G__69022;
count__68744_69002 = G__69023;
i__68745_69003 = G__69024;
continue;
} else {
var G__69025 = cljs.core.next(seq__68741_69014__$1);
var G__69026 = null;
var G__69027 = (0);
var G__69028 = (0);
seq__68741_69000 = G__69025;
chunk__68743_69001 = G__69026;
count__68744_69002 = G__69027;
i__68745_69003 = G__69028;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_68999);
}


var G__69029 = seq__68711_68994;
var G__69030 = chunk__68712_68995;
var G__69031 = count__68713_68996;
var G__69032 = (i__68714_68997 + (1));
seq__68711_68994 = G__69029;
chunk__68712_68995 = G__69030;
count__68713_68996 = G__69031;
i__68714_68997 = G__69032;
continue;
} else {
var temp__5825__auto___69033 = cljs.core.seq(seq__68711_68994);
if(temp__5825__auto___69033){
var seq__68711_69034__$1 = temp__5825__auto___69033;
if(cljs.core.chunked_seq_QMARK_(seq__68711_69034__$1)){
var c__5548__auto___69035 = cljs.core.chunk_first(seq__68711_69034__$1);
var G__69036 = cljs.core.chunk_rest(seq__68711_69034__$1);
var G__69037 = c__5548__auto___69035;
var G__69038 = cljs.core.count(c__5548__auto___69035);
var G__69039 = (0);
seq__68711_68994 = G__69036;
chunk__68712_68995 = G__69037;
count__68713_68996 = G__69038;
i__68714_68997 = G__69039;
continue;
} else {
var child_struct_69040 = cljs.core.first(seq__68711_69034__$1);
var children_69041 = shadow.dom.dom_node(child_struct_69040);
if(cljs.core.seq_QMARK_(children_69041)){
var seq__68750_69042 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_69041));
var chunk__68752_69043 = null;
var count__68753_69044 = (0);
var i__68754_69045 = (0);
while(true){
if((i__68754_69045 < count__68753_69044)){
var child_69046 = chunk__68752_69043.cljs$core$IIndexed$_nth$arity$2(null,i__68754_69045);
if(cljs.core.truth_(child_69046)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69046);


var G__69047 = seq__68750_69042;
var G__69048 = chunk__68752_69043;
var G__69050 = count__68753_69044;
var G__69051 = (i__68754_69045 + (1));
seq__68750_69042 = G__69047;
chunk__68752_69043 = G__69048;
count__68753_69044 = G__69050;
i__68754_69045 = G__69051;
continue;
} else {
var G__69052 = seq__68750_69042;
var G__69053 = chunk__68752_69043;
var G__69054 = count__68753_69044;
var G__69055 = (i__68754_69045 + (1));
seq__68750_69042 = G__69052;
chunk__68752_69043 = G__69053;
count__68753_69044 = G__69054;
i__68754_69045 = G__69055;
continue;
}
} else {
var temp__5825__auto___69056__$1 = cljs.core.seq(seq__68750_69042);
if(temp__5825__auto___69056__$1){
var seq__68750_69057__$1 = temp__5825__auto___69056__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68750_69057__$1)){
var c__5548__auto___69058 = cljs.core.chunk_first(seq__68750_69057__$1);
var G__69060 = cljs.core.chunk_rest(seq__68750_69057__$1);
var G__69061 = c__5548__auto___69058;
var G__69062 = cljs.core.count(c__5548__auto___69058);
var G__69063 = (0);
seq__68750_69042 = G__69060;
chunk__68752_69043 = G__69061;
count__68753_69044 = G__69062;
i__68754_69045 = G__69063;
continue;
} else {
var child_69064 = cljs.core.first(seq__68750_69057__$1);
if(cljs.core.truth_(child_69064)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69064);


var G__69065 = cljs.core.next(seq__68750_69057__$1);
var G__69066 = null;
var G__69067 = (0);
var G__69068 = (0);
seq__68750_69042 = G__69065;
chunk__68752_69043 = G__69066;
count__68753_69044 = G__69067;
i__68754_69045 = G__69068;
continue;
} else {
var G__69069 = cljs.core.next(seq__68750_69057__$1);
var G__69070 = null;
var G__69071 = (0);
var G__69072 = (0);
seq__68750_69042 = G__69069;
chunk__68752_69043 = G__69070;
count__68753_69044 = G__69071;
i__68754_69045 = G__69072;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_69041);
}


var G__69073 = cljs.core.next(seq__68711_69034__$1);
var G__69074 = null;
var G__69075 = (0);
var G__69076 = (0);
seq__68711_68994 = G__69073;
chunk__68712_68995 = G__69074;
count__68713_68996 = G__69075;
i__68714_68997 = G__69076;
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
var seq__68758 = cljs.core.seq(node);
var chunk__68759 = null;
var count__68760 = (0);
var i__68761 = (0);
while(true){
if((i__68761 < count__68760)){
var n = chunk__68759.cljs$core$IIndexed$_nth$arity$2(null,i__68761);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__69077 = seq__68758;
var G__69078 = chunk__68759;
var G__69079 = count__68760;
var G__69080 = (i__68761 + (1));
seq__68758 = G__69077;
chunk__68759 = G__69078;
count__68760 = G__69079;
i__68761 = G__69080;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68758);
if(temp__5825__auto__){
var seq__68758__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68758__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68758__$1);
var G__69081 = cljs.core.chunk_rest(seq__68758__$1);
var G__69082 = c__5548__auto__;
var G__69083 = cljs.core.count(c__5548__auto__);
var G__69084 = (0);
seq__68758 = G__69081;
chunk__68759 = G__69082;
count__68760 = G__69083;
i__68761 = G__69084;
continue;
} else {
var n = cljs.core.first(seq__68758__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__69085 = cljs.core.next(seq__68758__$1);
var G__69086 = null;
var G__69087 = (0);
var G__69088 = (0);
seq__68758 = G__69085;
chunk__68759 = G__69086;
count__68760 = G__69087;
i__68761 = G__69088;
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
var G__68763 = arguments.length;
switch (G__68763) {
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
var G__68765 = arguments.length;
switch (G__68765) {
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
var G__68767 = arguments.length;
switch (G__68767) {
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
var len__5749__auto___69092 = arguments.length;
var i__5750__auto___69093 = (0);
while(true){
if((i__5750__auto___69093 < len__5749__auto___69092)){
args__5755__auto__.push((arguments[i__5750__auto___69093]));

var G__69094 = (i__5750__auto___69093 + (1));
i__5750__auto___69093 = G__69094;
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
var seq__68771_69095 = cljs.core.seq(nodes);
var chunk__68772_69096 = null;
var count__68773_69097 = (0);
var i__68774_69098 = (0);
while(true){
if((i__68774_69098 < count__68773_69097)){
var node_69099 = chunk__68772_69096.cljs$core$IIndexed$_nth$arity$2(null,i__68774_69098);
fragment.appendChild(shadow.dom._to_dom(node_69099));


var G__69100 = seq__68771_69095;
var G__69101 = chunk__68772_69096;
var G__69102 = count__68773_69097;
var G__69103 = (i__68774_69098 + (1));
seq__68771_69095 = G__69100;
chunk__68772_69096 = G__69101;
count__68773_69097 = G__69102;
i__68774_69098 = G__69103;
continue;
} else {
var temp__5825__auto___69104 = cljs.core.seq(seq__68771_69095);
if(temp__5825__auto___69104){
var seq__68771_69105__$1 = temp__5825__auto___69104;
if(cljs.core.chunked_seq_QMARK_(seq__68771_69105__$1)){
var c__5548__auto___69106 = cljs.core.chunk_first(seq__68771_69105__$1);
var G__69107 = cljs.core.chunk_rest(seq__68771_69105__$1);
var G__69108 = c__5548__auto___69106;
var G__69109 = cljs.core.count(c__5548__auto___69106);
var G__69110 = (0);
seq__68771_69095 = G__69107;
chunk__68772_69096 = G__69108;
count__68773_69097 = G__69109;
i__68774_69098 = G__69110;
continue;
} else {
var node_69111 = cljs.core.first(seq__68771_69105__$1);
fragment.appendChild(shadow.dom._to_dom(node_69111));


var G__69112 = cljs.core.next(seq__68771_69105__$1);
var G__69113 = null;
var G__69114 = (0);
var G__69115 = (0);
seq__68771_69095 = G__69112;
chunk__68772_69096 = G__69113;
count__68773_69097 = G__69114;
i__68774_69098 = G__69115;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq68770){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68770));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__68775_69116 = cljs.core.seq(scripts);
var chunk__68776_69117 = null;
var count__68777_69118 = (0);
var i__68778_69119 = (0);
while(true){
if((i__68778_69119 < count__68777_69118)){
var vec__68785_69120 = chunk__68776_69117.cljs$core$IIndexed$_nth$arity$2(null,i__68778_69119);
var script_tag_69121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68785_69120,(0),null);
var script_body_69122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68785_69120,(1),null);
eval(script_body_69122);


var G__69123 = seq__68775_69116;
var G__69124 = chunk__68776_69117;
var G__69125 = count__68777_69118;
var G__69126 = (i__68778_69119 + (1));
seq__68775_69116 = G__69123;
chunk__68776_69117 = G__69124;
count__68777_69118 = G__69125;
i__68778_69119 = G__69126;
continue;
} else {
var temp__5825__auto___69127 = cljs.core.seq(seq__68775_69116);
if(temp__5825__auto___69127){
var seq__68775_69128__$1 = temp__5825__auto___69127;
if(cljs.core.chunked_seq_QMARK_(seq__68775_69128__$1)){
var c__5548__auto___69129 = cljs.core.chunk_first(seq__68775_69128__$1);
var G__69130 = cljs.core.chunk_rest(seq__68775_69128__$1);
var G__69131 = c__5548__auto___69129;
var G__69132 = cljs.core.count(c__5548__auto___69129);
var G__69133 = (0);
seq__68775_69116 = G__69130;
chunk__68776_69117 = G__69131;
count__68777_69118 = G__69132;
i__68778_69119 = G__69133;
continue;
} else {
var vec__68788_69134 = cljs.core.first(seq__68775_69128__$1);
var script_tag_69135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68788_69134,(0),null);
var script_body_69136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68788_69134,(1),null);
eval(script_body_69136);


var G__69137 = cljs.core.next(seq__68775_69128__$1);
var G__69138 = null;
var G__69139 = (0);
var G__69140 = (0);
seq__68775_69116 = G__69137;
chunk__68776_69117 = G__69138;
count__68777_69118 = G__69139;
i__68778_69119 = G__69140;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__68791){
var vec__68792 = p__68791;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68792,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68792,(1),null);
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
var G__68796 = arguments.length;
switch (G__68796) {
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
var seq__68797 = cljs.core.seq(style_keys);
var chunk__68798 = null;
var count__68799 = (0);
var i__68800 = (0);
while(true){
if((i__68800 < count__68799)){
var it = chunk__68798.cljs$core$IIndexed$_nth$arity$2(null,i__68800);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__69142 = seq__68797;
var G__69143 = chunk__68798;
var G__69144 = count__68799;
var G__69145 = (i__68800 + (1));
seq__68797 = G__69142;
chunk__68798 = G__69143;
count__68799 = G__69144;
i__68800 = G__69145;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68797);
if(temp__5825__auto__){
var seq__68797__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68797__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68797__$1);
var G__69146 = cljs.core.chunk_rest(seq__68797__$1);
var G__69147 = c__5548__auto__;
var G__69148 = cljs.core.count(c__5548__auto__);
var G__69149 = (0);
seq__68797 = G__69146;
chunk__68798 = G__69147;
count__68799 = G__69148;
i__68800 = G__69149;
continue;
} else {
var it = cljs.core.first(seq__68797__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__69150 = cljs.core.next(seq__68797__$1);
var G__69151 = null;
var G__69152 = (0);
var G__69153 = (0);
seq__68797 = G__69150;
chunk__68798 = G__69151;
count__68799 = G__69152;
i__68800 = G__69153;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k68802,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__68806 = k68802;
var G__68806__$1 = (((G__68806 instanceof cljs.core.Keyword))?G__68806.fqn:null);
switch (G__68806__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68802,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__68807){
var vec__68808 = p__68807;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68808,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68808,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68801){
var self__ = this;
var G__68801__$1 = this;
return (new cljs.core.RecordIter((0),G__68801__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68803,other68804){
var self__ = this;
var this68803__$1 = this;
return (((!((other68804 == null)))) && ((((this68803__$1.constructor === other68804.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68803__$1.x,other68804.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68803__$1.y,other68804.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68803__$1.__extmap,other68804.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k68802){
var self__ = this;
var this__5330__auto____$1 = this;
var G__68812 = k68802;
var G__68812__$1 = (((G__68812 instanceof cljs.core.Keyword))?G__68812.fqn:null);
switch (G__68812__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68802);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__68801){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__68813 = cljs.core.keyword_identical_QMARK_;
var expr__68814 = k__5332__auto__;
if(cljs.core.truth_((pred__68813.cljs$core$IFn$_invoke$arity$2 ? pred__68813.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__68814) : pred__68813.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__68814)))){
return (new shadow.dom.Coordinate(G__68801,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68813.cljs$core$IFn$_invoke$arity$2 ? pred__68813.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__68814) : pred__68813.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__68814)))){
return (new shadow.dom.Coordinate(self__.x,G__68801,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__68801),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__68801){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__68801,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__68805){
var extmap__5365__auto__ = (function (){var G__68816 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68805,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__68805)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68816);
} else {
return G__68816;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__68805),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__68805),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k68818,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__68822 = k68818;
var G__68822__$1 = (((G__68822 instanceof cljs.core.Keyword))?G__68822.fqn:null);
switch (G__68822__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68818,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__68823){
var vec__68824 = p__68823;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68824,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68824,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68817){
var self__ = this;
var G__68817__$1 = this;
return (new cljs.core.RecordIter((0),G__68817__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68819,other68820){
var self__ = this;
var this68819__$1 = this;
return (((!((other68820 == null)))) && ((((this68819__$1.constructor === other68820.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68819__$1.w,other68820.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68819__$1.h,other68820.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68819__$1.__extmap,other68820.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k68818){
var self__ = this;
var this__5330__auto____$1 = this;
var G__68827 = k68818;
var G__68827__$1 = (((G__68827 instanceof cljs.core.Keyword))?G__68827.fqn:null);
switch (G__68827__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68818);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__68817){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__68828 = cljs.core.keyword_identical_QMARK_;
var expr__68829 = k__5332__auto__;
if(cljs.core.truth_((pred__68828.cljs$core$IFn$_invoke$arity$2 ? pred__68828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__68829) : pred__68828.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__68829)))){
return (new shadow.dom.Size(G__68817,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68828.cljs$core$IFn$_invoke$arity$2 ? pred__68828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__68829) : pred__68828.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__68829)))){
return (new shadow.dom.Size(self__.w,G__68817,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__68817),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__68817){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__68817,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__68821){
var extmap__5365__auto__ = (function (){var G__68833 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68821,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__68821)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68833);
} else {
return G__68833;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__68821),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__68821),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__69166 = (i + (1));
var G__69167 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__69166;
ret = G__69167;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68838){
var vec__68839 = p__68838;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68839,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68839,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__68843 = arguments.length;
switch (G__68843) {
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
var G__69169 = ps;
var G__69170 = (i + (1));
el__$1 = G__69169;
i = G__69170;
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
var vec__68848 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68848,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68848,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68848,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__68853_69171 = cljs.core.seq(props);
var chunk__68854_69172 = null;
var count__68855_69173 = (0);
var i__68856_69174 = (0);
while(true){
if((i__68856_69174 < count__68855_69173)){
var vec__68863_69175 = chunk__68854_69172.cljs$core$IIndexed$_nth$arity$2(null,i__68856_69174);
var k_69176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68863_69175,(0),null);
var v_69177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68863_69175,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_69176);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_69176),v_69177);


var G__69178 = seq__68853_69171;
var G__69179 = chunk__68854_69172;
var G__69180 = count__68855_69173;
var G__69181 = (i__68856_69174 + (1));
seq__68853_69171 = G__69178;
chunk__68854_69172 = G__69179;
count__68855_69173 = G__69180;
i__68856_69174 = G__69181;
continue;
} else {
var temp__5825__auto___69182 = cljs.core.seq(seq__68853_69171);
if(temp__5825__auto___69182){
var seq__68853_69183__$1 = temp__5825__auto___69182;
if(cljs.core.chunked_seq_QMARK_(seq__68853_69183__$1)){
var c__5548__auto___69184 = cljs.core.chunk_first(seq__68853_69183__$1);
var G__69185 = cljs.core.chunk_rest(seq__68853_69183__$1);
var G__69186 = c__5548__auto___69184;
var G__69187 = cljs.core.count(c__5548__auto___69184);
var G__69188 = (0);
seq__68853_69171 = G__69185;
chunk__68854_69172 = G__69186;
count__68855_69173 = G__69187;
i__68856_69174 = G__69188;
continue;
} else {
var vec__68866_69189 = cljs.core.first(seq__68853_69183__$1);
var k_69190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68866_69189,(0),null);
var v_69191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68866_69189,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_69190);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_69190),v_69191);


var G__69192 = cljs.core.next(seq__68853_69183__$1);
var G__69193 = null;
var G__69194 = (0);
var G__69195 = (0);
seq__68853_69171 = G__69192;
chunk__68854_69172 = G__69193;
count__68855_69173 = G__69194;
i__68856_69174 = G__69195;
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
var vec__68879 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68879,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68879,(1),null);
var seq__68882_69196 = cljs.core.seq(node_children);
var chunk__68884_69197 = null;
var count__68885_69198 = (0);
var i__68886_69199 = (0);
while(true){
if((i__68886_69199 < count__68885_69198)){
var child_struct_69200 = chunk__68884_69197.cljs$core$IIndexed$_nth$arity$2(null,i__68886_69199);
if((!((child_struct_69200 == null)))){
if(typeof child_struct_69200 === 'string'){
var text_69201 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_69201),child_struct_69200].join(''));
} else {
var children_69202 = shadow.dom.svg_node(child_struct_69200);
if(cljs.core.seq_QMARK_(children_69202)){
var seq__68906_69203 = cljs.core.seq(children_69202);
var chunk__68908_69204 = null;
var count__68909_69205 = (0);
var i__68910_69206 = (0);
while(true){
if((i__68910_69206 < count__68909_69205)){
var child_69207 = chunk__68908_69204.cljs$core$IIndexed$_nth$arity$2(null,i__68910_69206);
if(cljs.core.truth_(child_69207)){
node.appendChild(child_69207);


var G__69208 = seq__68906_69203;
var G__69209 = chunk__68908_69204;
var G__69210 = count__68909_69205;
var G__69211 = (i__68910_69206 + (1));
seq__68906_69203 = G__69208;
chunk__68908_69204 = G__69209;
count__68909_69205 = G__69210;
i__68910_69206 = G__69211;
continue;
} else {
var G__69212 = seq__68906_69203;
var G__69213 = chunk__68908_69204;
var G__69214 = count__68909_69205;
var G__69215 = (i__68910_69206 + (1));
seq__68906_69203 = G__69212;
chunk__68908_69204 = G__69213;
count__68909_69205 = G__69214;
i__68910_69206 = G__69215;
continue;
}
} else {
var temp__5825__auto___69216 = cljs.core.seq(seq__68906_69203);
if(temp__5825__auto___69216){
var seq__68906_69217__$1 = temp__5825__auto___69216;
if(cljs.core.chunked_seq_QMARK_(seq__68906_69217__$1)){
var c__5548__auto___69218 = cljs.core.chunk_first(seq__68906_69217__$1);
var G__69219 = cljs.core.chunk_rest(seq__68906_69217__$1);
var G__69220 = c__5548__auto___69218;
var G__69221 = cljs.core.count(c__5548__auto___69218);
var G__69222 = (0);
seq__68906_69203 = G__69219;
chunk__68908_69204 = G__69220;
count__68909_69205 = G__69221;
i__68910_69206 = G__69222;
continue;
} else {
var child_69223 = cljs.core.first(seq__68906_69217__$1);
if(cljs.core.truth_(child_69223)){
node.appendChild(child_69223);


var G__69224 = cljs.core.next(seq__68906_69217__$1);
var G__69225 = null;
var G__69226 = (0);
var G__69227 = (0);
seq__68906_69203 = G__69224;
chunk__68908_69204 = G__69225;
count__68909_69205 = G__69226;
i__68910_69206 = G__69227;
continue;
} else {
var G__69228 = cljs.core.next(seq__68906_69217__$1);
var G__69229 = null;
var G__69230 = (0);
var G__69231 = (0);
seq__68906_69203 = G__69228;
chunk__68908_69204 = G__69229;
count__68909_69205 = G__69230;
i__68910_69206 = G__69231;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_69202);
}
}


var G__69232 = seq__68882_69196;
var G__69233 = chunk__68884_69197;
var G__69234 = count__68885_69198;
var G__69235 = (i__68886_69199 + (1));
seq__68882_69196 = G__69232;
chunk__68884_69197 = G__69233;
count__68885_69198 = G__69234;
i__68886_69199 = G__69235;
continue;
} else {
var G__69236 = seq__68882_69196;
var G__69237 = chunk__68884_69197;
var G__69238 = count__68885_69198;
var G__69239 = (i__68886_69199 + (1));
seq__68882_69196 = G__69236;
chunk__68884_69197 = G__69237;
count__68885_69198 = G__69238;
i__68886_69199 = G__69239;
continue;
}
} else {
var temp__5825__auto___69240 = cljs.core.seq(seq__68882_69196);
if(temp__5825__auto___69240){
var seq__68882_69241__$1 = temp__5825__auto___69240;
if(cljs.core.chunked_seq_QMARK_(seq__68882_69241__$1)){
var c__5548__auto___69242 = cljs.core.chunk_first(seq__68882_69241__$1);
var G__69243 = cljs.core.chunk_rest(seq__68882_69241__$1);
var G__69244 = c__5548__auto___69242;
var G__69245 = cljs.core.count(c__5548__auto___69242);
var G__69246 = (0);
seq__68882_69196 = G__69243;
chunk__68884_69197 = G__69244;
count__68885_69198 = G__69245;
i__68886_69199 = G__69246;
continue;
} else {
var child_struct_69247 = cljs.core.first(seq__68882_69241__$1);
if((!((child_struct_69247 == null)))){
if(typeof child_struct_69247 === 'string'){
var text_69248 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_69248),child_struct_69247].join(''));
} else {
var children_69249 = shadow.dom.svg_node(child_struct_69247);
if(cljs.core.seq_QMARK_(children_69249)){
var seq__68921_69250 = cljs.core.seq(children_69249);
var chunk__68923_69251 = null;
var count__68924_69252 = (0);
var i__68925_69253 = (0);
while(true){
if((i__68925_69253 < count__68924_69252)){
var child_69254 = chunk__68923_69251.cljs$core$IIndexed$_nth$arity$2(null,i__68925_69253);
if(cljs.core.truth_(child_69254)){
node.appendChild(child_69254);


var G__69255 = seq__68921_69250;
var G__69256 = chunk__68923_69251;
var G__69257 = count__68924_69252;
var G__69258 = (i__68925_69253 + (1));
seq__68921_69250 = G__69255;
chunk__68923_69251 = G__69256;
count__68924_69252 = G__69257;
i__68925_69253 = G__69258;
continue;
} else {
var G__69259 = seq__68921_69250;
var G__69260 = chunk__68923_69251;
var G__69261 = count__68924_69252;
var G__69262 = (i__68925_69253 + (1));
seq__68921_69250 = G__69259;
chunk__68923_69251 = G__69260;
count__68924_69252 = G__69261;
i__68925_69253 = G__69262;
continue;
}
} else {
var temp__5825__auto___69263__$1 = cljs.core.seq(seq__68921_69250);
if(temp__5825__auto___69263__$1){
var seq__68921_69264__$1 = temp__5825__auto___69263__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68921_69264__$1)){
var c__5548__auto___69265 = cljs.core.chunk_first(seq__68921_69264__$1);
var G__69266 = cljs.core.chunk_rest(seq__68921_69264__$1);
var G__69267 = c__5548__auto___69265;
var G__69268 = cljs.core.count(c__5548__auto___69265);
var G__69269 = (0);
seq__68921_69250 = G__69266;
chunk__68923_69251 = G__69267;
count__68924_69252 = G__69268;
i__68925_69253 = G__69269;
continue;
} else {
var child_69270 = cljs.core.first(seq__68921_69264__$1);
if(cljs.core.truth_(child_69270)){
node.appendChild(child_69270);


var G__69271 = cljs.core.next(seq__68921_69264__$1);
var G__69272 = null;
var G__69273 = (0);
var G__69274 = (0);
seq__68921_69250 = G__69271;
chunk__68923_69251 = G__69272;
count__68924_69252 = G__69273;
i__68925_69253 = G__69274;
continue;
} else {
var G__69275 = cljs.core.next(seq__68921_69264__$1);
var G__69276 = null;
var G__69277 = (0);
var G__69278 = (0);
seq__68921_69250 = G__69275;
chunk__68923_69251 = G__69276;
count__68924_69252 = G__69277;
i__68925_69253 = G__69278;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_69249);
}
}


var G__69279 = cljs.core.next(seq__68882_69241__$1);
var G__69280 = null;
var G__69281 = (0);
var G__69282 = (0);
seq__68882_69196 = G__69279;
chunk__68884_69197 = G__69280;
count__68885_69198 = G__69281;
i__68886_69199 = G__69282;
continue;
} else {
var G__69283 = cljs.core.next(seq__68882_69241__$1);
var G__69284 = null;
var G__69285 = (0);
var G__69286 = (0);
seq__68882_69196 = G__69283;
chunk__68884_69197 = G__69284;
count__68885_69198 = G__69285;
i__68886_69199 = G__69286;
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
var len__5749__auto___69287 = arguments.length;
var i__5750__auto___69288 = (0);
while(true){
if((i__5750__auto___69288 < len__5749__auto___69287)){
args__5755__auto__.push((arguments[i__5750__auto___69288]));

var G__69289 = (i__5750__auto___69288 + (1));
i__5750__auto___69288 = G__69289;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq68929){
var G__68930 = cljs.core.first(seq68929);
var seq68929__$1 = cljs.core.next(seq68929);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68930,seq68929__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
