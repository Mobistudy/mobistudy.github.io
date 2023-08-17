(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{b224:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("q-page",{attrs:{id:"main"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isDownloading,expression:"!isDownloading"}]},[a("p",{staticClass:"q-pa-md mobitxt1"},[t._v(t._s(t.$t("studies.tasks.miband3.chartsIntro")))]),a("div",{staticClass:"text-center text-h6"},[t._v("\n      "+t._s(t.$t("studies.tasks.miband3.lineChart"))+"\n    ")]),a("div",{staticClass:"q-pa-md"},[a("canvas",{ref:"lineChart",staticStyle:{margin:"0 auto","padding-right":"2rem"},attrs:{height:"320"}}),a("div",{staticClass:"row justify-around"},[a("q-btn",{attrs:{label:"-12 "+t.$t("studies.tasks.miband3.hours"),color:"secondary",disable:t.disableMinus},on:{click:function(a){t.lineChartAdd(-12)}}}),a("q-btn",{attrs:{label:"+12 "+t.$t("studies.tasks.miband3.hours"),color:"secondary",disable:t.disablePlus},on:{click:function(a){t.lineChartAdd(12)}}})],1)]),a("q-separator"),a("div",{staticClass:"text-center text-h6"},[t._v("\n      "+t._s(t.$t("studies.tasks.miband3.pieChart"))+"\n    ")]),a("div",{staticClass:"q-pa-md"},[a("canvas",{ref:"pieChart",attrs:{height:"270"}})]),a("q-separator"),a("div",{staticClass:"row justify-around q-my-lg"},[a("q-btn",{staticClass:"mobibtn",attrs:{color:"negative",loading:t.sending,label:t.$t("common.discard")},on:{click:function(a){return t.discard()}}}),a("q-btn",{staticClass:"mobibtn",attrs:{color:"primary",loading:t.sending,label:t.$t("common.send")},on:{click:function(a){return t.send()}}})],1)],1),a("q-inner-loading",{attrs:{showing:t.isDownloading}},[a("div",{staticClass:"mobitxt2"},[t._v(t._s(t.$t("studies.tasks.miband3.dataDownload")))]),a("q-spinner-dots",{attrs:{size:"50px",color:"primary"}})],1)],1)},i=[],n=(e("14d9"),e("ddb0"),e("e995")),r=e("30ef"),o=e.n(r);function d(t){switch(t){case 1:case 16:return"walk";case 3:return"not_worn";case 6:return"charging";case 80:case 90:case 89:case 91:case 92:case 96:return"sedentary";case 98:case 82:return"running";case 17:return"activity_high";case 106:case 112:case 121:case 122:case 123:return"sleep";default:return"unknown"}}var l=e("6a6d"),c=e("9bf1"),h=e("c313"),u=e("c1df"),p=e.n(u),b=e("a5f6");const m=["#800000","#778000","#118000","#008080","#003780","#080080","#440080","#790080","#800046","#800046"];let y=[],g=30,w={type:"doughnut",data:{labels:[],datasets:[{data:[],backgroundColor:[]}]},options:{animation:{animateScale:!0}},indexes:[],maxIndex:-1,reset(){this.data.datasets.data=[],this.data.datasets.backgroundColor=[],this.data.labels=[],this.indexes=[],this.maxIndex=-1}};var C={hrs:[],steps:[],intensities:[],labels:[],reset(){this.hrs=[],this.steps=[],this.intensities=[],this.labels=[]}},D={name:"MiBand3DataDownloadPage",props:{studyKey:String,taskId:Number},data(){return{startDate:new Date,deviceInfo:{},isDownloading:!1,lineChart:void 0,currentStartHour:0,currentEndHour:12,disableMinus:!0,disablePlus:!1,sending:!1,report:{}}},methods:{async downloadData(){this.isDownloading=!0,this.report={userKey:c["a"].user._key,participantKey:c["a"].user.participantKey,studyKey:this.studyKey,taskId:Number(this.taskId),createdTS:new Date,taskType:"miband3",phone:b["a"].device,summary:{startedTS:new Date,completedTS:new Date}},y=[],w.reset(),C.reset(),this.startDate=await this.getDateToUseForDownload();try{this.deviceInfo=await n["a"].getDeviceInfo(),await n["a"].getStoredData(this.startDate,this.dataCallback);try{await n["a"].disconnect()}catch(t){console.error("cannot disconnect miband3",t)}if(y.length<g)return await this.storeDownloadDate(this.startDate),void this.$router.push({name:"notEnoughDataPage"});this.createPieChart(),this.renderLineChart(this.currentStartHour,this.currentEndHour),this.report.summary.length=y.length,this.report.summary.completedTS=new Date,this.report.summary.firstTS=y[0].date,this.report.summary.lastTS=y[y.length-1].date,this.report.data={device:this.deviceInfo,activity:y},this.isDownloading=!1}catch(t){console.error("cannot download data",t),this.showErrorDialog()}},async storeDownloadDate(t){let a=await l["a"].getStudyParticipationTaskItemConsent(this.studyKey,this.taskId);return a.lastMiband3SampleTS=t,await l["a"].setStudyParticipationTaskItemConsent(this.studyKey,this.taskId,a),a},getLatestDownloadedSampleDate(){return y[y.length-1].date},async getDateToUseForDownload(){let t,a=await l["a"].getStudyParticipationTaskItemConsent(this.studyKey,this.taskId),e=a.lastMiband3SampleTS;if(e)t=new Date(e);else{const a=await l["a"].getTaskDescription(this.studyKey,this.taskId);let e=a.lastExecuted;if(e)t=new Date(e);else{t=p()();let e=a.scheduling.intervalType,s=a.scheduling.interval;"d"===e?t.subtract(s,"days"):"w"===e?t.subtract(s,"weeks"):"m"===e?t.subtract(s,"months"):"y"===e&&t.subtract(s,"years"),t=t.toDate()}}return t},renderLineChart(t,a){C.reset();let e=60*t,s=60*a-1;s>=y.length&&(s=y.length-1);for(let i=e;i<=s;i++){let t=y[i];this.addToLineChart(t.hr,t.intensity,t.steps,t.date)}this.updateLineChartReferences(),this.updatePlusMinusButtons()},showErrorDialog(){this.$q.dialog({title:this.$t("errors.error"),message:this.$t("studies.tasks.miband3.dataDownloadError"),cancel:this.$t("common.cancel"),ok:this.$t("common.retry"),persistent:!0}).onOk((()=>{this.downloadData()})).onCancel((()=>{this.cancelTask()}))},async cancelTask(){try{await n["a"].disconnect()}catch(t){console.error("cannot disconnect miband3",t)}this.$router.push({name:"tasker"})},dataCallback(t){y.push(t)},addToLineChart(t,a,e,s){t>30&&t<210&&C.hrs.push({x:s,y:t}),C.intensities.push({x:s,y:a}),C.steps.push({x:s,y:e}),C.labels.push(s)},createPieChart(){for(const a of y){let t=a.activityType,e=d(t);if(void 0===w.indexes[e]){w.maxIndex++;let t=w.maxIndex;w.indexes[e]=t,w.data.datasets[0].data[t]=1,w.data.datasets[0].backgroundColor[t]=m[t],w.data.labels.push(this.$t("studies.tasks.miband3.activityTypes."+e))}else{let t=w.indexes[e];w.data.datasets[0].data[t]++}}let t=this.$refs.pieChart;new o.a(t,w)},updateLineChartReferences(){this.lineChart.data.datasets[0].data=C.hrs,this.lineChart.data.datasets[1].data=C.intensities,this.lineChart.data.datasets[2].data=C.steps,this.lineChart.data.labels=C.labels,this.lineChart.update()},createActivityLineChart(){let t=this.$refs.lineChart;this.lineChart=new o.a.Scatter(t,{type:"scatter",data:{labels:C.labels,datasets:[{label:this.$t("studies.tasks.miband3.hrs"),data:C.hrs,backgroundColor:"#C74038",borderColor:"#C74038",borderWidth:0,pointRadius:1,fill:!1,lineTension:0},{label:this.$t("studies.tasks.miband3.intensities"),data:C.intensities,backgroundColor:"#4038C7",borderColor:"#4038C7",borderWidth:0,pointRadius:1,fill:!1,lineTension:0},{label:this.$t("studies.tasks.miband3.steps"),data:C.steps,backgroundColor:"#38C740",borderColor:"#38C740",borderWidth:0,pointRadius:1,fill:!1,lineTension:0}]},options:{responsive:!0,title:{display:!1},scales:{xAxes:[{type:"time",time:{displayFormats:{quarter:"HH:MM:SS"}},scaleLabel:{display:!0,lineChartLabelstring:"Date"}}],yAxes:[{scaleLabel:{display:!0,lineChartLabelstring:"value"}}]}}}),this.lineChart.update()},lineChartAdd(t){this.currentStartHour+=t,this.currentEndHour+=t,this.renderLineChart(this.currentStartHour,this.currentEndHour),this.updatePlusMinusButtons()},updatePlusMinusButtons(){0===this.currentStartHour?this.disableMinus=!0:this.disableMinus=!1,this.currentEndHour>=y.length/60?this.disablePlus=!0:this.disablePlus=!1},async saveAndLeave(){try{await h["a"].sendTasksResults(this.report),await this.storeDownloadDate(this.getLatestDownloadedSampleDate());let t=await this.storeDownloadDate(this.getLatestDownloadedSampleDate());await h["a"].updateTaskItemConsent(this.report.studyKey,this.report.taskId,t),await l["a"].setTaskCompletion(this.report.studyKey,this.report.taskId,new Date),this.$router.push({name:"home"})}catch(t){this.sending=!1,console.error(t),this.$q.notify({color:"negative",message:this.$t("errors.connectionError")+" "+t.message,icon:"report_problem"})}console.log(this.report)},async send(){return this.sending=!0,this.report.discarded=!1,this.saveAndLeave()},async discard(){return this.sending=!0,this.report.discarded=!0,delete this.report.summary,delete this.report.data,this.saveAndLeave()}},async mounted(){this.createActivityLineChart(),await this.downloadData()},async beforeDestroy(){try{await n["a"].disconnect()}catch(t){console.error("cannot disconnect miband3",t)}}},k=D,v=e("2877"),f=e("9989"),S=e("9c40"),x=e("eb85"),T=e("74f7"),$=e("8380"),I=e("eebe"),L=e.n(I),q=Object(v["a"])(k,s,i,!1,null,null,null);a["default"]=q.exports;L()(q,"components",{QPage:f["a"],QBtn:S["a"],QSeparator:x["a"],QInnerLoading:T["a"],QSpinnerDots:$["a"]})}}]);