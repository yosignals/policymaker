(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{122:function(t,n,e){"use strict";e.r(n)},179:function(t,n,e){"use strict";var o=e(0),r=e(276);o.a.use(r.a,{iconPath:"/flags/"})},238:function(t,n,e){var content=e(419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("a32640ee",content,!0,{sourceMap:!1})},239:function(t,n,e){var content=e(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("06f280f7",content,!0,{sourceMap:!1})},240:function(t,n,e){var content=e(423);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("09ff003d",content,!0,{sourceMap:!1})},273:function(t,n,e){"use strict";var o=e(3);e(36),e(10);n.a=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(n,e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve({welcome:"Welcome",language:{en:"English",nl:"Dutch"},country:{"*":"Global (All regions)",AU:"Australia",CA:"Canada",GB:"Great Britain (UK)",US:"Unites States",NZ:"New Zealand",BE:"Belgium",NL:"Netherlands"},policymaker:{nav:{introduction:"Introduction",organization_details:"Organization details",policy_settings:"Policy settings",download:"Download"},organization_details:{page_title:"Organization details",organization_name_label:"What is the name of your organization?",organization_name_desc:"The organization that this policy will apply to",organization_name_placeholder:"Organization name",organization_name_required:"required"}}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()},279:function(t,n,e){"use strict";var o=e(0),r=e(280),l=e(61),c=o.a.extend({components:{ProgressSteps:r.default},data:function(){return{}},head:function(){return{title:"Policymaker: Open-source vulnerability disclosure program policy, security.txt, and DNS Security TXT generator - Part of the @disclose_io Project.",meta:[{hid:"description",name:"description",content:"Disclose.io policymaker"}]}},mounted:function(){var t=this;this.$nextTick((function(){l.store.dispatch("policymaker/syncStepFromRoute",t.$route.fullPath)}))},computed:{navSteps:function(){return l.store.getters["policymaker/getNavSteps"]},configuration:function(){return l.store.getters["policymaker/getConfiguration"]}}}),d=(e(422),e(34)),component=Object(d.a)(c,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"app"}},[o("header",[o("NuxtLink",{staticClass:"logo",attrs:{to:"/policymaker"}},[o("img",{attrs:{src:e(337)}})]),t._v(" "),o("nav",[o("progress-steps",{attrs:{orientation:"vertical",steps:t.navSteps}})],1)],1),t._v(" "),o("main",[o("div",{attrs:{id:"content"}},[o("Nuxt"),t._v(" "),t._m(0)],1)])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",[t._v("\n                © Copyright "),e("a",{attrs:{href:"https://disclose.io"}},[t._v("Disclose.io")]),t._v(" - Made with ♥️ by Jeremy Manoto and Casey Ellis.\n            ")])}],!1,null,null,null);n.a=component.exports},280:function(t,n,e){"use strict";e.r(n);e(181),e(116);var o=e(0),r=e(61),l=e(281),c=o.a.extend({components:{ProgressStep:l.default},name:"ProgressSteps",props:{orientation:{type:String,default:"vertical"},anchorSize:{type:Number,default:40},steps:{type:Array}},computed:{activeStep:function(){return r.store.getters["policymaker/getCurrentStep"]},isVertical:function(){return"vertical"===this.orientation.toLowerCase().trim()},stemStyle:function(){return{marginLeft:"".concat(this.anchorSize/2-1,"px")}},numSteps:function(){return this.steps.length},progressStyle:function(){var t=this;return{height:"".concat((t.activeStep-1)/(t.numSteps-1)*100,"%"),marginLeft:"".concat(t.anchorSize/2-1,"px")}}},methods:{setActiveStep:function(t){this.step!==this.activeStep&&r.store.commit("policymaker/setStep",t)},isStepDisabled:function(t){return t>=this.activeStep},isStepCompleted:function(t){return t<this.activeStep}}}),d=(e(420),e(34)),component=Object(d.a)(c,(function(){var t,n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticClass:"dio__steps",class:(t={},t["dio__steps--"+n.orientation]=!0,t)},[o("div",{staticClass:"dio__stem",style:n.stemStyle}),n._v(" "),o("div",{staticClass:"dio__stem--progress",style:n.progressStyle}),n._v(" "),o("div",{ref:"steps"},n._l(n.steps,(function(t,e){return o("progress-step",{key:e,attrs:{index:e+1,active:!1,completed:n.isStepCompleted(e),size:40,disabled:n.isStepDisabled(e+1),route:t.route},on:{changeStep:n.setActiveStep}},[n._v(n._s(t.name))])})),1)])}),[],!1,null,null,null);n.default=component.exports},281:function(t,n,e){"use strict";e.r(n);e(181),e(415);var o=e(0).a.extend({name:"ProgressStep",props:{index:{type:Number},route:{type:String},active:{type:Boolean},completed:{type:Boolean},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}},data:function(){return{anchor:{localSize:40}}},mounted:function(){this.anchor.localSize=this.size},computed:{anchorStyle:function(){var t=this;return{width:"".concat(t.anchor.localSize,"px"),height:"".concat(t.anchor.localSize,"px"),lineHeight:"".concat(t.anchor.localSize-4,"px")}}},methods:{changeStep:function(){var t=this;t.disabled||t.$emit("changeStep",t.index)}}}),r=(e(418),e(34)),component=Object(r.a)(o,(function(){var t,n,e=this,o=e.$createElement,r=e._self._c||o;return r("div",{staticClass:"dio__step"},[r("NuxtLink",{staticClass:"dio__step-link",class:(t={},t["dio__step-link--completed"]=e.completed,t),attrs:{to:e.route,event:e.disabled?"":"click"},nativeOn:{click:function(t){return e.changeStep.apply(null,arguments)}}},[r("div",{staticClass:"dio__step-anchor",class:(n={},n["dio__step-anchor--active"]=e.active,n["dio__step-anchor--completed"]=e.completed,n),style:e.anchorStyle},[e._v("\n            "+e._s(e.index)+"\n        ")]),e._v(" "),e._t("default")],2)],1)}),[],!1,null,null,null);n.default=component.exports},297:function(t,n,e){e(298),t.exports=e(299)},331:function(t,n,e){var content=e(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("7b37b828",content,!0,{sourceMap:!1})},332:function(t,n,e){var o=e(54)((function(i){return i[1]}));o.push([t.i,'@font-face{\n  font-family:"Noto Sans";\n\n  font-style:normal;\n\n  font-weight:400;\n\n  src:url(/fonts/noto-sans-v12-latin-ext_latin-regular.eot);\n\n  src:local(""),url(/fonts/noto-sans-v12-latin-ext_latin-regular.eot?#iefix) format("embedded-opentype"),url(/fonts/noto-sans-v12-latin-ext_latin-regular.woff2) format("woff2"),url(/fonts/noto-sans-v12-latin-ext_latin-regular.woff) format("woff"),url(/fonts/noto-sans-v12-latin-ext_latin-regular.ttf) format("truetype"),url(/fonts/noto-sans-v12-latin-ext_latin-regular.svg#NotoSans) format("svg")\n}\n\n@font-face{\n  font-family:"Noto Sans";\n\n  font-style:italic;\n\n  font-weight:400;\n\n  src:url(/fonts/noto-sans-v12-latin-ext_latin-italic.eot);\n\n  src:local(""),url(/fonts/noto-sans-v12-latin-ext_latin-italic.eot?#iefix) format("embedded-opentype"),url(/fonts/noto-sans-v12-latin-ext_latin-italic.woff2) format("woff2"),url(/fonts/noto-sans-v12-latin-ext_latin-italic.woff) format("woff"),url(/fonts/noto-sans-v12-latin-ext_latin-italic.ttf) format("truetype"),url(/fonts/noto-sans-v12-latin-ext_latin-italic.svg#NotoSans) format("svg")\n}\n\n@font-face{\n  font-family:"Noto Sans";\n\n  font-style:normal;\n\n  font-weight:700;\n\n  src:url(/fonts/noto-sans-v12-latin-ext_latin-700.eot);\n\n  src:local(""),url(/fonts/noto-sans-v12-latin-ext_latin-700.eot?#iefix) format("embedded-opentype"),url(/fonts/noto-sans-v12-latin-ext_latin-700.woff2) format("woff2"),url(/fonts/noto-sans-v12-latin-ext_latin-700.woff) format("woff"),url(/fonts/noto-sans-v12-latin-ext_latin-700.ttf) format("truetype"),url(/fonts/noto-sans-v12-latin-ext_latin-700.svg#NotoSans) format("svg")\n}\n\n@font-face{\n  font-family:"Noto Sans";\n\n  font-style:italic;\n\n  font-weight:700;\n\n  src:url(/fonts/noto-sans-v12-latin-ext_latin-700italic.eot);\n\n  src:local(""),url(/fonts/noto-sans-v12-latin-ext_latin-700italic.eot?#iefix) format("embedded-opentype"),url(/fonts/noto-sans-v12-latin-ext_latin-700italic.woff2) format("woff2"),url(/fonts/noto-sans-v12-latin-ext_latin-700italic.woff) format("woff"),url(/fonts/noto-sans-v12-latin-ext_latin-700italic.ttf) format("truetype"),url(/fonts/noto-sans-v12-latin-ext_latin-700italic.svg#NotoSans) format("svg")\n}\n\n@font-face{\n  font-family:"Noto Sans Display";\n\n  src:url(/fonts/NotoSansDisplay-Bold.eot);\n\n  src:url(/fonts/NotoSansDisplay-Bold.eot?#iefix) format("embedded-opentype"),url(/fonts/NotoSansDisplay-Bold.woff2) format("woff2"),url(/fonts/NotoSansDisplay-Bold.woff) format("woff"),url(/fonts/NotoSansDisplay-Bold.svg#NotoSansDisplay-Bold) format("svg");\n\n  font-weight:700;\n\n  font-style:normal;\n\n  font-display:swap\n}',""]),o.locals={},t.exports=o},333:function(t,n,e){var content=e(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("55e208d2",content,!0,{sourceMap:!1})},334:function(t,n,e){var o=e(54)((function(i){return i[1]}));o.push([t.i,":root{\n  --dark-purple:#322a41;\n  --purple:#673ab6;\n  --white:#fff;\n  --shade-050:#f7f7f8;\n  --shade-100:#eeeef1;\n  --shade-200:#e2e2e4;\n  --shade-300:#d6d6dc;\n  --shade-400:#c6c6cd;\n  --shade-500:#b9b9c0;\n  --shade-600:#9f9fa8;\n  --shade-700:#898990;\n  --shade-800:#73737d;\n  --shade-900:#65666c\n}",""]),o.locals={},t.exports=o},337:function(t,n,e){t.exports=e.p+"img/logo-disclose-type.ca737e5.svg"},418:function(t,n,e){"use strict";e(238)},419:function(t,n,e){var o=e(54)((function(i){return i[1]}));o.push([t.i,'.dio__step{\n  position:relative;\n  z-index:20;\n  margin-top:2rem;\n  margin-bottom:2rem;\n  display:flex;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  font-family:"Noto Sans Display";\n  color:var(--shade-500)\n}\n.dio__step-anchor{\n  margin-right:1rem;\n  border-radius:9999px;\n  border-width:2px;\n  border-style:solid;\n  text-align:center;\n  transition-property:all;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n  transition-delay:100ms;\n  transition-duration:200ms;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)\n}\n.dio__step-link{\n  display:flex;\n  cursor:default;\n  flex-direction:row;\n  align-items:center\n}\n.dio__step-link.nuxt-link-active{\n  font-weight:700;\n  color:var(--dark-purple);\n}\n.dio__step-link.nuxt-link-active .dio__step-anchor{\n    color:var(--white);\n    background:var(--purple);\n    border-color:var(--purple)\n}\n.dio__step-link--completed{\n    color:var(--dark-purple);\n    cursor:pointer;\n}\n.dio__step-link--completed .dio__step-anchor{\n      background:var(--white);\n      border-color:var(--purple);\n      color:var(--purple)\n}',""]),o.locals={},t.exports=o},420:function(t,n,e){"use strict";e(239)},421:function(t,n,e){var o=e(54)((function(i){return i[1]}));o.push([t.i,".dio__steps{\n  display:block\n}\n.dio__steps--vertical{\n  position:relative;\n}\n.dio__steps--vertical .dio__stem{\n    position:absolute;\n    display:block;\n    top:0px;\n    bottom:0px;\n    z-index:0;\n    width:0.5rem;\n    border-left-width:2px;\n    border-style:solid;\n    border-color:var(--shade-200);\n}\n.dio__steps--vertical .dio__stem--progress{\n      position:absolute;\n      display:block;\n      z-index:10;\n      width:0.5rem;\n      border-left-width:2px;\n      transition-property:all;\n      transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n      transition-duration:150ms;\n      transition-duration:300ms;\n      transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n      border-color:var(--purple)\n}",""]),o.locals={},t.exports=o},422:function(t,n,e){"use strict";e(240)},423:function(t,n,e){var o=e(54)((function(i){return i[1]}));o.push([t.i,':root{\n  color:var(--dark-purple);\n  background:linear-gradient(90deg,var(--white) 50%,var(--shade-050) 0);\n  font-family:"Noto Sans"\n}\n#app{\n  width:100%\n}\n@media (min-width: 640px){\n#app{\n    max-width:640px\n}\n}\n@media (min-width: 768px){\n#app{\n    max-width:768px\n}\n}\n@media (min-width: 1024px){\n#app{\n    max-width:1024px\n}\n}\n@media (min-width: 1280px){\n#app{\n    max-width:1280px\n}\n}\n@media (min-width: 1536px){\n#app{\n    max-width:1536px\n}\n}\n#app{\n  margin-left:auto;\n  margin-right:auto;\n  height:100vh;\n  max-width:80rem;\n  display:flex;\n  flex-direction:column;\n  flex-wrap:nowrap;\n  align-content:center;\n  align-items:stretch;\n  justify-content:flex-start\n}\n@media (min-width: 1024px){\n#app{\n    display:flex;\n    flex:1 1 0%;\n    flex-direction:row;\n    align-items:stretch;\n    justify-content:space-between\n}\n}\nheader{\n  background:var(--white);\n  position:fixed;\n  display:flex;\n  height:4rem;\n  min-width:-webkit-max-content;\n  min-width:-moz-max-content;\n  min-width:max-content;\n  flex-direction:row;\n  align-items:center;\n  overflow:hidden;\n  padding-left:1rem;\n  padding-right:1rem;\n  z-index:10;\n  width:100%\n}\n@media (min-width: 1024px){\nheader{\n    height:100%;\n    width:20rem;\n    flex-direction:column;\n    align-items:flex-start;\n    padding-top:2rem;\n    padding-bottom:2rem\n}\n}\nheader .logo img{\n    height:2.5rem\n}\n@media (min-width: 1024px){\nheader .logo img{\n      height:4rem\n}\n}\nheader .logo img{\n    transition-property:all;\n    transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration:150ms;\n    transition-duration:300ms\n}\nheader nav{\n    margin-top:3rem;\n    margin-bottom:3rem;\n    display:none\n}\n@media (min-width: 1024px){\nheader nav{\n      display:block\n}\n}\nmain{\n  flex:1 1 0%;\n  padding-top:4rem\n}\n@media (min-width: 1024px){\nmain{\n    flex-grow:1;\n    padding-top:0px;\n    padding-left:20rem\n}\n}\nmain{\n  background:var(--shade-050);\n}\nmain #content{\n    background:var(--shade-050);\n    display:flex;\n    flex-direction:column;\n    justify-content:space-between;\n    padding-left:2rem;\n    padding-right:2rem;\n    padding-top:2rem;\n    padding-bottom:2rem\n}\n@media (min-width: 1024px){\nmain #content{\n      min-height:100vh\n}\n}\nmain .dio__action-bar{\n    margin-top:2rem;\n    margin-bottom:2rem;\n    display:flex;\n    flex-direction:row-reverse;\n    align-items:center;\n    justify-content:flex-end;\n    gap:1rem\n}\nmain footer{\n    margin-top:1.5rem;\n    font-size:0.875rem;\n    line-height:1.25rem\n}\nh1,h2,h3,h4,h5,h6{\n  font-family:"Noto Sans Display"\n}\nh3{\n  font-size:1.5rem;\n  line-height:2rem\n}\n.nuxt-content{\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n@media (min-width: 1024px){\n.nuxt-content{\n    font-size:1rem;\n    line-height:1.5rem\n}\n}\n.nuxt-content h1{\n    font-size:1.125rem;\n    line-height:1.75rem;\n    font-weight:700\n}\n@media (min-width: 1024px){\n.nuxt-content h1{\n      font-size:1.5rem;\n      line-height:2rem\n}\n}\n.nuxt-content h1:not(:first-child){\n    padding-top:1.5rem\n}\n.nuxt-content h2{\n    padding-top:1.25rem;\n    font-size:1rem;\n    line-height:1.5rem;\n    font-weight:700\n}\n@media (min-width: 1024px){\n.nuxt-content h2{\n      font-size:1.25rem;\n      line-height:1.75rem\n}\n}\n.nuxt-content h3{\n    padding-top:1rem;\n    font-size:0.875rem;\n    line-height:1.25rem;\n    font-weight:700\n}\n@media (min-width: 1024px){\n.nuxt-content h3{\n      font-size:1.125rem;\n      line-height:1.75rem\n}\n}\n.nuxt-content a{\n    border-bottom-width:2px;\n    --tw-border-opacity:1;\n    border-color:rgba(124, 58, 237, var(--tw-border-opacity))\n}\n.nuxt-content a:hover{\n    --tw-border-opacity:1;\n    border-color:rgba(124, 58, 237, var(--tw-border-opacity))\n}\n.nuxt-content a{\n    --tw-text-opacity:1;\n    color:rgba(91, 33, 182, var(--tw-text-opacity))\n}\n.nuxt-content a:hover{\n    --tw-text-opacity:1;\n    color:rgba(124, 58, 237, var(--tw-text-opacity))\n}\n.nuxt-content a{\n    font-family:"Noto Sans Display"\n}\n.nuxt-content p{\n    margin-top:1rem;\n    margin-bottom:1rem\n}\n.nuxt-content ul{\n    margin-top:1rem;\n    margin-bottom:1rem;\n    list-style-position:outside;\n    list-style-type:disc;\n    padding-left:1.5rem\n}\n.nuxt-content ol{\n    margin-top:1rem;\n    margin-bottom:1rem;\n    list-style-position:outside;\n    list-style-type:decimal;\n    padding-left:1.5rem\n}\n.nuxt-content li{\n    margin-bottom:0.5rem\n}\n.nuxt-content code{\n    border-radius:0.125rem;\n    --tw-bg-opacity:1;\n    background-color:rgba(254, 243, 199, var(--tw-bg-opacity));\n    padding-right:0.25rem;\n    padding-left:0.25rem;\n    font-size:0.875rem;\n    line-height:1.25rem;\n    --tw-text-opacity:1;\n    color:rgba(180, 83, 9, var(--tw-text-opacity))\n}\n.nuxt-content blockquote{\n    display:flex;\n    flex-direction:row;\n    align-items:center;\n    border-radius:0.375rem;\n    --tw-bg-opacity:1;\n    background-color:rgba(254, 243, 199, var(--tw-bg-opacity));\n    padding-left:1rem;\n    padding-right:1rem;\n    padding-top:1rem;\n    padding-bottom:1rem;\n    --tw-text-opacity:1;\n    color:rgba(180, 83, 9, var(--tw-text-opacity));\n}\n.nuxt-content blockquote p{\n      margin-top:0.25rem;\n      margin-bottom:0.25rem\n}\n.nuxt-content blockquote a{\n      --tw-border-opacity:1;\n      border-color:rgba(146, 64, 14, var(--tw-border-opacity))\n}\n.nuxt-content blockquote a:hover{\n      --tw-border-opacity:1;\n      border-color:rgba(217, 119, 6, var(--tw-border-opacity))\n}\n.nuxt-content blockquote a{\n      --tw-text-opacity:1;\n      color:rgba(146, 64, 14, var(--tw-text-opacity))\n}\n.nuxt-content blockquote a:hover{\n      --tw-text-opacity:1;\n      color:rgba(217, 119, 6, var(--tw-text-opacity))\n}\n.nuxt-content blockquote a{\n      font-family:"Noto Sans Display"\n}',""]),o.locals={},t.exports=o},424:function(t,n,e){},61:function(t,n,e){"use strict";e.r(n),e.d(n,"store",(function(){return R})),e.d(n,"PolicyMaker",(function(){return T}));e(339);var o=e(3),r=e(127),l=e(128),c=e(283),d=e(284),f=e(176),m=e(15),h=(e(36),e(39),e(45),e(116),e(218),e(10),e(19),e(21),e(23),e(56),e(0)),y=e(63),v=e(27),x=e(95),w=e.n(x),_=e(97),S=e.n(_),k=e(270),z=e.n(k),C=e(237),N=e.n(C),D=e(91);e(122);function O(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=Object(f.a)(t);if(n){var r=Object(f.a)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return Object(d.a)(this,e)}}var j=function(t,n,e,desc){var o,r=arguments.length,l=r<3?n:null===desc?desc=Object.getOwnPropertyDescriptor(n,e):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,n,e,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(r<3?o(l):r>3?o(n,e,l):o(n,e))||l);return r>3&&l&&Object.defineProperty(n,e,l),l};h.a.use(y.a);var R=new y.a.Store({}),T=function(t){Object(c.a)(d,t);var n,e=O(d);function d(){var t;return Object(r.a)(this,d),(t=e.apply(this,arguments)).currentStep=1,t.navSteps=[{route:"/policymaker/introduction",name:"Introduction"},{route:"/policymaker/organization",name:"Organization details"},{route:"/policymaker/settings",name:"Policy settings"},{route:"/policymaker/download",name:"Download"}],t.downloadSections=[{route:"/policymaker/download/vdp",name:"Vulnerability Disclosure Policy"},{route:"/policymaker/download/securitytxt",name:"Security.txt"},{route:"/policymaker/download/dnssecuritytxt",name:"DNS Security.txt"}],t.templateRoot="/templates",t.policyConfiguration={language:"en",region:"US",organizationName:"",organizationDomain:"",channels:[{prefix:"",type:"",address:""}],cvdTimelineDays:90,hostUrl:{prefix:"https://",type:"url",address:""}},t.cvdTimelineOptions=[{value:180,label:"180 days (6 months)"},{value:120,label:"120 days (4 months)"},{value:90,label:"90 days (3 months)"},{value:60,label:"60 days (2 months)"},{value:45,label:"45 days (1.5 months)"},{value:30,label:"30 days (1 month)"},{value:0,label:"Opt-out of CVD Timeline"}],t.templates={vdp:{url:"templates/disclose-io-vdp/{{locale}}.md",text:""},vdp_with_cvd:{url:"templates/disclose-io-vdp-with-cvd/{{locale}}.md",text:""},safe_harbor:{url:"templates/disclose-io-safe-harbor/{{locale}}.md",text:""},securitytxt:{url:"templates/securitytxt/securitytxt.md",text:""}},t}return Object(l.a)(d,[{key:"getCurrentStep",get:function(){return this.currentStep}},{key:"getNavSteps",get:function(){return this.navSteps}},{key:"getDownloadSections",get:function(){return this.downloadSections}},{key:"getConfiguration",get:function(){return this.policyConfiguration}},{key:"getChannels",get:function(){return this.policyConfiguration.channels}},{key:"getCurrentLocale",get:function(){return"".concat(this.policyConfiguration.language.toLowerCase(),"-").concat(this.policyConfiguration.region.toUpperCase())}},{key:"getTermsVDP",get:function(){return Object(D.c)(this.templates.vdp.text,this.policyConfiguration)}},{key:"getTermsVDPCVD",get:function(){return Object(D.c)(this.templates.vdp_with_cvd.text,this.policyConfiguration)}},{key:"getTermsSafeHarbor",get:function(){return Object(D.c)(this.templates.safe_harbor.text,this.policyConfiguration)}},{key:"getSecurityTxt",get:function(){return Object(D.b)(this.templates.securitytxt.text,this.policyConfiguration)}},{key:"validOrganizationName",get:function(){return!S()(this.policyConfiguration.organizationName)}},{key:"validChannels",get:function(){return this.policyConfiguration.channels.length>0&&!S()(this.policyConfiguration.channels[0].address.trim())}},{key:"validHostUrl",get:function(){return!S()(this.policyConfiguration.hostUrl.address)}},{key:"validAll",get:function(){return this.validOrganizationName&&this.validChannels&&this.validHostUrl}},{key:"setStep",value:function(t){this.currentStep=t}},{key:"setOrganizationName",value:function(t){this.policyConfiguration.organizationName=t}},{key:"setOrganizationDomain",value:function(t){this.policyConfiguration.organizationDomain=t.trim()}},{key:"addChannel",value:function(t){t?this.policyConfiguration.channels.push(t):this.policyConfiguration.channels.push({prefix:"",type:"",address:""})}},{key:"removeChannel",value:function(t){this.policyConfiguration.channels.splice(t,1)}},{key:"setLanguage",value:function(t){this.policyConfiguration.language=t}},{key:"setCVDTimelineDays",value:function(t){this.policyConfiguration.cvdTimelineDays=t}},{key:"setTemplateText",value:function(t){this.templates[t.type].text=t.text}},{key:"setHostUrl",value:function(t){this.policyConfiguration.hostUrl=t}},{key:"fetchTerms",value:(n=Object(o.a)(regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(w()(this.templates,function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(template,e){var o,r,text;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=(o="".concat($nuxt.$router.options.base).concat(template.url)).replace("{{locale}}",n.getCurrentLocale),t.next=4,fetch(o);case 4:return r=t.sent,t.next=7,r.text();case 7:text=t.sent,n.setTemplateText({type:e,text:text});case 9:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}())));case 1:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"syncStepFromRoute",value:function(t){var n=z()(this.context.getters.getNavSteps,(function(n){return N()(t,n.route)}));n++,this.context.commit("setStep",n)}}]),d}(v.d);j([v.c],T.prototype,"setStep",null),j([v.c],T.prototype,"setOrganizationName",null),j([v.c],T.prototype,"setOrganizationDomain",null),j([v.c],T.prototype,"addChannel",null),j([v.c],T.prototype,"removeChannel",null),j([v.c],T.prototype,"setLanguage",null),j([v.c],T.prototype,"setCVDTimelineDays",null),j([v.c],T.prototype,"setTemplateText",null),j([v.c],T.prototype,"setHostUrl",null),j([Object(v.a)({rawError:!0})],T.prototype,"fetchTerms",null),j([v.a],T.prototype,"syncStepFromRoute",null),T=j([Object(v.b)({name:"policymaker",stateFactory:!0,namespaced:!0,store:R,dynamic:!0})],T)},91:function(t,n,e){"use strict";e.d(n,"c",(function(){return d})),e.d(n,"b",(function(){return f})),e.d(n,"a",(function(){return m}));e(134),e(23),e(69),e(56),e(45),e(116);var o=e(95),r=e.n(o),l=e(129),c=e.n(l);e(122);function d(template,t){var n,e,o=template;n=new RegExp("{{organization}}","gm"),e=t.organizationName,o=o.replace(n,e),n=new RegExp("{{channel}}","gm");var r=m(t.channels);return e=c()(r," or "),o=o.replace(n,e),n=new RegExp("{{disclosure_window}}","gm"),e="".concat(t.cvdTimelineDays),o=o.replace(n,e)}function f(template,t){var n,e,o=template;n=new RegExp("{{organization}}","gm"),e=t.organizationName,o=o.replace(n,e),n=new RegExp("{{channel}}","gm");var l=m(t.channels);e=c()(r()(l,(function(t){return"Contact: ".concat(t)})),"\n"),o=o.replace(n,e),n=new RegExp("{{policy_url}}","gm");var d=m([t.hostUrl]);return e=c()(d,""),o=o.replace(n,e),n=new RegExp("{{languages}}","gm"),o=o.replace(n,t.language)}function m(t){return r()(t,(function(t){return"".concat(t.prefix.trim()).concat(t.address.trim())}))}}},[[297,29,3,30]]]);