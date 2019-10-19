const preloader = document.querySelector(".preloader");

window.addEventListener("load", removeLoader);

function removeLoader() {
    preloader.classList.add("preloader-finish");
}