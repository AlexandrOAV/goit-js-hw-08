function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var r,o,i,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,u=setTimeout(j,t),c?y(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function j(){var e=v();if(h(e))return w(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,i-(e-l)):n}(e))}function w(e){return u=void 0,g&&r?y(e):(r=o=void 0,a)}function O(){var e=v(),n=h(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},O.flush=function(){return void 0===u?a:w(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector("input"),S=document.querySelector("textarea"),h=document.querySelector(".feedback-form");h.addEventListener("input",e(t)((function(){let e={email:y.value,massage:S.value};return function(e){let t=JSON.stringify(e);localStorage.setItem("feedback-form-state",t);localStorage.getItem("feedback-form-state")}(e),e}),500)),h.addEventListener("submit",(function(e){e.preventDefault();const t={email:y.value,massage:S.value};console.log("User:",t),y.value="",S.value="",localStorage.removeItem("feedback-form-state")})),function(){let e=localStorage.getItem("feedback-form-state");try{let t=JSON.parse(e);if(!t)return;y.value=t.email,S.value=t.massage}catch(e){console.error("Initial data error "),localStorage.clear("feedback-form-state")}}();
//# sourceMappingURL=03-feedback.cded665c.js.map
