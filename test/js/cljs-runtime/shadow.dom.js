goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_69210 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_69210(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_69211 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_69211(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__68851 = coll;
var G__68852 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__68851,G__68852) : shadow.dom.lazy_native_coll_seq.call(null,G__68851,G__68852));
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
var G__68915 = arguments.length;
switch (G__68915) {
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
var G__68917 = arguments.length;
switch (G__68917) {
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
var G__68920 = arguments.length;
switch (G__68920) {
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
var G__68923 = arguments.length;
switch (G__68923) {
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
var G__68925 = arguments.length;
switch (G__68925) {
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
var G__68929 = arguments.length;
switch (G__68929) {
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
}catch (e68930){if((e68930 instanceof Object)){
var e = e68930;
return console.log("didnt support attachEvent",el,e);
} else {
throw e68930;

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
var seq__68933 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__68934 = null;
var count__68935 = (0);
var i__68936 = (0);
while(true){
if((i__68936 < count__68935)){
var el = chunk__68934.cljs$core$IIndexed$_nth$arity$2(null,i__68936);
var handler_69218__$1 = ((function (seq__68933,chunk__68934,count__68935,i__68936,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__68933,chunk__68934,count__68935,i__68936,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_69218__$1);


var G__69219 = seq__68933;
var G__69220 = chunk__68934;
var G__69221 = count__68935;
var G__69222 = (i__68936 + (1));
seq__68933 = G__69219;
chunk__68934 = G__69220;
count__68935 = G__69221;
i__68936 = G__69222;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68933);
if(temp__5825__auto__){
var seq__68933__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68933__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68933__$1);
var G__69223 = cljs.core.chunk_rest(seq__68933__$1);
var G__69224 = c__5548__auto__;
var G__69225 = cljs.core.count(c__5548__auto__);
var G__69226 = (0);
seq__68933 = G__69223;
chunk__68934 = G__69224;
count__68935 = G__69225;
i__68936 = G__69226;
continue;
} else {
var el = cljs.core.first(seq__68933__$1);
var handler_69227__$1 = ((function (seq__68933,chunk__68934,count__68935,i__68936,el,seq__68933__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__68933,chunk__68934,count__68935,i__68936,el,seq__68933__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_69227__$1);


var G__69228 = cljs.core.next(seq__68933__$1);
var G__69229 = null;
var G__69230 = (0);
var G__69231 = (0);
seq__68933 = G__69228;
chunk__68934 = G__69229;
count__68935 = G__69230;
i__68936 = G__69231;
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
var G__68944 = arguments.length;
switch (G__68944) {
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
var seq__68946 = cljs.core.seq(events);
var chunk__68947 = null;
var count__68948 = (0);
var i__68949 = (0);
while(true){
if((i__68949 < count__68948)){
var vec__68960 = chunk__68947.cljs$core$IIndexed$_nth$arity$2(null,i__68949);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68960,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68960,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__69233 = seq__68946;
var G__69234 = chunk__68947;
var G__69235 = count__68948;
var G__69236 = (i__68949 + (1));
seq__68946 = G__69233;
chunk__68947 = G__69234;
count__68948 = G__69235;
i__68949 = G__69236;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68946);
if(temp__5825__auto__){
var seq__68946__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68946__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68946__$1);
var G__69237 = cljs.core.chunk_rest(seq__68946__$1);
var G__69238 = c__5548__auto__;
var G__69239 = cljs.core.count(c__5548__auto__);
var G__69240 = (0);
seq__68946 = G__69237;
chunk__68947 = G__69238;
count__68948 = G__69239;
i__68949 = G__69240;
continue;
} else {
var vec__68963 = cljs.core.first(seq__68946__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68963,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68963,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__69241 = cljs.core.next(seq__68946__$1);
var G__69242 = null;
var G__69243 = (0);
var G__69244 = (0);
seq__68946 = G__69241;
chunk__68947 = G__69242;
count__68948 = G__69243;
i__68949 = G__69244;
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
var seq__68966 = cljs.core.seq(styles);
var chunk__68967 = null;
var count__68968 = (0);
var i__68969 = (0);
while(true){
if((i__68969 < count__68968)){
var vec__68976 = chunk__68967.cljs$core$IIndexed$_nth$arity$2(null,i__68969);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68976,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68976,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__69245 = seq__68966;
var G__69246 = chunk__68967;
var G__69247 = count__68968;
var G__69248 = (i__68969 + (1));
seq__68966 = G__69245;
chunk__68967 = G__69246;
count__68968 = G__69247;
i__68969 = G__69248;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__68966);
if(temp__5825__auto__){
var seq__68966__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68966__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__68966__$1);
var G__69249 = cljs.core.chunk_rest(seq__68966__$1);
var G__69250 = c__5548__auto__;
var G__69251 = cljs.core.count(c__5548__auto__);
var G__69252 = (0);
seq__68966 = G__69249;
chunk__68967 = G__69250;
count__68968 = G__69251;
i__68969 = G__69252;
continue;
} else {
var vec__68979 = cljs.core.first(seq__68966__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68979,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68979,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__69253 = cljs.core.next(seq__68966__$1);
var G__69254 = null;
var G__69255 = (0);
var G__69256 = (0);
seq__68966 = G__69253;
chunk__68967 = G__69254;
count__68968 = G__69255;
i__68969 = G__69256;
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
var G__68982_69257 = key;
var G__68982_69258__$1 = (((G__68982_69257 instanceof cljs.core.Keyword))?G__68982_69257.fqn:null);
switch (G__68982_69258__$1) {
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
var ks_69260 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_69260,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_69260,"aria-");
}
})())){
el.setAttribute(ks_69260,value);
} else {
(el[ks_69260] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__69000){
var map__69001 = p__69000;
var map__69001__$1 = cljs.core.__destructure_map(map__69001);
var props = map__69001__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69001__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__69002 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69002,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69002,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69002,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__69005 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__69005,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__69005;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__69007 = arguments.length;
switch (G__69007) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__69009){
var vec__69011 = p__69009;
var seq__69012 = cljs.core.seq(vec__69011);
var first__69013 = cljs.core.first(seq__69012);
var seq__69012__$1 = cljs.core.next(seq__69012);
var nn = first__69013;
var first__69013__$1 = cljs.core.first(seq__69012__$1);
var seq__69012__$2 = cljs.core.next(seq__69012__$1);
var np = first__69013__$1;
var nc = seq__69012__$2;
var node = vec__69011;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__69014 = nn;
var G__69015 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__69014,G__69015) : create_fn.call(null,G__69014,G__69015));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__69016 = nn;
var G__69017 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__69016,G__69017) : create_fn.call(null,G__69016,G__69017));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__69018 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69018,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69018,(1),null);
var seq__69022_69262 = cljs.core.seq(node_children);
var chunk__69023_69263 = null;
var count__69024_69264 = (0);
var i__69025_69265 = (0);
while(true){
if((i__69025_69265 < count__69024_69264)){
var child_struct_69266 = chunk__69023_69263.cljs$core$IIndexed$_nth$arity$2(null,i__69025_69265);
var children_69267 = shadow.dom.dom_node(child_struct_69266);
if(cljs.core.seq_QMARK_(children_69267)){
var seq__69044_69268 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_69267));
var chunk__69046_69269 = null;
var count__69047_69270 = (0);
var i__69048_69271 = (0);
while(true){
if((i__69048_69271 < count__69047_69270)){
var child_69272 = chunk__69046_69269.cljs$core$IIndexed$_nth$arity$2(null,i__69048_69271);
if(cljs.core.truth_(child_69272)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69272);


var G__69273 = seq__69044_69268;
var G__69274 = chunk__69046_69269;
var G__69275 = count__69047_69270;
var G__69276 = (i__69048_69271 + (1));
seq__69044_69268 = G__69273;
chunk__69046_69269 = G__69274;
count__69047_69270 = G__69275;
i__69048_69271 = G__69276;
continue;
} else {
var G__69277 = seq__69044_69268;
var G__69278 = chunk__69046_69269;
var G__69279 = count__69047_69270;
var G__69280 = (i__69048_69271 + (1));
seq__69044_69268 = G__69277;
chunk__69046_69269 = G__69278;
count__69047_69270 = G__69279;
i__69048_69271 = G__69280;
continue;
}
} else {
var temp__5825__auto___69281 = cljs.core.seq(seq__69044_69268);
if(temp__5825__auto___69281){
var seq__69044_69282__$1 = temp__5825__auto___69281;
if(cljs.core.chunked_seq_QMARK_(seq__69044_69282__$1)){
var c__5548__auto___69283 = cljs.core.chunk_first(seq__69044_69282__$1);
var G__69284 = cljs.core.chunk_rest(seq__69044_69282__$1);
var G__69285 = c__5548__auto___69283;
var G__69286 = cljs.core.count(c__5548__auto___69283);
var G__69287 = (0);
seq__69044_69268 = G__69284;
chunk__69046_69269 = G__69285;
count__69047_69270 = G__69286;
i__69048_69271 = G__69287;
continue;
} else {
var child_69288 = cljs.core.first(seq__69044_69282__$1);
if(cljs.core.truth_(child_69288)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69288);


var G__69289 = cljs.core.next(seq__69044_69282__$1);
var G__69290 = null;
var G__69291 = (0);
var G__69292 = (0);
seq__69044_69268 = G__69289;
chunk__69046_69269 = G__69290;
count__69047_69270 = G__69291;
i__69048_69271 = G__69292;
continue;
} else {
var G__69293 = cljs.core.next(seq__69044_69282__$1);
var G__69294 = null;
var G__69295 = (0);
var G__69296 = (0);
seq__69044_69268 = G__69293;
chunk__69046_69269 = G__69294;
count__69047_69270 = G__69295;
i__69048_69271 = G__69296;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_69267);
}


var G__69297 = seq__69022_69262;
var G__69298 = chunk__69023_69263;
var G__69299 = count__69024_69264;
var G__69300 = (i__69025_69265 + (1));
seq__69022_69262 = G__69297;
chunk__69023_69263 = G__69298;
count__69024_69264 = G__69299;
i__69025_69265 = G__69300;
continue;
} else {
var temp__5825__auto___69301 = cljs.core.seq(seq__69022_69262);
if(temp__5825__auto___69301){
var seq__69022_69302__$1 = temp__5825__auto___69301;
if(cljs.core.chunked_seq_QMARK_(seq__69022_69302__$1)){
var c__5548__auto___69303 = cljs.core.chunk_first(seq__69022_69302__$1);
var G__69304 = cljs.core.chunk_rest(seq__69022_69302__$1);
var G__69305 = c__5548__auto___69303;
var G__69306 = cljs.core.count(c__5548__auto___69303);
var G__69307 = (0);
seq__69022_69262 = G__69304;
chunk__69023_69263 = G__69305;
count__69024_69264 = G__69306;
i__69025_69265 = G__69307;
continue;
} else {
var child_struct_69308 = cljs.core.first(seq__69022_69302__$1);
var children_69309 = shadow.dom.dom_node(child_struct_69308);
if(cljs.core.seq_QMARK_(children_69309)){
var seq__69052_69310 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_69309));
var chunk__69054_69311 = null;
var count__69055_69312 = (0);
var i__69056_69313 = (0);
while(true){
if((i__69056_69313 < count__69055_69312)){
var child_69314 = chunk__69054_69311.cljs$core$IIndexed$_nth$arity$2(null,i__69056_69313);
if(cljs.core.truth_(child_69314)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69314);


var G__69315 = seq__69052_69310;
var G__69316 = chunk__69054_69311;
var G__69317 = count__69055_69312;
var G__69318 = (i__69056_69313 + (1));
seq__69052_69310 = G__69315;
chunk__69054_69311 = G__69316;
count__69055_69312 = G__69317;
i__69056_69313 = G__69318;
continue;
} else {
var G__69319 = seq__69052_69310;
var G__69320 = chunk__69054_69311;
var G__69321 = count__69055_69312;
var G__69322 = (i__69056_69313 + (1));
seq__69052_69310 = G__69319;
chunk__69054_69311 = G__69320;
count__69055_69312 = G__69321;
i__69056_69313 = G__69322;
continue;
}
} else {
var temp__5825__auto___69323__$1 = cljs.core.seq(seq__69052_69310);
if(temp__5825__auto___69323__$1){
var seq__69052_69324__$1 = temp__5825__auto___69323__$1;
if(cljs.core.chunked_seq_QMARK_(seq__69052_69324__$1)){
var c__5548__auto___69325 = cljs.core.chunk_first(seq__69052_69324__$1);
var G__69326 = cljs.core.chunk_rest(seq__69052_69324__$1);
var G__69327 = c__5548__auto___69325;
var G__69328 = cljs.core.count(c__5548__auto___69325);
var G__69329 = (0);
seq__69052_69310 = G__69326;
chunk__69054_69311 = G__69327;
count__69055_69312 = G__69328;
i__69056_69313 = G__69329;
continue;
} else {
var child_69330 = cljs.core.first(seq__69052_69324__$1);
if(cljs.core.truth_(child_69330)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_69330);


var G__69331 = cljs.core.next(seq__69052_69324__$1);
var G__69332 = null;
var G__69333 = (0);
var G__69334 = (0);
seq__69052_69310 = G__69331;
chunk__69054_69311 = G__69332;
count__69055_69312 = G__69333;
i__69056_69313 = G__69334;
continue;
} else {
var G__69335 = cljs.core.next(seq__69052_69324__$1);
var G__69336 = null;
var G__69337 = (0);
var G__69338 = (0);
seq__69052_69310 = G__69335;
chunk__69054_69311 = G__69336;
count__69055_69312 = G__69337;
i__69056_69313 = G__69338;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_69309);
}


var G__69339 = cljs.core.next(seq__69022_69302__$1);
var G__69340 = null;
var G__69341 = (0);
var G__69342 = (0);
seq__69022_69262 = G__69339;
chunk__69023_69263 = G__69340;
count__69024_69264 = G__69341;
i__69025_69265 = G__69342;
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
var seq__69061 = cljs.core.seq(node);
var chunk__69062 = null;
var count__69063 = (0);
var i__69064 = (0);
while(true){
if((i__69064 < count__69063)){
var n = chunk__69062.cljs$core$IIndexed$_nth$arity$2(null,i__69064);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__69343 = seq__69061;
var G__69344 = chunk__69062;
var G__69345 = count__69063;
var G__69346 = (i__69064 + (1));
seq__69061 = G__69343;
chunk__69062 = G__69344;
count__69063 = G__69345;
i__69064 = G__69346;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__69061);
if(temp__5825__auto__){
var seq__69061__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69061__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__69061__$1);
var G__69347 = cljs.core.chunk_rest(seq__69061__$1);
var G__69348 = c__5548__auto__;
var G__69349 = cljs.core.count(c__5548__auto__);
var G__69350 = (0);
seq__69061 = G__69347;
chunk__69062 = G__69348;
count__69063 = G__69349;
i__69064 = G__69350;
continue;
} else {
var n = cljs.core.first(seq__69061__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__69351 = cljs.core.next(seq__69061__$1);
var G__69352 = null;
var G__69353 = (0);
var G__69354 = (0);
seq__69061 = G__69351;
chunk__69062 = G__69352;
count__69063 = G__69353;
i__69064 = G__69354;
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
var G__69067 = arguments.length;
switch (G__69067) {
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
var G__69072 = arguments.length;
switch (G__69072) {
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
var G__69078 = arguments.length;
switch (G__69078) {
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
var len__5749__auto___69358 = arguments.length;
var i__5750__auto___69359 = (0);
while(true){
if((i__5750__auto___69359 < len__5749__auto___69358)){
args__5755__auto__.push((arguments[i__5750__auto___69359]));

var G__69360 = (i__5750__auto___69359 + (1));
i__5750__auto___69359 = G__69360;
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
var seq__69080_69361 = cljs.core.seq(nodes);
var chunk__69081_69362 = null;
var count__69082_69363 = (0);
var i__69083_69364 = (0);
while(true){
if((i__69083_69364 < count__69082_69363)){
var node_69365 = chunk__69081_69362.cljs$core$IIndexed$_nth$arity$2(null,i__69083_69364);
fragment.appendChild(shadow.dom._to_dom(node_69365));


var G__69366 = seq__69080_69361;
var G__69367 = chunk__69081_69362;
var G__69368 = count__69082_69363;
var G__69369 = (i__69083_69364 + (1));
seq__69080_69361 = G__69366;
chunk__69081_69362 = G__69367;
count__69082_69363 = G__69368;
i__69083_69364 = G__69369;
continue;
} else {
var temp__5825__auto___69370 = cljs.core.seq(seq__69080_69361);
if(temp__5825__auto___69370){
var seq__69080_69371__$1 = temp__5825__auto___69370;
if(cljs.core.chunked_seq_QMARK_(seq__69080_69371__$1)){
var c__5548__auto___69372 = cljs.core.chunk_first(seq__69080_69371__$1);
var G__69373 = cljs.core.chunk_rest(seq__69080_69371__$1);
var G__69374 = c__5548__auto___69372;
var G__69375 = cljs.core.count(c__5548__auto___69372);
var G__69376 = (0);
seq__69080_69361 = G__69373;
chunk__69081_69362 = G__69374;
count__69082_69363 = G__69375;
i__69083_69364 = G__69376;
continue;
} else {
var node_69377 = cljs.core.first(seq__69080_69371__$1);
fragment.appendChild(shadow.dom._to_dom(node_69377));


var G__69378 = cljs.core.next(seq__69080_69371__$1);
var G__69379 = null;
var G__69380 = (0);
var G__69381 = (0);
seq__69080_69361 = G__69378;
chunk__69081_69362 = G__69379;
count__69082_69363 = G__69380;
i__69083_69364 = G__69381;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq69079){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69079));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__69089_69382 = cljs.core.seq(scripts);
var chunk__69090_69383 = null;
var count__69091_69384 = (0);
var i__69092_69385 = (0);
while(true){
if((i__69092_69385 < count__69091_69384)){
var vec__69099_69386 = chunk__69090_69383.cljs$core$IIndexed$_nth$arity$2(null,i__69092_69385);
var script_tag_69387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69099_69386,(0),null);
var script_body_69388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69099_69386,(1),null);
eval(script_body_69388);


var G__69389 = seq__69089_69382;
var G__69390 = chunk__69090_69383;
var G__69391 = count__69091_69384;
var G__69392 = (i__69092_69385 + (1));
seq__69089_69382 = G__69389;
chunk__69090_69383 = G__69390;
count__69091_69384 = G__69391;
i__69092_69385 = G__69392;
continue;
} else {
var temp__5825__auto___69393 = cljs.core.seq(seq__69089_69382);
if(temp__5825__auto___69393){
var seq__69089_69394__$1 = temp__5825__auto___69393;
if(cljs.core.chunked_seq_QMARK_(seq__69089_69394__$1)){
var c__5548__auto___69395 = cljs.core.chunk_first(seq__69089_69394__$1);
var G__69396 = cljs.core.chunk_rest(seq__69089_69394__$1);
var G__69397 = c__5548__auto___69395;
var G__69398 = cljs.core.count(c__5548__auto___69395);
var G__69399 = (0);
seq__69089_69382 = G__69396;
chunk__69090_69383 = G__69397;
count__69091_69384 = G__69398;
i__69092_69385 = G__69399;
continue;
} else {
var vec__69102_69400 = cljs.core.first(seq__69089_69394__$1);
var script_tag_69401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69102_69400,(0),null);
var script_body_69402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69102_69400,(1),null);
eval(script_body_69402);


var G__69403 = cljs.core.next(seq__69089_69394__$1);
var G__69404 = null;
var G__69405 = (0);
var G__69406 = (0);
seq__69089_69382 = G__69403;
chunk__69090_69383 = G__69404;
count__69091_69384 = G__69405;
i__69092_69385 = G__69406;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__69105){
var vec__69106 = p__69105;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69106,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69106,(1),null);
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
var G__69110 = arguments.length;
switch (G__69110) {
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
var seq__69111 = cljs.core.seq(style_keys);
var chunk__69112 = null;
var count__69113 = (0);
var i__69114 = (0);
while(true){
if((i__69114 < count__69113)){
var it = chunk__69112.cljs$core$IIndexed$_nth$arity$2(null,i__69114);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__69408 = seq__69111;
var G__69409 = chunk__69112;
var G__69410 = count__69113;
var G__69411 = (i__69114 + (1));
seq__69111 = G__69408;
chunk__69112 = G__69409;
count__69113 = G__69410;
i__69114 = G__69411;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__69111);
if(temp__5825__auto__){
var seq__69111__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69111__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__69111__$1);
var G__69412 = cljs.core.chunk_rest(seq__69111__$1);
var G__69413 = c__5548__auto__;
var G__69414 = cljs.core.count(c__5548__auto__);
var G__69415 = (0);
seq__69111 = G__69412;
chunk__69112 = G__69413;
count__69113 = G__69414;
i__69114 = G__69415;
continue;
} else {
var it = cljs.core.first(seq__69111__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__69416 = cljs.core.next(seq__69111__$1);
var G__69417 = null;
var G__69418 = (0);
var G__69419 = (0);
seq__69111 = G__69416;
chunk__69112 = G__69417;
count__69113 = G__69418;
i__69114 = G__69419;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k69116,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__69120 = k69116;
var G__69120__$1 = (((G__69120 instanceof cljs.core.Keyword))?G__69120.fqn:null);
switch (G__69120__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69116,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__69121){
var vec__69122 = p__69121;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69122,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69122,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__69115){
var self__ = this;
var G__69115__$1 = this;
return (new cljs.core.RecordIter((0),G__69115__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this69117,other69118){
var self__ = this;
var this69117__$1 = this;
return (((!((other69118 == null)))) && ((((this69117__$1.constructor === other69118.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69117__$1.x,other69118.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69117__$1.y,other69118.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69117__$1.__extmap,other69118.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k69116){
var self__ = this;
var this__5330__auto____$1 = this;
var G__69125 = k69116;
var G__69125__$1 = (((G__69125 instanceof cljs.core.Keyword))?G__69125.fqn:null);
switch (G__69125__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k69116);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__69115){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__69126 = cljs.core.keyword_identical_QMARK_;
var expr__69127 = k__5332__auto__;
if(cljs.core.truth_((pred__69126.cljs$core$IFn$_invoke$arity$2 ? pred__69126.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__69127) : pred__69126.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__69127)))){
return (new shadow.dom.Coordinate(G__69115,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69126.cljs$core$IFn$_invoke$arity$2 ? pred__69126.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__69127) : pred__69126.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__69127)))){
return (new shadow.dom.Coordinate(self__.x,G__69115,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__69115),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__69115){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__69115,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__69119){
var extmap__5365__auto__ = (function (){var G__69129 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__69119,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__69119)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__69129);
} else {
return G__69129;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__69119),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__69119),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k69131,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__69135 = k69131;
var G__69135__$1 = (((G__69135 instanceof cljs.core.Keyword))?G__69135.fqn:null);
switch (G__69135__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69131,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__69136){
var vec__69137 = p__69136;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69137,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69137,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__69130){
var self__ = this;
var G__69130__$1 = this;
return (new cljs.core.RecordIter((0),G__69130__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this69132,other69133){
var self__ = this;
var this69132__$1 = this;
return (((!((other69133 == null)))) && ((((this69132__$1.constructor === other69133.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69132__$1.w,other69133.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69132__$1.h,other69133.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69132__$1.__extmap,other69133.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k69131){
var self__ = this;
var this__5330__auto____$1 = this;
var G__69140 = k69131;
var G__69140__$1 = (((G__69140 instanceof cljs.core.Keyword))?G__69140.fqn:null);
switch (G__69140__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k69131);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__69130){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__69141 = cljs.core.keyword_identical_QMARK_;
var expr__69142 = k__5332__auto__;
if(cljs.core.truth_((pred__69141.cljs$core$IFn$_invoke$arity$2 ? pred__69141.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__69142) : pred__69141.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__69142)))){
return (new shadow.dom.Size(G__69130,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69141.cljs$core$IFn$_invoke$arity$2 ? pred__69141.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__69142) : pred__69141.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__69142)))){
return (new shadow.dom.Size(self__.w,G__69130,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__69130),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__69130){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__69130,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__69134){
var extmap__5365__auto__ = (function (){var G__69144 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__69134,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__69134)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__69144);
} else {
return G__69144;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__69134),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__69134),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__69424 = (i + (1));
var G__69425 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__69424;
ret = G__69425;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__69149){
var vec__69150 = p__69149;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69150,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69150,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__69154 = arguments.length;
switch (G__69154) {
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
var G__69427 = ps;
var G__69428 = (i + (1));
el__$1 = G__69427;
i = G__69428;
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
var vec__69155 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69155,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69155,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69155,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__69158_69429 = cljs.core.seq(props);
var chunk__69159_69430 = null;
var count__69160_69431 = (0);
var i__69161_69432 = (0);
while(true){
if((i__69161_69432 < count__69160_69431)){
var vec__69168_69433 = chunk__69159_69430.cljs$core$IIndexed$_nth$arity$2(null,i__69161_69432);
var k_69434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69168_69433,(0),null);
var v_69435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69168_69433,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_69434);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_69434),v_69435);


var G__69436 = seq__69158_69429;
var G__69437 = chunk__69159_69430;
var G__69438 = count__69160_69431;
var G__69439 = (i__69161_69432 + (1));
seq__69158_69429 = G__69436;
chunk__69159_69430 = G__69437;
count__69160_69431 = G__69438;
i__69161_69432 = G__69439;
continue;
} else {
var temp__5825__auto___69440 = cljs.core.seq(seq__69158_69429);
if(temp__5825__auto___69440){
var seq__69158_69441__$1 = temp__5825__auto___69440;
if(cljs.core.chunked_seq_QMARK_(seq__69158_69441__$1)){
var c__5548__auto___69442 = cljs.core.chunk_first(seq__69158_69441__$1);
var G__69443 = cljs.core.chunk_rest(seq__69158_69441__$1);
var G__69444 = c__5548__auto___69442;
var G__69445 = cljs.core.count(c__5548__auto___69442);
var G__69446 = (0);
seq__69158_69429 = G__69443;
chunk__69159_69430 = G__69444;
count__69160_69431 = G__69445;
i__69161_69432 = G__69446;
continue;
} else {
var vec__69171_69447 = cljs.core.first(seq__69158_69441__$1);
var k_69448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69171_69447,(0),null);
var v_69449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69171_69447,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_69448);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_69448),v_69449);


var G__69450 = cljs.core.next(seq__69158_69441__$1);
var G__69451 = null;
var G__69452 = (0);
var G__69453 = (0);
seq__69158_69429 = G__69450;
chunk__69159_69430 = G__69451;
count__69160_69431 = G__69452;
i__69161_69432 = G__69453;
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
var vec__69175 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69175,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69175,(1),null);
var seq__69178_69454 = cljs.core.seq(node_children);
var chunk__69180_69455 = null;
var count__69181_69456 = (0);
var i__69182_69457 = (0);
while(true){
if((i__69182_69457 < count__69181_69456)){
var child_struct_69458 = chunk__69180_69455.cljs$core$IIndexed$_nth$arity$2(null,i__69182_69457);
if((!((child_struct_69458 == null)))){
if(typeof child_struct_69458 === 'string'){
var text_69459 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_69459),child_struct_69458].join(''));
} else {
var children_69460 = shadow.dom.svg_node(child_struct_69458);
if(cljs.core.seq_QMARK_(children_69460)){
var seq__69196_69461 = cljs.core.seq(children_69460);
var chunk__69198_69462 = null;
var count__69199_69463 = (0);
var i__69200_69464 = (0);
while(true){
if((i__69200_69464 < count__69199_69463)){
var child_69465 = chunk__69198_69462.cljs$core$IIndexed$_nth$arity$2(null,i__69200_69464);
if(cljs.core.truth_(child_69465)){
node.appendChild(child_69465);


var G__69466 = seq__69196_69461;
var G__69467 = chunk__69198_69462;
var G__69468 = count__69199_69463;
var G__69469 = (i__69200_69464 + (1));
seq__69196_69461 = G__69466;
chunk__69198_69462 = G__69467;
count__69199_69463 = G__69468;
i__69200_69464 = G__69469;
continue;
} else {
var G__69470 = seq__69196_69461;
var G__69471 = chunk__69198_69462;
var G__69472 = count__69199_69463;
var G__69473 = (i__69200_69464 + (1));
seq__69196_69461 = G__69470;
chunk__69198_69462 = G__69471;
count__69199_69463 = G__69472;
i__69200_69464 = G__69473;
continue;
}
} else {
var temp__5825__auto___69474 = cljs.core.seq(seq__69196_69461);
if(temp__5825__auto___69474){
var seq__69196_69475__$1 = temp__5825__auto___69474;
if(cljs.core.chunked_seq_QMARK_(seq__69196_69475__$1)){
var c__5548__auto___69476 = cljs.core.chunk_first(seq__69196_69475__$1);
var G__69477 = cljs.core.chunk_rest(seq__69196_69475__$1);
var G__69478 = c__5548__auto___69476;
var G__69479 = cljs.core.count(c__5548__auto___69476);
var G__69480 = (0);
seq__69196_69461 = G__69477;
chunk__69198_69462 = G__69478;
count__69199_69463 = G__69479;
i__69200_69464 = G__69480;
continue;
} else {
var child_69481 = cljs.core.first(seq__69196_69475__$1);
if(cljs.core.truth_(child_69481)){
node.appendChild(child_69481);


var G__69482 = cljs.core.next(seq__69196_69475__$1);
var G__69483 = null;
var G__69484 = (0);
var G__69485 = (0);
seq__69196_69461 = G__69482;
chunk__69198_69462 = G__69483;
count__69199_69463 = G__69484;
i__69200_69464 = G__69485;
continue;
} else {
var G__69486 = cljs.core.next(seq__69196_69475__$1);
var G__69487 = null;
var G__69488 = (0);
var G__69489 = (0);
seq__69196_69461 = G__69486;
chunk__69198_69462 = G__69487;
count__69199_69463 = G__69488;
i__69200_69464 = G__69489;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_69460);
}
}


var G__69490 = seq__69178_69454;
var G__69491 = chunk__69180_69455;
var G__69492 = count__69181_69456;
var G__69493 = (i__69182_69457 + (1));
seq__69178_69454 = G__69490;
chunk__69180_69455 = G__69491;
count__69181_69456 = G__69492;
i__69182_69457 = G__69493;
continue;
} else {
var G__69494 = seq__69178_69454;
var G__69495 = chunk__69180_69455;
var G__69496 = count__69181_69456;
var G__69497 = (i__69182_69457 + (1));
seq__69178_69454 = G__69494;
chunk__69180_69455 = G__69495;
count__69181_69456 = G__69496;
i__69182_69457 = G__69497;
continue;
}
} else {
var temp__5825__auto___69498 = cljs.core.seq(seq__69178_69454);
if(temp__5825__auto___69498){
var seq__69178_69499__$1 = temp__5825__auto___69498;
if(cljs.core.chunked_seq_QMARK_(seq__69178_69499__$1)){
var c__5548__auto___69500 = cljs.core.chunk_first(seq__69178_69499__$1);
var G__69501 = cljs.core.chunk_rest(seq__69178_69499__$1);
var G__69502 = c__5548__auto___69500;
var G__69503 = cljs.core.count(c__5548__auto___69500);
var G__69504 = (0);
seq__69178_69454 = G__69501;
chunk__69180_69455 = G__69502;
count__69181_69456 = G__69503;
i__69182_69457 = G__69504;
continue;
} else {
var child_struct_69505 = cljs.core.first(seq__69178_69499__$1);
if((!((child_struct_69505 == null)))){
if(typeof child_struct_69505 === 'string'){
var text_69506 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_69506),child_struct_69505].join(''));
} else {
var children_69507 = shadow.dom.svg_node(child_struct_69505);
if(cljs.core.seq_QMARK_(children_69507)){
var seq__69202_69508 = cljs.core.seq(children_69507);
var chunk__69204_69509 = null;
var count__69205_69510 = (0);
var i__69206_69511 = (0);
while(true){
if((i__69206_69511 < count__69205_69510)){
var child_69512 = chunk__69204_69509.cljs$core$IIndexed$_nth$arity$2(null,i__69206_69511);
if(cljs.core.truth_(child_69512)){
node.appendChild(child_69512);


var G__69513 = seq__69202_69508;
var G__69514 = chunk__69204_69509;
var G__69515 = count__69205_69510;
var G__69516 = (i__69206_69511 + (1));
seq__69202_69508 = G__69513;
chunk__69204_69509 = G__69514;
count__69205_69510 = G__69515;
i__69206_69511 = G__69516;
continue;
} else {
var G__69517 = seq__69202_69508;
var G__69518 = chunk__69204_69509;
var G__69519 = count__69205_69510;
var G__69520 = (i__69206_69511 + (1));
seq__69202_69508 = G__69517;
chunk__69204_69509 = G__69518;
count__69205_69510 = G__69519;
i__69206_69511 = G__69520;
continue;
}
} else {
var temp__5825__auto___69521__$1 = cljs.core.seq(seq__69202_69508);
if(temp__5825__auto___69521__$1){
var seq__69202_69522__$1 = temp__5825__auto___69521__$1;
if(cljs.core.chunked_seq_QMARK_(seq__69202_69522__$1)){
var c__5548__auto___69523 = cljs.core.chunk_first(seq__69202_69522__$1);
var G__69524 = cljs.core.chunk_rest(seq__69202_69522__$1);
var G__69525 = c__5548__auto___69523;
var G__69526 = cljs.core.count(c__5548__auto___69523);
var G__69527 = (0);
seq__69202_69508 = G__69524;
chunk__69204_69509 = G__69525;
count__69205_69510 = G__69526;
i__69206_69511 = G__69527;
continue;
} else {
var child_69528 = cljs.core.first(seq__69202_69522__$1);
if(cljs.core.truth_(child_69528)){
node.appendChild(child_69528);


var G__69529 = cljs.core.next(seq__69202_69522__$1);
var G__69530 = null;
var G__69531 = (0);
var G__69532 = (0);
seq__69202_69508 = G__69529;
chunk__69204_69509 = G__69530;
count__69205_69510 = G__69531;
i__69206_69511 = G__69532;
continue;
} else {
var G__69533 = cljs.core.next(seq__69202_69522__$1);
var G__69534 = null;
var G__69535 = (0);
var G__69536 = (0);
seq__69202_69508 = G__69533;
chunk__69204_69509 = G__69534;
count__69205_69510 = G__69535;
i__69206_69511 = G__69536;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_69507);
}
}


var G__69537 = cljs.core.next(seq__69178_69499__$1);
var G__69538 = null;
var G__69539 = (0);
var G__69540 = (0);
seq__69178_69454 = G__69537;
chunk__69180_69455 = G__69538;
count__69181_69456 = G__69539;
i__69182_69457 = G__69540;
continue;
} else {
var G__69541 = cljs.core.next(seq__69178_69499__$1);
var G__69542 = null;
var G__69543 = (0);
var G__69544 = (0);
seq__69178_69454 = G__69541;
chunk__69180_69455 = G__69542;
count__69181_69456 = G__69543;
i__69182_69457 = G__69544;
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
var len__5749__auto___69545 = arguments.length;
var i__5750__auto___69546 = (0);
while(true){
if((i__5750__auto___69546 < len__5749__auto___69545)){
args__5755__auto__.push((arguments[i__5750__auto___69546]));

var G__69547 = (i__5750__auto___69546 + (1));
i__5750__auto___69546 = G__69547;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq69208){
var G__69209 = cljs.core.first(seq69208);
var seq69208__$1 = cljs.core.next(seq69208);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69209,seq69208__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
