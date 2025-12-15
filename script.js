document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page refresh

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {
      // Show temporary success message
      const successMsg = document.createElement("div");
      successMsg.textContent = "Message sent successfully! ✅";
      successMsg.style.backgroundColor = "#4a90e2";
      successMsg.style.color = "#fff";
      successMsg.style.padding = "10px 15px";
      successMsg.style.borderRadius = "8px";
      successMsg.style.textAlign = "center";
      successMsg.style.marginTop = "10px";
      form.appendChild(successMsg);

      // Clear the form
      form.reset();

      // Remove the success message after 3 seconds
      setTimeout(() => successMsg.remove(), 3000);
    } else {
      alert("Please fill in all fields.");
    }
  });
});
