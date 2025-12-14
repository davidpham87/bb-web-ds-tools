goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_68489 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_68489(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_68490 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_68490(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__68124 = coll;
var G__68125 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__68124,G__68125) : shadow.dom.lazy_native_coll_seq.call(null,G__68124,G__68125));
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
var G__68132 = arguments.length;
switch (G__68132) {
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
var G__68134 = arguments.length;
switch (G__68134) {
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
var G__68136 = arguments.length;
switch (G__68136) {
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
var G__68150 = arguments.length;
switch (G__68150) {
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
var G__68154 = arguments.length;
switch (G__68154) {
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
var G__68167 = arguments.length;
switch (G__68167) {
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
}catch (e68198){if((e68198 instanceof Object)){
var e = e68198;
return console.log("didnt support attachEvent",el,e);
} else {
throw e68198;

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
var seq__68199 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__68200 = null;
var count__68201 = (0);
var i__68202 = (0);
while(true){
if((i__68202 < count__68201)){
var el = chunk__68200.cljs$core$IIndexed$_nth$arity$2(null,i__68202);
var handler_68497__$1 = ((function (seq__68199,chunk__68200,count__68201,i__68202,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__68199,chunk__68200,count__68201,i__68202,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_68497__$1);


var G__68498 = seq__68199;
var G__68499 = chunk__68200;
var G__68500 = count__68201;
var G__68501 = (i__68202 + (1));
seq__68199 = G__68498;
chunk__68200 = G__68499;
count__68201 = G__68500;
i__68202 = G__68501;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68199);
if(temp__5825__auto__){
var seq__68199__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68199__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68199__$1);
var G__68502 = cljs.core.chunk_rest(seq__68199__$1);
var G__68503 = c__5548__auto__;
var G__68504 = cljs.core.count(c__5548__auto__);
var G__68505 = (0);
seq__68199 = G__68502;
chunk__68200 = G__68503;
count__68201 = G__68504;
i__68202 = G__68505;
continue;
} else {
var el = cljs.core.first(seq__68199__$1);
var handler_68506__$1 = ((function (seq__68199,chunk__68200,count__68201,i__68202,el,seq__68199__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__68199,chunk__68200,count__68201,i__68202,el,seq__68199__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_68506__$1);


var G__68507 = cljs.core.next(seq__68199__$1);
var G__68508 = null;
var G__68509 = (0);
var G__68510 = (0);
seq__68199 = G__68507;
chunk__68200 = G__68508;
count__68201 = G__68509;
i__68202 = G__68510;
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
var G__68212 = arguments.length;
switch (G__68212) {
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
var seq__68213 = cljs.core.seq(events);
var chunk__68214 = null;
var count__68215 = (0);
var i__68216 = (0);
while(true){
if((i__68216 < count__68215)){
var vec__68224 = chunk__68214.cljs$core$IIndexed$_nth$arity$2(null,i__68216);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68224,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68224,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__68512 = seq__68213;
var G__68513 = chunk__68214;
var G__68514 = count__68215;
var G__68515 = (i__68216 + (1));
seq__68213 = G__68512;
chunk__68214 = G__68513;
count__68215 = G__68514;
i__68216 = G__68515;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68213);
if(temp__5825__auto__){
var seq__68213__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68213__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68213__$1);
var G__68516 = cljs.core.chunk_rest(seq__68213__$1);
var G__68517 = c__5548__auto__;
var G__68518 = cljs.core.count(c__5548__auto__);
var G__68519 = (0);
seq__68213 = G__68516;
chunk__68214 = G__68517;
count__68215 = G__68518;
i__68216 = G__68519;
continue;
} else {
var vec__68227 = cljs.core.first(seq__68213__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68227,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68227,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__68520 = cljs.core.next(seq__68213__$1);
var G__68521 = null;
var G__68522 = (0);
var G__68523 = (0);
seq__68213 = G__68520;
chunk__68214 = G__68521;
count__68215 = G__68522;
i__68216 = G__68523;
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
var seq__68230 = cljs.core.seq(styles);
var chunk__68231 = null;
var count__68232 = (0);
var i__68233 = (0);
while(true){
if((i__68233 < count__68232)){
var vec__68246 = chunk__68231.cljs$core$IIndexed$_nth$arity$2(null,i__68233);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68246,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68246,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__68524 = seq__68230;
var G__68525 = chunk__68231;
var G__68526 = count__68232;
var G__68527 = (i__68233 + (1));
seq__68230 = G__68524;
chunk__68231 = G__68525;
count__68232 = G__68526;
i__68233 = G__68527;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68230);
if(temp__5825__auto__){
var seq__68230__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68230__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68230__$1);
var G__68528 = cljs.core.chunk_rest(seq__68230__$1);
var G__68529 = c__5548__auto__;
var G__68530 = cljs.core.count(c__5548__auto__);
var G__68531 = (0);
seq__68230 = G__68528;
chunk__68231 = G__68529;
count__68232 = G__68530;
i__68233 = G__68531;
continue;
} else {
var vec__68249 = cljs.core.first(seq__68230__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68249,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68249,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__68532 = cljs.core.next(seq__68230__$1);
var G__68533 = null;
var G__68534 = (0);
var G__68535 = (0);
seq__68230 = G__68532;
chunk__68231 = G__68533;
count__68232 = G__68534;
i__68233 = G__68535;
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
var G__68256_68536 = key;
var G__68256_68537__$1 = (((G__68256_68536 instanceof cljs.core.Keyword))?G__68256_68536.fqn:null);
switch (G__68256_68537__$1) {
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
var ks_68539 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_68539,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_68539,"aria-");
}
})())){
el.setAttribute(ks_68539,value);
} else {
(el[ks_68539] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__68262){
var map__68263 = p__68262;
var map__68263__$1 = cljs.core.__destructure_map(map__68263);
var props = map__68263__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68263__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__68264 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68264,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68264,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68264,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__68267 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__68267,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__68267;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__68272 = arguments.length;
switch (G__68272) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__68276){
var vec__68277 = p__68276;
var seq__68278 = cljs.core.seq(vec__68277);
var first__68279 = cljs.core.first(seq__68278);
var seq__68278__$1 = cljs.core.next(seq__68278);
var nn = first__68279;
var first__68279__$1 = cljs.core.first(seq__68278__$1);
var seq__68278__$2 = cljs.core.next(seq__68278__$1);
var np = first__68279__$1;
var nc = seq__68278__$2;
var node = vec__68277;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__68280 = nn;
var G__68281 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__68280,G__68281) : create_fn.call(null,G__68280,G__68281));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__68283 = nn;
var G__68286 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__68283,G__68286) : create_fn.call(null,G__68283,G__68286));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__68288 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68288,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68288,(1),null);
var seq__68291_68541 = cljs.core.seq(node_children);
var chunk__68292_68542 = null;
var count__68293_68543 = (0);
var i__68294_68544 = (0);
while(true){
if((i__68294_68544 < count__68293_68543)){
var child_struct_68545 = chunk__68292_68542.cljs$core$IIndexed$_nth$arity$2(null,i__68294_68544);
var children_68546 = shadow.dom.dom_node(child_struct_68545);
if(cljs.core.seq_QMARK_(children_68546)){
var seq__68314_68547 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_68546));
var chunk__68316_68548 = null;
var count__68317_68549 = (0);
var i__68318_68550 = (0);
while(true){
if((i__68318_68550 < count__68317_68549)){
var child_68551 = chunk__68316_68548.cljs$core$IIndexed$_nth$arity$2(null,i__68318_68550);
if(cljs.core.truth_(child_68551)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68551);


var G__68552 = seq__68314_68547;
var G__68553 = chunk__68316_68548;
var G__68554 = count__68317_68549;
var G__68555 = (i__68318_68550 + (1));
seq__68314_68547 = G__68552;
chunk__68316_68548 = G__68553;
count__68317_68549 = G__68554;
i__68318_68550 = G__68555;
continue;
} else {
var G__68556 = seq__68314_68547;
var G__68557 = chunk__68316_68548;
var G__68558 = count__68317_68549;
var G__68559 = (i__68318_68550 + (1));
seq__68314_68547 = G__68556;
chunk__68316_68548 = G__68557;
count__68317_68549 = G__68558;
i__68318_68550 = G__68559;
continue;
}
} else {
var temp__5825__auto___68560 = cljs.core.seq(seq__68314_68547);
if(temp__5825__auto___68560){
var seq__68314_68561__$1 = temp__5825__auto___68560;
if(cljs.core.chunked_seq_QMARK_(seq__68314_68561__$1)){
var c__5548__auto___68562 = cljs.core.chunk_first(seq__68314_68561__$1);
var G__68563 = cljs.core.chunk_rest(seq__68314_68561__$1);
var G__68564 = c__5548__auto___68562;
var G__68565 = cljs.core.count(c__5548__auto___68562);
var G__68566 = (0);
seq__68314_68547 = G__68563;
chunk__68316_68548 = G__68564;
count__68317_68549 = G__68565;
i__68318_68550 = G__68566;
continue;
} else {
var child_68567 = cljs.core.first(seq__68314_68561__$1);
if(cljs.core.truth_(child_68567)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68567);


var G__68568 = cljs.core.next(seq__68314_68561__$1);
var G__68569 = null;
var G__68570 = (0);
var G__68571 = (0);
seq__68314_68547 = G__68568;
chunk__68316_68548 = G__68569;
count__68317_68549 = G__68570;
i__68318_68550 = G__68571;
continue;
} else {
var G__68572 = cljs.core.next(seq__68314_68561__$1);
var G__68573 = null;
var G__68574 = (0);
var G__68575 = (0);
seq__68314_68547 = G__68572;
chunk__68316_68548 = G__68573;
count__68317_68549 = G__68574;
i__68318_68550 = G__68575;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_68546);
}


var G__68576 = seq__68291_68541;
var G__68577 = chunk__68292_68542;
var G__68578 = count__68293_68543;
var G__68579 = (i__68294_68544 + (1));
seq__68291_68541 = G__68576;
chunk__68292_68542 = G__68577;
count__68293_68543 = G__68578;
i__68294_68544 = G__68579;
continue;
} else {
var temp__5825__auto___68580 = cljs.core.seq(seq__68291_68541);
if(temp__5825__auto___68580){
var seq__68291_68581__$1 = temp__5825__auto___68580;
if(cljs.core.chunked_seq_QMARK_(seq__68291_68581__$1)){
var c__5548__auto___68582 = cljs.core.chunk_first(seq__68291_68581__$1);
var G__68583 = cljs.core.chunk_rest(seq__68291_68581__$1);
var G__68584 = c__5548__auto___68582;
var G__68585 = cljs.core.count(c__5548__auto___68582);
var G__68586 = (0);
seq__68291_68541 = G__68583;
chunk__68292_68542 = G__68584;
count__68293_68543 = G__68585;
i__68294_68544 = G__68586;
continue;
} else {
var child_struct_68587 = cljs.core.first(seq__68291_68581__$1);
var children_68588 = shadow.dom.dom_node(child_struct_68587);
if(cljs.core.seq_QMARK_(children_68588)){
var seq__68324_68589 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_68588));
var chunk__68326_68590 = null;
var count__68327_68591 = (0);
var i__68328_68592 = (0);
while(true){
if((i__68328_68592 < count__68327_68591)){
var child_68593 = chunk__68326_68590.cljs$core$IIndexed$_nth$arity$2(null,i__68328_68592);
if(cljs.core.truth_(child_68593)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68593);


var G__68594 = seq__68324_68589;
var G__68595 = chunk__68326_68590;
var G__68596 = count__68327_68591;
var G__68597 = (i__68328_68592 + (1));
seq__68324_68589 = G__68594;
chunk__68326_68590 = G__68595;
count__68327_68591 = G__68596;
i__68328_68592 = G__68597;
continue;
} else {
var G__68598 = seq__68324_68589;
var G__68599 = chunk__68326_68590;
var G__68600 = count__68327_68591;
var G__68601 = (i__68328_68592 + (1));
seq__68324_68589 = G__68598;
chunk__68326_68590 = G__68599;
count__68327_68591 = G__68600;
i__68328_68592 = G__68601;
continue;
}
} else {
var temp__5825__auto___68602__$1 = cljs.core.seq(seq__68324_68589);
if(temp__5825__auto___68602__$1){
var seq__68324_68603__$1 = temp__5825__auto___68602__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68324_68603__$1)){
var c__5548__auto___68604 = cljs.core.chunk_first(seq__68324_68603__$1);
var G__68605 = cljs.core.chunk_rest(seq__68324_68603__$1);
var G__68606 = c__5548__auto___68604;
var G__68607 = cljs.core.count(c__5548__auto___68604);
var G__68608 = (0);
seq__68324_68589 = G__68605;
chunk__68326_68590 = G__68606;
count__68327_68591 = G__68607;
i__68328_68592 = G__68608;
continue;
} else {
var child_68609 = cljs.core.first(seq__68324_68603__$1);
if(cljs.core.truth_(child_68609)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68609);


var G__68610 = cljs.core.next(seq__68324_68603__$1);
var G__68611 = null;
var G__68612 = (0);
var G__68613 = (0);
seq__68324_68589 = G__68610;
chunk__68326_68590 = G__68611;
count__68327_68591 = G__68612;
i__68328_68592 = G__68613;
continue;
} else {
var G__68614 = cljs.core.next(seq__68324_68603__$1);
var G__68615 = null;
var G__68616 = (0);
var G__68617 = (0);
seq__68324_68589 = G__68614;
chunk__68326_68590 = G__68615;
count__68327_68591 = G__68616;
i__68328_68592 = G__68617;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_68588);
}


var G__68618 = cljs.core.next(seq__68291_68581__$1);
var G__68619 = null;
var G__68620 = (0);
var G__68621 = (0);
seq__68291_68541 = G__68618;
chunk__68292_68542 = G__68619;
count__68293_68543 = G__68620;
i__68294_68544 = G__68621;
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
var seq__68336 = cljs.core.seq(node);
var chunk__68337 = null;
var count__68338 = (0);
var i__68339 = (0);
while(true){
if((i__68339 < count__68338)){
var n = chunk__68337.cljs$core$IIndexed$_nth$arity$2(null,i__68339);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__68622 = seq__68336;
var G__68623 = chunk__68337;
var G__68624 = count__68338;
var G__68625 = (i__68339 + (1));
seq__68336 = G__68622;
chunk__68337 = G__68623;
count__68338 = G__68624;
i__68339 = G__68625;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68336);
if(temp__5825__auto__){
var seq__68336__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68336__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68336__$1);
var G__68626 = cljs.core.chunk_rest(seq__68336__$1);
var G__68627 = c__5548__auto__;
var G__68628 = cljs.core.count(c__5548__auto__);
var G__68629 = (0);
seq__68336 = G__68626;
chunk__68337 = G__68627;
count__68338 = G__68628;
i__68339 = G__68629;
continue;
} else {
var n = cljs.core.first(seq__68336__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__68630 = cljs.core.next(seq__68336__$1);
var G__68631 = null;
var G__68632 = (0);
var G__68633 = (0);
seq__68336 = G__68630;
chunk__68337 = G__68631;
count__68338 = G__68632;
i__68339 = G__68633;
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
var G__68343 = arguments.length;
switch (G__68343) {
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
var G__68345 = arguments.length;
switch (G__68345) {
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
var G__68348 = arguments.length;
switch (G__68348) {
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
var len__5749__auto___68637 = arguments.length;
var i__5750__auto___68638 = (0);
while(true){
if((i__5750__auto___68638 < len__5749__auto___68637)){
args__5755__auto__.push((arguments[i__5750__auto___68638]));

var G__68639 = (i__5750__auto___68638 + (1));
i__5750__auto___68638 = G__68639;
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
var seq__68351_68640 = cljs.core.seq(nodes);
var chunk__68352_68641 = null;
var count__68353_68642 = (0);
var i__68354_68643 = (0);
while(true){
if((i__68354_68643 < count__68353_68642)){
var node_68644 = chunk__68352_68641.cljs$core$IIndexed$_nth$arity$2(null,i__68354_68643);
fragment.appendChild(shadow.dom._to_dom(node_68644));


var G__68645 = seq__68351_68640;
var G__68646 = chunk__68352_68641;
var G__68647 = count__68353_68642;
var G__68648 = (i__68354_68643 + (1));
seq__68351_68640 = G__68645;
chunk__68352_68641 = G__68646;
count__68353_68642 = G__68647;
i__68354_68643 = G__68648;
continue;
} else {
var temp__5825__auto___68649 = cljs.core.seq(seq__68351_68640);
if(temp__5825__auto___68649){
var seq__68351_68650__$1 = temp__5825__auto___68649;
if(cljs.core.chunked_seq_QMARK_(seq__68351_68650__$1)){
var c__5548__auto___68651 = cljs.core.chunk_first(seq__68351_68650__$1);
var G__68652 = cljs.core.chunk_rest(seq__68351_68650__$1);
var G__68653 = c__5548__auto___68651;
var G__68654 = cljs.core.count(c__5548__auto___68651);
var G__68655 = (0);
seq__68351_68640 = G__68652;
chunk__68352_68641 = G__68653;
count__68353_68642 = G__68654;
i__68354_68643 = G__68655;
continue;
} else {
var node_68656 = cljs.core.first(seq__68351_68650__$1);
fragment.appendChild(shadow.dom._to_dom(node_68656));


var G__68657 = cljs.core.next(seq__68351_68650__$1);
var G__68658 = null;
var G__68659 = (0);
var G__68660 = (0);
seq__68351_68640 = G__68657;
chunk__68352_68641 = G__68658;
count__68353_68642 = G__68659;
i__68354_68643 = G__68660;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq68350){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68350));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__68361_68661 = cljs.core.seq(scripts);
var chunk__68363_68662 = null;
var count__68364_68663 = (0);
var i__68365_68664 = (0);
while(true){
if((i__68365_68664 < count__68364_68663)){
var vec__68373_68665 = chunk__68363_68662.cljs$core$IIndexed$_nth$arity$2(null,i__68365_68664);
var script_tag_68666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68373_68665,(0),null);
var script_body_68667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68373_68665,(1),null);
eval(script_body_68667);


var G__68668 = seq__68361_68661;
var G__68669 = chunk__68363_68662;
var G__68670 = count__68364_68663;
var G__68671 = (i__68365_68664 + (1));
seq__68361_68661 = G__68668;
chunk__68363_68662 = G__68669;
count__68364_68663 = G__68670;
i__68365_68664 = G__68671;
continue;
} else {
var temp__5825__auto___68672 = cljs.core.seq(seq__68361_68661);
if(temp__5825__auto___68672){
var seq__68361_68673__$1 = temp__5825__auto___68672;
if(cljs.core.chunked_seq_QMARK_(seq__68361_68673__$1)){
var c__5548__auto___68674 = cljs.core.chunk_first(seq__68361_68673__$1);
var G__68675 = cljs.core.chunk_rest(seq__68361_68673__$1);
var G__68676 = c__5548__auto___68674;
var G__68677 = cljs.core.count(c__5548__auto___68674);
var G__68678 = (0);
seq__68361_68661 = G__68675;
chunk__68363_68662 = G__68676;
count__68364_68663 = G__68677;
i__68365_68664 = G__68678;
continue;
} else {
var vec__68376_68679 = cljs.core.first(seq__68361_68673__$1);
var script_tag_68680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68376_68679,(0),null);
var script_body_68681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68376_68679,(1),null);
eval(script_body_68681);


var G__68682 = cljs.core.next(seq__68361_68673__$1);
var G__68683 = null;
var G__68684 = (0);
var G__68685 = (0);
seq__68361_68661 = G__68682;
chunk__68363_68662 = G__68683;
count__68364_68663 = G__68684;
i__68365_68664 = G__68685;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__68379){
var vec__68380 = p__68379;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68380,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68380,(1),null);
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
var G__68384 = arguments.length;
switch (G__68384) {
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
var seq__68389 = cljs.core.seq(style_keys);
var chunk__68390 = null;
var count__68391 = (0);
var i__68392 = (0);
while(true){
if((i__68392 < count__68391)){
var it = chunk__68390.cljs$core$IIndexed$_nth$arity$2(null,i__68392);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__68687 = seq__68389;
var G__68688 = chunk__68390;
var G__68689 = count__68391;
var G__68690 = (i__68392 + (1));
seq__68389 = G__68687;
chunk__68390 = G__68688;
count__68391 = G__68689;
i__68392 = G__68690;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68389);
if(temp__5825__auto__){
var seq__68389__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68389__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68389__$1);
var G__68691 = cljs.core.chunk_rest(seq__68389__$1);
var G__68692 = c__5548__auto__;
var G__68693 = cljs.core.count(c__5548__auto__);
var G__68694 = (0);
seq__68389 = G__68691;
chunk__68390 = G__68692;
count__68391 = G__68693;
i__68392 = G__68694;
continue;
} else {
var it = cljs.core.first(seq__68389__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__68695 = cljs.core.next(seq__68389__$1);
var G__68696 = null;
var G__68697 = (0);
var G__68698 = (0);
seq__68389 = G__68695;
chunk__68390 = G__68696;
count__68391 = G__68697;
i__68392 = G__68698;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k68395,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__68399 = k68395;
var G__68399__$1 = (((G__68399 instanceof cljs.core.Keyword))?G__68399.fqn:null);
switch (G__68399__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68395,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__68400){
var vec__68401 = p__68400;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68401,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68401,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68394){
var self__ = this;
var G__68394__$1 = this;
return (new cljs.core.RecordIter((0),G__68394__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68396,other68397){
var self__ = this;
var this68396__$1 = this;
return (((!((other68397 == null)))) && ((((this68396__$1.constructor === other68397.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68396__$1.x,other68397.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68396__$1.y,other68397.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68396__$1.__extmap,other68397.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k68395){
var self__ = this;
var this__5330__auto____$1 = this;
var G__68404 = k68395;
var G__68404__$1 = (((G__68404 instanceof cljs.core.Keyword))?G__68404.fqn:null);
switch (G__68404__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68395);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__68394){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__68405 = cljs.core.keyword_identical_QMARK_;
var expr__68406 = k__5332__auto__;
if(cljs.core.truth_((pred__68405.cljs$core$IFn$_invoke$arity$2 ? pred__68405.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__68406) : pred__68405.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__68406)))){
return (new shadow.dom.Coordinate(G__68394,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68405.cljs$core$IFn$_invoke$arity$2 ? pred__68405.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__68406) : pred__68405.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__68406)))){
return (new shadow.dom.Coordinate(self__.x,G__68394,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__68394),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__68394){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__68394,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__68398){
var extmap__5365__auto__ = (function (){var G__68408 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68398,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__68398)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68408);
} else {
return G__68408;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__68398),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__68398),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k68410,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__68414 = k68410;
var G__68414__$1 = (((G__68414 instanceof cljs.core.Keyword))?G__68414.fqn:null);
switch (G__68414__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68410,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__68415){
var vec__68416 = p__68415;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68416,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68416,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68409){
var self__ = this;
var G__68409__$1 = this;
return (new cljs.core.RecordIter((0),G__68409__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68411,other68412){
var self__ = this;
var this68411__$1 = this;
return (((!((other68412 == null)))) && ((((this68411__$1.constructor === other68412.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68411__$1.w,other68412.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68411__$1.h,other68412.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68411__$1.__extmap,other68412.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k68410){
var self__ = this;
var this__5330__auto____$1 = this;
var G__68419 = k68410;
var G__68419__$1 = (((G__68419 instanceof cljs.core.Keyword))?G__68419.fqn:null);
switch (G__68419__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68410);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__68409){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__68420 = cljs.core.keyword_identical_QMARK_;
var expr__68421 = k__5332__auto__;
if(cljs.core.truth_((pred__68420.cljs$core$IFn$_invoke$arity$2 ? pred__68420.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__68421) : pred__68420.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__68421)))){
return (new shadow.dom.Size(G__68409,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68420.cljs$core$IFn$_invoke$arity$2 ? pred__68420.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__68421) : pred__68420.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__68421)))){
return (new shadow.dom.Size(self__.w,G__68409,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__68409),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__68409){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__68409,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__68413){
var extmap__5365__auto__ = (function (){var G__68423 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68413,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__68413)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68423);
} else {
return G__68423;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__68413),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__68413),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__68703 = (i + (1));
var G__68704 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__68703;
ret = G__68704;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68428){
var vec__68429 = p__68428;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68429,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68429,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__68433 = arguments.length;
switch (G__68433) {
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
var G__68706 = ps;
var G__68707 = (i + (1));
el__$1 = G__68706;
i = G__68707;
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
var vec__68434 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68434,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68434,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68434,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__68437_68708 = cljs.core.seq(props);
var chunk__68438_68709 = null;
var count__68439_68710 = (0);
var i__68440_68711 = (0);
while(true){
if((i__68440_68711 < count__68439_68710)){
var vec__68447_68712 = chunk__68438_68709.cljs$core$IIndexed$_nth$arity$2(null,i__68440_68711);
var k_68713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68447_68712,(0),null);
var v_68714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68447_68712,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_68713);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_68713),v_68714);


var G__68715 = seq__68437_68708;
var G__68716 = chunk__68438_68709;
var G__68717 = count__68439_68710;
var G__68718 = (i__68440_68711 + (1));
seq__68437_68708 = G__68715;
chunk__68438_68709 = G__68716;
count__68439_68710 = G__68717;
i__68440_68711 = G__68718;
continue;
} else {
var temp__5825__auto___68719 = cljs.core.seq(seq__68437_68708);
if(temp__5825__auto___68719){
var seq__68437_68720__$1 = temp__5825__auto___68719;
if(cljs.core.chunked_seq_QMARK_(seq__68437_68720__$1)){
var c__5548__auto___68721 = cljs.core.chunk_first(seq__68437_68720__$1);
var G__68722 = cljs.core.chunk_rest(seq__68437_68720__$1);
var G__68723 = c__5548__auto___68721;
var G__68724 = cljs.core.count(c__5548__auto___68721);
var G__68725 = (0);
seq__68437_68708 = G__68722;
chunk__68438_68709 = G__68723;
count__68439_68710 = G__68724;
i__68440_68711 = G__68725;
continue;
} else {
var vec__68450_68726 = cljs.core.first(seq__68437_68720__$1);
var k_68727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68450_68726,(0),null);
var v_68728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68450_68726,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_68727);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_68727),v_68728);


var G__68729 = cljs.core.next(seq__68437_68720__$1);
var G__68730 = null;
var G__68731 = (0);
var G__68732 = (0);
seq__68437_68708 = G__68729;
chunk__68438_68709 = G__68730;
count__68439_68710 = G__68731;
i__68440_68711 = G__68732;
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
var vec__68454 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68454,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68454,(1),null);
var seq__68457_68733 = cljs.core.seq(node_children);
var chunk__68459_68734 = null;
var count__68460_68735 = (0);
var i__68461_68736 = (0);
while(true){
if((i__68461_68736 < count__68460_68735)){
var child_struct_68737 = chunk__68459_68734.cljs$core$IIndexed$_nth$arity$2(null,i__68461_68736);
if((!((child_struct_68737 == null)))){
if(typeof child_struct_68737 === 'string'){
var text_68738 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_68738),child_struct_68737].join(''));
} else {
var children_68739 = shadow.dom.svg_node(child_struct_68737);
if(cljs.core.seq_QMARK_(children_68739)){
var seq__68475_68740 = cljs.core.seq(children_68739);
var chunk__68477_68741 = null;
var count__68478_68742 = (0);
var i__68479_68743 = (0);
while(true){
if((i__68479_68743 < count__68478_68742)){
var child_68744 = chunk__68477_68741.cljs$core$IIndexed$_nth$arity$2(null,i__68479_68743);
if(cljs.core.truth_(child_68744)){
node.appendChild(child_68744);


var G__68745 = seq__68475_68740;
var G__68746 = chunk__68477_68741;
var G__68747 = count__68478_68742;
var G__68748 = (i__68479_68743 + (1));
seq__68475_68740 = G__68745;
chunk__68477_68741 = G__68746;
count__68478_68742 = G__68747;
i__68479_68743 = G__68748;
continue;
} else {
var G__68749 = seq__68475_68740;
var G__68750 = chunk__68477_68741;
var G__68751 = count__68478_68742;
var G__68752 = (i__68479_68743 + (1));
seq__68475_68740 = G__68749;
chunk__68477_68741 = G__68750;
count__68478_68742 = G__68751;
i__68479_68743 = G__68752;
continue;
}
} else {
var temp__5825__auto___68753 = cljs.core.seq(seq__68475_68740);
if(temp__5825__auto___68753){
var seq__68475_68754__$1 = temp__5825__auto___68753;
if(cljs.core.chunked_seq_QMARK_(seq__68475_68754__$1)){
var c__5548__auto___68755 = cljs.core.chunk_first(seq__68475_68754__$1);
var G__68756 = cljs.core.chunk_rest(seq__68475_68754__$1);
var G__68757 = c__5548__auto___68755;
var G__68758 = cljs.core.count(c__5548__auto___68755);
var G__68759 = (0);
seq__68475_68740 = G__68756;
chunk__68477_68741 = G__68757;
count__68478_68742 = G__68758;
i__68479_68743 = G__68759;
continue;
} else {
var child_68760 = cljs.core.first(seq__68475_68754__$1);
if(cljs.core.truth_(child_68760)){
node.appendChild(child_68760);


var G__68761 = cljs.core.next(seq__68475_68754__$1);
var G__68762 = null;
var G__68763 = (0);
var G__68764 = (0);
seq__68475_68740 = G__68761;
chunk__68477_68741 = G__68762;
count__68478_68742 = G__68763;
i__68479_68743 = G__68764;
continue;
} else {
var G__68765 = cljs.core.next(seq__68475_68754__$1);
var G__68766 = null;
var G__68767 = (0);
var G__68768 = (0);
seq__68475_68740 = G__68765;
chunk__68477_68741 = G__68766;
count__68478_68742 = G__68767;
i__68479_68743 = G__68768;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_68739);
}
}


var G__68769 = seq__68457_68733;
var G__68770 = chunk__68459_68734;
var G__68771 = count__68460_68735;
var G__68772 = (i__68461_68736 + (1));
seq__68457_68733 = G__68769;
chunk__68459_68734 = G__68770;
count__68460_68735 = G__68771;
i__68461_68736 = G__68772;
continue;
} else {
var G__68773 = seq__68457_68733;
var G__68774 = chunk__68459_68734;
var G__68775 = count__68460_68735;
var G__68776 = (i__68461_68736 + (1));
seq__68457_68733 = G__68773;
chunk__68459_68734 = G__68774;
count__68460_68735 = G__68775;
i__68461_68736 = G__68776;
continue;
}
} else {
var temp__5825__auto___68777 = cljs.core.seq(seq__68457_68733);
if(temp__5825__auto___68777){
var seq__68457_68778__$1 = temp__5825__auto___68777;
if(cljs.core.chunked_seq_QMARK_(seq__68457_68778__$1)){
var c__5548__auto___68779 = cljs.core.chunk_first(seq__68457_68778__$1);
var G__68780 = cljs.core.chunk_rest(seq__68457_68778__$1);
var G__68781 = c__5548__auto___68779;
var G__68782 = cljs.core.count(c__5548__auto___68779);
var G__68783 = (0);
seq__68457_68733 = G__68780;
chunk__68459_68734 = G__68781;
count__68460_68735 = G__68782;
i__68461_68736 = G__68783;
continue;
} else {
var child_struct_68784 = cljs.core.first(seq__68457_68778__$1);
if((!((child_struct_68784 == null)))){
if(typeof child_struct_68784 === 'string'){
var text_68785 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_68785),child_struct_68784].join(''));
} else {
var children_68786 = shadow.dom.svg_node(child_struct_68784);
if(cljs.core.seq_QMARK_(children_68786)){
var seq__68481_68787 = cljs.core.seq(children_68786);
var chunk__68483_68788 = null;
var count__68484_68789 = (0);
var i__68485_68790 = (0);
while(true){
if((i__68485_68790 < count__68484_68789)){
var child_68791 = chunk__68483_68788.cljs$core$IIndexed$_nth$arity$2(null,i__68485_68790);
if(cljs.core.truth_(child_68791)){
node.appendChild(child_68791);


var G__68792 = seq__68481_68787;
var G__68793 = chunk__68483_68788;
var G__68794 = count__68484_68789;
var G__68795 = (i__68485_68790 + (1));
seq__68481_68787 = G__68792;
chunk__68483_68788 = G__68793;
count__68484_68789 = G__68794;
i__68485_68790 = G__68795;
continue;
} else {
var G__68796 = seq__68481_68787;
var G__68797 = chunk__68483_68788;
var G__68798 = count__68484_68789;
var G__68799 = (i__68485_68790 + (1));
seq__68481_68787 = G__68796;
chunk__68483_68788 = G__68797;
count__68484_68789 = G__68798;
i__68485_68790 = G__68799;
continue;
}
} else {
var temp__5825__auto___68800__$1 = cljs.core.seq(seq__68481_68787);
if(temp__5825__auto___68800__$1){
var seq__68481_68801__$1 = temp__5825__auto___68800__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68481_68801__$1)){
var c__5548__auto___68802 = cljs.core.chunk_first(seq__68481_68801__$1);
var G__68803 = cljs.core.chunk_rest(seq__68481_68801__$1);
var G__68804 = c__5548__auto___68802;
var G__68805 = cljs.core.count(c__5548__auto___68802);
var G__68806 = (0);
seq__68481_68787 = G__68803;
chunk__68483_68788 = G__68804;
count__68484_68789 = G__68805;
i__68485_68790 = G__68806;
continue;
} else {
var child_68807 = cljs.core.first(seq__68481_68801__$1);
if(cljs.core.truth_(child_68807)){
node.appendChild(child_68807);


var G__68808 = cljs.core.next(seq__68481_68801__$1);
var G__68809 = null;
var G__68810 = (0);
var G__68811 = (0);
seq__68481_68787 = G__68808;
chunk__68483_68788 = G__68809;
count__68484_68789 = G__68810;
i__68485_68790 = G__68811;
continue;
} else {
var G__68812 = cljs.core.next(seq__68481_68801__$1);
var G__68813 = null;
var G__68814 = (0);
var G__68815 = (0);
seq__68481_68787 = G__68812;
chunk__68483_68788 = G__68813;
count__68484_68789 = G__68814;
i__68485_68790 = G__68815;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_68786);
}
}


var G__68816 = cljs.core.next(seq__68457_68778__$1);
var G__68817 = null;
var G__68818 = (0);
var G__68819 = (0);
seq__68457_68733 = G__68816;
chunk__68459_68734 = G__68817;
count__68460_68735 = G__68818;
i__68461_68736 = G__68819;
continue;
} else {
var G__68820 = cljs.core.next(seq__68457_68778__$1);
var G__68821 = null;
var G__68822 = (0);
var G__68823 = (0);
seq__68457_68733 = G__68820;
chunk__68459_68734 = G__68821;
count__68460_68735 = G__68822;
i__68461_68736 = G__68823;
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
var len__5749__auto___68824 = arguments.length;
var i__5750__auto___68825 = (0);
while(true){
if((i__5750__auto___68825 < len__5749__auto___68824)){
args__5755__auto__.push((arguments[i__5750__auto___68825]));

var G__68826 = (i__5750__auto___68825 + (1));
i__5750__auto___68825 = G__68826;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq68487){
var G__68488 = cljs.core.first(seq68487);
var seq68487__$1 = cljs.core.next(seq68487);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68488,seq68487__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
