const { mailer } = require("../config/emailClient");
const { env } = require("../config/envs");



const sendIdeaSubmissionResponseMail = ({to}) => {
    const mailOptions = {
      from: env.MAILER_ID, // Sender's email address
      to: to, // Recipient's email address
      subject: "Hello from Node.js", // Email subject
      text: "This is a test email sent from Node.js using Nodemailer!", // Plain text body
      html: "<p>This is a <b>test email</b> sent from <i>Node.js</i> using Nodemailer!</p>", // HTML body (optional)
    };

    // Send the email
    mailer.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
}

module.exports = {sendIdeaSubmissionResponseMail}