goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_65679 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_65679(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_65680 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_65680(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__65305 = coll;
var G__65306 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__65305,G__65306) : shadow.dom.lazy_native_coll_seq.call(null,G__65305,G__65306));
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
var G__65332 = arguments.length;
switch (G__65332) {
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
var G__65386 = arguments.length;
switch (G__65386) {
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
var G__65390 = arguments.length;
switch (G__65390) {
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
var G__65394 = arguments.length;
switch (G__65394) {
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
var G__65404 = arguments.length;
switch (G__65404) {
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
var G__65411 = arguments.length;
switch (G__65411) {
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
}catch (e65412){if((e65412 instanceof Object)){
var e = e65412;
return console.log("didnt support attachEvent",el,e);
} else {
throw e65412;

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
var seq__65413 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__65414 = null;
var count__65415 = (0);
var i__65416 = (0);
while(true){
if((i__65416 < count__65415)){
var el = chunk__65414.cljs$core$IIndexed$_nth$arity$2(null,i__65416);
var handler_65687__$1 = ((function (seq__65413,chunk__65414,count__65415,i__65416,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65413,chunk__65414,count__65415,i__65416,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65687__$1);


var G__65688 = seq__65413;
var G__65689 = chunk__65414;
var G__65690 = count__65415;
var G__65691 = (i__65416 + (1));
seq__65413 = G__65688;
chunk__65414 = G__65689;
count__65415 = G__65690;
i__65416 = G__65691;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65413);
if(temp__5825__auto__){
var seq__65413__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65413__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65413__$1);
var G__65692 = cljs.core.chunk_rest(seq__65413__$1);
var G__65693 = c__5548__auto__;
var G__65694 = cljs.core.count(c__5548__auto__);
var G__65695 = (0);
seq__65413 = G__65692;
chunk__65414 = G__65693;
count__65415 = G__65694;
i__65416 = G__65695;
continue;
} else {
var el = cljs.core.first(seq__65413__$1);
var handler_65696__$1 = ((function (seq__65413,chunk__65414,count__65415,i__65416,el,seq__65413__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65413,chunk__65414,count__65415,i__65416,el,seq__65413__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65696__$1);


var G__65697 = cljs.core.next(seq__65413__$1);
var G__65698 = null;
var G__65699 = (0);
var G__65700 = (0);
seq__65413 = G__65697;
chunk__65414 = G__65698;
count__65415 = G__65699;
i__65416 = G__65700;
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
var G__65418 = arguments.length;
switch (G__65418) {
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
var seq__65422 = cljs.core.seq(events);
var chunk__65423 = null;
var count__65424 = (0);
var i__65425 = (0);
while(true){
if((i__65425 < count__65424)){
var vec__65435 = chunk__65423.cljs$core$IIndexed$_nth$arity$2(null,i__65425);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65435,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65435,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65702 = seq__65422;
var G__65703 = chunk__65423;
var G__65704 = count__65424;
var G__65705 = (i__65425 + (1));
seq__65422 = G__65702;
chunk__65423 = G__65703;
count__65424 = G__65704;
i__65425 = G__65705;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65422);
if(temp__5825__auto__){
var seq__65422__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65422__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65422__$1);
var G__65706 = cljs.core.chunk_rest(seq__65422__$1);
var G__65707 = c__5548__auto__;
var G__65708 = cljs.core.count(c__5548__auto__);
var G__65709 = (0);
seq__65422 = G__65706;
chunk__65423 = G__65707;
count__65424 = G__65708;
i__65425 = G__65709;
continue;
} else {
var vec__65438 = cljs.core.first(seq__65422__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65438,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65438,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65710 = cljs.core.next(seq__65422__$1);
var G__65711 = null;
var G__65712 = (0);
var G__65713 = (0);
seq__65422 = G__65710;
chunk__65423 = G__65711;
count__65424 = G__65712;
i__65425 = G__65713;
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
var seq__65444 = cljs.core.seq(styles);
var chunk__65445 = null;
var count__65446 = (0);
var i__65447 = (0);
while(true){
if((i__65447 < count__65446)){
var vec__65458 = chunk__65445.cljs$core$IIndexed$_nth$arity$2(null,i__65447);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65458,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65458,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65714 = seq__65444;
var G__65715 = chunk__65445;
var G__65716 = count__65446;
var G__65717 = (i__65447 + (1));
seq__65444 = G__65714;
chunk__65445 = G__65715;
count__65446 = G__65716;
i__65447 = G__65717;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65444);
if(temp__5825__auto__){
var seq__65444__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65444__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65444__$1);
var G__65718 = cljs.core.chunk_rest(seq__65444__$1);
var G__65719 = c__5548__auto__;
var G__65720 = cljs.core.count(c__5548__auto__);
var G__65721 = (0);
seq__65444 = G__65718;
chunk__65445 = G__65719;
count__65446 = G__65720;
i__65447 = G__65721;
continue;
} else {
var vec__65463 = cljs.core.first(seq__65444__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65463,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65463,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65722 = cljs.core.next(seq__65444__$1);
var G__65723 = null;
var G__65724 = (0);
var G__65725 = (0);
seq__65444 = G__65722;
chunk__65445 = G__65723;
count__65446 = G__65724;
i__65447 = G__65725;
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
var G__65466_65726 = key;
var G__65466_65727__$1 = (((G__65466_65726 instanceof cljs.core.Keyword))?G__65466_65726.fqn:null);
switch (G__65466_65727__$1) {
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
var ks_65729 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_65729,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_65729,"aria-");
}
})())){
el.setAttribute(ks_65729,value);
} else {
(el[ks_65729] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__65471){
var map__65472 = p__65471;
var map__65472__$1 = cljs.core.__destructure_map(map__65472);
var props = map__65472__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65472__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__65473 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65473,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65473,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65473,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__65476 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__65476,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__65476;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__65480 = arguments.length;
switch (G__65480) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__65481){
var vec__65483 = p__65481;
var seq__65484 = cljs.core.seq(vec__65483);
var first__65485 = cljs.core.first(seq__65484);
var seq__65484__$1 = cljs.core.next(seq__65484);
var nn = first__65485;
var first__65485__$1 = cljs.core.first(seq__65484__$1);
var seq__65484__$2 = cljs.core.next(seq__65484__$1);
var np = first__65485__$1;
var nc = seq__65484__$2;
var node = vec__65483;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65486 = nn;
var G__65487 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65486,G__65487) : create_fn.call(null,G__65486,G__65487));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65488 = nn;
var G__65489 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65488,G__65489) : create_fn.call(null,G__65488,G__65489));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__65492 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65492,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65492,(1),null);
var seq__65495_65731 = cljs.core.seq(node_children);
var chunk__65496_65732 = null;
var count__65497_65733 = (0);
var i__65498_65734 = (0);
while(true){
if((i__65498_65734 < count__65497_65733)){
var child_struct_65735 = chunk__65496_65732.cljs$core$IIndexed$_nth$arity$2(null,i__65498_65734);
var children_65736 = shadow.dom.dom_node(child_struct_65735);
if(cljs.core.seq_QMARK_(children_65736)){
var seq__65515_65737 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65736));
var chunk__65517_65738 = null;
var count__65518_65739 = (0);
var i__65519_65740 = (0);
while(true){
if((i__65519_65740 < count__65518_65739)){
var child_65741 = chunk__65517_65738.cljs$core$IIndexed$_nth$arity$2(null,i__65519_65740);
if(cljs.core.truth_(child_65741)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65741);


var G__65742 = seq__65515_65737;
var G__65743 = chunk__65517_65738;
var G__65744 = count__65518_65739;
var G__65745 = (i__65519_65740 + (1));
seq__65515_65737 = G__65742;
chunk__65517_65738 = G__65743;
count__65518_65739 = G__65744;
i__65519_65740 = G__65745;
continue;
} else {
var G__65746 = seq__65515_65737;
var G__65747 = chunk__65517_65738;
var G__65748 = count__65518_65739;
var G__65749 = (i__65519_65740 + (1));
seq__65515_65737 = G__65746;
chunk__65517_65738 = G__65747;
count__65518_65739 = G__65748;
i__65519_65740 = G__65749;
continue;
}
} else {
var temp__5825__auto___65750 = cljs.core.seq(seq__65515_65737);
if(temp__5825__auto___65750){
var seq__65515_65751__$1 = temp__5825__auto___65750;
if(cljs.core.chunked_seq_QMARK_(seq__65515_65751__$1)){
var c__5548__auto___65752 = cljs.core.chunk_first(seq__65515_65751__$1);
var G__65753 = cljs.core.chunk_rest(seq__65515_65751__$1);
var G__65754 = c__5548__auto___65752;
var G__65755 = cljs.core.count(c__5548__auto___65752);
var G__65756 = (0);
seq__65515_65737 = G__65753;
chunk__65517_65738 = G__65754;
count__65518_65739 = G__65755;
i__65519_65740 = G__65756;
continue;
} else {
var child_65757 = cljs.core.first(seq__65515_65751__$1);
if(cljs.core.truth_(child_65757)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65757);


var G__65758 = cljs.core.next(seq__65515_65751__$1);
var G__65759 = null;
var G__65760 = (0);
var G__65761 = (0);
seq__65515_65737 = G__65758;
chunk__65517_65738 = G__65759;
count__65518_65739 = G__65760;
i__65519_65740 = G__65761;
continue;
} else {
var G__65762 = cljs.core.next(seq__65515_65751__$1);
var G__65763 = null;
var G__65764 = (0);
var G__65765 = (0);
seq__65515_65737 = G__65762;
chunk__65517_65738 = G__65763;
count__65518_65739 = G__65764;
i__65519_65740 = G__65765;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65736);
}


var G__65766 = seq__65495_65731;
var G__65767 = chunk__65496_65732;
var G__65768 = count__65497_65733;
var G__65769 = (i__65498_65734 + (1));
seq__65495_65731 = G__65766;
chunk__65496_65732 = G__65767;
count__65497_65733 = G__65768;
i__65498_65734 = G__65769;
continue;
} else {
var temp__5825__auto___65770 = cljs.core.seq(seq__65495_65731);
if(temp__5825__auto___65770){
var seq__65495_65771__$1 = temp__5825__auto___65770;
if(cljs.core.chunked_seq_QMARK_(seq__65495_65771__$1)){
var c__5548__auto___65772 = cljs.core.chunk_first(seq__65495_65771__$1);
var G__65773 = cljs.core.chunk_rest(seq__65495_65771__$1);
var G__65774 = c__5548__auto___65772;
var G__65775 = cljs.core.count(c__5548__auto___65772);
var G__65776 = (0);
seq__65495_65731 = G__65773;
chunk__65496_65732 = G__65774;
count__65497_65733 = G__65775;
i__65498_65734 = G__65776;
continue;
} else {
var child_struct_65777 = cljs.core.first(seq__65495_65771__$1);
var children_65778 = shadow.dom.dom_node(child_struct_65777);
if(cljs.core.seq_QMARK_(children_65778)){
var seq__65521_65779 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65778));
var chunk__65523_65780 = null;
var count__65524_65781 = (0);
var i__65525_65782 = (0);
while(true){
if((i__65525_65782 < count__65524_65781)){
var child_65783 = chunk__65523_65780.cljs$core$IIndexed$_nth$arity$2(null,i__65525_65782);
if(cljs.core.truth_(child_65783)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65783);


var G__65784 = seq__65521_65779;
var G__65785 = chunk__65523_65780;
var G__65786 = count__65524_65781;
var G__65787 = (i__65525_65782 + (1));
seq__65521_65779 = G__65784;
chunk__65523_65780 = G__65785;
count__65524_65781 = G__65786;
i__65525_65782 = G__65787;
continue;
} else {
var G__65788 = seq__65521_65779;
var G__65789 = chunk__65523_65780;
var G__65790 = count__65524_65781;
var G__65791 = (i__65525_65782 + (1));
seq__65521_65779 = G__65788;
chunk__65523_65780 = G__65789;
count__65524_65781 = G__65790;
i__65525_65782 = G__65791;
continue;
}
} else {
var temp__5825__auto___65792__$1 = cljs.core.seq(seq__65521_65779);
if(temp__5825__auto___65792__$1){
var seq__65521_65793__$1 = temp__5825__auto___65792__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65521_65793__$1)){
var c__5548__auto___65794 = cljs.core.chunk_first(seq__65521_65793__$1);
var G__65795 = cljs.core.chunk_rest(seq__65521_65793__$1);
var G__65796 = c__5548__auto___65794;
var G__65797 = cljs.core.count(c__5548__auto___65794);
var G__65798 = (0);
seq__65521_65779 = G__65795;
chunk__65523_65780 = G__65796;
count__65524_65781 = G__65797;
i__65525_65782 = G__65798;
continue;
} else {
var child_65799 = cljs.core.first(seq__65521_65793__$1);
if(cljs.core.truth_(child_65799)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65799);


var G__65800 = cljs.core.next(seq__65521_65793__$1);
var G__65801 = null;
var G__65802 = (0);
var G__65803 = (0);
seq__65521_65779 = G__65800;
chunk__65523_65780 = G__65801;
count__65524_65781 = G__65802;
i__65525_65782 = G__65803;
continue;
} else {
var G__65804 = cljs.core.next(seq__65521_65793__$1);
var G__65805 = null;
var G__65806 = (0);
var G__65807 = (0);
seq__65521_65779 = G__65804;
chunk__65523_65780 = G__65805;
count__65524_65781 = G__65806;
i__65525_65782 = G__65807;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65778);
}


var G__65808 = cljs.core.next(seq__65495_65771__$1);
var G__65809 = null;
var G__65810 = (0);
var G__65811 = (0);
seq__65495_65731 = G__65808;
chunk__65496_65732 = G__65809;
count__65497_65733 = G__65810;
i__65498_65734 = G__65811;
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
var seq__65530 = cljs.core.seq(node);
var chunk__65531 = null;
var count__65532 = (0);
var i__65533 = (0);
while(true){
if((i__65533 < count__65532)){
var n = chunk__65531.cljs$core$IIndexed$_nth$arity$2(null,i__65533);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65812 = seq__65530;
var G__65813 = chunk__65531;
var G__65814 = count__65532;
var G__65815 = (i__65533 + (1));
seq__65530 = G__65812;
chunk__65531 = G__65813;
count__65532 = G__65814;
i__65533 = G__65815;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65530);
if(temp__5825__auto__){
var seq__65530__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65530__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65530__$1);
var G__65816 = cljs.core.chunk_rest(seq__65530__$1);
var G__65817 = c__5548__auto__;
var G__65818 = cljs.core.count(c__5548__auto__);
var G__65819 = (0);
seq__65530 = G__65816;
chunk__65531 = G__65817;
count__65532 = G__65818;
i__65533 = G__65819;
continue;
} else {
var n = cljs.core.first(seq__65530__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65820 = cljs.core.next(seq__65530__$1);
var G__65821 = null;
var G__65822 = (0);
var G__65823 = (0);
seq__65530 = G__65820;
chunk__65531 = G__65821;
count__65532 = G__65822;
i__65533 = G__65823;
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
var G__65543 = arguments.length;
switch (G__65543) {
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
var G__65545 = arguments.length;
switch (G__65545) {
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
var G__65547 = arguments.length;
switch (G__65547) {
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
var len__5749__auto___65827 = arguments.length;
var i__5750__auto___65828 = (0);
while(true){
if((i__5750__auto___65828 < len__5749__auto___65827)){
args__5755__auto__.push((arguments[i__5750__auto___65828]));

var G__65829 = (i__5750__auto___65828 + (1));
i__5750__auto___65828 = G__65829;
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
var seq__65554_65830 = cljs.core.seq(nodes);
var chunk__65555_65831 = null;
var count__65556_65832 = (0);
var i__65557_65833 = (0);
while(true){
if((i__65557_65833 < count__65556_65832)){
var node_65834 = chunk__65555_65831.cljs$core$IIndexed$_nth$arity$2(null,i__65557_65833);
fragment.appendChild(shadow.dom._to_dom(node_65834));


var G__65835 = seq__65554_65830;
var G__65836 = chunk__65555_65831;
var G__65837 = count__65556_65832;
var G__65838 = (i__65557_65833 + (1));
seq__65554_65830 = G__65835;
chunk__65555_65831 = G__65836;
count__65556_65832 = G__65837;
i__65557_65833 = G__65838;
continue;
} else {
var temp__5825__auto___65839 = cljs.core.seq(seq__65554_65830);
if(temp__5825__auto___65839){
var seq__65554_65840__$1 = temp__5825__auto___65839;
if(cljs.core.chunked_seq_QMARK_(seq__65554_65840__$1)){
var c__5548__auto___65841 = cljs.core.chunk_first(seq__65554_65840__$1);
var G__65842 = cljs.core.chunk_rest(seq__65554_65840__$1);
var G__65843 = c__5548__auto___65841;
var G__65844 = cljs.core.count(c__5548__auto___65841);
var G__65845 = (0);
seq__65554_65830 = G__65842;
chunk__65555_65831 = G__65843;
count__65556_65832 = G__65844;
i__65557_65833 = G__65845;
continue;
} else {
var node_65846 = cljs.core.first(seq__65554_65840__$1);
fragment.appendChild(shadow.dom._to_dom(node_65846));


var G__65847 = cljs.core.next(seq__65554_65840__$1);
var G__65848 = null;
var G__65849 = (0);
var G__65850 = (0);
seq__65554_65830 = G__65847;
chunk__65555_65831 = G__65848;
count__65556_65832 = G__65849;
i__65557_65833 = G__65850;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq65553){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65553));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65558_65851 = cljs.core.seq(scripts);
var chunk__65559_65852 = null;
var count__65560_65853 = (0);
var i__65561_65854 = (0);
while(true){
if((i__65561_65854 < count__65560_65853)){
var vec__65568_65855 = chunk__65559_65852.cljs$core$IIndexed$_nth$arity$2(null,i__65561_65854);
var script_tag_65856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65568_65855,(0),null);
var script_body_65857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65568_65855,(1),null);
eval(script_body_65857);


var G__65858 = seq__65558_65851;
var G__65859 = chunk__65559_65852;
var G__65860 = count__65560_65853;
var G__65861 = (i__65561_65854 + (1));
seq__65558_65851 = G__65858;
chunk__65559_65852 = G__65859;
count__65560_65853 = G__65860;
i__65561_65854 = G__65861;
continue;
} else {
var temp__5825__auto___65862 = cljs.core.seq(seq__65558_65851);
if(temp__5825__auto___65862){
var seq__65558_65863__$1 = temp__5825__auto___65862;
if(cljs.core.chunked_seq_QMARK_(seq__65558_65863__$1)){
var c__5548__auto___65864 = cljs.core.chunk_first(seq__65558_65863__$1);
var G__65865 = cljs.core.chunk_rest(seq__65558_65863__$1);
var G__65866 = c__5548__auto___65864;
var G__65867 = cljs.core.count(c__5548__auto___65864);
var G__65868 = (0);
seq__65558_65851 = G__65865;
chunk__65559_65852 = G__65866;
count__65560_65853 = G__65867;
i__65561_65854 = G__65868;
continue;
} else {
var vec__65571_65869 = cljs.core.first(seq__65558_65863__$1);
var script_tag_65870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65571_65869,(0),null);
var script_body_65871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65571_65869,(1),null);
eval(script_body_65871);


var G__65872 = cljs.core.next(seq__65558_65863__$1);
var G__65873 = null;
var G__65874 = (0);
var G__65875 = (0);
seq__65558_65851 = G__65872;
chunk__65559_65852 = G__65873;
count__65560_65853 = G__65874;
i__65561_65854 = G__65875;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__65574){
var vec__65575 = p__65574;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65575,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65575,(1),null);
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
var G__65579 = arguments.length;
switch (G__65579) {
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
var seq__65580 = cljs.core.seq(style_keys);
var chunk__65581 = null;
var count__65582 = (0);
var i__65583 = (0);
while(true){
if((i__65583 < count__65582)){
var it = chunk__65581.cljs$core$IIndexed$_nth$arity$2(null,i__65583);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__65877 = seq__65580;
var G__65878 = chunk__65581;
var G__65879 = count__65582;
var G__65880 = (i__65583 + (1));
seq__65580 = G__65877;
chunk__65581 = G__65878;
count__65582 = G__65879;
i__65583 = G__65880;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65580);
if(temp__5825__auto__){
var seq__65580__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65580__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65580__$1);
var G__65881 = cljs.core.chunk_rest(seq__65580__$1);
var G__65882 = c__5548__auto__;
var G__65883 = cljs.core.count(c__5548__auto__);
var G__65884 = (0);
seq__65580 = G__65881;
chunk__65581 = G__65882;
count__65582 = G__65883;
i__65583 = G__65884;
continue;
} else {
var it = cljs.core.first(seq__65580__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__65885 = cljs.core.next(seq__65580__$1);
var G__65886 = null;
var G__65887 = (0);
var G__65888 = (0);
seq__65580 = G__65885;
chunk__65581 = G__65886;
count__65582 = G__65887;
i__65583 = G__65888;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65585,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65589 = k65585;
var G__65589__$1 = (((G__65589 instanceof cljs.core.Keyword))?G__65589.fqn:null);
switch (G__65589__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65585,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65590){
var vec__65591 = p__65590;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65591,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65591,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65584){
var self__ = this;
var G__65584__$1 = this;
return (new cljs.core.RecordIter((0),G__65584__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65586,other65587){
var self__ = this;
var this65586__$1 = this;
return (((!((other65587 == null)))) && ((((this65586__$1.constructor === other65587.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65586__$1.x,other65587.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65586__$1.y,other65587.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65586__$1.__extmap,other65587.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65585){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65594 = k65585;
var G__65594__$1 = (((G__65594 instanceof cljs.core.Keyword))?G__65594.fqn:null);
switch (G__65594__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65585);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65584){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65595 = cljs.core.keyword_identical_QMARK_;
var expr__65596 = k__5332__auto__;
if(cljs.core.truth_((pred__65595.cljs$core$IFn$_invoke$arity$2 ? pred__65595.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__65596) : pred__65595.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__65596)))){
return (new shadow.dom.Coordinate(G__65584,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65595.cljs$core$IFn$_invoke$arity$2 ? pred__65595.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__65596) : pred__65595.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__65596)))){
return (new shadow.dom.Coordinate(self__.x,G__65584,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65584),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65584){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__65584,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__65588){
var extmap__5365__auto__ = (function (){var G__65598 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65588,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65588)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65598);
} else {
return G__65598;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__65588),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__65588),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65600,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65604 = k65600;
var G__65604__$1 = (((G__65604 instanceof cljs.core.Keyword))?G__65604.fqn:null);
switch (G__65604__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65600,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65605){
var vec__65606 = p__65605;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65606,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65606,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65599){
var self__ = this;
var G__65599__$1 = this;
return (new cljs.core.RecordIter((0),G__65599__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65601,other65602){
var self__ = this;
var this65601__$1 = this;
return (((!((other65602 == null)))) && ((((this65601__$1.constructor === other65602.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65601__$1.w,other65602.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65601__$1.h,other65602.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65601__$1.__extmap,other65602.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65600){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65609 = k65600;
var G__65609__$1 = (((G__65609 instanceof cljs.core.Keyword))?G__65609.fqn:null);
switch (G__65609__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65600);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65599){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65610 = cljs.core.keyword_identical_QMARK_;
var expr__65611 = k__5332__auto__;
if(cljs.core.truth_((pred__65610.cljs$core$IFn$_invoke$arity$2 ? pred__65610.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__65611) : pred__65610.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__65611)))){
return (new shadow.dom.Size(G__65599,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65610.cljs$core$IFn$_invoke$arity$2 ? pred__65610.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__65611) : pred__65610.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__65611)))){
return (new shadow.dom.Size(self__.w,G__65599,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65599),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65599){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65599,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65603){
var extmap__5365__auto__ = (function (){var G__65613 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65603,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65603)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65613);
} else {
return G__65613;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65603),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65603),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__65893 = (i + (1));
var G__65894 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__65893;
ret = G__65894;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65618){
var vec__65619 = p__65618;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65619,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65619,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65623 = arguments.length;
switch (G__65623) {
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
var G__65896 = ps;
var G__65897 = (i + (1));
el__$1 = G__65896;
i = G__65897;
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
var vec__65624 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65624,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65624,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65624,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65627_65898 = cljs.core.seq(props);
var chunk__65628_65899 = null;
var count__65629_65900 = (0);
var i__65630_65901 = (0);
while(true){
if((i__65630_65901 < count__65629_65900)){
var vec__65637_65902 = chunk__65628_65899.cljs$core$IIndexed$_nth$arity$2(null,i__65630_65901);
var k_65903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65637_65902,(0),null);
var v_65904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65637_65902,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_65903);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65903),v_65904);


var G__65905 = seq__65627_65898;
var G__65906 = chunk__65628_65899;
var G__65907 = count__65629_65900;
var G__65908 = (i__65630_65901 + (1));
seq__65627_65898 = G__65905;
chunk__65628_65899 = G__65906;
count__65629_65900 = G__65907;
i__65630_65901 = G__65908;
continue;
} else {
var temp__5825__auto___65909 = cljs.core.seq(seq__65627_65898);
if(temp__5825__auto___65909){
var seq__65627_65910__$1 = temp__5825__auto___65909;
if(cljs.core.chunked_seq_QMARK_(seq__65627_65910__$1)){
var c__5548__auto___65911 = cljs.core.chunk_first(seq__65627_65910__$1);
var G__65912 = cljs.core.chunk_rest(seq__65627_65910__$1);
var G__65913 = c__5548__auto___65911;
var G__65914 = cljs.core.count(c__5548__auto___65911);
var G__65915 = (0);
seq__65627_65898 = G__65912;
chunk__65628_65899 = G__65913;
count__65629_65900 = G__65914;
i__65630_65901 = G__65915;
continue;
} else {
var vec__65640_65916 = cljs.core.first(seq__65627_65910__$1);
var k_65917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65640_65916,(0),null);
var v_65918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65640_65916,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_65917);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65917),v_65918);


var G__65919 = cljs.core.next(seq__65627_65910__$1);
var G__65920 = null;
var G__65921 = (0);
var G__65922 = (0);
seq__65627_65898 = G__65919;
chunk__65628_65899 = G__65920;
count__65629_65900 = G__65921;
i__65630_65901 = G__65922;
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
var vec__65644 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65644,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65644,(1),null);
var seq__65647_65923 = cljs.core.seq(node_children);
var chunk__65649_65924 = null;
var count__65650_65925 = (0);
var i__65651_65926 = (0);
while(true){
if((i__65651_65926 < count__65650_65925)){
var child_struct_65927 = chunk__65649_65924.cljs$core$IIndexed$_nth$arity$2(null,i__65651_65926);
if((!((child_struct_65927 == null)))){
if(typeof child_struct_65927 === 'string'){
var text_65928 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65928),child_struct_65927].join(''));
} else {
var children_65929 = shadow.dom.svg_node(child_struct_65927);
if(cljs.core.seq_QMARK_(children_65929)){
var seq__65665_65930 = cljs.core.seq(children_65929);
var chunk__65667_65931 = null;
var count__65668_65932 = (0);
var i__65669_65933 = (0);
while(true){
if((i__65669_65933 < count__65668_65932)){
var child_65934 = chunk__65667_65931.cljs$core$IIndexed$_nth$arity$2(null,i__65669_65933);
if(cljs.core.truth_(child_65934)){
node.appendChild(child_65934);


var G__65935 = seq__65665_65930;
var G__65936 = chunk__65667_65931;
var G__65937 = count__65668_65932;
var G__65938 = (i__65669_65933 + (1));
seq__65665_65930 = G__65935;
chunk__65667_65931 = G__65936;
count__65668_65932 = G__65937;
i__65669_65933 = G__65938;
continue;
} else {
var G__65939 = seq__65665_65930;
var G__65940 = chunk__65667_65931;
var G__65941 = count__65668_65932;
var G__65942 = (i__65669_65933 + (1));
seq__65665_65930 = G__65939;
chunk__65667_65931 = G__65940;
count__65668_65932 = G__65941;
i__65669_65933 = G__65942;
continue;
}
} else {
var temp__5825__auto___65943 = cljs.core.seq(seq__65665_65930);
if(temp__5825__auto___65943){
var seq__65665_65944__$1 = temp__5825__auto___65943;
if(cljs.core.chunked_seq_QMARK_(seq__65665_65944__$1)){
var c__5548__auto___65945 = cljs.core.chunk_first(seq__65665_65944__$1);
var G__65946 = cljs.core.chunk_rest(seq__65665_65944__$1);
var G__65947 = c__5548__auto___65945;
var G__65948 = cljs.core.count(c__5548__auto___65945);
var G__65949 = (0);
seq__65665_65930 = G__65946;
chunk__65667_65931 = G__65947;
count__65668_65932 = G__65948;
i__65669_65933 = G__65949;
continue;
} else {
var child_65950 = cljs.core.first(seq__65665_65944__$1);
if(cljs.core.truth_(child_65950)){
node.appendChild(child_65950);


var G__65951 = cljs.core.next(seq__65665_65944__$1);
var G__65952 = null;
var G__65953 = (0);
var G__65954 = (0);
seq__65665_65930 = G__65951;
chunk__65667_65931 = G__65952;
count__65668_65932 = G__65953;
i__65669_65933 = G__65954;
continue;
} else {
var G__65955 = cljs.core.next(seq__65665_65944__$1);
var G__65956 = null;
var G__65957 = (0);
var G__65958 = (0);
seq__65665_65930 = G__65955;
chunk__65667_65931 = G__65956;
count__65668_65932 = G__65957;
i__65669_65933 = G__65958;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65929);
}
}


var G__65959 = seq__65647_65923;
var G__65960 = chunk__65649_65924;
var G__65961 = count__65650_65925;
var G__65962 = (i__65651_65926 + (1));
seq__65647_65923 = G__65959;
chunk__65649_65924 = G__65960;
count__65650_65925 = G__65961;
i__65651_65926 = G__65962;
continue;
} else {
var G__65963 = seq__65647_65923;
var G__65964 = chunk__65649_65924;
var G__65965 = count__65650_65925;
var G__65966 = (i__65651_65926 + (1));
seq__65647_65923 = G__65963;
chunk__65649_65924 = G__65964;
count__65650_65925 = G__65965;
i__65651_65926 = G__65966;
continue;
}
} else {
var temp__5825__auto___65967 = cljs.core.seq(seq__65647_65923);
if(temp__5825__auto___65967){
var seq__65647_65968__$1 = temp__5825__auto___65967;
if(cljs.core.chunked_seq_QMARK_(seq__65647_65968__$1)){
var c__5548__auto___65969 = cljs.core.chunk_first(seq__65647_65968__$1);
var G__65970 = cljs.core.chunk_rest(seq__65647_65968__$1);
var G__65971 = c__5548__auto___65969;
var G__65972 = cljs.core.count(c__5548__auto___65969);
var G__65973 = (0);
seq__65647_65923 = G__65970;
chunk__65649_65924 = G__65971;
count__65650_65925 = G__65972;
i__65651_65926 = G__65973;
continue;
} else {
var child_struct_65974 = cljs.core.first(seq__65647_65968__$1);
if((!((child_struct_65974 == null)))){
if(typeof child_struct_65974 === 'string'){
var text_65975 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65975),child_struct_65974].join(''));
} else {
var children_65976 = shadow.dom.svg_node(child_struct_65974);
if(cljs.core.seq_QMARK_(children_65976)){
var seq__65671_65977 = cljs.core.seq(children_65976);
var chunk__65673_65978 = null;
var count__65674_65979 = (0);
var i__65675_65980 = (0);
while(true){
if((i__65675_65980 < count__65674_65979)){
var child_65981 = chunk__65673_65978.cljs$core$IIndexed$_nth$arity$2(null,i__65675_65980);
if(cljs.core.truth_(child_65981)){
node.appendChild(child_65981);


var G__65982 = seq__65671_65977;
var G__65983 = chunk__65673_65978;
var G__65984 = count__65674_65979;
var G__65985 = (i__65675_65980 + (1));
seq__65671_65977 = G__65982;
chunk__65673_65978 = G__65983;
count__65674_65979 = G__65984;
i__65675_65980 = G__65985;
continue;
} else {
var G__65986 = seq__65671_65977;
var G__65987 = chunk__65673_65978;
var G__65988 = count__65674_65979;
var G__65989 = (i__65675_65980 + (1));
seq__65671_65977 = G__65986;
chunk__65673_65978 = G__65987;
count__65674_65979 = G__65988;
i__65675_65980 = G__65989;
continue;
}
} else {
var temp__5825__auto___65990__$1 = cljs.core.seq(seq__65671_65977);
if(temp__5825__auto___65990__$1){
var seq__65671_65991__$1 = temp__5825__auto___65990__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65671_65991__$1)){
var c__5548__auto___65992 = cljs.core.chunk_first(seq__65671_65991__$1);
var G__65993 = cljs.core.chunk_rest(seq__65671_65991__$1);
var G__65994 = c__5548__auto___65992;
var G__65995 = cljs.core.count(c__5548__auto___65992);
var G__65996 = (0);
seq__65671_65977 = G__65993;
chunk__65673_65978 = G__65994;
count__65674_65979 = G__65995;
i__65675_65980 = G__65996;
continue;
} else {
var child_65997 = cljs.core.first(seq__65671_65991__$1);
if(cljs.core.truth_(child_65997)){
node.appendChild(child_65997);


var G__65998 = cljs.core.next(seq__65671_65991__$1);
var G__65999 = null;
var G__66000 = (0);
var G__66001 = (0);
seq__65671_65977 = G__65998;
chunk__65673_65978 = G__65999;
count__65674_65979 = G__66000;
i__65675_65980 = G__66001;
continue;
} else {
var G__66002 = cljs.core.next(seq__65671_65991__$1);
var G__66003 = null;
var G__66004 = (0);
var G__66005 = (0);
seq__65671_65977 = G__66002;
chunk__65673_65978 = G__66003;
count__65674_65979 = G__66004;
i__65675_65980 = G__66005;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65976);
}
}


var G__66006 = cljs.core.next(seq__65647_65968__$1);
var G__66007 = null;
var G__66008 = (0);
var G__66009 = (0);
seq__65647_65923 = G__66006;
chunk__65649_65924 = G__66007;
count__65650_65925 = G__66008;
i__65651_65926 = G__66009;
continue;
} else {
var G__66010 = cljs.core.next(seq__65647_65968__$1);
var G__66011 = null;
var G__66012 = (0);
var G__66013 = (0);
seq__65647_65923 = G__66010;
chunk__65649_65924 = G__66011;
count__65650_65925 = G__66012;
i__65651_65926 = G__66013;
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
var len__5749__auto___66014 = arguments.length;
var i__5750__auto___66015 = (0);
while(true){
if((i__5750__auto___66015 < len__5749__auto___66014)){
args__5755__auto__.push((arguments[i__5750__auto___66015]));

var G__66016 = (i__5750__auto___66015 + (1));
i__5750__auto___66015 = G__66016;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq65677){
var G__65678 = cljs.core.first(seq65677);
var seq65677__$1 = cljs.core.next(seq65677);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65678,seq65677__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
