(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[64],{"8eca":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("q-page",{attrs:{padding:""}},[e("q-item-section",{attrs:{id:"heartRate"}},[e("h6",[t._v(t._s(t.$t("studies.tasks.qcst.enterHR")))]),e("p",{staticClass:"mobitxt1 q-mb-lg"},[t._v("\n      "+t._s(t.$t("studies.tasks.qcst.enterHRInstructions"))+"\n    ")]),e("q-input",{attrs:{outlined:"",label:"Heart rate",type:"number"},model:{value:t.heartRate,callback:function(e){t.heartRate=e},expression:"heartRate"}}),e("q-btn",{staticClass:"full-width mobibtn q-mt-lg",attrs:{color:"primary",label:t.$t("common.next"),disable:!t.heartRate},on:{click:function(e){return t.completeTest()}}})],1)],1)},n=[],r=(a("14d9"),{name:"QCSTHRPage",props:{report:Object},data:function(){return{heartRate:void 0}},methods:{completeTest(){const t=this.report;this.report.heartRate=this.heartRate,this.$router.push({name:"qcstSummary",params:{report:t}})}}}),o=r,i=a("2877"),c=a("9989"),l=a("4074"),u=a("27f9"),p=a("9c40"),m=a("eebe"),h=a.n(m),d=Object(i["a"])(o,s,n,!1,null,null,null);e["default"]=d.exports;h()(d,"components",{QPage:c["a"],QItemSection:l["a"],QInput:u["a"],QBtn:p["a"]})}}]);