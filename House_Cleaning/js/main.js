document.addEventListener("DOMContentLoaded", () => {

  /* LOCATION DROPDOWN */
  const locationBtn = document.getElementById("locationBtn");
  const locationMenu = document.getElementById("locationMenu");
  const selectedCity = document.getElementById("selectedCity");

  if (locationBtn) {
    locationBtn.addEventListener("click", () => {
      locationMenu.style.display =
        locationMenu.style.display === "block" ? "none" : "block";
    });
  }

  document.addEventListener("click", (e) => {
    if (!locationBtn?.contains(e.target) && !locationMenu?.contains(e.target)) {
      locationMenu.style.display = "none";
    }
  });

  /* FAQ ACCORDION */
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".icon");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      faqItems.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".icon").textContent = "+";
      });

      if (!isOpen) {
        item.classList.add("active");
        icon.textContent = "−";
      }
    });
  });

  /* ENQUIRY SCROLL HIDE */
  let lastScrollY = window.scrollY;
  const enquiryBtn = document.querySelector(".enquiry-float");

  window.addEventListener("scroll", () => {
    if (!enquiryBtn) return;
    enquiryBtn.style.opacity =
      window.scrollY > lastScrollY ? "0" : "1";
    lastScrollY = window.scrollY;
  });

});

  const track = document.getElementById("sliderTrack");
  const dotsContainer = document.getElementById("sliderDots");
  const cards = document.querySelectorAll(".testimonial-card");

  let cardsPerView = window.innerWidth <= 600 ? 1 : window.innerWidth <= 1024 ? 2 : 4;
  let totalSlides = Math.ceil(cards.length / cardsPerView);
  let currentIndex = 0;

  function createDots() {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("button");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => moveSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function moveSlide(index) {
    const slideWidth = track.clientWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;

    document.querySelectorAll(".slider-dots button").forEach((d, i) => {
      d.classList.toggle("active", i === index);
    });
  }

  createDots();

  window.addEventListener("resize", () => {
    cardsPerView = window.innerWidth <= 600 ? 1 : window.innerWidth <= 1024 ? 2 : 4;
    totalSlides = Math.ceil(cards.length / cardsPerView);
    createDots();
    moveSlide(0);
  });
