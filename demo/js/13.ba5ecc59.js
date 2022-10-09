(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"029c":function(e,t,s){},"2eb2":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("q-page",{staticClass:"text-center",attrs:{padding:""}},[t("div",{staticClass:"text-center text-h5 q-mt-lg"},[e._v("\n    "+e._s(e.$t("studies.tasks.vocalization.title"))+"\n  ")]),t("p",{directives:[{name:"show",rawName:"v-show",value:0===e.testPhase||1===e.testPhase,expression:"testPhase === 0 || testPhase === 1"}],staticClass:"text-center text-subtitle1 q-mt-lg",domProps:{innerHTML:e._s(e.$t("studies.tasks.vocalization.instructions.AAA"))}}),t("p",{directives:[{name:"show",rawName:"v-show",value:2===e.testPhase||3===e.testPhase,expression:"testPhase === 2 || testPhase === 3"}],staticClass:"text-center text-subtitle1 q-mt-lg",domProps:{innerHTML:e._s(e.$t("studies.tasks.vocalization.instructions.III"))}}),t("p",{directives:[{name:"show",rawName:"v-show",value:4===e.testPhase||5===e.testPhase,expression:"testPhase === 4 || testPhase === 5"}],staticClass:"text-center text-subtitle1 q-mt-lg",domProps:{innerHTML:e._s(e.$t("studies.tasks.vocalization.instructions.UUU"))}}),t("div",{staticClass:"row justify-around"},[t("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.isStarted,expression:"!isStarted"}],attrs:{color:"primary",label:e.$t("common.start")},on:{click:e.startTest}}),t("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.isStarted,expression:"isStarted"}],attrs:{color:"primary",label:e.$t("common.redo")},on:{click:e.redoTest}}),t("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.isStarted&&5!=e.testPhase,expression:"isStarted && testPhase != 5"}],attrs:{color:"primary",label:e.$t("common.next")},on:{click:e.completePhase}}),t("q-btn",{directives:[{name:"show",rawName:"v-show",value:5==e.testPhase,expression:"testPhase == 5"}],attrs:{color:"primary",label:e.$t("common.complete")},on:{click:e.completePhase}})],1)])},i=[],r=(s("14d9"),s("a5f6")),o=s("9bf1"),n=(s("d9e2"),{init(){let e=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.oAudioContext||window.msAudioContext;if(!e)throw new Error("no audio available");this.context=new e},sweep(e,t,s,a,i){let r=this.context.currentTime,o=this.context.createOscillator(),n=this.context.createGain?this.context.createGain():this.context.createGainNode();o.frequency.value=e,o.connect(n),n.connect(this.context.destination);let c=o.type===parseInt(o.type);if("sine"===a)o.type=c?0:"sine";else if("square"===a)o.type=c?1:"square";else if("sawtooth"===a)o.type=c?2:"sawtooth";else{if("triangle"!==a)return void console.error("type unrecognized");o.type=c?3:"triangle"}o.start?o.start(0):o.noteOn(0),n.gain.value=i,o.frequency.linearRampToValueAtTime(e,r),o.frequency.linearRampToValueAtTime(t,r+1*s),o.stop?o.stop(r+1*s):o.noteOff(r+1*s)}}),c=s("e13b");const h=60,l="shared";var d={name:"VocalizationPage",props:{studyKey:String,taskId:Number},data:function(){return{isStarted:!1,timer:void 0,testTS:Date.now(),filename:"",report:{summary:{phases:[]},attachments:[]},testPhase:0}},mounted:async function(){n.init()},methods:{async startTest(){this.testPhase++,this.isStarted=!0,r["a"].screen.forbidSleep(),this.filename=((this.testPhase-1)/2).toFixed(0)+"_"+this.testTS+".wav",1===this.testPhase?(this.report.userKey=o["a"].user._key,this.report.participantKey=o["a"].user.participantKey,this.report.studyKey=this.studyKey,this.report.taskId=parseInt(this.taskId),this.report.taskType="vocalization",this.report.phone=r["a"].device,this.report.createdTS=new Date,this.report.summary.startedTS=new Date,this.report.summary.phases[0]={vocal:"a",startedTS:new Date,filename:this.filename}):3===this.testPhase?this.report.summary.phases[1]={vocal:"i",startedTS:new Date,filename:this.filename}:5===this.testPhase&&(this.report.summary.phases[2]={vocal:"u",startedTS:new Date,filename:this.filename});try{await r["a"].audioRecorder.isAvailable()&&(await r["a"].audioRecorder.requestPermission(),r["a"].audioRecorder.startRecording({folder:l,fileName:this.filename},null,(e=>{console.error(e)})),this.report.attachments.push(this.filename),this.startTimer(),n.sweep(10,1e4,2,"sine",1))}catch(e){this.isStarted=!1,console.error("Issues getting audio",e),this.$q.notify({color:"negative",message:this.$t("studies.tasks.vocalization.audioError")+" "+e.message,icon:"report_problem"})}},startTimer(){this.timer=setTimeout((()=>this.completePhase()),1e3*h)},stopTimer(){clearTimeout(this.timer)},async redoTest(){this.stopTimer(),r["a"].audioRecorder.stopRecording(),await c["a"].delete(this.filename,l),this.report.attachments.pop(),this.testPhase--,this.startTest()},completePhase(){this.stopTimer(),r["a"].screen.allowSleep(),this.isStarted=!1,1===this.testPhase?(this.report.summary.phases[0].completedTS=new Date,r["a"].audioRecorder.stopRecording()):3===this.testPhase?(this.report.summary.phases[1].completedTS=new Date,r["a"].audioRecorder.stopRecording()):5===this.testPhase&&(this.report.summary.phases[2].completedTS=new Date,this.report.summary.completedTS=new Date,r["a"].audioRecorder.stopRecording()),this.testPhase++,6===this.testPhase&&this.$router.push({name:"vocalizationSummary",params:{report:this.report}})}},beforeDestroy:function(){this.stopTimer(),r["a"].screen.allowSleep(),r["a"].audioRecorder.stopRecording()}},m=d,p=(s("74cd"),s("2877")),u=s("9989"),w=s("9c40"),v=s("eebe"),y=s.n(v),f=Object(p["a"])(m,a,i,!1,null,"0d3dca12",null);t["default"]=f.exports;y()(f,"components",{QPage:u["a"],QBtn:w["a"]})},"74cd":function(e,t,s){"use strict";s("029c")}}]);