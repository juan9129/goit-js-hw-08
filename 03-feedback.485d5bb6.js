!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var n=r("1WSnx"),o=document.querySelector(".feedback-form"),l=o.querySelector('input[name="email"]'),i=o.querySelector('textarea[name="message"]');o.addEventListener("input",(0,n.throttle)((function(){var e={email:l.value,message:i.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),window.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=e?JSON.parse(e):{},a=t.email,r=t.message;l.value=a,i.value=r}})),o.addEventListener("submit",(function(e){e.preventDefault();var t={email:l.value,message:i.value};localStorage.removeItem("feedback-form-state"),l.value="",i.value="",console.log(t)}))}();
//# sourceMappingURL=03-feedback.485d5bb6.js.map
