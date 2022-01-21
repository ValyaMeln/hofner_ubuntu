export function asd() {
    let hamburger_menu = document.querySelector(".hamburger-menu");
    let popup = document.querySelector(".modal-hamburger-menu");
    let close = document.querySelector(".close-btn");
    // let form = popup.querySelector("form");
    let login = popup.querySelector("[name=login]");
    let password = popup.querySelector("[name=password]");
    let storage = localStorage.getItem("login");

    let mapOpen = document.querySelector('.js-open-map');
    let mapPopup = document.querySelector(".modal-content-map");
    let mapClose = document.querySelector(".modal-content-close");

    hamburger_menu.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        hamburger_menu.classList.add("modal-content-no-show");
    });

    close.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.remove('modal-content-show');
        {
            if(hamburger_menu.classList.contains("modal-content-no-show")){
                (hamburger_menu.classList.remove("modal-content-no-show"));
            }
        }
        console.log("Нажали хрестик");
    });

    window.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
            if (popup.classList.contains("modal-content-show")) {
                popup.classList.remove("modal-content-show");
                // hamburger_menu.classList.add("modal-content-no-show");
                hamburger_menu.classList.add("modal-content-show");
            }
        }
        console.log("??????????");
    })
    console.log('нажали клавішу Esc')
}