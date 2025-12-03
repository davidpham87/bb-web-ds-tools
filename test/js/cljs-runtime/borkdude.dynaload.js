goog.provide('borkdude.dynaload');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
borkdude.dynaload.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(borkdude.dynaload.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
(self__.cached = x);
}

return x;
}
}));

(borkdude.dynaload.LazyVar.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__45247 = (arguments.length - (1));
switch (G__45247) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (4):
return self__.cljs$core$IFn$_invoke$arity$4((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (5):
return self__.cljs$core$IFn$_invoke$arity$5((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case (6):
return self__.cljs$core$IFn$_invoke$arity$6((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case (7):
return self__.cljs$core$IFn$_invoke$arity$7((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case (8):
return self__.cljs$core$IFn$_invoke$arity$8((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case (9):
return self__.cljs$core$IFn$_invoke$arity$9((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case (10):
return self__.cljs$core$IFn$_invoke$arity$10((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case (11):
return self__.cljs$core$IFn$_invoke$arity$11((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case (12):
return self__.cljs$core$IFn$_invoke$arity$12((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case (13):
return self__.cljs$core$IFn$_invoke$arity$13((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case (14):
return self__.cljs$core$IFn$_invoke$arity$14((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case (15):
return self__.cljs$core$IFn$_invoke$arity$15((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case (16):
return self__.cljs$core$IFn$_invoke$arity$16((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case (17):
return self__.cljs$core$IFn$_invoke$arity$17((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case (18):
return self__.cljs$core$IFn$_invoke$arity$18((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
case (19):
return self__.cljs$core$IFn$_invoke$arity$19((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]));

break;
case (20):
return self__.cljs$core$IFn$_invoke$arity$20((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]));

break;
case (21):
return self__.cljs$core$IFn$_invoke$arity$21((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]),(arguments[(21)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(borkdude.dynaload.LazyVar.prototype.apply = (function (self__,args45246){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45246)));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var fexpr__45251 = cljs.core.deref(this$);
return (fexpr__45251.cljs$core$IFn$_invoke$arity$0 ? fexpr__45251.cljs$core$IFn$_invoke$arity$0() : fexpr__45251.call(null));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var fexpr__45252 = cljs.core.deref(this$);
return (fexpr__45252.cljs$core$IFn$_invoke$arity$1 ? fexpr__45252.cljs$core$IFn$_invoke$arity$1(a) : fexpr__45252.call(null,a));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var fexpr__45253 = cljs.core.deref(this$);
return (fexpr__45253.cljs$core$IFn$_invoke$arity$2 ? fexpr__45253.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__45253.call(null,a,b));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var fexpr__45254 = cljs.core.deref(this$);
return (fexpr__45254.cljs$core$IFn$_invoke$arity$3 ? fexpr__45254.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__45254.call(null,a,b,c));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var fexpr__45255 = cljs.core.deref(this$);
return (fexpr__45255.cljs$core$IFn$_invoke$arity$4 ? fexpr__45255.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__45255.call(null,a,b,c,d));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var fexpr__45256 = cljs.core.deref(this$);
return (fexpr__45256.cljs$core$IFn$_invoke$arity$5 ? fexpr__45256.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__45256.call(null,a,b,c,d,e));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var this$ = this;
var fexpr__45257 = cljs.core.deref(this$);
return (fexpr__45257.cljs$core$IFn$_invoke$arity$6 ? fexpr__45257.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : fexpr__45257.call(null,a,b,c,d,e,f__$1));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var this$ = this;
var fexpr__45258 = cljs.core.deref(this$);
return (fexpr__45258.cljs$core$IFn$_invoke$arity$7 ? fexpr__45258.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : fexpr__45258.call(null,a,b,c,d,e,f__$1,g));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var this$ = this;
var fexpr__45259 = cljs.core.deref(this$);
return (fexpr__45259.cljs$core$IFn$_invoke$arity$8 ? fexpr__45259.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : fexpr__45259.call(null,a,b,c,d,e,f__$1,g,h));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var this$ = this;
var fexpr__45260 = cljs.core.deref(this$);
return (fexpr__45260.cljs$core$IFn$_invoke$arity$9 ? fexpr__45260.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : fexpr__45260.call(null,a,b,c,d,e,f__$1,g,h,i));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var this$ = this;
var fexpr__45261 = cljs.core.deref(this$);
return (fexpr__45261.cljs$core$IFn$_invoke$arity$10 ? fexpr__45261.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : fexpr__45261.call(null,a,b,c,d,e,f__$1,g,h,i,j));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var this$ = this;
var fexpr__45262 = cljs.core.deref(this$);
return (fexpr__45262.cljs$core$IFn$_invoke$arity$11 ? fexpr__45262.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : fexpr__45262.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var fexpr__45263 = cljs.core.deref(this$);
return (fexpr__45263.cljs$core$IFn$_invoke$arity$12 ? fexpr__45263.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : fexpr__45263.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
var fexpr__45264 = cljs.core.deref(this$);
return (fexpr__45264.cljs$core$IFn$_invoke$arity$13 ? fexpr__45264.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : fexpr__45264.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
var fexpr__45265 = cljs.core.deref(this$);
return (fexpr__45265.cljs$core$IFn$_invoke$arity$14 ? fexpr__45265.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : fexpr__45265.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
var fexpr__45266 = cljs.core.deref(this$);
return (fexpr__45266.cljs$core$IFn$_invoke$arity$15 ? fexpr__45266.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : fexpr__45266.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
var fexpr__45267 = cljs.core.deref(this$);
return (fexpr__45267.cljs$core$IFn$_invoke$arity$16 ? fexpr__45267.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : fexpr__45267.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
var fexpr__45268 = cljs.core.deref(this$);
return (fexpr__45268.cljs$core$IFn$_invoke$arity$17 ? fexpr__45268.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : fexpr__45268.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
var fexpr__45269 = cljs.core.deref(this$);
return (fexpr__45269.cljs$core$IFn$_invoke$arity$18 ? fexpr__45269.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__45269.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var fexpr__45270 = cljs.core.deref(this$);
return (fexpr__45270.cljs$core$IFn$_invoke$arity$19 ? fexpr__45270.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__45270.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var fexpr__45271 = cljs.core.deref(this$);
return (fexpr__45271.cljs$core$IFn$_invoke$arity$20 ? fexpr__45271.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__45271.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
}));

(borkdude.dynaload.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(borkdude.dynaload.LazyVar.cljs$lang$type = true);

(borkdude.dynaload.LazyVar.cljs$lang$ctorStr = "borkdude.dynaload/LazyVar");

(borkdude.dynaload.LazyVar.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"borkdude.dynaload/LazyVar");
}));

/**
 * Positional factory function for borkdude.dynaload/LazyVar.
 */
borkdude.dynaload.__GT_LazyVar = (function borkdude$dynaload$__GT_LazyVar(f,cached){
return (new borkdude.dynaload.LazyVar(f,cached));
});


//# sourceMappingURL=borkdude.dynaload.js.map
