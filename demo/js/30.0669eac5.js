(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{d483:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{attrs:{padding:""}},[e("div",{staticClass:"text-h5 text-center"},[t._v("\n    "+t._s(t.$t("studies.studyDetails"))+"\n  ")]),e("study-info",{attrs:{studyDescription:t.studyDescription}}),e("div",{staticClass:"q-my-md flex flex-center"},[e("q-btn",{staticClass:"full-width q-mt-sm q-mb-lg",attrs:{color:"primary",label:t.$t("common.next")},on:{click:function(s){return t.next()}}})],1)],1)},i=[],a=e("b626"),c={name:"StudyDetailsPage",props:["studyDescription"],components:{StudyInfo:a["a"]},methods:{next(){this.$router.push({name:"privacyPolicy",params:{studyDescription:this.studyDescription}})}}},o=c,r=e("2877"),l=e("9989"),u=e("9c40"),d=e("eebe"),p=e.n(d),m=Object(r["a"])(o,n,i,!1,null,null,null);s["default"]=m.exports;p()(m,"components",{QPage:l["a"],QBtn:u["a"]})}}]);