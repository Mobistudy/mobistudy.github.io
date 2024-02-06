(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"375b":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("q-page",{attrs:{padding:""}},[e("div",{staticClass:"text-center text-h5 q-mt-lg"},[t._v("\n    "+t._s(t.$t("studies.tasks.tugt.title"))+"\n  ")]),e("div",{ref:"map",staticClass:"row justify-center items-center",staticStyle:{width:"100%",height:"50vh"}},[e("WalkingMan")],1),e("div",{staticClass:"mobitxt2 text-center q-mb-lg"},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.isAfterSound,expression:"!isAfterSound"}]},[t._v(t._s(t.$t("studies.tasks.tugt.prepartion")))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.isAfterSound,expression:"isAfterSound"}]},[t._v(t._s(t.$t("studies.tasks.tugt.go")))])]),e("div",{staticClass:"row justify-center q-mt-lg"},[e("q-btn",{directives:[{name:"show",rawName:"v-show",value:!t.isStarted,expression:"!isStarted"}],staticClass:"full-width mobibtn",attrs:{color:"primary",label:t.$t("common.start")},on:{click:t.startTest}}),e("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.isStarted,expression:"isStarted"}],staticClass:"full-width mobibtn",attrs:{color:"secondary",label:t.$t("common.complete")},on:{click:t.completeTest}})],1),e("audio",{ref:"dingsound",attrs:{src:"sounds/dingbell.wav"}})])},a=[],o=(s("14d9"),s("a5f6")),n=s("9bf1"),r=s("7937"),c=s("ea6a"),d=s("022d");const m=10,u=180;let l=[],p=[];var h={name:"TUGTPage",props:{studyKey:String,taskId:Number},components:{WalkingMan:c["a"]},data:function(){return{isStarted:!1,isAfterSound:!1,isCompleted:!1,timer:void 0,totalTime:u,startedTS:void 0,distance:0}},methods:{async startTest(){if(!this.isStarted){c["a"].methods.stop(),setTimeout((()=>{d["a"].media.playSound(this.$refs.dingsound),c["a"].methods.play(),this.isAfterSound=!0}),1e3*m),this.isStarted=!0,this.startedTS=new Date,o["a"].screen.forbidSleep(),this.startTimer(),l=[],p=[];try{await o["a"].orientation.isAvailable()&&(await o["a"].orientation.requestPermission(),o["a"].orientation.startNotifications({},(t=>{l.push(t)}),(t=>{console.error("Error getting orientation event",t)})))}catch(t){console.error("Issues getting OrientationEvent",t)}try{await o["a"].motion.isAvailable()&&(await o["a"].motion.requestPermission(),o["a"].motion.startNotifications({},(t=>{p.push(t)}),(t=>{console.error("Error getting MotionEvent",t)})))}catch(t){console.error("Issues getting MotionEvent",t)}}},startTimer(){this.timerCountDown=u,this.timer=setInterval((()=>this.countDown()),1e3)},stopTimer(){clearInterval(this.timer)},countDown(){this.timerCountDown>=1?this.timerCountDown--:this.completeTest()},completeTest(){this.isStarted=!1,this.stopTimer(),o["a"].orientation.stopNotifications(),o["a"].motion.stopNotifications(),o["a"].screen.allowSleep(),c["a"].methods.stop(),this.isCompleted=!0;let t={userKey:n["a"].user._key,participantKey:n["a"].user.participantKey,studyKey:this.studyKey,taskId:parseInt(this.taskId),taskType:"tugt",createdTS:new Date,phone:o["a"].device,summary:{startedTS:this.startedTS,completedTS:new Date,durationMs:(new Date).getTime()-this.startedTS.getTime()},data:{motion:p,orientation:l}};this.$router.push({name:"tugtSummary",params:{report:t}})}},computed:{minutes(){return r["c"].pad(Math.floor(this.timerCountDown/60))},seconds(){return r["c"].pad(this.timerCountDown-60*this.minutes)}},beforeDestroy:function(){this.stopTimer(),c["a"].methods.stop(),o["a"].screen.allowSleep(),o["a"].orientation.stopNotifications(),o["a"].motion.stopNotifications()}},w=h,f=(s("a7f4"),s("2877")),v=s("9989"),g=s("9c40"),S=s("eebe"),y=s.n(S),T=Object(f["a"])(w,i,a,!1,null,"814cba22",null);e["default"]=T.exports;y()(T,"components",{QPage:v["a"],QBtn:g["a"]})},a7f4:function(t,e,s){"use strict";s("f7c3")},f7c3:function(t,e,s){}}]);