const headerDesktop = document.querySelector(".header__desktop");
const headerMobile = document.querySelector(".header__mobile");

function toggleActiveMenu() {
  if (window.innerWidth >= 320 && window.scrollY >= 100) {
    headerDesktop.classList.add("active-menu");
    headerMobile.classList.add("active-menu");
  } else {
    headerDesktop.classList.remove("active-menu");
    headerMobile.classList.remove("active-menu");
  }
}

window.addEventListener("scroll", toggleActiveMenu);
window.addEventListener("resize", toggleActiveMenu);

toggleActiveMenu();
