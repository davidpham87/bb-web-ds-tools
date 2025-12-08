goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_65898 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_65898(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_65899 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_65899(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__65529 = coll;
var G__65530 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__65529,G__65530) : shadow.dom.lazy_native_coll_seq.call(null,G__65529,G__65530));
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
var G__65609 = arguments.length;
switch (G__65609) {
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
var G__65617 = arguments.length;
switch (G__65617) {
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
}catch (e65622){if((e65622 instanceof Object)){
var e = e65622;
return console.log("didnt support attachEvent",el,e);
} else {
throw e65622;

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
var seq__65627 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__65628 = null;
var count__65629 = (0);
var i__65630 = (0);
while(true){
if((i__65630 < count__65629)){
var el = chunk__65628.cljs$core$IIndexed$_nth$arity$2(null,i__65630);
var handler_65906__$1 = ((function (seq__65627,chunk__65628,count__65629,i__65630,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65627,chunk__65628,count__65629,i__65630,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65906__$1);


var G__65907 = seq__65627;
var G__65908 = chunk__65628;
var G__65909 = count__65629;
var G__65910 = (i__65630 + (1));
seq__65627 = G__65907;
chunk__65628 = G__65908;
count__65629 = G__65909;
i__65630 = G__65910;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65627);
if(temp__5825__auto__){
var seq__65627__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65627__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65627__$1);
var G__65911 = cljs.core.chunk_rest(seq__65627__$1);
var G__65912 = c__5548__auto__;
var G__65913 = cljs.core.count(c__5548__auto__);
var G__65914 = (0);
seq__65627 = G__65911;
chunk__65628 = G__65912;
count__65629 = G__65913;
i__65630 = G__65914;
continue;
} else {
var el = cljs.core.first(seq__65627__$1);
var handler_65915__$1 = ((function (seq__65627,chunk__65628,count__65629,i__65630,el,seq__65627__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65627,chunk__65628,count__65629,i__65630,el,seq__65627__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65915__$1);


var G__65916 = cljs.core.next(seq__65627__$1);
var G__65917 = null;
var G__65918 = (0);
var G__65919 = (0);
seq__65627 = G__65916;
chunk__65628 = G__65917;
count__65629 = G__65918;
i__65630 = G__65919;
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
var G__65637 = arguments.length;
switch (G__65637) {
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
var seq__65638 = cljs.core.seq(events);
var chunk__65639 = null;
var count__65640 = (0);
var i__65641 = (0);
while(true){
if((i__65641 < count__65640)){
var vec__65648 = chunk__65639.cljs$core$IIndexed$_nth$arity$2(null,i__65641);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65648,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65648,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65921 = seq__65638;
var G__65922 = chunk__65639;
var G__65923 = count__65640;
var G__65924 = (i__65641 + (1));
seq__65638 = G__65921;
chunk__65639 = G__65922;
count__65640 = G__65923;
i__65641 = G__65924;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65638);
if(temp__5825__auto__){
var seq__65638__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65638__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65638__$1);
var G__65925 = cljs.core.chunk_rest(seq__65638__$1);
var G__65926 = c__5548__auto__;
var G__65927 = cljs.core.count(c__5548__auto__);
var G__65928 = (0);
seq__65638 = G__65925;
chunk__65639 = G__65926;
count__65640 = G__65927;
i__65641 = G__65928;
continue;
} else {
var vec__65651 = cljs.core.first(seq__65638__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65651,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65651,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65929 = cljs.core.next(seq__65638__$1);
var G__65930 = null;
var G__65931 = (0);
var G__65932 = (0);
seq__65638 = G__65929;
chunk__65639 = G__65930;
count__65640 = G__65931;
i__65641 = G__65932;
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
var seq__65654 = cljs.core.seq(styles);
var chunk__65655 = null;
var count__65656 = (0);
var i__65657 = (0);
while(true){
if((i__65657 < count__65656)){
var vec__65664 = chunk__65655.cljs$core$IIndexed$_nth$arity$2(null,i__65657);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65664,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65664,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65933 = seq__65654;
var G__65934 = chunk__65655;
var G__65935 = count__65656;
var G__65936 = (i__65657 + (1));
seq__65654 = G__65933;
chunk__65655 = G__65934;
count__65656 = G__65935;
i__65657 = G__65936;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65654);
if(temp__5825__auto__){
var seq__65654__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65654__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65654__$1);
var G__65937 = cljs.core.chunk_rest(seq__65654__$1);
var G__65938 = c__5548__auto__;
var G__65939 = cljs.core.count(c__5548__auto__);
var G__65940 = (0);
seq__65654 = G__65937;
chunk__65655 = G__65938;
count__65656 = G__65939;
i__65657 = G__65940;
continue;
} else {
var vec__65667 = cljs.core.first(seq__65654__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65667,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65667,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65941 = cljs.core.next(seq__65654__$1);
var G__65942 = null;
var G__65943 = (0);
var G__65944 = (0);
seq__65654 = G__65941;
chunk__65655 = G__65942;
count__65656 = G__65943;
i__65657 = G__65944;
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
var G__65673_65945 = key;
var G__65673_65946__$1 = (((G__65673_65945 instanceof cljs.core.Keyword))?G__65673_65945.fqn:null);
switch (G__65673_65946__$1) {
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
var ks_65948 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_65948,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_65948,"aria-");
}
})())){
el.setAttribute(ks_65948,value);
} else {
(el[ks_65948] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__65686){
var map__65687 = p__65686;
var map__65687__$1 = cljs.core.__destructure_map(map__65687);
var props = map__65687__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65687__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__65688 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65688,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65688,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65688,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__65691 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__65691,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__65691;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__65693 = arguments.length;
switch (G__65693) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__65696){
var vec__65697 = p__65696;
var seq__65698 = cljs.core.seq(vec__65697);
var first__65699 = cljs.core.first(seq__65698);
var seq__65698__$1 = cljs.core.next(seq__65698);
var nn = first__65699;
var first__65699__$1 = cljs.core.first(seq__65698__$1);
var seq__65698__$2 = cljs.core.next(seq__65698__$1);
var np = first__65699__$1;
var nc = seq__65698__$2;
var node = vec__65697;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65700 = nn;
var G__65701 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65700,G__65701) : create_fn.call(null,G__65700,G__65701));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65702 = nn;
var G__65703 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65702,G__65703) : create_fn.call(null,G__65702,G__65703));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__65706 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65706,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65706,(1),null);
var seq__65709_65950 = cljs.core.seq(node_children);
var chunk__65710_65951 = null;
var count__65711_65952 = (0);
var i__65712_65953 = (0);
while(true){
if((i__65712_65953 < count__65711_65952)){
var child_struct_65954 = chunk__65710_65951.cljs$core$IIndexed$_nth$arity$2(null,i__65712_65953);
var children_65955 = shadow.dom.dom_node(child_struct_65954);
if(cljs.core.seq_QMARK_(children_65955)){
var seq__65730_65956 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65955));
var chunk__65732_65957 = null;
var count__65733_65958 = (0);
var i__65734_65959 = (0);
while(true){
if((i__65734_65959 < count__65733_65958)){
var child_65960 = chunk__65732_65957.cljs$core$IIndexed$_nth$arity$2(null,i__65734_65959);
if(cljs.core.truth_(child_65960)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65960);


var G__65961 = seq__65730_65956;
var G__65962 = chunk__65732_65957;
var G__65963 = count__65733_65958;
var G__65964 = (i__65734_65959 + (1));
seq__65730_65956 = G__65961;
chunk__65732_65957 = G__65962;
count__65733_65958 = G__65963;
i__65734_65959 = G__65964;
continue;
} else {
var G__65965 = seq__65730_65956;
var G__65966 = chunk__65732_65957;
var G__65967 = count__65733_65958;
var G__65968 = (i__65734_65959 + (1));
seq__65730_65956 = G__65965;
chunk__65732_65957 = G__65966;
count__65733_65958 = G__65967;
i__65734_65959 = G__65968;
continue;
}
} else {
var temp__5825__auto___65969 = cljs.core.seq(seq__65730_65956);
if(temp__5825__auto___65969){
var seq__65730_65970__$1 = temp__5825__auto___65969;
if(cljs.core.chunked_seq_QMARK_(seq__65730_65970__$1)){
var c__5548__auto___65971 = cljs.core.chunk_first(seq__65730_65970__$1);
var G__65972 = cljs.core.chunk_rest(seq__65730_65970__$1);
var G__65973 = c__5548__auto___65971;
var G__65974 = cljs.core.count(c__5548__auto___65971);
var G__65975 = (0);
seq__65730_65956 = G__65972;
chunk__65732_65957 = G__65973;
count__65733_65958 = G__65974;
i__65734_65959 = G__65975;
continue;
} else {
var child_65976 = cljs.core.first(seq__65730_65970__$1);
if(cljs.core.truth_(child_65976)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65976);


var G__65977 = cljs.core.next(seq__65730_65970__$1);
var G__65978 = null;
var G__65979 = (0);
var G__65980 = (0);
seq__65730_65956 = G__65977;
chunk__65732_65957 = G__65978;
count__65733_65958 = G__65979;
i__65734_65959 = G__65980;
continue;
} else {
var G__65981 = cljs.core.next(seq__65730_65970__$1);
var G__65982 = null;
var G__65983 = (0);
var G__65984 = (0);
seq__65730_65956 = G__65981;
chunk__65732_65957 = G__65982;
count__65733_65958 = G__65983;
i__65734_65959 = G__65984;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65955);
}


var G__65985 = seq__65709_65950;
var G__65986 = chunk__65710_65951;
var G__65987 = count__65711_65952;
var G__65988 = (i__65712_65953 + (1));
seq__65709_65950 = G__65985;
chunk__65710_65951 = G__65986;
count__65711_65952 = G__65987;
i__65712_65953 = G__65988;
continue;
} else {
var temp__5825__auto___65989 = cljs.core.seq(seq__65709_65950);
if(temp__5825__auto___65989){
var seq__65709_65990__$1 = temp__5825__auto___65989;
if(cljs.core.chunked_seq_QMARK_(seq__65709_65990__$1)){
var c__5548__auto___65991 = cljs.core.chunk_first(seq__65709_65990__$1);
var G__65992 = cljs.core.chunk_rest(seq__65709_65990__$1);
var G__65993 = c__5548__auto___65991;
var G__65994 = cljs.core.count(c__5548__auto___65991);
var G__65995 = (0);
seq__65709_65950 = G__65992;
chunk__65710_65951 = G__65993;
count__65711_65952 = G__65994;
i__65712_65953 = G__65995;
continue;
} else {
var child_struct_65996 = cljs.core.first(seq__65709_65990__$1);
var children_65997 = shadow.dom.dom_node(child_struct_65996);
if(cljs.core.seq_QMARK_(children_65997)){
var seq__65738_65998 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65997));
var chunk__65740_65999 = null;
var count__65741_66000 = (0);
var i__65742_66001 = (0);
while(true){
if((i__65742_66001 < count__65741_66000)){
var child_66002 = chunk__65740_65999.cljs$core$IIndexed$_nth$arity$2(null,i__65742_66001);
if(cljs.core.truth_(child_66002)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66002);


var G__66003 = seq__65738_65998;
var G__66004 = chunk__65740_65999;
var G__66005 = count__65741_66000;
var G__66006 = (i__65742_66001 + (1));
seq__65738_65998 = G__66003;
chunk__65740_65999 = G__66004;
count__65741_66000 = G__66005;
i__65742_66001 = G__66006;
continue;
} else {
var G__66007 = seq__65738_65998;
var G__66008 = chunk__65740_65999;
var G__66009 = count__65741_66000;
var G__66010 = (i__65742_66001 + (1));
seq__65738_65998 = G__66007;
chunk__65740_65999 = G__66008;
count__65741_66000 = G__66009;
i__65742_66001 = G__66010;
continue;
}
} else {
var temp__5825__auto___66011__$1 = cljs.core.seq(seq__65738_65998);
if(temp__5825__auto___66011__$1){
var seq__65738_66012__$1 = temp__5825__auto___66011__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65738_66012__$1)){
var c__5548__auto___66013 = cljs.core.chunk_first(seq__65738_66012__$1);
var G__66014 = cljs.core.chunk_rest(seq__65738_66012__$1);
var G__66015 = c__5548__auto___66013;
var G__66016 = cljs.core.count(c__5548__auto___66013);
var G__66017 = (0);
seq__65738_65998 = G__66014;
chunk__65740_65999 = G__66015;
count__65741_66000 = G__66016;
i__65742_66001 = G__66017;
continue;
} else {
var child_66018 = cljs.core.first(seq__65738_66012__$1);
if(cljs.core.truth_(child_66018)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66018);


var G__66019 = cljs.core.next(seq__65738_66012__$1);
var G__66020 = null;
var G__66021 = (0);
var G__66022 = (0);
seq__65738_65998 = G__66019;
chunk__65740_65999 = G__66020;
count__65741_66000 = G__66021;
i__65742_66001 = G__66022;
continue;
} else {
var G__66023 = cljs.core.next(seq__65738_66012__$1);
var G__66024 = null;
var G__66025 = (0);
var G__66026 = (0);
seq__65738_65998 = G__66023;
chunk__65740_65999 = G__66024;
count__65741_66000 = G__66025;
i__65742_66001 = G__66026;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65997);
}


var G__66027 = cljs.core.next(seq__65709_65990__$1);
var G__66028 = null;
var G__66029 = (0);
var G__66030 = (0);
seq__65709_65950 = G__66027;
chunk__65710_65951 = G__66028;
count__65711_65952 = G__66029;
i__65712_65953 = G__66030;
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
var seq__65747 = cljs.core.seq(node);
var chunk__65748 = null;
var count__65749 = (0);
var i__65750 = (0);
while(true){
if((i__65750 < count__65749)){
var n = chunk__65748.cljs$core$IIndexed$_nth$arity$2(null,i__65750);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66031 = seq__65747;
var G__66032 = chunk__65748;
var G__66033 = count__65749;
var G__66034 = (i__65750 + (1));
seq__65747 = G__66031;
chunk__65748 = G__66032;
count__65749 = G__66033;
i__65750 = G__66034;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65747);
if(temp__5825__auto__){
var seq__65747__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65747__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65747__$1);
var G__66035 = cljs.core.chunk_rest(seq__65747__$1);
var G__66036 = c__5548__auto__;
var G__66037 = cljs.core.count(c__5548__auto__);
var G__66038 = (0);
seq__65747 = G__66035;
chunk__65748 = G__66036;
count__65749 = G__66037;
i__65750 = G__66038;
continue;
} else {
var n = cljs.core.first(seq__65747__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66039 = cljs.core.next(seq__65747__$1);
var G__66040 = null;
var G__66041 = (0);
var G__66042 = (0);
seq__65747 = G__66039;
chunk__65748 = G__66040;
count__65749 = G__66041;
i__65750 = G__66042;
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
var G__65754 = arguments.length;
switch (G__65754) {
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
var G__65756 = arguments.length;
switch (G__65756) {
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
var G__65758 = arguments.length;
switch (G__65758) {
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
var len__5749__auto___66046 = arguments.length;
var i__5750__auto___66047 = (0);
while(true){
if((i__5750__auto___66047 < len__5749__auto___66046)){
args__5755__auto__.push((arguments[i__5750__auto___66047]));

var G__66048 = (i__5750__auto___66047 + (1));
i__5750__auto___66047 = G__66048;
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
var seq__65764_66049 = cljs.core.seq(nodes);
var chunk__65765_66050 = null;
var count__65766_66051 = (0);
var i__65767_66052 = (0);
while(true){
if((i__65767_66052 < count__65766_66051)){
var node_66053 = chunk__65765_66050.cljs$core$IIndexed$_nth$arity$2(null,i__65767_66052);
fragment.appendChild(shadow.dom._to_dom(node_66053));


var G__66054 = seq__65764_66049;
var G__66055 = chunk__65765_66050;
var G__66056 = count__65766_66051;
var G__66057 = (i__65767_66052 + (1));
seq__65764_66049 = G__66054;
chunk__65765_66050 = G__66055;
count__65766_66051 = G__66056;
i__65767_66052 = G__66057;
continue;
} else {
var temp__5825__auto___66058 = cljs.core.seq(seq__65764_66049);
if(temp__5825__auto___66058){
var seq__65764_66059__$1 = temp__5825__auto___66058;
if(cljs.core.chunked_seq_QMARK_(seq__65764_66059__$1)){
var c__5548__auto___66060 = cljs.core.chunk_first(seq__65764_66059__$1);
var G__66061 = cljs.core.chunk_rest(seq__65764_66059__$1);
var G__66062 = c__5548__auto___66060;
var G__66063 = cljs.core.count(c__5548__auto___66060);
var G__66064 = (0);
seq__65764_66049 = G__66061;
chunk__65765_66050 = G__66062;
count__65766_66051 = G__66063;
i__65767_66052 = G__66064;
continue;
} else {
var node_66065 = cljs.core.first(seq__65764_66059__$1);
fragment.appendChild(shadow.dom._to_dom(node_66065));


var G__66066 = cljs.core.next(seq__65764_66059__$1);
var G__66067 = null;
var G__66068 = (0);
var G__66069 = (0);
seq__65764_66049 = G__66066;
chunk__65765_66050 = G__66067;
count__65766_66051 = G__66068;
i__65767_66052 = G__66069;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq65763){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65763));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65772_66070 = cljs.core.seq(scripts);
var chunk__65773_66071 = null;
var count__65774_66072 = (0);
var i__65775_66073 = (0);
while(true){
if((i__65775_66073 < count__65774_66072)){
var vec__65782_66074 = chunk__65773_66071.cljs$core$IIndexed$_nth$arity$2(null,i__65775_66073);
var script_tag_66075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65782_66074,(0),null);
var script_body_66076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65782_66074,(1),null);
eval(script_body_66076);


var G__66077 = seq__65772_66070;
var G__66078 = chunk__65773_66071;
var G__66079 = count__65774_66072;
var G__66080 = (i__65775_66073 + (1));
seq__65772_66070 = G__66077;
chunk__65773_66071 = G__66078;
count__65774_66072 = G__66079;
i__65775_66073 = G__66080;
continue;
} else {
var temp__5825__auto___66081 = cljs.core.seq(seq__65772_66070);
if(temp__5825__auto___66081){
var seq__65772_66082__$1 = temp__5825__auto___66081;
if(cljs.core.chunked_seq_QMARK_(seq__65772_66082__$1)){
var c__5548__auto___66083 = cljs.core.chunk_first(seq__65772_66082__$1);
var G__66084 = cljs.core.chunk_rest(seq__65772_66082__$1);
var G__66085 = c__5548__auto___66083;
var G__66086 = cljs.core.count(c__5548__auto___66083);
var G__66087 = (0);
seq__65772_66070 = G__66084;
chunk__65773_66071 = G__66085;
count__65774_66072 = G__66086;
i__65775_66073 = G__66087;
continue;
} else {
var vec__65785_66088 = cljs.core.first(seq__65772_66082__$1);
var script_tag_66089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65785_66088,(0),null);
var script_body_66090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65785_66088,(1),null);
eval(script_body_66090);


var G__66091 = cljs.core.next(seq__65772_66082__$1);
var G__66092 = null;
var G__66093 = (0);
var G__66094 = (0);
seq__65772_66070 = G__66091;
chunk__65773_66071 = G__66092;
count__65774_66072 = G__66093;
i__65775_66073 = G__66094;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__65788){
var vec__65789 = p__65788;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65789,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65789,(1),null);
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
var G__65793 = arguments.length;
switch (G__65793) {
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
var seq__65795 = cljs.core.seq(style_keys);
var chunk__65796 = null;
var count__65797 = (0);
var i__65798 = (0);
while(true){
if((i__65798 < count__65797)){
var it = chunk__65796.cljs$core$IIndexed$_nth$arity$2(null,i__65798);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66096 = seq__65795;
var G__66097 = chunk__65796;
var G__66098 = count__65797;
var G__66099 = (i__65798 + (1));
seq__65795 = G__66096;
chunk__65796 = G__66097;
count__65797 = G__66098;
i__65798 = G__66099;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65795);
if(temp__5825__auto__){
var seq__65795__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65795__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65795__$1);
var G__66100 = cljs.core.chunk_rest(seq__65795__$1);
var G__66101 = c__5548__auto__;
var G__66102 = cljs.core.count(c__5548__auto__);
var G__66103 = (0);
seq__65795 = G__66100;
chunk__65796 = G__66101;
count__65797 = G__66102;
i__65798 = G__66103;
continue;
} else {
var it = cljs.core.first(seq__65795__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66104 = cljs.core.next(seq__65795__$1);
var G__66105 = null;
var G__66106 = (0);
var G__66107 = (0);
seq__65795 = G__66104;
chunk__65796 = G__66105;
count__65797 = G__66106;
i__65798 = G__66107;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65804,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65808 = k65804;
var G__65808__$1 = (((G__65808 instanceof cljs.core.Keyword))?G__65808.fqn:null);
switch (G__65808__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65804,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65809){
var vec__65810 = p__65809;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65810,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65810,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65803){
var self__ = this;
var G__65803__$1 = this;
return (new cljs.core.RecordIter((0),G__65803__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65805,other65806){
var self__ = this;
var this65805__$1 = this;
return (((!((other65806 == null)))) && ((((this65805__$1.constructor === other65806.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65805__$1.x,other65806.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65805__$1.y,other65806.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65805__$1.__extmap,other65806.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65804){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65813 = k65804;
var G__65813__$1 = (((G__65813 instanceof cljs.core.Keyword))?G__65813.fqn:null);
switch (G__65813__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65804);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65803){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65814 = cljs.core.keyword_identical_QMARK_;
var expr__65815 = k__5332__auto__;
if(cljs.core.truth_((pred__65814.cljs$core$IFn$_invoke$arity$2 ? pred__65814.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__65815) : pred__65814.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__65815)))){
return (new shadow.dom.Coordinate(G__65803,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65814.cljs$core$IFn$_invoke$arity$2 ? pred__65814.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__65815) : pred__65814.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__65815)))){
return (new shadow.dom.Coordinate(self__.x,G__65803,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65803),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65803){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__65803,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__65807){
var extmap__5365__auto__ = (function (){var G__65817 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65807,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65807)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65817);
} else {
return G__65817;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__65807),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__65807),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65819,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65823 = k65819;
var G__65823__$1 = (((G__65823 instanceof cljs.core.Keyword))?G__65823.fqn:null);
switch (G__65823__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65819,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65824){
var vec__65825 = p__65824;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65825,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65825,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65818){
var self__ = this;
var G__65818__$1 = this;
return (new cljs.core.RecordIter((0),G__65818__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65820,other65821){
var self__ = this;
var this65820__$1 = this;
return (((!((other65821 == null)))) && ((((this65820__$1.constructor === other65821.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65820__$1.w,other65821.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65820__$1.h,other65821.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65820__$1.__extmap,other65821.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65819){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65828 = k65819;
var G__65828__$1 = (((G__65828 instanceof cljs.core.Keyword))?G__65828.fqn:null);
switch (G__65828__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65819);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65818){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65829 = cljs.core.keyword_identical_QMARK_;
var expr__65830 = k__5332__auto__;
if(cljs.core.truth_((pred__65829.cljs$core$IFn$_invoke$arity$2 ? pred__65829.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__65830) : pred__65829.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__65830)))){
return (new shadow.dom.Size(G__65818,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65829.cljs$core$IFn$_invoke$arity$2 ? pred__65829.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__65830) : pred__65829.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__65830)))){
return (new shadow.dom.Size(self__.w,G__65818,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65818),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65818){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65818,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65822){
var extmap__5365__auto__ = (function (){var G__65832 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65822,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65822)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65832);
} else {
return G__65832;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65822),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65822),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__66112 = (i + (1));
var G__66113 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__66112;
ret = G__66113;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65837){
var vec__65838 = p__65837;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65838,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65838,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65842 = arguments.length;
switch (G__65842) {
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
var G__66115 = ps;
var G__66116 = (i + (1));
el__$1 = G__66115;
i = G__66116;
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
var vec__65843 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65843,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65843,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65843,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65846_66117 = cljs.core.seq(props);
var chunk__65847_66118 = null;
var count__65848_66119 = (0);
var i__65849_66120 = (0);
while(true){
if((i__65849_66120 < count__65848_66119)){
var vec__65856_66121 = chunk__65847_66118.cljs$core$IIndexed$_nth$arity$2(null,i__65849_66120);
var k_66122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65856_66121,(0),null);
var v_66123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65856_66121,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_66122);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66122),v_66123);


var G__66124 = seq__65846_66117;
var G__66125 = chunk__65847_66118;
var G__66126 = count__65848_66119;
var G__66127 = (i__65849_66120 + (1));
seq__65846_66117 = G__66124;
chunk__65847_66118 = G__66125;
count__65848_66119 = G__66126;
i__65849_66120 = G__66127;
continue;
} else {
var temp__5825__auto___66128 = cljs.core.seq(seq__65846_66117);
if(temp__5825__auto___66128){
var seq__65846_66129__$1 = temp__5825__auto___66128;
if(cljs.core.chunked_seq_QMARK_(seq__65846_66129__$1)){
var c__5548__auto___66130 = cljs.core.chunk_first(seq__65846_66129__$1);
var G__66131 = cljs.core.chunk_rest(seq__65846_66129__$1);
var G__66132 = c__5548__auto___66130;
var G__66133 = cljs.core.count(c__5548__auto___66130);
var G__66134 = (0);
seq__65846_66117 = G__66131;
chunk__65847_66118 = G__66132;
count__65848_66119 = G__66133;
i__65849_66120 = G__66134;
continue;
} else {
var vec__65859_66135 = cljs.core.first(seq__65846_66129__$1);
var k_66136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65859_66135,(0),null);
var v_66137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65859_66135,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_66136);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66136),v_66137);


var G__66138 = cljs.core.next(seq__65846_66129__$1);
var G__66139 = null;
var G__66140 = (0);
var G__66141 = (0);
seq__65846_66117 = G__66138;
chunk__65847_66118 = G__66139;
count__65848_66119 = G__66140;
i__65849_66120 = G__66141;
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
var vec__65863 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65863,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65863,(1),null);
var seq__65866_66142 = cljs.core.seq(node_children);
var chunk__65868_66143 = null;
var count__65869_66144 = (0);
var i__65870_66145 = (0);
while(true){
if((i__65870_66145 < count__65869_66144)){
var child_struct_66146 = chunk__65868_66143.cljs$core$IIndexed$_nth$arity$2(null,i__65870_66145);
if((!((child_struct_66146 == null)))){
if(typeof child_struct_66146 === 'string'){
var text_66147 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66147),child_struct_66146].join(''));
} else {
var children_66148 = shadow.dom.svg_node(child_struct_66146);
if(cljs.core.seq_QMARK_(children_66148)){
var seq__65884_66149 = cljs.core.seq(children_66148);
var chunk__65886_66150 = null;
var count__65887_66151 = (0);
var i__65888_66152 = (0);
while(true){
if((i__65888_66152 < count__65887_66151)){
var child_66153 = chunk__65886_66150.cljs$core$IIndexed$_nth$arity$2(null,i__65888_66152);
if(cljs.core.truth_(child_66153)){
node.appendChild(child_66153);


var G__66154 = seq__65884_66149;
var G__66155 = chunk__65886_66150;
var G__66156 = count__65887_66151;
var G__66157 = (i__65888_66152 + (1));
seq__65884_66149 = G__66154;
chunk__65886_66150 = G__66155;
count__65887_66151 = G__66156;
i__65888_66152 = G__66157;
continue;
} else {
var G__66158 = seq__65884_66149;
var G__66159 = chunk__65886_66150;
var G__66160 = count__65887_66151;
var G__66161 = (i__65888_66152 + (1));
seq__65884_66149 = G__66158;
chunk__65886_66150 = G__66159;
count__65887_66151 = G__66160;
i__65888_66152 = G__66161;
continue;
}
} else {
var temp__5825__auto___66162 = cljs.core.seq(seq__65884_66149);
if(temp__5825__auto___66162){
var seq__65884_66163__$1 = temp__5825__auto___66162;
if(cljs.core.chunked_seq_QMARK_(seq__65884_66163__$1)){
var c__5548__auto___66164 = cljs.core.chunk_first(seq__65884_66163__$1);
var G__66165 = cljs.core.chunk_rest(seq__65884_66163__$1);
var G__66166 = c__5548__auto___66164;
var G__66167 = cljs.core.count(c__5548__auto___66164);
var G__66168 = (0);
seq__65884_66149 = G__66165;
chunk__65886_66150 = G__66166;
count__65887_66151 = G__66167;
i__65888_66152 = G__66168;
continue;
} else {
var child_66169 = cljs.core.first(seq__65884_66163__$1);
if(cljs.core.truth_(child_66169)){
node.appendChild(child_66169);


var G__66170 = cljs.core.next(seq__65884_66163__$1);
var G__66171 = null;
var G__66172 = (0);
var G__66173 = (0);
seq__65884_66149 = G__66170;
chunk__65886_66150 = G__66171;
count__65887_66151 = G__66172;
i__65888_66152 = G__66173;
continue;
} else {
var G__66174 = cljs.core.next(seq__65884_66163__$1);
var G__66175 = null;
var G__66176 = (0);
var G__66177 = (0);
seq__65884_66149 = G__66174;
chunk__65886_66150 = G__66175;
count__65887_66151 = G__66176;
i__65888_66152 = G__66177;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66148);
}
}


var G__66178 = seq__65866_66142;
var G__66179 = chunk__65868_66143;
var G__66180 = count__65869_66144;
var G__66181 = (i__65870_66145 + (1));
seq__65866_66142 = G__66178;
chunk__65868_66143 = G__66179;
count__65869_66144 = G__66180;
i__65870_66145 = G__66181;
continue;
} else {
var G__66182 = seq__65866_66142;
var G__66183 = chunk__65868_66143;
var G__66184 = count__65869_66144;
var G__66185 = (i__65870_66145 + (1));
seq__65866_66142 = G__66182;
chunk__65868_66143 = G__66183;
count__65869_66144 = G__66184;
i__65870_66145 = G__66185;
continue;
}
} else {
var temp__5825__auto___66186 = cljs.core.seq(seq__65866_66142);
if(temp__5825__auto___66186){
var seq__65866_66187__$1 = temp__5825__auto___66186;
if(cljs.core.chunked_seq_QMARK_(seq__65866_66187__$1)){
var c__5548__auto___66188 = cljs.core.chunk_first(seq__65866_66187__$1);
var G__66189 = cljs.core.chunk_rest(seq__65866_66187__$1);
var G__66190 = c__5548__auto___66188;
var G__66191 = cljs.core.count(c__5548__auto___66188);
var G__66192 = (0);
seq__65866_66142 = G__66189;
chunk__65868_66143 = G__66190;
count__65869_66144 = G__66191;
i__65870_66145 = G__66192;
continue;
} else {
var child_struct_66193 = cljs.core.first(seq__65866_66187__$1);
if((!((child_struct_66193 == null)))){
if(typeof child_struct_66193 === 'string'){
var text_66194 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66194),child_struct_66193].join(''));
} else {
var children_66195 = shadow.dom.svg_node(child_struct_66193);
if(cljs.core.seq_QMARK_(children_66195)){
var seq__65890_66196 = cljs.core.seq(children_66195);
var chunk__65892_66197 = null;
var count__65893_66198 = (0);
var i__65894_66199 = (0);
while(true){
if((i__65894_66199 < count__65893_66198)){
var child_66200 = chunk__65892_66197.cljs$core$IIndexed$_nth$arity$2(null,i__65894_66199);
if(cljs.core.truth_(child_66200)){
node.appendChild(child_66200);


var G__66201 = seq__65890_66196;
var G__66202 = chunk__65892_66197;
var G__66203 = count__65893_66198;
var G__66204 = (i__65894_66199 + (1));
seq__65890_66196 = G__66201;
chunk__65892_66197 = G__66202;
count__65893_66198 = G__66203;
i__65894_66199 = G__66204;
continue;
} else {
var G__66205 = seq__65890_66196;
var G__66206 = chunk__65892_66197;
var G__66207 = count__65893_66198;
var G__66208 = (i__65894_66199 + (1));
seq__65890_66196 = G__66205;
chunk__65892_66197 = G__66206;
count__65893_66198 = G__66207;
i__65894_66199 = G__66208;
continue;
}
} else {
var temp__5825__auto___66209__$1 = cljs.core.seq(seq__65890_66196);
if(temp__5825__auto___66209__$1){
var seq__65890_66210__$1 = temp__5825__auto___66209__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65890_66210__$1)){
var c__5548__auto___66211 = cljs.core.chunk_first(seq__65890_66210__$1);
var G__66212 = cljs.core.chunk_rest(seq__65890_66210__$1);
var G__66213 = c__5548__auto___66211;
var G__66214 = cljs.core.count(c__5548__auto___66211);
var G__66215 = (0);
seq__65890_66196 = G__66212;
chunk__65892_66197 = G__66213;
count__65893_66198 = G__66214;
i__65894_66199 = G__66215;
continue;
} else {
var child_66216 = cljs.core.first(seq__65890_66210__$1);
if(cljs.core.truth_(child_66216)){
node.appendChild(child_66216);


var G__66217 = cljs.core.next(seq__65890_66210__$1);
var G__66218 = null;
var G__66219 = (0);
var G__66220 = (0);
seq__65890_66196 = G__66217;
chunk__65892_66197 = G__66218;
count__65893_66198 = G__66219;
i__65894_66199 = G__66220;
continue;
} else {
var G__66221 = cljs.core.next(seq__65890_66210__$1);
var G__66222 = null;
var G__66223 = (0);
var G__66224 = (0);
seq__65890_66196 = G__66221;
chunk__65892_66197 = G__66222;
count__65893_66198 = G__66223;
i__65894_66199 = G__66224;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66195);
}
}


var G__66225 = cljs.core.next(seq__65866_66187__$1);
var G__66226 = null;
var G__66227 = (0);
var G__66228 = (0);
seq__65866_66142 = G__66225;
chunk__65868_66143 = G__66226;
count__65869_66144 = G__66227;
i__65870_66145 = G__66228;
continue;
} else {
var G__66229 = cljs.core.next(seq__65866_66187__$1);
var G__66230 = null;
var G__66231 = (0);
var G__66232 = (0);
seq__65866_66142 = G__66229;
chunk__65868_66143 = G__66230;
count__65869_66144 = G__66231;
i__65870_66145 = G__66232;
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
var len__5749__auto___66233 = arguments.length;
var i__5750__auto___66234 = (0);
while(true){
if((i__5750__auto___66234 < len__5749__auto___66233)){
args__5755__auto__.push((arguments[i__5750__auto___66234]));

var G__66235 = (i__5750__auto___66234 + (1));
i__5750__auto___66234 = G__66235;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq65896){
var G__65897 = cljs.core.first(seq65896);
var seq65896__$1 = cljs.core.next(seq65896);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65897,seq65896__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
