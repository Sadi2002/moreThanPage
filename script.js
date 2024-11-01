const headerDesktop = document.querySelector(".header__desktop");

function toggleActiveMenu() {
  if (window.innerWidth >= 992 && window.scrollY >= 100) {
    headerDesktop.classList.add("active-menu");
  } else {
    headerDesktop.classList.remove("active-menu");
  }
}

window.addEventListener("scroll", toggleActiveMenu);
window.addEventListener("resize", toggleActiveMenu);
