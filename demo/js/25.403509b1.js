(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"4deb":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{attrs:{padding:""}},[r("div",{staticClass:"row fit justify-center"},[r("div",{staticClass:"text-h5 text-center q-pt-md"},[e._v("\n      "+e._s(e.$t("accountMgmt.registration.createProfile"))+"\n    ")])]),r("profile-editor",{key:e.componentKey,attrs:{buttonOk:e.$t("common.next")},on:{buttonOk:function(t){return e.saveProfile()},"language-changed":e.forceRerender},model:{value:e.profile,callback:function(t){e.profile=t},expression:"profile"}})],1)},a=[],n=r("4caa"),o=r("b006"),s=r("c313"),c=r("9bf1"),l={name:"RegisterPage",components:{ProfileEditor:o["a"]},i18n:{messages:n["a"]},data(){return{profile:{name:"",surname:"",dateOfBirth:"",country:"",language:"",sex:"",diseases:[],medications:[],studiesSuggestions:!0},componentKey:0}},methods:{async saveProfile(){try{let e="";this.profile.dateOfBirth instanceof Date?e=this.profile.dateOfBirth.toISOString().substring(0,10):"string"===typeof this.profile.dateOfBirth?e=this.profile.dateOfBirth.substring(0,10):(e=this.profile.dateOfBirth,console.error(this.profile.dateOfBirth+" cannot be cut to date only"));let t=this.profile;t.dateOfBirth=e,t.userKey=c["a"].user._key,t.updatedTS=new Date,t.createdTS=new Date,await s["a"].createProfile(t),await c["a"].setProfile(t),this.$router.push({name:"tasker"})}catch(e){this.$q.notify({color:"negative",message:this.$i18n.t("accountMgmt.registration.registrationError")+": "+e.message,icon:"report_problem"})}},forceRerender(){this.componentKey+=1}}},f=l,u=r("2877"),d=r("9989"),p=r("eebe"),h=r.n(p),g=Object(u["a"])(f,i,a,!1,null,null,null);t["default"]=g.exports;h()(g,"components",{QPage:d["a"]})}}]);