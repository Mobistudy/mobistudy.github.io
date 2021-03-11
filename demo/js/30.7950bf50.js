(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{d995:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"text-h5 text-center"},[t._v("\n    "+t._s(t.$t("studies.privacyPolicy"))+"\n  ")]),a("div",{staticClass:"q-my-md",staticStyle:{"white-space":"pre-line"}},[t._v(t._s(t.studyDescription.consent.privacyPolicy[t.$i18n.locale]))]),a("div",{staticClass:"q-my-md row justify-around"},[a("q-btn",{attrs:{label:t.$t("common.reject"),flat:"",color:"negative"},on:{click:function(e){return t.deny()}}}),a("q-btn",{attrs:{label:t.$t("common.accept"),color:"primary"},on:{click:function(e){return t.accept()}}})],1)])},s=[],i=(a("e6cf"),a("9bf1")),r=a("6a6d"),c=a("bc3a"),o=a.n(c);const u="MOCK";let d={};var p={setToken:t=>{d={headers:{Authorization:"Bearer "+t}}},unsetToken:()=>{d={}},login:async(t,e)=>{console.log("Login BASE:",u);let a=await o.a.post(u+"/login",{email:t,password:e});return a.data},registerUser:async(t,e)=>o.a.post(u+"/users",{email:t,password:e,role:"participant"}),resetPW:async t=>o.a.post(u+"/sendResetPasswordEmail",{email:t}),changePW:async(t,e)=>o.a.post(u+"/resetPassword",{token:t,password:e}),searchDiseaseConcept:async(t,e)=>{const a=await o.a.get(u+"/vocabulary/"+e+"/disorder/search?term="+t+"&limit=10");return a.data},searchMedicationConcept:async(t,e)=>{const a=await o.a.get(u+"/vocabulary/"+e+"/substance/search?term="+t+"&limit=10");return a.data},createProfile:async function(t){return o.a.post(u+"/participants",t,d)},getProfile:async function(t){const e=await o.a.get(u+"/participants/byuserkey/"+t,d);return e.data},updateProfile:async function(t){return o.a.patch(u+"/participants/byuserkey/"+t.userKey,t,d)},deleteUser:async function(t){return o.a.delete(u+"/participants/byuserkey/"+t,d)},updateStudyStatus:async function(t,e,a){return o.a.patch(u+`/participants/byuserkey/${t}/studies/${e}`,a,d)},updateTaskItemConsent:async function(t,e,a){return o.a.patch(u+`/participants/studies/${t}/taskItemsConsent/${e}`,a,d)},getStudyDescription:async function(t){let e=await o.a.get(u+"/studies/"+t,d);return e.data},getNewStudiesKeys:async function(){let t=await o.a.get(u+"/newStudies/",d);return t.data},getInvitationalStudy:async function(t){let e=await o.a.get(u+`/invitationalStudy/${t}`,d);return e.data},getForm:async function(t){let e=await o.a.get(u+"/forms/"+t,d);return e.data},sendAnswers:async function(t){return o.a.post(u+"/answers",t,d)},sendDataQuery:async function(t){return o.a.post(u+"/healthStoreData",t,d)},sendSMWTData:async function(t){return o.a.post(u+"/SMWTData",t,d)},sendQCSTData:async function(t){return o.a.post(u+"/QCSTData",t,d)},sendMiBand3Data:async function(t){return o.a.post(u+"/miband3Data",t,d)},sendPO60Data:async function(t){return o.a.post(u+"/po60Data",t,d)}},y={name:"PrivacyPolicyPage",props:["studyDescription"],methods:{accept(){this.$router.push({name:"consentItems",params:{studyDescription:this.studyDescription}})},async deny(){this.$q.dialog({title:this.$i18n.t("studies.discardStudy"),message:this.$i18n.t("studies.discardStudyConfirm"),color:"primary",ok:this.$i18n.t("common.yes"),cancel:this.$i18n.t("common.cancel")}).onOk((async()=>{let t={studyKey:this.studyDescription._key,currentStatus:"rejected",rejectedTS:new Date};try{await p.updateStudyStatus(i["a"].user._key,this.studyDescription._key,t);let e=await r["a"].getStudiesParticipation();e||(e=[]),e.push(t),await r["a"].setStudiesParticipation(e),this.$router.push({name:"studies"})}catch(e){console.error("Cannot connect to server",e),this.$q.notify({color:"negative",message:this.$i18n.t("errors.connectionError")+": "+e.messagee,icon:"report_problem"})}}))}}},l=y,m=a("2877"),h=a("9989"),f=a("9c40"),g=a("eebe"),w=a.n(g),S=Object(m["a"])(l,n,s,!1,null,null,null);e["default"]=S.exports;w()(S,"components",{QPage:h["a"],QBtn:f["a"]})}}]);