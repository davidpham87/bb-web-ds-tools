goog.provide('portal.runtime.json_buffer');
portal.runtime.json_buffer._shift = (function portal$runtime$json_buffer$_shift(this$){
return (this$.cljs$core$IFn$_invoke$arity$0 ? this$.cljs$core$IFn$_invoke$arity$0() : this$.call(null));
});
portal.runtime.json_buffer.shifter = (function portal$runtime$json_buffer$shifter(source){
var this$ = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(0)], null));
return (function (){
var n = this$.n;
var result = (source[n]);
(this$.n = (n + (1)));

return result;
});
});
portal.runtime.json_buffer.__GT_reader = (function portal$runtime$json_buffer$__GT_reader(data){
return portal.runtime.json_buffer.shifter(JSON.parse(data));
});
portal.runtime.json_buffer.push_null = (function portal$runtime$json_buffer$push_null(buffer){
var G__28693 = buffer;
G__28693.push(null);

return G__28693;
});
portal.runtime.json_buffer.push_bool = (function portal$runtime$json_buffer$push_bool(buffer,value){
var G__28694 = buffer;
G__28694.push(value);

return G__28694;
});
portal.runtime.json_buffer.push_long = (function portal$runtime$json_buffer$push_long(buffer,value){
var G__28695 = buffer;
G__28695.push(value);

return G__28695;
});
portal.runtime.json_buffer.push_double = (function portal$runtime$json_buffer$push_double(buffer,value){
var G__28696 = buffer;
G__28696.push(value);

return G__28696;
});
portal.runtime.json_buffer.push_string = (function portal$runtime$json_buffer$push_string(buffer,value){
var G__28697 = buffer;
G__28697.push(value);

return G__28697;
});
portal.runtime.json_buffer.push_value = (function portal$runtime$json_buffer$push_value(buffer,value){
if((value == null)){
return portal.runtime.json_buffer.push_null(buffer);
} else {
if(cljs.core.boolean_QMARK_(value)){
return portal.runtime.json_buffer.push_bool(buffer,value);
} else {
if(cljs.core.int_QMARK_(value)){
return portal.runtime.json_buffer.push_long(buffer,value);
} else {
if(cljs.core.double_QMARK_(value)){
return portal.runtime.json_buffer.push_double(buffer,value);
} else {
if(typeof value === 'string'){
return portal.runtime.json_buffer.push_string(buffer,value);
} else {
return null;
}
}
}
}
}
});
portal.runtime.json_buffer.next_null = (function portal$runtime$json_buffer$next_null(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.next_bool = (function portal$runtime$json_buffer$next_bool(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.next_long = (function portal$runtime$json_buffer$next_long(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.next_double = (function portal$runtime$json_buffer$next_double(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.next_string = (function portal$runtime$json_buffer$next_string(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.next_value = (function portal$runtime$json_buffer$next_value(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.with_buffer = (function portal$runtime$json_buffer$with_buffer(f,value){
return JSON.stringify((function (){var G__28702 = (new Array());
var G__28703 = value;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28702,G__28703) : f.call(null,G__28702,G__28703));
})());
});

//# sourceMappingURL=portal.runtime.json_buffer.js.map
