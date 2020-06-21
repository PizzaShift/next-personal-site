import nodemailer from "nodemailer";

export default async function contact(req, res) {
  if (req.method === "POST") {
    try {
      const transporter = nodemailer.createTransport({
        host: "email-smtp.us-east-1.amazonaws.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PSWD,
        },
      });
      await transporter.sendMail({
        from: `"Your website" <dakota.lewallen17@gmail.com>`,
        to: "dakota.lewallen17@gmail.com",
        subject: "Contact Request",
        replyTo: `"${req.body.name}" <${req.body.email}>`,
        text: req.body.message,
        html: req.body.message,
      });
      console.log("sent");

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ success: true }));
    } catch (err) {
      console.error("couldn't send email", err);
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Couldn't complete request" }));
    }
  } else {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Invalid request method." }));
  }
}
