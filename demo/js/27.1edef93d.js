(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{7578:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",[a("q-page-container",[a("q-page",{staticClass:"flex flex-center",attrs:{padding:""}},[a("div",{staticClass:"text-h4"},[e._v(e._s(e.$t("accountMgmt.resetPassword.resetPassword")))]),a("div",{staticStyle:{width:"90vw"}},[a("q-input",{attrs:{type:"email",label:e.$t("accountMgmt.email"),autocomplete:"on","error-message":e.$t("accountMgmt.emailRequiredError"),error:e.$v.email.$error},nativeOn:{blur:function(t){return e.$v.email.$touch(t)}},model:{value:e.$v.email.$model,callback:function(t){e.$set(e.$v.email,"$model","string"===typeof t?t.trim():t)},expression:"$v.email.$model"}}),a("br"),a("q-btn",{staticClass:"float-left",attrs:{label:e.$t("common.cancel"),color:"secondary"},on:{click:function(t){return e.$router.push("login")}}}),a("q-btn",{staticClass:"float-right",attrs:{label:e.$t("accountMgmt.resetPassword.resetPassword"),color:"positive",type:"submit"},on:{click:e.submit}})],1)])],1)],1)},n=[],s=(a("96cf"),a("c973")),o=a.n(s),i=a("b5ae"),l=a("aa9c"),c={name:"ResetPasswordPage",data:function(){return{email:null}},validations:{email:{required:i["required"],email:i["email"]}},methods:{submit:function(){var e=this;return o()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$v.$touch(),e.$v.$invalid){t.next=11;break}return t.prev=2,t.next=5,l["a"].resetPW(e.email.toLowerCase());case 5:e.$router.push({name:"changepw",params:{email:e.email}}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),e.$q.notify({color:"negative",message:e.$i18n.t("accountMgmt.resetPassword.resetPasswordError")+": "+t.t0.message,icon:"report_problem"});case 11:case"end":return t.stop()}}),t,null,[[2,8]])})))()}}},u=c,m=a("2877"),d=a("4d5a"),p=a("09e3"),$=a("9989"),v=a("27f9"),f=a("9c40"),g=a("eebe"),w=a.n(g),b=Object(m["a"])(u,r,n,!1,null,null,null);t["default"]=b.exports;w()(b,"components",{QLayout:d["a"],QPageContainer:p["a"],QPage:$["a"],QInput:v["a"],QBtn:f["a"]})}}]);