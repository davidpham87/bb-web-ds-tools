goog.provide('bb_web_ds_tools.events.journeys');
bb_web_ds_tools.events.journeys.nav_event = new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557);
/**
 * Map of user-triggerable events to their argument generators and route metadata.
 */
bb_web_ds_tools.events.journeys.events = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("honeysql","update-input","honeysql/update-input",1611103297),new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","set-code","bb-web-ds-tools.views.pyodide/set-code",-948832189),new cljs.core.Keyword("bb-web-ds-tools.views.gemma","send-message","bb-web-ds-tools.views.gemma/send-message",1070168611),new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507),new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-new-dataset-state","bb-web-ds-tools.views.datasets/update-new-dataset-state",-1930125405),new cljs.core.Keyword("malli","parse-schema-and-generate","malli/parse-schema-and-generate",-173808732),new cljs.core.Keyword("malli","set-generation-samples","malli/set-generation-samples",-986788539),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","save-config","bb-web-ds-tools.views.vega-lite/save-config",1789695845),new cljs.core.Keyword("malli","update-inference-input","malli/update-inference-input",-2041829946),new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601),new cljs.core.Keyword("malli","set-active-tab","malli/set-active-tab",227854602),new cljs.core.Keyword("malli","save-dataset","malli/save-dataset",1216700074),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-config-mode","bb-web-ds-tools.views.vega-lite/set-config-mode",1935491083),new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-dataset-name","bb-web-ds-tools.views.datasets/update-dataset-name",798576715),new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557),new cljs.core.Keyword("bb-web-ds-tools.views.app-db","remove-watch-path","bb-web-ds-tools.views.app-db/remove-watch-path",178630062),new cljs.core.Keyword("malli","infer-schema","malli/infer-schema",-2069021170),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","import-dataset","bb-web-ds-tools.views.vega-lite/import-dataset",1691198254),new cljs.core.Keyword("malli","load-dataset","malli/load-dataset",1165029264),new cljs.core.Keyword("bb-web-ds-tools.views.gemma","load-model","bb-web-ds-tools.views.gemma/load-model",595672016),new cljs.core.Keyword("malli","validate","malli/validate",-313382926),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","run-code","bb-web-ds-tools.views.r-repl/run-code",-1991503277),new cljs.core.Keyword("malli","set-generation-format","malli/set-generation-format",-404570060),new cljs.core.Keyword("bb-web-ds-tools.views.repl","eval-code","bb-web-ds-tools.views.repl/eval-code",1526213909),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-format","bb-web-ds-tools.views.vega-lite/set-format",600148309),new cljs.core.Keyword("malli","set-input-format","malli/set-input-format",1977658647),new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-code","bb-web-ds-tools.views.r-repl/set-code",-1945147945),new cljs.core.Keyword("bb-web-ds-tools.views.datasets","delete-dataset","bb-web-ds-tools.views.datasets/delete-dataset",243110744),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-config-input","bb-web-ds-tools.views.vega-lite/set-config-input",1175394425),new cljs.core.Keyword("honeysql","convert-to-sql","honeysql/convert-to-sql",1363941562),new cljs.core.Keyword("malli","transform-json","malli/transform-json",-1883425606),new cljs.core.Keyword("bb-web-ds-tools.views.editor","save-code","bb-web-ds-tools.views.editor/save-code",1365207386),new cljs.core.Keyword("bb-web-ds-tools.views.app-db","add-watch-path","bb-web-ds-tools.views.app-db/add-watch-path",1822864858),new cljs.core.Keyword("bb-web-ds-tools.views.datasets","set-active-dataset-id","bb-web-ds-tools.views.datasets/set-active-dataset-id",1361188762),new cljs.core.Keyword("bb-web-ds-tools.views.datasets","add-dataset","bb-web-ds-tools.views.datasets/add-dataset",1462625692),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-active-config-name","bb-web-ds-tools.views.vega-lite/set-active-config-name",-1337470050),new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-data-input","bb-web-ds-tools.views.vega-lite/set-data-input",672681982)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"code","code",1586293142)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"gemma","gemma",2017704848)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(100)], null)], null)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"int","int",-1741416922),cljs.core.keyword_QMARK_,new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"inference","inference",1425333267),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"json-schema","json-schema",389191695)], null)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"landing-page","landing-page",1687415187),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"gemma","gemma",2017704848),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"changelog","changelog",-435725878),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"global","global",93595047)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.keyword_QMARK_], null)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"gemma","gemma",2017704848)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"code","code",1586293142)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"json","json",1279968570)], null)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"code","code",1586293142)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"tsv","tsv",-1254214356)], null)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"json","json",1279968570)], null)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"code","code",1586293142)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"code","code",1586293142)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.keyword_QMARK_], null)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args-gen","args-gen",305577864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null)]);
bb_web_ds_tools.events.journeys.round_2 = (function bb_web_ds_tools$events$journeys$round_2(n){
return (Math.round((n * 100.0)) / 100.0);
});
bb_web_ds_tools.events.journeys.normalize_weights = (function bb_web_ds_tools$events$journeys$normalize_weights(weights){
var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(weights));
if((total === (0))){
return weights;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57338){
var vec__57339 = p__57338;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57339,(0),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57339,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,bb_web_ds_tools.events.journeys.round_2((w / total))], null);
}),weights));
}
});
bb_web_ds_tools.events.journeys.get_heuristic_weight = (function bb_web_ds_tools$events$journeys$get_heuristic_weight(event){
var n = cljs.core.name(event);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,bb_web_ds_tools.events.journeys.nav_event)){
return 0.05;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword("malli","update-schema-text","malli/update-schema-text",1159069507))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword("malli","update-inference-input","malli/update-inference-input",-2041829946))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword("honeysql","update-input","honeysql/update-input",1611103297))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword("bb-web-ds-tools.views.r-repl","set-code","bb-web-ds-tools.views.r-repl/set-code",-1945147945))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword("bb-web-ds-tools.views.pyodide","set-code","bb-web-ds-tools.views.pyodide/set-code",-948832189))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-data-input","bb-web-ds-tools.views.vega-lite/set-data-input",672681982))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite","set-config-input","bb-web-ds-tools.views.vega-lite/set-config-input",1175394425))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-cell","bb-web-ds-tools.views.datasets/update-cell",-1975400601))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword("bb-web-ds-tools.views.datasets","update-new-dataset-state","bb-web-ds-tools.views.datasets/update-new-dataset-state",-1930125405))))))))))))))))))){
return 0.8;
} else {
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.re_find(/run-code/,n);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.re_find(/eval-code/,n);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = cljs.core.re_find(/generate/,n);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = cljs.core.re_find(/infer/,n);
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
var or__5025__auto____$4 = cljs.core.re_find(/validate/,n);
if(cljs.core.truth_(or__5025__auto____$4)){
return or__5025__auto____$4;
} else {
return cljs.core.re_find(/send-message/,n);
}
}
}
}
}
})())){
return 0.3;
} else {
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.re_find(/delete/,n);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.re_find(/save/,n);
}
})())){
return 0.05;
} else {
return 0.1;

}
}
}
}
});
/**
 * Directed graph where nodes are events and edges are maps of {next-event probability}.
 * Probabilities are normalized to sum to ~1.0.
 */
