(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"576cc":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"fullscreen"},[e("q-carousel",{staticStyle:{height:"100%"},attrs:{"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"","control-color":"primary"},model:{value:t.slide,callback:function(i){t.slide=i},expression:"slide"}},[e("q-carousel-slide",{attrs:{name:"intro1"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:"imgs/MobistudyIntroScreens_1.svg"}}),e("div",{staticClass:"q-my-md text-center"},[t._v("\n        "+t._s(t.$t("intro1"))+"\n      ")]),e("div",{staticStyle:{height:"50px"}})]),e("q-carousel-slide",{attrs:{name:"intro2"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:"imgs/MobistudyIntroScreens_2.svg"}}),e("div",{staticClass:"q-my-md text-center"},[t._v("\n        "+t._s(t.$t("intro2"))+"\n      ")]),e("div",{staticStyle:{height:"50px"}})]),e("q-carousel-slide",{attrs:{name:"intro3"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:"imgs/MobistudyIntroScreens_3.svg"}}),e("div",{staticClass:"q-my-md text-center"},[t._v("\n        "+t._s(t.$t("intro3"))+"\n      ")]),e("div",{staticStyle:{height:"50px"}})]),e("q-carousel-slide",{attrs:{name:"intro4"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:"imgs/MobistudyIntroScreens_4.svg"}}),e("div",{staticClass:"q-my-md text-center"},[t._v("\n        "+t._s(t.$t("intro4"))+"\n      ")]),e("div",{staticStyle:{height:"50px"}})])],1),e("div",{staticClass:"fixed-bottom q-mb-md row justify-around"},[e("q-btn",{directives:[{name:"show",rawName:"v-show",value:"intro1"!=t.slide,expression:"slide != 'intro1'"}],attrs:{icon:"chevron_left",color:"primary",label:t.$t("common.back")},on:{click:function(i){return t.prev()}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:"intro1"==t.slide,expression:"slide == 'intro1'"}],staticStyle:{width:"100px"}}),e("q-btn",{attrs:{"icon-right":"intro4"==t.slide?"arrow_forward":"chevron_right",color:"primary",label:"intro4"==t.slide?t.$t("common.start"):t.$t("common.next")},on:{click:function(i){return t.next()}}})],1),e("div",{staticStyle:{height:"10px"}})],1)},r=[],n=(e("5319"),{en:{intro1:"Welcome to Mobistudy! This app allows you to participate to clinical research using your phone.",intro2:"Researchers around the world create studies which are compared with your profile to determine if you suit their studies.",intro3:"You can contribute to the research by collecting data in “tasks” and by sharing that data with the researchers.",intro4:"All your data is kept secure and you will have complete control over what is shared and when."},sv:{intro1:"Välkommen till Mobistudy! Denna app låter dig delta i klinisk forskning genom din telefon.",intro2:"Forskare världen över skapar studier som jämförs med din profil för att avgöra om du passar för deras studier.",intro3:'Du kan bidra till forskning genom att samla in data via "uppgifter" och genom att dela data med forskarna.',intro4:"All din data lagras på ett säkert sätt och du har fullständig kontroll över vad som delas och när."}}),a={name:"IntroPage",data(){return{slide:"intro1"}},i18n:{messages:n},methods:{next(){"intro1"===this.slide?this.slide="intro2":"intro2"===this.slide?this.slide="intro3":"intro3"===this.slide?this.slide="intro4":this.$router.replace({name:"login"})},prev(){"intro2"===this.slide?this.slide="intro1":"intro3"===this.slide?this.slide="intro2":"intro4"===this.slide&&(this.slide="intro3")}}},o=a,l=e("2877"),d=e("880c"),c=e("62cd"),h=e("9c40"),m=e("eebe"),u=e.n(m),v=Object(l["a"])(o,s,r,!1,null,null,null);i["default"]=v.exports;u()(v,"components",{QCarousel:d["a"],QCarouselSlide:c["a"],QBtn:h["a"]})}}]);