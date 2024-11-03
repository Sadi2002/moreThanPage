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

const faqBoxes = document.querySelectorAll(".faq__boxes__box");

faqBoxes.forEach((box) => {
  const question = box.querySelector(".faq__boxes__question");
  const answer = box.querySelector(".faq__boxes__answear");

  question.addEventListener("click", () => {
    if (box.classList.contains("show")) {
      answer.style.height = "0";
      box.classList.remove("show");
    } else {
      // Resetujemy wszystkie inne aktywne elementy, aby tylko jedno było otwarte
      faqBoxes.forEach((otherBox) => {
        otherBox.classList.remove("show");
        otherBox.querySelector(".faq__boxes__answear").style.height = "0";
      });

      // Ustawiamy wysokość elementu na jego pełną wysokość
      answer.style.height = answer.scrollHeight + "px";
      box.classList.add("show");
    }
  });
});
