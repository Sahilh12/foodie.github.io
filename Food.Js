const hamburgerMenu = document.querySelector(".hamburger-menu");
const haederContent = document.querySelector(".header-content");
const closeIcon = document.querySelector(".close-icon");
const goTop = document.querySelector(".go-to-top");
const mainContent = document.querySelector(".main-overflow");
const main = document.querySelector("main");
const nav = document.querySelector("nav");

hamburgerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  haederContent.classList.add("menu-open");
});
haederContent.addEventListener("click", (e) => {
  e.stopPropagation();
});
closeIcon.addEventListener("click", () => {
  haederContent.classList.remove("menu-open");
});

window.addEventListener("click", (e) => {
  haederContent.classList.remove("menu-open");
});
