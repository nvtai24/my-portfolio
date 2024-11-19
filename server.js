require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint gửi email
app.post("/send-email", async (req, res) => {
  const { to_name, from_name, from_email, message } = req.body;

  console.log("Received data from frontend:", req.body);

  try {
    // Gửi yêu cầu tới API EmailJS
    const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_USER_ID, // Public Key
      accessToken: process.env.EMAILJS_PRIVATE_KEY, // Private Key
      template_params: {
        to_name,
        from_name,
        from_email,
        message,
      },
    });

    console.log("Email sent successfully:", response.data);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error.response?.data || error.message);
    res.status(500).send("Failed to send email.");
  }
});

// Khởi chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
