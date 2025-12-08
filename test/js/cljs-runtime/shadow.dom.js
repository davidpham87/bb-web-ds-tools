goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_66197 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_66197(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_66198 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_66198(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__65808 = coll;
var G__65809 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__65808,G__65809) : shadow.dom.lazy_native_coll_seq.call(null,G__65808,G__65809));
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
var G__65820 = arguments.length;
switch (G__65820) {
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
var G__65822 = arguments.length;
switch (G__65822) {
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
var G__65829 = arguments.length;
switch (G__65829) {
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
var G__65832 = arguments.length;
switch (G__65832) {
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
var G__65840 = arguments.length;
switch (G__65840) {
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
var G__65850 = arguments.length;
switch (G__65850) {
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
}catch (e65909){if((e65909 instanceof Object)){
var e = e65909;
return console.log("didnt support attachEvent",el,e);
} else {
throw e65909;

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
var seq__65914 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__65915 = null;
var count__65916 = (0);
var i__65917 = (0);
while(true){
if((i__65917 < count__65916)){
var el = chunk__65915.cljs$core$IIndexed$_nth$arity$2(null,i__65917);
var handler_66205__$1 = ((function (seq__65914,chunk__65915,count__65916,i__65917,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65914,chunk__65915,count__65916,i__65917,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_66205__$1);


var G__66206 = seq__65914;
var G__66207 = chunk__65915;
var G__66208 = count__65916;
var G__66209 = (i__65917 + (1));
seq__65914 = G__66206;
chunk__65915 = G__66207;
count__65916 = G__66208;
i__65917 = G__66209;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65914);
if(temp__5825__auto__){
var seq__65914__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65914__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65914__$1);
var G__66210 = cljs.core.chunk_rest(seq__65914__$1);
var G__66211 = c__5548__auto__;
var G__66212 = cljs.core.count(c__5548__auto__);
var G__66213 = (0);
seq__65914 = G__66210;
chunk__65915 = G__66211;
count__65916 = G__66212;
i__65917 = G__66213;
continue;
} else {
var el = cljs.core.first(seq__65914__$1);
var handler_66214__$1 = ((function (seq__65914,chunk__65915,count__65916,i__65917,el,seq__65914__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65914,chunk__65915,count__65916,i__65917,el,seq__65914__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_66214__$1);


var G__66215 = cljs.core.next(seq__65914__$1);
var G__66216 = null;
var G__66217 = (0);
var G__66218 = (0);
seq__65914 = G__66215;
chunk__65915 = G__66216;
count__65916 = G__66217;
i__65917 = G__66218;
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
var G__65919 = arguments.length;
switch (G__65919) {
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
var seq__65922 = cljs.core.seq(events);
var chunk__65923 = null;
var count__65924 = (0);
var i__65925 = (0);
while(true){
if((i__65925 < count__65924)){
var vec__65932 = chunk__65923.cljs$core$IIndexed$_nth$arity$2(null,i__65925);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65932,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65932,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__66220 = seq__65922;
var G__66221 = chunk__65923;
var G__66222 = count__65924;
var G__66223 = (i__65925 + (1));
seq__65922 = G__66220;
chunk__65923 = G__66221;
count__65924 = G__66222;
i__65925 = G__66223;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65922);
if(temp__5825__auto__){
var seq__65922__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65922__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65922__$1);
var G__66224 = cljs.core.chunk_rest(seq__65922__$1);
var G__66225 = c__5548__auto__;
var G__66226 = cljs.core.count(c__5548__auto__);
var G__66227 = (0);
seq__65922 = G__66224;
chunk__65923 = G__66225;
count__65924 = G__66226;
i__65925 = G__66227;
continue;
} else {
var vec__65935 = cljs.core.first(seq__65922__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65935,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65935,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__66228 = cljs.core.next(seq__65922__$1);
var G__66229 = null;
var G__66230 = (0);
var G__66231 = (0);
seq__65922 = G__66228;
chunk__65923 = G__66229;
count__65924 = G__66230;
i__65925 = G__66231;
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
var seq__65938 = cljs.core.seq(styles);
var chunk__65939 = null;
var count__65940 = (0);
var i__65941 = (0);
while(true){
if((i__65941 < count__65940)){
var vec__65948 = chunk__65939.cljs$core$IIndexed$_nth$arity$2(null,i__65941);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65948,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65948,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__66232 = seq__65938;
var G__66233 = chunk__65939;
var G__66234 = count__65940;
var G__66235 = (i__65941 + (1));
seq__65938 = G__66232;
chunk__65939 = G__66233;
count__65940 = G__66234;
i__65941 = G__66235;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65938);
if(temp__5825__auto__){
var seq__65938__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65938__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65938__$1);
var G__66236 = cljs.core.chunk_rest(seq__65938__$1);
var G__66237 = c__5548__auto__;
var G__66238 = cljs.core.count(c__5548__auto__);
var G__66239 = (0);
seq__65938 = G__66236;
chunk__65939 = G__66237;
count__65940 = G__66238;
i__65941 = G__66239;
continue;
} else {
var vec__65951 = cljs.core.first(seq__65938__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65951,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65951,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__66240 = cljs.core.next(seq__65938__$1);
var G__66241 = null;
var G__66242 = (0);
var G__66243 = (0);
seq__65938 = G__66240;
chunk__65939 = G__66241;
count__65940 = G__66242;
i__65941 = G__66243;
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
var G__65954_66244 = key;
var G__65954_66245__$1 = (((G__65954_66244 instanceof cljs.core.Keyword))?G__65954_66244.fqn:null);
switch (G__65954_66245__$1) {
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
var ks_66247 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_66247,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_66247,"aria-");
}
})())){
el.setAttribute(ks_66247,value);
} else {
(el[ks_66247] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__65970){
var map__65971 = p__65970;
var map__65971__$1 = cljs.core.__destructure_map(map__65971);
var props = map__65971__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65971__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__65972 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65972,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65972,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65972,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__65975 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__65975,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__65975;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__65977 = arguments.length;
switch (G__65977) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__65978){
var vec__65979 = p__65978;
var seq__65980 = cljs.core.seq(vec__65979);
var first__65981 = cljs.core.first(seq__65980);
var seq__65980__$1 = cljs.core.next(seq__65980);
var nn = first__65981;
var first__65981__$1 = cljs.core.first(seq__65980__$1);
var seq__65980__$2 = cljs.core.next(seq__65980__$1);
var np = first__65981__$1;
var nc = seq__65980__$2;
var node = vec__65979;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65982 = nn;
var G__65983 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65982,G__65983) : create_fn.call(null,G__65982,G__65983));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65984 = nn;
var G__65985 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65984,G__65985) : create_fn.call(null,G__65984,G__65985));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__65989 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65989,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65989,(1),null);
var seq__65992_66249 = cljs.core.seq(node_children);
var chunk__65993_66250 = null;
var count__65994_66251 = (0);
var i__65995_66252 = (0);
while(true){
if((i__65995_66252 < count__65994_66251)){
var child_struct_66253 = chunk__65993_66250.cljs$core$IIndexed$_nth$arity$2(null,i__65995_66252);
var children_66254 = shadow.dom.dom_node(child_struct_66253);
if(cljs.core.seq_QMARK_(children_66254)){
var seq__66018_66255 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66254));
var chunk__66020_66256 = null;
var count__66021_66257 = (0);
var i__66022_66258 = (0);
while(true){
if((i__66022_66258 < count__66021_66257)){
var child_66259 = chunk__66020_66256.cljs$core$IIndexed$_nth$arity$2(null,i__66022_66258);
if(cljs.core.truth_(child_66259)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66259);


var G__66260 = seq__66018_66255;
var G__66261 = chunk__66020_66256;
var G__66262 = count__66021_66257;
var G__66263 = (i__66022_66258 + (1));
seq__66018_66255 = G__66260;
chunk__66020_66256 = G__66261;
count__66021_66257 = G__66262;
i__66022_66258 = G__66263;
continue;
} else {
var G__66264 = seq__66018_66255;
var G__66265 = chunk__66020_66256;
var G__66266 = count__66021_66257;
var G__66267 = (i__66022_66258 + (1));
seq__66018_66255 = G__66264;
chunk__66020_66256 = G__66265;
count__66021_66257 = G__66266;
i__66022_66258 = G__66267;
continue;
}
} else {
var temp__5825__auto___66268 = cljs.core.seq(seq__66018_66255);
if(temp__5825__auto___66268){
var seq__66018_66269__$1 = temp__5825__auto___66268;
if(cljs.core.chunked_seq_QMARK_(seq__66018_66269__$1)){
var c__5548__auto___66270 = cljs.core.chunk_first(seq__66018_66269__$1);
var G__66271 = cljs.core.chunk_rest(seq__66018_66269__$1);
var G__66272 = c__5548__auto___66270;
var G__66273 = cljs.core.count(c__5548__auto___66270);
var G__66274 = (0);
seq__66018_66255 = G__66271;
chunk__66020_66256 = G__66272;
count__66021_66257 = G__66273;
i__66022_66258 = G__66274;
continue;
} else {
var child_66275 = cljs.core.first(seq__66018_66269__$1);
if(cljs.core.truth_(child_66275)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66275);


var G__66276 = cljs.core.next(seq__66018_66269__$1);
var G__66277 = null;
var G__66278 = (0);
var G__66279 = (0);
seq__66018_66255 = G__66276;
chunk__66020_66256 = G__66277;
count__66021_66257 = G__66278;
i__66022_66258 = G__66279;
continue;
} else {
var G__66280 = cljs.core.next(seq__66018_66269__$1);
var G__66281 = null;
var G__66282 = (0);
var G__66283 = (0);
seq__66018_66255 = G__66280;
chunk__66020_66256 = G__66281;
count__66021_66257 = G__66282;
i__66022_66258 = G__66283;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66254);
}


var G__66284 = seq__65992_66249;
var G__66285 = chunk__65993_66250;
var G__66286 = count__65994_66251;
var G__66287 = (i__65995_66252 + (1));
seq__65992_66249 = G__66284;
chunk__65993_66250 = G__66285;
count__65994_66251 = G__66286;
i__65995_66252 = G__66287;
continue;
} else {
var temp__5825__auto___66288 = cljs.core.seq(seq__65992_66249);
if(temp__5825__auto___66288){
var seq__65992_66289__$1 = temp__5825__auto___66288;
if(cljs.core.chunked_seq_QMARK_(seq__65992_66289__$1)){
var c__5548__auto___66290 = cljs.core.chunk_first(seq__65992_66289__$1);
var G__66291 = cljs.core.chunk_rest(seq__65992_66289__$1);
var G__66292 = c__5548__auto___66290;
var G__66293 = cljs.core.count(c__5548__auto___66290);
var G__66294 = (0);
seq__65992_66249 = G__66291;
chunk__65993_66250 = G__66292;
count__65994_66251 = G__66293;
i__65995_66252 = G__66294;
continue;
} else {
var child_struct_66295 = cljs.core.first(seq__65992_66289__$1);
var children_66296 = shadow.dom.dom_node(child_struct_66295);
if(cljs.core.seq_QMARK_(children_66296)){
var seq__66028_66297 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66296));
var chunk__66030_66298 = null;
var count__66031_66299 = (0);
var i__66032_66300 = (0);
while(true){
if((i__66032_66300 < count__66031_66299)){
var child_66301 = chunk__66030_66298.cljs$core$IIndexed$_nth$arity$2(null,i__66032_66300);
if(cljs.core.truth_(child_66301)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66301);


var G__66302 = seq__66028_66297;
var G__66303 = chunk__66030_66298;
var G__66304 = count__66031_66299;
var G__66305 = (i__66032_66300 + (1));
seq__66028_66297 = G__66302;
chunk__66030_66298 = G__66303;
count__66031_66299 = G__66304;
i__66032_66300 = G__66305;
continue;
} else {
var G__66306 = seq__66028_66297;
var G__66307 = chunk__66030_66298;
var G__66308 = count__66031_66299;
var G__66309 = (i__66032_66300 + (1));
seq__66028_66297 = G__66306;
chunk__66030_66298 = G__66307;
count__66031_66299 = G__66308;
i__66032_66300 = G__66309;
continue;
}
} else {
var temp__5825__auto___66310__$1 = cljs.core.seq(seq__66028_66297);
if(temp__5825__auto___66310__$1){
var seq__66028_66311__$1 = temp__5825__auto___66310__$1;
if(cljs.core.chunked_seq_QMARK_(seq__66028_66311__$1)){
var c__5548__auto___66312 = cljs.core.chunk_first(seq__66028_66311__$1);
var G__66313 = cljs.core.chunk_rest(seq__66028_66311__$1);
var G__66314 = c__5548__auto___66312;
var G__66315 = cljs.core.count(c__5548__auto___66312);
var G__66316 = (0);
seq__66028_66297 = G__66313;
chunk__66030_66298 = G__66314;
count__66031_66299 = G__66315;
i__66032_66300 = G__66316;
continue;
} else {
var child_66317 = cljs.core.first(seq__66028_66311__$1);
if(cljs.core.truth_(child_66317)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66317);


var G__66318 = cljs.core.next(seq__66028_66311__$1);
var G__66319 = null;
var G__66320 = (0);
var G__66321 = (0);
seq__66028_66297 = G__66318;
chunk__66030_66298 = G__66319;
count__66031_66299 = G__66320;
i__66032_66300 = G__66321;
continue;
} else {
var G__66322 = cljs.core.next(seq__66028_66311__$1);
var G__66323 = null;
var G__66324 = (0);
var G__66325 = (0);
seq__66028_66297 = G__66322;
chunk__66030_66298 = G__66323;
count__66031_66299 = G__66324;
i__66032_66300 = G__66325;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66296);
}


var G__66326 = cljs.core.next(seq__65992_66289__$1);
var G__66327 = null;
var G__66328 = (0);
var G__66329 = (0);
seq__65992_66249 = G__66326;
chunk__65993_66250 = G__66327;
count__65994_66251 = G__66328;
i__65995_66252 = G__66329;
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
var seq__66039 = cljs.core.seq(node);
var chunk__66040 = null;
var count__66041 = (0);
var i__66042 = (0);
while(true){
if((i__66042 < count__66041)){
var n = chunk__66040.cljs$core$IIndexed$_nth$arity$2(null,i__66042);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66330 = seq__66039;
var G__66331 = chunk__66040;
var G__66332 = count__66041;
var G__66333 = (i__66042 + (1));
seq__66039 = G__66330;
chunk__66040 = G__66331;
count__66041 = G__66332;
i__66042 = G__66333;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66039);
if(temp__5825__auto__){
var seq__66039__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66039__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__66039__$1);
var G__66334 = cljs.core.chunk_rest(seq__66039__$1);
var G__66335 = c__5548__auto__;
var G__66336 = cljs.core.count(c__5548__auto__);
var G__66337 = (0);
seq__66039 = G__66334;
chunk__66040 = G__66335;
count__66041 = G__66336;
i__66042 = G__66337;
continue;
} else {
var n = cljs.core.first(seq__66039__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66338 = cljs.core.next(seq__66039__$1);
var G__66339 = null;
var G__66340 = (0);
var G__66341 = (0);
seq__66039 = G__66338;
chunk__66040 = G__66339;
count__66041 = G__66340;
i__66042 = G__66341;
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
var G__66046 = arguments.length;
switch (G__66046) {
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
var G__66049 = arguments.length;
switch (G__66049) {
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
var G__66055 = arguments.length;
switch (G__66055) {
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
var len__5749__auto___66345 = arguments.length;
var i__5750__auto___66346 = (0);
while(true){
if((i__5750__auto___66346 < len__5749__auto___66345)){
args__5755__auto__.push((arguments[i__5750__auto___66346]));

var G__66347 = (i__5750__auto___66346 + (1));
i__5750__auto___66346 = G__66347;
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
var seq__66057_66348 = cljs.core.seq(nodes);
var chunk__66058_66349 = null;
var count__66059_66350 = (0);
var i__66060_66351 = (0);
while(true){
if((i__66060_66351 < count__66059_66350)){
var node_66352 = chunk__66058_66349.cljs$core$IIndexed$_nth$arity$2(null,i__66060_66351);
fragment.appendChild(shadow.dom._to_dom(node_66352));


var G__66353 = seq__66057_66348;
var G__66354 = chunk__66058_66349;
var G__66355 = count__66059_66350;
var G__66356 = (i__66060_66351 + (1));
seq__66057_66348 = G__66353;
chunk__66058_66349 = G__66354;
count__66059_66350 = G__66355;
i__66060_66351 = G__66356;
continue;
} else {
var temp__5825__auto___66357 = cljs.core.seq(seq__66057_66348);
if(temp__5825__auto___66357){
var seq__66057_66358__$1 = temp__5825__auto___66357;
if(cljs.core.chunked_seq_QMARK_(seq__66057_66358__$1)){
var c__5548__auto___66359 = cljs.core.chunk_first(seq__66057_66358__$1);
var G__66360 = cljs.core.chunk_rest(seq__66057_66358__$1);
var G__66361 = c__5548__auto___66359;
var G__66362 = cljs.core.count(c__5548__auto___66359);
var G__66363 = (0);
seq__66057_66348 = G__66360;
chunk__66058_66349 = G__66361;
count__66059_66350 = G__66362;
i__66060_66351 = G__66363;
continue;
} else {
var node_66364 = cljs.core.first(seq__66057_66358__$1);
fragment.appendChild(shadow.dom._to_dom(node_66364));


var G__66365 = cljs.core.next(seq__66057_66358__$1);
var G__66366 = null;
var G__66367 = (0);
var G__66368 = (0);
seq__66057_66348 = G__66365;
chunk__66058_66349 = G__66366;
count__66059_66350 = G__66367;
i__66060_66351 = G__66368;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq66056){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66056));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__66063_66369 = cljs.core.seq(scripts);
var chunk__66064_66370 = null;
var count__66065_66371 = (0);
var i__66066_66372 = (0);
while(true){
if((i__66066_66372 < count__66065_66371)){
var vec__66073_66373 = chunk__66064_66370.cljs$core$IIndexed$_nth$arity$2(null,i__66066_66372);
var script_tag_66374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66073_66373,(0),null);
var script_body_66375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66073_66373,(1),null);
eval(script_body_66375);


var G__66376 = seq__66063_66369;
var G__66377 = chunk__66064_66370;
var G__66378 = count__66065_66371;
var G__66379 = (i__66066_66372 + (1));
seq__66063_66369 = G__66376;
chunk__66064_66370 = G__66377;
count__66065_66371 = G__66378;
i__66066_66372 = G__66379;
continue;
} else {
var temp__5825__auto___66380 = cljs.core.seq(seq__66063_66369);
if(temp__5825__auto___66380){
var seq__66063_66381__$1 = temp__5825__auto___66380;
if(cljs.core.chunked_seq_QMARK_(seq__66063_66381__$1)){
var c__5548__auto___66382 = cljs.core.chunk_first(seq__66063_66381__$1);
var G__66383 = cljs.core.chunk_rest(seq__66063_66381__$1);
var G__66384 = c__5548__auto___66382;
var G__66385 = cljs.core.count(c__5548__auto___66382);
var G__66386 = (0);
seq__66063_66369 = G__66383;
chunk__66064_66370 = G__66384;
count__66065_66371 = G__66385;
i__66066_66372 = G__66386;
continue;
} else {
var vec__66076_66387 = cljs.core.first(seq__66063_66381__$1);
var script_tag_66388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66076_66387,(0),null);
var script_body_66389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66076_66387,(1),null);
eval(script_body_66389);


var G__66390 = cljs.core.next(seq__66063_66381__$1);
var G__66391 = null;
var G__66392 = (0);
var G__66393 = (0);
seq__66063_66369 = G__66390;
chunk__66064_66370 = G__66391;
count__66065_66371 = G__66392;
i__66066_66372 = G__66393;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__66079){
var vec__66080 = p__66079;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66080,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66080,(1),null);
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
var G__66088 = arguments.length;
switch (G__66088) {
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
var seq__66093 = cljs.core.seq(style_keys);
var chunk__66094 = null;
var count__66095 = (0);
var i__66096 = (0);
while(true){
if((i__66096 < count__66095)){
var it = chunk__66094.cljs$core$IIndexed$_nth$arity$2(null,i__66096);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66395 = seq__66093;
var G__66396 = chunk__66094;
var G__66397 = count__66095;
var G__66398 = (i__66096 + (1));
seq__66093 = G__66395;
chunk__66094 = G__66396;
count__66095 = G__66397;
i__66096 = G__66398;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__66093);
if(temp__5825__auto__){
var seq__66093__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66093__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__66093__$1);
var G__66399 = cljs.core.chunk_rest(seq__66093__$1);
var G__66400 = c__5548__auto__;
var G__66401 = cljs.core.count(c__5548__auto__);
var G__66402 = (0);
seq__66093 = G__66399;
chunk__66094 = G__66400;
count__66095 = G__66401;
i__66096 = G__66402;
continue;
} else {
var it = cljs.core.first(seq__66093__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66403 = cljs.core.next(seq__66093__$1);
var G__66404 = null;
var G__66405 = (0);
var G__66406 = (0);
seq__66093 = G__66403;
chunk__66094 = G__66404;
count__66095 = G__66405;
i__66096 = G__66406;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k66098,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__66102 = k66098;
var G__66102__$1 = (((G__66102 instanceof cljs.core.Keyword))?G__66102.fqn:null);
switch (G__66102__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k66098,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__66107){
var vec__66108 = p__66107;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66108,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66108,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66097){
var self__ = this;
var G__66097__$1 = this;
return (new cljs.core.RecordIter((0),G__66097__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66099,other66100){
var self__ = this;
var this66099__$1 = this;
return (((!((other66100 == null)))) && ((((this66099__$1.constructor === other66100.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66099__$1.x,other66100.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66099__$1.y,other66100.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66099__$1.__extmap,other66100.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k66098){
var self__ = this;
var this__5330__auto____$1 = this;
var G__66112 = k66098;
var G__66112__$1 = (((G__66112 instanceof cljs.core.Keyword))?G__66112.fqn:null);
switch (G__66112__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k66098);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__66097){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__66113 = cljs.core.keyword_identical_QMARK_;
var expr__66114 = k__5332__auto__;
if(cljs.core.truth_((pred__66113.cljs$core$IFn$_invoke$arity$2 ? pred__66113.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__66114) : pred__66113.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__66114)))){
return (new shadow.dom.Coordinate(G__66097,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66113.cljs$core$IFn$_invoke$arity$2 ? pred__66113.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__66114) : pred__66113.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__66114)))){
return (new shadow.dom.Coordinate(self__.x,G__66097,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__66097),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__66097){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__66097,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__66101){
var extmap__5365__auto__ = (function (){var G__66116 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__66101,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__66101)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66116);
} else {
return G__66116;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__66101),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__66101),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k66118,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__66122 = k66118;
var G__66122__$1 = (((G__66122 instanceof cljs.core.Keyword))?G__66122.fqn:null);
switch (G__66122__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k66118,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__66123){
var vec__66124 = p__66123;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66124,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66124,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66117){
var self__ = this;
var G__66117__$1 = this;
return (new cljs.core.RecordIter((0),G__66117__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66119,other66120){
var self__ = this;
var this66119__$1 = this;
return (((!((other66120 == null)))) && ((((this66119__$1.constructor === other66120.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66119__$1.w,other66120.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66119__$1.h,other66120.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66119__$1.__extmap,other66120.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k66118){
var self__ = this;
var this__5330__auto____$1 = this;
var G__66127 = k66118;
var G__66127__$1 = (((G__66127 instanceof cljs.core.Keyword))?G__66127.fqn:null);
switch (G__66127__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k66118);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__66117){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__66128 = cljs.core.keyword_identical_QMARK_;
var expr__66129 = k__5332__auto__;
if(cljs.core.truth_((pred__66128.cljs$core$IFn$_invoke$arity$2 ? pred__66128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__66129) : pred__66128.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__66129)))){
return (new shadow.dom.Size(G__66117,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66128.cljs$core$IFn$_invoke$arity$2 ? pred__66128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__66129) : pred__66128.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__66129)))){
return (new shadow.dom.Size(self__.w,G__66117,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__66117),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__66117){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__66117,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__66121){
var extmap__5365__auto__ = (function (){var G__66131 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__66121,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__66121)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66131);
} else {
return G__66131;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__66121),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__66121),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__66411 = (i + (1));
var G__66412 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__66411;
ret = G__66412;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66136){
var vec__66137 = p__66136;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66137,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66137,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__66141 = arguments.length;
switch (G__66141) {
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
var G__66414 = ps;
var G__66415 = (i + (1));
el__$1 = G__66414;
i = G__66415;
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
var vec__66142 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66142,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66142,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66142,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__66145_66416 = cljs.core.seq(props);
var chunk__66146_66417 = null;
var count__66147_66418 = (0);
var i__66148_66419 = (0);
while(true){
if((i__66148_66419 < count__66147_66418)){
var vec__66155_66420 = chunk__66146_66417.cljs$core$IIndexed$_nth$arity$2(null,i__66148_66419);
var k_66421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66155_66420,(0),null);
var v_66422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66155_66420,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_66421);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66421),v_66422);


var G__66423 = seq__66145_66416;
var G__66424 = chunk__66146_66417;
var G__66425 = count__66147_66418;
var G__66426 = (i__66148_66419 + (1));
seq__66145_66416 = G__66423;
chunk__66146_66417 = G__66424;
count__66147_66418 = G__66425;
i__66148_66419 = G__66426;
continue;
} else {
var temp__5825__auto___66427 = cljs.core.seq(seq__66145_66416);
if(temp__5825__auto___66427){
var seq__66145_66428__$1 = temp__5825__auto___66427;
if(cljs.core.chunked_seq_QMARK_(seq__66145_66428__$1)){
var c__5548__auto___66429 = cljs.core.chunk_first(seq__66145_66428__$1);
var G__66430 = cljs.core.chunk_rest(seq__66145_66428__$1);
var G__66431 = c__5548__auto___66429;
var G__66432 = cljs.core.count(c__5548__auto___66429);
var G__66433 = (0);
seq__66145_66416 = G__66430;
chunk__66146_66417 = G__66431;
count__66147_66418 = G__66432;
i__66148_66419 = G__66433;
continue;
} else {
var vec__66158_66434 = cljs.core.first(seq__66145_66428__$1);
var k_66435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66158_66434,(0),null);
var v_66436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66158_66434,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_66435);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66435),v_66436);


var G__66437 = cljs.core.next(seq__66145_66428__$1);
var G__66438 = null;
var G__66439 = (0);
var G__66440 = (0);
seq__66145_66416 = G__66437;
chunk__66146_66417 = G__66438;
count__66147_66418 = G__66439;
i__66148_66419 = G__66440;
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
var vec__66162 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66162,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66162,(1),null);
var seq__66165_66441 = cljs.core.seq(node_children);
var chunk__66167_66442 = null;
var count__66168_66443 = (0);
var i__66169_66444 = (0);
while(true){
if((i__66169_66444 < count__66168_66443)){
var child_struct_66445 = chunk__66167_66442.cljs$core$IIndexed$_nth$arity$2(null,i__66169_66444);
if((!((child_struct_66445 == null)))){
if(typeof child_struct_66445 === 'string'){
var text_66446 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66446),child_struct_66445].join(''));
} else {
var children_66447 = shadow.dom.svg_node(child_struct_66445);
if(cljs.core.seq_QMARK_(children_66447)){
var seq__66183_66448 = cljs.core.seq(children_66447);
var chunk__66185_66449 = null;
var count__66186_66450 = (0);
var i__66187_66451 = (0);
while(true){
if((i__66187_66451 < count__66186_66450)){
var child_66452 = chunk__66185_66449.cljs$core$IIndexed$_nth$arity$2(null,i__66187_66451);
if(cljs.core.truth_(child_66452)){
node.appendChild(child_66452);


var G__66453 = seq__66183_66448;
var G__66454 = chunk__66185_66449;
var G__66455 = count__66186_66450;
var G__66456 = (i__66187_66451 + (1));
seq__66183_66448 = G__66453;
chunk__66185_66449 = G__66454;
count__66186_66450 = G__66455;
i__66187_66451 = G__66456;
continue;
} else {
var G__66457 = seq__66183_66448;
var G__66458 = chunk__66185_66449;
var G__66459 = count__66186_66450;
var G__66460 = (i__66187_66451 + (1));
seq__66183_66448 = G__66457;
chunk__66185_66449 = G__66458;
count__66186_66450 = G__66459;
i__66187_66451 = G__66460;
continue;
}
} else {
var temp__5825__auto___66461 = cljs.core.seq(seq__66183_66448);
if(temp__5825__auto___66461){
var seq__66183_66462__$1 = temp__5825__auto___66461;
if(cljs.core.chunked_seq_QMARK_(seq__66183_66462__$1)){
var c__5548__auto___66463 = cljs.core.chunk_first(seq__66183_66462__$1);
var G__66464 = cljs.core.chunk_rest(seq__66183_66462__$1);
var G__66465 = c__5548__auto___66463;
var G__66466 = cljs.core.count(c__5548__auto___66463);
var G__66467 = (0);
seq__66183_66448 = G__66464;
chunk__66185_66449 = G__66465;
count__66186_66450 = G__66466;
i__66187_66451 = G__66467;
continue;
} else {
var child_66468 = cljs.core.first(seq__66183_66462__$1);
if(cljs.core.truth_(child_66468)){
node.appendChild(child_66468);


var G__66469 = cljs.core.next(seq__66183_66462__$1);
var G__66470 = null;
var G__66471 = (0);
var G__66472 = (0);
seq__66183_66448 = G__66469;
chunk__66185_66449 = G__66470;
count__66186_66450 = G__66471;
i__66187_66451 = G__66472;
continue;
} else {
var G__66473 = cljs.core.next(seq__66183_66462__$1);
var G__66474 = null;
var G__66475 = (0);
var G__66476 = (0);
seq__66183_66448 = G__66473;
chunk__66185_66449 = G__66474;
count__66186_66450 = G__66475;
i__66187_66451 = G__66476;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66447);
}
}


var G__66477 = seq__66165_66441;
var G__66478 = chunk__66167_66442;
var G__66479 = count__66168_66443;
var G__66480 = (i__66169_66444 + (1));
seq__66165_66441 = G__66477;
chunk__66167_66442 = G__66478;
count__66168_66443 = G__66479;
i__66169_66444 = G__66480;
continue;
} else {
var G__66481 = seq__66165_66441;
var G__66482 = chunk__66167_66442;
var G__66483 = count__66168_66443;
var G__66484 = (i__66169_66444 + (1));
seq__66165_66441 = G__66481;
chunk__66167_66442 = G__66482;
count__66168_66443 = G__66483;
i__66169_66444 = G__66484;
continue;
}
} else {
var temp__5825__auto___66485 = cljs.core.seq(seq__66165_66441);
if(temp__5825__auto___66485){
var seq__66165_66486__$1 = temp__5825__auto___66485;
if(cljs.core.chunked_seq_QMARK_(seq__66165_66486__$1)){
var c__5548__auto___66487 = cljs.core.chunk_first(seq__66165_66486__$1);
var G__66488 = cljs.core.chunk_rest(seq__66165_66486__$1);
var G__66489 = c__5548__auto___66487;
var G__66490 = cljs.core.count(c__5548__auto___66487);
var G__66491 = (0);
seq__66165_66441 = G__66488;
chunk__66167_66442 = G__66489;
count__66168_66443 = G__66490;
i__66169_66444 = G__66491;
continue;
} else {
var child_struct_66492 = cljs.core.first(seq__66165_66486__$1);
if((!((child_struct_66492 == null)))){
if(typeof child_struct_66492 === 'string'){
var text_66493 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66493),child_struct_66492].join(''));
} else {
var children_66494 = shadow.dom.svg_node(child_struct_66492);
if(cljs.core.seq_QMARK_(children_66494)){
var seq__66189_66495 = cljs.core.seq(children_66494);
var chunk__66191_66496 = null;
var count__66192_66497 = (0);
var i__66193_66498 = (0);
while(true){
if((i__66193_66498 < count__66192_66497)){
var child_66499 = chunk__66191_66496.cljs$core$IIndexed$_nth$arity$2(null,i__66193_66498);
if(cljs.core.truth_(child_66499)){
node.appendChild(child_66499);


var G__66500 = seq__66189_66495;
var G__66501 = chunk__66191_66496;
var G__66502 = count__66192_66497;
var G__66503 = (i__66193_66498 + (1));
seq__66189_66495 = G__66500;
chunk__66191_66496 = G__66501;
count__66192_66497 = G__66502;
i__66193_66498 = G__66503;
continue;
} else {
var G__66504 = seq__66189_66495;
var G__66505 = chunk__66191_66496;
var G__66506 = count__66192_66497;
var G__66507 = (i__66193_66498 + (1));
seq__66189_66495 = G__66504;
chunk__66191_66496 = G__66505;
count__66192_66497 = G__66506;
i__66193_66498 = G__66507;
continue;
}
} else {
var temp__5825__auto___66508__$1 = cljs.core.seq(seq__66189_66495);
if(temp__5825__auto___66508__$1){
var seq__66189_66509__$1 = temp__5825__auto___66508__$1;
if(cljs.core.chunked_seq_QMARK_(seq__66189_66509__$1)){
var c__5548__auto___66510 = cljs.core.chunk_first(seq__66189_66509__$1);
var G__66511 = cljs.core.chunk_rest(seq__66189_66509__$1);
var G__66512 = c__5548__auto___66510;
var G__66513 = cljs.core.count(c__5548__auto___66510);
var G__66514 = (0);
seq__66189_66495 = G__66511;
chunk__66191_66496 = G__66512;
count__66192_66497 = G__66513;
i__66193_66498 = G__66514;
continue;
} else {
var child_66515 = cljs.core.first(seq__66189_66509__$1);
if(cljs.core.truth_(child_66515)){
node.appendChild(child_66515);


var G__66516 = cljs.core.next(seq__66189_66509__$1);
var G__66517 = null;
var G__66518 = (0);
var G__66519 = (0);
seq__66189_66495 = G__66516;
chunk__66191_66496 = G__66517;
count__66192_66497 = G__66518;
i__66193_66498 = G__66519;
continue;
} else {
var G__66520 = cljs.core.next(seq__66189_66509__$1);
var G__66521 = null;
var G__66522 = (0);
var G__66523 = (0);
seq__66189_66495 = G__66520;
chunk__66191_66496 = G__66521;
count__66192_66497 = G__66522;
i__66193_66498 = G__66523;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66494);
}
}


var G__66524 = cljs.core.next(seq__66165_66486__$1);
var G__66525 = null;
var G__66526 = (0);
var G__66527 = (0);
seq__66165_66441 = G__66524;
chunk__66167_66442 = G__66525;
count__66168_66443 = G__66526;
i__66169_66444 = G__66527;
continue;
} else {
var G__66528 = cljs.core.next(seq__66165_66486__$1);
var G__66529 = null;
var G__66530 = (0);
var G__66531 = (0);
seq__66165_66441 = G__66528;
chunk__66167_66442 = G__66529;
count__66168_66443 = G__66530;
i__66169_66444 = G__66531;
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
var len__5749__auto___66532 = arguments.length;
var i__5750__auto___66533 = (0);
while(true){
if((i__5750__auto___66533 < len__5749__auto___66532)){
args__5755__auto__.push((arguments[i__5750__auto___66533]));

var G__66534 = (i__5750__auto___66533 + (1));
i__5750__auto___66533 = G__66534;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq66195){
var G__66196 = cljs.core.first(seq66195);
var seq66195__$1 = cljs.core.next(seq66195);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66196,seq66195__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
