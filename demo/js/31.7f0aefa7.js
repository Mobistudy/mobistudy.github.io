(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{"0acf":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t._self._c;return e("q-page",{attrs:{padding:""}},[e("div",{staticClass:"row fit justify-center"},[e("div",{staticClass:"text-h5 text-center q-pt-md"},[t._v("\n      "+t._s(t.$t("accountMgmt.registration.signUp"))+"\n    ")])]),e("q-input",{attrs:{label:t.$t("accountMgmt.email"),type:"email",error:t.$v.account.email.$error,"error-message":t.$t("accountMgmt.emailRequiredError")},nativeOn:{blur:function(e){return t.$v.account.email.$touch.apply(null,arguments)}},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"mail_outline"}})]},proxy:!0}]),model:{value:t.account.email,callback:function(e){t.$set(t.account,"email",e)},expression:"account.email"}}),e("q-input",{attrs:{label:t.$t("accountMgmt.password"),type:"password",error:t.$v.account.pw1.$error,"error-message":t.pwdCheckErrorMsg()},nativeOn:{blur:function(e){return t.$v.account.pw1.$touch.apply(null,arguments)}},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}]),model:{value:t.account.pw1,callback:function(e){t.$set(t.account,"pw1",e)},expression:"account.pw1"}}),e("q-input",{attrs:{label:t.$t("accountMgmt.confirmPassword"),type:"password",error:t.$v.account.pw2.$error,"error-message":t.$t("accountMgmt.confirmPasswordError")},nativeOn:{blur:function(e){return t.$v.account.pw2.$touch.apply(null,arguments)}},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}]),model:{value:t.account.pw2,callback:function(e){t.$set(t.account,"pw2",e)},expression:"account.pw2"}}),e("div",{staticClass:"row fit justify-around q-mt-lg"},[e("q-btn",{attrs:{color:"negative",to:"/login",label:t.$t("common.cancel")}}),e("q-btn",{attrs:{color:"primary",disable:t.$v.account.$error,label:t.$t("accountMgmt.registration.createAccount")},on:{click:function(e){return t.register()}}})],1)],1)},n=[],o=(r("14d9"),r("4caa")),c=r("d832"),s=r("2dba"),i=r("0d3a"),u=r("c313"),l=r("9bf1"),p=r("b5ae"),m={name:"SignUp",i18n:{messages:Object(s["a"])(o["a"],c["a"])},data(){return{account:{email:"",pw1:"",pw2:""}}},validations(){return{account:{email:{required:p["required"],email:p["email"]},pw1:{required:p["required"],pwdStrength:Object(i["a"])(this.account.email)},pw2:{sameAsPassword:Object(p["sameAs"])("pw1")}}}},methods:{pwdCheckErrorMsg(){let t=Object(i["c"])(this.email,this.account.pw1),e=this.$i18n.t(t,i["b"]);return e},async register(){if(this.$v.account.$touch(),this.$v.account.$error)this.$q.notify(this.$i18n.t("errors.correctFields"));else try{await u["a"].registerUser(this.account.email.toLowerCase(),this.account.pw1);let t=await u["a"].login(this.account.email.toLowerCase(),this.account.pw1);await l["a"].login(t),u["a"].setToken(t.token),this.$router.push("/register_profile")}catch(t){if(t.response&&409===t.response.status&&this.$q.notify({color:"negative",message:this.$i18n.t("accountMgmt.registration.registrationErrorUserExists"),icon:"report_problem"}),t.response&&400===t.response.status)this.$q.notify({color:"negative",message:this.$i18n.t("accountMgmt.registration.registrationErrorWrongEmail"),icon:"report_problem"});else{let e=t.response&&t.response.data?t.response.data:t.message;this.$q.notify({color:"negative",message:this.$i18n.t("accountMgmt.registration.registrationError")+": "+e,icon:"report_problem"})}}}}},g=m,d=r("2877"),w=r("9989"),$=r("27f9"),f=r("0016"),h=r("9c40"),b=r("eebe"),v=r.n(b),y=Object(d["a"])(g,a,n,!1,null,null,null);e["default"]=y.exports;v()(y,"components",{QPage:w["a"],QInput:$["a"],QIcon:f["a"],QBtn:h["a"]})}}]);