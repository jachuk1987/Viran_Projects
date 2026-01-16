const toggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "block" ? "none" : "block";
});

const testimonials = [
  {
    text: "Excellent service! My home looks brand new after deep cleaning.",
    author: "Ramesh"
  },
  {
    text: "Very professional team and timely service.",
    author: "Anita"
  },
  {
    text: "Highly recommended for home and office cleaning.",
    author: "Suresh"
  }
];

let testimonialIndex = 0;

setInterval(() => {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;

  document.getElementById("testimonial-text").textContent =
    testimonials[testimonialIndex].text;

  document.getElementById("testimonial-author").textContent =
    "– " + testimonials[testimonialIndex].author;
}, 4000);
