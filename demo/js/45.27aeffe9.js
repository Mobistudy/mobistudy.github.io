(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{8033:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t._self._c;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"text-center text-h5 q-mt-lg text-center"},[t._v("\n    "+t._s(t.$t("studies.tasks.drawing.completed"))+"\n  ")]),s("div",{staticClass:"text-center text-h6 q-mt-lg"},[t._v("\n    "+t._s(t.$t("studies.tasks.peakflow.summary"))+"\n  ")]),s("div",{staticClass:"text-center text-bold q-my-lg"},[t._v("\n    "+t._s(t.$t("studies.tasks.drawing.results")+t.$t("studies.tasks.drawing.shapeSquare"))+": "+t._s(this.report.summary.totalVariabilitySquare.toFixed(2))+"\n  ")]),s("div",{staticClass:"text-center text-bold q-my-lg"},[t._v("\n    "+t._s(t.$t("studies.tasks.drawing.results")+t.$t("studies.tasks.drawing.shapeSpiral"))+": "+t._s(this.report.summary.totalVariabilitySpiral.toFixed(2))+"\n  ")]),s("div",{staticClass:"row justify-around q-mt-lg"},[s("q-btn",{attrs:{color:"secondary",loading:t.sending,label:t.$t("common.discard")},on:{click:function(s){return t.discard()}}}),s("q-btn",{attrs:{color:"primary",loading:t.sending,label:t.$t("common.send")},on:{click:function(s){return t.send()}}})],1)])},r=[],n=(e("14d9"),e("c313")),i=e("6a6d"),o={name:"DrawingSummaryPage",props:{report:Object},data:function(){return{sending:!1}},methods:{async saveAndLeave(){try{await n["a"].sendTasksResults(this.report),await i["a"].setTaskCompletion(this.report.studyKey,this.report.taskId,new Date),this.$router.push({name:"home"})}catch(t){this.sending=!1,console.error(t),this.$q.notify({color:"negative",message:this.$t("errors.connectionError")+" "+t.message,icon:"report_problem"})}console.log(this.report)},async send(){return this.sending=!0,this.report.discarded=!1,this.saveAndLeave()},async discard(){return this.sending=!0,this.report.discarded=!0,delete this.report.summary,delete this.report.data,this.saveAndLeave()}}},d=o,c=e("2877"),l=e("9989"),u=e("9c40"),p=e("eebe"),m=e.n(p),h=Object(c["a"])(d,a,r,!1,null,null,null);s["default"]=h.exports;m()(h,"components",{QPage:l["a"],QBtn:u["a"]})}}]);