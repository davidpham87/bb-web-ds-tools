goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_69090 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_69090(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_69091 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_69091(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__68703 = coll;
var G__68704 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__68703,G__68704) : shadow.dom.lazy_native_coll_seq.call(null,G__68703,G__68704));
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
var G__68721 = arguments.length;
switch (G__68721) {
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
var G__68726 = arguments.length;
switch (G__68726) {
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
var G__68730 = arguments.length;
switch (G__68730) {
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
var G__68735 = arguments.length;
switch (G__68735) {
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
var G__68740 = arguments.length;
switch (G__68740) {
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
var G__68745 = arguments.length;
switch (G__68745) {
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
}catch (e68754){if((e68754 instanceof Object)){
var e = e68754;
return console.log("didnt support attachEvent",el,e);
} else {
throw e68754;

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
var seq__68789 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__68790 = null;
var count__68791 = (0);
var i__68792 = (0);
while(true){
if((i__68792 < count__68791)){
var el = chunk__68790.cljs$core$IIndexed$_nth$arity$2(null,i__68792);
var handler_69098__$1 = ((function (seq__68789,chunk__68790,count__68791,i__68792,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__68789,chunk__68790,count__68791,i__68792,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_69098__$1);


var G__69099 = seq__68789;
var G__69100 = chunk__68790;
var G__69101 = count__68791;
var G__69102 = (i__68792 + (1));
seq__68789 = G__69099;
chunk__68790 = G__69100;
count__68791 = G__69101;
i__68792 = G__69102;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68789);
if(temp__5825__auto__){
var seq__68789__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68789__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68789__$1);
var G__69103 = cljs.core.chunk_rest(seq__68789__$1);
var G__69104 = c__5548__auto__;
var G__69105 = cljs.core.count(c__5548__auto__);
var G__69106 = (0);
seq__68789 = G__69103;
chunk__68790 = G__69104;
count__68791 = G__69105;
i__68792 = G__69106;
continue;
} else {
var el = cljs.core.first(seq__68789__$1);
var handler_69107__$1 = ((function (seq__68789,chunk__68790,count__68791,i__68792,el,seq__68789__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__68789,chunk__68790,count__68791,i__68792,el,seq__68789__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_69107__$1);


var G__69108 = cljs.core.next(seq__68789__$1);
var G__69109 = null;
var G__69110 = (0);
var G__69111 = (0);
seq__68789 = G__69108;
chunk__68790 = G__69109;
count__68791 = G__69110;
i__68792 = G__69111;
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
var G__68828 = arguments.length;
switch (G__68828) {
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
var seq__68830 = cljs.core.seq(events);
var chunk__68831 = null;
var count__68832 = (0);
var i__68833 = (0);
while(true){
if((i__68833 < count__68832)){
var vec__68840 = chunk__68831.cljs$core$IIndexed$_nth$arity$2(null,i__68833);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68840,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68840,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__69113 = seq__68830;
var G__69114 = chunk__68831;
var G__69115 = count__68832;
var G__69116 = (i__68833 + (1));
seq__68830 = G__69113;
chunk__68831 = G__69114;
count__68832 = G__69115;
i__68833 = G__69116;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68830);
if(temp__5825__auto__){
var seq__68830__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68830__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68830__$1);
var G__69117 = cljs.core.chunk_rest(seq__68830__$1);
var G__69118 = c__5548__auto__;
var G__69119 = cljs.core.count(c__5548__auto__);
var G__69120 = (0);
seq__68830 = G__69117;
chunk__68831 = G__69118;
count__68832 = G__69119;
i__68833 = G__69120;
continue;
} else {
var vec__68846 = cljs.core.first(seq__68830__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68846,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68846,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__69121 = cljs.core.next(seq__68830__$1);
var G__69122 = null;
var G__69123 = (0);
var G__69124 = (0);
seq__68830 = G__69121;
chunk__68831 = G__69122;
count__68832 = G__69123;
i__68833 = G__69124;
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
var seq__68852 = cljs.core.seq(styles);
var chunk__68853 = null;
var count__68854 = (0);
var i__68855 = (0);
while(true){
if((i__68855 < count__68854)){
var vec__68862 = chunk__68853.cljs$core$IIndexed$_nth$arity$2(null,i__68855);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68862,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68862,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__69125 = seq__68852;
var G__69126 = chunk__68853;
var G__69127 = count__68854;
var G__69128 = (i__68855 + (1));
seq__68852 = G__69125;
chunk__68853 = G__69126;
count__68854 = G__69127;
i__68855 = G__69128;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68852);
if(temp__5825__auto__){
var seq__68852__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68852__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68852__$1);
var G__69129 = cljs.core.chunk_rest(seq__68852__$1);
var G__69130 = c__5548__auto__;
var G__69131 = cljs.core.count(c__5548__auto__);
var G__69132 = (0);
seq__68852 = G__69129;
chunk__68853 = G__69130;
count__68854 = G__69131;
i__68855 = G__69132;
continue;
} else {
var vec__68869 = cljs.core.first(seq__68852__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68869,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68869,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__69133 = cljs.core.next(seq__68852__$1);
var G__69134 = null;
var G__69135 = (0);
var G__69136 = (0);
seq__68852 = G__69133;
chunk__68853 = G__69134;
count__68854 = G__69135;
i__68855 = G__69136;
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
var G__68875_69137 = key;
var G__68875_69138__$1 = (((G__68875_69137 instanceof cljs.core.Keyword))?G__68875_69137.fqn:null);
switch (G__68875_69138__$1) {
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
var ks_69140 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_69140,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_69140,"aria-");
}
})())){
el.setAttribute(ks_69140,value);
} else {
(el[ks_69140] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__68880){
var map__68881 = p__68880;
var map__68881__$1 = cljs.core.__destructure_map(map__68881);
var props = map__68881__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68881__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__68883 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68883,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68883,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68883,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__68887 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__68887,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__68887;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__68889 = arguments.length;
switch (G__68889) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__68892){
var vec__68893 = p__68892;
var seq__68894 = cljs.core.seq(vec__68893);
var first__68895 = cljs.core.first(seq__68894);
var seq__68894__$1 = cljs.core.next(seq__68894);
var nn = first__68895;
var first__68895__$1 = cljs.core.first(seq__68894__$1);
var seq__68894__$2 = cljs.core.next(seq__68894__$1);
var np = first__68895__$1;
var nc = seq__68894__$2;
var node = vec__68893;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__68896 = nn;
var G__68897 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__68896,G__68897) : create_fn.call(null,G__68896,G__68897));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__68899 = nn;
var G__68900 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__68899,G__68900) : create_fn.call(null,G__68899,G__68900));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__68901 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68901,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68901,(1),null);
var seq__68905_69142 = cljs.core.seq(node_children);
var chunk__68906_69143 = null;
var count__68907_69144 = (0);
var i__68908_69145 = (0);
while(true){
if((i__68908_69145 < count__68907_69144)){
var child_struct_69146 = chunk__68906_69143.cljs$core$IIndexed$_nth$arity$2(null,i__68908_69145);
var children_69147 = shadow.dom.dom_node(child_struct_69146);
if(cljs.core.seq_QMARK_(children_69147)){
var seq__68926_69148 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_69147));
var chunk__68928_69149 = null;
var count__68929_69150 = (0);
var i__68930_69151 = (0);
while(true){
if((i__68930_69151 < count__68929_69150)){
var child_69152 = chunk__68928_69149.cljs$core$IIndexed$_nth$arity$2(null,i__68930_69151);
if(cljs.core.truth_(child_69152)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69152);


var G__69153 = seq__68926_69148;
var G__69154 = chunk__68928_69149;
var G__69155 = count__68929_69150;
var G__69156 = (i__68930_69151 + (1));
seq__68926_69148 = G__69153;
chunk__68928_69149 = G__69154;
count__68929_69150 = G__69155;
i__68930_69151 = G__69156;
continue;
} else {
var G__69157 = seq__68926_69148;
var G__69158 = chunk__68928_69149;
var G__69159 = count__68929_69150;
var G__69160 = (i__68930_69151 + (1));
seq__68926_69148 = G__69157;
chunk__68928_69149 = G__69158;
count__68929_69150 = G__69159;
i__68930_69151 = G__69160;
continue;
}
} else {
var temp__5825__auto___69161 = cljs.core.seq(seq__68926_69148);
if(temp__5825__auto___69161){
var seq__68926_69162__$1 = temp__5825__auto___69161;
if(cljs.core.chunked_seq_QMARK_(seq__68926_69162__$1)){
var c__5548__auto___69163 = cljs.core.chunk_first(seq__68926_69162__$1);
var G__69164 = cljs.core.chunk_rest(seq__68926_69162__$1);
var G__69165 = c__5548__auto___69163;
var G__69166 = cljs.core.count(c__5548__auto___69163);
var G__69167 = (0);
seq__68926_69148 = G__69164;
chunk__68928_69149 = G__69165;
count__68929_69150 = G__69166;
i__68930_69151 = G__69167;
continue;
} else {
var child_69168 = cljs.core.first(seq__68926_69162__$1);
if(cljs.core.truth_(child_69168)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69168);


var G__69169 = cljs.core.next(seq__68926_69162__$1);
var G__69170 = null;
var G__69171 = (0);
var G__69172 = (0);
seq__68926_69148 = G__69169;
chunk__68928_69149 = G__69170;
count__68929_69150 = G__69171;
i__68930_69151 = G__69172;
continue;
} else {
var G__69173 = cljs.core.next(seq__68926_69162__$1);
var G__69174 = null;
var G__69175 = (0);
var G__69176 = (0);
seq__68926_69148 = G__69173;
chunk__68928_69149 = G__69174;
count__68929_69150 = G__69175;
i__68930_69151 = G__69176;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_69147);
}


var G__69177 = seq__68905_69142;
var G__69178 = chunk__68906_69143;
var G__69179 = count__68907_69144;
var G__69180 = (i__68908_69145 + (1));
seq__68905_69142 = G__69177;
chunk__68906_69143 = G__69178;
count__68907_69144 = G__69179;
i__68908_69145 = G__69180;
continue;
} else {
var temp__5825__auto___69181 = cljs.core.seq(seq__68905_69142);
if(temp__5825__auto___69181){
var seq__68905_69182__$1 = temp__5825__auto___69181;
if(cljs.core.chunked_seq_QMARK_(seq__68905_69182__$1)){
var c__5548__auto___69183 = cljs.core.chunk_first(seq__68905_69182__$1);
var G__69184 = cljs.core.chunk_rest(seq__68905_69182__$1);
var G__69185 = c__5548__auto___69183;
var G__69186 = cljs.core.count(c__5548__auto___69183);
var G__69187 = (0);
seq__68905_69142 = G__69184;
chunk__68906_69143 = G__69185;
count__68907_69144 = G__69186;
i__68908_69145 = G__69187;
continue;
} else {
var child_struct_69188 = cljs.core.first(seq__68905_69182__$1);
var children_69189 = shadow.dom.dom_node(child_struct_69188);
if(cljs.core.seq_QMARK_(children_69189)){
var seq__68932_69190 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_69189));
var chunk__68934_69191 = null;
var count__68935_69192 = (0);
var i__68936_69193 = (0);
while(true){
if((i__68936_69193 < count__68935_69192)){
var child_69194 = chunk__68934_69191.cljs$core$IIndexed$_nth$arity$2(null,i__68936_69193);
if(cljs.core.truth_(child_69194)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69194);


var G__69195 = seq__68932_69190;
var G__69196 = chunk__68934_69191;
var G__69197 = count__68935_69192;
var G__69198 = (i__68936_69193 + (1));
seq__68932_69190 = G__69195;
chunk__68934_69191 = G__69196;
count__68935_69192 = G__69197;
i__68936_69193 = G__69198;
continue;
} else {
var G__69199 = seq__68932_69190;
var G__69200 = chunk__68934_69191;
var G__69201 = count__68935_69192;
var G__69202 = (i__68936_69193 + (1));
seq__68932_69190 = G__69199;
chunk__68934_69191 = G__69200;
count__68935_69192 = G__69201;
i__68936_69193 = G__69202;
continue;
}
} else {
var temp__5825__auto___69203__$1 = cljs.core.seq(seq__68932_69190);
if(temp__5825__auto___69203__$1){
var seq__68932_69204__$1 = temp__5825__auto___69203__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68932_69204__$1)){
var c__5548__auto___69205 = cljs.core.chunk_first(seq__68932_69204__$1);
var G__69206 = cljs.core.chunk_rest(seq__68932_69204__$1);
var G__69207 = c__5548__auto___69205;
var G__69208 = cljs.core.count(c__5548__auto___69205);
var G__69209 = (0);
seq__68932_69190 = G__69206;
chunk__68934_69191 = G__69207;
count__68935_69192 = G__69208;
i__68936_69193 = G__69209;
continue;
} else {
var child_69210 = cljs.core.first(seq__68932_69204__$1);
if(cljs.core.truth_(child_69210)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69210);


var G__69211 = cljs.core.next(seq__68932_69204__$1);
var G__69212 = null;
var G__69213 = (0);
var G__69214 = (0);
seq__68932_69190 = G__69211;
chunk__68934_69191 = G__69212;
count__68935_69192 = G__69213;
i__68936_69193 = G__69214;
continue;
} else {
var G__69215 = cljs.core.next(seq__68932_69204__$1);
var G__69216 = null;
var G__69217 = (0);
var G__69218 = (0);
seq__68932_69190 = G__69215;
chunk__68934_69191 = G__69216;
count__68935_69192 = G__69217;
i__68936_69193 = G__69218;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_69189);
}


var G__69219 = cljs.core.next(seq__68905_69182__$1);
var G__69220 = null;
var G__69221 = (0);
var G__69222 = (0);
seq__68905_69142 = G__69219;
chunk__68906_69143 = G__69220;
count__68907_69144 = G__69221;
i__68908_69145 = G__69222;
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
var seq__68942 = cljs.core.seq(node);
var chunk__68943 = null;
var count__68944 = (0);
var i__68945 = (0);
while(true){
if((i__68945 < count__68944)){
var n = chunk__68943.cljs$core$IIndexed$_nth$arity$2(null,i__68945);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__69223 = seq__68942;
var G__69224 = chunk__68943;
var G__69225 = count__68944;
var G__69226 = (i__68945 + (1));
seq__68942 = G__69223;
chunk__68943 = G__69224;
count__68944 = G__69225;
i__68945 = G__69226;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68942);
if(temp__5825__auto__){
var seq__68942__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68942__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68942__$1);
var G__69227 = cljs.core.chunk_rest(seq__68942__$1);
var G__69228 = c__5548__auto__;
var G__69229 = cljs.core.count(c__5548__auto__);
var G__69230 = (0);
seq__68942 = G__69227;
chunk__68943 = G__69228;
count__68944 = G__69229;
i__68945 = G__69230;
continue;
} else {
var n = cljs.core.first(seq__68942__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__69231 = cljs.core.next(seq__68942__$1);
var G__69232 = null;
var G__69233 = (0);
var G__69234 = (0);
seq__68942 = G__69231;
chunk__68943 = G__69232;
count__68944 = G__69233;
i__68945 = G__69234;
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
var G__68950 = arguments.length;
switch (G__68950) {
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
var G__68955 = arguments.length;
switch (G__68955) {
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
var G__68958 = arguments.length;
switch (G__68958) {
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
var len__5749__auto___69238 = arguments.length;
var i__5750__auto___69239 = (0);
while(true){
if((i__5750__auto___69239 < len__5749__auto___69238)){
args__5755__auto__.push((arguments[i__5750__auto___69239]));

var G__69240 = (i__5750__auto___69239 + (1));
i__5750__auto___69239 = G__69240;
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
var seq__68960_69241 = cljs.core.seq(nodes);
var chunk__68961_69242 = null;
var count__68962_69243 = (0);
var i__68963_69244 = (0);
while(true){
if((i__68963_69244 < count__68962_69243)){
var node_69245 = chunk__68961_69242.cljs$core$IIndexed$_nth$arity$2(null,i__68963_69244);
fragment.appendChild(shadow.dom._to_dom(node_69245));


var G__69246 = seq__68960_69241;
var G__69247 = chunk__68961_69242;
var G__69248 = count__68962_69243;
var G__69249 = (i__68963_69244 + (1));
seq__68960_69241 = G__69246;
chunk__68961_69242 = G__69247;
count__68962_69243 = G__69248;
i__68963_69244 = G__69249;
continue;
} else {
var temp__5825__auto___69250 = cljs.core.seq(seq__68960_69241);
if(temp__5825__auto___69250){
var seq__68960_69251__$1 = temp__5825__auto___69250;
if(cljs.core.chunked_seq_QMARK_(seq__68960_69251__$1)){
var c__5548__auto___69252 = cljs.core.chunk_first(seq__68960_69251__$1);
var G__69253 = cljs.core.chunk_rest(seq__68960_69251__$1);
var G__69254 = c__5548__auto___69252;
var G__69255 = cljs.core.count(c__5548__auto___69252);
var G__69256 = (0);
seq__68960_69241 = G__69253;
chunk__68961_69242 = G__69254;
count__68962_69243 = G__69255;
i__68963_69244 = G__69256;
continue;
} else {
var node_69257 = cljs.core.first(seq__68960_69251__$1);
fragment.appendChild(shadow.dom._to_dom(node_69257));


var G__69258 = cljs.core.next(seq__68960_69251__$1);
var G__69259 = null;
var G__69260 = (0);
var G__69261 = (0);
seq__68960_69241 = G__69258;
chunk__68961_69242 = G__69259;
count__68962_69243 = G__69260;
i__68963_69244 = G__69261;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq68959){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68959));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__68964_69262 = cljs.core.seq(scripts);
var chunk__68965_69263 = null;
var count__68966_69264 = (0);
var i__68967_69265 = (0);
while(true){
if((i__68967_69265 < count__68966_69264)){
var vec__68974_69266 = chunk__68965_69263.cljs$core$IIndexed$_nth$arity$2(null,i__68967_69265);
var script_tag_69267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68974_69266,(0),null);
var script_body_69268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68974_69266,(1),null);
eval(script_body_69268);


var G__69269 = seq__68964_69262;
var G__69270 = chunk__68965_69263;
var G__69271 = count__68966_69264;
var G__69272 = (i__68967_69265 + (1));
seq__68964_69262 = G__69269;
chunk__68965_69263 = G__69270;
count__68966_69264 = G__69271;
i__68967_69265 = G__69272;
continue;
} else {
var temp__5825__auto___69273 = cljs.core.seq(seq__68964_69262);
if(temp__5825__auto___69273){
var seq__68964_69274__$1 = temp__5825__auto___69273;
if(cljs.core.chunked_seq_QMARK_(seq__68964_69274__$1)){
var c__5548__auto___69275 = cljs.core.chunk_first(seq__68964_69274__$1);
var G__69276 = cljs.core.chunk_rest(seq__68964_69274__$1);
var G__69277 = c__5548__auto___69275;
var G__69278 = cljs.core.count(c__5548__auto___69275);
var G__69279 = (0);
seq__68964_69262 = G__69276;
chunk__68965_69263 = G__69277;
count__68966_69264 = G__69278;
i__68967_69265 = G__69279;
continue;
} else {
var vec__68979_69280 = cljs.core.first(seq__68964_69274__$1);
var script_tag_69281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68979_69280,(0),null);
var script_body_69282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68979_69280,(1),null);
eval(script_body_69282);


var G__69283 = cljs.core.next(seq__68964_69274__$1);
var G__69284 = null;
var G__69285 = (0);
var G__69286 = (0);
seq__68964_69262 = G__69283;
chunk__68965_69263 = G__69284;
count__68966_69264 = G__69285;
i__68967_69265 = G__69286;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__68982){
var vec__68984 = p__68982;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68984,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68984,(1),null);
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
var G__68990 = arguments.length;
switch (G__68990) {
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
var seq__68991 = cljs.core.seq(style_keys);
var chunk__68992 = null;
var count__68993 = (0);
var i__68994 = (0);
while(true){
if((i__68994 < count__68993)){
var it = chunk__68992.cljs$core$IIndexed$_nth$arity$2(null,i__68994);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__69288 = seq__68991;
var G__69289 = chunk__68992;
var G__69290 = count__68993;
var G__69291 = (i__68994 + (1));
seq__68991 = G__69288;
chunk__68992 = G__69289;
count__68993 = G__69290;
i__68994 = G__69291;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68991);
if(temp__5825__auto__){
var seq__68991__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68991__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68991__$1);
var G__69292 = cljs.core.chunk_rest(seq__68991__$1);
var G__69293 = c__5548__auto__;
var G__69294 = cljs.core.count(c__5548__auto__);
var G__69295 = (0);
seq__68991 = G__69292;
chunk__68992 = G__69293;
count__68993 = G__69294;
i__68994 = G__69295;
continue;
} else {
var it = cljs.core.first(seq__68991__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__69296 = cljs.core.next(seq__68991__$1);
var G__69297 = null;
var G__69298 = (0);
var G__69299 = (0);
seq__68991 = G__69296;
chunk__68992 = G__69297;
count__68993 = G__69298;
i__68994 = G__69299;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k68996,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__69000 = k68996;
var G__69000__$1 = (((G__69000 instanceof cljs.core.Keyword))?G__69000.fqn:null);
switch (G__69000__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68996,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__69001){
var vec__69002 = p__69001;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69002,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69002,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68995){
var self__ = this;
var G__68995__$1 = this;
return (new cljs.core.RecordIter((0),G__68995__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68997,other68998){
var self__ = this;
var this68997__$1 = this;
return (((!((other68998 == null)))) && ((((this68997__$1.constructor === other68998.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68997__$1.x,other68998.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68997__$1.y,other68998.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68997__$1.__extmap,other68998.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k68996){
var self__ = this;
var this__5330__auto____$1 = this;
var G__69005 = k68996;
var G__69005__$1 = (((G__69005 instanceof cljs.core.Keyword))?G__69005.fqn:null);
switch (G__69005__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68996);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__68995){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__69006 = cljs.core.keyword_identical_QMARK_;
var expr__69007 = k__5332__auto__;
if(cljs.core.truth_((pred__69006.cljs$core$IFn$_invoke$arity$2 ? pred__69006.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__69007) : pred__69006.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__69007)))){
return (new shadow.dom.Coordinate(G__68995,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69006.cljs$core$IFn$_invoke$arity$2 ? pred__69006.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__69007) : pred__69006.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__69007)))){
return (new shadow.dom.Coordinate(self__.x,G__68995,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__68995),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__68995){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__68995,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__68999){
var extmap__5365__auto__ = (function (){var G__69009 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68999,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__68999)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__69009);
} else {
return G__69009;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__68999),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__68999),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k69011,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__69015 = k69011;
var G__69015__$1 = (((G__69015 instanceof cljs.core.Keyword))?G__69015.fqn:null);
switch (G__69015__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69011,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__69016){
var vec__69017 = p__69016;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69017,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69017,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__69010){
var self__ = this;
var G__69010__$1 = this;
return (new cljs.core.RecordIter((0),G__69010__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this69012,other69013){
var self__ = this;
var this69012__$1 = this;
return (((!((other69013 == null)))) && ((((this69012__$1.constructor === other69013.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69012__$1.w,other69013.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69012__$1.h,other69013.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69012__$1.__extmap,other69013.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k69011){
var self__ = this;
var this__5330__auto____$1 = this;
var G__69020 = k69011;
var G__69020__$1 = (((G__69020 instanceof cljs.core.Keyword))?G__69020.fqn:null);
switch (G__69020__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k69011);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__69010){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__69021 = cljs.core.keyword_identical_QMARK_;
var expr__69022 = k__5332__auto__;
if(cljs.core.truth_((pred__69021.cljs$core$IFn$_invoke$arity$2 ? pred__69021.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__69022) : pred__69021.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__69022)))){
return (new shadow.dom.Size(G__69010,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69021.cljs$core$IFn$_invoke$arity$2 ? pred__69021.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__69022) : pred__69021.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__69022)))){
return (new shadow.dom.Size(self__.w,G__69010,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__69010),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__69010){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__69010,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__69014){
var extmap__5365__auto__ = (function (){var G__69024 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__69014,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__69014)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__69024);
} else {
return G__69024;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__69014),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__69014),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__69304 = (i + (1));
var G__69305 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__69304;
ret = G__69305;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__69029){
var vec__69030 = p__69029;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69030,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69030,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__69034 = arguments.length;
switch (G__69034) {
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
var G__69307 = ps;
var G__69308 = (i + (1));
el__$1 = G__69307;
i = G__69308;
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
var vec__69035 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69035,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69035,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69035,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__69038_69309 = cljs.core.seq(props);
var chunk__69039_69310 = null;
var count__69040_69311 = (0);
var i__69041_69312 = (0);
while(true){
if((i__69041_69312 < count__69040_69311)){
var vec__69048_69313 = chunk__69039_69310.cljs$core$IIndexed$_nth$arity$2(null,i__69041_69312);
var k_69314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69048_69313,(0),null);
var v_69315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69048_69313,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_69314);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_69314),v_69315);


var G__69316 = seq__69038_69309;
var G__69317 = chunk__69039_69310;
var G__69318 = count__69040_69311;
var G__69319 = (i__69041_69312 + (1));
seq__69038_69309 = G__69316;
chunk__69039_69310 = G__69317;
count__69040_69311 = G__69318;
i__69041_69312 = G__69319;
continue;
} else {
var temp__5825__auto___69320 = cljs.core.seq(seq__69038_69309);
if(temp__5825__auto___69320){
var seq__69038_69321__$1 = temp__5825__auto___69320;
if(cljs.core.chunked_seq_QMARK_(seq__69038_69321__$1)){
var c__5548__auto___69322 = cljs.core.chunk_first(seq__69038_69321__$1);
var G__69323 = cljs.core.chunk_rest(seq__69038_69321__$1);
var G__69324 = c__5548__auto___69322;
var G__69325 = cljs.core.count(c__5548__auto___69322);
var G__69326 = (0);
seq__69038_69309 = G__69323;
chunk__69039_69310 = G__69324;
count__69040_69311 = G__69325;
i__69041_69312 = G__69326;
continue;
} else {
var vec__69051_69327 = cljs.core.first(seq__69038_69321__$1);
var k_69328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69051_69327,(0),null);
var v_69329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69051_69327,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_69328);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_69328),v_69329);


var G__69330 = cljs.core.next(seq__69038_69321__$1);
var G__69331 = null;
var G__69332 = (0);
var G__69333 = (0);
seq__69038_69309 = G__69330;
chunk__69039_69310 = G__69331;
count__69040_69311 = G__69332;
i__69041_69312 = G__69333;
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
var vec__69055 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69055,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69055,(1),null);
var seq__69058_69334 = cljs.core.seq(node_children);
var chunk__69060_69335 = null;
var count__69061_69336 = (0);
var i__69062_69337 = (0);
while(true){
if((i__69062_69337 < count__69061_69336)){
var child_struct_69338 = chunk__69060_69335.cljs$core$IIndexed$_nth$arity$2(null,i__69062_69337);
if((!((child_struct_69338 == null)))){
if(typeof child_struct_69338 === 'string'){
var text_69339 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_69339),child_struct_69338].join(''));
} else {
var children_69340 = shadow.dom.svg_node(child_struct_69338);
if(cljs.core.seq_QMARK_(children_69340)){
var seq__69076_69341 = cljs.core.seq(children_69340);
var chunk__69078_69342 = null;
var count__69079_69343 = (0);
var i__69080_69344 = (0);
while(true){
if((i__69080_69344 < count__69079_69343)){
var child_69345 = chunk__69078_69342.cljs$core$IIndexed$_nth$arity$2(null,i__69080_69344);
if(cljs.core.truth_(child_69345)){
node.appendChild(child_69345);


var G__69346 = seq__69076_69341;
var G__69347 = chunk__69078_69342;
var G__69348 = count__69079_69343;
var G__69349 = (i__69080_69344 + (1));
seq__69076_69341 = G__69346;
chunk__69078_69342 = G__69347;
count__69079_69343 = G__69348;
i__69080_69344 = G__69349;
continue;
} else {
var G__69350 = seq__69076_69341;
var G__69351 = chunk__69078_69342;
var G__69352 = count__69079_69343;
var G__69353 = (i__69080_69344 + (1));
seq__69076_69341 = G__69350;
chunk__69078_69342 = G__69351;
count__69079_69343 = G__69352;
i__69080_69344 = G__69353;
continue;
}
} else {
var temp__5825__auto___69354 = cljs.core.seq(seq__69076_69341);
if(temp__5825__auto___69354){
var seq__69076_69355__$1 = temp__5825__auto___69354;
if(cljs.core.chunked_seq_QMARK_(seq__69076_69355__$1)){
var c__5548__auto___69356 = cljs.core.chunk_first(seq__69076_69355__$1);
var G__69357 = cljs.core.chunk_rest(seq__69076_69355__$1);
var G__69358 = c__5548__auto___69356;
var G__69359 = cljs.core.count(c__5548__auto___69356);
var G__69360 = (0);
seq__69076_69341 = G__69357;
chunk__69078_69342 = G__69358;
count__69079_69343 = G__69359;
i__69080_69344 = G__69360;
continue;
} else {
var child_69361 = cljs.core.first(seq__69076_69355__$1);
if(cljs.core.truth_(child_69361)){
node.appendChild(child_69361);


var G__69362 = cljs.core.next(seq__69076_69355__$1);
var G__69363 = null;
var G__69364 = (0);
var G__69365 = (0);
seq__69076_69341 = G__69362;
chunk__69078_69342 = G__69363;
count__69079_69343 = G__69364;
i__69080_69344 = G__69365;
continue;
} else {
var G__69366 = cljs.core.next(seq__69076_69355__$1);
var G__69367 = null;
var G__69368 = (0);
var G__69369 = (0);
seq__69076_69341 = G__69366;
chunk__69078_69342 = G__69367;
count__69079_69343 = G__69368;
i__69080_69344 = G__69369;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_69340);
}
}


var G__69370 = seq__69058_69334;
var G__69371 = chunk__69060_69335;
var G__69372 = count__69061_69336;
var G__69373 = (i__69062_69337 + (1));
seq__69058_69334 = G__69370;
chunk__69060_69335 = G__69371;
count__69061_69336 = G__69372;
i__69062_69337 = G__69373;
continue;
} else {
var G__69374 = seq__69058_69334;
var G__69375 = chunk__69060_69335;
var G__69376 = count__69061_69336;
var G__69377 = (i__69062_69337 + (1));
seq__69058_69334 = G__69374;
chunk__69060_69335 = G__69375;
count__69061_69336 = G__69376;
i__69062_69337 = G__69377;
continue;
}
} else {
var temp__5825__auto___69378 = cljs.core.seq(seq__69058_69334);
if(temp__5825__auto___69378){
var seq__69058_69379__$1 = temp__5825__auto___69378;
if(cljs.core.chunked_seq_QMARK_(seq__69058_69379__$1)){
var c__5548__auto___69380 = cljs.core.chunk_first(seq__69058_69379__$1);
var G__69381 = cljs.core.chunk_rest(seq__69058_69379__$1);
var G__69382 = c__5548__auto___69380;
var G__69383 = cljs.core.count(c__5548__auto___69380);
var G__69384 = (0);
seq__69058_69334 = G__69381;
chunk__69060_69335 = G__69382;
count__69061_69336 = G__69383;
i__69062_69337 = G__69384;
continue;
} else {
var child_struct_69385 = cljs.core.first(seq__69058_69379__$1);
if((!((child_struct_69385 == null)))){
if(typeof child_struct_69385 === 'string'){
var text_69386 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_69386),child_struct_69385].join(''));
} else {
var children_69387 = shadow.dom.svg_node(child_struct_69385);
if(cljs.core.seq_QMARK_(children_69387)){
var seq__69082_69388 = cljs.core.seq(children_69387);
var chunk__69084_69389 = null;
var count__69085_69390 = (0);
var i__69086_69391 = (0);
while(true){
if((i__69086_69391 < count__69085_69390)){
var child_69392 = chunk__69084_69389.cljs$core$IIndexed$_nth$arity$2(null,i__69086_69391);
if(cljs.core.truth_(child_69392)){
node.appendChild(child_69392);


var G__69393 = seq__69082_69388;
var G__69394 = chunk__69084_69389;
var G__69395 = count__69085_69390;
var G__69396 = (i__69086_69391 + (1));
seq__69082_69388 = G__69393;
chunk__69084_69389 = G__69394;
count__69085_69390 = G__69395;
i__69086_69391 = G__69396;
continue;
} else {
var G__69397 = seq__69082_69388;
var G__69398 = chunk__69084_69389;
var G__69399 = count__69085_69390;
var G__69400 = (i__69086_69391 + (1));
seq__69082_69388 = G__69397;
chunk__69084_69389 = G__69398;
count__69085_69390 = G__69399;
i__69086_69391 = G__69400;
continue;
}
} else {
var temp__5825__auto___69401__$1 = cljs.core.seq(seq__69082_69388);
if(temp__5825__auto___69401__$1){
var seq__69082_69402__$1 = temp__5825__auto___69401__$1;
if(cljs.core.chunked_seq_QMARK_(seq__69082_69402__$1)){
var c__5548__auto___69403 = cljs.core.chunk_first(seq__69082_69402__$1);
var G__69404 = cljs.core.chunk_rest(seq__69082_69402__$1);
var G__69405 = c__5548__auto___69403;
var G__69406 = cljs.core.count(c__5548__auto___69403);
var G__69407 = (0);
seq__69082_69388 = G__69404;
chunk__69084_69389 = G__69405;
count__69085_69390 = G__69406;
i__69086_69391 = G__69407;
continue;
} else {
var child_69408 = cljs.core.first(seq__69082_69402__$1);
if(cljs.core.truth_(child_69408)){
node.appendChild(child_69408);


var G__69409 = cljs.core.next(seq__69082_69402__$1);
var G__69410 = null;
var G__69411 = (0);
var G__69412 = (0);
seq__69082_69388 = G__69409;
chunk__69084_69389 = G__69410;
count__69085_69390 = G__69411;
i__69086_69391 = G__69412;
continue;
} else {
var G__69413 = cljs.core.next(seq__69082_69402__$1);
var G__69414 = null;
var G__69415 = (0);
var G__69416 = (0);
seq__69082_69388 = G__69413;
chunk__69084_69389 = G__69414;
count__69085_69390 = G__69415;
i__69086_69391 = G__69416;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_69387);
}
}


var G__69417 = cljs.core.next(seq__69058_69379__$1);
var G__69418 = null;
var G__69419 = (0);
var G__69420 = (0);
seq__69058_69334 = G__69417;
chunk__69060_69335 = G__69418;
count__69061_69336 = G__69419;
i__69062_69337 = G__69420;
continue;
} else {
var G__69421 = cljs.core.next(seq__69058_69379__$1);
var G__69422 = null;
var G__69423 = (0);
var G__69424 = (0);
seq__69058_69334 = G__69421;
chunk__69060_69335 = G__69422;
count__69061_69336 = G__69423;
i__69062_69337 = G__69424;
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
var len__5749__auto___69425 = arguments.length;
var i__5750__auto___69426 = (0);
while(true){
if((i__5750__auto___69426 < len__5749__auto___69425)){
args__5755__auto__.push((arguments[i__5750__auto___69426]));

var G__69427 = (i__5750__auto___69426 + (1));
i__5750__auto___69426 = G__69427;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq69088){
var G__69089 = cljs.core.first(seq69088);
var seq69088__$1 = cljs.core.next(seq69088);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69089,seq69088__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
