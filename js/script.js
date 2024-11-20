const headerDesktop = document.querySelector(".header__desktop");
const headerMobile = document.querySelector(".header__mobile");
const upBtn = document.querySelector(".up");

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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitButton");

  // Funkcja do sprawdzenia, czy wszystkie wymagane pola są uzupełnione
  function checkForm() {
    // Sprawdzamy, czy formularz jest poprawny
    const isFormValid = form.checkValidity();
    submitButton.disabled = !isFormValid;
  }

  // Nasłuchujemy zmiany wartości we wszystkich polach formularza
  form.addEventListener("input", checkForm);
});

const scrollTop = () => {
  if (window.innerWidth >= 320 && window.scrollY >= 200) {
    upBtn.classList.add("show");
  } else {
    upBtn.classList.remove("show");
  }
};

window.addEventListener("scroll", scrollTop);
window.addEventListener("resize", scrollTop);

/* ---- particles.js config ---- */

particlesJS("body", {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#f1f1f1",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
