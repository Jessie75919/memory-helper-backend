(function(e){function t(t){for(var o,r,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);h&&h(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},s=[];function i(e){return c.p+"js/"+({create:"create",login:"login",study:"study"}[e]||e)+"."+{create:"c2c83c37",login:"fcfbf3f5",study:"55cb67bc"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={login:1,study:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({create:"create",login:"login",study:"study"}[e]||e)+"."+{create:"31d6cfe0",login:"cd800799",study:"69c12928"}[e]+".css",a=c.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===o||l===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[e],h.parentNode.removeChild(h),n(s)},h.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/static/dist/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2308:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[n("v-img",{staticClass:"white--text align-end",attrs:{height:"100px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[n("v-card-title",[e._v(" "+e._s(e.loc_question||"Question")+" ")])],1),n("v-card-text",[n("form",{staticClass:"mt-3"},[n("v-text-field",{attrs:{outlined:"","error-messages":e.questionErrors,counter:255,label:"Question",required:""},on:{input:function(t){return e.$v.loc_question.$touch()},blur:function(t){return e.$v.loc_question.$touch()}},model:{value:e.loc_question,callback:function(t){e.loc_question=t},expression:"loc_question"}}),n("v-textarea",{attrs:{outlined:"","error-messages":e.answerErrors,label:"Answer",required:""},on:{input:function(t){return e.$v.loc_answer.$touch()},blur:function(t){return e.$v.loc_answer.$touch()},keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.metaKey?e.submit.apply(null,arguments):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey?e.submit.apply(null,arguments):null}]},model:{value:e.loc_answer,callback:function(t){e.loc_answer=t},expression:"loc_answer"}}),n("v-btn",{attrs:{block:"","x-large":"",color:"primary"},on:{click:e.submit}},[e._v("Save")])],1)])],1)},r=[],a=(n("a9e3"),n("bc3a")),s=n.n(a),i=n("1dce"),c=n("b5ae"),u={name:"EditComponent",props:{question:{type:String,default:""},answer:{type:String,default:""},question_id:{type:Number}},mixins:[i["validationMixin"]],validations:{loc_question:{required:c["required"],maxLength:Object(c["maxLength"])(255)},loc_answer:{required:c["required"]}},data:function(){return{loc_question:this.question,loc_answer:this.answer}},methods:{resetInputs:function(){this.$v.$reset(),this.loc_answer="",this.loc_question=""},submit:function(){var e=this;if(this.$v.$touch(),!this.$v.$invalid){var t={answers:[{content:this.loc_answer}],content:this.loc_question},n=this.question_id?"put":"post",o=this.question_id?"/".concat(this.question_id):"",r="/api/questions"+o;s.a[n](r,t).then((function(t){e.$emit("submit-success",t),e.resetInputs()})).catch((function(t){e.$emit("submit-failed",t)}))}}},computed:{questionErrors:function(){var e=[];return this.$v.loc_question.$dirty?(!this.$v.loc_question.maxLength&&e.push("Question must be at most 255 characters long"),!this.$v.loc_question.required&&e.push("Question is required."),e):e},answerErrors:function(){var e=[];return this.$v.loc_answer.$dirty?(!this.$v.loc_answer.required&&e.push("Answer is required"),e):e}}},l=u,d=n("2877"),h=n("6544"),f=n.n(h),v=n("8336"),m=n("b0af"),p=n("99d9"),_=n("adda"),b=n("8654"),g=n("a844"),w=Object(d["a"])(l,o,r,!1,null,null,null);t["a"]=w.exports;f()(w,{VBtn:v["a"],VCard:m["a"],VCardText:p["c"],VCardTitle:p["d"],VImg:_["a"],VTextField:b["a"],VTextarea:g["a"]})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{dark:"",color:"secondary",flat:"",app:""}},[e.isAuthenticated?n("v-toolbar-title",[e._v(e._s(e.$route.name))]):n("v-toolbar-title",[e._v("ChanChan Memory")]),n("v-spacer"),e.isAuthenticated?n("v-btn",{attrs:{depressed:"",color:"secondary"},on:{click:e.logout}},[n("v-icon",[e._v("mdi-logout")])],1):e._e()],1),n("v-main",{attrs:{app:""}},[n("router-view")],1),e.isAuthenticated?n("v-bottom-navigation",{attrs:{dark:"",app:""}},[n("div",{staticClass:"d-flex justify-space-around align-self-center",staticStyle:{width:"100%"}},[n("v-btn",{attrs:{href:"/review"}},[n("span",[e._v("Review")]),n("v-icon",[e._v("mdi-book-open")])],1),n("v-btn",{attrs:{href:"/create"}},[n("span",[e._v("Create")]),n("v-icon",[e._v("mdi-pencil-box")])],1)],1)]):e._e()],1)},a=[],s=n("5530"),i=n("2f62"),c={name:"App",data:function(){return{}},computed:Object(s["a"])({},Object(i["c"])(["isAuthenticated"])),methods:Object(s["a"])({},Object(i["b"])(["logout"]))},u=c,l=(n("5c0b"),n("2877")),d=n("6544"),h=n.n(d),f=n("7496"),v=n("40dc"),m=n("b81c"),p=n("8336"),_=n("132d"),b=n("f6c4"),g=n("2fa4"),w=n("2a7f"),k=Object(l["a"])(u,r,a,!1,null,null,null),y=k.exports;h()(k,{VApp:f["a"],VAppBar:v["a"],VBottomNavigation:m["a"],VBtn:p["a"],VIcon:_["a"],VMain:b["a"],VSpacer:g["a"],VToolbarTitle:w["a"]});n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0");var q=n("8c4f"),x=n("bb44"),C=n("bc3a"),S=n.n(C),O=n("53ca"),j=n("d4ec"),T=n("bee2");function V(e){try{JSON.parse(e)}catch(t){return!1}return!0}var $=function(){function e(){Object(j["a"])(this,e)}return Object(T["a"])(e,null,[{key:"set",value:function(e,t){console.log(t);var n=t;"object"===Object(O["a"])(n)&&(n=JSON.stringify(n)),localStorage.setItem(e,n)}},{key:"get",value:function(e){var t=localStorage.getItem(e);return V(t)?JSON.parse(t):t}},{key:"remove",value:function(e){localStorage.removeItem(e)}},{key:"clear",value:function(){localStorage.clear()}}]),e}();o["a"].use(i["a"]);var A=new i["a"].Store({state:{access_token:$.get("access_token"),refresh_token:$.get("refresh_token")},getters:{isAuthenticated:function(e){return Boolean(e.access_token)}},mutations:{storeToken:function(e,t){var n=t.access,o=t.refresh;e.access_token=n,e.refresh_token=o,$.set("access_token",n),$.set("refresh_token",o)},removeToken:function(e){e.access_token=null,e.refresh_token=null,$.clear()}},actions:{login:function(e,t){S.a.post("/api/token/",t).then((function(t){var n=t.data;e.commit("storeToken",n),window.location.href="/review"})).catch((function(e){console.log(e)}))},logout:function(e){e.commit("removeToken"),window.location.href="/login"}},modules:{}});o["a"].use(q["a"]);var E=[{path:"/",name:"Home",component:x["default"]},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/create",name:"Create",component:function(){return n.e("create").then(n.bind(null,"d879"))}},{path:"/review",name:"Review",component:function(){return Promise.resolve().then(n.bind(null,"bb44"))}},{path:"/study/:mode?",name:"Study",props:!0,component:function(){return n.e("study").then(n.bind(null,"560f"))}}],P=new q["a"]({mode:"history",base:"/static/dist/",routes:E});P.beforeEach((function(e,t,n){"Login"===e.name||A.getters.isAuthenticated?n():window.location.href="/login"}));var B=P,L=n("f309");o["a"].use(L["a"]);var N=new L["a"]({}),M=n("1da1");n("96cf"),n("99af");function I(){var e=$.get("access_token");S.a.defaults.headers.common["Authorization"]="Bearer ".concat(e)}function R(){S.a.defaults.headers.common["X-CSRFToken"]=document.querySelector("[name=csrfmiddlewaretoken]").value}function D(e){var t="/api/token/refresh/";if(e.config.url===t)return Promise.reject(e);var n=e.config,o=A.state.refresh_token;return S.a.post(t,{refresh:o}).then((function(e){var t=e.data.access;return $.set("access_token",t),S.a.defaults.headers.common["Authorization"]="Bearer ".concat(t),n.headers.Authorization="Bearer ".concat(t),S()(n)})).catch((function(t){return alert("".concat(t.response.status,": 作業逾時或無相關使用授權，請重新登入")),window.location.href="/login",Promise.reject(e)}))}function U(){I(),R(),S.a.interceptors.request.use(function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),S.a.interceptors.response.use((function(e){return e}),(function(e){if(e.response)switch(e.response.status){case 400:var t=e.response.data.message;alert("".concat(e.response.status,": ").concat(t||"資料錯誤","。"));break;case 401:return D(e);case 404:alert("".concat(e.response.status,": 資料來源不存在"));break;case 500:alert("".concat(e.response.status,": 內部系統發生錯誤"));break;default:alert("".concat(e.response.status,": 系統維護中，造成您的不便，敬請見諒。"));break}else"ECONNABORTED"===e.code&&e.message&&-1!==e.message.indexOf("timeout")?alert("網路連線逾時，請點「確認」鍵後繼續使用。"):alert("網路連線不穩定，請稍候再試");return Promise.reject(e)}))}o["a"].config.productionTip=!1,U(),new o["a"]({router:B,store:A,vuetify:N,render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"88a4":function(e,t,n){},"9c0c":function(e,t,n){},a0e9:function(e,t,n){"use strict";n("88a4")},bb44:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",[n("v-tabs",{on:{change:e.onTabChange},model:{value:e.selected_tab,callback:function(t){e.selected_tab=t},expression:"selected_tab"}},e._l(e.tabs,(function(t){return n("v-tab",{key:t.val},[e._v(e._s(t.label))])})),1)],1)],1),e.show_error?n("v-alert",{attrs:{border:"top",color:"red lighten-2",dark:""}},[e._v(" "+e._s(e.error_message)+" ")]):e._e(),e._l(e.questions,(function(t,o){return e.questions?n("v-row",{key:"q_"+t.id},[n("v-col",[n("v-card",{staticClass:"mx-auto"},[n("v-toolbar",{attrs:{color:"cyan darken-1",dark:"",dense:"",flat:""}},[n("v-toolbar-title",{staticClass:"text-body-3"},[e._v(" "+e._s(t.content)+" ")]),n("v-spacer"),n("p",{staticClass:"text-caption mt-4"},[n("span",{staticClass:"font-weight-bold"},[e._v(e._s(t.count_of_seen))]),e._v(" times ")]),n("v-btn",{staticClass:"ml-auto",attrs:{icon:""},on:{click:function(n){return e.openActionsPanel(t)}}},[n("v-icon",[e._v("mdi-format-list-bulleted")])],1)],1),!0===t.show_answer&&t.answers.length>0?n("v-card-text",[n("span",{staticClass:"text--primary content_pre"},[e._v(e._s(t.answers[0].content))])]):e._e(),t.answers.length>0?n("v-card-actions",[!1===t.show_answer?n("v-btn",{staticClass:"text-center",attrs:{text:"",block:"",color:"indigo"},on:{click:function(e){t.show_answer=!0}}},[e._v(" Show Answer ")]):n("v-btn",{attrs:{block:"",outlined:"",color:"teal"},on:{click:function(e){t.show_answer=!1}}},[e._v(" Close ")])],1):e._e()],1)],1)],1):e._e()})),0===e.questions.length?n("v-row",[n("v-col",[n("v-alert",{staticClass:"text-capitalize",attrs:{color:"blue-grey",dark:"",dense:"",icon:"mdi-school",prominent:""}},[e._v(" no questions for today ! let's learn something ")])],1)],1):e._e(),n("v-bottom-sheet",{model:{value:e.show_sheet,callback:function(t){e.show_sheet=t},expression:"show_sheet"}},[e.selected_question?n("v-sheet",{staticClass:"text-center",attrs:{height:"200px"}},[n("div",{staticClass:"mx-auto",staticStyle:{width:"90%"}},[n("div",{staticClass:"text-h6 text--primary text-truncate pa-2"},[e._v(" "+e._s(e.selected_question.content)+" ")]),e.selected_question?n("div",{staticClass:"text-truncate pa-2"},[e._v(" "+e._s(e.selected_question.answers[0].content)+" ")]):e._e(),n("v-btn",{staticClass:"mt-3",attrs:{rounded:"",block:"",dark:"",color:"red lighten-1"},on:{click:e.attemptToRemove}},[e._v(" Delete ")]),n("v-btn",{staticClass:"mt-5",attrs:{rounded:"",block:"",dark:"",color:"blue lighten-1"},on:{click:e.toEdit}},[e._v(" Edit ")])],1)]):e._e()],1),n("v-snackbar",{scopedSlots:e._u([{key:"action",fn:function(t){var o=t.attrs;return[n("v-btn",e._b({attrs:{color:"blue",text:""},on:{click:function(t){e.should_show_remove_snackbar=!1}}},"v-btn",o,!1),[e._v(" Cancel ")]),n("v-btn",e._b({attrs:{color:"blue",text:""},on:{click:e.remove}},"v-btn",o,!1),[e._v(" Sure ")])]}}]),model:{value:e.should_show_remove_snackbar,callback:function(t){e.should_show_remove_snackbar=t},expression:"should_show_remove_snackbar"}},[e._v(" "+e._s(e.snackbar_message)+" ")]),e.selected_question?n("UpdatingModal",{ref:"updating_modal",attrs:{question:e.selected_question},on:{"submit-success":e.onSubmitSuccess,"submit-failed":e.onSubmitFailed}}):e._e(),e.questions?n("v-btn",{staticStyle:{bottom:"13vh"},attrs:{color:"deep-orange",dark:"",fixed:"",bottom:"",right:"",fab:"",href:e.studyUrl}},[n("v-icon",[e._v("mdi-book-open-page-variant")])],1):e._e()],2)},r=[],a=n("5530"),s=(n("7db0"),n("c740"),n("a434"),n("d81d"),n("bc3a")),i=n.n(s),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{width:"500"},model:{value:e.should_show,callback:function(t){e.should_show=t},expression:"should_show"}},[n("EditComponent",{attrs:{answer:e.question.answers[0].content,question:e.question.content,question_id:e.question.id},on:{"submit-success":function(t){return e.$emit("submit-success",t)},"submit-failed":function(t){return e.$emit("submit-failed",t)}}})],1)},u=[],l=n("2308"),d={name:"UpdatingModal",components:{EditComponent:l["a"]},props:{question:{type:Object}},data:function(){return{should_show:!1}},methods:{open:function(){this.should_show=!0},close:function(){this.should_show=!1}}},h=d,f=n("2877"),v=n("6544"),m=n.n(v),p=n("169a"),_=Object(f["a"])(h,c,u,!1,null,null,null),b=_.exports;m()(_,{VDialog:p["a"]});var g={name:"ReviewPage",data:function(){return{questions:null,show_error:!1,error_message:"",tabs:[{val:"today",label:"Today"},{val:"week",label:"This Week"},{val:"month",label:"This Month"}],selected_tab:0,show_sheet:!1,should_show_remove_snackbar:!1,selected_question:null,snackbar_message:""}},components:{UpdatingModal:b},methods:{updateLocalData:function(e){var t=this.questions.find((function(t){return t.id===e.id}));t.content=e.content,t.answers[0]=e.answers[0]},onSubmitSuccess:function(e){this.updateLocalData(e.data),this.$refs.updating_modal.close(),this.closeActionsPanel()},onSubmitFailed:function(e){this.show_error=!0,this.error_message=e},closeActionsPanel:function(){this.selected_question=null,this.show_sheet=!1},closeConfirmingPanel:function(){this.should_show_remove_snackbar=!1},openActionsPanel:function(e){this.show_sheet=!0,this.selected_question=e},remove:function(){var e=this,t=this.selected_question;if(!t)return!1;i.a.delete("/api/questions/".concat(t.id)).then((function(n){var o=e.questions.findIndex((function(e){return e.id===t.id}));-1!==o&&(e.questions.splice(o,1),e.closeActionsPanel(),e.closeConfirmingPanel())})).catch((function(t){e.show_error=!0,e.error_message=t}))},toEdit:function(){this.$refs.updating_modal.open()},attemptToRemove:function(){if(!this.selected_question)return!1;this.should_show_remove_snackbar=!0,this.snackbar_message='Are you sure to remove "'.concat(this.selected_question.content,'"?')},loadPage:function(){var e=this;this.resetError(),this.questions=[],i.a.get("/api/questions?q=".concat(this.mode)).then((function(t){e.questions=t.data.map((function(e){return Object(a["a"])({show_answer:!1},e)}))})).catch((function(t){e.show_error=!0,e.error_message=t}))},resetError:function(){this.show_error=!1,this.error_message=""},onTabChange:function(e){this.selected_tab=e,this.loadPage()}},computed:{mode:function(){return this.tabs[this.selected_tab].val},studyUrl:function(){return"/study/".concat(this.mode)}},watch:{show_sheet:function(e){!1===e&&this.closeActionsPanel()}},created:function(){this.loadPage()}},w=g,k=(n("a0e9"),n("0798")),y=n("288c"),q=n("8336"),x=n("b0af"),C=n("99d9"),S=n("62ad"),O=n("a523"),j=n("132d"),T=n("0fd9"),V=n("8dd9"),$=n("2db4"),A=n("2fa4"),E=n("71a3"),P=n("fe57"),B=n("71d9"),L=n("2a7f"),N=Object(f["a"])(w,o,r,!1,null,"0343a9ae",null);t["default"]=N.exports;m()(N,{VAlert:k["a"],VBottomSheet:y["a"],VBtn:q["a"],VCard:x["a"],VCardActions:C["a"],VCardText:C["c"],VCol:S["a"],VContainer:O["a"],VIcon:j["a"],VRow:T["a"],VSheet:V["a"],VSnackbar:$["a"],VSpacer:A["a"],VTab:E["a"],VTabs:P["a"],VToolbar:B["a"],VToolbarTitle:L["a"]})}});
//# sourceMappingURL=app.61eace4a.js.map