(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{d483:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t._self._c;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"text-h5 text-center"},[t._v("\n    "+t._s(t.$t("studies.studyDetails"))+"\n  ")]),s("study-info",{attrs:{studyDescription:t.studyDescription}}),s("div",{staticClass:"q-my-md flex flex-center"},[s("q-btn",{staticClass:"full-width q-mt-sm q-mb-lg",attrs:{color:"primary",label:t.$t("common.next")},on:{click:function(s){return t.next()}}})],1)],1)},i=[],a=(e("14d9"),e("b626")),o={name:"StudyDetailsPage",props:["studyDescription"],components:{StudyInfo:a["a"]},methods:{next(){this.$router.push({name:"privacyPolicy",params:{studyDescription:this.studyDescription}})}}},c=o,r=e("2877"),u=e("9989"),l=e("9c40"),d=e("eebe"),p=e.n(d),m=Object(r["a"])(c,n,i,!1,null,null,null);s["default"]=m.exports;p()(m,"components",{QPage:u["a"],QBtn:l["a"]})}}]);