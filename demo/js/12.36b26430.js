(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"2eb2":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("q-page",{staticClass:"text-center",attrs:{padding:""}},[e("div",{staticClass:"text-center text-h5 q-mt-lg"},[t._v("\n    "+t._s(t.$t("studies.tasks.vocalization.title"))+"\n  ")]),e("p",{directives:[{name:"show",rawName:"v-show",value:0===t.testPhase||1===t.testPhase,expression:"testPhase === 0 || testPhase === 1"}],staticClass:"text-center text-subtitle1 q-mt-lg",domProps:{innerHTML:t._s(t.$t("studies.tasks.vocalization.instructions.AAA"))}}),e("p",{directives:[{name:"show",rawName:"v-show",value:2===t.testPhase||3===t.testPhase,expression:"testPhase === 2 || testPhase === 3"}],staticClass:"text-center text-subtitle1 q-mt-lg",domProps:{innerHTML:t._s(t.$t("studies.tasks.vocalization.instructions.III"))}}),e("p",{directives:[{name:"show",rawName:"v-show",value:4===t.testPhase||5===t.testPhase,expression:"testPhase === 4 || testPhase === 5"}],staticClass:"text-center text-subtitle1 q-mt-lg",domProps:{innerHTML:t._s(t.$t("studies.tasks.vocalization.instructions.UUU"))}}),e("div",{staticClass:"row justify-around q-mt-xl"},[e("q-btn",{directives:[{name:"show",rawName:"v-show",value:!t.isStarted,expression:"!isStarted"}],staticClass:"full-width mobibtn",attrs:{color:"primary",label:t.$t("common.start")},on:{click:t.startTest}}),e("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.isStarted,expression:"isStarted"}],staticClass:"mobibtn",attrs:{color:"primary",label:t.$t("common.redo")},on:{click:t.redoTest}}),e("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.isStarted&&5!=t.testPhase,expression:"isStarted && testPhase != 5"}],staticClass:"mobibtn",attrs:{color:"primary",label:t.$t("common.next")},on:{click:t.completePhase}}),e("q-btn",{directives:[{name:"show",rawName:"v-show",value:5==t.testPhase,expression:"testPhase == 5"}],staticClass:"mobibtn",attrs:{color:"primary",label:t.$t("common.complete")},on:{click:t.completePhase}})],1)])},i=[],r=(s("14d9"),s("a5f6")),o=s("9bf1"),n=(s("d9e2"),{init(){let t=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.oAudioContext||window.msAudioContext;if(!t)throw new Error("no audio available");this.context=new t},sweep(t,e,s,a,i){let r=this.context.currentTime,o=this.context.createOscillator(),n=this.context.createGain?this.context.createGain():this.context.createGainNode();o.frequency.value=t,o.connect(n),n.connect(this.context.destination);let c=o.type===parseInt(o.type);if("sine"===a)o.type=c?0:"sine";else if("square"===a)o.type=c?1:"square";else if("sawtooth"===a)o.type=c?2:"sawtooth";else{if("triangle"!==a)return void console.error("type unrecognized");o.type=c?3:"triangle"}o.start?o.start(0):o.noteOn(0),n.gain.value=i,o.frequency.linearRampToValueAtTime(t,r),o.frequency.linearRampToValueAtTime(e,r+1*s),o.stop?o.stop(r+1*s):o.noteOff(r+1*s)}}),c=s("e13b");const h=60,l="shared";var m={name:"VocalizationPage",props:{studyKey:String,taskId:Number},data:function(){return{isStarted:!1,timer:void 0,testTS:Date.now(),filename:"",report:{summary:{phases:[]},attachments:[]},testPhase:0}},mounted:async function(){n.init()},methods:{async startTest(){this.testPhase++,this.isStarted=!0,r["a"].screen.forbidSleep(),this.filename=((this.testPhase-1)/2).toFixed(0)+"_"+this.testTS+".wav",1===this.testPhase?(this.report.userKey=o["a"].user._key,this.report.participantKey=o["a"].user.participantKey,this.report.studyKey=this.studyKey,this.report.taskId=parseInt(this.taskId),this.report.taskType="vocalization",this.report.phone=r["a"].device,this.report.createdTS=new Date,this.report.summary.startedTS=new Date,this.report.summary.phases[0]={vocal:"a",startedTS:new Date,filename:this.filename}):3===this.testPhase?this.report.summary.phases[1]={vocal:"i",startedTS:new Date,filename:this.filename}:5===this.testPhase&&(this.report.summary.phases[2]={vocal:"u",startedTS:new Date,filename:this.filename});try{await r["a"].audioRecorder.isAvailable()&&(await r["a"].audioRecorder.requestPermission(),r["a"].audioRecorder.startRecording({folder:l,fileName:this.filename},null,(t=>{console.error(t)})),this.report.attachments.push(this.filename),this.startTimer(),n.sweep(10,1e4,2,"sine",1))}catch(t){this.isStarted=!1,console.error("Issues getting audio",t),this.$q.notify({color:"negative",message:this.$t("studies.tasks.vocalization.audioError")+" "+t.message,icon:"report_problem"})}},startTimer(){this.timer=setTimeout((()=>this.completePhase()),1e3*h)},stopTimer(){clearTimeout(this.timer)},async redoTest(){this.stopTimer(),r["a"].audioRecorder.stopRecording(),await c["a"].delete(this.filename,l),this.report.attachments.pop(),this.testPhase--,this.startTest()},completePhase(){this.stopTimer(),r["a"].screen.allowSleep(),this.isStarted=!1,1===this.testPhase?(this.report.summary.phases[0].completedTS=new Date,r["a"].audioRecorder.stopRecording()):3===this.testPhase?(this.report.summary.phases[1].completedTS=new Date,r["a"].audioRecorder.stopRecording()):5===this.testPhase&&(this.report.summary.phases[2].completedTS=new Date,this.report.summary.completedTS=new Date,r["a"].audioRecorder.stopRecording()),this.testPhase++,6===this.testPhase&&this.$router.push({name:"vocalizationSummary",params:{report:this.report}})}},beforeDestroy:function(){this.stopTimer(),r["a"].screen.allowSleep(),r["a"].audioRecorder.stopRecording()}},p=m,d=(s("775e"),s("2877")),u=s("9989"),w=s("9c40"),v=s("eebe"),y=s.n(v),f=Object(d["a"])(p,a,i,!1,null,"3bca4550",null);e["default"]=f.exports;y()(f,"components",{QPage:u["a"],QBtn:w["a"]})},"775e":function(t,e,s){"use strict";s("a305")},a305:function(t,e,s){}}]);