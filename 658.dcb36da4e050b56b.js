(self.webpackChunkflegisto_frontend=self.webpackChunkflegisto_frontend||[]).push([[658],{4696:(J,h,i)=>{"use strict";i.d(h,{S:()=>c});var e=i(1571),n=i(362);let c=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-navbar"]],decls:9,vars:0,consts:[[1,"header"],[1,"navbar","navbar-expand-lg","fixed-top","shadow"],["routerLink","/home",1,"navbar-brand"],["type","button","data-toggle","collapse","data-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","navbar-toggler-right"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"]],template:function(r,m){1&r&&(e.TgZ(0,"header",0)(1,"nav",1)(2,"a",2),e._uU(3,"flegisto.com"),e.qZA(),e.TgZ(4,"button",3),e._UZ(5,"span")(6,"span")(7,"span"),e.qZA(),e._UZ(8,"div",4),e.qZA()())},dependencies:[n.rH]}),l})()},7123:function(J){J.exports=function(h){function i(n){if(e[n])return e[n].exports;var c=e[n]={exports:{},id:n,loaded:!1};return h[n].call(c.exports,c,c.exports,i),c.loaded=!0,c.exports}var e={};return i.m=h,i.c=e,i.p="dist/",i(0)}([function(h,i,e){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}var c=Object.assign||function(a){for(var x=1;x<arguments.length;x++){var T=arguments[x];for(var D in T)Object.prototype.hasOwnProperty.call(T,D)&&(a[D]=T[D])}return a},y=(n(e(1)),e(6)),r=n(y),u=n(e(7)),s=n(e(8)),O=n(e(9)),I=n(e(10)),F=n(e(11)),U=n(e(14)),M=[],B=!1,v={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},A=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(B=!0),B)return M=(0,F.default)(M,v),(0,I.default)(M,v.once),M},P=function(){M=(0,U.default)(),A()};h.exports={init:function(a){v=c(v,a),M=(0,U.default)();var x=document.all&&!window.atob;return function(a){return!0===a||"mobile"===a&&O.default.mobile()||"phone"===a&&O.default.phone()||"tablet"===a&&O.default.tablet()||"function"==typeof a&&!0===a()}(v.disable)||x?void M.forEach(function(a,x){a.node.removeAttribute("data-aos"),a.node.removeAttribute("data-aos-easing"),a.node.removeAttribute("data-aos-duration"),a.node.removeAttribute("data-aos-delay")}):(v.disableMutationObserver||s.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),v.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",v.easing),document.querySelector("body").setAttribute("data-aos-duration",v.duration),document.querySelector("body").setAttribute("data-aos-delay",v.delay),"DOMContentLoaded"===v.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?A(!0):"load"===v.startEvent?window.addEventListener(v.startEvent,function(){A(!0)}):document.addEventListener(v.startEvent,function(){A(!0)}),window.addEventListener("resize",(0,u.default)(A,v.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(A,v.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)(function(){(0,I.default)(M,v.once)},v.throttleDelay)),v.disableMutationObserver||s.default.ready("[data-aos]",P),M)},refresh:A,refreshHard:P}},function(h,i){},,,,,function(h,i){(function(e){"use strict";function n(t,f,a){function x(p){var _=E,W=N;return E=N=void 0,C=p,k=t.apply(W,_)}function $(p){var _=p-S;return void 0===S||_>=f||_<0||L&&p-C>=q}function Z(){var p=o();return $(p)?X(p):void(w=setTimeout(Z,function D(p){var Q=f-(p-S);return L?P(Q,q-(p-C)):Q}(p)))}function X(p){return w=void 0,g&&E?x(p):(E=N=void 0,k)}function z(){var p=o(),_=$(p);if(E=arguments,N=this,S=p,_){if(void 0===w)return function T(p){return C=p,w=setTimeout(Z,f),H?x(p):k}(S);if(L)return w=setTimeout(Z,f),x(S)}return void 0===w&&(w=setTimeout(Z,f)),k}var E,N,q,k,w,S,C=0,H=!1,L=!1,g=!0;if("function"!=typeof t)throw new TypeError(d);return f=m(f)||0,l(a)&&(H=!!a.leading,q=(L="maxWait"in a)?A(m(a.maxWait)||0,f):q,g="trailing"in a?!!a.trailing:g),z.cancel=function G(){void 0!==w&&clearTimeout(w),C=0,E=S=N=w=void 0},z.flush=function R(){return void 0===w?k:X(o())},z}function l(t){var f=typeof t>"u"?"undefined":u(t);return!!t&&("object"==f||"function"==f)}function r(t){return"symbol"==(typeof t>"u"?"undefined":u(t))||function y(t){return!!t&&"object"==(typeof t>"u"?"undefined":u(t))}(t)&&v.call(t)==b}function m(t){if("number"==typeof t)return t;if(r(t))return s;if(l(t)){var f="function"==typeof t.valueOf?t.valueOf():t;t=l(f)?f+"":f}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(O,"");var a=I.test(t);return a||Y.test(t)?F(t.slice(2),a?2:8):j.test(t)?s:+t}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d="Expected a function",s=NaN,b="[object Symbol]",O=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,I=/^0b[01]+$/i,Y=/^0o[0-7]+$/i,F=parseInt,K="object"==(typeof e>"u"?"undefined":u(e))&&e&&e.Object===Object&&e,U="object"==(typeof self>"u"?"undefined":u(self))&&self&&self.Object===Object&&self,M=K||U||Function("return this")(),v=Object.prototype.toString,A=Math.max,P=Math.min,o=function(){return M.Date.now()};h.exports=function c(t,f,a){var x=!0,T=!0;if("function"!=typeof t)throw new TypeError(d);return l(a)&&(x="leading"in a?!!a.leading:x,T="trailing"in a?!!a.trailing:T),n(t,f,{leading:x,maxWait:f,trailing:T})}}).call(i,function(){return this}())},function(h,i){(function(e){"use strict";function c(o){var t=typeof o>"u"?"undefined":m(o);return!!o&&("object"==t||"function"==t)}function y(o){return"symbol"==(typeof o>"u"?"undefined":m(o))||function l(o){return!!o&&"object"==(typeof o>"u"?"undefined":m(o))}(o)&&B.call(o)==s}function r(o){if("number"==typeof o)return o;if(y(o))return d;if(c(o)){var t="function"==typeof o.valueOf?o.valueOf():o;o=c(t)?t+"":t}if("string"!=typeof o)return 0===o?o:+o;o=o.replace(b,"");var f=j.test(o);return f||I.test(o)?Y(o.slice(2),f?2:8):O.test(o)?d:+o}var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},u="Expected a function",d=NaN,s="[object Symbol]",b=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,I=/^0o[0-7]+$/i,Y=parseInt,F="object"==(typeof e>"u"?"undefined":m(e))&&e&&e.Object===Object&&e,K="object"==(typeof self>"u"?"undefined":m(self))&&self&&self.Object===Object&&self,U=F||K||Function("return this")(),B=Object.prototype.toString,v=Math.max,A=Math.min,P=function(){return U.Date.now()};h.exports=function n(o,t,f){function a(g){var p=z,_=E;return z=E=void 0,S=g,q=o.apply(_,p)}function D(g){var p=g-w;return void 0===w||p>=t||p<0||H&&g-S>=N}function $(){var g=P();return D(g)?Z(g):void(k=setTimeout($,function T(g){var W=t-(g-w);return H?A(W,N-(g-S)):W}(g)))}function Z(g){return k=void 0,L&&z?a(g):(z=E=void 0,q)}function R(){var g=P(),p=D(g);if(z=arguments,E=this,w=g,p){if(void 0===k)return function x(g){return S=g,k=setTimeout($,t),C?a(g):q}(w);if(H)return k=setTimeout($,t),a(w)}return void 0===k&&(k=setTimeout($,t)),q}var z,E,N,q,k,w,S=0,C=!1,H=!1,L=!0;if("function"!=typeof o)throw new TypeError(u);return t=r(t)||0,c(f)&&(C=!!f.leading,N=(H="maxWait"in f)?v(r(f.maxWait)||0,t):N,L="trailing"in f?!!f.trailing:L),R.cancel=function X(){void 0!==k&&clearTimeout(k),S=0,z=w=E=k=void 0},R.flush=function G(){return void 0===k?q:Z(P())},R}}).call(i,function(){return this}())},function(h,i){"use strict";function e(m){var u=void 0,d=void 0;for(u=0;u<m.length;u+=1)if((d=m[u]).dataset&&d.dataset.aos||d.children&&e(d.children))return!0;return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function y(m){m&&m.forEach(function(u){var d=Array.prototype.slice.call(u.addedNodes),s=Array.prototype.slice.call(u.removedNodes);if(e(d.concat(s)))return r()})}Object.defineProperty(i,"__esModule",{value:!0});var r=function(){};i.default={isSupported:function c(){return!!n()},ready:function l(m,u){var d=window.document,b=new(n())(y);r=u,b.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(h,i){"use strict";function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var c=function(){function d(s,b){for(var O=0;O<b.length;O++){var j=b[O];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(s,j.key,j)}}return function(s,b,O){return b&&d(s.prototype,b),O&&d(s,O),s}}(),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,y=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,m=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function d(){!function e(d,s){if(!(d instanceof s))throw new TypeError("Cannot call a class as a function")}(this,d)}return c(d,[{key:"phone",value:function(){var s=n();return!(!l.test(s)&&!y.test(s.substr(0,4)))}},{key:"mobile",value:function(){var s=n();return!(!r.test(s)&&!m.test(s.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();i.default=new u},function(h,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.default=function(c,l){var y=window.pageYOffset,r=window.innerHeight;c.forEach(function(m,u){!function(c,l,y){var r=c.node.getAttribute("data-aos-once");l>c.position?c.node.classList.add("aos-animate"):typeof r<"u"&&("false"===r||!y&&"true"!==r)&&c.node.classList.remove("aos-animate")}(m,r+y,l)})}},function(h,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var l=function n(r){return r&&r.__esModule?r:{default:r}}(e(12));i.default=function(r,m){return r.forEach(function(u,d){u.node.classList.add("aos-init"),u.position=(0,l.default)(u.node,m.offset)}),r}},function(h,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var l=function n(r){return r&&r.__esModule?r:{default:r}}(e(13));i.default=function(r,m){var u=0,d=0,s=window.innerHeight,b={offset:r.getAttribute("data-aos-offset"),anchor:r.getAttribute("data-aos-anchor"),anchorPlacement:r.getAttribute("data-aos-anchor-placement")};switch(b.offset&&!isNaN(b.offset)&&(d=parseInt(b.offset)),b.anchor&&document.querySelectorAll(b.anchor)&&(r=document.querySelectorAll(b.anchor)[0]),u=(0,l.default)(r).top,b.anchorPlacement){case"top-bottom":break;case"center-bottom":u+=r.offsetHeight/2;break;case"bottom-bottom":u+=r.offsetHeight;break;case"top-center":u+=s/2;break;case"bottom-center":u+=s/2+r.offsetHeight;break;case"center-center":u+=s/2+r.offsetHeight/2;break;case"top-top":u+=s;break;case"bottom-top":u+=r.offsetHeight+s;break;case"center-top":u+=r.offsetHeight/2+s}return b.anchorPlacement||b.offset||isNaN(m)||(d=m),u+d}},function(h,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(n){for(var c=0,l=0;n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)c+=n.offsetLeft-("BODY"!=n.tagName?n.scrollLeft:0),l+=n.offsetTop-("BODY"!=n.tagName?n.scrollTop:0),n=n.offsetParent;return{top:l,left:c}}},function(h,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(n){return n=n||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(n,function(c){return{node:c}})}}])}}]);