import nodemailer from "nodemailer";

const escapeHtml = (str = "") => {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const stripHeaderBreaks = (str = "") => {
  return String(str).replace(/(\r|\n)/g, " ").trim();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { name, phone, email, content } = req.body || {};

    const safeName = stripHeaderBreaks(name) || "Webseiten-Besucher";
    const safePhone = stripHeaderBreaks(phone);
    const safeEmail = stripHeaderBreaks(email);
    const safeContent = escapeHtml(content);

    const receivedAt = new Date().toLocaleString("de-DE", {
      timeZone: "Europe/Berlin",
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.strato.de",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASS
      }
    })

    const subject = `[Kontakt] Neue Nachricht von ${safeName}` + (safePhone ? ` — ${safePhone}` : "");
    const preheader = `Nachricht von ${safeName}${safePhone ? ` · ${safePhone}` : ""}${safeEmail ? ` · ${safeEmail}` : ""}`;

    const html = `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(subject)}</title>
    <style>
      .preheader { display:none !important; visibility:hidden; opacity:0; color:transparent; height:0; width:0; overflow:hidden; mso-hide:all; }
      @media (prefers-color-scheme: dark) {
        .bg { background-color: #0b0b0b !important; }
        .card { background-color: #111111 !important; border-color: #222222 !important; }
        .text { color: #e5e7eb !important; }
        .muted { color: #9ca3af !important; }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background:#f3f4f6;" class="bg">
    <span class="preheader">${escapeHtml(preheader)}</span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6; padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
            <!-- Header -->
            <tr>
              <td style="padding:16px 20px; background:#0ea5e9; color:#ffffff; font-family:Arial, Helvetica, sans-serif; font-size:18px; font-weight:bold; border-radius:12px 12px 0 0;">
                Neue Nachricht von ${escapeHtml(safeName)}
              </td>
            </tr>

            <!-- Card -->
            <tr>
              <td class="card" style="background:#ffffff; border:1px solid #e5e7eb; border-top:0; border-radius:0 0 12px 12px; overflow:hidden;">
                <!-- Meta -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:16px 20px; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#6b7280;" class="muted">
                      Eingegangen: ${escapeHtml(receivedAt)}
                    </td>
                  </tr>
                </table>

                <!-- Details -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:0 20px 4px; font-family:Arial, Helvetica, sans-serif; font-size:14px; color:#374151;" class="text">
                      <strong>Kontaktdaten</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 20px 12px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="font-family:Arial, Helvetica, sans-serif; font-size:14px; color:#374151;">
                        <tr>
                          <td style="padding:6px 0; width:110px; color:#6b7280;" class="muted">Name</td>
                          <td style="padding:6px 0;">${escapeHtml(safeName)}</td>
                        </tr>
                        ${safeEmail ? `
                        <tr>
                          <td style="padding:6px 0; color:#6b7280;" class="muted">E-Mail</td>
                          <td style="padding:6px 0;"><a href="mailto:${escapeHtml(safeEmail)}" style="color:#0ea5e9; text-decoration:none;">${escapeHtml(safeEmail)}</a></td>
                        </tr>` : ``}
                        ${safePhone ? `
                        <tr>
                          <td style="padding:6px 0; color:#6b7280;" class="muted">Telefon</td>
                          <td style="padding:6px 0;"><a href="tel:${escapeHtml(safePhone)}" style="color:#0ea5e9; text-decoration:none;">${escapeHtml(safePhone)}</a></td>
                        </tr>` : ``}
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Nachricht -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:0 20px; font-family:Arial, Helvetica, sans-serif; font-size:14px; color:#374151;" class="text"><strong>Nachricht</strong></td>
                  </tr>
                  <tr>
                    <td style="padding:10px 20px 16px;">
                      <div style="font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:1.6; color:#111827; background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:14px; white-space:pre-wrap;">
                        ${safeContent}
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- CTA -->
                ${safeEmail ? `
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:0 20px 24px;">
                      <a href="mailto:${escapeHtml(safeEmail)}" style="display:inline-block; background:#0ea5e9; color:#ffffff; font-family:Arial, Helvetica, sans-serif; font-size:14px; text-decoration:none; padding:12px 16px; border-radius:8px;">
                        Antwort an ${escapeHtml(safeName)}
                      </a>
                    </td>
                  </tr>
                </table>` : ``}
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:10px 4px; text-align:center; font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#9ca3af;">
                Diese E-Mail wurde über das Kontaktformular Ihrer Website gesendet.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim()

    const text = [
      `Neue Nachricht von ${safeName}`,
      safeEmail ? `E-Mail: ${safeEmail}` : null,
      safePhone ? `Telefon: ${safePhone}` : null,
      `Eingegangen: ${receivedAt}`,
      "",
      "Nachricht:",
      content || "",
    ].filter(Boolean).join("\n");

    await transporter.sendMail({
      from: `"Xsportwagen-Kontaktformular" <${process.env.SMTP_MAIL}>`,
      to: process.env.SMTP_MAIL,
      replyTo: safeEmail ? `"${safeName}" <${safeEmail}>` : undefined,
      subject,
      text,
      html,
      headers: {
        "X-Entity-Ref-ID": Date.now().toString(),
      }
    })
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Failed to send" });
  }
}