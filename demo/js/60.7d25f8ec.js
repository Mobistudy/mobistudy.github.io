(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[60],{"87da":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("q-page",{attrs:{id:"main"}},[a("div",{staticClass:"flex col text-center justify-center"},[a("div",{staticClass:"q-pa-md"},[a("h6",[t._v(t._s(t.$t("studies.tasks.po60.dataHRTitle")))]),a("q-circular-progress",{attrs:{"show-value":"",indeterminate:t.downloading,value:void 0!==t.storedData?100:0,size:"80px",thickness:.2,color:"blue","center-color":"blue-1","track-color":"transparent"}},[t._v("\n        "+t._s(t.avgHR)+"\n      ")])],1),a("div",{staticClass:"q-pa-md"},[a("h6",[t._v(t._s(t.$t("studies.tasks.po60.dataSPO2Title")))]),a("q-circular-progress",{attrs:{"show-value":"",indeterminate:t.downloading,value:void 0!==t.storedData?100:0,size:"80px",thickness:.2,color:"blue","center-color":"blue-1","track-color":"transparent"}},[t._v("\n        "+t._s(t.avgSPO2)+"\n      ")])],1)]),a("div",{staticClass:"row justify-around q-mt-lg"},[a("q-btn",{staticClass:"mobibtn",attrs:{color:"negative",loading:t.sending,label:t.$t("common.discard")},on:{click:function(a){return t.discard()}}}),a("q-btn",{staticClass:"mobibtn",attrs:{color:"primary",loading:t.sending,label:t.$t("common.send")},on:{click:function(a){return t.send()}}})],1)])},r=[],o=(e("14d9"),e("3fd3")),n=e("6a6d"),i=e("9bf1"),d=e("c313"),c=e("a5f6"),l={props:{studyKey:String,taskId:Number},data(){return{downloading:!1,sending:!1,storedData:void 0,avgHR:"",avgSPO2:"",report:{userKey:i["a"].user._key,participantKey:i["a"].user.participantKey,studyKey:this.studyKey,taskId:parseInt(this.taskId),taskType:"po60",createdTS:new Date,phone:c["a"].device,summary:{startedTS:new Date,completedTS:void 0,spo2:void 0,hr:void 0},data:void 0}}},watch:{storedData:function(t){let a=t[t.length-1];this.avgHR=a.hrAvg+"",this.avgSPO2=a.SPO2Avg+"%"}},methods:{async downloadData(){this.downloading=!0;try{this.storedData=await o["a"].getAllData();try{await o["a"].disconnect()}catch(t){console.error("cannot disconnect PO60",t)}let a=this.storedData[this.storedData.length-1];this.report.summary.completedTS=new Date,this.report.summary.spo2=a.SPO2Avg,this.report.summary.hr=a.hrAvg,this.report.data={device:void 0,pulseoximetry:this.storedData}}catch(t){console.error("cannot download data",t),this.showErrorDialog()}this.downloading=!1},showErrorDialog(){this.$q.dialog({title:this.$t("errors.error"),message:this.$t("studies.tasks.po60.dataDownloadError"),cancel:this.$t("common.cancel"),ok:this.$t("common.retry"),persistent:!0}).onOk((()=>{this.$router.push({name:"po60Intro",params:{studyKey:this.studyKey,taskId:this.taskId}})})).onCancel((()=>{this.cancelTask()}))},async cancelTask(){try{await o["a"].disconnect()}catch(t){console.error("cannot disconnect po60",t)}this.$router.push({name:"tasker"})},async saveAndLeave(){try{console.log(this.report),await d["a"].sendTasksResults(this.report),await n["a"].setTaskCompletion(this.report.studyKey,this.report.taskId,new Date),this.$router.push({name:"home"})}catch(t){this.sending=!1,console.error(t),this.$q.notify({color:"negative",message:this.$t("errors.connectionError")+" "+t.message,icon:"report_problem"})}},async send(){return this.sending=!0,this.report.discarded=!1,this.saveAndLeave()},async discard(){return this.sending=!0,this.report.discarded=!0,delete this.report.summary,delete this.report.data,this.saveAndLeave()}},async mounted(){await this.downloadData()},async beforeDestroy(){try{await o["a"].disconnect()}catch(t){console.error("cannot disconnect miband3",t)}}},h=l,p=e("2877"),u=e("9989"),m=e("58ea"),g=e("9c40"),v=e("eebe"),y=e.n(v),w=Object(p["a"])(h,s,r,!1,null,null,null);a["default"]=w.exports;y()(w,"components",{QPage:u["a"],QCircularProgress:m["a"],QBtn:g["a"]})}}]);