(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"15a1":function(e,t,s){"use strict";s.r(t);s("caad");var i=function(){var e=this,t=e._self._c;return t("q-page",{attrs:{padding:""}},[!e.finished&&e.currentQuestion?t("div",[t("transition",{attrs:{"enter-active-class":"animated "+this.slideName,"leave-active-class":"fadeOut",mode:"out-in"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:""!=e.slideName,expression:"slideName != ''"}],key:""},[t("div",{staticClass:"text-center text-h6 q-mt-lg"},[t("div",{domProps:{innerHTML:e._s(e.currentQuestion.text[e.$i18n.locale])}})]),t("div",{staticClass:"text-center text-caption q-my-md"},[e.currentQuestion.helper?t("div",{domProps:{innerHTML:e._s(e.currentQuestion.helper[e.$i18n.locale])}}):e._e()]),t("q-input",{directives:[{name:"show",rawName:"v-show",value:"freetext"===e.currentQuestion.type,expression:"currentQuestion.type === 'freetext'"}],attrs:{type:"textarea",label:e.$t("studies.tasks.form.freeTextExplanation"),rows:"3",outlined:""},model:{value:e.freetextAnswer,callback:function(t){e.freetextAnswer=t},expression:"freetextAnswer"}}),t("q-input",{directives:[{name:"show",rawName:"v-show",value:"number"===e.currentQuestion.type,expression:"currentQuestion.type === 'number'"}],attrs:{type:"number",rules:[t=>!t||t>=e.currentQuestion.min&&t<=e.currentQuestion.max||(t<e.currentQuestion.min?e.$t("studies.tasks.form.numberTooSmall"):t>e.currentQuestion.max?e.$t("studies.tasks.form.numberTooBig"):void 0)],outlined:""},model:{value:e.numberAnswer,callback:function(t){e.numberAnswer=e._n(t)},expression:"numberAnswer"}}),"time"===e.currentQuestion.type?t("div",{staticClass:"row justify-center"},[t("q-input",{staticStyle:{width:"150px"},attrs:{type:"time",outlined:"",rules:e.timeRules},model:{value:e.timeAnswer,callback:function(t){e.timeAnswer=t},expression:"timeAnswer"}})],1):e._e(),"slider"===e.currentQuestion.type?t("div",{staticClass:"text-center"},[t("div",{staticClass:"row justify-center"},[t("q-slider",{staticClass:"q-ma-sm",attrs:{min:e.currentQuestion.min,max:e.currentQuestion.max,vertical:e.currentQuestion.vertical,reverse:e.currentQuestion.vertical},model:{value:e.numberAnswer,callback:function(t){e.numberAnswer=e._n(t)},expression:"numberAnswer"}})],1)]):e._e(),e._l(e.currentQuestion.answerChoices,(function(s,i){return t("div",{directives:[{name:"show",rawName:"v-show",value:"singleChoice"===e.currentQuestion.type,expression:"currentQuestion.type === 'singleChoice'"}],key:"sc"+i},[t("q-radio",{staticClass:"q-mt-md",attrs:{size:"lg",val:s.id,label:s.text[e.$i18n.locale]},model:{value:e.singleChoiceAnswer,callback:function(t){e.singleChoiceAnswer=t},expression:"singleChoiceAnswer"}}),t("q-input",{directives:[{name:"show",rawName:"v-show",value:s.includeFreeText,expression:"answerChoice.includeFreeText"}],attrs:{disable:e.singleChoiceAnswer!==s.id,type:"textarea",label:e.$t("studies.tasks.form.freeTextExplanation"),rows:"3",outlined:""},model:{value:e.singleChoiceAnswerFreeText,callback:function(t){e.singleChoiceAnswerFreeText=t},expression:"singleChoiceAnswerFreeText"}})],1)})),e._l(e.currentQuestion.answerChoices,(function(s,i){return t("div",{directives:[{name:"show",rawName:"v-show",value:"multiChoice"===e.currentQuestion.type,expression:"currentQuestion.type === 'multiChoice'"}],key:"mc"+i},[t("q-checkbox",{staticClass:"q-mt-md",attrs:{size:"lg",val:s.id,label:s.text[e.$i18n.locale]},model:{value:e.multiChoiceAnswer,callback:function(t){e.multiChoiceAnswer=t},expression:"multiChoiceAnswer"}}),t("q-input",{directives:[{name:"show",rawName:"v-show",value:s.includeFreeText,expression:"answerChoice.includeFreeText"}],attrs:{disable:!e.multiChoiceAnswer.includes(s.id),type:"textarea",label:e.$t("studies.tasks.form.freeTextExplanation"),rows:"3",outlined:""},model:{value:e.multiChoiceAnswerFreeText[i],callback:function(t){e.$set(e.multiChoiceAnswerFreeText,i,t)},expression:"multiChoiceAnswerFreeText[index]"}})],1)})),t("div",{directives:[{name:"show",rawName:"v-show",value:"photo"===e.currentQuestion.type,expression:"currentQuestion.type === 'photo'"}],staticClass:"text-center"},[t("div",{staticClass:"row justify-center"},[t("img",{ref:"photoViewer",staticClass:"photoViewer"}),t("q-btn",{staticClass:"photoBtn",attrs:{color:"primary",icon:"photo_camera"}},[t("label",{staticClass:"photoFileLabel"},[e._v(e._s(e.$t("studies.tasks.form.takePhoto"))+"\n                "),t("input",{ref:"photoFile",staticClass:"photoFileInput",attrs:{type:"file",capture:"user",accept:"image/*"},on:{change:function(t){return e.photoTaken(this)}}})])])],1)])],2)]),"textOnly"!==e.currentQuestion.type?t("div",{staticClass:"row justify-around"},[t("q-btn",{attrs:{disabled:!e.isAnswered,"no-caps":"",flat:"",label:e.$t("studies.tasks.form.removeAnswer"),color:"negative","icon-right":"cancel"},on:{click:function(t){return e.clearAnswer()}}})],1):e._e(),t("div",{staticClass:"row justify-around q-mb-xl q-mt-lg"},[t("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.isFirstQuestion,expression:"!isFirstQuestion"}],staticClass:"mobibtn",attrs:{icon:"arrow_back",color:"secondary",label:e.$t("common.back")},on:{click:function(t){return e.back()}}}),t("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.isAnswered,expression:"isAnswered"}],staticClass:"mobibtn",attrs:{disable:!e.isValidAnswer,"icon-right":"arrow_forward",color:"primary",label:e.$t("common.next")},on:{click:function(t){return e.next()}}}),t("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.isAnswered,expression:"!isAnswered"}],staticClass:"mobibtn",attrs:{"icon-right":"arrow_forward",color:"warning",label:e.$t("common.skip")},on:{click:function(t){return e.next()}}})],1),e.currentQuestion.footer?t("div",{staticClass:"text-left text-caption absolute-bottom q-pa-sm"},[e._v("\n      "+e._s(e.currentQuestion.footer[e.$i18n.locale])+"\n    ")]):e._e()],1):e._e(),e.finished?t("div",[t("div",{staticClass:"text-center text-h6 q-mt-md"},[e._v("\n      "+e._s(e.$t("studies.tasks.form.formCompleted"))+"\n    ")]),t("table",{staticClass:"summaryTable q-my-lg"},[t("tr",[t("td",[e._v(e._s(e.$t("studies.tasks.form.askedQuestions")))]),t("td",[e._v(" "+e._s(e.asked)+" ")])]),t("tr",[t("td",[e._v(e._s(e.$t("studies.tasks.form.answeredQuestions")))]),t("td",[e._v(" "+e._s(e.answered)+" ")])])]),t("div",{staticClass:"row justify-around q-mt-xl"},[t("q-btn",{staticClass:"mobibtn",attrs:{color:"negative",loading:e.sending,label:e.$t("common.discard")},on:{click:function(t){return e.discard()}}}),t("q-btn",{staticClass:"mobibtn",attrs:{color:"primary",loading:e.sending,label:e.$t("common.send")},on:{click:function(t){return e.send()}}})],1)]):e._e(),t("q-inner-loading",{attrs:{showing:e.isRetrieving}},[t("div",{staticClass:"mobitxt2"},[e._v(e._s(e.$t("studies.tasks.form.retrieving")))]),t("q-spinner-oval",{attrs:{size:"50px",color:"primary"}})],1)],1)},r=[],n=(s("ddb0"),s("14d9"),s("3c65"),s("a5f6")),o=s("c313"),a=s("6a6d"),u=s("9bf1"),c=s("8621"),h={name:"FormPage",props:{studyKey:String,taskId:Number,formKey:String,formName:Object},data:function(){return{formDescr:{},responses:[],oldResponses:[],freetextAnswer:void 0,numberAnswer:void 0,timeAnswer:void 0,singleChoiceAnswer:void 0,singleChoiceAnswerFreeText:void 0,multiChoiceAnswer:[],multiChoiceAnswerFreeText:[],photoAnswer:void 0,finished:!1,currentQuestion:void 0,sending:!1,slideName:"",timeRules:[e=>!e||c["a"].time(e)||this.$t("studies.tasks.form.timeNotValid")],report:{userKey:u["a"].user._key,participantKey:u["a"].user.participantKey,studyKey:this.studyKey,taskId:parseInt(this.taskId),taskType:"form",formKey:this.formKey,formName:this.formName,createdTS:new Date,phone:n["a"].device,summary:{startedTS:new Date,completedTS:void 0,asked:void 0,answered:void 0},data:void 0}}},async created(){this.isRetrieving=!0;const e=this.formKey;try{let t=await a["a"].getFormDescription(e);t||(this.$q.loading.show(),t=await o["a"].getForm(e),await a["a"].setFormDescription(e,t)),this.formDescr=t,this.currentQuestion=this.formDescr.questions[0],setTimeout((()=>{this.slideName="fadeInDown"}),10)}catch(t){console.error(t),this.$q.notify({color:"negative",message:"Cannot retrieve information about the form: "+t.message,icon:"report_problem",onDismiss(){this.$router.go(-1)}})}this.$q.loading.hide(),this.isRetrieving=!1},computed:{isFirstQuestion(){return this.currentQuestion.id===this.formDescr.questions[0].id},isAnswered(){return"singleChoice"===this.currentQuestion.type&&this.singleChoiceAnswer||"freetext"===this.currentQuestion.type&&this.freetextAnswer||"number"===this.currentQuestion.type&&(this.numberAnswer||0===this.numberAnswer)||"slider"===this.currentQuestion.type&&(this.numberAnswer||0===this.numberAnswer)||"time"===this.currentQuestion.type&&this.timeAnswer||"multiChoice"===this.currentQuestion.type&&this.multiChoiceAnswer.length||"photo"===this.currentQuestion.type&&this.photoAnswer||"textOnly"===this.currentQuestion.type},isValidAnswer(){return"singleChoice"===this.currentQuestion.type&&this.singleChoiceAnswer||"freetext"===this.currentQuestion.type&&this.freetextAnswer||"number"===this.currentQuestion.type&&(!this.numberAnswer||this.numberAnswer>=this.currentQuestion.min&&this.numberAnswer<=this.currentQuestion.max)||"time"===this.currentQuestion.type&&this.timeAnswer||"slider"===this.currentQuestion.type&&(this.numberAnswer||0===this.numberAnswer)||"multiChoice"===this.currentQuestion.type&&this.multiChoiceAnswer.length||"photo"===this.currentQuestion.type||"textOnly"===this.currentQuestion.type},asked(){return this.responses.length},answered(){return this.responses.reduce(((e,t)=>e+(void 0!==t.answer)),0)}},methods:{next(){this.slideName="";let e=this.currentQuestion.nextDefaultId,t={questionId:this.currentQuestion.id,questionType:this.currentQuestion.type,questionText:this.currentQuestion.text,answer:void 0,timeStamp:new Date};if("freetext"===this.currentQuestion.type)t.answer=this.freetextAnswer;else if("number"===this.currentQuestion.type)t.answer=this.numberAnswer;else if("time"===this.currentQuestion.type)t.answer=this.timeAnswer;else if("slider"===this.currentQuestion.type)t.answer=this.numberAnswer;else if("singleChoice"===this.currentQuestion.type){let s=this.currentQuestion.answerChoices.find((e=>e.id===this.singleChoiceAnswer));s&&(s.includeFreeText?t.answer={answerText:s.text,answerId:s.id,freetextAnswer:this.singleChoiceAnswerFreeText,includeFreeText:!0}:t.answer={answerText:s.text,answerId:s.id},s.nextQuestionId&&(e=s.nextQuestionId))}else if("multiChoice"===this.currentQuestion.type){t.answer=[];for(let e of this.multiChoiceAnswer){let s=this.currentQuestion.answerChoices.find((t=>t.id===e)),i=this.currentQuestion.answerChoices.findIndex((t=>t.id===e));s.includeFreeText?t.answer.push({answerText:s.text,answerId:s.id,freetextAnswer:this.multiChoiceAnswerFreeText[i],includeFreeText:!0}):t.answer.push({answerText:s.text,answerId:s.id})}}else"photo"===this.currentQuestion.type&&(t.answer=this.photoAnswer);if(this.responses.push(t),this.freetextAnswer=void 0,this.numberAnswer=void 0,this.timeAnswer=void 0,this.multiChoiceAnswer=[],this.singleChoiceAnswer=void 0,this.singleChoiceAnswerFreeText=void 0,this.multiChoiceAnswerFreeText=[],this.photoAnswer=void 0,this.$refs.photoViewer.style.display="none",!e)if(this.currentQuestion.id===this.formDescr.questions[this.formDescr.questions.length-1].id)e="ENDFORM";else{let t=this.formDescr.questions.findIndex((e=>e.id===this.currentQuestion.id));e="Q"+(t+2)}if(this.oldResponses[1]&&this.oldResponses[1].questionId===e){if(this.oldResponses[1].answer){const t=this.formDescr.questions.find((t=>t.id===e));if("freetext"===t.type&&(this.freetextAnswer=this.oldResponses[1].answer),"time"===t.type)this.timeAnswer=this.oldResponses[1].answer;else if("number"===t.type||"slider"===t.type)this.numberAnswer=this.oldResponses[1].answer;else if("singleChoice"===t.type)this.singleChoiceAnswer=this.oldResponses[1].answer.answerId,this.oldResponses[1].answer.includeFreeText&&(this.singleChoiceAnswerFreeText=this.oldResponses[1].answer.freetextAnswer);else if("multiChoice"===t.type&&Array.isArray(this.oldResponses[1].answer)){if(this.multiChoiceAnswer=this.oldResponses[1].answer.map((e=>e.answerId)),this.oldResponses[1].answer.some((e=>e.includeFreeText)))for(let e of this.multiChoiceAnswer){let s=t.answerChoices.findIndex((t=>t.id===e)),i=this.oldResponses[1].answer.findIndex((t=>t.answerId===e));this.multiChoiceAnswerFreeText[s]=this.oldResponses[1].answer[i].freetextAnswer}}else"photo"===t.type&&(this.photoAnswer=this.oldResponses[1].answer,this.$refs.photoViewer.style.display="block",this.$refs.photoViewer.src=this.photoAnswer)}this.oldResponses.shift()}else this.oldResponses=[];if("ENDFORM"===e){if(this.finished=!0,this.formDescr.summaryFunction&&""!==this.formDescr.summaryFunction)try{const e=new Function("answers",'"use strict";'+this.formDescr.summaryFunction);let t=e(this.responses);for(let s in t)this.report.summary[s]=t[s]}catch(s){console.error(s)}}else this.currentQuestion=this.formDescr.questions.find((t=>t.id===e));setTimeout((()=>{this.slideName="slideInRight"}),10)},back(){this.slideName="",this.freetextAnswer=void 0,this.numberAnswer=void 0,this.timeAnswer=void 0,this.multiChoiceAnswer=[],this.singleChoiceAnswer=void 0,this.singleChoiceAnswerFreeText=void 0,this.multiChoiceAnswerFreeText=[];const e=this.responses[this.responses.length-1];if(this.currentQuestion=this.formDescr.questions.find((t=>t.id===e.questionId)),e.answer)if("freetext"===this.currentQuestion.type)this.freetextAnswer=e.answer;else if("number"===this.currentQuestion.type)this.numberAnswer=e.answer;else if("time"===this.currentQuestion.type)this.timeAnswer=e.answer;else if("slider"===this.currentQuestion.type)this.numberAnswer=e.answer;else if("singleChoice"===this.currentQuestion.type)this.singleChoiceAnswer=e.answer.answerId,e.answer.includeFreeText&&(this.singleChoiceAnswerFreeText=e.answer.freetextAnswer);else if("multiChoice"===this.currentQuestion.type){if(this.multiChoiceAnswer=e.answer.map((e=>e.answerId)),e.answer.some((e=>e.includeFreeText)))for(let t of this.multiChoiceAnswer){let s=this.currentQuestion.answerChoices.findIndex((e=>e.id===t)),i=e.answer.findIndex((e=>e.answerId===t));this.multiChoiceAnswerFreeText[s]=e.answer[i].freetextAnswer}}else"photo"===this.currentQuestion.type&&(this.photoAnswer=e.answer,this.$refs.photoViewer.style.display="block",this.$refs.photoViewer.src=e.answer);this.oldResponses.unshift(this.responses.pop()),setTimeout((()=>{this.slideName="slideInLeft"}),10)},photoTaken(){var e=this.$refs.photoFile.files;if(e&&e[0]){var t=new FileReader;t.onload=e=>{this.photoAnswer=e.target.result,this.$refs.photoViewer.style.display="block",this.$refs.photoViewer.src=e.target.result},t.readAsDataURL(e[0])}},clearAnswer(){"singleChoice"===this.currentQuestion.type&&(this.singleChoiceAnswer=void 0,this.singleChoiceAnswerFreeText=void 0),"freetext"===this.currentQuestion.type&&(this.freetextAnswer=void 0),"number"===this.currentQuestion.type&&(this.numberAnswer=void 0),"time"===this.currentQuestion.type&&(this.timeAnswer=void 0),"slider"===this.currentQuestion.type&&(this.numberAnswer=void 0),"multiChoice"===this.currentQuestion.type&&(this.multiChoiceAnswer=[],this.multiChoiceAnswerFreeText=[]),"photo"===this.currentQuestion.type&&(this.photoAnswer=void 0,this.$refs.photoViewer.style.display="none")},async saveAndLeave(){this.report.summary.completedTS=new Date,this.report.summary.asked=this.asked,this.report.summary.answered=this.answered,this.report.data=this.responses;try{await o["a"].sendTasksResults(this.report),await a["a"].setTaskCompletion(this.report.studyKey,this.report.taskId,new Date),this.$router.push({name:"home"})}catch(e){this.sending=!1,console.error(e),this.$q.notify({color:"negative",message:this.$t("errors.connectionError")+" "+e.message,icon:"report_problem"})}},async send(){return this.sending=!0,this.report.discarded=!1,this.saveAndLeave()},async discard(){return this.sending=!0,this.report.discarded=!0,delete this.report.summary,delete this.report.data,this.saveAndLeave()}}},l=h,d=(s("4e5d"),s("2877")),m=s("9989"),w=s("27f9"),p=s("c1d0"),f=s("3786"),x=s("8f8e"),v=s("9c40"),y=s("74f7"),A=s("1b41"),b=s("eebe"),C=s.n(b),Q=Object(d["a"])(l,i,r,!1,null,"54b4ea24",null);t["default"]=Q.exports;C()(Q,"components",{QPage:m["a"],QInput:w["a"],QSlider:p["a"],QRadio:f["a"],QCheckbox:x["a"],QBtn:v["a"],QInnerLoading:y["a"],QSpinnerOval:A["a"]})},"4e5d":function(e,t,s){"use strict";s("66be")},"66be":function(e,t,s){}}]);