(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create"],{d879:function(s,n,t){"use strict";t.r(n);var a=function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("v-container",[t("v-row",[t("v-col",[t("EditComponent",{attrs:{question:s.question,answer:s.answer},on:{"submit-success":s.onSubmitSuccess,"submit-failed":s.onSubmitFailed}})],1)],1),t("v-snackbar",{attrs:{timeout:s.timeout},scopedSlots:s._u([{key:"action",fn:function(n){var a=n.attrs;return[t("v-btn",s._b({attrs:{color:"blue",text:""},on:{click:function(n){s.should_show_snackbar=!1}}},"v-btn",a,!1),[s._v(" Close ")])]}}]),model:{value:s.should_show_snackbar,callback:function(n){s.should_show_snackbar=n},expression:"should_show_snackbar"}},[s._v(" "+s._s(s.message)+" ")])],1)},e=[],o=t("2308"),u={name:"CreatePage",components:{EditComponent:o["a"]},data:function(){return{question:"",answer:"",should_show_snackbar:!1,message:"",timeout:2e3}},methods:{onSubmitSuccess:function(s){this.message="Save Successfully!",this.should_show_snackbar=!0},onSubmitFailed:function(s){this.message="Oops!! Save failed !!",this.should_show_snackbar=!0}}},c=u,i=t("2877"),r=t("6544"),l=t.n(r),b=t("8336"),d=t("62ad"),h=t("a523"),_=t("0fd9"),m=t("2db4"),w=Object(i["a"])(c,a,e,!1,null,null,null);n["default"]=w.exports;l()(w,{VBtn:b["a"],VCol:d["a"],VContainer:h["a"],VRow:_["a"],VSnackbar:m["a"]})}}]);
//# sourceMappingURL=create.c2c83c37.js.map