(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{d995:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"text-h5 text-center"},[t._v("\n    "+t._s(t.$t("studies.privacyPolicy"))+"\n  ")]),s("div",{staticClass:"q-my-md",staticStyle:{"white-space":"pre-line"}},[t._v(t._s(t.studyDescription.consent.privacyPolicy[t.$i18n.locale]))]),s("div",{staticClass:"q-my-md row justify-around"},[s("q-btn",{attrs:{label:t.$t("common.reject"),flat:"",color:"negative"},on:{click:function(e){return t.deny()}}}),s("q-btn",{attrs:{label:t.$t("common.accept"),color:"primary"},on:{click:function(e){return t.accept()}}})],1)])},n=[],a=s("9bf1"),c=s("6a6d"),r=s("c313"),o={name:"PrivacyPolicyPage",props:["studyDescription"],methods:{accept(){this.$router.push({name:"consentItems",params:{studyDescription:this.studyDescription}})},async deny(){this.$q.dialog({title:this.$i18n.t("studies.discardStudy"),message:this.$i18n.t("studies.discardStudyConfirm"),color:"primary",ok:this.$i18n.t("common.yes"),cancel:this.$i18n.t("common.cancel")}).onOk((async()=>{let t={studyKey:this.studyDescription._key,currentStatus:"rejected",rejectedTS:new Date};try{await r["a"].updateStudyStatus(a["a"].user._key,this.studyDescription._key,t);let e=await c["a"].getStudiesParticipation();e||(e=[]),e.push(t),await c["a"].setStudiesParticipation(e),this.$router.push({name:"studies"})}catch(e){console.error("Cannot connect to server",e),this.$q.notify({color:"negative",message:this.$i18n.t("errors.connectionError")+": "+e.messagee,icon:"report_problem"})}}))}}},u=o,d=s("2877"),l=s("9989"),p=s("9c40"),y=s("eebe"),m=s.n(y),h=Object(d["a"])(u,i,n,!1,null,null,null);e["default"]=h.exports;m()(h,"components",{QPage:l["a"],QBtn:p["a"]})}}]);