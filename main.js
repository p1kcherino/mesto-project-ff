/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={253:t=>{t.exports="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.m=t,r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.b=document.baseURI||self.location.href,(()=>{var t=[{name:"Nike Air Jordan 1",link:new URL(r(253),r.b)},{name:"Nike Air Force",link:"https://images.unsplash.com/photo-1596423215455-7f91e01daacc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name:"Nike Air Max",link:"https://images.unsplash.com/photo-1616633677013-a8fa150e0a5b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name:"Nike Dunk",link:"https://images.unsplash.com/photo-1616940428174-32dc8a191147?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name:"Nike Air VaporMax",link:"https://images.unsplash.com/photo-1530511250146-026c208e059e?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name:"Nike High Travis Scot",link:"https://images.unsplash.com/photo-1606214629839-309cf04478ab?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}];function e(t){t.classList.add("popup_is-animated"),setTimeout((function(){t.classList.add("popup_is-opened")}),1),t.addEventListener("click",o),document.addEventListener("keydown",i)}function n(t){t.classList.remove("popup_is-opened"),t.removeEventListener("click",o),document.removeEventListener("keydown",i)}function o(t){t.currentTarget===t.target&&n(t.currentTarget)}function i(t){"Escape"===t.key&&n(document.querySelector(".popup_is-opened"))}var a=document.querySelector("#card-template").content;function c(t,e,r,n){var o=a.querySelector(".card").cloneNode(!0),i=o.querySelector(".card__image"),c=o.querySelector(".card__delete-button"),u=o.querySelector(".card__like-button"),l=o.querySelector(".card__like-count");return o.querySelector(".card__title").textContent=t.name,i.alt=t.name,i.src=t.link,c.addEventListener("click",(function(){return e(o)})),u.addEventListener("click",r),i.addEventListener("click",(function(){n(t)})),u.addEventListener("click",(function(){var t=parseInt(l.textContent);l.textContent=t+1})),o}function u(t){t.remove()}function l(t){t.target.classList.toggle("card__like-button_is-active")}function s(t,e,r){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?p(t,e,r):function(t,e,r,n){var o=t.querySelector("#".concat(e.name,"-error"));o&&(e.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass))}(t,e,e.validationMessage,r)}function p(t,e,r){var n=t.querySelector("#".concat(e.name,"-error"));n&&(e.classList.remove(r.inputErrorClass),n.textContent="",n.classList.remove(r.errorClass))}function f(t,e,r){var n=t.some((function(t){return!t.validity.valid}));e&&(n?(e.classList.add(r.inactiveButtonClass),e.disabled=!0):(e.classList.remove(r.inactiveButtonClass),e.disabled=!1))}function d(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault()})),function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);f(r,n,e),r.forEach((function(o){o.addEventListener("input",(function(){o.classList.add("input-touched"),s(t,o,e),f(r,n,e)})),o.addEventListener("focus",(function(){p(t,o,e)})),o.addEventListener("blur",(function(){o.value.length>0&&(o.classList.add("input-touched"),s(t,o,e))}))}))}(e,t)}))}function h(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);r.forEach((function(r){r.setCustomValidity(""),p(t,r,e),r.classList.remove("input-touched")})),f(r,n,e)}function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(){v=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),c=new M(n||[]);return o(a,"_invoke",{value:C(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var f="suspendedStart",d="suspendedYield",h="executing",m="completed",_={};function b(){}function x(){}function g(){}var w={};l(w,a,(function(){return this}));var L=Object.getPrototypeOf,S=L&&L(L(B([])));S&&S!==r&&n.call(S,a)&&(w=S);var E=g.prototype=b.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function r(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==y(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function C(e,r,n){var o=f;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=D(c,n);if(u){if(u===_)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var l=p(e,r,n);if("normal"===l.type){if(o=n.done?m:d,l.arg===_)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function D(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,D(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,_;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,_):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,_)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function B(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(y(e)+" is not iterable")}return x.prototype=g,o(E,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:x,configurable:!0}),x.displayName=l(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},k(q.prototype),l(q.prototype,c,(function(){return this})),e.AsyncIterator=q,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new q(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),l(E,u,"Generator"),l(E,a,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=B,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,_):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:B(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),_}},e}function m(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function _(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){m(i,n,o,a,c,"next",t)}function c(t){m(i,n,o,a,c,"throw",t)}a(void 0)}))}}d({formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"error_active"});var b={url:"https://nomoreparties.co/v1",headers:{authorization:"b2d1cf23-76fd-4183-b665-dc4c4fcbeb86","Content-Type":"application/json"}},x=function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))},g=function(){var t=_(v().mark((function t(e,r,n){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(b.url,"/").concat("wff-cohort-15","/").concat(e),{method:r,headers:b.headers,body:JSON.stringify(n)}).then(x));case 1:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),w=function(){var t=_(v().mark((function t(e,r){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",g("user/me","PATCH",{name:e,about:r}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),L=document.querySelector(".places__list");t.forEach((function(t){L.append(c(t,u,l,T))}));var S=document.querySelector(".popup_type_edit"),E=S.querySelector(".popup__form"),k=S.querySelector(".popup__input_type_name"),q=S.querySelector(".popup__input_type_description"),C=document.querySelector(".profile__edit-button"),D=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),j=S.querySelector(".popup__button");C.addEventListener("click",(function(){k.value=D.textContent,q.value=A.textContent,h(S,V),e(S)})),E.addEventListener("submit",(function(t){t.preventDefault(),D.textContent=k.value,A.textContent=q.value,j.textContent="Сохранение...",j.disabled=!0,w(k,q).then((function(t){D.textContent=t.name,q.textContent=t.about,h(S,V)})).catch((function(t){console.log("Ошибка при редактировании данных профиля:",t)})).finally((function(){j.textContent="Сохранить",j.disabled=!1,n(S)}))}));var M=document.querySelector(".popup_type_new-card"),B=M.querySelector(".popup__form"),G=M.querySelector(".popup__input_type_card-name"),H=B.querySelector(".popup__input_type_url");document.querySelector(".profile__add-button").addEventListener("click",(function(){h(M,V),e(M)})),B.addEventListener("submit",(function(t){t.preventDefault();var e={link:H.value,name:G.value};L.prepend(c(e,u,l,T)),B.reset(),h(M,V),n(M)}));var O=document.querySelector(".popup_type_image"),N=document.querySelector(".popup__image"),P=document.querySelector(".popup__caption");function T(t){N.src=t.link,N.alt=t.name,P.textContent=t.name,e(O)}document.querySelectorAll(".popup__close").forEach((function(t){t.addEventListener("click",(function(){n(t.closest(".popup_is-opened"))}))}));var V={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"error_active"};d(V);var Y=document.querySelector(".profile__image"),F=document.querySelector(".popup_type_avatar");Y.addEventListener("click",(function(){h(F,V),e(F)}))})()})();