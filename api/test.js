import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { name, phone, email, content } = req.body || {};

    const transporter = nodemailer.createTransport({
      host: "smtp.strato.de",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_USER
      }
    })

    await transporter.sendMail({
      from: `${email}`,
      to: process.env.SMTP_MAIL,
      replyTo: email,
      subject: `Neue Nachricht von ${name} - ${phone}`,
      text: content,
      html: `<p>${content.replace(/</g, "&lt;")}</p>`,
    })
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Failed to send" });
  }
}