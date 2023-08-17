(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"27bf":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("q-page",{attrs:{padding:""}},[e("div",{staticClass:"text-center text-h5 q-mt-lg"},[t._v("\n    "+t._s(t.$t("studies.tasks.holdPhone.title"))+"\n  ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:0===t.testPhase,expression:"testPhase === 0"}],staticClass:"text-center mobitxt2 q-mt-xl"},[t._v("\n    "+t._s(t.$t("studies.tasks.holdPhone.instructions.preRestingLeft"))+"\n  ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:2===t.testPhase,expression:"testPhase === 2"}],staticClass:"text-center mobitxt2 q-mt-xl"},[t._v("\n    "+t._s(t.$t("studies.tasks.holdPhone.instructions.preRestingRight"))+"\n  ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:4===t.testPhase,expression:"testPhase === 4"}],staticClass:"text-center mobitxt2 q-mt-xl"},[t._v("\n    "+t._s(t.$t("studies.tasks.holdPhone.instructions.prePosturalLeft"))+"\n  ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:6===t.testPhase,expression:"testPhase === 6"}],staticClass:"text-center mobitxt2 q-mt-xl"},[t._v("\n    "+t._s(t.$t("studies.tasks.holdPhone.instructions.prePosturalRight"))+"\n  ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:8===t.testPhase,expression:"testPhase === 8"}],staticClass:"text-center mobitxt2 q-mt-lg"},[t._v("\n    "+t._s(t.$t("studies.tasks.holdPhone.instructions.preKineticLeft"))+"\n  ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:10===t.testPhase,expression:"testPhase === 10"}],staticClass:"text-center mobitxt2 q-mt-xl"},[t._v("\n    "+t._s(t.$t("studies.tasks.holdPhone.instructions.preKineticRight"))+"\n  ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.testPhase%2!=0,expression:"testPhase % 2 != 0"}],staticClass:"text-center mobitxt2 q-mt-xl"},[t._v("\n    "+t._s(t.$t("studies.tasks.holdPhone.instructions.afterStart"))+"\n    "),e("p",{attrs:{id:"timer"}},[t._v(" "+t._s(t.minutes)+" : "+t._s(t.seconds)+" ")])]),e("div",{staticClass:"row justify-center q-mt-xl"},[e("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.testPhase%2==0,expression:"testPhase % 2 == 0"}],staticClass:"full-width mobibtn",attrs:{color:"primary",label:t.$t("common.start")},on:{click:t.startTest}})],1)])},r=[],a=(s("14d9"),s("a5f6")),o=s("9bf1"),n=s("7937");const h=60;let l=[],m=[];var p={name:"HoldThePhonePage",props:{studyKey:String,taskId:Number},data:function(){return{timer:void 0,totalTime:h,report:{userKey:o["a"].user._key,participantKey:o["a"].user.participantKey,studyKey:this.studyKey,taskId:parseInt(this.taskId),taskType:"holdPhone",createdTS:new Date,phone:a["a"].device,summary:{startedTS:"",completedTS:"",resting:{left:{},right:{}},postural:{left:{},right:{}},kinetic:{left:{},right:{}}},data:{resting:{left:{},right:{}},postural:{left:{},right:{}},kinetic:{left:{},right:{}}}},testPhase:0}},methods:{async startTest(){this.testPhase++,a["a"].screen.forbidSleep(),this.startTimer(),this.testPhase%2!==0&&(l=[],m=[]);let t=new Date;1===this.testPhase?(this.report.summary.startedTS=t,this.report.summary.resting.left.startedTS=t,this.report.data.resting.left.startedTS=t):3===this.testPhase?(this.report.summary.resting.right.startedTS=t,this.report.data.resting.right.startedTS=t):5===this.testPhase?(this.report.summary.postural.left.startedTS=t,this.report.data.postural.left.startedTS=t):7===this.testPhase?(this.report.summary.postural.right.startedTS=t,this.report.data.postural.right.startedTS=t):9===this.testPhase?(this.report.summary.kinetic.left.startedTS=t,this.report.data.kinetic.left.startedTS=t):11===this.testPhase&&(this.report.summary.kinetic.right.startedTS=t,this.report.data.kinetic.right.startedTS=t);try{await a["a"].orientation.isAvailable()&&(await a["a"].orientation.requestPermission(),a["a"].orientation.startNotifications({},(t=>{l.push(t)}),(t=>{console.error("Error getting orientation event",t)})))}catch(e){console.error("Error getting OrientationEvent",e)}try{await a["a"].motion.isAvailable()&&(await a["a"].motion.requestPermission(),a["a"].motion.startNotifications({},(t=>{m.push(t)}),(t=>{console.error("Error getting MotionEvent",t)})))}catch(e){console.error("Error getting MotionEvent",e)}},startTimer(){this.totalTime=h,this.timer=setInterval((()=>this.countDown()),1e3)},stopTimer(){clearInterval(this.timer)},countDown(){this.totalTime>=1?this.totalTime--:this.completePhase()},completePhase(){this.stopTimer(),a["a"].orientation.stopNotifications(),a["a"].motion.stopNotifications(),a["a"].screen.allowSleep(),a["a"].vibrate(2e3);let t=new Date;if(1===this.testPhase)this.report.data.resting.left.completedTS=t,this.report.summary.resting.left.completedTS=t,this.report.data.resting.left.motion=m,this.report.data.resting.left.orientation=l;else if(3===this.testPhase)this.report.data.resting.right.completedTS=t,this.report.summary.resting.right.completedTS=t,this.report.data.resting.right.motion=m,this.report.data.resting.right.orientation=l;else if(5===this.testPhase)this.report.data.postural.left.completedTS=t,this.report.summary.postural.left.completedTS=t,this.report.data.postural.left.motion=m,this.report.data.postural.left.orientation=l;else if(7===this.testPhase)this.report.data.postural.right.completedTS=t,this.report.summary.postural.right.completedTS=t,this.report.data.postural.right.motion=m,this.report.data.postural.right.orientation=l;else if(9===this.testPhase)this.report.data.kinetic.left.completedTS=t,this.report.summary.kinetic.left.completedTS=t,this.report.data.kinetic.left.motion=m,this.report.data.kinetic.left.orientation=l;else if(11===this.testPhase)return this.report.data.kinetic.right.completedTS=t,this.report.summary.kinetic.right.completedTS=t,this.report.data.kinetic.right.motion=m,this.report.data.kinetic.right.orientation=l,this.report.summary.completedTS=new Date,void this.$router.push({name:"holdPhoneSummary",params:{report:this.report}});this.testPhase++}},computed:{minutes(){return n["c"].pad(Math.floor(this.totalTime/60))},seconds(){return n["c"].pad(this.totalTime-60*this.minutes)}},beforeDestroy:function(){a["a"].screen.allowSleep(),a["a"].orientation.stopNotifications(),a["a"].motion.stopNotifications()}},d=p,c=(s("f2f5"),s("2877")),u=s("9989"),f=s("9c40"),g=s("eebe"),v=s.n(g),P=Object(c["a"])(d,i,r,!1,null,"0d5302a6",null);e["default"]=P.exports;v()(P,"components",{QPage:u["a"],QBtn:f["a"]})},ef41:function(t,e,s){},f2f5:function(t,e,s){"use strict";s("ef41")}}]);