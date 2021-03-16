const nodemailer = require("nodemailer");
require('dotenv').config();

const sendEmail = async (email) => {

  //use test acct to send email
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail(email);

}

module.exports = sendEmail;