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

/* SATISFIED CLIENTS */
const track = document.getElementById("sliderTrack");
const cards = document.querySelectorAll(".card");
const dotsContainer = document.getElementById("dots");

const visibleCards = 4;
const totalSlides = Math.ceil(cards.length / visibleCards);
let index = 0;

// Create dots
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => moveSlide(i));
  dotsContainer.appendChild(dot);
}

function moveSlide(i) {
  const cardWidth = cards[0].offsetWidth + 20;
  track.style.transform = `translateX(-${i * cardWidth * visibleCards}px)`;
  index = i;

  document.querySelectorAll(".dots span").forEach((d, idx) => {
    d.classList.toggle("active", idx === i);
  });
}

// Auto slide every 5 sec
setInterval(() => {
  index = (index + 1) % totalSlides;
  moveSlide(index);
}, 5000);
