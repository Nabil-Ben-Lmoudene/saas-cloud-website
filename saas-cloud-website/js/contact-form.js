

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const statusMessage = document.getElementById("form-status");

  if (!form) return; 

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      statusMessage.textContent = "Please fill in every field before sending.";
      statusMessage.className = "mt-4 text-sm font-medium text-red-600";
      return;
    }
    statusMessage.textContent = "Thanks " + name + "! Your message has been sent.";
    statusMessage.className = "mt-4 text-sm font-medium text-green-600";
    form.reset();
  });
});
