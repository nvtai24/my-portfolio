require("dotenv").config();
const axios = require("axios");

module.exports = async (req, res) => {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "https://nvtai24-portfolio.vercel.app/"); 
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    const { to_name, from_name, from_email, message } = req.body;

    console.log("Received data from frontend:", req.body);

    try {
      const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_USER_ID,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: { to_name, from_name, from_email, message },
      });

      console.log("Email sent successfully:", response.data);
      res.setHeader("Access-Control-Allow-Origin", "*"); // Cho phép truy cập từ frontend
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error.response?.data || error.message);
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(500).json({ message: "Failed to send email." });
    }
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
