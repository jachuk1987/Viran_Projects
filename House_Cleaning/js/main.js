// function openLocation() {
//   document.getElementById("locationModal").style.display = "flex";
// }

// function closeLocation() {
//   document.getElementById("locationModal").style.display = "none";
// }

const locationBtn = document.getElementById("locationBtn");
const locationMenu = document.getElementById("locationMenu");
const selectedCity = document.getElementById("selectedCity");

locationBtn.addEventListener("click", () => {
  locationMenu.style.display =
    locationMenu.style.display === "block" ? "none" : "block";
});

locationMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    selectedCity.textContent = e.target.dataset.city;
    locationMenu.style.display = "none";
  }
});

document.addEventListener("click", (e) => {
  if (!locationBtn.contains(e.target) && !locationMenu.contains(e.target)) {
    locationMenu.style.display = "none";
  }
});

