(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{"15a1":function(e,s,t){"use strict";t.r(s);var i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("q-page",{attrs:{padding:""}},[!e.finished&&e.currentQuestion?t("div",[t("transition",{attrs:{"enter-active-class":"animated "+this.slideName,"leave-active-class":"fadeOut",mode:"out-in"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:""!=e.slideName,expression:"slideName != ''"}],key:""},[t("div",{staticClass:"text-center text-subtitle1"},[t("div",{domProps:{innerHTML:e._s(e.currentQuestion.text[e.$i18n.locale])}})]),t("div",{staticClass:"text-center text-subtitle2 q-mb-md"},[t("div",{domProps:{innerHTML:e._s(e.currentQuestion.helper[e.$i18n.locale])}})]),t("q-input",{directives:[{name:"show",rawName:"v-show",value:"freetext"===e.currentQuestion.type,expression:"currentQuestion.type === 'freetext'"}],attrs:{type:"textarea",label:e.$t("studies.tasks.form.freeTextExplanation"),rows:"3",outlined:""},model:{value:e.freetextAnswer,callback:function(s){e.freetextAnswer=s},expression:"freetextAnswer"}}),t("q-input",{directives:[{name:"show",rawName:"v-show",value:"number"===e.currentQuestion.type,expression:"currentQuestion.type === 'number'"}],attrs:{type:"number",rules:[function(s){return!s||s>=e.currentQuestion.min&&s<=e.currentQuestion.max||(s<e.currentQuestion.min?e.$t("studies.tasks.form.numberTooSmall"):s>e.currentQuestion.max?e.$t("studies.tasks.form.numberTooBig"):void 0)}],outlined:""},model:{value:e.numberAnswer,callback:function(s){e.numberAnswer=e._n(s)},expression:"numberAnswer"}}),"slider"===e.currentQuestion.type?t("div",{staticClass:"text-center"},[t("div",{staticClass:"row justify-center"},[t("q-slider",{staticClass:"q-ma-sm",attrs:{min:e.currentQuestion.min,max:e.currentQuestion.max,vertical:e.currentQuestion.vertical,reverse:e.currentQuestion.vertical},model:{value:e.numberAnswer,callback:function(s){e.numberAnswer=e._n(s)},expression:"numberAnswer"}})],1)]):e._e(),e._l(e.currentQuestion.answerChoices,(function(s,i){return t("div",{directives:[{name:"show",rawName:"v-show",value:"singleChoice"===e.currentQuestion.type,expression:"currentQuestion.type === 'singleChoice'"}],key:"sc"+i},[t("q-radio",{attrs:{val:s.id,label:s.text[e.$i18n.locale]},model:{value:e.singleChoiceAnswer,callback:function(s){e.singleChoiceAnswer=s},expression:"singleChoiceAnswer"}}),t("q-input",{directives:[{name:"show",rawName:"v-show",value:s.includeFreeText,expression:"answerChoice.includeFreeText"}],attrs:{disable:e.singleChoiceAnswer!==s.id,type:"textarea",label:e.$t("studies.tasks.form.freeTextExplanation"),rows:"3",outlined:""},model:{value:e.singleChoiceAnswerFreeText,callback:function(s){e.singleChoiceAnswerFreeText=s},expression:"singleChoiceAnswerFreeText"}})],1)})),e._l(e.currentQuestion.answerChoices,(function(s,i){return t("div",{directives:[{name:"show",rawName:"v-show",value:"multiChoice"===e.currentQuestion.type,expression:"currentQuestion.type === 'multiChoice'"}],key:"mc"+i},[t("q-checkbox",{attrs:{val:s.id,label:s.text[e.$i18n.locale]},model:{value:e.multiChoiceAnswer,callback:function(s){e.multiChoiceAnswer=s},expression:"multiChoiceAnswer"}}),t("q-input",{directives:[{name:"show",rawName:"v-show",value:s.includeFreeText,expression:"answerChoice.includeFreeText"}],attrs:{disable:!e.multiChoiceAnswer.includes(s.id),type:"textarea",label:e.$t("studies.tasks.form.freeTextExplanation"),rows:"3",outlined:""},model:{value:e.multiChoiceAnswerFreeText[i],callback:function(s){e.$set(e.multiChoiceAnswerFreeText,i,s)},expression:"multiChoiceAnswerFreeText[index]"}})],1)}))],2)]),"textOnly"!==e.currentQuestion.type?t("div",{staticClass:"row justify-around"},[t("q-btn",{attrs:{"no-caps":"",flat:"",label:e.$t("studies.tasks.form.removeAnswer"),color:"negative","icon-right":"cancel"},on:{click:function(s){return e.clearAnswer()}}})],1):e._e(),t("div",{staticClass:"row justify-around q-mb-xl q-mt-md"},[t("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.isFirstQuestion,expression:"!isFirstQuestion"}],attrs:{icon:"arrow_back",color:"secondary",label:e.$t("common.back")},on:{click:function(s){return e.back()}}}),t("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.isAnswered,expression:"isAnswered"}],attrs:{disable:!e.isValidAnswer,"icon-right":"arrow_forward",color:"primary",label:e.$t("common.next")},on:{click:function(s){return e.next()}}}),t("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.isAnswered,expression:"!isAnswered"}],attrs:{"icon-right":"arrow_forward",color:"warning",label:e.$t("common.skip")},on:{click:function(s){return e.next()}}})],1),e.currentQuestion.footer?t("div",{staticClass:"text-left text-caption absolute-bottom q-pa-sm"},[e._v("\n      "+e._s(e.currentQuestion.footer[e.$i18n.locale])+"\n    ")]):e._e()],1):e._e(),e.finished?t("div",[t("div",{staticClass:"text-center text-h6"},[e._v("\n      "+e._s(e.$t("studies.tasks.form.formCompleted"))+"\n    ")]),t("div",{staticClass:"row justify-around q-ma-lg"},[t("q-btn",{attrs:{color:"secondary",loading:e.loading,label:e.$t("common.discard")},on:{click:function(s){return e.discard()}}}),t("q-btn",{attrs:{color:"primary",loading:e.loading,label:e.$t("common.send")},on:{click:function(s){return e.send()}}})],1)]):e._e(),t("q-inner-loading",{attrs:{showing:e.isRetrieving}},[t("div",{staticClass:"text-overline"},[e._v(e._s(e.$t("studies.tasks.miband3.dataSending")))]),t("q-spinner-oval",{attrs:{size:"50px",color:"primary"}})],1)],1)},n=[],r=(t("ddb0"),t("c313")),o=t("6a6d"),a=t("9bf1"),u={name:"FormPage",props:{studyKey:String,taskId:Number,formKey:String},data:function(){return{formDescr:{},responses:[],oldResponses:[],freetextAnswer:void 0,numberAnswer:void 0,singleChoiceAnswer:void 0,singleChoiceAnswerFreeText:void 0,multiChoiceAnswer:[],multiChoiceAnswerFreeText:[],finished:!1,currentQuestion:void 0,loading:!1,slideName:""}},async created(){this.isRetrieving=!0;const e=this.formKey;try{let s=await o["a"].getFormDescription(e);s||(this.$q.loading.show(),s=await r["a"].getForm(e),await o["a"].setFormDescription(e,s),this.$q.loading.hide()),this.formDescr=s,this.currentQuestion=this.formDescr.questions[0],setTimeout((()=>{this.slideName="fadeInDown"}),10)}catch(s){console.error(s),this.$q.notify({color:"negative",message:"Cannot retrieve information about the form: "+s.message,icon:"report_problem",onDismiss(){this.$router.go(-1)}})}this.isRetrieving=!1},computed:{isFirstQuestion(){return this.currentQuestion.id===this.formDescr.questions[0].id},isAnswered(){return"singleChoice"===this.currentQuestion.type&&this.singleChoiceAnswer||"freetext"===this.currentQuestion.type&&this.freetextAnswer||"number"===this.currentQuestion.type&&(this.numberAnswer||0===this.numberAnswer)||"slider"===this.currentQuestion.type&&(this.numberAnswer||0===this.numberAnswer)||"multiChoice"===this.currentQuestion.type&&this.multiChoiceAnswer.length||"textOnly"===this.currentQuestion.type},isValidAnswer(){return"singleChoice"===this.currentQuestion.type&&this.singleChoiceAnswer||"freetext"===this.currentQuestion.type&&this.freetextAnswer||"number"===this.currentQuestion.type&&(!this.numberAnswer||this.numberAnswer>=this.currentQuestion.min&&this.numberAnswer<=this.currentQuestion.max)||"slider"===this.currentQuestion.type&&(this.numberAnswer||0===this.numberAnswer)||"multiChoice"===this.currentQuestion.type&&this.multiChoiceAnswer.length||"textOnly"===this.currentQuestion.type}},methods:{next(){this.slideName="";let e=this.currentQuestion.nextDefaultId,s={questionId:this.currentQuestion.id,questionType:this.currentQuestion.type,questionText:this.currentQuestion.text,answer:void 0,timeStamp:new Date};if("freetext"===this.currentQuestion.type)s.answer=this.freetextAnswer;else if("number"===this.currentQuestion.type)s.answer=this.numberAnswer;else if("slider"===this.currentQuestion.type)s.answer=this.numberAnswer;else if("singleChoice"===this.currentQuestion.type){let t=this.currentQuestion.answerChoices.find((e=>e.id===this.singleChoiceAnswer));t&&(t.includeFreeText?s.answer={answerText:t.text,answerId:t.id,freetextAnswer:this.singleChoiceAnswerFreeText,includeFreeText:!0}:s.answer={answerText:t.text,answerId:t.id},t.nextQuestionId&&(e=t.nextQuestionId))}else if("multiChoice"===this.currentQuestion.type){s.answer=[];for(let e of this.multiChoiceAnswer){let t=this.currentQuestion.answerChoices.find((s=>s.id===e)),i=this.currentQuestion.answerChoices.findIndex((s=>s.id===e));t.includeFreeText?s.answer.push({answerText:t.text,answerId:t.id,freetextAnswer:this.multiChoiceAnswerFreeText[i],includeFreeText:!0}):s.answer.push({answerText:t.text,answerId:t.id})}}if(this.responses.push(s),this.freetextAnswer=void 0,this.numberAnswer=void 0,this.multiChoiceAnswer=[],this.singleChoiceAnswer=void 0,this.singleChoiceAnswerFreeText=void 0,this.multiChoiceAnswerFreeText=[],!e)if(this.currentQuestion.id===this.formDescr.questions[this.formDescr.questions.length-1].id)e="ENDFORM";else{let s=this.formDescr.questions.findIndex((e=>e.id===this.currentQuestion.id));e="Q"+(s+2)}if(this.oldResponses[1]&&this.oldResponses[1].questionId===e){if(this.oldResponses[1].answer){const s=this.formDescr.questions.find((s=>s.id===e));if("freetext"===s.type)this.freetextAnswer=this.oldResponses[1].answer;else if("number"===s.type||"slider"===s.type)this.numberAnswer=this.oldResponses[1].answer;else if("singleChoice"===s.type)this.singleChoiceAnswer=this.oldResponses[1].answer.answerId,this.oldResponses[1].answer.includeFreeText&&(this.singleChoiceAnswerFreeText=this.oldResponses[1].answer.freetextAnswer);else if("multiChoice"===s.type&&Array.isArray(this.oldResponses[1].answer)&&(this.multiChoiceAnswer=this.oldResponses[1].answer.map((e=>e.answerId)),this.oldResponses[1].answer.some((e=>e.includeFreeText))))for(let e of this.multiChoiceAnswer){let t=s.answerChoices.findIndex((s=>s.id===e)),i=this.oldResponses[1].answer.findIndex((s=>s.answerId===e));this.multiChoiceAnswerFreeText[t]=this.oldResponses[1].answer[i].freetextAnswer}}this.oldResponses.shift()}else this.oldResponses=[];"ENDFORM"===e?this.finished=!0:this.currentQuestion=this.formDescr.questions.find((s=>s.id===e)),setTimeout((()=>{this.slideName="slideInRight"}),10)},back(){this.slideName="",this.freetextAnswer=void 0,this.numberAnswer=void 0,this.multiChoiceAnswer=[],this.singleChoiceAnswer=void 0,this.singleChoiceAnswerFreeText=void 0,this.multiChoiceAnswerFreeText=[];const e=this.responses[this.responses.length-1];if(this.currentQuestion=this.formDescr.questions.find((s=>s.id===e.questionId)),e.answer)if("freetext"===this.currentQuestion.type)this.freetextAnswer=e.answer;else if("number"===this.currentQuestion.type)this.numberAnswer=e.answer;else if("slider"===this.currentQuestion.type)this.numberAnswer=e.answer;else if("singleChoice"===this.currentQuestion.type)this.singleChoiceAnswer=e.answer.answerId,e.answer.includeFreeText&&(this.singleChoiceAnswerFreeText=e.answer.freetextAnswer);else if("multiChoice"===this.currentQuestion.type&&(this.multiChoiceAnswer=e.answer.map((e=>e.answerId)),e.answer.some((e=>e.includeFreeText))))for(let s of this.multiChoiceAnswer){let t=this.currentQuestion.answerChoices.findIndex((e=>e.id===s)),i=e.answer.findIndex((e=>e.answerId===s));this.multiChoiceAnswerFreeText[t]=e.answer[i].freetextAnswer}this.oldResponses.unshift(this.responses.pop()),setTimeout((()=>{this.slideName="slideInLeft"}),10)},clearAnswer(){"singleChoice"===this.currentQuestion.type&&(this.singleChoiceAnswer=void 0,this.singleChoiceAnswerFreeText=void 0),"freetext"===this.currentQuestion.type&&(this.freetextAnswer=void 0),"number"===this.currentQuestion.type&&(this.numberAnswer=void 0),"slider"===this.currentQuestion.type&&(this.numberAnswer=void 0),"multiChoice"===this.currentQuestion.type&&(this.multiChoiceAnswer=[],this.multiChoiceAnswerFreeText=[])},async send(){this.loading=!0;const e=this.studyKey,s=Number(this.taskId);let t={userKey:a["a"].user._key,studyKey:e,taskId:s,createdTS:new Date,responses:this.responses};try{await r["a"].sendAnswers(t),await o["a"].setTaskCompletion(e,s,new Date),this.$router.push("/home")}catch(i){console.error(i),this.loading=!1,this.$q.notify({color:"negative",message:this.$t("errors.connectionError")+" "+i.message,icon:"report_problem"})}},async discard(){this.loading=!0;const e=this.studyKey,s=Number(this.taskId);try{await r["a"].sendAnswers({userKey:a["a"].user._key,studyKey:e,taskId:s,createdTS:new Date,responses:"discarded"}),await o["a"].setTaskCompletion(e,s,new Date),this.$router.push({name:"home"})}catch(t){this.loading=!1,console.error(t),this.$q.notify({color:"negative",message:this.$t("errors.connectionError")+" "+t.message,icon:"report_problem"})}}}},c=u,l=t("2877"),h=t("9989"),d=t("27f9"),w=t("c1d0"),m=t("3786"),p=t("8f8e"),f=t("9c40"),x=t("74f7"),A=t("1b41"),v=t("eebe"),b=t.n(v),y=Object(l["a"])(c,i,n,!1,null,null,null);s["default"]=y.exports;b()(y,"components",{QPage:h["a"],QInput:d["a"],QSlider:w["a"],QRadio:m["a"],QCheckbox:p["a"],QBtn:f["a"],QInnerLoading:x["a"],QSpinnerOval:A["a"]})}}]);