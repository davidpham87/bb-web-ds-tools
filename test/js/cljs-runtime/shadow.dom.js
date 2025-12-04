goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_65851 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_65851(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_65852 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_65852(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__65465 = coll;
var G__65466 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__65465,G__65466) : shadow.dom.lazy_native_coll_seq.call(null,G__65465,G__65466));
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
var G__65485 = arguments.length;
switch (G__65485) {
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
var G__65494 = arguments.length;
switch (G__65494) {
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
var G__65498 = arguments.length;
switch (G__65498) {
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
var G__65514 = arguments.length;
switch (G__65514) {
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
var G__65519 = arguments.length;
switch (G__65519) {
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
var G__65550 = arguments.length;
switch (G__65550) {
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
}catch (e65556){if((e65556 instanceof Object)){
var e = e65556;
return console.log("didnt support attachEvent",el,e);
} else {
throw e65556;

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
var seq__65599 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__65600 = null;
var count__65601 = (0);
var i__65602 = (0);
while(true){
if((i__65602 < count__65601)){
var el = chunk__65600.cljs$core$IIndexed$_nth$arity$2(null,i__65602);
var handler_65859__$1 = ((function (seq__65599,chunk__65600,count__65601,i__65602,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65599,chunk__65600,count__65601,i__65602,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65859__$1);


var G__65860 = seq__65599;
var G__65861 = chunk__65600;
var G__65862 = count__65601;
var G__65863 = (i__65602 + (1));
seq__65599 = G__65860;
chunk__65600 = G__65861;
count__65601 = G__65862;
i__65602 = G__65863;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65599);
if(temp__5825__auto__){
var seq__65599__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65599__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65599__$1);
var G__65864 = cljs.core.chunk_rest(seq__65599__$1);
var G__65865 = c__5548__auto__;
var G__65866 = cljs.core.count(c__5548__auto__);
var G__65867 = (0);
seq__65599 = G__65864;
chunk__65600 = G__65865;
count__65601 = G__65866;
i__65602 = G__65867;
continue;
} else {
var el = cljs.core.first(seq__65599__$1);
var handler_65868__$1 = ((function (seq__65599,chunk__65600,count__65601,i__65602,el,seq__65599__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65599,chunk__65600,count__65601,i__65602,el,seq__65599__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65868__$1);


var G__65869 = cljs.core.next(seq__65599__$1);
var G__65870 = null;
var G__65871 = (0);
var G__65872 = (0);
seq__65599 = G__65869;
chunk__65600 = G__65870;
count__65601 = G__65871;
i__65602 = G__65872;
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
var G__65611 = arguments.length;
switch (G__65611) {
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
var seq__65613 = cljs.core.seq(events);
var chunk__65614 = null;
var count__65615 = (0);
var i__65616 = (0);
while(true){
if((i__65616 < count__65615)){
var vec__65625 = chunk__65614.cljs$core$IIndexed$_nth$arity$2(null,i__65616);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65625,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65625,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65874 = seq__65613;
var G__65875 = chunk__65614;
var G__65876 = count__65615;
var G__65877 = (i__65616 + (1));
seq__65613 = G__65874;
chunk__65614 = G__65875;
count__65615 = G__65876;
i__65616 = G__65877;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65613);
if(temp__5825__auto__){
var seq__65613__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65613__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65613__$1);
var G__65878 = cljs.core.chunk_rest(seq__65613__$1);
var G__65879 = c__5548__auto__;
var G__65880 = cljs.core.count(c__5548__auto__);
var G__65881 = (0);
seq__65613 = G__65878;
chunk__65614 = G__65879;
count__65615 = G__65880;
i__65616 = G__65881;
continue;
} else {
var vec__65630 = cljs.core.first(seq__65613__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65630,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65630,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65882 = cljs.core.next(seq__65613__$1);
var G__65883 = null;
var G__65884 = (0);
var G__65885 = (0);
seq__65613 = G__65882;
chunk__65614 = G__65883;
count__65615 = G__65884;
i__65616 = G__65885;
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
var seq__65633 = cljs.core.seq(styles);
var chunk__65634 = null;
var count__65635 = (0);
var i__65636 = (0);
while(true){
if((i__65636 < count__65635)){
var vec__65644 = chunk__65634.cljs$core$IIndexed$_nth$arity$2(null,i__65636);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65644,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65644,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65886 = seq__65633;
var G__65887 = chunk__65634;
var G__65888 = count__65635;
var G__65889 = (i__65636 + (1));
seq__65633 = G__65886;
chunk__65634 = G__65887;
count__65635 = G__65888;
i__65636 = G__65889;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65633);
if(temp__5825__auto__){
var seq__65633__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65633__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65633__$1);
var G__65890 = cljs.core.chunk_rest(seq__65633__$1);
var G__65891 = c__5548__auto__;
var G__65892 = cljs.core.count(c__5548__auto__);
var G__65893 = (0);
seq__65633 = G__65890;
chunk__65634 = G__65891;
count__65635 = G__65892;
i__65636 = G__65893;
continue;
} else {
var vec__65648 = cljs.core.first(seq__65633__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65648,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65648,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65894 = cljs.core.next(seq__65633__$1);
var G__65895 = null;
var G__65896 = (0);
var G__65897 = (0);
seq__65633 = G__65894;
chunk__65634 = G__65895;
count__65635 = G__65896;
i__65636 = G__65897;
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
var G__65651_65898 = key;
var G__65651_65899__$1 = (((G__65651_65898 instanceof cljs.core.Keyword))?G__65651_65898.fqn:null);
switch (G__65651_65899__$1) {
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
var ks_65901 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_65901,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_65901,"aria-");
}
})())){
el.setAttribute(ks_65901,value);
} else {
(el[ks_65901] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__65654){
var map__65655 = p__65654;
var map__65655__$1 = cljs.core.__destructure_map(map__65655);
var props = map__65655__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65655__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__65656 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65656,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65656,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65656,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__65659 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__65659,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__65659;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__65661 = arguments.length;
switch (G__65661) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__65662){
var vec__65663 = p__65662;
var seq__65664 = cljs.core.seq(vec__65663);
var first__65665 = cljs.core.first(seq__65664);
var seq__65664__$1 = cljs.core.next(seq__65664);
var nn = first__65665;
var first__65665__$1 = cljs.core.first(seq__65664__$1);
var seq__65664__$2 = cljs.core.next(seq__65664__$1);
var np = first__65665__$1;
var nc = seq__65664__$2;
var node = vec__65663;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65666 = nn;
var G__65667 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65666,G__65667) : create_fn.call(null,G__65666,G__65667));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65668 = nn;
var G__65669 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65668,G__65669) : create_fn.call(null,G__65668,G__65669));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__65670 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65670,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65670,(1),null);
var seq__65674_65903 = cljs.core.seq(node_children);
var chunk__65675_65904 = null;
var count__65676_65905 = (0);
var i__65677_65906 = (0);
while(true){
if((i__65677_65906 < count__65676_65905)){
var child_struct_65907 = chunk__65675_65904.cljs$core$IIndexed$_nth$arity$2(null,i__65677_65906);
var children_65908 = shadow.dom.dom_node(child_struct_65907);
if(cljs.core.seq_QMARK_(children_65908)){
var seq__65697_65909 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65908));
var chunk__65699_65910 = null;
var count__65700_65911 = (0);
var i__65701_65912 = (0);
while(true){
if((i__65701_65912 < count__65700_65911)){
var child_65913 = chunk__65699_65910.cljs$core$IIndexed$_nth$arity$2(null,i__65701_65912);
if(cljs.core.truth_(child_65913)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65913);


var G__65914 = seq__65697_65909;
var G__65915 = chunk__65699_65910;
var G__65916 = count__65700_65911;
var G__65917 = (i__65701_65912 + (1));
seq__65697_65909 = G__65914;
chunk__65699_65910 = G__65915;
count__65700_65911 = G__65916;
i__65701_65912 = G__65917;
continue;
} else {
var G__65918 = seq__65697_65909;
var G__65919 = chunk__65699_65910;
var G__65920 = count__65700_65911;
var G__65921 = (i__65701_65912 + (1));
seq__65697_65909 = G__65918;
chunk__65699_65910 = G__65919;
count__65700_65911 = G__65920;
i__65701_65912 = G__65921;
continue;
}
} else {
var temp__5825__auto___65922 = cljs.core.seq(seq__65697_65909);
if(temp__5825__auto___65922){
var seq__65697_65923__$1 = temp__5825__auto___65922;
if(cljs.core.chunked_seq_QMARK_(seq__65697_65923__$1)){
var c__5548__auto___65924 = cljs.core.chunk_first(seq__65697_65923__$1);
var G__65925 = cljs.core.chunk_rest(seq__65697_65923__$1);
var G__65926 = c__5548__auto___65924;
var G__65927 = cljs.core.count(c__5548__auto___65924);
var G__65928 = (0);
seq__65697_65909 = G__65925;
chunk__65699_65910 = G__65926;
count__65700_65911 = G__65927;
i__65701_65912 = G__65928;
continue;
} else {
var child_65929 = cljs.core.first(seq__65697_65923__$1);
if(cljs.core.truth_(child_65929)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65929);


var G__65930 = cljs.core.next(seq__65697_65923__$1);
var G__65931 = null;
var G__65932 = (0);
var G__65933 = (0);
seq__65697_65909 = G__65930;
chunk__65699_65910 = G__65931;
count__65700_65911 = G__65932;
i__65701_65912 = G__65933;
continue;
} else {
var G__65934 = cljs.core.next(seq__65697_65923__$1);
var G__65935 = null;
var G__65936 = (0);
var G__65937 = (0);
seq__65697_65909 = G__65934;
chunk__65699_65910 = G__65935;
count__65700_65911 = G__65936;
i__65701_65912 = G__65937;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65908);
}


var G__65938 = seq__65674_65903;
var G__65939 = chunk__65675_65904;
var G__65940 = count__65676_65905;
var G__65941 = (i__65677_65906 + (1));
seq__65674_65903 = G__65938;
chunk__65675_65904 = G__65939;
count__65676_65905 = G__65940;
i__65677_65906 = G__65941;
continue;
} else {
var temp__5825__auto___65942 = cljs.core.seq(seq__65674_65903);
if(temp__5825__auto___65942){
var seq__65674_65943__$1 = temp__5825__auto___65942;
if(cljs.core.chunked_seq_QMARK_(seq__65674_65943__$1)){
var c__5548__auto___65944 = cljs.core.chunk_first(seq__65674_65943__$1);
var G__65945 = cljs.core.chunk_rest(seq__65674_65943__$1);
var G__65946 = c__5548__auto___65944;
var G__65947 = cljs.core.count(c__5548__auto___65944);
var G__65948 = (0);
seq__65674_65903 = G__65945;
chunk__65675_65904 = G__65946;
count__65676_65905 = G__65947;
i__65677_65906 = G__65948;
continue;
} else {
var child_struct_65949 = cljs.core.first(seq__65674_65943__$1);
var children_65950 = shadow.dom.dom_node(child_struct_65949);
if(cljs.core.seq_QMARK_(children_65950)){
var seq__65703_65951 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65950));
var chunk__65705_65952 = null;
var count__65706_65953 = (0);
var i__65707_65954 = (0);
while(true){
if((i__65707_65954 < count__65706_65953)){
var child_65955 = chunk__65705_65952.cljs$core$IIndexed$_nth$arity$2(null,i__65707_65954);
if(cljs.core.truth_(child_65955)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65955);


var G__65956 = seq__65703_65951;
var G__65957 = chunk__65705_65952;
var G__65958 = count__65706_65953;
var G__65959 = (i__65707_65954 + (1));
seq__65703_65951 = G__65956;
chunk__65705_65952 = G__65957;
count__65706_65953 = G__65958;
i__65707_65954 = G__65959;
continue;
} else {
var G__65960 = seq__65703_65951;
var G__65961 = chunk__65705_65952;
var G__65962 = count__65706_65953;
var G__65963 = (i__65707_65954 + (1));
seq__65703_65951 = G__65960;
chunk__65705_65952 = G__65961;
count__65706_65953 = G__65962;
i__65707_65954 = G__65963;
continue;
}
} else {
var temp__5825__auto___65964__$1 = cljs.core.seq(seq__65703_65951);
if(temp__5825__auto___65964__$1){
var seq__65703_65965__$1 = temp__5825__auto___65964__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65703_65965__$1)){
var c__5548__auto___65966 = cljs.core.chunk_first(seq__65703_65965__$1);
var G__65967 = cljs.core.chunk_rest(seq__65703_65965__$1);
var G__65968 = c__5548__auto___65966;
var G__65969 = cljs.core.count(c__5548__auto___65966);
var G__65970 = (0);
seq__65703_65951 = G__65967;
chunk__65705_65952 = G__65968;
count__65706_65953 = G__65969;
i__65707_65954 = G__65970;
continue;
} else {
var child_65971 = cljs.core.first(seq__65703_65965__$1);
if(cljs.core.truth_(child_65971)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65971);


var G__65972 = cljs.core.next(seq__65703_65965__$1);
var G__65973 = null;
var G__65974 = (0);
var G__65975 = (0);
seq__65703_65951 = G__65972;
chunk__65705_65952 = G__65973;
count__65706_65953 = G__65974;
i__65707_65954 = G__65975;
continue;
} else {
var G__65976 = cljs.core.next(seq__65703_65965__$1);
var G__65977 = null;
var G__65978 = (0);
var G__65979 = (0);
seq__65703_65951 = G__65976;
chunk__65705_65952 = G__65977;
count__65706_65953 = G__65978;
i__65707_65954 = G__65979;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65950);
}


var G__65980 = cljs.core.next(seq__65674_65943__$1);
var G__65981 = null;
var G__65982 = (0);
var G__65983 = (0);
seq__65674_65903 = G__65980;
chunk__65675_65904 = G__65981;
count__65676_65905 = G__65982;
i__65677_65906 = G__65983;
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
var seq__65715 = cljs.core.seq(node);
var chunk__65716 = null;
var count__65717 = (0);
var i__65718 = (0);
while(true){
if((i__65718 < count__65717)){
var n = chunk__65716.cljs$core$IIndexed$_nth$arity$2(null,i__65718);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65984 = seq__65715;
var G__65985 = chunk__65716;
var G__65986 = count__65717;
var G__65987 = (i__65718 + (1));
seq__65715 = G__65984;
chunk__65716 = G__65985;
count__65717 = G__65986;
i__65718 = G__65987;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65715);
if(temp__5825__auto__){
var seq__65715__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65715__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65715__$1);
var G__65988 = cljs.core.chunk_rest(seq__65715__$1);
var G__65989 = c__5548__auto__;
var G__65990 = cljs.core.count(c__5548__auto__);
var G__65991 = (0);
seq__65715 = G__65988;
chunk__65716 = G__65989;
count__65717 = G__65990;
i__65718 = G__65991;
continue;
} else {
var n = cljs.core.first(seq__65715__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65992 = cljs.core.next(seq__65715__$1);
var G__65993 = null;
var G__65994 = (0);
var G__65995 = (0);
seq__65715 = G__65992;
chunk__65716 = G__65993;
count__65717 = G__65994;
i__65718 = G__65995;
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
var G__65720 = arguments.length;
switch (G__65720) {
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
var G__65724 = arguments.length;
switch (G__65724) {
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
var len__5749__auto___65999 = arguments.length;
var i__5750__auto___66000 = (0);
while(true){
if((i__5750__auto___66000 < len__5749__auto___65999)){
args__5755__auto__.push((arguments[i__5750__auto___66000]));

var G__66001 = (i__5750__auto___66000 + (1));
i__5750__auto___66000 = G__66001;
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
var seq__65726_66002 = cljs.core.seq(nodes);
var chunk__65727_66003 = null;
var count__65728_66004 = (0);
var i__65729_66005 = (0);
while(true){
if((i__65729_66005 < count__65728_66004)){
var node_66006 = chunk__65727_66003.cljs$core$IIndexed$_nth$arity$2(null,i__65729_66005);
fragment.appendChild(shadow.dom._to_dom(node_66006));


var G__66007 = seq__65726_66002;
var G__66008 = chunk__65727_66003;
var G__66009 = count__65728_66004;
var G__66010 = (i__65729_66005 + (1));
seq__65726_66002 = G__66007;
chunk__65727_66003 = G__66008;
count__65728_66004 = G__66009;
i__65729_66005 = G__66010;
continue;
} else {
var temp__5825__auto___66011 = cljs.core.seq(seq__65726_66002);
if(temp__5825__auto___66011){
var seq__65726_66012__$1 = temp__5825__auto___66011;
if(cljs.core.chunked_seq_QMARK_(seq__65726_66012__$1)){
var c__5548__auto___66013 = cljs.core.chunk_first(seq__65726_66012__$1);
var G__66014 = cljs.core.chunk_rest(seq__65726_66012__$1);
var G__66015 = c__5548__auto___66013;
var G__66016 = cljs.core.count(c__5548__auto___66013);
var G__66017 = (0);
seq__65726_66002 = G__66014;
chunk__65727_66003 = G__66015;
count__65728_66004 = G__66016;
i__65729_66005 = G__66017;
continue;
} else {
var node_66018 = cljs.core.first(seq__65726_66012__$1);
fragment.appendChild(shadow.dom._to_dom(node_66018));


var G__66019 = cljs.core.next(seq__65726_66012__$1);
var G__66020 = null;
var G__66021 = (0);
var G__66022 = (0);
seq__65726_66002 = G__66019;
chunk__65727_66003 = G__66020;
count__65728_66004 = G__66021;
i__65729_66005 = G__66022;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq65725){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65725));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65730_66023 = cljs.core.seq(scripts);
var chunk__65731_66024 = null;
var count__65732_66025 = (0);
var i__65733_66026 = (0);
while(true){
if((i__65733_66026 < count__65732_66025)){
var vec__65740_66027 = chunk__65731_66024.cljs$core$IIndexed$_nth$arity$2(null,i__65733_66026);
var script_tag_66028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65740_66027,(0),null);
var script_body_66029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65740_66027,(1),null);
eval(script_body_66029);


var G__66030 = seq__65730_66023;
var G__66031 = chunk__65731_66024;
var G__66032 = count__65732_66025;
var G__66033 = (i__65733_66026 + (1));
seq__65730_66023 = G__66030;
chunk__65731_66024 = G__66031;
count__65732_66025 = G__66032;
i__65733_66026 = G__66033;
continue;
} else {
var temp__5825__auto___66034 = cljs.core.seq(seq__65730_66023);
if(temp__5825__auto___66034){
var seq__65730_66035__$1 = temp__5825__auto___66034;
if(cljs.core.chunked_seq_QMARK_(seq__65730_66035__$1)){
var c__5548__auto___66036 = cljs.core.chunk_first(seq__65730_66035__$1);
var G__66037 = cljs.core.chunk_rest(seq__65730_66035__$1);
var G__66038 = c__5548__auto___66036;
var G__66039 = cljs.core.count(c__5548__auto___66036);
var G__66040 = (0);
seq__65730_66023 = G__66037;
chunk__65731_66024 = G__66038;
count__65732_66025 = G__66039;
i__65733_66026 = G__66040;
continue;
} else {
var vec__65743_66041 = cljs.core.first(seq__65730_66035__$1);
var script_tag_66042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65743_66041,(0),null);
var script_body_66043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65743_66041,(1),null);
eval(script_body_66043);


var G__66044 = cljs.core.next(seq__65730_66035__$1);
var G__66045 = null;
var G__66046 = (0);
var G__66047 = (0);
seq__65730_66023 = G__66044;
chunk__65731_66024 = G__66045;
count__65732_66025 = G__66046;
i__65733_66026 = G__66047;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__65746){
var vec__65747 = p__65746;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65747,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65747,(1),null);
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
var G__65751 = arguments.length;
switch (G__65751) {
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
var seq__65752 = cljs.core.seq(style_keys);
var chunk__65753 = null;
var count__65754 = (0);
var i__65755 = (0);
while(true){
if((i__65755 < count__65754)){
var it = chunk__65753.cljs$core$IIndexed$_nth$arity$2(null,i__65755);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66049 = seq__65752;
var G__66050 = chunk__65753;
var G__66051 = count__65754;
var G__66052 = (i__65755 + (1));
seq__65752 = G__66049;
chunk__65753 = G__66050;
count__65754 = G__66051;
i__65755 = G__66052;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__65752);
if(temp__5825__auto__){
var seq__65752__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65752__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__65752__$1);
var G__66053 = cljs.core.chunk_rest(seq__65752__$1);
var G__66054 = c__5548__auto__;
var G__66055 = cljs.core.count(c__5548__auto__);
var G__66056 = (0);
seq__65752 = G__66053;
chunk__65753 = G__66054;
count__65754 = G__66055;
i__65755 = G__66056;
continue;
} else {
var it = cljs.core.first(seq__65752__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66057 = cljs.core.next(seq__65752__$1);
var G__66058 = null;
var G__66059 = (0);
var G__66060 = (0);
seq__65752 = G__66057;
chunk__65753 = G__66058;
count__65754 = G__66059;
i__65755 = G__66060;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65757,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65761 = k65757;
var G__65761__$1 = (((G__65761 instanceof cljs.core.Keyword))?G__65761.fqn:null);
switch (G__65761__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65757,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65762){
var vec__65763 = p__65762;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65763,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65763,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65756){
var self__ = this;
var G__65756__$1 = this;
return (new cljs.core.RecordIter((0),G__65756__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65758,other65759){
var self__ = this;
var this65758__$1 = this;
return (((!((other65759 == null)))) && ((((this65758__$1.constructor === other65759.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65758__$1.x,other65759.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65758__$1.y,other65759.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65758__$1.__extmap,other65759.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65757){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65766 = k65757;
var G__65766__$1 = (((G__65766 instanceof cljs.core.Keyword))?G__65766.fqn:null);
switch (G__65766__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65757);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65756){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65767 = cljs.core.keyword_identical_QMARK_;
var expr__65768 = k__5332__auto__;
if(cljs.core.truth_((pred__65767.cljs$core$IFn$_invoke$arity$2 ? pred__65767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__65768) : pred__65767.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__65768)))){
return (new shadow.dom.Coordinate(G__65756,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65767.cljs$core$IFn$_invoke$arity$2 ? pred__65767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__65768) : pred__65767.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__65768)))){
return (new shadow.dom.Coordinate(self__.x,G__65756,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65756),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65756){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__65756,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__65760){
var extmap__5365__auto__ = (function (){var G__65770 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65760,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65760)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65770);
} else {
return G__65770;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__65760),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__65760),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k65772,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__65776 = k65772;
var G__65776__$1 = (((G__65776 instanceof cljs.core.Keyword))?G__65776.fqn:null);
switch (G__65776__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65772,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__65777){
var vec__65778 = p__65777;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65778,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65778,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65771){
var self__ = this;
var G__65771__$1 = this;
return (new cljs.core.RecordIter((0),G__65771__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65773,other65774){
var self__ = this;
var this65773__$1 = this;
return (((!((other65774 == null)))) && ((((this65773__$1.constructor === other65774.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65773__$1.w,other65774.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65773__$1.h,other65774.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65773__$1.__extmap,other65774.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k65772){
var self__ = this;
var this__5330__auto____$1 = this;
var G__65781 = k65772;
var G__65781__$1 = (((G__65781 instanceof cljs.core.Keyword))?G__65781.fqn:null);
switch (G__65781__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65772);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__65771){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__65782 = cljs.core.keyword_identical_QMARK_;
var expr__65783 = k__5332__auto__;
if(cljs.core.truth_((pred__65782.cljs$core$IFn$_invoke$arity$2 ? pred__65782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__65783) : pred__65782.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__65783)))){
return (new shadow.dom.Size(G__65771,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65782.cljs$core$IFn$_invoke$arity$2 ? pred__65782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__65783) : pred__65782.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__65783)))){
return (new shadow.dom.Size(self__.w,G__65771,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__65771),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__65771){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65771,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65775){
var extmap__5365__auto__ = (function (){var G__65785 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65775,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65775)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65785);
} else {
return G__65785;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65775),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65775),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var G__66065 = (i + (1));
var G__66066 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__66065;
ret = G__66066;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65790){
var vec__65791 = p__65790;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65791,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65791,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65795 = arguments.length;
switch (G__65795) {
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
var G__66068 = ps;
var G__66069 = (i + (1));
el__$1 = G__66068;
i = G__66069;
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
var vec__65796 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65796,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65796,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65796,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65799_66070 = cljs.core.seq(props);
var chunk__65800_66071 = null;
var count__65801_66072 = (0);
var i__65802_66073 = (0);
while(true){
if((i__65802_66073 < count__65801_66072)){
var vec__65809_66074 = chunk__65800_66071.cljs$core$IIndexed$_nth$arity$2(null,i__65802_66073);
var k_66075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65809_66074,(0),null);
var v_66076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65809_66074,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_66075);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66075),v_66076);


var G__66077 = seq__65799_66070;
var G__66078 = chunk__65800_66071;
var G__66079 = count__65801_66072;
var G__66080 = (i__65802_66073 + (1));
seq__65799_66070 = G__66077;
chunk__65800_66071 = G__66078;
count__65801_66072 = G__66079;
i__65802_66073 = G__66080;
continue;
} else {
var temp__5825__auto___66081 = cljs.core.seq(seq__65799_66070);
if(temp__5825__auto___66081){
var seq__65799_66082__$1 = temp__5825__auto___66081;
if(cljs.core.chunked_seq_QMARK_(seq__65799_66082__$1)){
var c__5548__auto___66083 = cljs.core.chunk_first(seq__65799_66082__$1);
var G__66084 = cljs.core.chunk_rest(seq__65799_66082__$1);
var G__66085 = c__5548__auto___66083;
var G__66086 = cljs.core.count(c__5548__auto___66083);
var G__66087 = (0);
seq__65799_66070 = G__66084;
chunk__65800_66071 = G__66085;
count__65801_66072 = G__66086;
i__65802_66073 = G__66087;
continue;
} else {
var vec__65812_66088 = cljs.core.first(seq__65799_66082__$1);
var k_66089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65812_66088,(0),null);
var v_66090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65812_66088,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_66089);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66089),v_66090);


var G__66091 = cljs.core.next(seq__65799_66082__$1);
var G__66092 = null;
var G__66093 = (0);
var G__66094 = (0);
seq__65799_66070 = G__66091;
chunk__65800_66071 = G__66092;
count__65801_66072 = G__66093;
i__65802_66073 = G__66094;
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
var vec__65816 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65816,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65816,(1),null);
var seq__65819_66095 = cljs.core.seq(node_children);
var chunk__65821_66096 = null;
var count__65822_66097 = (0);
var i__65823_66098 = (0);
while(true){
if((i__65823_66098 < count__65822_66097)){
var child_struct_66099 = chunk__65821_66096.cljs$core$IIndexed$_nth$arity$2(null,i__65823_66098);
if((!((child_struct_66099 == null)))){
if(typeof child_struct_66099 === 'string'){
var text_66100 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66100),child_struct_66099].join(''));
} else {
var children_66101 = shadow.dom.svg_node(child_struct_66099);
if(cljs.core.seq_QMARK_(children_66101)){
var seq__65837_66102 = cljs.core.seq(children_66101);
var chunk__65839_66103 = null;
var count__65840_66104 = (0);
var i__65841_66105 = (0);
while(true){
if((i__65841_66105 < count__65840_66104)){
var child_66106 = chunk__65839_66103.cljs$core$IIndexed$_nth$arity$2(null,i__65841_66105);
if(cljs.core.truth_(child_66106)){
node.appendChild(child_66106);


var G__66107 = seq__65837_66102;
var G__66108 = chunk__65839_66103;
var G__66109 = count__65840_66104;
var G__66110 = (i__65841_66105 + (1));
seq__65837_66102 = G__66107;
chunk__65839_66103 = G__66108;
count__65840_66104 = G__66109;
i__65841_66105 = G__66110;
continue;
} else {
var G__66111 = seq__65837_66102;
var G__66112 = chunk__65839_66103;
var G__66113 = count__65840_66104;
var G__66114 = (i__65841_66105 + (1));
seq__65837_66102 = G__66111;
chunk__65839_66103 = G__66112;
count__65840_66104 = G__66113;
i__65841_66105 = G__66114;
continue;
}
} else {
var temp__5825__auto___66115 = cljs.core.seq(seq__65837_66102);
if(temp__5825__auto___66115){
var seq__65837_66116__$1 = temp__5825__auto___66115;
if(cljs.core.chunked_seq_QMARK_(seq__65837_66116__$1)){
var c__5548__auto___66117 = cljs.core.chunk_first(seq__65837_66116__$1);
var G__66118 = cljs.core.chunk_rest(seq__65837_66116__$1);
var G__66119 = c__5548__auto___66117;
var G__66120 = cljs.core.count(c__5548__auto___66117);
var G__66121 = (0);
seq__65837_66102 = G__66118;
chunk__65839_66103 = G__66119;
count__65840_66104 = G__66120;
i__65841_66105 = G__66121;
continue;
} else {
var child_66122 = cljs.core.first(seq__65837_66116__$1);
if(cljs.core.truth_(child_66122)){
node.appendChild(child_66122);


var G__66123 = cljs.core.next(seq__65837_66116__$1);
var G__66124 = null;
var G__66125 = (0);
var G__66126 = (0);
seq__65837_66102 = G__66123;
chunk__65839_66103 = G__66124;
count__65840_66104 = G__66125;
i__65841_66105 = G__66126;
continue;
} else {
var G__66127 = cljs.core.next(seq__65837_66116__$1);
var G__66128 = null;
var G__66129 = (0);
var G__66130 = (0);
seq__65837_66102 = G__66127;
chunk__65839_66103 = G__66128;
count__65840_66104 = G__66129;
i__65841_66105 = G__66130;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66101);
}
}


var G__66131 = seq__65819_66095;
var G__66132 = chunk__65821_66096;
var G__66133 = count__65822_66097;
var G__66134 = (i__65823_66098 + (1));
seq__65819_66095 = G__66131;
chunk__65821_66096 = G__66132;
count__65822_66097 = G__66133;
i__65823_66098 = G__66134;
continue;
} else {
var G__66135 = seq__65819_66095;
var G__66136 = chunk__65821_66096;
var G__66137 = count__65822_66097;
var G__66138 = (i__65823_66098 + (1));
seq__65819_66095 = G__66135;
chunk__65821_66096 = G__66136;
count__65822_66097 = G__66137;
i__65823_66098 = G__66138;
continue;
}
} else {
var temp__5825__auto___66139 = cljs.core.seq(seq__65819_66095);
if(temp__5825__auto___66139){
var seq__65819_66140__$1 = temp__5825__auto___66139;
if(cljs.core.chunked_seq_QMARK_(seq__65819_66140__$1)){
var c__5548__auto___66141 = cljs.core.chunk_first(seq__65819_66140__$1);
var G__66142 = cljs.core.chunk_rest(seq__65819_66140__$1);
var G__66143 = c__5548__auto___66141;
var G__66144 = cljs.core.count(c__5548__auto___66141);
var G__66145 = (0);
seq__65819_66095 = G__66142;
chunk__65821_66096 = G__66143;
count__65822_66097 = G__66144;
i__65823_66098 = G__66145;
continue;
} else {
var child_struct_66146 = cljs.core.first(seq__65819_66140__$1);
if((!((child_struct_66146 == null)))){
if(typeof child_struct_66146 === 'string'){
var text_66147 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66147),child_struct_66146].join(''));
} else {
var children_66148 = shadow.dom.svg_node(child_struct_66146);
if(cljs.core.seq_QMARK_(children_66148)){
var seq__65843_66149 = cljs.core.seq(children_66148);
var chunk__65845_66150 = null;
var count__65846_66151 = (0);
var i__65847_66152 = (0);
while(true){
if((i__65847_66152 < count__65846_66151)){
var child_66153 = chunk__65845_66150.cljs$core$IIndexed$_nth$arity$2(null,i__65847_66152);
if(cljs.core.truth_(child_66153)){
node.appendChild(child_66153);


var G__66154 = seq__65843_66149;
var G__66155 = chunk__65845_66150;
var G__66156 = count__65846_66151;
var G__66157 = (i__65847_66152 + (1));
seq__65843_66149 = G__66154;
chunk__65845_66150 = G__66155;
count__65846_66151 = G__66156;
i__65847_66152 = G__66157;
continue;
} else {
var G__66158 = seq__65843_66149;
var G__66159 = chunk__65845_66150;
var G__66160 = count__65846_66151;
var G__66161 = (i__65847_66152 + (1));
seq__65843_66149 = G__66158;
chunk__65845_66150 = G__66159;
count__65846_66151 = G__66160;
i__65847_66152 = G__66161;
continue;
}
} else {
var temp__5825__auto___66162__$1 = cljs.core.seq(seq__65843_66149);
if(temp__5825__auto___66162__$1){
var seq__65843_66163__$1 = temp__5825__auto___66162__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65843_66163__$1)){
var c__5548__auto___66164 = cljs.core.chunk_first(seq__65843_66163__$1);
var G__66165 = cljs.core.chunk_rest(seq__65843_66163__$1);
var G__66166 = c__5548__auto___66164;
var G__66167 = cljs.core.count(c__5548__auto___66164);
var G__66168 = (0);
seq__65843_66149 = G__66165;
chunk__65845_66150 = G__66166;
count__65846_66151 = G__66167;
i__65847_66152 = G__66168;
continue;
} else {
var child_66169 = cljs.core.first(seq__65843_66163__$1);
if(cljs.core.truth_(child_66169)){
node.appendChild(child_66169);


var G__66170 = cljs.core.next(seq__65843_66163__$1);
var G__66171 = null;
var G__66172 = (0);
var G__66173 = (0);
seq__65843_66149 = G__66170;
chunk__65845_66150 = G__66171;
count__65846_66151 = G__66172;
i__65847_66152 = G__66173;
continue;
} else {
var G__66174 = cljs.core.next(seq__65843_66163__$1);
var G__66175 = null;
var G__66176 = (0);
var G__66177 = (0);
seq__65843_66149 = G__66174;
chunk__65845_66150 = G__66175;
count__65846_66151 = G__66176;
i__65847_66152 = G__66177;
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


var G__66178 = cljs.core.next(seq__65819_66140__$1);
var G__66179 = null;
var G__66180 = (0);
var G__66181 = (0);
seq__65819_66095 = G__66178;
chunk__65821_66096 = G__66179;
count__65822_66097 = G__66180;
i__65823_66098 = G__66181;
continue;
} else {
var G__66182 = cljs.core.next(seq__65819_66140__$1);
var G__66183 = null;
var G__66184 = (0);
var G__66185 = (0);
seq__65819_66095 = G__66182;
chunk__65821_66096 = G__66183;
count__65822_66097 = G__66184;
i__65823_66098 = G__66185;
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
var len__5749__auto___66186 = arguments.length;
var i__5750__auto___66187 = (0);
while(true){
if((i__5750__auto___66187 < len__5749__auto___66186)){
args__5755__auto__.push((arguments[i__5750__auto___66187]));

var G__66188 = (i__5750__auto___66187 + (1));
i__5750__auto___66187 = G__66188;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq65849){
var G__65850 = cljs.core.first(seq65849);
var seq65849__$1 = cljs.core.next(seq65849);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65850,seq65849__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
