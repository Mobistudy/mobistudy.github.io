(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"8e1d":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{staticClass:"bg-primary text-white",attrs:{reveal:"",elevated:""}},[a("q-toolbar",[a("q-avatar",[a("q-icon",{attrs:{color:"white",name:this.icon}})],1),a("q-toolbar-title",[t._v(t._s(this.title))]),a("q-btn",{attrs:{flat:"",dense:"","icon-right":"clear"},on:{click:function(a){t.confirm=!0}}})],1)],1),a("q-page-container",[a("q-dialog",{attrs:{persistent:""},model:{value:t.confirm,callback:function(a){t.confirm=a},expression:"confirm"}},[a("q-card",[a("q-card-section",{staticClass:"row items-center"},[a("q-avatar",{attrs:{icon:"warning",color:"negative","text-color":"white",size:"lg"}}),a("span",{staticClass:"q-ml-sm"},[t._v(t._s(t.$t("studies.tasks.cancelTask")))])],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",color:"primary"}},[t._v("\n            "+t._s(t.$t("studies.tasks.cancelTaskLabel"))+"\n          ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",color:"primary"},on:{click:function(a){return t.goBack()}}},[t._v("\n            "+t._s(t.$t("studies.tasks.quitTaskLabel"))+"\n          ")])],1)],1)],1),a("transition",{attrs:{"enter-active-class":"animated "+this.slideName,"leave-active-class":"fadeOut",mode:"out-in"}},[a("router-view")],1)],1)],1)},i=[],o=(e("14d9"),{name:"TaskLayout",data(){return{confirm:!1,slideName:"",title:void 0,icon:void 0}},methods:{goBack(){this.$router.push({name:"tasker"})},update(t){setTimeout((()=>{this.slideName=t}),10)}},created(){this.title=this.$route.query.title,this.icon=this.$route.query.icon}}),r=o,n=e("2877"),c=e("4d5a"),l=e("e359"),u=e("65c6"),d=e("cb32"),p=e("0016"),m=e("6ac5"),v=e("9c40"),f=e("09e3"),h=e("24e8"),q=e("f09f"),b=e("a370"),k=e("4b7e"),w=e("7f67"),g=e("eebe"),Q=e.n(g),_=Object(n["a"])(r,s,i,!1,null,null,null);a["default"]=_.exports;Q()(_,"components",{QLayout:c["a"],QHeader:l["a"],QToolbar:u["a"],QAvatar:d["a"],QIcon:p["a"],QToolbarTitle:m["a"],QBtn:v["a"],QPageContainer:f["a"],QDialog:h["a"],QCard:q["a"],QCardSection:b["a"],QCardActions:k["a"]}),Q()(_,"directives",{ClosePopup:w["a"]})}}]);