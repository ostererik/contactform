// Simple form validation and submission handling
document.getElementById("contactForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const status = document.getElementById("formStatus");
  const emailField = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Basic email validation
  if (!emailRegex.test(emailField.value)) {
    status.textContent = "Please enter a valid email address.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Sending...";
  status.style.color = "black";

  // Replace with your form endpoint (Formspree, Getform, etc.)
  const form = event.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      status.textContent = "Message sent successfully!";
      status.style.color = "green";
      form.reset();
    } else {
      throw new Error("Network response was not ok.");
    }
  } catch (error) {
    status.textContent = "There was a problem sending your message.";
    status.style.color = "red";
  }
});
