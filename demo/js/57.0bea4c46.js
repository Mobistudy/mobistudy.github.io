(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[57],{9354:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("q-page",{attrs:{padding:""}},[e("div",{staticClass:"text-center"},[e("div",{staticClass:"text-h5"},[t._v(t._s(t.$t("studies.tasks.peakflow.results")))])]),e("div",{staticClass:"q-pa-md"},[e("canvas",{ref:"lineChart",staticStyle:{margin:"0 auto","padding-right":"2rem"},attrs:{height:"320"}}),e("div",{staticClass:"row justify-around"},[e("q-btn",{attrs:{label:"-1 "+t.$t("studies.tasks.peakflow.weeks"),color:"secondary",disable:t.disablePlus},on:{click:function(e){t.lineChartAdd(1)}}}),e("q-btn",{attrs:{label:"+1 "+t.$t("studies.tasks.peakflow.weeks"),color:"secondary",disable:t.disableMinus},on:{click:function(e){t.lineChartAdd(-1)}}})],1)]),e("div",{staticClass:"row justify-center q-mt-lg"},[e("q-btn",{staticClass:"full-width mobibtn",attrs:{color:"primary",label:t.$t("common.complete")},on:{click:t.completeTest}})],1)])},i=[],r=(a("14d9"),a("6a6d")),l=a("30ef"),n=a.n(l),d={pef:[],labels:[],reset(){this.pef=[],this.labels=[]}};let o=[];var h={name:"PeakFlowSummaryPage",props:{report:Object},data:function(){return{lineChart:void 0,currentStartWeek:0,currentEndWeek:2,disableMinus:!0,disablePlus:!1,startDate:new Date,pefMax:void 0}},methods:{async downloadData(){o=[],d.reset();try{o=await r["a"].getPastPeakFlowMeas(),this.renderLineChart(this.currentStartWeek,this.currentEndWeek)}catch(t){console.error("cannot download data",t)}},renderLineChart(t,e){d.reset();let a=7*t,s=7*e-1;s>o.length&&(s=o.length-1);for(let i=a;i<=s;i++){let t=o[i];this.addToLineChart(t.pefMax,t.createdTS)}this.updateLineChartReferences(),this.updatePlusMinusButtons()},addToLineChart(t,e){d.pef.push({x:e,y:t}),d.labels.push(e)},updateLineChartReferences(){this.lineChart.data.datasets[0].data=d.pef,this.lineChart.data.labels=d.labels,this.lineChart.update()},createPeakFlowLineChart(){let t=this.$refs.lineChart;this.lineChart=new n.a.Scatter(t,{type:"scatter",data:{labels:d.labels,datasets:[{label:this.$t("studies.tasks.peakflow.pef"),data:d.pef,backgroundColor:"#4038C7",borderColor:"#4038C7",borderWidth:0,pointRadius:4,fill:!1,lineTension:0,showLine:!0}]},options:{responsive:!0,title:{display:!1},scales:{xAxes:[{type:"time",time:{displayFormats:{day:"DD/MM hA"}},scaleLabel:{display:!0,lineChartLabelstring:"Date"}}],yAxes:[{scaleLabel:{display:!0,lineChartLabelstring:"value"}}]}}}),this.lineChart.update()},lineChartAdd(t){this.currentStartWeek+=t,this.currentEndWeek+=t,this.renderLineChart(this.currentStartWeek,this.currentEndWeek),this.updatePlusMinusButtons()},updatePlusMinusButtons(){0===this.currentStartWeek?this.disableMinus=!0:this.disableMinus=!1,this.currentEndWeek>=o.length/7?this.disablePlus=!0:this.disablePlus=!1},completeTest(){this.$router.push("/home")}},async mounted(){this.createPeakFlowLineChart(),await this.downloadData()}},u=h,c=a("2877"),p=a("9989"),b=a("9c40"),C=a("eebe"),k=a.n(C),f=Object(c["a"])(u,s,i,!1,null,null,null);e["default"]=f.exports;k()(f,"components",{QPage:p["a"],QBtn:b["a"]})}}]);