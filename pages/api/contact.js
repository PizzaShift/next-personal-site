import nodemailer from "nodemailer";
import AWS from "aws-sdk";
const region = "us-east-1";
const secretName = "ContactFormKeys";

// Create a Secrets Manager client
const client = new AWS.SecretsManager({
  region: region,
});

export default async function contact(req, res) {
  if (req.method === "POST") {
    try {
      const secretValue = await client
        .getSecretValue({ SecretId: secretName })
        .promise();
      const credentials = JSON.parse(secretValue.SecretString);
      const transporter = nodemailer.createTransport({
        host: "email-smtp.us-east-1.amazonaws.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: credentials.SMTP_USER,
          pass: credentials.SMTP_PSWD,
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
