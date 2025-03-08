document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      to_name: "Nvtai24",
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    console.log("Sending data to backend:", formData);

    // Send data to backend
    fetch("https://nvtai-portfolio-backend.vercel.app/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your message has been sent successfully!",
          });
          form.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed!",
            text: "Failed to send email. Please try again!",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "An error occurred. Please check your internet connection and try again!",
        });
      });
  });
});
