!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.zent=e(require("react")):(t.noformDialog=t.noformDialog||{},t.noformDialog.zent=e(t.React))}(window,function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var o=n(0);t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}},function(t,e,n){var o=n(7);t.exports=function(t,e){if(null==t)return{};var n,r,i=o(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){var o,r,i;r=[e,n(1),n(2),n(3),n(0),n(8)],void 0===(i="function"==typeof(o=function(t,e,o,r,i,a){"use strict";var u=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e=u(e),o=u(o),r=u(r),i=u(i),a=u(a);var l=function t(n){var a=this;(0,r.default)(this,t),(0,i.default)(this,"getUniqueId",function(){return Math.random().toString(36).slice(2).slice(2)}),(0,i.default)(this,"show",function(t){var n=t.className,r=t.content,i=t.footer,u=(0,o.default)(t,["className","content","footer"]),l=a.getUniqueId(),f=null;return i&&(f=i(a.hide)),(0,e.default)({},u,{dialogId:l,children:r,footer:f,className:"".concat(n||""," zent-dialog-form-wrapper")})}),(0,i.default)(this,"dialogInstance",function(t){var e={};return e.hide=t,e}),this.btnLoadingProps="loading",this.Dialog=n},f=function(t){var e=t.Dialog,n=t.Button;e.show=e.openDialog;var o=new l(e);return new a.default({Dialog:e,Button:n,compatiMap:o})};t.default=f})?o.apply(e,r):o)||(t.exports=i)},function(t,e){t.exports=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}},function(t,e,n){var o,r,i;r=[e,n(9),n(10),n(11),n(13),n(4),n(14),n(2),n(1),n(3),n(0),n(16),n(17)],void 0===(i="function"==typeof(o=function(t,e,o,r,i,a,u,l,f,c,s,d,p){"use strict";var y=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e=y(e),o=y(o),r=y(r),i=y(i),a=y(a),u=y(u),l=y(l),f=y(f),c=y(c),s=y(s),d=y(d),p=y(p);var b=function(){},g=function(t){return Promise.resolve(t)===t},h=function t(e,n){var o=this;(0,c.default)(this,t),(0,s.default)(this,"hide",function(){var t=o.getDialogInstance();t.hide()}),(0,s.default)(this,"handleOk",function(){var t=o.options,e=t.onOk,n=void 0===e?b:e,r=t.enableValidate,i={};o.dialogCore&&(i=o.dialogCore.getValues());var a=[i,o.hide,o.dialogCore];return r&&o.dialogCore?o.dialogCore.validate(function(t){return t?null:n.apply(void 0,a)}):n.apply(void 0,a)}),(0,s.default)(this,"renderFooter",function(t){var e=o.options,n=e.btnAlign,r=e.hasCancel,i=void 0===r||r,a=e.footer,u=e.okText,l=void 0===u?"OK":u,f=e.cancelText,c=void 0===f?"Cancel":f,s=e.btnLoadingPropsName;return a?a(o.hide):d.default.createElement("div",{key:"footer",className:"ant-custom-btns noform-dialog-custom-btns noform-dialog-btns-align-".concat(n)},d.default.createElement(m,{btnLoadingPropsName:s,btnOrigin:t,type:"primary",onClick:o.handleOk},l),i?d.default.createElement("span",{style:{marginRight:"12px"}}):null,i?d.default.createElement(m,{btnLoadingPropsName:s,btnOrigin:t,onClick:o.hide},c):null)}),(0,s.default)(this,"renderContent",function(t){var e=o.options.content,n=null,r=o.renderFooter(t),i=(n="function"==typeof e?e(r):e).props,a=i.onMount,u=i.children,l=i.core;o.dialogCore=l;var c=[].concat(u,r),s={};("NoForm"===n.displayName||n.type&&"NoForm"===n.type.displayName)&&(s.onMount=function(t){l||(o.dialogCore=t),a&&a(t)});var p=d.default.cloneElement(n,(0,f.default)({},i,s,{children:c}));return p}),this.options=e,this.dialogCore=null,this.getDialogInstance=n};t.default=function t(e){var n=this,o=e.Dialog,r=e.Button,i=e.compatiMap;(0,c.default)(this,t),(0,s.default)(this,"show",function(t){var e=n.Dialog,o=n.Button,r=n.compatiMap;if(!e||!o)throw Error("DialogForm initialize failed, make sure you have passed antd components");var i=t.title,a=(t.className,t.width,(0,l.default)(t,["title","className","width"])),u=null,c=r.btnLoadingProps||"loading",s=new h((0,f.default)({},t,{btnLoadingPropsName:c}),function(){return u}),d=s.renderContent(o),p=r.show((0,f.default)({},t,{title:i,content:d}));return u=e.show((0,f.default)({},a,p)),u=r.dialogInstance(u)}),this.Dialog=o,this.Button=r,this.compatiMap=i,o.show;var a=(0,l.default)(o,["show"]);Object.keys(a).forEach(function(t){n[t]=a[t]})};var m=function(t){function n(t,e){var o;return(0,c.default)(this,n),o=(0,r.default)(this,(0,i.default)(n).call(this,t,e)),(0,s.default)((0,a.default)(o),"enableLoading",function(){var t=o.props.onLoading;t&&t(),o.setState({isLoading:!0})}),(0,s.default)((0,a.default)(o),"disableLoading",function(){var t=o.props.offLoading;t&&t(),o.setState({isLoading:!1})}),(0,s.default)((0,a.default)(o),"handleAction",function(){var t=o.props.onClick;if("function"==typeof t){o.enableLoading();var e=t();g(e)?e.then(o.disableLoading,o.disableLoading).catch(o.disableLoading):o.disableLoading()}}),o.state={isLoading:!1},o}return(0,u.default)(n,t),(0,o.default)(n,[{key:"render",value:function(){var t=this.props,n=(t.onClick,t.btnLoadingPropsName),o=void 0===n?"loading":n,r=t.btnOrigin,i=(0,l.default)(t,["onClick","btnLoadingPropsName","btnOrigin"]),a=r,u=this.state.isLoading,f=(0,s.default)({},o,u);return d.default.createElement(a,(0,e.default)({onClick:this.handleAction},i,f))}}]),n}(d.default.Component);(0,s.default)(m,"propTypes",{onLoading:p.default.func,offLoading:p.default.func,onClick:p.default.func,btnLoadingPropsName:p.default.string,btnOrigin:p.default.oneOfType([p.default.string,p.default.func])})})?o.apply(e,r):o)||(t.exports=i)},function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},n.apply(this,arguments)}t.exports=n},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},function(t,e,n){var o=n(12),r=n(4);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(t){return n(t)}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(e)}t.exports=o},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var o=n(15);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},function(e,n){e.exports=t},function(t,e,n){t.exports=n(18)()},function(t,e,n){"use strict";var o=n(19);function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function t(t,e,n,r,i,a){if(a!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])});