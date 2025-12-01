goog.provide('bb_web_ds_tools.views.gemma');
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.views !== 'undefined') && (typeof bb_web_ds_tools.views.gemma !== 'undefined') && (typeof bb_web_ds_tools.views.gemma.llm_instance !== 'undefined')){
} else {
bb_web_ds_tools.views.gemma.llm_instance = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","load-model-fx","bb-web-ds-tools.views.gemma/load-model-fx",225161033),(function (model_url){
return shadow.js.shim.module$$mediapipe$tasks_genai.FilesetResolver.forGenAiTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai/wasm").then((function (genai_fileset){
return shadow.js.shim.module$$mediapipe$tasks_genai.LlmInference.createFromOptions(genai_fileset,({"baseOptions": ({"modelAssetPath": model_url})}));
})).then((function (llm){
cljs.core.reset_BANG_(bb_web_ds_tools.views.gemma.llm_instance,llm);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","model-loaded","bb-web-ds-tools.views.gemma/model-loaded",-265479602)], null));
})).catch((function (err){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","set-error","bb-web-ds-tools.views.gemma/set-error",1578779084),["Failed to load model: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join('')], null));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","generate-response-fx","bb-web-ds-tools.views.gemma/generate-response-fx",-476111213),(function (text){
try{var response = cljs.core.deref(bb_web_ds_tools.views.gemma.llm_instance).generateResponse(text);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","add-message","bb-web-ds-tools.views.gemma/add-message",-287683400),new cljs.core.Keyword(null,"model","model",331153215),response], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","set-loading","bb-web-ds-tools.views.gemma/set-loading",1961048351),false], null));
}catch (e37531){if((e37531 instanceof Error)){
var e = e37531;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","set-error","bb-web-ds-tools.views.gemma/set-error",1578779084),["Generation failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null));
} else {
throw e37531;

}
}}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","initialize","bb-web-ds-tools.views.gemma/initialize",1645538905),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"gemma","gemma",2017704848),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.Keyword("bb-web-ds-tools.views.gemma","gemma","bb-web-ds-tools.views.gemma/gemma",999339256),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"model-loaded?","model-loaded?",1625615782),false], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","set-loading","bb-web-ds-tools.views.gemma/set-loading",1961048351),(function (db,p__37535){
var vec__37536 = p__37535;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37536,(0),null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37536,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","gemma","bb-web-ds-tools.views.gemma/gemma",999339256),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),loading_QMARK_);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","set-error","bb-web-ds-tools.views.gemma/set-error",1578779084),(function (db,p__37539){
var vec__37540 = p__37539;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37540,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37540,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("bb-web-ds-tools.views.gemma","gemma","bb-web-ds-tools.views.gemma/gemma",999339256),cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"loading?","loading?",1905707049),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","model-loaded","bb-web-ds-tools.views.gemma/model-loaded",-265479602),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("bb-web-ds-tools.views.gemma","gemma","bb-web-ds-tools.views.gemma/gemma",999339256),cljs.core.assoc,new cljs.core.Keyword(null,"model-loaded?","model-loaded?",1625615782),true,new cljs.core.Keyword(null,"loading?","loading?",1905707049),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false,new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","add-message","bb-web-ds-tools.views.gemma/add-message",-287683400),(function (db,p__37543){
var vec__37544 = p__37543;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37544,(0),null);
var role = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37544,(1),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37544,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"gemma","gemma",2017704848),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"messages","messages",345434482)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),role,new cljs.core.Keyword(null,"content","content",15833224),text], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","load-model","bb-web-ds-tools.views.gemma/load-model",595672016),(function (p__37547,p__37548){
var map__37549 = p__37547;
var map__37549__$1 = cljs.core.__destructure_map(map__37549);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37549__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__37550 = p__37548;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37550,(0),null);
var model_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37550,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","gemma","bb-web-ds-tools.views.gemma/gemma",999339256),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","load-model-fx","bb-web-ds-tools.views.gemma/load-model-fx",225161033),model_url], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","send-message","bb-web-ds-tools.views.gemma/send-message",1070168611),(function (p__37553,p__37554){
var map__37555 = p__37553;
var map__37555__$1 = cljs.core.__destructure_map(map__37555);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37555__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__37556 = p__37554;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37556,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37556,(1),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.views.gemma.llm_instance))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"gemma","gemma",2017704848),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"messages","messages",345434482)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"content","content",15833224),text], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","gemma","bb-web-ds-tools.views.gemma/gemma",999339256),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","generate-response-fx","bb-web-ds-tools.views.gemma/generate-response-fx",-476111213),text], null)], null)], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","user-input-root","bb-web-ds-tools.views.gemma/user-input-root",1533408284),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","user-input","bb-web-ds-tools.core/user-input",1937733608)], null),(function (user_input,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(user_input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gemma","gemma",2017704848),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","component-root","bb-web-ds-tools.views.gemma/component-root",-1580948618),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("bb-web-ds-tools.views.gemma","gemma","bb-web-ds-tools.views.gemma/gemma",999339256).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","messages","bb-web-ds-tools.views.gemma/messages",-815148230),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","user-input-root","bb-web-ds-tools.views.gemma/user-input-root",1533408284)], null),(function (root){
return new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","loading?","bb-web-ds-tools.views.gemma/loading?",851422753),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","component-root","bb-web-ds-tools.views.gemma/component-root",-1580948618)], null),(function (root){
return new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","error","bb-web-ds-tools.views.gemma/error",-95351856),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","component-root","bb-web-ds-tools.views.gemma/component-root",-1580948618)], null),(function (root){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.gemma","model-loaded?","bb-web-ds-tools.views.gemma/model-loaded?",598946638),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","component-root","bb-web-ds-tools.views.gemma/component-root",-1580948618)], null),(function (root){
return new cljs.core.Keyword(null,"model-loaded?","model-loaded?",1625615782).cljs$core$IFn$_invoke$arity$1(root);
})], 0));
bb_web_ds_tools.views.gemma.model_loader = (function bb_web_ds_tools$views$gemma$model_loader(){
var loading_QMARK__sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","loading?","bb-web-ds-tools.views.gemma/loading?",851422753)], null));
var error_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","error","bb-web-ds-tools.views.gemma/error",-95351856)], null));
return (function (){
var loading_QMARK_ = cljs.core.deref(loading_QMARK__sub);
var error = cljs.core.deref(error_sub);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork.reagent.form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-values","initial-values",1392120293),new cljs.core.PersistentArrayMap(null, 1, ["url",""], null),new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),true,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p__37560){
var map__37561 = p__37560;
var map__37561__$1 = cljs.core.__destructure_map(map__37561);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37561__$1,new cljs.core.Keyword(null,"values","values",372645556));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","load-model","bb-web-ds-tools.views.gemma/load-model",595672016),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,"url")], null));
})], null),(function (p__37563){
var map__37565 = p__37563;
var map__37565__$1 = cljs.core.__destructure_map(map__37565);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37565__$1,new cljs.core.Keyword(null,"values","values",372645556));
var handle_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37565__$1,new cljs.core.Keyword(null,"handle-change","handle-change",741134083));
var handle_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37565__$1,new cljs.core.Keyword(null,"handle-blur","handle-blur",-546639264));
var handle_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37565__$1,new cljs.core.Keyword(null,"handle-submit","handle-submit",1732326917));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),handle_submit,new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-2xl mx-auto"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-bold text-[#f0dfaf] mb-2"], null),"Load Gemma Model"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[#dcdccc] mb-4 text-sm"], null),"Enter the URL to the .bin model file (e.g., from Kaggle or Hugging Face)."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"url",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Model URL (e.g. /gemma-2b-it-gpu-int4.bin)",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,"url"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),handle_blur,new cljs.core.Keyword(null,"class","class",-2030961996),"w-full bg-[#2f2f2f] text-[#dcdccc] border border-[#5f5f5f] rounded p-3 mb-4 focus:ring-2 focus:ring-[#8cd0d3] focus:outline-none"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),loading_QMARK_,new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null),(cljs.core.truth_(loading_QMARK_)?"Loading...":"Load Model")], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[#cc9393] mt-4 p-3 bg-[#3f3f3f] border border-[#cc9393] rounded"], null),error], null):null)], null)], null)], null);
})], null);
});
});
bb_web_ds_tools.views.gemma.chat_interface = (function bb_web_ds_tools$views$gemma$chat_interface(){
var messages_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","messages","bb-web-ds-tools.views.gemma/messages",-815148230)], null));
var loading_QMARK__sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","loading?","bb-web-ds-tools.views.gemma/loading?",851422753)], null));
return (function (){
var messages = cljs.core.deref(messages_sub);
var loading_QMARK_ = cljs.core.deref(loading_QMARK__sub);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork.reagent.form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-values","initial-values",1392120293),new cljs.core.PersistentArrayMap(null, 1, ["text",""], null),new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),true,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p__37572){
var map__37573 = p__37572;
var map__37573__$1 = cljs.core.__destructure_map(map__37573);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37573__$1,new cljs.core.Keyword(null,"values","values",372645556));
var reset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37573__$1,new cljs.core.Keyword(null,"reset","reset",-800929946));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","send-message","bb-web-ds-tools.views.gemma/send-message",1070168611),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,"text")], null));

return (reset.cljs$core$IFn$_invoke$arity$0 ? reset.cljs$core$IFn$_invoke$arity$0() : reset.call(null));
})], null),(function (p__37575){
var map__37576 = p__37575;
var map__37576__$1 = cljs.core.__destructure_map(map__37576);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37576__$1,new cljs.core.Keyword(null,"values","values",372645556));
var handle_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37576__$1,new cljs.core.Keyword(null,"handle-change","handle-change",741134083));
var handle_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37576__$1,new cljs.core.Keyword(null,"handle-blur","handle-blur",-546639264));
var handle_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37576__$1,new cljs.core.Keyword(null,"handle-submit","handle-submit",1732326917));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),handle_submit,new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-4xl mx-auto"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.messages","div.messages",-55661322),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-[#2f2f2f] border border-[#5f5f5f] rounded-lg p-4 h-[500px] overflow-y-auto mb-4 custom-scrollbar"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$gemma$chat_interface_$_iter__37578(s__37579){
return (new cljs.core.LazySeq(null,(function (){
var s__37579__$1 = s__37579;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37579__$1);
if(temp__5825__auto__){
var s__37579__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37579__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37579__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37581 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37580 = (0);
while(true){
if((i__37580 < size__5502__auto__)){
var vec__37584 = cljs.core._nth(c__5501__auto__,i__37580);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37584,(0),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37584,(1),null);
cljs.core.chunk_append(b__37581,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"class","class",-2030961996),["mb-4 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"user","user",1532431356)))?"text-right":"text-left")].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["inline-block px-4 py-2 rounded-lg max-w-[80%] ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"user","user",1532431356)))?"bg-[#7f9f7f] text-[#3f3f3f]":"bg-[#4f4f4f] text-[#dcdccc] border border-[#5f5f5f]")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs opacity-75 mb-1 font-bold"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"user","user",1532431356)))?"You":"Gemma")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(msg)], null)], null)], null));

var G__37606 = (i__37580 + (1));
i__37580 = G__37606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37581),bb_web_ds_tools$views$gemma$chat_interface_$_iter__37578(cljs.core.chunk_rest(s__37579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37581),null);
}
} else {
var vec__37587 = cljs.core.first(s__37579__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37587,(0),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37587,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"class","class",-2030961996),["mb-4 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"user","user",1532431356)))?"text-right":"text-left")].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["inline-block px-4 py-2 rounded-lg max-w-[80%] ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"user","user",1532431356)))?"bg-[#7f9f7f] text-[#3f3f3f]":"bg-[#4f4f4f] text-[#dcdccc] border border-[#5f5f5f]")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs opacity-75 mb-1 font-bold"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"user","user",1532431356)))?"You":"Gemma")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(msg)], null)], null)], null),bb_web_ds_tools$views$gemma$chat_interface_$_iter__37578(cljs.core.rest(s__37579__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,messages));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-area","div.input-area",1638466221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,"text"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),handle_blur,new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 bg-[#2f2f2f] text-[#dcdccc] border border-[#5f5f5f] rounded p-3 h-20 focus:ring-2 focus:ring-[#8cd0d3] focus:outline-none resize-none",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your message...",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),loading_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5025__auto__ = loading_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,"text"));
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"h-20 px-8"], null),"Send"], null)], null)], null)], null)], null);
})], null);
});
});
bb_web_ds_tools.views.gemma.panel = (function bb_web_ds_tools$views$gemma$panel(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","initialize","bb-web-ds-tools.views.gemma/initialize",1645538905)], null));

var loaded_QMARK__sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.gemma","model-loaded?","bb-web-ds-tools.views.gemma/model-loaded?",598946638)], null));
return (function (){
var loaded_QMARK_ = cljs.core.deref(loaded_QMARK__sub);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gemma-page","div.gemma-page",1923665236),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container mx-auto px-4 py-4"], null),(cljs.core.truth_(loaded_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.gemma.chat_interface], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.gemma.model_loader], null))], null);
});
});

//# sourceMappingURL=bb_web_ds_tools.views.gemma.js.map
