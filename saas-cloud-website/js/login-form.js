

document.addEventListener("DOMContentLoaded", function () {
  
  const passwordInput = document.getElementById("password");
  const toggleButton = document.getElementById("toggle-password");

  if (toggleButton && passwordInput) {
    toggleButton.addEventListener("click", function () {
      const isHidden = passwordInput.type === "password";
      passwordInput.type = isHidden ? "text" : "password";
      toggleButton.textContent = isHidden ? "Hide" : "Show";
    });
  }

  const form = document.getElementById("login-form");
  const statusMessage = document.getElementById("login-status");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
      statusMessage.textContent = "Please enter both your email and password.";
      statusMessage.className = "mt-4 text-sm font-medium text-red-600";
      return;
    }
    statusMessage.textContent = "Logging you in...";
    statusMessage.className = "mt-4 text-sm font-medium text-gray-600";
  });
});
