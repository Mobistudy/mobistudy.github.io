(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{"31f2":function(t,s,n){"use strict";n.r(s);var e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("q-page",{attrs:{padding:""}},[n("Intro",{attrs:{introductionSlides:t.$t("studies.tasks.smwt.introductionSlides")},on:{start:function(s){return t.start()}}})],1)},a=[],r=n("a380"),o={name:"SMWTIntroPage",components:{Intro:r["a"]},props:{studyKey:String,taskId:Number},methods:{start(){const t=this.studyKey,s=this.taskId;this.$router.push({name:"smwt",params:{studyKey:t,taskId:s}}),this.$emit("updateTransition","fadeInDown")}}},i=o,u=n("2877"),d=n("9989"),p=n("eebe"),c=n.n(p),l=Object(u["a"])(i,e,a,!1,null,null,null);s["default"]=l.exports;c()(l,"components",{QPage:d["a"]})}}]);