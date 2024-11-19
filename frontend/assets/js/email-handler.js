document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  console.log("EMAILJS_USER_ID:", process.env.EMAILJS_USER_ID);
  console.log("EMAILJS_SERVICE_ID:", process.env.EMAILJS_SERVICE_ID);
  console.log("EMAILJS_TEMPLATE_ID:", process.env.EMAILJS_TEMPLATE_ID);
  console.log("EMAILJS_PRIVATE_KEY:", process.env.EMAILJS_PRIVATE_KEY);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      to_name: "Nvtai24",
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    console.log("Sending data to backend:", formData);

    // Gửi dữ liệu tới backend
    fetch("https://nvtai-portfolio-backend.vercel.app/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Email sent successfully!");
          form.reset();
        } else {
          alert("Failed to send email.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred.");
      });
  });
});
