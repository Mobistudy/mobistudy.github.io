(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{"87da":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-page",{attrs:{id:"main"}},[s("div",{staticClass:"flex col text-center justify-center"},[s("div",{staticClass:"q-pa-md"},[s("h6",[t._v(t._s(t.$t("studies.tasks.po60.dataHRTitle")))]),s("q-circular-progress",{attrs:{"show-value":"",indeterminate:t.isDownloading,value:void 0!==t.storedData?100:0,size:"80px",thickness:.2,color:"blue","center-color":"blue-1","track-color":"transparent"}},[t._v("\n        "+t._s(t.avgHR)+"\n      ")])],1),s("div",{staticClass:"q-pa-md"},[s("h6",[t._v(t._s(t.$t("studies.tasks.po60.dataSPO2Title")))]),s("q-circular-progress",{attrs:{"show-value":"",indeterminate:t.isDownloading,value:void 0!==t.storedData?100:0,size:"80px",thickness:.2,color:"blue","center-color":"blue-1","track-color":"transparent"}},[t._v("\n        "+t._s(t.avgSPO2)+"\n      ")])],1)]),s("div",{staticClass:"q-my-md row justify-around fixed-bottom"},[s("q-btn",{attrs:{label:t.$t("common.skip"),flat:"",color:"negative"},on:{click:function(a){return t.skipSend()}}}),s("q-btn",{attrs:{label:t.$t("common.send"),color:"primary"},on:{click:function(a){return t.sendData()}}})],1),s("q-inner-loading",{attrs:{showing:t.isSending}},[s("div",{staticClass:"text-overline"},[t._v(t._s(t.$t("studies.tasks.po60.dataSending")))]),s("q-spinner-oval",{attrs:{size:"50px",color:"primary"}})],1)],1)},n=[],o=(s("e6cf"),s("3fd3")),i=s("6a6d"),r=s("9bf1"),c=s("aa9c"),d={props:{studyKey:String,taskId:Number},data(){return{isDownloading:!1,isSending:!1,storedData:void 0,avgHR:"",avgSPO2:""}},watch:{storedData:function(t){this.avgHR=t.hrAvg+"",this.avgSPO2=t.SPO2Avg+"%"}},methods:{async downloadData(){this.isDownloading=!0,await this.delay(1);try{this.storedData=await o["a"].getLatestData();try{await o["a"].disconnect()}catch(t){console.error("cannot disconnect PO60",t)}}catch(t){console.error("cannot download data",t),this.showErrorDialog()}this.isDownloading=!1},showErrorDialog(){this.$q.dialog({title:this.$t("errors.error"),message:this.$t("studies.tasks.po60.dataDownloadError"),cancel:this.$t("common.cancel"),ok:this.$t("common.retry"),persistent:!0}).onOk((()=>{this.$router.push({name:"po60Intro",params:{studyKey:this.studyKey,taskId:this.taskId}})})).onCancel((()=>{this.cancelTask()}))},async cancelTask(){try{await o["a"].disconnect()}catch(t){console.error("cannot disconnect po60",t)}this.$router.push({name:"tasker"})},async skipSend(){let t=this.studyKey,a=Number(this.taskId);await i["a"].setTaskCompletion(t,a,new Date),this.$router.push("/home")},async sendData(){this.isSending=!0,await this.delay(2);try{let t=this.studyKey,a=Number(this.taskId);await c["a"].sendPO60Data({userKey:r["a"].user._key,studyKey:t,taskId:a,createdTS:new Date,device:this.deviceInfo,po60Data:this.storedData}),await i["a"].setTaskCompletion(t,a,new Date),this.isSending=!1,this.$router.push("/home")}catch(t){this.isSending=!1,console.error(t),this.$q.notify({color:"negative",message:this.$t("errors.connectionError")+" "+t.message,icon:"report_problem",onDismiss(){this.$router.push("/home")}})}},async delay(t){return new Promise(((a,s)=>{setTimeout((()=>{a()}),1e3*t)}))}},async mounted(){await this.downloadData()},async beforeDestroy(){try{await o["a"].disconnect()}catch(t){console.error("cannot disconnect miband3",t)}}},l=d,h=s("2877"),u=s("9989"),p=s("58ea"),m=s("9c40"),g=s("74f7"),y=s("1b41"),w=s("eebe"),v=s.n(w),k=Object(h["a"])(l,e,n,!1,null,null,null);a["default"]=k.exports;v()(k,"components",{QPage:u["a"],QCircularProgress:p["a"],QBtn:m["a"],QInnerLoading:g["a"],QSpinnerOval:y["a"]})}}]);