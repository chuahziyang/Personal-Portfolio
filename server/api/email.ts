import nodemailer from "nodemailer";

const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  try {
    const { subject, text, html } = useQuery(event);

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

    const mailOptions = {
      from: config.email,
      to: config.email,
    };

    const options = {
      subject,
      text,
      html,
      ...mailOptions,
    };

    console.log(options);

    const info = await transporter.sendMail(options);
    console.log(info + "asd");
    return true;
  } catch (error) {
    console.log(error + "asd");
    return false;
  }
});
