document.addEventListener("DOMContentLoaded", function () {

  // 1. Selecteer het formulier en het succesbericht
  const form = document.querySelector(".nieuwsbrief-form");
  const successMessage = document.querySelector(".success-message");

  // 2. Wacht tot dat er wordt geklikt op de submit-knop
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // voorkomt verversen van de pagina

    // 3. Toon de succesmelding
    successMessage.classList.add("show");
  });

});
