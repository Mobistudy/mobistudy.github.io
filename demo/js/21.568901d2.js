(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{c20a:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",[s("q-page-container",[s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"fit row justify-center"},[s("div",{staticClass:"text-h4"},[t._v(t._s(t.$t("accountMgmt.resetPassword.newPassword")))])]),s("div",{staticClass:"fit row justify-center q-mt-lg"},[s("p",{staticClass:"col"},[t._v(t._s(t.$t("accountMgmt.resetPassword.newPasswordExplanation")))])]),s("div",{staticClass:"fit row justify-center q-mt-lg"},[s("q-input",{staticClass:"col-grow",attrs:{type:"textarea",autogrow:"",clearable:"",label:t.$t("accountMgmt.resetPassword.token"),hint:t.$t("accountMgmt.resetPassword.tokenHint"),error:t.$v.token.$error,"error-message":t.$t("accountMgmt.resetPassword.tokenError")},nativeOn:{blur:function(e){return t.$v.token.$touch(e)}},model:{value:t.token,callback:function(e){t.token=e},expression:"token"}})],1),s("div",{staticClass:"fit row justify-center q-mt-lg"},[s("q-input",{staticClass:"col-grow",attrs:{label:t.$t("accountMgmt.resetPassword.newPassword"),type:"password",error:t.$v.newpw.$error,"error-message":t.pwdCheckErrorMsg()},nativeOn:{blur:function(e){return t.$v.newpw.$touch(e)}},model:{value:t.newpw,callback:function(e){t.newpw=e},expression:"newpw"}})],1),s("div",{staticClass:"fit row justify-center q-mt-lg"},[s("q-input",{staticClass:"col-grow",attrs:{label:t.$t("accountMgmt.resetPassword.confirmPwd"),type:"password",error:t.$v.confpw.$error,"error-message":t.$t("accountMgmt.resetPassword.pwdMustMatch")},nativeOn:{blur:function(e){return t.$v.confpw.$touch(e)}},model:{value:t.confpw,callback:function(e){t.confpw=e},expression:"confpw"}})],1),s("div",{staticClass:"fit row justify-center q-mt-lg"},[s("div",{staticClass:"q-ma-sm"},[s("q-btn",{staticClass:"float-right",attrs:{label:t.$t("common.cancel"),color:"secondary",to:"/login"}})],1),s("div",{staticClass:"q-ma-sm"},[s("q-btn",{staticClass:"float-right",attrs:{label:t.$t("accountMgmt.resetPassword.changePassword"),color:"primary",type:"submit"},on:{click:t.resetUserPassword}})],1)])])],1)],1)},r=[],o=(s("e6cf"),s("4caa")),n=s("d832"),c=s("2dba"),i=s("0d3a"),l=s("b5ae"),w=s("9bf1"),d=s("c313"),u={name:"ChangePasswordPage",props:["email"],i18n:{messages:Object(c["a"])(o["a"],n["a"])},data(){return{userEmail:this.email,token:void 0,newpw:void 0,confpw:void 0}},validations(){return{token:{required:l["required"]},newpw:{required:l["required"],pwdStrength:Object(i["a"])(this.userEmail)},confpw:{sameAsPassword:Object(l["sameAs"])("newpw")}}},async created(){await w["a"].logout()},methods:{pwdCheckErrorMsg(){let t=Object(i["c"])(this.email,this.newpw),e=this.$i18n.t(t,i["b"]);return e},async resetUserPassword(){if(this.$v.$touch(),!this.$v.$invalid)try{await d["a"].changePW(this.token,this.newpw),this.$q.dialog({title:this.$i18n.t("accountMgmt.resetPassword.passwordChanged"),message:this.$i18n.t("accountMgmt.resetPassword.passwordChangedExplanation"),ok:!0,cancel:!1,preventClose:!0}).onOk((()=>{this.$router.push("/login")}))}catch(t){this.$q.notify({color:"negative",message:this.$i18n.t("accountMgmt.resetPassword.changePasswordError")+": "+t.message,icon:"report_problem"})}}}},p=u,g=s("2877"),m=s("4d5a"),h=s("09e3"),f=s("9989"),v=s("27f9"),$=s("9c40"),b=s("eebe"),P=s.n(b),C=Object(g["a"])(p,a,r,!1,null,null,null);e["default"]=C.exports;P()(C,"components",{QLayout:m["a"],QPageContainer:h["a"],QPage:f["a"],QInput:v["a"],QBtn:$["a"]})}}]);