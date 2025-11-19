goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48597 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48597(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48598 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48598(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47901 = coll;
var G__47902 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47901,G__47902) : shadow.dom.lazy_native_coll_seq.call(null,G__47901,G__47902));
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
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
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
var G__47929 = arguments.length;
switch (G__47929) {
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
var G__47941 = arguments.length;
switch (G__47941) {
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
var G__47952 = arguments.length;
switch (G__47952) {
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
var G__47965 = arguments.length;
switch (G__47965) {
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
var G__47970 = arguments.length;
switch (G__47970) {
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
var G__48001 = arguments.length;
switch (G__48001) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e48028){if((e48028 instanceof Object)){
var e = e48028;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48028;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__48036 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48037 = null;
var count__48038 = (0);
var i__48039 = (0);
while(true){
if((i__48039 < count__48038)){
var el = chunk__48037.cljs$core$IIndexed$_nth$arity$2(null,i__48039);
var handler_48609__$1 = ((function (seq__48036,chunk__48037,count__48038,i__48039,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48036,chunk__48037,count__48038,i__48039,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48609__$1);


var G__48610 = seq__48036;
var G__48611 = chunk__48037;
var G__48612 = count__48038;
var G__48613 = (i__48039 + (1));
seq__48036 = G__48610;
chunk__48037 = G__48611;
count__48038 = G__48612;
i__48039 = G__48613;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__48036);
if(temp__5825__auto__){
var seq__48036__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48036__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48036__$1);
var G__48614 = cljs.core.chunk_rest(seq__48036__$1);
var G__48615 = c__4679__auto__;
var G__48616 = cljs.core.count(c__4679__auto__);
var G__48617 = (0);
seq__48036 = G__48614;
chunk__48037 = G__48615;
count__48038 = G__48616;
i__48039 = G__48617;
continue;
} else {
var el = cljs.core.first(seq__48036__$1);
var handler_48618__$1 = ((function (seq__48036,chunk__48037,count__48038,i__48039,el,seq__48036__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48036,chunk__48037,count__48038,i__48039,el,seq__48036__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48618__$1);


var G__48619 = cljs.core.next(seq__48036__$1);
var G__48620 = null;
var G__48621 = (0);
var G__48622 = (0);
seq__48036 = G__48619;
chunk__48037 = G__48620;
count__48038 = G__48621;
i__48039 = G__48622;
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
var G__48065 = arguments.length;
switch (G__48065) {
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
var seq__48068 = cljs.core.seq(events);
var chunk__48069 = null;
var count__48070 = (0);
var i__48071 = (0);
while(true){
if((i__48071 < count__48070)){
var vec__48085 = chunk__48069.cljs$core$IIndexed$_nth$arity$2(null,i__48071);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48085,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48624 = seq__48068;
var G__48625 = chunk__48069;
var G__48626 = count__48070;
var G__48627 = (i__48071 + (1));
seq__48068 = G__48624;
chunk__48069 = G__48625;
count__48070 = G__48626;
i__48071 = G__48627;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__48068);
if(temp__5825__auto__){
var seq__48068__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48068__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48068__$1);
var G__48628 = cljs.core.chunk_rest(seq__48068__$1);
var G__48629 = c__4679__auto__;
var G__48630 = cljs.core.count(c__4679__auto__);
var G__48631 = (0);
seq__48068 = G__48628;
chunk__48069 = G__48629;
count__48070 = G__48630;
i__48071 = G__48631;
continue;
} else {
var vec__48092 = cljs.core.first(seq__48068__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48092,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48092,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48632 = cljs.core.next(seq__48068__$1);
var G__48633 = null;
var G__48634 = (0);
var G__48635 = (0);
seq__48068 = G__48632;
chunk__48069 = G__48633;
count__48070 = G__48634;
i__48071 = G__48635;
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
var seq__48098 = cljs.core.seq(styles);
var chunk__48099 = null;
var count__48100 = (0);
var i__48101 = (0);
while(true){
if((i__48101 < count__48100)){
var vec__48118 = chunk__48099.cljs$core$IIndexed$_nth$arity$2(null,i__48101);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48118,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48118,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48636 = seq__48098;
var G__48637 = chunk__48099;
var G__48638 = count__48100;
var G__48639 = (i__48101 + (1));
seq__48098 = G__48636;
chunk__48099 = G__48637;
count__48100 = G__48638;
i__48101 = G__48639;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__48098);
if(temp__5825__auto__){
var seq__48098__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48098__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48098__$1);
var G__48640 = cljs.core.chunk_rest(seq__48098__$1);
var G__48641 = c__4679__auto__;
var G__48642 = cljs.core.count(c__4679__auto__);
var G__48643 = (0);
seq__48098 = G__48640;
chunk__48099 = G__48641;
count__48100 = G__48642;
i__48101 = G__48643;
continue;
} else {
var vec__48123 = cljs.core.first(seq__48098__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48123,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48644 = cljs.core.next(seq__48098__$1);
var G__48645 = null;
var G__48646 = (0);
var G__48647 = (0);
seq__48098 = G__48644;
chunk__48099 = G__48645;
count__48100 = G__48646;
i__48101 = G__48647;
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
var G__48135_48648 = key;
var G__48135_48649__$1 = (((G__48135_48648 instanceof cljs.core.Keyword))?G__48135_48648.fqn:null);
switch (G__48135_48649__$1) {
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
var ks_48651 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_48651,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_48651,"aria-");
}
})())){
el.setAttribute(ks_48651,value);
} else {
(el[ks_48651] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48164){
var map__48165 = p__48164;
var map__48165__$1 = cljs.core.__destructure_map(map__48165);
var props = map__48165__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48165__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48167 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48167,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48167,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48167,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48173 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48173,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48173;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48178 = arguments.length;
switch (G__48178) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48179){
var vec__48180 = p__48179;
var seq__48181 = cljs.core.seq(vec__48180);
var first__48182 = cljs.core.first(seq__48181);
var seq__48181__$1 = cljs.core.next(seq__48181);
var nn = first__48182;
var first__48182__$1 = cljs.core.first(seq__48181__$1);
var seq__48181__$2 = cljs.core.next(seq__48181__$1);
var np = first__48182__$1;
var nc = seq__48181__$2;
var node = vec__48180;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48188 = nn;
var G__48189 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48188,G__48189) : create_fn.call(null,G__48188,G__48189));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48192 = nn;
var G__48193 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48192,G__48193) : create_fn.call(null,G__48192,G__48193));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48199 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48199,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48199,(1),null);
var seq__48203_48657 = cljs.core.seq(node_children);
var chunk__48204_48658 = null;
var count__48205_48659 = (0);
var i__48206_48660 = (0);
while(true){
if((i__48206_48660 < count__48205_48659)){
var child_struct_48661 = chunk__48204_48658.cljs$core$IIndexed$_nth$arity$2(null,i__48206_48660);
var children_48662 = shadow.dom.dom_node(child_struct_48661);
if(cljs.core.seq_QMARK_(children_48662)){
var seq__48245_48663 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48662));
var chunk__48247_48664 = null;
var count__48248_48665 = (0);
var i__48249_48666 = (0);
while(true){
if((i__48249_48666 < count__48248_48665)){
var child_48667 = chunk__48247_48664.cljs$core$IIndexed$_nth$arity$2(null,i__48249_48666);
if(cljs.core.truth_(child_48667)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48667);


var G__48668 = seq__48245_48663;
var G__48669 = chunk__48247_48664;
var G__48670 = count__48248_48665;
var G__48671 = (i__48249_48666 + (1));
seq__48245_48663 = G__48668;
chunk__48247_48664 = G__48669;
count__48248_48665 = G__48670;
i__48249_48666 = G__48671;
continue;
} else {
var G__48672 = seq__48245_48663;
var G__48673 = chunk__48247_48664;
var G__48674 = count__48248_48665;
var G__48675 = (i__48249_48666 + (1));
seq__48245_48663 = G__48672;
chunk__48247_48664 = G__48673;
count__48248_48665 = G__48674;
i__48249_48666 = G__48675;
continue;
}
} else {
var temp__5825__auto___48676 = cljs.core.seq(seq__48245_48663);
if(temp__5825__auto___48676){
var seq__48245_48677__$1 = temp__5825__auto___48676;
if(cljs.core.chunked_seq_QMARK_(seq__48245_48677__$1)){
var c__4679__auto___48678 = cljs.core.chunk_first(seq__48245_48677__$1);
var G__48679 = cljs.core.chunk_rest(seq__48245_48677__$1);
var G__48680 = c__4679__auto___48678;
var G__48681 = cljs.core.count(c__4679__auto___48678);
var G__48682 = (0);
seq__48245_48663 = G__48679;
chunk__48247_48664 = G__48680;
count__48248_48665 = G__48681;
i__48249_48666 = G__48682;
continue;
} else {
var child_48683 = cljs.core.first(seq__48245_48677__$1);
if(cljs.core.truth_(child_48683)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48683);


var G__48684 = cljs.core.next(seq__48245_48677__$1);
var G__48685 = null;
var G__48686 = (0);
var G__48687 = (0);
seq__48245_48663 = G__48684;
chunk__48247_48664 = G__48685;
count__48248_48665 = G__48686;
i__48249_48666 = G__48687;
continue;
} else {
var G__48688 = cljs.core.next(seq__48245_48677__$1);
var G__48689 = null;
var G__48690 = (0);
var G__48691 = (0);
seq__48245_48663 = G__48688;
chunk__48247_48664 = G__48689;
count__48248_48665 = G__48690;
i__48249_48666 = G__48691;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48662);
}


var G__48692 = seq__48203_48657;
var G__48693 = chunk__48204_48658;
var G__48694 = count__48205_48659;
var G__48695 = (i__48206_48660 + (1));
seq__48203_48657 = G__48692;
chunk__48204_48658 = G__48693;
count__48205_48659 = G__48694;
i__48206_48660 = G__48695;
continue;
} else {
var temp__5825__auto___48696 = cljs.core.seq(seq__48203_48657);
if(temp__5825__auto___48696){
var seq__48203_48697__$1 = temp__5825__auto___48696;
if(cljs.core.chunked_seq_QMARK_(seq__48203_48697__$1)){
var c__4679__auto___48698 = cljs.core.chunk_first(seq__48203_48697__$1);
var G__48699 = cljs.core.chunk_rest(seq__48203_48697__$1);
var G__48700 = c__4679__auto___48698;
var G__48701 = cljs.core.count(c__4679__auto___48698);
var G__48702 = (0);
seq__48203_48657 = G__48699;
chunk__48204_48658 = G__48700;
count__48205_48659 = G__48701;
i__48206_48660 = G__48702;
continue;
} else {
var child_struct_48703 = cljs.core.first(seq__48203_48697__$1);
var children_48704 = shadow.dom.dom_node(child_struct_48703);
if(cljs.core.seq_QMARK_(children_48704)){
var seq__48262_48705 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48704));
var chunk__48265_48706 = null;
var count__48266_48707 = (0);
var i__48267_48708 = (0);
while(true){
if((i__48267_48708 < count__48266_48707)){
var child_48709 = chunk__48265_48706.cljs$core$IIndexed$_nth$arity$2(null,i__48267_48708);
if(cljs.core.truth_(child_48709)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48709);


var G__48710 = seq__48262_48705;
var G__48711 = chunk__48265_48706;
var G__48712 = count__48266_48707;
var G__48713 = (i__48267_48708 + (1));
seq__48262_48705 = G__48710;
chunk__48265_48706 = G__48711;
count__48266_48707 = G__48712;
i__48267_48708 = G__48713;
continue;
} else {
var G__48714 = seq__48262_48705;
var G__48715 = chunk__48265_48706;
var G__48716 = count__48266_48707;
var G__48717 = (i__48267_48708 + (1));
seq__48262_48705 = G__48714;
chunk__48265_48706 = G__48715;
count__48266_48707 = G__48716;
i__48267_48708 = G__48717;
continue;
}
} else {
var temp__5825__auto___48718__$1 = cljs.core.seq(seq__48262_48705);
if(temp__5825__auto___48718__$1){
var seq__48262_48719__$1 = temp__5825__auto___48718__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48262_48719__$1)){
var c__4679__auto___48720 = cljs.core.chunk_first(seq__48262_48719__$1);
var G__48721 = cljs.core.chunk_rest(seq__48262_48719__$1);
var G__48722 = c__4679__auto___48720;
var G__48723 = cljs.core.count(c__4679__auto___48720);
var G__48724 = (0);
seq__48262_48705 = G__48721;
chunk__48265_48706 = G__48722;
count__48266_48707 = G__48723;
i__48267_48708 = G__48724;
continue;
} else {
var child_48725 = cljs.core.first(seq__48262_48719__$1);
if(cljs.core.truth_(child_48725)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48725);


var G__48726 = cljs.core.next(seq__48262_48719__$1);
var G__48727 = null;
var G__48728 = (0);
var G__48729 = (0);
seq__48262_48705 = G__48726;
chunk__48265_48706 = G__48727;
count__48266_48707 = G__48728;
i__48267_48708 = G__48729;
continue;
} else {
var G__48730 = cljs.core.next(seq__48262_48719__$1);
var G__48731 = null;
var G__48732 = (0);
var G__48733 = (0);
seq__48262_48705 = G__48730;
chunk__48265_48706 = G__48731;
count__48266_48707 = G__48732;
i__48267_48708 = G__48733;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48704);
}


var G__48734 = cljs.core.next(seq__48203_48697__$1);
var G__48735 = null;
var G__48736 = (0);
var G__48737 = (0);
seq__48203_48657 = G__48734;
chunk__48204_48658 = G__48735;
count__48205_48659 = G__48736;
i__48206_48660 = G__48737;
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
var seq__48301 = cljs.core.seq(node);
var chunk__48302 = null;
var count__48303 = (0);
var i__48304 = (0);
while(true){
if((i__48304 < count__48303)){
var n = chunk__48302.cljs$core$IIndexed$_nth$arity$2(null,i__48304);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48741 = seq__48301;
var G__48742 = chunk__48302;
var G__48743 = count__48303;
var G__48744 = (i__48304 + (1));
seq__48301 = G__48741;
chunk__48302 = G__48742;
count__48303 = G__48743;
i__48304 = G__48744;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__48301);
if(temp__5825__auto__){
var seq__48301__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48301__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48301__$1);
var G__48745 = cljs.core.chunk_rest(seq__48301__$1);
var G__48746 = c__4679__auto__;
var G__48747 = cljs.core.count(c__4679__auto__);
var G__48748 = (0);
seq__48301 = G__48745;
chunk__48302 = G__48746;
count__48303 = G__48747;
i__48304 = G__48748;
continue;
} else {
var n = cljs.core.first(seq__48301__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48749 = cljs.core.next(seq__48301__$1);
var G__48750 = null;
var G__48751 = (0);
var G__48752 = (0);
seq__48301 = G__48749;
chunk__48302 = G__48750;
count__48303 = G__48751;
i__48304 = G__48752;
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
var G__48322 = arguments.length;
switch (G__48322) {
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
var G__48332 = arguments.length;
switch (G__48332) {
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
var G__48347 = arguments.length;
switch (G__48347) {
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
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var args__4870__auto__ = [];
var len__4864__auto___48756 = arguments.length;
var i__4865__auto___48757 = (0);
while(true){
if((i__4865__auto___48757 < len__4864__auto___48756)){
args__4870__auto__.push((arguments[i__4865__auto___48757]));

var G__48758 = (i__4865__auto___48757 + (1));
i__4865__auto___48757 = G__48758;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48356_48759 = cljs.core.seq(nodes);
var chunk__48357_48760 = null;
var count__48358_48761 = (0);
var i__48359_48762 = (0);
while(true){
if((i__48359_48762 < count__48358_48761)){
var node_48763 = chunk__48357_48760.cljs$core$IIndexed$_nth$arity$2(null,i__48359_48762);
fragment.appendChild(shadow.dom._to_dom(node_48763));


var G__48768 = seq__48356_48759;
var G__48769 = chunk__48357_48760;
var G__48770 = count__48358_48761;
var G__48771 = (i__48359_48762 + (1));
seq__48356_48759 = G__48768;
chunk__48357_48760 = G__48769;
count__48358_48761 = G__48770;
i__48359_48762 = G__48771;
continue;
} else {
var temp__5825__auto___48772 = cljs.core.seq(seq__48356_48759);
if(temp__5825__auto___48772){
var seq__48356_48773__$1 = temp__5825__auto___48772;
if(cljs.core.chunked_seq_QMARK_(seq__48356_48773__$1)){
var c__4679__auto___48774 = cljs.core.chunk_first(seq__48356_48773__$1);
var G__48775 = cljs.core.chunk_rest(seq__48356_48773__$1);
var G__48776 = c__4679__auto___48774;
var G__48777 = cljs.core.count(c__4679__auto___48774);
var G__48778 = (0);
seq__48356_48759 = G__48775;
chunk__48357_48760 = G__48776;
count__48358_48761 = G__48777;
i__48359_48762 = G__48778;
continue;
} else {
var node_48779 = cljs.core.first(seq__48356_48773__$1);
fragment.appendChild(shadow.dom._to_dom(node_48779));


var G__48780 = cljs.core.next(seq__48356_48773__$1);
var G__48781 = null;
var G__48782 = (0);
var G__48783 = (0);
seq__48356_48759 = G__48780;
chunk__48357_48760 = G__48781;
count__48358_48761 = G__48782;
i__48359_48762 = G__48783;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48355){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48355));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48361_48784 = cljs.core.seq(scripts);
var chunk__48362_48785 = null;
var count__48363_48786 = (0);
var i__48364_48787 = (0);
while(true){
if((i__48364_48787 < count__48363_48786)){
var vec__48379_48788 = chunk__48362_48785.cljs$core$IIndexed$_nth$arity$2(null,i__48364_48787);
var script_tag_48789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48379_48788,(0),null);
var script_body_48790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48379_48788,(1),null);
eval(script_body_48790);


var G__48791 = seq__48361_48784;
var G__48792 = chunk__48362_48785;
var G__48793 = count__48363_48786;
var G__48794 = (i__48364_48787 + (1));
seq__48361_48784 = G__48791;
chunk__48362_48785 = G__48792;
count__48363_48786 = G__48793;
i__48364_48787 = G__48794;
continue;
} else {
var temp__5825__auto___48795 = cljs.core.seq(seq__48361_48784);
if(temp__5825__auto___48795){
var seq__48361_48796__$1 = temp__5825__auto___48795;
if(cljs.core.chunked_seq_QMARK_(seq__48361_48796__$1)){
var c__4679__auto___48797 = cljs.core.chunk_first(seq__48361_48796__$1);
var G__48798 = cljs.core.chunk_rest(seq__48361_48796__$1);
var G__48799 = c__4679__auto___48797;
var G__48800 = cljs.core.count(c__4679__auto___48797);
var G__48801 = (0);
seq__48361_48784 = G__48798;
chunk__48362_48785 = G__48799;
count__48363_48786 = G__48800;
i__48364_48787 = G__48801;
continue;
} else {
var vec__48385_48802 = cljs.core.first(seq__48361_48796__$1);
var script_tag_48803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48385_48802,(0),null);
var script_body_48804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48385_48802,(1),null);
eval(script_body_48804);


var G__48805 = cljs.core.next(seq__48361_48796__$1);
var G__48806 = null;
var G__48807 = (0);
var G__48808 = (0);
seq__48361_48784 = G__48805;
chunk__48362_48785 = G__48806;
count__48363_48786 = G__48807;
i__48364_48787 = G__48808;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48390){
var vec__48392 = p__48390;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48392,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48392,(1),null);
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
var G__48404 = arguments.length;
switch (G__48404) {
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
var seq__48426 = cljs.core.seq(style_keys);
var chunk__48427 = null;
var count__48428 = (0);
var i__48429 = (0);
while(true){
if((i__48429 < count__48428)){
var it = chunk__48427.cljs$core$IIndexed$_nth$arity$2(null,i__48429);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48823 = seq__48426;
var G__48824 = chunk__48427;
var G__48825 = count__48428;
var G__48826 = (i__48429 + (1));
seq__48426 = G__48823;
chunk__48427 = G__48824;
count__48428 = G__48825;
i__48429 = G__48826;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__48426);
if(temp__5825__auto__){
var seq__48426__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48426__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48426__$1);
var G__48827 = cljs.core.chunk_rest(seq__48426__$1);
var G__48828 = c__4679__auto__;
var G__48829 = cljs.core.count(c__4679__auto__);
var G__48830 = (0);
seq__48426 = G__48827;
chunk__48427 = G__48828;
count__48428 = G__48829;
i__48429 = G__48830;
continue;
} else {
var it = cljs.core.first(seq__48426__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48831 = cljs.core.next(seq__48426__$1);
var G__48832 = null;
var G__48833 = (0);
var G__48834 = (0);
seq__48426 = G__48831;
chunk__48427 = G__48832;
count__48428 = G__48833;
i__48429 = G__48834;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k48439,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__48451 = k48439;
var G__48451__$1 = (((G__48451 instanceof cljs.core.Keyword))?G__48451.fqn:null);
switch (G__48451__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48439,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__48455){
var vec__48456 = p__48455;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48456,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48456,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48438){
var self__ = this;
var G__48438__$1 = this;
return (new cljs.core.RecordIter((0),G__48438__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48440,other48441){
var self__ = this;
var this48440__$1 = this;
return (((!((other48441 == null)))) && ((((this48440__$1.constructor === other48441.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48440__$1.x,other48441.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48440__$1.y,other48441.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48440__$1.__extmap,other48441.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k48439){
var self__ = this;
var this__4509__auto____$1 = this;
var G__48478 = k48439;
var G__48478__$1 = (((G__48478 instanceof cljs.core.Keyword))?G__48478.fqn:null);
switch (G__48478__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48439);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__48438){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__48479 = cljs.core.keyword_identical_QMARK_;
var expr__48480 = k__4511__auto__;
if(cljs.core.truth_((pred__48479.cljs$core$IFn$_invoke$arity$2 ? pred__48479.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__48480) : pred__48479.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__48480)))){
return (new shadow.dom.Coordinate(G__48438,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48479.cljs$core$IFn$_invoke$arity$2 ? pred__48479.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__48480) : pred__48479.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__48480)))){
return (new shadow.dom.Coordinate(self__.x,G__48438,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__48438),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__48438){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48438,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48445){
var extmap__4542__auto__ = (function (){var G__48498 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48445,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48445)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48498);
} else {
return G__48498;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48445),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48445),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k48504,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__48508 = k48504;
var G__48508__$1 = (((G__48508 instanceof cljs.core.Keyword))?G__48508.fqn:null);
switch (G__48508__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48504,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__48509){
var vec__48510 = p__48509;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48510,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48510,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48503){
var self__ = this;
var G__48503__$1 = this;
return (new cljs.core.RecordIter((0),G__48503__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48505,other48506){
var self__ = this;
var this48505__$1 = this;
return (((!((other48506 == null)))) && ((((this48505__$1.constructor === other48506.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48505__$1.w,other48506.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48505__$1.h,other48506.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48505__$1.__extmap,other48506.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k48504){
var self__ = this;
var this__4509__auto____$1 = this;
var G__48513 = k48504;
var G__48513__$1 = (((G__48513 instanceof cljs.core.Keyword))?G__48513.fqn:null);
switch (G__48513__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48504);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__48503){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__48514 = cljs.core.keyword_identical_QMARK_;
var expr__48515 = k__4511__auto__;
if(cljs.core.truth_((pred__48514.cljs$core$IFn$_invoke$arity$2 ? pred__48514.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__48515) : pred__48514.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__48515)))){
return (new shadow.dom.Size(G__48503,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48514.cljs$core$IFn$_invoke$arity$2 ? pred__48514.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__48515) : pred__48514.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__48515)))){
return (new shadow.dom.Size(self__.w,G__48503,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__48503),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__48503){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48503,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48507){
var extmap__4542__auto__ = (function (){var G__48517 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48507,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48507)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48517);
} else {
return G__48517;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48507),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48507),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__48850 = (i + (1));
var G__48851 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48850;
ret = G__48851;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48522){
var vec__48523 = p__48522;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48523,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48523,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48527 = arguments.length;
switch (G__48527) {
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
var G__48855 = ps;
var G__48856 = (i + (1));
el__$1 = G__48855;
i = G__48856;
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
var vec__48528 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48528,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48528,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48528,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48531_48859 = cljs.core.seq(props);
var chunk__48532_48860 = null;
var count__48533_48861 = (0);
var i__48534_48862 = (0);
while(true){
if((i__48534_48862 < count__48533_48861)){
var vec__48541_48863 = chunk__48532_48860.cljs$core$IIndexed$_nth$arity$2(null,i__48534_48862);
var k_48864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48541_48863,(0),null);
var v_48865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48541_48863,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_48864);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48864),v_48865);


var G__48866 = seq__48531_48859;
var G__48867 = chunk__48532_48860;
var G__48868 = count__48533_48861;
var G__48869 = (i__48534_48862 + (1));
seq__48531_48859 = G__48866;
chunk__48532_48860 = G__48867;
count__48533_48861 = G__48868;
i__48534_48862 = G__48869;
continue;
} else {
var temp__5825__auto___48870 = cljs.core.seq(seq__48531_48859);
if(temp__5825__auto___48870){
var seq__48531_48871__$1 = temp__5825__auto___48870;
if(cljs.core.chunked_seq_QMARK_(seq__48531_48871__$1)){
var c__4679__auto___48876 = cljs.core.chunk_first(seq__48531_48871__$1);
var G__48877 = cljs.core.chunk_rest(seq__48531_48871__$1);
var G__48878 = c__4679__auto___48876;
var G__48879 = cljs.core.count(c__4679__auto___48876);
var G__48880 = (0);
seq__48531_48859 = G__48877;
chunk__48532_48860 = G__48878;
count__48533_48861 = G__48879;
i__48534_48862 = G__48880;
continue;
} else {
var vec__48544_48881 = cljs.core.first(seq__48531_48871__$1);
var k_48882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48544_48881,(0),null);
var v_48883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48544_48881,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_48882);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48882),v_48883);


var G__48884 = cljs.core.next(seq__48531_48871__$1);
var G__48885 = null;
var G__48886 = (0);
var G__48887 = (0);
seq__48531_48859 = G__48884;
chunk__48532_48860 = G__48885;
count__48533_48861 = G__48886;
i__48534_48862 = G__48887;
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
var vec__48548 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48548,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48548,(1),null);
var seq__48551_48891 = cljs.core.seq(node_children);
var chunk__48553_48892 = null;
var count__48554_48893 = (0);
var i__48555_48894 = (0);
while(true){
if((i__48555_48894 < count__48554_48893)){
var child_struct_48895 = chunk__48553_48892.cljs$core$IIndexed$_nth$arity$2(null,i__48555_48894);
if((!((child_struct_48895 == null)))){
if(typeof child_struct_48895 === 'string'){
var text_48896 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48896),child_struct_48895].join(''));
} else {
var children_48901 = shadow.dom.svg_node(child_struct_48895);
if(cljs.core.seq_QMARK_(children_48901)){
var seq__48569_48902 = cljs.core.seq(children_48901);
var chunk__48571_48903 = null;
var count__48572_48904 = (0);
var i__48573_48905 = (0);
while(true){
if((i__48573_48905 < count__48572_48904)){
var child_48906 = chunk__48571_48903.cljs$core$IIndexed$_nth$arity$2(null,i__48573_48905);
if(cljs.core.truth_(child_48906)){
node.appendChild(child_48906);


var G__48907 = seq__48569_48902;
var G__48908 = chunk__48571_48903;
var G__48909 = count__48572_48904;
var G__48910 = (i__48573_48905 + (1));
seq__48569_48902 = G__48907;
chunk__48571_48903 = G__48908;
count__48572_48904 = G__48909;
i__48573_48905 = G__48910;
continue;
} else {
var G__48911 = seq__48569_48902;
var G__48912 = chunk__48571_48903;
var G__48913 = count__48572_48904;
var G__48914 = (i__48573_48905 + (1));
seq__48569_48902 = G__48911;
chunk__48571_48903 = G__48912;
count__48572_48904 = G__48913;
i__48573_48905 = G__48914;
continue;
}
} else {
var temp__5825__auto___48915 = cljs.core.seq(seq__48569_48902);
if(temp__5825__auto___48915){
var seq__48569_48916__$1 = temp__5825__auto___48915;
if(cljs.core.chunked_seq_QMARK_(seq__48569_48916__$1)){
var c__4679__auto___48920 = cljs.core.chunk_first(seq__48569_48916__$1);
var G__48921 = cljs.core.chunk_rest(seq__48569_48916__$1);
var G__48922 = c__4679__auto___48920;
var G__48923 = cljs.core.count(c__4679__auto___48920);
var G__48924 = (0);
seq__48569_48902 = G__48921;
chunk__48571_48903 = G__48922;
count__48572_48904 = G__48923;
i__48573_48905 = G__48924;
continue;
} else {
var child_48925 = cljs.core.first(seq__48569_48916__$1);
if(cljs.core.truth_(child_48925)){
node.appendChild(child_48925);


var G__48926 = cljs.core.next(seq__48569_48916__$1);
var G__48927 = null;
var G__48928 = (0);
var G__48929 = (0);
seq__48569_48902 = G__48926;
chunk__48571_48903 = G__48927;
count__48572_48904 = G__48928;
i__48573_48905 = G__48929;
continue;
} else {
var G__48930 = cljs.core.next(seq__48569_48916__$1);
var G__48931 = null;
var G__48932 = (0);
var G__48933 = (0);
seq__48569_48902 = G__48930;
chunk__48571_48903 = G__48931;
count__48572_48904 = G__48932;
i__48573_48905 = G__48933;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48901);
}
}


var G__48934 = seq__48551_48891;
var G__48935 = chunk__48553_48892;
var G__48936 = count__48554_48893;
var G__48937 = (i__48555_48894 + (1));
seq__48551_48891 = G__48934;
chunk__48553_48892 = G__48935;
count__48554_48893 = G__48936;
i__48555_48894 = G__48937;
continue;
} else {
var G__48938 = seq__48551_48891;
var G__48939 = chunk__48553_48892;
var G__48940 = count__48554_48893;
var G__48941 = (i__48555_48894 + (1));
seq__48551_48891 = G__48938;
chunk__48553_48892 = G__48939;
count__48554_48893 = G__48940;
i__48555_48894 = G__48941;
continue;
}
} else {
var temp__5825__auto___48942 = cljs.core.seq(seq__48551_48891);
if(temp__5825__auto___48942){
var seq__48551_48943__$1 = temp__5825__auto___48942;
if(cljs.core.chunked_seq_QMARK_(seq__48551_48943__$1)){
var c__4679__auto___48944 = cljs.core.chunk_first(seq__48551_48943__$1);
var G__48945 = cljs.core.chunk_rest(seq__48551_48943__$1);
var G__48946 = c__4679__auto___48944;
var G__48947 = cljs.core.count(c__4679__auto___48944);
var G__48948 = (0);
seq__48551_48891 = G__48945;
chunk__48553_48892 = G__48946;
count__48554_48893 = G__48947;
i__48555_48894 = G__48948;
continue;
} else {
var child_struct_48949 = cljs.core.first(seq__48551_48943__$1);
if((!((child_struct_48949 == null)))){
if(typeof child_struct_48949 === 'string'){
var text_48950 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48950),child_struct_48949].join(''));
} else {
var children_48954 = shadow.dom.svg_node(child_struct_48949);
if(cljs.core.seq_QMARK_(children_48954)){
var seq__48575_48955 = cljs.core.seq(children_48954);
var chunk__48577_48956 = null;
var count__48578_48957 = (0);
var i__48579_48958 = (0);
while(true){
if((i__48579_48958 < count__48578_48957)){
var child_48959 = chunk__48577_48956.cljs$core$IIndexed$_nth$arity$2(null,i__48579_48958);
if(cljs.core.truth_(child_48959)){
node.appendChild(child_48959);


var G__48960 = seq__48575_48955;
var G__48961 = chunk__48577_48956;
var G__48962 = count__48578_48957;
var G__48963 = (i__48579_48958 + (1));
seq__48575_48955 = G__48960;
chunk__48577_48956 = G__48961;
count__48578_48957 = G__48962;
i__48579_48958 = G__48963;
continue;
} else {
var G__48964 = seq__48575_48955;
var G__48965 = chunk__48577_48956;
var G__48966 = count__48578_48957;
var G__48967 = (i__48579_48958 + (1));
seq__48575_48955 = G__48964;
chunk__48577_48956 = G__48965;
count__48578_48957 = G__48966;
i__48579_48958 = G__48967;
continue;
}
} else {
var temp__5825__auto___48968__$1 = cljs.core.seq(seq__48575_48955);
if(temp__5825__auto___48968__$1){
var seq__48575_48969__$1 = temp__5825__auto___48968__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48575_48969__$1)){
var c__4679__auto___48970 = cljs.core.chunk_first(seq__48575_48969__$1);
var G__48971 = cljs.core.chunk_rest(seq__48575_48969__$1);
var G__48972 = c__4679__auto___48970;
var G__48973 = cljs.core.count(c__4679__auto___48970);
var G__48974 = (0);
seq__48575_48955 = G__48971;
chunk__48577_48956 = G__48972;
count__48578_48957 = G__48973;
i__48579_48958 = G__48974;
continue;
} else {
var child_48975 = cljs.core.first(seq__48575_48969__$1);
if(cljs.core.truth_(child_48975)){
node.appendChild(child_48975);


var G__48976 = cljs.core.next(seq__48575_48969__$1);
var G__48977 = null;
var G__48978 = (0);
var G__48979 = (0);
seq__48575_48955 = G__48976;
chunk__48577_48956 = G__48977;
count__48578_48957 = G__48978;
i__48579_48958 = G__48979;
continue;
} else {
var G__48980 = cljs.core.next(seq__48575_48969__$1);
var G__48981 = null;
var G__48982 = (0);
var G__48983 = (0);
seq__48575_48955 = G__48980;
chunk__48577_48956 = G__48981;
count__48578_48957 = G__48982;
i__48579_48958 = G__48983;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48954);
}
}


var G__48984 = cljs.core.next(seq__48551_48943__$1);
var G__48985 = null;
var G__48986 = (0);
var G__48987 = (0);
seq__48551_48891 = G__48984;
chunk__48553_48892 = G__48985;
count__48554_48893 = G__48986;
i__48555_48894 = G__48987;
continue;
} else {
var G__48988 = cljs.core.next(seq__48551_48943__$1);
var G__48989 = null;
var G__48990 = (0);
var G__48991 = (0);
seq__48551_48891 = G__48988;
chunk__48553_48892 = G__48989;
count__48554_48893 = G__48990;
i__48555_48894 = G__48991;
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
var args__4870__auto__ = [];
var len__4864__auto___48995 = arguments.length;
var i__4865__auto___48996 = (0);
while(true){
if((i__4865__auto___48996 < len__4864__auto___48995)){
args__4870__auto__.push((arguments[i__4865__auto___48996]));

var G__48997 = (i__4865__auto___48996 + (1));
i__4865__auto___48996 = G__48997;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48581){
var G__48582 = cljs.core.first(seq48581);
var seq48581__$1 = cljs.core.next(seq48581);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48582,seq48581__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48584 = arguments.length;
switch (G__48584) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__46267__auto___48999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_48589){
var state_val_48590 = (state_48589[(1)]);
if((state_val_48590 === (1))){
var state_48589__$1 = state_48589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48589__$1,(2),once_or_cleanup);
} else {
if((state_val_48590 === (2))){
var inst_48586 = (state_48589[(2)]);
var inst_48587 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48589__$1 = (function (){var statearr_48591 = state_48589;
(statearr_48591[(7)] = inst_48586);

return statearr_48591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48589__$1,inst_48587);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46189__auto__ = null;
var shadow$dom$state_machine__46189__auto____0 = (function (){
var statearr_48592 = [null,null,null,null,null,null,null,null];
(statearr_48592[(0)] = shadow$dom$state_machine__46189__auto__);

(statearr_48592[(1)] = (1));

return statearr_48592;
});
var shadow$dom$state_machine__46189__auto____1 = (function (state_48589){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_48589);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e48593){var ex__46192__auto__ = e48593;
var statearr_48594_49005 = state_48589;
(statearr_48594_49005[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_48589[(4)]))){
var statearr_48595_49006 = state_48589;
(statearr_48595_49006[(1)] = cljs.core.first((state_48589[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49007 = state_48589;
state_48589 = G__49007;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
shadow$dom$state_machine__46189__auto__ = function(state_48589){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46189__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46189__auto____1.call(this,state_48589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46189__auto____0;
shadow$dom$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46189__auto____1;
return shadow$dom$state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_48596 = f__46268__auto__();
(statearr_48596[(6)] = c__46267__auto___48999);

return statearr_48596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
