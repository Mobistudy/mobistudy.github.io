(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{ed0c:function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("q-page",{attrs:{padding:""}},[s("Intro",{attrs:{introductionSlides:t.$t("studies.tasks.qcst.introductionSlides")},on:{start:function(n){return t.start()}}})],1)},a=[],r=(s("a9e3"),s("a380")),o={name:"QCSTIntroPage",components:{Intro:r["a"]},props:{studyKey:String,taskId:Number},methods:{start:function(){var t=this.studyKey,n=this.taskId;this.$router.push({name:"qcst",params:{studyKey:t,taskId:n}}),this.$emit("updateTransition","fadeInDown")}}},i=o,u=s("2877"),d=s("9989"),c=s("eebe"),p=s.n(c),l=Object(u["a"])(i,e,a,!1,null,null,null);n["default"]=l.exports;p()(l,"components",{QPage:d["a"]})}}]);