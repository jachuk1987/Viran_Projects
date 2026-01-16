const toggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "block" ? "none" : "block";
});

