const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .header__btns", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".story__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".story__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".story__content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".story__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".story__content .story__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".client__image img", {
  ...scrollRevealOption,
  origin: "right",
});

const swiper = new Swiper(".swiper", {
  loop: true,
});


const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.getElementById("loginModal");

    loginBtn.addEventListener("click", () => {
      loginModal.classList.toggle("active");
    });


// sort
document.getElementById("brandFilter").addEventListener("change", filterWatches);
        document.getElementById("sortPrice").addEventListener("change", sortWatches);

        function filterWatches() {
            const value = document.getElementById("brandFilter").value.toLowerCase();
            document.querySelectorAll(".watches__card").forEach(card => {
                const name = card.querySelector("h4").innerText.toLowerCase();
                card.style.display = value === "all" || name.includes(value) ? "block" : "none";
            });
        }

        function sortWatches() {
            const value = document.getElementById("sortPrice").value;
            const cards = Array.from(document.querySelectorAll(".watches__card"));
            const container = document.querySelector(".watches__grid");

            cards.sort((a, b) => {
                const priceA = parseFloat(a.querySelector("p").innerText.replace("$", ""));
                const priceB = parseFloat(b.querySelector("p").innerText.replace("$", ""));
                if (value === "asc") return priceA - priceB;
                if (value === "desc") return priceB - priceA;
                return 0;
                });}


