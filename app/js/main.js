(()=>{"use strict";var e,o,t;e=document.querySelector(".hamburger-menu"),o=document.querySelector(".modal-hamburger-menu"),t=document.querySelector(".close-btn"),o.querySelector("[name=login]"),o.querySelector("[name=password]"),localStorage.getItem("login"),document.querySelector(".js-open-map"),document.querySelector(".modal-content-map"),document.querySelector(".modal-content-close"),e.addEventListener("click",(function(t){t.preventDefault(),o.classList.add("modal-content-show"),e.classList.add("modal-content-no-show")})),t.addEventListener("click",(function(t){t.preventDefault(),o.classList.remove("modal-content-show"),e.classList.contains("modal-content-no-show")&&e.classList.remove("modal-content-no-show"),console.log("Нажали хрестик")})),window.addEventListener("keydown",(function(t){27===t.keyCode&&o.classList.contains("modal-content-show")&&(o.classList.remove("modal-content-show"),e.classList.add("modal-content-show")),console.log("??????????")})),console.log("нажали клавішу Esc")})();
//# sourceMappingURL=main.js.map
