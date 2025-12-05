goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_65872 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_65872(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_65873 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_65873(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__65484 = coll;
var G__65485 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__65484,G__65485) : shadow.dom.lazy_native_coll_seq.call(null,G__65484,G__65485));
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
var G__65500 = arguments.length;
switch (G__65500) {
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
var G__65507 = arguments.length;
switch (G__65507) {
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
var G__65509 = arguments.length;
switch (G__65509) {
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
var G__65511 = arguments.length;
switch (G__65511) {
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
var G__65518 = arguments.length;
switch (G__65518) {
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
var G__65522 = arguments.length;
switch (G__65522) {
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
}catch (e65523){if((e65523 instanceof Object)){
var e = e65523;
return console.log("didnt support attachEvent",el,e);
} else {
throw e65523;

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
var seq__65528 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__65529 = null;
var count__65530 = (0);
var i__65531 = (0);
while(true){
if((i__65531 < count__65530)){
var el = chunk__65529.cljs$core$IIndexed$_nth$arity$2(null,i__65531);
var handler_65880__$1 = ((function (seq__65528,chunk__65529,count__65530,i__65531,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65528,chunk__65529,count__65530,i__65531,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65880__$1);


var G__65881 = seq__65528;
var G__65882 = chunk__65529;
var G__65883 = count__65530;
var G__65884 = (i__65531 + (1));
seq__65528 = G__65881;
chunk__65529 = G__65882;
count__65530 = G__65883;
i__65531 = G__65884;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65528);
if(temp__5825__auto__){
var seq__65528__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65528__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65528__$1);
var G__65885 = cljs.core.chunk_rest(seq__65528__$1);
var G__65886 = c__5548__auto__;
var G__65887 = cljs.core.count(c__5548__auto__);
var G__65888 = (0);
seq__65528 = G__65885;
chunk__65529 = G__65886;
count__65530 = G__65887;
i__65531 = G__65888;
continue;
} else {
var el = cljs.core.first(seq__65528__$1);
var handler_65889__$1 = ((function (seq__65528,chunk__65529,count__65530,i__65531,el,seq__65528__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65528,chunk__65529,count__65530,i__65531,el,seq__65528__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65889__$1);


var G__65890 = cljs.core.next(seq__65528__$1);
var G__65891 = null;
var G__65892 = (0);
var G__65893 = (0);
seq__65528 = G__65890;
chunk__65529 = G__65891;
count__65530 = G__65892;
i__65531 = G__65893;
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
var G__65545 = arguments.length;
switch (G__65545) {
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
var seq__65554 = cljs.core.seq(events);
var chunk__65555 = null;
var count__65556 = (0);
var i__65557 = (0);
while(true){
if((i__65557 < count__65556)){
var vec__65564 = chunk__65555.cljs$core$IIndexed$_nth$arity$2(null,i__65557);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65564,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65564,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65895 = seq__65554;
var G__65896 = chunk__65555;
var G__65897 = count__65556;
var G__65898 = (i__65557 + (1));
seq__65554 = G__65895;
chunk__65555 = G__65896;
count__65556 = G__65897;
i__65557 = G__65898;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65554);
if(temp__5825__auto__){
var seq__65554__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65554__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65554__$1);
var G__65899 = cljs.core.chunk_rest(seq__65554__$1);
var G__65900 = c__5548__auto__;
var G__65901 = cljs.core.count(c__5548__auto__);
var G__65902 = (0);
seq__65554 = G__65899;
chunk__65555 = G__65900;
count__65556 = G__65901;
i__65557 = G__65902;
continue;
} else {
var vec__65571 = cljs.core.first(seq__65554__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65571,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65571,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65903 = cljs.core.next(seq__65554__$1);
var G__65904 = null;
var G__65905 = (0);
var G__65906 = (0);
seq__65554 = G__65903;
chunk__65555 = G__65904;
count__65556 = G__65905;
i__65557 = G__65906;
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
var seq__65595 = cljs.core.seq(styles);
var chunk__65596 = null;
var count__65597 = (0);
var i__65598 = (0);
while(true){
if((i__65598 < count__65597)){
var vec__65622 = chunk__65596.cljs$core$IIndexed$_nth$arity$2(null,i__65598);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65622,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65622,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65907 = seq__65595;
var G__65908 = chunk__65596;
var G__65909 = count__65597;
var G__65910 = (i__65598 + (1));
seq__65595 = G__65907;
chunk__65596 = G__65908;
count__65597 = G__65909;
i__65598 = G__65910;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65595);
if(temp__5825__auto__){
var seq__65595__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65595__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65595__$1);
var G__65911 = cljs.core.chunk_rest(seq__65595__$1);
var G__65912 = c__5548__auto__;
var G__65913 = cljs.core.count(c__5548__auto__);
var G__65914 = (0);
seq__65595 = G__65911;
chunk__65596 = G__65912;
count__65597 = G__65913;
i__65598 = G__65914;
continue;
} else {
var vec__65628 = cljs.core.first(seq__65595__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65628,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65628,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65915 = cljs.core.next(seq__65595__$1);
var G__65916 = null;
var G__65917 = (0);
var G__65918 = (0);
seq__65595 = G__65915;
chunk__65596 = G__65916;
count__65597 = G__65917;
i__65598 = G__65918;
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
var G__65632_65919 = key;
var G__65632_65920__$1 = (((G__65632_65919 instanceof cljs.core.Keyword))?G__65632_65919.fqn:null);
switch (G__65632_65920__$1) {
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
var ks_65922 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_65922,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_65922,"aria-");
}
})())){
el.setAttribute(ks_65922,value);
} else {
(el[ks_65922] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__65645){
var map__65646 = p__65645;
var map__65646__$1 = cljs.core.__destructure_map(map__65646);
var props = map__65646__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65646__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__65647 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65647,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65647,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65647,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__65650 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__65650,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__65650;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__65652 = arguments.length;
switch (G__65652) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__65653){
var vec__65654 = p__65653;
var seq__65655 = cljs.core.seq(vec__65654);
var first__65656 = cljs.core.first(seq__65655);
var seq__65655__$1 = cljs.core.next(seq__65655);
var nn = first__65656;
var first__65656__$1 = cljs.core.first(seq__65655__$1);
var seq__65655__$2 = cljs.core.next(seq__65655__$1);
var np = first__65656__$1;
var nc = seq__65655__$2;
var node = vec__65654;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65657 = nn;
var G__65658 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65657,G__65658) : create_fn.call(null,G__65657,G__65658));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65659 = nn;
var G__65660 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65659,G__65660) : create_fn.call(null,G__65659,G__65660));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__65661 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65661,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65661,(1),null);
var seq__65664_65924 = cljs.core.seq(node_children);
var chunk__65665_65925 = null;
var count__65666_65926 = (0);
var i__65667_65927 = (0);
while(true){
if((i__65667_65927 < count__65666_65926)){
var child_struct_65928 = chunk__65665_65925.cljs$core$IIndexed$_nth$arity$2(null,i__65667_65927);
var children_65929 = shadow.dom.dom_node(child_struct_65928);
if(cljs.core.seq_QMARK_(children_65929)){
var seq__65689_65930 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65929));
var chunk__65691_65931 = null;
var count__65692_65932 = (0);
var i__65693_65933 = (0);
while(true){
if((i__65693_65933 < count__65692_65932)){
var child_65934 = chunk__65691_65931.cljs$core$IIndexed$_nth$arity$2(null,i__65693_65933);
if(cljs.core.truth_(child_65934)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65934);


var G__65935 = seq__65689_65930;
var G__65936 = chunk__65691_65931;
var G__65937 = count__65692_65932;
var G__65938 = (i__65693_65933 + (1));
seq__65689_65930 = G__65935;
chunk__65691_65931 = G__65936;
count__65692_65932 = G__65937;
i__65693_65933 = G__65938;
continue;
} else {
var G__65939 = seq__65689_65930;
var G__65940 = chunk__65691_65931;
var G__65941 = count__65692_65932;
var G__65942 = (i__65693_65933 + (1));
seq__65689_65930 = G__65939;
chunk__65691_65931 = G__65940;
count__65692_65932 = G__65941;
i__65693_65933 = G__65942;
continue;
}
} else {
var temp__5825__auto___65943 = cljs.core.seq(seq__65689_65930);
if(temp__5825__auto___65943){
var seq__65689_65944__$1 = temp__5825__auto___65943;
if(cljs.core.chunked_seq_QMARK_(seq__65689_65944__$1)){
var c__5548__auto___65945 = cljs.core.chunk_first(seq__65689_65944__$1);
var G__65946 = cljs.core.chunk_rest(seq__65689_65944__$1);
var G__65947 = c__5548__auto___65945;
var G__65948 = cljs.core.count(c__5548__auto___65945);
var G__65949 = (0);
seq__65689_65930 = G__65946;
chunk__65691_65931 = G__65947;
count__65692_65932 = G__65948;
i__65693_65933 = G__65949;
continue;
} else {
var child_65950 = cljs.core.first(seq__65689_65944__$1);
if(cljs.core.truth_(child_65950)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65950);


var G__65951 = cljs.core.next(seq__65689_65944__$1);
var G__65952 = null;
var G__65953 = (0);
var G__65954 = (0);
seq__65689_65930 = G__65951;
chunk__65691_65931 = G__65952;
count__65692_65932 = G__65953;
i__65693_65933 = G__65954;
continue;
} else {
var G__65955 = cljs.core.next(seq__65689_65944__$1);
var G__65956 = null;
var G__65957 = (0);
var G__65958 = (0);
seq__65689_65930 = G__65955;
chunk__65691_65931 = G__65956;
count__65692_65932 = G__65957;
i__65693_65933 = G__65958;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65929);
}


var G__65959 = seq__65664_65924;
var G__65960 = chunk__65665_65925;
var G__65961 = count__65666_65926;
var G__65962 = (i__65667_65927 + (1));
seq__65664_65924 = G__65959;
chunk__65665_65925 = G__65960;
count__65666_65926 = G__65961;
i__65667_65927 = G__65962;
continue;
} else {
var temp__5825__auto___65963 = cljs.core.seq(seq__65664_65924);
if(temp__5825__auto___65963){
var seq__65664_65964__$1 = temp__5825__auto___65963;
if(cljs.core.chunked_seq_QMARK_(seq__65664_65964__$1)){
var c__5548__auto___65965 = cljs.core.chunk_first(seq__65664_65964__$1);
var G__65966 = cljs.core.chunk_rest(seq__65664_65964__$1);
var G__65967 = c__5548__auto___65965;
var G__65968 = cljs.core.count(c__5548__auto___65965);
var G__65969 = (0);
seq__65664_65924 = G__65966;
chunk__65665_65925 = G__65967;
count__65666_65926 = G__65968;
i__65667_65927 = G__65969;
continue;
} else {
var child_struct_65970 = cljs.core.first(seq__65664_65964__$1);
var children_65971 = shadow.dom.dom_node(child_struct_65970);
if(cljs.core.seq_QMARK_(children_65971)){
var seq__65701_65972 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65971));
var chunk__65703_65973 = null;
var count__65704_65974 = (0);
var i__65705_65975 = (0);
while(true){
if((i__65705_65975 < count__65704_65974)){
var child_65976 = chunk__65703_65973.cljs$core$IIndexed$_nth$arity$2(null,i__65705_65975);
if(cljs.core.truth_(child_65976)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65976);


var G__65977 = seq__65701_65972;
var G__65978 = chunk__65703_65973;
var G__65979 = count__65704_65974;
var G__65980 = (i__65705_65975 + (1));
seq__65701_65972 = G__65977;
chunk__65703_65973 = G__65978;
count__65704_65974 = G__65979;
i__65705_65975 = G__65980;
continue;
} else {
var G__65981 = seq__65701_65972;
var G__65982 = chunk__65703_65973;
var G__65983 = count__65704_65974;
var G__65984 = (i__65705_65975 + (1));
seq__65701_65972 = G__65981;
chunk__65703_65973 = G__65982;
count__65704_65974 = G__65983;
i__65705_65975 = G__65984;
continue;
}
} else {
var temp__5825__auto___65985__$1 = cljs.core.seq(seq__65701_65972);
if(temp__5825__auto___65985__$1){
var seq__65701_65986__$1 = temp__5825__auto___65985__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65701_65986__$1)){
var c__5548__auto___65987 = cljs.core.chunk_first(seq__65701_65986__$1);
var G__65988 = cljs.core.chunk_rest(seq__65701_65986__$1);
var G__65989 = c__5548__auto___65987;
var G__65990 = cljs.core.count(c__5548__auto___65987);
var G__65991 = (0);
seq__65701_65972 = G__65988;
chunk__65703_65973 = G__65989;
count__65704_65974 = G__65990;
i__65705_65975 = G__65991;
continue;
} else {
var child_65992 = cljs.core.first(seq__65701_65986__$1);
if(cljs.core.truth_(child_65992)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65992);


var G__65993 = cljs.core.next(seq__65701_65986__$1);
var G__65994 = null;
var G__65995 = (0);
var G__65996 = (0);
seq__65701_65972 = G__65993;
chunk__65703_65973 = G__65994;
count__65704_65974 = G__65995;
i__65705_65975 = G__65996;
continue;
} else {
var G__65997 = cljs.core.next(seq__65701_65986__$1);
var G__65998 = null;
var G__65999 = (0);
var G__66000 = (0);
seq__65701_65972 = G__65997;
chunk__65703_65973 = G__65998;
count__65704_65974 = G__65999;
i__65705_65975 = G__66000;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65971);
}


var G__66001 = cljs.core.next(seq__65664_65964__$1);
var G__66002 = null;
var G__66003 = (0);
var G__66004 = (0);
seq__65664_65924 = G__66001;
chunk__65665_65925 = G__66002;
count__65666_65926 = G__66003;
i__65667_65927 = G__66004;
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
var seq__65712 = cljs.core.seq(node);
var chunk__65713 = null;
var count__65714 = (0);
var i__65715 = (0);
while(true){
if((i__65715 < count__65714)){
var n = chunk__65713.cljs$core$IIndexed$_nth$arity$2(null,i__65715);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66005 = seq__65712;
var G__66006 = chunk__65713;
var G__66007 = count__65714;
var G__66008 = (i__65715 + (1));
seq__65712 = G__66005;
chunk__65713 = G__66006;
count__65714 = G__66007;
i__65715 = G__66008;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65712);
if(temp__5825__auto__){
var seq__65712__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65712__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65712__$1);
var G__66009 = cljs.core.chunk_rest(seq__65712__$1);
var G__66010 = c__5548__auto__;
var G__66011 = cljs.core.count(c__5548__auto__);
var G__66012 = (0);
seq__65712 = G__66009;
chunk__65713 = G__66010;
count__65714 = G__66011;
i__65715 = G__66012;
continue;
} else {
var n = cljs.core.first(seq__65712__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66013 = cljs.core.next(seq__65712__$1);
var G__66014 = null;
var G__66015 = (0);
var G__66016 = (0);
seq__65712 = G__66013;
chunk__65713 = G__66014;
count__65714 = G__66015;
i__65715 = G__66016;
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
var G__65719 = arguments.length;
switch (G__65719) {
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
var G__65722 = arguments.length;
switch (G__65722) {
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
var G__65728 = arguments.length;
switch (G__65728) {
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
var len__5749__auto___66020 = arguments.length;
var i__5750__auto___66021 = (0);
while(true){
if((i__5750__auto___66021 < len__5749__auto___66020)){
args__5755__auto__.push((arguments[i__5750__auto___66021]));

var G__66022 = (i__5750__auto___66021 + (1));
i__5750__auto___66021 = G__66022;
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
var seq__65734_66023 = cljs.core.seq(nodes);
var chunk__65735_66024 = null;
var count__65736_66025 = (0);
var i__65737_66026 = (0);
while(true){
if((i__65737_66026 < count__65736_66025)){
var node_66027 = chunk__65735_66024.cljs$core$IIndexed$_nth$arity$2(null,i__65737_66026);
fragment.appendChild(shadow.dom._to_dom(node_66027));


var G__66028 = seq__65734_66023;
var G__66029 = chunk__65735_66024;
var G__66030 = count__65736_66025;
var G__66031 = (i__65737_66026 + (1));
seq__65734_66023 = G__66028;
chunk__65735_66024 = G__66029;
count__65736_66025 = G__66030;
i__65737_66026 = G__66031;
continue;
} else {
var temp__5825__auto___66032 = cljs.core.seq(seq__65734_66023);
if(temp__5825__auto___66032){
var seq__65734_66033__$1 = temp__5825__auto___66032;
if(cljs.core.chunked_seq_QMARK_(seq__65734_66033__$1)){
var c__5548__auto___66034 = cljs.core.chunk_first(seq__65734_66033__$1);
var G__66035 = cljs.core.chunk_rest(seq__65734_66033__$1);
var G__66036 = c__5548__auto___66034;
var G__66037 = cljs.core.count(c__5548__auto___66034);
var G__66038 = (0);
seq__65734_66023 = G__66035;
chunk__65735_66024 = G__66036;
count__65736_66025 = G__66037;
i__65737_66026 = G__66038;
continue;
} else {
var node_66039 = cljs.core.first(seq__65734_66033__$1);
fragment.appendChild(shadow.dom._to_dom(node_66039));


var G__66040 = cljs.core.next(seq__65734_66033__$1);
var G__66041 = null;
var G__66042 = (0);
var G__66043 = (0);
seq__65734_66023 = G__66040;
chunk__65735_66024 = G__66041;
count__65736_66025 = G__66042;
i__65737_66026 = G__66043;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq65731){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65731));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65738_66044 = cljs.core.seq(scripts);
var chunk__65739_66045 = null;
var count__65740_66046 = (0);
var i__65741_66047 = (0);
while(true){
if((i__65741_66047 < count__65740_66046)){
var vec__65748_66048 = chunk__65739_66045.cljs$core$IIndexed$_nth$arity$2(null,i__65741_66047);
var script_tag_66049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65748_66048,(0),null);
var script_body_66050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65748_66048,(1),null);
eval(script_body_66050);


var G__66051 = seq__65738_66044;
var G__66052 = chunk__65739_66045;
var G__66053 = count__65740_66046;
var G__66054 = (i__65741_66047 + (1));
seq__65738_66044 = G__66051;
chunk__65739_66045 = G__66052;
count__65740_66046 = G__66053;
i__65741_66047 = G__66054;
continue;
} else {
var temp__5825__auto___66055 = cljs.core.seq(seq__65738_66044);
if(temp__5825__auto___66055){
var seq__65738_66056__$1 = temp__5825__auto___66055;
if(cljs.core.chunked_seq_QMARK_(seq__65738_66056__$1)){
var c__5548__auto___66057 = cljs.core.chunk_first(seq__65738_66056__$1);
var G__66058 = cljs.core.chunk_rest(seq__65738_66056__$1);
var G__66059 = c__5548__auto___66057;
var G__66060 = cljs.core.count(c__5548__auto___66057);
var G__66061 = (0);
seq__65738_66044 = G__66058;
chunk__65739_66045 = G__66059;
count__65740_66046 = G__66060;
i__65741_66047 = G__66061;
continue;
} else {
var vec__65752_66062 = cljs.core.first(seq__65738_66056__$1);
var script_tag_66063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65752_66062,(0),null);
var script_body_66064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65752_66062,(1),null);
eval(script_body_66064);


var G__66065 = cljs.core.next(seq__65738_66056__$1);
var G__66066 = null;
var G__66067 = (0);
var G__66068 = (0);
seq__65738_66044 = G__66065;
chunk__65739_66045 = G__66066;
count__65740_66046 = G__66067;
i__65741_66047 = G__66068;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__65755){
var vec__65758 = p__65755;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65758,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65758,(1),null);
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
var G__65767 = arguments.length;
switch (G__65767) {
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
var seq__65770 = cljs.core.seq(style_keys);
var chunk__65771 = null;
var count__65772 = (0);
var i__65773 = (0);
while(true){
if((i__65773 < count__65772)){
var it = chunk__65771.cljs$core$IIndexed$_nth$arity$2(null,i__65773);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66070 = seq__65770;
var G__66071 = chunk__65771;
var G__66072 = count__65772;
var G__66073 = (i__65773 + (1));
seq__65770 = G__66070;
chunk__65771 = G__66071;
count__65772 = G__66072;
i__65773 = G__66073;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65770);
if(temp__5825__auto__){
var seq__65770__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65770__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65770__$1);
var G__66074 = cljs.core.chunk_rest(seq__65770__$1);
var G__66075 = c__5548__auto__;
var G__66076 = cljs.core.count(c__5548__auto__);
var G__66077 = (0);
seq__65770 = G__66074;
chunk__65771 = G__66075;
count__65772 = G__66076;
i__65773 = G__66077;
continue;
} else {
var it = cljs.core.first(seq__65770__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66078 = cljs.core.next(seq__65770__$1);
var G__66079 = null;
var G__66080 = (0);
var G__66081 = (0);
seq__65770 = G__66078;
chunk__65771 = G__66079;
count__65772 = G__66080;
i__65773 = G__66081;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65778,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65782 = k65778;
var G__65782__$1 = (((G__65782 instanceof cljs.core.Keyword))?G__65782.fqn:null);
switch (G__65782__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65778,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65783){
var vec__65784 = p__65783;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65784,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65784,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65777){
var self__ = this;
var G__65777__$1 = this;
return (new cljs.core.RecordIter((0),G__65777__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65779,other65780){
var self__ = this;
var this65779__$1 = this;
return (((!((other65780 == null)))) && ((((this65779__$1.constructor === other65780.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65779__$1.x,other65780.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65779__$1.y,other65780.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65779__$1.__extmap,other65780.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65778){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65787 = k65778;
var G__65787__$1 = (((G__65787 instanceof cljs.core.Keyword))?G__65787.fqn:null);
switch (G__65787__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65778);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65777){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65788 = cljs.core.keyword_identical_QMARK_;
var expr__65789 = k__5332__auto__;
if(cljs.core.truth_((pred__65788.cljs$core$IFn$_invoke$arity$2 ? pred__65788.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__65789) : pred__65788.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__65789)))){
return (new shadow.dom.Coordinate(G__65777,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65788.cljs$core$IFn$_invoke$arity$2 ? pred__65788.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__65789) : pred__65788.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__65789)))){
return (new shadow.dom.Coordinate(self__.x,G__65777,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65777),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65777){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__65777,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__65781){
var extmap__5365__auto__ = (function (){var G__65791 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65781,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65781)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65791);
} else {
return G__65791;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__65781),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__65781),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65793,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65797 = k65793;
var G__65797__$1 = (((G__65797 instanceof cljs.core.Keyword))?G__65797.fqn:null);
switch (G__65797__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65793,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65798){
var vec__65799 = p__65798;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65799,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65799,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65792){
var self__ = this;
var G__65792__$1 = this;
return (new cljs.core.RecordIter((0),G__65792__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65794,other65795){
var self__ = this;
var this65794__$1 = this;
return (((!((other65795 == null)))) && ((((this65794__$1.constructor === other65795.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65794__$1.w,other65795.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65794__$1.h,other65795.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65794__$1.__extmap,other65795.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65793){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65802 = k65793;
var G__65802__$1 = (((G__65802 instanceof cljs.core.Keyword))?G__65802.fqn:null);
switch (G__65802__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65793);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65792){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65803 = cljs.core.keyword_identical_QMARK_;
var expr__65804 = k__5332__auto__;
if(cljs.core.truth_((pred__65803.cljs$core$IFn$_invoke$arity$2 ? pred__65803.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__65804) : pred__65803.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__65804)))){
return (new shadow.dom.Size(G__65792,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65803.cljs$core$IFn$_invoke$arity$2 ? pred__65803.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__65804) : pred__65803.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__65804)))){
return (new shadow.dom.Size(self__.w,G__65792,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65792),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65792){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65792,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65796){
var extmap__5365__auto__ = (function (){var G__65806 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65796,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65796)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65806);
} else {
return G__65806;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65796),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65796),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__66086 = (i + (1));
var G__66087 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__66086;
ret = G__66087;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65811){
var vec__65812 = p__65811;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65812,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65812,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65816 = arguments.length;
switch (G__65816) {
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
var G__66089 = ps;
var G__66090 = (i + (1));
el__$1 = G__66089;
i = G__66090;
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
var vec__65817 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65817,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65817,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65817,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65820_66091 = cljs.core.seq(props);
var chunk__65821_66092 = null;
var count__65822_66093 = (0);
var i__65823_66094 = (0);
while(true){
if((i__65823_66094 < count__65822_66093)){
var vec__65830_66095 = chunk__65821_66092.cljs$core$IIndexed$_nth$arity$2(null,i__65823_66094);
var k_66096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65830_66095,(0),null);
var v_66097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65830_66095,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_66096);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66096),v_66097);


var G__66098 = seq__65820_66091;
var G__66099 = chunk__65821_66092;
var G__66100 = count__65822_66093;
var G__66101 = (i__65823_66094 + (1));
seq__65820_66091 = G__66098;
chunk__65821_66092 = G__66099;
count__65822_66093 = G__66100;
i__65823_66094 = G__66101;
continue;
} else {
var temp__5825__auto___66102 = cljs.core.seq(seq__65820_66091);
if(temp__5825__auto___66102){
var seq__65820_66103__$1 = temp__5825__auto___66102;
if(cljs.core.chunked_seq_QMARK_(seq__65820_66103__$1)){
var c__5548__auto___66104 = cljs.core.chunk_first(seq__65820_66103__$1);
var G__66105 = cljs.core.chunk_rest(seq__65820_66103__$1);
var G__66106 = c__5548__auto___66104;
var G__66107 = cljs.core.count(c__5548__auto___66104);
var G__66108 = (0);
seq__65820_66091 = G__66105;
chunk__65821_66092 = G__66106;
count__65822_66093 = G__66107;
i__65823_66094 = G__66108;
continue;
} else {
var vec__65833_66109 = cljs.core.first(seq__65820_66103__$1);
var k_66110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65833_66109,(0),null);
var v_66111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65833_66109,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_66110);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66110),v_66111);


var G__66112 = cljs.core.next(seq__65820_66103__$1);
var G__66113 = null;
var G__66114 = (0);
var G__66115 = (0);
seq__65820_66091 = G__66112;
chunk__65821_66092 = G__66113;
count__65822_66093 = G__66114;
i__65823_66094 = G__66115;
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
var vec__65837 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65837,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65837,(1),null);
var seq__65840_66116 = cljs.core.seq(node_children);
var chunk__65842_66117 = null;
var count__65843_66118 = (0);
var i__65844_66119 = (0);
while(true){
if((i__65844_66119 < count__65843_66118)){
var child_struct_66120 = chunk__65842_66117.cljs$core$IIndexed$_nth$arity$2(null,i__65844_66119);
if((!((child_struct_66120 == null)))){
if(typeof child_struct_66120 === 'string'){
var text_66121 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66121),child_struct_66120].join(''));
} else {
var children_66122 = shadow.dom.svg_node(child_struct_66120);
if(cljs.core.seq_QMARK_(children_66122)){
var seq__65858_66123 = cljs.core.seq(children_66122);
var chunk__65860_66124 = null;
var count__65861_66125 = (0);
var i__65862_66126 = (0);
while(true){
if((i__65862_66126 < count__65861_66125)){
var child_66127 = chunk__65860_66124.cljs$core$IIndexed$_nth$arity$2(null,i__65862_66126);
if(cljs.core.truth_(child_66127)){
node.appendChild(child_66127);


var G__66128 = seq__65858_66123;
var G__66129 = chunk__65860_66124;
var G__66130 = count__65861_66125;
var G__66131 = (i__65862_66126 + (1));
seq__65858_66123 = G__66128;
chunk__65860_66124 = G__66129;
count__65861_66125 = G__66130;
i__65862_66126 = G__66131;
continue;
} else {
var G__66132 = seq__65858_66123;
var G__66133 = chunk__65860_66124;
var G__66134 = count__65861_66125;
var G__66135 = (i__65862_66126 + (1));
seq__65858_66123 = G__66132;
chunk__65860_66124 = G__66133;
count__65861_66125 = G__66134;
i__65862_66126 = G__66135;
continue;
}
} else {
var temp__5825__auto___66136 = cljs.core.seq(seq__65858_66123);
if(temp__5825__auto___66136){
var seq__65858_66137__$1 = temp__5825__auto___66136;
if(cljs.core.chunked_seq_QMARK_(seq__65858_66137__$1)){
var c__5548__auto___66138 = cljs.core.chunk_first(seq__65858_66137__$1);
var G__66139 = cljs.core.chunk_rest(seq__65858_66137__$1);
var G__66140 = c__5548__auto___66138;
var G__66141 = cljs.core.count(c__5548__auto___66138);
var G__66142 = (0);
seq__65858_66123 = G__66139;
chunk__65860_66124 = G__66140;
count__65861_66125 = G__66141;
i__65862_66126 = G__66142;
continue;
} else {
var child_66143 = cljs.core.first(seq__65858_66137__$1);
if(cljs.core.truth_(child_66143)){
node.appendChild(child_66143);


var G__66144 = cljs.core.next(seq__65858_66137__$1);
var G__66145 = null;
var G__66146 = (0);
var G__66147 = (0);
seq__65858_66123 = G__66144;
chunk__65860_66124 = G__66145;
count__65861_66125 = G__66146;
i__65862_66126 = G__66147;
continue;
} else {
var G__66148 = cljs.core.next(seq__65858_66137__$1);
var G__66149 = null;
var G__66150 = (0);
var G__66151 = (0);
seq__65858_66123 = G__66148;
chunk__65860_66124 = G__66149;
count__65861_66125 = G__66150;
i__65862_66126 = G__66151;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66122);
}
}


var G__66152 = seq__65840_66116;
var G__66153 = chunk__65842_66117;
var G__66154 = count__65843_66118;
var G__66155 = (i__65844_66119 + (1));
seq__65840_66116 = G__66152;
chunk__65842_66117 = G__66153;
count__65843_66118 = G__66154;
i__65844_66119 = G__66155;
continue;
} else {
var G__66156 = seq__65840_66116;
var G__66157 = chunk__65842_66117;
var G__66158 = count__65843_66118;
var G__66159 = (i__65844_66119 + (1));
seq__65840_66116 = G__66156;
chunk__65842_66117 = G__66157;
count__65843_66118 = G__66158;
i__65844_66119 = G__66159;
continue;
}
} else {
var temp__5825__auto___66160 = cljs.core.seq(seq__65840_66116);
if(temp__5825__auto___66160){
var seq__65840_66161__$1 = temp__5825__auto___66160;
if(cljs.core.chunked_seq_QMARK_(seq__65840_66161__$1)){
var c__5548__auto___66162 = cljs.core.chunk_first(seq__65840_66161__$1);
var G__66163 = cljs.core.chunk_rest(seq__65840_66161__$1);
var G__66164 = c__5548__auto___66162;
var G__66165 = cljs.core.count(c__5548__auto___66162);
var G__66166 = (0);
seq__65840_66116 = G__66163;
chunk__65842_66117 = G__66164;
count__65843_66118 = G__66165;
i__65844_66119 = G__66166;
continue;
} else {
var child_struct_66167 = cljs.core.first(seq__65840_66161__$1);
if((!((child_struct_66167 == null)))){
if(typeof child_struct_66167 === 'string'){
var text_66168 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66168),child_struct_66167].join(''));
} else {
var children_66169 = shadow.dom.svg_node(child_struct_66167);
if(cljs.core.seq_QMARK_(children_66169)){
var seq__65864_66170 = cljs.core.seq(children_66169);
var chunk__65866_66171 = null;
var count__65867_66172 = (0);
var i__65868_66173 = (0);
while(true){
if((i__65868_66173 < count__65867_66172)){
var child_66174 = chunk__65866_66171.cljs$core$IIndexed$_nth$arity$2(null,i__65868_66173);
if(cljs.core.truth_(child_66174)){
node.appendChild(child_66174);


var G__66175 = seq__65864_66170;
var G__66176 = chunk__65866_66171;
var G__66177 = count__65867_66172;
var G__66178 = (i__65868_66173 + (1));
seq__65864_66170 = G__66175;
chunk__65866_66171 = G__66176;
count__65867_66172 = G__66177;
i__65868_66173 = G__66178;
continue;
} else {
var G__66179 = seq__65864_66170;
var G__66180 = chunk__65866_66171;
var G__66181 = count__65867_66172;
var G__66182 = (i__65868_66173 + (1));
seq__65864_66170 = G__66179;
chunk__65866_66171 = G__66180;
count__65867_66172 = G__66181;
i__65868_66173 = G__66182;
continue;
}
} else {
var temp__5825__auto___66183__$1 = cljs.core.seq(seq__65864_66170);
if(temp__5825__auto___66183__$1){
var seq__65864_66184__$1 = temp__5825__auto___66183__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65864_66184__$1)){
var c__5548__auto___66185 = cljs.core.chunk_first(seq__65864_66184__$1);
var G__66186 = cljs.core.chunk_rest(seq__65864_66184__$1);
var G__66187 = c__5548__auto___66185;
var G__66188 = cljs.core.count(c__5548__auto___66185);
var G__66189 = (0);
seq__65864_66170 = G__66186;
chunk__65866_66171 = G__66187;
count__65867_66172 = G__66188;
i__65868_66173 = G__66189;
continue;
} else {
var child_66190 = cljs.core.first(seq__65864_66184__$1);
if(cljs.core.truth_(child_66190)){
node.appendChild(child_66190);


var G__66191 = cljs.core.next(seq__65864_66184__$1);
var G__66192 = null;
var G__66193 = (0);
var G__66194 = (0);
seq__65864_66170 = G__66191;
chunk__65866_66171 = G__66192;
count__65867_66172 = G__66193;
i__65868_66173 = G__66194;
continue;
} else {
var G__66195 = cljs.core.next(seq__65864_66184__$1);
var G__66196 = null;
var G__66197 = (0);
var G__66198 = (0);
seq__65864_66170 = G__66195;
chunk__65866_66171 = G__66196;
count__65867_66172 = G__66197;
i__65868_66173 = G__66198;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66169);
}
}


var G__66199 = cljs.core.next(seq__65840_66161__$1);
var G__66200 = null;
var G__66201 = (0);
var G__66202 = (0);
seq__65840_66116 = G__66199;
chunk__65842_66117 = G__66200;
count__65843_66118 = G__66201;
i__65844_66119 = G__66202;
continue;
} else {
var G__66203 = cljs.core.next(seq__65840_66161__$1);
var G__66204 = null;
var G__66205 = (0);
var G__66206 = (0);
seq__65840_66116 = G__66203;
chunk__65842_66117 = G__66204;
count__65843_66118 = G__66205;
i__65844_66119 = G__66206;
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
var len__5749__auto___66207 = arguments.length;
var i__5750__auto___66208 = (0);
while(true){
if((i__5750__auto___66208 < len__5749__auto___66207)){
args__5755__auto__.push((arguments[i__5750__auto___66208]));

var G__66209 = (i__5750__auto___66208 + (1));
i__5750__auto___66208 = G__66209;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq65870){
var G__65871 = cljs.core.first(seq65870);
var seq65870__$1 = cljs.core.next(seq65870);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65871,seq65870__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
