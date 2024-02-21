const menuBtn = document.getElementById("menu-btn"),
  navLinks = document.getElementById("nav-links"),
  menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const faq = document.querySelector(".faq__grid");
faq.addEventListener("click", (e) => {
  const target = e.target;
  const faqCard = target.closest(".faq__card");
  if (target.classList.contains("ri-arrow-down-s-line")) {
    if (faqCard.classList.contains("active")) {
      faqCard.classList.remove("active");
    } else {
      Array.from(faq.children).forEach((i) => {
        i.classList.remove("active");
      });
      faqCard.classList.add("active");
    }
  }
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .header__flex", {
  ...scrollRevealOption,
  delay: 750,
});

ScrollReveal().reveal(".faq__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".article__card", {
  ...scrollRevealOption,
  interval: 500,
});
