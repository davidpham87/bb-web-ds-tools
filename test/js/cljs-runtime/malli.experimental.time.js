goog.provide('malli.experimental.time');
malli.experimental.time.Period = shadow.js.shim.module$$js_joda$core.Period;

malli.experimental.time.Instant = shadow.js.shim.module$$js_joda$core.Instant;

malli.experimental.time.Duration = shadow.js.shim.module$$js_joda$core.Duration;

malli.experimental.time.LocalDate = shadow.js.shim.module$$js_joda$core.LocalDate;

malli.experimental.time.LocalTime = shadow.js.shim.module$$js_joda$core.LocalTime;

malli.experimental.time.ZonedDateTime = shadow.js.shim.module$$js_joda$core.ZonedDateTime;

malli.experimental.time.LocalDateTime = shadow.js.shim.module$$js_joda$core.LocalDateTime;

malli.experimental.time.MonthDay = shadow.js.shim.module$$js_joda$core.MonthDay;

malli.experimental.time.Year = shadow.js.shim.module$$js_joda$core.Year;

malli.experimental.time.YearMonth = shadow.js.shim.module$$js_joda$core.YearMonth;

malli.experimental.time.ZoneId = shadow.js.shim.module$$js_joda$core.ZoneId;

malli.experimental.time.DayOfWeek = shadow.js.shim.module$$js_joda$core.DayOfWeek;

malli.experimental.time.Month = shadow.js.shim.module$$js_joda$core.Month;

malli.experimental.time.Clock = shadow.js.shim.module$$js_joda$core.Clock;

malli.experimental.time.ZoneOffset = shadow.js.shim.module$$js_joda$core.ZoneOffset;

malli.experimental.time.OffsetDateTime = shadow.js.shim.module$$js_joda$core.OffsetDateTime;

malli.experimental.time.OffsetTime = shadow.js.shim.module$$js_joda$core.OffsetTime;

malli.experimental.time.TemporalAccessor = shadow.js.shim.module$$js_joda$core.TemporalAccessor;

malli.experimental.time.TemporalQuery = shadow.js.shim.module$$js_joda$core.TemporalQuery;

malli.experimental.time.DateTimeFormatter = shadow.js.shim.module$$js_joda$core.DateTimeFormatter;
malli.experimental.time._LT__EQ_ = (function malli$experimental$time$_LT__EQ_(x,y){
return (!((x.compareTo(y) > (0))));
});
/**
 * Periods are not comparable in the java Comparable sense, instead this performs simple units-by-units comparison.
 * So a period of 1 year will always compare greater than a period of 13 months and similar for days and months.
 */
