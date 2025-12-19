goog.provide('bb_web_ds_tools.utils.share');
/**
 * Encodes a state map using transit and lz-string compression.
 * 
 * Args:
 *   state (map): The state to encode.
 * 
 * Returns:
 *   string: Compressed encoded string.
 */
bb_web_ds_tools.utils.share.encode_state = (function bb_web_ds_tools$utils$share$encode_state(state){
try{var writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
var json_str = cognitect.transit.write(writer,state);
return shadow.js.shim.module$lz_string.compressToEncodedURIComponent(json_str);
}catch (e30394){var e = e30394;
console.error("Error encoding state:",e);

return null;
}});
/**
 * Decodes a compressed string back into a state map.
 * 
 * Args:
 *   s (string): The compressed encoded string.
 * 
 * Returns:
 *   map: The decoded state, or nil if invalid.
 */
bb_web_ds_tools.utils.share.decode_state = (function bb_web_ds_tools$utils$share$decode_state(s){
try{var json_str = shadow.js.shim.module$lz_string.decompressFromEncodedURIComponent(s);
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
if(cljs.core.truth_(json_str)){
return cognitect.transit.read(reader,json_str);
} else {
return null;
}
}catch (e30395){var e = e30395;
console.error("Error decoding state:",e);

return null;
}});

//# sourceMappingURL=bb_web_ds_tools.utils.share.js.map
