(window.webpackJsonp=window.webpackJsonp||[]).push([[24,4,5,6,14,16],{532:function(n,t,e){var content=e(541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(55).default)("9f859658",content,!0,{sourceMap:!1})},533:function(n,t,e){"use strict";e.r(t);var o=e(0).a.extend({props:{theme:{type:String,default:"solid"},size:{type:String,default:"normal"},disabled:{type:Boolean,default:!1}},methods:{click:function(n){this.$emit("click",n)}}}),r=(e(540),e(34)),component=Object(r.a)(o,(function(){var n,t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"dio__button dio__focusable",class:(n={},n["dio__button-"+t.theme]=!0,n["dio__button-"+t.size]=!0,n["dio__button-disabled"]=t.disabled,n),attrs:{disabled:t.disabled},on:{click:function(n){return t.click(n)}}},[t._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},538:function(n,t,e){var content=e(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(55).default)("8b7cb99e",content,!0,{sourceMap:!1})},540:function(n,t,e){"use strict";e(532)},541:function(n,t,e){var o=e(54)((function(i){return i[1]}));o.push([n.i,".dio__button{\n  cursor:pointer;\n  border-radius:9999px;\n  padding:0.5rem;\n  padding-right:1rem;\n  padding-left:1rem;\n  border-radius:9999px;\n  border-width:1px;\n  border-style:solid\n}\n.dio__button:focus, .dio__button:focus-within{\n  border-radius:9999px\n}\n.dio__button:focus,.dio__button:focus-within{\n  outline:none\n}\n.dio__button-solid{\n    background:var(--purple);\n    color:var(--white)\n}\n.dio__button-transparent{\n    background-color:transparent;\n    color:var(--purple);\n    border-color:var(--purple)\n}\n.dio__button-muted{\n    background-color:transparent;\n    color:var(--shade-700);\n    border-color:var(--shade-700)\n}\n.dio__button-small{\n    padding:0.25rem;\n    padding-right:0.75rem;\n    padding-left:0.75rem;\n    font-size:0.875rem;\n    line-height:1.25rem\n}\n.dio__button.dio__button-disabled{\n  background:var(--shade-500);\n  cursor:default\n}",""]),o.locals={},n.exports=o},545:function(n,t,e){var content=e(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(55).default)("21905e34",content,!0,{sourceMap:!1})},550:function(n,t,e){"use strict";e(538)},551:function(n,t,e){var o=e(54)((function(i){return i[1]}));o.push([n.i,".dropdown .trigger{\n    display:inline-flex;\n    width:100%;\n    justify-content:center;\n    border-radius:9999px;\n    border-width:1px;\n    --tw-border-opacity:1;\n    border-color:rgba(209, 213, 219, var(--tw-border-opacity));\n    padding-left:1rem;\n    padding-right:1rem;\n    padding-top:0.5rem;\n    padding-bottom:0.5rem;\n    font-size:0.875rem;\n    line-height:1.25rem;\n    font-weight:500;\n    line-height:1.25rem;\n    --tw-text-opacity:1;\n    color:rgba(55, 65, 81, var(--tw-text-opacity))\n}\n.dropdown .trigger:focus{\n    --tw-border-opacity:1;\n    border-color:rgba(91, 33, 182, var(--tw-border-opacity))\n}\n.dropdown .trigger:hover{\n    --tw-text-opacity:1;\n    color:rgba(107, 114, 128, var(--tw-text-opacity))\n}\n.dropdown .trigger:focus{\n    outline:2px solid transparent;\n    outline-offset:2px\n}\n.dropdown .trigger{\n    cursor:pointer;\n    transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n    transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n    transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n    transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration:150ms;\n    transition-duration:150ms;\n    transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)\n}\n.dropdown .trigger:hover{\n    --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n    --tw-ring-opacity:1;\n    --tw-ring-color:rgba(91, 33, 182, var(--tw-ring-opacity))\n}\n.dropdown-menu{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform-origin:top left;\n  --tw-translate-y:-0.5rem;\n  --tw-scale-x:.95;\n  --tw-scale-y:.95;\n  transition-property:all;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n  transition-duration:300ms\n}\n.dropdown-menu.open{\n  opacity:1;\n  transform:translate(0) scale(1);\n  visibility:visible\n}\n.dropdown-menu .dropdown-options{\n    position:absolute;\n    left:0px;\n    z-index:10;\n    margin-top:0.5rem;\n    width:14rem;\n    transform-origin:top left\n}\n.dropdown-menu .dropdown-options > :not([hidden]) ~ :not([hidden]){\n    --tw-divide-y-reverse:0;\n    border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n    border-bottom-width:calc(1px * var(--tw-divide-y-reverse));\n    --tw-divide-opacity:1;\n    border-color:rgba(243, 244, 246, var(--tw-divide-opacity))\n}\n.dropdown-menu .dropdown-options{\n    border-radius:0.375rem;\n    border-width:1px;\n    --tw-border-opacity:1;\n    border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n    --tw-bg-opacity:1;\n    background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n    --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n    box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n    outline:2px solid transparent;\n    outline-offset:2px\n}\n.dropdown-menu .dropdown-option{\n    cursor:pointer;\n    -webkit-user-select:none;\n       -moz-user-select:none;\n        -ms-user-select:none;\n            user-select:none\n}",""]),o.locals={},n.exports=o},553:function(n,t,e){var content=e(571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(55).default)("7c20d94e",content,!0,{sourceMap:!1})},554:function(n,t,e){var o=e(555),r=e(180),l=Object.prototype.hasOwnProperty;n.exports=function(object,n,t){var e=object[n];l.call(object,n)&&r(e,t)&&(void 0!==t||n in object)||o(object,n,t)}},555:function(n,t,e){var o=e(561);n.exports=function(object,n,t){"__proto__"==n&&o?o(object,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):object[n]=t}},557:function(n,t,e){"use strict";e.r(t);var o=e(0),r=e(569),l=e(97),c=e.n(l),d=o.a.extend({components:{ChevronDownIcon:r.a},props:{options:{type:Array},value:{type:String},align:{type:String},placeholder:{type:String}},data:function(){return{localPlaceholder:"",isOpen:!1,localValue:null}},mounted:function(){var n=this;n.localValue=n.value,n.localPlaceholder=n.placeholder},computed:{hasValue:function(){return!c()(this.localValue)}},methods:{select:function(n){var t=this;t.localValue=n,t.$emit("input",n),t.isOpen=!1}},watch:{value:function(n){this.localValue=n}}}),f=(e(550),e(34)),component=Object(f.a)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"relative inline-block text-left dropdown z-10"},[e("div",{staticClass:"trigger",attrs:{type:"button","aria-haspopup":"true","aria-expanded":"true","aria-controls":"headlessui-menu-items-117"},on:{click:function(t){n.isOpen=!n.isOpen}}},[n.hasValue?n._t("selectedValue",null,{value:n.localValue}):n._e(),n._v(" "),n.hasValue?n._e():e("span",[n._v(n._s(n.localPlaceholder))]),n._v(" "),e("svg",{staticClass:"w-5 h-5 ml-2 -mr-1",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])],2),n._v(" "),e("div",{staticClass:"opacity-0 invisible dropdown-menu",class:{open:n.isOpen}},[e("div",{staticClass:"dropdown-options",attrs:{role:"menu","aria-labelledby":"headlessui-menu-button-1",id:"headlessui-menu-items-117"}},n._l(n.options,(function(option){return e("div",{key:option,staticClass:"dropdown-option px-4 py-3",on:{click:function(t){return n.select(option)}}},[n._t("option",null,{option:option})],2)})),0)])])}),[],!1,null,null,null);t.default=component.exports},559:function(n,t,e){"use strict";e(545)},560:function(n,t,e){var o=e(54)((function(i){return i[1]}));o.push([n.i,".dio__term-content{\n  margin-bottom:2.5rem;\n  border-radius:0.125rem;\n  border-width:1px;\n  --tw-border-opacity:1;\n  border-color:rgba(156, 163, 175, var(--tw-border-opacity));\n  padding:0.75rem;\n  font-size:0.75rem;\n  line-height:1rem;\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n@media (min-width: 1024px){\n.dio__term-content{\n    padding:1.75rem;\n    font-size:1rem;\n    line-height:1.5rem\n}\n}\n.dio__term-content{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.dio__term-content h1{\n    font-size:1.125rem;\n    line-height:1.75rem;\n    font-weight:700\n}\n@media (min-width: 1024px){\n.dio__term-content h1{\n      font-size:1.5rem;\n      line-height:2rem\n}\n}\n.dio__term-content h1:not(:first-child){\n    padding-top:1.5rem\n}\n.dio__term-content h2{\n    padding-top:1.25rem;\n    font-size:1rem;\n    line-height:1.5rem;\n    font-weight:700\n}\n@media (min-width: 1024px){\n.dio__term-content h2{\n      font-size:1.25rem;\n      line-height:1.75rem\n}\n}\n.dio__term-content h3{\n    padding-top:1rem;\n    font-size:0.875rem;\n    line-height:1.25rem;\n    font-weight:700\n}\n@media (min-width: 1024px){\n.dio__term-content h3{\n      font-size:1.125rem;\n      line-height:1.75rem\n}\n}\n.dio__term-content a{\n    --tw-text-opacity:1;\n    color:rgba(37, 99, 235, var(--tw-text-opacity));\n    text-decoration:underline\n}\n.dio__term-content p{\n    padding-bottom:1rem\n}\n.dio__term-content ul{\n    list-style-position:outside;\n    list-style-type:disc;\n    padding-bottom:1rem;\n    padding-left:1.5rem\n}\n.dio__term-content li{\n    padding-bottom:0.25rem\n}",""]),o.locals={},n.exports=o},561:function(n,t,e){var o=e(68),r=function(){try{var n=o(Object,"defineProperty");return n({},"",{}),n}catch(n){}}();n.exports=r},562:function(n,t,e){"use strict";e.r(t);var o=e(13);e(10),e(19),e(21),e(285),e(29),e(18),e(35),e(39),e(28),e(49);function r(object,n){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),t.push.apply(t,e)}return t}function l(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(t){Object(o.a)(n,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(source,t))}))}return n}var c=e(0).a.extend({props:{content:{type:String},format:{type:String,default:"text/plain"},downloads:{type:Array},showLanguage:{type:Boolean,default:!1},trackingEvent:{type:Object,default:function(){return null}}},data:function(){return{language:"en"}},methods:{download:function(n,t){var link=document.createElement("a"),e=new Blob([n],{type:t.type});link.href=URL.createObjectURL(e),link.download=t.filename,link.click(),URL.revokeObjectURL(link.href),this.trackingEvent&&this.track(t)},track:function(n){var t=l(l({},this.trackingEvent),n.trackingEvent);this.$ga.event(t)}}}),d=(e(559),e(34)),component=Object(d.a)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"dio__term-preview"},[e("div",{staticClass:"flex flex-row justify-between items-center"},[e("div",{staticClass:"flex flex-row items-center gap-x-2"},[n.showLanguage?e("input-dropdown",{attrs:{options:[]},scopedSlots:n._u([{key:"selectedValue",fn:function(t){var e=t.value;return[n._v("\n                    "+n._s(n.$t("language."+e))+"\n                ")]}},{key:"option",fn:function(t){var option=t.option;return[n._v("\n                    "+n._s(n.$t("language."+option))+"\n                ")]}}],null,!1,127414888),model:{value:n.language,callback:function(t){n.language=t},expression:"language"}}):n._e()],1),n._v(" "),e("div",[n._l(n.downloads,(function(t,o){return["text/plain"===t.type?e("dio-button",{key:o,attrs:{theme:"transparent"},on:{click:function(e){return n.download(n.content,t)}}},[n._v(n._s(t.label))]):n._e(),n._v(" "),"text/markdown"===t.type?e("dio-button",{key:o,attrs:{theme:"transparent"},on:{click:function(e){return n.download(n.content,t)}}},[n._v(n._s(t.label))]):n._e(),n._v(" "),"text/html"===t.type?e("dio-button",{key:o,attrs:{theme:"transparent"},on:{click:function(e){n.download(n.$md.render(n.content),t)}}},[n._v(n._s(t.label))]):n._e()]}))],2)]),n._v(" "),e("br"),n._v(" "),"text/markdown"===n.format?e("div",{staticClass:"dio__term-content",domProps:{innerHTML:n._s(n.$md.render(n.content))}}):n._e(),n._v(" "),"text/plain"===n.format?e("div",{staticClass:"dio__term-content"},[e("pre",[n._v(n._s(n.content))])]):n._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{InputDropdown:e(557).default,DioButton:e(533).default})},570:function(n,t,e){"use strict";e(553)},571:function(n,t,e){var o=e(54)((function(i){return i[1]}));o.push([n.i,'.dio__checkbox-panel{\n  display:flex;\n  flex:1 1 0%;\n  flex-direction:row;\n  align-items:center;\n  max-width:28rem;\n  cursor:pointer;\n  padding-top:1rem;\n  padding-right:2.5rem;\n  padding-bottom:1rem;\n  padding-left:1.25rem;\n  border-width:2px;\n  border-color:transparent;\n  transition-property:all;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n  transition-duration:150ms;\n  background:var(--shade-100);\n  color:var(--shade-800);\n}\n.dio__checkbox-panel .dio__checkbox-icon{\n    padding-right:1.25rem;\n    opacity:0;\n    transition-property:all;\n    transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration:150ms;\n    transition-duration:300ms\n}\n.dio__checkbox-panel .dio__checkbox-label label{\n      font-family:"Noto Sans Display";\n      display:block;\n      font-weight:700;\n      font-size:1.125rem;\n      line-height:1.75rem\n}\n.dio__checkbox-panel .dio__checkbox-label p{\n      font-size:0.875rem;\n      line-height:1.25rem\n}\n.dio__checkbox-panel .dio__pill{\n    margin-top:0.5rem;\n    display:inline-block;\n    border-width:1px;\n    border-style:solid;\n    background:var(--shade-100);\n    color:var(--shade-900);\n    border-color:var(--shade-200)\n}\n.dio__checkbox-panel:first-child{\n  border-top-left-radius:0.5rem;\n  border-top-right-radius:0.5rem\n}\n@media (min-width: 768px){\n.dio__checkbox-panel:first-child{\n    border-top-right-radius:0px;\n    border-bottom-right-radius:0px;\n    border-top-left-radius:0.5rem;\n    border-bottom-left-radius:0.5rem\n}\n}\n.dio__checkbox-panel:last-child{\n  border-bottom-right-radius:0.5rem;\n  border-bottom-left-radius:0.5rem\n}\n@media (min-width: 768px){\n.dio__checkbox-panel:last-child{\n    border-top-right-radius:0.5rem;\n    border-bottom-right-radius:0.5rem;\n    border-top-left-radius:0px;\n    border-bottom-left-radius:0px\n}\n}\n.dio__checkbox-panel:hover{\n  background:var(--shade-300);\n}\n.dio__checkbox-panel:hover label{\n    color:var(--dark-purple)\n}\n.dio__checkbox-panel.dio__checkbox-panel--selected{\n  border-style:solid;\n  background:var(--white);\n  color:var(--dark-purple);\n  border-color:var(--purple);\n}\n.dio__checkbox-panel.dio__checkbox-panel--selected .dio__pill{\n    --tw-border-opacity:1;\n    border-color:rgba(167, 139, 250, var(--tw-border-opacity));\n    --tw-bg-opacity:1;\n    background-color:rgba(237, 233, 254, var(--tw-bg-opacity));\n    --tw-text-opacity:1;\n    color:rgba(91, 33, 182, var(--tw-text-opacity))\n}\n.dio__checkbox-panel.dio__checkbox-panel--selected .dio__checkbox-icon{\n    opacity:1;\n}\n.dio__checkbox-panel.dio__checkbox-panel--selected .dio__checkbox-icon svg{\n      stroke:var(--purple)\n}',""]),o.locals={},n.exports=o},572:function(n,t,e){var o=e(573);n.exports=function(object,path,n){return null==object?object:o(object,path,n)}},573:function(n,t,e){var o=e(554),r=e(185),l=e(183),c=e(98),d=e(99);n.exports=function(object,path,n,t){if(!c(object))return object;for(var e=-1,f=(path=r(path,object)).length,m=f-1,h=object;null!=h&&++e<f;){var v=d(path[e]),_=n;if("__proto__"===v||"constructor"===v||"prototype"===v)return object;if(e!=m){var w=h[v];void 0===(_=t?t(w,v,h):void 0)&&(_=c(w)?w:l(path[e+1])?[]:{})}o(h,v,_),h=h[v]}return object}},574:function(n,t,e){var o=e(182);n.exports=function(n,t){return o(n,t)}},582:function(n,t,e){"use strict";e.r(t);var o=e(0).a.extend({props:{value:{type:[Object,String,Boolean]},selected:{type:Boolean,default:!1}},data:function(){return{}}}),r=(e(570),e(34)),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"dio__checkbox-panel",class:{"dio__checkbox-panel--selected":n.selected}},[e("div",{staticClass:"dio__checkbox-icon"},[e("svg",{staticClass:"h-8 w-8",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})])]),n._v(" "),e("div",{staticClass:"dio__checkbox-label"},[n._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},583:function(n,t,e){"use strict";e.r(t);e(50);var o=e(0),r=e(286),l=e.n(r),c=e(572),d=e.n(c),f=e(574),m=e.n(f),h=o.a.extend({props:{value:{type:[Object,String,Boolean]}},data:function(){return{localValue:null}},render:function(n,t){var e=this,o=this.$slots.default.map((function(n){var t;if("dio-checkbox-panel"===(null===(t=n.componentOptions)||void 0===t?void 0:t.tag))return n.data&&(n.data.on={click:e.select.bind(n,l()(n,"componentOptions.propsData.value"))}),d()(n.componentOptions,"propsData.selected",e.panelIsSelected(l()(n,"componentOptions.propsData.value"))),n}));return n("div",{class:"dio__checkbox-panels",on:{input:this.select}},o)},created:function(){this.localValue=this.value},methods:{select:function(n){this.localValue=n,this.$emit("input",n)},panelIsSelected:function(n){return m()(this.localValue,n)}}}),v=e(34),component=Object(v.a)(h,undefined,undefined,!1,null,null,null);t.default=component.exports},600:function(n,t,e){var content=e(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(55).default)("5e03381c",content,!0,{sourceMap:!1})},606:function(n,t,e){"use strict";e(600)},607:function(n,t,e){var o=e(54)((function(i){return i[1]}));o.push([n.i,".dio__checkbox-panels{\n  display:flex;\n  flex-direction:column\n}\n@media (min-width: 768px){\n.dio__checkbox-panels{\n    flex-direction:row\n}\n}\n.dio__pill{\n  border-radius:9999px;\n  border-width:1px;\n  border-style:solid;\n  --tw-bg-opacity:1;\n  background-color:rgba(254, 243, 199, var(--tw-bg-opacity));\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n  font-size:0.75rem;\n  line-height:1rem;\n  --tw-text-opacity:1;\n  color:rgba(217, 119, 6, var(--tw-text-opacity))\n}",""]),o.locals={},n.exports=o},650:function(n,t,e){"use strict";e.r(t);var o=e(3),r=(e(36),e(0)),l=e(533),c=e(61),d=r.a.extend({components:{DioButton:l.default},asyncData:function(n){return Object(o.a)(regeneratorRuntime.mark((function t(){var e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.$content,n.params,n.route,t.next=3,e("policymaker/vdp").fetch();case 3:return o=t.sent,t.abrupt("return",{copy:o});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{isFullVDP:!0}},computed:{content:function(){var n=this;return n.configuration.cvdTimelineDays>0?n.isFullVDP?n.vdpCVD:n.safeHarbor:n.isFullVDP?n.vdp:n.safeHarbor},downloadFilename:function(){return this.isFullVDP?"disclose-io-vdp":"disclose-io-safe-harbor"},downloads:function(){return[{type:"text/markdown",label:"Save as markdown",filename:"".concat(this.downloadFilename,".md"),trackingEvent:{eventLabel:"markdown"}},{type:"text/html",label:"Save as HTML",filename:"".concat(this.downloadFilename,".html"),trackingEvent:{eventLabel:"html"}}]},trackingEvent:function(){return{eventCategory:this.isFullVDP?"vdp":"safe-harbor",eventAction:"download"}},vdp:function(){return c.store.getters["policymaker/getTermsVDP"]},vdpCVD:function(){return c.store.getters["policymaker/getTermsVDPCVD"]},safeHarbor:function(){return c.store.getters["policymaker/getTermsSafeHarbor"]},configuration:function(){return c.store.getters["policymaker/getConfiguration"]}}}),f=(e(606),e(34)),component=Object(f.a)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("dio-checkbox-panels",{staticClass:"mt-4 mb-16",model:{value:n.isFullVDP,callback:function(t){n.isFullVDP=t},expression:"isFullVDP"}},[e("dio-checkbox-panel",{attrs:{value:!0}},[e("label",[n._v("Full Vulnerability Disclosure Policy")]),n._v(" "),e("p",[n._v("Use this version if you're creating a brand new VDP or fully replacing an existing VDP policy.")]),n._v(" "),e("small",{staticClass:"dio__pill"},[n._v("Version 2021.1")])]),n._v(" "),e("dio-checkbox-panel",{attrs:{value:!1}},[e("div",{staticClass:"dio__checkbox-label"},[e("label",[n._v("Safe Harbor clause only")]),n._v(" "),e("p",[n._v("Use this version if you already have a VDP policy in place and would like to add a Safe Harbor clause.")]),n._v(" "),e("small",{staticClass:"dio__pill"},[n._v("Version 2021.1")])])])],1),n._v(" "),e("dio-term-preview",{attrs:{format:"text/markdown",downloads:n.downloads,showLanguage:!1,content:n.content,trackingEvent:n.trackingEvent}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DioCheckboxPanel:e(582).default,DioCheckboxPanels:e(583).default,DioTermPreview:e(562).default})}}]);