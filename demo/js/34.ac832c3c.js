(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{"987b":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[n("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("q-tab",{attrs:{name:"info",icon:"info",label:t.$t("common.info")}}),n("q-tab",{attrs:{name:"privacy",icon:"lock",label:t.$t("common.privacy")}}),"accepted"==t.studyParticipation.currentStatus?n("q-tab",{attrs:{name:"consent",icon:"done",label:t.$t("common.consent")}}):t._e()],1),n("q-separator"),n("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("q-tab-panel",{attrs:{name:"info"}},[n("study-info",{attrs:{studyDescription:t.studyDescription}})],1),n("q-tab-panel",{attrs:{name:"privacy"},domProps:{innerHTML:t._s(t.studyDescription.consent.privacyPolicy[t.$i18n.locale].replace(new RegExp("\n","g"),"<br>"))}}),n("q-tab-panel",{attrs:{name:"consent"}},[n("q-list",[n("q-item",[n("q-item-section",[n("q-item-label",{staticClass:"text-subtitle1"},[t._v(t._s(t.$t("studies.consent.itemsExplanation"))+":")])],1)],1)],1),n("consents",{attrs:{studyDescription:t.studyDescription,taskType:t.taskType,consentedExtraItems:t.consentedExtraItems,consentedTaskItems:t.consentedTaskItems,remindersPermissionGiven:t.remindersPermissionGiven,remindersPermissionNeeded:t.remindersPermissionNeeded},on:{checkboxReminders:t.requestNotificationsPermission}}),n("div",{staticClass:"q-my-md row justify-center"},[n("q-btn",{attrs:{label:t.$t("studies.consent.updateConsent"),color:"primary",disabled:!t.canUpdate},on:{click:function(e){return t.updateConsent()}}})],1),n("div",{staticClass:"q-my-md row justify-center"},[n("q-btn",{attrs:{label:t.$t("studies.consent.withdraw"),color:"negative"},on:{click:function(e){return t.withdraw()}}})],1)],1)],1)],1)},i=[],r=(n("7db0"),n("d81d"),n("96cf"),n("c973")),a=n.n(r),o=n("b6bd"),c=n("b626"),d=n("9bf1"),u=n("6a6d"),m=n("aa9c"),p=n("ee76"),l={name:"StudyConfigPage",props:["studyDescription"],components:{StudyInfo:c["a"],Consents:o["a"]},data:function(){return{consentedExtraItems:[],consentedTaskItems:[],studyParticipation:{},remindersPermissionNeeded:Boolean,remindersPermissionGiven:Boolean,tab:"info"}},created:function(){var t=this;return a()(regeneratorRuntime.mark((function e(){var n,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].getStudyParticipation(t.studyDescription._key);case 2:if(t.studyParticipation=e.sent,"withdrawn"===t.studyParticipation.currentStatus||"completed"===t.studyParticipation.currentStatus){e.next=16;break}if(!t.studyParticipation.reminders){e.next=9;break}t.remindersPermissionNeeded=!1,t.remindersPermissionGiven=!0,e.next=14;break;case 9:return e.next=11,p["a"].hasPermission();case 11:n=e.sent,t.remindersPermissionNeeded=!n,t.remindersPermissionGiven=n;case 14:if(t.studyDescription.consent.extraItems)for(s=0;s<t.studyDescription.consent.extraItems.length;s++)t.consentedExtraItems.push(t.studyParticipation.extraItemsConsent[s].consented);if(t.studyDescription.consent.taskItems)for(i=0;i<t.studyDescription.consent.taskItems.length;i++)t.consentedTaskItems.push(t.studyParticipation.taskItemsConsent[i].consented);case 16:case"end":return e.stop()}}),e)})))()},computed:{taskType:function(){var t=this;return this.studyDescription.consent.taskItems.map((function(e){return t.studyDescription.tasks.find((function(t){return t.id===e.taskId})).type}))},canUpdate:function(){if(this.studyParticipation.taskItemsConsent)for(var t=0;t<this.studyParticipation.taskItemsConsent.length;t++)if(this.consentedTaskItems[t]!==this.studyParticipation.taskItemsConsent[t].consented)return!0;if(this.studyParticipation.extraItemsConsent)for(var e=0;e<this.studyParticipation.extraItemsConsent.length;e++)if(this.consentedExtraItems[e]!==this.studyParticipation.extraItemsConsent[e].consented)return!0;return this.remindersPermissionGiven!==this.studyParticipation.reminders}},methods:{updateConsent:function(){var t=this;return a()(regeneratorRuntime.mark((function e(){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(t.studyParticipation.reminders=t.remindersPermissionGiven,n=0;n<t.studyDescription.consent.taskItems.length;n++)t.studyParticipation.taskItemsConsent[n].consented=t.consentedTaskItems[n];if(t.studyParticipation.extraItemsConsent)for(s=0;s<t.studyDescription.consent.extraItems.length;s++)t.studyParticipation.extraItemsConsent[s].consented=t.consentedExtraItems[s];return e.next=5,m["a"].updateStudyStatus(d["a"].user._key,t.studyParticipation.studyKey,t.studyParticipation);case 5:return e.next=7,u["a"].setStudyParticipation(t.studyParticipation);case 7:t.$q.notify({color:"positive",message:t.$i18n.t("studies.consent.consentUpdated"),icon:"check"});case 8:case"end":return e.stop()}}),e)})))()},requestNotificationsPermission:function(t){var e=this;return a()(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t){n.next=4;break}e.remindersPermissionGiven=!1,n.next=15;break;case 4:return n.prev=4,n.next=7,p["a"].requestPermission();case 7:e.remindersPermissionGiven=n.sent,e.$q.notify({color:"positive",message:e.$i18n.t("studies.consent.OSPermissionGiven"),icon:"check"}),n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](4),console.error("Cannot get authorisation for sending reminders",n.t0),e.$q.notify({color:"negative",message:e.$i18n.t("studies.consent.OSPermissionNotGiven")+": "+n.t0.message,icon:"report_problem"});case 15:case"end":return n.stop()}}),n,null,[[4,11]])})))()},withdraw:function(){var t=this;return a()(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$q.dialog({title:"Withdraw",message:"Are you sure you want to withdraw from this study? If yes, please state why",color:"negative",prompt:{model:"",type:"text"},ok:"Withdraw",cancel:"Cancel"}).onOk(function(){var e=a()(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.studyParticipation.currentStatus="withdrawn",t.studyParticipation.withdrawalTS=new Date,t.studyParticipation.withdrawalReason=n,e.prev=3,e.next=6,m["a"].updateStudyStatus(d["a"].user._key,t.studyParticipation.studyKey,t.studyParticipation);case 6:return delete t.studyParticipation.extraItemsConsent,delete t.studyParticipation.taskItemsConsent,e.next=10,u["a"].setStudyParticipation(t.studyParticipation);case 10:t.$router.push({name:"studies"}),e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](3),console.error("Cannot connect to server",e.t0),t.$q.notify({color:"negative",message:"Cannot discard this study: "+e.t0.message,icon:"report_problem"});case 17:t.$emit("updateTransition","slideInDown");case 18:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})))()}}},y=l,f=n("2877"),h=n("9989"),P=n("429b"),b=n("7460"),v=n("eb85"),k=n("adad"),w=n("823b"),x=n("1c1c"),g=n("66e5"),I=n("4074"),q=n("0170"),C=n("9c40"),S=n("eebe"),$=n.n(S),D=Object(f["a"])(y,s,i,!1,null,null,null);e["default"]=D.exports;$()(D,"components",{QPage:h["a"],QTabs:P["a"],QTab:b["a"],QSeparator:v["a"],QTabPanels:k["a"],QTabPanel:w["a"],QList:x["a"],QItem:g["a"],QItemSection:I["a"],QItemLabel:q["a"],QBtn:C["a"]})}}]);