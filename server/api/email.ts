import nodemailer from "nodemailer";

const config = useRuntimeConfig();

export default defineEventHandler((event) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: config.email,
      pass: config.pass,
    },
  });

  // Define the email details
  const content = {
    subject: "Test Subject",
    text: "asdasdasdasdasd",
    html: "<p>HTML version of the email body</p>",
  };

  const mailOptions = {
    from: config.email,
    to: config.email,
  };

  //combine content and mailoptions
  const options = {
    ...content,
    ...mailOptions,
  };

  transporter.sendMail(options, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
});
