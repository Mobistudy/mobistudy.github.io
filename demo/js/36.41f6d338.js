(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{"0c3b":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{attrs:{padding:""}},[t.chartData?e("div",[e("p",{staticStyle:{"margin-top":"0"}},[t._v(t._s(t.$t("studies.tasks.dataQuery.dataQueryExplanation")))]),t.plotBar?e("bar-chart",{attrs:{"chart-data":t.chartData,options:t.chartOptions}}):t._e(),t.plotLine?e("line-chart",{attrs:{"chart-data":t.chartData,options:t.chartOptions}}):t._e(),e("div",{staticClass:"row justify-around"},[e("q-btn",{attrs:{color:"secondary",loading:t.loading,label:t.$t("common.discard")},on:{click:function(a){return t.discard()}}}),e("q-btn",{attrs:{color:"primary",loading:t.loading,label:t.$t("common.send")},on:{click:function(a){return t.submit()}}})],1)],1):t._e()])},i=[],h=(e("c975"),e("e6cf"),{steps:"steps",weight:"weight",height:"height",activity:"activity",heart_rate:"heart rate",heart_rate_variability:"heart rate variability",calories:"calories",distance:"distance"}),r={steps:"steg",weight:"vikt",height:"längd",activity:"aktivitet",heart_rate:"hjärtfrekvens",heart_rate_variability:"variation i hjärtfrekvens",calories:"kalorier",distance:"distans"},n={en:{healthDataTypes:h},sv:{healthDataTypes:r}},l=e("4468"),o=e("1fca"),c={extends:o["a"],props:["chartData","options"],mounted(){this.renderChart(this.chartData,this.options)}},d={extends:o["b"],props:["chartData","options"],mounted(){this.renderChart(this.chartData,this.options)}},u=e("9bf1"),p=e("6a6d"),D=e("aa9c"),g=e("1e59"),k=e("c1df"),y=e.n(k);const b=["#800000","#778000","#118000","#008080","#003780","#080080","#440080","#790080","#800046","#800046"];var m={name:"DataQueryPage",props:{studyKey:String,taskId:Number},components:{BarChart:c,LineChart:d},i18n:{messages:n},data:function(){return{task:{},taskDescr:{},chartData:null,chartOptions:null,healthData:null,plotLine:!1,plotBar:!1,loading:!1}},async mounted(){this.$q.loading.show();const t=this.studyKey,a=this.taskId,e=await p["a"].getStudyDescription(t);this.taskDescr=e.tasks.find((t=>t.id===Number(a)));let s=await p["a"].getStudyParticipation(t),i=s.taskItemsConsent.find((t=>t.taskId===Number(a))).lastExecuted,h=y()();"undefined"!==typeof i?h=y()(i):"d"===this.taskDescr.scheduling.intervalType?h.subtract(this.taskDescr.scheduling.interval,"days"):"w"===this.taskDescr.scheduling.intervalType?h.subtract(this.taskDescr.scheduling.interval,"weeks"):"m"===this.taskDescr.scheduling.intervalType?h.subtract(this.taskDescr.scheduling.interval,"months"):"y"===this.taskDescr.scheduling.intervalType&&h.subtract(this.taskDescr.scheduling.interval,"years"),console.log(`Retrieving ${this.taskDescr.dataType}, aggregated: ${this.taskDescr.aggregated}, bucket: ${this.taskDescr.bucket}`),console.log("Start Date: "+h.toDate());try{this.taskDescr.aggregated?this.taskDescr.bucket&&"none"!==this.taskDescr.bucket?this.healthData=await l["a"].queryAggregated({startDate:h.toDate(),endDate:new Date,dataType:g["a"].toNativeType(this.taskDescr.dataType),bucket:this.taskDescr.bucket}):this.healthData=await l["a"].queryAggregated({startDate:h.toDate(),endDate:new Date,dataType:g["a"].toNativeType(this.taskDescr.dataType)}):this.healthData=await l["a"].query({startDate:h.toDate(),endDate:new Date,dataType:g["a"].toNativeType(this.taskDescr.dataType)}),console.log("raw health data",this.healthData);let t="";this.taskDescr.bucket&&"none"!==this.taskDescr.bucket?t=this.taskDescr.bucket:this.healthData.unit?t=this.healthData.unit:this.healthData.length&&(t=this.healthData[0].unit);let a={labels:[],datasets:[]};if(this.taskDescr.aggregated){if(this.taskDescr.bucket&&"none"!==this.taskDescr.bucket)if("activity"===this.taskDescr.dataType){let e=[];for(let t=0;t<this.healthData.length;t++){a.labels.push(this.healthData[t].endDate);for(let s in this.healthData[t].value){let i=e.indexOf(s);i<0&&(i=a.datasets.length,e.push(s),a.datasets.push({label:s,data:[],backgroundColor:b[i]}));let h=parseInt(this.healthData[t].value[s].duration/36e5);a.datasets[i].data.push(h)}}this.chartOptions={maintainAspectRatio:!1,scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0}}],xAxes:[{stacked:!0,type:"time",bounds:"data",time:{unit:t}}]}}}else{a.datasets.push({label:this.$i18n.t("healthDataTypes."+this.taskDescr.dataType),data:[],backgroundColor:"#800000"});for(let t=0;t<this.healthData.length;t++)a.labels.push(this.healthData[t].endDate),a.datasets[0].data.push(this.healthData[t].value);this.chartOptions={maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{type:"time",bounds:"data",time:{unit:t}}]}}}else if("activity"===this.taskDescr.dataType){let t=[];a.labels.push(y()(this.healthData.startDate).format("D/M/YY HH:mm")+" to "+y()(this.healthData.endDate).format("D/M/YY HH:mm"));for(let e in this.healthData.value){let s=t.indexOf(e);s<0&&(s=a.datasets.length,t.push(e),a.datasets.push({label:e,data:[],backgroundColor:b[s]}));let i=parseInt(this.healthData.value[e].duration/36e5);a.datasets[s].data.push(i)}this.chartOptions={maintainAspectRatio:!1,scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0}}],xAxes:[{stacked:!0}]}}}else a.datasets.push({label:this.$i18n.t("healthDataTypes."+this.taskDescr.dataType),data:[],backgroundColor:"#800000"}),a.labels.push(y()(this.healthData.startDate).format("D/M/YY HH:mm")+" to "+y()(this.healthData.endDate).format("D/M/YY HH:mm")),a.datasets[0].data.push(this.healthData.value),this.chartOptions={maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}};this.plotBar=!0}else{a.datasets.push({label:this.$i18n.t("healthDataTypes."+this.taskDescr.dataType),data:[],fill:!1,pointRadius:0,lineTension:0,backgroundColor:"#800000",borderColor:"rgba(128,0,0,0.66)"});for(let t=0;t<this.healthData.length;t++)a.labels.push(this.healthData[t].endDate),a.datasets[0].data.push(this.healthData[t].value);this.chartOptions={maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{type:"time",bounds:"data"}]}},this.plotLine=!0}this.chartData=a,this.$q.loading.hide()}catch(r){console.error(r),this.$q.loading.hide(),this.$q.notify({color:"negative",message:"Cannot retrieve data: "+r.message,icon:"report_problem"})}},methods:{async submit(){this.loading=!0;try{let t=this.studyKey,a=Number(this.taskId);await D["a"].sendDataQuery({userKey:u["a"].user._key,studyKey:t,taskId:a,dataType:this.taskDescr.dataType,createdTS:new Date,healthData:this.healthData}),await p["a"].setTaskCompletion(t,a,new Date),this.$router.push("/home")}catch(t){this.loading=!1,console.error(t),this.$q.notify({color:"negative",message:this.$t("errors.connectionError")+" "+t.message,icon:"report_problem",onDismiss(){this.$router.push("/home")}})}},async discard(){let t=this.studyKey,a=Number(this.taskId);await p["a"].setTaskCompletion(t,a,new Date),this.$router.push("/home")}}},v=m,f=e("2877"),T=e("9989"),w=e("9c40"),A=e("eebe"),x=e.n(A),$=Object(f["a"])(v,s,i,!1,null,null,null);a["default"]=$.exports;x()($,"components",{QPage:T["a"],QBtn:w["a"]})}}]);