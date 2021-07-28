(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{da89:function(s,e,t){"use strict";t.r(e);var r=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("q-page",{attrs:{padding:""}},[t("div",{staticClass:"text-center text-h6 q-mt-lg"},[s._v("\n    "+s._s(s.$t("studies.tasks.peakflow.measurement"))+"\n  ")]),t("div",{staticClass:"text-center q-mt-lg"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!s.isMeasuring&&!(s.testErrors>s.maxErrors)&&0==s.completedTests,expression:"!isMeasuring && !(testErrors > maxErrors) && completedTests==0"}]},[t("div",[t("img",{staticStyle:{"max-width":"50%"},attrs:{src:"instructions/peakflow_3.svg"}})]),t("p",[s._v("\n        "+s._s(s.$t("studies.tasks.peakflow.measurementStart"))+"\n      ")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:s.isMeasuring,expression:"isMeasuring"}]},[t("div",[t("img",{staticStyle:{"max-width":"50%"},attrs:{src:"instructions/peakflow_4.svg"}})]),t("p",[s._v("\n        "+s._s(s.$t("studies.tasks.peakflow.measurementInstructions"))+"\n      ")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:!s.isMeasuring&&s.completedTests>0&&!(s.testErrors>s.maxErrors),expression:"!isMeasuring && (completedTests>0) && !(testErrors > maxErrors)"}],staticClass:"text-center text-h6 q-mt-lg",staticStyle:{"min-height":"236px"}},s._l(s.PEFs,(function(e,r){return t("p",{key:"pef"+r,attrs:{data:e}},[s._v("\n        "+s._s(r+1)+") "+s._s(e)+" L/min\n      ")])})),0),t("p",{directives:[{name:"show",rawName:"v-show",value:!s.isMeasuring&&!(s.testErrors>s.maxErrors)&&1==s.completedTests,expression:"!isMeasuring && !(testErrors > maxErrors) && completedTests==1"}]},[s._v("\n      "+s._s(s.$t("studies.tasks.peakflow.measurementCompleted1"))+"\n    ")]),t("p",{directives:[{name:"show",rawName:"v-show",value:!s.isMeasuring&&!(s.testErrors>s.maxErrors)&&2==s.completedTests,expression:"!isMeasuring && !(testErrors > maxErrors) && completedTests==2"}]},[s._v("\n      "+s._s(s.$t("studies.tasks.peakflow.measurementCompleted2"))+"\n    ")]),t("p",{directives:[{name:"show",rawName:"v-show",value:!s.isMeasuring&&!(s.testErrors>s.maxErrors)&&3==s.completedTests,expression:"!isMeasuring && !(testErrors > maxErrors) && completedTests==3"}]},[s._v("\n      "+s._s(s.$t("studies.tasks.peakflow.measurementCompleted3"))+"\n    ")]),t("p",{directives:[{name:"show",rawName:"v-show",value:s.testErrors>s.maxErrors,expression:"testErrors > maxErrors"}],staticClass:"text-weight-bold text-negative q-pa-md"},[s._v("\n      "+s._s(s.$t("studies.tasks.peakflow.measurementErrorMaxRetries"))+"\n    ")])]),t("div",{staticClass:"row justify-center q-mt-lg"},[t("q-btn",{directives:[{name:"show",rawName:"v-show",value:!(s.testErrors>s.maxErrors)&&(s.isMeasuring||s.completedTests<=s.totalTestsNumber),expression:"!(testErrors > maxErrors) && (isMeasuring || (completedTests <= totalTestsNumber))"}],attrs:{color:"primary",disable:s.isMeasuring,label:s.$t("common.start")},on:{click:s.startMeasurement}}),t("q-btn",{directives:[{name:"show",rawName:"v-show",value:s.completedTests>s.totalTestsNumber&&!s.isMeasuring,expression:"completedTests > totalTestsNumber && !isMeasuring"}],attrs:{color:"primary",label:s.$t("common.next")},on:{click:s.completeTest}}),t("q-btn",{directives:[{name:"show",rawName:"v-show",value:s.testErrors>s.maxErrors,expression:"testErrors > maxErrors"}],attrs:{color:"primary",label:s.$t("common.next")},on:{click:s.abandonTest}})],1)])},a=[],o=(t("ddb0"),t("ed5d")),i=t("9bf1"),n={name:"PeakFlowPage",props:{studyKey:String,taskId:Number},components:{},data:function(){return{isCompleted:!1,isMeasuring:!1,completedTests:0,totalTestsNumber:2,testErrors:0,maxErrors:4,measurement:void 0,PEFs:[]}},methods:{async startMeasurement(){if(this.completedTests<=this.totalTestsNumber){this.isMeasuring=!0;try{if(this.measurement=await o["a"].startMeasurement(),this.measurement.pef>1e3)throw new Error("PEF is too high");this.completedTests++,this.PEFs.push(this.measurement.pef)}catch(s){this.testErrors++,console.error(s),this.$q.notify({color:"negative",message:this.$t("studies.tasks.peakflow.measurementError"),icon:"report_problem"})}this.isMeasuring=!1}await o["a"].stopMeasurement()},completeTest(){const s=this.studyKey,e=parseInt(this.taskId),t=i["a"].user._key;let r={userKey:t,studyKey:s,taskId:e,createdTS:new Date,PEFs:this.PEFs,pefMax:Math.max(...this.PEFs)};this.$router.push({name:"peakFlowSummary",params:{report:r}})},abandonTest(){this.$router.push({name:"tasker"})}},beforeDestroy:function(){o["a"].stopMeasurement()}},m=n,l=t("2877"),u=t("9989"),p=t("9c40"),c=t("eebe"),d=t.n(c),w=Object(l["a"])(m,r,a,!1,null,null,null);e["default"]=w.exports;d()(w,"components",{QPage:u["a"],QBtn:p["a"]})}}]);