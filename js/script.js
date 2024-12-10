const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rates = document.getElementById("rates");
const rating = document.querySelectorAll(".rating span");

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

rating.forEach((rate) => {
  rate.addEventListener("click", () => {
    rates.innerHTML = rate.innerHTML;
  });
});
