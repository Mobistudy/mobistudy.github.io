(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{e331:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",[o("q-page",{attrs:{padding:""}},[o("div",{staticClass:"text-h5 q-mt-lg"},[t._v("\n      Test Page. App version: "+t._s(t.appVersion)+"\n    ")]),o("div",{staticClass:"q-mt-md"},[o("q-btn",{attrs:{color:"white","text-color":"black",label:"Start GPS"},on:{click:t.startGPS}}),o("q-btn",{attrs:{color:"white","text-color":"black",label:"Stop GPS"},on:{click:t.stopGPS}})],1),o("p",[t._v(t._s(t.coordsOutput))]),o("audio",{ref:"sound_click"},[o("source",{attrs:{src:"sounds/click.wav",type:"audio/wav"}})]),o("div",{staticClass:"q-mt-md"},[o("q-btn",{attrs:{color:"white","text-color":"black",label:"Play sound"},on:{touchstart:t.playSound}})],1),o("div",{staticClass:"q-mt-md"},[o("q-btn",{attrs:{color:"white","text-color":"black",label:"Save File"},on:{click:t.saveFile}})],1),o("p",[t._v(t._s(t.fileOutput))])])],1)},n=[],s=o("efed"),i=o("0967");let r=t=>{switch(t){case 1:return"NOT_FOUND_ERR";case 2:return"SECURITY_ERR";case 3:return"ABORT_ERR";case 4:return"NOT_READABLE_ERR";case 5:return"ENCODING_ERR";case 6:return"NO_MODIFICATION_ALLOWED_ERR";case 7:return"INVALID_STATE_ERR";case 8:return"SYNTAX_ERR";case 9:return"INVALID_MODIFICATION_ERR";case 10:return"QUOTA_EXCEEDED_ERR";case 11:return"TYPE_MISMATCH_ERR";case 12:return"PATH_EXISTS_ERR";default:return"Unknown Error "+t}};var c={async openFile(t,e){let o;return o=i["b"].is.ios?cordova.file.documentsDirectory:cordova.file.externalDataDirectory,new Promise(((a,n)=>{window.resolveLocalFileSystemURL(o,(function(o){o.getFile(t,{create:e},(function(t){a(t)}),(function(e){n("Cannot get file "+t+", "+r(e.code))}))}))}))},async load(t){let e=await this.openFile(t);return new Promise(((o,a)=>{e.file((function(t){var e=new FileReader;e.onloadend=function(){o(JSON.parse(this.result))},e.readAsText(t)}),(function(e){a("Cannot read file "+t+": "+r(e.code))}))}))},async save(t,e){let o=await this.openFile(t);return new Promise(((t,a)=>{o.createWriter((function(o){var n=JSON.stringify(e);o.onwriteend=function(e){t()},o.onerror=function(t){a("Cannot write to file: "+r(t.code))},o.write(n)}))}))}},l={name:"TestPage",data(){return{appVersion:"0.2.9",coordsOutput:"GPS stopped",fileOutput:"No file read"}},async destroyed(){s["a"].geolocation.stopNotifications()},methods:{async startGPS(){this.coordsOutput="starting GPS",await s["a"].geolocation.isAvailable()&&await s["a"].geolocation.requestPermission()&&s["a"].geolocation.startNotifications({maximumAge:5e3,timeout:5e3,enableHighAccuracy:!0},(async t=>{console.log(t),this.coordsOutput=t}),(t=>{this.coordsOutput=t}))},async stopGPS(){await s["a"].geolocation.stopNotifications(),this.coordsOutput="GPS stopped"},playSound(){this.$refs.sound_click.play()},async saveFile(){console.log("saving file"),await c.save("test.text",{test:"hello"}),console.log("file saved");let t=await c.load("test.text");this.fileOutput="File content: "+JSON.stringify(t),console.log(t)}}},u=l,d=o("2877"),p=o("4d5a"),f=o("9989"),_=o("9c40"),w=o("eebe"),R=o.n(w),v=Object(d["a"])(u,a,n,!1,null,null,null);e["default"]=v.exports;R()(v,"components",{QLayout:p["a"],QPage:f["a"],QBtn:_["a"]})}}]);