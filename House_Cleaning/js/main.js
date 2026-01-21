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

function openLocation() {
  document.getElementById("locationModal").style.display = "flex";
}

function closeLocation() {
  document.getElementById("locationModal").style.display = "none";
}

window.onclick = function (e) {
  const modal = document.getElementById("locationModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

let lastScrollY = window.scrollY;
const enquiryBtn = document.querySelector('.enquiry-float');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    enquiryBtn.style.opacity = '0';
  } else {
    enquiryBtn.style.opacity = '1';
  }
  lastScrollY = window.scrollY;
});

function changeLocation() {
  const city = document.getElementById("citySelect").value;
  const map = document.getElementById("mapFrame");

  if (city === "bangalore") {
    map.src = "https://maps.google.com/maps?q=Bangalore&t=&z=13&output=embed";
  }
  if (city === "hyderabad") {
    map.src = "https://maps.google.com/maps?q=Hyderabad&t=&z=13&output=embed";
  }
  if (city === "chennai") {
    map.src = "https://maps.google.com/maps?q=Chennai&t=&z=13&output=embed";
  }
}
