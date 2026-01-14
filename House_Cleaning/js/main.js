document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Our team will contact you soon.");
  this.reset();
});
