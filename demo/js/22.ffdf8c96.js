(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{e3fb:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",[a("q-page-container",[a("q-page",{staticClass:"flex flex-center",attrs:{padding:""}},[a("div",{staticClass:"text-center"},[a("img",{staticStyle:{width:"30vw","max-width":"150px"},attrs:{src:"logos/logo.svg"}}),a("div",{staticClass:"q-title text-h5 text-center"},[t._v("Mobistudy v "+t._s(t.appVersion))])]),a("div",{staticStyle:{width:"90vw"}},[a("q-input",{attrs:{label:t.$t("accountMgmt.email"),error:t.$v.username.$error,"error-message":t.$t("accountMgmt.emailRequiredError")},nativeOn:{blur:function(e){return t.$v.username.$touch(e)}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("q-input",{attrs:{label:t.$t("accountMgmt.password"),type:"password",error:t.$v.password.$error,"error-message":t.$t("accountMgmt.passwordRequiredError")},nativeOn:{blur:function(e){return t.$v.password.$touch(e)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("div",{staticClass:"row"},[a("q-btn",{staticClass:"q-ma-sm full-width",attrs:{label:t.$t("accountMgmt.login.login"),color:"primary",type:"submit"},on:{click:t.login}}),a("q-btn",{staticClass:"q-ma-sm q-mb-lg full-width",attrs:{label:t.$t("accountMgmt.login.lostpw"),color:"grey",flat:"",outline:"",to:"resetpw"}}),a("q-list",{staticClass:"full-width"},[a("q-separator"),a("q-item",{staticClass:"full-width"},[a("q-item-section",{staticClass:"full-width"},[a("q-item-label",{staticClass:"text-center q-mt-lg q-mb-md"},[t._v(t._s(t.$t("accountMgmt.login.noAcc")))])],1)],1),a("q-item",{staticClass:"full-width"},[a("q-item-section",{staticClass:"full-width"},[a("q-btn",{staticClass:"full-width",attrs:{label:t.$t("accountMgmt.register"),color:"secondary",to:"register_pp"}})],1)],1)],1)],1)],1)])],1)],1)},r=[],o=(a("e6cf"),a("5319"),a("4caa")),i=a("b5ae"),n=a("6a6d"),l=a("c313"),c=a("9bf1"),u=a("3615"),m={name:"LoginPage",i18n:{messages:o["a"]},data(){return{username:"",password:"",error:!1}},computed:{appVersion(){return"0.2.7"}},validations:{username:{required:i["required"]},password:{required:i["required"]}},async created(){u["a"].cancelAll();try{await c["a"].logout()}catch(t){console.error(t)}l["a"].unsetToken(),await n["a"].emptyUserData()},methods:{async login(){if(this.$v.$touch(),!this.$v.$error){try{let t=await l["a"].login(this.username.toLowerCase(),this.password);await c["a"].login(t),l["a"].setToken(t.token)}catch(t){console.error(t),this.error=!0,t.response&&401===t.response.status?this.$q.notify({color:"negative",message:this.$i18n.t("accountMgmt.login.loginErrorCredentials"),icon:"report_problem"}):this.$q.notify({color:"negative",message:this.$i18n.t("accountMgmt.login.loginError")+": "+t.message,icon:"report_problem"})}try{let t=await l["a"].getProfile(c["a"].user._key);t.language&&(this.$root.$i18n.locale=t.language),await c["a"].setProfile(t),t.studies&&await n["a"].setStudiesParticipation(t.studies),this.$router.replace({name:"tasker"})}catch(t){404===t.response.status&&this.$router.replace("/register_profile")}}}}},d=m,g=a("2877"),p=a("4d5a"),w=a("09e3"),h=a("9989"),f=a("27f9"),q=a("9c40"),$=a("1c1c"),b=a("eb85"),v=a("66e5"),y=a("4074"),C=a("0170"),x=a("eebe"),M=a.n(x),_=Object(g["a"])(d,s,r,!1,null,null,null);e["default"]=_.exports;M()(_,"components",{QLayout:p["a"],QPageContainer:w["a"],QPage:h["a"],QInput:f["a"],QBtn:q["a"],QList:$["a"],QSeparator:b["a"],QItem:v["a"],QItemSection:y["a"],QItemLabel:C["a"]})}}]);