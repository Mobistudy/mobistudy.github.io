(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{"0c3b":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("q-page",{attrs:{padding:""}},[t.chartData?a("div",[a("p",{staticClass:"mobitxt1"},[t._v(t._s(t.explanation))]),t.plotBar?a("bar-chart",{attrs:{"chart-data":t.chartData,options:t.chartOptions}}):t._e(),t.plotLine?a("line-chart",{attrs:{"chart-data":t.chartData,options:t.chartOptions}}):t._e(),a("div",{staticClass:"q-mt-lg row justify-around"},[a("q-btn",{staticClass:"mobibtn",attrs:{color:"negative",loading:t.sending,label:t.$t("common.discard")},on:{click:function(a){return t.discard()}}}),a("q-btn",{staticClass:"mobibtn",attrs:{color:"primary",loading:t.sending,label:t.$t("common.send")},on:{click:function(a){return t.send()}}})],1)],1):t._e()])},i=[],r=(e("14d9"),{steps:"steps",weight:"weight",height:"height",activity:"activity",heart_rate:"heart rate",heart_rate_variability:"heart rate variability",calories:"calories",distance:"distance"}),h={steps:"steg",weight:"vikt",height:"längd",activity:"aktivitet",heart_rate:"hjärtfrekvens",heart_rate_variability:"variation i hjärtfrekvens",calories:"kalorier",distance:"distans"},n={steps:"Pasos",weight:"Peso",height:"Altura",activity:"Actividad",heart_rate:"Frecuencia cardiaca",heart_rate_variability:"Variabilidad de la frecuencia cardiaca",calories:"Calorías",distance:"Distancia"},l={en:{healthDataTypes:r},sv:{healthDataTypes:h},es:{healthDataTypes:n}},o=e("a5f6"),d=e("4468"),c=e("1fca"),p={extends:c["a"],props:["chartData","options"],mounted(){this.renderChart(this.chartData,this.options)}},u={extends:c["b"],props:["chartData","options"],mounted(){this.renderChart(this.chartData,this.options)}},D=e("9bf1"),y=e("6a6d"),g=e("c313"),k=e("1e59"),m=e("c1df"),b=e.n(m);const v=["#800000","#778000","#118000","#008080","#003780","#080080","#440080","#790080","#800046","#800046"];var f={name:"DataQueryPage",props:{studyKey:String,taskId:Number},components:{BarChart:p,LineChart:u},i18n:{messages:l},data:function(){return{task:{},taskDescr:{},chartData:null,chartOptions:null,healthData:null,plotLine:!1,plotBar:!1,sending:!1,report:{}}},computed:{explanation(){return this.$q.platform.is.ios?this.$t("studies.tasks.dataQuery.dataQueryExplanationiOS"):this.$t("studies.tasks.dataQuery.dataQueryExplanationAndroid")}},async mounted(){this.$q.loading.show();const t=this.studyKey,a=parseInt(this.taskId),e=await y["a"].getStudyDescription(t);this.taskDescr=e.tasks.find((t=>t.id===a)),this.report={userKey:D["a"].user._key,participantKey:D["a"].user.participantKey,studyKey:t,taskId:a,taskType:"dataQuery",createdTS:new Date,phone:o["a"].device,summary:{startedTS:new Date,completedTS:new Date,dataType:this.taskDescr.dataType},data:[]};let s=await y["a"].getStudyParticipation(t),i=s.taskItemsConsent.find((t=>t.taskId===Number(a))).lastExecuted,r=b()();"undefined"!==typeof i?r=b()(i):"d"===this.taskDescr.scheduling.intervalType?r.subtract(this.taskDescr.scheduling.interval,"days"):"w"===this.taskDescr.scheduling.intervalType?r.subtract(this.taskDescr.scheduling.interval,"weeks"):"m"===this.taskDescr.scheduling.intervalType?r.subtract(this.taskDescr.scheduling.interval,"months"):"y"===this.taskDescr.scheduling.intervalType&&r.subtract(this.taskDescr.scheduling.interval,"years");try{this.taskDescr.aggregated?this.taskDescr.bucket&&"none"!==this.taskDescr.bucket?this.healthData=await d["a"].queryAggregated({startDate:r.toDate(),endDate:new Date,dataType:k["a"].toNativeType(this.taskDescr.dataType),bucket:this.taskDescr.bucket}):this.healthData=await d["a"].queryAggregated({startDate:r.toDate(),endDate:new Date,dataType:k["a"].toNativeType(this.taskDescr.dataType)}):this.healthData=await d["a"].query({startDate:r.toDate(),endDate:new Date,dataType:k["a"].toNativeType(this.taskDescr.dataType)}),console.log("raw health data",this.healthData);let t="";this.taskDescr.bucket&&"none"!==this.taskDescr.bucket?t=this.taskDescr.bucket:this.healthData.unit?t=this.healthData.unit:this.healthData.length&&(t=this.healthData[0].unit);let a={labels:[],datasets:[]};if(this.taskDescr.aggregated){if(this.taskDescr.bucket&&"none"!==this.taskDescr.bucket)if("activity"===this.taskDescr.dataType){let e=[];for(let t=0;t<this.healthData.length;t++){a.labels.push(this.healthData[t].endDate);for(let s in this.healthData[t].value){let i=e.indexOf(s);i<0&&(i=a.datasets.length,e.push(s),a.datasets.push({label:s,data:[],backgroundColor:v[i]}));let r=parseInt(this.healthData[t].value[s].duration/36e5);a.datasets[i].data.push(r)}}this.chartOptions={maintainAspectRatio:!1,scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0}}],xAxes:[{stacked:!0,type:"time",bounds:"data",time:{unit:t}}]}}}else{a.datasets.push({label:this.$i18n.t("healthDataTypes."+this.taskDescr.dataType),data:[],backgroundColor:"#800000"});for(let t=0;t<this.healthData.length;t++)a.labels.push(this.healthData[t].endDate),a.datasets[0].data.push(this.healthData[t].value);this.chartOptions={maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{type:"time",bounds:"data",time:{unit:t}}]}}}else if("activity"===this.taskDescr.dataType){let t=[];a.labels.push(b()(this.healthData.startDate).format("D/M/YY HH:mm")+" to "+b()(this.healthData.endDate).format("D/M/YY HH:mm"));for(let e in this.healthData.value){let s=t.indexOf(e);s<0&&(s=a.datasets.length,t.push(e),a.datasets.push({label:e,data:[],backgroundColor:v[s]}));let i=parseInt(this.healthData.value[e].duration/36e5);a.datasets[s].data.push(i)}this.chartOptions={maintainAspectRatio:!1,scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0}}],xAxes:[{stacked:!0}]}}}else a.datasets.push({label:this.$i18n.t("healthDataTypes."+this.taskDescr.dataType),data:[],backgroundColor:"#800000"}),a.labels.push(b()(this.healthData.startDate).format("D/M/YY HH:mm")+" to "+b()(this.healthData.endDate).format("D/M/YY HH:mm")),a.datasets[0].data.push(this.healthData.value),this.chartOptions={maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}};this.plotBar=!0}else{a.datasets.push({label:this.$i18n.t("healthDataTypes."+this.taskDescr.dataType),data:[],fill:!1,pointRadius:0,lineTension:0,backgroundColor:"#800000",borderColor:"rgba(128,0,0,0.66)"});for(let t=0;t<this.healthData.length;t++)a.labels.push(this.healthData[t].endDate),a.datasets[0].data.push(this.healthData[t].value);this.chartOptions={maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{type:"time",bounds:"data"}]}},this.plotLine=!0}this.report.summary.completedTS=new Date,this.report.summary.length=this.healthData.length,this.report.summary.firstDate=this.healthData[0].startDate,this.report.summary.lastDate=this.healthData[this.healthData.length-1].endDate,this.report.data={dataType:this.taskDescr.dataType,samples:this.healthData},this.chartData=a,this.$q.loading.hide()}catch(h){console.error(h),this.$q.loading.hide(),this.$q.notify({color:"negative",message:h.message,icon:"report_problem",onDismiss(){this.$router.push("/home")}})}},methods:{async saveAndLeave(){try{await g["a"].sendTasksResults(this.report),await y["a"].setTaskCompletion(this.report.studyKey,this.report.taskId,new Date),this.$router.push({name:"home"})}catch(t){this.sending=!1,console.error(t),this.$q.notify({color:"negative",message:this.$t("errors.connectionError")+" "+t.message,icon:"report_problem"})}console.log(this.report)},async send(){return this.sending=!0,this.report.discarded=!1,this.saveAndLeave()},async discard(){return this.sending=!0,this.report.discarded=!0,delete this.report.summary,delete this.report.data,this.saveAndLeave()}}},T=f,w=e("2877"),A=e("9989"),x=e("9c40"),_=e("eebe"),C=e.n(_),$=Object(w["a"])(T,s,i,!1,null,null,null);a["default"]=$.exports;C()($,"components",{QPage:A["a"],QBtn:x["a"]})}}]);