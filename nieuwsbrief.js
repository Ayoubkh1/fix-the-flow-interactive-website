
document.addEventListener("DOMContentLoaded", function () {

  // 1. Selecteer het formulier en het succesbericht
  const form = document.querySelector(".nieuwsbrief-form");
  const successMessage = document.querySelector(".success-message");

  // 2. Wacht tot dat er wordt geklikt op de submit-knop
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // 4. Formulier wordt verborgen na het verzenden 
    form.classList.add("hidden");

    // 5. Succesmelding wordt op de pagina getoond
    successMessage.classList.add("show");
  });

});
