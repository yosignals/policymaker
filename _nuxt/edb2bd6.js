(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{578:function(n,e,t){var content=t(593);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(55).default)("167067ea",content,!0,{sourceMap:!1})},592:function(n,e,t){"use strict";t(578)},593:function(n,e,t){var o=t(54)((function(i){return i[1]}));o.push([n.i,".dio__input-channel-list>div{\n  margin-bottom:0.5rem\n}",""]),o.locals={},n.exports=o},598:function(n,e,t){"use strict";t.r(e);t(29),t(18),t(35),t(39),t(28),t(49);var o=t(13),r=t(0),c=t(63),l=t(533),f=t(563),h=t(61);function d(object,n){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),e.push.apply(e,t)}return e}function m(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(n,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(source,e))}))}return n}var v=r.a.extend({components:{InputChannel:f.default,DioButton:l.default},props:{value:{type:Array}},data:function(){return{}},mounted:function(){},computed:m(m({},Object(c.b)("policymaker",["policyConfiguration"])),{},{channels:function(){return h.store.getters["policymaker/getConfiguration"].channels}}),methods:{addChannel:function(){var n=this;h.store.commit("policymaker/addChannel"),r.a.nextTick((function(){n.$refs["channel".concat(n.channels.length-1)][0].focus()}))},removeChannel:function(n){h.store.commit("policymaker/removeChannel",n)},emit:function(){this.$emit("input",this.channels)}}}),y=(t(592),t(34)),component=Object(y.a)(v,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"dio__input-channels"},[t("div",{staticClass:"dio__input-channel-list"},n._l(n.channels,(function(e,o){return t("input-channel",{key:o,ref:"channel"+o,refInFor:!0,attrs:{index:o},on:{remove:n.removeChannel},model:{value:n.channels[o],callback:function(e){n.$set(n.channels,o,e)},expression:"channels[index]"}})})),1),n._v(" "),t("dio-button",{attrs:{theme:"transparent",size:"small"},on:{click:n.addChannel}},[n._v("Add another")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InputChannel:t(563).default,DioButton:t(533).default})}}]);