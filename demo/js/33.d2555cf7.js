(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{"4d6a":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[e._l(e.newStudies,(function(t,r){return n("q-card",{key:r,staticClass:"q-mb-md",attrs:{bordered:""}},[n("q-card-section",[n("div",{staticClass:"row no-wrap"},[n("div",{staticClass:"col"},[n("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("studies.newStudyInvite")))]),n("div",{staticClass:"text-subtitle1"},[e._v(e._s(t.generalities.title[e.$i18n.locale]))]),n("div",{staticClass:"text-subtitle2"},[e._v(e._s(t.generalities.shortDescription[e.$i18n.locale]))])])])]),t.inclusionCriteria.criteriaQuestions&&t.inclusionCriteria.criteriaQuestions.length>0?n("q-card-section",[e._v("\n      "+e._s(e.$t("studies.newStudyExtraCriteria"))+":\n      "),e._l(t.inclusionCriteria.criteriaQuestions,(function(t,i){return n("div",{key:i},[n("p",{staticClass:"q-mt-md text-subtitle2"},[e._v(e._s(t.title[e.$i18n.locale]))]),n("div",{staticClass:"row"},[n("q-radio",{staticClass:"col",attrs:{val:"yes",label:e.$t("common.yes")},model:{value:e.newStudiesCustomAnswers[r][i],callback:function(t){e.$set(e.newStudiesCustomAnswers[r],i,t)},expression:"newStudiesCustomAnswers[studyIndex][questionIndex]"}}),n("q-radio",{staticClass:"col",attrs:{val:"no",label:e.$t("common.no")},model:{value:e.newStudiesCustomAnswers[r][i],callback:function(t){e.$set(e.newStudiesCustomAnswers[r],i,t)},expression:"newStudiesCustomAnswers[studyIndex][questionIndex]"}})],1)])}))],2):e._e(),n("q-separator"),n("div",{staticClass:"q-ma-sm text-negative",attrs:{color:"negative"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.eligible[r]&&e.newStudiesCustomAnswers[r].length===t.inclusionCriteria.criteriaQuestions.length,expression:"!eligible[studyIndex] && newStudiesCustomAnswers[studyIndex].length === study.inclusionCriteria.criteriaQuestions.length"}]},[e._v("\n        "+e._s(e.$t("studies.notEligible"))+"\n      ")])]),n("q-card-actions",{attrs:{align:"around"}},[n("q-btn",{attrs:{flat:"",color:"negative",label:e.$t("studies.discardStudy")},on:{click:function(t){return e.discardStudy(r)}}}),n("q-btn",{attrs:{color:"primary",label:e.$t("studies.joinStudy"),disable:!e.eligible[r]},on:{click:function(t){return e.joinStudy(r)}}})],1)],1)})),n("q-list",{attrs:{separator:"",bordered:""}},[n("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("studies.activeStudies")))]),e._l(e.activeStudies,(function(t,r){return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:"as"+r,attrs:{clickable:""},nativeOn:{click:function(n){return e.showDetails(t)}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{color:"primary",name:"settings"}})],1),n("q-item-section",[n("q-item-label",[e._v(e._s(t.generalities.title[e.$i18n.locale]))]),n("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v("End Date: "+e._s(e.nicerDate(t.generalities.endDate)))])],1)],1)})),0===e.activeStudies.length?n("q-item",[n("q-item-section",[e._v(e._s(e.$t("studies.noActiveStudies")))])],1):e._e(),0!==e.previousStudies.length?n("q-separator"):e._e(),0!==e.previousStudies.length?n("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("studies.previousStudies")))]):e._e(),e._l(e.previousStudies,(function(t,r){return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:"ps"+r,attrs:{clickable:""},nativeOn:{click:function(n){return e.showDetails(t)}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{color:"primary",name:"settings"}})],1),n("q-item-section",[n("q-item-label",[e._v(e._s(t.generalities.title[e.$i18n.locale]))])],1)],1)}))],2),e.pageLoaded?n("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[n("q-btn",{attrs:{fab:"",icon:"add",color:"accent"},on:{click:e.showInvitationDialog}})],1):e._e()],2)},i=[],s=(n("7db0"),n("a434"),n("6374")),a=n.n(s),o=(n("96cf"),n("c973")),u=n.n(o),c=n("9bf1"),d=n("6a6d"),l=n("aa9c"),p=n("bd4c"),m={name:"Studies",data:function(){return{newStudies:[],newStudiesCustomAnswers:[],activeStudies:[],previousStudies:[],pageLoaded:!1}},created:function(){var e=this;return u()(regeneratorRuntime.mark((function t(){var n,r,i,s,o,u,c,p,m,v;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$q.loading.show(),t.prev=1,t.next=4,l["a"].getNewStudiesKeys();case 4:n=t.sent,r=0;case 6:if(!(r<n.length)){t.next=16;break}return i=n[r],t.next=10,l["a"].getStudyDescription(i);case 10:s=t.sent,e.newStudiesCustomAnswers.push([]),e.newStudies.push(s);case 13:r++,t.next=6;break;case 16:return t.next=18,d["a"].getStudiesParticipation();case 18:if(o=t.sent,!o){t.next=47;break}u=a()(o),t.prev=21,u.s();case 23:if((c=u.n()).done){t.next=39;break}if(p=c.value,"accepted"!==p.currentStatus){t.next=32;break}return t.next=28,d["a"].getStudyDescription(p.studyKey);case 28:m=t.sent,e.activeStudies.push(m),t.next=37;break;case 32:if("withdrawn"!==p.currentStatus&&"completed"!==p.currentStatus){t.next=37;break}return t.next=35,d["a"].getStudyDescription(p.studyKey);case 35:v=t.sent,e.previousStudies.push(v);case 37:t.next=23;break;case 39:t.next=44;break;case 41:t.prev=41,t.t0=t["catch"](21),u.e(t.t0);case 44:return t.prev=44,u.f(),t.finish(44);case 47:t.next=53;break;case 49:t.prev=49,t.t1=t["catch"](1),console.error("Cannot connect to server",t.t1),e.$q.notify({color:"negative",message:e.$i18n.t("errors.connectionError")+": "+t.t1.message,icon:"report_problem"});case 53:e.$q.loading.hide(),e.pageLoaded=!0;case 55:case"end":return t.stop()}}),t,null,[[1,49],[21,41,44,47]])})))()},computed:{eligible:function(){for(var e=[],t=0;t<this.newStudies.length;t++){var n=this.newStudies[t];if(n.inclusionCriteria.criteriaQuestions&&0!==n.inclusionCriteria.criteriaQuestions.length){for(var r=!0,i=0;i<n.inclusionCriteria.criteriaQuestions.length;i++)if(n.inclusionCriteria.criteriaQuestions[i].answer!==this.newStudiesCustomAnswers[t][i]){r=!1;break}e.push(r)}else e.push(!0)}return e}},methods:{nicerDate:function(e){return p["b"].formatDate(e,"YYYY/MM/DD")},showDetails:function(e){this.$router.push({name:"studyConfig",params:{studyDescription:e}})},discardStudy:function(e){var t=this;return u()(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$q.dialog({title:t.$i18n.t("studies.discardStudy"),message:t.$i18n.t("studies.discardStudyConfirm"),color:"primary",ok:t.$i18n.t("common.yes"),cancel:t.$i18n.t("common.cancel")}).onOk(u()(regeneratorRuntime.mark((function n(){var r,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.newStudies[e],i={studyKey:r._key},t.eligible[e]||t.newStudiesCustomAnswers[e].length!==r.inclusionCriteria.criteriaQuestions.length?(i.currentStatus="rejected",i.rejectedTS=new Date):(i.currentStatus="excluded",i.excludedTS=new Date,i.criteriaAnswers=t.newStudiesCustomAnswers[e]),n.prev=3,n.next=6,l["a"].updateStudyStatus(c["a"].user._key,r._key,i);case 6:return n.next=8,d["a"].getStudiesParticipation();case 8:return s=n.sent,s||(s=[]),s.push(i),n.next=13,d["a"].setStudiesParticipation(s);case 13:t.newStudies.splice(e,1),t.newStudiesCustomAnswers.splice(e,1),t.$router.push({name:"tasker",params:{rescheduleTasks:!1,checkNewStudies:!0}}),n.next=22;break;case 18:n.prev=18,n.t0=n["catch"](3),console.error("Cannot connect to server",n.t0),t.$q.notify({color:"negative",message:t.$i18n.t("errors.connectionError")+": "+n.t0.message,icon:"report_problem"});case 22:case"end":return n.stop()}}),n,null,[[3,18]])}))));case 1:case"end":return n.stop()}}),n)})))()},joinStudy:function(e){var t=this;return u()(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.newStudies[e],t.$emit("updateTransition","slideInDown"),t.$router.push({name:"invitation",params:{studyDescription:r}});case 3:case"end":return n.stop()}}),n)})))()},showInvitationDialog:function(){var e=this;return u()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{e.$q.dialog({title:"New study",message:"Paste your invitation code here",color:"primary",ok:!0,cancel:!0,prompt:{model:"",type:"text"}}).onOk((function(t){e.addInvitationalStudy(t)}))}catch(n){}case 1:case"end":return t.stop()}}),t)})))()},addInvitationalStudy:function(e){var t=this;return u()(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l["a"].getInvitationalStudy(e);case 3:r=n.sent,n.next=11;break;case 6:return n.prev=6,n.t0=n["catch"](0),console.error("Error:",n.t0),404===n.t0.response.status&&t.$q.notify({color:"negative",message:t.$i18n.t("errors.invitationalStudyNotFound"),icon:"report_problem"}),n.abrupt("return");case 11:if(!t.studyExists(t.newStudies,r)){n.next=14;break}return t.$q.notify({color:"negative",message:t.$i18n.t("errors.invitationalStudyAlreadyAdded"),icon:"report_problem"}),n.abrupt("return");case 14:return n.next=16,t.alreadyParticipateInStudy(r._key);case 16:if(!n.sent){n.next=20;break}t.$q.notify({color:"negative",message:t.$i18n.t("errors.invitationalStudyAlreadyParticipated"),icon:"report_problem"}),n.next=22;break;case 20:t.newStudiesCustomAnswers.push([]),t.newStudies.push(r);case 22:case"end":return n.stop()}}),n,null,[[0,6]])})))()},alreadyParticipateInStudy:function(e){return u()(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d["a"].getStudyParticipation(e);case 2:if(n=t.sent,n){t.next=7;break}return t.abrupt("return",!1);case 7:return t.abrupt("return",!0);case 8:case"end":return t.stop()}}),t)})))()},studyExists:function(e,t){var n=!1;return e.find((function(e){e._key===t._key&&(n=!0)})),n}}},v=m,w=n("2877"),g=n("9989"),S=n("f09f"),h=n("a370"),f=n("3786"),y=n("eb85"),b=n("4b7e"),x=n("9c40"),k=n("1c1c"),_=n("0170"),C=n("66e5"),q=n("4074"),$=n("0016"),Q=n("de5e"),A=n("714f"),D=n("eebe"),I=n.n(D),R=Object(w["a"])(v,r,i,!1,null,null,null);t["default"]=R.exports;I()(R,"components",{QPage:g["a"],QCard:S["a"],QCardSection:h["a"],QRadio:f["a"],QSeparator:y["a"],QCardActions:b["a"],QBtn:x["a"],QList:k["a"],QItemLabel:_["a"],QItem:C["a"],QItemSection:q["a"],QIcon:$["a"],QPageSticky:Q["a"]}),I()(R,"directives",{Ripple:A["a"]})}}]);