bb_web_ds_tools.events.journeys.fsm = (function (){var all_events = cljs.core.keys(bb_web_ds_tools.events.journeys.events);
var view_events = cljs.core.group_by(cljs.core.namespace,all_events);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (graph,event){
var ns = cljs.core.namespace(event);
var same_view = cljs.core.get.cljs$core$IFn$_invoke$arity$3(view_events,ns,cljs.core.PersistentVector.EMPTY);
var candidates = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(same_view),bb_web_ds_tools.events.journeys.nav_event);
var candidates__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,bb_web_ds_tools.events.journeys.nav_event))?cljs.core.set(all_events):candidates);
var raw_weights = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,evt){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,evt,bb_web_ds_tools.events.journeys.get_heuristic_weight(evt));
}),cljs.core.PersistentArrayMap.EMPTY,candidates__$1);
var weighted = bb_web_ds_tools.events.journeys.normalize_weights(raw_weights);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(graph,event,weighted);
}),cljs.core.PersistentArrayMap.EMPTY,all_events);
})();
/**
 * Selects a key from a map of {key weight} based on weights.
 */
bb_web_ds_tools.events.journeys.weighted_choice = (function bb_web_ds_tools$events$journeys$weighted_choice(weights){
var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(weights));
var r = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(total);
var opts = cljs.core.seq(weights);
var acc = (0);
while(true){
if(cljs.core.seq(opts)){
var vec__57344 = cljs.core.first(opts);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57344,(0),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57344,(1),null);
var acc__$1 = (acc + w);
if((r < acc__$1)){
return k;
} else {
var G__57370 = cljs.core.rest(opts);
var G__57371 = acc__$1;
opts = G__57370;
acc = G__57371;
continue;
}
} else {
return cljs.core.ffirst(weights);
}
break;
}
});
/**
 * Generates a lazy sequence of [event args] representing a user journey.
 * Arguments:
 *   fsm (map): The FSM graph (map of maps).
 *   events (map): The events definition map.
 *   opts (map): Optional configuration.
 *     :start-event (keyword) - The event to start with (default: navigate).
 *     :max-steps (int) - Limit the sequence (default: infinity).
 */
