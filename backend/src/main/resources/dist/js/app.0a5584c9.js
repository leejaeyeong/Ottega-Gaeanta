(function(t){function e(e){for(var n,r,c=e[0],o=e[1],l=e[2],d=0,v=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0836":function(t,e,a){"use strict";a("98b2")},"0b5e":function(t,e,a){"use strict";a("c1ae")},1171:function(t,e,a){},"11d9":function(t,e,a){t.exports=a.p+"img/3.569782a9.jpg"},"1baa":function(t,e,a){t.exports=a.p+"img/main.bd382ed5.png"},"21bd":function(t,e,a){},3638:function(t,e,a){"use strict";a("1171")},"3dfd":function(t,e,a){"use strict";a("6fa6")},"405a":function(t,e,a){t.exports=a.p+"img/2.1382ccb5.jpg"},"41ac":function(t,e,a){"use strict";a("ad31")},4373:function(t,e,a){t.exports=a.p+"img/evaluation-model.d0fb62a1.png"},"56d7":function(t,e,a){"use strict";a.r(e);var n={};a.r(n),a.d(n,"showStyleInfo",(function(){return pe})),a.d(n,"showSearchItems",(function(){return be}));var i={};a.r(i),a.d(i,"SEARCH_STYLE_UNIT_INFO",(function(){return ye})),a.d(i,"SEARCH_ITEMS_CATEGORY",(function(){return Ce})),a.d(i,"SEARCH_DETAIL_IMAGE_URL",(function(){return _e}));var s={};a.r(s),a.d(s,"getTest",(function(){return we}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("nav-bar"),a("v-main",[a("router-view")],1)],1)},o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-container"},[a("div",{staticClass:"header"},[t._m(0),a("div",{staticClass:"right",attrs:{"justify-end":""}},t._l(t.btns,(function(e,n){var i=e[0],s=e[1];return a("v-menu",{key:i,attrs:{rounded:s,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.attrs,s=e.on;return[a("v-btn",t._g(t._b({staticClass:"white--text",attrs:{color:t.colors[n]}},"v-btn",i,!1),s),[t._v(" 메뉴 ")])]}}],null,!0)},[a("v-list",t._l(t.items,(function(e,n){return a("v-list-item",{key:e,attrs:{link:""}},[a("v-list-item-title",{domProps:{textContent:t._s(e)},on:{click:function(e){return t.changePage(n)}}})],1)})),1)],1)})),1)]),a("br")])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("h2",[t._v("Ottega-Gaeanta")])])}],d={name:"NavBar",data:function(){return{btns:[["Large","lg"]],colors:["teal darken-1"],items:["메인으로","의상 검색","입은 옷 색 조합 평가","미지정 메뉴"],pages:["/","/searchResult","/evaluationMain","/"]}},methods:{changePage:function(t){this.$router.push(this.pages[t])}}},v=d,m=(a("94d7"),a("2877")),h=a("6544"),g=a.n(h),f=a("8336"),p=a("8860"),b=a("da13"),y=a("5d23"),C=a("e449"),_=Object(m["a"])(v,l,u,!1,null,"e73092ce",null),w=_.exports;g()(_,{VBtn:f["a"],VList:p["a"],VListItem:b["a"],VListItemTitle:y["b"],VMenu:C["a"]});var S={name:"App",components:{NavBar:w},data:function(){return{}},methods:{},mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://docs.opencv.org/3.4/opencv.js"),t.async=!0,document.head.appendChild(t)}},x=S,j=(a("3dfd"),a("7496")),V=a("f6c4"),E=Object(m["a"])(x,c,o,!1,null,"e1cc60be",null),I=E.exports;g()(E,{VApp:j["a"],VMain:V["a"]});var k=a("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("landing-main"),a("landing-slider")],1)},D=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("img",{staticClass:"main-image",attrs:{src:t.mainImageUrl}}),t._m(0),t._m(1)])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-title text"},[t._v(" 어? 너"),a("br"),t._v(" 옷태가 괜찮다? ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-text text"},[t._v(" 패션 피플이 선택한 AI 의류 추천 서비스"),a("br"),t._v(" 120만 건이 의류 조합을 한 번에! ")])}],P={name:"LandingMain",data:function(){return{mainImageUrl:a("1baa")}}},T=P,B=(a("41ac"),Object(m["a"])(T,A,M,!1,null,"f7c1889e",null)),R=B.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider"},[a("Snowf",{attrs:{amount:20,size:5,speed:1.5,wind:10,opacity:1,swing:1,image:null,zIndex:1,resize:!0,color:"#ff69b4"}}),a("div",[a("v-container",{staticClass:"lighten-5"},[a("v-row",{staticClass:"mb-12",attrs:{"no-gutters":""}},[a("v-col",{staticClass:"menu",attrs:{lg:"3"},on:{click:function(e){return t.nextPage(1)}}},[t._v(" 스마트 검색 ")]),a("v-col",{staticClass:"menu",attrs:{lg:"3"},on:{click:function(e){return t.nextPage(2)}}},[t._v(" 코디 추천 ")]),a("v-col",{staticClass:"menu",attrs:{lg:"3"},on:{click:function(e){return t.nextPage(3)}}},[t._v(" 퍼스널 컬러 ")]),a("v-col",{staticClass:"menu",attrs:{lg:"3"},on:{click:function(e){return t.nextPage(4)}}},[t._v(" 코디 점수 ")])],1)],1),a("v-container",{staticClass:"lighten-5"},[a("v-row",{directives:[{name:"show",rawName:"v-show",value:1===t.page,expression:"page === 1"}],staticClass:"mb-6 menu-row",attrs:{justify:"center","no-gutters":""}},[a("v-col",{attrs:{lg:"4"}},[a("img",{attrs:{src:t.image[0]}})]),a("v-col",{attrs:{lg:"1"}}),a("v-col",{staticClass:"menu-detail",attrs:{lg:"4"}},[a("div",{staticClass:"menu-detail-title"},[t._v("똑똑하게 검색하기")]),a("div",{staticClass:"menu-detail-content"},[t._v(" 오늘 입고나갈 옷👚은 정하셨나요?"),a("br"),t._v(" 다른 사람들은 어떻게 옷을 입는지 구경하고"),a("br"),t._v(" 나만의 스타일을 만들어가세요. ")]),a("div",{staticClass:"menu-btn",style:{backgroundColor:t.btnColor[t.page-1]}},[t._v(" 스타일 똑똑하게 검색하세요! ")])])],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:2===t.page,expression:"page === 2"}],staticClass:"mb-6 menu-row",attrs:{justify:"center","no-gutters":""}},[a("v-col",{attrs:{lg:"4"}},[a("img",{attrs:{src:t.image[1]}})]),a("v-col",{attrs:{lg:"1"}}),a("v-col",{staticClass:"menu-detail",attrs:{lg:"4"}},[a("div",{staticClass:"menu-detail-title"},[t._v("빅데이터로 정확하게!")]),a("div",{staticClass:"menu-detail-content"},[t._v(" 120만건의 패션 스타일을 분석하여"),a("br"),t._v(" 어울리는 스타일과 색상을 알려드려요! ")]),a("div",{staticClass:"menu-btn",style:{backgroundColor:t.btnColor[t.page-1]}},[t._v(" 나만의 코디를 추천 받고싶다면? ")])])],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:3===t.page,expression:"page === 3"}],staticClass:"mb-6 menu-row",attrs:{justify:"center","no-gutters":""}},[a("v-col",{attrs:{lg:"4"}},[a("img",{attrs:{src:t.image[2]}})]),a("v-col",{attrs:{lg:"1"}}),a("v-col",{staticClass:"menu-detail",attrs:{lg:"4"}},[a("div",{staticClass:"menu-detail-title"},[t._v("내 피부에 날개를 달아줘")]),a("div",{staticClass:"menu-detail-content"},[t._v(" 나의 피부톤을 정확하게 알고 자신만의"),a("br"),t._v(" 개성있는 스타일을 만들어가세요! ")]),a("div",{staticClass:"menu-btn",style:{backgroundColor:t.btnColor[t.page-1]}},[t._v(" 나이 퍼스널 컬러 알아보기 ")])])],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:4===t.page,expression:"page === 4"}],staticClass:"mb-6 menu-row",attrs:{justify:"center","no-gutters":""}},[a("v-col",{attrs:{lg:"4"}},[a("img",{attrs:{src:t.image[3]}})]),a("v-col",{attrs:{lg:"1"}}),a("v-col",{staticClass:"menu-detail",attrs:{lg:"4"}},[a("div",{staticClass:"menu-detail-title"},[t._v("지금 바로 둘러보기")]),a("div",{staticClass:"menu-detail-content"},[t._v(" 지금 바로 옷태가 괜찮네 서비스에"),a("br"),t._v(" 접속하고 다양한 기능을 경험하세요. ")]),a("div",{staticClass:"menu-btn",style:{backgroundColor:t.btnColor[t.page-1]},on:{click:function(e){return t.changePage(4)}}},[t._v(" 서비스 시작하기 ")])])],1)],1),a("div",{staticClass:"progress-container"},[a("div",{staticClass:"progress",on:{click:function(e){return t.nextPage(1)}}}),a("div",{staticClass:"progress",on:{click:function(e){return t.nextPage(2)}}}),a("div",{staticClass:"progress",on:{click:function(e){return t.nextPage(3)}}}),a("div",{staticClass:"progress",on:{click:function(e){return t.nextPage(4)}}})])],1)],1)},$=[],F=a("5f5d"),G=a.n(F),N={name:"LandingSlider",components:{Snowf:G.a},data:function(){return{image:["https://img1.daumcdn.net/thumb/R1280x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/6x6e/image/mG_H5qGH5RElp6kLQGHG0sheyG8.png","https://static.coupangcdn.com/image/vendor_inventory/5fdd/3635f2d30ae5299adad49ac0d61cc2cf47a02d5c1f70d3e37db5f9ed1d54.jpg","https://post-phinf.pstatic.net/MjAyMTA0MDZfMjIw/MDAxNjE3Njk0NTYzMDIy.vh_iFhI2K6VWGCSX0ysqFr23aPnYqPTZkzpbUav7xRkg.AWMAI1T96OnWsGWPDDwHrkNCAgOlBho_S9cqzhArFg8g.JPEG/%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8_%EB%8F%84%EC%8B%9D%ED%99%94.jpg?type=w1200","https://post-phinf.pstatic.net/MjAyMTA0MDZfMjIw/MDAxNjE3Njk0NTYzMDIy.vh_iFhI2K6VWGCSX0ysqFr23aPnYqPTZkzpbUav7xRkg.AWMAI1T96OnWsGWPDDwHrkNCAgOlBho_S9cqzhArFg8g.JPEG/%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8_%EB%8F%84%EC%8B%9D%ED%99%94.jpg?type=w1200"],btnColor:["#BAD7DF","#FFE2E2","#99DDCC","hotpink"],pages:["/","/","/","/","/chooseStyle"],page:1}},methods:{nextPage:function(t){this.page=t,this.moveFocusing(t)},changePage:function(t){this.$router.push(this.pages[t])},clearFocusing:function(){for(var t=document.getElementsByClassName("menu"),e=document.getElementsByClassName("progress"),a=0;a<t.length;a++)t[a].style.color="hotpink",e[a].style.background="white",e[a].style.borderColor="#e4d2d2"},moveFocusing:function(t){this.clearFocusing();var e=document.querySelector(".menu:nth-child(".concat(t,")")),a=document.querySelector(".progress:nth-child(".concat(t,")"));e.style.color="red",a.style.background=this.btnColor[t-1],a.style.borderColor=this.btnColor[t-1]}}},U=N,H=(a("0b5e"),a("62ad")),q=a("a523"),W=a("0fd9"),z=Object(m["a"])(U,L,$,!1,null,"5601ce96",null),Y=z.exports;g()(z,{VCol:H["a"],VContainer:q["a"],VRow:W["a"]});var J={components:{LandingMain:R,LandingSlider:Y},data:function(){return{}}},Z=J,K=Object(m["a"])(Z,O,D,!1,null,"0c26ae9b",null),X=K.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[t._v(" 선호스타일 선택 페이지 ")])},tt=[],et={},at=et,nt=(a("bb22"),Object(m["a"])(at,Q,tt,!1,null,"0957cc41",null)),it=nt.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex col"},[a("p",{staticClass:"col-2"}),a("div",{staticClass:"col-8 mx-4"},[a("SearchItems")],1)]),a("v-container",[a("v-row",{directives:[{name:"masonry",rawName:"v-masonry"}]},t._l(20,(function(e){return a("v-col",{key:e,attrs:{cols:"3"}},[a("v-hover",{attrs:{"v-slot":{hover:t.hover}}},[a("v-card",{attrs:{color:"grey"},on:{click:function(a){return t.showStyleInfo({showSearchDetail:t.showSearchDetail,imgURL:t.images[t.number[e-1]]})}}},[a("v-img",{attrs:{src:t.images[t.number[e-1]]}})],1)],1)],1)})),1)],1),a("SearchDetail",{attrs:{showSearchDetail:t.showSearchDetail}})],1)},rt=[],ct=a("2909"),ot=a("5530"),lt=(a("a434"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{persistent:"",width:"70%",height:"50%"},model:{value:t.showSearchDetail,callback:function(e){t.showSearchDetail=e},expression:"showSearchDetail"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v(" 코디 정보 ")]),a("div",{staticClass:"d-flex"},[a("v-img",{staticStyle:{width:"25%",height:"70%"},attrs:{src:t.searchDetailImageURL,alt:"image"}}),a("v-card-text",[a("h1",[t._v("스타일 : 아방가르드")]),a("br"),a("p",[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta consequatur inventore quasi consequuntur in ipsam cum, non quam optio libero iure vel, dolore totam amet vero incidunt iusto suscipit voluptatibus.")])])],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.showStyleInfo({showSearchDetail:t.showSearchDetail})}}},[t._v(" 닫기 ")])],1)],1)],1)],1)}),ut=[],dt=a("2f62"),vt={name:"SearchDetail",components:{},data:function(){return{dialog:!1,pages:["@/assets/1.jpg","@/assets/2.jpg","@/assets/3.jpg"]}},computed:Object(ot["a"])({},Object(dt["c"])(["showSearchDetail","searchDetailImageURL"])),methods:Object(ot["a"])({},Object(dt["b"])(["showStyleInfo"]))},mt=vt,ht=(a("57f6"),a("b0af")),gt=a("99d9"),ft=a("169a"),pt=a("ce7e"),bt=a("adda"),yt=a("2fa4"),Ct=Object(m["a"])(mt,lt,ut,!1,null,null,null),_t=Ct.exports;g()(Ct,{VBtn:f["a"],VCard:ht["a"],VCardActions:gt["a"],VCardText:gt["c"],VCardTitle:gt["d"],VDialog:ft["a"],VDivider:pt["a"],VImg:bt["a"],VSpacer:yt["a"]});var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("v-menu",{attrs:{"offset-y":"","close-on-click":!1,"close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"mt-5",staticStyle:{width:"100%"}},n),[a("v-icon",{staticClass:"mx-4"},[t._v("mdi-magnify")]),t._v("Search your style..")],1)]}}]),model:{value:t.menuOpen,callback:function(e){t.menuOpen=e},expression:"menuOpen"}},[a("v-card",[a("h3",{staticClass:"my-2 mx-2"},[t._v("Category")]),a("v-autocomplete",{staticClass:"mx-3",attrs:{items:t.categoryItems,dense:"",filled:"",label:t.categoryValue},model:{value:t.categoryValue,callback:function(e){t.categoryValue=e},expression:"categoryValue"}}),t.categoryValue?a("v-main",[a("h3",{staticClass:"my-2 mx-2"},[t._v("Style")]),a("v-divider"),[a("v-sheet",{staticClass:"mx-5",attrs:{"max-width":"100%"}},[a("v-slide-group",{staticClass:"px-4",attrs:{"show-arrows":""},model:{value:t.styleValue,callback:function(e){t.styleValue=e},expression:"styleValue"}},t._l(8,(function(e){return a("v-slide-item",{key:e,scopedSlots:t._u([{key:"default",fn:function(n){var i=n.active,s=n.toggle;return[a("v-card",{staticClass:"ma-4",attrs:{color:i?"primary":"white",height:"10rem",width:"7rem"},on:{click:s}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"70%"}}),a("v-card-subtitle",{attrs:{align:"center",justify:"middle"}},[a("h3",[t._v(t._s(t.styleItems[e-1]))])]),a("v-scale-transition",[i?a("v-icon",{attrs:{color:"white",size:"30"}}):t._e()],1)],1)]}}],null,!0)})})),1),a("v-divider"),a("br"),a("v-expand-transition",[null!=t.styleValue?a("v-sheet",{attrs:{height:"50",tile:""}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("h3",{staticClass:"text-h6"},[t._v(" Selected "+t._s(t.styleItems[t.styleValue])+" ")])])],1):t._e()],1)],1)]],2):t._e(),null!=t.styleValue?a("v-main",[a("h3",{staticClass:"my-2 mx-2"},[t._v("Design")]),a("v-divider"),[a("v-sheet",{staticClass:"mx-5",attrs:{"max-width":"100%"}},[a("v-slide-group",{staticClass:"px-4",attrs:{"show-arrows":""},model:{value:t.designValue,callback:function(e){t.designValue=e},expression:"designValue"}},t._l(8,(function(e){return a("v-slide-item",{key:e,scopedSlots:t._u([{key:"default",fn:function(n){var i=n.active,s=n.toggle;return[a("v-card",{staticClass:"ma-4",attrs:{color:i?"primary":t.designItems[e-1],height:"7rem",width:"5rem"},on:{click:s}},[a("v-card-subtitle",{attrs:{align:"center",justify:"middle"}},[a("h3",[t._v(t._s(t.designItems[e-1]))])]),a("v-scale-transition",[i?a("v-icon",{attrs:{color:"white",size:"30"}}):t._e()],1)],1)]}}],null,!0)})})),1),a("v-divider"),a("br"),a("v-expand-transition",[null!=t.designValue?a("v-sheet",{attrs:{height:"50",tile:""}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("h3",{staticClass:"text-h6"},[t._v(" Selected "+t._s(t.designItems[t.designValue])+" ")])])],1):t._e()],1)],1)],a("v-divider")],2):t._e(),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"grey darken-2",dark:""},on:{click:function(e){return t.initialization()}}},[t._v("닫기")]),null!=t.designValue?a("v-btn",{attrs:{color:"primary"},on:{click:t.save}},[t._v("검색")]):a("v-btn",{attrs:{disabled:"",color:"primary"},on:{click:t.save}},[t._v("검색")])],1)],1)],1)],1)},St=[],xt={name:"SearchItems",computed:Object(ot["a"])({},Object(dt["c"])(["showSearchDetail","searchItemsBool"])),methods:Object(ot["a"])(Object(ot["a"])({},Object(dt["b"])(["showStyleInfo","showSearchItems"])),{},{save:function(){alert("검색 ㄱㄱ싱!"),this.menuOpen=!1,this.menuOpen=!1,this.categoryValue=null,this.styleValue=null,this.designValue=null,this.model=null},initialization:function(){this.menuOpen=!1,this.categoryValue=null,this.styleValue=null,this.designValue=null,this.model=null}}),data:function(){return{menuOpen:!1,firstname:"",lastname:"",categoryItems:["상의","하의","아우터","원피스"],categoryValue:null,model:null,styleItems:["탑","블라우스","티셔츠","니트웨어","셔츠","브라탑","후드티"],styleValue:null,designItems:["black","white","grey","red","beige","purple","mint","yellow"],designValue:null}}},jt=xt,Vt=a("c6a6"),Et=a("0789"),It=a("132d"),kt=a("8dd9"),Ot=a("7efd"),Dt=a("9dbe"),At=Object(m["a"])(jt,wt,St,!1,null,null,null),Mt=At.exports;g()(At,{VAutocomplete:Vt["a"],VBtn:f["a"],VCard:ht["a"],VCardActions:gt["a"],VCardSubtitle:gt["b"],VDivider:pt["a"],VExpandTransition:Et["a"],VIcon:It["a"],VImg:bt["a"],VMain:V["a"],VMenu:C["a"],VRow:W["a"],VScaleTransition:Et["d"],VSheet:kt["a"],VSlideGroup:Ot["a"],VSlideItem:Dt["a"],VSpacer:yt["a"]});var Pt={components:{SearchDetail:_t,SearchItems:Mt},data:function(){return{number:[0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2],images:[a("8554"),a("405a"),a("11d9")],hover:!0,chips:["Programming","Playing video games","Watching movies","Sleeping"],items:["Streaming","Eating"]}},computed:Object(ot["a"])({},Object(dt["c"])(["showSearchDetail"])),mounted:function(){this.repaint()},watch:{images:function(){this.repaint()}},methods:Object(ot["a"])(Object(ot["a"])({},Object(dt["b"])(["showStyleInfo"])),{},{remove:function(t){this.chips.splice(this.chips.indexOf(t),1),this.chips=Object(ct["a"])(this.chips)},repaint:function(){var t=this;setTimeout((function(){return t.$redrawVueMasonry()}),500)}})},Tt=Pt,Bt=a("ce87"),Rt=Object(m["a"])(Tt,st,rt,!1,null,null,null),Lt=Rt.exports;g()(Rt,{VCard:ht["a"],VCol:H["a"],VContainer:q["a"],VHover:Bt["a"],VImg:bt["a"],VRow:W["a"]});var $t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"eval-container"},[a("v-container",[a("v-row",{staticClass:"mb-12 intro",attrs:{justify:"center","no-gutters":""}},[t._v(" 상의, 하의, 원피스 이미지를 업로드하시면 가상으로 스타일링해드립니다. ")])],1),a("div",{staticClass:"card"},[a("v-row",{staticClass:"menu-container",attrs:{justify:"center"}},[a("v-col",{attrs:{lg:"4"}},[a("img",{staticClass:"left-image",staticStyle:{width:"400px",height:"400px",visibility:"hidden"}})]),a("v-col",{attrs:{lg:"4"}},[a("v-row",{staticClass:"menu-container",attrs:{justify:"center"},on:{click:function(e){return t.changePage(0)}}},[a("div",{staticClass:"menu"},[t._v(" 실시간 측정 방식 "),a("v-icon",{attrs:{large:"",color:"white darken-5"}},[t._v("mdi-selection")])],1)]),a("br"),a("v-row",{staticClass:"menu-container",attrs:{justify:"center"}},[a("div",{staticClass:"menu"},[t._v(" 사진 업로드 방식 "),a("v-icon",{attrs:{large:"",color:"white darken-5"}},[t._v(" mdi-folder-star")])],1)]),a("br"),a("v-row",{staticClass:"menu-container",attrs:{justify:"center"}},[a("div",{staticClass:"menu"},[t._v(" 색 조합표 보기 "),a("v-icon",{attrs:{large:"",color:"white darken-5"}},[t._v(" mdi-arrow-up-bold-box-outline")])],1)])],1),a("v-col",{attrs:{lg:"4"}},[a("img",{staticClass:"right-image",staticStyle:{width:"400px",height:"400px",visibility:"hidden"}})])],1)],1)],1)},Ft=[],Gt={data:function(){return{pages:["evaluationFilm"],mainImageUrl:""}},mounted:function(){var t=document.querySelectorAll(".menu"),e=document.querySelector(".left-image"),n=document.querySelector(".right-image");t[0].addEventListener("mouseover",(function(){i(),e.src=a("1baa"),e.style.visibility="visible"})),t[1].addEventListener("mouseover",(function(){i(),n.src=a("1baa"),n.style.visibility="visible"})),t[2].addEventListener("mouseover",(function(){i(),e.src=a("1baa"),e.style.visibility="visible"}));var i=function(){e.style.visibility="hidden",n.style.visibility="hidden"}},methods:{changePage:function(t){this.$router.push(this.pages[t])}}},Nt=Gt,Ut=(a("0836"),Object(m["a"])(Nt,$t,Ft,!1,null,"4c725020",null)),Ht=Ut.exports;g()(Ut,{VCol:H["a"],VContainer:q["a"],VIcon:It["a"],VRow:W["a"]});var qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"film-container",attrs:{align:"center"}},[t._m(0),a("v-row",{staticClass:"menu-container",attrs:{justify:"center"}},[a("v-col",{attrs:{lg:"3"}}),a("v-col",{attrs:{lg:"3",align:"right"}},[a("div",{staticClass:"card",attrs:{align:"center"}},[a("p",[t._v("아래 예시와 같이 화면에 상의 및 하의가")]),a("img",{attrs:{src:t.mainImageUrl}})])]),a("v-col",{attrs:{lg:"3",align:"left"}},[a("div",{staticClass:"card",attrs:{align:"center"}},[a("evaluation-camera")],1)]),a("v-col",{attrs:{lg:"3"}})],1),a("v-row",{attrs:{justify:"center"}},[a("div",{staticClass:"capture-btn",on:{click:function(e){return t.capture()}}},[a("h2",[t._v("5초 뒤 촬용😊")])]),a("div",{staticClass:"capture-btn",staticStyle:{color:"white"},on:{click:function(e){return t.post()}}},[a("h2",[t._v("의상 분석😊")])])])],1)},Wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h2",[t._v("보이는 예시화면과 같이 정면을 향하여"),a("br"),t._v("상의 및 하의가 잘 보일 수 있도록 해주세용~♥")])])}],zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("button",{attrs:{id:"toggleStream"},on:{click:function(e){return t.toggleStream()}}},[t._v("Play")]),a("br"),a("button",{staticStyle:{visibility:"hidden"},attrs:{id:"cvtGray"},on:{click:function(e){return t.cvtGray()}}},[t._v("Capture Image")]),a("video",{attrs:{id:"video"}}),a("canvas",{staticStyle:{display:"none"},attrs:{id:"output"}})])},Yt=[],Jt=(a("159b"),a("ac1f"),a("1276"),a("d3b7"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),{name:"EvaluationCamera",data:function(){return{streaming:!1,constraints:{video:{facingMode:"user"},audio:!1},video:"",videoWidth:"",videoHeight:"",canvas:"",src:"",cap:"",file:""}},methods:{toggleStream:function(){var t=this;if(!1===this.streaming)navigator.getUserMedia(this.constraints,(function(e){t.video.width=t.videoWidth,t.video.height=t.videoHeight,video.srcObject=e,video.play(),setTimeout(t.cvtGray,3e3)}),(function(t){console.log(t)})),document.getElementById("toggleStream").innerHTML="Stop",document.getElementById("cvtGray").style.visibility="visible";else{var e=video.srcObject,a=e.getTracks();a.forEach((function(t){t.stop()})),document.getElementById("toggleStream").innerHTML="Play",document.getElementById("cvtGray").style.visibility="hidden"}this.streaming=!this.streaming},cvtGray:function(){this.src=new cv.Mat(this.videoHeight,this.videoWidth,cv.CV_8UC4),this.cap=new cv.VideoCapture("video"),setTimeout(this.process,30)},process:function(){if(!0===this.streaming){this.cap.read(this.src),this.video.style.display="none",document.querySelector("#output").style.display="block",cv.imshow("output",this.src);for(var t=this.canvas.toDataURL("image/png"),e=atob(t.split(",")[1]),a=[],n=0;n<e.length;n++)a.push(e.charCodeAt(n));var i=new Blob([new Uint8Array(a)],{type:"image/png"}),s=new FormData;s.append("file",i),console.log(i),this.file=i}},post:function(){alert(this.file),console.log(this.file)}},mounted:function(){var t=document.querySelector(".main");this.videoWidth=t.offsetWidth,this.videoHeight=t.offsetHeight,this.video=document.getElementById("video"),this.canvas=document.getElementById("output"),this.canvas.width=this.videoWidth,this.canvas.height=this.videoHeight,console.log("마운트 됨요")}}),Zt=Jt,Kt=(a("ccc5"),Object(m["a"])(Zt,zt,Yt,!1,null,"43be9542",null)),Xt=Kt.exports,Qt={data:function(){return{mainImageUrl:a("4373")}},components:{EvaluationCamera:Xt},methods:{capture:function(){this.$children[0].$vnode.componentInstance.toggleStream()},post:function(){this.$children[0].$vnode.componentInstance.post()}},mounted:function(){}},te=Qt,ee=(a("3638"),Object(m["a"])(te,qt,Wt,!1,null,"24e7c3a0",null)),ae=ee.exports;g()(ee,{VCol:H["a"],VRow:W["a"]});var ne=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"result-container"},[t._v(" 평가 결과 보여주는 페이지 ")])},ie=[],se={},re=se,ce=(a("c7c1"),Object(m["a"])(re,ne,ie,!1,null,"2e8b9358",null)),oe=ce.exports;r["a"].use(k["a"]);var le=[{path:"/",name:"LandingMain",component:X},{path:"/landing",name:"Landing",component:X},{path:"/chooseStyle",name:"ChooseStyle",component:it},{path:"/searchResult",name:"SearchResult",component:Lt},{path:"/searchItems",name:"SearchItems",component:Mt},{path:"/searchDetail",name:"SearchDetail",component:_t},{path:"/evaluationMain",name:"EvaluationMain",component:Ht},{path:"/evaluationFilm",name:"EvaluationFilm",component:ae},{path:"/evaluationResult",name:"EvaluationResult",component:oe}],ue=new k["a"]({mode:"history",base:"/",routes:le}),de=ue,ve=!1,me=!1,he=["@/assets/1.jpg","@/assets/2.jpg","@/assets/3.jpg"],ge="@/assets/3.jpg",fe=function(){return{showSearchDetail:ve,searchItemsBool:me,images:he,searchDetailImageURL:ge}};function pe(t,e){var a=t.commit,n=!e.showSearchDetail,i=e.imgURL;a("SEARCH_STYLE_UNIT_INFO",n),a("SEARCH_DETAIL_IMAGE_URL",i)}function be(t,e){var a=t.commit,n=!e.searchItemsBool;a("SEARCH_ITEMS_CATEGORY",n)}function ye(t,e){t.showSearchDetail=e}function Ce(t,e){t.searchItemsBool=e}function _e(t,e){t.searchDetailImageURL=e}function we(t){return t.test}r["a"].use(dt["a"]);var Se=new dt["a"].Store({namespaced:!0,state:fe,mutations:i,getters:s,actions:n,modules:{}}),xe=a("f309");r["a"].use(xe["a"]);var je=new xe["a"]({}),Ve=(a("bf40"),a("3f9b"));r["a"].config.productionTip=!1,r["a"].use(Ve["a"]),new r["a"]({router:de,store:Se,vuetify:je,render:function(t){return t(I)}}).$mount("#app")},"57f6":function(t,e,a){"use strict";a("77a8")},"6fa6":function(t,e,a){},"77a8":function(t,e,a){},8554:function(t,e,a){t.exports=a.p+"img/1.5ba85025.jpg"},"94d7":function(t,e,a){"use strict";a("d6d6")},"98b2":function(t,e,a){},ad31:function(t,e,a){},b6a2:function(t,e,a){},bb22:function(t,e,a){"use strict";a("21bd")},c1ae:function(t,e,a){},c7c1:function(t,e,a){"use strict";a("e021")},ccc5:function(t,e,a){"use strict";a("b6a2")},d6d6:function(t,e,a){},e021:function(t,e,a){}});
//# sourceMappingURL=app.0a5584c9.js.map