const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error-message");
const container_1 = document.querySelector(".container");
const container_2 = document.querySelector(".container-2");
const userEmailDisplay = document.getElementById("user-email"); 
const dismissButton = document.getElementById("dismiss-btn");

// Function to validate email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      // Show error state
      emailInput.classList.add("error");
      errorMessage.style.visibility = "visible";
    } else {
        // If valid, proceed to success state
        emailInput.classList.remove("error");
        errorMessage.style.visibility = "hidden";

        // Show success message
        container_1.classList.add("hide");
        container_2.classList.remove("hide");

        userEmailDisplay.textContent = email;
    }
});

// Handle dismiss button click
dismissButton.addEventListener("click", () => {
  container_2.classList.add("hide");
  container_1.classList.remove("hide");

  emailInput.value = "";
});

// Listen for input changes to reset error state
emailInput.addEventListener("input", () => {
  if (emailInput.classList.contains("error")) {
      emailInput.classList.remove("error");
      errorMessage.style.visibility = "hidden";
  }
});
