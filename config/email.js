require("dotenv").config();
const nodemailer = require("nodemailer");
const { secret } = require("./secret");

// sendEmail using async/await
module.exports.sendEmail = async (body, res, message) => {
  const transporter = nodemailer.createTransport({
    host: secret.email_host,
    service: secret.email_service, //comment this line if you use custom server/domain
    port: secret.email_port,
    secure: true,
    auth: {
      user: secret.email_user,
      pass: secret.email_pass,
    },
  });

  try {
    console.log("Sending email...");
    // Verify transporter
    await transporter.verify();
    console.log("Server is ready to send messages");

    // Send email
    await transporter.sendMail(body);

    // Respond if successful
    res.send({ message });
  } catch (err) {
    // Error handling
    res.status(403).send({ message: `Email error: ${err.message}` });
    console.error(`Email error: ${err.message}`);
  }
};
