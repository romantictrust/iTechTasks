const nodemailer = require('nodemailer');

// The credentials for the email account you want to send mail from.
const credentials = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    // These environment variables will be pulled from the .env file
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};

// Getting Nodemailer all setup with the credentials for when the 'sendEmail()'
// function is called.
const transporter = nodemailer.createTransport(credentials);

// exporting an 'async' function here allows 'await' to be used
// as the return value of this function.
module.exports = async (to, content) => {
  // The from and to addresses for the email that is about to be sent.
  const contacts = {
    from: process.env.MAIL_USER,
    to,
  };

  // Combining the content and contacts into a single object that can
  // be passed to Nodemailer.
  const email = { ...content, ...contacts };
  await transporter.sendMail(email);
};