malli.experimental.time.compare_periods = (function malli$experimental$time$compare_periods(p1,p2){
var years1 = p1.years();
var years2 = p2.years();
var months1 = p1.months();
var months2 = p2.months();
var days1 = p1.days();
var days2 = p2.days();
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(years1,years2)))){
return (years1 - years2);
} else {
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(months1,months2)))){
return (months1 - months2);
} else {
return (days1 - days2);

}
}
});
malli.experimental.time._min_max_pred = (function malli$experimental$time$_min_max_pred(_){
return (function (p__60966){
var map__60967 = p__60966;
var map__60967__$1 = cljs.core.__destructure_map(map__60967);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60967__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60967__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.not((function (){var or__5025__auto__ = min;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return max;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
return max;
} else {
return and__5023__auto__;
}
})())){
if((((min instanceof malli.experimental.time.Period)) && ((max instanceof malli.experimental.time.Period)))){
return (function (x){
return (((!((malli.experimental.time.compare_periods(x,max) > (0))))) && ((!((malli.experimental.time.compare_periods(min,x) > (0))))));
});
} else {
return (function (x){
return ((malli.experimental.time._LT__EQ_(x,max)) && (malli.experimental.time._LT__EQ_(min,x)));
});
}
} else {
if(cljs.core.truth_(min)){
return (function (x){
if((min instanceof malli.experimental.time.Period)){
return (!((malli.experimental.time.compare_periods(min,x) > (0))));
} else {
return malli.experimental.time._LT__EQ_(min,x);
}
});
} else {
if(cljs.core.truth_(max)){
return (function (x){
if((max instanceof malli.experimental.time.Period)){
return (!((malli.experimental.time.compare_periods(x,max) > (0))));
} else {
return malli.experimental.time._LT__EQ_(x,max);
}
});
} else {
return null;
}
}
}
}
});
});
malli.experimental.time._temporal_schema = (function malli$experimental$time$_temporal_schema(p__60973){
var map__60974 = p__60973;
var map__60974__$1 = cljs.core.__destructure_map(map__60974);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60974__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60974__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var type_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60974__$1,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126));
return malli.core._simple_schema((function (){var G__60976 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"pred","pred",1927423397),(function malli$experimental$time$_temporal_schema_$_pred(x){
return (x instanceof class$);
}),new cljs.core.Keyword(null,"property-pred","property-pred",1813304729),malli.experimental.time._min_max_pred(null)], null);
if(cljs.core.truth_(type_properties)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60976,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),type_properties);
} else {
return G__60976;
}
})());
});
malli.experimental.time.createTemporalQuery = (function malli$experimental$time$createTemporalQuery(f){
var parent = (new malli.experimental.time.TemporalQuery(""));
var query = Object.create(parent);
(query.queryFrom = (function (t){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(t) : f.call(null,t));
}));

return query;
});
malli.experimental.time._duration_schema = (function malli$experimental$time$_duration_schema(){
return malli.experimental.time._temporal_schema(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("time","duration","time/duration",1380494101),new cljs.core.Keyword(null,"class","class",-2030961996),malli.experimental.time.Duration], null));
});
malli.experimental.time._period_schema = (function malli$experimental$time$_period_schema(){
return malli.experimental.time._temporal_schema(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("time","period","time/period",-348896626),new cljs.core.Keyword(null,"class","class",-2030961996),malli.experimental.time.Period], null));
});
malli.experimental.time._instant_schema = (function malli$experimental$time$_instant_schema(){
return malli.experimental.time._temporal_schema(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("time","instant","time/instant",641198777),new cljs.core.Keyword(null,"class","class",-2030961996),malli.experimental.time.Instant], null));
});
malli.experimental.time._local_date_schema = (function malli$experimental$time$_local_date_schema(){
return malli.experimental.time._temporal_schema(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("time","local-date","time/local-date",1831222439),new cljs.core.Keyword(null,"class","class",-2030961996),malli.experimental.time.LocalDate,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),malli.experimental.time.LocalDate.MIN,new cljs.core.Keyword(null,"max","max",61366548),malli.experimental.time.LocalDate.MAX], null)], null));
});
malli.experimental.time._local_time_schema = (function malli$experimental$time$_local_time_schema(){
return malli.experimental.time._temporal_schema(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("time","local-time","time/local-time",-1873708589),new cljs.core.Keyword(null,"class","class",-2030961996),malli.experimental.time.LocalTime,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),malli.experimental.time.LocalTime.MIN,new cljs.core.Keyword(null,"max","max",61366548),malli.experimental.time.LocalTime.MAX], null)], null));
});
malli.experimental.time._local_date_time_schema = (function malli$experimental$time$_local_date_time_schema(){
return malli.experimental.time._temporal_schema(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("time","local-date-time","time/local-date-time",-1739557259),new cljs.core.Keyword(null,"class","class",-2030961996),malli.experimental.time.LocalDateTime,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),malli.experimental.time.LocalDateTime.MIN,new cljs.core.Keyword(null,"max","max",61366548),malli.experimental.time.LocalDateTime.MAX], null)], null));
});
malli.experimental.time._offset_date_time_schema = (function malli$experimental$time$_offset_date_time_schema(){
return malli.experimental.time._temporal_schema(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("time","offset-date-time","time/offset-date-time",1399843287),new cljs.core.Keyword(null,"class","class",-2030961996),malli.experimental.time.OffsetDateTime], null));
});
malli.experimental.time._offset_time_schema = (function malli$experimental$time$_offset_time_schema(){
return malli.experimental.time._temporal_schema(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("time","offset-time","time/offset-time",1627914423),new cljs.core.Keyword(null,"class","class",-2030961996),malli.experimental.time.OffsetTime,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),malli.experimental.time.OffsetTime.MIN,new cljs.core.Keyword(null,"max","max",61366548),malli.experimental.time.OffsetTime.MAX], null)], null));
});
malli.experimental.time._zoned_date_time_schema = (function malli$experimental$time$_zoned_date_time_schema(){
return malli.experimental.time._temporal_schema(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("time","zoned-date-time","time/zoned-date-time",528795124),new cljs.core.Keyword(null,"class","class",-2030961996),malli.experimental.time.ZonedDateTime], null));
});
malli.experimental.time._zone_id_schema = (function malli$experimental$time$_zone_id_schema(){
return malli.core._simple_schema(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("time","zone-id","time/zone-id",56799337),new cljs.core.Keyword(null,"pred","pred",1927423397),(function (p1__60979_SHARP_){
return (p1__60979_SHARP_ instanceof malli.experimental.time.ZoneId);
})], null));
});
malli.experimental.time._zone_offset_schema = (function malli$experimental$time$_zone_offset_schema(){
return malli.core._simple_schema(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("time","zone-offset","time/zone-offset",1887712823),new cljs.core.Keyword(null,"pred","pred",1927423397),(function (p1__60980_SHARP_){
return (p1__60980_SHARP_ instanceof malli.experimental.time.ZoneOffset);
}),new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),malli.experimental.time.ZoneOffset.MIN,new cljs.core.Keyword(null,"max","max",61366548),malli.experimental.time.ZoneOffset.MAX], null)], null));
});
malli.experimental.time.schemas = (function malli$experimental$time$schemas(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("time","local-date","time/local-date",1831222439),new cljs.core.Keyword("time","zone-id","time/zone-id",56799337),new cljs.core.Keyword("time","period","time/period",-348896626),new cljs.core.Keyword("time","local-time","time/local-time",-1873708589),new cljs.core.Keyword("time","zoned-date-time","time/zoned-date-time",528795124),new cljs.core.Keyword("time","local-date-time","time/local-date-time",-1739557259),new cljs.core.Keyword("time","duration","time/duration",1380494101),new cljs.core.Keyword("time","offset-time","time/offset-time",1627914423),new cljs.core.Keyword("time","offset-date-time","time/offset-date-time",1399843287),new cljs.core.Keyword("time","zone-offset","time/zone-offset",1887712823),new cljs.core.Keyword("time","instant","time/instant",641198777)],[malli.experimental.time._local_date_schema(),malli.experimental.time._zone_id_schema(),malli.experimental.time._period_schema(),malli.experimental.time._local_time_schema(),malli.experimental.time._zoned_date_time_schema(),malli.experimental.time._local_date_time_schema(),malli.experimental.time._duration_schema(),malli.experimental.time._offset_time_schema(),malli.experimental.time._offset_date_time_schema(),malli.experimental.time._zone_offset_schema(),malli.experimental.time._instant_schema()]);
});

//# sourceMappingURL=malli.experimental.time.js.map
