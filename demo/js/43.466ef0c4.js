(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43],{7935:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.devices.length>1?n("div",[e._v(e._s(e.$t("studies.tasks.po60.moreDevices")))]):e._e(),e.devices.length>1?n("q-list",{staticClass:"q-mt-md",attrs:{bordered:""}},e._l(e.devices,(function(t){return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:"",id:t.id},on:{click:function(n){return e.connect(t)}}},[n("q-item-section",[e._v(e._s(t.id))])],1)})),1):e._e(),n("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale","no-esc-dismiss":"","no-backdrop-dismiss":""},model:{value:e.instructionDialog,callback:function(t){e.instructionDialog=t},expression:"instructionDialog"}},[n("q-card",[n("div",{staticClass:"q-pa-sm"}),n("q-card-section",[n("div",{staticClass:"row no-wrap items-center"},[n("div",{staticClass:"col text-body1"},[n("p",[e._v(e._s(e.$t("studies.tasks.po60.takeMeasurement")))])])])])],1)],1),n("q-inner-loading",{attrs:{showing:e.showScanning}},[n("div",{staticClass:"text-overline",attrs:{color:"dark-grey"}},[e._v(e._s(e.$t("studies.tasks.po60.scanning")))]),n("q-spinner-dots",{attrs:{size:"40px",color:"primary"}})],1),n("q-inner-loading",{attrs:{showing:e.showConnecting}},[n("div",{staticClass:"text-overline",attrs:{color:"dark-grey"}},[e._v(e._s(e.$t("studies.tasks.po60.connecting")))]),n("q-spinner-dots",{attrs:{size:"40px",color:"primary"}})],1)],1)},o=[],a=(n("a9e3"),n("96cf"),n("c973")),i=n.n(a),r=n("3fd3"),c=n("6a6d"),u={name:"PO60ConnectPage",props:{studyKey:String,taskId:Number},data:function(){return{devices:[],instructionDialog:!1,showScanning:!1,showConnecting:!1,connectionAttempts:0,maxConnectionAttempts:5}},methods:{scan:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.instructionDialog=!0,t.prev=1,t.next=4,r["a"].scan(25e3);case 4:e.devices=t.sent,e.instructionDialog=!1,0===e.devices.length?e.$q.dialog({title:e.$t("studies.tasks.po60.noDeviceTitle"),message:e.$t("studies.tasks.po60.noDevice"),cancel:e.$t("common.cancel"),ok:e.$t("common.retry"),persistent:!0}).onOk((function(t){e.scan()})).onCancel((function(){e.abandon()})):(1===e.devices.length||e.devices.sort((function(e,t){return t.rssi-e.rssi})),e.connect(e.devices[0])),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),console.error("Scan error",t.t0),e.$q.dialog({title:e.$t("errors.error"),message:e.$t("studies.tasks.po60.scanFailed"),cancel:e.$t("common.cancel"),ok:e.$t("common.retry"),persistent:!0}).onOk((function(t){e.scan()})).onCancel((function(){e.abandon()}));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},connect:function(e){var t=this;return i()(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.instructionDialog=!0,n.prev=1,!t.$q.platform.is.ios){n.next=5;break}return n.next=5,r["a"].scanForId(e.id,12e3);case 5:return t.connectionAttempts++,n.next=8,r["a"].connect(e);case 8:return e.authenticated=!0,n.next=11,c["a"].setDevicePO60(e);case 11:t.instructionDialog=!1,t.moveToDownloadPage(),n.next=19;break;case 15:n.prev=15,n.t0=n["catch"](1),console.error(n.t0),t.connectionAttempts<t.maxConnectionAttempts?(console.log("Attempting connect again...",t.connectionAttempts),t.connect(e)):(t.connectionAttempts=0,t.instructionDialog=!1,t.$q.dialog({title:t.$t("errors.error"),message:t.$t("studies.tasks.po60.connectionFail"),cancel:t.$t("common.cancel"),ok:t.$t("common.retry"),persistent:!0}).onOk(i()(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r["a"].disconnect();case 2:e.authenticated?t.connect(e):t.scan();case 3:case"end":return n.stop()}}),n)})))).onCancel((function(){t.abandon()})));case 19:case"end":return n.stop()}}),n,null,[[1,15]])})))()},abandon:function(){try{r["a"].disconnect()}catch(e){console.error("cannot disconnect pulse oximeter",e)}this.$router.push({name:"tasker",params:{rescheduleTasks:!0}})},moveToDownloadPage:function(){this.$router.push({name:"po60DataDownload",params:{studyKey:this.studyKey,taskId:this.taskId}})}},mounted:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].getDevicePO60();case 2:n=t.sent,n?e.connect(n):e.scan();case 4:case"end":return t.stop()}}),t)})))()}},l=u,d=n("2877"),m=n("1c1c"),p=n("66e5"),g=n("4074"),v=n("24e8"),h=n("f09f"),f=n("068f"),k=n("a370"),w=n("74f7"),x=n("8380"),$=n("714f"),D=n("eebe"),b=n.n(D),q=Object(d["a"])(l,s,o,!1,null,null,null);t["default"]=q.exports;b()(q,"components",{QList:m["a"],QItem:p["a"],QItemSection:g["a"],QDialog:v["a"],QCard:h["a"],QImg:f["a"],QCardSection:k["a"],QInnerLoading:w["a"],QSpinnerDots:x["a"]}),b()(q,"directives",{Ripple:$["a"]})}}]);