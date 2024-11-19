require("dotenv").config();
const axios = require("axios");

module.exports = async (req, res) => {
  if (req.method === "POST") {
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
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error.response?.data || error.message);
      res.status(500).json({ message: "Failed to send email." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};