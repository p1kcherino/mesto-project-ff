(()=>{"use strict";function e(e){e.classList.add("popup_is-animated"),setTimeout((function(){e.classList.add("popup_is-opened")}),1),e.addEventListener("click",n),document.addEventListener("keydown",r)}function t(e){e.classList.remove("popup_is-opened"),e.removeEventListener("click",n),document.removeEventListener("keydown",r)}function n(e){e.currentTarget===e.target&&t(e.currentTarget)}function r(e){"Escape"===e.key&&t(document.querySelector(".popup_is-opened"))}var o={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-15",headers:{authorization:"b2d1cf23-76fd-4183-b665-dc4c4fcbeb86","Content-Type":"application/json"}},c=function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))},a=document.querySelector("#card-template").content;function u(e,t,n,r,o){var c=a.querySelector(".card").cloneNode(!0),u=c.querySelector(".card__image"),i=c.querySelector(".card__delete-button"),s=c.querySelector(".card__like-button"),l=c.querySelector(".card__like-count");c.querySelector(".card__title").textContent=e.name;var d=e._id;return u.alt=e.name,u.src=e.link,l.textContent=e.likes.length,e.likes.some((function(e){return e._id===o}))?s.classList.add("card__like-button_is-active"):s.classList.remove("card__like-button_is-active"),i.addEventListener("click",(function(){return t(c,d)})),u.addEventListener("click",(function(){r(e)})),s.addEventListener("click",(function(){n(s,l,d)})),e.owner._id!==o&&i.remove(),c}function i(e,t,n){e.classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(o.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:o.headers}).then(c)}(n).then((function(n){e.classList.remove("card__like-button_is-active"),t.textContent=n.likes.length})):function(e){return fetch("".concat(o.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:o.headers}).then(c)}(n).then((function(n){e.classList.add("card__like-button_is-active"),t.textContent=n.likes.length}))}function s(e,t){(function(e){return fetch("".concat(o.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:o.headers}).then(c)})(t).then((function(){e.remove()}))}function l(e,t,n){var r,o,c,a,u;t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?d(e,t,n):(r=e,o=t,c=t.validationMessage,a=n,(u=r.querySelector("#".concat(o.name,"-error")))&&(o.classList.add(a.inputErrorClass),u.textContent=c,u.classList.add(a.errorClass)))}function d(e,t,n){var r=e.querySelector("#".concat(t.name,"-error"));r&&(t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass))}function p(e,t,n){var r=e.some((function(e){return!e.validity.valid}));t&&(r?(t.classList.add(n.inactiveButtonClass),t.disabled=!0):(t.classList.remove(n.inactiveButtonClass),t.disabled=!1))}function f(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);p(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){o.classList.add("input-touched"),l(e,o,t),p(n,r,t)})),o.addEventListener("focus",(function(){d(e,o,t)})),o.addEventListener("blur",(function(){o.value.length>0&&(o.classList.add("input-touched"),l(e,o,t))}))}))}(t,e)}))}function _(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){n.setCustomValidity(""),d(e,n,t),n.classList.remove("input-touched")})),p(n,r,t)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}f({formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"error_active"});var v=document.querySelector(".places__list"),y=document.querySelector(".popup_type_new-card"),h=document.querySelector(".popup_type_avatar"),b=document.querySelector(".popup_type_image"),S=y.querySelector(".popup__form"),L=document.forms["new-place"],q=document.forms["profile-edit-avatar"],E=L.elements["place-name"],C=document.querySelector(".popup__image"),k=document.querySelector(".popup__caption"),g=q.querySelector(".popup__input_type_url"),x=document.querySelector(".popup_type_edit"),A=x.querySelector(".popup__input_type_name"),T=x.querySelector(".popup__input_type_description"),U=x.querySelector(".popup__form"),w=document.querySelector(".profile__title"),O=document.querySelector(".profile__edit-button"),j=document.querySelector(".profile__description"),B=document.querySelector(".profile__add-button"),D=document.querySelector(".profile__image"),P=L.elements.link,I=L.querySelector(".popup__button"),M=x.querySelector(".popup__button"),N=document.querySelectorAll(".popup__close"),J=h.querySelector(".popup__button"),V="";function H(e,t){e?t.textContent="Сохранение...":e||(t.textContent="Сохранить")}function z(t){C.src=t.link,C.alt=t.name,k.textContent=t.name,e(b)}Promise.all([fetch("".concat(o.baseUrl,"/users/me"),{headers:o.headers}).then(c),fetch("".concat(o.baseUrl,"/cards"),{headers:o.headers}).then(c)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];V=o._id,w.textContent=o.name,j.textContent=o.about,D.setAttribute("style","background-image: url('".concat(o.avatar,"')")),c.forEach((function(e){var t=u(e,s,i,z,V);v.append(t)}))})).catch((function(e){console.log("Ошибка при получении данных:",e)})),U.addEventListener("submit",(function(e){var n,r;e.preventDefault(),H(!0,M),(n=A.value,r=T.value,fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:n,about:r})}).then(c)).then((function(e){w.textContent=e.name,j.textContent=e.about,_(x,$),t(x),U.reset()})).catch((function(e){console.log("Oшибка при изменении информации профиля:",e)})).finally((function(){H(!1,M)}))})),S.addEventListener("submit",(function(e){e.preventDefault();var n,r={link:P.value,name:E.value};H(!0,I),(n=r,fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify(n,undefined)}).then(c)).then((function(e){var n=u(e,s,i,z,V);v.prepend(n),t(y),L.reset()})).catch((function(e){console.log("Oшибка при добавлении карточки:",e)})).finally((function(){H(!1,I)}))})),q.addEventListener("submit",(function(e){var n;e.preventDefault(),H(!0,J),(n=g.value,fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:n})}).then(c)).then((function(e){D.style.backgroundImage="url(".concat(e.avatar,")"),t(h),q.reset()})).finally((function(){H(!1,J)})),_(h,$)}));var $={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"error_active"};f($),O.addEventListener("click",(function(){A.value=w.textContent,T.value=j.textContent,_(x,$),e(x)})),D.addEventListener("click",(function(){e(h)})),N.forEach((function(e){e.addEventListener("click",(function(){t(e.closest(".popup_is-opened"))}))})),B.addEventListener("click",(function(){_(y,$),e(y)}))})();