bb_web_ds_tools.events.journeys.generate_journey = (function bb_web_ds_tools$events$journeys$generate_journey(var_args){
var G__57348 = arguments.length;
switch (G__57348) {
case 2:
return bb_web_ds_tools.events.journeys.generate_journey.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bb_web_ds_tools.events.journeys.generate_journey.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bb_web_ds_tools.events.journeys.generate_journey.cljs$core$IFn$_invoke$arity$2 = (function (fsm,events){
return bb_web_ds_tools.events.journeys.generate_journey.cljs$core$IFn$_invoke$arity$3(fsm,events,cljs.core.PersistentArrayMap.EMPTY);
}));

(bb_web_ds_tools.events.journeys.generate_journey.cljs$core$IFn$_invoke$arity$3 = (function (fsm,events,p__57349){
var map__57350 = p__57349;
var map__57350__$1 = cljs.core.__destructure_map(map__57350);
var start_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57350__$1,new cljs.core.Keyword(null,"start-event","start-event",1795223119));
var max_steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57350__$1,new cljs.core.Keyword(null,"max-steps","max-steps",1553604741));
var start = (function (){var or__5025__auto__ = start_event;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return bb_web_ds_tools.events.journeys.nav_event;
}
})();
var step = (function bb_web_ds_tools$events$journeys$step(current_event,current_route,steps_taken){
return (new cljs.core.LazySeq(null,(function (){
if((((max_steps == null)) || ((steps_taken < max_steps)))){
var args = malli.generator.generate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"args-gen","args-gen",305577864).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(events,current_event)));
var new_route = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_event,bb_web_ds_tools.events.journeys.nav_event))?cljs.core.first(args):current_route);
var candidates_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fsm,current_event);
var valid_entries = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__57353){
var vec__57354 = p__57353;
var evt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57354,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57354,(1),null);
var evt_route = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(events,evt));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(evt,bb_web_ds_tools.events.journeys.nav_event)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(evt_route,new cljs.core.Keyword(null,"global","global",93595047))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(evt_route,new_route)))));
}),candidates_map);
var valid_candidates_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,valid_entries);
var next_event = ((cljs.core.seq(valid_candidates_map))?bb_web_ds_tools.events.journeys.weighted_choice(valid_candidates_map):null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_event,args], null),(cljs.core.truth_(next_event)?bb_web_ds_tools$events$journeys$step(next_event,new_route,(steps_taken + (1))):null));
} else {
return null;
}
}),null,null));
});
return step(start,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(events,start)),(0));
}));

(bb_web_ds_tools.events.journeys.generate_journey.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=bb_web_ds_tools.events.journeys.js.map
