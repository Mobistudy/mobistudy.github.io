(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{"71a8":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{attrs:{padding:""}},[r("div",{staticClass:"row fit justify-center"},[r("div",{staticClass:"text-h5 text-center q-pt-md"},[e._v("\n      "+e._s(e.$t("accountMgmt.profile.profile"))+"\n    ")])]),r("profile-editor",{attrs:{buttonOk:e.$t("common.update")},on:{buttonOk:function(t){return e.saveProfile()}},model:{value:e.profile,callback:function(t){e.profile=t},expression:"profile"}}),r("q-separator"),r("q-item",{staticClass:"q-mt-md"},[r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{color:"grey",name:"security"}})],1),r("q-item-section",[r("q-item-label",[e._v(e._s(e.$t("accountMgmt.resetPassword.resetPassword")))]),r("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.$t("accountMgmt.resetPassword.resetPasswordShort")))]),r("div",{staticClass:"q-my-md"},[r("q-btn",{attrs:{color:"primary",label:e.$t("accountMgmt.resetPassword.resetPassword")},on:{click:function(t){return e.resetPwd()}}})],1)],1)],1),r("q-separator",{attrs:{inset:""}}),r("q-item",{staticClass:"q-mt-md"},[r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{color:"grey",name:"exit_to_app"}})],1),r("q-item-section",[r("q-item-label",[e._v(e._s(e.$t("accountMgmt.login.logout")))]),r("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.$t("accountMgmt.login.logoutShort")))]),r("div",{staticClass:"q-my-md"},[r("q-btn",{attrs:{color:"warning",label:e.$t("accountMgmt.login.logout")},on:{click:function(t){return e.logout()}}})],1)],1)],1),r("q-separator",{attrs:{inset:""}}),r("q-item",{staticClass:"q-mt-md"},[r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{color:"grey",name:"delete_forever"}})],1),r("q-item-section",[r("q-item-label",[e._v(e._s(e.$t("accountMgmt.deleteAccount")))]),r("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.$t("accountMgmt.deleteShort")))]),r("div",{staticClass:"q-my-md"},[r("q-btn",{attrs:{color:"negative",label:e.$t("common.delete")},on:{click:function(t){return e.deleteUser()}}})],1)],1)],1)],1)},a=[],o=(r("96cf"),r("c973")),s=r.n(o),i=r("b006"),c=r("aa9c"),l=r("6a6d"),u=r("ee76"),m=r("9bf1"),p={name:"ProfilePage",components:{ProfileEditor:i["a"]},data:function(){return{profile:{name:"",surname:"",dateOfBirth:"",country:"",language:"",sex:"",diseases:[],medications:[],lifestyle:{smoker:!1,active:!1}}}},created:function(){var e=this;return s()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$q.loading.show(),t.prev=1,t.next=4,c["a"].getProfile(m["a"].user._key);case 4:return e.profile=t.sent,t.next=7,m["a"].setProfile(e.profile);case 7:e.$q.loading.hide(),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](1),e.$q.notify({color:"negative",message:e.$i18n.t("errors.connectionError")+": "+t.t0.message,icon:"report_problem"}),e.$q.loading.hide();case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()},methods:{logout:function(){var e=this;return s()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$q.dialog({title:e.$i18n.t("accountMgmt.login.logout"),message:e.$i18n.t("accountMgmt.login.logoutConfirmation"),ok:e.$i18n.t("accountMgmt.login.logout"),cancel:e.$i18n.t("common.cancel")}).onOk(s()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m["a"].logout();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.log(t.t0);case 8:c["a"].setToken(""),e.$router.push("/login");case 10:case"end":return t.stop()}}),t,null,[[0,5]])}))));case 1:case"end":return t.stop()}}),t)})))()},saveProfile:function(){var e=this;return s()(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r="",e.profile.dateOfBirth instanceof Date?r=e.profile.dateOfBirth.toISOString().substring(0,10):"string"===typeof e.profile.dateOfBirth?r=e.profile.dateOfBirth.substring(0,10):(r=e.profile.dateOfBirth,console.error(e.profile.dateOfBirth+" cannot be cut to date only")),n=e.profile,n.dateOfBirth=r,n.userKey=m["a"].user._key,n.updatedTS=new Date,t.next=9,c["a"].updateProfile(n);case 9:return t.next=11,m["a"].setProfile(n);case 11:e.$router.push({name:"tasker",params:{rescheduleTasks:!0,checkNewStudies:!0}}),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),e.$q.notify({color:"negative",message:e.$i18n.t("errors.connectionError")+": "+t.t0.message,icon:"report_problem"});case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},resetPwd:function(){var e=this;return s()(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].resetPW(m["a"].user.email.toLowerCase());case 3:return r=m["a"].user.email,u["a"].cancelAll(),t.next=7,m["a"].logout();case 7:return c["a"].unsetToken(),t.next=10,l["a"].emptyUserData();case 10:e.$router.push({name:"changepw",params:{email:r}}),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),e.$q.notify({color:"negative",message:e.$i18n.t("errors.connectionError")+": "+t.t0.message,icon:"report_problem"});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()},deleteUser:function(){var e=this;return s()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$q.dialog({title:e.$i18n.t("common.warning"),message:e.$i18n.t("accountMgmt.deleteWarning"),ok:{label:e.$i18n.t("common.delete"),push:!0,color:"negative"},cancel:{push:!0,color:"grey",flat:!0}}).onOk(s()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].deleteUser(m["a"].user.user._key);case 3:e.$router.push("/login"),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.$q.notify({color:"negative",message:e.$i18n.t("errors.connectionError")+": "+t.t0.message,icon:"report_problem"});case 9:case"end":return t.stop()}}),t,null,[[0,6]])}))));case 1:case"end":return t.stop()}}),t)})))()}}},g=p,f=r("2877"),d=r("9989"),v=r("eb85"),h=r("66e5"),w=r("4074"),q=r("0016"),b=r("0170"),$=r("9c40"),k=r("eebe"),x=r.n(k),_=Object(f["a"])(g,n,a,!1,null,null,null);t["default"]=_.exports;x()(_,"components",{QPage:d["a"],QSeparator:v["a"],QItem:h["a"],QItemSection:w["a"],QIcon:q["a"],QItemLabel:b["a"],QBtn:$["a"]})}}]);