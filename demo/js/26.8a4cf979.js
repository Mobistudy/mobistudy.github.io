(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{7578:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",[a("q-page-container",[a("q-page",{staticClass:"flex flex-center",attrs:{padding:""}},[a("div",{staticClass:"text-h4"},[e._v(e._s(e.$t("accountMgmt.resetPassword.resetPassword")))]),a("div",{staticStyle:{width:"90vw"}},[a("q-input",{attrs:{type:"email",label:e.$t("accountMgmt.email"),autocomplete:"on","error-message":e.$t("accountMgmt.emailRequiredError"),error:e.$v.email.$error},nativeOn:{blur:function(t){return e.$v.email.$touch(t)}},model:{value:e.$v.email.$model,callback:function(t){e.$set(e.$v.email,"$model","string"===typeof t?t.trim():t)},expression:"$v.email.$model"}}),a("br"),a("q-btn",{staticClass:"float-left",attrs:{label:e.$t("common.cancel"),color:"secondary"},on:{click:function(t){return e.$router.push("login")}}}),a("q-btn",{staticClass:"float-right",attrs:{label:e.$t("accountMgmt.resetPassword.resetPassword"),color:"primary",type:"submit"},on:{click:e.submit}})],1)])],1)],1)},r=[],i=(a("e6cf"),a("dc04")),o=a("b5ae"),n=a("c313"),l={name:"ResetPasswordPage",i18n:{messages:i["a"]},data(){return{email:null}},validations:{email:{required:o["required"],email:o["email"]}},methods:{async submit(){if(this.$v.$touch(),!this.$v.$invalid)try{await n["a"].resetPW(this.email.toLowerCase()),this.$router.push({name:"changepw",params:{email:this.email}})}catch(e){this.$q.notify({color:"negative",message:this.$i18n.t("accountMgmt.resetPassword.resetPasswordError")+": "+e.message,icon:"report_problem"})}}}},c=l,m=a("2877"),u=a("4d5a"),d=a("09e3"),$=a("9989"),p=a("27f9"),g=a("9c40"),h=a("eebe"),v=a.n(h),w=Object(m["a"])(c,s,r,!1,null,null,null);t["default"]=w.exports;v()(w,"components",{QLayout:u["a"],QPageContainer:d["a"],QPage:$["a"],QInput:p["a"],QBtn:g["a"]})}}]);