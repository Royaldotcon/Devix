document.addEventListener("DOMContentLoaded", () => {
  /*=============== SHOW MENU ===============*/
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  /*=============== REMOVE MENU MOBILE ===============*/
  document.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  });

  /*=============== DARK LIGHT THEME (FIXED) ===============*/
  const themeButton = document.getElementById("theme-button");
  const darkTheme = "dark-theme";

  if (themeButton) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add(darkTheme);
      themeButton.classList.replace("ri-moon-fill", "ri-sun-fill");
    }

    themeButton.addEventListener("click", () => {
      document.body.classList.toggle(darkTheme);

      themeButton.classList.toggle("ri-sun-fill");
      themeButton.classList.toggle("ri-moon-fill");

      localStorage.setItem(
        "theme",
        document.body.classList.contains(darkTheme) ? "dark" : "light"
      );
    });
  }

});


/*=============== FAQ ACCORDION ===============*/
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq__question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});




/*=============== FLOATING TOOLS ===============*/
const floatingToggle = document.getElementById("floatingToggle");
const floatingMenu = document.getElementById("floatingMenu");

floatingToggle.addEventListener("click", () => {
  floatingMenu.classList.toggle("active");
  floatingToggle.classList.toggle("active");
});


/*=============== PAGE REVEAL ON LOAD ===============*/
/*=============== SCROLL REVEAL ON VIEW ===============*/
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target); // animate once
      }
    });
  },
  {
    threshold: 0.15,       // when 15% visible
    rootMargin: "0px 0px -50px 0px"
  }
);

revealElements.forEach(el => revealObserver.observe(el));





