(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{"987b":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{attrs:{padding:""}},[e("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab",{attrs:{name:"info",icon:"info",label:t.$t("common.info")}}),e("q-tab",{attrs:{name:"privacy",icon:"lock",label:t.$t("common.privacy")}}),"accepted"==t.studyParticipation.currentStatus?e("q-tab",{attrs:{name:"consent",icon:"done",label:t.$t("common.consent")}}):t._e()],1),e("q-separator"),e("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"info"}},[e("study-info",{attrs:{studyDescription:t.studyDescription}})],1),e("q-tab-panel",{attrs:{name:"privacy"},domProps:{innerHTML:t._s(t.studyDescription.consent.privacyPolicy[t.$i18n.locale].replace(new RegExp("\n","g"),"<br>"))}}),e("q-tab-panel",{attrs:{name:"consent"}},[e("q-list",[e("q-item",[e("q-item-section",[e("q-item-label",{staticClass:"text-subtitle1"},[t._v(t._s(t.$t("studies.consent.itemsExplanation"))+":")])],1)],1)],1),e("consents",{directives:[{name:"show",rawName:"v-show",value:"accepted"===t.studyParticipation.currentStatus,expression:"studyParticipation.currentStatus === 'accepted'"}],attrs:{studyDescription:t.studyDescription},model:{value:t.studyParticipation,callback:function(a){t.studyParticipation=a},expression:"studyParticipation"}}),e("div",{staticClass:"q-my-md row justify-center"},[e("q-btn",{attrs:{label:t.$t("studies.consent.updateConsent"),color:"primary",disabled:!t.canUpdate},on:{click:function(a){return t.updateConsent()}}})],1),e("div",{staticClass:"q-my-md row justify-center"},[e("q-btn",{attrs:{label:t.$t("studies.consent.withdraw"),color:"negative"},on:{click:function(a){return t.withdraw()}}})],1)],1)],1)],1)},s=[],n=(e("e6cf"),e("b6bd")),o=e("b626"),r=e("9bf1"),c=e("6a6d"),d=e("aa9c"),u={name:"StudyConfigPage",props:["studyDescription"],components:{StudyInfo:o["a"],Consents:n["a"]},data(){return{studyParticipation:{},tab:"info"}},async created(){this.studyParticipation=await c["a"].getStudyParticipation(this.studyDescription._key)},computed:{canUpdate(){if(this.studyDescription.consent.extraItems&&this.studyDescription.consent.extraItems.length)for(let t=0;t<this.studyDescription.consent.extraItems.length;t++)if(!this.studyDescription.consent.extraItems[t].optional&&!this.studyParticipation.extraItemsConsent.consented)return!1;return!0}},methods:{async updateConsent(){await d["a"].updateStudyStatus(r["a"].user._key,this.studyParticipation.studyKey,this.studyParticipation),await c["a"].setStudyParticipation(this.studyParticipation),this.$q.notify({color:"primary",message:this.$i18n.t("studies.consent.consentUpdated"),icon:"check"})},async withdraw(){this.$q.dialog({title:this.$i18n.t("studies.consent.withdraw"),message:this.$i18n.t("studies.consent.withdrawalConfirm"),color:"negative",prompt:{model:"",type:"text"},ok:this.$i18n.t("studies.consent.withdraw"),cancel:this.$i18n.t("common.cancel")}).onOk((async t=>{this.studyParticipation.currentStatus="withdrawn",this.studyParticipation.withdrawalTS=new Date,this.studyParticipation.withdrawalReason=t;try{await d["a"].updateStudyStatus(r["a"].user._key,this.studyParticipation.studyKey,this.studyParticipation),delete this.studyParticipation.extraItemsConsent,delete this.studyParticipation.taskItemsConsent,await c["a"].setStudyParticipation(this.studyParticipation),this.$router.push({name:"studies"})}catch(a){console.error("Cannot connect to server",a),this.$q.notify({color:"negative",message:"Cannot discard this study: "+a.message,icon:"report_problem"})}this.$emit("updateTransition","slideInDown")}))}}},p=u,l=e("2877"),y=e("9989"),m=e("429b"),h=e("7460"),b=e("eb85"),w=e("adad"),P=e("823b"),f=e("1c1c"),q=e("66e5"),g=e("4074"),v=e("0170"),$=e("9c40"),x=e("eebe"),S=e.n(x),k=Object(l["a"])(p,i,s,!1,null,null,null);a["default"]=k.exports;S()(k,"components",{QPage:y["a"],QTabs:m["a"],QTab:h["a"],QSeparator:b["a"],QTabPanels:w["a"],QTabPanel:P["a"],QList:f["a"],QItem:q["a"],QItemSection:g["a"],QItemLabel:v["a"],QBtn:$["a"]})}}]);